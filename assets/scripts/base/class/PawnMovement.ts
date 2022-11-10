

import { mathMacro as kismit } from './DevelopersToolGlobal';
export default class PawnMovement {
    constructor(context: cc.Node) {
        this.context = context;
        this.arrivePosition = context.getPosition();
    }

    protected context: cc.Node = null;

    // TAG position                                                                                                 

    /**
     * 到达目标
     */
    protected _arrivePosition: cc.Vec3;
    /**
     * 获取到达目标
     */
    public get arrivePosition(): cc.Vec3 {
        return this._arrivePosition;
    }
    /**
     * 设置到达目标
     */
    public set arrivePosition(value: cc.Vec3 | cc.Vec2) {
        if (value instanceof cc.Vec2)
            this._arrivePosition = new cc.Vec3(value.x, value.y, 0);
        else
            this._arrivePosition = value;
    }
    /**
     * 添加到达目标偏移量
     */
    public set addArrivePosition(offset: cc.Vec3 | cc.Vec2) {
        if (offset instanceof cc.Vec2)
            this._arrivePosition = this._arrivePosition.add(new cc.Vec3(offset.x, offset.y, 0));
        else
            this._arrivePosition = this._arrivePosition.add(offset);
    }


    // TAG move range setting                                                                                       

    /**
     * 边界定义内容
     */
    protected fixedBound = {
        // 边界有效性
        valid: false,
        // 边界原点
        origin: new cc.Vec3(0),
        // 边界范围
        extent: new cc.Vec3(0),
        // 边界对齐
        align: new cc.Vec3(0),
        // 圆心边界半径
        radius: 0,
    };

    /**
     * 设置边界
     * @param {*} extent 
     * @param {*} origin 
     * @param {*} align
     * @param {*} valid 
     * @returns 
     */
    public setFixedBound = function (extent: cc.Vec3 | cc.Vec2, origin: cc.Vec3 | cc.Vec2, align: cc.Vec3 | cc.Vec2, valid: Boolean) {
        this.fixedBound.extent = extent instanceof cc.Vec2 ? new cc.Vec3(extent.x, extent.y, 0) : extent;
        this.fixedBound.origin = origin instanceof cc.Vec2 ? new cc.Vec3(origin.x, origin.y, 0) : origin;
        this.fixedBound.align = align instanceof cc.Vec2 ? new cc.Vec3(align.x, align.y, 0) : align;
        this.fixedBound.valid = valid ? valid : this.fixedBound.valid;
        return this;
    };

    /**
     * 限制输入矢量在方形边界内
     * @param {*} vector 
     * @returns 
     */
    protected inBoxBound = function (vector: cc.Vec3) {
        let out = vector;
        if (this.fixedBound.valid) {
            out.x = kismit.clamp(out.x, this.fixedBound.extent.x, this.fixedBound.align.x, this.fixedBound.origin.x);
            out.y = kismit.clamp(out.y, this.fixedBound.extent.y, this.fixedBound.align.y, this.fixedBound.origin.y);
            out.z = kismit.clamp(out.z, this.fixedBound.extent.z, this.fixedBound.align.z, this.fixedBound.origin.z);
        }
        return out;
    }

    // TAG velocity & movement base                                                                                 

    // SIGNPOST 通用移动属性                                                                                         

    protected _lastVelocity = new cc.Vec3(0);
    public get lastVelocity(): cc.Vec3 { return this._lastVelocity; };
    public set lastVelocity(velocity: cc.Vec3) { this._lastVelocity = velocity; };
    /**
     * 当前速度
     * 不建议直接调用，而是使用它的方法:
     * velocity 直接设置速度
     * addVelocity 直接添加速度
     * 直接添加速度并不利于物体运动模拟，应当先进行力的添加:
     * input 添加移动输入
     * force 添加力
     * 计算时需要注意，除非需要将计算值保存在此，否则不可以使用链式运算。
     */
    protected _velocity = new cc.Vec3(0);
    public get velocity(): cc.Vec3 { return this._velocity; };
    /**
     * 设置速度
     * @param {vec} velocity 
     */
    public set velocity(velocity: cc.Vec3 | cc.Vec2) {
        if (velocity instanceof cc.Vec2)
            this._velocity = new cc.Vec3(velocity.x, velocity.y, 0);
        else
            this._velocity = velocity;
    };
    /**
     * 添加速度
     * @param {vec} velocity 
     */
    public set addVelocity(velocity) {
        if (velocity instanceof cc.Vec2)
            this._velocity = this._velocity.add(new cc.Vec3(velocity.x, velocity.y, 0));
        else
            this._velocity = this._velocity.add(velocity);
    };

    /**
     * 加速度限制
     */
    protected _accelerationLimit: number = 9999;
    /**
     * 获取最大速度
     */
    public get accelerationLimit(): number { return this._accelerationLimit; };
    /**
     * 设置最大速度
     * @param {*} speed 
     */
    public set accelerationLimit(limit: number) { this._accelerationLimit = limit };

    /**
     * 当前模式下最大移动速度
     */
    protected _maxSpeed: number = 1000;

    /**
     * 获取最大速度
     */
    public get maxSpeed(): number { return this._maxSpeed; };
    /**
     * 设置最大速度
     * @param {*} speed 
     */
    public set maxSpeed(speed) { this.maxSpeed = speed || this.maxSpeed; };

    /**
     * 当前物理力
     */
    protected _physicforce = new cc.Vec3(0);
    /**
     * 获取物理力
     * @returns 
     */
    public get force(): cc.Vec3 { return this._physicforce };
    /**
     * 设置物理力
     */
    public set force(force: cc.Vec3 | cc.Vec2) {
        if (force instanceof cc.Vec2)
            this._physicforce = new cc.Vec3(force.x, force.y, 0);
        else
            this._physicforce = force;
    };
    /**
     * 添加物理力
     */
    public set addforce(force: cc.Vec3 | cc.Vec2) {
        if (force instanceof cc.Vec2)
            this._physicforce = this._physicforce.add(new cc.Vec3(force.x, force.y, 0));
        else
            this._physicforce = this._physicforce.add(force);
    };

    /**
     * 当前物理阻力
     */
    protected _physicDrag: number = 1;
    /**
     * 获取物理阻力
     * @returns 
     */
    public get drag() { return Math.max(this._physicDrag, 0) };
    /**
     * 设置物理阻力
     */
    public set drag(drag: number) { this._physicDrag = Math.max(drag, 0); };

    /**
     * 持久力/阻力
     * 该属性会在每次更新时自动加入到物理力中
     * 不论当前是否已经加入物理力
     * 这可以用于 风，引力等属性
     * 
     * 当不需要持久力时需要设置为 undefined
     * 这可以通过其设置方法来完成，不需要手动赋值
     */

    /**
     * 持久力
     * 请不要直接设置持久力，而是使用它的方法：
     * setPermForce() 设置持久力
     * getPermForce() 获取持久力
     * @param {Vec3} permanentForce
     */
    protected _permanentForce: cc.Vec3 | undefined = undefined;
    /**
     * 设置持久力
     * @param {Vec3} vec 当不需要持久力时设置为undefined可以直接关闭
     */
    public set permForce(force: cc.Vec3 | cc.Vec2 | undefined) {
        if (force) {
            if (force instanceof cc.Vec2)
                this._permanentForce = new cc.Vec3(force.x, force.y, 0);
            else
                this._permanentForce = force;
        }
        else
            this._permanentForce = undefined;
    };
    /**
     * 获取持久力 
     * @returns 
     */
    public get permForce(): cc.Vec3 { return this._permanentForce };

    /**
     * 持久阻力
     * 如果不需要使用持久阻力，请设置为undefined
     */
    protected _permanentDrag: number | undefined = undefined;
    /**
     * 设置持久阻力
     * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
     * @returns 
     */
    public set permDrag(drag: number | undefined) {
        if (drag) this._permanentDrag = undefined;
        else this._permanentDrag = Math.max(drag, 0);
    };
    /**
     * 获取持久阻力
     */
    public get permDrag() { return Math.max(this._permanentDrag, 0) };

    /**
     * 质量
     */
    protected _mass: number = 1;
    /**
     * 获取质量
     * @returns 
     */
    public get mass() { return Math.max(this.mass, .001) };
    /**
     * 设置质量
     * @returns 
     */
    public set mass(value) { this._mass = Math.max(value, .001) };

    /**
     * 重力方向
     */
    protected _gravity: cc.Vec3 = new cc.Vec3(0, 0, -980);
    /**
     * 设置重力方向
     * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
     * @returns 
     */
    public set gravity(gravity: cc.Vec3 | cc.Vec2) {
        if (gravity instanceof cc.Vec2)
            this._gravity = new cc.Vec3(gravity.x, gravity.y, 0);
        else
            this._gravity = gravity;
    };
    /**
     * 获取重力方向
     */
    public get gravity(): cc.Vec3 { return this._gravity };

    /**
     * 重力标度
     */
    protected _gravityScale: number = 1;
    /**
     * 获取重力标度
     * @returns 
     */
    public get gravityScale() { return this._gravityScale };
    /**
     * 设置重力标度
     */
    public set gravityScale(value: number) { this._gravityScale = value };


    /**
     * 制动摩擦力因子
     */
    protected _brakingFrictionFactor: number = 2;
    /**
     * 获取制动摩擦力因子
     * @returns 
     */
    public get brakingFrictionFactor(): number { return this._brakingFrictionFactor };
    /**
     * 设置制动摩擦力因子
     */
    public set brakingFrictionFactor(value: number) { this._brakingFrictionFactor = value };

    /**
     * 制动摩擦力
     */
    protected _brakingFriction: number = 0;
    /**
     * 获取制动摩擦力
     * @returns 
     */
    public get brakingFriction(): number { return this._brakingFriction };
    /**
     * 设置制动摩擦力
     */
    public set brakingFriction(value: number) { this._brakingFrictionFactor = value };

    /**
     * 制动降速
     */
    protected _brakingDeceleration = 2048;
    /**
     * 获取制动降速
     * @returns 
     */
    public get brakingDeceleration(): number { return this._brakingDeceleration };
    /**
     * 设置制动降速
     */
    public set brakingDeceleration(value: number) { this._brakingDeceleration = value };

    // SIGNPOST 用户力输入                                                                                           

    /**
     * 添加移动输入
     * @param {Vec3} direction 方向，默认认为是为单位向量，
     * @param {Number} scale 
     */
    public addInput(direction: cc.Vec3 | cc.Vec2, scale?: number) {
        this.force = direction instanceof cc.Vec2 ? new cc.Vec3(direction.x, direction.y, 0) : direction;
        this.force.mul(this.maxSpeed * (scale || 1));
        return this;
    };

    /**
     * 添加重力
     */
    public set addGravity(scale) {
        this.force = this.force.add(this.gravity.mul(this.mass));
    };

    /**
     * 添加阻力
     * @param {*} drag 
     * @returns 
     */
    public set addDrag(drag: number) {
        this.drag = drag + this.drag;
    };

    // SIGNPOST 更新获取                                                                                             

    /**
     * 重力加速度
     */
    accelerationDue = new cc.Vec3(0);

    // SIGNPOST 函数宏库                                                                                           
    // SIGNPOST 解算阶段                                                                                           

    /**
     * 这是一个内部方法
     * 将持久力加入到物理力中
     */
    addPermanentForceToPhysic() {
        // 添加持久力
        if (this.permForce != undefined)
            this.force.add(this.permForce);
        // 添加持久阻力
        this.drag = this.permDrag === undefined ? this.drag : this.permDrag + this.drag;
    };

    /**
     * 这是一个内部方法
     * 判断当前移动组件是否完全静止
     * @returns 
     */
    canMove() {
        return !(cc.Vec3.equals(this.force, cc.Vec3.ZERO) && cc.Vec3.equals(this.velocity, cc.Vec3.ZERO));
    };

    // SIGNPOST 双流传动式移动载具 - 解算阶段                                                                        

    /**
     * 速度向前
     * 要使用此方法进行移动，需要在其他任意阶段内向此移动组件添加力
     * 
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    // public velocityForward(dt, rotateRate) {
    //     let slip = kismit.vec2Dot(kismit.rotationToVec2(this.context.rotation), kismit.normaliz2(this.velocity));
    //     slip = (slip - 1) / 2; // 面向时为0，背向时为-2
    // };

    // TAG 移动更新函数                                                                                             

    // SIGNPOST 移动更新函数 - 径直-到达点                                                                           

    /**
    * 更新到计算位置
    * 这个方法会自行移动到 this.arrivePosition
    * 使用此方法将无视阻力与重力，径直按照指定速度平移过去
    * 
    * @param {Number} dt deltatime 与当前帧率绑定，必要项目
    * @param {Number} speed 执行速度，缺省maxSpeed
    * @param {Number} th 距离过零阈值，缺省1
    */
    public updateToPosition(dt, th, speed) {
        let conPos = this.context.getPosition();
        let pos = conPos instanceof cc.Vec2 ? new cc.Vec3(conPos.x, conPos.y, 0) : conPos
        let moveVector = this.arrivePosition.sub(pos);
        let movelength = cc.Vec3.len(moveVector);

        if (movelength > (th || 1)) {
            let unit = moveVector.div(movelength);
            let move = unit.mul(Math.min((speed || this.maxSpeed) * dt, movelength));
            this.context.setPosition(this.inBoxBound(move.add(pos)));
        }
        return this;
    };

    // SIGNPOST 移动更新函数 - 双流传动式移动载具-到达点                                                               

    // fix                
    /**
     * 将向前轴面向位置移动
     * 这个方法会自行移动到 this.arrivePosition
     * 使用此方法将无视阻力与重力移动
     * 移动的同时会将自身角度朝向移动方向
     * 可以通过指定
     */
    // updateToWardPostion() {

    // };


    // SIGNPOST 移动更新函数 - 基本速度驱动                                                                           

    /**
     * 由速度驱动更新
     * 要使用此方法进行移动，需要在其他任意阶段内向此移动组件添加力
     * 
     * 可以响应瞬时力： addForce(), addDrag(), addInput()
     * 
     * 可以响应持久力： permanentForce, permanentDrag
     * 
     * 比如在默认情况下，不会实现阻力，你的移动就像是在无重力环境下一样
     * 而想要模仿走路或是其他移动模式，需要在此更新事件之前或是之后添加一份力/阻力
     * 在通常情况下，你不需要担心添加 力/阻力 执行顺序会造成计算失误
     * 因为这是由单一环路构成的移动模式
     * 
     * 关于模拟阶段更新：
     * 你可以在同一帧或是生命周期的不同阶段内多次进行更新
     * 但一般都是因为迭代时对数据的实时性要求较高，需要反复进行更新，
     * 但使用更新函数进行迭代会造成速度流逝
     * 所以推荐自行对节点坐标进行迭代，而后统一进行驱动更新
     * 
     * 如果迭代会造成速度错位，可以获取重力加速度，将速度转为动能
     * 减淡原始速度，而后在更新前将动能返回给力即可
     * 
     * 例如铁链仿真，就可以对每节铁链进行一次运动更新，
     * 而后进行动能转换，将每节铁链的坐标向前一个进行约束仿真，比如当前的速度设定下迭代30次
     * 仿真完毕后重新赋能，或是将动能计算为其他粒子效果。
     * 
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    public updateByVelocity(dt: number): PawnMovement {
        this.addPermanentForceToPhysic();
        if (this.canMove()) {
            this.lastVelocity = this.velocity.clone();
            this.force
                .div(this.mass);
            let incomingDrag = this.drag * dt + 1;
            this.accelerationDue = this.velocity.div(incomingDrag);
            let outVelocity = this.force.mul(dt);
            outVelocity
                .add(this.velocity).div(incomingDrag);
            let outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.maxSpeed ?
                outVelocity : outVelocity
                    .mul(this.maxSpeed)
                    .div(outVelocityLength);
            outVelocity
                .sub(this.lastVelocity)
            outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.accelerationLimit ?
                outVelocity : outVelocity
                    .mul(this.accelerationLimit)
                    .div(outVelocityLength);
            outVelocity
                .add(this.lastVelocity);
            this.velocity = new cc.Vec3(outVelocity);
            let newPostion = this.context.getPosition();
            this.context
                .setPosition(this.velocity
                    .mul(dt)
                    .add(newPostion instanceof cc.Vec2 ? new cc.Vec3(newPostion.x, newPostion.y, 0) : newPostion)
                );
        }
        this.force.set(cc.Vec3.ZERO);
        this.drag = 0;
        return this;
    };

    // SIGNPOST 移动更新函数 - 简易力驱动                                                                             

    // fix                
    /**
     * 由力驱动更新
     * 
     * 一般情况下并不推荐使用，这仅仅只是为了高效率而产生的
     * 如果需要实现PBD，光滑核等函数，请使用updateByVelocity()
     * 
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    // updateByforce = function (dt) {
    //     this.addPermanentForceToPhysic();
    // };

}

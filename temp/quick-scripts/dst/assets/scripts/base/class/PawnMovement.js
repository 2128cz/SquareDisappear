
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/PawnMovement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32087ASkt9CBbFwJno3IBwU', 'PawnMovement');
// scripts/base/class/PawnMovement.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("./DevelopersToolGlobal");
var PawnMovement = /** @class */ (function () {
    function PawnMovement(context) {
        this.context = null;
        // TAG move range setting                                                                                       
        /**
         * 边界定义内容
         */
        this.fixedBound = {
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
        this.setFixedBound = function (extent, origin, align, valid) {
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
        this.inBoxBound = function (vector) {
            var out = vector;
            if (this.fixedBound.valid) {
                out.x = DevelopersToolGlobal_1.mathMacro.clamp(out.x, this.fixedBound.extent.x, this.fixedBound.align.x, this.fixedBound.origin.x);
                out.y = DevelopersToolGlobal_1.mathMacro.clamp(out.y, this.fixedBound.extent.y, this.fixedBound.align.y, this.fixedBound.origin.y);
                out.z = DevelopersToolGlobal_1.mathMacro.clamp(out.z, this.fixedBound.extent.z, this.fixedBound.align.z, this.fixedBound.origin.z);
            }
            return out;
        };
        // TAG velocity & movement base                                                                                 
        // SIGNPOST 通用移动属性                                                                                         
        this._LastVelocity = new cc.Vec3(0);
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
        this._Velocity = new cc.Vec3(0);
        /**
         * 加速度限制
         */
        this._AccelerationLimit = 9999;
        /**
         * 当前模式下最大移动速度
         */
        this._MaxSpeed = 1000;
        /**
         * 当前物理力
         */
        this._Physicforce = new cc.Vec3(0);
        /**
         * 当前物理阻力
         */
        this._PhysicDrag = 1;
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
        this._PermanentForce = undefined;
        /**
         * 持久阻力
         * 如果不需要使用持久阻力，请设置为undefined
         */
        this._PermanentDrag = undefined;
        /**
         * 质量
         */
        this._Mass = 1;
        /**
         * 重力方向
         */
        this._Gravity = new cc.Vec3(0, 0, -980);
        /**
         * 重力标度
         */
        this._GravityScale = 1;
        /**
         * 制动摩擦力因子
         */
        this._BrakingFrictionFactor = 2;
        /**
         * 制动摩擦力
         */
        this._BrakingFriction = 0;
        /**
         * 制动降速
         */
        this._BrakingDeceleration = 2048;
        // SIGNPOST 更新获取                                                                                             
        /**
         * 重力加速度
         */
        this.accelerationDue = new cc.Vec3(0);
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
        this.updateByforce = function (dt) {
            this.addPermanentForceToPhysic();
        };
        this.context = context;
        this.arrivePosition = context.getPosition();
    }
    Object.defineProperty(PawnMovement.prototype, "arrivePosition", {
        /**
         * 获取到达目标
         */
        get: function () {
            return this._arrivePosition;
        },
        /**
         * 设置到达目标
         */
        set: function (value) {
            if (value instanceof cc.Vec2)
                this._arrivePosition = new cc.Vec3(value.x, value.y, 0);
            else
                this._arrivePosition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PawnMovement.prototype, "addArrivePosition", {
        /**
         * 添加到达目标偏移量
         */
        set: function (offset) {
            if (offset instanceof cc.Vec2)
                this._arrivePosition = this._arrivePosition.add(new cc.Vec3(offset.x, offset.y, 0));
            else
                this._arrivePosition = this._arrivePosition.add(offset);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PawnMovement.prototype, "lastVelocity", {
        get: function () { return this._LastVelocity; },
        set: function (velocity) { this._LastVelocity = velocity; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "velocity", {
        get: function () { return this._Velocity; },
        /**
         * 设置速度
         * @param {vec} velocity
         */
        set: function (velocity) {
            if (velocity instanceof cc.Vec2)
                this._Velocity = new cc.Vec3(velocity.x, velocity.y, 0);
            else
                this._Velocity = velocity;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "addVelocity", {
        /**
         * 添加速度
         * @param {vec} velocity
         */
        set: function (velocity) {
            if (velocity instanceof cc.Vec2)
                this._Velocity = this._Velocity.add(new cc.Vec3(velocity.x, velocity.y, 0));
            else
                this._Velocity = this._Velocity.add(velocity);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "accelerationLimit", {
        /**
         * 获取最大速度
         */
        get: function () { return this._AccelerationLimit; },
        /**
         * 设置最大速度
         * @param {*} speed
         */
        set: function (limit) { this._AccelerationLimit = limit; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "maxSpeed", {
        /**
         * 获取最大速度
         */
        get: function () { return this._MaxSpeed; },
        /**
         * 设置最大速度
         * @param {*} speed
         */
        set: function (speed) { this._MaxSpeed = speed || this._MaxSpeed; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "force", {
        /**
         * 获取物理力
         * @returns
         */
        get: function () { return this._Physicforce; },
        /**
         * 设置物理力
         */
        set: function (force) {
            if (force instanceof cc.Vec2)
                this._Physicforce = new cc.Vec3(force.x, force.y, 0);
            else
                this._Physicforce = force;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "addforce", {
        /**
         * 添加物理力
         */
        set: function (force) {
            if (force instanceof cc.Vec2)
                this._Physicforce = this._Physicforce.add(new cc.Vec3(force.x, force.y, 0));
            else
                this._Physicforce = this._Physicforce.add(force);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "drag", {
        /**
         * 获取物理阻力
         * @returns
         */
        get: function () { return Math.max(this._PhysicDrag, 0); },
        /**
         * 设置物理阻力
         */
        set: function (drag) { this._PhysicDrag = Math.max(drag, 0); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "permForce", {
        /**
         * 获取持久力
         * @returns
         */
        get: function () { return this._PermanentForce; },
        /**
         * 设置持久力
         * @param {Vec3} vec 当不需要持久力时设置为undefined可以直接关闭
         */
        set: function (force) {
            if (force) {
                if (force instanceof cc.Vec2)
                    this._PermanentForce = new cc.Vec3(force.x, force.y, 0);
                else
                    this._PermanentForce = force;
            }
            else
                this._PermanentForce = undefined;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "validpermForce", {
        get: function () { return this._PermanentForce ? true : false; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "permDrag", {
        /**
         * 获取持久阻力
         */
        get: function () { return Math.max(this._PermanentDrag || 0, 0); },
        /**
         * 设置持久阻力
         * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
         * @returns
         */
        set: function (drag) {
            if (drag <= 0)
                this._PermanentDrag = undefined;
            else
                this._PermanentDrag = Math.max(drag, 0);
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "validPermDrag", {
        get: function () { return typeof this._PermanentDrag == 'number'; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "mass", {
        /**
         * 获取质量
         * @returns
         */
        get: function () { return Math.max(this._Mass, .001); },
        /**
         * 设置质量
         * @returns
         */
        set: function (value) { this._Mass = Math.max(value, .001); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "gravity", {
        /**
         * 获取重力方向
         */
        get: function () { return this._Gravity; },
        /**
         * 设置重力方向
         * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
         * @returns
         */
        set: function (gravity) {
            if (gravity instanceof cc.Vec2)
                this._Gravity = new cc.Vec3(gravity.x, gravity.y, 0);
            else
                this._Gravity = gravity;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "gravityScale", {
        /**
         * 获取重力标度
         * @returns
         */
        get: function () { return this._GravityScale; },
        /**
         * 设置重力标度
         */
        set: function (value) { this._GravityScale = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingFrictionFactor", {
        /**
         * 获取制动摩擦力因子
         * @returns
         */
        get: function () { return this._BrakingFrictionFactor; },
        /**
         * 设置制动摩擦力因子
         */
        set: function (value) { this._BrakingFrictionFactor = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingFriction", {
        /**
         * 获取制动摩擦力
         * @returns
         */
        get: function () { return this._BrakingFriction; },
        /**
         * 设置制动摩擦力
         */
        set: function (value) { this._BrakingFrictionFactor = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingDeceleration", {
        /**
         * 获取制动降速
         * @returns
         */
        get: function () { return this._BrakingDeceleration; },
        /**
         * 设置制动降速
         */
        set: function (value) { this._BrakingDeceleration = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    // SIGNPOST 用户力输入                                                                                           
    /**
     * 添加移动输入
     * @param {Vec3} direction 方向，默认认为是为单位向量，
     * @param {Number} scale
     */
    PawnMovement.prototype.addInput = function (direction, scale) {
        this.force = direction instanceof cc.Vec2 ? new cc.Vec3(direction.x, direction.y, 0) : direction;
        this.force = this.force.mul(this.maxSpeed * (scale || 1));
        return this;
    };
    ;
    Object.defineProperty(PawnMovement.prototype, "addGravity", {
        /**
         * 添加重力
         */
        set: function (scale) {
            this.force = this.force.add(this.gravity.mul(this.mass));
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "addDrag", {
        /**
         * 添加阻力
         * @param {*} drag
         * @returns
         */
        set: function (drag) {
            this.drag = drag + this.drag;
        },
        enumerable: false,
        configurable: true
    });
    ;
    // SIGNPOST 函数宏库                                                                                           
    // SIGNPOST 解算阶段                                                                                           
    /**
     * 这是一个内部方法
     * 将持久力加入到物理力中
     */
    PawnMovement.prototype.addPermanentForceToPhysic = function () {
        // 添加持久力
        if (this.validpermForce) {
            this.force = this.force.add(this.permForce);
        }
        // 添加持久阻力 
        this.drag = !this.validPermDrag ? this.drag : (this.permDrag + this.drag);
    };
    ;
    Object.defineProperty(PawnMovement.prototype, "canMove", {
        /**
         * 这是一个内部方法
         * 判断当前移动组件是否完全静止
         * @returns
         */
        get: function () {
            return !(cc.Vec3.equals(this.force, cc.Vec3.ZERO) && cc.Vec3.equals(this.velocity, cc.Vec3.ZERO));
        },
        enumerable: false,
        configurable: true
    });
    ;
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
    PawnMovement.prototype.updateToPosition = function (dt, th, speed) {
        var conPos = this.context.getPosition();
        var pos = conPos instanceof cc.Vec2 ? new cc.Vec3(conPos.x, conPos.y, 0) : conPos;
        var moveVector = this.arrivePosition.sub(pos);
        var movelength = cc.Vec3.len(moveVector);
        if (movelength > (th || 1)) {
            var unit = moveVector.div(movelength);
            var move = unit.mul(Math.min((speed || this.maxSpeed) * dt, movelength));
            this.context.setPosition(this.inBoxBound(move.add(pos)));
        }
        return this;
    };
    ;
    // SIGNPOST 移动更新函数 - 双流传动式移动载具-到达点                                                               
    // fix                
    /**
     * 将向前轴面向位置移动
     * 这个方法会自行移动到 this.arrivePosition
     * 使用此方法将无视阻力与重力移动
     * 移动的同时会将自身角度朝向移动方向
     * 可以通过指定
     */
    PawnMovement.prototype.updateToWardPostion = function () {
    };
    ;
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
     * 而想要模仿走路或是其他移动模式，需要在此更新事件之前或是之后添加一份力/阻力。
     * 在通常情况下，你不需要担心添加 力/阻力 执行顺序会造成计算失误
     * 因为这是由单一环路构成的移动模式
     *
     * 关于模拟阶段更新：
     * 你可以在同一帧或是生命周期的不同阶段内多次进行更新
     * 但使用更新函数进行迭代会造成速度流逝
     * 所以推荐自行对节点坐标进行迭代，而后统一进行驱动更新
     *
     * 如果迭代会造成速度错位，可以获取重力加速度，将速度转为动能
     * 减淡原始速度，而后在更新前将动能返回给力即可
     *
     * 例如铁链仿真，就可以对每节铁链进行一次运动更新，
     * 而后进行动能转换，将每节铁链的坐标向前一个进行约束仿真，比如进行迭代仿真30次
     * 仿真完毕后重新赋能，或是将动能计算为其他粒子效果。
     *
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    PawnMovement.prototype.updateByVelocity = function (dt) {
        this.addPermanentForceToPhysic();
        if (this.canMove) {
            this.lastVelocity = this.velocity.clone();
            // 应用质量
            this.force = this.force.div(this.mass);
            // 计算阻力
            var incomingDrag = this.drag * dt + 1;
            // 重力加速度
            this.accelerationDue = this.velocity.div(incomingDrag);
            // 应用力到速度
            var outVelocity = this.force.mul(dt);
            outVelocity = outVelocity.add(this.velocity).div(incomingDrag);
            // 限制
            var outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.maxSpeed ? outVelocity : outVelocity.mul(this.maxSpeed).div(outVelocityLength);
            outVelocity = outVelocity.sub(this.lastVelocity);
            outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.accelerationLimit ? outVelocity : outVelocity.mul(this.accelerationLimit).div(outVelocityLength);
            outVelocity = outVelocity.add(this.lastVelocity);
            // 新速度
            this.velocity = new cc.Vec3(outVelocity);
            var newPostion = this.context.getPosition();
            // 设置坐标
            this.context.setPosition(this.velocity.mul(dt).add(newPostion instanceof cc.Vec2 ? new cc.Vec3(newPostion.x, newPostion.y, 0) : newPostion));
        }
        this.force.set(cc.Vec3.ZERO);
        this.drag = 0;
        return this;
    };
    ;
    return PawnMovement;
}());
exports.default = PawnMovement;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhd25Nb3ZlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLCtEQUE2RDtBQUM3RDtJQUNJLHNCQUFZLE9BQWdCO1FBS2xCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFrQ2xDLGdIQUFnSDtRQUVoSDs7V0FFRztRQUNPLGVBQVUsR0FBRztZQUNuQixRQUFRO1lBQ1IsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPO1lBQ1AsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztZQUNQLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87WUFDUCxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixTQUFTO1lBQ1QsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUY7Ozs7Ozs7V0FPRztRQUNJLGtCQUFhLEdBQUcsVUFBVSxNQUF5QixFQUFFLE1BQXlCLEVBQUUsS0FBd0IsRUFBRSxLQUFjO1lBQzNILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNq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QyxDQUFDLENBQUM7U0FDaEo7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7SUFpQk4sbUJBQUM7QUFBRCxDQTdoQkEsQUE2aEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IG1hdGhNYWNybyBhcyBraXNtaXQgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF3bk1vdmVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuYXJyaXZlUG9zaXRpb24gPSBjb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnRleHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFRBRyBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIsOi+vuebruagh1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2Fycml2ZVBvc2l0aW9uOiBjYy5WZWMzO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliLDovr7nm67moIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhcnJpdmVQb3NpdGlvbigpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJyaXZlUG9zaXRpb247XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWIsOi+vuebruagh1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFycml2ZVBvc2l0aW9uKHZhbHVlOiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycml2ZVBvc2l0aW9uID0gbmV3IGNjLlZlYzModmFsdWUueCwgdmFsdWUueSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDliLDovr7nm67moIflgY/np7vph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGRBcnJpdmVQb3NpdGlvbihvZmZzZXQ6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKG9mZnNldCBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycml2ZVBvc2l0aW9uID0gdGhpcy5fYXJyaXZlUG9zaXRpb24uYWRkKG5ldyBjYy5WZWMzKG9mZnNldC54LCBvZmZzZXQueSwgMCkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fYXJyaXZlUG9zaXRpb24gPSB0aGlzLl9hcnJpdmVQb3NpdGlvbi5hZGQob2Zmc2V0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gVEFHIG1vdmUgcmFuZ2Ugc2V0dGluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L6555WM5a6a5LmJ5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBmaXhlZEJvdW5kID0ge1xyXG4gICAgICAgIC8vIOi+ueeVjOacieaViOaAp1xyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAvLyDovrnnlYzljp/ngrlcclxuICAgICAgICBvcmlnaW46IG5ldyBjYy5WZWMzKDApLFxyXG4gICAgICAgIC8vIOi+ueeVjOiMg+WbtFxyXG4gICAgICAgIGV4dGVudDogbmV3IGNjLlZlYzMoMCksXHJcbiAgICAgICAgLy8g6L6555WM5a+56b2QXHJcbiAgICAgICAgYWxpZ246IG5ldyBjYy5WZWMzKDApLFxyXG4gICAgICAgIC8vIOWchuW/g+i+ueeVjOWNiuW+hFxyXG4gICAgICAgIHJhZGl1czogMCxcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ovrnnlYxcclxuICAgICAqIEBwYXJhbSB7Kn0gZXh0ZW50IFxyXG4gICAgICogQHBhcmFtIHsqfSBvcmlnaW4gXHJcbiAgICAgKiBAcGFyYW0geyp9IGFsaWduXHJcbiAgICAgKiBAcGFyYW0geyp9IHZhbGlkIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRGaXhlZEJvdW5kID0gZnVuY3Rpb24gKGV4dGVudDogY2MuVmVjMyB8IGNjLlZlYzIsIG9yaWdpbjogY2MuVmVjMyB8IGNjLlZlYzIsIGFsaWduOiBjYy5WZWMzIHwgY2MuVmVjMiwgdmFsaWQ6IEJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmZpeGVkQm91bmQuZXh0ZW50ID0gZXh0ZW50IGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKGV4dGVudC54LCBleHRlbnQueSwgMCkgOiBleHRlbnQ7XHJcbiAgICAgICAgdGhpcy5maXhlZEJvdW5kLm9yaWdpbiA9IG9yaWdpbiBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhvcmlnaW4ueCwgb3JpZ2luLnksIDApIDogb3JpZ2luO1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC5hbGlnbiA9IGFsaWduIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKGFsaWduLngsIGFsaWduLnksIDApIDogYWxpZ247XHJcbiAgICAgICAgdGhpcy5maXhlZEJvdW5kLnZhbGlkID0gdmFsaWQgPyB2YWxpZCA6IHRoaXMuZml4ZWRCb3VuZC52YWxpZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmZDliLbovpPlhaXnn6Lph4/lnKjmlrnlvaLovrnnlYzlhoVcclxuICAgICAqIEBwYXJhbSB7Kn0gdmVjdG9yIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbkJveEJvdW5kID0gZnVuY3Rpb24gKHZlY3RvcjogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBvdXQgPSB2ZWN0b3I7XHJcbiAgICAgICAgaWYgKHRoaXMuZml4ZWRCb3VuZC52YWxpZCkge1xyXG4gICAgICAgICAgICBvdXQueCA9IGtpc21pdC5jbGFtcChvdXQueCwgdGhpcy5maXhlZEJvdW5kLmV4dGVudC54LCB0aGlzLmZpeGVkQm91bmQuYWxpZ24ueCwgdGhpcy5maXhlZEJvdW5kLm9yaWdpbi54KTtcclxuICAgICAgICAgICAgb3V0LnkgPSBraXNtaXQuY2xhbXAob3V0LnksIHRoaXMuZml4ZWRCb3VuZC5leHRlbnQueSwgdGhpcy5maXhlZEJvdW5kLmFsaWduLnksIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4ueSk7XHJcbiAgICAgICAgICAgIG91dC56ID0ga2lzbWl0LmNsYW1wKG91dC56LCB0aGlzLmZpeGVkQm91bmQuZXh0ZW50LnosIHRoaXMuZml4ZWRCb3VuZC5hbGlnbi56LCB0aGlzLmZpeGVkQm91bmQub3JpZ2luLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyB2ZWxvY2l0eSAmIG1vdmVtZW50IGJhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDpgJrnlKjnp7vliqjlsZ7mgKcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIHByb3RlY3RlZCBfTGFzdFZlbG9jaXR5ID0gbmV3IGNjLlZlYzMoMCk7XHJcbiAgICBwdWJsaWMgZ2V0IGxhc3RWZWxvY2l0eSgpOiBjYy5WZWMzIHsgcmV0dXJuIHRoaXMuX0xhc3RWZWxvY2l0eTsgfTtcclxuICAgIHB1YmxpYyBzZXQgbGFzdFZlbG9jaXR5KHZlbG9jaXR5OiBjYy5WZWMzKSB7IHRoaXMuX0xhc3RWZWxvY2l0eSA9IHZlbG9jaXR5OyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3pgJ/luqZcclxuICAgICAqIOS4jeW7uuiuruebtOaOpeiwg+eUqO+8jOiAjOaYr+S9v+eUqOWug+eahOaWueazlTpcclxuICAgICAqIHZlbG9jaXR5IOebtOaOpeiuvue9rumAn+W6plxyXG4gICAgICogYWRkVmVsb2NpdHkg55u05o6l5re75Yqg6YCf5bqmXHJcbiAgICAgKiDnm7TmjqXmt7vliqDpgJ/luqblubbkuI3liKnkuo7niankvZPov5DliqjmqKHmi5/vvIzlupTlvZPlhYjov5vooYzlipvnmoTmt7vliqA6XHJcbiAgICAgKiBpbnB1dCDmt7vliqDnp7vliqjovpPlhaVcclxuICAgICAqIGZvcmNlIOa3u+WKoOWKm1xyXG4gICAgICog6K6h566X5pe26ZyA6KaB5rOo5oSP77yM6Zmk6Z2e6ZyA6KaB5bCG6K6h566X5YC85L+d5a2Y5Zyo5q2k77yM5ZCm5YiZ5LiN5Y+v5Lul5L2/55So6ZO+5byP6L+Q566X44CCXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfVmVsb2NpdHkgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIHB1YmxpYyBnZXQgdmVsb2NpdHkoKTogY2MuVmVjMyB7IHJldHVybiB0aGlzLl9WZWxvY2l0eTsgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0ge3ZlY30gdmVsb2NpdHkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdmVsb2NpdHkodmVsb2NpdHk6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKHZlbG9jaXR5IGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fVmVsb2NpdHkgPSBuZXcgY2MuVmVjMyh2ZWxvY2l0eS54LCB2ZWxvY2l0eS55LCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1ZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDpgJ/luqZcclxuICAgICAqIEBwYXJhbSB7dmVjfSB2ZWxvY2l0eSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGRWZWxvY2l0eSh2ZWxvY2l0eSkge1xyXG4gICAgICAgIGlmICh2ZWxvY2l0eSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX1ZlbG9jaXR5ID0gdGhpcy5fVmVsb2NpdHkuYWRkKG5ldyBjYy5WZWMzKHZlbG9jaXR5LngsIHZlbG9jaXR5LnksIDApKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1ZlbG9jaXR5ID0gdGhpcy5fVmVsb2NpdHkuYWRkKHZlbG9jaXR5KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDpgJ/luqbpmZDliLZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9BY2NlbGVyYXRpb25MaW1pdDogbnVtYmVyID0gOTk5OTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pyA5aSn6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYWNjZWxlcmF0aW9uTGltaXQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0FjY2VsZXJhdGlvbkxpbWl0OyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mnIDlpKfpgJ/luqZcclxuICAgICAqIEBwYXJhbSB7Kn0gc3BlZWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWNjZWxlcmF0aW9uTGltaXQobGltaXQ6IG51bWJlcikgeyB0aGlzLl9BY2NlbGVyYXRpb25MaW1pdCA9IGxpbWl0IH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3mqKHlvI/kuIvmnIDlpKfnp7vliqjpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9NYXhTcGVlZDogbnVtYmVyID0gMTAwMDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pyA5aSn6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbWF4U3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX01heFNwZWVkOyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mnIDlpKfpgJ/luqZcclxuICAgICAqIEBwYXJhbSB7Kn0gc3BlZWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgbWF4U3BlZWQoc3BlZWQpIHsgdGhpcy5fTWF4U3BlZWQgPSBzcGVlZCB8fCB0aGlzLl9NYXhTcGVlZDsgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeeJqeeQhuWKm1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1BoeXNpY2ZvcmNlID0gbmV3IGNjLlZlYzMoMCk7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueJqeeQhuWKm1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZm9yY2UoKTogY2MuVmVjMyB7IHJldHVybiB0aGlzLl9QaHlzaWNmb3JjZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7niannkIbliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBmb3JjZShmb3JjZTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAoZm9yY2UgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IG5ldyBjYy5WZWMzKGZvcmNlLngsIGZvcmNlLnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fUGh5c2ljZm9yY2UgPSBmb3JjZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOeJqeeQhuWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZGZvcmNlKGZvcmNlOiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChmb3JjZSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX1BoeXNpY2ZvcmNlID0gdGhpcy5fUGh5c2ljZm9yY2UuYWRkKG5ldyBjYy5WZWMzKGZvcmNlLngsIGZvcmNlLnksIDApKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1BoeXNpY2ZvcmNlID0gdGhpcy5fUGh5c2ljZm9yY2UuYWRkKGZvcmNlKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3niannkIbpmLvliptcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9QaHlzaWNEcmFnOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bniannkIbpmLvliptcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGRyYWcoKSB7IHJldHVybiBNYXRoLm1heCh0aGlzLl9QaHlzaWNEcmFnLCAwKSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7niannkIbpmLvliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBkcmFnKGRyYWc6IG51bWJlcikgeyB0aGlzLl9QaHlzaWNEcmFnID0gTWF0aC5tYXgoZHJhZywgMCk7IH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIHkuYXlipsv6Zi75YqbXHJcbiAgICAgKiDor6XlsZ7mgKfkvJrlnKjmr4/mrKHmm7TmlrDml7boh6rliqjliqDlhaXliLDniannkIblipvkuK1cclxuICAgICAqIOS4jeiuuuW9k+WJjeaYr+WQpuW3sue7j+WKoOWFpeeJqeeQhuWKm1xyXG4gICAgICog6L+Z5Y+v5Lul55So5LqOIOmjju+8jOW8leWKm+etieWxnuaAp1xyXG4gICAgICogXHJcbiAgICAgKiDlvZPkuI3pnIDopoHmjIHkuYXlipvml7bpnIDopoHorr7nva7kuLogdW5kZWZpbmVkXHJcbiAgICAgKiDov5nlj6/ku6XpgJrov4flhbborr7nva7mlrnms5XmnaXlrozmiJDvvIzkuI3pnIDopoHmiYvliqjotYvlgLxcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyB5LmF5YqbXHJcbiAgICAgKiDor7fkuI3opoHnm7TmjqXorr7nva7mjIHkuYXlipvvvIzogIzmmK/kvb/nlKjlroPnmoTmlrnms5XvvJpcclxuICAgICAqIHNldFBlcm1Gb3JjZSgpIOiuvue9ruaMgeS5heWKm1xyXG4gICAgICogZ2V0UGVybUZvcmNlKCkg6I635Y+W5oyB5LmF5YqbXHJcbiAgICAgKiBAcGFyYW0ge1ZlYzN9IHBlcm1hbmVudEZvcmNlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfUGVybWFuZW50Rm9yY2U6IGNjLlZlYzMgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaMgeS5heWKm1xyXG4gICAgICogQHBhcmFtIHtWZWMzfSB2ZWMg5b2T5LiN6ZyA6KaB5oyB5LmF5Yqb5pe26K6+572u5Li6dW5kZWZpbmVk5Y+v5Lul55u05o6l5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgcGVybUZvcmNlKGZvcmNlOiBjYy5WZWMzIHwgY2MuVmVjMiB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgICAgICBpZiAoZm9yY2UgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fUGVybWFuZW50Rm9yY2UgPSBuZXcgY2MuVmVjMyhmb3JjZS54LCBmb3JjZS55LCAwKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fUGVybWFuZW50Rm9yY2UgPSBmb3JjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9QZXJtYW5lbnRGb3JjZSA9IHVuZGVmaW5lZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaMgeS5heWKmyBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBlcm1Gb3JjZSgpOiBjYy5WZWMzIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMuX1Blcm1hbmVudEZvcmNlIH07XHJcbiAgICBwdWJsaWMgZ2V0IHZhbGlkcGVybUZvcmNlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fUGVybWFuZW50Rm9yY2UgPyB0cnVlIDogZmFsc2UgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMgeS5hemYu+WKm1xyXG4gICAgICog5aaC5p6c5LiN6ZyA6KaB5L2/55So5oyB5LmF6Zi75Yqb77yM6K+36K6+572u5Li6dW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfUGVybWFuZW50RHJhZzogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mjIHkuYXpmLvliptcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkcmFnIOW9k+S4jemcgOimgeaMgeS5hemYu+WKm+aXtuiuvue9ruS4unVuZGVmaW5lZOWPr+S7peebtOaOpeWFs+mXrVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgcGVybURyYWcoZHJhZzogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGRyYWcgPD0gMCkgdGhpcy5fUGVybWFuZW50RHJhZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBlbHNlIHRoaXMuX1Blcm1hbmVudERyYWcgPSBNYXRoLm1heChkcmFnLCAwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaMgeS5hemYu+WKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBlcm1EcmFnKCk6IG51bWJlciB7IHJldHVybiBNYXRoLm1heCh0aGlzLl9QZXJtYW5lbnREcmFnIHx8IDAsIDApIH07XHJcbiAgICBwdWJsaWMgZ2V0IHZhbGlkUGVybURyYWcoKTogYm9vbGVhbiB7IHJldHVybiB0eXBlb2YgdGhpcy5fUGVybWFuZW50RHJhZyA9PSAnbnVtYmVyJyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6LSo6YePXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTWFzczogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6LSo6YePXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBtYXNzKCkgeyByZXR1cm4gTWF0aC5tYXgodGhpcy5fTWFzcywgLjAwMSkgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6LSo6YePXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBtYXNzKHZhbHVlKSB7IHRoaXMuX01hc3MgPSBNYXRoLm1heCh2YWx1ZSwgLjAwMSkgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeWKm+aWueWQkVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0dyYXZpdHk6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwLCAwLCAtOTgwKTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6YeN5Yqb5pa55ZCRXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHJhZyDlvZPkuI3pnIDopoHmjIHkuYXpmLvlipvml7borr7nva7kuLp1bmRlZmluZWTlj6/ku6Xnm7TmjqXlhbPpl61cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyYXZpdHkoZ3Jhdml0eTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAoZ3Jhdml0eSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX0dyYXZpdHkgPSBuZXcgY2MuVmVjMyhncmF2aXR5LngsIGdyYXZpdHkueSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9HcmF2aXR5ID0gZ3Jhdml0eTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumHjeWKm+aWueWQkVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdyYXZpdHkoKTogY2MuVmVjMyB7IHJldHVybiB0aGlzLl9HcmF2aXR5IH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43lipvmoIfluqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9HcmF2aXR5U2NhbGU6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumHjeWKm+agh+W6plxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ3Jhdml0eVNjYWxlKCkgeyByZXR1cm4gdGhpcy5fR3Jhdml0eVNjYWxlIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumHjeWKm+agh+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyYXZpdHlTY2FsZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX0dyYXZpdHlTY2FsZSA9IHZhbHVlIH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi25Yqo5pGp5pOm5Yqb5Zug5a2QXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQnJha2luZ0ZyaWN0aW9uRmFjdG9yOiBudW1iZXIgPSAyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliLbliqjmkanmk6blipvlm6DlrZBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJyYWtpbmdGcmljdGlvbkZhY3RvcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQnJha2luZ0ZyaWN0aW9uRmFjdG9yIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWItuWKqOaRqeaTpuWKm+WboOWtkFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJyYWtpbmdGcmljdGlvbkZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX0JyYWtpbmdGcmljdGlvbkZhY3RvciA9IHZhbHVlIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLbliqjmkanmk6bliptcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9CcmFraW5nRnJpY3Rpb246IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWItuWKqOaRqeaTpuWKm1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYnJha2luZ0ZyaWN0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9CcmFraW5nRnJpY3Rpb24gfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Yi25Yqo5pGp5pOm5YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYnJha2luZ0ZyaWN0aW9uKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fQnJha2luZ0ZyaWN0aW9uRmFjdG9yID0gdmFsdWUgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWItuWKqOmZjemAn1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0JyYWtpbmdEZWNlbGVyYXRpb24gPSAyMDQ4O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliLbliqjpmY3pgJ9cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJyYWtpbmdEZWNlbGVyYXRpb24oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0JyYWtpbmdEZWNlbGVyYXRpb24gfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Yi25Yqo6ZmN6YCfXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYnJha2luZ0RlY2VsZXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX0JyYWtpbmdEZWNlbGVyYXRpb24gPSB2YWx1ZSB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOeUqOaIt+WKm+i+k+WFpSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOenu+WKqOi+k+WFpVxyXG4gICAgICogQHBhcmFtIHtWZWMzfSBkaXJlY3Rpb24g5pa55ZCR77yM6buY6K6k6K6k5Li65piv5Li65Y2V5L2N5ZCR6YeP77yMXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRJbnB1dChkaXJlY3Rpb246IGNjLlZlYzMgfCBjYy5WZWMyLCBzY2FsZT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZm9yY2UgPSBkaXJlY3Rpb24gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55LCAwKSA6IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZS5tdWwodGhpcy5tYXhTcGVlZCAqIChzY2FsZSB8fCAxKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6YeN5YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkR3Jhdml0eShzY2FsZSkge1xyXG4gICAgICAgIHRoaXMuZm9yY2UgPSB0aGlzLmZvcmNlLmFkZCh0aGlzLmdyYXZpdHkubXVsKHRoaXMubWFzcykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmYu+WKm1xyXG4gICAgICogQHBhcmFtIHsqfSBkcmFnIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkRHJhZyhkcmFnOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRyYWcgPSBkcmFnICsgdGhpcy5kcmFnO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDmm7TmlrDojrflj5YgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeWKm+WKoOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWNjZWxlcmF0aW9uRHVlID0gbmV3IGNjLlZlYzMoMCk7XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg5Ye95pWw5a6P5bqTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gU0lHTlBPU1Qg6Kej566X6Zi25q61ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+Z5piv5LiA5Liq5YaF6YOo5pa55rOVXHJcbiAgICAgKiDlsIbmjIHkuYXlipvliqDlhaXliLDniannkIblipvkuK1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFkZFBlcm1hbmVudEZvcmNlVG9QaHlzaWMoKSB7XHJcbiAgICAgICAgLy8g5re75Yqg5oyB5LmF5YqbXHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRwZXJtRm9yY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UuYWRkKHRoaXMucGVybUZvcmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5re75Yqg5oyB5LmF6Zi75YqbIFxyXG4gICAgICAgIHRoaXMuZHJhZyA9ICF0aGlzLnZhbGlkUGVybURyYWcgPyB0aGlzLmRyYWcgOiAodGhpcy5wZXJtRHJhZyArIHRoaXMuZHJhZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+Z5piv5LiA5Liq5YaF6YOo5pa55rOVXHJcbiAgICAgKiDliKTmlq3lvZPliY3np7vliqjnu4Tku7bmmK/lkKblrozlhajpnZnmraJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNhbk1vdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuICEoY2MuVmVjMy5lcXVhbHModGhpcy5mb3JjZSwgY2MuVmVjMy5aRVJPKSAmJiBjYy5WZWMzLmVxdWFscyh0aGlzLnZlbG9jaXR5LCBjYy5WZWMzLlpFUk8pKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg5Y+M5rWB5Lyg5Yqo5byP56e75Yqo6L295YW3IC0g6Kej566X6Zi25q61ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJ/luqblkJHliY1cclxuICAgICAqIOimgeS9v+eUqOatpOaWueazlei/m+ihjOenu+WKqO+8jOmcgOimgeWcqOWFtuS7luS7u+aEj+mYtuauteWGheWQkeatpOenu+WKqOe7hOS7tua3u+WKoOWKm1xyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0geyp9IGR0IGRlbHRhdGltZSDkuI7lvZPliY3luKfnjofnu5HlrprvvIzlv4XopoHpobnnm65cclxuICAgICAqL1xyXG4gICAgLy8gcHVibGljIHZlbG9jaXR5Rm9yd2FyZChkdCwgcm90YXRlUmF0ZSkge1xyXG4gICAgLy8gICAgIGxldCBzbGlwID0ga2lzbWl0LnZlYzJEb3Qoa2lzbWl0LnJvdGF0aW9uVG9WZWMyKHRoaXMuY29udGV4dC5yb3RhdGlvbiksIGtpc21pdC5ub3JtYWxpejIodGhpcy52ZWxvY2l0eSkpO1xyXG4gICAgLy8gICAgIHNsaXAgPSAoc2xpcCAtIDEpIC8gMjsgLy8g6Z2i5ZCR5pe25Li6MO+8jOiDjOWQkeaXtuS4ui0yXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIFRBRyDnp7vliqjmm7TmlrDlh73mlbAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnp7vliqjmm7TmlrDlh73mlbAgLSDlvoTnm7Qt5Yiw6L6+54K5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOabtOaWsOWIsOiuoeeul+S9jee9rlxyXG4gICAgKiDov5nkuKrmlrnms5XkvJroh6rooYznp7vliqjliLAgdGhpcy5hcnJpdmVQb3NpdGlvblxyXG4gICAgKiDkvb/nlKjmraTmlrnms5XlsIbml6Dop4bpmLvlipvkuI7ph43lipvvvIzlvoTnm7TmjInnhafmjIflrprpgJ/luqblubPnp7vov4fljrtcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBzcGVlZCDmiafooYzpgJ/luqbvvIznvLrnnIFtYXhTcGVlZFxyXG4gICAgKiBAcGFyYW0ge051bWJlcn0gdGgg6Led56a76L+H6Zu26ZiI5YC877yM57y655yBMVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVUb1Bvc2l0aW9uKGR0LCB0aCwgc3BlZWQpIHtcclxuICAgICAgICBsZXQgY29uUG9zID0gdGhpcy5jb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IHBvcyA9IGNvblBvcyBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhjb25Qb3MueCwgY29uUG9zLnksIDApIDogY29uUG9zXHJcbiAgICAgICAgbGV0IG1vdmVWZWN0b3IgPSB0aGlzLmFycml2ZVBvc2l0aW9uLnN1Yihwb3MpO1xyXG4gICAgICAgIGxldCBtb3ZlbGVuZ3RoID0gY2MuVmVjMy5sZW4obW92ZVZlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmIChtb3ZlbGVuZ3RoID4gKHRoIHx8IDEpKSB7XHJcbiAgICAgICAgICAgIGxldCB1bml0ID0gbW92ZVZlY3Rvci5kaXYobW92ZWxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlID0gdW5pdC5tdWwoTWF0aC5taW4oKHNwZWVkIHx8IHRoaXMubWF4U3BlZWQpICogZHQsIG1vdmVsZW5ndGgpKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldFBvc2l0aW9uKHRoaXMuaW5Cb3hCb3VuZChtb3ZlLmFkZChwb3MpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnp7vliqjmm7TmlrDlh73mlbAgLSDlj4zmtYHkvKDliqjlvI/np7vliqjovb3lhbct5Yiw6L6+54K5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gZml4ICAgICAgICAgICAgICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblkJHliY3ovbTpnaLlkJHkvY3nva7np7vliqhcclxuICAgICAqIOi/meS4quaWueazleS8muiHquihjOenu+WKqOWIsCB0aGlzLmFycml2ZVBvc2l0aW9uXHJcbiAgICAgKiDkvb/nlKjmraTmlrnms5XlsIbml6Dop4bpmLvlipvkuI7ph43lipvnp7vliqhcclxuICAgICAqIOenu+WKqOeahOWQjOaXtuS8muWwhuiHqui6q+inkuW6puacneWQkeenu+WKqOaWueWQkVxyXG4gICAgICog5Y+v5Lul6YCa6L+H5oyH5a6aXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVRvV2FyZFBvc3Rpb24oKSB7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g5Z+65pys6YCf5bqm6amx5YqoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlLHpgJ/luqbpqbHliqjmm7TmlrBcclxuICAgICAqIOimgeS9v+eUqOatpOaWueazlei/m+ihjOenu+WKqO+8jOmcgOimgeWcqOWFtuS7luS7u+aEj+mYtuauteWGheWQkeatpOenu+WKqOe7hOS7tua3u+WKoOWKm1xyXG4gICAgICogXHJcbiAgICAgKiDlj6/ku6Xlk43lupTnnqzml7blipvvvJogYWRkRm9yY2UoKSwgYWRkRHJhZygpLCBhZGRJbnB1dCgpXHJcbiAgICAgKiBcclxuICAgICAqIOWPr+S7peWTjeW6lOaMgeS5heWKm++8miBwZXJtYW5lbnRGb3JjZSwgcGVybWFuZW50RHJhZ1xyXG4gICAgICogXHJcbiAgICAgKiDmr5TlpoLlnKjpu5jorqTmg4XlhrXkuIvvvIzkuI3kvJrlrp7njrDpmLvlipvvvIzkvaDnmoTnp7vliqjlsLHlg4/mmK/lnKjml6Dph43lipvnjq/looPkuIvkuIDmoLdcclxuICAgICAqIOiAjOaDs+imgeaooeS7v+i1sOi3r+aIluaYr+WFtuS7luenu+WKqOaooeW8j++8jOmcgOimgeWcqOatpOabtOaWsOS6i+S7tuS5i+WJjeaIluaYr+S5i+WQjua3u+WKoOS4gOS7veWKmy/pmLvlipvjgIIgIFxyXG4gICAgICog5Zyo6YCa5bi45oOF5Ya15LiL77yM5L2g5LiN6ZyA6KaB5ouF5b+D5re75YqgIOWKmy/pmLvlipsg5omn6KGM6aG65bqP5Lya6YCg5oiQ6K6h566X5aSx6K+vXHJcbiAgICAgKiDlm6DkuLrov5nmmK/nlLHljZXkuIDnjq/ot6/mnoTmiJDnmoTnp7vliqjmqKHlvI9cclxuICAgICAqIFxyXG4gICAgICog5YWz5LqO5qih5ouf6Zi25q615pu05paw77yaICBcclxuICAgICAqIOS9oOWPr+S7peWcqOWQjOS4gOW4p+aIluaYr+eUn+WRveWRqOacn+eahOS4jeWQjOmYtuauteWGheWkmuasoei/m+ihjOabtOaWsCAgXHJcbiAgICAgKiDkvYbkvb/nlKjmm7TmlrDlh73mlbDov5vooYzov63ku6PkvJrpgKDmiJDpgJ/luqbmtYHpgJ0gIFxyXG4gICAgICog5omA5Lul5o6o6I2Q6Ieq6KGM5a+56IqC54K55Z2Q5qCH6L+b6KGM6L+t5Luj77yM6ICM5ZCO57uf5LiA6L+b6KGM6amx5Yqo5pu05pawICBcclxuICAgICAqIFxyXG4gICAgICog5aaC5p6c6L+t5Luj5Lya6YCg5oiQ6YCf5bqm6ZSZ5L2N77yM5Y+v5Lul6I635Y+W6YeN5Yqb5Yqg6YCf5bqm77yM5bCG6YCf5bqm6L2s5Li65Yqo6IO9ICBcclxuICAgICAqIOWHj+a3oeWOn+Wni+mAn+W6pu+8jOiAjOWQjuWcqOabtOaWsOWJjeWwhuWKqOiDvei/lOWbnue7meWKm+WNs+WPryAgXHJcbiAgICAgKiBcclxuICAgICAqIOS+i+WmgumTgemTvuS7v+ecn++8jOWwseWPr+S7peWvueavj+iKgumTgemTvui/m+ihjOS4gOasoei/kOWKqOabtOaWsO+8jFxyXG4gICAgICog6ICM5ZCO6L+b6KGM5Yqo6IO96L2s5o2i77yM5bCG5q+P6IqC6ZOB6ZO+55qE5Z2Q5qCH5ZCR5YmN5LiA5Liq6L+b6KGM57qm5p2f5Lu/55yf77yM5q+U5aaC6L+b6KGM6L+t5Luj5Lu/55yfMzDmrKEgIFxyXG4gICAgICog5Lu/55yf5a6M5q+V5ZCO6YeN5paw6LWL6IO977yM5oiW5piv5bCG5Yqo6IO96K6h566X5Li65YW25LuW57KS5a2Q5pWI5p6c44CCICBcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVCeVZlbG9jaXR5KGR0OiBudW1iZXIpOiBQYXduTW92ZW1lbnQge1xyXG4gICAgICAgIHRoaXMuYWRkUGVybWFuZW50Rm9yY2VUb1BoeXNpYygpO1xyXG4gICAgICAgIGlmICh0aGlzLmNhbk1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LmNsb25lKCk7XHJcbiAgICAgICAgICAgIC8vIOW6lOeUqOi0qOmHj1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZS5kaXYodGhpcy5tYXNzKTtcclxuICAgICAgICAgICAgLy8g6K6h566X6Zi75YqbXHJcbiAgICAgICAgICAgIGxldCBpbmNvbWluZ0RyYWcgPSB0aGlzLmRyYWcgKiBkdCArIDE7XHJcbiAgICAgICAgICAgIC8vIOmHjeWKm+WKoOmAn+W6plxyXG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbkR1ZSA9IHRoaXMudmVsb2NpdHkuZGl2KGluY29taW5nRHJhZyk7XHJcbiAgICAgICAgICAgIC8vIOW6lOeUqOWKm+WIsOmAn+W6plxyXG4gICAgICAgICAgICBsZXQgb3V0VmVsb2NpdHkgPSB0aGlzLmZvcmNlLm11bChkdCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHkuYWRkKHRoaXMudmVsb2NpdHkpLmRpdihpbmNvbWluZ0RyYWcpO1xyXG4gICAgICAgICAgICAvLyDpmZDliLZcclxuICAgICAgICAgICAgbGV0IG91dFZlbG9jaXR5TGVuZ3RoID0gb3V0VmVsb2NpdHkubGVuKCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHlMZW5ndGggPD0gdGhpcy5tYXhTcGVlZCA/IG91dFZlbG9jaXR5IDogb3V0VmVsb2NpdHkubXVsKHRoaXMubWF4U3BlZWQpLmRpdihvdXRWZWxvY2l0eUxlbmd0aCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHkuc3ViKHRoaXMubGFzdFZlbG9jaXR5KVxyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eUxlbmd0aCA9IG91dFZlbG9jaXR5LmxlbigpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5TGVuZ3RoIDw9IHRoaXMuYWNjZWxlcmF0aW9uTGltaXQgPyBvdXRWZWxvY2l0eSA6IG91dFZlbG9jaXR5Lm11bCh0aGlzLmFjY2VsZXJhdGlvbkxpbWl0KS5kaXYob3V0VmVsb2NpdHlMZW5ndGgpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5LmFkZCh0aGlzLmxhc3RWZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIC8vIOaWsOmAn+W6plxyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IGNjLlZlYzMob3V0VmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBsZXQgbmV3UG9zdGlvbiA9IHRoaXMuY29udGV4dC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAvLyDorr7nva7lnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldFBvc2l0aW9uKHRoaXMudmVsb2NpdHkubXVsKGR0KS5hZGQobmV3UG9zdGlvbiBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhuZXdQb3N0aW9uLngsIG5ld1Bvc3Rpb24ueSwgMCkgOiBuZXdQb3N0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZm9yY2Uuc2V0KGNjLlZlYzMuWkVSTyk7XHJcbiAgICAgICAgdGhpcy5kcmFnID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g566A5piT5Yqb6amx5YqoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBmaXggICAgICAgICAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAqIOeUseWKm+mpseWKqOabtOaWsFxyXG4gICAgICogXHJcbiAgICAgKiDkuIDoiKzmg4XlhrXkuIvlubbkuI3mjqjojZDkvb/nlKjvvIzov5nku4Xku4Xlj6rmmK/kuLrkuobpq5jmlYjnjofogIzkuqfnlJ/nmoRcclxuICAgICAqIOWmguaenOmcgOimgeWunueOsFBCRO+8jOWFiea7keaguOetieWHveaVsO+8jOivt+S9v+eUqHVwZGF0ZUJ5VmVsb2NpdHkoKVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0geyp9IGR0IGRlbHRhdGltZSDkuI7lvZPliY3luKfnjofnu5HlrprvvIzlv4XopoHpobnnm65cclxuICAgICAqL1xyXG4gICAgdXBkYXRlQnlmb3JjZSA9IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIHRoaXMuYWRkUGVybWFuZW50Rm9yY2VUb1BoeXNpYygpO1xyXG4gICAgfTtcclxuXHJcbn1cclxuIl19
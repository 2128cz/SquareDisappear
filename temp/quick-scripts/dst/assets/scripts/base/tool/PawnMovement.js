
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/PawnMovement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32087ASkt9CBbFwJno3IBwU', 'PawnMovement');
// scripts/base/tool/PawnMovement.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcUGF3bk1vdmVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQW9FO0FBRXBFO0lBQ0ksc0JBQVksT0FBZ0I7UUFLbEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQWtDbEMsZ0hBQWdIO1FBRWhIOztXQUVHO1FBQ08sZUFBVSxHQUFHO1lBQ25CLFFBQVE7WUFDUixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU87WUFDUCxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1lBQ1AsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztZQUNQLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLFNBQVM7WUFDVCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7UUFFRjs7Ozs7OztXQU9HO1FBQ0ksa0JBQWEsR0FBRyxVQUFVLE1BQXlCLEVBQUUsTUFBeUIsRUFBRSxLQUF3QixFQUFFLEtBQWM7WUFDM0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNqRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pH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LENBQUMsQ0FBQztTQUNoSjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQUEsQ0FBQztJQWlCTixtQkFBQztBQUFELENBN2hCQSxBQTZoQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGhNYWNybyBhcyBraXNtaXQgfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXduTW92ZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5hcnJpdmVQb3NpdGlvbiA9IGNvbnRleHQuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29udGV4dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gVEFHIHBvc2l0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yiw6L6+55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfYXJyaXZlUG9zaXRpb246IGNjLlZlYzM7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWIsOi+vuebruagh1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFycml2ZVBvc2l0aW9uKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcnJpdmVQb3NpdGlvbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Yiw6L6+55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYXJyaXZlUG9zaXRpb24odmFsdWU6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fYXJyaXZlUG9zaXRpb24gPSBuZXcgY2MuVmVjMyh2YWx1ZS54LCB2YWx1ZS55LCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycml2ZVBvc2l0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWIsOi+vuebruagh+WBj+enu+mHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZEFycml2ZVBvc2l0aW9uKG9mZnNldDogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAob2Zmc2V0IGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fYXJyaXZlUG9zaXRpb24gPSB0aGlzLl9hcnJpdmVQb3NpdGlvbi5hZGQobmV3IGNjLlZlYzMob2Zmc2V0LngsIG9mZnNldC55LCAwKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IHRoaXMuX2Fycml2ZVBvc2l0aW9uLmFkZChvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBUQUcgbW92ZSByYW5nZSBzZXR0aW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovrnnlYzlrprkuYnlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGZpeGVkQm91bmQgPSB7XHJcbiAgICAgICAgLy8g6L6555WM5pyJ5pWI5oCnXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIC8vIOi+ueeVjOWOn+eCuVxyXG4gICAgICAgIG9yaWdpbjogbmV3IGNjLlZlYzMoMCksXHJcbiAgICAgICAgLy8g6L6555WM6IyD5Zu0XHJcbiAgICAgICAgZXh0ZW50OiBuZXcgY2MuVmVjMygwKSxcclxuICAgICAgICAvLyDovrnnlYzlr7npvZBcclxuICAgICAgICBhbGlnbjogbmV3IGNjLlZlYzMoMCksXHJcbiAgICAgICAgLy8g5ZyG5b+D6L6555WM5Y2K5b6EXHJcbiAgICAgICAgcmFkaXVzOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rui+ueeVjFxyXG4gICAgICogQHBhcmFtIHsqfSBleHRlbnQgXHJcbiAgICAgKiBAcGFyYW0geyp9IG9yaWdpbiBcclxuICAgICAqIEBwYXJhbSB7Kn0gYWxpZ25cclxuICAgICAqIEBwYXJhbSB7Kn0gdmFsaWQgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEZpeGVkQm91bmQgPSBmdW5jdGlvbiAoZXh0ZW50OiBjYy5WZWMzIHwgY2MuVmVjMiwgb3JpZ2luOiBjYy5WZWMzIHwgY2MuVmVjMiwgYWxpZ246IGNjLlZlYzMgfCBjYy5WZWMyLCB2YWxpZDogQm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC5leHRlbnQgPSBleHRlbnQgaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMoZXh0ZW50LngsIGV4dGVudC55LCAwKSA6IGV4dGVudDtcclxuICAgICAgICB0aGlzLmZpeGVkQm91bmQub3JpZ2luID0gb3JpZ2luIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKG9yaWdpbi54LCBvcmlnaW4ueSwgMCkgOiBvcmlnaW47XHJcbiAgICAgICAgdGhpcy5maXhlZEJvdW5kLmFsaWduID0gYWxpZ24gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMoYWxpZ24ueCwgYWxpZ24ueSwgMCkgOiBhbGlnbjtcclxuICAgICAgICB0aGlzLmZpeGVkQm91bmQudmFsaWQgPSB2YWxpZCA/IHZhbGlkIDogdGhpcy5maXhlZEJvdW5kLnZhbGlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmZkOWItui+k+WFpeefoumHj+WcqOaWueW9oui+ueeVjOWGhVxyXG4gICAgICogQHBhcmFtIHsqfSB2ZWN0b3IgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluQm94Qm91bmQgPSBmdW5jdGlvbiAodmVjdG9yOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgbGV0IG91dCA9IHZlY3RvcjtcclxuICAgICAgICBpZiAodGhpcy5maXhlZEJvdW5kLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIG91dC54ID0ga2lzbWl0LmNsYW1wKG91dC54LCB0aGlzLmZpeGVkQm91bmQuZXh0ZW50LngsIHRoaXMuZml4ZWRCb3VuZC5hbGlnbi54LCB0aGlzLmZpeGVkQm91bmQub3JpZ2luLngpO1xyXG4gICAgICAgICAgICBvdXQueSA9IGtpc21pdC5jbGFtcChvdXQueSwgdGhpcy5maXhlZEJvdW5kLmV4dGVudC55LCB0aGlzLmZpeGVkQm91bmQuYWxpZ24ueSwgdGhpcy5maXhlZEJvdW5kLm9yaWdpbi55KTtcclxuICAgICAgICAgICAgb3V0LnogPSBraXNtaXQuY2xhbXAob3V0LnosIHRoaXMuZml4ZWRCb3VuZC5leHRlbnQueiwgdGhpcy5maXhlZEJvdW5kLmFsaWduLnosIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4ueik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVEFHIHZlbG9jaXR5ICYgbW92ZW1lbnQgYmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIOmAmueUqOenu+WKqOWxnuaApyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgcHJvdGVjdGVkIF9MYXN0VmVsb2NpdHkgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIHB1YmxpYyBnZXQgbGFzdFZlbG9jaXR5KCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fTGFzdFZlbG9jaXR5OyB9O1xyXG4gICAgcHVibGljIHNldCBsYXN0VmVsb2NpdHkodmVsb2NpdHk6IGNjLlZlYzMpIHsgdGhpcy5fTGFzdFZlbG9jaXR5ID0gdmVsb2NpdHk7IH07XHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjemAn+W6plxyXG4gICAgICog5LiN5bu66K6u55u05o6l6LCD55So77yM6ICM5piv5L2/55So5a6D55qE5pa55rOVOlxyXG4gICAgICogdmVsb2NpdHkg55u05o6l6K6+572u6YCf5bqmXHJcbiAgICAgKiBhZGRWZWxvY2l0eSDnm7TmjqXmt7vliqDpgJ/luqZcclxuICAgICAqIOebtOaOpea3u+WKoOmAn+W6puW5tuS4jeWIqeS6jueJqeS9k+i/kOWKqOaooeaLn++8jOW6lOW9k+WFiOi/m+ihjOWKm+eahOa3u+WKoDpcclxuICAgICAqIGlucHV0IOa3u+WKoOenu+WKqOi+k+WFpVxyXG4gICAgICogZm9yY2Ug5re75Yqg5YqbXHJcbiAgICAgKiDorqHnrpfml7bpnIDopoHms6jmhI/vvIzpmaTpnZ7pnIDopoHlsIborqHnrpflgLzkv53lrZjlnKjmraTvvIzlkKbliJnkuI3lj6/ku6Xkvb/nlKjpk77lvI/ov5DnrpfjgIJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9WZWxvY2l0eSA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgcHVibGljIGdldCB2ZWxvY2l0eSgpOiBjYy5WZWMzIHsgcmV0dXJuIHRoaXMuX1ZlbG9jaXR5OyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7pgJ/luqZcclxuICAgICAqIEBwYXJhbSB7dmVjfSB2ZWxvY2l0eSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB2ZWxvY2l0eSh2ZWxvY2l0eTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAodmVsb2NpdHkgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IG5ldyBjYy5WZWMzKHZlbG9jaXR5LngsIHZlbG9jaXR5LnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fVmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmAn+W6plxyXG4gICAgICogQHBhcmFtIHt2ZWN9IHZlbG9jaXR5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZFZlbG9jaXR5KHZlbG9jaXR5KSB7XHJcbiAgICAgICAgaWYgKHZlbG9jaXR5IGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fVmVsb2NpdHkgPSB0aGlzLl9WZWxvY2l0eS5hZGQobmV3IGNjLlZlYzModmVsb2NpdHkueCwgdmVsb2NpdHkueSwgMCkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fVmVsb2NpdHkgPSB0aGlzLl9WZWxvY2l0eS5hZGQodmVsb2NpdHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOmAn+W6pumZkOWItlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0FjY2VsZXJhdGlvbkxpbWl0OiBudW1iZXIgPSA5OTk5O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDlpKfpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhY2NlbGVyYXRpb25MaW1pdCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQWNjZWxlcmF0aW9uTGltaXQ7IH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruacgOWkp+mAn+W6plxyXG4gICAgICogQHBhcmFtIHsqfSBzcGVlZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhY2NlbGVyYXRpb25MaW1pdChsaW1pdDogbnVtYmVyKSB7IHRoaXMuX0FjY2VsZXJhdGlvbkxpbWl0ID0gbGltaXQgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeaooeW8j+S4i+acgOWkp+enu+WKqOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX01heFNwZWVkOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDlpKfpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBtYXhTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fTWF4U3BlZWQ7IH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruacgOWkp+mAn+W6plxyXG4gICAgICogQHBhcmFtIHsqfSBzcGVlZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBtYXhTcGVlZChzcGVlZCkgeyB0aGlzLl9NYXhTcGVlZCA9IHNwZWVkIHx8IHRoaXMuX01heFNwZWVkOyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN54mp55CG5YqbXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfUGh5c2ljZm9yY2UgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W54mp55CG5YqbXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBmb3JjZSgpOiBjYy5WZWMzIHsgcmV0dXJuIHRoaXMuX1BoeXNpY2ZvcmNlIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueJqeeQhuWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGZvcmNlKGZvcmNlOiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChmb3JjZSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX1BoeXNpY2ZvcmNlID0gbmV3IGNjLlZlYzMoZm9yY2UueCwgZm9yY2UueSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IGZvcmNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg54mp55CG5YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkZm9yY2UoZm9yY2U6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKGZvcmNlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fUGh5c2ljZm9yY2UgPSB0aGlzLl9QaHlzaWNmb3JjZS5hZGQobmV3IGNjLlZlYzMoZm9yY2UueCwgZm9yY2UueSwgMCkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fUGh5c2ljZm9yY2UgPSB0aGlzLl9QaHlzaWNmb3JjZS5hZGQoZm9yY2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeeJqeeQhumYu+WKm1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1BoeXNpY0RyYWc6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueJqeeQhumYu+WKm1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZHJhZygpIHsgcmV0dXJuIE1hdGgubWF4KHRoaXMuX1BoeXNpY0RyYWcsIDApIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueJqeeQhumYu+WKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGRyYWcoZHJhZzogbnVtYmVyKSB7IHRoaXMuX1BoeXNpY0RyYWcgPSBNYXRoLm1heChkcmFnLCAwKTsgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMgeS5heWKmy/pmLvliptcclxuICAgICAqIOivpeWxnuaAp+S8muWcqOavj+asoeabtOaWsOaXtuiHquWKqOWKoOWFpeWIsOeJqeeQhuWKm+S4rVxyXG4gICAgICog5LiN6K665b2T5YmN5piv5ZCm5bey57uP5Yqg5YWl54mp55CG5YqbXHJcbiAgICAgKiDov5nlj6/ku6XnlKjkuo4g6aOO77yM5byV5Yqb562J5bGe5oCnXHJcbiAgICAgKiBcclxuICAgICAqIOW9k+S4jemcgOimgeaMgeS5heWKm+aXtumcgOimgeiuvue9ruS4uiB1bmRlZmluZWRcclxuICAgICAqIOi/meWPr+S7pemAmui/h+WFtuiuvue9ruaWueazleadpeWujOaIkO+8jOS4jemcgOimgeaJi+WKqOi1i+WAvFxyXG4gICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIHkuYXliptcclxuICAgICAqIOivt+S4jeimgeebtOaOpeiuvue9ruaMgeS5heWKm++8jOiAjOaYr+S9v+eUqOWug+eahOaWueazle+8mlxyXG4gICAgICogc2V0UGVybUZvcmNlKCkg6K6+572u5oyB5LmF5YqbXHJcbiAgICAgKiBnZXRQZXJtRm9yY2UoKSDojrflj5bmjIHkuYXliptcclxuICAgICAqIEBwYXJhbSB7VmVjM30gcGVybWFuZW50Rm9yY2VcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9QZXJtYW5lbnRGb3JjZTogY2MuVmVjMyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5oyB5LmF5YqbXHJcbiAgICAgKiBAcGFyYW0ge1ZlYzN9IHZlYyDlvZPkuI3pnIDopoHmjIHkuYXlipvml7borr7nva7kuLp1bmRlZmluZWTlj6/ku6Xnm7TmjqXlhbPpl61cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBwZXJtRm9yY2UoZm9yY2U6IGNjLlZlYzMgfCBjYy5WZWMyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGZvcmNlKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JjZSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9QZXJtYW5lbnRGb3JjZSA9IG5ldyBjYy5WZWMzKGZvcmNlLngsIGZvcmNlLnksIDApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9QZXJtYW5lbnRGb3JjZSA9IGZvcmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1Blcm1hbmVudEZvcmNlID0gdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyB5LmF5YqbIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGVybUZvcmNlKCk6IGNjLlZlYzMgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy5fUGVybWFuZW50Rm9yY2UgfTtcclxuICAgIHB1YmxpYyBnZXQgdmFsaWRwZXJtRm9yY2UoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9QZXJtYW5lbnRGb3JjZSA/IHRydWUgOiBmYWxzZSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyB5LmF6Zi75YqbXHJcbiAgICAgKiDlpoLmnpzkuI3pnIDopoHkvb/nlKjmjIHkuYXpmLvlipvvvIzor7forr7nva7kuLp1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9QZXJtYW5lbnREcmFnOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaMgeS5hemYu+WKm1xyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRyYWcg5b2T5LiN6ZyA6KaB5oyB5LmF6Zi75Yqb5pe26K6+572u5Li6dW5kZWZpbmVk5Y+v5Lul55u05o6l5YWz6ZetXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBwZXJtRHJhZyhkcmFnOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoZHJhZyA8PSAwKSB0aGlzLl9QZXJtYW5lbnREcmFnID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGVsc2UgdGhpcy5fUGVybWFuZW50RHJhZyA9IE1hdGgubWF4KGRyYWcsIDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyB5LmF6Zi75YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGVybURyYWcoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGgubWF4KHRoaXMuX1Blcm1hbmVudERyYWcgfHwgMCwgMCkgfTtcclxuICAgIHB1YmxpYyBnZXQgdmFsaWRQZXJtRHJhZygpOiBib29sZWFuIHsgcmV0dXJuIHR5cGVvZiB0aGlzLl9QZXJtYW5lbnREcmFnID09ICdudW1iZXInIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotKjph49cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9NYXNzOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5botKjph49cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG1hc3MoKSB7IHJldHVybiBNYXRoLm1heCh0aGlzLl9NYXNzLCAuMDAxKSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7otKjph49cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG1hc3ModmFsdWUpIHsgdGhpcy5fTWFzcyA9IE1hdGgubWF4KHZhbHVlLCAuMDAxKSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5Yqb5pa55ZCRXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfR3Jhdml0eTogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDAsIDAsIC05ODApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ph43lipvmlrnlkJFcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkcmFnIOW9k+S4jemcgOimgeaMgeS5hemYu+WKm+aXtuiuvue9ruS4unVuZGVmaW5lZOWPr+S7peebtOaOpeWFs+mXrVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ3Jhdml0eShncmF2aXR5OiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChncmF2aXR5IGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fR3Jhdml0eSA9IG5ldyBjYy5WZWMzKGdyYXZpdHkueCwgZ3Jhdml0eS55LCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX0dyYXZpdHkgPSBncmF2aXR5O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YeN5Yqb5pa55ZCRXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ3Jhdml0eSgpOiBjYy5WZWMzIHsgcmV0dXJuIHRoaXMuX0dyYXZpdHkgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeWKm+agh+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0dyYXZpdHlTY2FsZTogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6YeN5Yqb5qCH5bqmXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmF2aXR5U2NhbGUoKSB7IHJldHVybiB0aGlzLl9HcmF2aXR5U2NhbGUgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6YeN5Yqb5qCH5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ3Jhdml0eVNjYWxlKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fR3Jhdml0eVNjYWxlID0gdmFsdWUgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLbliqjmkanmk6blipvlm6DlrZBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9CcmFraW5nRnJpY3Rpb25GYWN0b3I6IG51bWJlciA9IDI7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWItuWKqOaRqeaTpuWKm+WboOWtkFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYnJha2luZ0ZyaWN0aW9uRmFjdG9yKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9CcmFraW5nRnJpY3Rpb25GYWN0b3IgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Yi25Yqo5pGp5pOm5Yqb5Zug5a2QXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYnJha2luZ0ZyaWN0aW9uRmFjdG9yKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fQnJha2luZ0ZyaWN0aW9uRmFjdG9yID0gdmFsdWUgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWItuWKqOaRqeaTpuWKm1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0JyYWtpbmdGcmljdGlvbjogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yi25Yqo5pGp5pOm5YqbXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBicmFraW5nRnJpY3Rpb24oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0JyYWtpbmdGcmljdGlvbiB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLbliqjmkanmk6bliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBicmFraW5nRnJpY3Rpb24odmFsdWU6IG51bWJlcikgeyB0aGlzLl9CcmFraW5nRnJpY3Rpb25GYWN0b3IgPSB2YWx1ZSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi25Yqo6ZmN6YCfXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQnJha2luZ0RlY2VsZXJhdGlvbiA9IDIwNDg7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWItuWKqOmZjemAn1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYnJha2luZ0RlY2VsZXJhdGlvbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQnJha2luZ0RlY2VsZXJhdGlvbiB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLbliqjpmY3pgJ9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBicmFraW5nRGVjZWxlcmF0aW9uKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fQnJha2luZ0RlY2VsZXJhdGlvbiA9IHZhbHVlIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg55So5oi35Yqb6L6T5YWlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg56e75Yqo6L6T5YWlXHJcbiAgICAgKiBAcGFyYW0ge1ZlYzN9IGRpcmVjdGlvbiDmlrnlkJHvvIzpu5jorqTorqTkuLrmmK/kuLrljZXkvY3lkJHph4/vvIxcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZElucHV0KGRpcmVjdGlvbjogY2MuVmVjMyB8IGNjLlZlYzIsIHNjYWxlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5mb3JjZSA9IGRpcmVjdGlvbiBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnksIDApIDogZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuZm9yY2UgPSB0aGlzLmZvcmNlLm11bCh0aGlzLm1heFNwZWVkICogKHNjYWxlIHx8IDEpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDph43liptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGRHcmF2aXR5KHNjYWxlKSB7XHJcbiAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UuYWRkKHRoaXMuZ3Jhdml0eS5tdWwodGhpcy5tYXNzKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6Zi75YqbXHJcbiAgICAgKiBAcGFyYW0geyp9IGRyYWcgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGREcmFnKGRyYWc6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZHJhZyA9IGRyYWcgKyB0aGlzLmRyYWc7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOabtOaWsOiOt+WPliAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5Yqb5Yqg6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhY2NlbGVyYXRpb25EdWUgPSBuZXcgY2MuVmVjMygwKTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDlh73mlbDlro/lupMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyBTSUdOUE9TVCDop6PnrpfpmLbmrrUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5nmmK/kuIDkuKrlhoXpg6jmlrnms5VcclxuICAgICAqIOWwhuaMgeS5heWKm+WKoOWFpeWIsOeJqeeQhuWKm+S4rVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWRkUGVybWFuZW50Rm9yY2VUb1BoeXNpYygpIHtcclxuICAgICAgICAvLyDmt7vliqDmjIHkuYXliptcclxuICAgICAgICBpZiAodGhpcy52YWxpZHBlcm1Gb3JjZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZS5hZGQodGhpcy5wZXJtRm9yY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmt7vliqDmjIHkuYXpmLvlipsgXHJcbiAgICAgICAgdGhpcy5kcmFnID0gIXRoaXMudmFsaWRQZXJtRHJhZyA/IHRoaXMuZHJhZyA6ICh0aGlzLnBlcm1EcmFnICsgdGhpcy5kcmFnKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5nmmK/kuIDkuKrlhoXpg6jmlrnms5VcclxuICAgICAqIOWIpOaWreW9k+WJjeenu+WKqOe7hOS7tuaYr+WQpuWujOWFqOmdmeatolxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgY2FuTW92ZSgpIHtcclxuICAgICAgICByZXR1cm4gIShjYy5WZWMzLmVxdWFscyh0aGlzLmZvcmNlLCBjYy5WZWMzLlpFUk8pICYmIGNjLlZlYzMuZXF1YWxzKHRoaXMudmVsb2NpdHksIGNjLlZlYzMuWkVSTykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDlj4zmtYHkvKDliqjlvI/np7vliqjovb3lhbcgLSDop6PnrpfpmLbmrrUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAn+W6puWQkeWJjVxyXG4gICAgICog6KaB5L2/55So5q2k5pa55rOV6L+b6KGM56e75Yqo77yM6ZyA6KaB5Zyo5YW25LuW5Lu75oSP6Zi25q615YaF5ZCR5q2k56e75Yqo57uE5Lu25re75Yqg5YqbXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Kn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgICovXHJcbiAgICAvLyBwdWJsaWMgdmVsb2NpdHlGb3J3YXJkKGR0LCByb3RhdGVSYXRlKSB7XHJcbiAgICAvLyAgICAgbGV0IHNsaXAgPSBraXNtaXQudmVjMkRvdChraXNtaXQucm90YXRpb25Ub1ZlYzIodGhpcy5jb250ZXh0LnJvdGF0aW9uKSwga2lzbWl0Lm5vcm1hbGl6Mih0aGlzLnZlbG9jaXR5KSk7XHJcbiAgICAvLyAgICAgc2xpcCA9IChzbGlwIC0gMSkgLyAyOyAvLyDpnaLlkJHml7bkuLow77yM6IOM5ZCR5pe25Li6LTJcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gVEFHIOenu+WKqOabtOaWsOWHveaVsCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOW+hOebtC3liLDovr7ngrkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICog5pu05paw5Yiw6K6h566X5L2N572uXHJcbiAgICAqIOi/meS4quaWueazleS8muiHquihjOenu+WKqOWIsCB0aGlzLmFycml2ZVBvc2l0aW9uXHJcbiAgICAqIOS9v+eUqOatpOaWueazleWwhuaXoOinhumYu+WKm+S4jumHjeWKm++8jOW+hOebtOaMieeFp+aMh+WumumAn+W6puW5s+enu+i/h+WOu1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGR0IGRlbHRhdGltZSDkuI7lvZPliY3luKfnjofnu5HlrprvvIzlv4XopoHpobnnm65cclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IHNwZWVkIOaJp+ihjOmAn+W6pu+8jOe8uuecgW1heFNwZWVkXHJcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aCDot53nprvov4fpm7bpmIjlgLzvvIznvLrnnIExXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVRvUG9zaXRpb24oZHQsIHRoLCBzcGVlZCkge1xyXG4gICAgICAgIGxldCBjb25Qb3MgPSB0aGlzLmNvbnRleHQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBsZXQgcG9zID0gY29uUG9zIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKGNvblBvcy54LCBjb25Qb3MueSwgMCkgOiBjb25Qb3NcclxuICAgICAgICBsZXQgbW92ZVZlY3RvciA9IHRoaXMuYXJyaXZlUG9zaXRpb24uc3ViKHBvcyk7XHJcbiAgICAgICAgbGV0IG1vdmVsZW5ndGggPSBjYy5WZWMzLmxlbihtb3ZlVmVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKG1vdmVsZW5ndGggPiAodGggfHwgMSkpIHtcclxuICAgICAgICAgICAgbGV0IHVuaXQgPSBtb3ZlVmVjdG9yLmRpdihtb3ZlbGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IG1vdmUgPSB1bml0Lm11bChNYXRoLm1pbigoc3BlZWQgfHwgdGhpcy5tYXhTcGVlZCkgKiBkdCwgbW92ZWxlbmd0aCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0UG9zaXRpb24odGhpcy5pbkJveEJvdW5kKG1vdmUuYWRkKHBvcykpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOWPjOa1geS8oOWKqOW8j+enu+WKqOi9veWFty3liLDovr7ngrkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBmaXggICAgICAgICAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAqIOWwhuWQkeWJjei9tOmdouWQkeS9jee9ruenu+WKqFxyXG4gICAgICog6L+Z5Liq5pa55rOV5Lya6Ieq6KGM56e75Yqo5YiwIHRoaXMuYXJyaXZlUG9zaXRpb25cclxuICAgICAqIOS9v+eUqOatpOaWueazleWwhuaXoOinhumYu+WKm+S4jumHjeWKm+enu+WKqFxyXG4gICAgICog56e75Yqo55qE5ZCM5pe25Lya5bCG6Ieq6Lqr6KeS5bqm5pyd5ZCR56e75Yqo5pa55ZCRXHJcbiAgICAgKiDlj6/ku6XpgJrov4fmjIflrppcclxuICAgICAqL1xyXG4gICAgdXBkYXRlVG9XYXJkUG9zdGlvbigpIHtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnp7vliqjmm7TmlrDlh73mlbAgLSDln7rmnKzpgJ/luqbpqbHliqggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUsemAn+W6pumpseWKqOabtOaWsFxyXG4gICAgICog6KaB5L2/55So5q2k5pa55rOV6L+b6KGM56e75Yqo77yM6ZyA6KaB5Zyo5YW25LuW5Lu75oSP6Zi25q615YaF5ZCR5q2k56e75Yqo57uE5Lu25re75Yqg5YqbXHJcbiAgICAgKiBcclxuICAgICAqIOWPr+S7peWTjeW6lOeerOaXtuWKm++8miBhZGRGb3JjZSgpLCBhZGREcmFnKCksIGFkZElucHV0KClcclxuICAgICAqIFxyXG4gICAgICog5Y+v5Lul5ZON5bqU5oyB5LmF5Yqb77yaIHBlcm1hbmVudEZvcmNlLCBwZXJtYW5lbnREcmFnXHJcbiAgICAgKiBcclxuICAgICAqIOavlOWmguWcqOm7mOiupOaDheWGteS4i++8jOS4jeS8muWunueOsOmYu+WKm++8jOS9oOeahOenu+WKqOWwseWDj+aYr+WcqOaXoOmHjeWKm+eOr+Wig+S4i+S4gOagt1xyXG4gICAgICog6ICM5oOz6KaB5qih5Lu/6LWw6Lev5oiW5piv5YW25LuW56e75Yqo5qih5byP77yM6ZyA6KaB5Zyo5q2k5pu05paw5LqL5Lu25LmL5YmN5oiW5piv5LmL5ZCO5re75Yqg5LiA5Lu95YqbL+mYu+WKm+OAgiAgXHJcbiAgICAgKiDlnKjpgJrluLjmg4XlhrXkuIvvvIzkvaDkuI3pnIDopoHmi4Xlv4Pmt7vliqAg5YqbL+mYu+WKmyDmiafooYzpobrluo/kvJrpgKDmiJDorqHnrpflpLHor69cclxuICAgICAqIOWboOS4uui/meaYr+eUseWNleS4gOeOr+i3r+aehOaIkOeahOenu+WKqOaooeW8j1xyXG4gICAgICogXHJcbiAgICAgKiDlhbPkuo7mqKHmi5/pmLbmrrXmm7TmlrDvvJogIFxyXG4gICAgICog5L2g5Y+v5Lul5Zyo5ZCM5LiA5bin5oiW5piv55Sf5ZG95ZGo5pyf55qE5LiN5ZCM6Zi25q615YaF5aSa5qyh6L+b6KGM5pu05pawICBcclxuICAgICAqIOS9huS9v+eUqOabtOaWsOWHveaVsOi/m+ihjOi/reS7o+S8mumAoOaIkOmAn+W6pua1gemAnSAgXHJcbiAgICAgKiDmiYDku6XmjqjojZDoh6rooYzlr7noioLngrnlnZDmoIfov5vooYzov63ku6PvvIzogIzlkI7nu5/kuIDov5vooYzpqbHliqjmm7TmlrAgIFxyXG4gICAgICogXHJcbiAgICAgKiDlpoLmnpzov63ku6PkvJrpgKDmiJDpgJ/luqbplJnkvY3vvIzlj6/ku6Xojrflj5bph43lipvliqDpgJ/luqbvvIzlsIbpgJ/luqbovazkuLrliqjog70gIFxyXG4gICAgICog5YeP5reh5Y6f5aeL6YCf5bqm77yM6ICM5ZCO5Zyo5pu05paw5YmN5bCG5Yqo6IO96L+U5Zue57uZ5Yqb5Y2z5Y+vICBcclxuICAgICAqIFxyXG4gICAgICog5L6L5aaC6ZOB6ZO+5Lu/55yf77yM5bCx5Y+v5Lul5a+55q+P6IqC6ZOB6ZO+6L+b6KGM5LiA5qyh6L+Q5Yqo5pu05paw77yMXHJcbiAgICAgKiDogIzlkI7ov5vooYzliqjog73ovazmjaLvvIzlsIbmr4/oioLpk4Hpk77nmoTlnZDmoIflkJHliY3kuIDkuKrov5vooYznuqbmnZ/ku7/nnJ/vvIzmr5TlpoLov5vooYzov63ku6Pku7/nnJ8zMOasoSAgXHJcbiAgICAgKiDku7/nnJ/lrozmr5XlkI7ph43mlrDotYvog73vvIzmiJbmmK/lsIbliqjog73orqHnrpfkuLrlhbbku5bnspLlrZDmlYjmnpzjgIIgIFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0geyp9IGR0IGRlbHRhdGltZSDkuI7lvZPliY3luKfnjofnu5HlrprvvIzlv4XopoHpobnnm65cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZUJ5VmVsb2NpdHkoZHQ6IG51bWJlcik6IFBhd25Nb3ZlbWVudCB7XHJcbiAgICAgICAgdGhpcy5hZGRQZXJtYW5lbnRGb3JjZVRvUGh5c2ljKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuTW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RWZWxvY2l0eSA9IHRoaXMudmVsb2NpdHkuY2xvbmUoKTtcclxuICAgICAgICAgICAgLy8g5bqU55So6LSo6YePXHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2UgPSB0aGlzLmZvcmNlLmRpdih0aGlzLm1hc3MpO1xyXG4gICAgICAgICAgICAvLyDorqHnrpfpmLvliptcclxuICAgICAgICAgICAgbGV0IGluY29taW5nRHJhZyA9IHRoaXMuZHJhZyAqIGR0ICsgMTtcclxuICAgICAgICAgICAgLy8g6YeN5Yqb5Yqg6YCf5bqmXHJcbiAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uRHVlID0gdGhpcy52ZWxvY2l0eS5kaXYoaW5jb21pbmdEcmFnKTtcclxuICAgICAgICAgICAgLy8g5bqU55So5Yqb5Yiw6YCf5bqmXHJcbiAgICAgICAgICAgIGxldCBvdXRWZWxvY2l0eSA9IHRoaXMuZm9yY2UubXVsKGR0KTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eS5hZGQodGhpcy52ZWxvY2l0eSkuZGl2KGluY29taW5nRHJhZyk7XHJcbiAgICAgICAgICAgIC8vIOmZkOWItlxyXG4gICAgICAgICAgICBsZXQgb3V0VmVsb2NpdHlMZW5ndGggPSBvdXRWZWxvY2l0eS5sZW4oKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eUxlbmd0aCA8PSB0aGlzLm1heFNwZWVkID8gb3V0VmVsb2NpdHkgOiBvdXRWZWxvY2l0eS5tdWwodGhpcy5tYXhTcGVlZCkuZGl2KG91dFZlbG9jaXR5TGVuZ3RoKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eS5zdWIodGhpcy5sYXN0VmVsb2NpdHkpXHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5TGVuZ3RoID0gb3V0VmVsb2NpdHkubGVuKCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHlMZW5ndGggPD0gdGhpcy5hY2NlbGVyYXRpb25MaW1pdCA/IG91dFZlbG9jaXR5IDogb3V0VmVsb2NpdHkubXVsKHRoaXMuYWNjZWxlcmF0aW9uTGltaXQpLmRpdihvdXRWZWxvY2l0eUxlbmd0aCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHkuYWRkKHRoaXMubGFzdFZlbG9jaXR5KTtcclxuICAgICAgICAgICAgLy8g5paw6YCf5bqmXHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgY2MuVmVjMyhvdXRWZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3N0aW9uID0gdGhpcy5jb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIOiuvue9ruWdkOagh1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0UG9zaXRpb24odGhpcy52ZWxvY2l0eS5tdWwoZHQpLmFkZChuZXdQb3N0aW9uIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKG5ld1Bvc3Rpb24ueCwgbmV3UG9zdGlvbi55LCAwKSA6IG5ld1Bvc3Rpb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mb3JjZS5zZXQoY2MuVmVjMy5aRVJPKTtcclxuICAgICAgICB0aGlzLmRyYWcgPSAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnp7vliqjmm7TmlrDlh73mlbAgLSDnroDmmJPlipvpqbHliqggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIGZpeCAgICAgICAgICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICog55Sx5Yqb6amx5Yqo5pu05pawXHJcbiAgICAgKiBcclxuICAgICAqIOS4gOiIrOaDheWGteS4i+W5tuS4jeaOqOiNkOS9v+eUqO+8jOi/meS7heS7heWPquaYr+S4uuS6humrmOaViOeOh+iAjOS6p+eUn+eahFxyXG4gICAgICog5aaC5p6c6ZyA6KaB5a6e546wUEJE77yM5YWJ5ruR5qC4562J5Ye95pWw77yM6K+35L2/55SodXBkYXRlQnlWZWxvY2l0eSgpXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Kn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVCeWZvcmNlID0gZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgdGhpcy5hZGRQZXJtYW5lbnRGb3JjZVRvUGh5c2ljKCk7XHJcbiAgICB9O1xyXG5cclxufVxyXG4iXX0=
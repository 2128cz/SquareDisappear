
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
        /**
         * 由力驱动更新（冲量更新）
         *
         * 一般情况下并不推荐使用
         * 如果需要实现PBD，光滑核等效果，请使用updateByVelocity()
         *
         * 可以响应瞬时力： addForce(), addInput()
         * 可以响应持久力： permanentForce
         *
         * 如函数名字所示，不会产生速度，只要没有力就会停下
         * 且计算方式稍有不同，仅将力与时间相乘，称为冲量
         *
         * @param {*} dt deltatime 与当前帧率绑定，必要项目
         */
        this.updateByforce = function (dt) {
            this.addPermanentForceToPhysic();
            if (this.canMove) {
                var newPostion = this.context.getPosition();
                var updateForce = this.force.mul(dt);
                this.context.setPosition(newPostion.add(updateForce));
            }
            this.force.set(cc.Vec3.ZERO);
            this.drag = 0;
            return this;
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
     * 可以响应持久力： permanentForce, permanentDrag
     *
     * 比如在默认情况下，不会实现阻力，你的移动就像是在无重力环境下一样，
     * 而想要模仿走路或是其他移动模式，需要在此更新事件之前或是之后添加一份力/阻力。
     * 在通常情况下，你不需要担心添加 力/阻力 执行顺序会造成计算失误
     * 因为这是由单一环路构成的移动模式
     *
     * 关于模拟阶段更新：
     * 你可以在同一帧或是生命周期的不同阶段内多次进行更新，
     * 但使用更新函数进行迭代会造成速度流逝，
     * 所以建议自行对节点坐标进行迭代，而后统一进行驱动更新
     *
     * 如果迭代会造成速度错位，可以获取重力加速度，将速度转为动能
     * 减淡原始速度，而后在更新前将动能返回给力即可
     *
     * 例如铁链仿真，就可以对每节铁链先进行一次运动更新，
     * 而后进行动能转换，将每节铁链的坐标向前一个进行约束仿真，比如进行迭代仿真30次
     * 仿真完毕后重新赋能，或是将动能计算为其他效果。
     * 其余情况下，计算动能并没有什么用处，你可以将其注释。
     *
     * 当然，最好不要用上述方法进行堆栈模拟；
     * CPU拥有更多复杂的指令代为处理这些方法。
     *
     * 推荐在cocos中将同屏运算数量控制在200以内
     * 这个数值是用c++实现后推算的，c++可以达到2000+
     * （CPU时间变动不超过±0.01ms的情况下，当然跟平台性能也有关系，所以js的实际表现会更差）
     * 超过这个数值后会出现一定程度的掉帧
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcUGF3bk1vdmVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQW9FO0FBRXBFO0lBQ0ksc0JBQVksT0FBZ0I7UUFLbEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQWtDbEMsZ0hBQWdIO1FBRWhIOztXQUVHO1FBQ08sZUFBVSxHQUFHO1lBQ25CLFFBQVE7WUFDUixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU87WUFDUCxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPO1lBQ1AsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztZQUNQLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLFNBQVM7WUFDVCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7UUFFRjs7Ozs7OztXQU9HO1FBQ0ksa0JBQWEsR0FBRyxVQUFVLE1BQXlCLEVBQUUsTUFBeUIsRUFBRSxLQUF3QixFQUFFLEtBQWM7WUFDM0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNqRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pH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QU07WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVDLE9BQU87WUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDaEo7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7SUE4Qk4sbUJBQUM7QUFBRCxDQWxqQkEsQUFrakJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXRoTWFjcm8gYXMga2lzbWl0IH0gZnJvbSAnLi4vY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF3bk1vdmVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuYXJyaXZlUG9zaXRpb24gPSBjb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnRleHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFRBRyBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIsOi+vuebruagh1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2Fycml2ZVBvc2l0aW9uOiBjYy5WZWMzO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliLDovr7nm67moIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhcnJpdmVQb3NpdGlvbigpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJyaXZlUG9zaXRpb247XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWIsOi+vuebruagh1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFycml2ZVBvc2l0aW9uKHZhbHVlOiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycml2ZVBvc2l0aW9uID0gbmV3IGNjLlZlYzModmFsdWUueCwgdmFsdWUueSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDliLDovr7nm67moIflgY/np7vph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGRBcnJpdmVQb3NpdGlvbihvZmZzZXQ6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKG9mZnNldCBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycml2ZVBvc2l0aW9uID0gdGhpcy5fYXJyaXZlUG9zaXRpb24uYWRkKG5ldyBjYy5WZWMzKG9mZnNldC54LCBvZmZzZXQueSwgMCkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fYXJyaXZlUG9zaXRpb24gPSB0aGlzLl9hcnJpdmVQb3NpdGlvbi5hZGQob2Zmc2V0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gVEFHIG1vdmUgcmFuZ2Ugc2V0dGluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L6555WM5a6a5LmJ5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBmaXhlZEJvdW5kID0ge1xyXG4gICAgICAgIC8vIOi+ueeVjOacieaViOaAp1xyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAvLyDovrnnlYzljp/ngrlcclxuICAgICAgICBvcmlnaW46IG5ldyBjYy5WZWMzKDApLFxyXG4gICAgICAgIC8vIOi+ueeVjOiMg+WbtFxyXG4gICAgICAgIGV4dGVudDogbmV3IGNjLlZlYzMoMCksXHJcbiAgICAgICAgLy8g6L6555WM5a+56b2QXHJcbiAgICAgICAgYWxpZ246IG5ldyBjYy5WZWMzKDApLFxyXG4gICAgICAgIC8vIOWchuW/g+i+ueeVjOWNiuW+hFxyXG4gICAgICAgIHJhZGl1czogMCxcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ovrnnlYxcclxuICAgICAqIEBwYXJhbSB7Kn0gZXh0ZW50IFxyXG4gICAgICogQHBhcmFtIHsqfSBvcmlnaW4gXHJcbiAgICAgKiBAcGFyYW0geyp9IGFsaWduXHJcbiAgICAgKiBAcGFyYW0geyp9IHZhbGlkIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRGaXhlZEJvdW5kID0gZnVuY3Rpb24gKGV4dGVudDogY2MuVmVjMyB8IGNjLlZlYzIsIG9yaWdpbjogY2MuVmVjMyB8IGNjLlZlYzIsIGFsaWduOiBjYy5WZWMzIHwgY2MuVmVjMiwgdmFsaWQ6IEJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmZpeGVkQm91bmQuZXh0ZW50ID0gZXh0ZW50IGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKGV4dGVudC54LCBleHRlbnQueSwgMCkgOiBleHRlbnQ7XHJcbiAgICAgICAgdGhpcy5maXhlZEJvdW5kLm9yaWdpbiA9IG9yaWdpbiBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhvcmlnaW4ueCwgb3JpZ2luLnksIDApIDogb3JpZ2luO1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC5hbGlnbiA9IGFsaWduIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKGFsaWduLngsIGFsaWduLnksIDApIDogYWxpZ247XHJcbiAgICAgICAgdGhpcy5maXhlZEJvdW5kLnZhbGlkID0gdmFsaWQgPyB2YWxpZCA6IHRoaXMuZml4ZWRCb3VuZC52YWxpZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmZDliLbovpPlhaXnn6Lph4/lnKjmlrnlvaLovrnnlYzlhoVcclxuICAgICAqIEBwYXJhbSB7Kn0gdmVjdG9yIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbkJveEJvdW5kID0gZnVuY3Rpb24gKHZlY3RvcjogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBvdXQgPSB2ZWN0b3I7XHJcbiAgICAgICAgaWYgKHRoaXMuZml4ZWRCb3VuZC52YWxpZCkge1xyXG4gICAgICAgICAgICBvdXQueCA9IGtpc21pdC5jbGFtcChvdXQueCwgdGhpcy5maXhlZEJvdW5kLmV4dGVudC54LCB0aGlzLmZpeGVkQm91bmQuYWxpZ24ueCwgdGhpcy5maXhlZEJvdW5kLm9yaWdpbi54KTtcclxuICAgICAgICAgICAgb3V0LnkgPSBraXNtaXQuY2xhbXAob3V0LnksIHRoaXMuZml4ZWRCb3VuZC5leHRlbnQueSwgdGhpcy5maXhlZEJvdW5kLmFsaWduLnksIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4ueSk7XHJcbiAgICAgICAgICAgIG91dC56ID0ga2lzbWl0LmNsYW1wKG91dC56LCB0aGlzLmZpeGVkQm91bmQuZXh0ZW50LnosIHRoaXMuZml4ZWRCb3VuZC5hbGlnbi56LCB0aGlzLmZpeGVkQm91bmQub3JpZ2luLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyB2ZWxvY2l0eSAmIG1vdmVtZW50IGJhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDpgJrnlKjnp7vliqjlsZ7mgKcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIHByb3RlY3RlZCBfTGFzdFZlbG9jaXR5ID0gbmV3IGNjLlZlYzMoMCk7XHJcbiAgICBwdWJsaWMgZ2V0IGxhc3RWZWxvY2l0eSgpOiBjYy5WZWMzIHsgcmV0dXJuIHRoaXMuX0xhc3RWZWxvY2l0eTsgfTtcclxuICAgIHB1YmxpYyBzZXQgbGFzdFZlbG9jaXR5KHZlbG9jaXR5OiBjYy5WZWMzKSB7IHRoaXMuX0xhc3RWZWxvY2l0eSA9IHZlbG9jaXR5OyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3pgJ/luqZcclxuICAgICAqIOS4jeW7uuiuruebtOaOpeiwg+eUqO+8jOiAjOaYr+S9v+eUqOWug+eahOaWueazlTpcclxuICAgICAqIHZlbG9jaXR5IOebtOaOpeiuvue9rumAn+W6plxyXG4gICAgICogYWRkVmVsb2NpdHkg55u05o6l5re75Yqg6YCf5bqmXHJcbiAgICAgKiDnm7TmjqXmt7vliqDpgJ/luqblubbkuI3liKnkuo7niankvZPov5DliqjmqKHmi5/vvIzlupTlvZPlhYjov5vooYzlipvnmoTmt7vliqA6XHJcbiAgICAgKiBpbnB1dCDmt7vliqDnp7vliqjovpPlhaVcclxuICAgICAqIGZvcmNlIOa3u+WKoOWKm1xyXG4gICAgICog6K6h566X5pe26ZyA6KaB5rOo5oSP77yM6Zmk6Z2e6ZyA6KaB5bCG6K6h566X5YC85L+d5a2Y5Zyo5q2k77yM5ZCm5YiZ5LiN5Y+v5Lul5L2/55So6ZO+5byP6L+Q566X44CCXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfVmVsb2NpdHkgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIHB1YmxpYyBnZXQgdmVsb2NpdHkoKTogY2MuVmVjMyB7IHJldHVybiB0aGlzLl9WZWxvY2l0eTsgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0ge3ZlY30gdmVsb2NpdHkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdmVsb2NpdHkodmVsb2NpdHk6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKHZlbG9jaXR5IGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fVmVsb2NpdHkgPSBuZXcgY2MuVmVjMyh2ZWxvY2l0eS54LCB2ZWxvY2l0eS55LCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1ZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDpgJ/luqZcclxuICAgICAqIEBwYXJhbSB7dmVjfSB2ZWxvY2l0eSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGRWZWxvY2l0eSh2ZWxvY2l0eSkge1xyXG4gICAgICAgIGlmICh2ZWxvY2l0eSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX1ZlbG9jaXR5ID0gdGhpcy5fVmVsb2NpdHkuYWRkKG5ldyBjYy5WZWMzKHZlbG9jaXR5LngsIHZlbG9jaXR5LnksIDApKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1ZlbG9jaXR5ID0gdGhpcy5fVmVsb2NpdHkuYWRkKHZlbG9jaXR5KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDpgJ/luqbpmZDliLZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9BY2NlbGVyYXRpb25MaW1pdDogbnVtYmVyID0gOTk5OTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pyA5aSn6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYWNjZWxlcmF0aW9uTGltaXQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0FjY2VsZXJhdGlvbkxpbWl0OyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mnIDlpKfpgJ/luqZcclxuICAgICAqIEBwYXJhbSB7Kn0gc3BlZWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWNjZWxlcmF0aW9uTGltaXQobGltaXQ6IG51bWJlcikgeyB0aGlzLl9BY2NlbGVyYXRpb25MaW1pdCA9IGxpbWl0IH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3mqKHlvI/kuIvmnIDlpKfnp7vliqjpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9NYXhTcGVlZDogbnVtYmVyID0gMTAwMDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pyA5aSn6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbWF4U3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX01heFNwZWVkOyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mnIDlpKfpgJ/luqZcclxuICAgICAqIEBwYXJhbSB7Kn0gc3BlZWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgbWF4U3BlZWQoc3BlZWQpIHsgdGhpcy5fTWF4U3BlZWQgPSBzcGVlZCB8fCB0aGlzLl9NYXhTcGVlZDsgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeeJqeeQhuWKm1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1BoeXNpY2ZvcmNlID0gbmV3IGNjLlZlYzMoMCk7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueJqeeQhuWKm1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZm9yY2UoKTogY2MuVmVjMyB7IHJldHVybiB0aGlzLl9QaHlzaWNmb3JjZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7niannkIbliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBmb3JjZShmb3JjZTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAoZm9yY2UgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IG5ldyBjYy5WZWMzKGZvcmNlLngsIGZvcmNlLnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fUGh5c2ljZm9yY2UgPSBmb3JjZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOeJqeeQhuWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZGZvcmNlKGZvcmNlOiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChmb3JjZSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX1BoeXNpY2ZvcmNlID0gdGhpcy5fUGh5c2ljZm9yY2UuYWRkKG5ldyBjYy5WZWMzKGZvcmNlLngsIGZvcmNlLnksIDApKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1BoeXNpY2ZvcmNlID0gdGhpcy5fUGh5c2ljZm9yY2UuYWRkKGZvcmNlKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3niannkIbpmLvliptcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9QaHlzaWNEcmFnOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bniannkIbpmLvliptcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGRyYWcoKSB7IHJldHVybiBNYXRoLm1heCh0aGlzLl9QaHlzaWNEcmFnLCAwKSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7niannkIbpmLvliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBkcmFnKGRyYWc6IG51bWJlcikgeyB0aGlzLl9QaHlzaWNEcmFnID0gTWF0aC5tYXgoZHJhZywgMCk7IH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIHkuYXlipsv6Zi75YqbXHJcbiAgICAgKiDor6XlsZ7mgKfkvJrlnKjmr4/mrKHmm7TmlrDml7boh6rliqjliqDlhaXliLDniannkIblipvkuK1cclxuICAgICAqIOS4jeiuuuW9k+WJjeaYr+WQpuW3sue7j+WKoOWFpeeJqeeQhuWKm1xyXG4gICAgICog6L+Z5Y+v5Lul55So5LqOIOmjju+8jOW8leWKm+etieWxnuaAp1xyXG4gICAgICogXHJcbiAgICAgKiDlvZPkuI3pnIDopoHmjIHkuYXlipvml7bpnIDopoHorr7nva7kuLogdW5kZWZpbmVkXHJcbiAgICAgKiDov5nlj6/ku6XpgJrov4flhbborr7nva7mlrnms5XmnaXlrozmiJDvvIzkuI3pnIDopoHmiYvliqjotYvlgLxcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyB5LmF5YqbXHJcbiAgICAgKiDor7fkuI3opoHnm7TmjqXorr7nva7mjIHkuYXlipvvvIzogIzmmK/kvb/nlKjlroPnmoTmlrnms5XvvJpcclxuICAgICAqIHNldFBlcm1Gb3JjZSgpIOiuvue9ruaMgeS5heWKm1xyXG4gICAgICogZ2V0UGVybUZvcmNlKCkg6I635Y+W5oyB5LmF5YqbXHJcbiAgICAgKiBAcGFyYW0ge1ZlYzN9IHBlcm1hbmVudEZvcmNlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfUGVybWFuZW50Rm9yY2U6IGNjLlZlYzMgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaMgeS5heWKm1xyXG4gICAgICogQHBhcmFtIHtWZWMzfSB2ZWMg5b2T5LiN6ZyA6KaB5oyB5LmF5Yqb5pe26K6+572u5Li6dW5kZWZpbmVk5Y+v5Lul55u05o6l5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgcGVybUZvcmNlKGZvcmNlOiBjYy5WZWMzIHwgY2MuVmVjMiB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChmb3JjZSkge1xyXG4gICAgICAgICAgICBpZiAoZm9yY2UgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fUGVybWFuZW50Rm9yY2UgPSBuZXcgY2MuVmVjMyhmb3JjZS54LCBmb3JjZS55LCAwKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fUGVybWFuZW50Rm9yY2UgPSBmb3JjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9QZXJtYW5lbnRGb3JjZSA9IHVuZGVmaW5lZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaMgeS5heWKmyBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBlcm1Gb3JjZSgpOiBjYy5WZWMzIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMuX1Blcm1hbmVudEZvcmNlIH07XHJcbiAgICBwdWJsaWMgZ2V0IHZhbGlkcGVybUZvcmNlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fUGVybWFuZW50Rm9yY2UgPyB0cnVlIDogZmFsc2UgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMgeS5hemYu+WKm1xyXG4gICAgICog5aaC5p6c5LiN6ZyA6KaB5L2/55So5oyB5LmF6Zi75Yqb77yM6K+36K6+572u5Li6dW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfUGVybWFuZW50RHJhZzogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mjIHkuYXpmLvliptcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkcmFnIOW9k+S4jemcgOimgeaMgeS5hemYu+WKm+aXtuiuvue9ruS4unVuZGVmaW5lZOWPr+S7peebtOaOpeWFs+mXrVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgcGVybURyYWcoZHJhZzogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGRyYWcgPD0gMCkgdGhpcy5fUGVybWFuZW50RHJhZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBlbHNlIHRoaXMuX1Blcm1hbmVudERyYWcgPSBNYXRoLm1heChkcmFnLCAwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaMgeS5hemYu+WKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBlcm1EcmFnKCk6IG51bWJlciB7IHJldHVybiBNYXRoLm1heCh0aGlzLl9QZXJtYW5lbnREcmFnIHx8IDAsIDApIH07XHJcbiAgICBwdWJsaWMgZ2V0IHZhbGlkUGVybURyYWcoKTogYm9vbGVhbiB7IHJldHVybiB0eXBlb2YgdGhpcy5fUGVybWFuZW50RHJhZyA9PSAnbnVtYmVyJyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6LSo6YePXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTWFzczogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6LSo6YePXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBtYXNzKCkgeyByZXR1cm4gTWF0aC5tYXgodGhpcy5fTWFzcywgLjAwMSkgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6LSo6YePXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBtYXNzKHZhbHVlKSB7IHRoaXMuX01hc3MgPSBNYXRoLm1heCh2YWx1ZSwgLjAwMSkgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeWKm+aWueWQkVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0dyYXZpdHk6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwLCAwLCAtOTgwKTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6YeN5Yqb5pa55ZCRXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHJhZyDlvZPkuI3pnIDopoHmjIHkuYXpmLvlipvml7borr7nva7kuLp1bmRlZmluZWTlj6/ku6Xnm7TmjqXlhbPpl61cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyYXZpdHkoZ3Jhdml0eTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAoZ3Jhdml0eSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX0dyYXZpdHkgPSBuZXcgY2MuVmVjMyhncmF2aXR5LngsIGdyYXZpdHkueSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9HcmF2aXR5ID0gZ3Jhdml0eTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumHjeWKm+aWueWQkVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdyYXZpdHkoKTogY2MuVmVjMyB7IHJldHVybiB0aGlzLl9HcmF2aXR5IH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43lipvmoIfluqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9HcmF2aXR5U2NhbGU6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumHjeWKm+agh+W6plxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ3Jhdml0eVNjYWxlKCkgeyByZXR1cm4gdGhpcy5fR3Jhdml0eVNjYWxlIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumHjeWKm+agh+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyYXZpdHlTY2FsZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX0dyYXZpdHlTY2FsZSA9IHZhbHVlIH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi25Yqo5pGp5pOm5Yqb5Zug5a2QXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQnJha2luZ0ZyaWN0aW9uRmFjdG9yOiBudW1iZXIgPSAyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliLbliqjmkanmk6blipvlm6DlrZBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJyYWtpbmdGcmljdGlvbkZhY3RvcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQnJha2luZ0ZyaWN0aW9uRmFjdG9yIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWItuWKqOaRqeaTpuWKm+WboOWtkFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJyYWtpbmdGcmljdGlvbkZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX0JyYWtpbmdGcmljdGlvbkZhY3RvciA9IHZhbHVlIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLbliqjmkanmk6bliptcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9CcmFraW5nRnJpY3Rpb246IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWItuWKqOaRqeaTpuWKm1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYnJha2luZ0ZyaWN0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9CcmFraW5nRnJpY3Rpb24gfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Yi25Yqo5pGp5pOm5YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYnJha2luZ0ZyaWN0aW9uKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fQnJha2luZ0ZyaWN0aW9uRmFjdG9yID0gdmFsdWUgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWItuWKqOmZjemAn1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0JyYWtpbmdEZWNlbGVyYXRpb24gPSAyMDQ4O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliLbliqjpmY3pgJ9cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJyYWtpbmdEZWNlbGVyYXRpb24oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0JyYWtpbmdEZWNlbGVyYXRpb24gfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Yi25Yqo6ZmN6YCfXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYnJha2luZ0RlY2VsZXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX0JyYWtpbmdEZWNlbGVyYXRpb24gPSB2YWx1ZSB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOeUqOaIt+WKm+i+k+WFpSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOenu+WKqOi+k+WFpVxyXG4gICAgICogQHBhcmFtIHtWZWMzfSBkaXJlY3Rpb24g5pa55ZCR77yM6buY6K6k6K6k5Li65piv5Li65Y2V5L2N5ZCR6YeP77yMXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRJbnB1dChkaXJlY3Rpb246IGNjLlZlYzMgfCBjYy5WZWMyLCBzY2FsZT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZm9yY2UgPSBkaXJlY3Rpb24gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMoZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55LCAwKSA6IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZS5tdWwodGhpcy5tYXhTcGVlZCAqIChzY2FsZSB8fCAxKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6YeN5YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkR3Jhdml0eShzY2FsZSkge1xyXG4gICAgICAgIHRoaXMuZm9yY2UgPSB0aGlzLmZvcmNlLmFkZCh0aGlzLmdyYXZpdHkubXVsKHRoaXMubWFzcykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmYu+WKm1xyXG4gICAgICogQHBhcmFtIHsqfSBkcmFnIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkRHJhZyhkcmFnOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRyYWcgPSBkcmFnICsgdGhpcy5kcmFnO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDmm7TmlrDojrflj5YgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeWKm+WKoOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWNjZWxlcmF0aW9uRHVlID0gbmV3IGNjLlZlYzMoMCk7XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg5Ye95pWw5a6P5bqTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gU0lHTlBPU1Qg6Kej566X6Zi25q61ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+Z5piv5LiA5Liq5YaF6YOo5pa55rOVXHJcbiAgICAgKiDlsIbmjIHkuYXlipvliqDlhaXliLDniannkIblipvkuK1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFkZFBlcm1hbmVudEZvcmNlVG9QaHlzaWMoKSB7XHJcbiAgICAgICAgLy8g5re75Yqg5oyB5LmF5YqbXHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRwZXJtRm9yY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UuYWRkKHRoaXMucGVybUZvcmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5re75Yqg5oyB5LmF6Zi75YqbIFxyXG4gICAgICAgIHRoaXMuZHJhZyA9ICF0aGlzLnZhbGlkUGVybURyYWcgPyB0aGlzLmRyYWcgOiAodGhpcy5wZXJtRHJhZyArIHRoaXMuZHJhZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+Z5piv5LiA5Liq5YaF6YOo5pa55rOVXHJcbiAgICAgKiDliKTmlq3lvZPliY3np7vliqjnu4Tku7bmmK/lkKblrozlhajpnZnmraJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNhbk1vdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuICEoY2MuVmVjMy5lcXVhbHModGhpcy5mb3JjZSwgY2MuVmVjMy5aRVJPKSAmJiBjYy5WZWMzLmVxdWFscyh0aGlzLnZlbG9jaXR5LCBjYy5WZWMzLlpFUk8pKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg5Y+M5rWB5Lyg5Yqo5byP56e75Yqo6L295YW3IC0g6Kej566X6Zi25q61ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJ/luqblkJHliY1cclxuICAgICAqIOimgeS9v+eUqOatpOaWueazlei/m+ihjOenu+WKqO+8jOmcgOimgeWcqOWFtuS7luS7u+aEj+mYtuauteWGheWQkeatpOenu+WKqOe7hOS7tua3u+WKoOWKm1xyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0geyp9IGR0IGRlbHRhdGltZSDkuI7lvZPliY3luKfnjofnu5HlrprvvIzlv4XopoHpobnnm65cclxuICAgICAqL1xyXG4gICAgLy8gcHVibGljIHZlbG9jaXR5Rm9yd2FyZChkdCwgcm90YXRlUmF0ZSkge1xyXG4gICAgLy8gICAgIGxldCBzbGlwID0ga2lzbWl0LnZlYzJEb3Qoa2lzbWl0LnJvdGF0aW9uVG9WZWMyKHRoaXMuY29udGV4dC5yb3RhdGlvbiksIGtpc21pdC5ub3JtYWxpejIodGhpcy52ZWxvY2l0eSkpO1xyXG4gICAgLy8gICAgIHNsaXAgPSAoc2xpcCAtIDEpIC8gMjsgLy8g6Z2i5ZCR5pe25Li6MO+8jOiDjOWQkeaXtuS4ui0yXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIFRBRyDnp7vliqjmm7TmlrDlh73mlbAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnp7vliqjmm7TmlrDlh73mlbAgLSDlvoTnm7Qt5Yiw6L6+54K5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOabtOaWsOWIsOiuoeeul+S9jee9rlxyXG4gICAgKiDov5nkuKrmlrnms5XkvJroh6rooYznp7vliqjliLAgdGhpcy5hcnJpdmVQb3NpdGlvblxyXG4gICAgKiDkvb/nlKjmraTmlrnms5XlsIbml6Dop4bpmLvlipvkuI7ph43lipvvvIzlvoTnm7TmjInnhafmjIflrprpgJ/luqblubPnp7vov4fljrtcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBzcGVlZCDmiafooYzpgJ/luqbvvIznvLrnnIFtYXhTcGVlZFxyXG4gICAgKiBAcGFyYW0ge051bWJlcn0gdGgg6Led56a76L+H6Zu26ZiI5YC877yM57y655yBMVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVUb1Bvc2l0aW9uKGR0LCB0aCwgc3BlZWQpIHtcclxuICAgICAgICBsZXQgY29uUG9zID0gdGhpcy5jb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IHBvcyA9IGNvblBvcyBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhjb25Qb3MueCwgY29uUG9zLnksIDApIDogY29uUG9zXHJcbiAgICAgICAgbGV0IG1vdmVWZWN0b3IgPSB0aGlzLmFycml2ZVBvc2l0aW9uLnN1Yihwb3MpO1xyXG4gICAgICAgIGxldCBtb3ZlbGVuZ3RoID0gY2MuVmVjMy5sZW4obW92ZVZlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmIChtb3ZlbGVuZ3RoID4gKHRoIHx8IDEpKSB7XHJcbiAgICAgICAgICAgIGxldCB1bml0ID0gbW92ZVZlY3Rvci5kaXYobW92ZWxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlID0gdW5pdC5tdWwoTWF0aC5taW4oKHNwZWVkIHx8IHRoaXMubWF4U3BlZWQpICogZHQsIG1vdmVsZW5ndGgpKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldFBvc2l0aW9uKHRoaXMuaW5Cb3hCb3VuZChtb3ZlLmFkZChwb3MpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnp7vliqjmm7TmlrDlh73mlbAgLSDlj4zmtYHkvKDliqjlvI/np7vliqjovb3lhbct5Yiw6L6+54K5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gZml4ICAgICAgICAgICAgICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblkJHliY3ovbTpnaLlkJHkvY3nva7np7vliqhcclxuICAgICAqIOi/meS4quaWueazleS8muiHquihjOenu+WKqOWIsCB0aGlzLmFycml2ZVBvc2l0aW9uXHJcbiAgICAgKiDkvb/nlKjmraTmlrnms5XlsIbml6Dop4bpmLvlipvkuI7ph43lipvnp7vliqhcclxuICAgICAqIOenu+WKqOeahOWQjOaXtuS8muWwhuiHqui6q+inkuW6puacneWQkeenu+WKqOaWueWQkVxyXG4gICAgICog5Y+v5Lul6YCa6L+H5oyH5a6aXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVRvV2FyZFBvc3Rpb24oKSB7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g5Z+65pys6YCf5bqm6amx5YqoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlLHpgJ/luqbpqbHliqjmm7TmlrBcclxuICAgICAqIOimgeS9v+eUqOatpOaWueazlei/m+ihjOenu+WKqO+8jOmcgOimgeWcqOWFtuS7luS7u+aEj+mYtuauteWGheWQkeatpOenu+WKqOe7hOS7tua3u+WKoOWKm1xyXG4gICAgICogXHJcbiAgICAgKiDlj6/ku6Xlk43lupTnnqzml7blipvvvJogYWRkRm9yY2UoKSwgYWRkRHJhZygpLCBhZGRJbnB1dCgpICBcclxuICAgICAqIOWPr+S7peWTjeW6lOaMgeS5heWKm++8miBwZXJtYW5lbnRGb3JjZSwgcGVybWFuZW50RHJhZyAgXHJcbiAgICAgKiBcclxuICAgICAqIOavlOWmguWcqOm7mOiupOaDheWGteS4i++8jOS4jeS8muWunueOsOmYu+WKm++8jOS9oOeahOenu+WKqOWwseWDj+aYr+WcqOaXoOmHjeWKm+eOr+Wig+S4i+S4gOagt++8jFxyXG4gICAgICog6ICM5oOz6KaB5qih5Lu/6LWw6Lev5oiW5piv5YW25LuW56e75Yqo5qih5byP77yM6ZyA6KaB5Zyo5q2k5pu05paw5LqL5Lu25LmL5YmN5oiW5piv5LmL5ZCO5re75Yqg5LiA5Lu95YqbL+mYu+WKm+OAgiAgXHJcbiAgICAgKiDlnKjpgJrluLjmg4XlhrXkuIvvvIzkvaDkuI3pnIDopoHmi4Xlv4Pmt7vliqAg5YqbL+mYu+WKmyDmiafooYzpobrluo/kvJrpgKDmiJDorqHnrpflpLHor69cclxuICAgICAqIOWboOS4uui/meaYr+eUseWNleS4gOeOr+i3r+aehOaIkOeahOenu+WKqOaooeW8j1xyXG4gICAgICogXHJcbiAgICAgKiDlhbPkuo7mqKHmi5/pmLbmrrXmm7TmlrDvvJogIFxyXG4gICAgICog5L2g5Y+v5Lul5Zyo5ZCM5LiA5bin5oiW5piv55Sf5ZG95ZGo5pyf55qE5LiN5ZCM6Zi25q615YaF5aSa5qyh6L+b6KGM5pu05paw77yMXHJcbiAgICAgKiDkvYbkvb/nlKjmm7TmlrDlh73mlbDov5vooYzov63ku6PkvJrpgKDmiJDpgJ/luqbmtYHpgJ3vvIxcclxuICAgICAqIOaJgOS7peW7uuiuruiHquihjOWvueiKgueCueWdkOagh+i/m+ihjOi/reS7o++8jOiAjOWQjue7n+S4gOi/m+ihjOmpseWKqOabtOaWsCAgXHJcbiAgICAgKiBcclxuICAgICAqIOWmguaenOi/reS7o+S8mumAoOaIkOmAn+W6pumUmeS9je+8jOWPr+S7peiOt+WPlumHjeWKm+WKoOmAn+W6pu+8jOWwhumAn+W6pui9rOS4uuWKqOiDvSAgXHJcbiAgICAgKiDlh4/mt6Hljp/lp4vpgJ/luqbvvIzogIzlkI7lnKjmm7TmlrDliY3lsIbliqjog73ov5Tlm57nu5nlipvljbPlj68gIFxyXG4gICAgICogXHJcbiAgICAgKiDkvovlpoLpk4Hpk77ku7/nnJ/vvIzlsLHlj6/ku6Xlr7nmr4/oioLpk4Hpk77lhYjov5vooYzkuIDmrKHov5Dliqjmm7TmlrDvvIxcclxuICAgICAqIOiAjOWQjui/m+ihjOWKqOiDvei9rOaNou+8jOWwhuavj+iKgumTgemTvueahOWdkOagh+WQkeWJjeS4gOS4qui/m+ihjOe6puadn+S7v+ecn++8jOavlOWmgui/m+ihjOi/reS7o+S7v+ecnzMw5qyhICBcclxuICAgICAqIOS7v+ecn+WujOavleWQjumHjeaWsOi1i+iDve+8jOaIluaYr+WwhuWKqOiDveiuoeeul+S4uuWFtuS7luaViOaenOOAgiAgXHJcbiAgICAgKiDlhbbkvZnmg4XlhrXkuIvvvIzorqHnrpfliqjog73lubbmsqHmnInku4DkuYjnlKjlpITvvIzkvaDlj6/ku6XlsIblhbbms6jph4rjgIJcclxuICAgICAqIFxyXG4gICAgICog5b2T54S277yM5pyA5aW95LiN6KaB55So5LiK6L+w5pa55rOV6L+b6KGM5aCG5qCI5qih5ouf77ybICBcclxuICAgICAqIENQVeaLpeacieabtOWkmuWkjeadgueahOaMh+S7pOS7o+S4uuWkhOeQhui/meS6m+aWueazleOAglxyXG4gICAgICogXHJcbiAgICAgKiDmjqjojZDlnKhjb2Nvc+S4reWwhuWQjOWxj+i/kOeul+aVsOmHj+aOp+WItuWcqDIwMOS7peWGhVxyXG4gICAgICog6L+Z5Liq5pWw5YC85piv55SoYysr5a6e546w5ZCO5o6o566X55qE77yMYysr5Y+v5Lul6L6+5YiwMjAwMCsgIFxyXG4gICAgICog77yIQ1BV5pe26Ze05Y+Y5Yqo5LiN6LaF6L+HwrEwLjAxbXPnmoTmg4XlhrXkuIvvvIzlvZPnhLbot5/lubPlj7DmgKfog73kuZ/mnInlhbPns7vvvIzmiYDku6Vqc+eahOWunumZheihqOeOsOS8muabtOW3ru+8iVxyXG4gICAgICog6LaF6L+H6L+Z5Liq5pWw5YC85ZCO5Lya5Ye6546w5LiA5a6a56iL5bqm55qE5o6J5binXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Kn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQnlWZWxvY2l0eShkdDogbnVtYmVyKTogUGF3bk1vdmVtZW50IHtcclxuICAgICAgICB0aGlzLmFkZFBlcm1hbmVudEZvcmNlVG9QaHlzaWMoKTtcclxuICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAvLyDlupTnlKjotKjph49cclxuICAgICAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UuZGl2KHRoaXMubWFzcyk7XHJcbiAgICAgICAgICAgIC8vIOiuoeeul+mYu+WKm1xyXG4gICAgICAgICAgICBsZXQgaW5jb21pbmdEcmFnID0gdGhpcy5kcmFnICogZHQgKyAxO1xyXG4gICAgICAgICAgICAvLyDph43lipvliqDpgJ/luqZcclxuICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb25EdWUgPSB0aGlzLnZlbG9jaXR5LmRpdihpbmNvbWluZ0RyYWcpO1xyXG4gICAgICAgICAgICAvLyDlupTnlKjlipvliLDpgJ/luqZcclxuICAgICAgICAgICAgbGV0IG91dFZlbG9jaXR5ID0gdGhpcy5mb3JjZS5tdWwoZHQpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5LmFkZCh0aGlzLnZlbG9jaXR5KS5kaXYoaW5jb21pbmdEcmFnKTtcclxuICAgICAgICAgICAgLy8g6ZmQ5Yi2XHJcbiAgICAgICAgICAgIGxldCBvdXRWZWxvY2l0eUxlbmd0aCA9IG91dFZlbG9jaXR5LmxlbigpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5TGVuZ3RoIDw9IHRoaXMubWF4U3BlZWQgPyBvdXRWZWxvY2l0eSA6IG91dFZlbG9jaXR5Lm11bCh0aGlzLm1heFNwZWVkKS5kaXYob3V0VmVsb2NpdHlMZW5ndGgpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5LnN1Yih0aGlzLmxhc3RWZWxvY2l0eSlcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHlMZW5ndGggPSBvdXRWZWxvY2l0eS5sZW4oKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eUxlbmd0aCA8PSB0aGlzLmFjY2VsZXJhdGlvbkxpbWl0ID8gb3V0VmVsb2NpdHkgOiBvdXRWZWxvY2l0eS5tdWwodGhpcy5hY2NlbGVyYXRpb25MaW1pdCkuZGl2KG91dFZlbG9jaXR5TGVuZ3RoKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eS5hZGQodGhpcy5sYXN0VmVsb2NpdHkpO1xyXG4gICAgICAgICAgICAvLyDmlrDpgJ/luqZcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBjYy5WZWMzKG91dFZlbG9jaXR5KTtcclxuICAgICAgICAgICAgbGV0IG5ld1Bvc3Rpb24gPSB0aGlzLmNvbnRleHQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgLy8g6K6+572u5Z2Q5qCHXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRQb3NpdGlvbih0aGlzLnZlbG9jaXR5Lm11bChkdCkuYWRkKG5ld1Bvc3Rpb24gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMobmV3UG9zdGlvbi54LCBuZXdQb3N0aW9uLnksIDApIDogbmV3UG9zdGlvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZvcmNlLnNldChjYy5WZWMzLlpFUk8pO1xyXG4gICAgICAgIHRoaXMuZHJhZyA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOeugOaYk+WKm+mpseWKqCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlLHlipvpqbHliqjmm7TmlrDvvIjlhrLph4/mm7TmlrDvvIlcclxuICAgICAqIFxyXG4gICAgICog5LiA6Iis5oOF5Ya15LiL5bm25LiN5o6o6I2Q5L2/55SoICBcclxuICAgICAqIOWmguaenOmcgOimgeWunueOsFBCRO+8jOWFiea7keaguOetieaViOaenO+8jOivt+S9v+eUqHVwZGF0ZUJ5VmVsb2NpdHkoKSAgXHJcbiAgICAgKiBcclxuICAgICAqIOWPr+S7peWTjeW6lOeerOaXtuWKm++8miBhZGRGb3JjZSgpLCBhZGRJbnB1dCgpICBcclxuICAgICAqIOWPr+S7peWTjeW6lOaMgeS5heWKm++8miBwZXJtYW5lbnRGb3JjZSAgXHJcbiAgICAgKiBcclxuICAgICAqIOWmguWHveaVsOWQjeWtl+aJgOekuu+8jOS4jeS8muS6p+eUn+mAn+W6pu+8jOWPquimgeayoeacieWKm+WwseS8muWBnOS4iyAgXHJcbiAgICAgKiDkuJTorqHnrpfmlrnlvI/nqI3mnInkuI3lkIzvvIzku4XlsIblipvkuI7ml7bpl7Tnm7jkuZjvvIznp7DkuLrlhrLph49cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUJ5Zm9yY2UgPSBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICB0aGlzLmFkZFBlcm1hbmVudEZvcmNlVG9QaHlzaWMoKTtcclxuICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3N0aW9uID0gdGhpcy5jb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVGb3JjZSA9IHRoaXMuZm9yY2UubXVsKGR0KTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldFBvc2l0aW9uKG5ld1Bvc3Rpb24uYWRkKHVwZGF0ZUZvcmNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZm9yY2Uuc2V0KGNjLlZlYzMuWkVSTyk7XHJcbiAgICAgICAgdGhpcy5kcmFnID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG59XHJcbiJdfQ==
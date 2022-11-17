
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
                this._Physicforce = new cc.Vec3(force.x, force.y, 0).add(this._Physicforce);
            else
                this._Physicforce = force.add(this._Physicforce);
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
     * （CPU时间变动不超过±0.01ms的情况下，当然跟平台性能也有关系，所以js的实际表现会更差，
     * 还有这里的测试并非只使用这个移动组件，同时每个项目还有一个20个骨骼的1000面网格体在运动）
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcUGF3bk1vdmVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQW9FO0FBT3BFO0lBQ0ksc0JBQVksT0FBeUM7UUFLM0MsWUFBTyxHQUFxQyxJQUFJLENBQUM7UUFrQzNELGdIQUFnSDtRQUVoSDs7V0FFRztRQUNPLGVBQVUsR0FBRztZQUNuQixRQUFRO1lBQ1IsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPO1lBQ1AsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztZQUNQLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87WUFDUCxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixTQUFTO1lBQ1QsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUY7Ozs7Ozs7V0FPRztRQUNJLGtCQUFhLEdBQUcsVUFBVSxNQUF5QixFQUFFLE1BQXlCLEVBQUUsS0FBd0IsRUFBRSxLQUFjO1lBQzNILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNq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TUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUMsT0FBTztZQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUNoSjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQUEsQ0FBQztJQThCTixtQkFBQztBQUFELENBbmpCQSxBQW1qQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGhNYWNybyBhcyBraXNtaXQgfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcblxyXG5pbnRlcmZhY2UgSVBhd25Nb3ZlbWVudEludGVyZmFjZSB7XHJcbiAgICBnZXRQb3NpdGlvbigpOiBjYy5WZWMzO1xyXG4gICAgc2V0UG9zaXRpb24oeDogY2MuVmVjMyB8IGNjLlZlYzIgfCBudW1iZXIsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXduTW92ZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogY2MuTm9kZSB8IElQYXduTW92ZW1lbnRJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuYXJyaXZlUG9zaXRpb24gPSBjb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnRleHQ6IGNjLk5vZGUgfCBJUGF3bk1vdmVtZW50SW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbiAgICAvLyBUQUcgcG9zaXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLDovr7nm67moIdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9hcnJpdmVQb3NpdGlvbjogY2MuVmVjMztcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yiw6L6+55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYXJyaXZlUG9zaXRpb24oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fycml2ZVBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLDovr7nm67moIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhcnJpdmVQb3NpdGlvbih2YWx1ZTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IG5ldyBjYy5WZWMzKHZhbHVlLngsIHZhbHVlLnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fYXJyaXZlUG9zaXRpb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5Yiw6L6+55uu5qCH5YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkQXJyaXZlUG9zaXRpb24ob2Zmc2V0OiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChvZmZzZXQgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IHRoaXMuX2Fycml2ZVBvc2l0aW9uLmFkZChuZXcgY2MuVmVjMyhvZmZzZXQueCwgb2Zmc2V0LnksIDApKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycml2ZVBvc2l0aW9uID0gdGhpcy5fYXJyaXZlUG9zaXRpb24uYWRkKG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFRBRyBtb3ZlIHJhbmdlIHNldHRpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi+ueeVjOWumuS5ieWGheWuuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZml4ZWRCb3VuZCA9IHtcclxuICAgICAgICAvLyDovrnnlYzmnInmlYjmgKdcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgLy8g6L6555WM5Y6f54K5XHJcbiAgICAgICAgb3JpZ2luOiBuZXcgY2MuVmVjMygwKSxcclxuICAgICAgICAvLyDovrnnlYzojIPlm7RcclxuICAgICAgICBleHRlbnQ6IG5ldyBjYy5WZWMzKDApLFxyXG4gICAgICAgIC8vIOi+ueeVjOWvuem9kFxyXG4gICAgICAgIGFsaWduOiBuZXcgY2MuVmVjMygwKSxcclxuICAgICAgICAvLyDlnIblv4PovrnnlYzljYrlvoRcclxuICAgICAgICByYWRpdXM6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6L6555WMXHJcbiAgICAgKiBAcGFyYW0geyp9IGV4dGVudCBcclxuICAgICAqIEBwYXJhbSB7Kn0gb3JpZ2luIFxyXG4gICAgICogQHBhcmFtIHsqfSBhbGlnblxyXG4gICAgICogQHBhcmFtIHsqfSB2YWxpZCBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Rml4ZWRCb3VuZCA9IGZ1bmN0aW9uIChleHRlbnQ6IGNjLlZlYzMgfCBjYy5WZWMyLCBvcmlnaW46IGNjLlZlYzMgfCBjYy5WZWMyLCBhbGlnbjogY2MuVmVjMyB8IGNjLlZlYzIsIHZhbGlkOiBCb29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5maXhlZEJvdW5kLmV4dGVudCA9IGV4dGVudCBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhleHRlbnQueCwgZXh0ZW50LnksIDApIDogZXh0ZW50O1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4gPSBvcmlnaW4gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMob3JpZ2luLngsIG9yaWdpbi55LCAwKSA6IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmZpeGVkQm91bmQuYWxpZ24gPSBhbGlnbiBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhhbGlnbi54LCBhbGlnbi55LCAwKSA6IGFsaWduO1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC52YWxpZCA9IHZhbGlkID8gdmFsaWQgOiB0aGlzLmZpeGVkQm91bmQudmFsaWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZmQ5Yi26L6T5YWl55+i6YeP5Zyo5pa55b2i6L6555WM5YaFXHJcbiAgICAgKiBAcGFyYW0geyp9IHZlY3RvciBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5Cb3hCb3VuZCA9IGZ1bmN0aW9uICh2ZWN0b3I6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgb3V0ID0gdmVjdG9yO1xyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkQm91bmQudmFsaWQpIHtcclxuICAgICAgICAgICAgb3V0LnggPSBraXNtaXQuY2xhbXAob3V0LngsIHRoaXMuZml4ZWRCb3VuZC5leHRlbnQueCwgdGhpcy5maXhlZEJvdW5kLmFsaWduLngsIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4ueCk7XHJcbiAgICAgICAgICAgIG91dC55ID0ga2lzbWl0LmNsYW1wKG91dC55LCB0aGlzLmZpeGVkQm91bmQuZXh0ZW50LnksIHRoaXMuZml4ZWRCb3VuZC5hbGlnbi55LCB0aGlzLmZpeGVkQm91bmQub3JpZ2luLnkpO1xyXG4gICAgICAgICAgICBvdXQueiA9IGtpc21pdC5jbGFtcChvdXQueiwgdGhpcy5maXhlZEJvdW5kLmV4dGVudC56LCB0aGlzLmZpeGVkQm91bmQuYWxpZ24ueiwgdGhpcy5maXhlZEJvdW5kLm9yaWdpbi56KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgdmVsb2NpdHkgJiBtb3ZlbWVudCBiYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6YCa55So56e75Yqo5bGe5oCnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgX0xhc3RWZWxvY2l0eSA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgcHVibGljIGdldCBsYXN0VmVsb2NpdHkoKTogY2MuVmVjMyB7IHJldHVybiB0aGlzLl9MYXN0VmVsb2NpdHk7IH07XHJcbiAgICBwdWJsaWMgc2V0IGxhc3RWZWxvY2l0eSh2ZWxvY2l0eTogY2MuVmVjMykgeyB0aGlzLl9MYXN0VmVsb2NpdHkgPSB2ZWxvY2l0eTsgfTtcclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN6YCf5bqmXHJcbiAgICAgKiDkuI3lu7rorq7nm7TmjqXosIPnlKjvvIzogIzmmK/kvb/nlKjlroPnmoTmlrnms5U6XHJcbiAgICAgKiB2ZWxvY2l0eSDnm7TmjqXorr7nva7pgJ/luqZcclxuICAgICAqIGFkZFZlbG9jaXR5IOebtOaOpea3u+WKoOmAn+W6plxyXG4gICAgICog55u05o6l5re75Yqg6YCf5bqm5bm25LiN5Yip5LqO54mp5L2T6L+Q5Yqo5qih5ouf77yM5bqU5b2T5YWI6L+b6KGM5Yqb55qE5re75YqgOlxyXG4gICAgICogaW5wdXQg5re75Yqg56e75Yqo6L6T5YWlXHJcbiAgICAgKiBmb3JjZSDmt7vliqDliptcclxuICAgICAqIOiuoeeul+aXtumcgOimgeazqOaEj++8jOmZpOmdnumcgOimgeWwhuiuoeeul+WAvOS/neWtmOWcqOatpO+8jOWQpuWImeS4jeWPr+S7peS9v+eUqOmTvuW8j+i/kOeul+OAglxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1ZlbG9jaXR5ID0gbmV3IGNjLlZlYzMoMCk7XHJcbiAgICBwdWJsaWMgZ2V0IHZlbG9jaXR5KCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fVmVsb2NpdHk7IH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumAn+W6plxyXG4gICAgICogQHBhcmFtIHt2ZWN9IHZlbG9jaXR5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHZlbG9jaXR5KHZlbG9jaXR5OiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmICh2ZWxvY2l0eSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX1ZlbG9jaXR5ID0gbmV3IGNjLlZlYzModmVsb2NpdHkueCwgdmVsb2NpdHkueSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0ge3ZlY30gdmVsb2NpdHkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkVmVsb2NpdHkodmVsb2NpdHkpIHtcclxuICAgICAgICBpZiAodmVsb2NpdHkgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IHRoaXMuX1ZlbG9jaXR5LmFkZChuZXcgY2MuVmVjMyh2ZWxvY2l0eS54LCB2ZWxvY2l0eS55LCAwKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IHRoaXMuX1ZlbG9jaXR5LmFkZCh2ZWxvY2l0eSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6YCf5bqm6ZmQ5Yi2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQWNjZWxlcmF0aW9uTGltaXQ6IG51bWJlciA9IDk5OTk7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluacgOWkp+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFjY2VsZXJhdGlvbkxpbWl0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9BY2NlbGVyYXRpb25MaW1pdDsgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5pyA5aSn6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0geyp9IHNwZWVkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFjY2VsZXJhdGlvbkxpbWl0KGxpbWl0OiBudW1iZXIpIHsgdGhpcy5fQWNjZWxlcmF0aW9uTGltaXQgPSBsaW1pdCB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN5qih5byP5LiL5pyA5aSn56e75Yqo6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTWF4U3BlZWQ6IG51bWJlciA9IDEwMDA7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluacgOWkp+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG1heFNwZWVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9NYXhTcGVlZDsgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5pyA5aSn6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0geyp9IHNwZWVkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG1heFNwZWVkKHNwZWVkKSB7IHRoaXMuX01heFNwZWVkID0gc3BlZWQgfHwgdGhpcy5fTWF4U3BlZWQ7IH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3niannkIbliptcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9QaHlzaWNmb3JjZSA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bniannkIbliptcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGZvcmNlKCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fUGh5c2ljZm9yY2UgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u54mp55CG5YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZm9yY2UoZm9yY2U6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKGZvcmNlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fUGh5c2ljZm9yY2UgPSBuZXcgY2MuVmVjMyhmb3JjZS54LCBmb3JjZS55LCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1BoeXNpY2ZvcmNlID0gZm9yY2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDniannkIbliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGRmb3JjZShmb3JjZTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAoZm9yY2UgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IG5ldyBjYy5WZWMzKGZvcmNlLngsIGZvcmNlLnksIDApLmFkZCh0aGlzLl9QaHlzaWNmb3JjZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IGZvcmNlLmFkZCh0aGlzLl9QaHlzaWNmb3JjZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN54mp55CG6Zi75YqbXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfUGh5c2ljRHJhZzogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W54mp55CG6Zi75YqbXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkcmFnKCkgeyByZXR1cm4gTWF0aC5tYXgodGhpcy5fUGh5c2ljRHJhZywgMCkgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u54mp55CG6Zi75YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZHJhZyhkcmFnOiBudW1iZXIpIHsgdGhpcy5fUGh5c2ljRHJhZyA9IE1hdGgubWF4KGRyYWcsIDApOyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyB5LmF5YqbL+mYu+WKm1xyXG4gICAgICog6K+l5bGe5oCn5Lya5Zyo5q+P5qyh5pu05paw5pe26Ieq5Yqo5Yqg5YWl5Yiw54mp55CG5Yqb5LitXHJcbiAgICAgKiDkuI3orrrlvZPliY3mmK/lkKblt7Lnu4/liqDlhaXniannkIbliptcclxuICAgICAqIOi/meWPr+S7peeUqOS6jiDpo47vvIzlvJXlipvnrYnlsZ7mgKdcclxuICAgICAqIFxyXG4gICAgICog5b2T5LiN6ZyA6KaB5oyB5LmF5Yqb5pe26ZyA6KaB6K6+572u5Li6IHVuZGVmaW5lZFxyXG4gICAgICog6L+Z5Y+v5Lul6YCa6L+H5YW26K6+572u5pa55rOV5p2l5a6M5oiQ77yM5LiN6ZyA6KaB5omL5Yqo6LWL5YC8XHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMgeS5heWKm1xyXG4gICAgICog6K+35LiN6KaB55u05o6l6K6+572u5oyB5LmF5Yqb77yM6ICM5piv5L2/55So5a6D55qE5pa55rOV77yaXHJcbiAgICAgKiBzZXRQZXJtRm9yY2UoKSDorr7nva7mjIHkuYXliptcclxuICAgICAqIGdldFBlcm1Gb3JjZSgpIOiOt+WPluaMgeS5heWKm1xyXG4gICAgICogQHBhcmFtIHtWZWMzfSBwZXJtYW5lbnRGb3JjZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1Blcm1hbmVudEZvcmNlOiBjYy5WZWMzIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mjIHkuYXliptcclxuICAgICAqIEBwYXJhbSB7VmVjM30gdmVjIOW9k+S4jemcgOimgeaMgeS5heWKm+aXtuiuvue9ruS4unVuZGVmaW5lZOWPr+S7peebtOaOpeWFs+mXrVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHBlcm1Gb3JjZShmb3JjZTogY2MuVmVjMyB8IGNjLlZlYzIgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICAgICAgaWYgKGZvcmNlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgICAgIHRoaXMuX1Blcm1hbmVudEZvcmNlID0gbmV3IGNjLlZlYzMoZm9yY2UueCwgZm9yY2UueSwgMCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX1Blcm1hbmVudEZvcmNlID0gZm9yY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fUGVybWFuZW50Rm9yY2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIHkuYXlipsgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwZXJtRm9yY2UoKTogY2MuVmVjMyB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLl9QZXJtYW5lbnRGb3JjZSB9O1xyXG4gICAgcHVibGljIGdldCB2YWxpZHBlcm1Gb3JjZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX1Blcm1hbmVudEZvcmNlID8gdHJ1ZSA6IGZhbHNlIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIHkuYXpmLvliptcclxuICAgICAqIOWmguaenOS4jemcgOimgeS9v+eUqOaMgeS5hemYu+WKm++8jOivt+iuvue9ruS4unVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1Blcm1hbmVudERyYWc6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5oyB5LmF6Zi75YqbXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHJhZyDlvZPkuI3pnIDopoHmjIHkuYXpmLvlipvml7borr7nva7kuLp1bmRlZmluZWTlj6/ku6Xnm7TmjqXlhbPpl61cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHBlcm1EcmFnKGRyYWc6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChkcmFnIDw9IDApIHRoaXMuX1Blcm1hbmVudERyYWcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLl9QZXJtYW5lbnREcmFnID0gTWF0aC5tYXgoZHJhZywgMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIHkuYXpmLvliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwZXJtRHJhZygpOiBudW1iZXIgeyByZXR1cm4gTWF0aC5tYXgodGhpcy5fUGVybWFuZW50RHJhZyB8fCAwLCAwKSB9O1xyXG4gICAgcHVibGljIGdldCB2YWxpZFBlcm1EcmFnKCk6IGJvb2xlYW4geyByZXR1cm4gdHlwZW9mIHRoaXMuX1Blcm1hbmVudERyYWcgPT0gJ251bWJlcicgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi0qOmHj1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX01hc3M6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlui0qOmHj1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbWFzcygpIHsgcmV0dXJuIE1hdGgubWF4KHRoaXMuX01hc3MsIC4wMDEpIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rui0qOmHj1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgbWFzcyh2YWx1ZSkgeyB0aGlzLl9NYXNzID0gTWF0aC5tYXgodmFsdWUsIC4wMDEpIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43lipvmlrnlkJFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9HcmF2aXR5OiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMCwgMCwgLTk4MCk7XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumHjeWKm+aWueWQkVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRyYWcg5b2T5LiN6ZyA6KaB5oyB5LmF6Zi75Yqb5pe26K6+572u5Li6dW5kZWZpbmVk5Y+v5Lul55u05o6l5YWz6ZetXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBncmF2aXR5KGdyYXZpdHk6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKGdyYXZpdHkgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9HcmF2aXR5ID0gbmV3IGNjLlZlYzMoZ3Jhdml0eS54LCBncmF2aXR5LnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fR3Jhdml0eSA9IGdyYXZpdHk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bph43lipvmlrnlkJFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmF2aXR5KCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fR3Jhdml0eSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5Yqb5qCH5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfR3Jhdml0eVNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bph43lipvmoIfluqZcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdyYXZpdHlTY2FsZSgpIHsgcmV0dXJuIHRoaXMuX0dyYXZpdHlTY2FsZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ph43lipvmoIfluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBncmF2aXR5U2NhbGUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9HcmF2aXR5U2NhbGUgPSB2YWx1ZSB9O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWItuWKqOaRqeaTpuWKm+WboOWtkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0JyYWtpbmdGcmljdGlvbkZhY3RvcjogbnVtYmVyID0gMjtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yi25Yqo5pGp5pOm5Yqb5Zug5a2QXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBicmFraW5nRnJpY3Rpb25GYWN0b3IoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0JyYWtpbmdGcmljdGlvbkZhY3RvciB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLbliqjmkanmk6blipvlm6DlrZBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBicmFraW5nRnJpY3Rpb25GYWN0b3IodmFsdWU6IG51bWJlcikgeyB0aGlzLl9CcmFraW5nRnJpY3Rpb25GYWN0b3IgPSB2YWx1ZSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi25Yqo5pGp5pOm5YqbXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQnJha2luZ0ZyaWN0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliLbliqjmkanmk6bliptcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJyYWtpbmdGcmljdGlvbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQnJha2luZ0ZyaWN0aW9uIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWItuWKqOaRqeaTpuWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJyYWtpbmdGcmljdGlvbih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX0JyYWtpbmdGcmljdGlvbkZhY3RvciA9IHZhbHVlIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLbliqjpmY3pgJ9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9CcmFraW5nRGVjZWxlcmF0aW9uID0gMjA0ODtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yi25Yqo6ZmN6YCfXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBicmFraW5nRGVjZWxlcmF0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9CcmFraW5nRGVjZWxlcmF0aW9uIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWItuWKqOmZjemAn1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJyYWtpbmdEZWNlbGVyYXRpb24odmFsdWU6IG51bWJlcikgeyB0aGlzLl9CcmFraW5nRGVjZWxlcmF0aW9uID0gdmFsdWUgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnlKjmiLflipvovpPlhaUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnp7vliqjovpPlhaVcclxuICAgICAqIEBwYXJhbSB7VmVjM30gZGlyZWN0aW9uIOaWueWQke+8jOm7mOiupOiupOS4uuaYr+S4uuWNleS9jeWQkemHj++8jFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkSW5wdXQoZGlyZWN0aW9uOiBjYy5WZWMzIHwgY2MuVmVjMiwgc2NhbGU/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmZvcmNlID0gZGlyZWN0aW9uIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSwgMCkgOiBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UubXVsKHRoaXMubWF4U3BlZWQgKiAoc2NhbGUgfHwgMSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmHjeWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZEdyYXZpdHkoc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZS5hZGQodGhpcy5ncmF2aXR5Lm11bCh0aGlzLm1hc3MpKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDpmLvliptcclxuICAgICAqIEBwYXJhbSB7Kn0gZHJhZyBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZERyYWcoZHJhZzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnID0gZHJhZyArIHRoaXMuZHJhZztcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg5pu05paw6I635Y+WICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43lipvliqDpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFjY2VsZXJhdGlvbkR1ZSA9IG5ldyBjYy5WZWMzKDApO1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOWHveaVsOWuj+W6kyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIC8vIFNJR05QT1NUIOino+eul+mYtuautSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/meaYr+S4gOS4quWGhemDqOaWueazlVxyXG4gICAgICog5bCG5oyB5LmF5Yqb5Yqg5YWl5Yiw54mp55CG5Yqb5LitXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhZGRQZXJtYW5lbnRGb3JjZVRvUGh5c2ljKCkge1xyXG4gICAgICAgIC8vIOa3u+WKoOaMgeS5heWKm1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkcGVybUZvcmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2UgPSB0aGlzLmZvcmNlLmFkZCh0aGlzLnBlcm1Gb3JjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOa3u+WKoOaMgeS5hemYu+WKmyBcclxuICAgICAgICB0aGlzLmRyYWcgPSAhdGhpcy52YWxpZFBlcm1EcmFnID8gdGhpcy5kcmFnIDogKHRoaXMucGVybURyYWcgKyB0aGlzLmRyYWcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/meaYr+S4gOS4quWGhemDqOaWueazlVxyXG4gICAgICog5Yik5pat5b2T5YmN56e75Yqo57uE5Lu25piv5ZCm5a6M5YWo6Z2Z5q2iXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjYW5Nb3ZlKCkge1xyXG4gICAgICAgIHJldHVybiAhKGNjLlZlYzMuZXF1YWxzKHRoaXMuZm9yY2UsIGNjLlZlYzMuWkVSTykgJiYgY2MuVmVjMy5lcXVhbHModGhpcy52ZWxvY2l0eSwgY2MuVmVjMy5aRVJPKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOWPjOa1geS8oOWKqOW8j+enu+WKqOi9veWFtyAtIOino+eul+mYtuautSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCf5bqm5ZCR5YmNXHJcbiAgICAgKiDopoHkvb/nlKjmraTmlrnms5Xov5vooYznp7vliqjvvIzpnIDopoHlnKjlhbbku5bku7vmhI/pmLbmrrXlhoXlkJHmraTnp7vliqjnu4Tku7bmt7vliqDliptcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAgKi9cclxuICAgIC8vIHB1YmxpYyB2ZWxvY2l0eUZvcndhcmQoZHQsIHJvdGF0ZVJhdGUpIHtcclxuICAgIC8vICAgICBsZXQgc2xpcCA9IGtpc21pdC52ZWMyRG90KGtpc21pdC5yb3RhdGlvblRvVmVjMih0aGlzLmNvbnRleHQucm90YXRpb24pLCBraXNtaXQubm9ybWFsaXoyKHRoaXMudmVsb2NpdHkpKTtcclxuICAgIC8vICAgICBzbGlwID0gKHNsaXAgLSAxKSAvIDI7IC8vIOmdouWQkeaXtuS4ujDvvIzog4zlkJHml7bkuLotMlxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBUQUcg56e75Yqo5pu05paw5Ye95pWwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g5b6E55u0LeWIsOi+vueCuSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmm7TmlrDliLDorqHnrpfkvY3nva5cclxuICAgICog6L+Z5Liq5pa55rOV5Lya6Ieq6KGM56e75Yqo5YiwIHRoaXMuYXJyaXZlUG9zaXRpb25cclxuICAgICog5L2/55So5q2k5pa55rOV5bCG5peg6KeG6Zi75Yqb5LiO6YeN5Yqb77yM5b6E55u05oyJ54Wn5oyH5a6a6YCf5bqm5bmz56e76L+H5Y67XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0ge051bWJlcn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgKiBAcGFyYW0ge051bWJlcn0gc3BlZWQg5omn6KGM6YCf5bqm77yM57y655yBbWF4U3BlZWRcclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IHRoIOi3neemu+i/h+mbtumYiOWAvO+8jOe8uuecgTFcclxuICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlVG9Qb3NpdGlvbihkdCwgdGgsIHNwZWVkKSB7XHJcbiAgICAgICAgbGV0IGNvblBvcyA9IHRoaXMuY29udGV4dC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBwb3MgPSBjb25Qb3MgaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMoY29uUG9zLngsIGNvblBvcy55LCAwKSA6IGNvblBvc1xyXG4gICAgICAgIGxldCBtb3ZlVmVjdG9yID0gdGhpcy5hcnJpdmVQb3NpdGlvbi5zdWIocG9zKTtcclxuICAgICAgICBsZXQgbW92ZWxlbmd0aCA9IGNjLlZlYzMubGVuKG1vdmVWZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAobW92ZWxlbmd0aCA+ICh0aCB8fCAxKSkge1xyXG4gICAgICAgICAgICBsZXQgdW5pdCA9IG1vdmVWZWN0b3IuZGl2KG1vdmVsZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgbW92ZSA9IHVuaXQubXVsKE1hdGgubWluKChzcGVlZCB8fCB0aGlzLm1heFNwZWVkKSAqIGR0LCBtb3ZlbGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRQb3NpdGlvbih0aGlzLmluQm94Qm91bmQobW92ZS5hZGQocG9zKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g5Y+M5rWB5Lyg5Yqo5byP56e75Yqo6L295YW3LeWIsOi+vueCuSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIGZpeCAgICAgICAgICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICog5bCG5ZCR5YmN6L206Z2i5ZCR5L2N572u56e75YqoXHJcbiAgICAgKiDov5nkuKrmlrnms5XkvJroh6rooYznp7vliqjliLAgdGhpcy5hcnJpdmVQb3NpdGlvblxyXG4gICAgICog5L2/55So5q2k5pa55rOV5bCG5peg6KeG6Zi75Yqb5LiO6YeN5Yqb56e75YqoXHJcbiAgICAgKiDnp7vliqjnmoTlkIzml7bkvJrlsIboh6rouqvop5LluqbmnJ3lkJHnp7vliqjmlrnlkJFcclxuICAgICAqIOWPr+S7pemAmui/h+aMh+WumlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVUb1dhcmRQb3N0aW9uKCkge1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOWfuuacrOmAn+W6pumpseWKqCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sx6YCf5bqm6amx5Yqo5pu05pawXHJcbiAgICAgKiDopoHkvb/nlKjmraTmlrnms5Xov5vooYznp7vliqjvvIzpnIDopoHlnKjlhbbku5bku7vmhI/pmLbmrrXlhoXlkJHmraTnp7vliqjnu4Tku7bmt7vliqDliptcclxuICAgICAqIFxyXG4gICAgICog5Y+v5Lul5ZON5bqU556s5pe25Yqb77yaIGFkZEZvcmNlKCksIGFkZERyYWcoKSwgYWRkSW5wdXQoKSAgXHJcbiAgICAgKiDlj6/ku6Xlk43lupTmjIHkuYXlipvvvJogcGVybWFuZW50Rm9yY2UsIHBlcm1hbmVudERyYWcgIFxyXG4gICAgICogXHJcbiAgICAgKiDmr5TlpoLlnKjpu5jorqTmg4XlhrXkuIvvvIzkuI3kvJrlrp7njrDpmLvlipvvvIzkvaDnmoTnp7vliqjlsLHlg4/mmK/lnKjml6Dph43lipvnjq/looPkuIvkuIDmoLfvvIxcclxuICAgICAqIOiAjOaDs+imgeaooeS7v+i1sOi3r+aIluaYr+WFtuS7luenu+WKqOaooeW8j++8jOmcgOimgeWcqOatpOabtOaWsOS6i+S7tuS5i+WJjeaIluaYr+S5i+WQjua3u+WKoOS4gOS7veWKmy/pmLvlipvjgIIgIFxyXG4gICAgICog5Zyo6YCa5bi45oOF5Ya15LiL77yM5L2g5LiN6ZyA6KaB5ouF5b+D5re75YqgIOWKmy/pmLvlipsg5omn6KGM6aG65bqP5Lya6YCg5oiQ6K6h566X5aSx6K+vXHJcbiAgICAgKiDlm6DkuLrov5nmmK/nlLHljZXkuIDnjq/ot6/mnoTmiJDnmoTnp7vliqjmqKHlvI9cclxuICAgICAqIFxyXG4gICAgICog5YWz5LqO5qih5ouf6Zi25q615pu05paw77yaICBcclxuICAgICAqIOS9oOWPr+S7peWcqOWQjOS4gOW4p+aIluaYr+eUn+WRveWRqOacn+eahOS4jeWQjOmYtuauteWGheWkmuasoei/m+ihjOabtOaWsO+8jFxyXG4gICAgICog5L2G5L2/55So5pu05paw5Ye95pWw6L+b6KGM6L+t5Luj5Lya6YCg5oiQ6YCf5bqm5rWB6YCd77yMXHJcbiAgICAgKiDmiYDku6Xlu7rorq7oh6rooYzlr7noioLngrnlnZDmoIfov5vooYzov63ku6PvvIzogIzlkI7nu5/kuIDov5vooYzpqbHliqjmm7TmlrAgIFxyXG4gICAgICogXHJcbiAgICAgKiDlpoLmnpzov63ku6PkvJrpgKDmiJDpgJ/luqbplJnkvY3vvIzlj6/ku6Xojrflj5bph43lipvliqDpgJ/luqbvvIzlsIbpgJ/luqbovazkuLrliqjog70gIFxyXG4gICAgICog5YeP5reh5Y6f5aeL6YCf5bqm77yM6ICM5ZCO5Zyo5pu05paw5YmN5bCG5Yqo6IO96L+U5Zue57uZ5Yqb5Y2z5Y+vICBcclxuICAgICAqIFxyXG4gICAgICog5L6L5aaC6ZOB6ZO+5Lu/55yf77yM5bCx5Y+v5Lul5a+55q+P6IqC6ZOB6ZO+5YWI6L+b6KGM5LiA5qyh6L+Q5Yqo5pu05paw77yMXHJcbiAgICAgKiDogIzlkI7ov5vooYzliqjog73ovazmjaLvvIzlsIbmr4/oioLpk4Hpk77nmoTlnZDmoIflkJHliY3kuIDkuKrov5vooYznuqbmnZ/ku7/nnJ/vvIzmr5TlpoLov5vooYzov63ku6Pku7/nnJ8zMOasoSAgXHJcbiAgICAgKiDku7/nnJ/lrozmr5XlkI7ph43mlrDotYvog73vvIzmiJbmmK/lsIbliqjog73orqHnrpfkuLrlhbbku5bmlYjmnpzjgIIgIFxyXG4gICAgICog5YW25L2Z5oOF5Ya15LiL77yM6K6h566X5Yqo6IO95bm25rKh5pyJ5LuA5LmI55So5aSE77yM5L2g5Y+v5Lul5bCG5YW25rOo6YeK44CCXHJcbiAgICAgKiBcclxuICAgICAqIOW9k+eEtu+8jOacgOWlveS4jeimgeeUqOS4iui/sOaWueazlei/m+ihjOWghuagiOaooeaLn++8myAgXHJcbiAgICAgKiBDUFXmi6XmnInmm7TlpJrlpI3mnYLnmoTmjIfku6Tku6PkuLrlpITnkIbov5nkupvmlrnms5XjgIJcclxuICAgICAqIFxyXG4gICAgICog5o6o6I2Q5ZyoY29jb3PkuK3lsIblkIzlsY/ov5DnrpfmlbDph4/mjqfliLblnKgyMDDku6XlhoVcclxuICAgICAqIOi/meS4quaVsOWAvOaYr+eUqGMrK+WunueOsOWQjuaOqOeul+eahO+8jGMrK+WPr+S7pei+vuWIsDIwMDArICBcclxuICAgICAqIO+8iENQVeaXtumXtOWPmOWKqOS4jei2hei/h8KxMC4wMW1z55qE5oOF5Ya15LiL77yM5b2T54S26Lef5bmz5Y+w5oCn6IO95Lmf5pyJ5YWz57O777yM5omA5LulanPnmoTlrp7pmYXooajnjrDkvJrmm7Tlt67vvIxcclxuICAgICAqIOi/mOaciei/memHjOeahOa1i+ivleW5tumdnuWPquS9v+eUqOi/meS4quenu+WKqOe7hOS7tu+8jOWQjOaXtuavj+S4qumhueebrui/mOacieS4gOS4qjIw5Liq6aqo6aq855qEMTAwMOmdoue9keagvOS9k+WcqOi/kOWKqO+8iVxyXG4gICAgICog6LaF6L+H6L+Z5Liq5pWw5YC85ZCO5Lya5Ye6546w5LiA5a6a56iL5bqm55qE5o6J5binXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Kn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQnlWZWxvY2l0eShkdDogbnVtYmVyKTogUGF3bk1vdmVtZW50IHtcclxuICAgICAgICB0aGlzLmFkZFBlcm1hbmVudEZvcmNlVG9QaHlzaWMoKTtcclxuICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAvLyDlupTnlKjotKjph49cclxuICAgICAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UuZGl2KHRoaXMubWFzcyk7XHJcbiAgICAgICAgICAgIC8vIOiuoeeul+mYu+WKm1xyXG4gICAgICAgICAgICBsZXQgaW5jb21pbmdEcmFnID0gdGhpcy5kcmFnICogZHQgKyAxO1xyXG4gICAgICAgICAgICAvLyDph43lipvliqDpgJ/luqZcclxuICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb25EdWUgPSB0aGlzLnZlbG9jaXR5LmRpdihpbmNvbWluZ0RyYWcpO1xyXG4gICAgICAgICAgICAvLyDlupTnlKjlipvliLDpgJ/luqZcclxuICAgICAgICAgICAgbGV0IG91dFZlbG9jaXR5ID0gdGhpcy5mb3JjZS5tdWwoZHQpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5LmFkZCh0aGlzLnZlbG9jaXR5KS5kaXYoaW5jb21pbmdEcmFnKTtcclxuICAgICAgICAgICAgLy8g6ZmQ5Yi2XHJcbiAgICAgICAgICAgIGxldCBvdXRWZWxvY2l0eUxlbmd0aCA9IG91dFZlbG9jaXR5LmxlbigpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5TGVuZ3RoIDw9IHRoaXMubWF4U3BlZWQgPyBvdXRWZWxvY2l0eSA6IG91dFZlbG9jaXR5Lm11bCh0aGlzLm1heFNwZWVkKS5kaXYob3V0VmVsb2NpdHlMZW5ndGgpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5LnN1Yih0aGlzLmxhc3RWZWxvY2l0eSlcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHlMZW5ndGggPSBvdXRWZWxvY2l0eS5sZW4oKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eUxlbmd0aCA8PSB0aGlzLmFjY2VsZXJhdGlvbkxpbWl0ID8gb3V0VmVsb2NpdHkgOiBvdXRWZWxvY2l0eS5tdWwodGhpcy5hY2NlbGVyYXRpb25MaW1pdCkuZGl2KG91dFZlbG9jaXR5TGVuZ3RoKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eS5hZGQodGhpcy5sYXN0VmVsb2NpdHkpO1xyXG4gICAgICAgICAgICAvLyDmlrDpgJ/luqZcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBjYy5WZWMzKG91dFZlbG9jaXR5KTtcclxuICAgICAgICAgICAgbGV0IG5ld1Bvc3Rpb24gPSB0aGlzLmNvbnRleHQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgLy8g6K6+572u5Z2Q5qCHXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRQb3NpdGlvbih0aGlzLnZlbG9jaXR5Lm11bChkdCkuYWRkKG5ld1Bvc3Rpb24gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMobmV3UG9zdGlvbi54LCBuZXdQb3N0aW9uLnksIDApIDogbmV3UG9zdGlvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZvcmNlLnNldChjYy5WZWMzLlpFUk8pO1xyXG4gICAgICAgIHRoaXMuZHJhZyA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOeugOaYk+WKm+mpseWKqCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlLHlipvpqbHliqjmm7TmlrDvvIjlhrLph4/mm7TmlrDvvIlcclxuICAgICAqIFxyXG4gICAgICog5LiA6Iis5oOF5Ya15LiL5bm25LiN5o6o6I2Q5L2/55SoICBcclxuICAgICAqIOWmguaenOmcgOimgeWunueOsFBCRO+8jOWFiea7keaguOetieaViOaenO+8jOivt+S9v+eUqHVwZGF0ZUJ5VmVsb2NpdHkoKSAgXHJcbiAgICAgKiBcclxuICAgICAqIOWPr+S7peWTjeW6lOeerOaXtuWKm++8miBhZGRGb3JjZSgpLCBhZGRJbnB1dCgpICBcclxuICAgICAqIOWPr+S7peWTjeW6lOaMgeS5heWKm++8miBwZXJtYW5lbnRGb3JjZSAgXHJcbiAgICAgKiBcclxuICAgICAqIOWmguWHveaVsOWQjeWtl+aJgOekuu+8jOS4jeS8muS6p+eUn+mAn+W6pu+8jOWPquimgeayoeacieWKm+WwseS8muWBnOS4iyAgXHJcbiAgICAgKiDkuJTorqHnrpfmlrnlvI/nqI3mnInkuI3lkIzvvIzku4XlsIblipvkuI7ml7bpl7Tnm7jkuZjvvIznp7DkuLrlhrLph49cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUJ5Zm9yY2UgPSBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICB0aGlzLmFkZFBlcm1hbmVudEZvcmNlVG9QaHlzaWMoKTtcclxuICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3N0aW9uID0gdGhpcy5jb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVGb3JjZSA9IHRoaXMuZm9yY2UubXVsKGR0KTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldFBvc2l0aW9uKG5ld1Bvc3Rpb24uYWRkKHVwZGF0ZUZvcmNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZm9yY2Uuc2V0KGNjLlZlYzMuWkVSTyk7XHJcbiAgICAgICAgdGhpcy5kcmFnID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG59XHJcbiJdfQ==
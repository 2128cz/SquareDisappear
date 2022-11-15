
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/load/Loading');
require('./assets/scripts/base/class/ActorClass');
require('./assets/scripts/base/class/DevelopersToolClass');
require('./assets/scripts/base/class/DevelopersToolGlobal');
require('./assets/scripts/base/class/DiologClass');
require('./assets/scripts/base/class/DynamicPanelClass');
require('./assets/scripts/base/class/PawnClass');
require('./assets/scripts/base/core/RigorousLibrary');
require('./assets/scripts/base/core/RigorousType');
require('./assets/scripts/base/core/UObject');
require('./assets/scripts/base/core/UObjectBaseUtility');
require('./assets/scripts/base/tool/EventReflect');
require('./assets/scripts/base/tool/GridAdsorb');
require('./assets/scripts/base/tool/NoRootTree');
require('./assets/scripts/base/tool/PanelTool');
require('./assets/scripts/base/tool/PawnMovement');
require('./assets/scripts/game/BL');
require('./assets/scripts/game/Block');
require('./assets/scripts/game/BlockGroup');
require('./assets/scripts/game/GL');
require('./assets/scripts/game/GameLevel');
require('./assets/scripts/game/Setting');
require('./assets/scripts/game/effect/PlayDraAniAndDestory');
require('./assets/scripts/widget/Botton_LoadEff');
require('./assets/scripts/widget/GameUI');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3364aqqOgFIq4CCAllydcf6', 'DevelopersToolGlobal');
// scripts/base/class/DevelopersToolGlobal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAnimPhySimSpace = exports.EWidgetCoordinateSpace = exports.ESceneCoordinateSpace = exports.panelType = exports.mathMacro = exports.DevelopersToolGlobal = void 0;
// import { DevelopersToolGlobal as ccvv } from './DevelopersToolGlobal';
var DevelopersToolGlobal = /** @class */ (function () {
    function DevelopersToolGlobal() {
    }
    Object.defineProperty(DevelopersToolGlobal, "warehouse", {
        get: function () {
            this._Global_Warehouse = this._Global_Warehouse || {};
            return this._Global_Warehouse;
        },
        set: function (value) {
            this._Global_Warehouse = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "loadResourcescatalog", {
        /**
         * 加载资源目录
         */
        get: function () {
            return {
                // "url": { type: res type, url: "save url" },
                //加载音乐音效资源
                "sounds": { type: cc.AudioClip, url: "sounds" },
                //加载预制件资源
                "prefabs": { type: cc.Prefab, url: "prefabs" },
                //加载图集资源
                // "atlas": { type: cc.SpriteAtlas, url: "atlas" },
                //加载单个精灵资源
                "frames": { type: cc.SpriteFrame, url: "frames" },
                //加载分享图
                "share": { type: cc.SpriteFrame, url: "share" },
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "tool", {
        get: function () {
            this._Global_Tool = this._Global_Tool || {};
            return this._Global_Tool;
        },
        set: function (value) {
            this._Global_Tool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "other", {
        get: function () {
            this._Global_Other = this._Global_Other || {};
            return this._Global_Other;
        },
        set: function (value) {
            this._Global_Other = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "layers", {
        /**
         * 获取所有层
         */
        get: function () {
            this._Global_GenralLayer = this._Global_GenralLayer || {};
            return this._Global_GenralLayer;
        },
        /**
         * 设置所有层
         */
        set: function (value) {
            this._Global_GenralLayer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "layer", {
        /**
         * 获取底层
         */
        get: function () {
            return this.layers[0];
        },
        /**
         * 添加的新节点
         */
        set: function (value) {
            var key = Object.keys(this._Global_GenralLayer || {}).length;
            this.layers[key.toString()] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "scripts", {
        get: function () {
            this._Global_OpenScript = this._Global_OpenScript || {};
            return this._Global_OpenScript;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "script", {
        set: function (value) {
            if (!value)
                return;
            var key;
            if (typeof value === 'object') {
                key = value.name;
                if (!this._OpenScript_FristName)
                    this._OpenScript_FristName = key;
            }
            else {
                key = (Object.keys(this._Global_OpenScript || {}).length).toString();
            }
            this.scripts[key] = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 清空脚本
     */
    DevelopersToolGlobal.script_Clean = function () {
        this._OpenScript_FristName = null;
        this._Global_OpenScript = {};
    };
    Object.defineProperty(DevelopersToolGlobal, "scriptName", {
        /**
         * 获得所有脚本名称
         */
        get: function () {
            if (!this._Global_OpenScript)
                return null;
            return Object.keys(this._Global_OpenScript);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "fristScript", {
        /**
         * 获取第一个加入的脚本
         */
        get: function () {
            return this._Global_OpenScript[this._OpenScript_FristName];
        },
        enumerable: false,
        configurable: true
    });
    DevelopersToolGlobal.getName = function (inst) {
        return inst.name + inst['_id'].replace(/\./g, "");
    };
    Object.defineProperty(DevelopersToolGlobal, "instances", {
        /**
         * 获取全部实例
         */
        get: function () {
            this._Global_Instance = this._Global_Instance || {};
            return this._Global_Instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "instance", {
        /**
         * 添加实例，用实例的名称与ID作键名
         */
        set: function (value) {
            this.instance[this.getName(value)] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "instance_remove", {
        /**
         * 删除实例
         * 如果未指定有效值则为清除
         */
        set: function (value) {
            if (!value)
                this._Global_Instance = {};
            else
                this.instance[this.getName(value)] = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 根据名称获取实例
     * 如果没有使用自定义名称，则默认用实例ID作为名称，这可能与任何名称常量不符
     */
    DevelopersToolGlobal.getInstanceByName = function (name) {
        return this._Global_Instance[name];
    };
    /**
     * 根据名称设置实例
     */
    DevelopersToolGlobal.setInstanceByName = function (name, inst) {
        this._Global_Instance[name] = inst;
    };
    Object.defineProperty(DevelopersToolGlobal, "tuple", {
        /**
         * 获取元组
         */
        get: function () {
            return this._Global_Tuple;
        },
        /**
         * 元组加入一个项目
         * 如果加入一个无效的值，比如布尔，undefined，unll，将清空这个元组
         * 加入一个空数组或是空对象是有效的，所以会作为元组的一个值加入
         */
        set: function (value) {
            if (!value || typeof value == 'boolean')
                this._Global_Tuple = [];
            this._Global_Tuple.push(value);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 元组加入独有项目
     * 返回这个项目是否存在
     */
    DevelopersToolGlobal.tupleOnly = function (value) {
        if (this._Global_Tuple.indexOf(value))
            return true;
        else
            this.tuple = value;
        return false;
    };
    Object.defineProperty(DevelopersToolGlobal, "tuple_remove", {
        /**
         * 移除元组一个项目
         */
        set: function (value) {
            this._Global_Tuple.filter(function (element, index, array) { element != value; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 仓库全局实例
     * 存放load时载入的数据
     */
    DevelopersToolGlobal._Global_Warehouse = null;
    /**
     * 工具全局实例
     * 可以注入其他工具类
     */
    DevelopersToolGlobal._Global_Tool = null;
    /**
     * 杂项全局实例
     * 可以注入其他项目
     */
    DevelopersToolGlobal._Global_Other = null;
    /**
     * 游戏基本层全局实例
     * 只能注入cc.Node
     */
    DevelopersToolGlobal._Global_GenralLayer = null;
    /**
     * 游戏基本层全局脚本
     * 只能注入cc.component，不过实际上并没有进行限制
     */
    DevelopersToolGlobal._Global_OpenScript = null;
    DevelopersToolGlobal._OpenScript_FristName = null;
    /**
     * 全局实例
     */
    DevelopersToolGlobal._Global_Instance = {};
    /**
     * 全局元组
     */
    DevelopersToolGlobal._Global_Tuple = [];
    return DevelopersToolGlobal;
}());
exports.DevelopersToolGlobal = DevelopersToolGlobal;
// import { mathMacro as mm } from '../base/class/DevelopersToolGlobal';
var mathMacro = /** @class */ (function () {
    function mathMacro() {
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        this.mnum = {};
        this._IsMat = false;
        var isNumber = function (value) { return typeof value === 'number' && !isNaN(value); };
        if (!num[0]) {
            this.mnum['x'] = 0;
            this.mnum['y'] = 0;
            this.mnum['z'] = 0;
            this.mnum['w'] = 0;
        }
        else if (num[0].x) {
            this.mnum['x'] = isNumber(num[0].x) ? num[0].x : 0;
            this.mnum['y'] = isNumber(num[0].y) ? num[0].y : 0;
            this.mnum['z'] = isNumber(num[0].z) ? num[0].z : 0;
            this.mnum['w'] = isNumber(num[0].w) ? num[0].w : 0;
        }
        else if (num[0][0]) {
            this.mnum['x'] = isNumber(num[0][0]) ? num[0][0] : 0;
            this.mnum['y'] = isNumber(num[0][1]) ? num[0][1] : 0;
            this.mnum['z'] = isNumber(num[0][2]) ? num[0][2] : 0;
            this.mnum['w'] = isNumber(num[0][3]) ? num[0][3] : 0;
        }
        else if (num[0] instanceof cc.Size) {
            this.mnum['x'] = isNumber(num[0].width) ? num[0].width : 0;
            this.mnum['y'] = isNumber(num[0].height) ? num[0].height : 0;
        }
        else if (num[0] instanceof cc.Color) {
            this.mnum['x'] = isNumber(num[0].r) ? num[0].r : 0;
            this.mnum['y'] = isNumber(num[0].g) ? num[0].g : 0;
            this.mnum['z'] = isNumber(num[0].b) ? num[0].b : 0;
            this.mnum['w'] = isNumber(num[0].a) ? num[0].a : 0;
        }
        else if (num[0] instanceof cc.Mat3) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
        }
        else if (num[0] instanceof cc.Mat4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
            this.mnum['m09'] = num[0]['m09'];
            this.mnum['m10'] = num[0]['m10'];
            this.mnum['m11'] = num[0]['m11'];
            this.mnum['m12'] = num[0]['m12'];
            this.mnum['m13'] = num[0]['m13'];
            this.mnum['m14'] = num[0]['m14'];
            this.mnum['m15'] = num[0]['m15'];
        }
        else if (num.length <= 4) {
            this.mnum['x'] = num[0];
            this.mnum['y'] = num[1];
            this.mnum['z'] = num[2];
            this.mnum['w'] = num[3];
        }
        else if (num.length >= 4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0];
            this.mnum['m01'] = num[1];
            this.mnum['m02'] = num[2];
            this.mnum['m03'] = num[3];
            this.mnum['m04'] = num[4];
            this.mnum['m05'] = num[5];
            this.mnum['m06'] = num[6];
            this.mnum['m07'] = num[7];
            this.mnum['m08'] = num[8];
            this.mnum['m09'] = num[9];
            this.mnum['m10'] = num[10];
            this.mnum['m11'] = num[11];
            this.mnum['m12'] = num[12];
            this.mnum['m13'] = num[13];
            this.mnum['m14'] = num[14];
            this.mnum['m15'] = num[15];
        }
        // let out = { lrc: '2128cz' };
        // if (num[0] && typeof num[0] === 'object') { out['m00'] = isNumber(num[0].x) ? num[0].x : num[0].x || (isNumber(num[0][0]) ? num[0][0] : num[0].width || num[0].r || (isNumber(num[0]) ? num[0] : 0)); out['m01'] = isNumber(num[0].y) ? num[0].y : num[0].y || (isNumber(num[0][1]) ? num[0][1] : num[0].height || num[0].g || (isNumber(num[0]) ? num[0] : 0)); out['m02'] = isNumber(num[0].z) ? num[0].z : num[0].z || (isNumber(num[0][2]) ? num[0][2] : num[0].b || (isNumber(num[0]) ? num[0] : 0)); out['m03'] = isNumber(num[0].w) ? num[0].w : num[0].w || (isNumber(num[0][3]) ? num[0][3] : num[0].a || (isNumber(num[0]) ? num[0] : 0)); }
        // else { out['m00'] = num[0]; out['m01'] = num[1]; out['m02'] = num[2]; out['m03'] = num[3]; out['m04'] = num[4]; out['m05'] = num[5]; out['m06'] = num[6]; out['m07'] = num[7]; out['m08'] = num[8]; out['m09'] = num[9]; out['m10'] = num[10]; out['m11'] = num[11]; out['m12'] = num[12]; out['m13'] = num[13]; out['m14'] = num[14]; out['m15'] = num[15]; }
        // this.mnum = out;
    }
    Object.defineProperty(mathMacro, "random_uint2", {
        // 返回随机的整数，范围在[0, x)
        get: function () { return Math.floor(Math.random() * 2); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint3", {
        get: function () { return Math.floor(Math.random() * 3); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint4", {
        get: function () { return Math.floor(Math.random() * 4); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint5", {
        get: function () { return Math.floor(Math.random() * 5); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint6", {
        get: function () { return Math.floor(Math.random() * 6); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint7", {
        get: function () { return Math.floor(Math.random() * 7); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint8", {
        get: function () { return Math.floor(Math.random() * 8); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint9", {
        get: function () { return Math.floor(Math.random() * 9); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint1", {
        get: function () { return Math.floor(Math.random() * 10); },
        enumerable: false,
        configurable: true
    });
    /**
     * 一维限制在范围中
     * @param {number} num 输入值
     * @param {number} size 范围
     * @param {number} align 对齐位置，默认0表示在范围的中间，-1表示与左对齐，最小为0，最大为size，1相反
     * @param {number} offset 范围偏移
     * @returns 返回限制后的值
     */
    mathMacro.clamp = function (num, size, align, offset) {
        var sature = ((align || 0) + 1) / 2;
        var min = 0 - (sature * size) + (offset || 0);
        var max = (1 - sature) * size + (offset || 0);
        return Math.max(Math.min(num, max), min);
    };
    Object.defineProperty(mathMacro.prototype, "isVec", {
        get: function () { return !this._IsMat; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "x", {
        get: function () { return this.mnum['x']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "y", {
        get: function () { return this.mnum['y']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "z", {
        get: function () { return this.mnum['z']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "w", {
        get: function () { return this.mnum['w']; },
        enumerable: false,
        configurable: true
    });
    /**
     * 判断是否在盒体范围内
     * @param {*} origin 盒体坐标原点
     * @param {*} extent 盒体范围，这是盒体的各轴半径
     * @return
     */
    mathMacro.prototype.isInBox2 = function (origin, extent) {
        if (this.isVec) {
            var vec = mathMacro.meanwhileAll(function (a) {
                var b = a[0] - a[1];
                return b >= -a[2] && b <= a[2];
            }, this.mnum, origin, extent);
            return vec['x'] && vec['y'];
        }
        return false;
    };
    /**
     * 模取正
     */
    mathMacro.PMod = function (a, b) {
        var bb = Math.abs(b);
        var aa = a % bb;
        var out = a < 0 ? (1 - Math.abs(aa) / bb) * bb % bb : aa;
        return isNaN(out) ? 0 : out;
    };
    /**
     * 快捷定义
     * 但是就不支持逐个定义了
     * @param num
     * @returns
     */
    mathMacro.v = function (num) {
        return new mathMacro(num);
    };
    mathMacro.meanwhileAll = function (func) {
        var obj = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            obj[_i - 1] = arguments[_i];
        }
        var out = {};
        Object.keys(obj[0]).forEach(function (element) {
            var array = [];
            for (var index = 0; index < obj.length; index++) {
                array.push(obj[index][element]);
            }
            ;
            out[element] = func(array, obj.length);
        });
        return out;
    };
    return mathMacro;
}());
exports.mathMacro = mathMacro;
/**
 * 全局枚举
 * 对象可移动性
 */
var panelType;
(function (panelType) {
    panelType[panelType["staitc"] = 0] = "staitc";
    panelType[panelType["stationary"] = 1] = "stationary";
    panelType[panelType["Moveable"] = 2] = "Moveable";
})(panelType = exports.panelType || (exports.panelType = {}));
/**
 * 全局枚举
 * 场景坐标空间枚举
 */
var ESceneCoordinateSpace;
(function (ESceneCoordinateSpace) {
    ESceneCoordinateSpace[ESceneCoordinateSpace["simulation"] = 0] = "simulation";
    ESceneCoordinateSpace[ESceneCoordinateSpace["world"] = 1] = "world";
    ESceneCoordinateSpace[ESceneCoordinateSpace["local"] = 2] = "local";
})(ESceneCoordinateSpace = exports.ESceneCoordinateSpace || (exports.ESceneCoordinateSpace = {}));
/**
 * 全局枚举
 * 控件坐标空间枚举
 */
var EWidgetCoordinateSpace;
(function (EWidgetCoordinateSpace) {
    EWidgetCoordinateSpace[EWidgetCoordinateSpace["screen"] = 0] = "screen";
    EWidgetCoordinateSpace[EWidgetCoordinateSpace["scene"] = 1] = "scene";
})(EWidgetCoordinateSpace = exports.EWidgetCoordinateSpace || (exports.EWidgetCoordinateSpace = {}));
/**
 * 全局枚举
 * 动画物理空间枚举
 */
var EAnimPhySimSpace;
(function (EAnimPhySimSpace) {
    EAnimPhySimSpace[EAnimPhySimSpace["component"] = 0] = "component";
    EAnimPhySimSpace[EAnimPhySimSpace["actor"] = 1] = "actor";
    EAnimPhySimSpace[EAnimPhySimSpace["scene"] = 2] = "scene";
    EAnimPhySimSpace[EAnimPhySimSpace["relativeRoot"] = 3] = "relativeRoot";
    EAnimPhySimSpace[EAnimPhySimSpace["relativeNode"] = 4] = "relativeNode";
})(EAnimPhySimSpace = exports.EAnimPhySimSpace || (exports.EAnimPhySimSpace = {}));
// 测试语句，可以在控制台中能够看到这里
cc["vv"] = cc["vv"] || DevelopersToolGlobal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSx5RUFBeUU7QUFDekU7SUFBQTtJQW1PQSxDQUFDO0lBM05HLHNCQUFrQixpQ0FBUzthQUEzQjtZQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUE0QixLQUFnQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBUUQsc0JBQWtCLDRDQUFvQjtRQUh0Qzs7V0FFRzthQUNIO1lBQ0ksT0FBTztnQkFDSCw4Q0FBOEM7Z0JBQzlDLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtnQkFDL0MsU0FBUztnQkFDVCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUM5QyxRQUFRO2dCQUNSLG1EQUFtRDtnQkFDbkQsVUFBVTtnQkFDVixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUNqRCxPQUFPO2dCQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7YUFDbEQsQ0FBQTtRQUNMLENBQUM7OztPQUFBO0lBVUQsc0JBQWtCLDRCQUFJO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FB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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RDthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFDSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7YUFDSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO2FBQ0ksSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMz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QU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDLENBQUE7SUF1Q0wsZ0JBQUM7Q0F6UEQsQUF5UEMsSUFBQTtBQXpQWSw4QkFBUztBQTBQdEI7OztHQUdHO0FBQ0gsSUFBWSxTQUVYO0FBRkQsV0FBWSxTQUFTO0lBQ2pCLDZDQUFNLENBQUE7SUFBRSxxREFBVSxDQUFBO0lBQUUsaURBQVEsQ0FBQTtBQUNoQyxDQUFDLEVBRlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFFcEI7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLHFCQUVYO0FBRkQsV0FBWSxxQkFBcUI7SUFDN0IsNkVBQVUsQ0FBQTtJQUFFLG1FQUFLLENBQUE7SUFBRSxtRUFBSyxDQUFBO0FBQzVCLENBQUMsRUFGVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUVoQztBQUNEOzs7R0FHRztBQUNILElBQVksc0JBRVg7QUFGRCxXQUFZLHNCQUFzQjtJQUM5Qix1RUFBTSxDQUFBO0lBQUUscUVBQUssQ0FBQTtBQUNqQixDQUFDLEVBRlcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFFakM7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLGdCQUVYO0FBRkQsV0FBWSxnQkFBZ0I7SUFDeEIsaUVBQVMsQ0FBQTtJQUFFLHlEQUFLLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUsdUVBQVksQ0FBQTtJQUFFLHVFQUFZLENBQUE7QUFDdkQsQ0FBQyxFQUZXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRTNCO0FBSUQscUJBQXFCO0FBQ3JCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQW9CLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogY2MuTm9kZSB8XHJcbiAgICBjYy5UaWxlZE1hcCB8XHJcbiAgICBjYy5QYXJ0aWNsZVN5c3RlbSB8XHJcbiAgICBjYy5WaWRlb1BsYXllciB8XHJcbiAgICBjYy5XZWJWaWV3IHxcclxuICAgIGNjLlNwcml0ZSB8XHJcbiAgICBjYy5SZW5kZXJUZXh0dXJlIHxcclxuICAgIGNjLlRleHR1cmUyRCB8XHJcbiAgICBjYy5QcmVmYWIgfFxyXG4gICAgY2MuQXNzZXRNYW5hZ2VyIHwge307XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJVG9vbEdsb2JhbEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJT3RoZXJHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSWdhbmVyYWxMYXllckludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBjYy5Ob2RlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW9wZW5TY3JpcHRJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSWluc3RhbmNlSW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IG51bWJlcl06IGNjLkNvbXBvbmVudCB8IGNjLk5vZGU7XHJcbn1cclxuLy8gaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5leHBvcnQgY2xhc3MgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuT5bqT5YWo5bGA5a6e5L6LXHJcbiAgICAgKiDlrZjmlL5sb2Fk5pe26L295YWl55qE5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9XYXJlaG91c2U6IElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHdhcmVob3VzZSgpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlID0gdGhpcy5fR2xvYmFsX1dhcmVob3VzZSB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1dhcmVob3VzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB3YXJlaG91c2UodmFsdWU6IElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kOebruW9lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsb2FkUmVzb3VyY2VzY2F0YWxvZygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBcInVybFwiOiB7IHR5cGU6IHJlcyB0eXBlLCB1cmw6IFwic2F2ZSB1cmxcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9vemfs+S5kOmfs+aViOi1hOa6kFxyXG4gICAgICAgICAgICBcInNvdW5kc1wiOiB7IHR5cGU6IGNjLkF1ZGlvQ2xpcCwgdXJsOiBcInNvdW5kc1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L296aKE5Yi25Lu26LWE5rqQXHJcbiAgICAgICAgICAgIFwicHJlZmFic1wiOiB7IHR5cGU6IGNjLlByZWZhYiwgdXJsOiBcInByZWZhYnNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9veWbvumbhui1hOa6kFxyXG4gICAgICAgICAgICAvLyBcImF0bGFzXCI6IHsgdHlwZTogY2MuU3ByaXRlQXRsYXMsIHVybDogXCJhdGxhc1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L295Y2V5Liq57K+54G16LWE5rqQXHJcbiAgICAgICAgICAgIFwiZnJhbWVzXCI6IHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHVybDogXCJmcmFtZXNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9veWIhuS6q+WbvlxyXG4gICAgICAgICAgICBcInNoYXJlXCI6IHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHVybDogXCJzaGFyZVwiIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6XlhbflhajlsYDlrp7kvotcclxuICAgICAqIOWPr+S7peazqOWFpeWFtuS7luW3peWFt+exu1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfVG9vbDogSVRvb2xHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHRvb2woKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1Rvb2wgPSB0aGlzLl9HbG9iYWxfVG9vbCB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1Rvb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB0b29sKHZhbHVlOiBJVG9vbEdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9Ub29sID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOadgumhueWFqOWxgOWunuS+i1xyXG4gICAgICog5Y+v5Lul5rOo5YWl5YW25LuW6aG555uuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9PdGhlcjogSU90aGVyR2xvYmFsSW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBvdGhlcigpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfT3RoZXIgPSB0aGlzLl9HbG9iYWxfT3RoZXIgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PdGhlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IG90aGVyKHZhbHVlOiBJT3RoZXJHbG9iYWxJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfT3RoZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5Z+65pys5bGC5YWo5bGA5a6e5L6LXHJcbiAgICAgKiDlj6rog73ms6jlhaVjYy5Ob2RlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9HZW5yYWxMYXllcjogSWdhbmVyYWxMYXllckludGVyZmFjZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOacieWxglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsYXllcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX0dlbnJhbExheWVyID0gdGhpcy5fR2xvYmFsX0dlbnJhbExheWVyIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaJgOacieWxglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBsYXllcnModmFsdWU6IElnYW5lcmFsTGF5ZXJJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5bqV5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyc1swXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg55qE5paw6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxheWVyKHZhbHVlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllciB8fCB7fSkubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2tleS50b1N0cmluZygpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDohJrmnKxcclxuICAgICAqIOWPquiDveazqOWFpWNjLmNvbXBvbmVudO+8jOS4jei/h+WunumZheS4iuW5tuayoeaciei/m+ihjOmZkOWItlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfT3BlblNjcmlwdDogSW9wZW5TY3JpcHRJbnRlcmZhY2UgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfT3BlblNjcmlwdF9GcmlzdE5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JpcHRzKCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NyaXB0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBrZXkgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX09wZW5TY3JpcHRfRnJpc3ROYW1lKSB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGtleSA9IChPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCB8fCB7fSkubGVuZ3RoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcmlwdHNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrohJrmnKxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzY3JpcHRfQ2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+aJgOacieiEmuacrOWQjeensFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JpcHROYW1lKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluesrOS4gOS4quWKoOWFpeeahOiEmuacrFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBmcmlzdFNjcmlwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHRbdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWVdO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX0luc3RhbmNlID0gPElpbnN0YW5jZUludGVyZmFjZT57fTtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgZ2V0TmFtZShpbnN0OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc3QubmFtZSArIGluc3RbJ19pZCddLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWo6YOo5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlcygpOiBJaW5zdGFuY2VJbnRlcmZhY2Uge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9JbnN0YW5jZSA9IHRoaXMuX0dsb2JhbF9JbnN0YW5jZSB8fCA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfSW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWunuS+i++8jOeUqOWunuS+i+eahOWQjeensOS4jklE5L2c6ZSu5ZCNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGluc3RhbmNlKHZhbHVlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZVt0aGlzLmdldE5hbWUodmFsdWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTlrp7kvotcclxuICAgICAqIOWmguaenOacquaMh+WumuacieaViOWAvOWImeS4uua4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBpbnN0YW5jZV9yZW1vdmUodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB0aGlzLl9HbG9iYWxfSW5zdGFuY2UgPSA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZVt0aGlzLmdldE5hbWUodmFsdWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7lkI3np7Dojrflj5blrp7kvosgXHJcbiAgICAgKiDlpoLmnpzmsqHmnInkvb/nlKjoh6rlrprkuYnlkI3np7DvvIzliJnpu5jorqTnlKjlrp7kvotJROS9nOS4uuWQjeensO+8jOi/meWPr+iDveS4juS7u+S9leWQjeensOW4uOmHj+S4jeesplxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlQnlOYW1lKG5hbWU6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfSW5zdGFuY2VbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOagueaNruWQjeensOiuvue9ruWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlQnlOYW1lKG5hbWU6IHN0cmluZyB8IG51bWJlciwgaW5zdDogY2MuQ29tcG9uZW50IHwgY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9JbnN0YW5jZVtuYW1lXSA9IGluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlhYPnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfR2xvYmFsX1R1cGxlID0gW107XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFg+e7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB0dXBsZSgpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9UdXBsZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YWD57uE5Yqg5YWl5LiA5Liq6aG555uuICBcclxuICAgICAqIOWmguaenOWKoOWFpeS4gOS4quaXoOaViOeahOWAvO+8jOavlOWmguW4g+WwlO+8jHVuZGVmaW5lZO+8jHVubGzvvIzlsIbmuIXnqbrov5nkuKrlhYPnu4QgIFxyXG4gICAgICog5Yqg5YWl5LiA5Liq56m65pWw57uE5oiW5piv56m65a+56LGh5piv5pyJ5pWI55qE77yM5omA5Lul5Lya5L2c5Li65YWD57uE55qE5LiA5Liq5YC85Yqg5YWlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHR1cGxlKHZhbHVlOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PSAnYm9vbGVhbicpIHRoaXMuX0dsb2JhbF9UdXBsZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9UdXBsZS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YWD57uE5Yqg5YWl54us5pyJ6aG555uuXHJcbiAgICAgKiDov5Tlm57ov5nkuKrpobnnm67mmK/lkKblrZjlnKhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0dXBsZU9ubHkodmFsdWU6IG9iamVjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9HbG9iYWxfVHVwbGUuaW5kZXhPZih2YWx1ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50dXBsZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5YWD57uE5LiA5Liq6aG555uuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHR1cGxlX3JlbW92ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9UdXBsZS5maWx0ZXIoKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4geyBlbGVtZW50ICE9IHZhbHVlIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIGltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5leHBvcnQgY2xhc3MgbWF0aE1hY3JvIHtcclxuICAgIC8vIOi/lOWbnumaj+acuueahOaVtOaVsO+8jOiMg+WbtOWcqFswLCB4KVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQyKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQzKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ0KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ1KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ2KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ3KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ4KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ5KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQxKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IH1cclxuICAgIC8qKlxyXG4gICAgICog5LiA57u06ZmQ5Yi25Zyo6IyD5Zu05LitXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtIOi+k+WFpeWAvFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUg6IyD5Zu0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYWxpZ24g5a+56b2Q5L2N572u77yM6buY6K6kMOihqOekuuWcqOiMg+WbtOeahOS4remXtO+8jC0x6KGo56S65LiO5bem5a+56b2Q77yM5pyA5bCP5Li6MO+8jOacgOWkp+S4unNpemXvvIwx55u45Y+NXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IOiMg+WbtOWBj+enu1xyXG4gICAgICogQHJldHVybnMg6L+U5Zue6ZmQ5Yi25ZCO55qE5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXAobnVtLCBzaXplLCBhbGlnbiwgb2Zmc2V0KSB7XHJcbiAgICAgICAgbGV0IHNhdHVyZSA9ICgoYWxpZ24gfHwgMCkgKyAxKSAvIDI7XHJcbiAgICAgICAgbGV0IG1pbiA9IDAgLSAoc2F0dXJlICogc2l6ZSkgKyAob2Zmc2V0IHx8IDApO1xyXG4gICAgICAgIGxldCBtYXggPSAoMSAtIHNhdHVyZSkgKiBzaXplICsgKG9mZnNldCB8fCAwKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obnVtLCBtYXgpLCBtaW4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAw55+i6YePXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIFJHQkEgY29sb3JzLjxici8+XHJcbiAgICAgKiBFYWNoIGNvbG9yIGNvbXBvbmVudCBpcyBhbiBpbnRlZ2VyIHZhbHVlIHdpdGggYSByYW5nZSBmcm9tIDAgdG8gMjU1Ljxici8+XHJcbiAgICAgKiBAemgg6YCa6L+HIFJlZOOAgUdyZWVu44CBQmx1ZSDpopzoibLpgJrpgZPooajnpLrpopzoibLvvIzlubbpgJrov4cgQWxwaGEg6YCa6YGT6KGo56S65LiN6YCP5piO5bqm44CCPGJyLz5cclxuICAgICAqIOavj+S4qumAmumBk+mDveS4uuWPluWAvOiMg+WbtCBbMCwgMjU1XSDnmoTmlbTmlbDjgII8YnIvPlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLkNvbG9yKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gTWF0aGVtYXRpY2FsIDN4MyBtYXRyaXguXHJcbiAgICAgKiBAemgg6KGo56S65LiJ57u077yIM3gz77yJ55+p6Zi144CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuTWF0MylcclxuICAgIC8qKlxyXG4gICAgICogQGVuIE1hdGhlbWF0aWNhbCA0eDQgbWF0cml4LlxyXG4gICAgICogQHpoIOihqOekuuWbm+e7tO+8iDR4NO+8ieefqemYteOAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLk1hdDQpXHJcbiAgICAvKipcclxuICAgICAqIEBlblxyXG4gICAgICogQSAyRCByZWN0YW5nbGUgZGVmaW5lZCBieSB4LCB5IHBvc2l0aW9uIGFuZCB3aWR0aCwgaGVpZ2h0LlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDovbTlr7npvZDnn6nlvaLjgIJcclxuICAgICAqIOefqeW9ouWGheeahOaJgOacieeCuemDveWkp+S6juetieS6juefqeW9oueahOacgOWwj+eCuSAoeE1pbiwgeU1pbikg5bm25LiU5bCP5LqO562J5LqO55+p5b2i55qE5pyA5aSn54K5ICh4TWF4LCB5TWF4KeOAglxyXG4gICAgICog55+p5b2i55qE5a695bqm5a6a5LmJ5Li6IHhNYXggLSB4TWlu77yb6auY5bqm5a6a5LmJ5Li6IHlNYXggLSB5TWlu44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuUmVjdClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIHF1YXRlcm5pb25cclxuICAgICAqIEB6aCDlm5vlhYPmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5RdWF0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gVHdvIGRpbWVuc2lvbmFsIHNpemUgdHlwZSByZXByZXNlbnRpbmcgdGhlIHdpZHRoIGFuZCBoZWlnaHQuXHJcbiAgICAgKiBAemgg5LqM57u05bC65a+444CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuU2l6ZSlcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIDJEIHZlY3RvcnMgYW5kIHBvaW50cy5cclxuICAgICAqIEB6aCDkuoznu7TlkJHph4/jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5WZWMyKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgM0QgdmVjdG9ycyBhbmQgcG9pbnRzLlxyXG4gICAgICogQHpoIOS4iee7tOWQkemHj+OAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlZlYzMpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBSZXByZXNlbnRhdGlvbiBvZiBmb3VyLWRpbWVuc2lvbmFsIHZlY3RvcnMuXHJcbiAgICAgKiBAemgg5Zub57u05ZCR6YeP44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuVmVjNClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIG9iamVjdC5cclxuICAgICAqIEB6aCDljIXlkKt4LHkseix3562J5bGe5oCn5ZCN55qE5a+56LGh44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogb2JqZWN0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gYXJyYXkuXHJcbiAgICAgKiBAemgg5pWw57uE44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogbnVtYmVyW10pXHJcbiAgICAvKipcclxuICAgICAqIEBlbiA6KVxyXG4gICAgICogQHpoIOmAkOS4quWumuS5ieWTpu+8jOS6suOAglxyXG4gICAgICovXHJcbiAgICAvLyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyLCB3PzogbnVtYmVyKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gdGhpcyBpcyBnb25uYS4uLiBJcyB0aGlzIHN1cHBvc2VkIHRvLi4uIERlZmluZSBvbmUgYnkgb25lISA/IC4gT2gsIGRvbid0IHdvcnJ5IGFib3V0IG1lLiBJIGNvcGllZCBpdCBmcm9tIGFuIG9mZmljaWFsIGRvY3VtZW50IDtQXHJcbiAgICAgKiBAemgg6YCQ5Liq5a6a5LmJ77yM5Y2D5LiH5LiN6KaB6L+Z5LmI5YGa77yM5L2G5aaC5p6c5L2g5YGa5LqG77yM6YKj5bCx5Lya5Y+R55Sf5b6I5Y+v5oCV55qE5LqL5oOF77yM5q+U5aaC6K+0Li4u5Y+Y5oiQ55+p6Zi1XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG0wMD86IG51bWJlciwgbTAxPzogbnVtYmVyLCBtMDI/OiBudW1iZXIsIG0wMz86IG51bWJlciwgbTEwPzogbnVtYmVyLCBtMTE/OiBudW1iZXIsIG0xMj86IG51bWJlciwgbTEzPzogbnVtYmVyLCBtMjA/OiBudW1iZXIsIG0yMT86IG51bWJlciwgbTIyPzogbnVtYmVyLCBtMjM/OiBudW1iZXIsIG0zMD86IG51bWJlciwgbTMxPzogbnVtYmVyLCBtMzI/OiBudW1iZXIsIG0zMz86IG51bWJlciwpXHJcbiAgICBjb25zdHJ1Y3RvciguLi5udW0pIHtcclxuICAgICAgICBsZXQgaXNOdW1iZXIgPSAodmFsdWUpID0+IHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKTsgfVxyXG4gICAgICAgIGlmICghbnVtWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsndyddID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdLngpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ueCkgPyBudW1bMF0ueCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLnkpID8gbnVtWzBdLnkgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSBpc051bWJlcihudW1bMF0udykgPyBudW1bMF0udyA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXVswXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3knXSA9IGlzTnVtYmVyKG51bVswXVsxXSkgPyBudW1bMF1bMV0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5TaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gaXNOdW1iZXIobnVtWzBdLndpZHRoKSA/IG51bVswXS53aWR0aCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLmhlaWdodCkgPyBudW1bMF0uaGVpZ2h0IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdIGluc3RhbmNlb2YgY2MuQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ucikgPyBudW1bMF0uciA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLmcpID8gbnVtWzBdLmcgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXS5iKSA/IG51bVswXS5iIDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSBpc051bWJlcihudW1bMF0uYSkgPyBudW1bMF0uYSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXSBpbnN0YW5jZW9mIGNjLk1hdDMpIHtcclxuICAgICAgICAgICAgdGhpcy5fSXNNYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMCddID0gbnVtWzBdWydtMDAnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVswXVsnbTAxJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAyJ10gPSBudW1bMF1bJ20wMiddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMyddID0gbnVtWzBdWydtMDMnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVswXVsnbTA0J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA1J10gPSBudW1bMF1bJ20wNSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNiddID0gbnVtWzBdWydtMDYnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVswXVsnbTA3J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA4J10gPSBudW1bMF1bJ20wOCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5NYXQ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0lzTWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDAnXSA9IG51bVswXVsnbTAwJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAxJ10gPSBudW1bMF1bJ20wMSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMiddID0gbnVtWzBdWydtMDInXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDMnXSA9IG51bVswXVsnbTAzJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA0J10gPSBudW1bMF1bJ20wNCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNSddID0gbnVtWzBdWydtMDUnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDYnXSA9IG51bVswXVsnbTA2J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA3J10gPSBudW1bMF1bJ20wNyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOCddID0gbnVtWzBdWydtMDgnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDknXSA9IG51bVswXVsnbTA5J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEwJ10gPSBudW1bMF1bJ20xMCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMSddID0gbnVtWzBdWydtMTEnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTInXSA9IG51bVswXVsnbTEyJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEzJ10gPSBudW1bMF1bJ20xMyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNCddID0gbnVtWzBdWydtMTQnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTUnXSA9IG51bVswXVsnbTE1J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bS5sZW5ndGggPD0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IG51bVswXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBudW1bMV07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gbnVtWzJdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IG51bVszXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtLmxlbmd0aCA+PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0lzTWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDAnXSA9IG51bVswXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVsxXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDInXSA9IG51bVsyXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDMnXSA9IG51bVszXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVs0XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDUnXSA9IG51bVs1XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDYnXSA9IG51bVs2XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVs3XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDgnXSA9IG51bVs4XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDknXSA9IG51bVs5XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTAnXSA9IG51bVsxMF07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTExJ10gPSBudW1bMTFdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMiddID0gbnVtWzEyXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTMnXSA9IG51bVsxM107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTE0J10gPSBudW1bMTRdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNSddID0gbnVtWzE1XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IG91dCA9IHsgbHJjOiAnMjEyOGN6JyB9O1xyXG4gICAgICAgIC8vIGlmIChudW1bMF0gJiYgdHlwZW9mIG51bVswXSA9PT0gJ29iamVjdCcpIHsgb3V0WydtMDAnXSA9IGlzTnVtYmVyKG51bVswXS54KSA/IG51bVswXS54IDogbnVtWzBdLnggfHwgKGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiBudW1bMF0ud2lkdGggfHwgbnVtWzBdLnIgfHwgKGlzTnVtYmVyKG51bVswXSkgPyBudW1bMF0gOiAwKSk7IG91dFsnbTAxJ10gPSBpc051bWJlcihudW1bMF0ueSkgPyBudW1bMF0ueSA6IG51bVswXS55IHx8IChpc051bWJlcihudW1bMF1bMV0pID8gbnVtWzBdWzFdIDogbnVtWzBdLmhlaWdodCB8fCBudW1bMF0uZyB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDInXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogbnVtWzBdLnogfHwgKGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiBudW1bMF0uYiB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDMnXSA9IGlzTnVtYmVyKG51bVswXS53KSA/IG51bVswXS53IDogbnVtWzBdLncgfHwgKGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiBudW1bMF0uYSB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgfVxyXG4gICAgICAgIC8vIGVsc2UgeyBvdXRbJ20wMCddID0gbnVtWzBdOyBvdXRbJ20wMSddID0gbnVtWzFdOyBvdXRbJ20wMiddID0gbnVtWzJdOyBvdXRbJ20wMyddID0gbnVtWzNdOyBvdXRbJ20wNCddID0gbnVtWzRdOyBvdXRbJ20wNSddID0gbnVtWzVdOyBvdXRbJ20wNiddID0gbnVtWzZdOyBvdXRbJ20wNyddID0gbnVtWzddOyBvdXRbJ20wOCddID0gbnVtWzhdOyBvdXRbJ20wOSddID0gbnVtWzldOyBvdXRbJ20xMCddID0gbnVtWzEwXTsgb3V0WydtMTEnXSA9IG51bVsxMV07IG91dFsnbTEyJ10gPSBudW1bMTJdOyBvdXRbJ20xMyddID0gbnVtWzEzXTsgb3V0WydtMTQnXSA9IG51bVsxNF07IG91dFsnbTE1J10gPSBudW1bMTVdOyB9XHJcbiAgICAgICAgLy8gdGhpcy5tbnVtID0gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW51bTogb2JqZWN0ID0ge307XHJcbiAgICBwcml2YXRlIF9Jc01hdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdldCBpc1ZlYygpIHsgcmV0dXJuICF0aGlzLl9Jc01hdDsgfVxyXG4gICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3gnXSB9XHJcbiAgICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubW51bVsneSddIH1cclxuICAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tbnVtWyd6J10gfVxyXG4gICAgcHVibGljIGdldCB3KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3cnXSB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbWVhbndoaWxlQWxsID0gZnVuY3Rpb24gPEZVTkMgZXh0ZW5kcyBGdW5jdGlvbiwgVCBleHRlbmRzIG9iamVjdD4oZnVuYzogRlVOQywgLi4ub2JqOiBUW10pIHtcclxuICAgICAgICBsZXQgb3V0ID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqWzBdKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gob2JqW2luZGV4XVtlbGVtZW50XSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG91dFtlbGVtZW50XSA9IGZ1bmMoYXJyYXksIG9iai5sZW5ndGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mmK/lkKblnKjnm5LkvZPojIPlm7TlhoVcclxuICAgICAqIEBwYXJhbSB7Kn0gb3JpZ2luIOebkuS9k+WdkOagh+WOn+eCuVxyXG4gICAgICogQHBhcmFtIHsqfSBleHRlbnQg55uS5L2T6IyD5Zu077yM6L+Z5piv55uS5L2T55qE5ZCE6L205Y2K5b6EXHJcbiAgICAgKiBAcmV0dXJuIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNJbkJveDI8VCBleHRlbmRzIGNjLlZlYzI+KG9yaWdpbjogVCwgZXh0ZW50OiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWZWMpIHtcclxuICAgICAgICAgICAgbGV0IHZlYyA9IG1hdGhNYWNyby5tZWFud2hpbGVBbGwoKGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBiID0gYVswXSAtIGFbMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYiA+PSAtYVsyXSAmJiBiIDw9IGFbMl07XHJcbiAgICAgICAgICAgIH0sIHRoaXMubW51bSwgb3JpZ2luLCBleHRlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjWyd4J10gJiYgdmVjWyd5J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaooeWPluato1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBNb2QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBiYiA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgIGxldCBhYSA9IGEgJSBiYjtcclxuICAgICAgICBsZXQgb3V0ID0gYSA8IDAgPyAoMSAtIE1hdGguYWJzKGFhKSAvIGJiKSAqIGJiICUgYmIgOiBhYVxyXG4gICAgICAgIHJldHVybiBpc05hTihvdXQpID8gMCA6IG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW/q+aNt+WumuS5iSBcclxuICAgICAqIOS9huaYr+WwseS4jeaUr+aMgemAkOS4quWumuS5ieS6hlxyXG4gICAgICogQHBhcmFtIG51bSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHYobnVtOiBhbnkpOiBtYXRoTWFjcm8ge1xyXG4gICAgICAgIHJldHVybiBuZXcgbWF0aE1hY3JvKG51bSk7XHJcbiAgICB9XHJcblxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5a+56LGh5Y+v56e75Yqo5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBwYW5lbFR5cGUge1xyXG4gICAgc3RhaXRjLCBzdGF0aW9uYXJ5LCBNb3ZlYWJsZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Zy65pmv5Z2Q5qCH56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFU2NlbmVDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2ltdWxhdGlvbiwgd29ybGQsIGxvY2FsXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDmjqfku7blnZDmoIfnqbrpl7TmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVXaWRnZXRDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2NyZWVuLCBzY2VuZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Yqo55S754mp55CG56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFQW5pbVBoeVNpbVNwYWNlIHtcclxuICAgIGNvbXBvbmVudCwgYWN0b3IsIHNjZW5lLCByZWxhdGl2ZVJvb3QsIHJlbGF0aXZlTm9kZVxyXG59XHJcblxyXG5cclxuXHJcbi8vIOa1i+ivleivreWPpe+8jOWPr+S7peWcqOaOp+WItuWPsOS4reiDveWkn+eci+WIsOi/memHjFxyXG5jY1tcInZ2XCJdID0gY2NbXCJ2dlwiXSB8fCBEZXZlbG9wZXJzVG9vbEdsb2JhbDtcclxuXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/load/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d4fYAyCZEeID+WJLUyKeU', 'Loading');
// load/Loading.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// SIGNPOST 加载页面，但不属于开发类
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolGlobal_1 = require("../scripts/base/class/DevelopersToolGlobal");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logoNode = null;
        _this.progressBar = null;
        // SIGNPOST 进度条部分
        _this.progressUpdateRate = 1;
        _this.progressRandomChangeTime = .2;
        _this.progressWaitForLoad = .85;
        _this.readyToShow = null;
        // SIGNPOST 目标场景部分
        _this.readyToGoSence = null;
        // TAG 自定义数值                                                                                         
        /**
         * 进度条数值
         * 数值应该在0-100
         */
        _this.ProgressValue = 0;
        /**
         * 加载进度，以资源载入完成+1
         * 当载入计数等于资源数时，完成加载
         */
        _this.loadProgressCount = 0;
        _this.loadPorgressCountMax = Object.keys(DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog).length;
        /**
         * 动画播放完毕标记
         * 数值应该在0-100
         */
        _this.animationOver = false;
        return _this;
    }
    // TAG LIFE-CYCLE callbacks                                                                              
    Loading.prototype.onLoad = function () {
        // 播放动画
        this.playLogoAnimation();
        //检查游戏更新
        this.checkGameNewVersion();
    };
    Loading.prototype.start = function () {
        // 开始加载所有资源
        this.loadAllResources();
    };
    Loading.prototype.update = function (dt) {
        // 等待动画播放完毕
        if (!this.animationOver)
            return;
        // 如果有定义其他组件（比如按钮）来完成场景载入触发时，等待组件响应
        if (this.readyToShow != null)
            return;
        // 否则加载完成后直接进入场景
        if (this.loadProgressCount >= this.loadPorgressCountMax) {
            this.onLoadScene();
        }
    };
    // TAG USER FUNCTION:                                                                                    
    // tag 用户方法 
    /**
     * 播放开始动画
     */
    Loading.prototype.playLogoAnimation = function () {
        var _this = this;
        cc.tween(this.logoNode)
            .delay(0.5)
            .to(1, { opacity: 255 })
            .delay(1)
            .call(function () {
            _this.animationOver = true;
        })
            .start();
    };
    /**
     * 如果此场景内有其他按钮等组件触发时
     * 可以通过这里进行中转
     * 要求格式为 on + todo
     */
    Loading.prototype.onButtonClick = function (event, customDate) {
        if (customDate.indexOf("on") <= 0)
            this[customDate]();
        else
            this.onLoadScene();
    };
    /**
     * 加载场景
     * @param sceneTarget 可选场景目标
     */
    Loading.prototype.onLoadScene = function (sceneTarget) {
        var self = this;
        cc.director.loadScene((function () {
            return sceneTarget ?
                sceneTarget instanceof String ?
                    sceneTarget :
                    sceneTarget.name :
                self.readyToGoSence.name;
        })());
    };
    // tag 客户端方法 
    /**
     * 加载全部资源包
     */
    Loading.prototype.loadAllResources = function () {
        var _this = this;
        var resKeys = Object.keys(DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog);
        resKeys.forEach(function (url) {
            var resLog = DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog[url];
            DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[resLog.url] = DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[resLog.url] || {};
            _this.loadResources(url, resLog.type, resLog.url);
        });
    };
    /**
     * 按类加载资源包
     * @param url
     * @param type
     * @param saveUrl
     */
    Loading.prototype.loadResources = function (url, type, saveUrl) {
        var self = this;
        cc.resources.loadDir(url, type, function (completedCount, totalCount, item) {
            // cc.log("正在加载:" + item.url);
            self.ProgressValue = completedCount / totalCount;
            // cc.log(`加载进度: ${self.ProgressValue * 100}%`);
        }, function (err, data) {
            if (err) {
                cc.log("\u52A0\u8F7D" + type + "\u65F6\u53D1\u751F\u9519\u8BEF");
            }
            else {
                for (var i in data) {
                    var name = (data[i] instanceof cc.SpriteAtlas) ? data[i].name.slice(0, -6) : data[i].name;
                    if (data[i] instanceof cc.JsonAsset) {
                        DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[saveUrl][name] = data[i]['json'];
                    }
                    else {
                        DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[saveUrl][name] = data[i];
                    }
                }
            }
            self.loadProgressCount++;
        });
    };
    // tag 微信平台更新 
    /**
     * 检查游戏新版本
     */
    Loading.prototype.checkGameNewVersion = function () {
        // 仅关注微信平台
        if (!(cc.sys.platform == cc.sys.WECHAT_GAME))
            return false;
        // 尝试获取微信更新管理器
        var updateManager;
        try {
            updateManager = wx.getUpdateManager();
            if (!updateManager)
                return false;
        }
        catch (_a) {
            return false;
        }
        // 获取全局唯一的版本更新管理器，用于管理小程序更新
        updateManager.onCheckForUpdate(function (res) {
            // 监听向微信后台请求检查更新结果事件 
            console.log("是否有新版本：" + res.hasUpdate);
            if (res.hasUpdate) {
                //如果有新版本                
                // 小程序有新版本，会主动触发下载操作        
                updateManager.onUpdateReady(function () {
                    //当新版本下载完成，会进行回调          
                    wx.showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，单击确定重启小程序',
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm) {
                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启小程序               
                                updateManager.applyUpdate();
                            }
                        }
                    });
                });
                // 小程序有新版本，会主动触发下载操作（无需开发者触发）        
                updateManager.onUpdateFailed(function () {
                    //当新版本下载失败，会进行回调          
                    wx.showModal({
                        title: '提示',
                        content: '检查到有新版本，但下载失败，请稍后尝试',
                        showCancel: false,
                    });
                });
            }
        });
        return true;
    };
    //微信分包
    Loading.prototype.wxSubpackage = function () {
        var self = this;
        wx.loadSubpackage({
            name: 'resources',
            success: function (res) {
                // 分包加载成功后通过 success 回调
                self.loadAllResources();
            },
            fail: function (err) {
                // 分包加载失败通过 fail 回调
                console.error("load " + name + " fail", err);
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "logoNode", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "进度条目标(可选)",
            tooltip: "进度条目标设定后可以指定动画",
        })
    ], Loading.prototype, "progressBar", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画速率",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressUpdateRate", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画随机变化间隔",
            tooltip: "进度条动画随机变化间隔",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressRandomChangeTime", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画等待加载完成位置",
            tooltip: "进度条动画等待加载完成位置",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressWaitForLoad", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "完成后显示",
            tooltip: "当加载完成时，被启用的节点",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "readyToShow", void 0);
    __decorate([
        property({
            type: cc.SceneAsset,
            displayName: "完成后加载目标",
            tooltip: "当加载完成时，加载的场景，如果有启用节点，则等待节点触发",
        })
    ], Loading.prototype, "readyToGoSence", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsbUZBQTBGO0FBTTFGO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMFFDO1FBdlFHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFPekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQWlCO1FBUWpCLHdCQUFrQixHQUFHLENBQUMsQ0FBQztRQVV2Qiw4QkFBd0IsR0FBRyxFQUFFLENBQUM7UUFVOUIseUJBQW1CLEdBQUcsR0FBRyxDQUFDO1FBUTFCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGtCQUFrQjtRQU1sQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQTJCdEIscUdBQXFHO1FBRXJHOzs7V0FHRztRQUNILG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCOzs7V0FHRztRQUNILHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QiwwQkFBb0IsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLDJDQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFN0U7OztXQUdHO1FBQ0gsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBb0tuQyxDQUFDO0lBaE5HLHlHQUF5RztJQUV6Ryx3QkFBTSxHQUFOO1FBQ0ksT0FBTztRQUNQLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLFFBQVE7UUFDUixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEVBQUU7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QUFJO1lBQ1gsV0FBVyxFQUFFLGVBQWU7WUFDNUIsT0FBTyxFQUFFLGVBQWU7WUFDeEIsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqRCxDQUFDO3dEQUN3QjtJQVExQjtRQU5DLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtZQUNiLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakQsQ0FBQztnREFDaUI7SUFRbkI7UUFMQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVU7WUFDbkIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsT0FBTyxFQUFFLDhCQUE4QjtTQUMxQyxDQUFDO21EQUNvQjtJQXhETCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBMFEzQjtJQUFELGNBQUM7Q0ExUUQsQUEwUUMsQ0ExUW9DLEVBQUUsQ0FBQyxTQUFTLEdBMFFoRDtrQkExUW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqDovb3pobXpnaLvvIzkvYbkuI3lsZ7kuo7lvIDlj5HnsbtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4uL3NjcmlwdHMvYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcblxyXG4vLyDorqnnvJbor5Hlmajlv73nlaXlubPlj7BBUEnmiqXplJlcclxuZGVjbGFyZSB2YXIgd3g6IGFueTtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nb05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHnm67moIco5Y+v6YCJKVwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi6L+b5bqm5p2h55uu5qCH6K6+5a6a5ZCO5Y+v5Lul5oyH5a6a5Yqo55S7XCIsXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOi/m+W6puadoemDqOWIhlxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDIsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeWKqOeUu+mAn+eOh1wiLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7IH0sXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NVcGRhdGVSYXRlID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMiwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h5Yqo55S76ZqP5py65Y+Y5YyW6Ze06ZqUXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaHliqjnlLvpmo/mnLrlj5jljJbpl7TpmpRcIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzUmFuZG9tQ2hhbmdlVGltZSA9IC4yO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAyLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHliqjnlLvnrYnlvoXliqDovb3lrozmiJDkvY3nva5cIixcclxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoeWKqOeUu+etieW+heWKoOi9veWujOaIkOS9jee9rlwiLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7IH0sXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NXYWl0Rm9yTG9hZCA9IC44NTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5a6M5oiQ5ZCO5pi+56S6XCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLlvZPliqDovb3lrozmiJDml7bvvIzooqvlkK/nlKjnmoToioLngrlcIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHJlYWR5VG9TaG93ID0gbnVsbDtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnm67moIflnLrmma/pg6jliIZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuU2NlbmVBc3NldCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLlrozmiJDlkI7liqDovb3nm67moIdcIixcclxuICAgICAgICB0b29sdGlwOiBcIuW9k+WKoOi9veWujOaIkOaXtu+8jOWKoOi9veeahOWcuuaZr++8jOWmguaenOacieWQr+eUqOiKgueCue+8jOWImeetieW+heiKgueCueinpuWPkVwiLFxyXG4gICAgfSlcclxuICAgIHJlYWR5VG9Hb1NlbmNlID0gbnVsbDtcclxuXHJcbiAgICAvLyBUQUcgTElGRS1DWUNMRSBjYWxsYmFja3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5pKt5pS+5Yqo55S7XHJcbiAgICAgICAgdGhpcy5wbGF5TG9nb0FuaW1hdGlvbigpO1xyXG4gICAgICAgIC8v5qOA5p+l5ri45oiP5pu05pawXHJcbiAgICAgICAgdGhpcy5jaGVja0dhbWVOZXdWZXJzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g5byA5aeL5Yqg6L295omA5pyJ6LWE5rqQXHJcbiAgICAgICAgdGhpcy5sb2FkQWxsUmVzb3VyY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g562J5b6F5Yqo55S75pKt5pS+5a6M5q+VXHJcbiAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGlvbk92ZXIpIHJldHVybjtcclxuICAgICAgICAvLyDlpoLmnpzmnInlrprkuYnlhbbku5bnu4Tku7bvvIjmr5TlpoLmjInpkq7vvInmnaXlrozmiJDlnLrmma/ovb3lhaXop6blj5Hml7bvvIznrYnlvoXnu4Tku7blk43lupRcclxuICAgICAgICBpZiAodGhpcy5yZWFkeVRvU2hvdyAhPSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgLy8g5ZCm5YiZ5Yqg6L295a6M5oiQ5ZCO55u05o6l6L+b5YWl5Zy65pmvXHJcbiAgICAgICAgaWYgKHRoaXMubG9hZFByb2dyZXNzQ291bnQgPj0gdGhpcy5sb2FkUG9yZ3Jlc3NDb3VudE1heCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTG9hZFNjZW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyDoh6rlrprkuYnmlbDlgLwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+b5bqm5p2h5pWw5YC8XHJcbiAgICAgKiDmlbDlgLzlupTor6XlnKgwLTEwMFxyXG4gICAgICovXHJcbiAgICBQcm9ncmVzc1ZhbHVlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqm77yM5Lul6LWE5rqQ6L295YWl5a6M5oiQKzFcclxuICAgICAqIOW9k+i9veWFpeiuoeaVsOetieS6jui1hOa6kOaVsOaXtu+8jOWujOaIkOWKoOi9vVxyXG4gICAgICovXHJcbiAgICBsb2FkUHJvZ3Jlc3NDb3VudDogbnVtYmVyID0gMDtcclxuICAgIGxvYWRQb3JncmVzc0NvdW50TWF4OiBudW1iZXIgPSBPYmplY3Qua2V5cyhjY3Z2LmxvYWRSZXNvdXJjZXNjYXRhbG9nKS5sZW5ndGg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjnlLvmkq3mlL7lrozmr5XmoIforrBcclxuICAgICAqIOaVsOWAvOW6lOivpeWcqDAtMTAwXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvbk92ZXI6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBUQUcgVVNFUiBGVU5DVElPTjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyB0YWcg55So5oi35pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5byA5aeL5Yqo55S7XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGxheUxvZ29BbmltYXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sb2dvTm9kZSlcclxuICAgICAgICAgICAgLmRlbGF5KDAuNSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5kZWxheSgxKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbk92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aaC5p6c5q2k5Zy65pmv5YaF5pyJ5YW25LuW5oyJ6ZKu562J57uE5Lu26Kem5Y+R5pe2XHJcbiAgICAgKiDlj6/ku6XpgJrov4fov5nph4zov5vooYzkuK3ovaxcclxuICAgICAqIOimgeaxguagvOW8j+S4uiBvbiArIHRvZG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY3VzdG9tRGF0ZS5pbmRleE9mKFwib25cIikgPD0gMClcclxuICAgICAgICAgICAgdGhpc1tjdXN0b21EYXRlXSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWRTY2VuZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lnLrmma9cclxuICAgICAqIEBwYXJhbSBzY2VuZVRhcmdldCDlj6/pgInlnLrmma/nm67moIdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvbkxvYWRTY2VuZShzY2VuZVRhcmdldD86IHN0cmluZyB8IGNjLlNjZW5lQXNzZXQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY2VuZVRhcmdldCA/XHJcbiAgICAgICAgICAgICAgICBzY2VuZVRhcmdldCBpbnN0YW5jZW9mIFN0cmluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVUYXJnZXQgOlxyXG4gICAgICAgICAgICAgICAgICAgIChzY2VuZVRhcmdldCBhcyBjYy5TY2VuZUFzc2V0KS5uYW1lIDpcclxuICAgICAgICAgICAgICAgIHNlbGYucmVhZHlUb0dvU2VuY2UubmFtZTtcclxuICAgICAgICB9KSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5a6i5oi356uv5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YWo6YOo6LWE5rqQ5YyFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZEFsbFJlc291cmNlcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzS2V5cyA9IE9iamVjdC5rZXlzKGNjdnYubG9hZFJlc291cmNlc2NhdGFsb2cpO1xyXG4gICAgICAgIHJlc0tleXMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzTG9nID0gY2N2di5sb2FkUmVzb3VyY2VzY2F0YWxvZ1t1cmxdO1xyXG4gICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtyZXNMb2cudXJsXSA9IGNjdnYud2FyZWhvdXNlW3Jlc0xvZy51cmxdIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXModXJsLCByZXNMb2cudHlwZSwgcmVzTG9nLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInnsbvliqDovb3otYTmupDljIVcclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSBzYXZlVXJsIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRSZXNvdXJjZXModXJsLCB0eXBlLCBzYXZlVXJsKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKHVybCwgdHlwZSxcclxuXHJcbiAgICAgICAgICAgIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5Zyo5Yqg6L29OlwiICsgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Qcm9ncmVzc1ZhbHVlID0gY29tcGxldGVkQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGDliqDovb3ov5vluqY6ICR7c2VsZi5Qcm9ncmVzc1ZhbHVlICogMTAwfSVgKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYOWKoOi9vSR7dHlwZX3ml7blj5HnlJ/plJnor69gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gKGRhdGFbaV0gaW5zdGFuY2VvZiBjYy5TcHJpdGVBdGxhcykgPyBkYXRhW2ldLm5hbWUuc2xpY2UoMCwgLTYpIDogZGF0YVtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXSBpbnN0YW5jZW9mIGNjLkpzb25Bc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2N2di53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldWydqc29uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtzYXZlVXJsXVtuYW1lXSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRQcm9ncmVzc0NvdW50Kys7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOW+ruS/oeW5s+WPsOabtOaWsCBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpea4uOaIj+aWsOeJiOacrFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrR2FtZU5ld1ZlcnNpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8g5LuF5YWz5rOo5b6u5L+h5bmz5Y+wXHJcbiAgICAgICAgaWYgKCEoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDlsJ3or5Xojrflj5blvq7kv6Hmm7TmlrDnrqHnkIblmahcclxuICAgICAgICBsZXQgdXBkYXRlTWFuYWdlcjogYW55O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIGlmICghdXBkYXRlTWFuYWdlcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICAvLyDojrflj5blhajlsYDllK/kuIDnmoTniYjmnKzmm7TmlrDnrqHnkIblmajvvIznlKjkuo7nrqHnkIblsI/nqIvluo/mm7TmlrBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyDnm5HlkKzlkJHlvq7kv6HlkI7lj7Dor7fmsYLmo4Dmn6Xmm7TmlrDnu5Pmnpzkuovku7YgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5pyJ5paw54mI5pys77yaXCIgKyByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5oYXNVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pyJ5paw54mI5pysICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g5bCP56iL5bqP5pyJ5paw54mI5pys77yM5Lya5Li75Yqo6Kem5Y+R5LiL6L295pON5L2cICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lvZPmlrDniYjmnKzkuIvovb3lrozmiJDvvIzkvJrov5vooYzlm57osIMgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5Y2V5Ye756Gu5a6a6YeN5ZCv5bCP56iL5bqPJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK/lsI/nqIvluo8gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIOWwj+eoi+W6j+acieaWsOeJiOacrO+8jOS8muS4u+WKqOinpuWPkeS4i+i9veaTjeS9nO+8iOaXoOmcgOW8gOWPkeiAheinpuWPke+8iSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+aWsOeJiOacrOS4i+i9veWksei0pe+8jOS8mui/m+ihjOWbnuiwgyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmo4Dmn6XliLDmnInmlrDniYjmnKzvvIzkvYbkuIvovb3lpLHotKXvvIzor7fnqI3lkI7lsJ3or5UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b6u5L+h5YiG5YyFXHJcbiAgICBwcml2YXRlIHd4U3VicGFja2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd3gubG9hZFN1YnBhY2thZ2Uoe1xyXG4gICAgICAgICAgICBuYW1lOiAncmVzb3VyY2VzJywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3miJDlip/lkI7pgJrov4cgc3VjY2VzcyDlm57osINcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZEFsbFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3lpLHotKXpgJrov4cgZmFpbCDlm57osINcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGxvYWQgJHtuYW1lfSBmYWlsYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/RigorousLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '173f5UDvDNOh7BaDUvjJbqV', 'RigorousLibrary');
// scripts/base/core/RigorousLibrary.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RigorousRingBuffer = exports.RigorousArray = exports.RigorousMap = exports.RigorousSet = exports.RigorousHash = exports.RigorousMatrix2 = exports.RigorousMatrix3 = exports.RigorousMatrix4 = exports.RigorousSize = exports.RigorousVector2 = exports.RigorousScale = exports.RigorousRotation = exports.RigorousPostion = exports.RigorousVector3 = exports.RigorousVector4 = exports.RigorousValueType = void 0;
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var SysBaseType;
(function (SysBaseType) {
    SysBaseType[SysBaseType["number"] = 0] = "number";
    SysBaseType[SysBaseType["string"] = 1] = "string";
    SysBaseType[SysBaseType["boolean"] = 2] = "boolean";
    SysBaseType[SysBaseType["object"] = 3] = "object";
    SysBaseType[SysBaseType["undefined"] = 4] = "undefined";
})(SysBaseType || (SysBaseType = {}));
var RigorousValueType = /** @class */ (function () {
    function RigorousValueType() {
    }
    return RigorousValueType;
}());
exports.RigorousValueType = RigorousValueType;
var RigorousVector4 = /** @class */ (function (_super) {
    __extends(RigorousVector4, _super);
    function RigorousVector4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector4;
}(RigorousValueType));
exports.RigorousVector4 = RigorousVector4;
var RigorousVector3 = /** @class */ (function (_super) {
    __extends(RigorousVector3, _super);
    function RigorousVector3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector3;
}(RigorousVector4));
exports.RigorousVector3 = RigorousVector3;
var RigorousPostion = /** @class */ (function (_super) {
    __extends(RigorousPostion, _super);
    function RigorousPostion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousPostion;
}(RigorousVector3));
exports.RigorousPostion = RigorousPostion;
var RigorousRotation = /** @class */ (function (_super) {
    __extends(RigorousRotation, _super);
    function RigorousRotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousRotation;
}(RigorousVector3));
exports.RigorousRotation = RigorousRotation;
var RigorousScale = /** @class */ (function (_super) {
    __extends(RigorousScale, _super);
    function RigorousScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousScale;
}(RigorousVector3));
exports.RigorousScale = RigorousScale;
var RigorousVector2 = /** @class */ (function (_super) {
    __extends(RigorousVector2, _super);
    function RigorousVector2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector2;
}(RigorousVector4));
exports.RigorousVector2 = RigorousVector2;
var RigorousSize = /** @class */ (function (_super) {
    __extends(RigorousSize, _super);
    function RigorousSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousSize;
}(RigorousVector2));
exports.RigorousSize = RigorousSize;
var RigorousMatrix4 = /** @class */ (function (_super) {
    __extends(RigorousMatrix4, _super);
    function RigorousMatrix4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix4;
}(RigorousValueType));
exports.RigorousMatrix4 = RigorousMatrix4;
var RigorousMatrix3 = /** @class */ (function (_super) {
    __extends(RigorousMatrix3, _super);
    function RigorousMatrix3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix3;
}(RigorousMatrix4));
exports.RigorousMatrix3 = RigorousMatrix3;
var RigorousMatrix2 = /** @class */ (function (_super) {
    __extends(RigorousMatrix2, _super);
    function RigorousMatrix2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix2;
}(RigorousMatrix4));
exports.RigorousMatrix2 = RigorousMatrix2;
var RigorousHash = /** @class */ (function (_super) {
    __extends(RigorousHash, _super);
    /**
     * @param length 定义哈希表的使用场景最大长度
     */
    function RigorousHash(length) {
        var _this = _super.call(this) || this;
        _this.HashCodeGate = false;
        _this.HashCodeGate = length ? length > 50 : true;
        _this._HashList = {};
        return _this;
    }
    /**
     * 获取一个字符的哈希值
     * @param code
     */
    RigorousHash.prototype.ToHashCode_ShortWay = function (code) {
        var hash = 0;
        if (typeof (code) == 'number') {
            hash = code;
        }
        else {
            for (var _i = 0, code_1 = code; _i < code_1.length; _i++) {
                var iterator = code_1[_i];
                hash += iterator.charCodeAt(0);
            }
            // HashComplexity
            hash %= 37;
        }
        return hash;
    };
    RigorousHash.prototype.ToHashCode_LongWay = function (code) {
        var hash = 5381;
        if (typeof (code) == 'number') {
            hash = code;
        }
        else {
            for (var _i = 0, code_2 = code; _i < code_2.length; _i++) {
                var iterator = code_2[_i];
                hash *= 33;
                hash += iterator.charCodeAt(0);
            }
            hash %= 1013;
        }
        return hash;
    };
    /**
     * 获取哈希值的选择器
     */
    RigorousHash.prototype.ToHashCode = function (key) {
        if (this.HashCodeGate)
            return this.ToHashCode_ShortWay(key);
        else
            return this.ToHashCode_LongWay(key);
    };
    /**
     * 按键获取元素
     * @param key 键
     */
    RigorousHash.prototype.get = function (key) {
        var hash = this.ToHashCode(key);
        return this._HashList[hash];
    };
    /**
     * 按键设置元素
     * @param key 键
     */
    RigorousHash.prototype.set = function (key, value) {
        var hash = this.ToHashCode(key);
        this._HashList[hash] = value;
    };
    /**
     * 按键删除元素
     * @param key 键
     */
    RigorousHash.prototype.remove = function (key) {
        var hash = this.ToHashCode(key);
        if (this._HashList[hash]) {
            this._HashList[hash].destroy();
            return true;
        }
        return false;
    };
    /**
     * 清除
     */
    RigorousHash.prototype.clean = function () {
        this._HashList = [];
    };
    return RigorousHash;
}(RigorousValueType));
exports.RigorousHash = RigorousHash;
var RigorousSet = /** @class */ (function (_super) {
    __extends(RigorousSet, _super);
    function RigorousSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousSet;
}(RigorousHash));
exports.RigorousSet = RigorousSet;
var RigorousMap = /** @class */ (function (_super) {
    __extends(RigorousMap, _super);
    function RigorousMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RigorousMap.prototype.set = function (key, value) {
        var objectTagName;
        switch (SysBaseType[typeof (value)]) {
            case SysBaseType.object:
                objectTagName = Object.prototype.toString.call(value);
                if (value instanceof cc.Component)
                    objectTagName += value['_id'];
                else {
                    var ObjectKey = Object.keys(value);
                    objectTagName += ObjectKey[114514 % ObjectKey.length];
                    objectTagName += ObjectKey[4399 % ObjectKey.length];
                    objectTagName += ObjectKey[8848 % ObjectKey.length];
                }
                key = objectTagName;
                break;
            case SysBaseType.string:
                key = value;
                break;
            case SysBaseType.number:
                key = value;
                break;
            case SysBaseType.boolean:
                key = value ? 1 : 0;
                break;
            case SysBaseType.undefined:
                key = 0;
                break;
            default:
                key = 0;
                break;
        }
        var hash = this.ToHashCode(key);
        this._HashList[hash] = value;
        return hash;
    };
    return RigorousMap;
}(RigorousHash));
exports.RigorousMap = RigorousMap;
var RigorousArray = /** @class */ (function (_super) {
    __extends(RigorousArray, _super);
    /**
     * 数组类并非用作Array，不要直接使用此类存储参数
     */
    function RigorousArray() {
        var _this = _super.call(this) || this;
        _this._HashList = [];
        return _this;
    }
    /**
     * 按键移除
     */
    RigorousArray.prototype.remove = function (key) {
        this._HashList[key] = null;
    };
    /**
     * 清除
     */
    RigorousArray.prototype.clean = function () {
        this._HashList = [];
    };
    return RigorousArray;
}(RigorousValueType));
exports.RigorousArray = RigorousArray;
var RigorousRingBuffer = /** @class */ (function (_super) {
    __extends(RigorousRingBuffer, _super);
    /**
     * 初始化栈
     * @warn 通用起见没有使用苛刻模式，请不要在任何地方使用非正整数
     */
    function RigorousRingBuffer(size) {
        var _this = _super.call(this) || this;
        _this._StackGetPointer = 0;
        _this._StackPutPointer = 0;
        _this._StackSize = size;
        return _this;
    }
    Object.defineProperty(RigorousRingBuffer.prototype, "_$get", {
        get: function () {
            return this._StackGetPointer;
        },
        set: function (value) {
            this._StackGetPointer += value;
            this._StackGetPointer %= this._StackSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "$get", {
        get: function () {
            return this._StackGetPointer;
        },
        set: function (value) {
            if (value > 0)
                this._StackIsFull = false;
            if (value > this.length)
                this.clean();
            var getPointer = DevelopersToolGlobal_1.mathMacro.PMod(value, this._StackSize);
            this._StackGetPointer = getPointer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "_$put", {
        get: function () {
            return this._StackPutPointer;
        },
        set: function (value) {
            this._StackPutPointer += value;
            this._StackPutPointer %= this._StackSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "$put", {
        /**
         * 获取有效的进栈位
         */
        get: function () {
            // let put = this._StackPutPointer - 1;
            // put = put < 0 ? this._StackSize - 1 : put;
            // return put;
            return this._StackPutPointer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "length", {
        /**
         * 获取栈有效长度
         */
        get: function () {
            var len = this._$put - this._$get;
            if (this._StackIsFull)
                return this._StackSize - len;
            return len < 0 ? this._StackSize + len : len;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 直接获取索引项目
     * 这不会触发栈指针变化
     */
    RigorousRingBuffer.prototype.getBuffer = function (index) {
        return this._HashList[DevelopersToolGlobal_1.mathMacro.PMod(index, this._StackSize)];
    };
    /**
     * 进栈
     * @param object
     */
    RigorousRingBuffer.prototype.push = function (object) {
        this._HashList[this._StackPutPointer] = object;
        var lastPut = this._$put;
        this._$put = 1;
        if (this._StackIsFull)
            this._$get = 1;
        if (this._$put == this._$get)
            this._StackIsFull = true;
        return lastPut;
    };
    /**
     * 出栈
     * @param length
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    RigorousRingBuffer.prototype.pull = function (length) {
        this._StackIsFull = false;
        var out = { obj: [], index: [] };
        for (var index = 0; index < Math.min(length, this.length); index++) {
            var outIndex = (index + this._$get) % this._StackSize;
            out.obj.push(this._HashList[outIndex]);
            out.index.push(outIndex);
            this._HashList[outIndex] = undefined;
        }
        this._$get = length;
        return out;
    };
    /**
     * 清空栈
     */
    RigorousRingBuffer.prototype.clean = function () {
        this._HashList = [];
        this._StackGetPointer = 0;
        this._StackPutPointer = 0;
    };
    /**
     * 给定一个索引，转为一个在栈内的有效的索引
     */
    RigorousRingBuffer.prototype.indexAtStack = function (index) {
        return DevelopersToolGlobal_1.mathMacro.PMod(index, this._StackSize);
    };
    return RigorousRingBuffer;
}(RigorousArray));
exports.RigorousRingBuffer = RigorousRingBuffer;
// 测试
// interface kismitFloat {
//     _num: Number;
// }
// class myfloat implements kismitFloat {
//     constructor(value?: number) {
//         this._num = value || 0;
//     }
//     _num;
//     get num() {
//         return this._num;
//     }
//     set num(value: number) {
//         this._num = value;
//     }
// }
// let a = new myfloat(1);
// cc.log(a.num);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcUmlnb3JvdXNMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBZ0U7QUFDaEUsSUFBSyxXQUVKO0FBRkQsV0FBSyxXQUFXO0lBQ1osaURBQU0sQ0FBQTtJQUFFLGlEQUFNLENBQUE7SUFBRSxtREFBTyxDQUFBO0lBQUUsaURBQU0sQ0FBQTtJQUFFLHVEQUFTLENBQUE7QUFDOUMsQ0FBQyxFQUZJLFdBQVcsS0FBWCxXQUFXLFFBRWY7QUFDRDtJQUFBO0lBRUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSw4Q0FBaUI7QUFHOUI7SUFBcUMsbUNBQWlCO0lBQXREOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxpQkFBaUIsR0FFckQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQXFDLG1DQUFlO0lBQXBEOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxlQUFlLEdBRW5EO0FBRlksMENBQWU7QUFHNUI7SUFBc0Msb0NBQWU7SUFBckQ7O0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnFDLGVBQWUsR0FFcEQ7QUFGWSw0Q0FBZ0I7QUFHN0I7SUFBbUMsaUNBQWU7SUFBbEQ7O0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLENBRmtDLGVBQWUsR0FFakQ7QUFGWSxzQ0FBYTtBQUcxQjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQWtD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QUVEOztPQUVHO0lBQ0kseUNBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUM3QixPQUFPLGdDQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0F6SEEsQUF5SEMsQ0F6SHVDLGFBQWEsR0F5SHBEO0FBekhZLGdEQUFrQjtBQTRIL0IsS0FBSztBQUNMLDBCQUEwQjtBQUMxQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKLHlDQUF5QztBQUN6QyxvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLFFBQVE7QUFDUixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IsSUFBSTtBQUNKLDBCQUEwQjtBQUMxQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmVudW0gU3lzQmFzZVR5cGUge1xyXG4gICAgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIG9iamVjdCwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yNCBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMyBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1Bvc3Rpb24gZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjMge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNSb3RhdGlvbiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yMyB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NjYWxlIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3IzIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NpemUgZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjIge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXg0IGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXgzIGV4dGVuZHMgUmlnb3JvdXNNYXRyaXg0IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzTWF0cml4MiBleHRlbmRzIFJpZ29yb3VzTWF0cml4NCB7XHJcblxyXG59XHJcbmltcG9ydCB7IEloYXNoIH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNIYXNoIGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUgaW1wbGVtZW50cyBJaGFzaCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5a6a5LmJ5ZOI5biM6KGo55qE5L2/55So5Zy65pmv5pyA5aSn6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aD86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5IYXNoQ29kZUdhdGUgPSBsZW5ndGggPyBsZW5ndGggPiA1MCA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWTiOW4jOihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZGVjbGFyZSBfSGFzaExpc3Q6IGFueVtudW1iZXJdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5a2X56ym55qE5ZOI5biM5YC8XHJcbiAgICAgKiBAcGFyYW0gY29kZSBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfU2hvcnRXYXkoY29kZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaGFzaDogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIChjb2RlKSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBoYXNoID0gY29kZSBhcyBudW1iZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSGFzaENvbXBsZXhpdHlcclxuICAgICAgICAgICAgaGFzaCAlPSAzNztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfTG9uZ1dheShjb2RlOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBoYXNoOiBudW1iZXIgPSA1MzgxO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGNvZGUpID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGhhc2ggPSBjb2RlIGFzIG51bWJlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGhhc2ggKj0gMzM7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFzaCAlPSAxMDEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgSGFzaENvZGVHYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWTiOW4jOWAvOeahOmAieaLqeWZqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgVG9IYXNoQ29kZShrZXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuSGFzaENvZGVHYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX1Nob3J0V2F5KGtleSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX0xvbmdXYXkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiOt+WPluWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldChrZXkpIHtcclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdFtoYXNoXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiuvue9ruWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLlRvSGFzaENvZGUoa2V5KTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFtoYXNoXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu5Yig6Zmk5YWD57SgXHJcbiAgICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5Ub0hhc2hDb2RlKGtleSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX0hhc2hMaXN0W2hhc2hdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NldCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c01hcCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogYW55LCB2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgb2JqZWN0VGFnTmFtZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgICAgIHN3aXRjaCAoU3lzQmFzZVR5cGVbdHlwZW9mICh2YWx1ZSldKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUub2JqZWN0OlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5Db21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSArPSB2YWx1ZVsnX2lkJ107XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgT2JqZWN0S2V5ID0gT2JqZWN0LmtleXModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzExNDUxNCAlIE9iamVjdEtleS5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzQzOTkgJSBPYmplY3RLZXkubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUYWdOYW1lICs9IE9iamVjdEtleVs4ODQ4ICUgT2JqZWN0S2V5Lmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBvYmplY3RUYWdOYW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUuc3RyaW5nOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTeXNCYXNlVHlwZS5udW1iZXI6XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLmJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUudW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcbn1cclxuaW1wb3J0IHsgSWFycmF5IH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNBcnJheSBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIGltcGxlbWVudHMgSWFycmF5IHtcclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE57G75bm26Z2e55So5L2cQXJyYXnvvIzkuI3opoHnm7TmjqXkvb/nlKjmraTnsbvlrZjlgqjlj4LmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX0hhc2hMaXN0OiBhbnlbbnVtYmVyXTtcclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu56e76ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3Rba2V5XSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgIH1cclxufVxyXG5pbXBvcnQgeyBJcmluZ0J1ZmZlciB9IGZyb20gJy4vUmlnb3JvdXNUeXBlJztcclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzUmluZ0J1ZmZlciBleHRlbmRzIFJpZ29yb3VzQXJyYXkgaW1wbGVtZW50cyBJcmluZ0J1ZmZlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluagiCBcclxuICAgICAqIEB3YXJuIOmAmueUqOi1t+ingeayoeacieS9v+eUqOiLm+WIu+aooeW8j++8jOivt+S4jeimgeWcqOS7u+S9leWcsOaWueS9v+eUqOmdnuato+aVtOaVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrR2V0UG9pbnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tQdXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1NpemUgPSBzaXplXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiOaMh+mSiCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWNsYXJlIF9TdGFja0dldFBvaW50ZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ2V0IF8kZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YWNrR2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0IF8kZ2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0dldFBvaW50ZXIgKz0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyICU9IHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgJGdldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGFja0dldFBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0ICRnZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHRoaXMuX1N0YWNrSXNGdWxsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5sZW5ndGgpIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBsZXQgZ2V0UG9pbnRlciA9IG1tLlBNb2QodmFsdWUsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gZ2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+b5qCI5oyH6ZKIIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlY2xhcmUgX1N0YWNrUHV0UG9pbnRlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBnZXQgXyRwdXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgXyRwdXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgJT0gdGhpcy5fU3RhY2tTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnInmlYjnmoTov5vmoIjkvY1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCAkcHV0KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gbGV0IHB1dCA9IHRoaXMuX1N0YWNrUHV0UG9pbnRlciAtIDE7XHJcbiAgICAgICAgLy8gcHV0ID0gcHV0IDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSAtIDEgOiBwdXQ7XHJcbiAgICAgICAgLy8gcmV0dXJuIHB1dDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIjmt7HluqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX1N0YWNrU2l6ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoIjmu6HmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX1N0YWNrSXNGdWxsOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qCI5pyJ5pWI6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuXyRwdXQgLSB0aGlzLl8kZ2V0O1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgcmV0dXJuIHRoaXMuX1N0YWNrU2l6ZSAtIGxlbjtcclxuICAgICAgICByZXR1cm4gbGVuIDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSArIGxlbiA6IGxlbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog55u05o6l6I635Y+W57Si5byV6aG555uuIFxyXG4gICAgICog6L+Z5LiN5Lya6Kem5Y+R5qCI5oyH6ZKI5Y+Y5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCdWZmZXIoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0hhc2hMaXN0W21tLlBNb2QoaW5kZXgsIHRoaXMuX1N0YWNrU2l6ZSldO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5vmoIhcclxuICAgICAqIEBwYXJhbSBvYmplY3QgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoPFQ+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3RbdGhpcy5fU3RhY2tQdXRQb2ludGVyXSA9IG9iamVjdDtcclxuICAgICAgICBsZXQgbGFzdFB1dCA9IHRoaXMuXyRwdXQ7XHJcbiAgICAgICAgdGhpcy5fJHB1dCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuX1N0YWNrSXNGdWxsKSB0aGlzLl8kZ2V0ID0gMTtcclxuICAgICAgICBpZiAodGhpcy5fJHB1dCA9PSB0aGlzLl8kZ2V0KSB0aGlzLl9TdGFja0lzRnVsbCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RQdXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiFxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBcclxuICAgICAqIEByZXR1cm4gb2JqW106IG9iajMsIG9iajQuLi5cclxuICAgICAqIEByZXR1cm4gaW5kZXhbXTogMywgNC4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHVsbDxUIGV4dGVuZHMgbnVtYmVyPihsZW5ndGg6IFQpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0lzRnVsbCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBvdXQgPSB7IG9iajogW10sIGluZGV4OiBbXSB9O1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBNYXRoLm1pbihsZW5ndGgsIHRoaXMubGVuZ3RoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgb3V0SW5kZXggPSAoaW5kZXggKyB0aGlzLl8kZ2V0KSAlIHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgICAgICAgICAgb3V0Lm9iai5wdXNoKHRoaXMuX0hhc2hMaXN0W291dEluZGV4XSk7XHJcbiAgICAgICAgICAgIG91dC5pbmRleC5wdXNoKG91dEluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fSGFzaExpc3Rbb3V0SW5kZXhdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl8kZ2V0ID0gbGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrmoIhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uZ5a6a5LiA5Liq57Si5byV77yM6L2s5Li65LiA5Liq5Zyo5qCI5YaF55qE5pyJ5pWI55qE57Si5byVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbmRleEF0U3RhY2soaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG1tLlBNb2QoaW5kZXgsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyDmtYvor5VcclxuLy8gaW50ZXJmYWNlIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIF9udW06IE51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgbXlmbG9hdCBpbXBsZW1lbnRzIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgdGhpcy5fbnVtID0gdmFsdWUgfHwgMDtcclxuLy8gICAgIH1cclxuLy8gICAgIF9udW07XHJcbi8vICAgICBnZXQgbnVtKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9udW07XHJcbi8vICAgICB9XHJcbi8vICAgICBzZXQgbnVtKHZhbHVlOiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLl9udW0gPSB2YWx1ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsZXQgYSA9IG5ldyBteWZsb2F0KDEpO1xyXG4vLyBjYy5sb2coYS5udW0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aabffe/a7RIpoDLOCm1Dsaa', 'Block');
// scripts/game/Block.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnMovement_1 = require("../base/tool/PawnMovement");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tag 用户宏，参数
        /**
         * 自由移动标记
         */
        _this.moveFree = false;
        /**
         * 生命周期
         */
        _this.lifeTime = cc.winSize.height / Setting_1.default.CubeSpeed;
        return _this;
    }
    // onLoad () {}
    Block.prototype.start = function () {
    };
    Block.prototype.update = function (dt) {
        if (this.moveFree) {
            this.node['movement'].updateByforce(dt);
            // this.node['movement'].updateByVelocity(dt); // 也可以用这个方法
        }
    };
    // tag 用户脚本 
    /**
     * 如果进行初始化，说明是玩家控制
     * 否则如果是系统生成不需要初始化
     */
    Block.prototype.init = function () {
        // 设定碰撞组
        this.node.group = Setting_1.default.Group_1;
        // 设定移动
        this.moveFree = true;
        // 赋予移动组件
        var movement = new PawnMovement_1.default(this.node);
        movement.permDrag = 0;
        movement.permForce = Setting_1.default.CubeVector;
        movement.velocity = Setting_1.default.CubeVector;
        this.node['movement'] = movement;
        // 定义一定时间后销毁，但是如果遇到碰撞或是其他情况，就必须取消这个定时器
        this.scheduleOnce(this.commitSuicide, this.lifeTime);
    };
    // 自我销毁
    Block.prototype.commitSuicide = function () { this.node.destroy(); };
    // tag 碰撞事件 
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    Block.prototype.onCollisionEnter = function (other, self) {
        // 清除定时器
        this.unschedule(this.commitSuicide);
        // 设定碰撞组
        this.node.group = Setting_1.default.Group_0;
        // 如果正在自由移动
        if (this.moveFree) {
            // 就禁止自由移动
            this.moveFree = false;
            // 试着加入到其他组
            var otherGroup = other.node.parent.getComponent(Setting_1.default.blockGroupName);
            var selfGroup = otherGroup.lastGroup;
            // 如果不存在这个组，就创建
            if (!selfGroup) {
                var selfGroupInst = DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.SpawnCubeGroup();
                // 重新定义自己的组
                selfGroup = selfGroupInst.getComponent(Setting_1.default.blockGroupName);
                // 初始化自己的组
                var selfGroupIndex = otherGroup.gridIndex - 1;
                selfGroup.init(selfGroupIndex, null, otherGroup);
                // 指定不需要自动初始化
                selfGroup.needStart = false;
                // 手动初始化外围部件
                selfGroup.node.children.forEach(function (element) {
                    element.destroy();
                    element.isValid = false;
                });
            }
            // 加入到组中
            this.node.setPosition(this.node.x, Setting_1.default.Cube_Perfab_Y, 0);
            this.node.removeFromParent();
            selfGroup.node.addChild(this.node);
            // 提醒组检查成员
            selfGroup.needCheckMem = true;
        }
    };
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    // onCollisionStay(other, self) {}
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    // onCollisionExit(other, self) {}
    // tag 销毁动画 
    /**
     * 替换为动画节点后销毁
     */
    Block.prototype.destroyWithAnimation = function () {
        var inst = cc.instantiate(Setting_1.default.Effect_SquareBreak);
        inst.setPosition(this.node.getPosition());
        this.node.parent.addChild(inst);
        this.node.destroy();
    };
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.default = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQWtGO0FBQ2xGLDBEQUFxRDtBQUVyRCxxQ0FBMkI7QUFFckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFFSSx3QkFBd0I7UUFGNUIscUVBcUhDO1FBVEcsYUFBYTtRQUNiOztXQUVHO1FBQ08sY0FBUSxHQUFZLEtBQUssQ0FBQztRQUNwQzs7V0FFRztRQUNPLGNBQVEsR0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxpQkFBRSxDQUFDLFNBQVMsQ0FBQzs7SUFDbEUsQ0FBQztJQWpIRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLDBEQUEwRDtTQUM3RDtJQUNMLENBQUM7SUFFRCxZQUFZO0lBRVo7OztPQUdHO0lBQ0ksb0JBQUksR0FBWDtRQUNJLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBRSxDQUFDLE9BQU8sQ0FBQztRQUM3QixPQUFPO1FBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsU0FBUztRQUNULElBQUksUUFBUSxHQUFpQixJQUFJLHNCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsaUJBQUUsQ0FBQyxVQUFVLENB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QUN4QixDQUFDO0lBMUdnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBcUh6QjtJQUFELFlBQUM7Q0FySEQsQUFxSEMsQ0FySGtDLEVBQUUsQ0FBQyxTQUFTLEdBcUg5QztrQkFySG9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSBcIi4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWxcIjtcclxuaW1wb3J0IFBhd25Nb3ZlbWVudCBmcm9tIFwiLi4vYmFzZS90b29sL1Bhd25Nb3ZlbWVudFwiO1xyXG5pbXBvcnQgQmxvY2tHcm91cCBmcm9tIFwiLi9CbG9ja0dyb3VwXCI7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlRnJlZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVbJ21vdmVtZW50J10udXBkYXRlQnlmb3JjZShkdCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZVsnbW92ZW1lbnQnXS51cGRhdGVCeVZlbG9jaXR5KGR0KTsgLy8g5Lmf5Y+v5Lul55So6L+Z5Liq5pa55rOVXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLfohJrmnKwgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpoLmnpzov5vooYzliJ3lp4vljJbvvIzor7TmmI7mmK/njqnlrrbmjqfliLYgIFxyXG4gICAgICog5ZCm5YiZ5aaC5p6c5piv57O757uf55Sf5oiQ5LiN6ZyA6KaB5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOiuvuWumueisOaSnue7hFxyXG4gICAgICAgIHRoaXMubm9kZS5ncm91cCA9IHNzLkdyb3VwXzE7XHJcbiAgICAgICAgLy8g6K6+5a6a56e75YqoXHJcbiAgICAgICAgdGhpcy5tb3ZlRnJlZSA9IHRydWU7XHJcbiAgICAgICAgLy8g6LWL5LqI56e75Yqo57uE5Lu2XHJcbiAgICAgICAgbGV0IG1vdmVtZW50OiBQYXduTW92ZW1lbnQgPSBuZXcgUGF3bk1vdmVtZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybURyYWcgPSAwO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1Gb3JjZSA9IHNzLkN1YmVWZWN0b3I7XHJcbiAgICAgICAgbW92ZW1lbnQudmVsb2NpdHkgPSBzcy5DdWJlVmVjdG9yO1xyXG4gICAgICAgIHRoaXMubm9kZVsnbW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgICAgIC8vIOWumuS5ieS4gOWumuaXtumXtOWQjumUgOavge+8jOS9huaYr+WmguaenOmBh+WIsOeisOaSnuaIluaYr+WFtuS7luaDheWGte+8jOWwseW/hemhu+WPlua2iOi/meS4quWumuaXtuWZqFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY29tbWl0U3VpY2lkZSwgdGhpcy5saWZlVGltZSk7XHJcbiAgICB9XHJcbiAgICAvLyDoh6rmiJHplIDmr4FcclxuICAgIHB1YmxpYyBjb21taXRTdWljaWRlKCkgeyB0aGlzLm5vZGUuZGVzdHJveSgpOyB9XHJcblxyXG4gICAgLy8gdGFnIOeisOaSnuS6i+S7tiBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgLy8g5riF6Zmk5a6a5pe25ZmoXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY29tbWl0U3VpY2lkZSk7XHJcbiAgICAgICAgLy8g6K6+5a6a56Kw5pKe57uEXHJcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gc3MuR3JvdXBfMDtcclxuICAgICAgICAvLyDlpoLmnpzmraPlnKjoh6rnlLHnp7vliqhcclxuICAgICAgICBpZiAodGhpcy5tb3ZlRnJlZSkge1xyXG4gICAgICAgICAgICAvLyDlsLHnpoHmraLoh6rnlLHnp7vliqhcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyDor5XnnYDliqDlhaXliLDlhbbku5bnu4RcclxuICAgICAgICAgICAgbGV0IG90aGVyR3JvdXA6IEJsb2NrR3JvdXAgPSBvdGhlci5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoc3MuYmxvY2tHcm91cE5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgc2VsZkdyb3VwOiBCbG9ja0dyb3VwID0gb3RoZXJHcm91cC5sYXN0R3JvdXA7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOS4jeWtmOWcqOi/meS4que7hO+8jOWwseWIm+W7ulxyXG4gICAgICAgICAgICBpZiAoIXNlbGZHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGZHcm91cEluc3QgPSBjY3Z2LmZyaXN0U2NyaXB0LlNwYXduQ3ViZUdyb3VwKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDph43mlrDlrprkuYnoh6rlt7HnmoTnu4RcclxuICAgICAgICAgICAgICAgIHNlbGZHcm91cCA9IHNlbGZHcm91cEluc3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrR3JvdXBOYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluiHquW3seeahOe7hFxyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGZHcm91cEluZGV4ID0gb3RoZXJHcm91cC5ncmlkSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgc2VsZkdyb3VwLmluaXQoc2VsZkdyb3VwSW5kZXgsIG51bGwsIG90aGVyR3JvdXApO1xyXG4gICAgICAgICAgICAgICAgLy8g5oyH5a6a5LiN6ZyA6KaB6Ieq5Yqo5Yid5aeL5YyWXHJcbiAgICAgICAgICAgICAgICBzZWxmR3JvdXAubmVlZFN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyDmiYvliqjliJ3lp4vljJblpJblm7Tpg6jku7ZcclxuICAgICAgICAgICAgICAgIHNlbGZHcm91cC5ub2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDliqDlhaXliLDnu4TkuK1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCBzcy5DdWJlX1BlcmZhYl9ZLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgc2VsZkdyb3VwLm5vZGUuYWRkQ2hpbGQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8g5o+Q6YaS57uE5qOA5p+l5oiQ5ZGYXHJcbiAgICAgICAgICAgIHNlbGZHcm91cC5uZWVkQ2hlY2tNZW0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf5ZCO77yM56Kw5pKe57uT5p2f5YmN55qE5oOF5Ya15LiL77yM5q+P5qyh6K6h566X56Kw5pKe57uT5p6c5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIC8vIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge31cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe57uT5p2f5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIC8vIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge31cclxuXHJcbiAgICAvLyB0YWcg6ZSA5q+B5Yqo55S7IFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu/5o2i5Li65Yqo55S76IqC54K55ZCO6ZSA5q+BICBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlc3Ryb3lXaXRoQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGxldCBpbnN0ID0gY2MuaW5zdGFudGlhdGUoc3MuRWZmZWN0X1NxdWFyZUJyZWFrKTtcclxuICAgICAgICBpbnN0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGluc3QpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+Wuj++8jOWPguaVsFxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rnlLHnp7vliqjmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG1vdmVGcmVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIOeUn+WRveWRqOacn1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbGlmZVRpbWU6IG51bWJlciA9IGNjLndpblNpemUuaGVpZ2h0IC8gc3MuQ3ViZVNwZWVkO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/widget/Botton_LoadEff.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f36d0vO0JJF66pyS9EM9mhT', 'Botton_LoadEff');
// scripts/widget/Botton_LoadEff.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd2lkZ2V0XFxCb3R0b25fTG9hZEVmZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/ActorClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4efcaIvqEFI6b/oSBkLJxTt', 'ActorClass');
// scripts/base/class/ActorClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ActorClass = /** @class */ (function (_super) {
    __extends(ActorClass, _super);
    function ActorClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ActorClass.prototype.start = function () {
    };
    ActorClass = __decorate([
        ccclass
    ], ActorClass);
    return ActorClass;
}(DevelopersToolClass_1.default));
exports.default = ActorClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXEFjdG9yQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkRBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXdDLDhCQUFtQjtJQUEzRDs7SUFXQSxDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQVJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBVzlCO0lBQUQsaUJBQUM7Q0FYRCxBQVdDLENBWHVDLDZCQUFtQixHQVcxRDtrQkFYb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSAnLi9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBEZXZlbG9wZXJzVG9vbENsYXNzIGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xDbGFzcyc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvckNsYXNzIGV4dGVuZHMgRGV2ZWxvcGVyc1Rvb2xDbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GameLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8feabNR+WNMU7CO+D93SETO', 'GameLevel');
// scripts/game/GameLevel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var GameLevel = /** @class */ (function (_super) {
    __extends(GameLevel, _super);
    // @executeInEditMode
    function GameLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameArea = null;
        _this.readyTouch = false;
        /**
         * 上一组诞生组
         */
        _this.lastGroup = null;
        return _this;
    }
    // tag LIFE-CYCLE CALLBACKS:
    GameLevel.prototype.onLoad = function () {
        // 基本初始化
        this.init();
    };
    // start() {}
    GameLevel.prototype.update = function (dt) {
        // 如果目标位置小于一定时，创建方块
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(Setting_1.default.GridCurrentPointToVec);
        if (pos.y <= cc.winSize.height / 2) {
            this.SpawnCubeGroupAndInit(Setting_1.default.GridPointer);
        }
        // 网格移动，这也会驱动方块移动
        GridAdsorb_1.default.grid.offset = Setting_1.default.GameVector.mul(dt);
    };
    // tag 用户函数部分 
    /**
     * 游戏重置及初始化
     */
    GameLevel.prototype.init = function () {
        // 初始化对齐网格
        new GridAdsorb_1.default(new cc.Vec3(Setting_1.default.Game_Column, Setting_1.default.Game_Row2, 0), new cc.Vec3(Setting_1.default.Cube_width, Setting_1.default.Cube_Height, 0));
        // 开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
        // GridAbsorb.grid.anchor = new cc.Vec3(0, 0, 0);
        // 重置网格指针
        Setting_1.default.GridCurrentPoint = 0;
        // 设置网格起点
        GridAdsorb_1.default.grid.offset = Setting_1.default.GridOriginOffset;
        // 提升脚本，偷懒
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // 注册触摸
        this.touchRegister();
    };
    /**
     * 创建方块组，并按链初始化
     */
    GameLevel.prototype.SpawnCubeGroupAndInit = function (index) {
        // 初始化,将上一个组传给这组
        var inst = this.creatActor(Setting_1.default.SquareGroup, this.gameArea);
        // 提供索引以便吸附到网格上
        var instComponent = inst.getComponent(Setting_1.default.blockGroupName);
        // 初始化,将索引给到这
        instComponent.init(index, this.lastGroup);
        // 现在这组是上组了
        this.lastGroup = instComponent;
        return inst;
    };
    /**
     * 外部创建方块组
     * @param index
     */
    GameLevel.prototype.SpawnCubeGroup = function () {
        var inst = this.creatActor(Setting_1.default.SquareGroup, this.gameArea);
        return inst;
    };
    /**
     * 创建方块
     */
    GameLevel.prototype.SpawnPlayerCube = function () {
        var inst = this.creatActor(Setting_1.default.Square, this.gameArea);
        // 提供索引以便吸附到网格上
        inst.getComponent('Block').init();
        return inst;
    };
    /**
     * 注册触摸事件
     */
    GameLevel.prototype.touchRegister = function () {
        if (!this.readyTouch) {
            this.readyTouch = true;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].on("touchstart", this.onTouchStart, this);
        }
    };
    GameLevel.prototype.onTouchStart = function (event) {
        var touchArea = event.getLocation().x / Setting_1.default.Cube_width;
        var inst = this.SpawnPlayerCube();
        var inx = Math.ceil(touchArea) * (Setting_1.default.Cube_width + Setting_1.default.Cube_Interaval) - ((cc.winSize.width + Setting_1.default.Cube_width) / 2);
        // let inx = Math.ceil(touchArea) * 177 - ((cc.winSize.width + ss.Cube_width) / 2) - 5
        inst.setPosition(inx, Setting_1.default.Separator);
    };
    // tag 基本操作函数
    /**
    * creat instantiate
    * @param {cc.Prefab} actor 实例化的目标
    * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
    * @returns
    */
    GameLevel.prototype.creatActor = function (actor, parent) {
        var actorInst = cc.instantiate(actor);
        if (parent) {
            parent.addChild(actorInst);
        }
        else {
            this.node.addChild(actorInst);
            cc.log(actorInst);
        }
        return actorInst;
    };
    __decorate([
        property(cc.Node)
    ], GameLevel.prototype, "gameArea", void 0);
    GameLevel = __decorate([
        ccclass
        // @executeInEditMode
    ], GameLevel);
    return GameLevel;
}(cc.Component));
exports.default = GameLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRyxzREFBaUQ7QUFFakQscUNBQTJCO0FBQ3JCLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQXVDLDZCQUFZO0lBRG5ELHFCQUFxQjtJQUNyQjtRQUFBLHFFQTJIQztRQXhIRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBMkZmLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBd0J0Qzs7V0FFRztRQUNPLGVBQVMsR0FBZSxJQUFJLENBQUM7O0lBRTNDLENBQUM7SUF0SEcsNEJBQTRCO0lBRTVCLDBCQUFNLEdBQU47UUFDSSxRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxhQUFhO0lBRWIsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxtQkFBbUI7UUFDbkIsSUFBSSxHQUFHLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNFLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUM7UUFDRCxpQkFBaUI7UUFDakIsb0JBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsY0FBYztJQUVkOztPQUVHO0lBQ08sd0JBQUksR0FBZDtRQUNJLFVBQVU7UUFDVixJ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QyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxpQkFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hILHNGQUFzRjtRQUN0RixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxpQkFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFHRCxhQUFhO0lBRWI7Ozs7O01BS0U7SUFDUSw4QkFBVSxHQUFwQixVQUFxQixLQUFnQixFQUFFLE1BQWdCO1FBQ25ELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQUU7YUFDdEM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7U0FBRTtRQUN6RCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBbEhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFIUixTQUFTO1FBRjdCLE9BQU87UUFDUixxQkFBcUI7T0FDQSxTQUFTLENBMkg3QjtJQUFELGdCQUFDO0NBM0hELEFBMkhDLENBM0hzQyxFQUFFLENBQUMsU0FBUyxHQTJIbEQ7a0JBM0hvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IEJsb2NrR3JvdXAgZnJvbSAnLi9CbG9ja0dyb3VwJztcclxuaW1wb3J0IHNzIGZyb20gXCIuL1NldHRpbmdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyB0YWcgTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOWfuuacrOWIneWni+WMllxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0YXJ0KCkge31cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyDlpoLmnpznm67moIfkvY3nva7lsI/kuo7kuIDlrprml7bvvIzliJvlu7rmlrnlnZdcclxuICAgICAgICBsZXQgcG9zID0gR3JpZEFic29yYi5ncmlkLmdldEdyaWRQb3NpdGlvbkJ5SW5kZXgoc3MuR3JpZEN1cnJlbnRQb2ludFRvVmVjKTtcclxuICAgICAgICBpZiAocG9zLnkgPD0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU3Bhd25DdWJlR3JvdXBBbmRJbml0KHNzLkdyaWRQb2ludGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g572R5qC856e75Yqo77yM6L+Z5Lmf5Lya6amx5Yqo5pa55Z2X56e75YqoXHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IHNzLkdhbWVWZWN0b3IubXVsKGR0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35Ye95pWw6YOo5YiGIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP6YeN572u5Y+K5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOWIneWni+WMluWvuem9kOe9keagvFxyXG4gICAgICAgIG5ldyBHcmlkQWJzb3JiKFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyhzcy5HYW1lX0NvbHVtbiwgc3MuR2FtZV9Sb3cyLCAwKSxcclxuICAgICAgICAgICAgbmV3IGNjLlZlYzMoc3MuQ3ViZV93aWR0aCwgc3MuQ3ViZV9IZWlnaHQsIDApXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gR3JpZEFic29yYi5ncmlkLmFuY2hvciA9IG5ldyBjYy5WZWMzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vIOmHjee9rue9keagvOaMh+mSiFxyXG4gICAgICAgIHNzLkdyaWRDdXJyZW50UG9pbnQgPSAwO1xyXG4gICAgICAgIC8vIOiuvue9rue9keagvOi1t+eCuVxyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBzcy5HcmlkT3JpZ2luT2Zmc2V0O1xyXG4gICAgICAgIC8vIOaPkOWNh+iEmuacrO+8jOWBt+aHklxyXG4gICAgICAgIGNjdnYuc2NyaXB0ID0gdGhpcztcclxuICAgICAgICAvLyDms6jlhozop6bmkbhcclxuICAgICAgICB0aGlzLnRvdWNoUmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaWueWdl+e7hO+8jOW5tuaMiemTvuWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgU3Bhd25DdWJlR3JvdXBBbmRJbml0KGluZGV4KTogY2MuTm9kZSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyWLOWwhuS4iuS4gOS4que7hOS8oOe7mei/mee7hFxyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHNzLlNxdWFyZUdyb3VwLCB0aGlzLmdhbWVBcmVhKTtcclxuICAgICAgICAvLyDmj5DkvpvntKLlvJXku6Xkvr/lkLjpmYTliLDnvZHmoLzkuIpcclxuICAgICAgICBsZXQgaW5zdENvbXBvbmVudDogQmxvY2tHcm91cCA9IGluc3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrR3JvdXBOYW1lKTtcclxuICAgICAgICAvLyDliJ3lp4vljJYs5bCG57Si5byV57uZ5Yiw6L+ZXHJcbiAgICAgICAgaW5zdENvbXBvbmVudC5pbml0KGluZGV4LCB0aGlzLmxhc3RHcm91cCk7XHJcbiAgICAgICAgLy8g546w5Zyo6L+Z57uE5piv5LiK57uE5LqGXHJcbiAgICAgICAgdGhpcy5sYXN0R3JvdXAgPSBpbnN0Q29tcG9uZW50O1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpJbpg6jliJvlu7rmlrnlnZfnu4QgXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTcGF3bkN1YmVHcm91cCgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5TcXVhcmVHcm91cCwgdGhpcy5nYW1lQXJlYSk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgU3Bhd25QbGF5ZXJDdWJlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHNzLlNxdWFyZSwgdGhpcy5nYW1lQXJlYSk7XHJcbiAgICAgICAgLy8g5o+Q5L6b57Si5byV5Lul5L6/5ZC46ZmE5Yiw572R5qC85LiKXHJcbiAgICAgICAgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWGjOinpuaRuOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgdG91Y2hSZWdpc3RlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVhZHlUb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBjY3Z2LmxheWVyc1swXS5vbihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCByZWFkeVRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRvdWNoQXJlYSA9IGV2ZW50LmdldExvY2F0aW9uKCkueCAvIHNzLkN1YmVfd2lkdGg7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLlNwYXduUGxheWVyQ3ViZSgpO1xyXG4gICAgICAgIGxldCBpbnggPSBNYXRoLmNlaWwodG91Y2hBcmVhKSAqIChzcy5DdWJlX3dpZHRoICsgc3MuQ3ViZV9JbnRlcmF2YWwpIC0gKChjYy53aW5TaXplLndpZHRoICsgc3MuQ3ViZV93aWR0aCkgLyAyKTtcclxuICAgICAgICAvLyBsZXQgaW54ID0gTWF0aC5jZWlsKHRvdWNoQXJlYSkgKiAxNzcgLSAoKGNjLndpblNpemUud2lkdGggKyBzcy5DdWJlX3dpZHRoKSAvIDIpIC0gNVxyXG4gICAgICAgIGluc3Quc2V0UG9zaXRpb24oaW54LCBzcy5TZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB0YWcg5Z+65pys5pON5L2c5Ye95pWwXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIGNyZWF0IGluc3RhbnRpYXRlXHJcbiAgICAqIEBwYXJhbSB7Y2MuUHJlZmFifSBhY3RvciDlrp7kvovljJbnmoTnm67moIdcclxuICAgICogQHBhcmFtIHtjYy5Ob2RlfSBwYXJlbnQg5a6e5L6L5YyW55qE5a+56LGh5bCG6KaB6ZmE5Yqg55qE55uu5qCH77yM5aaC5p6c55WZ56m65YiZ5Li66Ieq6LqrXHJcbiAgICAqIEByZXR1cm5zIFxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdEFjdG9yKGFjdG9yOiBjYy5QcmVmYWIsIHBhcmVudD86IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0ID0gY2MuaW5zdGFudGlhdGUoYWN0b3IpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHsgcGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5ub2RlLmFkZENoaWxkKGFjdG9ySW5zdCk7IGNjLmxvZyhhY3Rvckluc3QpIH1cclxuICAgICAgICByZXR1cm4gYWN0b3JJbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrkuIDnu4Tor57nlJ/nu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxhc3RHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DiologClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8d9eyP2DZLcKlpaWR1eAzJ', 'DiologClass');
// scripts/base/class/DiologClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DynamicPanelClass_1 = require("./DynamicPanelClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DiologClass = /** @class */ (function (_super) {
    __extends(DiologClass, _super);
    function DiologClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DiologClass.prototype.start = function () {
    };
    DiologClass = __decorate([
        ccclass
    ], DiologClass);
    return DiologClass;
}(DynamicPanelClass_1.default));
exports.default = DiologClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERpb2xvZ0NsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlEQUFvRDtBQUU5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBaUI7SUFBMUQ7O0lBV0EsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFSZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQVcvQjtJQUFELGtCQUFDO0NBWEQsQUFXQyxDQVh3QywyQkFBaUIsR0FXekQ7a0JBWG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDnibnmjIflr7nor53moYbnsbsgXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IER5bmFtaWNQYW5lbENsYXNzIGZyb20gJy4vRHluYW1pY1BhbmVsQ2xhc3MnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpb2xvZ0NsYXNzIGV4dGVuZHMgRHluYW1pY1BhbmVsQ2xhc3Mge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5b12PfnXFL6rthYkBUEjc3', 'Setting');
// scripts/game/Setting.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
// 游戏固定参数设定
var Setting = /** @class */ (function () {
    function Setting() {
    }
    Object.defineProperty(Setting, "Game_Column", {
        // 基本常量定义
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Game_Row", {
        get: function () { return 15; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Game_Row2", {
        get: function () { return 15; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_width", {
        get: function () { return 177; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Height", {
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Interaval", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Perfab_Y", {
        // 方块在预制体中的y坐标
        get: function () { return 50; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Separator", {
        // 底部截止线，用于生成方块位置和判断是否结束游戏
        get: function () { return -379.4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Group_0", {
        // 碰撞组
        get: function () { return 'default'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Group_1", {
        get: function () { return 'player'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameSpeed", {
        get: function () { return this._GameSpeed; },
        set: function (value) { this._GameSpeed = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameVector", {
        get: function () { return new cc.Vec3(0, -this._GameSpeed, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "CubeSpeed", {
        get: function () { return this._CubeSpeed; },
        set: function (value) { this._CubeSpeed = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "CubeVector", {
        get: function () { return new cc.Vec3(0, this._CubeSpeed, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridCurrentPoint", {
        get: function () { return this._GridCurrentPoint; },
        set: function (value) { this._GridCurrentPoint = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridCurrentPointToVec", {
        get: function () { return new cc.Vec3(0, this._GridCurrentPoint, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridPointer", {
        get: function () { return this._GridCurrentPoint++; },
        set: function (value) { this._GridCurrentPoint += value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridOriginOffset", {
        // 网格参数
        get: function () { return new cc.Vec3(0, GridAdsorb_1.default.grid.gridSize.y / 2 + cc.winSize.height / 2, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Square", {
        // 资源常量定义
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Square']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "SquareGroup", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Square Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_SquareBreak", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['splintering']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_Destory", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Destroy Effect Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "blockName", {
        // 资产常量定义
        get: function () { return 'Block'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "blockGroupName", {
        get: function () { return 'BlockGroup'; },
        enumerable: false,
        configurable: true
    });
    // 设定参数定义
    Setting._GameSpeed = 100;
    Setting._CubeSpeed = 400;
    // 网格指针
    Setting._GridCurrentPoint = 0;
    return Setting;
}());
exports.default = Setting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRixzREFBaUQ7QUFDakQsV0FBVztBQUNYO0lBQUE7SUFnREEsQ0FBQztJQTlDRyxzQkFBa0Isc0JBQVc7UUFEN0IsU0FBUzthQUNULGNBQTBDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDckQsc0JBQWtCLG1CQUFRO2FBQTFCLGNBQXVDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQWtCLG9CQUFTO2FBQTNCLGNBQXdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFcEQsc0JBQWtCLHFCQUFVO2FBQTVCLGNBQXlDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdEQsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQTBDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdkQsc0JBQWtCLHlCQUFjO2FBQWhDLGNBQTZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFeEQsc0JBQWtCLHdCQUFhO1FBRC9CLGNBQWM7YUFDZCxjQUE0QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXhELHNCQUFrQixvQkFBUztRQUQzQiwwQkFBMEI7YUFDMUIsY0FBd0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXhELHNCQUFrQixrQkFBTztRQUR6QixNQUFNO2FBQ04sY0FBc0MsT0FBTyxTQUFTLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUN4RCxzQkFBa0Isa0JBQU87YUFBekIsY0FBc0MsT0FBTyxRQUFRLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUl2RCxzQkFBa0Isb0JBQVM7YUFBM0IsY0FBd0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FB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Um9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSBcIi4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWxcIjtcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG4vLyDmuLjmiI/lm7rlrprlj4LmlbDorr7lrppcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyB7XHJcbiAgICAvLyDln7rmnKzluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVfQ29sdW1uKCk6IG51bWJlciB7IHJldHVybiA0OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX1JvdygpOiBudW1iZXIgeyByZXR1cm4gMTU7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdhbWVfUm93MigpOiBudW1iZXIgeyByZXR1cm4gMTU7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX3dpZHRoKCk6IG51bWJlciB7IHJldHVybiAxNzc7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfSW50ZXJhdmFsKCk6IG51bWJlciB7IHJldHVybiAzOyB9XHJcbiAgICAvLyDmlrnlnZflnKjpooTliLbkvZPkuK3nmoR55Z2Q5qCHXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX1BlcmZhYl9ZKCk6IG51bWJlciB7IHJldHVybiA1MDsgfVxyXG4gICAgLy8g5bqV6YOo5oiq5q2i57q/77yM55So5LqO55Sf5oiQ5pa55Z2X5L2N572u5ZKM5Yik5pat5piv5ZCm57uT5p2f5ri45oiPXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTZXBhcmF0b3IoKTogbnVtYmVyIHsgcmV0dXJuIC0zNzkuNDsgfVxyXG4gICAgLy8g56Kw5pKe57uEXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcm91cF8wKCk6IHN0cmluZyB7IHJldHVybiAnZGVmYXVsdCcgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JvdXBfMSgpOiBzdHJpbmcgeyByZXR1cm4gJ3BsYXllcicgfVxyXG5cclxuICAgIC8vIOiuvuWumuWPguaVsOWumuS5iVxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2FtZVNwZWVkOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0dhbWVTcGVlZDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgR2FtZVNwZWVkKHZhbHVlKSB7IHRoaXMuX0dhbWVTcGVlZCA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lVmVjdG9yKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgLXRoaXMuX0dhbWVTcGVlZCwgMCk7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9DdWJlU3BlZWQ6IG51bWJlciA9IDQwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQ3ViZVNwZWVkOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBDdWJlU3BlZWQodmFsdWUpIHsgdGhpcy5fQ3ViZVNwZWVkID0gdmFsdWU7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVWZWN0b3IoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9DdWJlU3BlZWQsIDApOyB9XHJcblxyXG4gICAgLy8g572R5qC85oyH6ZKIXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HcmlkQ3VycmVudFBvaW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZEN1cnJlbnRQb2ludCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkQ3VycmVudFBvaW50KHZhbHVlKSB7IHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgPSB2YWx1ZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkQ3VycmVudFBvaW50VG9WZWMoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkQ3VycmVudFBvaW50LCAwKSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkUG9pbnRlcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fR3JpZEN1cnJlbnRQb2ludCsrOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBHcmlkUG9pbnRlcih2YWx1ZSkgeyB0aGlzLl9HcmlkQ3VycmVudFBvaW50ICs9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDnvZHmoLzlj4LmlbBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyaWRPcmlnaW5PZmZzZXQoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCBHcmlkQWJzb3JiLmdyaWQuZ3JpZFNpemUueSAvIDIgKyBjYy53aW5TaXplLmhlaWdodCAvIDIsIDApIH1cclxuXHJcbiAgICAvLyDotYTmupDluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ1NxdWFyZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZUdyb3VwKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnU3F1YXJlIE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfU3F1YXJlQnJlYWsoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydzcGxpbnRlcmluZyddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9EZXN0b3J5KCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnRGVzdHJveSBFZmZlY3QgTm9kZSddIH1cclxuXHJcbiAgICAvLyDotYTkuqfluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGJsb2NrTmFtZSgpIHsgcmV0dXJuICdCbG9jaycgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYmxvY2tHcm91cE5hbWUoKSB7IHJldHVybiAnQmxvY2tHcm91cCcgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/PawnClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc67fSOWKpKmZ+mQ1IaB8ME', 'PawnClass');
// scripts/base/class/PawnClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ActorClass_1 = require("./ActorClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PawnClass = /** @class */ (function (_super) {
    __extends(PawnClass, _super);
    function PawnClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PawnClass.prototype.start = function () {
    };
    PawnClass.prototype.update = function (dt) {
    };
    PawnClass = __decorate([
        ccclass
    ], PawnClass);
    return PawnClass;
}(ActorClass_1.default));
exports.default = PawnClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhd25DbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQVU7SUFBakQ7O0lBYUEsQ0FBQztJQVhHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUFaZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWE3QjtJQUFELGdCQUFDO0NBYkQsQUFhQyxDQWJzQyxvQkFBVSxHQWFoRDtrQkFib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOWPr+aOp+WItuexuyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgQWN0b3JDbGFzcyBmcm9tICcuL0FjdG9yQ2xhc3MnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF3bkNsYXNzIGV4dGVuZHMgQWN0b3JDbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/widget/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef6e5GNu+9AR4+39J31rBZr', 'GameUI');
// scripts/widget/GameUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // cc.find("Canvas").getComponent("Game").addTimeCount();
    };
    NewClass.prototype.start = function () {
        // ccvv.fristScript
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd2lkZ2V0XFxHYW1lVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBYUEsQ0FBQztJQVhHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0kseURBQXlEO0lBQzdELENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksbUJBQW1CO0lBQ3ZCLENBQUM7SUFWZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWE1QjtJQUFELGVBQUM7Q0FiRCxBQWFDLENBYnFDLEVBQUUsQ0FBQyxTQUFTLEdBYWpEO2tCQWJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIkdhbWVcIikuYWRkVGltZUNvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gY2N2di5mcmlzdFNjcmlwdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DynamicPanelClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f421fvcjy9HCrRL+vgHKjyG', 'DynamicPanelClass');
// scripts/base/class/DynamicPanelClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DynamicPanelClass = /** @class */ (function (_super) {
    __extends(DynamicPanelClass, _super);
    function DynamicPanelClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DynamicPanelClass.prototype.start = function () {
    };
    DynamicPanelClass = __decorate([
        ccclass
    ], DynamicPanelClass);
    return DynamicPanelClass;
}(DevelopersToolClass_1.default));
exports.default = DynamicPanelClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXER5bmFtaWNQYW5lbENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUErQyxxQ0FBbUI7SUFBbEU7O0lBWUEsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsaUNBQUssR0FBTDtJQUVBLENBQUM7SUFUZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FZckM7SUFBRCx3QkFBQztDQVpELEFBWUMsQ0FaOEMsNkJBQW1CLEdBWWpFO2tCQVpvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqjmgIHnqpflj6PnsbsgXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IERldmVsb3BlcnNUb29sQ2xhc3MgZnJvbSAnLi9EZXZlbG9wZXJzVG9vbENsYXNzJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNQYW5lbENsYXNzIGV4dGVuZHMgRGV2ZWxvcGVyc1Rvb2xDbGFzcyB7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe3d6sWzhhNbrb4V2ujPwDi', 'DevelopersToolClass');
// scripts/base/class/DevelopersToolClass.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolClass = /** @class */ (function (_super) {
    __extends(DevelopersToolClass, _super);
    function DevelopersToolClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DevelopersToolClass = __decorate([
        ccclass
    ], DevelopersToolClass);
    return DevelopersToolClass;
}(cc.Component));
exports.default = DevelopersToolClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBaUQsdUNBQVk7SUFBN0Q7O0lBRUEsQ0FBQztJQUZvQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQUV2QztJQUFELDBCQUFDO0NBRkQsQUFFQyxDQUZnRCxFQUFFLENBQUMsU0FBUyxHQUU1RDtrQkFGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2ZWxvcGVyc1Rvb2xDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/UObjectBaseUtility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8112c+X0kdHRb8nGtGqyYoB', 'UObjectBaseUtility');
// scripts/base/core/UObjectBaseUtility.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UObjectBaseUtility_Private = /** @class */ (function () {
    function UObjectBaseUtility_Private() {
    }
    return UObjectBaseUtility_Private;
}());
var UObjectBaseUtility = /** @class */ (function (_super) {
    __extends(UObjectBaseUtility, _super);
    function UObjectBaseUtility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObjectBaseUtility;
}(UObjectBaseUtility_Private));
exports.default = UObjectBaseUtility;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcVU9iamVjdEJhc2VVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUFFQSxDQUFDO0lBQUQsaUNBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUNEO0lBQWdELHNDQUEwQjtJQUExRTs7SUFFQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGK0MsMEJBQTBCLEdBRXpFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIFVPYmplY3RCYXNlVXRpbGl0eV9Qcml2YXRlIHtcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVU9iamVjdEJhc2VVdGlsaXR5IGV4dGVuZHMgVU9iamVjdEJhc2VVdGlsaXR5X1ByaXZhdGUge1xyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/UObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b385uRoMRIUo4cEngshK62', 'UObject');
// scripts/base/core/UObject.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UObjectBaseUtility_1 = require("./UObjectBaseUtility");
var UObject_Private = /** @class */ (function (_super) {
    __extends(UObject_Private, _super);
    function UObject_Private() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObject_Private;
}(UObjectBaseUtility_1.default));
var UObject = /** @class */ (function (_super) {
    __extends(UObject, _super);
    function UObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObject;
}(UObject_Private));
exports.default = UObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcVU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFFdEQ7SUFBOEIsbUNBQWtCO0lBQWhEOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUY2Qiw0QkFBa0IsR0FFL0M7QUFFRDtJQUFxQywyQkFBZTtJQUFwRDs7SUFHQSxDQUFDO0lBQUQsY0FBQztBQUFELENBSEEsQUFHQyxDQUhvQyxlQUFlLEdBR25EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVPYmplY3RCYXNlVXRpbGl0eSBmcm9tIFwiLi9VT2JqZWN0QmFzZVV0aWxpdHlcIjtcclxuXHJcbmNsYXNzIFVPYmplY3RfUHJpdmF0ZSBleHRlbmRzIFVPYmplY3RCYXNlVXRpbGl0eSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVT2JqZWN0IGV4dGVuZHMgVU9iamVjdF9Qcml2YXRlIHtcclxuXHJcblxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/GridAdsorb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d30d0AcIhN+4RMZHACz6v2', 'GridAdsorb');
// scripts/base/tool/GridAdsorb.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var GridAbsorb_Private = /** @class */ (function () {
    /**
     * 网格对齐
     * 创建的同时，如果类单例中不存在实例，则将此实例赋予到类单例中
     */
    function GridAbsorb_Private(axisNum, cellSize) {
        // 晶胞尺寸
        this._CellSize = new cc.Vec3(100);
        // 网格计算原点偏移
        this._GridOffset = new cc.Vec3(0);
        // 网格计算原点偏移
        // protected _OriginOffset: cc.Vec3 = new cc.Vec3(0);
        // 网格总尺寸
        this._GridSize = null;
        // 各轴晶胞数量
        this._GridAxisCellNum = new cc.Vec3(100);
        // 网格中心锚点
        this._GridEdgeAnchor = new cc.Vec3(.5);
        if (axisNum) {
            this._GridAxisCellNum = axisNum;
            if (cellSize) {
                this._CellSize = cellSize;
                this._GridSize = new cc.Vec3(axisNum.x * cellSize.x, axisNum.y * cellSize.y, axisNum.z * cellSize.z);
            }
        }
        if (!GridAbsorb._ExclusiveGrid) {
            GridAbsorb._ExclusiveGrid = this;
        }
    }
    // SIGNPOST 网格查找                                                                                
    /**
     * 从各轴索引获得网格坐标
     * cocos和unity都是y轴向上，xz为平面
     * 为了适配平面坐标，z为深度轴
     * 通常情况下网格原点为0，而索引0在底部，如果需要0在原点首先需要将偏移量向上移动整个网格尺寸的一半
     * @param {intVec3} index
     * @return {int}
     */
    GridAbsorb_Private.prototype.getGridPositionByIndex = function (index) {
        var self = this;
        function getPos(axis) {
            // 索引限制
            var axisIndex = DevelopersToolGlobal_1.mathMacro.PMod(Math.floor(index[axis]), self._GridAxisCellNum[axis]);
            // 索引坐标
            var axisPos = axisIndex * self._CellSize[axis] + self._GridOffset[axis];
            // 归一化
            var normalPos = DevelopersToolGlobal_1.mathMacro.PMod(axisPos / self._GridSize[axis], 1);
            normalPos - normalPos - Math.floor(normalPos);
            return (normalPos + (self._GridEdgeAnchor[axis] - .5)) * self._GridSize[axis];
        }
        var x = getPos('x');
        var y = getPos('y');
        if (index instanceof cc.Vec3) {
            var z = getPos('z');
            return new cc.Vec3(x, y, z);
        }
        return new cc.Vec2(x, y);
    };
    GridAbsorb_Private._ExclusiveGrid = null;
    return GridAbsorb_Private;
}());
var GridAbsorb = /** @class */ (function (_super) {
    __extends(GridAbsorb, _super);
    function GridAbsorb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GridAbsorb, "grid", {
        /**
         * 获取静态唯一网格实例
         */
        get: function () {
            this._ExclusiveGrid = this._ExclusiveGrid || new GridAbsorb();
            return this._ExclusiveGrid;
        },
        /**
         * 将实例设置到静态唯一网格实例
         */
        set: function (grid) {
            this._ExclusiveGrid = grid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "offset", {
        /**
         * 获取网格偏移量
         */
        get: function () {
            return this._GridOffset;
        },
        /**
         * 设置网格偏移量
         */
        set: function (offset) {
            var self = this;
            var newOffset = this._GridOffset.add(offset);
            function vecMod(axis) {
                return newOffset[axis] % self.gridSize[axis];
            }
            this._GridOffset = new cc.Vec3(vecMod('x'), vecMod('y'), vecMod('z'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "cellSize", {
        /**
         * 获取单元格尺寸
         */
        get: function () {
            return this._CellSize;
        },
        /**
         * 设置单元格尺寸
         */
        set: function (size) {
            this._CellSize = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "cellNum", {
        /**
         * 获取网格轴晶格数量
         */
        get: function () {
            return this._GridAxisCellNum;
        },
        /**
         * 设置网格轴晶格数量
         */
        set: function (num) {
            this._GridAxisCellNum = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "gridSize", {
        /**
         * 获取网格尺寸
         */
        get: function () {
            return this._GridSize;
        },
        /**
         * 设置网格尺寸
         */
        set: function (size) {
            this._GridSize = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "anchor", {
        /**
         * 获取网格边缘锚点
         * 取值在[0, 1]
         */
        get: function () {
            return this._GridEdgeAnchor;
            // function toAlige(vec: cc.Vec2) {
            //     return (vec.x - vec.y + 1) / 2;
            // }
            // return new cc.Vec3(
            //     toAlige(this._GridEdgeAnchor_X),
            //     toAlige(this._GridEdgeAnchor_Y),
            //     toAlige(this._GridEdgeAnchor_Z)
            // );
        },
        /**
         * 设置网格边缘锚点
         * 取值在[0, 1]，跟随引擎
         */
        set: function (anchor) {
            var Anchor = anchor.normalize();
            Anchor.x = Math.abs(Anchor.x);
            Anchor.y = Math.abs(Anchor.y);
            Anchor.z = Math.abs(Anchor.z);
            this._GridEdgeAnchor = Anchor;
            // function toAnchor(num: number) {
            //     if (!num) return new cc.Vec2(.5);
            //     let axis = Math.max(Math.min(num, 1), 0) - .5;
            //     return new cc.Vec2(.5 - axis, .5 + axis);
            // }
            // this._GridEdgeAnchor_X = toAnchor(anchor.x);
            // this._GridEdgeAnchor_Y = toAnchor(anchor.y);
            // this._GridEdgeAnchor_Z = toAnchor(anchor.z);
        },
        enumerable: false,
        configurable: true
    });
    return GridAbsorb;
}(GridAbsorb_Private));
exports.default = GridAbsorb;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcR3JpZEFkc29yYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBZ0U7QUFDaEU7SUFHSTs7O09BR0c7SUFDSCw0QkFBWSxPQUFpQixFQUFFLFFBQWtCO1FBZ0JqRCxPQUFPO1FBQ0csY0FBUyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxXQUFXO1FBQ0QsZ0JBQVcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsV0FBVztRQUNYLHFEQUFxRDtRQUNyRCxRQUFRO1FBQ0UsY0FBUyxHQUFZLElBQUksQ0FBQztRQUNwQyxTQUFTO1FBQ0MscUJBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELFNBQVM7UUFDQyxvQkFBZSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQTFCakQsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1lBQ2hDLElBQUksUUFBUSxFQUFFO2dCQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FDeEIsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FDekIsQ0FBQzthQUNMO1NBQ0o7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtZQUM1QixVQUFVLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUNwQztJQUNMLENB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QUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLG1DQUFtQztZQUNuQyx3Q0FBd0M7WUFDeEMscURBQXFEO1lBQ3JELGdEQUFnRDtZQUNoRCxJQUFJO1lBQ0osK0NBQStDO1lBQy9DLCtDQUErQztZQUMvQywrQ0FBK0M7UUFDbkQsQ0FBQzs7O09BbkJBO0lBb0JMLGlCQUFDO0FBQUQsQ0EzR0EsQUEyR0MsQ0EzR3VDLGtCQUFrQixHQTJHekQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmNsYXNzIEdyaWRBYnNvcmJfUHJpdmF0ZSB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9FeGNsdXNpdmVHcmlkID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe9keagvOWvuem9kFxyXG4gICAgICog5Yib5bu655qE5ZCM5pe277yM5aaC5p6c57G75Y2V5L6L5Lit5LiN5a2Y5Zyo5a6e5L6L77yM5YiZ5bCG5q2k5a6e5L6L6LWL5LqI5Yiw57G75Y2V5L6L5LitXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGF4aXNOdW0/OiBjYy5WZWMzLCBjZWxsU2l6ZT86IGNjLlZlYzMpIHtcclxuICAgICAgICBpZiAoYXhpc051bSkge1xyXG4gICAgICAgICAgICB0aGlzLl9HcmlkQXhpc0NlbGxOdW0gPSBheGlzTnVtO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX0NlbGxTaXplID0gY2VsbFNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9HcmlkU2l6ZSA9IG5ldyBjYy5WZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNOdW0ueCAqIGNlbGxTaXplLngsXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpc051bS55ICogY2VsbFNpemUueSxcclxuICAgICAgICAgICAgICAgICAgICBheGlzTnVtLnogKiBjZWxsU2l6ZS56XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghR3JpZEFic29yYi5fRXhjbHVzaXZlR3JpZCkge1xyXG4gICAgICAgICAgICBHcmlkQWJzb3JiLl9FeGNsdXNpdmVHcmlkID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDmmbbog57lsLrlr7hcclxuICAgIHByb3RlY3RlZCBfQ2VsbFNpemU6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygxMDApO1xyXG4gICAgLy8g572R5qC86K6h566X5Y6f54K55YGP56e7XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRPZmZzZXQ6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIC8vIOe9keagvOiuoeeul+WOn+eCueWBj+enu1xyXG4gICAgLy8gcHJvdGVjdGVkIF9PcmlnaW5PZmZzZXQ6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIC8vIOe9keagvOaAu+WwuuWvuFxyXG4gICAgcHJvdGVjdGVkIF9HcmlkU2l6ZTogY2MuVmVjMyA9IG51bGw7XHJcbiAgICAvLyDlkITovbTmmbbog57mlbDph49cclxuICAgIHByb3RlY3RlZCBfR3JpZEF4aXNDZWxsTnVtOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMTAwKTtcclxuICAgIC8vIOe9keagvOS4reW/g+mUmueCuVxyXG4gICAgcHJvdGVjdGVkIF9HcmlkRWRnZUFuY2hvcjogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKC41KTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnvZHmoLzmn6Xmib4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOS7juWQhOi9tOe0ouW8leiOt+W+l+e9keagvOWdkOaghyAgXHJcbiAgICAgKiBjb2Nvc+WSjHVuaXR56YO95piveei9tOWQkeS4iu+8jHh65Li65bmz6Z2iICBcclxuICAgICAqIOS4uuS6humAgumFjeW5s+mdouWdkOagh++8jHrkuLrmt7HluqbovbQgIFxyXG4gICAgICog6YCa5bi45oOF5Ya15LiL572R5qC85Y6f54K55Li6MO+8jOiAjOe0ouW8lTDlnKjlupXpg6jvvIzlpoLmnpzpnIDopoEw5Zyo5Y6f54K56aaW5YWI6ZyA6KaB5bCG5YGP56e76YeP5ZCR5LiK56e75Yqo5pW05Liq572R5qC85bC65a+455qE5LiA5Y2KXHJcbiAgICAgKiBAcGFyYW0ge2ludFZlYzN9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJuIHtpbnR9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRHcmlkUG9zaXRpb25CeUluZGV4PFQgZXh0ZW5kcyBjYy5WZWMzIHwgY2MuVmVjMj4oaW5kZXg6IFQpOiBUIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UG9zKGF4aXM6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIC8vIOe0ouW8lemZkOWItlxyXG4gICAgICAgICAgICBsZXQgYXhpc0luZGV4ID0gbW0uUE1vZChNYXRoLmZsb29yKGluZGV4W2F4aXNdKSwgc2VsZi5fR3JpZEF4aXNDZWxsTnVtW2F4aXNdKTtcclxuICAgICAgICAgICAgLy8g57Si5byV5Z2Q5qCHXHJcbiAgICAgICAgICAgIGxldCBheGlzUG9zID0gYXhpc0luZGV4ICogc2VsZi5fQ2VsbFNpemVbYXhpc10gKyBzZWxmLl9HcmlkT2Zmc2V0W2F4aXNdO1xyXG4gICAgICAgICAgICAvLyDlvZLkuIDljJZcclxuICAgICAgICAgICAgbGV0IG5vcm1hbFBvcyA9IG1tLlBNb2QoYXhpc1BvcyAvIHNlbGYuX0dyaWRTaXplW2F4aXNdLCAxKTtcclxuICAgICAgICAgICAgbm9ybWFsUG9zIC0gbm9ybWFsUG9zIC0gTWF0aC5mbG9vcihub3JtYWxQb3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gKG5vcm1hbFBvcyArIChzZWxmLl9HcmlkRWRnZUFuY2hvcltheGlzXSAtIC41KSkgKiBzZWxmLl9HcmlkU2l6ZVtheGlzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHggPSBnZXRQb3MoJ3gnKTtcclxuICAgICAgICBsZXQgeSA9IGdldFBvcygneScpO1xyXG4gICAgICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIGNjLlZlYzMpIHtcclxuICAgICAgICAgICAgbGV0IHogPSBnZXRQb3MoJ3onKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKHgsIHksIHopIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih4LCB5KSBhcyBUO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQWJzb3JiIGV4dGVuZHMgR3JpZEFic29yYl9Qcml2YXRlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumdmeaAgeWUr+S4gOe9keagvOWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBncmlkKCkge1xyXG4gICAgICAgIHRoaXMuX0V4Y2x1c2l2ZUdyaWQgPSB0aGlzLl9FeGNsdXNpdmVHcmlkIHx8IG5ldyBHcmlkQWJzb3JiKClcclxuICAgICAgICByZXR1cm4gdGhpcy5fRXhjbHVzaXZlR3JpZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bCG5a6e5L6L6K6+572u5Yiw6Z2Z5oCB5ZSv5LiA572R5qC85a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGdyaWQoZ3JpZDogR3JpZEFic29yYikge1xyXG4gICAgICAgIHRoaXMuX0V4Y2x1c2l2ZUdyaWQgPSBncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC85YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb2Zmc2V0KCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nvZHmoLzlgY/np7vph48gIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9mZnNldChvZmZzZXQ6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG5ld09mZnNldCA9IHRoaXMuX0dyaWRPZmZzZXQuYWRkKG9mZnNldCk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVjTW9kKGF4aXM6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdPZmZzZXRbYXhpc10gJSBzZWxmLmdyaWRTaXplW2F4aXNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9HcmlkT2Zmc2V0ID0gbmV3IGNjLlZlYzModmVjTW9kKCd4JyksIHZlY01vZCgneScpLCB2ZWNNb2QoJ3onKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWNleWFg+agvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNlbGxTaXplKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DZWxsU2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Y2V5YWD5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2VsbFNpemUoc2l6ZTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0NlbGxTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlue9keagvOi9tOaZtuagvOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNlbGxOdW0oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRBeGlzQ2VsbE51bTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC86L205pm25qC85pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2VsbE51bShudW06IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLl9HcmlkQXhpc0NlbGxOdW0gPSBudW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmlkU2l6ZSgpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZFNpemU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyaWRTaXplKHNpemU6IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLl9HcmlkU2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzovrnnvJjplJrngrkgIFxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYW5jaG9yKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkRWRnZUFuY2hvcjtcclxuICAgICAgICAvLyBmdW5jdGlvbiB0b0FsaWdlKHZlYzogY2MuVmVjMikge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gKHZlYy54IC0gdmVjLnkgKyAxKSAvIDI7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBuZXcgY2MuVmVjMyhcclxuICAgICAgICAvLyAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9YKSxcclxuICAgICAgICAvLyAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9ZKSxcclxuICAgICAgICAvLyAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9aKVxyXG4gICAgICAgIC8vICk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOi+uee8mOmUmueCuVxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFd77yM6Lef6ZqP5byV5pOOXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYW5jaG9yKGFuY2hvcjogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBBbmNob3IgPSBhbmNob3Iubm9ybWFsaXplKCk7XHJcbiAgICAgICAgQW5jaG9yLnggPSBNYXRoLmFicyhBbmNob3IueCk7XHJcbiAgICAgICAgQW5jaG9yLnkgPSBNYXRoLmFicyhBbmNob3IueSk7XHJcbiAgICAgICAgQW5jaG9yLnogPSBNYXRoLmFicyhBbmNob3Iueik7XHJcbiAgICAgICAgdGhpcy5fR3JpZEVkZ2VBbmNob3IgPSBBbmNob3I7XHJcbiAgICAgICAgLy8gZnVuY3Rpb24gdG9BbmNob3IobnVtOiBudW1iZXIpIHtcclxuICAgICAgICAvLyAgICAgaWYgKCFudW0pIHJldHVybiBuZXcgY2MuVmVjMiguNSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBheGlzID0gTWF0aC5tYXgoTWF0aC5taW4obnVtLCAxKSwgMCkgLSAuNTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKC41IC0gYXhpcywgLjUgKyBheGlzKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5fR3JpZEVkZ2VBbmNob3JfWCA9IHRvQW5jaG9yKGFuY2hvci54KTtcclxuICAgICAgICAvLyB0aGlzLl9HcmlkRWRnZUFuY2hvcl9ZID0gdG9BbmNob3IoYW5jaG9yLnkpO1xyXG4gICAgICAgIC8vIHRoaXMuX0dyaWRFZGdlQW5jaG9yX1ogPSB0b0FuY2hvcihhbmNob3Iueik7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/NoRootTree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30349o+26ZAWLFFqHnpTt95', 'NoRootTree');
// scripts/base/tool/NoRootTree.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RigorousLibrary_1 = require("../core/RigorousLibrary");
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
/**
 * 无根树
 * @tip 根据当前游戏的定义，入栈为根，出栈为叶
 */
var noRootTree = /** @class */ (function (_super) {
    __extends(noRootTree, _super);
    function noRootTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(noRootTree, "tree", {
        /**
         * 获取树单例
         */
        get: function () {
            this._NoRootTree = this._NoRootTree || new noRootTree(30);
            return this._NoRootTree;
        },
        /**
         * 设置树单例
         */
        set: function (value) {
            this._NoRootTree = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加子项
     * @param object
     * @returns 返回这个子项的索引
     */
    noRootTree.prototype.add = function (object) {
        return this.push(object);
    };
    /**
     * 反向添加子项
     * 警告：这是不符合规则的方法，请确保栈深度允许反推，
     * 或是不再获取栈有效深度，因为这不会进行有效性检查，
     * 会破坏数据连续性
     * @param object
     */
    noRootTree.prototype.addFromFront = function (object) {
        this.$get = this.$get - 1;
        this._HashList[this.$get] = object;
        return this.$get;
    };
    Object.defineProperty(noRootTree.prototype, "root", {
        /**
         * 获取根节点
         * @returns
         */
        get: function () {
            var put = this.$put - 1;
            put = put < 0 ? this._StackSize - 1 : put;
            return this.getBuffer(put);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "put", {
        get: function () { return this.$put; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "leaf", {
        /**
         * 获取最末子节点
         * @returns
         */
        get: function () {
            return this.getBuffer(this.$get);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "get", {
        get: function () { return this.$get; },
        enumerable: false,
        configurable: true
    });
    /**
     * 从给定索引处截断，并返回截断部分
     * @param key
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    noRootTree.prototype.cut = function (key) {
        var len = (key % this._StackSize) - this.$get;
        if (this._StackIsFull)
            return this._StackSize - len;
        return this.pull(len < 0 ? this._StackSize + len : len);
    };
    /**
     * 删除指定长度的项目
     * @param length 删除的长度
     */
    noRootTree.prototype.del = function (length) {
        if (!length || length == 0)
            length = 1;
        if (length < 0)
            return this.clean();
        this.$get = length;
    };
    /**
     * 在叶子节点附近给定一个索引，并指定偏移量，转为一个有效的索引
     */
    noRootTree.prototype.getNextIndex = function (index, offset) {
        return DevelopersToolGlobal_1.mathMacro.PMod(index + offset, this._StackSize);
    };
    Object.defineProperty(noRootTree.prototype, "buffer", {
        get: function () {
            return this._HashList;
        },
        enumerable: false,
        configurable: true
    });
    return noRootTree;
}(RigorousLibrary_1.RigorousRingBuffer));
exports.default = noRootTree;
// import NTR from "../base/tool/NoRootTree"; // (〃´-ω･) 诶嘿~

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcTm9Sb290VHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBNkQ7QUFDN0Qsc0VBQWdFO0FBQ2hFOzs7R0FHRztBQUNIO0lBQXdDLDhCQUFrQjtJQUExRDs7SUFzRkEsQ0FBQztJQTlFRyxzQkFBa0Isa0JBQUk7UUFIdEI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBdUIsS0FBaUI7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BTkE7SUFRRDs7OztPQUlHO0lBQ0ksd0JBQUcsR0FBVixVQUFXLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixNQUFXO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBS0Qsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDJCQUFHO2FBQWQsY0FBbUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFLckMsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywyQkFBRzthQUFkLGNBQW1CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3JDOzs7OztPQUtHO0lBQ0ksd0JBQUcsR0FBVixVQUE2QixHQUFPO1FBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLHdCQUFHLEdBQVYsVUFBVyxNQUFlO1FBQ3RCLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxJQUFJLENBQUM7WUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixLQUFhLEVBQUUsTUFBYztRQUM3QyxPQUFPLGdDQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxzQkFBVyw4QkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0F0RkEsQUFzRkMsQ0F0RnVDLG9DQUFrQixHQXNGekQ7O0FBRUQsNERBQTREIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlnb3JvdXNSaW5nQnVmZmVyIH0gZnJvbSAnLi4vY29yZS9SaWdvcm91c0xpYnJhcnknO1xyXG5pbXBvcnQgeyBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbi8qKlxyXG4gKiDml6DmoLnmoJEgXHJcbiAqIEB0aXAg5qC55o2u5b2T5YmN5ri45oiP55qE5a6a5LmJ77yM5YWl5qCI5Li65qC577yM5Ye65qCI5Li65Y+2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBub1Jvb3RUcmVlIGV4dGVuZHMgUmlnb3JvdXNSaW5nQnVmZmVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5qCR5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX05vUm9vdFRyZWU6IG5vUm9vdFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagkeWNleS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB0cmVlKCkge1xyXG4gICAgICAgIHRoaXMuX05vUm9vdFRyZWUgPSB0aGlzLl9Ob1Jvb3RUcmVlIHx8IG5ldyBub1Jvb3RUcmVlKDMwKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTm9Sb290VHJlZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5qCR5Y2V5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHRyZWUodmFsdWU6IG5vUm9vdFRyZWUpIHtcclxuICAgICAgICB0aGlzLl9Ob1Jvb3RUcmVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlrZDpoblcclxuICAgICAqIEBwYXJhbSBvYmplY3QgXHJcbiAgICAgKiBAcmV0dXJucyDov5Tlm57ov5nkuKrlrZDpobnnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlj43lkJHmt7vliqDlrZDpobkgIFxyXG4gICAgICog6K2m5ZGK77ya6L+Z5piv5LiN56ym5ZCI6KeE5YiZ55qE5pa55rOV77yM6K+356Gu5L+d5qCI5rex5bqm5YWB6K645Y+N5o6o77yMXHJcbiAgICAgKiDmiJbmmK/kuI3lho3ojrflj5bmoIjmnInmlYjmt7HluqbvvIzlm6DkuLrov5nkuI3kvJrov5vooYzmnInmlYjmgKfmo4Dmn6XvvIxcclxuICAgICAqIOS8muegtOWdj+aVsOaNrui/nue7reaAp1xyXG4gICAgICogQHBhcmFtIG9iamVjdCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEZyb21Gcm9udChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy4kZ2V0ID0gdGhpcy4kZ2V0IC0gMTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFt0aGlzLiRnZXRdID0gb2JqZWN0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRnZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagueiKgueCuVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdCgpOiBhbnkge1xyXG4gICAgICAgIGxldCBwdXQgPSB0aGlzLiRwdXQgLSAxO1xyXG4gICAgICAgIHB1dCA9IHB1dCA8IDAgPyB0aGlzLl9TdGFja1NpemUgLSAxIDogcHV0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcihwdXQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBwdXQoKSB7IHJldHVybiB0aGlzLiRwdXQgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDmnKvlrZDoioLngrlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlYWYoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIodGhpcy4kZ2V0KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZ2V0KCkgeyByZXR1cm4gdGhpcy4kZ2V0IH1cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE5oiq5pat77yM5bm26L+U5Zue5oiq5pat6YOo5YiGXHJcbiAgICAgKiBAcGFyYW0ga2V5IFxyXG4gICAgICogQHJldHVybiBvYmpbXTogb2JqMywgb2JqNC4uLlxyXG4gICAgICogQHJldHVybiBpbmRleFtdOiAzLCA0Li4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjdXQ8VCBleHRlbmRzIG51bWJlcj4oa2V5PzogVCk6IGFueSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IChrZXkgJSB0aGlzLl9TdGFja1NpemUpIC0gdGhpcy4kZ2V0O1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgcmV0dXJuIHRoaXMuX1N0YWNrU2l6ZSAtIGxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdWxsKGxlbiA8IDAgPyB0aGlzLl9TdGFja1NpemUgKyBsZW4gOiBsZW4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTmjIflrprplb/luqbnmoTpobnnm65cclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5Yig6Zmk55qE6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWwobGVuZ3RoPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFsZW5ndGggfHwgbGVuZ3RoID09IDApIGxlbmd0aCA9IDE7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA8IDApIHJldHVybiB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgdGhpcy4kZ2V0ID0gbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjlj7blrZDoioLngrnpmYTov5Hnu5nlrprkuIDkuKrntKLlvJXvvIzlubbmjIflrprlgY/np7vph4/vvIzovazkuLrkuIDkuKrmnInmlYjnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE5leHRJbmRleChpbmRleDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG1tLlBNb2QoaW5kZXggKyBvZmZzZXQsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGJ1ZmZlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSGFzaExpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGltcG9ydCBOVFIgZnJvbSBcIi4uL2Jhc2UvdG9vbC9Ob1Jvb3RUcmVlXCI7IC8vICjjgIPCtC3Pie+9pSkg6K+25Zi/flxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/PanelTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64efe9poixCx6gFMYxQOlei', 'PanelTool');
// scripts/base/tool/PanelTool.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelTool = /** @class */ (function (_super) {
    __extends(PanelTool, _super);
    function PanelTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._generalLayer = ['BackgroundLayer', 'EternalityUILayer', 'DynamicUILayer'];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    PanelTool.prototype.onLoad = function () {
        var layers = this.node.children;
        /**
         * 可用的剩余层
         */
        var residueLayersName = this._generalLayer;
        for (var layerIndex = 0; layerIndex < layers.length; layerIndex++) {
            var layer = layers[layerIndex];
            if (layer.getComponent(cc.Camera))
                continue;
            for (var nameIndex = 0; nameIndex < residueLayersName.length; nameIndex++) {
                if (layer.name == residueLayersName[nameIndex]) {
                    residueLayersName[nameIndex] = null;
                    DevelopersToolGlobal_1.DevelopersToolGlobal.layer = layers[layerIndex];
                    break;
                }
            }
        }
    };
    __decorate([
        property({
            type: cc.String,
            displayName: '通用层名单',
            tooltip: '层按放置顺序设定优先级，与名称顺序无关',
            visible: true,
        })
    ], PanelTool.prototype, "_generalLayer", void 0);
    PanelTool = __decorate([
        ccclass
    ], PanelTool);
    return PanelTool;
}(cc.Component));
exports.default = PanelTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcUGFuZWxUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE2RTtBQUV2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWlDQztRQXpCRyxtQkFBYSxHQUFhLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7SUF5QnpGLENBQUM7SUF2Qkcsd0JBQXdCO0lBQ3hCLDBCQUFNLEdBQU47UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQzs7V0FFRztRQUNILElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxLQUFLLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtZQUMvRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsU0FBUztZQUU1QyxLQUFLLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUV2RSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDcEMsMkNBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNoQyxNQUFNO2lCQUNUO2FBQ0o7U0FDSjtJQUVMLENBQUM7SUF2QkQ7UUFOQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFDZixXQUFXLEVBQUUsT0FBTztZQUNwQixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUM7b0RBQ21GO0lBUnBFLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FpQzdCO0lBQUQsZ0JBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3NDLEVBQUUsQ0FBQyxTQUFTLEdBaUNsRDtrQkFqQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSAnLi4vY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxUb29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlN0cmluZyxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mAmueUqOWxguWQjeWNlScsXHJcbiAgICAgICAgdG9vbHRpcDogJ+WxguaMieaUvue9rumhuuW6j+iuvuWumuS8mOWFiOe6p++8jOS4juWQjeensOmhuuW6j+aXoOWFsycsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBfZ2VuZXJhbExheWVyOiBzdHJpbmdbXSA9IFsnQmFja2dyb3VuZExheWVyJywgJ0V0ZXJuYWxpdHlVSUxheWVyJywgJ0R5bmFtaWNVSUxheWVyJ107XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGxheWVycyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj6/nlKjnmoTliankvZnlsYJcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgcmVzaWR1ZUxheWVyc05hbWUgPSB0aGlzLl9nZW5lcmFsTGF5ZXI7XHJcbiAgICAgICAgZm9yIChsZXQgbGF5ZXJJbmRleCA9IDA7IGxheWVySW5kZXggPCBsYXllcnMubGVuZ3RoOyBsYXllckluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZUluZGV4ID0gMDsgbmFtZUluZGV4IDwgcmVzaWR1ZUxheWVyc05hbWUubGVuZ3RoOyBuYW1lSW5kZXgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsYXllci5uYW1lID09IHJlc2lkdWVMYXllcnNOYW1lW25hbWVJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNpZHVlTGF5ZXJzTmFtZVtuYW1lSW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjY3Z2LmxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/EventReflect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38e776njEdL3brdTU1NpFG1', 'EventReflect');
// scripts/base/tool/EventReflect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventReflect = void 0;
var UObject_1 = require("../core/UObject");
// 自定义反射
var EventReflect = /** @class */ (function (_super) {
    __extends(EventReflect, _super);
    function EventReflect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventReflect.prototype, "target", {
        get: function () {
            return;
        },
        enumerable: false,
        configurable: true
    });
    return EventReflect;
}(UObject_1.default));
exports.EventReflect = EventReflect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcRXZlbnRSZWZsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsUUFBUTtBQUNSO0lBQWtDLGdDQUFPO0lBQXpDOztJQVVBLENBQUM7SUFIRyxzQkFBVyxnQ0FBTTthQUFqQjtZQUNJLE9BQU07UUFDVixDQUFDOzs7T0FBQTtJQUNMLG1CQUFDO0FBQUQsQ0FWQSxBQVVDLENBVmlDLGlCQUFPLEdBVXhDO0FBVlksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVU9iamVjdCBmcm9tIFwiLi4vY29yZS9VT2JqZWN0XCI7XHJcbi8vIOiHquWumuS5ieWPjeWwhFxyXG5leHBvcnQgY2xhc3MgRXZlbnRSZWZsZWN0IGV4dGVuZHMgVU9iamVjdCB7XHJcbiAgICAvKipcclxuICAgICAqIOWPjeWwhOWunuS+iyAgXHJcbiAgICAgKiDkv53lrZjmiYDmnInlj43lsITlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfUmVmbGVjdEluc3Q7XHJcblxyXG4gICAgcHVibGljIGdldCB0YXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/BlockGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e2194MCANHsq+QyrRQ9KnJ', 'BlockGroup');
// scripts/game/BlockGroup.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlockGroup = /** @class */ (function (_super) {
    __extends(BlockGroup, _super);
    function BlockGroup() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tag 用户参数，宏
        /**
         * 此组代表的索引
         */
        _this._GridIndex = null;
        /**
         * 处于此组下方的组
         */
        _this._LastGroup = null;
        /**
         * 处于此组上方的组
         */
        _this._NextGroup = null;
        /**
         * 需要自动初始化
         */
        _this._NeedStart = true;
        /**
         * 需要检查成员标记
         */
        _this._NeedCheckMem = false;
        return _this;
    }
    // onLoad () {}
    BlockGroup.prototype.start = function () {
        // 随机地图
        if (this._NeedStart) {
            this.randomizeCubeLine();
        }
    };
    BlockGroup.prototype.update = function (dt) {
        // 检查成员是否满了？
        if (this.needCheckMem) {
            var children = this.node.children.filter(function (value) { return value.isValid; });
            // 满了就销毁
            if (children.length >= Setting_1.default.Game_Column) {
                this.destroyMembers();
            }
        }
        // 更新自己的坐标
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec3(0, this._GridIndex, 0));
        this.node.setPosition(0, pos.y, 0);
    };
    // tag 用户函数
    BlockGroup.prototype.init = function (index, lastGroup, nextGroup) {
        this._GridIndex = index;
        if (lastGroup) {
            lastGroup._NextGroup = this;
            this._LastGroup = lastGroup;
        }
        if (nextGroup) {
            nextGroup._LastGroup = this;
            this._NextGroup = nextGroup;
        }
    };
    /**
     * 随机化剩余方块
     */
    BlockGroup.prototype.randomizeCubeLine = function () {
        var child = this.node.children;
        var perch = [];
        var loop = 7; // 机会
        while (loop--) {
            var curcol = Math.floor(Math.random() * child.length);
            if (perch.indexOf(curcol) < 0)
                perch.push(curcol);
            if (perch.length >= (child.length - 1))
                break;
        }
        this.node.children.forEach(function (element, index) {
            if (perch.indexOf(index) <= 0)
                element.destroy();
        });
    };
    /**
     * 移除成员
     */
    BlockGroup.prototype.destroyMembers = function () {
        function findAllChildren(group) {
            var groupChildren = group.node.children;
            if (group._LastGroup)
                groupChildren = __spreadArrays(groupChildren, findAllChildren(group._LastGroup));
            return groupChildren;
        }
        findAllChildren(this).forEach(function (element) {
            // 将每个成员都替换为销毁效果节点
            var component = element.getComponent(Setting_1.default.blockName);
            if (component)
                component.destroyWithAnimation();
        });
        // 这行消除效果
        var inst = cc.instantiate(Setting_1.default.Effect_Destory);
        this.node.addChild(inst);
    };
    Object.defineProperty(BlockGroup.prototype, "gridIndex", {
        get: function () { return this._GridIndex; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "lastGroup", {
        get: function () { return this._LastGroup; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "nextGroup", {
        get: function () { return this._NextGroup; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "needStart", {
        set: function (value) { this._NeedStart = value; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BlockGroup.prototype, "needCheckMem", {
        get: function () {
            if (this._NeedCheckMem) {
                this._NeedCheckMem = false;
                return true;
            }
            else
                return false;
        },
        set: function (value) { this._NeedCheckMem = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    BlockGroup = __decorate([
        ccclass
    ], BlockGroup);
    return BlockGroup;
}(cc.Component));
exports.default = BlockGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2tHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELHFDQUEyQjtBQUVyQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUVJLHdCQUF3QjtRQUY1QixxRUFtSEM7UUEvQkcsYUFBYTtRQUViOztXQUVHO1FBQ08sZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFFcEM7O1dBRUc7UUFDTyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUV4Qzs7V0FFRztRQUNPLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRXhDOztXQUVHO1FBQ08sZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFckM7O1dBRUc7UUFDTyxtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFNN0MsQ0FBQztJQS9HRyxlQUFlO0lBRWYsMEJBQUssR0FBTDtRQUNJLE9BQU87UUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFFTCxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxZQUFZO1FBQ1osSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBTSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RSxRQUFRO1lBQ1IsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLGlCQUFFLENBQUMsV0FBVyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDekI7U0FDSjtRQUNELFVB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O2FBQXBCLGNBQXlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBS2pELHNCQUFXLGlDQUFTO2FBQXBCLGNBQXlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBS2pELHNCQUFXLGlDQUFTO2FBQXBCLFVBQXFCLEtBQWMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUtqRSxzQkFBVyxvQ0FBWTthQUN2QjtZQUNJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFBQyxPQUFPLElBQUksQ0FBQzthQUFFOztnQkFDL0QsT0FBTyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUpELFVBQXdCLEtBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUl0RSxDQUFDO0lBbEhlLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FtSDlCO0lBQUQsaUJBQUM7Q0FuSEQsQUFtSEMsQ0FuSHVDLEVBQUUsQ0FBQyxTQUFTLEdBbUhuRDtrQkFuSG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYic7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tHcm91cCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g6ZqP5py65Zyw5Zu+XHJcbiAgICAgICAgaWYgKHRoaXMuX05lZWRTdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZUN1YmVMaW5lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyDmo4Dmn6XmiJDlkZjmmK/lkKbmu6HkuobvvJ9cclxuICAgICAgICBpZiAodGhpcy5uZWVkQ2hlY2tNZW0pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuLmZpbHRlcih2YWx1ZSA9PiB7IHJldHVybiB2YWx1ZS5pc1ZhbGlkIH0pO1xyXG4gICAgICAgICAgICAvLyDmu6HkuoblsLHplIDmr4FcclxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+PSBzcy5HYW1lX0NvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95TWVtYmVycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOabtOaWsOiHquW3seeahOWdkOagh1xyXG4gICAgICAgIGxldCBwb3MgPSBHcmlkQWJzb3JiLmdyaWQuZ2V0R3JpZFBvc2l0aW9uQnlJbmRleChuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkSW5kZXgsIDApKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgcG9zLnksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflh73mlbBcclxuXHJcbiAgICBwdWJsaWMgaW5pdChpbmRleDogbnVtYmVyLCBsYXN0R3JvdXA6IEJsb2NrR3JvdXAsIG5leHRHcm91cD86IEJsb2NrR3JvdXApIHtcclxuICAgICAgICB0aGlzLl9HcmlkSW5kZXggPSBpbmRleDtcclxuICAgICAgICBpZiAobGFzdEdyb3VwKSB7XHJcbiAgICAgICAgICAgIGxhc3RHcm91cC5fTmV4dEdyb3VwID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fTGFzdEdyb3VwID0gbGFzdEdyb3VwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV4dEdyb3VwKSB7XHJcbiAgICAgICAgICAgIG5leHRHcm91cC5fTGFzdEdyb3VwID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fTmV4dEdyb3VwID0gbmV4dEdyb3VwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuWMluWJqeS9meaWueWdl1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJhbmRvbWl6ZUN1YmVMaW5lKCkge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXVxyXG4gICAgICAgIGxldCBsb29wID0gNzsgLy8g5py65LyaXHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hpbGQubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApXHJcbiAgICAgICAgICAgICAgICBwZXJjaC5wdXNoKGN1cmNvbCk7XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5sZW5ndGggPj0gKGNoaWxkLmxlbmd0aCAtIDEpKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5pbmRleE9mKGluZGV4KSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTmiJDlkZhcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlc3Ryb3lNZW1iZXJzKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRBbGxDaGlsZHJlbihncm91cDogQmxvY2tHcm91cCk6IGNjLk5vZGVbXSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cENoaWxkcmVuOiBjYy5Ob2RlW10gPSBncm91cC5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXAuX0xhc3RHcm91cClcclxuICAgICAgICAgICAgICAgIGdyb3VwQ2hpbGRyZW4gPSBbLi4uZ3JvdXBDaGlsZHJlbiwgLi4uZmluZEFsbENoaWxkcmVuKGdyb3VwLl9MYXN0R3JvdXApXTtcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwQ2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmRBbGxDaGlsZHJlbih0aGlzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyDlsIbmr4/kuKrmiJDlkZjpg73mm7/mjaLkuLrplIDmr4HmlYjmnpzoioLngrlcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnQuZ2V0Q29tcG9uZW50KHNzLmJsb2NrTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveVdpdGhBbmltYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDov5nooYzmtojpmaTmlYjmnpxcclxuICAgICAgICBsZXQgaW5zdCA9IGNjLmluc3RhbnRpYXRlKHNzLkVmZmVjdF9EZXN0b3J5KTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaW5zdCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyB0YWcg55So5oi35Y+C5pWw77yM5a6PXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmraTnu4Tku6PooajnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9HcmlkSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGdyaWRJbmRleCgpIHsgcmV0dXJuIHRoaXMuX0dyaWRJbmRleCB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOS6juatpOe7hOS4i+aWueeahOe7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0xhc3RHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGxhc3RHcm91cCgpIHsgcmV0dXJuIHRoaXMuX0xhc3RHcm91cCB9XHJcbiAgICAvKipcclxuICAgICAqIOWkhOS6juatpOe7hOS4iuaWueeahOe7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05leHRHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IG5leHRHcm91cCgpIHsgcmV0dXJuIHRoaXMuX05leHRHcm91cCB9XHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeiHquWKqOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05lZWRTdGFydDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2V0IG5lZWRTdGFydCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9OZWVkU3RhcnQgPSB2YWx1ZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHmo4Dmn6XmiJDlkZjmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9OZWVkQ2hlY2tNZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzZXQgbmVlZENoZWNrTWVtKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX05lZWRDaGVja01lbSA9IHZhbHVlIH07XHJcbiAgICBwdWJsaWMgZ2V0IG5lZWRDaGVja01lbSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fTmVlZENoZWNrTWVtKSB7IHRoaXMuX05lZWRDaGVja01lbSA9IGZhbHNlOyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/RigorousType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4af9rpBBdE0IaqTfZsbgSG', 'RigorousType');
// scripts/base/class/RigorousType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFJpZ29yb3VzVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmVv+aVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50NjQge1xyXG4gICAgaW50NjQ6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+36ZW/5pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50NjQge1xyXG4gICAgdWludDY0OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOaVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50MzIge1xyXG4gICAgaW50MzI6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+35pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50MzIge1xyXG4gICAgdWludDMyOiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOefreaVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50MTYge1xyXG4gICAgaW50MTY6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+355+t5pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50MTYge1xyXG4gICAgdWludDE2OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOWtl+iKguexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50OCB7XHJcbiAgICBpbnQ4OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOaXoOespuWPt+Wtl+iKguexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdWludDgge1xyXG4gICAgdWludDg6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog6ZW/5rWu54K557G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdDY0IHtcclxuICAgIGZsb2F0NjQ6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5rWu54K557G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdDMyIHtcclxuICAgIGZsb2F0MzI6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5paH5pys57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZXh0IHtcclxuICAgIHRleHQ6IHN0cmluZztcclxufVxyXG4vKipcclxuICog5ZG95ZCN57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEluYW1lZCB7XHJcbiAgICBuYW1lZDogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiDlm5vnu7Tnn6Lph49cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXZlY3RvcjQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgejogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDlm5vnu7TmlbTmlbDnn6Lph49cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWludHZlY3RvcjQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgejogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiByZ2Jh6Imy5b2pXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElyZ2JhIHtcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICAgIGE6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogY215a+iJsuW9qVxyXG4gKiBDeWFuLE1hZ2VudGEsWWVsbG93LEJsYWNrXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEljbXlrIHtcclxuICAgIGM6IG51bWJlcjtcclxuICAgIG06IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGs6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5LiJ57u055+i6YePXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl2ZWN0b3IzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5LiJ57u05pW05pWw55+i6YePXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElpbnR2ZWN0b3IzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogaHNi6Imy5b2pXHJcbiAqIGh1ZXMsc2F0dXJhdGlvbixicmlnaHRuZXNzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEloc2Ige1xyXG4gICAgaDogbnVtYmVyO1xyXG4gICAgczogbnVtYmVyO1xyXG4gICAgYjogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDkuInnu7TlnZDmoIdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXBvc2l0aW9uIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog56yb5Y2h5bCU5peL6L2sXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElyb3RhdGlvbiB7XHJcbiAgICB5YXc6IG51bWJlcjtcclxuICAgIHBpdGNoOiBudW1iZXI7XHJcbiAgICByb2xsOiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOS6jOe7tOefoumHj1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOS6jOe7tOaVtOaVsOefoumHj1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50dmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOW5s+mdouWwuuWvuFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJc2l6ZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOesm+WNoeWwlOWPmOaNolxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdHJhbnNmcm9tIHtcclxuICAgIHBvc2l0aW9uOiBJcG9zaXRpb247XHJcbiAgICByb3RhdGlvbjogSXJvdGF0aW9uO1xyXG4gICAgc2NhbGU6IEl2ZWN0b3IzO1xyXG59XHJcbi8qKlxyXG4gKiDnn6npmLU0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltYXQ0IHtcclxuICAgIG0wMDogbnVtYmVyOyBtMDE6IG51bWJlcjsgbTAyOiBudW1iZXI7IG0wMzogbnVtYmVyO1xyXG4gICAgbTA0OiBudW1iZXI7IG0wNTogbnVtYmVyOyBtMDY6IG51bWJlcjsgbTA3OiBudW1iZXI7XHJcbiAgICBtMDg6IG51bWJlcjsgbTA5OiBudW1iZXI7IG0xMDogbnVtYmVyOyBtMTE6IG51bWJlcjtcclxuICAgIG0xMjogbnVtYmVyOyBtMTM6IG51bWJlcjsgbTE0OiBudW1iZXI7IG0xNTogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDnn6npmLUzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltYXQzIHtcclxuICAgIG0wMDogbnVtYmVyOyBtMDE6IG51bWJlcjsgbTAyOiBudW1iZXI7XHJcbiAgICBtMDM6IG51bWJlcjsgbTA0OiBudW1iZXI7IG0wNTogbnVtYmVyO1xyXG4gICAgbTA2OiBudW1iZXI7IG0wNzogbnVtYmVyOyBtMDg6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5ZOI5biM6KGoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEloYXNoIHtcclxuICAgIGdldDxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPihrZXk6IFQpOiBhbnk7XHJcbiAgICBzZXQ8VCBleHRlbmRzIHN0cmluZyB8IG51bWJlcj4oa2V5OiBULCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIHJlbW92ZTxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPihrZXk6IFQpOiBib29sZWFuO1xyXG4gICAgY2xlYW4oKTogdm9pZDtcclxufVxyXG4vKipcclxuICog5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElhcnJheSB7XHJcbiAgICByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZDtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIHJpbmdidWZmZXJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXJpbmdCdWZmZXIge1xyXG4gICAgcHVzaDxUPihvYmplY3Q6IFQpOiBudW1iZXI7XHJcbiAgICBwdWxsPFQgZXh0ZW5kcyBudW1iZXI+KGxlbmd0aDogbnVtYmVyKTogYW55O1xyXG4gICAgY2xlYW4oKTogdm9pZDtcclxufVxyXG4vKipcclxuICog6ZuGXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElzZXQge1xyXG4gICAgbWFrZTxUIGV4dGVuZHMgSWFycmF5PihhcnJheTogVCk6IElzZXQ7XHJcbiAgICBpbnRlcnNlY3Rpb248VCBleHRlbmRzIElzZXQ+KGFycmF5X2E6IFQsIGFycmF5X2I6IFQpOiBJc2V0O1xyXG4gICAgZGlmZmVyZW5jZTxUIGV4dGVuZHMgSXNldD4oYXJyYXlfYTogVCwgYXJyYXlfYjogVCk6IElzZXQ7XHJcbiAgICB1bmlvbjxUIGV4dGVuZHMgSXNldD4oYXJyYXlfYTogVCwgYXJyYXlfYjogVCk6IElzZXQ7XHJcbiAgICB0b0FycmF5KCk6IElhcnJheTtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIOaYoOWwhFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbWFwIHtcclxuICAgIGdldDxUPihrZXk6IFQpOiBhbnk7XHJcbiAgICBzZXQ8VD4oa2V5OiBULCB2YWx1ZTogVCk6IHZvaWQ7XHJcbiAgICBhZGQ8VD4odmFsdWU6IFQpOiBudW1iZXI7XHJcbiAgICByZW1vdmU8VD4oa2V5OiBUKTogYm9vbGVhbjtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIOWtmOaUvuaVtOaVsO+8jOWPluWAvOWcqMKxMl42M14oMl42MylcclxuICog5beo5aSn57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElpbnRlZ2VySHVnZSB7XHJcbiAgICBpbnRodWdlO1xyXG59XHJcbi8qKlxyXG4gKiDlrZjmlL7mta7ngrnvvIzlj5blgLzlnKjCsTJeNjNeKDJeNjMpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdEh1Z2Uge1xyXG4gICAgaW50aHVnZTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '219931QpohMXa9AERY/82Av', 'GL');
// scripts/game/GL.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// bug 已废弃 
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnMovement_1 = require("../base/tool/PawnMovement");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
/**
 * 牛头人 NTR 继承自ringbuffer继承自RigorousArray
 * 驱动网格 GridAbsorb 用来驱动其他方块的对齐与运动
 * 移动组件 PawnMovement 简单的运动解算器，仅保留了速度解算和抵达解算，没事可以换着玩
 * 数学宏库 mm 效率低，没事别用
 * 全局仓库 ccvv.warehouse 用来保存动态加载内容
 * 全局工具 ccvv.tool 暂无
 * 全局其他 ccvv.other 暂无
 * 全局界面 ccvv.layer 保存当前世界中的所有已定义层
 * 全局脚本 ccvv.script 保存这个关卡脚本
 * 全局实例 ccvv.instance 作为全局冲突池
 */
// (〃´-ω･) 诶嘿~ 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        /**
         * 已经注册触摸
         */
        _this.readyTouch = false;
        _this._spawnOrigin = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        // 提升为关卡脚本
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // 开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
        // 创建无根树
        NoRootTree_1.default.tree = new NoRootTree_1.default(this.treeSize);
        // 创建网格驱动
        this.creatGrid();
        // cc.log(ccvv.fristScript)
        // cc.log(ccvv.warehouse);
        // ccvv.layers[0].addChild(new ccvv.warehouse['frames']['bg'])
    };
    Game.prototype.start = function () {
        this.touchRegister();
        // this.creat_lineCube();
    };
    Game.prototype.update = function (dt) {
        this.gameProcess_SpawnCube();
        // 更新所有方块的位置
        GridAdsorb_1.default.grid.offset = new cc.Vec3(0, -dt * this.globalSpeed, 0);
    };
    // TAG USER FUNCTION:                                                                                    
    // SIGNPOST 网格生成                                                                                     
    Game.prototype.creatGrid = function () {
        new GridAdsorb_1.default(new cc.Vec3(this.column, this.treeSize, 0), new cc.Vec3(this.cubeWidget, this.cubeHeight, 0));
        GridAdsorb_1.default.grid.offset = new cc.Vec3(0, cc.winSize.height / 2 + this.cubeHeight, 0);
    };
    // SIGNPOST 诞生方式                                                                                     
    /**
     * 游戏流程-诞生方块
     */
    Game.prototype.gameProcess_SpawnCube = function () {
        if (this.cheackRoot()) {
            this.creat_lineCube();
            // cc.log(NTR.tree.buffer);
        }
    };
    /**
     * 检查目标叶节点是否已为过去式
     */
    Game.prototype.cheackLose = function () {
        var leaf = this.curTreeNode('leaf');
        if (!leaf)
            return false;
        var leafPos = leaf.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var isoutbox = leafPos.y <= (cc.winSize.height * this.separatorPercent);
        return isoutbox;
    };
    /**
     * 检查目标根节点是否已为过去式
     */
    Game.prototype.cheackRoot = function () {
        var root = this.curTreeNode();
        if (!root)
            return true;
        var size = cc.v2(cc.winSize.width, cc.winSize.height);
        var size2 = size.div(2);
        var rootPos = root.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var isinbox = new DevelopersToolGlobal_1.mathMacro(rootPos).isInBox2(size2, size2.add(cc.v2(0, this.cubeHeight / 2)));
        return isinbox;
    };
    /**
     * 返回任意目标节点
     */
    Game.prototype.curTreeNode = function (node) {
        if (node === void 0) { node = 'root'; }
        if (NoRootTree_1.default.tree[node]) {
            var treeIndex = 0;
            for (var index = 0; !NoRootTree_1.default.tree[node][index]; treeIndex = ++index)
                ;
            return NoRootTree_1.default.tree[node][treeIndex];
        }
        else
            return undefined;
    };
    // TAG NATIVE FUNCTION                                                                                   
    // SIGNPOST touchevent                                                                                   
    /**
     * 注册触摸事件
     */
    Game.prototype.touchRegister = function () {
        if (!this.readyTouch) {
            this.readyTouch = true;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].on("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 注销触摸事件
     */
    Game.prototype.touchCancel = function () {
        if (this.readyTouch) {
            this.readyTouch = false;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].off("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 当触摸发生时
     * @param event
     */
    Game.prototype.onTouchStart = function (event) {
        var touchArea = event.getLocation().x / this.cubeWidget;
        var inst = this.creat_PlayerCube();
        var inx = Math.ceil(touchArea) * (this.cubeWidget + this.cubeInteraval) - ((cc.winSize.width + this.cubeWidget) / 2);
        inst.setPosition(inx, cc.winSize.width * this.separatorPercent - cc.winSize.width);
    };
    /**
     * 诞生玩家方块
     * 玩家方块不受全局速度影响，不放在树中
     */
    Game.prototype.creat_PlayerCube = function () {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(null, true);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_retrograde(inst);
        return inst;
    };
    /**
     * 绑定逆向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_retrograde = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.playerSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, 1200);
        movement.velocity = new cc.Vec2(0, this.playerSpeed);
        inst['playerMovement'] = movement;
    };
    // TAG Prefabricated function                                                                            
    // SIGNPOST instantiation and destory Actor                                                              
    /**
     * 创建一行方块
     * 随机方式我想应该大概也许是独立随机事件
     * 每行绝对会留一个空
     * @param chance 生成机会，机会越大越容易成功，但肯定会留给玩家一个空，推荐在 3 ~ 5
     */
    Game.prototype.creat_lineCube = function (chance) {
        if (chance === void 0) { chance = 4; }
        var perch = [];
        var child = {};
        var childIndex = NoRootTree_1.default.tree.add(child);
        var loop = chance;
        while (loop--) {
            var curcol = this.randomInColumn;
            if (perch.indexOf(curcol) < 0) {
                perch.push(curcol);
                var inst = this.creat_ProductionCube(childIndex, curcol);
                inst.setPosition(this.spawnOrigin.add(cc.v2(curcol * (this.cubeWidget + this.cubeInteraval), 0)));
                child[curcol] = inst;
            }
            if (perch.length >= (this.column - 1))
                break;
        }
    };
    /**
     * 创建一个方块在堆叠层
     * 并完成基本构造行为
     */
    Game.prototype.creat_ProductionCube = function (treeIndex, columnIndex) {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(treeIndex);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_consequent(inst);
        return inst;
    };
    /**
     * creat instantiate
     * @param {cc.Prefab} actor 实例化的目标
     * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
     * @returns
     */
    Game.prototype.creatActor = function (actor, parent) {
        var actorInst = cc.instantiate(actor);
        if (parent) {
            parent.addChild(actorInst);
        }
        else {
            this.node.addChild(actorInst);
            cc.log(actorInst);
        }
        return actorInst;
    };
    /**
     * 绑定顺向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_consequent = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.globalSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, -1200);
        movement.velocity = new cc.Vec2(0, -this.globalSpeed);
        inst['otherMovement'] = movement;
    };
    /**
     * 外部玩家阵营复制绑定控制组件
     * @param node
     */
    Game.prototype.bindMovement = function (node) {
        this.bindMovement_consequent(node);
    };
    Object.defineProperty(Game.prototype, "cube", {
        // SIGNPOST macro                                                                                        
        /**
         * 获取指定的预制体方块
         */
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['block']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "column", {
        /**
         * 获取当前所有的列数
         */
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "randomInColumn", {
        /**
         * 获取列数内的随机整数
         */
        get: function () { return Math.floor(Math.random() * this.column); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeWidget", {
        /**
         * 获取方块所占宽度
         */
        get: function () { return 177; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeInteraval", {
        /**
         * 获取方块间隔
         */
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeHeight", {
        /**
         * 获取方块所占高度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnOrigin", {
        /**
         * 获取方块诞生原点
         */
        get: function () {
            if (!this._spawnOrigin)
                this._spawnOrigin = cc.v2(-(this.column - 1) * (this.cubeWidget + this.cubeInteraval) / 2, cc.winSize.height / 2 + this.cubeHeight * 1.4);
            return this._spawnOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnMinCount", {
        /**
         * 获取每行最小可诞生的数量
         */
        get: function () { return 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "separatorPercent", {
        /**
         * 获取截止线屏幕百分比
         */
        get: function () { return .290625; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "globalSpeed", {
        /**
         * 获取全局速度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "playerSpeed", {
        /**
         * 获取玩家方块速度
         */
        get: function () { return 1000; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "treeSize", {
        /**
         * 获取树规模
         */
        get: function () { return 30; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], Game.prototype, "label", void 0);
    __decorate([
        property
    ], Game.prototype, "text", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR0wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsV0FBVztBQUNYLDJFQUFtRztBQUNuRywwREFBcUQ7QUFDckQsc0RBQWlEO0FBQ2pELHNEQUEwQztBQUUxQzs7Ozs7Ozs7Ozs7R0FXRztBQUNILGVBQWU7QUFFVCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW9TQztRQWpTRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUF1SHZCOztXQUVHO1FBQ08sZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUErSS9CLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQXFCeEMsQ0FBQztJQTVSRyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLFVBQVU7UUFDViwyQ0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsT0FBTztRQUNQLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFFdEMsUUFBUTtRQUNSLG9CQUFHLENBQUMsSUFBSSxHQUFHLElBQUksb0JBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsU0FBUztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLDhEQUE4RDtJQUNsRSxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxh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QUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFDL0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUNoRCxDQUFBO1lBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsK0JBQWE7UUFIeEI7O1dBRUc7YUFDSCxjQUFxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWhELHNCQUFXLGtDQUFnQjtRQUgzQjs7V0FFRzthQUNILGNBQXdDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJekQsc0JBQVcsNkJBQVc7UUFIdEI7O1dBRUc7YUFDSCxjQUFtQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWhELHNCQUFXLDZCQUFXO1FBSHRCOztXQUVHO2FBQ0gsY0FBbUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUlqRCxzQkFBVywwQkFBUTtRQUhuQjs7V0FFRzthQUNILGNBQWdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFoUzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRO3NDQUNjO0lBTk4sSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9TeEI7SUFBRCxXQUFDO0NBcFNELEFBb1NDLENBcFNpQyxFQUFFLENBQUMsU0FBUyxHQW9TN0M7a0JBcFNvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVnIOW3suW6n+W8gyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBQYXduTW92ZW1lbnQgZnJvbSAnLi4vYmFzZS90b29sL1Bhd25Nb3ZlbWVudCc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IE5UUiBmcm9tIFwiLi4vYmFzZS90b29sL05vUm9vdFRyZWVcIjtcclxuXHJcbi8qKlxyXG4gKiDniZvlpLTkurogTlRSIOe7p+aJv+iHqnJpbmdidWZmZXLnu6fmib/oh6pSaWdvcm91c0FycmF5XHJcbiAqIOmpseWKqOe9keagvCBHcmlkQWJzb3JiIOeUqOadpempseWKqOWFtuS7luaWueWdl+eahOWvuem9kOS4jui/kOWKqFxyXG4gKiDnp7vliqjnu4Tku7YgUGF3bk1vdmVtZW50IOeugOWNleeahOi/kOWKqOino+eul+WZqO+8jOS7heS/neeVmeS6humAn+W6puino+eul+WSjOaKtei+vuino+eul++8jOayoeS6i+WPr+S7peaNouedgOeOqVxyXG4gKiDmlbDlrablro/lupMgbW0g5pWI546H5L2O77yM5rKh5LqL5Yir55SoXHJcbiAqIOWFqOWxgOS7k+W6kyBjY3Z2LndhcmVob3VzZSDnlKjmnaXkv53lrZjliqjmgIHliqDovb3lhoXlrrlcclxuICog5YWo5bGA5bel5YW3IGNjdnYudG9vbCDmmoLml6BcclxuICog5YWo5bGA5YW25LuWIGNjdnYub3RoZXIg5pqC5pegXHJcbiAqIOWFqOWxgOeVjOmdoiBjY3Z2LmxheWVyIOS/neWtmOW9k+WJjeS4lueVjOS4reeahOaJgOacieW3suWumuS5ieWxglxyXG4gKiDlhajlsYDohJrmnKwgY2N2di5zY3JpcHQg5L+d5a2Y6L+Z5Liq5YWz5Y2h6ISa5pysXHJcbiAqIOWFqOWxgOWunuS+iyBjY3Z2Lmluc3RhbmNlIOS9nOS4uuWFqOWxgOWGsueqgeaxoFxyXG4gKi9cclxuLy8gKOOAg8K0Lc+J772lKSDor7blmL9+IFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOaPkOWNh+S4uuWFs+WNoeiEmuacrFxyXG4gICAgICAgIGNjdnYuc2NyaXB0ID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8g5byA5ZCv56Kw5pKeXHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuaXoOagueagkVxyXG4gICAgICAgIE5UUi50cmVlID0gbmV3IE5UUih0aGlzLnRyZWVTaXplKTtcclxuICAgICAgICAvLyDliJvlu7rnvZHmoLzpqbHliqhcclxuICAgICAgICB0aGlzLmNyZWF0R3JpZCgpO1xyXG5cclxuICAgICAgICAvLyBjYy5sb2coY2N2di5mcmlzdFNjcmlwdClcclxuICAgICAgICAvLyBjYy5sb2coY2N2di53YXJlaG91c2UpO1xyXG4gICAgICAgIC8vIGNjdnYubGF5ZXJzWzBdLmFkZENoaWxkKG5ldyBjY3Z2LndhcmVob3VzZVsnZnJhbWVzJ11bJ2JnJ10pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaFJlZ2lzdGVyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jcmVhdF9saW5lQ3ViZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmdhbWVQcm9jZXNzX1NwYXduQ3ViZSgpO1xyXG4gICAgICAgIC8vIOabtOaWsOaJgOacieaWueWdl+eahOS9jee9rlxyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBuZXcgY2MuVmVjMygwLCAtZHQgKiB0aGlzLmdsb2JhbFNwZWVkLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgVVNFUiBGVU5DVElPTjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnvZHmoLznlJ/miJAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0R3JpZCgpIHtcclxuICAgICAgICBuZXcgR3JpZEFic29yYihcclxuICAgICAgICAgICAgbmV3IGNjLlZlYzModGhpcy5jb2x1bW4sIHRoaXMudHJlZVNpemUsIDApLFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyh0aGlzLmN1YmVXaWRnZXQsIHRoaXMuY3ViZUhlaWdodCwgMClcclxuICAgICAgICApO1xyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBuZXcgY2MuVmVjMygwLCBjYy53aW5TaXplLmhlaWdodCAvIDIgKyB0aGlzLmN1YmVIZWlnaHQsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIOivnueUn+aWueW8jyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+a1geeoiy3or57nlJ/mlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdhbWVQcm9jZXNzX1NwYXduQ3ViZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVhY2tSb290KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdF9saW5lQ3ViZSgpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coTlRSLnRyZWUuYnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4Dmn6Xnm67moIflj7boioLngrnmmK/lkKblt7LkuLrov4fljrvlvI9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNoZWFja0xvc2UoKSB7XHJcbiAgICAgICAgbGV0IGxlYWYgPSB0aGlzLmN1clRyZWVOb2RlKCdsZWFmJyk7XHJcbiAgICAgICAgaWYgKCFsZWFmKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGxlYWZQb3MgPSBsZWFmLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgIGxldCBpc291dGJveCA9IGxlYWZQb3MueSA8PSAoY2Mud2luU2l6ZS5oZWlnaHQgKiB0aGlzLnNlcGFyYXRvclBlcmNlbnQpO1xyXG4gICAgICAgIHJldHVybiBpc291dGJveDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpeebruagh+agueiKgueCueaYr+WQpuW3suS4uui/h+WOu+W8j1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlYWNrUm9vdCgpIHtcclxuICAgICAgICBsZXQgcm9vdCA9IHRoaXMuY3VyVHJlZU5vZGUoKTtcclxuICAgICAgICBpZiAoIXJvb3QpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGxldCBzaXplID0gY2MudjIoY2Mud2luU2l6ZS53aWR0aCwgY2Mud2luU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIGxldCBzaXplMiA9IHNpemUuZGl2KDIpO1xyXG4gICAgICAgIGxldCByb290UG9zID0gcm9vdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICBsZXQgaXNpbmJveCA9IG5ldyBtbShyb290UG9zKS5pc0luQm94MihzaXplMiwgc2l6ZTIuYWRkKGNjLnYyKDAsIHRoaXMuY3ViZUhlaWdodCAvIDIpKSk7XHJcbiAgICAgICAgcmV0dXJuIGlzaW5ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57ku7vmhI/nm67moIfoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGN1clRyZWVOb2RlKG5vZGU6IHN0cmluZyA9ICdyb290Jyk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmIChOVFIudHJlZVtub2RlXSkge1xyXG4gICAgICAgICAgICBsZXQgdHJlZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyAhTlRSLnRyZWVbbm9kZV1baW5kZXhdOyB0cmVlSW5kZXggPSArK2luZGV4KTtcclxuICAgICAgICAgICAgcmV0dXJuIE5UUi50cmVlW25vZGVdW3RyZWVJbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgTkFUSVZFIEZVTkNUSU9OICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCB0b3VjaGV2ZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWGjOinpuaRuOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgdG91Y2hSZWdpc3RlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVhZHlUb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBjY3Z2LmxheWVyc1swXS5vbihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5rOo6ZSA6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaENhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjY3Z2LmxheWVyc1swXS5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW3sue7j+azqOWGjOinpuaRuFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVhZHlUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T6Kem5pG45Y+R55Sf5pe2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnQgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2hBcmVhID0gZXZlbnQuZ2V0TG9jYXRpb24oKS54IC8gdGhpcy5jdWJlV2lkZ2V0O1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdF9QbGF5ZXJDdWJlKCk7XHJcbiAgICAgICAgbGV0IGlueCA9IE1hdGguY2VpbCh0b3VjaEFyZWEpICogKHRoaXMuY3ViZVdpZGdldCArIHRoaXMuY3ViZUludGVyYXZhbCkgLSAoKGNjLndpblNpemUud2lkdGggKyB0aGlzLmN1YmVXaWRnZXQpIC8gMik7XHJcbiAgICAgICAgaW5zdC5zZXRQb3NpdGlvbihpbngsIGNjLndpblNpemUud2lkdGggKiB0aGlzLnNlcGFyYXRvclBlcmNlbnQgLSBjYy53aW5TaXplLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOivnueUn+eOqeWutuaWueWdl1xyXG4gICAgICog546p5a625pa55Z2X5LiN5Y+X5YWo5bGA6YCf5bqm5b2x5ZON77yM5LiN5pS+5Zyo5qCR5LitXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdF9QbGF5ZXJDdWJlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHRoaXMuY3ViZSwgY2N2di5sYXllcnNbMV0pO1xyXG4gICAgICAgIHRyeSB7IGluc3QuZ2V0Q29tcG9uZW50KCdCbG9jaycpLmluaXQobnVsbCwgdHJ1ZSk7IH1cclxuICAgICAgICBjYXRjaCB7IGNjLmxvZyhcIuaJvuS4jeWIsOe7hOS7tjogQmxvY2tcIik7IH1cclxuICAgICAgICB0aGlzLmJpbmRNb3ZlbWVudF9yZXRyb2dyYWRlKGluc3QpO1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5HlrprpgIblkJHnp7vliqjmjqfliLbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBpbnN0IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYmluZE1vdmVtZW50X3JldHJvZ3JhZGUoaW5zdCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb3ZlbWVudCA9IG5ldyBQYXduTW92ZW1lbnQoaW5zdCk7XHJcbiAgICAgICAgbW92ZW1lbnQubWF4U3BlZWQgPSB0aGlzLnBsYXllclNwZWVkO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1EcmFnID0gMDtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRm9yY2UgPSBuZXcgY2MuVmVjMigwLCAxMjAwKTtcclxuICAgICAgICBtb3ZlbWVudC52ZWxvY2l0eSA9IG5ldyBjYy5WZWMyKDAsIHRoaXMucGxheWVyU3BlZWQpO1xyXG4gICAgICAgIGluc3RbJ3BsYXllck1vdmVtZW50J10gPSBtb3ZlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgUHJlZmFicmljYXRlZCBmdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBTSUdOUE9TVCBpbnN0YW50aWF0aW9uIGFuZCBkZXN0b3J5IEFjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOihjOaWueWdl1xyXG4gICAgICog6ZqP5py65pa55byP5oiR5oOz5bqU6K+l5aSn5qaC5Lmf6K645piv54us56uL6ZqP5py65LqL5Lu2XHJcbiAgICAgKiDmr4/ooYznu53lr7nkvJrnlZnkuIDkuKrnqbpcclxuICAgICAqIEBwYXJhbSBjaGFuY2Ug55Sf5oiQ5py65Lya77yM5py65Lya6LaK5aSn6LaK5a655piT5oiQ5Yqf77yM5L2G6IKv5a6a5Lya55WZ57uZ546p5a625LiA5Liq56m677yM5o6o6I2Q5ZyoIDMgfiA1XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdF9saW5lQ3ViZShjaGFuY2UgPSA0KSB7XHJcbiAgICAgICAgbGV0IHBlcmNoID0gW107XHJcbiAgICAgICAgbGV0IGNoaWxkID0ge307XHJcbiAgICAgICAgbGV0IGNoaWxkSW5kZXggPSBOVFIudHJlZS5hZGQoY2hpbGQpO1xyXG4gICAgICAgIGxldCBsb29wID0gY2hhbmNlO1xyXG4gICAgICAgIHdoaWxlIChsb29wLS0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cmNvbCA9IHRoaXMucmFuZG9tSW5Db2x1bW47XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5pbmRleE9mKGN1cmNvbCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBwZXJjaC5wdXNoKGN1cmNvbClcclxuICAgICAgICAgICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdF9Qcm9kdWN0aW9uQ3ViZShjaGlsZEluZGV4LCBjdXJjb2wpO1xyXG4gICAgICAgICAgICAgICAgaW5zdC5zZXRQb3NpdGlvbih0aGlzLnNwYXduT3JpZ2luLmFkZChjYy52MihjdXJjb2wgKiAodGhpcy5jdWJlV2lkZ2V0ICsgdGhpcy5jdWJlSW50ZXJhdmFsKSwgMCkpKVxyXG4gICAgICAgICAgICAgICAgY2hpbGRbY3VyY29sXSA9IGluc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBlcmNoLmxlbmd0aCA+PSAodGhpcy5jb2x1bW4gLSAxKSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuIDkuKrmlrnlnZflnKjloIblj6DlsYJcclxuICAgICAqIOW5tuWujOaIkOWfuuacrOaehOmAoOihjOS4ulxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRfUHJvZHVjdGlvbkN1YmUodHJlZUluZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcih0aGlzLmN1YmUsIGNjdnYubGF5ZXJzWzFdKVxyXG4gICAgICAgIHRyeSB7IGluc3QuZ2V0Q29tcG9uZW50KCdCbG9jaycpLmluaXQodHJlZUluZGV4KTsgfVxyXG4gICAgICAgIGNhdGNoIHsgY2MubG9nKFwi5om+5LiN5Yiw57uE5Lu2OiBCbG9ja1wiKTsgfVxyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X2NvbnNlcXVlbnQoaW5zdCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0IGluc3RhbnRpYXRlXHJcbiAgICAgKiBAcGFyYW0ge2NjLlByZWZhYn0gYWN0b3Ig5a6e5L6L5YyW55qE55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHBhcmVudCDlrp7kvovljJbnmoTlr7nosaHlsIbopoHpmYTliqDnmoTnm67moIfvvIzlpoLmnpznlZnnqbrliJnkuLroh6rouqtcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRBY3RvcihhY3RvcjogY2MuUHJlZmFiLCBwYXJlbnQ/OiBjYy5Ob2RlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGFjdG9ySW5zdCA9IGNjLmluc3RhbnRpYXRlKGFjdG9yKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7IHBhcmVudC5hZGRDaGlsZChhY3Rvckluc3QpOyB9XHJcbiAgICAgICAgZWxzZSB7IHRoaXMubm9kZS5hZGRDaGlsZChhY3Rvckluc3QpOyBjYy5sb2coYWN0b3JJbnN0KSB9XHJcbiAgICAgICAgcmV0dXJuIGFjdG9ySW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57uR5a6a6aG65ZCR56e75Yqo5o6n5Yi257uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gaW5zdCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGJpbmRNb3ZlbWVudF9jb25zZXF1ZW50KGluc3QpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW92ZW1lbnQgPSBuZXcgUGF3bk1vdmVtZW50KGluc3QpO1xyXG4gICAgICAgIG1vdmVtZW50Lm1heFNwZWVkID0gdGhpcy5nbG9iYWxTcGVlZDtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRHJhZyA9IDA7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybUZvcmNlID0gbmV3IGNjLlZlYzIoMCwgLTEyMDApO1xyXG4gICAgICAgIG1vdmVtZW50LnZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgLXRoaXMuZ2xvYmFsU3BlZWQpO1xyXG4gICAgICAgIGluc3RbJ290aGVyTW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpJbpg6jnjqnlrrbpmLXokKXlpI3liLbnu5HlrprmjqfliLbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYmluZE1vdmVtZW50KG5vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJpbmRNb3ZlbWVudF9jb25zZXF1ZW50KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIG1hY3JvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6a55qE6aKE5Yi25L2T5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3ViZSgpOiBjYy5QcmVmYWIgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnYmxvY2snXTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3miYDmnInnmoTliJfmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIDQ7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YiX5pWw5YaF55qE6ZqP5py65pW05pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcmFuZG9tSW5Db2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sdW1uKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDlrr3luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlV2lkZ2V0KCk6IG51bWJlciB7IHJldHVybiAxNzc7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6Ze06ZqUXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3ViZUludGVyYXZhbCgpOiBudW1iZXIgeyByZXR1cm4gMzsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDpq5jluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6K+e55Sf5Y6f54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3Bhd25PcmlnaW4oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zcGF3bk9yaWdpbilcclxuICAgICAgICAgICAgdGhpcy5fc3Bhd25PcmlnaW4gPSBjYy52MihcclxuICAgICAgICAgICAgICAgIC0odGhpcy5jb2x1bW4gLSAxKSAqICh0aGlzLmN1YmVXaWRnZXQgKyB0aGlzLmN1YmVJbnRlcmF2YWwpIC8gMixcclxuICAgICAgICAgICAgICAgIGNjLndpblNpemUuaGVpZ2h0IC8gMiArIHRoaXMuY3ViZUhlaWdodCAqIDEuNFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYXduT3JpZ2luO1xyXG4gICAgfVxyXG4gICAgcHVibGljIF9zcGF3bk9yaWdpbjogY2MuVmVjMiA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluavj+ihjOacgOWwj+WPr+ivnueUn+eahOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNwYXduTWluQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIDI7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oiq5q2i57q/5bGP5bmV55m+5YiG5q+UXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc2VwYXJhdG9yUGVyY2VudCgpOiBudW1iZXIgeyByZXR1cm4gLjI5MDYyNTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhajlsYDpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnbG9iYWxTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gMTAwOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueOqeWutuaWueWdl+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBsYXllclNwZWVkKCk6IG51bWJlciB7IHJldHVybiAxMDAwOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagkeinhOaooVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRyZWVTaXplKCk6IG51bWJlciB7IHJldHVybiAzMDsgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/BL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6bc6FrRRVPbpB9I2O8jbmT', 'BL');
// scripts/game/BL.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// bug 已废弃 
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnClass_1 = require("../base/class/PawnClass");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var block = /** @class */ (function (_super) {
    __extends(block, _super);
    function block() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // SIGNPOST macro                                                                                        
        /**
         * 所处树节点索引
         * 当处于玩家阵营时，此索引无效
         */
        _this._TreeIndex = null;
        _this._ColNode = null;
        _this._ColComponent = null;
        /**
         * 是否允许处理碰撞，这也代表这是属于玩家阵营的方块
         */
        _this.enabledCollision = false;
        /**
         * 冲突标记
         */
        _this._Conglict = false;
        /**
         * 剩余等待计数
         */
        _this._WaitForConflict = 3;
        return _this;
    }
    // onLoad () {}
    block.prototype.start = function () {
    };
    block.prototype.update = function (dt) {
        if (!this.conflict && this.enabledCollision)
            this.node['playerMovement'].updateByVelocity(dt);
        else {
            var gridPos = GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex));
            this.node.setPosition(this.node.x, gridPos.y);
        }
    };
    // TAG USER FUNCTION:                                                                                    
    /**
     * 初始化事件
     * @param Index
     */
    block.prototype.init = function (Index, playerMode) {
        if (playerMode === void 0) { playerMode = false; }
        if (playerMode) {
            this.node.group = 'player';
            this.enabledCollision = true;
        }
        else {
            this.treeIndex = Index;
        }
    };
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionEnter = function (other, self) {
        var _a;
        if (!this.enabledCollision)
            return;
        cc.log("碰撞开始");
        // 获取碰撞的树节点
        var otherBlock = this.getBlockComponent(other);
        var otherTreeIndex = otherBlock.treeIndex;
        if (typeof otherTreeIndex == 'number') {
            var selfTreeIndex = NoRootTree_1.default.tree.getNextIndex(otherTreeIndex, -1);
            var treeGroup = NoRootTree_1.default.tree.getBuffer(selfTreeIndex);
            // 如果组在树中
            if (treeGroup) {
                // 由于自己的到来而填充了一行
                if (Object.keys(treeGroup).length + 1 >= DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.column) {
                    // 就销毁之后包括自己在内的所有节点
                    this.destroyTreeNodeAfterIndex(selfTreeIndex + 1);
                    return;
                }
                // 而不能填充一行的话
                else {
                    // 临时加入到此组中
                    treeGroup[this['_id']] = this.node;
                }
                this.treeIndex = selfTreeIndex;
            }
            // 如果组不在树中，说明在最外边
            else {
                this.treeIndex = NoRootTree_1.default.tree.addFromFront((_a = {}, _a[this['_id']] = this.node, _a));
            }
        }
        // 如果还未存在冲突
        if (!this.conflict) {
            // 对齐,避免发生重复对齐
            this.AlignPos = otherBlock.AlignPos;
            cc.log(this.treeIndex, NoRootTree_1.default.tree.put, NoRootTree_1.default.tree.get, NoRootTree_1.default.tree.buffer);
        }
        // 标记为冲突
        this.markConflictAndCopyMotion();
    };
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionStay = function (other, self) {
        if (!this.enabledCollision)
            return;
        // if (ccvv.getInstanceByName())
        if (!this.waitForConflict)
            cc.log("碰撞中");
    };
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionExit = function (other, self) {
        if (!this.enabledCollision)
            return;
        if (!this.node.isValid)
            return;
        cc.log("碰撞结束");
        if (this.waitForConflict)
            this.conflict = false;
    };
    // SIGNPOST function                                                                                     
    /**
     * 从给定索引处销毁所有节点，包括自身
     * @param index
     */
    block.prototype.destroyTreeNodeAfterIndex = function (index) {
        var treeBehindObject = NoRootTree_1.default.tree.cut(index).obj;
        treeBehindObject.forEach(function (objectElement) {
            Object.keys(objectElement).forEach(function (elementName) {
                objectElement[elementName].destroy();
            });
        });
        this.node.destroy();
    };
    /**
     * 在给定树索引位置上添加自身
     * @param index
     */
    block.prototype.addTreeNodeAtIndex = function (index) {
    };
    /**
     * 标记为冲突并复制运动
     * 标记冲突时意味着运动将朝向新的运动组件
     * @param index
     */
    block.prototype.markConflictAndCopyMotion = function () {
        // 标记冲突并复制运动
        this.conflict = true;
        if (!this.node['otherMovement'])
            DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.bindMovement(this.node);
        // 对齐到任意节点中
        // let treeIndexObject = NTR.tree.getBuffer(index);
        // if (!treeIndexObject) {
        //     treeIndexObject = NTR.tree.getBuffer(NTR.tree.getNextIndex(index, 1));
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y - ccvv.fristScript.cubeHeight));
        // }
        // else {
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y));
        // }
    };
    Object.defineProperty(block.prototype, "treeIndex", {
        get: function () { return this._TreeIndex; },
        set: function (value) { this._TreeIndex = value; },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取其他方块node上的block组件
     * @param block
     */
    block.prototype.getBlockComponent = function (block) {
        var blockNode = block instanceof cc.Node ? block : block.node;
        if (!this._ColNode || this._ColNode != blockNode)
            this._ColComponent = blockNode.getComponent('Block');
        return this._ColComponent;
    };
    Object.defineProperty(block.prototype, "conflict", {
        get: function () { return this._Conglict; },
        /**
         * 标记或加入到冲突
         */
        set: function (value) {
            // if (typeof value == 'boolean') {
            this._Conglict = value;
            // }
            // else {
            //     this._Conglict = true;
            //     ccvv.setInstanceByName(value, this.node);
            // }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "waitForConflict", {
        /**
         * 是否等待冲突
         */
        get: function () {
            return this._WaitForConflict-- > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "AlignPos", {
        /**
         * 获取对齐坐标
         */
        get: function () {
            // 使用无根树方式获取对齐坐标
            // if (!this.enabledCollision) {
            //     let treeIndexObject = NTR.tree.getBuffer(NTR.tree.getNextIndex(this.treeIndex, -1));
            //     if (treeIndexObject) {
            //         let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
            //         return new cc.Vec2(this.node.x, AlignTarget.y)
            //     }
            // }
            // return new cc.Vec2(this.node.x, this.node.y - ccvv.fristScript.cubeHeight)
            // 使用对齐网格获取对齐坐标
            return GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex - 1));
        },
        /**
         * 设置对齐坐标
         */
        set: function (value) {
            this.node.setPosition(this.node.x, value.y);
        },
        enumerable: false,
        configurable: true
    });
    block = __decorate([
        ccclass
    ], block);
    return block;
}(PawnClass_1.default));
exports.default = block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQkwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsV0FBVztBQUNYLDJFQUFtRztBQUNuRyxxREFBZ0Q7QUFDaEQsc0RBQWlEO0FBQ2pELHNEQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFtQyx5QkFBUztJQUE1QztRQUVJLHdCQUF3QjtRQUY1QixxRUEyT0M7UUFqRkcseUdBQXlHO1FBRXpHOzs7V0FHRztRQUNPLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBYzFCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLG1CQUFhLEdBQVUsSUFBSSxDQUFDO1FBQ3RDOztXQUVHO1FBQ08sc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBSTVDOztXQUVHO1FBQ08sZUFBUyxHQUFZLEtBQUssQ0FBQztRQWVyQzs7V0FFRztRQUNLLHNCQUFnQixHQUFXLENBQUMsQ0FBQzs7SUErQnpDLENBQUM7SUF2T0csZUFBZTtJQUVmLHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksT0FBTyxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVB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QUF5RDtZQUN6RCxRQUFRO1lBQ1IsSUFBSTtZQUNKLDZFQUE2RTtZQUU3RSxlQUFlO1lBQ2YsT0FBTyxvQkFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FOQTtJQXBPZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTJPekI7SUFBRCxZQUFDO0NBM09ELEFBMk9DLENBM09rQyxtQkFBUyxHQTJPM0M7a0JBM09vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVnIOW3suW6n+W8gyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBQYXduQ2xhc3MgZnJvbSAnLi4vYmFzZS9jbGFzcy9QYXduQ2xhc3MnO1xyXG5pbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYic7XHJcbmltcG9ydCBOVFIgZnJvbSBcIi4uL2Jhc2UvdG9vbC9Ob1Jvb3RUcmVlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBibG9jayBleHRlbmRzIFBhd25DbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25mbGljdCAmJiB0aGlzLmVuYWJsZWRDb2xsaXNpb24pXHJcbiAgICAgICAgICAgIHRoaXMubm9kZVsncGxheWVyTW92ZW1lbnQnXS51cGRhdGVCeVZlbG9jaXR5KGR0KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGdyaWRQb3MgPSBHcmlkQWJzb3JiLmdyaWQuZ2V0R3JpZFBvc2l0aW9uQnlJbmRleChuZXcgY2MuVmVjMigwLCB0aGlzLnRyZWVJbmRleCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLngsIGdyaWRQb3MueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBVU0VSIEZVTkNUSU9OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gSW5kZXggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KEluZGV4OiBudW1iZXIsIHBsYXllck1vZGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChwbGF5ZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ncm91cCA9ICdwbGF5ZXInXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZENvbGxpc2lvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVJbmRleCA9IEluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSByZXR1cm47XHJcbiAgICAgICAgY2MubG9nKFwi56Kw5pKe5byA5aeLXCIpO1xyXG5cclxuICAgICAgICAvLyDojrflj5bnorDmkp7nmoTmoJHoioLngrlcclxuICAgICAgICBsZXQgb3RoZXJCbG9jayA9IHRoaXMuZ2V0QmxvY2tDb21wb25lbnQob3RoZXIpO1xyXG4gICAgICAgIGxldCBvdGhlclRyZWVJbmRleCA9IG90aGVyQmxvY2sudHJlZUluZGV4O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3RoZXJUcmVlSW5kZXggPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGZUcmVlSW5kZXggPSBOVFIudHJlZS5nZXROZXh0SW5kZXgob3RoZXJUcmVlSW5kZXgsIC0xKTtcclxuICAgICAgICAgICAgbGV0IHRyZWVHcm91cCA9IE5UUi50cmVlLmdldEJ1ZmZlcihzZWxmVHJlZUluZGV4KTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c57uE5Zyo5qCR5LitXHJcbiAgICAgICAgICAgIGlmICh0cmVlR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIC8vIOeUseS6juiHquW3seeahOWIsOadpeiAjOWhq+WFheS6huS4gOihjFxyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRyZWVHcm91cCkubGVuZ3RoICsgMSA+PSBjY3Z2LmZyaXN0U2NyaXB0LmNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWwsemUgOavgeS5i+WQjuWMheaLrOiHquW3seWcqOWGheeahOaJgOacieiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveVRyZWVOb2RlQWZ0ZXJJbmRleChzZWxmVHJlZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g6ICM5LiN6IO95aGr5YWF5LiA6KGM55qE6K+dXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkuLTml7bliqDlhaXliLDmraTnu4TkuK1cclxuICAgICAgICAgICAgICAgICAgICB0cmVlR3JvdXBbdGhpc1snX2lkJ11dID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlSW5kZXggPSBzZWxmVHJlZUluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWmguaenOe7hOS4jeWcqOagkeS4re+8jOivtOaYjuWcqOacgOWklui+uVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gTlRSLnRyZWUuYWRkRnJvbUZyb250KHsgW3RoaXNbJ19pZCddXTogdGhpcy5ub2RlIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzov5jmnKrlrZjlnKjlhrLnqoFcclxuICAgICAgICBpZiAoIXRoaXMuY29uZmxpY3QpIHtcclxuICAgICAgICAgICAgLy8g5a+56b2QLOmBv+WFjeWPkeeUn+mHjeWkjeWvuem9kFxyXG4gICAgICAgICAgICB0aGlzLkFsaWduUG9zID0gb3RoZXJCbG9jay5BbGlnblBvcztcclxuICAgICAgICAgICAgY2MubG9nKHRoaXMudHJlZUluZGV4LCBOVFIudHJlZS5wdXQsIE5UUi50cmVlLmdldCwgTlRSLnRyZWUuYnVmZmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOagh+iusOS4uuWGsueqgVxyXG4gICAgICAgIHRoaXMubWFya0NvbmZsaWN0QW5kQ29weU1vdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf5ZCO77yM56Kw5pKe57uT5p2f5YmN55qE5oOF5Ya15LiL77yM5q+P5qyh6K6h566X56Kw5pKe57uT5p6c5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSByZXR1cm47XHJcbiAgICAgICAgLy8gaWYgKGNjdnYuZ2V0SW5zdGFuY2VCeU5hbWUoKSlcclxuICAgICAgICBpZiAoIXRoaXMud2FpdEZvckNvbmZsaWN0KVxyXG4gICAgICAgICAgICBjYy5sb2coXCLnorDmkp7kuK1cIik7XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPnorDmkp7nu5PmnZ/lkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBvdGhlciDkuqfnlJ/norDmkp7nmoTlj6bkuIDkuKrnorDmkp7nu4Tku7ZcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBzZWxmICDkuqfnlJ/norDmkp7nmoToh6rouqvnmoTnorDmkp7nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgY2MubG9nKFwi56Kw5pKe57uT5p2fXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLndhaXRGb3JDb25mbGljdClcclxuICAgICAgICAgICAgdGhpcy5jb25mbGljdCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBTSUdOUE9TVCBmdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7jue7meWumue0ouW8leWkhOmUgOavgeaJgOacieiKgueCue+8jOWMheaLrOiHqui6q1xyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZGVzdHJveVRyZWVOb2RlQWZ0ZXJJbmRleChpbmRleCkge1xyXG4gICAgICAgIGxldCB0cmVlQmVoaW5kT2JqZWN0ID0gTlRSLnRyZWUuY3V0KGluZGV4KS5vYmo7XHJcbiAgICAgICAgdHJlZUJlaGluZE9iamVjdC5mb3JFYWNoKG9iamVjdEVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvYmplY3RFbGVtZW50KS5mb3JFYWNoKGVsZW1lbnROYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdEVsZW1lbnRbZWxlbWVudE5hbWVdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zyo57uZ5a6a5qCR57Si5byV5L2N572u5LiK5re75Yqg6Ieq6LqrXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhZGRUcmVlTm9kZUF0SW5kZXgoaW5kZXgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIforrDkuLrlhrLnqoHlubblpI3liLbov5DliqggIFxyXG4gICAgICog5qCH6K6w5Yay56qB5pe25oSP5ZGz552A6L+Q5Yqo5bCG5pyd5ZCR5paw55qE6L+Q5Yqo57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBtYXJrQ29uZmxpY3RBbmRDb3B5TW90aW9uKCkge1xyXG4gICAgICAgIC8vIOagh+iusOWGsueqgeW5tuWkjeWItui/kOWKqFxyXG4gICAgICAgIHRoaXMuY29uZmxpY3QgPSB0cnVlO1xyXG4gICAgICAgIGlmICghdGhpcy5ub2RlWydvdGhlck1vdmVtZW50J10pXHJcbiAgICAgICAgICAgIGNjdnYuZnJpc3RTY3JpcHQuYmluZE1vdmVtZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8g5a+56b2Q5Yiw5Lu75oSP6IqC54K55LitXHJcbiAgICAgICAgLy8gbGV0IHRyZWVJbmRleE9iamVjdCA9IE5UUi50cmVlLmdldEJ1ZmZlcihpbmRleCk7XHJcbiAgICAgICAgLy8gaWYgKCF0cmVlSW5kZXhPYmplY3QpIHtcclxuICAgICAgICAvLyAgICAgdHJlZUluZGV4T2JqZWN0ID0gTlRSLnRyZWUuZ2V0QnVmZmVyKE5UUi50cmVlLmdldE5leHRJbmRleChpbmRleCwgMSkpO1xyXG4gICAgICAgIC8vICAgICBsZXQgQWxpZ25UYXJnZXQgPSB0cmVlSW5kZXhPYmplY3RbT2JqZWN0LmtleXModHJlZUluZGV4T2JqZWN0KVswXV07XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSAtIGNjdnYuZnJpc3RTY3JpcHQuY3ViZUhlaWdodCkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgbGV0IEFsaWduVGFyZ2V0ID0gdHJlZUluZGV4T2JqZWN0W09iamVjdC5rZXlzKHRyZWVJbmRleE9iamVjdClbMF1dO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIEFsaWduVGFyZ2V0LnkpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1QgbWFjcm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYDlpITmoJHoioLngrnntKLlvJVcclxuICAgICAqIOW9k+WkhOS6jueOqeWutumYteiQpeaXtu+8jOatpOe0ouW8leaXoOaViFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1RyZWVJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgdHJlZUluZGV4KCkgeyByZXR1cm4gdGhpcy5fVHJlZUluZGV4IH1cclxuICAgIHB1YmxpYyBzZXQgdHJlZUluZGV4KHZhbHVlKSB7IHRoaXMuX1RyZWVJbmRleCA9IHZhbHVlOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhbbku5bmlrnlnZdub2Rl5LiK55qEYmxvY2vnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBibG9jayBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEJsb2NrQ29tcG9uZW50KGJsb2NrKTogYmxvY2sge1xyXG4gICAgICAgIGxldCBibG9ja05vZGUgPSBibG9jayBpbnN0YW5jZW9mIGNjLk5vZGUgPyBibG9jayA6IGJsb2NrLm5vZGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9Db2xOb2RlIHx8IHRoaXMuX0NvbE5vZGUgIT0gYmxvY2tOb2RlKVxyXG4gICAgICAgICAgICB0aGlzLl9Db2xDb21wb25lbnQgPSBibG9ja05vZGUuZ2V0Q29tcG9uZW50KCdCbG9jaycpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Db2xDb21wb25lbnQ7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX0NvbE5vZGU6IGNjLkNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX0NvbENvbXBvbmVudDogYmxvY2sgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKblhYHorrjlpITnkIbnorDmkp7vvIzov5nkuZ/ku6Pooajov5nmmK/lsZ7kuo7njqnlrrbpmLXokKXnmoTmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGVuYWJsZWRDb2xsaXNpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yay56qB5qCH6K6wXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQ29uZ2xpY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBnZXQgY29uZmxpY3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9Db25nbGljdDsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIforrDmiJbliqDlhaXliLDlhrLnqoFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb25mbGljdCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgdGhpcy5fQ29uZ2xpY3QgPSB2YWx1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX0NvbmdsaWN0ID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgY2N2di5zZXRJbnN0YW5jZUJ5TmFtZSh2YWx1ZSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliankvZnnrYnlvoXorqHmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfV2FpdEZvckNvbmZsaWN0OiBudW1iZXIgPSAzO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbnrYnlvoXlhrLnqoFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCB3YWl0Rm9yQ29uZmxpY3QoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1dhaXRGb3JDb25mbGljdC0tID4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWvuem9kOWdkOagh1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IEFsaWduUG9zKCkge1xyXG4gICAgICAgIC8vIOS9v+eUqOaXoOagueagkeaWueW8j+iOt+WPluWvuem9kOWdkOagh1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCB0cmVlSW5kZXhPYmplY3QgPSBOVFIudHJlZS5nZXRCdWZmZXIoTlRSLnRyZWUuZ2V0TmV4dEluZGV4KHRoaXMudHJlZUluZGV4LCAtMSkpO1xyXG4gICAgICAgIC8vICAgICBpZiAodHJlZUluZGV4T2JqZWN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgQWxpZ25UYXJnZXQgPSB0cmVlSW5kZXhPYmplY3RbT2JqZWN0LmtleXModHJlZUluZGV4T2JqZWN0KVswXV07XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIEFsaWduVGFyZ2V0LnkpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSAtIGNjdnYuZnJpc3RTY3JpcHQuY3ViZUhlaWdodClcclxuXHJcbiAgICAgICAgLy8g5L2/55So5a+56b2Q572R5qC86I635Y+W5a+56b2Q5Z2Q5qCHXHJcbiAgICAgICAgcmV0dXJuIEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KG5ldyBjYy5WZWMyKDAsIHRoaXMudHJlZUluZGV4IC0gMSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lr7npvZDlnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBBbGlnblBvcyh2YWx1ZTogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgdmFsdWUueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/effect/PlayDraAniAndDestory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73332y62LZEeovkfyeA889n', 'PlayDraAniAndDestory');
// scripts/game/effect/PlayDraAniAndDestory.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayAnimationAndDestroy = /** @class */ (function (_super) {
    __extends(PlayAnimationAndDestroy, _super);
    function PlayAnimationAndDestroy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyTime = .3;
        return _this;
    }
    PlayAnimationAndDestroy.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.node.destroy(); }, this.destroyTime);
    };
    __decorate([
        property(cc.Float)
    ], PlayAnimationAndDestroy.prototype, "destroyTime", void 0);
    PlayAnimationAndDestroy = __decorate([
        ccclass
    ], PlayAnimationAndDestroy);
    return PlayAnimationAndDestroy;
}(cc.Component));
exports.default = PlayAnimationAndDestroy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZWZmZWN0XFxQbGF5RHJhQW5pQW5kRGVzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQVFDO1FBTkcsaUJBQVcsR0FBVyxFQUFFLENBQUM7O0lBTTdCLENBQUM7SUFKRyx1Q0FBSyxHQUFMO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0VBQ007SUFGUix1QkFBdUI7UUFEM0MsT0FBTztPQUNhLHVCQUF1QixDQVEzQztJQUFELDhCQUFDO0NBUkQsQUFRQyxDQVJvRCxFQUFFLENBQUMsU0FBUyxHQVFoRTtrQkFSb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNzIGZyb20gXCIuLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUFuaW1hdGlvbkFuZERlc3Ryb3kgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgZGVzdHJveVRpbWU6IG51bWJlciA9IC4zO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5ub2RlLmRlc3Ryb3koKSB9LCB0aGlzLmRlc3Ryb3lUaW1lKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

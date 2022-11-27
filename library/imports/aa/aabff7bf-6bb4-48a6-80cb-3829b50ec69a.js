"use strict";
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
                var selfGroupIndex = DevelopersToolGlobal_1.mathMacro.PMod(otherGroup.gridIndex - 1, Setting_1.default.Game_Row2);
                selfGroup.init(selfGroupIndex, null, otherGroup);
                // 指定不需要自动初始化
                selfGroup.needStart = false;
                // 手动初始化外围部件
                selfGroup.node.children.forEach(function (element) {
                    element.destroy();
                    element.isValid = false;
                });
                // 都已经新建了，应当是末尾项目
                Setting_1.default.endCubeGroup = selfGroup;
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
"use strict";
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
var PawnMovement_1 = require("../base/tool/PawnMovement");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
/**
 * 对于关卡蓝图中的参数，都定义在设置中
 * 而其他蓝图中的参数则会放置在其最强关联处，比如自己本身的类内
 * 而部分地方可能会用到全局工具的部分，可以改为以设置类全局的模式，全局工具是旧方法
 * 关于全局工具的用法，可以参考discard-标记的文件，他们是已经确定废弃的用法
 */
var GameLevel = /** @class */ (function (_super) {
    __extends(GameLevel, _super);
    // @executeInEditMode
    function GameLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameArea = null;
        _this.effectArea = null;
        _this.readyTouch = false;
        /**
         * 上一组诞生组
         */
        _this.lastGroup = null;
        return _this;
    }
    // tag LIFE-CYCLE CALLBACKS:
    GameLevel.prototype.onLoad = function () {
        // 提升脚本，这是为了兼容旧方法，设置中也同提升了
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // 开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    };
    GameLevel.prototype.onEnable = function () {
        // 基本初始化, enable时游戏就已经开始了
        this.init();
    };
    // start() {}
    GameLevel.prototype.update = function (dt) {
        // 如果目标位置小于一定时，创建方块
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(Setting_1.default.GridCurrentPointToVec);
        if (pos.y > 0 && pos.y <= cc.winSize.height / 2) {
            this.SpawnCubeGroupAndInit(Setting_1.default.GridPointer);
        }
        // 如果最后一行小于一定时，结束游戏
        if (Setting_1.default.endCubeGroup && Setting_1.default.endCubeGroup.node.y < Setting_1.default.Separator) {
            this.gameOver();
        }
        // 否则继续网格移动，这也会驱动方块移动
        else {
            // 简单的移动方式
            // GridAbsorb.grid.offset = ss.GameVector.mul(dt);
            // 移动组件移动方式
            cc.log(Setting_1.default.GameAutoDrag);
            Setting_1.default.movement.addforce = Setting_1.default.GameAutoSpeed;
            Setting_1.default.movement.addDrag = Setting_1.default.GameAutoDrag;
            Setting_1.default.movement.updateByVelocity(dt);
        }
    };
    // tag 用户函数部分 
    /**
     * 游戏重置及初始化
     * 开始时调用一次
     */
    GameLevel.prototype.init = function () {
        // 初始化对齐网格
        GridAdsorb_1.default.grid = new GridAdsorb_1.default(new cc.Vec3(Setting_1.default.Game_Column, Setting_1.default.Game_Row2, 0), new cc.Vec3(Setting_1.default.Cube_width, Setting_1.default.Cube_Height, 0));
        // 赋予移动组件
        Setting_1.default.movement = new PawnMovement_1.default(GridAdsorb_1.default.grid);
        Setting_1.default.movement.maxSpeed = Setting_1.default.GameSpeed;
        // 设置网格边界锚点
        // GridAbsorb.grid.anchor = new cc.Vec3(0, 0, 0);
        // 设置网格起点
        GridAdsorb_1.default.grid.offset = Setting_1.default.GridOriginOffset;
        // 重置网格指针
        Setting_1.default.GridCurrentPoint = 0;
        // 注册触摸
        this.touchRegister();
        // 清理战场
        Setting_1.default.endCubeGroup = null;
        if (this.gameArea.children.length > 0)
            this.gameArea.children.forEach(function (e) { e.destroy(); });
        if (this.effectArea.children.length > 0)
            this.effectArea.children.forEach(function (e) { e.destroy(); });
    };
    /**
     * 创建方块组，并按链初始化
     */
    GameLevel.prototype.SpawnCubeGroupAndInit = function (index) {
        // 初始化,将上一个组传给这组
        var inst = this.SpawnCubeGroup();
        // 提供索引以便吸附到网格上
        var instComponent = inst.getComponent(Setting_1.default.blockGroupName);
        // 初始化,将索引给到这
        instComponent.init(index, this.lastGroup);
        // 现在这组是上组了
        this.lastGroup = instComponent;
        return inst;
    };
    /**
     * 创建方块组
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
    * 游戏结束时的动作
    * 游戏结束时调用一次
    */
    GameLevel.prototype.gameOver = function () {
        var _this = this;
        // 暂停触摸
        // ccvv.layers[0].pauseSystemEvents(true);
        Setting_1.default.menu.gameOver();
        var allChildren = this.lastGroup.findAllChildren(this.lastGroup);
        // 一个一个破掉的效果
        var allChildrenCount = allChildren.length;
        cc.log(allChildren);
        this.schedule(function () {
            if (allChildrenCount--) {
                var desAct = allChildren[allChildrenCount];
                desAct.getComponent(Setting_1.default.blockName).destroyWithAnimation();
            }
            else {
                _this.unscheduleAllCallbacks();
                Setting_1.default.menu.openMenu();
            }
        }, .08);
    };
    // tag 用户触摸事件
    /**
     * 注册触摸事件
     */
    GameLevel.prototype.touchRegister = function () {
        if (!this.readyTouch) {
            this.readyTouch = true;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].on("touchstart", this.onTouchStart, this);
        }
        else {
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].resumeSystemEvents(true);
        }
    };
    GameLevel.prototype.onTouchStart = function (event) {
        var touchArea = event.getLocation().x / Setting_1.default.Cube_width;
        var inst = this.SpawnPlayerCube();
        var inx = Math.ceil(touchArea) * (Setting_1.default.Cube_width + Setting_1.default.Cube_Interaval) - ((cc.winSize.width + Setting_1.default.Cube_width) / 2);
        // let inx = Math.ceil(touchArea) * 177 - ((cc.winSize.width + ss.Cube_width) / 2) - 5
        inst.setPosition(inx, Setting_1.default.Separator);
    };
    // tag 特效方法 
    /**
     * 冰冻特效
     * 赋予两倍阻力
     */
    GameLevel.prototype.ice = function () {
        var inst = this.creatActor(Setting_1.default.Effect_Ice, this.effectArea);
        Setting_1.default.movement.permDrag = 2;
        this.scheduleOnce(function () {
            Setting_1.default.movement.permDrag = 0;
        }, Setting_1.default.ice_Duration);
    };
    /**
     * 击退特效
     * 赋予一个反方向的力
     */
    GameLevel.prototype.hit = function () {
        var inst = this.creatActor(Setting_1.default.Effect_Hit, this.effectArea);
        inst.setPosition(Setting_1.default.endCubeGroup.node.getPosition());
        Setting_1.default.movement.addforce = new cc.Vec2(0, Setting_1.default.hit_Force);
        Setting_1.default.movement.drag = 0;
        Setting_1.default.movement.maxSpeed = Setting_1.default.GameSpeed;
    };
    /**
     * 清屏特效
     * 将屏幕内的所有方块都进行清理，使用的是方块自身的消除方法，所以也会播放销毁特效
     */
    GameLevel.prototype.boom = function () {
        var inst = this.creatActor(Setting_1.default.Effect_Boom, this.effectArea);
        Setting_1.default.endCubeGroup = this.lastGroup.nextGroup;
        this.lastGroup.destroyMembers(false);
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
    __decorate([
        property(cc.Node)
    ], GameLevel.prototype, "effectArea", void 0);
    GameLevel = __decorate([
        ccclass
        // @executeInEditMode
    ], GameLevel);
    return GameLevel;
}(cc.Component));
exports.default = GameLevel;

cc._RF.pop();

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
var PawnMovement_1 = require("../base/tool/PawnMovement");
var SoundPlayer_1 = require("../base/tool/SoundPlayer");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
/**
 * 对于关卡蓝图中的参数，都定义在设置中
 * 而其他蓝图中的参数则会放置在其最强关联处，比如自己本身的类内
 * 而部分地方可能会用到全局工具的部分，可以改为以设置类全局的模式，全局工具是旧方法
 * 关于全局工具的用法，可以参考discard-标记的文件，他们是已经确定废弃的用法
 *
 * 游戏的基本运行与玩家交互是在 GameLevel 中完成的
 * 游戏会发射方块组 BlockGroup 而不是方块，由每一行的方块完成初始化，销毁检测
 * 每个方块组内包含四个方块 Block ，它们会在诞生时自动消灭一部分，留空给玩家，当产生销毁时会播放音效，并切换为动画预制体
 * 除此之外，所有公用的参数都在 setting 中，而对于更加更加具有通用性质的 globaltool 只在部分场景使用
 * 你可以忽略base中的大部分文件，它们没什么用。
 */
var GameLevel = /** @class */ (function (_super) {
    __extends(GameLevel, _super);
    // @executeInEditMode
    function GameLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameArea = null;
        _this.effectArea = null;
        /**
         * 游戏结束标记，避免重复调用结束事件
         * 不可以在其他任何地方调用，以免逻辑混乱
         */
        _this._GameOverSign = false;
        _this.readyTouch = false;
        /**
         * 上一组诞生组
         */
        _this.lastGroup = null;
        /**
         * 上叠运行速度
         */
        _this._MultiplyGameSpeed = 0;
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
            Setting_1.default.movement.addforce = Setting_1.default.GameAutoSpeed;
            Setting_1.default.movement.addDrag = Setting_1.default.GameAutoDrag;
            Setting_1.default.movement.updateByVelocity(dt);
        }
        this.setGameSpeed(dt * Setting_1.default.score * 3);
        cc.log(this.GameSpeed);
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
        Setting_1.default.movement.maxSpeed = this.GameSpeed;
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
        // 复位游戏标记
        this.gameOverSign = false;
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
        if (!this.gameOverSign) {
            this.gameOverSign = true;
            // 暂停触摸
            // ccvv.layers[0].pauseSystemEvents(true);
            Setting_1.default.menu.gameOver();
            var allChildren_1 = this.lastGroup.findAllChildren(this.lastGroup);
            // 一个一个破掉的效果
            var allChildrenCount_1 = allChildren_1.length;
            cc.log(allChildren_1);
            this.schedule(function () {
                if (allChildrenCount_1--) {
                    var desAct = allChildren_1[allChildrenCount_1];
                    desAct.getComponent(Setting_1.default.blockName).destroyWithAnimation();
                }
                else {
                    _this.unscheduleAllCallbacks();
                    Setting_1.default.menu.openMenu();
                }
            }, .08);
        }
    };
    Object.defineProperty(GameLevel.prototype, "gameOverSign", {
        get: function () { return this._GameOverSign; },
        set: function (value) { this._GameOverSign = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
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
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_shot);
    };
    // tag 特效方法 
    /**
     * 冰冻特效
     * 赋予两倍阻力
     */
    GameLevel.prototype.ice = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_ice);
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
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_hit);
        this.setGameSpeed(0);
        var inst = this.creatActor(Setting_1.default.Effect_Hit, this.effectArea);
        inst.setPosition(Setting_1.default.endCubeGroup.node.getPosition());
        Setting_1.default.movement.addforce = new cc.Vec2(0, Setting_1.default.hit_Force);
        Setting_1.default.movement.drag = 0;
        Setting_1.default.movement.maxSpeed = this.GameSpeed;
    };
    /**
     * 清屏特效
     * 将屏幕内的所有方块都进行清理，使用的是方块自身的消除方法，所以也会播放销毁特效
     */
    GameLevel.prototype.boom = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_boom);
        this.setGameSpeed(0);
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
    Object.defineProperty(GameLevel.prototype, "GameSpeed", {
        /**
         * 上叠运行速度
         */
        get: function () { return Setting_1.default.GameSpeed + this._MultiplyGameSpeed; },
        /**
         * 添加上叠运行速度
         */
        set: function (value) { this._MultiplyGameSpeed = Math.max(Math.min(this._MultiplyGameSpeed + value, Setting_1.default.GameSpeed_MulMax), 0); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    /**
     * 直接设置上叠运行速度
     */
    GameLevel.prototype.setGameSpeed = function (value) { this._MultiplyGameSpeed = value; };
    ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRyxzREFBaUQ7QUFDakQsMERBQXFEO0FBQ3JELHdEQUF1RDtBQUV2RCxxQ0FBMkI7QUFDckIsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFDL0Q7Ozs7Ozs7Ozs7O0dBV0c7QUFHSDtJQUF1Qyw2QkFBWTtJQURuRCxxQkFBcUI7SUFDckI7UUFBQSxxRUF5UUM7UUF0UUcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQThJM0I7OztXQUdHO1FBQ0ssbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFtQjdCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBMEV0Qzs7V0FFRztRQUNPLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFDdkM7O1dBRUc7UUFDTyx3QkFBa0IsR0FBVyxDQUFDLENBQUM7O0lBYTdDLENBQUM7SUFqUUcsNEJBQTRCO0lBRTVCLDBCQUFNLEdBQU47UUFDSSwwQkFBMEI7UUFDMUIsMkNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLE9BQU87UUFDUCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNoQyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0lBRTFDLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0kseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsYUFB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LEVBQUU7WUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQUU7YUFDdEM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7U0FBRTtRQUN6RCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBWUQsc0JBQWMsZ0NBQVM7UUFIdkI7O1dBRUc7YUFDSCxjQUFvQyxPQUFPLGlCQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQSxDQUFDLENBQUM7UUFDbkY7O1dBRUc7YUFDSCxVQUF3QixLQUFhLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxFQUFFLGlCQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQUo3RDtJQUFBLENBQUM7SUFJNEQsQ0FBQztJQUNqSjs7T0FFRztJQUNPLGdDQUFZLEdBQXRCLFVBQXVCLEtBQWEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQztJQUFBLENBQUM7SUFyUTFFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQU5WLFNBQVM7UUFGN0IsT0FBTztRQUNSLHFCQUFxQjtPQUNBLFNBQVMsQ0F5UTdCO0lBQUQsZ0JBQUM7Q0F6UUQsQUF5UUMsQ0F6UXNDLEVBQUUsQ0FBQyxTQUFTLEdBeVFsRDtrQkF6UW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgUGF3bk1vdmVtZW50IGZyb20gJy4uL2Jhc2UvdG9vbC9QYXduTW92ZW1lbnQnO1xyXG5pbXBvcnQgeyBTb3VuZFBsYXllciB9IGZyb20gJy4uL2Jhc2UvdG9vbC9Tb3VuZFBsYXllcic7XHJcbmltcG9ydCBCbG9ja0dyb3VwIGZyb20gJy4vQmxvY2tHcm91cCc7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vKipcclxuICog5a+55LqO5YWz5Y2h6JOd5Zu+5Lit55qE5Y+C5pWw77yM6YO95a6a5LmJ5Zyo6K6+572u5LitXHJcbiAqIOiAjOWFtuS7luiTneWbvuS4reeahOWPguaVsOWImeS8muaUvue9ruWcqOWFtuacgOW8uuWFs+iBlOWkhO+8jOavlOWmguiHquW3seacrOi6q+eahOexu+WGhVxyXG4gKiDogIzpg6jliIblnLDmlrnlj6/og73kvJrnlKjliLDlhajlsYDlt6XlhbfnmoTpg6jliIbvvIzlj6/ku6XmlLnkuLrku6Xorr7nva7nsbvlhajlsYDnmoTmqKHlvI/vvIzlhajlsYDlt6XlhbfmmK/ml6fmlrnms5VcclxuICog5YWz5LqO5YWo5bGA5bel5YW355qE55So5rOV77yM5Y+v5Lul5Y+C6ICDZGlzY2FyZC3moIforrDnmoTmlofku7bvvIzku5bku6zmmK/lt7Lnu4/noa7lrprlup/lvIPnmoTnlKjms5VcclxuICogXHJcbiAqIOa4uOaIj+eahOWfuuacrOi/kOihjOS4jueOqeWutuS6pOS6kuaYr+WcqCBHYW1lTGV2ZWwg5Lit5a6M5oiQ55qEXHJcbiAqIOa4uOaIj+S8muWPkeWwhOaWueWdl+e7hCBCbG9ja0dyb3VwIOiAjOS4jeaYr+aWueWdl++8jOeUseavj+S4gOihjOeahOaWueWdl+WujOaIkOWIneWni+WMlu+8jOmUgOavgeajgOa1i1xyXG4gKiDmr4/kuKrmlrnlnZfnu4TlhoXljIXlkKvlm5vkuKrmlrnlnZcgQmxvY2sg77yM5a6D5Lus5Lya5Zyo6K+e55Sf5pe26Ieq5Yqo5raI54Gt5LiA6YOo5YiG77yM55WZ56m657uZ546p5a6277yM5b2T5Lqn55Sf6ZSA5q+B5pe25Lya5pKt5pS+6Z+z5pWI77yM5bm25YiH5o2i5Li65Yqo55S76aKE5Yi25L2TXHJcbiAqIOmZpOatpOS5i+Wklu+8jOaJgOacieWFrOeUqOeahOWPguaVsOmDveWcqCBzZXR0aW5nIOS4re+8jOiAjOWvueS6juabtOWKoOabtOWKoOWFt+aciemAmueUqOaAp+i0qOeahCBnbG9iYWx0b29sIOWPquWcqOmDqOWIhuWcuuaZr+S9v+eUqFxyXG4gKiDkvaDlj6/ku6Xlv73nlaViYXNl5Lit55qE5aSn6YOo5YiG5paH5Lu277yM5a6D5Lus5rKh5LuA5LmI55So44CCXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVmZmVjdEFyZWE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHRhZyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5o+Q5Y2H6ISa5pys77yM6L+Z5piv5Li65LqG5YW85a655pen5pa55rOV77yM6K6+572u5Lit5Lmf5ZCM5o+Q5Y2H5LqGXHJcbiAgICAgICAgY2N2di5zY3JpcHQgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgLy8g5Z+65pys5Yid5aeL5YyWLCBlbmFibGXml7bmuLjmiI/lsLHlt7Lnu4/lvIDlp4vkuoZcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCgpIHt9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g5aaC5p6c55uu5qCH5L2N572u5bCP5LqO5LiA5a6a5pe277yM5Yib5bu65pa55Z2XXHJcbiAgICAgICAgbGV0IHBvcyA9IEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KHNzLkdyaWRDdXJyZW50UG9pbnRUb1ZlYyk7XHJcbiAgICAgICAgaWYgKHBvcy55ID4gMCAmJiBwb3MueSA8PSBjYy53aW5TaXplLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5TcGF3bkN1YmVHcm91cEFuZEluaXQoc3MuR3JpZFBvaW50ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzmnIDlkI7kuIDooYzlsI/kuo7kuIDlrprml7bvvIznu5PmnZ/muLjmiI9cclxuICAgICAgICBpZiAoc3MuZW5kQ3ViZUdyb3VwICYmIHNzLmVuZEN1YmVHcm91cC5ub2RlLnkgPCBzcy5TZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlkKbliJnnu6fnu63nvZHmoLznp7vliqjvvIzov5nkuZ/kvJrpqbHliqjmlrnlnZfnp7vliqhcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g566A5Y2V55qE56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgIC8vIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBzcy5HYW1lVmVjdG9yLm11bChkdCk7XHJcblxyXG4gICAgICAgICAgICAvLyDnp7vliqjnu4Tku7bnp7vliqjmlrnlvI9cclxuICAgICAgICAgICAgc3MubW92ZW1lbnQuYWRkZm9yY2UgPSBzcy5HYW1lQXV0b1NwZWVkO1xyXG4gICAgICAgICAgICBzcy5tb3ZlbWVudC5hZGREcmFnID0gc3MuR2FtZUF1dG9EcmFnO1xyXG4gICAgICAgICAgICBzcy5tb3ZlbWVudC51cGRhdGVCeVZlbG9jaXR5KGR0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRHYW1lU3BlZWQoZHQgKiBzcy5zY29yZSAqIDMpO1xyXG4gICAgICAgIGNjLmxvZyh0aGlzLkdhbWVTcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+WHveaVsOmDqOWIhiBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+mHjee9ruWPiuWIneWni+WMliAgXHJcbiAgICAgKiDlvIDlp4vml7bosIPnlKjkuIDmrKFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5a+56b2Q572R5qC8XHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkID0gbmV3IEdyaWRBYnNvcmIoXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHNzLkdhbWVfQ29sdW1uLCBzcy5HYW1lX1JvdzIsIDApLFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyhzcy5DdWJlX3dpZHRoLCBzcy5DdWJlX0hlaWdodCwgMClcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIOi1i+S6iOenu+WKqOe7hOS7tlxyXG4gICAgICAgIHNzLm1vdmVtZW50ID0gbmV3IFBhd25Nb3ZlbWVudChHcmlkQWJzb3JiLmdyaWQpO1xyXG4gICAgICAgIHNzLm1vdmVtZW50Lm1heFNwZWVkID0gdGhpcy5HYW1lU3BlZWQ7XHJcbiAgICAgICAgLy8g6K6+572u572R5qC86L6555WM6ZSa54K5XHJcbiAgICAgICAgLy8gR3JpZEFic29yYi5ncmlkLmFuY2hvciA9IG5ldyBjYy5WZWMzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vIOiuvue9rue9keagvOi1t+eCuVxyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBzcy5HcmlkT3JpZ2luT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyDph43nva7nvZHmoLzmjIfpkohcclxuICAgICAgICBzcy5HcmlkQ3VycmVudFBvaW50ID0gMDtcclxuXHJcbiAgICAgICAgLy8g5rOo5YaM6Kem5pG4XHJcbiAgICAgICAgdGhpcy50b3VjaFJlZ2lzdGVyKCk7XHJcblxyXG4gICAgICAgIC8vIOa4heeQhuaImOWculxyXG4gICAgICAgIHNzLmVuZEN1YmVHcm91cCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUFyZWEuY2hpbGRyZW4ubGVuZ3RoID4gMCkgdGhpcy5nYW1lQXJlYS5jaGlsZHJlbi5mb3JFYWNoKGUgPT4geyBlLmRlc3Ryb3koKSB9KTtcclxuICAgICAgICBpZiAodGhpcy5lZmZlY3RBcmVhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHRoaXMuZWZmZWN0QXJlYS5jaGlsZHJlbi5mb3JFYWNoKGUgPT4geyBlLmRlc3Ryb3koKSB9KTtcclxuXHJcbiAgICAgICAgLy8g5aSN5L2N5ri45oiP5qCH6K6wXHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNpZ24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaWueWdl+e7hO+8jOW5tuaMiemTvuWIneWni+WMliAgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBTcGF3bkN1YmVHcm91cEFuZEluaXQoaW5kZXgpOiBjYy5Ob2RlIHtcclxuICAgICAgICAvLyDliJ3lp4vljJYs5bCG5LiK5LiA5Liq57uE5Lyg57uZ6L+Z57uEXHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLlNwYXduQ3ViZUdyb3VwKCk7XHJcbiAgICAgICAgLy8g5o+Q5L6b57Si5byV5Lul5L6/5ZC46ZmE5Yiw572R5qC85LiKXHJcbiAgICAgICAgbGV0IGluc3RDb21wb25lbnQ6IEJsb2NrR3JvdXAgPSBpbnN0LmdldENvbXBvbmVudChzcy5ibG9ja0dyb3VwTmFtZSk7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyWLOWwhue0ouW8lee7meWIsOi/mVxyXG4gICAgICAgIGluc3RDb21wb25lbnQuaW5pdChpbmRleCwgdGhpcy5sYXN0R3JvdXApO1xyXG4gICAgICAgIC8vIOeOsOWcqOi/mee7hOaYr+S4iue7hOS6hlxyXG4gICAgICAgIHRoaXMubGFzdEdyb3VwID0gaW5zdENvbXBvbmVudDtcclxuICAgICAgICByZXR1cm4gaW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65pa55Z2X57uEIFxyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU3Bhd25DdWJlR3JvdXAoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuU3F1YXJlR3JvdXAsIHRoaXMuZ2FtZUFyZWEpO1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFNwYXduUGxheWVyQ3ViZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5TcXVhcmUsIHRoaXMuZ2FtZUFyZWEpO1xyXG4gICAgICAgIC8vIOaPkOS+m+e0ouW8leS7peS+v+WQuOmZhOWIsOe9keagvOS4ilxyXG4gICAgICAgIGluc3QuZ2V0Q29tcG9uZW50KCdCbG9jaycpLmluaXQoKTtcclxuICAgICAgICByZXR1cm4gaW5zdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICog5ri45oiP57uT5p2f5pe255qE5Yqo5L2cICBcclxuICAgICog5ri45oiP57uT5p2f5pe26LCD55So5LiA5qyhXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdhbWVPdmVyKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXJTaWduKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTaWduID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOaaguWBnOinpuaRuFxyXG4gICAgICAgICAgICAvLyBjY3Z2LmxheWVyc1swXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgc3MubWVudS5nYW1lT3ZlcigpXHJcblxyXG4gICAgICAgICAgICBsZXQgYWxsQ2hpbGRyZW4gPSB0aGlzLmxhc3RHcm91cC5maW5kQWxsQ2hpbGRyZW4odGhpcy5sYXN0R3JvdXApO1xyXG4gICAgICAgICAgICAvLyDkuIDkuKrkuIDkuKrnoLTmjonnmoTmlYjmnpxcclxuICAgICAgICAgICAgbGV0IGFsbENoaWxkcmVuQ291bnQgPSBhbGxDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNjLmxvZyhhbGxDaGlsZHJlbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbENoaWxkcmVuQ291bnQtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNBY3QgPSBhbGxDaGlsZHJlblthbGxDaGlsZHJlbkNvdW50XTtcclxuICAgICAgICAgICAgICAgICAgICBkZXNBY3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrTmFtZSkuZGVzdHJveVdpdGhBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3MubWVudS5vcGVuTWVudSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAuMDgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP57uT5p2f5qCH6K6w77yM6YG/5YWN6YeN5aSN6LCD55So57uT5p2f5LqL5Lu2XHJcbiAgICAgKiDkuI3lj6/ku6XlnKjlhbbku5bku7vkvZXlnLDmlrnosIPnlKjvvIzku6XlhY3pgLvovpHmt7fkubFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfR2FtZU92ZXJTaWduOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgc2V0IGdhbWVPdmVyU2lnbih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9HYW1lT3ZlclNpZ24gPSB2YWx1ZSB9O1xyXG4gICAgcHVibGljIGdldCBnYW1lT3ZlclNpZ24oKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9HYW1lT3ZlclNpZ24gfTtcclxuXHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+inpuaRuOS6i+S7tlxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaFJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjY3Z2LmxheWVyc1swXS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHJlYWR5VG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2hBcmVhID0gZXZlbnQuZ2V0TG9jYXRpb24oKS54IC8gc3MuQ3ViZV93aWR0aDtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuU3Bhd25QbGF5ZXJDdWJlKCk7XHJcbiAgICAgICAgbGV0IGlueCA9IE1hdGguY2VpbCh0b3VjaEFyZWEpICogKHNzLkN1YmVfd2lkdGggKyBzcy5DdWJlX0ludGVyYXZhbCkgLSAoKGNjLndpblNpemUud2lkdGggKyBzcy5DdWJlX3dpZHRoKSAvIDIpO1xyXG4gICAgICAgIC8vIGxldCBpbnggPSBNYXRoLmNlaWwodG91Y2hBcmVhKSAqIDE3NyAtICgoY2Mud2luU2l6ZS53aWR0aCArIHNzLkN1YmVfd2lkdGgpIC8gMikgLSA1XHJcbiAgICAgICAgaW5zdC5zZXRQb3NpdGlvbihpbngsIHNzLlNlcGFyYXRvcik7XHJcbiAgICAgICAgLy8gdG9kbyDmkq3mlL7pn7PmlYhcclxuICAgICAgICBuZXcgU291bmRQbGF5ZXIoc3MuU291bmRfc2hvdCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyB0YWcg54m55pWI5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yaw5Ya754m55pWIICBcclxuICAgICAqIOi1i+S6iOS4pOWAjemYu+WKm1xyXG4gICAgICovXHJcbiAgICBpY2UoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdG9kbyDmkq3mlL7pn7PmlYhcclxuICAgICAgICBuZXcgU291bmRQbGF5ZXIoc3MuU291bmRfaWNlKTtcclxuXHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuRWZmZWN0X0ljZSwgdGhpcy5lZmZlY3RBcmVhKTtcclxuICAgICAgICBzcy5tb3ZlbWVudC5wZXJtRHJhZyA9IDI7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBzcy5tb3ZlbWVudC5wZXJtRHJhZyA9IDA7XHJcbiAgICAgICAgfSwgc3MuaWNlX0R1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Ye76YCA54m55pWIICBcclxuICAgICAqIOi1i+S6iOS4gOS4quWPjeaWueWQkeeahOWKmyAgXHJcbiAgICAgKi9cclxuICAgIGhpdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9oaXQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEdhbWVTcGVlZCgwKTtcclxuXHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuRWZmZWN0X0hpdCwgdGhpcy5lZmZlY3RBcmVhKTtcclxuICAgICAgICBpbnN0LnNldFBvc2l0aW9uKHNzLmVuZEN1YmVHcm91cC5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHNzLm1vdmVtZW50LmFkZGZvcmNlID0gbmV3IGNjLlZlYzIoMCwgc3MuaGl0X0ZvcmNlKTtcclxuICAgICAgICBzcy5tb3ZlbWVudC5kcmFnID0gMDtcclxuICAgICAgICBzcy5tb3ZlbWVudC5tYXhTcGVlZCA9IHRoaXMuR2FtZVNwZWVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXlsY/nibnmlYggIFxyXG4gICAgICog5bCG5bGP5bmV5YaF55qE5omA5pyJ5pa55Z2X6YO96L+b6KGM5riF55CG77yM5L2/55So55qE5piv5pa55Z2X6Ieq6Lqr55qE5raI6Zmk5pa55rOV77yM5omA5Lul5Lmf5Lya5pKt5pS+6ZSA5q+B54m55pWIXHJcbiAgICAgKi9cclxuICAgIGJvb20oKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdG9kbyDmkq3mlL7pn7PmlYhcclxuICAgICAgICBuZXcgU291bmRQbGF5ZXIoc3MuU291bmRfYm9vbSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0R2FtZVNwZWVkKDApO1xyXG5cclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5FZmZlY3RfQm9vbSwgdGhpcy5lZmZlY3RBcmVhKTtcclxuICAgICAgICBzcy5lbmRDdWJlR3JvdXAgPSB0aGlzLmxhc3RHcm91cC5uZXh0R3JvdXA7XHJcbiAgICAgICAgdGhpcy5sYXN0R3JvdXAuZGVzdHJveU1lbWJlcnMoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDln7rmnKzmk43kvZzlh73mlbAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIGNyZWF0IGluc3RhbnRpYXRlXHJcbiAgICAqIEBwYXJhbSB7Y2MuUHJlZmFifSBhY3RvciDlrp7kvovljJbnmoTnm67moIdcclxuICAgICogQHBhcmFtIHtjYy5Ob2RlfSBwYXJlbnQg5a6e5L6L5YyW55qE5a+56LGh5bCG6KaB6ZmE5Yqg55qE55uu5qCH77yM5aaC5p6c55WZ56m65YiZ5Li66Ieq6LqrXHJcbiAgICAqIEByZXR1cm5zIFxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdEFjdG9yKGFjdG9yOiBjYy5QcmVmYWIsIHBhcmVudD86IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0ID0gY2MuaW5zdGFudGlhdGUoYWN0b3IpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHsgcGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5ub2RlLmFkZENoaWxkKGFjdG9ySW5zdCk7IGNjLmxvZyhhY3Rvckluc3QpIH1cclxuICAgICAgICByZXR1cm4gYWN0b3JJbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrkuIDnu4Tor57nlJ/nu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxhc3RHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOS4iuWPoOi/kOihjOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX011bHRpcGx5R2FtZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrlj6Dov5DooYzpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBHYW1lU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHNzLkdhbWVTcGVlZCArIHRoaXMuX011bHRpcGx5R2FtZVNwZWVkIH07XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4iuWPoOi/kOihjOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc2V0IEdhbWVTcGVlZCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX011bHRpcGx5R2FtZVNwZWVkID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy5fTXVsdGlwbHlHYW1lU3BlZWQgKyB2YWx1ZSwgc3MuR2FtZVNwZWVkX011bE1heCksIDApIH07XHJcbiAgICAvKipcclxuICAgICAqIOebtOaOpeiuvue9ruS4iuWPoOi/kOihjOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc2V0R2FtZVNwZWVkKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fTXVsdGlwbHlHYW1lU3BlZWQgPSB2YWx1ZSB9O1xyXG59XHJcbiJdfQ==
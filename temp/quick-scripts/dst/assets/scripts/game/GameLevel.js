
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
 *
 * 关于音乐触发，你应该去MenuLevel上看看，
 */
var GameLevel = /** @class */ (function (_super) {
    __extends(GameLevel, _super);
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
        else {
            // 否则继续网格移动，这也会驱动方块移动
            // 简单的移动方式
            // GridAbsorb.grid.offset = ss.GameVector.mul(dt);
            // 根据当前分数计算新速度
            this.setGameSpeed(0.5 / dt * Setting_1.default.score);
            // 移动组件移动方式
            Setting_1.default.movement.addforce = Setting_1.default.GameAutoSpeed;
            Setting_1.default.movement.addDrag = Setting_1.default.GameAutoDrag;
            Setting_1.default.movement.maxSpeed = this.GameSpeed;
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
            this.gameArea.children.forEach(function (e) {
                e.destroy();
            });
        if (this.effectArea.children.length > 0)
            this.effectArea.children.forEach(function (e) {
                e.destroy();
            });
        this.lastGroup = null;
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
        inst.getComponent("Block").init();
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
            // 记录分数，但不要处理
            Setting_1.default.highScore = Setting_1.default.score;
            var allChildren_1 = this.lastGroup.findAllChildren(this.lastGroup);
            // 一个一个破掉的效果
            var allChildrenCount_1 = allChildren_1.length;
            this.schedule(function () {
                if (allChildrenCount_1--) {
                    var desAct = allChildren_1[allChildrenCount_1];
                    desAct.getComponent(Setting_1.default.blockName).destroyWithAnimation();
                }
                else {
                    _this.unscheduleAllCallbacks();
                    Setting_1.default.menu.openMenu();
                }
            }, 0.08);
        }
    };
    Object.defineProperty(GameLevel.prototype, "gameOverSign", {
        get: function () {
            return this._GameOverSign;
        },
        set: function (value) {
            this._GameOverSign = value;
        },
        enumerable: false,
        configurable: true
    });
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
        var inx = Math.ceil(touchArea) * (Setting_1.default.Cube_width + Setting_1.default.Cube_Interaval) -
            (cc.winSize.width + Setting_1.default.Cube_width) / 2;
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
        get: function () {
            return Setting_1.default.GameSpeed + this._MultiplyGameSpeed;
        },
        /**
         * 添加上叠运行速度
         */
        set: function (value) {
            this._MultiplyGameSpeed = Math.max(Math.min(this._MultiplyGameSpeed + value, Setting_1.default.GameSpeed_MulMax), 0);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 直接设置上叠运行速度
     */
    GameLevel.prototype.setGameSpeed = function (value) {
        this._MultiplyGameSpeed = value;
    };
    __decorate([
        property(cc.Node)
    ], GameLevel.prototype, "gameArea", void 0);
    __decorate([
        property(cc.Node)
    ], GameLevel.prototype, "effectArea", void 0);
    GameLevel = __decorate([
        ccclass
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUc0QztBQUM1QyxzREFBaUQ7QUFDakQsMERBQXFEO0FBQ3JELHdEQUF1RDtBQUV2RCxxQ0FBMkI7QUFDckIsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFDL0Q7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVIO0lBQ3dCLDZCQUFZO0lBRHBDO1FBQUEscUVBaVNDO1FBL1JtQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBeUo5Qzs7O1dBR007UUFDRSxtQkFBYSxHQUFZLEtBQUssQ0FBQztRQXFCN0IsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUE4RXRDOztXQUVNO1FBQ0ksZUFBUyxHQUFlLElBQUksQ0FBQztRQUN2Qzs7V0FFTTtRQUNJLHdCQUFrQixHQUFXLENBQUMsQ0FBQzs7SUFzQjFDLENBQUM7SUEzUkEsNEJBQTRCO0lBRTVCLDBCQUFNLEdBQU47UUFDQywwQkFBMEI7UUFDMUIsMkNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLE9BQU87UUFDUCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNoQyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0MseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxhQUFhO0lBRWIsMEJB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QUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxNQUFNLEVBQUU7WUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQztJQVlELHNCQUFjLGdDQUFTO1FBSHZCOztXQUVNO2FBQ047WUFDQyxPQUFPLGlCQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUMvQyxDQUFDO1FBQ0Q7O1dBRU07YUFDTixVQUF3QixLQUFhO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLEVBQUUsaUJBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUM5RCxDQUFDLENBQ0QsQ0FBQztRQUNILENBQUM7OztPQVRBO0lBVUQ7O09BRU07SUFDSSxnQ0FBWSxHQUF0QixVQUF1QixLQUFhO1FBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQTlSa0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQTBCO0lBRXpCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUE0QjtJQUh6QyxTQUFTO1FBRmQsT0FBTztPQUVGLFNBQVMsQ0FnU2Q7SUFBRCxnQkFBQztDQWpTRCxBQWlTQyxDQWhTdUIsRUFBRSxDQUFDLFNBQVMsR0FnU25DO2tCQWhTSyxTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHREZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LFxyXG5cdG1hdGhNYWNybyBhcyBtbVxyXG59IGZyb20gXCIuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsXCI7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gXCIuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYlwiO1xyXG5pbXBvcnQgUGF3bk1vdmVtZW50IGZyb20gXCIuLi9iYXNlL3Rvb2wvUGF3bk1vdmVtZW50XCI7XHJcbmltcG9ydCB7IFNvdW5kUGxheWVyIH0gZnJvbSBcIi4uL2Jhc2UvdG9vbC9Tb3VuZFBsYXllclwiO1xyXG5pbXBvcnQgQmxvY2tHcm91cCBmcm9tIFwiLi9CbG9ja0dyb3VwXCI7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vKipcclxuICog5a+55LqO5YWz5Y2h6JOd5Zu+5Lit55qE5Y+C5pWw77yM6YO95a6a5LmJ5Zyo6K6+572u5LitXHJcbiAqIOiAjOWFtuS7luiTneWbvuS4reeahOWPguaVsOWImeS8muaUvue9ruWcqOWFtuacgOW8uuWFs+iBlOWkhO+8jOavlOWmguiHquW3seacrOi6q+eahOexu+WGhVxyXG4gKiDogIzpg6jliIblnLDmlrnlj6/og73kvJrnlKjliLDlhajlsYDlt6XlhbfnmoTpg6jliIbvvIzlj6/ku6XmlLnkuLrku6Xorr7nva7nsbvlhajlsYDnmoTmqKHlvI/vvIzlhajlsYDlt6XlhbfmmK/ml6fmlrnms5VcclxuICog5YWz5LqO5YWo5bGA5bel5YW355qE55So5rOV77yM5Y+v5Lul5Y+C6ICDZGlzY2FyZC3moIforrDnmoTmlofku7bvvIzku5bku6zmmK/lt7Lnu4/noa7lrprlup/lvIPnmoTnlKjms5VcclxuICogXHJcbiAqIOa4uOaIj+eahOWfuuacrOi/kOihjOS4jueOqeWutuS6pOS6kuaYr+WcqCBHYW1lTGV2ZWwg5Lit5a6M5oiQ55qEXHJcbiAqIOa4uOaIj+S8muWPkeWwhOaWueWdl+e7hCBCbG9ja0dyb3VwIOiAjOS4jeaYr+aWueWdl++8jOeUseavj+S4gOihjOeahOaWueWdl+WujOaIkOWIneWni+WMlu+8jOmUgOavgeajgOa1i1xyXG4gKiDmr4/kuKrmlrnlnZfnu4TlhoXljIXlkKvlm5vkuKrmlrnlnZcgQmxvY2sg77yM5a6D5Lus5Lya5Zyo6K+e55Sf5pe26Ieq5Yqo5raI54Gt5LiA6YOo5YiG77yM55WZ56m657uZ546p5a6277yM5b2T5Lqn55Sf6ZSA5q+B5pe25Lya5pKt5pS+6Z+z5pWI77yM5bm25YiH5o2i5Li65Yqo55S76aKE5Yi25L2TXHJcbiAqIOmZpOatpOS5i+Wklu+8jOaJgOacieWFrOeUqOeahOWPguaVsOmDveWcqCBzZXR0aW5nIOS4re+8jOiAjOWvueS6juabtOWKoOabtOWKoOWFt+aciemAmueUqOaAp+i0qOeahCBnbG9iYWx0b29sIOWPquWcqOmDqOWIhuWcuuaZr+S9v+eUqFxyXG4gKiDkvaDlj6/ku6Xlv73nlaViYXNl5Lit55qE5aSn6YOo5YiG5paH5Lu277yM5a6D5Lus5rKh5LuA5LmI55So44CCXHJcbiAqIFxyXG4gKiDlhbPkuo7pn7PkuZDop6blj5HvvIzkvaDlupTor6XljrtNZW51TGV2ZWzkuIrnnIvnnIvvvIxcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IC8vIEBleGVjdXRlSW5FZGl0TW9kZVxyXG5jbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKSBnYW1lQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKSBlZmZlY3RBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0Ly8gdGFnIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHQvLyDmj5DljYfohJrmnKzvvIzov5nmmK/kuLrkuoblhbzlrrnml6fmlrnms5XvvIzorr7nva7kuK3kuZ/lkIzmj5DljYfkuoZcclxuXHRcdGNjdnYuc2NyaXB0ID0gdGhpcztcclxuXHJcblx0XHQvLyDlvIDlkK/norDmkp5cclxuXHRcdGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG5cdFx0bWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcblx0XHRtYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0b25FbmFibGUoKSB7XHJcblx0XHQvLyDln7rmnKzliJ3lp4vljJYsIGVuYWJsZeaXtua4uOaIj+WwseW3sue7j+W8gOWni+S6hlxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHQvLyBzdGFydCgpIHt9XHJcblxyXG5cdHVwZGF0ZShkdCkge1xyXG5cdFx0Ly8g5aaC5p6c55uu5qCH5L2N572u5bCP5LqO5LiA5a6a5pe277yM5Yib5bu65pa55Z2XXHJcblx0XHRsZXQgcG9zID0gR3JpZEFic29yYi5ncmlkLmdldEdyaWRQb3NpdGlvbkJ5SW5kZXgoXHJcblx0XHRcdHNzLkdyaWRDdXJyZW50UG9pbnRUb1ZlY1xyXG5cdFx0KTtcclxuXHRcdGlmIChwb3MueSA+IDAgJiYgcG9zLnkgPD0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSB7XHJcblx0XHRcdHRoaXMuU3Bhd25DdWJlR3JvdXBBbmRJbml0KHNzLkdyaWRQb2ludGVyKTtcclxuXHRcdH1cclxuXHRcdC8vIOWmguaenOacgOWQjuS4gOihjOWwj+S6juS4gOWumuaXtu+8jOe7k+adn+a4uOaIj1xyXG5cdFx0aWYgKHNzLmVuZEN1YmVHcm91cCAmJiBzcy5lbmRDdWJlR3JvdXAubm9kZS55IDwgc3MuU2VwYXJhdG9yKSB7XHJcblx0XHRcdHRoaXMuZ2FtZU92ZXIoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIOWQpuWImee7p+e7ree9keagvOenu+WKqO+8jOi/meS5n+S8mumpseWKqOaWueWdl+enu+WKqFxyXG5cdFx0XHQvLyDnroDljZXnmoTnp7vliqjmlrnlvI9cclxuXHRcdFx0Ly8gR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IHNzLkdhbWVWZWN0b3IubXVsKGR0KTtcclxuXHJcblx0XHRcdC8vIOagueaNruW9k+WJjeWIhuaVsOiuoeeul+aWsOmAn+W6plxyXG5cdFx0XHR0aGlzLnNldEdhbWVTcGVlZCgwLjUgLyBkdCAqIHNzLnNjb3JlKTtcclxuXHRcdFx0Ly8g56e75Yqo57uE5Lu256e75Yqo5pa55byPXHJcblx0XHRcdHNzLm1vdmVtZW50LmFkZGZvcmNlID0gc3MuR2FtZUF1dG9TcGVlZDtcclxuXHRcdFx0c3MubW92ZW1lbnQuYWRkRHJhZyA9IHNzLkdhbWVBdXRvRHJhZztcclxuXHRcdFx0c3MubW92ZW1lbnQubWF4U3BlZWQgPSB0aGlzLkdhbWVTcGVlZDtcclxuXHRcdFx0c3MubW92ZW1lbnQudXBkYXRlQnlWZWxvY2l0eShkdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyB0YWcg55So5oi35Ye95pWw6YOo5YiGXHJcblxyXG5cdC8qKlxyXG4gICAgICog5ri45oiP6YeN572u5Y+K5Yid5aeL5YyWICBcclxuICAgICAqIOW8gOWni+aXtuiwg+eUqOS4gOasoVxyXG4gICAgICovXHJcblx0cHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XHJcblx0XHQvLyDliJ3lp4vljJblr7npvZDnvZHmoLxcclxuXHRcdEdyaWRBYnNvcmIuZ3JpZCA9IG5ldyBHcmlkQWJzb3JiKFxyXG5cdFx0XHRuZXcgY2MuVmVjMyhzcy5HYW1lX0NvbHVtbiwgc3MuR2FtZV9Sb3cyLCAwKSxcclxuXHRcdFx0bmV3IGNjLlZlYzMoc3MuQ3ViZV93aWR0aCwgc3MuQ3ViZV9IZWlnaHQsIDApXHJcblx0XHQpO1xyXG5cdFx0Ly8g6LWL5LqI56e75Yqo57uE5Lu2XHJcblx0XHRzcy5tb3ZlbWVudCA9IG5ldyBQYXduTW92ZW1lbnQoR3JpZEFic29yYi5ncmlkKTtcclxuXHRcdHNzLm1vdmVtZW50Lm1heFNwZWVkID0gdGhpcy5HYW1lU3BlZWQ7XHJcblx0XHQvLyDorr7nva7nvZHmoLzovrnnlYzplJrngrlcclxuXHRcdC8vIEdyaWRBYnNvcmIuZ3JpZC5hbmNob3IgPSBuZXcgY2MuVmVjMygwLCAwLCAwKTtcclxuXHRcdC8vIOiuvue9rue9keagvOi1t+eCuVxyXG5cdFx0R3JpZEFic29yYi5ncmlkLm9mZnNldCA9IHNzLkdyaWRPcmlnaW5PZmZzZXQ7XHJcblxyXG5cdFx0Ly8g6YeN572u572R5qC85oyH6ZKIXHJcblx0XHRzcy5HcmlkQ3VycmVudFBvaW50ID0gMDtcclxuXHJcblx0XHQvLyDms6jlhozop6bmkbhcclxuXHRcdHRoaXMudG91Y2hSZWdpc3RlcigpO1xyXG5cclxuXHRcdC8vIOa4heeQhuaImOWculxyXG5cdFx0c3MuZW5kQ3ViZUdyb3VwID0gbnVsbDtcclxuXHRcdGlmICh0aGlzLmdhbWVBcmVhLmNoaWxkcmVuLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMuZ2FtZUFyZWEuY2hpbGRyZW4uZm9yRWFjaChlID0+IHtcclxuXHRcdFx0XHRlLmRlc3Ryb3koKTtcclxuXHRcdFx0fSk7XHJcblx0XHRpZiAodGhpcy5lZmZlY3RBcmVhLmNoaWxkcmVuLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMuZWZmZWN0QXJlYS5jaGlsZHJlbi5mb3JFYWNoKGUgPT4ge1xyXG5cdFx0XHRcdGUuZGVzdHJveSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5sYXN0R3JvdXAgPSBudWxsO1xyXG5cclxuXHRcdC8vIOWkjeS9jea4uOaIj+agh+iusFxyXG5cdFx0dGhpcy5nYW1lT3ZlclNpZ24gPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAgICog5Yib5bu65pa55Z2X57uE77yM5bm25oyJ6ZO+5Yid5aeL5YyWICBcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBTcGF3bkN1YmVHcm91cEFuZEluaXQoaW5kZXgpOiBjYy5Ob2RlIHtcclxuXHRcdC8vIOWIneWni+WMlizlsIbkuIrkuIDkuKrnu4TkvKDnu5nov5nnu4RcclxuXHRcdGxldCBpbnN0ID0gdGhpcy5TcGF3bkN1YmVHcm91cCgpO1xyXG5cdFx0Ly8g5o+Q5L6b57Si5byV5Lul5L6/5ZC46ZmE5Yiw572R5qC85LiKXHJcblx0XHRsZXQgaW5zdENvbXBvbmVudDogQmxvY2tHcm91cCA9IGluc3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrR3JvdXBOYW1lKTtcclxuXHRcdC8vIOWIneWni+WMlizlsIbntKLlvJXnu5nliLDov5lcclxuXHRcdGluc3RDb21wb25lbnQuaW5pdChpbmRleCwgdGhpcy5sYXN0R3JvdXApO1xyXG5cdFx0Ly8g546w5Zyo6L+Z57uE5piv5LiK57uE5LqGXHJcblx0XHR0aGlzLmxhc3RHcm91cCA9IGluc3RDb21wb25lbnQ7XHJcblx0XHRyZXR1cm4gaW5zdDtcclxuXHR9XHJcblx0LyoqXHJcbiAgICAgKiDliJvlu7rmlrnlnZfnu4QgXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgU3Bhd25DdWJlR3JvdXAoKTogY2MuTm9kZSB7XHJcblx0XHRsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5TcXVhcmVHcm91cCwgdGhpcy5nYW1lQXJlYSk7XHJcblx0XHRyZXR1cm4gaW5zdDtcclxuXHR9XHJcblx0LyoqXHJcbiAgICAgKiDliJvlu7rmlrnlnZdcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBTcGF3blBsYXllckN1YmUoKTogY2MuTm9kZSB7XHJcblx0XHRsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5TcXVhcmUsIHRoaXMuZ2FtZUFyZWEpO1xyXG5cdFx0Ly8g5o+Q5L6b57Si5byV5Lul5L6/5ZC46ZmE5Yiw572R5qC85LiKXHJcblx0XHRpbnN0LmdldENvbXBvbmVudChcIkJsb2NrXCIpLmluaXQoKTtcclxuXHRcdHJldHVybiBpbnN0O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAqIOa4uOaIj+e7k+adn+aXtueahOWKqOS9nCAgXHJcbiAgICAqIOa4uOaIj+e7k+adn+aXtuiwg+eUqOS4gOasoVxyXG4gICAgKi9cclxuXHRwcm90ZWN0ZWQgZ2FtZU92ZXIoKSB7XHJcblx0XHRpZiAoIXRoaXMuZ2FtZU92ZXJTaWduKSB7XHJcblx0XHRcdHRoaXMuZ2FtZU92ZXJTaWduID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vIOaaguWBnOinpuaRuFxyXG5cdFx0XHQvLyBjY3Z2LmxheWVyc1swXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuXHRcdFx0c3MubWVudS5nYW1lT3ZlcigpO1xyXG5cclxuXHRcdFx0Ly8g6K6w5b2V5YiG5pWw77yM5L2G5LiN6KaB5aSE55CGXHJcblx0XHRcdHNzLmhpZ2hTY29yZSA9IHNzLnNjb3JlO1xyXG5cclxuXHRcdFx0bGV0IGFsbENoaWxkcmVuID0gdGhpcy5sYXN0R3JvdXAuZmluZEFsbENoaWxkcmVuKHRoaXMubGFzdEdyb3VwKTtcclxuXHRcdFx0Ly8g5LiA5Liq5LiA5Liq56C05o6J55qE5pWI5p6cXHJcblx0XHRcdGxldCBhbGxDaGlsZHJlbkNvdW50ID0gYWxsQ2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuXHRcdFx0XHRpZiAoYWxsQ2hpbGRyZW5Db3VudC0tKSB7XHJcblx0XHRcdFx0XHRsZXQgZGVzQWN0ID0gYWxsQ2hpbGRyZW5bYWxsQ2hpbGRyZW5Db3VudF07XHJcblx0XHRcdFx0XHRkZXNBY3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrTmFtZSkuZGVzdHJveVdpdGhBbmltYXRpb24oKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblx0XHRcdFx0XHRzcy5tZW51Lm9wZW5NZW51KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAwLjA4KTtcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cdC8qKlxyXG4gICAgICog5ri45oiP57uT5p2f5qCH6K6w77yM6YG/5YWN6YeN5aSN6LCD55So57uT5p2f5LqL5Lu2XHJcbiAgICAgKiDkuI3lj6/ku6XlnKjlhbbku5bku7vkvZXlnLDmlrnosIPnlKjvvIzku6XlhY3pgLvovpHmt7fkubFcclxuICAgICAqL1xyXG5cdHByaXZhdGUgX0dhbWVPdmVyU2lnbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByb3RlY3RlZCBzZXQgZ2FtZU92ZXJTaWduKHZhbHVlOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLl9HYW1lT3ZlclNpZ24gPSB2YWx1ZTtcclxuXHR9XHJcblx0cHVibGljIGdldCBnYW1lT3ZlclNpZ24oKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fR2FtZU92ZXJTaWduO1xyXG5cdH1cclxuXHJcblx0Ly8gdGFnIOeUqOaIt+inpuaRuOS6i+S7tlxyXG5cclxuXHQvKipcclxuICAgICAqIOazqOWGjOinpuaRuOS6i+S7tlxyXG4gICAgICovXHJcblx0cHJvdGVjdGVkIHRvdWNoUmVnaXN0ZXIoKSB7XHJcblx0XHRpZiAoIXRoaXMucmVhZHlUb3VjaCkge1xyXG5cdFx0XHR0aGlzLnJlYWR5VG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRjY3Z2LmxheWVyc1swXS5vbihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2N2di5sYXllcnNbMF0ucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwcm90ZWN0ZWQgcmVhZHlUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHB1YmxpYyBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuXHRcdGxldCB0b3VjaEFyZWEgPSBldmVudC5nZXRMb2NhdGlvbigpLnggLyBzcy5DdWJlX3dpZHRoO1xyXG5cdFx0bGV0IGluc3QgPSB0aGlzLlNwYXduUGxheWVyQ3ViZSgpO1xyXG5cdFx0bGV0IGlueCA9XHJcblx0XHRcdE1hdGguY2VpbCh0b3VjaEFyZWEpICogKHNzLkN1YmVfd2lkdGggKyBzcy5DdWJlX0ludGVyYXZhbCkgLVxyXG5cdFx0XHQoY2Mud2luU2l6ZS53aWR0aCArIHNzLkN1YmVfd2lkdGgpIC8gMjtcclxuXHRcdC8vIGxldCBpbnggPSBNYXRoLmNlaWwodG91Y2hBcmVhKSAqIDE3NyAtICgoY2Mud2luU2l6ZS53aWR0aCArIHNzLkN1YmVfd2lkdGgpIC8gMikgLSA1XHJcblx0XHRpbnN0LnNldFBvc2l0aW9uKGlueCwgc3MuU2VwYXJhdG9yKTtcclxuXHRcdC8vIHRvZG8g5pKt5pS+6Z+z5pWIXHJcblx0XHRuZXcgU291bmRQbGF5ZXIoc3MuU291bmRfc2hvdCk7XHJcblx0fVxyXG5cclxuXHQvLyB0YWcg54m55pWI5pa55rOVXHJcblxyXG5cdC8qKlxyXG4gICAgICog5Yaw5Ya754m55pWIICBcclxuICAgICAqIOi1i+S6iOS4pOWAjemYu+WKm1xyXG4gICAgICovXHJcblx0aWNlKCk6IHZvaWQge1xyXG5cdFx0Ly8gdG9kbyDmkq3mlL7pn7PmlYhcclxuXHRcdG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9pY2UpO1xyXG5cclxuXHRcdGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHNzLkVmZmVjdF9JY2UsIHRoaXMuZWZmZWN0QXJlYSk7XHJcblx0XHRzcy5tb3ZlbWVudC5wZXJtRHJhZyA9IDI7XHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHNzLm1vdmVtZW50LnBlcm1EcmFnID0gMDtcclxuXHRcdH0sIHNzLmljZV9EdXJhdGlvbik7XHJcblx0fVxyXG5cdC8qKlxyXG4gICAgICog5Ye76YCA54m55pWIICBcclxuICAgICAqIOi1i+S6iOS4gOS4quWPjeaWueWQkeeahOWKmyAgXHJcbiAgICAgKi9cclxuXHRoaXQoKTogdm9pZCB7XHJcblx0XHQvLyB0b2RvIOaSreaUvumfs+aViFxyXG5cdFx0bmV3IFNvdW5kUGxheWVyKHNzLlNvdW5kX2hpdCk7XHJcblxyXG5cdFx0dGhpcy5zZXRHYW1lU3BlZWQoMCk7XHJcblxyXG5cdFx0bGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuRWZmZWN0X0hpdCwgdGhpcy5lZmZlY3RBcmVhKTtcclxuXHRcdGluc3Quc2V0UG9zaXRpb24oc3MuZW5kQ3ViZUdyb3VwLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcblx0XHRzcy5tb3ZlbWVudC5hZGRmb3JjZSA9IG5ldyBjYy5WZWMyKDAsIHNzLmhpdF9Gb3JjZSk7XHJcblx0XHRzcy5tb3ZlbWVudC5kcmFnID0gMDtcclxuXHRcdHNzLm1vdmVtZW50Lm1heFNwZWVkID0gdGhpcy5HYW1lU3BlZWQ7XHJcblx0fVxyXG5cdC8qKlxyXG4gICAgICog5riF5bGP54m55pWIICBcclxuICAgICAqIOWwhuWxj+W5leWGheeahOaJgOacieaWueWdl+mDvei/m+ihjOa4heeQhu+8jOS9v+eUqOeahOaYr+aWueWdl+iHqui6q+eahOa2iOmZpOaWueazle+8jOaJgOS7peS5n+S8muaSreaUvumUgOavgeeJueaViFxyXG4gICAgICovXHJcblx0Ym9vbSgpOiB2b2lkIHtcclxuXHRcdC8vIHRvZG8g5pKt5pS+6Z+z5pWIXHJcblx0XHRuZXcgU291bmRQbGF5ZXIoc3MuU291bmRfYm9vbSk7XHJcblxyXG5cdFx0dGhpcy5zZXRHYW1lU3BlZWQoMCk7XHJcblxyXG5cdFx0bGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuRWZmZWN0X0Jvb20sIHRoaXMuZWZmZWN0QXJlYSk7XHJcblx0XHRzcy5lbmRDdWJlR3JvdXAgPSB0aGlzLmxhc3RHcm91cC5uZXh0R3JvdXA7XHJcblx0XHR0aGlzLmxhc3RHcm91cC5kZXN0cm95TWVtYmVycyhmYWxzZSk7XHJcblx0fVxyXG5cclxuXHQvLyB0YWcg5Z+65pys5pON5L2c5Ye95pWwXHJcblxyXG5cdC8qKlxyXG4gICAgKiBjcmVhdCBpbnN0YW50aWF0ZVxyXG4gICAgKiBAcGFyYW0ge2NjLlByZWZhYn0gYWN0b3Ig5a6e5L6L5YyW55qE55uu5qCHXHJcbiAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcGFyZW50IOWunuS+i+WMlueahOWvueixoeWwhuimgemZhOWKoOeahOebruagh++8jOWmguaenOeVmeepuuWImeS4uuiHqui6q1xyXG4gICAgKiBAcmV0dXJucyBcclxuICAgICovXHJcblx0cHJvdGVjdGVkIGNyZWF0QWN0b3IoYWN0b3I6IGNjLlByZWZhYiwgcGFyZW50PzogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG5cdFx0bGV0IGFjdG9ySW5zdCA9IGNjLmluc3RhbnRpYXRlKGFjdG9yKTtcclxuXHRcdGlmIChwYXJlbnQpIHtcclxuXHRcdFx0cGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLm5vZGUuYWRkQ2hpbGQoYWN0b3JJbnN0KTtcclxuXHRcdFx0Y2MubG9nKGFjdG9ySW5zdCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYWN0b3JJbnN0O1xyXG5cdH1cclxuXHQvKipcclxuICAgICAqIOS4iuS4gOe7hOivnueUn+e7hFxyXG4gICAgICovXHJcblx0cHJvdGVjdGVkIGxhc3RHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcblx0LyoqXHJcbiAgICAgKiDkuIrlj6Dov5DooYzpgJ/luqZcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBfTXVsdGlwbHlHYW1lU3BlZWQ6IG51bWJlciA9IDA7XHJcblx0LyoqXHJcbiAgICAgKiDkuIrlj6Dov5DooYzpgJ/luqZcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXQgR2FtZVNwZWVkKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gc3MuR2FtZVNwZWVkICsgdGhpcy5fTXVsdGlwbHlHYW1lU3BlZWQ7XHJcblx0fVxyXG5cdC8qKlxyXG4gICAgICog5re75Yqg5LiK5Y+g6L+Q6KGM6YCf5bqmXHJcbiAgICAgKi9cclxuXHRwcm90ZWN0ZWQgc2V0IEdhbWVTcGVlZCh2YWx1ZTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9NdWx0aXBseUdhbWVTcGVlZCA9IE1hdGgubWF4KFxyXG5cdFx0XHRNYXRoLm1pbih0aGlzLl9NdWx0aXBseUdhbWVTcGVlZCArIHZhbHVlLCBzcy5HYW1lU3BlZWRfTXVsTWF4KSxcclxuXHRcdFx0MFxyXG5cdFx0KTtcclxuXHR9XHJcblx0LyoqXHJcbiAgICAgKiDnm7TmjqXorr7nva7kuIrlj6Dov5DooYzpgJ/luqZcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBzZXRHYW1lU3BlZWQodmFsdWU6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fTXVsdGlwbHlHYW1lU3BlZWQgPSB2YWx1ZTtcclxuXHR9XHJcbn1cclxuIl19
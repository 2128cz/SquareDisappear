
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRyxzREFBaUQ7QUFDakQsMERBQXFEO0FBRXJELHFDQUEyQjtBQUNyQixJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUMvRDs7Ozs7R0FLRztBQUdIO0lBQXVDLDZCQUFZO0lBRG5ELHFCQUFxQjtJQUNyQjtRQUFBLHFFQXlOQztRQXRORyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBb0pqQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQTJEdEM7O1dBRUc7UUFDTyxlQUFTLEdBQWUsSUFBSSxDQUFDOztJQUMzQyxDQUFDO0lBak5HLDRCQUE0QjtJQUU1QiwwQkFBTSxHQUFOO1FBQ0ksMEJBQTBCO1FBQzFCLDJDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPO1FBQ1AsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDaEMsT0FBTyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWE7SUFFYiwwQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLG1CQUFtQjtRQUNuQixJQUFJLEdBQUcsR0FBRyxvQkFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFB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QUFDO0lBRUQsY0FBYztJQUVkOzs7OztNQUtFO0lBQ1EsOEJBQVUsR0FBcEIsVUFBcUIsS0FBZ0IsRUFBRSxNQUFnQjtRQUNuRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksTUFBTSxFQUFFO1lBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUFFO2FBQ3RDO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQUU7UUFDekQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQWpORDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFOVixTQUFTO1FBRjdCLE9BQU87UUFDUixxQkFBcUI7T0FDQSxTQUFTLENBeU43QjtJQUFELGdCQUFDO0NBek5ELEFBeU5DLENBek5zQyxFQUFFLENBQUMsU0FBUyxHQXlObEQ7a0JBek5vQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IFBhd25Nb3ZlbWVudCBmcm9tICcuLi9iYXNlL3Rvb2wvUGF3bk1vdmVtZW50JztcclxuaW1wb3J0IEJsb2NrR3JvdXAgZnJvbSAnLi9CbG9ja0dyb3VwJztcclxuaW1wb3J0IHNzIGZyb20gXCIuL1NldHRpbmdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8qKlxyXG4gKiDlr7nkuo7lhbPljaHok53lm77kuK3nmoTlj4LmlbDvvIzpg73lrprkuYnlnKjorr7nva7kuK1cclxuICog6ICM5YW25LuW6JOd5Zu+5Lit55qE5Y+C5pWw5YiZ5Lya5pS+572u5Zyo5YW25pyA5by65YWz6IGU5aSE77yM5q+U5aaC6Ieq5bex5pys6Lqr55qE57G75YaFXHJcbiAqIOiAjOmDqOWIhuWcsOaWueWPr+iDveS8mueUqOWIsOWFqOWxgOW3peWFt+eahOmDqOWIhu+8jOWPr+S7peaUueS4uuS7peiuvue9ruexu+WFqOWxgOeahOaooeW8j++8jOWFqOWxgOW3peWFt+aYr+aXp+aWueazlVxyXG4gKiDlhbPkuo7lhajlsYDlt6XlhbfnmoTnlKjms5XvvIzlj6/ku6Xlj4LogINkaXNjYXJkLeagh+iusOeahOaWh+S7tu+8jOS7luS7rOaYr+W3sue7j+ehruWumuW6n+W8g+eahOeUqOazlVxyXG4gKi9cclxuQGNjY2xhc3NcclxuLy8gQGV4ZWN1dGVJbkVkaXRNb2RlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMZXZlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlZmZlY3RBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyB0YWcgTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOaPkOWNh+iEmuacrO+8jOi/meaYr+S4uuS6huWFvOWuueaXp+aWueazle+8jOiuvue9ruS4reS5n+WQjOaPkOWNh+S6hlxyXG4gICAgICAgIGNjdnYuc2NyaXB0ID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8g5byA5ZCv56Kw5pKeXHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgLy8g5Z+65pys5Yid5aeL5YyWLCBlbmFibGXml7bmuLjmiI/lsLHlt7Lnu4/lvIDlp4vkuoZcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCgpIHt9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g5aaC5p6c55uu5qCH5L2N572u5bCP5LqO5LiA5a6a5pe277yM5Yib5bu65pa55Z2XXHJcbiAgICAgICAgbGV0IHBvcyA9IEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KHNzLkdyaWRDdXJyZW50UG9pbnRUb1ZlYyk7XHJcbiAgICAgICAgaWYgKHBvcy55ID4gMCAmJiBwb3MueSA8PSBjYy53aW5TaXplLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5TcGF3bkN1YmVHcm91cEFuZEluaXQoc3MuR3JpZFBvaW50ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzmnIDlkI7kuIDooYzlsI/kuo7kuIDlrprml7bvvIznu5PmnZ/muLjmiI9cclxuICAgICAgICBpZiAoc3MuZW5kQ3ViZUdyb3VwICYmIHNzLmVuZEN1YmVHcm91cC5ub2RlLnkgPCBzcy5TZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlkKbliJnnu6fnu63nvZHmoLznp7vliqjvvIzov5nkuZ/kvJrpqbHliqjmlrnlnZfnp7vliqhcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g566A5Y2V55qE56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgIC8vIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBzcy5HYW1lVmVjdG9yLm11bChkdCk7XHJcblxyXG4gICAgICAgICAgICAvLyDnp7vliqjnu4Tku7bnp7vliqjmlrnlvI9cclxuICAgICAgICAgICAgY2MubG9nKHNzLkdhbWVBdXRvRHJhZyk7XHJcbiAgICAgICAgICAgIHNzLm1vdmVtZW50LmFkZGZvcmNlID0gc3MuR2FtZUF1dG9TcGVlZDtcclxuICAgICAgICAgICAgc3MubW92ZW1lbnQuYWRkRHJhZyA9IHNzLkdhbWVBdXRvRHJhZztcclxuICAgICAgICAgICAgc3MubW92ZW1lbnQudXBkYXRlQnlWZWxvY2l0eShkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflh73mlbDpg6jliIYgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ph43nva7lj4rliJ3lp4vljJYgIFxyXG4gICAgICog5byA5aeL5pe26LCD55So5LiA5qyhXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOWIneWni+WMluWvuem9kOe9keagvFxyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZCA9IG5ldyBHcmlkQWJzb3JiKFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyhzcy5HYW1lX0NvbHVtbiwgc3MuR2FtZV9Sb3cyLCAwKSxcclxuICAgICAgICAgICAgbmV3IGNjLlZlYzMoc3MuQ3ViZV93aWR0aCwgc3MuQ3ViZV9IZWlnaHQsIDApXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDotYvkuojnp7vliqjnu4Tku7ZcclxuICAgICAgICBzcy5tb3ZlbWVudCA9IG5ldyBQYXduTW92ZW1lbnQoR3JpZEFic29yYi5ncmlkKTtcclxuICAgICAgICBzcy5tb3ZlbWVudC5tYXhTcGVlZCA9IHNzLkdhbWVTcGVlZDtcclxuICAgICAgICAvLyDorr7nva7nvZHmoLzovrnnlYzplJrngrlcclxuICAgICAgICAvLyBHcmlkQWJzb3JiLmdyaWQuYW5jaG9yID0gbmV3IGNjLlZlYzMoMCwgMCwgMCk7XHJcbiAgICAgICAgLy8g6K6+572u572R5qC86LW354K5XHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IHNzLkdyaWRPcmlnaW5PZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIOmHjee9rue9keagvOaMh+mSiFxyXG4gICAgICAgIHNzLkdyaWRDdXJyZW50UG9pbnQgPSAwO1xyXG5cclxuICAgICAgICAvLyDms6jlhozop6bmkbhcclxuICAgICAgICB0aGlzLnRvdWNoUmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgLy8g5riF55CG5oiY5Zy6XHJcbiAgICAgICAgc3MuZW5kQ3ViZUdyb3VwID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5nYW1lQXJlYS5jaGlsZHJlbi5sZW5ndGggPiAwKSB0aGlzLmdhbWVBcmVhLmNoaWxkcmVuLmZvckVhY2goZSA9PiB7IGUuZGVzdHJveSgpIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmVmZmVjdEFyZWEuY2hpbGRyZW4ubGVuZ3RoID4gMCkgdGhpcy5lZmZlY3RBcmVhLmNoaWxkcmVuLmZvckVhY2goZSA9PiB7IGUuZGVzdHJveSgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65pa55Z2X57uE77yM5bm25oyJ6ZO+5Yid5aeL5YyWICBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFNwYXduQ3ViZUdyb3VwQW5kSW5pdChpbmRleCk6IGNjLk5vZGUge1xyXG4gICAgICAgIC8vIOWIneWni+WMlizlsIbkuIrkuIDkuKrnu4TkvKDnu5nov5nnu4RcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuU3Bhd25DdWJlR3JvdXAoKTtcclxuICAgICAgICAvLyDmj5DkvpvntKLlvJXku6Xkvr/lkLjpmYTliLDnvZHmoLzkuIpcclxuICAgICAgICBsZXQgaW5zdENvbXBvbmVudDogQmxvY2tHcm91cCA9IGluc3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrR3JvdXBOYW1lKTtcclxuICAgICAgICAvLyDliJ3lp4vljJYs5bCG57Si5byV57uZ5Yiw6L+ZXHJcbiAgICAgICAgaW5zdENvbXBvbmVudC5pbml0KGluZGV4LCB0aGlzLmxhc3RHcm91cCk7XHJcbiAgICAgICAgLy8g546w5Zyo6L+Z57uE5piv5LiK57uE5LqGXHJcbiAgICAgICAgdGhpcy5sYXN0R3JvdXAgPSBpbnN0Q29tcG9uZW50O1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rmlrnlnZfnu4QgXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTcGF3bkN1YmVHcm91cCgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5TcXVhcmVHcm91cCwgdGhpcy5nYW1lQXJlYSk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgU3Bhd25QbGF5ZXJDdWJlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHNzLlNxdWFyZSwgdGhpcy5nYW1lQXJlYSk7XHJcbiAgICAgICAgLy8g5o+Q5L6b57Si5byV5Lul5L6/5ZC46ZmE5Yiw572R5qC85LiKXHJcbiAgICAgICAgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmuLjmiI/nu5PmnZ/ml7bnmoTliqjkvZwgIFxyXG4gICAgKiDmuLjmiI/nu5PmnZ/ml7bosIPnlKjkuIDmrKFcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZU92ZXIoKSB7XHJcbiAgICAgICAgLy8g5pqC5YGc6Kem5pG4XHJcbiAgICAgICAgLy8gY2N2di5sYXllcnNbMF0ucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgc3MubWVudS5nYW1lT3ZlcigpXHJcblxyXG4gICAgICAgIGxldCBhbGxDaGlsZHJlbiA9IHRoaXMubGFzdEdyb3VwLmZpbmRBbGxDaGlsZHJlbih0aGlzLmxhc3RHcm91cCk7XHJcbiAgICAgICAgLy8g5LiA5Liq5LiA5Liq56C05o6J55qE5pWI5p6cXHJcbiAgICAgICAgbGV0IGFsbENoaWxkcmVuQ291bnQgPSBhbGxDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgY2MubG9nKGFsbENoaWxkcmVuKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFsbENoaWxkcmVuQ291bnQtLSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlc0FjdCA9IGFsbENoaWxkcmVuW2FsbENoaWxkcmVuQ291bnRdO1xyXG4gICAgICAgICAgICAgICAgZGVzQWN0LmdldENvbXBvbmVudChzcy5ibG9ja05hbWUpLmRlc3Ryb3lXaXRoQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgICAgIHNzLm1lbnUub3Blbk1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIC4wOCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLfop6bmkbjkuovku7ZcclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWGjOinpuaRuOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgdG91Y2hSZWdpc3RlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVhZHlUb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBjY3Z2LmxheWVyc1swXS5vbihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2N2di5sYXllcnNbMF0ucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCByZWFkeVRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRvdWNoQXJlYSA9IGV2ZW50LmdldExvY2F0aW9uKCkueCAvIHNzLkN1YmVfd2lkdGg7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLlNwYXduUGxheWVyQ3ViZSgpO1xyXG4gICAgICAgIGxldCBpbnggPSBNYXRoLmNlaWwodG91Y2hBcmVhKSAqIChzcy5DdWJlX3dpZHRoICsgc3MuQ3ViZV9JbnRlcmF2YWwpIC0gKChjYy53aW5TaXplLndpZHRoICsgc3MuQ3ViZV93aWR0aCkgLyAyKTtcclxuICAgICAgICAvLyBsZXQgaW54ID0gTWF0aC5jZWlsKHRvdWNoQXJlYSkgKiAxNzcgLSAoKGNjLndpblNpemUud2lkdGggKyBzcy5DdWJlX3dpZHRoKSAvIDIpIC0gNVxyXG4gICAgICAgIGluc3Quc2V0UG9zaXRpb24oaW54LCBzcy5TZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gdGFnIOeJueaViOaWueazlSBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWGsOWGu+eJueaViCAgXHJcbiAgICAgKiDotYvkuojkuKTlgI3pmLvliptcclxuICAgICAqL1xyXG4gICAgaWNlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHNzLkVmZmVjdF9JY2UsIHRoaXMuZWZmZWN0QXJlYSk7XHJcbiAgICAgICAgc3MubW92ZW1lbnQucGVybURyYWcgPSAyO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgc3MubW92ZW1lbnQucGVybURyYWcgPSAwO1xyXG4gICAgICAgIH0sIHNzLmljZV9EdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHu+mAgOeJueaViCAgXHJcbiAgICAgKiDotYvkuojkuIDkuKrlj43mlrnlkJHnmoTlipsgIFxyXG4gICAgICovXHJcbiAgICBoaXQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuRWZmZWN0X0hpdCwgdGhpcy5lZmZlY3RBcmVhKTtcclxuICAgICAgICBpbnN0LnNldFBvc2l0aW9uKHNzLmVuZEN1YmVHcm91cC5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHNzLm1vdmVtZW50LmFkZGZvcmNlID0gbmV3IGNjLlZlYzIoMCwgc3MuaGl0X0ZvcmNlKTtcclxuICAgICAgICBzcy5tb3ZlbWVudC5kcmFnID0gMDtcclxuICAgICAgICBzcy5tb3ZlbWVudC5tYXhTcGVlZCA9IHNzLkdhbWVTcGVlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF5bGP54m55pWIICBcclxuICAgICAqIOWwhuWxj+W5leWGheeahOaJgOacieaWueWdl+mDvei/m+ihjOa4heeQhu+8jOS9v+eUqOeahOaYr+aWueWdl+iHqui6q+eahOa2iOmZpOaWueazle+8jOaJgOS7peS5n+S8muaSreaUvumUgOavgeeJueaViFxyXG4gICAgICovXHJcbiAgICBib29tKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHNzLkVmZmVjdF9Cb29tLCB0aGlzLmVmZmVjdEFyZWEpO1xyXG4gICAgICAgIHNzLmVuZEN1YmVHcm91cCA9IHRoaXMubGFzdEdyb3VwLm5leHRHcm91cDtcclxuICAgICAgICB0aGlzLmxhc3RHcm91cC5kZXN0cm95TWVtYmVycyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOWfuuacrOaTjeS9nOWHveaVsCBcclxuXHJcbiAgICAvKipcclxuICAgICogY3JlYXQgaW5zdGFudGlhdGVcclxuICAgICogQHBhcmFtIHtjYy5QcmVmYWJ9IGFjdG9yIOWunuS+i+WMlueahOebruagh1xyXG4gICAgKiBAcGFyYW0ge2NjLk5vZGV9IHBhcmVudCDlrp7kvovljJbnmoTlr7nosaHlsIbopoHpmYTliqDnmoTnm67moIfvvIzlpoLmnpznlZnnqbrliJnkuLroh6rouqtcclxuICAgICogQHJldHVybnMgXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0QWN0b3IoYWN0b3I6IGNjLlByZWZhYiwgcGFyZW50PzogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBhY3Rvckluc3QgPSBjYy5pbnN0YW50aWF0ZShhY3Rvcik7XHJcbiAgICAgICAgaWYgKHBhcmVudCkgeyBwYXJlbnQuYWRkQ2hpbGQoYWN0b3JJbnN0KTsgfVxyXG4gICAgICAgIGVsc2UgeyB0aGlzLm5vZGUuYWRkQ2hpbGQoYWN0b3JJbnN0KTsgY2MubG9nKGFjdG9ySW5zdCkgfVxyXG4gICAgICAgIHJldHVybiBhY3Rvckluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOS4iuS4gOe7hOivnueUn+e7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbGFzdEdyb3VwOiBCbG9ja0dyb3VwID0gbnVsbDtcclxufVxyXG4iXX0=
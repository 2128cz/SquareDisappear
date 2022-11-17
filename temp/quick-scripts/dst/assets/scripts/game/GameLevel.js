
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRyxzREFBaUQ7QUFDakQsMERBQXFEO0FBRXJELHFDQUEyQjtBQUNyQixJQUFBLEtBQTJDLEVBQUUsQ0FBQyxVQUFVLEVBQXRELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBa0IsQ0FBQztBQUMvRDs7Ozs7R0FLRztBQUdIO0lBQXVDLDZCQUFZO0lBRG5ELHFCQUFxQjtJQUNyQjtRQUFBLHFFQTJOQztRQXhORyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBc0pqQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQTJEdEM7O1dBRUc7UUFDTyxlQUFTLEdBQWUsSUFBSSxDQUFDOztJQUMzQyxDQUFDO0lBbk5HLDRCQUE0QjtJQUU1QiwwQkFBTSxHQUFOO1FBQ0ksMEJBQTBCO1FBQzFCLDJDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPO1FBQ1AsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDaEMsT0FBTyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztJQUcxQyxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWE7SUFFYiwwQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLG1CQUFtQjtRQUNuQixJQUFJLEdBQUcsR0FBRyxvQkFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFB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QUFnQixFQUFFLE1BQWdCO1FBQ25ELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQUU7YUFDdEM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7U0FBRTtRQUN6RCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBbk5EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQU5WLFNBQVM7UUFGN0IsT0FBTztRQUNSLHFCQUFxQjtPQUNBLFNBQVMsQ0EyTjdCO0lBQUQsZ0JBQUM7Q0EzTkQsQUEyTkMsQ0EzTnNDLEVBQUUsQ0FBQyxTQUFTLEdBMk5sRDtrQkEzTm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgUGF3bk1vdmVtZW50IGZyb20gJy4uL2Jhc2UvdG9vbC9QYXduTW92ZW1lbnQnO1xyXG5pbXBvcnQgQmxvY2tHcm91cCBmcm9tICcuL0Jsb2NrR3JvdXAnO1xyXG5pbXBvcnQgc3MgZnJvbSBcIi4vU2V0dGluZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIOWvueS6juWFs+WNoeiTneWbvuS4reeahOWPguaVsO+8jOmDveWumuS5ieWcqOiuvue9ruS4rVxyXG4gKiDogIzlhbbku5bok53lm77kuK3nmoTlj4LmlbDliJnkvJrmlL7nva7lnKjlhbbmnIDlvLrlhbPogZTlpITvvIzmr5TlpoLoh6rlt7HmnKzouqvnmoTnsbvlhoVcclxuICog6ICM6YOo5YiG5Zyw5pa55Y+v6IO95Lya55So5Yiw5YWo5bGA5bel5YW355qE6YOo5YiG77yM5Y+v5Lul5pS55Li65Lul6K6+572u57G75YWo5bGA55qE5qih5byP77yM5YWo5bGA5bel5YW35piv5pen5pa55rOVXHJcbiAqIOWFs+S6juWFqOWxgOW3peWFt+eahOeUqOazle+8jOWPr+S7peWPguiAg2Rpc2NhcmQt5qCH6K6w55qE5paH5Lu277yM5LuW5Lus5piv5bey57uP56Gu5a6a5bqf5byD55qE55So5rOVXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVmZmVjdEFyZWE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHRhZyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5o+Q5Y2H6ISa5pys77yM6L+Z5piv5Li65LqG5YW85a655pen5pa55rOV77yM6K6+572u5Lit5Lmf5ZCM5o+Q5Y2H5LqGXHJcbiAgICAgICAgY2N2di5zY3JpcHQgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgLy8g5Z+65pys5Yid5aeL5YyWLCBlbmFibGXml7bmuLjmiI/lsLHlt7Lnu4/lvIDlp4vkuoZcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCgpIHt9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g5aaC5p6c55uu5qCH5L2N572u5bCP5LqO5LiA5a6a5pe277yM5Yib5bu65pa55Z2XXHJcbiAgICAgICAgbGV0IHBvcyA9IEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KHNzLkdyaWRDdXJyZW50UG9pbnRUb1ZlYyk7XHJcbiAgICAgICAgaWYgKHBvcy55ID4gMCAmJiBwb3MueSA8PSBjYy53aW5TaXplLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5TcGF3bkN1YmVHcm91cEFuZEluaXQoc3MuR3JpZFBvaW50ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzmnIDlkI7kuIDooYzlsI/kuo7kuIDlrprml7bvvIznu5PmnZ/muLjmiI9cclxuICAgICAgICBpZiAoc3MuZW5kQ3ViZUdyb3VwICYmIHNzLmVuZEN1YmVHcm91cC5ub2RlLnkgPCBzcy5TZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlkKbliJnnu6fnu63nvZHmoLznp7vliqjvvIzov5nkuZ/kvJrpqbHliqjmlrnlnZfnp7vliqhcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g566A5Y2V55qE56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgIC8vIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBzcy5HYW1lVmVjdG9yLm11bChkdCk7XHJcblxyXG4gICAgICAgICAgICAvLyDnp7vliqjnu4Tku7bnp7vliqjmlrnlvI9cclxuICAgICAgICAgICAgc3MubW92ZW1lbnQuYWRkZm9yY2UgPSBzcy5HYW1lQXV0b1NwZWVkO1xyXG4gICAgICAgICAgICBzcy5tb3ZlbWVudC5hZGREcmFnID0gc3MuR2FtZUF1dG9EcmFnO1xyXG4gICAgICAgICAgICBzcy5tb3ZlbWVudC51cGRhdGVCeVZlbG9jaXR5KGR0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+WHveaVsOmDqOWIhiBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+mHjee9ruWPiuWIneWni+WMliAgXHJcbiAgICAgKiDlvIDlp4vml7bosIPnlKjkuIDmrKFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5a+56b2Q572R5qC8XHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkID0gbmV3IEdyaWRBYnNvcmIoXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHNzLkdhbWVfQ29sdW1uLCBzcy5HYW1lX1JvdzIsIDApLFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyhzcy5DdWJlX3dpZHRoLCBzcy5DdWJlX0hlaWdodCwgMClcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIOi1i+S6iOenu+WKqOe7hOS7tlxyXG4gICAgICAgIHNzLm1vdmVtZW50ID0gbmV3IFBhd25Nb3ZlbWVudChHcmlkQWJzb3JiLmdyaWQpO1xyXG4gICAgICAgIHNzLm1vdmVtZW50Lm1heFNwZWVkID0gc3MuR2FtZVNwZWVkO1xyXG4gICAgICAgIC8vIOiuvue9rue9keagvOi+ueeVjOmUmueCuVxyXG4gICAgICAgIC8vIEdyaWRBYnNvcmIuZ3JpZC5hbmNob3IgPSBuZXcgY2MuVmVjMygwLCAwLCAwKTtcclxuICAgICAgICAvLyDorr7nva7nvZHmoLzotbfngrlcclxuICAgICAgICBHcmlkQWJzb3JiLmdyaWQub2Zmc2V0ID0gc3MuR3JpZE9yaWdpbk9mZnNldDtcclxuXHJcbiAgICAgICAgLy8g6YeN572u572R5qC85oyH6ZKIXHJcbiAgICAgICAgc3MuR3JpZEN1cnJlbnRQb2ludCA9IDA7XHJcblxyXG4gICAgICAgIC8vIOazqOWGjOinpuaRuFxyXG4gICAgICAgIHRoaXMudG91Y2hSZWdpc3RlcigpO1xyXG5cclxuICAgICAgICAvLyDmuIXnkIbmiJjlnLpcclxuICAgICAgICBzcy5lbmRDdWJlR3JvdXAgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVBcmVhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHRoaXMuZ2FtZUFyZWEuY2hpbGRyZW4uZm9yRWFjaChlID0+IHsgZS5kZXN0cm95KCkgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0QXJlYS5jaGlsZHJlbi5sZW5ndGggPiAwKSB0aGlzLmVmZmVjdEFyZWEuY2hpbGRyZW4uZm9yRWFjaChlID0+IHsgZS5kZXN0cm95KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rmlrnlnZfnu4TvvIzlubbmjInpk77liJ3lp4vljJYgIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgU3Bhd25DdWJlR3JvdXBBbmRJbml0KGluZGV4KTogY2MuTm9kZSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyWLOWwhuS4iuS4gOS4que7hOS8oOe7mei/mee7hFxyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5TcGF3bkN1YmVHcm91cCgpO1xyXG4gICAgICAgIC8vIOaPkOS+m+e0ouW8leS7peS+v+WQuOmZhOWIsOe9keagvOS4ilxyXG4gICAgICAgIGxldCBpbnN0Q29tcG9uZW50OiBCbG9ja0dyb3VwID0gaW5zdC5nZXRDb21wb25lbnQoc3MuYmxvY2tHcm91cE5hbWUpO1xyXG4gICAgICAgIC8vIOWIneWni+WMlizlsIbntKLlvJXnu5nliLDov5lcclxuICAgICAgICBpbnN0Q29tcG9uZW50LmluaXQoaW5kZXgsIHRoaXMubGFzdEdyb3VwKTtcclxuICAgICAgICAvLyDnjrDlnKjov5nnu4TmmK/kuIrnu4TkuoZcclxuICAgICAgICB0aGlzLmxhc3RHcm91cCA9IGluc3RDb21wb25lbnQ7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaWueWdl+e7hCBcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNwYXduQ3ViZUdyb3VwKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHNzLlNxdWFyZUdyb3VwLCB0aGlzLmdhbWVBcmVhKTtcclxuICAgICAgICByZXR1cm4gaW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBTcGF3blBsYXllckN1YmUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuU3F1YXJlLCB0aGlzLmdhbWVBcmVhKTtcclxuICAgICAgICAvLyDmj5DkvpvntKLlvJXku6Xkvr/lkLjpmYTliLDnvZHmoLzkuIpcclxuICAgICAgICBpbnN0LmdldENvbXBvbmVudCgnQmxvY2snKS5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOa4uOaIj+e7k+adn+aXtueahOWKqOS9nCAgXHJcbiAgICAqIOa4uOaIj+e7k+adn+aXtuiwg+eUqOS4gOasoVxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBnYW1lT3ZlcigpIHtcclxuICAgICAgICAvLyDmmoLlgZzop6bmkbhcclxuICAgICAgICAvLyBjY3Z2LmxheWVyc1swXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICBzcy5tZW51LmdhbWVPdmVyKClcclxuXHJcbiAgICAgICAgbGV0IGFsbENoaWxkcmVuID0gdGhpcy5sYXN0R3JvdXAuZmluZEFsbENoaWxkcmVuKHRoaXMubGFzdEdyb3VwKTtcclxuICAgICAgICAvLyDkuIDkuKrkuIDkuKrnoLTmjonnmoTmlYjmnpxcclxuICAgICAgICBsZXQgYWxsQ2hpbGRyZW5Db3VudCA9IGFsbENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBjYy5sb2coYWxsQ2hpbGRyZW4pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWxsQ2hpbGRyZW5Db3VudC0tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzQWN0ID0gYWxsQ2hpbGRyZW5bYWxsQ2hpbGRyZW5Db3VudF07XHJcbiAgICAgICAgICAgICAgICBkZXNBY3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrTmFtZSkuZGVzdHJveVdpdGhBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgc3MubWVudS5vcGVuTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgLjA4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+inpuaRuOS6i+S7tlxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaFJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjY3Z2LmxheWVyc1swXS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHJlYWR5VG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2hBcmVhID0gZXZlbnQuZ2V0TG9jYXRpb24oKS54IC8gc3MuQ3ViZV93aWR0aDtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuU3Bhd25QbGF5ZXJDdWJlKCk7XHJcbiAgICAgICAgbGV0IGlueCA9IE1hdGguY2VpbCh0b3VjaEFyZWEpICogKHNzLkN1YmVfd2lkdGggKyBzcy5DdWJlX0ludGVyYXZhbCkgLSAoKGNjLndpblNpemUud2lkdGggKyBzcy5DdWJlX3dpZHRoKSAvIDIpO1xyXG4gICAgICAgIC8vIGxldCBpbnggPSBNYXRoLmNlaWwodG91Y2hBcmVhKSAqIDE3NyAtICgoY2Mud2luU2l6ZS53aWR0aCArIHNzLkN1YmVfd2lkdGgpIC8gMikgLSA1XHJcbiAgICAgICAgaW5zdC5zZXRQb3NpdGlvbihpbngsIHNzLlNlcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyB0YWcg54m55pWI5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yaw5Ya754m55pWIICBcclxuICAgICAqIOi1i+S6iOS4pOWAjemYu+WKm1xyXG4gICAgICovXHJcbiAgICBpY2UoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuRWZmZWN0X0ljZSwgdGhpcy5lZmZlY3RBcmVhKTtcclxuICAgICAgICBzcy5tb3ZlbWVudC5wZXJtRHJhZyA9IDI7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBzcy5tb3ZlbWVudC5wZXJtRHJhZyA9IDA7XHJcbiAgICAgICAgfSwgc3MuaWNlX0R1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Ye76YCA54m55pWIICBcclxuICAgICAqIOi1i+S6iOS4gOS4quWPjeaWueWQkeeahOWKmyAgXHJcbiAgICAgKi9cclxuICAgIGhpdCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5FZmZlY3RfSGl0LCB0aGlzLmVmZmVjdEFyZWEpO1xyXG4gICAgICAgIGluc3Quc2V0UG9zaXRpb24oc3MuZW5kQ3ViZUdyb3VwLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgc3MubW92ZW1lbnQuYWRkZm9yY2UgPSBuZXcgY2MuVmVjMigwLCBzcy5oaXRfRm9yY2UpO1xyXG4gICAgICAgIHNzLm1vdmVtZW50LmRyYWcgPSAwO1xyXG4gICAgICAgIHNzLm1vdmVtZW50Lm1heFNwZWVkID0gc3MuR2FtZVNwZWVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXlsY/nibnmlYggIFxyXG4gICAgICog5bCG5bGP5bmV5YaF55qE5omA5pyJ5pa55Z2X6YO96L+b6KGM5riF55CG77yM5L2/55So55qE5piv5pa55Z2X6Ieq6Lqr55qE5raI6Zmk5pa55rOV77yM5omA5Lul5Lmf5Lya5pKt5pS+6ZSA5q+B54m55pWIXHJcbiAgICAgKi9cclxuICAgIGJvb20oKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuRWZmZWN0X0Jvb20sIHRoaXMuZWZmZWN0QXJlYSk7XHJcbiAgICAgICAgc3MuZW5kQ3ViZUdyb3VwID0gdGhpcy5sYXN0R3JvdXAubmV4dEdyb3VwO1xyXG4gICAgICAgIHRoaXMubGFzdEdyb3VwLmRlc3Ryb3lNZW1iZXJzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5Z+65pys5pON5L2c5Ye95pWwIFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBjcmVhdCBpbnN0YW50aWF0ZVxyXG4gICAgKiBAcGFyYW0ge2NjLlByZWZhYn0gYWN0b3Ig5a6e5L6L5YyW55qE55uu5qCHXHJcbiAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcGFyZW50IOWunuS+i+WMlueahOWvueixoeWwhuimgemZhOWKoOeahOebruagh++8jOWmguaenOeVmeepuuWImeS4uuiHqui6q1xyXG4gICAgKiBAcmV0dXJucyBcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRBY3RvcihhY3RvcjogY2MuUHJlZmFiLCBwYXJlbnQ/OiBjYy5Ob2RlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGFjdG9ySW5zdCA9IGNjLmluc3RhbnRpYXRlKGFjdG9yKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7IHBhcmVudC5hZGRDaGlsZChhY3Rvckluc3QpOyB9XHJcbiAgICAgICAgZWxzZSB7IHRoaXMubm9kZS5hZGRDaGlsZChhY3Rvckluc3QpOyBjYy5sb2coYWN0b3JJbnN0KSB9XHJcbiAgICAgICAgcmV0dXJuIGFjdG9ySW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA57uE6K+e55Sf57uEXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsYXN0R3JvdXA6IEJsb2NrR3JvdXAgPSBudWxsO1xyXG59XHJcbiJdfQ==
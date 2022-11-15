
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
        _this.readyTouch = false;
        /**
         * 上一组诞生组
         */
        _this.lastGroup = null;
        /**
         * 全部子项，这在平时是没有用的
         */
        _this.allChildren = null;
        /**
         * 计数器，用于辅助上面的属性
         */
        _this.allChildrenCount = 0;
        return _this;
    }
    // tag LIFE-CYCLE CALLBACKS:
    // onLoad() {}
    GameLevel.prototype.onEnable = function () {
        // 基本初始化
        this.init();
    };
    // start() {}
    GameLevel.prototype.update = function (dt) {
        var _this = this;
        // 如果目标位置小于一定时，创建方块
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(Setting_1.default.GridCurrentPointToVec);
        if (pos.y <= cc.winSize.height / 2) {
            this.SpawnCubeGroupAndInit(Setting_1.default.GridPointer);
        }
        // 如果最后一行小于一定时，结束游戏
        if (Setting_1.default.endCubeGroup && Setting_1.default.endCubeGroup.node.y < Setting_1.default.Separator) {
            if (!this.allChildren) {
                this.allChildren = this.lastGroup.findAllChildren(this.lastGroup);
                // 一个一个破掉
                this.allChildrenCount = this.allChildren.length;
                cc.log(this.allChildren);
                this.schedule(function () {
                    if (_this.allChildrenCount--) {
                        var desAct = _this.allChildren[_this.allChildrenCount];
                        desAct.getComponent(Setting_1.default.blockName).destroyWithAnimation();
                    }
                    else {
                        _this.unscheduleAllCallbacks();
                        Setting_1.default.menu.gameOver();
                    }
                }, .08);
            }
        }
        // 否则继续网格移动，这也会驱动方块移动
        else {
            GridAdsorb_1.default.grid.offset = Setting_1.default.GameVector.mul(dt);
        }
    };
    // tag 用户函数部分 
    /**
     * 游戏重置及初始化
     */
    GameLevel.prototype.init = function () {
        // 初始化对齐网格
        GridAdsorb_1.default.grid = new GridAdsorb_1.default(new cc.Vec3(Setting_1.default.Game_Column, Setting_1.default.Game_Row2, 0), new cc.Vec3(Setting_1.default.Cube_width, Setting_1.default.Cube_Height, 0));
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
        // 清理战场
        if (this.allChildren)
            this.allChildren.forEach(function (e) { e.destroy(); });
        this.allChildren = null;
        if (this.gameArea.children.length > 0)
            this.gameArea.children.forEach(function (e) { e.destroy(); });
        this.allChildrenCount = 0;
        Setting_1.default.endCubeGroup = null;
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
    // tag 特效方法 
    GameLevel.prototype.ice = function () {
    };
    GameLevel.prototype.hit = function () {
    };
    GameLevel.prototype.boom = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRyxzREFBaUQ7QUFFakQscUNBQTJCO0FBQ3JCLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBQy9EOzs7OztHQUtHO0FBR0g7SUFBdUMsNkJBQVk7SUFEbkQscUJBQXFCO0lBQ3JCO1FBQUEscUVBbUtDO1FBaEtHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFpSGYsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFtQ3RDOztXQUVHO1FBQ08sZUFBUyxHQUFlLElBQUksQ0FBQztRQUN2Qzs7V0FFRztRQUNPLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQ3hDOztXQUVHO1FBQ08sc0JBQWdCLEdBQVcsQ0FBQyxDQUFDOztJQUMzQyxDQUFDO0lBOUpHLDRCQUE0QjtJQUU1QixjQUFjO0lBRWQsNEJBQVEsR0FBUjtRQUNJLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWE7SUFFYiwwQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUFULGlCQXVCQztRQXRCRyxtQkFBbUI7UUFDbkIsSUFBSSxHQUFHLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNFLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUFFO1FBQ25GLG1CQUFtQjtRQUNuQixJQUFJLGlCQUFFLENBQUMsWUFBWSxJQUFJLGlC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SUFuSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUhSLFNBQVM7UUFGN0IsT0FBTztRQUNSLHFCQUFxQjtPQUNBLFNBQVMsQ0FtSzdCO0lBQUQsZ0JBQUM7Q0FuS0QsQUFtS0MsQ0FuS3NDLEVBQUUsQ0FBQyxTQUFTLEdBbUtsRDtrQkFuS29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgQmxvY2tHcm91cCBmcm9tICcuL0Jsb2NrR3JvdXAnO1xyXG5pbXBvcnQgc3MgZnJvbSBcIi4vU2V0dGluZ1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIOWvueS6juWFs+WNoeiTneWbvuS4reeahOWPguaVsO+8jOmDveWumuS5ieWcqOiuvue9ruS4rVxyXG4gKiDogIzlhbbku5bok53lm77kuK3nmoTlj4LmlbDliJnkvJrmlL7nva7lnKjlhbbmnIDlvLrlhbPogZTlpITvvIzmr5TlpoLoh6rlt7HmnKzouqvnmoTnsbvlhoVcclxuICog6ICM6YOo5YiG5Zyw5pa55Y+v6IO95Lya55So5Yiw5YWo5bGA5bel5YW355qE6YOo5YiG77yM5Y+v5Lul5pS55Li65Lul6K6+572u57G75YWo5bGA55qE5qih5byP77yM5YWo5bGA5bel5YW35piv5pen5pa55rOVXHJcbiAqIOWFs+S6juWFqOWxgOW3peWFt+eahOeUqOazle+8jOWPr+S7peWPguiAg2Rpc2NhcmQt5qCH6K6w55qE5paH5Lu277yM5LuW5Lus5piv5bey57uP56Gu5a6a5bqf5byD55qE55So5rOVXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyB0YWcgTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICAvLyDln7rmnKzliJ3lp4vljJZcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCgpIHt9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g5aaC5p6c55uu5qCH5L2N572u5bCP5LqO5LiA5a6a5pe277yM5Yib5bu65pa55Z2XXHJcbiAgICAgICAgbGV0IHBvcyA9IEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KHNzLkdyaWRDdXJyZW50UG9pbnRUb1ZlYyk7XHJcbiAgICAgICAgaWYgKHBvcy55IDw9IGNjLndpblNpemUuaGVpZ2h0IC8gMikgeyB0aGlzLlNwYXduQ3ViZUdyb3VwQW5kSW5pdChzcy5HcmlkUG9pbnRlcik7IH1cclxuICAgICAgICAvLyDlpoLmnpzmnIDlkI7kuIDooYzlsI/kuo7kuIDlrprml7bvvIznu5PmnZ/muLjmiI9cclxuICAgICAgICBpZiAoc3MuZW5kQ3ViZUdyb3VwICYmIHNzLmVuZEN1YmVHcm91cC5ub2RlLnkgPCBzcy5TZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbENoaWxkcmVuID0gdGhpcy5sYXN0R3JvdXAuZmluZEFsbENoaWxkcmVuKHRoaXMubGFzdEdyb3VwKTtcclxuICAgICAgICAgICAgICAgIC8vIOS4gOS4quS4gOS4quegtOaOiVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxDaGlsZHJlbkNvdW50ID0gdGhpcy5hbGxDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2codGhpcy5hbGxDaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbGxDaGlsZHJlbkNvdW50LS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc0FjdCA9IHRoaXMuYWxsQ2hpbGRyZW5bdGhpcy5hbGxDaGlsZHJlbkNvdW50XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzQWN0LmdldENvbXBvbmVudChzcy5ibG9ja05hbWUpLmRlc3Ryb3lXaXRoQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7IHNzLm1lbnUuZ2FtZU92ZXIoKSB9XHJcbiAgICAgICAgICAgICAgICB9LCAuMDgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWQpuWImee7p+e7ree9keagvOenu+WKqO+8jOi/meS5n+S8mumpseWKqOaWueWdl+enu+WKqFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBHcmlkQWJzb3JiLmdyaWQub2Zmc2V0ID0gc3MuR2FtZVZlY3Rvci5tdWwoZHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35Ye95pWw6YOo5YiGIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP6YeN572u5Y+K5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOWIneWni+WMluWvuem9kOe9keagvFxyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZCA9IG5ldyBHcmlkQWJzb3JiKFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyhzcy5HYW1lX0NvbHVtbiwgc3MuR2FtZV9Sb3cyLCAwKSxcclxuICAgICAgICAgICAgbmV3IGNjLlZlYzMoc3MuQ3ViZV93aWR0aCwgc3MuQ3ViZV9IZWlnaHQsIDApXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gR3JpZEFic29yYi5ncmlkLmFuY2hvciA9IG5ldyBjYy5WZWMzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vIOmHjee9rue9keagvOaMh+mSiFxyXG4gICAgICAgIHNzLkdyaWRDdXJyZW50UG9pbnQgPSAwO1xyXG4gICAgICAgIC8vIOiuvue9rue9keagvOi1t+eCuVxyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBzcy5HcmlkT3JpZ2luT2Zmc2V0O1xyXG4gICAgICAgIC8vIOaPkOWNh+iEmuacrO+8jOWBt+aHklxyXG4gICAgICAgIGNjdnYuc2NyaXB0ID0gdGhpcztcclxuICAgICAgICAvLyDms6jlhozop6bmkbhcclxuICAgICAgICB0aGlzLnRvdWNoUmVnaXN0ZXIoKTtcclxuICAgICAgICAvLyDmuIXnkIbmiJjlnLpcclxuICAgICAgICBpZiAodGhpcy5hbGxDaGlsZHJlbikgdGhpcy5hbGxDaGlsZHJlbi5mb3JFYWNoKGUgPT4geyBlLmRlc3Ryb3koKSB9KTtcclxuICAgICAgICB0aGlzLmFsbENoaWxkcmVuID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5nYW1lQXJlYS5jaGlsZHJlbi5sZW5ndGggPiAwKSB0aGlzLmdhbWVBcmVhLmNoaWxkcmVuLmZvckVhY2goZSA9PiB7IGUuZGVzdHJveSgpIH0pO1xyXG4gICAgICAgIHRoaXMuYWxsQ2hpbGRyZW5Db3VudCA9IDA7XHJcbiAgICAgICAgc3MuZW5kQ3ViZUdyb3VwID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaWueWdl+e7hO+8jOW5tuaMiemTvuWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgU3Bhd25DdWJlR3JvdXBBbmRJbml0KGluZGV4KTogY2MuTm9kZSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyWLOWwhuS4iuS4gOS4que7hOS8oOe7mei/mee7hFxyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHNzLlNxdWFyZUdyb3VwLCB0aGlzLmdhbWVBcmVhKTtcclxuICAgICAgICAvLyDmj5DkvpvntKLlvJXku6Xkvr/lkLjpmYTliLDnvZHmoLzkuIpcclxuICAgICAgICBsZXQgaW5zdENvbXBvbmVudDogQmxvY2tHcm91cCA9IGluc3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrR3JvdXBOYW1lKTtcclxuICAgICAgICAvLyDliJ3lp4vljJYs5bCG57Si5byV57uZ5Yiw6L+ZXHJcbiAgICAgICAgaW5zdENvbXBvbmVudC5pbml0KGluZGV4LCB0aGlzLmxhc3RHcm91cCk7XHJcbiAgICAgICAgLy8g546w5Zyo6L+Z57uE5piv5LiK57uE5LqGXHJcbiAgICAgICAgdGhpcy5sYXN0R3JvdXAgPSBpbnN0Q29tcG9uZW50O1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpJbpg6jliJvlu7rmlrnlnZfnu4QgXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTcGF3bkN1YmVHcm91cCgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5TcXVhcmVHcm91cCwgdGhpcy5nYW1lQXJlYSk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgU3Bhd25QbGF5ZXJDdWJlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHNzLlNxdWFyZSwgdGhpcy5nYW1lQXJlYSk7XHJcbiAgICAgICAgLy8g5o+Q5L6b57Si5byV5Lul5L6/5ZC46ZmE5Yiw572R5qC85LiKXHJcbiAgICAgICAgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaFJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHJlYWR5VG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2hBcmVhID0gZXZlbnQuZ2V0TG9jYXRpb24oKS54IC8gc3MuQ3ViZV93aWR0aDtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuU3Bhd25QbGF5ZXJDdWJlKCk7XHJcbiAgICAgICAgbGV0IGlueCA9IE1hdGguY2VpbCh0b3VjaEFyZWEpICogKHNzLkN1YmVfd2lkdGggKyBzcy5DdWJlX0ludGVyYXZhbCkgLSAoKGNjLndpblNpemUud2lkdGggKyBzcy5DdWJlX3dpZHRoKSAvIDIpO1xyXG4gICAgICAgIC8vIGxldCBpbnggPSBNYXRoLmNlaWwodG91Y2hBcmVhKSAqIDE3NyAtICgoY2Mud2luU2l6ZS53aWR0aCArIHNzLkN1YmVfd2lkdGgpIC8gMikgLSA1XHJcbiAgICAgICAgaW5zdC5zZXRQb3NpdGlvbihpbngsIHNzLlNlcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOeJueaViOaWueazlSBcclxuXHJcbiAgICBpY2UoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG4gICAgaGl0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIGJvb20oKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDln7rmnKzmk43kvZzlh73mlbAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIGNyZWF0IGluc3RhbnRpYXRlXHJcbiAgICAqIEBwYXJhbSB7Y2MuUHJlZmFifSBhY3RvciDlrp7kvovljJbnmoTnm67moIdcclxuICAgICogQHBhcmFtIHtjYy5Ob2RlfSBwYXJlbnQg5a6e5L6L5YyW55qE5a+56LGh5bCG6KaB6ZmE5Yqg55qE55uu5qCH77yM5aaC5p6c55WZ56m65YiZ5Li66Ieq6LqrXHJcbiAgICAqIEByZXR1cm5zIFxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdEFjdG9yKGFjdG9yOiBjYy5QcmVmYWIsIHBhcmVudD86IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0ID0gY2MuaW5zdGFudGlhdGUoYWN0b3IpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHsgcGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5ub2RlLmFkZENoaWxkKGFjdG9ySW5zdCk7IGNjLmxvZyhhY3Rvckluc3QpIH1cclxuICAgICAgICByZXR1cm4gYWN0b3JJbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrkuIDnu4Tor57nlJ/nu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxhc3RHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOWFqOmDqOWtkOmhue+8jOi/meWcqOW5s+aXtuaYr+ayoeacieeUqOeahFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWxsQ2hpbGRyZW46IGNjLk5vZGVbXSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiuoeaVsOWZqO+8jOeUqOS6jui+heWKqeS4iumdoueahOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWxsQ2hpbGRyZW5Db3VudDogbnVtYmVyID0gMDtcclxufVxyXG4iXX0=
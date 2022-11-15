
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
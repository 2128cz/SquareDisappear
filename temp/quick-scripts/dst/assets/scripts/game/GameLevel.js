
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
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var GameLevel = /** @class */ (function (_super) {
    __extends(GameLevel, _super);
    // @executeInEditMode
    function GameLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameArea = null;
        return _this;
    }
    // tag LIFE-CYCLE CALLBACKS:
    GameLevel.prototype.onLoad = function () {
        // 初始化对齐网格
        new GridAdsorb_1.default(new cc.Vec3(Setting_1.default.Game_Column, Setting_1.default.Game_Row2, 0), new cc.Vec3(Setting_1.default.Cube_width, Setting_1.default.Cube_Height, 0));
        // 基本初始化
        this.init();
    };
    // start() {}
    GameLevel.prototype.update = function (dt) {
        // 如果目标位置小于一定时，创建方块
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(Setting_1.default.GridCurrentPointToVec);
        if (pos.y <= cc.winSize.height / 2) {
            cc.log(cc.winSize.height / 2, pos.y);
            this.SpawnCubeGroup(Setting_1.default.GridPointer);
        }
        // 网格移动，这也会驱动方块移动
        GridAdsorb_1.default.grid.offset = Setting_1.default.GameVector.mul(dt);
    };
    // tag 用户函数部分 
    /**
     * 游戏重置及初始化
     */
    GameLevel.prototype.init = function () {
        // 重置网格指针
        Setting_1.default.GridCurrentPoint = 0;
        GridAdsorb_1.default.grid.offset = new cc.Vec3(0, cc.winSize.height / 2, 0);
    };
    /**
     * 创建方块组
     */
    GameLevel.prototype.SpawnCubeGroup = function (index) {
        var inst = this.creatActor(Setting_1.default.SquareGroup, this.gameArea);
        // 提供索引以便吸附到网格上
        inst.getComponent('BlockGroup').init(index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUFpRDtBQUNqRCxxQ0FBMkI7QUFDckIsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFJL0Q7SUFBdUMsNkJBQVk7SUFEbkQscUJBQXFCO0lBQ3JCO1FBQUEscUVBcUVDO1FBbEVHLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBa0U3QixDQUFDO0lBaEVHLDRCQUE0QjtJQUU1QiwwQkFBTSxHQUFOO1FBQ0ksVUFBVTtRQUNWLElBQUksb0JBQVUsQ0FDVixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQUUsQ0FBQyxXQUFXLEVBQUUsaUJBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQzVDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBRSxDQUFDLFVBQVUsRUFBRSxpQkFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FDaEQsQ0FBQztRQUNGLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWE7SUFFYiwwQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLG1CQUFtQjtRQUNuQixJQUFJLEdBQUcsR0FBRyxvQkFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0UsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsaUJBQWlCO1FBQ2pCLG9CQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGNBQWM7SUFFZDs7T0FFRztJQUNPLHdCQUFJLEdBQWQ7UUFDSSxTQUFTO1FBQ1QsaUJBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDeEIsb0JBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFRDs7T0FFRztJQUNPLGtDQUFjLEdBQXhCLFVBQXlCLEtBQUs7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsZUFBZTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFJRCxhQUFhO0lBRWI7Ozs7O01BS0U7SUFDUSw4QkFBVSxHQUFwQixVQUFxQixLQUFnQixFQUFFLE1BQWdCO1FBQ25ELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQUU7YUFDdEM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7U0FBRTtRQUN6RCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBaEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFIUixTQUFTO1FBRjdCLE9BQU87UUFDUixxQkFBcUI7T0FDQSxTQUFTLENBcUU3QjtJQUFELGdCQUFDO0NBckVELEFBcUVDLENBckVzQyxFQUFFLENBQUMsU0FBUyxHQXFFbEQ7a0JBckVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IHNzIGZyb20gXCIuL1NldHRpbmdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyB0YWcgTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMluWvuem9kOe9keagvFxyXG4gICAgICAgIG5ldyBHcmlkQWJzb3JiKFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyhzcy5HYW1lX0NvbHVtbiwgc3MuR2FtZV9Sb3cyLCAwKSxcclxuICAgICAgICAgICAgbmV3IGNjLlZlYzMoc3MuQ3ViZV93aWR0aCwgc3MuQ3ViZV9IZWlnaHQsIDApXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDln7rmnKzliJ3lp4vljJZcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCgpIHt9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g5aaC5p6c55uu5qCH5L2N572u5bCP5LqO5LiA5a6a5pe277yM5Yib5bu65pa55Z2XXHJcbiAgICAgICAgbGV0IHBvcyA9IEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KHNzLkdyaWRDdXJyZW50UG9pbnRUb1ZlYyk7XHJcbiAgICAgICAgaWYgKHBvcy55IDw9IGNjLndpblNpemUuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICBjYy5sb2coY2Mud2luU2l6ZS5oZWlnaHQgLyAyLCBwb3MueSk7XHJcbiAgICAgICAgICAgIHRoaXMuU3Bhd25DdWJlR3JvdXAoc3MuR3JpZFBvaW50ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g572R5qC856e75Yqo77yM6L+Z5Lmf5Lya6amx5Yqo5pa55Z2X56e75YqoXHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IHNzLkdhbWVWZWN0b3IubXVsKGR0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35Ye95pWw6YOo5YiGIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP6YeN572u5Y+K5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmHjee9rue9keagvOaMh+mSiFxyXG4gICAgICAgIHNzLkdyaWRDdXJyZW50UG9pbnQgPSAwO1xyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBuZXcgY2MuVmVjMygwLCBjYy53aW5TaXplLmhlaWdodCAvIDIsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaWueWdl+e7hFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgU3Bhd25DdWJlR3JvdXAoaW5kZXgpIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5TcXVhcmVHcm91cCwgdGhpcy5nYW1lQXJlYSk7XHJcbiAgICAgICAgLy8g5o+Q5L6b57Si5byV5Lul5L6/5ZC46ZmE5Yiw572R5qC85LiKXHJcbiAgICAgICAgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrR3JvdXAnKS5pbml0KGluZGV4KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHRhZyDln7rmnKzmk43kvZzlh73mlbBcclxuXHJcbiAgICAvKipcclxuICAgICogY3JlYXQgaW5zdGFudGlhdGVcclxuICAgICogQHBhcmFtIHtjYy5QcmVmYWJ9IGFjdG9yIOWunuS+i+WMlueahOebruagh1xyXG4gICAgKiBAcGFyYW0ge2NjLk5vZGV9IHBhcmVudCDlrp7kvovljJbnmoTlr7nosaHlsIbopoHpmYTliqDnmoTnm67moIfvvIzlpoLmnpznlZnnqbrliJnkuLroh6rouqtcclxuICAgICogQHJldHVybnMgXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0QWN0b3IoYWN0b3I6IGNjLlByZWZhYiwgcGFyZW50PzogY2MuTm9kZSk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBhY3Rvckluc3QgPSBjYy5pbnN0YW50aWF0ZShhY3Rvcik7XHJcbiAgICAgICAgaWYgKHBhcmVudCkgeyBwYXJlbnQuYWRkQ2hpbGQoYWN0b3JJbnN0KTsgfVxyXG4gICAgICAgIGVsc2UgeyB0aGlzLm5vZGUuYWRkQ2hpbGQoYWN0b3JJbnN0KTsgY2MubG9nKGFjdG9ySW5zdCkgfVxyXG4gICAgICAgIHJldHVybiBhY3Rvckluc3Q7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
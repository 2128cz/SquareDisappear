
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/MenuLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1125avi8cJK9IZsYBVHeJiG', 'MenuLevel');
// scripts/game/MenuLevel.ts

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
var SoundPlayer_1 = require("../base/tool/SoundPlayer");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuLevel = /** @class */ (function (_super) {
    __extends(MenuLevel, _super);
    function MenuLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuLevel.prototype.onLoad = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = true;
        Setting_1.default.menu = this;
    };
    MenuLevel.prototype.start = function () {
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_bgm);
    };
    // update (dt) {}
    // tag 用户逻辑
    /**
     * 游戏开始
     */
    MenuLevel.prototype.gameStart = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = false;
    };
    /**
     * 游戏结束
     */
    MenuLevel.prototype.gameOver = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = false;
    };
    /**
    * 打开菜单
    */
    MenuLevel.prototype.openMenu = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = true;
    };
    // tag 按钮事件 
    MenuLevel.prototype.onButtonClick = function (event, cusData) {
        this[cusData]();
    };
    MenuLevel.prototype.onMusic = function () {
    };
    MenuLevel.prototype.onShare = function () {
    };
    MenuLevel.prototype.onStart = function () {
        this.gameStart();
    };
    MenuLevel = __decorate([
        ccclass
    ], MenuLevel);
    return MenuLevel;
}(cc.Component));
exports.default = MenuLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcTWVudUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRix3REFBdUQ7QUFDdkQscUNBQTJCO0FBRXJCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EOztJQW1FQSxDQUFDO0lBakVHLDBCQUFNLEdBQU47UUFDSSwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLGlCQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUduQixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLElBQUkseUJBQVcsQ0FBQyxpQkFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxpQkFBaUI7SUFFakIsV0FBVztJQUVYOztPQUVHO0lBQ0ksNkJBQVMsR0FBaEI7UUFDSSwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNJLDRCQUFRLEdBQWY7UUFDSSwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7TUFFRTtJQUNLLDRCQUFRLEdBQWY7UUFDSSwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZO0lBRUwsaUNBQWEsR0FBcEIsVUFBcUIsS0FBSyxFQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7SUFFQSxDQUFDO0lBRU0sMkJBQU8sR0FBZDtJQUVBLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFsRWdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FtRTdCO0lBQUQsZ0JBQUM7Q0FuRUQsQUFtRUMsQ0FuRXNDLEVBQUUsQ0FBQyxTQUFTLEdBbUVsRDtrQkFuRW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSBcIi4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWxcIjtcclxuaW1wb3J0IHsgU291bmRQbGF5ZXIgfSBmcm9tIFwiLi4vYmFzZS90b29sL1NvdW5kUGxheWVyXCI7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1sxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1syXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1szXS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBzcy5tZW51ID0gdGhpcztcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9iZ20pO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICAvLyB0YWcg55So5oi36YC76L6RXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/lvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdhbWVTdGFydCgpIHtcclxuICAgICAgICBjY3Z2LmxheWVyc1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2N2di5sYXllcnNbM10uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/nu5PmnZ9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1syXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzNdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmiZPlvIDoj5zljZVcclxuICAgICovXHJcbiAgICBwdWJsaWMgb3Blbk1lbnUoKSB7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1sxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1syXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1szXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDmjInpkq7kuovku7YgXHJcblxyXG4gICAgcHVibGljIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c0RhdGEpIHtcclxuICAgICAgICB0aGlzW2N1c0RhdGFdKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTXVzaWMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNoYXJlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVTdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
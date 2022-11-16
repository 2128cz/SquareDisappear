
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
    // start () {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcTWVudUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRixxQ0FBMkI7QUFFckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBK0RBLENBQUM7SUE3REcsMEJBQU0sR0FBTjtRQUNJLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFN0IsaUJBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxjQUFjO0lBQ2QsaUJBQWlCO0lBRWpCLFdBQVc7SUFFWDs7T0FFRztJQUNJLDZCQUFTLEdBQWhCO1FBQ0ksMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSw0QkFBUSxHQUFmO1FBQ0ksMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O01BRUU7SUFDSyw0QkFBUSxHQUFmO1FBQ0ksMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsWUFBWTtJQUVMLGlDQUFhLEdBQXBCLFVBQXFCLEtBQUssRUFBRSxPQUFPO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSwyQkFBTyxHQUFkO0lBRUEsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7SUFFQSxDQUFDO0lBRU0sMkJBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBOURnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0Q3QjtJQUFELGdCQUFDO0NBL0RELEFBK0RDLENBL0RzQyxFQUFFLENBQUMsU0FBUyxHQStEbEQ7a0JBL0RvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gXCIuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsXCI7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1sxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1syXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1szXS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBzcy5tZW51ID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCAoKSB7fVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICAvLyB0YWcg55So5oi36YC76L6RXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/lvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdhbWVTdGFydCgpIHtcclxuICAgICAgICBjY3Z2LmxheWVyc1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2N2di5sYXllcnNbM10uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/nu5PmnZ9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1syXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzNdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmiZPlvIDoj5zljZVcclxuICAgICovXHJcbiAgICBwdWJsaWMgb3Blbk1lbnUoKSB7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1sxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1syXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1szXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDmjInpkq7kuovku7YgXHJcblxyXG4gICAgcHVibGljIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c0RhdGEpIHtcclxuICAgICAgICB0aGlzW2N1c0RhdGFdKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTXVzaWMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNoYXJlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVTdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
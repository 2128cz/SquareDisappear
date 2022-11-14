
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
    function GameLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GameLevel.prototype.onLoad = function () {
        // 初始化对齐网格
        new GridAdsorb_1.default(new cc.Vec3(Setting_1.default.Game_Column, Setting_1.default.Game_Row2, 0), new cc.Vec3(Setting_1.default.Cube_width, Setting_1.default.Cube_Height, 0));
        // 基本初始化
        this.init();
    };
    GameLevel.prototype.start = function () {
    };
    // update (dt) {}
    // tag 用户函数部分 
    /**
     * 游戏重置及初始化
     */
    GameLevel.prototype.init = function () {
        // 重置网格指针
        Setting_1.default.GridCurrentPoint = 0;
    };
    __decorate([
        property(cc.Label)
    ], GameLevel.prototype, "label", void 0);
    __decorate([
        property
    ], GameLevel.prototype, "text", void 0);
    GameLevel = __decorate([
        ccclass,
        executeInEditMode
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUFpRDtBQUNqRCxxQ0FBMkI7QUFDckIsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFJL0Q7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF1Q0M7UUFwQ0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztJQWlDM0IsQ0FBQztJQS9CRyx3QkFBd0I7SUFFeEIsMEJBQU0sR0FBTjtRQUNJLFVBQVU7UUFDVixJQUFJLG9CQUFVLENBQ1YsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFFLENBQUMsV0FBVyxFQUFFLGlCQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUM1QyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQUUsQ0FBQyxVQUFVLEVBQUUsaUJBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQ2hELENBQUM7UUFDRixRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixjQUFjO0lBRWQ7O09BRUc7SUFDTyx3QkFBSSxHQUFkO1FBQ0ksU0FBUztRQUNULGlCQUFFLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBRTVCLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUd2QjtRQURDLFFBQVE7MkNBQ2M7SUFOTixTQUFTO1FBRjdCLE9BQU87UUFDUCxpQkFBaUI7T0FDRyxTQUFTLENBdUM3QjtJQUFELGdCQUFDO0NBdkNELEFBdUNDLENBdkNzQyxFQUFFLENBQUMsU0FBUyxHQXVDbEQ7a0JBdkNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IHNzIGZyb20gXCIuL1NldHRpbmdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5a+56b2Q572R5qC8XHJcbiAgICAgICAgbmV3IEdyaWRBYnNvcmIoXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHNzLkdhbWVfQ29sdW1uLCBzcy5HYW1lX1JvdzIsIDApLFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyhzcy5DdWJlX3dpZHRoLCBzcy5DdWJlX0hlaWdodCwgMClcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIOWfuuacrOWIneWni+WMllxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflh73mlbDpg6jliIYgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ph43nva7lj4rliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6YeN572u572R5qC85oyH6ZKIXHJcbiAgICAgICAgc3MuR3JpZEN1cnJlbnRQb2ludCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxufVxyXG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/effect/PlayDraAniAndDestory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73332y62LZEeovkfyeA889n', 'PlayDraAniAndDestory');
// scripts/game/effect/PlayDraAniAndDestory.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayAnimationAndDestroy = /** @class */ (function (_super) {
    __extends(PlayAnimationAndDestroy, _super);
    function PlayAnimationAndDestroy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyTime = .3;
        return _this;
    }
    PlayAnimationAndDestroy.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.node.destroy(); }, this.destroyTime);
    };
    __decorate([
        property(cc.Float)
    ], PlayAnimationAndDestroy.prototype, "destroyTime", void 0);
    PlayAnimationAndDestroy = __decorate([
        ccclass
    ], PlayAnimationAndDestroy);
    return PlayAnimationAndDestroy;
}(cc.Component));
exports.default = PlayAnimationAndDestroy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZWZmZWN0XFxQbGF5RHJhQW5pQW5kRGVzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQVFDO1FBTkcsaUJBQVcsR0FBVyxFQUFFLENBQUM7O0lBTTdCLENBQUM7SUFKRyx1Q0FBSyxHQUFMO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0VBQ007SUFGUix1QkFBdUI7UUFEM0MsT0FBTztPQUNhLHVCQUF1QixDQVEzQztJQUFELDhCQUFDO0NBUkQsQUFRQyxDQVJvRCxFQUFFLENBQUMsU0FBUyxHQVFoRTtrQkFSb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNzIGZyb20gXCIuLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUFuaW1hdGlvbkFuZERlc3Ryb3kgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgZGVzdHJveVRpbWU6IG51bWJlciA9IC4zO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5ub2RlLmRlc3Ryb3koKSB9LCB0aGlzLmRlc3Ryb3lUaW1lKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=

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
        // todo 播放音乐
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_bgm, 1, .5);
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
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_lose);
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
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_btnn);
    };
    MenuLevel.prototype.onShare = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_btnn);
    };
    MenuLevel.prototype.onStart = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_btny);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcTWVudUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRix3REFBdUQ7QUFDdkQscUNBQTJCO0FBRXJCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EOztJQTJFQSxDQUFDO0lBekVHLDBCQUFNLEdBQU47UUFDSSwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLGlCQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUduQixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLFlBQVk7UUFDWixJQUFJLHlCQUFXLENBQUMsaUJBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxpQkFBaUI7SUFFakIsV0FBVztJQUVYOztPQUVHO0lBQ0ksNkJBQVMsR0FBaEI7UUFDSSwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNJLDRCQUFRLEdBQWY7UUFDSSxZQUFZO1FBQ1osSUFBSSx5QkFBVyxDQUFDLGlCQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O01BRUU7SUFDSyw0QkFBUSxHQUFmO1FBQ0ksMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsWUFBWTtJQUVMLGlDQUFhLEdBQXBCLFVBQXFCLEtBQUssRUFBRSxPQUFPO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksWUFBWTtRQUNaLElBQUkseUJBQVcsQ0FBQyxpQkFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksWUFBWTtRQUNaLElBQUkseUJBQVcsQ0FBQyxpQkFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksWUFBWTtRQUNaLElBQUkseUJBQVcsQ0FBQyxpQkFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBMUVnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMkU3QjtJQUFELGdCQUFDO0NBM0VELEFBMkVDLENBM0VzQyxFQUFFLENBQUMsU0FBUyxHQTJFbEQ7a0JBM0VvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gXCIuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsXCI7XHJcbmltcG9ydCB7IFNvdW5kUGxheWVyIH0gZnJvbSBcIi4uL2Jhc2UvdG9vbC9Tb3VuZFBsYXllclwiO1xyXG5pbXBvcnQgc3MgZnJvbSBcIi4vU2V0dGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVMZXZlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2N2di5sYXllcnNbM10uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgc3MubWVudSA9IHRoaXM7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+S5kFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9iZ20sIDEsIC41KTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+mAu+i+kVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnYW1lU3RhcnQoKSB7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzNdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP57uT5p2fXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnYW1lT3ZlcigpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9sb3NlKTtcclxuXHJcbiAgICAgICAgY2N2di5sYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2N2di5sYXllcnNbM10uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOaJk+W8gOiPnOWNlVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBvcGVuTWVudSgpIHtcclxuICAgICAgICBjY3Z2LmxheWVyc1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzNdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOaMiemSruS6i+S7tiBcclxuXHJcbiAgICBwdWJsaWMgb25CdXR0b25DbGljayhldmVudCwgY3VzRGF0YSkge1xyXG4gICAgICAgIHRoaXNbY3VzRGF0YV0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25NdXNpYygpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9idG5uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TaGFyZSgpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9idG5uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdGFydCgpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9idG55KTtcclxuICAgICAgICB0aGlzLmdhbWVTdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
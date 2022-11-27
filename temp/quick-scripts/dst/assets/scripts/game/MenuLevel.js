
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tag 参数
        _this._bgm1 = null;
        return _this;
    }
    MenuLevel.prototype.onLoad = function () {
        Setting_1.default.menu = this;
    };
    MenuLevel.prototype.start = function () {
        this.openMenu();
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
        // 复位分数
        Setting_1.default.score = 0;
        if (Setting_1.default.mute)
            return;
        // todo 音乐切换
        var newbgm = new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_bgm, -1, 0.5);
        newbgm.bpm = Setting_1.default.Sound_bgm_bpm;
        this._bgm1.stop();
        this._bgm1.switch(newbgm).crossfade(3);
        this._bgm1 = newbgm;
    };
    /**
     * 游戏结束
     */
    MenuLevel.prototype.gameOver = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = false;
        // todo 播放音效
        // this._bgm1.setting().crossfade(1);
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_lose);
    };
    /**
    * 打开菜单
    */
    MenuLevel.prototype.openMenu = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = true;
        if (Setting_1.default.mute)
            return;
        // todo 播放音乐
        if (!this._bgm1) {
            this._bgm1 = new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_bgm, -1, 0.5);
            this._bgm1.bpm = Setting_1.default.Sound_bgm_bpm;
        }
    };
    // tag 按钮事件
    MenuLevel.prototype.onButtonClick = function (event, cusData) {
        this[cusData](event);
    };
    MenuLevel.prototype.onMusic = function (event) {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_btnn);
        Setting_1.default.mute = !Setting_1.default.mute;
        var spriteComponent = event.currentTarget.getComponent(cc.Sprite);
        spriteComponent.spriteFrame = Setting_1.default.mute ? DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['frames']['btn soundClose'] : DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['frames']['btn sound'];
        this._bgm1.mute = Setting_1.default.mute;
    };
    MenuLevel.prototype.onShare = function (event) {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_btnn);
        if (window.wx) {
            var that = this;
            cc.resources.load("share/share1", function (err, data) {
                var options = {
                    title: "方块消吧！",
                    imageUrl: data["url"],
                };
                wx.shareAppMessage(options);
                //share为分享的图片名称这是路径（assets/resources/share）
                wx.onShareAppMessage(function (res) {
                    return {
                        title: "来比一比谁的反应更快！",
                        imageUrl: data["url"],
                        success: function (res) {
                            console.log(res);
                        },
                        fail: function (res) {
                            console.log(res);
                        }
                    };
                });
            });
        }
    };
    MenuLevel.prototype.onStart = function (event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcTWVudUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRix3REFBdUQ7QUFDdkQscUNBQTJCO0FBRXJCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMEhDO1FBSEEsU0FBUztRQUVDLFdBQUssR0FBZ0IsSUFBSSxDQUFDOztJQUNyQyxDQUFDO0lBekhBLDBCQUFNLEdBQU47UUFDTyxpQkFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELGlCQUFpQjtJQUVqQixXQUFXO0lBRVg7O09BRU07SUFDQyw2QkFBUyxHQUFoQjtRQUNDLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFOUIsT0FBTztRQUNQLGlCQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUViLElBQUksaUJBQUUsQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUMxQixZQUFZO1FBQ1osSUFBSSxNQUFNLEdBQUcsSUFBSSx5QkFBVyxDQUFDLGlCQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdB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QUFDO1lBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO2dCQUNqRCxJQUFJLE9BQU8sR0FBRztvQkFDekIsS0FBSyxFQUFFLE9BQU87b0JBQ0MsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3hCLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFNUIsMkNBQTJDO2dCQUMzQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHO29CQUM5QixPQUFPO3dCQUNILEtBQUssRUFBRSxhQUFhO3dCQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDckIsT0FBTyxZQUFDLEdBQUc7NEJBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDcEIsQ0FBQzt3QkFDRCxJQUFJLFlBQUMsR0FBRzs0QkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNwQixDQUFDO3FCQUNKLENBQUE7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7WUFFTixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ1IsQ0FBQztJQUVNLDJCQUFPLEdBQWQsVUFBZSxLQUFLO1FBQ25CLFlBQVk7UUFDWixJQUFJLHlCQUFXLENBQUMsaUJBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQXJIbUIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBIN0I7SUFBRCxnQkFBQztDQTFIRCxBQTBIQyxDQTFIc0MsRUFBRSxDQUFDLFNBQVMsR0EwSGxEO2tCQTFIb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tIFwiLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbFwiO1xyXG5pbXBvcnQgeyBTb3VuZFBsYXllciB9IGZyb20gXCIuLi9iYXNlL3Rvb2wvU291bmRQbGF5ZXJcIjtcclxuaW1wb3J0IHNzIGZyb20gXCIuL1NldHRpbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TGV2ZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdG9uTG9hZCgpIHtcclxuICAgICAgICBzcy5tZW51ID0gdGhpcztcclxuXHR9XHJcblxyXG5cdHN0YXJ0KCkge1xyXG5cdFx0dGhpcy5vcGVuTWVudSgpO1xyXG5cdH1cclxuXHQvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuXHQvLyB0YWcg55So5oi36YC76L6RXHJcblxyXG5cdC8qKlxyXG4gICAgICog5ri45oiP5byA5aeLXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgZ2FtZVN0YXJ0KCkge1xyXG5cdFx0Y2N2di5sYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdGNjdnYubGF5ZXJzWzFdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRjY3Z2LmxheWVyc1syXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1szXS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g5aSN5L2N5YiG5pWwXHJcbiAgICAgICAgc3Muc2NvcmUgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzcy5tdXRlKSByZXR1cm47XHJcblx0XHQvLyB0b2RvIOmfs+S5kOWIh+aNolxyXG5cdFx0bGV0IG5ld2JnbSA9IG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9iZ20sIC0xLCAwLjUpO1xyXG5cdFx0bmV3YmdtLmJwbSA9IHNzLlNvdW5kX2JnbV9icG07XHJcblx0XHR0aGlzLl9iZ20xLnN0b3AoKTtcclxuXHRcdHRoaXMuX2JnbTEuc3dpdGNoKG5ld2JnbSkuY3Jvc3NmYWRlKDMpO1xyXG5cdFx0dGhpcy5fYmdtMSA9IG5ld2JnbTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAgICog5ri45oiP57uT5p2fXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgZ2FtZU92ZXIoKSB7XHJcblx0XHRjY3Z2LmxheWVyc1swXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Y2N2di5sYXllcnNbMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdGNjdnYubGF5ZXJzWzJdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRjY3Z2LmxheWVyc1szXS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHQvLyB0b2RvIOaSreaUvumfs+aViFxyXG5cdFx0Ly8gdGhpcy5fYmdtMS5zZXR0aW5nKCkuY3Jvc3NmYWRlKDEpO1xyXG5cdFx0bmV3IFNvdW5kUGxheWVyKHNzLlNvdW5kX2xvc2UpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAqIOaJk+W8gOiPnOWNlVxyXG4gICAgKi9cclxuXHRwdWJsaWMgb3Blbk1lbnUoKSB7XHJcblx0XHRjY3Z2LmxheWVyc1swXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Y2N2di5sYXllcnNbMV0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRjY3Z2LmxheWVyc1syXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdGNjdnYubGF5ZXJzWzNdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICBpZiAoc3MubXV0ZSkgcmV0dXJuO1xyXG5cdFx0Ly8gdG9kbyDmkq3mlL7pn7PkuZBcclxuICAgICAgICBpZiAoIXRoaXMuX2JnbTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmdtMSA9IG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9iZ20sIC0xLCAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLl9iZ20xLmJwbSA9IHNzLlNvdW5kX2JnbV9icG07XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0Ly8gdGFnIOaMiemSruS6i+S7tlxyXG5cclxuXHRwdWJsaWMgb25CdXR0b25DbGljayhldmVudCwgY3VzRGF0YSkge1xyXG5cdFx0dGhpc1tjdXNEYXRhXShldmVudCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25NdXNpYyhldmVudCkge1xyXG5cdFx0Ly8gdG9kbyDmkq3mlL7pn7PmlYhcclxuXHRcdG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9idG5uKTtcclxuXHJcbiAgICAgICAgc3MubXV0ZSA9ICFzcy5tdXRlO1xyXG4gICAgICAgIGxldCBzcHJpdGVDb21wb25lbnQ6Y2MuU3ByaXRlID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGVDb21wb25lbnQuc3ByaXRlRnJhbWUgPSBzcy5tdXRlID8gY2N2di53YXJlaG91c2VbJ2ZyYW1lcyddWydidG4gc291bmRDbG9zZSddIDogY2N2di53YXJlaG91c2VbJ2ZyYW1lcyddWydidG4gc291bmQnXTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmdtMS5tdXRlID0gc3MubXV0ZTtcclxuICAgIH1cclxuXHJcblx0cHVibGljIG9uU2hhcmUoZXZlbnQpIHtcclxuXHRcdC8vIHRvZG8g5pKt5pS+6Z+z5pWIXHJcblx0XHRuZXcgU291bmRQbGF5ZXIoc3MuU291bmRfYnRubik7XHJcblxyXG5cdFx0aWYgKHdpbmRvdy53eCkge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwic2hhcmUvc2hhcmUxXCIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0dGl0bGU6IFwi5pa55Z2X5raI5ZCn77yBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGFbXCJ1cmxcIl0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vc2hhcmXkuLrliIbkuqvnmoTlm77niYflkI3np7Dov5nmmK/ot6/lvoTvvIhhc3NldHMvcmVzb3VyY2VzL3NoYXJl77yJXHJcbiAgICAgICAgICAgICAgICB3eC5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi5p2l5q+U5LiA5q+U6LCB55qE5Y+N5bqU5pu05b+r77yBXCIsIC8v5YiG5Lqr55qE5qCH6aKYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBkYXRhW1widXJsXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvblN0YXJ0KGV2ZW50KSB7XHJcblx0XHQvLyB0b2RvIOaSreaUvumfs+aViFxyXG5cdFx0bmV3IFNvdW5kUGxheWVyKHNzLlNvdW5kX2J0bnkpO1xyXG5cdFx0dGhpcy5nYW1lU3RhcnQoKTtcclxuXHR9XHJcblxyXG5cdC8vIHRhZyDlj4LmlbBcclxuXHJcblx0cHJvdGVjdGVkIF9iZ20xOiBTb3VuZFBsYXllciA9IG51bGw7XHJcbn1cclxuIl19
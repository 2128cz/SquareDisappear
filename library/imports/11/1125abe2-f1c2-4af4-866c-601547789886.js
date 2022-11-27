"use strict";
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
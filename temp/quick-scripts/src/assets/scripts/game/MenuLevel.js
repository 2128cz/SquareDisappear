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
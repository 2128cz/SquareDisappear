"use strict";
cc._RF.push(module, 'e3bbcIsBr5HdokjPQ+I2p1/', 'StartSc');
// scripts/StartSc.ts

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
var Msger_1 = require("./Msger");
var WXManager_1 = require("./WXManager");
var SoundConctrollerSc_1 = require("./SoundConctrollerSc");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartUI = /** @class */ (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankUI = null;
        _this.serviceUI = null;
        _this.soudsFrame = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StartUI.prototype.start = function () {
    };
    // update (dt) {}
    StartUI.prototype.onclick_start = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_changeto_game);
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
    };
    StartUI.prototype.onclick_rank = function () {
        this.node.addChild(cc.instantiate(this.rankUI));
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
    };
    StartUI.prototype.onclick_sound = function (event) {
        Msger_1.Msger.emit(Msger_1.Msger.on_sound_muted);
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        event.target.getComponent(cc.Sprite).spriteFrame = this.soudsFrame[Number(SoundConctrollerSc_1.default.isMuted)];
    };
    StartUI.prototype.onclick_service = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        this.serviceUI.active = true;
    };
    StartUI.prototype.onclick_share = function () {
        WXManager_1.default.Instance.playerShare("share/share1", "来看看谁分数高");
    };
    __decorate([
        property(cc.Prefab)
    ], StartUI.prototype, "rankUI", void 0);
    __decorate([
        property(cc.Node)
    ], StartUI.prototype, "serviceUI", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], StartUI.prototype, "soudsFrame", void 0);
    StartUI = __decorate([
        ccclass
    ], StartUI);
    return StartUI;
}(cc.Component));
exports.default = StartUI;

cc._RF.pop();
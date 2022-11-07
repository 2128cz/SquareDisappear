"use strict";
cc._RF.push(module, '4a216NlfRtHvL+81yMCbNCN', 'PropUISc');
// scripts/PropUISc.ts

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
var GameSc_1 = require("./GameSc");
var BombEffectSc_1 = require("./BombEffectSc");
var IceEffectSc_1 = require("./IceEffectSc");
var IconCooldownSc_1 = require("./IconCooldownSc");
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PropUISc = /** @class */ (function (_super) {
    __extends(PropUISc, _super);
    function PropUISc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iceIcon = null;
        _this.ice_timer = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PropUISc.prototype.start = function () {
    };
    PropUISc.prototype.update = function (dt) {
        this.ice_timer -= dt;
        if (this.ice_timer <= 0) {
            this.getComponent(GameSc_1.default).g_movespeed_sc = 1;
        }
    };
    PropUISc.prototype.onclick_ice = function () {
        if (this.iceIcon.getComponent(IconCooldownSc_1.default).isCD()) {
            return;
        }
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 6);
        //应该播放一个效果
        this.getComponent(GameSc_1.default).g_movespeed_sc = 0.5;
        this.ice_timer = 10;
        var sc = this.getComponentInChildren(IceEffectSc_1.default);
        if (sc) {
            sc.node.active = true;
            sc.showIecEffect(this.ice_timer);
        }
        this.iceIcon.getComponent(IconCooldownSc_1.default).beginCD();
    };
    PropUISc.prototype.onclick_bomb = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 4);
        //应该播放一个效果
        var bricks = this.getComponent(GameSc_1.default).bricksLayer;
        for (var i = bricks.childrenCount - 1; i >= 0; i--) {
            var item = bricks.children[i];
            if (item.y < 1280 / 2) {
                item.removeFromParent(true);
            }
        }
        bricks.removeAllChildren(true);
        var sc = this.getComponentInChildren(BombEffectSc_1.default);
        if (sc) {
            sc.node.active = true;
        }
    };
    PropUISc.prototype.onclick_hit = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 5);
        //应该播放一个效果
        this.getComponent(GameSc_1.default).play_hit_effect();
        var gamesc = this.getComponent(GameSc_1.default);
        var target = gamesc.g_movespeed_sc;
        gamesc.g_movespeed_sc = -2;
        cc.Tween.stopAllByTarget(gamesc);
        cc.tween(gamesc).to(1, { g_movespeed_sc: target }, null).start();
    };
    __decorate([
        property(cc.Node)
    ], PropUISc.prototype, "iceIcon", void 0);
    PropUISc = __decorate([
        ccclass
    ], PropUISc);
    return PropUISc;
}(cc.Component));
exports.default = PropUISc;

cc._RF.pop();
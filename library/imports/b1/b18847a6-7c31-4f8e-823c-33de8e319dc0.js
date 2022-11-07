"use strict";
cc._RF.push(module, 'b1884emfDFPjoI8M96OMZ3A', 'GameOverSc');
// scripts/GameOverSc.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOverSc = /** @class */ (function (_super) {
    __extends(GameOverSc, _super);
    function GameOverSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = null;
        // LIFE-CYCLE CALLBACKS:
        _this.cooldown = 10;
        return _this;
    }
    GameOverSc.prototype.onLoad = function () {
        this.node.active = false;
    };
    GameOverSc.prototype.update = function (dt) {
        if (this.node.active == false)
            return;
        if (this.cooldown == 0) {
            this.onclick_skip();
        }
        else {
            this.cooldown -= dt;
            if (this.cooldown <= 0) {
                this.cooldown = 0;
            }
            this.time.string = Math.floor(this.cooldown).toString();
        }
    };
    GameOverSc.prototype.onclick_skip = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        this.node.active = false;
        Msger_1.Msger.emit(Msger_1.Msger.on_changeto_start);
    };
    GameOverSc.prototype.onclick_revie = function () {
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        this.node.active = false;
        Msger_1.Msger.emit(Msger_1.Msger.on_game_revie);
    };
    __decorate([
        property(cc.Label)
    ], GameOverSc.prototype, "time", void 0);
    GameOverSc = __decorate([
        ccclass
    ], GameOverSc);
    return GameOverSc;
}(cc.Component));
exports.default = GameOverSc;

cc._RF.pop();
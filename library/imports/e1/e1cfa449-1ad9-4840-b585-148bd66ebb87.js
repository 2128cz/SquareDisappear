"use strict";
cc._RF.push(module, 'e1cfaRJGtlIQLWFFIvWbruH', 'SoundConctrollerSc');
// scripts/SoundConctrollerSc.ts

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
var SoundConctrollerSc = /** @class */ (function (_super) {
    __extends(SoundConctrollerSc, _super);
    function SoundConctrollerSc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoundConctrollerSc_1 = SoundConctrollerSc;
    SoundConctrollerSc.prototype.onLoad = function () {
        Msger_1.Msger.on(Msger_1.Msger.on_play_sound, this.on_play_sound, this);
        Msger_1.Msger.on(Msger_1.Msger.on_sound_muted, this.on_sound_muted, this);
    };
    SoundConctrollerSc.prototype.on_sound_muted = function () {
        SoundConctrollerSc_1.isMuted = !SoundConctrollerSc_1.isMuted;
        if (SoundConctrollerSc_1.isMuted) {
            this.node.getChildByName('bgm').getComponent(cc.AudioSource).volume = 0;
        }
        else {
            this.node.getChildByName('bgm').getComponent(cc.AudioSource).volume = 1;
        }
    };
    // 
    SoundConctrollerSc.prototype.on_play_sound = function (e) {
        if (SoundConctrollerSc_1.isMuted) {
            return;
        }
        if (e == 8) {
            e = Math.floor(Math.random() * 3) + 8;
        }
        this.node.children[e].getComponent(cc.AudioSource).play();
    };
    var SoundConctrollerSc_1;
    // LIFE-CYCLE CALLBACKS:
    SoundConctrollerSc.isMuted = false;
    SoundConctrollerSc = SoundConctrollerSc_1 = __decorate([
        ccclass
    ], SoundConctrollerSc);
    return SoundConctrollerSc;
}(cc.Component));
exports.default = SoundConctrollerSc;

cc._RF.pop();
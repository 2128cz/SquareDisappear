"use strict";
cc._RF.push(module, '9a754CsSJlK3ae4ie7MAWPD', 'IconCooldownSc');
// scripts/IconCooldownSc.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var IconCooldownSc = /** @class */ (function (_super) {
    __extends(IconCooldownSc, _super);
    function IconCooldownSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CDMask = null;
        _this.lenTime = 10;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    IconCooldownSc.prototype.onLoad = function () {
        this.CDMask.fillRange = 0;
    };
    IconCooldownSc.prototype.isCD = function () {
        return this.CDMask.fillRange > 0;
    };
    IconCooldownSc.prototype.update = function (dt) {
        this.CDMask.fillRange -= dt * (1 / this.lenTime);
        if (this.CDMask.fillRange < 0) {
            this.CDMask.fillRange = 0;
        }
        else {
        }
    };
    IconCooldownSc.prototype.beginCD = function (len) {
        if (len === void 0) { len = 10; }
        this.lenTime = len;
        this.CDMask.fillRange = 1;
    };
    __decorate([
        property(cc.Sprite)
    ], IconCooldownSc.prototype, "CDMask", void 0);
    IconCooldownSc = __decorate([
        ccclass
    ], IconCooldownSc);
    return IconCooldownSc;
}(cc.Component));
exports.default = IconCooldownSc;

cc._RF.pop();
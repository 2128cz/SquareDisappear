"use strict";
cc._RF.push(module, '5ef5aYQFX1NaZxMs3knQNlb', 'SceneManagerSc');
// scripts/SceneManagerSc.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneManagerSc = /** @class */ (function (_super) {
    __extends(SceneManagerSc, _super);
    function SceneManagerSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.StartUI = null;
        _this.GameUI = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    SceneManagerSc.prototype.onLoad = function () {
        Msger_1.Msger.on(Msger_1.Msger.on_changeto_start, this.on_changeto_start, this);
        Msger_1.Msger.on(Msger_1.Msger.on_changeto_game, this.on_changeto_game, this);
        this.StartUI.active = true;
        this.GameUI.active = false;
    };
    SceneManagerSc.prototype.start = function () {
        WXManager_1.default.Instance.openShare("share/share1", "比一比谁眼疾手快");
    };
    // update (dt) {}
    SceneManagerSc.prototype.on_changeto_game = function () {
        this.StartUI.active = false;
        this.GameUI.active = true;
        Msger_1.Msger.emit(Msger_1.Msger.on_game_begin);
    };
    SceneManagerSc.prototype.on_changeto_start = function () {
        this.StartUI.active = true;
        this.GameUI.active = false;
    };
    __decorate([
        property(cc.Node)
    ], SceneManagerSc.prototype, "StartUI", void 0);
    __decorate([
        property(cc.Node)
    ], SceneManagerSc.prototype, "GameUI", void 0);
    SceneManagerSc = __decorate([
        ccclass
    ], SceneManagerSc);
    return SceneManagerSc;
}(cc.Component));
exports.default = SceneManagerSc;

cc._RF.pop();
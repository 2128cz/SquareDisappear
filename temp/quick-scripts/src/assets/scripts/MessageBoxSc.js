"use strict";
cc._RF.push(module, '1fc9eirFG1CtJwC8KJA39Wp', 'MessageBoxSc');
// scripts/MessageBoxSc.ts

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
var MessageBoxSc = /** @class */ (function (_super) {
    __extends(MessageBoxSc, _super);
    function MessageBoxSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.MessageBox = null;
        // LIFE-CYCLE CALLBACKS:
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    MessageBoxSc.prototype.onLoad = function () {
        var _this = this;
        Msger_1.Msger.on(Msger_1.Msger.on_show_watting, function (e, callback) {
            if (_this.MessageBox) {
                _this.MessageBox.active = true;
                _this.callback = callback;
            }
        }, this);
        this.MessageBox.active = false;
    };
    MessageBoxSc.prototype.onclick_close = function () {
        this.MessageBox.active = false;
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 1);
        if (this.callback) {
            this.callback();
        }
    };
    __decorate([
        property(cc.Label)
    ], MessageBoxSc.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxSc.prototype, "MessageBox", void 0);
    MessageBoxSc = __decorate([
        ccclass
    ], MessageBoxSc);
    return MessageBoxSc;
}(cc.Component));
exports.default = MessageBoxSc;

cc._RF.pop();
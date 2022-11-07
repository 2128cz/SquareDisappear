"use strict";
cc._RF.push(module, '6bb4ft81x1LWKp5GcCxsd2G', 'CheckOverSc');
// scripts/CheckOverSc.ts

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
var BrickSc_1 = require("./BrickSc");
var GameOverSc_1 = require("./GameOverSc");
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CheckOverSc = /** @class */ (function (_super) {
    __extends(CheckOverSc, _super);
    function CheckOverSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overUI = null;
        _this.deadLine = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    CheckOverSc.prototype.start = function () {
    };
    CheckOverSc.prototype.update = function (dt) {
        if (this.getComponent(GameSc_1.default).isPaused) {
            return;
        }
        if (!this.bricksLayer) {
            this.bricksLayer = this.getComponent(GameSc_1.default).bricksLayer;
        }
        else {
            for (var _i = 0, _a = this.bricksLayer.children; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.getComponent(BrickSc_1.default).moveSpeed == 0) {
                    if (item.y - item.height / 2 <= this.deadLine.y) {
                        //
                        this.getComponent(GameSc_1.default).isPaused = true;
                        this.cleanBrikes();
                        this.overUI.active = true;
                        this.overUI.getComponent(GameOverSc_1.default).cooldown = 10;
                        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 3);
                    }
                }
            }
        }
    };
    CheckOverSc.prototype.cleanBrikes = function () {
        var bricks = this.getComponent(GameSc_1.default).bricksLayer;
        for (var i = bricks.childrenCount - 1; i >= 0; i--) {
            var item = bricks.children[i];
            if (item.y < 1280 / 2) {
                item.removeFromParent(true);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], CheckOverSc.prototype, "overUI", void 0);
    __decorate([
        property(cc.Node)
    ], CheckOverSc.prototype, "deadLine", void 0);
    CheckOverSc = __decorate([
        ccclass
    ], CheckOverSc);
    return CheckOverSc;
}(cc.Component));
exports.default = CheckOverSc;

cc._RF.pop();
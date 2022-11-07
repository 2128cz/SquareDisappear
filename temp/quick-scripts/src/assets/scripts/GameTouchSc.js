"use strict";
cc._RF.push(module, 'c34c2Es4A1BGayOI+xbecDs', 'GameTouchSc');
// scripts/GameTouchSc.ts

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
var Msger_1 = require("./Msger");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameTouchSc = /** @class */ (function (_super) {
    __extends(GameTouchSc, _super);
    function GameTouchSc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchLayer = null;
        _this.holdTouch = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GameTouchSc.prototype.onLoad = function () {
        this.touchLayer.on(cc.Node.EventType.TOUCH_START, this.touchBegin, this);
    };
    GameTouchSc.prototype.touchBegin = function (e) {
        if (this.holdTouch > 0) {
            return;
        }
        if (this.getComponent(GameSc_1.default).isPaused) {
            return;
        }
        // console.log(e.touch.getLocationX());
        var pt = this.touchLayer.convertToNodeSpaceAR(e.touch.getLocation());
        var index = (pt.x + 720 / 2) / (720 / 4);
        index = Math.floor(index);
        if (index < 0)
            index = 0;
        if (index > 3)
            index = 3;
        this.getComponent(GameSc_1.default).add_move_brick(index);
        this.holdTouch = 0.2;
        Msger_1.Msger.emit(Msger_1.Msger.on_play_sound, 7);
    };
    GameTouchSc.prototype.update = function (dt) {
        this.holdTouch -= dt;
    };
    __decorate([
        property(cc.Node)
    ], GameTouchSc.prototype, "touchLayer", void 0);
    GameTouchSc = __decorate([
        ccclass
    ], GameTouchSc);
    return GameTouchSc;
}(cc.Component));
exports.default = GameTouchSc;

cc._RF.pop();
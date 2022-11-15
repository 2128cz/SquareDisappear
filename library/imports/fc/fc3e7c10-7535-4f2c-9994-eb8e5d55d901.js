"use strict";
cc._RF.push(module, 'fc3e7wQdTVPLJmU645dVdkB', 'ButtonSkill');
// scripts/game/effect/ButtonSkill.ts

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
var Setting_1 = require("../Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskList = [];
        _this.iceCD = _this.getCDT(_this.ice);
        _this.hitCD = _this.getCDT(_this.hit);
        _this.boomCD = _this.getCDT(_this.boom);
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onEnable = function () {
        // 默认CD是满的
        this.iceCD = this.getCDT(this.ice);
        this.hitCD = this.getCDT(this.hit);
        this.boomCD = this.getCDT(this.boom);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        this.skillNameList.forEach(function (element) {
            if (_this.getCD(element) > 0) {
                _this.setCD(element, -dt);
            }
        });
    };
    // tag 用户脚本 
    // tag 按钮事件 
    NewClass.prototype.onButtonClick = function (event, cusData) {
        // event.target
        this[cusData]();
    };
    NewClass.prototype.onIce = function () {
        this.BottonEvent(this.ice);
    };
    NewClass.prototype.onHit = function () {
        this.BottonEvent(this.hit);
    };
    NewClass.prototype.onBoom = function () {
        this.BottonEvent(this.boom);
    };
    NewClass.prototype.BottonEvent = function (name) {
        if (this.getCD(this[name]) <= 0) {
            this.setCD(this[name], this.getCDT(this[name]));
            Setting_1.default.SkillEvent = name;
        }
    };
    Object.defineProperty(NewClass.prototype, "iceMask", {
        // tag 宏和参数定义 
        get: function () { return this.maskList[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "hitMask", {
        get: function () { return this.maskList[1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "boomMask", {
        get: function () { return this.maskList[2]; },
        enumerable: false,
        configurable: true
    });
    NewClass.prototype.getCD = function (name) {
        return this[name + 'CD'];
    };
    NewClass.prototype.setCD = function (name, offset) {
        this[name + 'CD'] += offset;
        this[name + 'CD'] = Math.max(Math.min(this[name + 'CD'], this.getCDT(name)), 0);
        this.getMask(name).fillRange = this[name + 'CD'] / this.getCDT(name);
        return this[name + 'CD'];
    };
    NewClass.prototype.getCDT = function (name) {
        return Setting_1.default[name + '_CoolDownTime'];
    };
    NewClass.prototype.getMask = function (name) {
        return this[name + 'Mask'];
    };
    Object.defineProperty(NewClass.prototype, "ice", {
        get: function () { return 'ice'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "hit", {
        get: function () { return 'hit'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "boom", {
        get: function () { return 'boom'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "skillNameList", {
        get: function () { return [this.ice, this.hit, this.boom]; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property({ type: cc.Sprite })
    ], NewClass.prototype, "maskList", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
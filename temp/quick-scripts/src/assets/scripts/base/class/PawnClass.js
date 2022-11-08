"use strict";
cc._RF.push(module, 'dc67fSOWKpKmZ+mQ1IaB8ME', 'PawnClass');
// scripts/base/class/PawnClass.ts

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
// SIGNPOST 可控制类 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ActorClass_1 = require("./ActorClass");
var PawnClass = /** @class */ (function (_super) {
    __extends(PawnClass, _super);
    function PawnClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PawnClass.prototype.start = function () {
    };
    PawnClass = __decorate([
        ccclass
    ], PawnClass);
    return PawnClass;
}(ActorClass_1.default));
exports.default = PawnClass;

cc._RF.pop();
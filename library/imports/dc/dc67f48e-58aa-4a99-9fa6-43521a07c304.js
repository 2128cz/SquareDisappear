"use strict";
<<<<<<<< HEAD:library/imports/dc/dc67f48e-58aa-4a99-9fa6-43521a07c304.js
cc._RF.push(module, 'dc67fSOWKpKmZ+mQ1IaB8ME', 'PawnClass');
// scripts/base/class/PawnClass.ts
========
cc._RF.push(module, 'ee72aaHLh1Oy6P7kSBGlhwU', 'DevelopersToolClass');
// scripts/base/class/DevelopersToolClass.ts
>>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562:library/imports/ee/ee72a687-2e1d-4ecb-a3fb-912046961c14.js

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
<<<<<<<< HEAD:library/imports/dc/dc67f48e-58aa-4a99-9fa6-43521a07c304.js
// SIGNPOST 可控制类 
========
// SIGNPOST 开发工具类 
>>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562:library/imports/ee/ee72a687-2e1d-4ecb-a3fb-912046961c14.js
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
<<<<<<<< HEAD:library/imports/dc/dc67f48e-58aa-4a99-9fa6-43521a07c304.js
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
========
        return _super !== null && _super.apply(this, arguments) || this;
>>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562:library/imports/ee/ee72a687-2e1d-4ecb-a3fb-912046961c14.js
    }
    /**
     * 构造函数
     */
    NewClass.prototype.ctor = function () {
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
<<<<<<<< HEAD:library/imports/dc/dc67f48e-58aa-4a99-9fa6-43521a07c304.js
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
========
>>>>>>>> db2b8a7ddf217d18bb4f5789a18927dfb7aaa562:library/imports/ee/ee72a687-2e1d-4ecb-a3fb-912046961c14.js
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
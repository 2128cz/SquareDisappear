"use strict";
cc._RF.push(module, '7b385uRoMRIUo4cEngshK62', 'UObject');
// scripts/base/core/UObject.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var UObjectBaseUtility_1 = require("./UObjectBaseUtility");
// 所有类型基本，提供了基本的反射
var UObject_Private = /** @class */ (function (_super) {
    __extends(UObject_Private, _super);
    function UObject_Private() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObject_Private;
}(UObjectBaseUtility_1.default));
var UObject = /** @class */ (function (_super) {
    __extends(UObject, _super);
    function UObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObject;
}(UObject_Private));
exports.default = UObject;

cc._RF.pop();
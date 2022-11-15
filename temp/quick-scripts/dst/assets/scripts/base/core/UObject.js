
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/UObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcVU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsa0JBQWtCO0FBQ2xCO0lBQThCLG1DQUFrQjtJQUFoRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGNkIsNEJBQWtCLEdBRS9DO0FBRUQ7SUFBcUMsMkJBQWU7SUFBcEQ7O0lBR0EsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUhBLEFBR0MsQ0FIb0MsZUFBZSxHQUduRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVT2JqZWN0QmFzZVV0aWxpdHkgZnJvbSBcIi4vVU9iamVjdEJhc2VVdGlsaXR5XCI7XHJcbi8vIOaJgOacieexu+Wei+WfuuacrO+8jOaPkOS+m+S6huWfuuacrOeahOWPjeWwhFxyXG5jbGFzcyBVT2JqZWN0X1ByaXZhdGUgZXh0ZW5kcyBVT2JqZWN0QmFzZVV0aWxpdHkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVU9iamVjdCBleHRlbmRzIFVPYmplY3RfUHJpdmF0ZSB7XHJcblxyXG5cclxufVxyXG5cclxuIl19
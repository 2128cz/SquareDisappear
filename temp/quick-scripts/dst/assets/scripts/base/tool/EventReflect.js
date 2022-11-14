
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/EventReflect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38e776njEdL3brdTU1NpFG1', 'EventReflect');
// scripts/base/tool/EventReflect.ts

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
exports.EventReflect = void 0;
var UObject_1 = require("../core/UObject");
// 自定义反射
var EventReflect = /** @class */ (function (_super) {
    __extends(EventReflect, _super);
    function EventReflect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventReflect.prototype, "target", {
        get: function () {
            return;
        },
        enumerable: false,
        configurable: true
    });
    return EventReflect;
}(UObject_1.default));
exports.EventReflect = EventReflect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcRXZlbnRSZWZsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsUUFBUTtBQUNSO0lBQWtDLGdDQUFPO0lBQXpDOztJQVVBLENBQUM7SUFIRyxzQkFBVyxnQ0FBTTthQUFqQjtZQUNJLE9BQU07UUFDVixDQUFDOzs7T0FBQTtJQUNMLG1CQUFDO0FBQUQsQ0FWQSxBQVVDLENBVmlDLGlCQUFPLEdBVXhDO0FBVlksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVU9iamVjdCBmcm9tIFwiLi4vY29yZS9VT2JqZWN0XCI7XHJcbi8vIOiHquWumuS5ieWPjeWwhFxyXG5leHBvcnQgY2xhc3MgRXZlbnRSZWZsZWN0IGV4dGVuZHMgVU9iamVjdCB7XHJcbiAgICAvKipcclxuICAgICAqIOWPjeWwhOWunuS+iyAgXHJcbiAgICAgKiDkv53lrZjmiYDmnInlj43lsITlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfUmVmbGVjdEluc3Q7XHJcblxyXG4gICAgcHVibGljIGdldCB0YXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn0iXX0=
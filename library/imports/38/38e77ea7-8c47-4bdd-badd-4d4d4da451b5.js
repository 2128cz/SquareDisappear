"use strict";
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
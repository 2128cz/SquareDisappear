
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/RigorousLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '173f5UDvDNOh7BaDUvjJbqV', 'RigorousLibrary');
// scripts/base/class/RigorousLibrary.ts

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
exports.RigorousMap = exports.RigorousSet = exports.RigorousRingBuffer = exports.RigorousArray = exports.RigorousHash = exports.RigorousMatrix2 = exports.RigorousMatrix3 = exports.RigorousMatrix4 = exports.RigorousSize = exports.RigorousVector2 = exports.RigorousScale = exports.RigorousRotation = exports.RigorousPostion = exports.RigorousVector3 = exports.RigorousVector4 = exports.RigorousValueType = void 0;
// kismit
var SysBaseType;
(function (SysBaseType) {
    SysBaseType[SysBaseType["number"] = 0] = "number";
    SysBaseType[SysBaseType["string"] = 1] = "string";
    SysBaseType[SysBaseType["boolean"] = 2] = "boolean";
    SysBaseType[SysBaseType["object"] = 3] = "object";
    SysBaseType[SysBaseType["undefined"] = 4] = "undefined";
})(SysBaseType || (SysBaseType = {}));
var RigorousValueType = /** @class */ (function () {
    function RigorousValueType() {
    }
    return RigorousValueType;
}());
exports.RigorousValueType = RigorousValueType;
var RigorousVector4 = /** @class */ (function (_super) {
    __extends(RigorousVector4, _super);
    function RigorousVector4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector4;
}(RigorousValueType));
exports.RigorousVector4 = RigorousVector4;
var RigorousVector3 = /** @class */ (function (_super) {
    __extends(RigorousVector3, _super);
    function RigorousVector3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector3;
}(RigorousVector4));
exports.RigorousVector3 = RigorousVector3;
var RigorousPostion = /** @class */ (function (_super) {
    __extends(RigorousPostion, _super);
    function RigorousPostion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousPostion;
}(RigorousVector3));
exports.RigorousPostion = RigorousPostion;
var RigorousRotation = /** @class */ (function (_super) {
    __extends(RigorousRotation, _super);
    function RigorousRotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousRotation;
}(RigorousVector3));
exports.RigorousRotation = RigorousRotation;
var RigorousScale = /** @class */ (function (_super) {
    __extends(RigorousScale, _super);
    function RigorousScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousScale;
}(RigorousVector3));
exports.RigorousScale = RigorousScale;
var RigorousVector2 = /** @class */ (function (_super) {
    __extends(RigorousVector2, _super);
    function RigorousVector2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector2;
}(RigorousVector4));
exports.RigorousVector2 = RigorousVector2;
var RigorousSize = /** @class */ (function (_super) {
    __extends(RigorousSize, _super);
    function RigorousSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousSize;
}(RigorousVector2));
exports.RigorousSize = RigorousSize;
var RigorousMatrix4 = /** @class */ (function (_super) {
    __extends(RigorousMatrix4, _super);
    function RigorousMatrix4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix4;
}(RigorousValueType));
exports.RigorousMatrix4 = RigorousMatrix4;
var RigorousMatrix3 = /** @class */ (function (_super) {
    __extends(RigorousMatrix3, _super);
    function RigorousMatrix3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix3;
}(RigorousMatrix4));
exports.RigorousMatrix3 = RigorousMatrix3;
var RigorousMatrix2 = /** @class */ (function (_super) {
    __extends(RigorousMatrix2, _super);
    function RigorousMatrix2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix2;
}(RigorousMatrix4));
exports.RigorousMatrix2 = RigorousMatrix2;
var RigorousHash = /** @class */ (function (_super) {
    __extends(RigorousHash, _super);
    /**
     * @param length 定义哈希表的使用场景最大长度
     */
    function RigorousHash(length) {
        var _this = _super.call(this) || this;
        /**
         * 哈希表
         */
        _this._HashList = {};
        _this.HashCodeGate = false;
        _this.HashCodeGate = length > 50;
        return _this;
    }
    /**
     * 获取一个字符的哈希值
     * @param code
     */
    RigorousHash.prototype.ToHashCode = function (code) {
        var hash = 0;
        if (typeof (code) == 'number') {
            hash = code;
        }
        else {
            for (var _i = 0, code_1 = code; _i < code_1.length; _i++) {
                var iterator = code_1[_i];
                hash += iterator.charCodeAt(0);
            }
            // HashComplexity
            hash %= 37;
        }
        return hash;
    };
    RigorousHash.prototype.ToHashCode2 = function (code) {
        var hash = 5381;
        if (typeof (code) == 'number') {
            hash = code;
        }
        else {
            for (var _i = 0, code_2 = code; _i < code_2.length; _i++) {
                var iterator = code_2[_i];
                hash *= 33;
                hash += iterator.charCodeAt(0);
            }
            hash %= 1013;
        }
        return hash;
    };
    /**
     * 获取哈希值的选择器
     */
    RigorousHash.prototype.ToHashCodeGate = function (key) {
        if (this.HashCodeGate)
            return this.ToHashCode(key);
        else
            return this.ToHashCode2(key);
    };
    // tag 交互层 
    /**
     * 按键获取元素
     * @param key 键
     */
    RigorousHash.prototype.get = function (key) {
        var hash = this.ToHashCodeGate(key);
        this._HashList[hash];
    };
    /**
     * 按键设置元素
     * @param key 键
     */
    RigorousHash.prototype.set = function (value) {
        var key = null;
        switch (SysBaseType[typeof (value)]) {
            case SysBaseType.object:
                var objectTagName = Object.prototype.toString.call(value);
                if (value instanceof cc.Component)
                    objectTagName += value['_id'];
                else {
                    var ObjectKey = Object.keys(value);
                    objectTagName += ObjectKey[114514 % ObjectKey.length];
                    objectTagName += ObjectKey[4399 % ObjectKey.length];
                    objectTagName += ObjectKey[8848 % ObjectKey.length];
                }
                key = objectTagName;
                break;
            case SysBaseType.string:
                key = value;
                break;
            case SysBaseType.number:
                key = value;
                break;
            case SysBaseType.boolean:
                key = value ? 1 : 0;
                break;
            case SysBaseType.undefined:
                key = 0;
                break;
            default:
                key = 0;
                break;
        }
        var hash = this.ToHashCodeGate(key);
        this._HashList[hash] = value;
        return hash;
    };
    /**
     * 按键删除元素
     * @param key 键
     */
    RigorousHash.prototype.remove = function (key) {
        var hash = this.ToHashCodeGate(key);
    };
    return RigorousHash;
}(RigorousValueType));
exports.RigorousHash = RigorousHash;
var RigorousArray = /** @class */ (function (_super) {
    __extends(RigorousArray, _super);
    function RigorousArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousArray;
}(RigorousHash));
exports.RigorousArray = RigorousArray;
var RigorousRingBuffer = /** @class */ (function (_super) {
    __extends(RigorousRingBuffer, _super);
    function RigorousRingBuffer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousRingBuffer;
}(RigorousArray));
exports.RigorousRingBuffer = RigorousRingBuffer;
var RigorousSet = /** @class */ (function (_super) {
    __extends(RigorousSet, _super);
    function RigorousSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousSet;
}(RigorousHash));
exports.RigorousSet = RigorousSet;
var RigorousMap = /** @class */ (function (_super) {
    __extends(RigorousMap, _super);
    function RigorousMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMap;
}(RigorousHash));
exports.RigorousMap = RigorousMap;
// 测试
// interface kismitFloat {
//     _num: Number;
// }
// class myfloat implements kismitFloat {
//     constructor(value?: number) {
//         this._num = value || 0;
//     }
//     _num;
//     get num() {
//         return this._num;
//     }
//     set num(value: number) {
//         this._num = value;
//     }
// }
// let a = new myfloat(1);
// cc.log(a.num);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFJpZ29yb3VzTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUztBQUNULElBQUssV0FFSjtBQUZELFdBQUssV0FBVztJQUNaLGlEQUFNLENBQUE7SUFBRSxpREFBTSxDQUFBO0lBQUUsbURBQU8sQ0FBQTtJQUFFLGlEQUFNLENBQUE7SUFBRSx1REFBUyxDQUFBO0FBQzlDLENBQUMsRUFGSSxXQUFXLEtBQVgsV0FBVyxRQUVmO0FBQ0Q7SUFBQTtJQUVBLENBQUM7SUFBRCx3QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksOENBQWlCO0FBRzlCO0lBQXFDLG1DQUFpQjtJQUF0RDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsaUJBQWlCLEdBRXJEO0FBRlksMENBQWU7QUFHNUI7SUFBcUMsbUNBQWU7SUFBcEQ7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm9DLGVBQWUsR0FFbkQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQXNDLG9DQUFlO0lBQXJEOztJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBRkEsQUFFQyxDQUZxQyxlQUFlLEdBRXBEO0FBRlksNENBQWdCO0FBRzdCO0lBQW1DLGlDQUFlO0lBQWxEOztJQUVBLENBQUM7SUFBRCxvQkFBQztBQUFELENBRkEsQUFFQyxDQUZrQyxlQUFlLEdBRWpEO0FBRlksc0NBQWE7QUFHMUI7SUFBcUMsbUNBQWU7SUFBcEQ7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm9DLGVBQWUsR0FFbkQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFrQyxn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UUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQW5IQSxBQW1IQyxDQW5IaUMsaUJBQWlCLEdBbUhsRDtBQW5IWSxvQ0FBWTtBQW9IekI7SUFBbUMsaUNBQVk7SUFBL0M7O0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLENBRmtDLFlBQVksR0FFOUM7QUFGWSxzQ0FBYTtBQUcxQjtJQUF3QyxzQ0FBYTtJQUFyRDs7SUFFQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGdUMsYUFBYSxHQUVwRDtBQUZZLGdEQUFrQjtBQUcvQjtJQUFpQywrQkFBWTtJQUE3Qzs7SUFFQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGZ0MsWUFBWSxHQUU1QztBQUZZLGtDQUFXO0FBR3hCO0lBQWlDLCtCQUFZO0lBQTdDOztJQUVBLENBQUM7SUFBRCxrQkFBQztBQUFELENBRkEsQUFFQyxDQUZnQyxZQUFZLEdBRTVDO0FBRlksa0NBQVc7QUFJeEIsS0FBSztBQUNMLDBCQUEwQjtBQUMxQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKLHlDQUF5QztBQUN6QyxvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLFFBQVE7QUFDUixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IsSUFBSTtBQUNKLDBCQUEwQjtBQUMxQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBraXNtaXRcclxuZW51bSBTeXNCYXNlVHlwZSB7XHJcbiAgICBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgb2JqZWN0LCB1bmRlZmluZWRcclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNWYWx1ZVR5cGUge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNWZWN0b3I0IGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNWZWN0b3IzIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3I0IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzUG9zdGlvbiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yMyB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1JvdGF0aW9uIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3IzIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzU2NhbGUgZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjMge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNWZWN0b3IyIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3I0IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzU2l6ZSBleHRlbmRzIFJpZ29yb3VzVmVjdG9yMiB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c01hdHJpeDQgZXh0ZW5kcyBSaWdvcm91c1ZhbHVlVHlwZSB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c01hdHJpeDMgZXh0ZW5kcyBSaWdvcm91c01hdHJpeDQge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXgyIGV4dGVuZHMgUmlnb3JvdXNNYXRyaXg0IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzSGFzaCBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCDlrprkuYnlk4jluIzooajnmoTkvb/nlKjlnLrmma/mnIDlpKfplb/luqZcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuSGFzaENvZGVHYXRlID0gbGVuZ3RoID4gNTA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlk4jluIzooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9IYXNoTGlzdCA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5a2X56ym55qE5ZOI5biM5YC8XHJcbiAgICAgKiBAcGFyYW0gY29kZSBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGUoY29kZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaGFzaDogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIChjb2RlKSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBoYXNoID0gY29kZSBhcyBudW1iZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSGFzaENvbXBsZXhpdHlcclxuICAgICAgICAgICAgaGFzaCAlPSAzNztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGUyKGNvZGU6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGhhc2g6IG51bWJlciA9IDUzODE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoY29kZSkgPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgaGFzaCA9IGNvZGUgYXMgbnVtYmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgY29kZSkge1xyXG4gICAgICAgICAgICAgICAgaGFzaCAqPSAzMztcclxuICAgICAgICAgICAgICAgIGhhc2ggKz0gaXRlcmF0b3IuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYXNoICU9IDEwMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoYXNoO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBIYXNoQ29kZUdhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5ZOI5biM5YC855qE6YCJ5oup5ZmoXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBUb0hhc2hDb2RlR2F0ZShrZXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuSGFzaENvZGVHYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlKGtleSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlMihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDkuqTkupLlsYIgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInplK7ojrflj5blhYPntKBcclxuICAgICAqIEBwYXJhbSBrZXkg6ZSuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBudW1iZXIgfCBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5Ub0hhc2hDb2RlR2F0ZShrZXkpO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInplK7orr7nva7lhYPntKBcclxuICAgICAqIEBwYXJhbSBrZXkg6ZSuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQodmFsdWU6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGtleTogbnVtYmVyIHwgc3RyaW5nID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKFN5c0Jhc2VUeXBlW3R5cGVvZiAodmFsdWUpXSkge1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLm9iamVjdDpcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RUYWdOYW1lID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNjLkNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUYWdOYW1lICs9IHZhbHVlWydfaWQnXTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBPYmplY3RLZXkgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSArPSBPYmplY3RLZXlbMTE0NTE0ICUgT2JqZWN0S2V5Lmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSArPSBPYmplY3RLZXlbNDM5OSAlIE9iamVjdEtleS5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5Wzg4NDggJSBPYmplY3RLZXkubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGtleSA9IG9iamVjdFRhZ05hbWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTeXNCYXNlVHlwZS5zdHJpbmc6XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLm51bWJlcjpcclxuICAgICAgICAgICAgICAgIGtleSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUuYm9vbGVhbjpcclxuICAgICAgICAgICAgICAgIGtleSA9IHZhbHVlID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTeXNCYXNlVHlwZS51bmRlZmluZWQ6XHJcbiAgICAgICAgICAgICAgICBrZXkgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBrZXkgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5Ub0hhc2hDb2RlR2F0ZShrZXkpO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInplK7liKDpmaTlhYPntKBcclxuICAgICAqIEBwYXJhbSBrZXkg6ZSuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmUoa2V5OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZUdhdGUoa2V5KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNBcnJheSBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1JpbmdCdWZmZXIgZXh0ZW5kcyBSaWdvcm91c0FycmF5IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzU2V0IGV4dGVuZHMgUmlnb3JvdXNIYXNoIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzTWFwIGV4dGVuZHMgUmlnb3JvdXNIYXNoIHtcclxuXHJcbn1cclxuXHJcbi8vIOa1i+ivlVxyXG4vLyBpbnRlcmZhY2Uga2lzbWl0RmxvYXQge1xyXG4vLyAgICAgX251bTogTnVtYmVyO1xyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBteWZsb2F0IGltcGxlbWVudHMga2lzbWl0RmxvYXQge1xyXG4vLyAgICAgY29uc3RydWN0b3IodmFsdWU/OiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLl9udW0gPSB2YWx1ZSB8fCAwO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgX251bTtcclxuLy8gICAgIGdldCBudW0oKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX251bTtcclxuLy8gICAgIH1cclxuLy8gICAgIHNldCBudW0odmFsdWU6IG51bWJlcikge1xyXG4vLyAgICAgICAgIHRoaXMuX251bSA9IHZhbHVlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGxldCBhID0gbmV3IG15ZmxvYXQoMSk7XHJcbi8vIGNjLmxvZyhhLm51bSk7Il19
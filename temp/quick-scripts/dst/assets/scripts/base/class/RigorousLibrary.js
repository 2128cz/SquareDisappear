
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
exports.RigorousRingBuffer = exports.RigorousArray = exports.RigorousMap = exports.RigorousSet = exports.RigorousHash = exports.RigorousMatrix2 = exports.RigorousMatrix3 = exports.RigorousMatrix4 = exports.RigorousSize = exports.RigorousVector2 = exports.RigorousScale = exports.RigorousRotation = exports.RigorousPostion = exports.RigorousVector3 = exports.RigorousVector4 = exports.RigorousValueType = void 0;
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
        _this.HashCodeGate = false;
        _this.HashCodeGate = length ? length > 50 : true;
        _this._HashList = {};
        return _this;
    }
    /**
     * 获取一个字符的哈希值
     * @param code
     */
    RigorousHash.prototype.ToHashCode_ShortWay = function (code) {
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
    RigorousHash.prototype.ToHashCode_LongWay = function (code) {
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
    RigorousHash.prototype.ToHashCode = function (key) {
        if (this.HashCodeGate)
            return this.ToHashCode_ShortWay(key);
        else
            return this.ToHashCode_LongWay(key);
    };
    /**
     * 按键获取元素
     * @param key 键
     */
    RigorousHash.prototype.get = function (key) {
        var hash = this.ToHashCode(key);
        return this._HashList[hash];
    };
    /**
     * 按键设置元素
     * @param key 键
     */
    RigorousHash.prototype.set = function (key, value) {
        var hash = this.ToHashCode(key);
        this._HashList[hash] = value;
    };
    /**
     * 按键删除元素
     * @param key 键
     */
    RigorousHash.prototype.remove = function (key) {
        var hash = this.ToHashCode(key);
        if (this._HashList[hash]) {
            this._HashList[hash].destroy();
            return true;
        }
        return false;
    };
    /**
     * 清除
     */
    RigorousHash.prototype.clean = function () {
        this._HashList = [];
    };
    return RigorousHash;
}(RigorousValueType));
exports.RigorousHash = RigorousHash;
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
    RigorousMap.prototype.set = function (key, value) {
        var objectTagName;
        switch (SysBaseType[typeof (value)]) {
            case SysBaseType.object:
                objectTagName = Object.prototype.toString.call(value);
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
        var hash = this.ToHashCode(key);
        this._HashList[hash] = value;
        return hash;
    };
    return RigorousMap;
}(RigorousHash));
exports.RigorousMap = RigorousMap;
var RigorousArray = /** @class */ (function (_super) {
    __extends(RigorousArray, _super);
    /**
     * 数组类并非用作Array，不要直接使用此类存储参数
     */
    function RigorousArray() {
        var _this = _super.call(this) || this;
        _this._HashList = [];
        return _this;
    }
    /**
     * 按键移除
     */
    RigorousArray.prototype.remove = function (key) {
        this._HashList[key] = null;
    };
    /**
     * 清除
     */
    RigorousArray.prototype.clean = function () {
        this._HashList = [];
    };
    return RigorousArray;
}(RigorousValueType));
exports.RigorousArray = RigorousArray;
var RigorousRingBuffer = /** @class */ (function (_super) {
    __extends(RigorousRingBuffer, _super);
    /**
     * 初始化栈
     * @warn 通用起见没有使用苛刻模式，请不要在任何地方使用非正整数
     */
    function RigorousRingBuffer(size) {
        var _this = _super.call(this) || this;
        _this._StackGetPointer = 0;
        _this._StackPutPointer = 0;
        _this._StackSize = size;
        return _this;
    }
    Object.defineProperty(RigorousRingBuffer.prototype, "_$get", {
        get: function () {
            return this._StackGetPointer;
        },
        set: function (value) {
            this._StackGetPointer += value;
            this._StackGetPointer %= this._StackSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "$get", {
        get: function () {
            return this._StackGetPointer;
        },
        set: function (value) {
            if (value > 0)
                this._StackIsFull = false;
            if (value > this.length)
                this.clean();
            var getPointer = (this._StackGetPointer + value) % this._StackSize;
            this._StackGetPointer = getPointer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "_$put", {
        get: function () {
            return this._StackPutPointer;
        },
        set: function (value) {
            this._StackPutPointer += value;
            this._StackPutPointer %= this._StackSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "$put", {
        get: function () {
            return this._StackPutPointer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "length", {
        /**
         * 获取栈有效长度
         */
        get: function () {
            var len = this._$put - this._$get;
            if (this._StackIsFull)
                return this._StackSize - len;
            return len < 0 ? this._StackSize + len : len;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 直接获取索引项目
     * 这不会触发栈指针变化
     */
    RigorousRingBuffer.prototype.getBuffer = function (index) {
        return this._HashList[index];
    };
    /**
     * 进栈
     * @param object
     */
    RigorousRingBuffer.prototype.push = function (object) {
        this._HashList[this._StackPutPointer] = object;
        this._$put = 1;
        if (this._StackIsFull)
            this._$get = 1;
        if (this._$put == this._$get)
            this._StackIsFull = true;
        return this._$put;
    };
    /**
     * 出栈
     * @param length
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    RigorousRingBuffer.prototype.pull = function (length) {
        this._StackIsFull = false;
        var out = { obj: [], index: [] };
        for (var index = 0; index < Math.min(length, this.length); index++) {
            var outIndex = (index + this._$get) % this._StackSize;
            out.obj.push(this._HashList[outIndex]);
            out.index.push(outIndex);
        }
        this._$get = length;
        return out;
    };
    /**
     * 清空栈
     */
    RigorousRingBuffer.prototype.clean = function () {
        this._HashList = [];
        this._StackGetPointer = 0;
        this._StackPutPointer = 0;
    };
    return RigorousRingBuffer;
}(RigorousArray));
exports.RigorousRingBuffer = RigorousRingBuffer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFJpZ29yb3VzTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSyxXQUVKO0FBRkQsV0FBSyxXQUFXO0lBQ1osaURBQU0sQ0FBQTtJQUFFLGlEQUFNLENBQUE7SUFBRSxtREFBTyxDQUFBO0lBQUUsaURBQU0sQ0FBQTtJQUFFLHVEQUFTLENBQUE7QUFDOUMsQ0FBQyxFQUZJLFdBQVcsS0FBWCxXQUFXLFFBRWY7QUFDRDtJQUFBO0lBRUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSw4Q0FBaUI7QUFHOUI7SUFBcUMsbUNBQWlCO0lBQXREOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxpQkFBaUIsR0FFckQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQXFDLG1DQUFlO0lBQXBEOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxlQUFlLEdBRW5EO0FBRlksMENBQWU7QUFHNUI7SUFBc0Msb0NBQWU7SUFBckQ7O0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnFDLGVBQWUsR0FFcEQ7QUFGWSw0Q0FBZ0I7QUFHN0I7SUFBbUMsaUNBQWU7SUFBbEQ7O0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLENBRmtDLGVBQWUsR0FFakQ7QUFGWSxzQ0FBYTtBQUcxQjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQWtDLGdDQUFlO0lBQWpE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bEIsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUiwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUixJQUFJO0FBQ0osMEJBQTBCO0FBQzFCLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImVudW0gU3lzQmFzZVR5cGUge1xyXG4gICAgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIG9iamVjdCwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yNCBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMyBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1Bvc3Rpb24gZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjMge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNSb3RhdGlvbiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yMyB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NjYWxlIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3IzIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NpemUgZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjIge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXg0IGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXgzIGV4dGVuZHMgUmlnb3JvdXNNYXRyaXg0IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzTWF0cml4MiBleHRlbmRzIFJpZ29yb3VzTWF0cml4NCB7XHJcblxyXG59XHJcbmltcG9ydCB7IEloYXNoIH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNIYXNoIGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUgaW1wbGVtZW50cyBJaGFzaCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5a6a5LmJ5ZOI5biM6KGo55qE5L2/55So5Zy65pmv5pyA5aSn6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aD86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5IYXNoQ29kZUdhdGUgPSBsZW5ndGggPyBsZW5ndGggPiA1MCA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWTiOW4jOihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZGVjbGFyZSBfSGFzaExpc3Q6IGFueVtudW1iZXJdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5a2X56ym55qE5ZOI5biM5YC8XHJcbiAgICAgKiBAcGFyYW0gY29kZSBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfU2hvcnRXYXkoY29kZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaGFzaDogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIChjb2RlKSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBoYXNoID0gY29kZSBhcyBudW1iZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSGFzaENvbXBsZXhpdHlcclxuICAgICAgICAgICAgaGFzaCAlPSAzNztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfTG9uZ1dheShjb2RlOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBoYXNoOiBudW1iZXIgPSA1MzgxO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGNvZGUpID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGhhc2ggPSBjb2RlIGFzIG51bWJlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGhhc2ggKj0gMzM7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFzaCAlPSAxMDEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgSGFzaENvZGVHYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWTiOW4jOWAvOeahOmAieaLqeWZqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgVG9IYXNoQ29kZShrZXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuSGFzaENvZGVHYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX1Nob3J0V2F5KGtleSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX0xvbmdXYXkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiOt+WPluWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldChrZXkpIHtcclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdFtoYXNoXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiuvue9ruWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLlRvSGFzaENvZGUoa2V5KTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFtoYXNoXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu5Yig6Zmk5YWD57SgXHJcbiAgICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5Ub0hhc2hDb2RlKGtleSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX0hhc2hMaXN0W2hhc2hdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NldCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c01hcCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogYW55LCB2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgb2JqZWN0VGFnTmFtZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgICAgIHN3aXRjaCAoU3lzQmFzZVR5cGVbdHlwZW9mICh2YWx1ZSldKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUub2JqZWN0OlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5Db21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSArPSB2YWx1ZVsnX2lkJ107XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgT2JqZWN0S2V5ID0gT2JqZWN0LmtleXModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzExNDUxNCAlIE9iamVjdEtleS5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzQzOTkgJSBPYmplY3RLZXkubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUYWdOYW1lICs9IE9iamVjdEtleVs4ODQ4ICUgT2JqZWN0S2V5Lmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBvYmplY3RUYWdOYW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUuc3RyaW5nOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTeXNCYXNlVHlwZS5udW1iZXI6XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLmJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUudW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcbn1cclxuaW1wb3J0IHsgSWFycmF5IH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNBcnJheSBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIGltcGxlbWVudHMgSWFycmF5IHtcclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE57G75bm26Z2e55So5L2cQXJyYXnvvIzkuI3opoHnm7TmjqXkvb/nlKjmraTnsbvlrZjlgqjlj4LmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX0hhc2hMaXN0OiBhbnlbbnVtYmVyXTtcclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu56e76ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3Rba2V5XSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgIH1cclxufVxyXG5pbXBvcnQgeyBJcmluZ0J1ZmZlciB9IGZyb20gJy4vUmlnb3JvdXNUeXBlJztcclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzUmluZ0J1ZmZlciBleHRlbmRzIFJpZ29yb3VzQXJyYXkgaW1wbGVtZW50cyBJcmluZ0J1ZmZlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluagiCBcclxuICAgICAqIEB3YXJuIOmAmueUqOi1t+ingeayoeacieS9v+eUqOiLm+WIu+aooeW8j++8jOivt+S4jeimgeWcqOS7u+S9leWcsOaWueS9v+eUqOmdnuato+aVtOaVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrR2V0UG9pbnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tQdXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1NpemUgPSBzaXplXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiOaMh+mSiCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWNsYXJlIF9TdGFja0dldFBvaW50ZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ2V0IF8kZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YWNrR2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0IF8kZ2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0dldFBvaW50ZXIgKz0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyICU9IHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgJGdldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGFja0dldFBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0ICRnZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHRoaXMuX1N0YWNrSXNGdWxsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5sZW5ndGgpIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBsZXQgZ2V0UG9pbnRlciA9ICh0aGlzLl9TdGFja0dldFBvaW50ZXIgKyB2YWx1ZSkgJSB0aGlzLl9TdGFja1NpemU7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gZ2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+b5qCI5oyH6ZKIIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlY2xhcmUgX1N0YWNrUHV0UG9pbnRlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBnZXQgXyRwdXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgXyRwdXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgJT0gdGhpcy5fU3RhY2tTaXplO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCAkcHV0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YWNrUHV0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qCI5rex5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZWNsYXJlIF9TdGFja1NpemU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5qCI5ruh5qCH6K6wXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZWNsYXJlIF9TdGFja0lzRnVsbDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagiOacieaViOmVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLl8kcHV0IC0gdGhpcy5fJGdldDtcclxuICAgICAgICBpZiAodGhpcy5fU3RhY2tJc0Z1bGwpIHJldHVybiB0aGlzLl9TdGFja1NpemUgLSBsZW47XHJcbiAgICAgICAgcmV0dXJuIGxlbiA8IDAgPyB0aGlzLl9TdGFja1NpemUgKyBsZW4gOiBsZW47XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOebtOaOpeiOt+WPlue0ouW8lemhueebriBcclxuICAgICAqIOi/meS4jeS8muinpuWPkeagiOaMh+mSiOWPmOWMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QnVmZmVyKGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdFtpbmRleF07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/m+agiFxyXG4gICAgICogQHBhcmFtIG9iamVjdCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2g8VD4ob2JqZWN0OiBUKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFt0aGlzLl9TdGFja1B1dFBvaW50ZXJdID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMuXyRwdXQgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgdGhpcy5fJGdldCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuXyRwdXQgPT0gdGhpcy5fJGdldCkgdGhpcy5fU3RhY2tJc0Z1bGwgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl8kcHV0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlh7rmoIhcclxuICAgICAqIEBwYXJhbSBsZW5ndGggXHJcbiAgICAgKiBAcmV0dXJuIG9ialtdOiBvYmozLCBvYmo0Li4uXHJcbiAgICAgKiBAcmV0dXJuIGluZGV4W106IDMsIDQuLi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1bGw8VCBleHRlbmRzIG51bWJlcj4obGVuZ3RoOiBUKSB7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tJc0Z1bGwgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb3V0ID0geyBvYmo6IFtdLCBpbmRleDogW10gfTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgTWF0aC5taW4obGVuZ3RoLCB0aGlzLmxlbmd0aCk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IG91dEluZGV4ID0gKGluZGV4ICsgdGhpcy5fJGdldCkgJSB0aGlzLl9TdGFja1NpemU7XHJcbiAgICAgICAgICAgIG91dC5vYmoucHVzaCh0aGlzLl9IYXNoTGlzdFtvdXRJbmRleF0pO1xyXG4gICAgICAgICAgICBvdXQuaW5kZXgucHVzaChvdXRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuXyRnZXQgPSBsZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuagiFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLl9TdGFja0dldFBvaW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyDmtYvor5VcclxuLy8gaW50ZXJmYWNlIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIF9udW06IE51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgbXlmbG9hdCBpbXBsZW1lbnRzIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgdGhpcy5fbnVtID0gdmFsdWUgfHwgMDtcclxuLy8gICAgIH1cclxuLy8gICAgIF9udW07XHJcbi8vICAgICBnZXQgbnVtKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9udW07XHJcbi8vICAgICB9XHJcbi8vICAgICBzZXQgbnVtKHZhbHVlOiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLl9udW0gPSB2YWx1ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsZXQgYSA9IG5ldyBteWZsb2F0KDEpO1xyXG4vLyBjYy5sb2coYS5udW0pOyJdfQ==

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
var DevelopersToolGlobal_1 = require("./DevelopersToolGlobal");
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
            var getPointer = DevelopersToolGlobal_1.mathMacro.PMod(value, this._StackSize);
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
        /**
         * 获取有效的进栈位
         */
        get: function () {
            var put = this._StackPutPointer - 1;
            put = put < 0 ? this._StackSize - 1 : put;
            return put;
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
        return this._HashList[DevelopersToolGlobal_1.mathMacro.PMod(index, this._StackSize)];
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
        return this._$put - 1;
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
            this._HashList[outIndex] = undefined;
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
    /**
     * 给定一个索引，转为一个在栈内的有效的索引
     */
    RigorousRingBuffer.prototype.indexAtStack = function (index) {
        return DevelopersToolGlobal_1.mathMacro.PMod(index, this._StackSize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFJpZ29yb3VzTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQXlEO0FBQ3pELElBQUssV0FFSjtBQUZELFdBQUssV0FBVztJQUNaLGlEQUFNLENBQUE7SUFBRSxpREFBTSxDQUFBO0lBQUUsbURBQU8sQ0FBQTtJQUFFLGlEQUFNLENBQUE7SUFBRSx1REFBUyxDQUFBO0FBQzlDLENBQUMsRUFGSSxXQUFXLEtBQVgsV0FBVyxRQUVmO0FBQ0Q7SUFBQTtJQUVBLENBQUM7SUFBRCx3QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksOENBQWlCO0FBRzlCO0lBQXFDLG1DQUFpQjtJQUF0RDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsaUJBQWlCLEdBRXJEO0FBRlksMENBQWU7QUFHNUI7SUFBcUMsbUNBQWU7SUFBcEQ7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm9DLGVBQWUsR0FFbkQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQXNDLG9DQUFlO0lBQXJEOztJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBRkEsQUFFQyxDQUZxQyxlQUFlLEdBRXBEO0FBRlksNENBQWdCO0FBRzdCO0lBQW1DLGlDQUFlO0lBQWxEOztJQUVBLENBQUM7SUFBRCxvQkFBQztBQUFELENBRkEsQUFFQyxDQUZrQyxlQUFlLEdBRWpEO0FBRlksc0NBQWE7QUFHMUI7SUFBcUMsbUNBQWU7SUFBcEQ7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm9DLGVBQWUsR0FFbkQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFr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QUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSSx5Q0FBWSxHQUFuQixVQUFvQixLQUFhO1FBQzdCLE9BQU8sZ0NBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQXZIQSxBQXVIQyxDQXZIdUMsYUFBYSxHQXVIcEQ7QUF2SFksZ0RBQWtCO0FBMEgvQixLQUFLO0FBQ0wsMEJBQTBCO0FBQzFCLG9CQUFvQjtBQUNwQixJQUFJO0FBRUoseUNBQXlDO0FBQ3pDLG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFDbEMsUUFBUTtBQUNSLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUiwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUixJQUFJO0FBQ0osMEJBQTBCO0FBQzFCLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5lbnVtIFN5c0Jhc2VUeXBlIHtcclxuICAgIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBvYmplY3QsIHVuZGVmaW5lZFxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1ZhbHVlVHlwZSB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1ZlY3RvcjQgZXh0ZW5kcyBSaWdvcm91c1ZhbHVlVHlwZSB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1ZlY3RvcjMgZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjQge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNQb3N0aW9uIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3IzIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzUm90YXRpb24gZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjMge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNTY2FsZSBleHRlbmRzIFJpZ29yb3VzVmVjdG9yMyB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1ZlY3RvcjIgZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjQge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNTaXplIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3IyIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzTWF0cml4NCBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzTWF0cml4MyBleHRlbmRzIFJpZ29yb3VzTWF0cml4NCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c01hdHJpeDIgZXh0ZW5kcyBSaWdvcm91c01hdHJpeDQge1xyXG5cclxufVxyXG5pbXBvcnQgeyBJaGFzaCB9IGZyb20gJy4vUmlnb3JvdXNUeXBlJztcclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzSGFzaCBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIGltcGxlbWVudHMgSWhhc2gge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIOWumuS5ieWTiOW4jOihqOeahOS9v+eUqOWcuuaZr+acgOWkp+mVv+W6plxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGg/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuSGFzaENvZGVHYXRlID0gbGVuZ3RoID8gbGVuZ3RoID4gNTAgOiB0cnVlO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0ID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlk4jluIzooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX0hhc2hMaXN0OiBhbnlbbnVtYmVyXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS4gOS4quWtl+espueahOWTiOW4jOWAvFxyXG4gICAgICogQHBhcmFtIGNvZGUgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBUb0hhc2hDb2RlX1Nob3J0V2F5KGNvZGU6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGhhc2g6IG51bWJlciA9IDA7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoY29kZSkgPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgaGFzaCA9IGNvZGUgYXMgbnVtYmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgY29kZSkge1xyXG4gICAgICAgICAgICAgICAgaGFzaCArPSBpdGVyYXRvci5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEhhc2hDb21wbGV4aXR5XHJcbiAgICAgICAgICAgIGhhc2ggJT0gMzc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoYXNoO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBUb0hhc2hDb2RlX0xvbmdXYXkoY29kZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaGFzaDogbnVtYmVyID0gNTM4MTtcclxuICAgICAgICBpZiAodHlwZW9mIChjb2RlKSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBoYXNoID0gY29kZSBhcyBudW1iZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNoICo9IDMzO1xyXG4gICAgICAgICAgICAgICAgaGFzaCArPSBpdGVyYXRvci5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhc2ggJT0gMTAxMztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIEhhc2hDb2RlR2F0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blk4jluIzlgLznmoTpgInmi6nlmahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGUoa2V5OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLkhhc2hDb2RlR2F0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG9IYXNoQ29kZV9TaG9ydFdheShrZXkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG9IYXNoQ29kZV9Mb25nV2F5KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInplK7ojrflj5blhYPntKBcclxuICAgICAqIEBwYXJhbSBrZXkg6ZSuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQoa2V5KSB7XHJcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLlRvSGFzaENvZGUoa2V5KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSGFzaExpc3RbaGFzaF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInplK7orr7nva7lhYPntKBcclxuICAgICAqIEBwYXJhbSBrZXkg6ZSuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5Ub0hhc2hDb2RlKGtleSk7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3RbaGFzaF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruWIoOmZpOWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZShrZXkpIHtcclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIGlmICh0aGlzLl9IYXNoTGlzdFtoYXNoXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9IYXNoTGlzdFtoYXNoXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNTZXQgZXh0ZW5kcyBSaWdvcm91c0hhc2gge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXAgZXh0ZW5kcyBSaWdvcm91c0hhc2gge1xyXG4gICAgcHVibGljIHNldChrZXk6IGFueSwgdmFsdWU6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IG9iamVjdFRhZ05hbWU6IHN0cmluZyB8IG51bWJlcjtcclxuICAgICAgICBzd2l0Y2ggKFN5c0Jhc2VUeXBlW3R5cGVvZiAodmFsdWUpXSkge1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLm9iamVjdDpcclxuICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuQ29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gdmFsdWVbJ19pZCddO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IE9iamVjdEtleSA9IE9iamVjdC5rZXlzKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUYWdOYW1lICs9IE9iamVjdEtleVsxMTQ1MTQgJSBPYmplY3RLZXkubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUYWdOYW1lICs9IE9iamVjdEtleVs0Mzk5ICUgT2JqZWN0S2V5Lmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSArPSBPYmplY3RLZXlbODg0OCAlIE9iamVjdEtleS5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5ID0gb2JqZWN0VGFnTmFtZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLnN0cmluZzpcclxuICAgICAgICAgICAgICAgIGtleSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUubnVtYmVyOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTeXNCYXNlVHlwZS5ib29sZWFuOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gdmFsdWUgPyAxIDogMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLnVuZGVmaW5lZDpcclxuICAgICAgICAgICAgICAgIGtleSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGtleSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLlRvSGFzaENvZGUoa2V5KTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFtoYXNoXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBoYXNoO1xyXG4gICAgfVxyXG59XHJcbmltcG9ydCB7IElhcnJheSB9IGZyb20gJy4vUmlnb3JvdXNUeXBlJztcclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzQXJyYXkgZXh0ZW5kcyBSaWdvcm91c1ZhbHVlVHlwZSBpbXBsZW1lbnRzIElhcnJheSB7XHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOexu+W5tumdnueUqOS9nEFycmF577yM5LiN6KaB55u05o6l5L2/55So5q2k57G75a2Y5YKo5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pWw57uEXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZWNsYXJlIF9IYXNoTGlzdDogYW55W251bWJlcl07XHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruenu+mZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlPFQgZXh0ZW5kcyBudW1iZXI+KGtleTogVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W2tleV0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0ID0gW107XHJcbiAgICB9XHJcbn1cclxuaW1wb3J0IHsgSXJpbmdCdWZmZXIgfSBmcm9tICcuL1JpZ29yb3VzVHlwZSc7XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1JpbmdCdWZmZXIgZXh0ZW5kcyBSaWdvcm91c0FycmF5IGltcGxlbWVudHMgSXJpbmdCdWZmZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmoIggXHJcbiAgICAgKiBAd2FybiDpgJrnlKjotbfop4HmsqHmnInkvb/nlKjoi5vliLvmqKHlvI/vvIzor7fkuI3opoHlnKjku7vkvZXlnLDmlrnkvb/nlKjpnZ7mraPmlbTmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9TdGFja0dldFBvaW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tTaXplID0gc2l6ZVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlh7rmoIjmjIfpkoggXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVjbGFyZSBfU3RhY2tHZXRQb2ludGVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGdldCBfJGdldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGFja0dldFBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldCBfJGdldCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyICs9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrR2V0UG9pbnRlciAlPSB0aGlzLl9TdGFja1NpemU7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0ICRnZXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tHZXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHNldCAkZ2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgPiAwKSB0aGlzLl9TdGFja0lzRnVsbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IHRoaXMubGVuZ3RoKSB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgbGV0IGdldFBvaW50ZXIgPSBtbS5QTW9kKHZhbHVlLHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gZ2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+b5qCI5oyH6ZKIIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlY2xhcmUgX1N0YWNrUHV0UG9pbnRlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBnZXQgXyRwdXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgXyRwdXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgJT0gdGhpcy5fU3RhY2tTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnInmlYjnmoTov5vmoIjkvY1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCAkcHV0KCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHB1dCA9IHRoaXMuX1N0YWNrUHV0UG9pbnRlciAtIDE7XHJcbiAgICAgICAgcHV0ID0gcHV0IDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSAtIDEgOiBwdXQ7XHJcbiAgICAgICAgcmV0dXJuIHB1dDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qCI5rex5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZWNsYXJlIF9TdGFja1NpemU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5qCI5ruh5qCH6K6wXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZWNsYXJlIF9TdGFja0lzRnVsbDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagiOacieaViOmVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLl8kcHV0IC0gdGhpcy5fJGdldDtcclxuICAgICAgICBpZiAodGhpcy5fU3RhY2tJc0Z1bGwpIHJldHVybiB0aGlzLl9TdGFja1NpemUgLSBsZW47XHJcbiAgICAgICAgcmV0dXJuIGxlbiA8IDAgPyB0aGlzLl9TdGFja1NpemUgKyBsZW4gOiBsZW47XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOebtOaOpeiOt+WPlue0ouW8lemhueebriBcclxuICAgICAqIOi/meS4jeS8muinpuWPkeagiOaMh+mSiOWPmOWMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QnVmZmVyKGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdFttbS5QTW9kKGluZGV4LCB0aGlzLl9TdGFja1NpemUpXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+b5qCIXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHVzaDxUPihvYmplY3Q6IFQpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W3RoaXMuX1N0YWNrUHV0UG9pbnRlcl0gPSBvYmplY3Q7XHJcbiAgICAgICAgdGhpcy5fJHB1dCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuX1N0YWNrSXNGdWxsKSB0aGlzLl8kZ2V0ID0gMTtcclxuICAgICAgICBpZiAodGhpcy5fJHB1dCA9PSB0aGlzLl8kZ2V0KSB0aGlzLl9TdGFja0lzRnVsbCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwdXQgLSAxO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlh7rmoIhcclxuICAgICAqIEBwYXJhbSBsZW5ndGggXHJcbiAgICAgKiBAcmV0dXJuIG9ialtdOiBvYmozLCBvYmo0Li4uXHJcbiAgICAgKiBAcmV0dXJuIGluZGV4W106IDMsIDQuLi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1bGw8VCBleHRlbmRzIG51bWJlcj4obGVuZ3RoOiBUKSB7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tJc0Z1bGwgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb3V0ID0geyBvYmo6IFtdLCBpbmRleDogW10gfTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgTWF0aC5taW4obGVuZ3RoLCB0aGlzLmxlbmd0aCk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IG91dEluZGV4ID0gKGluZGV4ICsgdGhpcy5fJGdldCkgJSB0aGlzLl9TdGFja1NpemU7XHJcbiAgICAgICAgICAgIG91dC5vYmoucHVzaCh0aGlzLl9IYXNoTGlzdFtvdXRJbmRleF0pO1xyXG4gICAgICAgICAgICBvdXQuaW5kZXgucHVzaChvdXRJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuX0hhc2hMaXN0W291dEluZGV4XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fJGdldCA9IGxlbmd0aDtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF56m65qCIXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrR2V0UG9pbnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tQdXRQb2ludGVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7meWumuS4gOS4que0ouW8le+8jOi9rOS4uuS4gOS4quWcqOagiOWGheeahOacieaViOeahOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5kZXhBdFN0YWNrKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBtbS5QTW9kKGluZGV4LCB0aGlzLl9TdGFja1NpemUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8g5rWL6K+VXHJcbi8vIGludGVyZmFjZSBraXNtaXRGbG9hdCB7XHJcbi8vICAgICBfbnVtOiBOdW1iZXI7XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIG15ZmxvYXQgaW1wbGVtZW50cyBraXNtaXRGbG9hdCB7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IG51bWJlcikge1xyXG4vLyAgICAgICAgIHRoaXMuX251bSA9IHZhbHVlIHx8IDA7XHJcbi8vICAgICB9XHJcbi8vICAgICBfbnVtO1xyXG4vLyAgICAgZ2V0IG51bSgpIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5fbnVtO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgc2V0IG51bSh2YWx1ZTogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgdGhpcy5fbnVtID0gdmFsdWU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gbGV0IGEgPSBuZXcgbXlmbG9hdCgxKTtcclxuLy8gY2MubG9nKGEubnVtKTsiXX0=
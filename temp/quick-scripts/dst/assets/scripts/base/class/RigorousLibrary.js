
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
            // let put = this._StackPutPointer - 1;
            // put = put < 0 ? this._StackSize - 1 : put;
            // return put;
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
        return this._HashList[DevelopersToolGlobal_1.mathMacro.PMod(index, this._StackSize)];
    };
    /**
     * 进栈
     * @param object
     */
    RigorousRingBuffer.prototype.push = function (object) {
        this._HashList[this._StackPutPointer] = object;
        var lastPut = this._$put;
        this._$put = 1;
        if (this._StackIsFull)
            this._$get = 1;
        if (this._$put == this._$get)
            this._StackIsFull = true;
        return lastPut;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFJpZ29yb3VzTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQXlEO0FBQ3pELElBQUssV0FFSjtBQUZELFdBQUssV0FBVztJQUNaLGlEQUFNLENBQUE7SUFBRSxpREFBTSxDQUFBO0lBQUUsbURBQU8sQ0FBQTtJQUFFLGlEQUFNLENBQUE7SUFBRSx1REFBUyxDQUFBO0FBQzlDLENBQUMsRUFGSSxXQUFXLEtBQVgsV0FBVyxRQUVmO0FBQ0Q7SUFBQTtJQUVBLENBQUM7SUFBRCx3QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksOENBQWlCO0FBRzlCO0lBQXFDLG1DQUFpQjtJQUF0RDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsaUJBQWlCLEdBRXJEO0FBRlksMENBQWU7QUFHNUI7SUFBcUMsbUNBQWU7SUFBcEQ7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm9DLGVBQWUsR0FFbkQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQXNDLG9DQUFlO0lBQXJEOztJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBRkEsQUFFQyxDQUZxQyxlQUFlLEdBRXBEO0FBRlksNENBQWdCO0FBRzdCO0lBQW1DLGlDQUFlO0lBQWxEOztJQUVBLENBQUM7SUFBRCxvQkFBQztBQUFELENBRkEsQUFFQyxDQUZrQyxlQUFlLEdBRWpEO0FBRlksc0NBQWE7QUFHMUI7SUFBcUMsbUNBQWU7SUFBcEQ7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm9DLGVBQWUsR0FFbkQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFr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SUFFRDs7T0FFRztJQUNJLHlDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsT0FBTyxnQ0FBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTCx5QkFBQztBQUFELENBekhBLEFBeUhDLENBekh1QyxhQUFhLEdBeUhwRDtBQXpIWSxnREFBa0I7QUE0SC9CLEtBQUs7QUFDTCwwQkFBMEI7QUFDMUIsb0JBQW9CO0FBQ3BCLElBQUk7QUFFSix5Q0FBeUM7QUFDekMsb0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQyxRQUFRO0FBQ1IsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsUUFBUTtBQUNSLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSLElBQUk7QUFDSiwwQkFBMEI7QUFDMUIsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmVudW0gU3lzQmFzZVR5cGUge1xyXG4gICAgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIG9iamVjdCwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yNCBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMyBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1Bvc3Rpb24gZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjMge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNSb3RhdGlvbiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yMyB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NjYWxlIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3IzIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NpemUgZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjIge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXg0IGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXgzIGV4dGVuZHMgUmlnb3JvdXNNYXRyaXg0IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzTWF0cml4MiBleHRlbmRzIFJpZ29yb3VzTWF0cml4NCB7XHJcblxyXG59XHJcbmltcG9ydCB7IEloYXNoIH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNIYXNoIGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUgaW1wbGVtZW50cyBJaGFzaCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5a6a5LmJ5ZOI5biM6KGo55qE5L2/55So5Zy65pmv5pyA5aSn6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aD86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5IYXNoQ29kZUdhdGUgPSBsZW5ndGggPyBsZW5ndGggPiA1MCA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWTiOW4jOihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZGVjbGFyZSBfSGFzaExpc3Q6IGFueVtudW1iZXJdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5a2X56ym55qE5ZOI5biM5YC8XHJcbiAgICAgKiBAcGFyYW0gY29kZSBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfU2hvcnRXYXkoY29kZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaGFzaDogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIChjb2RlKSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBoYXNoID0gY29kZSBhcyBudW1iZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSGFzaENvbXBsZXhpdHlcclxuICAgICAgICAgICAgaGFzaCAlPSAzNztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfTG9uZ1dheShjb2RlOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBoYXNoOiBudW1iZXIgPSA1MzgxO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGNvZGUpID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGhhc2ggPSBjb2RlIGFzIG51bWJlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGhhc2ggKj0gMzM7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFzaCAlPSAxMDEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgSGFzaENvZGVHYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWTiOW4jOWAvOeahOmAieaLqeWZqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgVG9IYXNoQ29kZShrZXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuSGFzaENvZGVHYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX1Nob3J0V2F5KGtleSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX0xvbmdXYXkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiOt+WPluWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldChrZXkpIHtcclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdFtoYXNoXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiuvue9ruWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLlRvSGFzaENvZGUoa2V5KTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFtoYXNoXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu5Yig6Zmk5YWD57SgXHJcbiAgICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5Ub0hhc2hDb2RlKGtleSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX0hhc2hMaXN0W2hhc2hdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NldCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c01hcCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogYW55LCB2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgb2JqZWN0VGFnTmFtZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgICAgIHN3aXRjaCAoU3lzQmFzZVR5cGVbdHlwZW9mICh2YWx1ZSldKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUub2JqZWN0OlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5Db21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSArPSB2YWx1ZVsnX2lkJ107XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgT2JqZWN0S2V5ID0gT2JqZWN0LmtleXModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzExNDUxNCAlIE9iamVjdEtleS5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzQzOTkgJSBPYmplY3RLZXkubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUYWdOYW1lICs9IE9iamVjdEtleVs4ODQ4ICUgT2JqZWN0S2V5Lmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBvYmplY3RUYWdOYW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUuc3RyaW5nOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTeXNCYXNlVHlwZS5udW1iZXI6XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLmJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUudW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcbn1cclxuaW1wb3J0IHsgSWFycmF5IH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNBcnJheSBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIGltcGxlbWVudHMgSWFycmF5IHtcclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE57G75bm26Z2e55So5L2cQXJyYXnvvIzkuI3opoHnm7TmjqXkvb/nlKjmraTnsbvlrZjlgqjlj4LmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX0hhc2hMaXN0OiBhbnlbbnVtYmVyXTtcclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu56e76ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3Rba2V5XSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgIH1cclxufVxyXG5pbXBvcnQgeyBJcmluZ0J1ZmZlciB9IGZyb20gJy4vUmlnb3JvdXNUeXBlJztcclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzUmluZ0J1ZmZlciBleHRlbmRzIFJpZ29yb3VzQXJyYXkgaW1wbGVtZW50cyBJcmluZ0J1ZmZlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluagiCBcclxuICAgICAqIEB3YXJuIOmAmueUqOi1t+ingeayoeacieS9v+eUqOiLm+WIu+aooeW8j++8jOivt+S4jeimgeWcqOS7u+S9leWcsOaWueS9v+eUqOmdnuato+aVtOaVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrR2V0UG9pbnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tQdXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1NpemUgPSBzaXplXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiOaMh+mSiCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWNsYXJlIF9TdGFja0dldFBvaW50ZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ2V0IF8kZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YWNrR2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0IF8kZ2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0dldFBvaW50ZXIgKz0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyICU9IHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgJGdldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGFja0dldFBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0ICRnZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHRoaXMuX1N0YWNrSXNGdWxsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5sZW5ndGgpIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBsZXQgZ2V0UG9pbnRlciA9IG1tLlBNb2QodmFsdWUsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gZ2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+b5qCI5oyH6ZKIIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlY2xhcmUgX1N0YWNrUHV0UG9pbnRlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBnZXQgXyRwdXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgXyRwdXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgJT0gdGhpcy5fU3RhY2tTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnInmlYjnmoTov5vmoIjkvY1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCAkcHV0KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gbGV0IHB1dCA9IHRoaXMuX1N0YWNrUHV0UG9pbnRlciAtIDE7XHJcbiAgICAgICAgLy8gcHV0ID0gcHV0IDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSAtIDEgOiBwdXQ7XHJcbiAgICAgICAgLy8gcmV0dXJuIHB1dDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIjmt7HluqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX1N0YWNrU2l6ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoIjmu6HmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX1N0YWNrSXNGdWxsOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qCI5pyJ5pWI6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuXyRwdXQgLSB0aGlzLl8kZ2V0O1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgcmV0dXJuIHRoaXMuX1N0YWNrU2l6ZSAtIGxlbjtcclxuICAgICAgICByZXR1cm4gbGVuIDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSArIGxlbiA6IGxlbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog55u05o6l6I635Y+W57Si5byV6aG555uuIFxyXG4gICAgICog6L+Z5LiN5Lya6Kem5Y+R5qCI5oyH6ZKI5Y+Y5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCdWZmZXIoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0hhc2hMaXN0W21tLlBNb2QoaW5kZXgsIHRoaXMuX1N0YWNrU2l6ZSldO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5vmoIhcclxuICAgICAqIEBwYXJhbSBvYmplY3QgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoPFQ+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3RbdGhpcy5fU3RhY2tQdXRQb2ludGVyXSA9IG9iamVjdDtcclxuICAgICAgICBsZXQgbGFzdFB1dCA9IHRoaXMuXyRwdXQ7XHJcbiAgICAgICAgdGhpcy5fJHB1dCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuX1N0YWNrSXNGdWxsKSB0aGlzLl8kZ2V0ID0gMTtcclxuICAgICAgICBpZiAodGhpcy5fJHB1dCA9PSB0aGlzLl8kZ2V0KSB0aGlzLl9TdGFja0lzRnVsbCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RQdXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiFxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBcclxuICAgICAqIEByZXR1cm4gb2JqW106IG9iajMsIG9iajQuLi5cclxuICAgICAqIEByZXR1cm4gaW5kZXhbXTogMywgNC4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHVsbDxUIGV4dGVuZHMgbnVtYmVyPihsZW5ndGg6IFQpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0lzRnVsbCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBvdXQgPSB7IG9iajogW10sIGluZGV4OiBbXSB9O1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBNYXRoLm1pbihsZW5ndGgsIHRoaXMubGVuZ3RoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgb3V0SW5kZXggPSAoaW5kZXggKyB0aGlzLl8kZ2V0KSAlIHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgICAgICAgICAgb3V0Lm9iai5wdXNoKHRoaXMuX0hhc2hMaXN0W291dEluZGV4XSk7XHJcbiAgICAgICAgICAgIG91dC5pbmRleC5wdXNoKG91dEluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fSGFzaExpc3Rbb3V0SW5kZXhdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl8kZ2V0ID0gbGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrmoIhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uZ5a6a5LiA5Liq57Si5byV77yM6L2s5Li65LiA5Liq5Zyo5qCI5YaF55qE5pyJ5pWI55qE57Si5byVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbmRleEF0U3RhY2soaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG1tLlBNb2QoaW5kZXgsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyDmtYvor5VcclxuLy8gaW50ZXJmYWNlIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIF9udW06IE51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgbXlmbG9hdCBpbXBsZW1lbnRzIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgdGhpcy5fbnVtID0gdmFsdWUgfHwgMDtcclxuLy8gICAgIH1cclxuLy8gICAgIF9udW07XHJcbi8vICAgICBnZXQgbnVtKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9udW07XHJcbi8vICAgICB9XHJcbi8vICAgICBzZXQgbnVtKHZhbHVlOiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLl9udW0gPSB2YWx1ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsZXQgYSA9IG5ldyBteWZsb2F0KDEpO1xyXG4vLyBjYy5sb2coYS5udW0pOyJdfQ==
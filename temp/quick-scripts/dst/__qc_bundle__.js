
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/load/Loading');
require('./assets/scripts/base/class/ActorClass');
require('./assets/scripts/base/class/DevelopersToolClass');
require('./assets/scripts/base/class/DevelopersToolGlobal');
require('./assets/scripts/base/class/DiologClass');
require('./assets/scripts/base/class/DynamicPanelClass');
require('./assets/scripts/base/class/GridAdsorb');
require('./assets/scripts/base/class/PanelTool');
require('./assets/scripts/base/class/PawnClass');
require('./assets/scripts/base/class/PawnMovement');
require('./assets/scripts/base/class/RigorousLibrary');
require('./assets/scripts/base/class/RigorousType');
require('./assets/scripts/base/tool/NoRootTree');
require('./assets/scripts/game/Block');
require('./assets/scripts/game/GameLevel');
require('./assets/scripts/game/GameUI');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/load/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d4fYAyCZEeID+WJLUyKeU', 'Loading');
// load/Loading.ts

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
// SIGNPOST 加载页面，但不属于开发类
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolGlobal_1 = require("../scripts/base/class/DevelopersToolGlobal");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logoNode = null;
        _this.progressBar = null;
        // SIGNPOST 进度条部分
        _this.progressUpdateRate = 1;
        _this.progressRandomChangeTime = .2;
        _this.progressWaitForLoad = .85;
        _this.readyToShow = null;
        // SIGNPOST 目标场景部分
        _this.readyToGoSence = null;
        // TAG 自定义数值                                                                                         
        /**
         * 进度条数值
         * 数值应该在0-100
         */
        _this.ProgressValue = 0;
        /**
         * 加载进度，以资源载入完成+1
         * 当载入计数等于资源数时，完成加载
         */
        _this.loadProgressCount = 0;
        _this.loadPorgressCountMax = Object.keys(DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog).length;
        /**
         * 动画播放完毕标记
         * 数值应该在0-100
         */
        _this.animationOver = false;
        return _this;
    }
    // TAG LIFE-CYCLE callbacks                                                                              
    Loading.prototype.onLoad = function () {
        // 播放动画
        this.playLogoAnimation();
        //检查游戏更新
        this.checkGameNewVersion();
    };
    Loading.prototype.start = function () {
        // 开始加载所有资源
        this.loadAllResources();
    };
    Loading.prototype.update = function (dt) {
        // 等待动画播放完毕
        if (!this.animationOver)
            return;
        // 如果有定义其他组件（比如按钮）来完成场景载入触发时，等待组件响应
        if (this.readyToShow != null)
            return;
        // 否则加载完成后直接进入场景
        if (this.loadProgressCount >= this.loadPorgressCountMax) {
            this.onLoadScene();
        }
    };
    // TAG USER FUNCTION:                                                                                    
    // tag 用户方法 
    /**
     * 播放开始动画
     */
    Loading.prototype.playLogoAnimation = function () {
        var _this = this;
        cc.tween(this.logoNode)
            .delay(0.5)
            .to(1, { opacity: 255 })
            .delay(1)
            .call(function () {
            _this.animationOver = true;
        })
            .start();
    };
    /**
     * 如果此场景内有其他按钮等组件触发时
     * 可以通过这里进行中转
     * 要求格式为 on + todo
     */
    Loading.prototype.onButtonClick = function (event, customDate) {
        if (customDate.indexOf("on") <= 0)
            this[customDate]();
        else
            this.onLoadScene();
    };
    /**
     * 加载场景
     * @param sceneTarget 可选场景目标
     */
    Loading.prototype.onLoadScene = function (sceneTarget) {
        var _this = this;
        cc.director.loadScene((function () {
            return sceneTarget ?
                sceneTarget instanceof String ?
                    sceneTarget :
                    sceneTarget.name :
                _this.readyToGoSence.name;
        })());
    };
    // tag 客户端方法 
    /**
     * 加载全部资源包
     */
    Loading.prototype.loadAllResources = function () {
        var _this = this;
        var resKeys = Object.keys(DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog);
        resKeys.forEach(function (url) {
            var resLog = DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog[url];
            DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[resLog.url] = DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[resLog.url] || {};
            _this.loadResources(url, resLog.type, resLog.url);
        });
    };
    /**
     * 按类加载资源包
     * @param url
     * @param type
     * @param saveUrl
     */
    Loading.prototype.loadResources = function (url, type, saveUrl) {
        var self = this;
        cc.resources.loadDir(url, type, function (completedCount, totalCount, item) {
            // cc.log("正在加载:" + item.url);
            self.ProgressValue = completedCount / totalCount;
            // cc.log(`加载进度: ${self.ProgressValue * 100}%`);
        }, function (err, data) {
            if (err) {
                cc.log("\u52A0\u8F7D" + type + "\u65F6\u53D1\u751F\u9519\u8BEF");
            }
            else {
                for (var i in data) {
                    var name = (data[i] instanceof cc.SpriteAtlas) ? data[i].name.slice(0, -6) : data[i].name;
                    if (data[i] instanceof cc.JsonAsset) {
                        DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[saveUrl][name] = data[i]['json'];
                    }
                    else {
                        DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[saveUrl][name] = data[i];
                    }
                }
            }
            self.loadProgressCount++;
        });
    };
    // tag 微信平台更新 
    /**
     * 检查游戏新版本
     */
    Loading.prototype.checkGameNewVersion = function () {
        // 仅关注微信平台
        if (!(cc.sys.platform == cc.sys.WECHAT_GAME))
            return false;
        // 尝试获取微信更新管理器
        var updateManager;
        try {
            updateManager = wx.getUpdateManager();
            if (!updateManager)
                return false;
        }
        catch (_a) {
            return false;
        }
        // 获取全局唯一的版本更新管理器，用于管理小程序更新
        updateManager.onCheckForUpdate(function (res) {
            // 监听向微信后台请求检查更新结果事件 
            console.log("是否有新版本：" + res.hasUpdate);
            if (res.hasUpdate) {
                //如果有新版本                
                // 小程序有新版本，会主动触发下载操作        
                updateManager.onUpdateReady(function () {
                    //当新版本下载完成，会进行回调          
                    wx.showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，单击确定重启小程序',
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm) {
                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启小程序               
                                updateManager.applyUpdate();
                            }
                        }
                    });
                });
                // 小程序有新版本，会主动触发下载操作（无需开发者触发）        
                updateManager.onUpdateFailed(function () {
                    //当新版本下载失败，会进行回调          
                    wx.showModal({
                        title: '提示',
                        content: '检查到有新版本，但下载失败，请稍后尝试',
                        showCancel: false,
                    });
                });
            }
        });
        return true;
    };
    //微信分包
    Loading.prototype.wxSubpackage = function () {
        var self = this;
        wx.loadSubpackage({
            name: 'resources',
            success: function (res) {
                // 分包加载成功后通过 success 回调
                self.loadAllResources();
            },
            fail: function (err) {
                // 分包加载失败通过 fail 回调
                console.error("load " + name + " fail", err);
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "logoNode", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "进度条目标(可选)",
            tooltip: "进度条目标设定后可以指定动画",
        })
    ], Loading.prototype, "progressBar", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画速率",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressUpdateRate", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画随机变化间隔",
            tooltip: "进度条动画随机变化间隔",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressRandomChangeTime", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画等待加载完成位置",
            tooltip: "进度条动画等待加载完成位置",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressWaitForLoad", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "完成后显示",
            tooltip: "当加载完成时，被启用的节点",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "readyToShow", void 0);
    __decorate([
        property({
            type: cc.SceneAsset,
            displayName: "完成后加载目标",
            tooltip: "当加载完成时，加载的场景，如果有启用节点，则等待节点触发",
        })
    ], Loading.prototype, "readyToGoSence", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsbUZBQTBGO0FBTTFGO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBeVFDO1FBdFFHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFPekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQWlCO1FBUWpCLHdCQUFrQixHQUFHLENBQUMsQ0FBQztRQVV2Qiw4QkFBd0IsR0FBRyxFQUFFLENBQUM7UUFVOUIseUJBQW1CLEdBQUcsR0FBRyxDQUFDO1FBUTFCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGtCQUFrQjtRQU1sQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQTJCdEIscUdBQXFHO1FBRXJHOzs7V0FHRztRQUNILG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCOzs7V0FHRztRQUNILHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QiwwQkFBb0IsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLDJDQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFN0U7OztXQUdHO1FBQ0gsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBbUtuQyxDQUFDO0lBL01HLHlHQUF5RztJQUV6Ryx3QkFBTSxHQUFOO1FBQ0ksT0FBTztRQUNQLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLFFBQVE7UUFDUixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEVBQUU7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QUFlO1lBQzVCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakQsQ0FBQzt3REFDd0I7SUFRMUI7UUFOQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixXQUFXLEVBQUUsT0FBTztZQUNwQixPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pELENBQUM7Z0RBQ2lCO0lBUW5CO1FBTEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVO1lBQ25CLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLE9BQU8sRUFBRSw4QkFBOEI7U0FDMUMsQ0FBQzttREFDb0I7SUF4REwsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXlRM0I7SUFBRCxjQUFDO0NBelFELEFBeVFDLENBelFvQyxFQUFFLENBQUMsU0FBUyxHQXlRaEQ7a0JBelFvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU0lHTlBPU1Qg5Yqg6L296aG16Z2i77yM5L2G5LiN5bGe5LqO5byA5Y+R57G7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuLi9zY3JpcHRzL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuLy8g6K6p57yW6K+R5Zmo5b+955Wl5bmz5Y+wQVBJ5oql6ZSZXHJcbmRlY2xhcmUgdmFyIHd4OiBhbnk7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ29Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h55uu5qCHKOWPr+mAiSlcIixcclxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoeebruagh+iuvuWumuWQjuWPr+S7peaMh+WumuWKqOeUu1wiLFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDov5vluqbmnaHpg6jliIZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAyLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHliqjnlLvpgJ/njodcIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzVXBkYXRlUmF0ZSA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDIsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeWKqOeUu+maj+acuuWPmOWMlumXtOmalFwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi6L+b5bqm5p2h5Yqo55S76ZqP5py65Y+Y5YyW6Ze06ZqUXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDsgfSxcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc1JhbmRvbUNoYW5nZVRpbWUgPSAuMjtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMiwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h5Yqo55S7562J5b6F5Yqg6L295a6M5oiQ5L2N572uXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaHliqjnlLvnrYnlvoXliqDovb3lrozmiJDkvY3nva5cIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzV2FpdEZvckxvYWQgPSAuODU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWujOaIkOWQjuaYvuekulwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5b2T5Yqg6L295a6M5oiQ5pe277yM6KKr5ZCv55So55qE6IqC54K5XCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDsgfSxcclxuICAgIH0pXHJcbiAgICByZWFkeVRvU2hvdyA9IG51bGw7XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg55uu5qCH5Zy65pmv6YOo5YiGXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlNjZW5lQXNzZXQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5a6M5oiQ5ZCO5Yqg6L2955uu5qCHXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLlvZPliqDovb3lrozmiJDml7bvvIzliqDovb3nmoTlnLrmma/vvIzlpoLmnpzmnInlkK/nlKjoioLngrnvvIzliJnnrYnlvoXoioLngrnop6blj5FcIixcclxuICAgIH0pXHJcbiAgICByZWFkeVRvR29TZW5jZSA9IG51bGw7XHJcblxyXG4gICAgLy8gVEFHIExJRkUtQ1lDTEUgY2FsbGJhY2tzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOaSreaUvuWKqOeUu1xyXG4gICAgICAgIHRoaXMucGxheUxvZ29BbmltYXRpb24oKTtcclxuICAgICAgICAvL+ajgOafpea4uOaIj+abtOaWsFxyXG4gICAgICAgIHRoaXMuY2hlY2tHYW1lTmV3VmVyc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOW8gOWni+WKoOi9veaJgOaciei1hOa6kFxyXG4gICAgICAgIHRoaXMubG9hZEFsbFJlc291cmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIOetieW+heWKqOeUu+aSreaUvuWujOavlVxyXG4gICAgICAgIGlmICghdGhpcy5hbmltYXRpb25PdmVyKSByZXR1cm47XHJcbiAgICAgICAgLy8g5aaC5p6c5pyJ5a6a5LmJ5YW25LuW57uE5Lu277yI5q+U5aaC5oyJ6ZKu77yJ5p2l5a6M5oiQ5Zy65pmv6L295YWl6Kem5Y+R5pe277yM562J5b6F57uE5Lu25ZON5bqUXHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHlUb1Nob3cgIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIOWQpuWImeWKoOi9veWujOaIkOWQjuebtOaOpei/m+WFpeWcuuaZr1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRQcm9ncmVzc0NvdW50ID49IHRoaXMubG9hZFBvcmdyZXNzQ291bnRNYXgpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWRTY2VuZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcg6Ieq5a6a5LmJ5pWw5YC8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/m+W6puadoeaVsOWAvFxyXG4gICAgICog5pWw5YC85bqU6K+l5ZyoMC0xMDBcclxuICAgICAqL1xyXG4gICAgUHJvZ3Jlc3NWYWx1ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6pu+8jOS7pei1hOa6kOi9veWFpeWujOaIkCsxXHJcbiAgICAgKiDlvZPovb3lhaXorqHmlbDnrYnkuo7otYTmupDmlbDml7bvvIzlrozmiJDliqDovb1cclxuICAgICAqL1xyXG4gICAgbG9hZFByb2dyZXNzQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBsb2FkUG9yZ3Jlc3NDb3VudE1heDogbnVtYmVyID0gT2JqZWN0LmtleXMoY2N2di5sb2FkUmVzb3VyY2VzY2F0YWxvZykubGVuZ3RoO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo55S75pKt5pS+5a6M5q+V5qCH6K6wXHJcbiAgICAgKiDmlbDlgLzlupTor6XlnKgwLTEwMFxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25PdmVyOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+aWueazlSBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuW8gOWni+WKqOeUu1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBsYXlMb2dvQW5pbWF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9nb05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuZGVsYXkoMSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25PdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWmguaenOatpOWcuuaZr+WGheacieWFtuS7luaMiemSruetiee7hOS7tuinpuWPkeaXtlxyXG4gICAgICog5Y+v5Lul6YCa6L+H6L+Z6YeM6L+b6KGM5Lit6L2sXHJcbiAgICAgKiDopoHmsYLmoLzlvI/kuLogb24gKyB0b2RvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGN1c3RvbURhdGUuaW5kZXhPZihcIm9uXCIpIDw9IDApXHJcbiAgICAgICAgICAgIHRoaXNbY3VzdG9tRGF0ZV0oKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMub25Mb2FkU2NlbmUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295Zy65pmvXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVUYXJnZXQg5Y+v6YCJ5Zy65pmv55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25Mb2FkU2NlbmUoc2NlbmVUYXJnZXQ/OiBzdHJpbmcgfCBjYy5TY2VuZUFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY2VuZVRhcmdldCA/XHJcbiAgICAgICAgICAgICAgICBzY2VuZVRhcmdldCBpbnN0YW5jZW9mIFN0cmluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVUYXJnZXQgOlxyXG4gICAgICAgICAgICAgICAgICAgIChzY2VuZVRhcmdldCBhcyBjYy5TY2VuZUFzc2V0KS5uYW1lIDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb0dvU2VuY2UubmFtZTtcclxuICAgICAgICB9KSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5a6i5oi356uv5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YWo6YOo6LWE5rqQ5YyFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZEFsbFJlc291cmNlcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzS2V5cyA9IE9iamVjdC5rZXlzKGNjdnYubG9hZFJlc291cmNlc2NhdGFsb2cpO1xyXG4gICAgICAgIHJlc0tleXMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzTG9nID0gY2N2di5sb2FkUmVzb3VyY2VzY2F0YWxvZ1t1cmxdO1xyXG4gICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtyZXNMb2cudXJsXSA9IGNjdnYud2FyZWhvdXNlW3Jlc0xvZy51cmxdIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXModXJsLCByZXNMb2cudHlwZSwgcmVzTG9nLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInnsbvliqDovb3otYTmupDljIVcclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSBzYXZlVXJsIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRSZXNvdXJjZXModXJsLCB0eXBlLCBzYXZlVXJsKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKHVybCwgdHlwZSxcclxuXHJcbiAgICAgICAgICAgIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5Zyo5Yqg6L29OlwiICsgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Qcm9ncmVzc1ZhbHVlID0gY29tcGxldGVkQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGDliqDovb3ov5vluqY6ICR7c2VsZi5Qcm9ncmVzc1ZhbHVlICogMTAwfSVgKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYOWKoOi9vSR7dHlwZX3ml7blj5HnlJ/plJnor69gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gKGRhdGFbaV0gaW5zdGFuY2VvZiBjYy5TcHJpdGVBdGxhcykgPyBkYXRhW2ldLm5hbWUuc2xpY2UoMCwgLTYpIDogZGF0YVtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXSBpbnN0YW5jZW9mIGNjLkpzb25Bc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2N2di53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldWydqc29uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtzYXZlVXJsXVtuYW1lXSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRQcm9ncmVzc0NvdW50Kys7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOW+ruS/oeW5s+WPsOabtOaWsCBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpea4uOaIj+aWsOeJiOacrFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrR2FtZU5ld1ZlcnNpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8g5LuF5YWz5rOo5b6u5L+h5bmz5Y+wXHJcbiAgICAgICAgaWYgKCEoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDlsJ3or5Xojrflj5blvq7kv6Hmm7TmlrDnrqHnkIblmahcclxuICAgICAgICBsZXQgdXBkYXRlTWFuYWdlcjogYW55O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIGlmICghdXBkYXRlTWFuYWdlcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICAvLyDojrflj5blhajlsYDllK/kuIDnmoTniYjmnKzmm7TmlrDnrqHnkIblmajvvIznlKjkuo7nrqHnkIblsI/nqIvluo/mm7TmlrBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyDnm5HlkKzlkJHlvq7kv6HlkI7lj7Dor7fmsYLmo4Dmn6Xmm7TmlrDnu5Pmnpzkuovku7YgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5pyJ5paw54mI5pys77yaXCIgKyByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5oYXNVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pyJ5paw54mI5pysICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g5bCP56iL5bqP5pyJ5paw54mI5pys77yM5Lya5Li75Yqo6Kem5Y+R5LiL6L295pON5L2cICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lvZPmlrDniYjmnKzkuIvovb3lrozmiJDvvIzkvJrov5vooYzlm57osIMgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5Y2V5Ye756Gu5a6a6YeN5ZCv5bCP56iL5bqPJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK/lsI/nqIvluo8gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIOWwj+eoi+W6j+acieaWsOeJiOacrO+8jOS8muS4u+WKqOinpuWPkeS4i+i9veaTjeS9nO+8iOaXoOmcgOW8gOWPkeiAheinpuWPke+8iSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+aWsOeJiOacrOS4i+i9veWksei0pe+8jOS8mui/m+ihjOWbnuiwgyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmo4Dmn6XliLDmnInmlrDniYjmnKzvvIzkvYbkuIvovb3lpLHotKXvvIzor7fnqI3lkI7lsJ3or5UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b6u5L+h5YiG5YyFXHJcbiAgICBwcml2YXRlIHd4U3VicGFja2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd3gubG9hZFN1YnBhY2thZ2Uoe1xyXG4gICAgICAgICAgICBuYW1lOiAncmVzb3VyY2VzJywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3miJDlip/lkI7pgJrov4cgc3VjY2VzcyDlm57osINcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZEFsbFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3lpLHotKXpgJrov4cgZmFpbCDlm57osINcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGxvYWQgJHtuYW1lfSBmYWlsYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6bc6FrRRVPbpB9I2O8jbmT', 'Block');
// scripts/game/Block.ts

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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnClass_1 = require("../base/class/PawnClass");
var NoRootTree_1 = require("../base/tool/NoRootTree");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var block = /** @class */ (function (_super) {
    __extends(block, _super);
    function block() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // SIGNPOST macro                                                                                        
        /**
         * 所处树节点索引
         * 当处于玩家阵营时，此索引无效
         */
        _this._TreeIndex = null;
        _this._ColNode = null;
        _this._ColComponent = null;
        /**
         * 是否允许处理碰撞，这也代表这是属于玩家阵营的方块
         */
        _this.enabledCollision = false;
        /**
         * 冲突标记
         */
        _this._Conglict = false;
        /**
         * 剩余等待计数
         */
        _this._WaitForConflict = 1;
        return _this;
    }
    // onLoad () {}
    block.prototype.start = function () {
    };
    block.prototype.update = function (dt) {
        if (!this.conflict && this.enabledCollision)
            this.node['playerMovement'].updateByVelocity(dt);
        else
            this.node['otherMovement'].updateByVelocity(dt);
    };
    // TAG USER FUNCTION:                                                                                    
    /**
     * 初始化事件
     * @param Index
     */
    block.prototype.init = function (Index, playerMode) {
        if (playerMode === void 0) { playerMode = false; }
        if (playerMode) {
            this.node.group = 'player';
            this.enabledCollision = true;
        }
        else
            this.treeIndex = Index;
    };
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionEnter = function (other, self) {
        var _a;
        if (!this.enabledCollision)
            return;
        cc.log("碰撞开始");
        // 获取碰撞的树节点
        var otherBlock = this.getBlockComponent(other);
        var otherTreeIndex = otherBlock.treeIndex;
        if (typeof otherTreeIndex == 'number') {
            var selfTreeIndex = NoRootTree_1.default.tree.getNextIndex(otherTreeIndex, -1);
            var treeGroup = NoRootTree_1.default.tree.getBuffer(selfTreeIndex);
            // 如果组在树中
            if (treeGroup) {
                // 由于自己的到来而填充了一行
                if (Object.keys(treeGroup).length + 1 >= DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.column) {
                    // 就销毁之后包括自己在内的所有节点
                    this.destroyTreeNodeAfterIndex(selfTreeIndex + 1);
                    return;
                }
                // 而不能填充一行的话
                else {
                    // 临时加入到此组中
                    treeGroup[this['_id']] = this.node;
                }
            }
            // 如果组不在树中，说明在最外边
            else {
                NoRootTree_1.default.tree.addFromFront((_a = {}, _a[this['_id']] = this.node, _a));
            }
            this.treeIndex = selfTreeIndex;
        }
        // 如果还未存在冲突
        if (!this.conflict) {
            // 对齐,避免发生重复对齐
            this.AlignPos = otherBlock.AlignPos;
        }
        // 标记为冲突
        this.markConflictAndCopyMotion();
    };
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionStay = function (other, self) {
        if (!this.enabledCollision)
            return;
        // if (ccvv.getInstanceByName())
        if (this.waitForConflict)
            cc.log("碰撞中");
    };
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionExit = function (other, self) {
        if (!this.enabledCollision)
            return;
        if (!this.node.isValid)
            return;
        cc.log("碰撞结束");
        this.conflict = true;
    };
    // SIGNPOST function                                                                                     
    /**
     * 从给定索引处销毁所有节点，包括自身
     * @param index
     */
    block.prototype.destroyTreeNodeAfterIndex = function (index) {
        var treeBehindObject = NoRootTree_1.default.tree.cut(index).obj;
        treeBehindObject.forEach(function (objectElement) {
            Object.keys(objectElement).forEach(function (elementName) {
                objectElement[elementName].destroy();
            });
        });
        this.node.destroy();
    };
    /**
     * 在给定树索引位置上添加自身
     * @param index
     */
    block.prototype.addTreeNodeAtIndex = function (index) {
    };
    /**
     * 标记为冲突并复制运动
     * 标记冲突时意味着运动将朝向新的运动组件
     * @param index
     */
    block.prototype.markConflictAndCopyMotion = function () {
        // 标记冲突并复制运动
        this.conflict = true;
        if (!this.node['otherMovement'])
            DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.bindMovement(this.node);
        // 对齐到任意节点中
        // let treeIndexObject = NTR.tree.getBuffer(index);
        // if (!treeIndexObject) {
        //     treeIndexObject = NTR.tree.getBuffer(NTR.tree.getNextIndex(index, 1));
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y - ccvv.fristScript.cubeHeight));
        // }
        // else {
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y));
        // }
    };
    Object.defineProperty(block.prototype, "treeIndex", {
        get: function () { return this._TreeIndex; },
        set: function (value) { this._TreeIndex = value; },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取其他方块node上的block组件
     * @param block
     */
    block.prototype.getBlockComponent = function (block) {
        var blockNode = block instanceof cc.Node ? block : block.node;
        if (!this._ColNode || this._ColNode != blockNode)
            this._ColComponent = blockNode.getComponent('Block');
        return this._ColComponent;
    };
    Object.defineProperty(block.prototype, "conflict", {
        get: function () { return this._Conglict; },
        /**
         * 标记或加入到冲突
         */
        set: function (value) {
            // if (typeof value == 'boolean') {
            this._Conglict = value;
            // }
            // else {
            //     this._Conglict = true;
            //     ccvv.setInstanceByName(value, this.node);
            // }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "waitForConflict", {
        /**
         * 是否等待冲突
         */
        get: function () {
            return this._WaitForConflict-- <= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "AlignPos", {
        /**
         * 获取对齐坐标
         */
        get: function () {
            if (!this.enabledCollision) {
                var treeIndexObject = NoRootTree_1.default.tree.getBuffer(NoRootTree_1.default.tree.getNextIndex(this.treeIndex, -1));
                if (treeIndexObject) {
                    var AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
                    return new cc.Vec2(this.node.x, AlignTarget.y);
                }
            }
            return new cc.Vec2(this.node.x, this.node.y - DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.cubeHeight);
        },
        /**
         * 设置对齐坐标
         */
        set: function (value) {
            this.node.setPosition(value);
        },
        enumerable: false,
        configurable: true
    });
    block = __decorate([
        ccclass
    ], block);
    return block;
}(PawnClass_1.default));
exports.default = block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQW1HO0FBQ25HLHFEQUFnRDtBQUNoRCxzREFBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBbUMseUJBQVM7SUFBNUM7UUFFSSx3QkFBd0I7UUFGNUIscUVBZ09DO1FBNUVHLHlHQUF5RztRQUV6Rzs7O1dBR0c7UUFDTyxnQkFBVSxHQUFXLElBQUksQ0FBQztRQWExQixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixtQkFBYSxHQUFVLElBQUksQ0FBQztRQUN0Qzs7V0FFRztRQUNPLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUk1Qzs7V0FFRztRQUNPLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFlckM7O1dBRUc7UUFDSyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7O0lBMkJ6QyxDQUFDO0lBNU5HLGVBQWU7SUFFZixxQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHlHQUF5RztJQUV6Rzs7O09BR0c7SUFDSSxvQkFBSSxHQUFYLFVBQVksS0FBYSxFQUFFLFVBQTJCO1FBQTNCLDJCQUFBLEVBQUEsa0JBQTJCO1FBQ2xELElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUks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LENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRywyQ0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM5RSxDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQU5BO0lBek5nQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZ096QjtJQUFELFlBQUM7Q0FoT0QsQUFnT0MsQ0FoT2tDLG1CQUFTLEdBZ08zQztrQkFoT29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IFBhd25DbGFzcyBmcm9tICcuLi9iYXNlL2NsYXNzL1Bhd25DbGFzcyc7XHJcbmltcG9ydCBOVFIgZnJvbSBcIi4uL2Jhc2UvdG9vbC9Ob1Jvb3RUcmVlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBibG9jayBleHRlbmRzIFBhd25DbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25mbGljdCAmJiB0aGlzLmVuYWJsZWRDb2xsaXNpb24pXHJcbiAgICAgICAgICAgIHRoaXMubm9kZVsncGxheWVyTW92ZW1lbnQnXS51cGRhdGVCeVZlbG9jaXR5KGR0KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZVsnb3RoZXJNb3ZlbWVudCddLnVwZGF0ZUJ5VmVsb2NpdHkoZHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBVU0VSIEZVTkNUSU9OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gSW5kZXggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KEluZGV4OiBudW1iZXIsIHBsYXllck1vZGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChwbGF5ZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ncm91cCA9ICdwbGF5ZXInXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZENvbGxpc2lvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50cmVlSW5kZXggPSBJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSByZXR1cm47XHJcbiAgICAgICAgY2MubG9nKFwi56Kw5pKe5byA5aeLXCIpO1xyXG5cclxuICAgICAgICAvLyDojrflj5bnorDmkp7nmoTmoJHoioLngrlcclxuICAgICAgICBsZXQgb3RoZXJCbG9jayA9IHRoaXMuZ2V0QmxvY2tDb21wb25lbnQob3RoZXIpO1xyXG4gICAgICAgIGxldCBvdGhlclRyZWVJbmRleCA9IG90aGVyQmxvY2sudHJlZUluZGV4O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3RoZXJUcmVlSW5kZXggPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGZUcmVlSW5kZXggPSBOVFIudHJlZS5nZXROZXh0SW5kZXgob3RoZXJUcmVlSW5kZXgsIC0xKTtcclxuICAgICAgICAgICAgbGV0IHRyZWVHcm91cCA9IE5UUi50cmVlLmdldEJ1ZmZlcihzZWxmVHJlZUluZGV4KTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c57uE5Zyo5qCR5LitXHJcbiAgICAgICAgICAgIGlmICh0cmVlR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIC8vIOeUseS6juiHquW3seeahOWIsOadpeiAjOWhq+WFheS6huS4gOihjFxyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRyZWVHcm91cCkubGVuZ3RoICsgMSA+PSBjY3Z2LmZyaXN0U2NyaXB0LmNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWwsemUgOavgeS5i+WQjuWMheaLrOiHquW3seWcqOWGheeahOaJgOacieiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveVRyZWVOb2RlQWZ0ZXJJbmRleChzZWxmVHJlZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g6ICM5LiN6IO95aGr5YWF5LiA6KGM55qE6K+dXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkuLTml7bliqDlhaXliLDmraTnu4TkuK1cclxuICAgICAgICAgICAgICAgICAgICB0cmVlR3JvdXBbdGhpc1snX2lkJ11dID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWmguaenOe7hOS4jeWcqOagkeS4re+8jOivtOaYjuWcqOacgOWklui+uVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE5UUi50cmVlLmFkZEZyb21Gcm9udCh7IFt0aGlzWydfaWQnXV06IHRoaXMubm9kZSB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gc2VsZlRyZWVJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6L+Y5pyq5a2Y5Zyo5Yay56qBXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZsaWN0KSB7XHJcbiAgICAgICAgICAgIC8vIOWvuem9kCzpgb/lhY3lj5HnlJ/ph43lpI3lr7npvZBcclxuICAgICAgICAgICAgdGhpcy5BbGlnblBvcyA9IG90aGVyQmxvY2suQWxpZ25Qb3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmoIforrDkuLrlhrLnqoFcclxuICAgICAgICB0aGlzLm1hcmtDb25mbGljdEFuZENvcHlNb3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+WQju+8jOeisOaSnue7k+adn+WJjeeahOaDheWGteS4i++8jOavj+asoeiuoeeul+eisOaSnue7k+aenOWQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBvbkNvbGxpc2lvblN0YXkob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmIChjY3Z2LmdldEluc3RhbmNlQnlOYW1lKCkpXHJcbiAgICAgICAgaWYgKHRoaXMud2FpdEZvckNvbmZsaWN0KVxyXG4gICAgICAgICAgICBjYy5sb2coXCLnorDmkp7kuK1cIik7XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPnorDmkp7nu5PmnZ/lkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBvdGhlciDkuqfnlJ/norDmkp7nmoTlj6bkuIDkuKrnorDmkp7nu4Tku7ZcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBzZWxmICDkuqfnlJ/norDmkp7nmoToh6rouqvnmoTnorDmkp7nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgY2MubG9nKFwi56Kw5pKe57uT5p2fXCIpO1xyXG4gICAgICAgIHRoaXMuY29uZmxpY3QgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE6ZSA5q+B5omA5pyJ6IqC54K577yM5YyF5ous6Ieq6LqrXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0cm95VHJlZU5vZGVBZnRlckluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHRyZWVCZWhpbmRPYmplY3QgPSBOVFIudHJlZS5jdXQoaW5kZXgpLm9iajtcclxuICAgICAgICB0cmVlQmVoaW5kT2JqZWN0LmZvckVhY2gob2JqZWN0RWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iamVjdEVsZW1lbnQpLmZvckVhY2goZWxlbWVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0RWxlbWVudFtlbGVtZW50TmFtZV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjnu5nlrprmoJHntKLlvJXkvY3nva7kuIrmt7vliqDoh6rouqtcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFkZFRyZWVOb2RlQXRJbmRleChpbmRleCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagh+iusOS4uuWGsueqgeW5tuWkjeWItui/kOWKqCAgXHJcbiAgICAgKiDmoIforrDlhrLnqoHml7bmhI/lkbPnnYDov5DliqjlsIbmnJ3lkJHmlrDnmoTov5Dliqjnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG1hcmtDb25mbGljdEFuZENvcHlNb3Rpb24oKSB7XHJcbiAgICAgICAgLy8g5qCH6K6w5Yay56qB5bm25aSN5Yi26L+Q5YqoXHJcbiAgICAgICAgdGhpcy5jb25mbGljdCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVbJ290aGVyTW92ZW1lbnQnXSlcclxuICAgICAgICAgICAgY2N2di5mcmlzdFNjcmlwdC5iaW5kTW92ZW1lbnQodGhpcy5ub2RlKTtcclxuICAgICAgICAvLyDlr7npvZDliLDku7vmhI/oioLngrnkuK1cclxuICAgICAgICAvLyBsZXQgdHJlZUluZGV4T2JqZWN0ID0gTlRSLnRyZWUuZ2V0QnVmZmVyKGluZGV4KTtcclxuICAgICAgICAvLyBpZiAoIXRyZWVJbmRleE9iamVjdCkge1xyXG4gICAgICAgIC8vICAgICB0cmVlSW5kZXhPYmplY3QgPSBOVFIudHJlZS5nZXRCdWZmZXIoTlRSLnRyZWUuZ2V0TmV4dEluZGV4KGluZGV4LCAxKSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCBBbGlnblRhcmdldC55IC0gY2N2di5mcmlzdFNjcmlwdC5jdWJlSGVpZ2h0KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBsZXQgQWxpZ25UYXJnZXQgPSB0cmVlSW5kZXhPYmplY3RbT2JqZWN0LmtleXModHJlZUluZGV4T2JqZWN0KVswXV07XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTSUdOUE9TVCBtYWNybyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJgOWkhOagkeiKgueCuee0ouW8lVxyXG4gICAgICog5b2T5aSE5LqO546p5a626Zi16JCl5pe277yM5q2k57Si5byV5peg5pWIXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfVHJlZUluZGV4OiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCB0cmVlSW5kZXgoKSB7IHJldHVybiB0aGlzLl9UcmVlSW5kZXggfVxyXG4gICAgcHVibGljIHNldCB0cmVlSW5kZXgodmFsdWUpIHsgdGhpcy5fVHJlZUluZGV4ID0gdmFsdWU7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YW25LuW5pa55Z2Xbm9kZeS4iueahGJsb2Nr57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gYmxvY2sgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCbG9ja0NvbXBvbmVudChibG9jayk6IGJsb2NrIHtcclxuICAgICAgICBsZXQgYmxvY2tOb2RlID0gYmxvY2sgaW5zdGFuY2VvZiBjYy5Ob2RlID8gYmxvY2sgOiBibG9jay5ub2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5fQ29sTm9kZSB8fCB0aGlzLl9Db2xOb2RlICE9IGJsb2NrTm9kZSlcclxuICAgICAgICAgICAgdGhpcy5fQ29sQ29tcG9uZW50ID0gYmxvY2tOb2RlLmdldENvbXBvbmVudCgnQmxvY2snKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ29sQ29tcG9uZW50O1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9Db2xOb2RlOiBjYy5Db21wb25lbnQgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9Db2xDb21wb25lbnQ6IGJsb2NrID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5YWB6K645aSE55CG56Kw5pKe77yM6L+Z5Lmf5Luj6KGo6L+Z5piv5bGe5LqO546p5a626Zi16JCl55qE5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbmFibGVkQ29sbGlzaW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWGsueqgeagh+iusFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0NvbmdsaWN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2V0IGNvbmZsaWN0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fQ29uZ2xpY3Q7IH1cclxuICAgIC8qKlxyXG4gICAgICog5qCH6K6w5oiW5Yqg5YWl5Yiw5Yay56qBXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29uZmxpY3QodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICAvLyBpZiAodHlwZW9mIHZhbHVlID09ICdib29sZWFuJykge1xyXG4gICAgICAgIHRoaXMuX0NvbmdsaWN0ID0gdmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9Db25nbGljdCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGNjdnYuc2V0SW5zdGFuY2VCeU5hbWUodmFsdWUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Ymp5L2Z562J5b6F6K6h5pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1dhaXRGb3JDb25mbGljdDogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm562J5b6F5Yay56qBXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgd2FpdEZvckNvbmZsaWN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9XYWl0Rm9yQ29uZmxpY3QtLSA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5a+56b2Q5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgQWxpZ25Qb3MoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRDb2xsaXNpb24pIHtcclxuICAgICAgICAgICAgbGV0IHRyZWVJbmRleE9iamVjdCA9IE5UUi50cmVlLmdldEJ1ZmZlcihOVFIudHJlZS5nZXROZXh0SW5kZXgodGhpcy50cmVlSW5kZXgsIC0xKSk7XHJcbiAgICAgICAgICAgIGlmICh0cmVlSW5kZXhPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgQWxpZ25UYXJnZXQueSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gY2N2di5mcmlzdFNjcmlwdC5jdWJlSGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lr7npvZDlnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBBbGlnblBvcyh2YWx1ZTogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GameLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '219931QpohMXa9AERY/82Av', 'GameLevel');
// scripts/game/GameLevel.ts

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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnMovement_1 = require("../base/class/PawnMovement");
var GridAdsorb_1 = require("../base/class/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
/**
 * 牛头人 NTR 继承自ringbuffer继承自RigorousArray
 * 移动组件 PawnMovement 简单的运动解算器，仅保留了速度解算和抵达解算，没事可以换着玩
 * 数学宏库 mm 效率低，没事别用
 * 全局仓库 ccvv.warehouse 用来保存动态加载内容
 * 全局工具 ccvv.tool 暂无
 * 全局其他 ccvv.other 暂无
 * 全局界面 ccvv.layer 保存当前世界中的所有已定义层
 * 全局脚本 ccvv.script 保存这个关卡脚本
 * 全局实例 ccvv.instance 作为全局冲突池
 */
// (〃´-ω･) 诶嘿~ 解说完毕~
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        /**
         * 已经注册触摸
         */
        _this.readyTouch = false;
        _this._spawnOrigin = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        // 提升为关卡脚本
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // 开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
        // 创建无根树
        NoRootTree_1.default.tree = new NoRootTree_1.default(this.treeSize);
        // 创建网格驱动
        this.creatGrid();
        // cc.log(ccvv.fristScript)
        // cc.log(ccvv.warehouse);
        // ccvv.layers[0].addChild(new ccvv.warehouse['frames']['bg'])
    };
    Game.prototype.start = function () {
        this.touchRegister();
    };
    Game.prototype.update = function (dt) {
        this.gameProcess_SpawnCube();
        // 更新所有方块的位置
        GridAdsorb_1.default;
    };
    // TAG USER FUNCTION:                                                                                    
    // SIGNPOST 网格生成                                                                                     
    Game.prototype.creatGrid = function () {
        new GridAdsorb_1.default(new cc.Vec3(this.column, this.treeSize, 0), new cc.Vec3(this.cubeWidget, this.cubeHeight, 0));
    };
    // SIGNPOST 诞生方式                                                                                     
    /**
     * 游戏流程-诞生方块
     */
    Game.prototype.gameProcess_SpawnCube = function () {
        if (this.cheackRoot()) {
            this.creat_lineCube();
            cc.log(NoRootTree_1.default.tree.buffer);
        }
    };
    /**
     * 检查目标叶节点是否已为过去式
     */
    Game.prototype.cheackLose = function () {
        var leaf = this.curTreeNode('leaf');
        if (!leaf)
            return false;
        var leafPos = leaf.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var isoutbox = leafPos.y <= (cc.winSize.height * this.separatorPercent);
        return isoutbox;
    };
    /**
     * 检查目标根节点是否已为过去式
     */
    Game.prototype.cheackRoot = function () {
        var root = this.curTreeNode();
        if (!root)
            return true;
        var size = cc.v2(cc.winSize.width, cc.winSize.height);
        var size2 = size.div(2);
        var isinbox = new DevelopersToolGlobal_1.mathMacro(root.convertToWorldSpaceAR(cc.Vec2.ZERO))
            .isInBox2(size2, size2.add(cc.v2(0, this.cubeHeight / 2)));
        return isinbox;
    };
    /**
     * 返回任意目标节点
     */
    Game.prototype.curTreeNode = function (node) {
        if (node === void 0) { node = 'root'; }
        if (NoRootTree_1.default.tree[node]) {
            var treeIndex = 0;
            for (var index = 0; !NoRootTree_1.default.tree[node][index]; treeIndex = ++index)
                ;
            return NoRootTree_1.default.tree[node][treeIndex];
        }
        else
            return undefined;
    };
    // TAG NATIVE FUNCTION                                                                                   
    // SIGNPOST touchevent                                                                                   
    /**
     * 注册触摸事件
     */
    Game.prototype.touchRegister = function () {
        if (!this.readyTouch) {
            this.readyTouch = true;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].on("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 注销触摸事件
     */
    Game.prototype.touchCancel = function () {
        if (this.readyTouch) {
            this.readyTouch = false;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].off("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 当触摸发生时
     * @param event
     */
    Game.prototype.onTouchStart = function (event) {
        var touchArea = event.getLocation().x / this.cubeWidget;
        var inst = this.creat_PlayerCube();
        var inx = Math.ceil(touchArea) * (this.cubeWidget + this.cubeInteraval) - ((cc.winSize.width + this.cubeWidget) / 2);
        inst.setPosition(inx, cc.winSize.width * this.separatorPercent - cc.winSize.width);
    };
    /**
     * 诞生玩家方块
     * 玩家方块不受全局速度影响，不放在树中
     */
    Game.prototype.creat_PlayerCube = function () {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(null, true);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_retrograde(inst);
        return inst;
    };
    /**
     * 绑定逆向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_retrograde = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.playerSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, 1200);
        movement.velocity = new cc.Vec2(0, this.playerSpeed);
        inst['playerMovement'] = movement;
    };
    // TAG Prefabricated function                                                                            
    // SIGNPOST instantiation and destory Actor                                                              
    /**
     * 创建一行方块
     * 随机方式我想应该大概也许是独立随机事件
     * 每行绝对会留一个空
     * @param chance 生成机会，机会越大越容易成功，但肯定会留给玩家一个空，推荐在3-5
     */
    Game.prototype.creat_lineCube = function (chance) {
        if (chance === void 0) { chance = 4; }
        var perch = [];
        var child = {};
        var childIndex = NoRootTree_1.default.tree.add(child);
        var loop = chance;
        while (loop--) {
            var curcol = this.randomInColumn;
            if (perch.indexOf(curcol) < 0) {
                perch.push(curcol);
                var inst = this.creat_ProductionCube(childIndex);
                inst.setPosition(this.spawnOrigin.add(cc.v2(curcol * (this.cubeWidget + this.cubeInteraval), 0)));
                child[curcol] = inst;
            }
            if (perch.length >= (this.column - 1))
                break;
        }
    };
    /**
     * 创建一个方块在堆叠层
     * 并完成基本构造行为
     */
    Game.prototype.creat_ProductionCube = function (treeIndex) {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(treeIndex);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_consequent(inst);
        return inst;
    };
    /**
     * creat instantiate
     * @param {cc.Prefab} actor 实例化的目标
     * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
     * @returns
     */
    Game.prototype.creatActor = function (actor, parent) {
        var actorInst = cc.instantiate(actor);
        if (parent) {
            parent.addChild(actorInst);
        }
        else {
            this.node.addChild(actorInst);
            cc.log(actorInst);
        }
        return actorInst;
    };
    /**
     * 绑定顺向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_consequent = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.globalSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, -1200);
        movement.velocity = new cc.Vec2(0, -this.globalSpeed);
        inst['otherMovement'] = movement;
    };
    /**
     * 外部玩家阵营复制绑定控制组件
     * @param node
     */
    Game.prototype.bindMovement = function (node) {
        this.bindMovement_consequent(node);
    };
    Object.defineProperty(Game.prototype, "cube", {
        // SIGNPOST macro                                                                                        
        /**
         * 获取指定的预制体方块
         */
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['block']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "column", {
        /**
         * 获取当前所有的列数
         */
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "randomInColumn", {
        /**
         * 获取列数内的随机整数
         */
        get: function () { return Math.floor(Math.random() * this.column); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeWidget", {
        /**
         * 获取方块所占宽度
         */
        get: function () { return 177; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeInteraval", {
        /**
         * 获取方块间隔
         */
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeHeight", {
        /**
         * 获取方块所占高度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnOrigin", {
        /**
         * 获取方块诞生原点
         */
        get: function () {
            if (!this._spawnOrigin)
                this._spawnOrigin = cc.v2(-(this.column - 1) * (this.cubeWidget + this.cubeInteraval) / 2, cc.winSize.height / 2 + this.cubeHeight * 1.4);
            return this._spawnOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnMinCount", {
        /**
         * 获取每行最小可诞生的数量
         */
        get: function () { return 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "separatorPercent", {
        /**
         * 获取截止线屏幕百分比
         */
        get: function () { return .290625; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "globalSpeed", {
        /**
         * 获取全局速度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "playerSpeed", {
        /**
         * 获取玩家方块速度
         */
        get: function () { return 1000; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "treeSize", {
        /**
         * 获取树规模
         */
        get: function () { return 30; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], Game.prototype, "label", void 0);
    __decorate([
        property
    ], Game.prototype, "text", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRywyREFBc0Q7QUFDdEQsdURBQWtEO0FBQ2xELHNEQUEwQztBQUUxQzs7Ozs7Ozs7OztHQVVHO0FBQ0gsb0JBQW9CO0FBRWQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrU0M7UUEvUkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBcUh2Qjs7V0FFRztRQUNPLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBK0kvQixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFxQnhDLENBQUM7SUExUkcsd0JBQXdCO0lBRXhCLHFCQUFNLEdBQU47UUFDSSxVQUFVO1FBQ1YsMkNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLE9BQU87UUFDUCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNoQyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBRXRDLFFBQVE7UUFDUixvQkFBRyxDQUFDLElBQUksR0FBRyxJQUFJLG9CQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLFNBQVM7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQiw4REFBOEQ7SUFDbEUsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsYUFB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QUFxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWhELHNCQUFXLGtDQUFnQjtRQUgzQjs7V0FFRzthQUNILGNBQXdDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJekQsc0JBQVcsNkJBQVc7UUFIdEI7O1dBRUc7YUFDSCxjQUFtQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWhELHNCQUFXLDZCQUFXO1FBSHRCOztXQUVHO2FBQ0gsY0FBbUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUlqRCxzQkFBVywwQkFBUTtRQUhuQjs7V0FFRzthQUNILGNBQWdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUE5UjVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRO3NDQUNjO0lBTk4sSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtTeEI7SUFBRCxXQUFDO0NBbFNELEFBa1NDLENBbFNpQyxFQUFFLENBQUMsU0FBUyxHQWtTN0M7a0JBbFNvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diwgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBQYXduTW92ZW1lbnQgZnJvbSAnLi4vYmFzZS9jbGFzcy9QYXduTW92ZW1lbnQnO1xyXG5pbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL2NsYXNzL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgTlRSIGZyb20gXCIuLi9iYXNlL3Rvb2wvTm9Sb290VHJlZVwiO1xyXG5cclxuLyoqXHJcbiAqIOeJm+WktOS6uiBOVFIg57un5om/6IeqcmluZ2J1ZmZlcue7p+aJv+iHqlJpZ29yb3VzQXJyYXlcclxuICog56e75Yqo57uE5Lu2IFBhd25Nb3ZlbWVudCDnroDljZXnmoTov5Dliqjop6PnrpflmajvvIzku4Xkv53nlZnkuobpgJ/luqbop6PnrpflkozmirXovr7op6PnrpfvvIzmsqHkuovlj6/ku6XmjaLnnYDnjqlcclxuICog5pWw5a2m5a6P5bqTIG1tIOaViOeOh+S9ju+8jOayoeS6i+WIq+eUqFxyXG4gKiDlhajlsYDku5PlupMgY2N2di53YXJlaG91c2Ug55So5p2l5L+d5a2Y5Yqo5oCB5Yqg6L295YaF5a65XHJcbiAqIOWFqOWxgOW3peWFtyBjY3Z2LnRvb2wg5pqC5pegXHJcbiAqIOWFqOWxgOWFtuS7liBjY3Z2Lm90aGVyIOaaguaXoFxyXG4gKiDlhajlsYDnlYzpnaIgY2N2di5sYXllciDkv53lrZjlvZPliY3kuJbnlYzkuK3nmoTmiYDmnInlt7LlrprkuYnlsYJcclxuICog5YWo5bGA6ISa5pysIGNjdnYuc2NyaXB0IOS/neWtmOi/meS4quWFs+WNoeiEmuacrFxyXG4gKiDlhajlsYDlrp7kvosgY2N2di5pbnN0YW5jZSDkvZzkuLrlhajlsYDlhrLnqoHmsaBcclxuICovXHJcbi8vICjjgIPCtC3Pie+9pSkg6K+25Zi/fiDop6Por7Tlrozmr5V+XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5o+Q5Y2H5Li65YWz5Y2h6ISa5pysXHJcbiAgICAgICAgY2N2di5zY3JpcHQgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8g5Yib5bu65peg5qC55qCRXHJcbiAgICAgICAgTlRSLnRyZWUgPSBuZXcgTlRSKHRoaXMudHJlZVNpemUpO1xyXG4gICAgICAgIC8vIOWIm+W7uue9keagvOmpseWKqFxyXG4gICAgICAgIHRoaXMuY3JlYXRHcmlkKCk7XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LmZyaXN0U2NyaXB0KVxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LndhcmVob3VzZSk7XHJcbiAgICAgICAgLy8gY2N2di5sYXllcnNbMF0uYWRkQ2hpbGQobmV3IGNjdnYud2FyZWhvdXNlWydmcmFtZXMnXVsnYmcnXSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRvdWNoUmVnaXN0ZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUHJvY2Vzc19TcGF3bkN1YmUoKTtcclxuICAgICAgICAvLyDmm7TmlrDmiYDmnInmlrnlnZfnmoTkvY3nva5cclxuICAgICAgICBHcmlkQWJzb3JiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBVU0VSIEZVTkNUSU9OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIOe9keagvOeUn+aIkCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRHcmlkKCkge1xyXG4gICAgICAgIG5ldyBHcmlkQWJzb3JiKFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyh0aGlzLmNvbHVtbiwgdGhpcy50cmVlU2l6ZSwgMCksXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHRoaXMuY3ViZVdpZGdldCwgdGhpcy5jdWJlSGVpZ2h0LCAwKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6K+e55Sf5pa55byPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5rWB56iLLeivnueUn+aWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWFja1Jvb3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhOVFIudHJlZS5idWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpeebruagh+WPtuiKgueCueaYr+WQpuW3suS4uui/h+WOu+W8j1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlYWNrTG9zZSgpIHtcclxuICAgICAgICBsZXQgbGVhZiA9IHRoaXMuY3VyVHJlZU5vZGUoJ2xlYWYnKTtcclxuICAgICAgICBpZiAoIWxlYWYpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgbGVhZlBvcyA9IGxlYWYuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgbGV0IGlzb3V0Ym94ID0gbGVhZlBvcy55IDw9IChjYy53aW5TaXplLmhlaWdodCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCk7XHJcbiAgICAgICAgcmV0dXJuIGlzb3V0Ym94O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l55uu5qCH5qC56IqC54K55piv5ZCm5bey5Li66L+H5Y675byPXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjaGVhY2tSb290KCkge1xyXG4gICAgICAgIGxldCByb290ID0gdGhpcy5jdXJUcmVlTm9kZSgpO1xyXG4gICAgICAgIGlmICghcm9vdCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjYy52MihjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IHNpemUyID0gc2l6ZS5kaXYoMik7XHJcbiAgICAgICAgbGV0IGlzaW5ib3ggPSBuZXcgbW0ocm9vdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSlcclxuICAgICAgICAgICAgLmlzSW5Cb3gyKHNpemUyLCBzaXplMi5hZGQoY2MudjIoMCwgdGhpcy5jdWJlSGVpZ2h0IC8gMikpKTtcclxuICAgICAgICByZXR1cm4gaXNpbmJveDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuS7u+aEj+ebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VyVHJlZU5vZGUobm9kZTogc3RyaW5nID0gJ3Jvb3QnKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKE5UUi50cmVlW25vZGVdKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmVlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7ICFOVFIudHJlZVtub2RlXVtpbmRleF07IHRyZWVJbmRleCA9ICsraW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gTlRSLnRyZWVbbm9kZV1bdHJlZUluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBOQVRJVkUgRlVOQ1RJT04gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIHRvdWNoZXZlbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaFJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jplIDop6bmkbjkuovku7ZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHRvdWNoQ2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeVRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bey57uP5rOo5YaM6Kem5pG4XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZWFkeVRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPop6bmkbjlj5HnlJ/ml7ZcclxuICAgICAqIEBwYXJhbSBldmVudCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaEFyZWEgPSBldmVudC5nZXRMb2NhdGlvbigpLnggLyB0aGlzLmN1YmVXaWRnZXQ7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1BsYXllckN1YmUoKTtcclxuICAgICAgICBsZXQgaW54ID0gTWF0aC5jZWlsKHRvdWNoQXJlYSkgKiAodGhpcy5jdWJlV2lkZ2V0ICsgdGhpcy5jdWJlSW50ZXJhdmFsKSAtICgoY2Mud2luU2l6ZS53aWR0aCArIHRoaXMuY3ViZVdpZGdldCkgLyAyKTtcclxuICAgICAgICBpbnN0LnNldFBvc2l0aW9uKGlueCwgY2Mud2luU2l6ZS53aWR0aCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCAtIGNjLndpblNpemUud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+e55Sf546p5a625pa55Z2XXHJcbiAgICAgKiDnjqnlrrbmlrnlnZfkuI3lj5flhajlsYDpgJ/luqblvbHlk43vvIzkuI3mlL7lnKjmoJHkuK1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0X1BsYXllckN1YmUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3IodGhpcy5jdWJlLCBjY3Z2LmxheWVyc1sxXSk7XHJcbiAgICAgICAgdHJ5IHsgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdChudWxsLCB0cnVlKTsgfVxyXG4gICAgICAgIGNhdGNoIHsgY2MubG9nKFwi5om+5LiN5Yiw57uE5Lu2OiBCbG9ja1wiKTsgfVxyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X3JldHJvZ3JhZGUoaW5zdCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe7keWumumAhuWQkeenu+WKqOaOp+WItue7hOS7tlxyXG4gICAgICogQHBhcmFtIGluc3QgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBiaW5kTW92ZW1lbnRfcmV0cm9ncmFkZShpbnN0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vdmVtZW50ID0gbmV3IFBhd25Nb3ZlbWVudChpbnN0KTtcclxuICAgICAgICBtb3ZlbWVudC5tYXhTcGVlZCA9IHRoaXMucGxheWVyU3BlZWQ7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybURyYWcgPSAwO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1Gb3JjZSA9IG5ldyBjYy5WZWMyKDAsIDEyMDApO1xyXG4gICAgICAgIG1vdmVtZW50LnZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgdGhpcy5wbGF5ZXJTcGVlZCk7XHJcbiAgICAgICAgaW5zdFsncGxheWVyTW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBQcmVmYWJyaWNhdGVkIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIGluc3RhbnRpYXRpb24gYW5kIGRlc3RvcnkgQWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA6KGM5pa55Z2XXHJcbiAgICAgKiDpmo/mnLrmlrnlvI/miJHmg7PlupTor6XlpKfmpoLkuZ/orrjmmK/ni6znq4vpmo/mnLrkuovku7ZcclxuICAgICAqIOavj+ihjOe7neWvueS8mueVmeS4gOS4quepulxyXG4gICAgICogQHBhcmFtIGNoYW5jZSDnlJ/miJDmnLrkvJrvvIzmnLrkvJrotorlpKfotorlrrnmmJPmiJDlip/vvIzkvYbogq/lrprkvJrnlZnnu5nnjqnlrrbkuIDkuKrnqbrvvIzmjqjojZDlnKgzLTVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0X2xpbmVDdWJlKGNoYW5jZSA9IDQpIHtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXTtcclxuICAgICAgICBsZXQgY2hpbGQgPSB7fTtcclxuICAgICAgICBsZXQgY2hpbGRJbmRleCA9IE5UUi50cmVlLmFkZChjaGlsZCk7XHJcbiAgICAgICAgbGV0IGxvb3AgPSBjaGFuY2U7XHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gdGhpcy5yYW5kb21JbkNvbHVtbjtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHBlcmNoLnB1c2goY3VyY29sKVxyXG4gICAgICAgICAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1Byb2R1Y3Rpb25DdWJlKGNoaWxkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaW5zdC5zZXRQb3NpdGlvbih0aGlzLnNwYXduT3JpZ2luLmFkZChjYy52MihjdXJjb2wgKiAodGhpcy5jdWJlV2lkZ2V0ICsgdGhpcy5jdWJlSW50ZXJhdmFsKSwgMCkpKVxyXG4gICAgICAgICAgICAgICAgY2hpbGRbY3VyY29sXSA9IGluc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBlcmNoLmxlbmd0aCA+PSAodGhpcy5jb2x1bW4gLSAxKSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuIDkuKrmlrnlnZflnKjloIblj6DlsYJcclxuICAgICAqIOW5tuWujOaIkOWfuuacrOaehOmAoOihjOS4ulxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRfUHJvZHVjdGlvbkN1YmUodHJlZUluZGV4OiBudW1iZXIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcih0aGlzLmN1YmUsIGNjdnYubGF5ZXJzWzFdKVxyXG4gICAgICAgIHRyeSB7IGluc3QuZ2V0Q29tcG9uZW50KCdCbG9jaycpLmluaXQodHJlZUluZGV4KTsgfVxyXG4gICAgICAgIGNhdGNoIHsgY2MubG9nKFwi5om+5LiN5Yiw57uE5Lu2OiBCbG9ja1wiKTsgfVxyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X2NvbnNlcXVlbnQoaW5zdCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0IGluc3RhbnRpYXRlXHJcbiAgICAgKiBAcGFyYW0ge2NjLlByZWZhYn0gYWN0b3Ig5a6e5L6L5YyW55qE55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHBhcmVudCDlrp7kvovljJbnmoTlr7nosaHlsIbopoHpmYTliqDnmoTnm67moIfvvIzlpoLmnpznlZnnqbrliJnkuLroh6rouqtcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRBY3RvcihhY3RvcjogY2MuUHJlZmFiLCBwYXJlbnQ/OiBjYy5Ob2RlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGFjdG9ySW5zdCA9IGNjLmluc3RhbnRpYXRlKGFjdG9yKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7IHBhcmVudC5hZGRDaGlsZChhY3Rvckluc3QpOyB9XHJcbiAgICAgICAgZWxzZSB7IHRoaXMubm9kZS5hZGRDaGlsZChhY3Rvckluc3QpOyBjYy5sb2coYWN0b3JJbnN0KSB9XHJcbiAgICAgICAgcmV0dXJuIGFjdG9ySW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog57uR5a6a6aG65ZCR56e75Yqo5o6n5Yi257uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gaW5zdCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGJpbmRNb3ZlbWVudF9jb25zZXF1ZW50KGluc3QpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW92ZW1lbnQgPSBuZXcgUGF3bk1vdmVtZW50KGluc3QpO1xyXG4gICAgICAgIG1vdmVtZW50Lm1heFNwZWVkID0gdGhpcy5nbG9iYWxTcGVlZDtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRHJhZyA9IDA7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybUZvcmNlID0gbmV3IGNjLlZlYzIoMCwgLTEyMDApO1xyXG4gICAgICAgIG1vdmVtZW50LnZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgLXRoaXMuZ2xvYmFsU3BlZWQpO1xyXG4gICAgICAgIGluc3RbJ290aGVyTW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlpJbpg6jnjqnlrrbpmLXokKXlpI3liLbnu5HlrprmjqfliLbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYmluZE1vdmVtZW50KG5vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJpbmRNb3ZlbWVudF9jb25zZXF1ZW50KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIG1hY3JvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6a55qE6aKE5Yi25L2T5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3ViZSgpOiBjYy5QcmVmYWIgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnYmxvY2snXTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3miYDmnInnmoTliJfmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIDQ7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YiX5pWw5YaF55qE6ZqP5py65pW05pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcmFuZG9tSW5Db2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sdW1uKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDlrr3luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlV2lkZ2V0KCk6IG51bWJlciB7IHJldHVybiAxNzc7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6Ze06ZqUXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3ViZUludGVyYXZhbCgpOiBudW1iZXIgeyByZXR1cm4gMzsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDpq5jluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6K+e55Sf5Y6f54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3Bhd25PcmlnaW4oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zcGF3bk9yaWdpbilcclxuICAgICAgICAgICAgdGhpcy5fc3Bhd25PcmlnaW4gPSBjYy52MihcclxuICAgICAgICAgICAgICAgIC0odGhpcy5jb2x1bW4gLSAxKSAqICh0aGlzLmN1YmVXaWRnZXQgKyB0aGlzLmN1YmVJbnRlcmF2YWwpIC8gMixcclxuICAgICAgICAgICAgICAgIGNjLndpblNpemUuaGVpZ2h0IC8gMiArIHRoaXMuY3ViZUhlaWdodCAqIDEuNFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYXduT3JpZ2luO1xyXG4gICAgfVxyXG4gICAgcHVibGljIF9zcGF3bk9yaWdpbjogY2MuVmVjMiA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluavj+ihjOacgOWwj+WPr+ivnueUn+eahOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNwYXduTWluQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIDI7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oiq5q2i57q/5bGP5bmV55m+5YiG5q+UXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc2VwYXJhdG9yUGVyY2VudCgpOiBudW1iZXIgeyByZXR1cm4gLjI5MDYyNTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blhajlsYDpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnbG9iYWxTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gMTAwOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueOqeWutuaWueWdl+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBsYXllclNwZWVkKCk6IG51bWJlciB7IHJldHVybiAxMDAwOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagkeinhOaooVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRyZWVTaXplKCk6IG51bWJlciB7IHJldHVybiAzMDsgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DiologClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8d9eyP2DZLcKlpaWR1eAzJ', 'DiologClass');
// scripts/base/class/DiologClass.ts

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
var DynamicPanelClass_1 = require("./DynamicPanelClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DiologClass = /** @class */ (function (_super) {
    __extends(DiologClass, _super);
    function DiologClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DiologClass.prototype.start = function () {
    };
    DiologClass = __decorate([
        ccclass
    ], DiologClass);
    return DiologClass;
}(DynamicPanelClass_1.default));
exports.default = DiologClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERpb2xvZ0NsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlEQUFvRDtBQUU5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBaUI7SUFBMUQ7O0lBV0EsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFSZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQVcvQjtJQUFELGtCQUFDO0NBWEQsQUFXQyxDQVh3QywyQkFBaUIsR0FXekQ7a0JBWG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDnibnmjIflr7nor53moYbnsbsgXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IER5bmFtaWNQYW5lbENsYXNzIGZyb20gJy4vRHluYW1pY1BhbmVsQ2xhc3MnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpb2xvZ0NsYXNzIGV4dGVuZHMgRHluYW1pY1BhbmVsQ2xhc3Mge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/PawnMovement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32087ASkt9CBbFwJno3IBwU', 'PawnMovement');
// scripts/base/class/PawnMovement.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("./DevelopersToolGlobal");
var PawnMovement = /** @class */ (function () {
    function PawnMovement(context) {
        this.context = null;
        // TAG move range setting                                                                                       
        /**
         * 边界定义内容
         */
        this.fixedBound = {
            // 边界有效性
            valid: false,
            // 边界原点
            origin: new cc.Vec3(0),
            // 边界范围
            extent: new cc.Vec3(0),
            // 边界对齐
            align: new cc.Vec3(0),
            // 圆心边界半径
            radius: 0,
        };
        /**
         * 设置边界
         * @param {*} extent
         * @param {*} origin
         * @param {*} align
         * @param {*} valid
         * @returns
         */
        this.setFixedBound = function (extent, origin, align, valid) {
            this.fixedBound.extent = extent instanceof cc.Vec2 ? new cc.Vec3(extent.x, extent.y, 0) : extent;
            this.fixedBound.origin = origin instanceof cc.Vec2 ? new cc.Vec3(origin.x, origin.y, 0) : origin;
            this.fixedBound.align = align instanceof cc.Vec2 ? new cc.Vec3(align.x, align.y, 0) : align;
            this.fixedBound.valid = valid ? valid : this.fixedBound.valid;
            return this;
        };
        /**
         * 限制输入矢量在方形边界内
         * @param {*} vector
         * @returns
         */
        this.inBoxBound = function (vector) {
            var out = vector;
            if (this.fixedBound.valid) {
                out.x = DevelopersToolGlobal_1.mathMacro.clamp(out.x, this.fixedBound.extent.x, this.fixedBound.align.x, this.fixedBound.origin.x);
                out.y = DevelopersToolGlobal_1.mathMacro.clamp(out.y, this.fixedBound.extent.y, this.fixedBound.align.y, this.fixedBound.origin.y);
                out.z = DevelopersToolGlobal_1.mathMacro.clamp(out.z, this.fixedBound.extent.z, this.fixedBound.align.z, this.fixedBound.origin.z);
            }
            return out;
        };
        // TAG velocity & movement base                                                                                 
        // SIGNPOST 通用移动属性                                                                                         
        this._LastVelocity = new cc.Vec3(0);
        /**
         * 当前速度
         * 不建议直接调用，而是使用它的方法:
         * velocity 直接设置速度
         * addVelocity 直接添加速度
         * 直接添加速度并不利于物体运动模拟，应当先进行力的添加:
         * input 添加移动输入
         * force 添加力
         * 计算时需要注意，除非需要将计算值保存在此，否则不可以使用链式运算。
         */
        this._Velocity = new cc.Vec3(0);
        /**
         * 加速度限制
         */
        this._AccelerationLimit = 9999;
        /**
         * 当前模式下最大移动速度
         */
        this._MaxSpeed = 1000;
        /**
         * 当前物理力
         */
        this._Physicforce = new cc.Vec3(0);
        /**
         * 当前物理阻力
         */
        this._PhysicDrag = 1;
        /**
         * 持久力/阻力
         * 该属性会在每次更新时自动加入到物理力中
         * 不论当前是否已经加入物理力
         * 这可以用于 风，引力等属性
         *
         * 当不需要持久力时需要设置为 undefined
         * 这可以通过其设置方法来完成，不需要手动赋值
         */
        /**
         * 持久力
         * 请不要直接设置持久力，而是使用它的方法：
         * setPermForce() 设置持久力
         * getPermForce() 获取持久力
         * @param {Vec3} permanentForce
         */
        this._PermanentForce = undefined;
        /**
         * 持久阻力
         * 如果不需要使用持久阻力，请设置为undefined
         */
        this._PermanentDrag = undefined;
        /**
         * 质量
         */
        this._Mass = 1;
        /**
         * 重力方向
         */
        this._Gravity = new cc.Vec3(0, 0, -980);
        /**
         * 重力标度
         */
        this._GravityScale = 1;
        /**
         * 制动摩擦力因子
         */
        this._BrakingFrictionFactor = 2;
        /**
         * 制动摩擦力
         */
        this._BrakingFriction = 0;
        /**
         * 制动降速
         */
        this._BrakingDeceleration = 2048;
        // SIGNPOST 更新获取                                                                                             
        /**
         * 重力加速度
         */
        this.accelerationDue = new cc.Vec3(0);
        // SIGNPOST 移动更新函数 - 简易力驱动                                                                             
        // fix                
        /**
         * 由力驱动更新
         *
         * 一般情况下并不推荐使用，这仅仅只是为了高效率而产生的
         * 如果需要实现PBD，光滑核等函数，请使用updateByVelocity()
         *
         * @param {*} dt deltatime 与当前帧率绑定，必要项目
         */
        this.updateByforce = function (dt) {
            this.addPermanentForceToPhysic();
        };
        this.context = context;
        this.arrivePosition = context.getPosition();
    }
    Object.defineProperty(PawnMovement.prototype, "arrivePosition", {
        /**
         * 获取到达目标
         */
        get: function () {
            return this._arrivePosition;
        },
        /**
         * 设置到达目标
         */
        set: function (value) {
            if (value instanceof cc.Vec2)
                this._arrivePosition = new cc.Vec3(value.x, value.y, 0);
            else
                this._arrivePosition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PawnMovement.prototype, "addArrivePosition", {
        /**
         * 添加到达目标偏移量
         */
        set: function (offset) {
            if (offset instanceof cc.Vec2)
                this._arrivePosition = this._arrivePosition.add(new cc.Vec3(offset.x, offset.y, 0));
            else
                this._arrivePosition = this._arrivePosition.add(offset);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PawnMovement.prototype, "lastVelocity", {
        get: function () { return this._LastVelocity; },
        set: function (velocity) { this._LastVelocity = velocity; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "velocity", {
        get: function () { return this._Velocity; },
        /**
         * 设置速度
         * @param {vec} velocity
         */
        set: function (velocity) {
            if (velocity instanceof cc.Vec2)
                this._Velocity = new cc.Vec3(velocity.x, velocity.y, 0);
            else
                this._Velocity = velocity;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "addVelocity", {
        /**
         * 添加速度
         * @param {vec} velocity
         */
        set: function (velocity) {
            if (velocity instanceof cc.Vec2)
                this._Velocity = this._Velocity.add(new cc.Vec3(velocity.x, velocity.y, 0));
            else
                this._Velocity = this._Velocity.add(velocity);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "accelerationLimit", {
        /**
         * 获取最大速度
         */
        get: function () { return this._AccelerationLimit; },
        /**
         * 设置最大速度
         * @param {*} speed
         */
        set: function (limit) { this._AccelerationLimit = limit; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "maxSpeed", {
        /**
         * 获取最大速度
         */
        get: function () { return this._MaxSpeed; },
        /**
         * 设置最大速度
         * @param {*} speed
         */
        set: function (speed) { this._MaxSpeed = speed || this._MaxSpeed; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "force", {
        /**
         * 获取物理力
         * @returns
         */
        get: function () { return this._Physicforce; },
        /**
         * 设置物理力
         */
        set: function (force) {
            if (force instanceof cc.Vec2)
                this._Physicforce = new cc.Vec3(force.x, force.y, 0);
            else
                this._Physicforce = force;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "addforce", {
        /**
         * 添加物理力
         */
        set: function (force) {
            if (force instanceof cc.Vec2)
                this._Physicforce = this._Physicforce.add(new cc.Vec3(force.x, force.y, 0));
            else
                this._Physicforce = this._Physicforce.add(force);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "drag", {
        /**
         * 获取物理阻力
         * @returns
         */
        get: function () { return Math.max(this._PhysicDrag, 0); },
        /**
         * 设置物理阻力
         */
        set: function (drag) { this._PhysicDrag = Math.max(drag, 0); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "permForce", {
        /**
         * 获取持久力
         * @returns
         */
        get: function () { return this._PermanentForce; },
        /**
         * 设置持久力
         * @param {Vec3} vec 当不需要持久力时设置为undefined可以直接关闭
         */
        set: function (force) {
            if (force) {
                if (force instanceof cc.Vec2)
                    this._PermanentForce = new cc.Vec3(force.x, force.y, 0);
                else
                    this._PermanentForce = force;
            }
            else
                this._PermanentForce = undefined;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "validpermForce", {
        get: function () { return this._PermanentForce ? true : false; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "permDrag", {
        /**
         * 获取持久阻力
         */
        get: function () { return Math.max(this._PermanentDrag || 0, 0); },
        /**
         * 设置持久阻力
         * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
         * @returns
         */
        set: function (drag) {
            if (drag <= 0)
                this._PermanentDrag = undefined;
            else
                this._PermanentDrag = Math.max(drag, 0);
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "validPermDrag", {
        get: function () { return typeof this._PermanentDrag == 'number'; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "mass", {
        /**
         * 获取质量
         * @returns
         */
        get: function () { return Math.max(this._Mass, .001); },
        /**
         * 设置质量
         * @returns
         */
        set: function (value) { this._Mass = Math.max(value, .001); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "gravity", {
        /**
         * 获取重力方向
         */
        get: function () { return this._Gravity; },
        /**
         * 设置重力方向
         * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
         * @returns
         */
        set: function (gravity) {
            if (gravity instanceof cc.Vec2)
                this._Gravity = new cc.Vec3(gravity.x, gravity.y, 0);
            else
                this._Gravity = gravity;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "gravityScale", {
        /**
         * 获取重力标度
         * @returns
         */
        get: function () { return this._GravityScale; },
        /**
         * 设置重力标度
         */
        set: function (value) { this._GravityScale = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingFrictionFactor", {
        /**
         * 获取制动摩擦力因子
         * @returns
         */
        get: function () { return this._BrakingFrictionFactor; },
        /**
         * 设置制动摩擦力因子
         */
        set: function (value) { this._BrakingFrictionFactor = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingFriction", {
        /**
         * 获取制动摩擦力
         * @returns
         */
        get: function () { return this._BrakingFriction; },
        /**
         * 设置制动摩擦力
         */
        set: function (value) { this._BrakingFrictionFactor = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingDeceleration", {
        /**
         * 获取制动降速
         * @returns
         */
        get: function () { return this._BrakingDeceleration; },
        /**
         * 设置制动降速
         */
        set: function (value) { this._BrakingDeceleration = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    // SIGNPOST 用户力输入                                                                                           
    /**
     * 添加移动输入
     * @param {Vec3} direction 方向，默认认为是为单位向量，
     * @param {Number} scale
     */
    PawnMovement.prototype.addInput = function (direction, scale) {
        this.force = direction instanceof cc.Vec2 ? new cc.Vec3(direction.x, direction.y, 0) : direction;
        this.force = this.force.mul(this.maxSpeed * (scale || 1));
        return this;
    };
    ;
    Object.defineProperty(PawnMovement.prototype, "addGravity", {
        /**
         * 添加重力
         */
        set: function (scale) {
            this.force = this.force.add(this.gravity.mul(this.mass));
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "addDrag", {
        /**
         * 添加阻力
         * @param {*} drag
         * @returns
         */
        set: function (drag) {
            this.drag = drag + this.drag;
        },
        enumerable: false,
        configurable: true
    });
    ;
    // SIGNPOST 函数宏库                                                                                           
    // SIGNPOST 解算阶段                                                                                           
    /**
     * 这是一个内部方法
     * 将持久力加入到物理力中
     */
    PawnMovement.prototype.addPermanentForceToPhysic = function () {
        // 添加持久力
        if (this.validpermForce) {
            this.force = this.force.add(this.permForce);
        }
        // 添加持久阻力 
        this.drag = !this.validPermDrag ? this.drag : (this.permDrag + this.drag);
    };
    ;
    Object.defineProperty(PawnMovement.prototype, "canMove", {
        /**
         * 这是一个内部方法
         * 判断当前移动组件是否完全静止
         * @returns
         */
        get: function () {
            return !(cc.Vec3.equals(this.force, cc.Vec3.ZERO) && cc.Vec3.equals(this.velocity, cc.Vec3.ZERO));
        },
        enumerable: false,
        configurable: true
    });
    ;
    // SIGNPOST 双流传动式移动载具 - 解算阶段                                                                        
    /**
     * 速度向前
     * 要使用此方法进行移动，需要在其他任意阶段内向此移动组件添加力
     *
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    // public velocityForward(dt, rotateRate) {
    //     let slip = kismit.vec2Dot(kismit.rotationToVec2(this.context.rotation), kismit.normaliz2(this.velocity));
    //     slip = (slip - 1) / 2; // 面向时为0，背向时为-2
    // };
    // TAG 移动更新函数                                                                                             
    // SIGNPOST 移动更新函数 - 径直-到达点                                                                           
    /**
    * 更新到计算位置
    * 这个方法会自行移动到 this.arrivePosition
    * 使用此方法将无视阻力与重力，径直按照指定速度平移过去
    *
    * @param {Number} dt deltatime 与当前帧率绑定，必要项目
    * @param {Number} speed 执行速度，缺省maxSpeed
    * @param {Number} th 距离过零阈值，缺省1
    */
    PawnMovement.prototype.updateToPosition = function (dt, th, speed) {
        var conPos = this.context.getPosition();
        var pos = conPos instanceof cc.Vec2 ? new cc.Vec3(conPos.x, conPos.y, 0) : conPos;
        var moveVector = this.arrivePosition.sub(pos);
        var movelength = cc.Vec3.len(moveVector);
        if (movelength > (th || 1)) {
            var unit = moveVector.div(movelength);
            var move = unit.mul(Math.min((speed || this.maxSpeed) * dt, movelength));
            this.context.setPosition(this.inBoxBound(move.add(pos)));
        }
        return this;
    };
    ;
    // SIGNPOST 移动更新函数 - 双流传动式移动载具-到达点                                                               
    // fix                
    /**
     * 将向前轴面向位置移动
     * 这个方法会自行移动到 this.arrivePosition
     * 使用此方法将无视阻力与重力移动
     * 移动的同时会将自身角度朝向移动方向
     * 可以通过指定
     */
    PawnMovement.prototype.updateToWardPostion = function () {
    };
    ;
    // SIGNPOST 移动更新函数 - 基本速度驱动                                                                           
    /**
     * 由速度驱动更新
     * 要使用此方法进行移动，需要在其他任意阶段内向此移动组件添加力
     *
     * 可以响应瞬时力： addForce(), addDrag(), addInput()
     *
     * 可以响应持久力： permanentForce, permanentDrag
     *
     * 比如在默认情况下，不会实现阻力，你的移动就像是在无重力环境下一样
     * 而想要模仿走路或是其他移动模式，需要在此更新事件之前或是之后添加一份力/阻力
     * 在通常情况下，你不需要担心添加 力/阻力 执行顺序会造成计算失误
     * 因为这是由单一环路构成的移动模式
     *
     * 关于模拟阶段更新：
     * 你可以在同一帧或是生命周期的不同阶段内多次进行更新
     * 但一般都是因为迭代时对数据的实时性要求较高，需要反复进行更新，
     * 但使用更新函数进行迭代会造成速度流逝
     * 所以推荐自行对节点坐标进行迭代，而后统一进行驱动更新
     *
     * 如果迭代会造成速度错位，可以获取重力加速度，将速度转为动能
     * 减淡原始速度，而后在更新前将动能返回给力即可
     *
     * 例如铁链仿真，就可以对每节铁链进行一次运动更新，
     * 而后进行动能转换，将每节铁链的坐标向前一个进行约束仿真，比如当前的速度设定下迭代30次
     * 仿真完毕后重新赋能，或是将动能计算为其他粒子效果。
     *
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    PawnMovement.prototype.updateByVelocity = function (dt) {
        this.addPermanentForceToPhysic();
        if (this.canMove) {
            this.lastVelocity = this.velocity.clone();
            // 应用质量
            this.force = this.force.div(this.mass);
            // 计算阻力
            var incomingDrag = this.drag * dt + 1;
            // 重力加速度
            this.accelerationDue = this.velocity.div(incomingDrag);
            // 应用力到速度
            var outVelocity = this.force.mul(dt);
            outVelocity = outVelocity.add(this.velocity).div(incomingDrag);
            // 限制
            var outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.maxSpeed ? outVelocity : outVelocity.mul(this.maxSpeed).div(outVelocityLength);
            outVelocity = outVelocity.sub(this.lastVelocity);
            outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.accelerationLimit ? outVelocity : outVelocity.mul(this.accelerationLimit).div(outVelocityLength);
            outVelocity = outVelocity.add(this.lastVelocity);
            // 新速度
            this.velocity = new cc.Vec3(outVelocity);
            var newPostion = this.context.getPosition();
            // 设置坐标
            this.context.setPosition(this.velocity.mul(dt).add(newPostion instanceof cc.Vec2 ? new cc.Vec3(newPostion.x, newPostion.y, 0) : newPostion));
        }
        this.force.set(cc.Vec3.ZERO);
        this.drag = 0;
        return this;
    };
    ;
    return PawnMovement;
}());
exports.default = PawnMovement;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhd25Nb3ZlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLCtEQUE2RDtBQUM3RDtJQUNJLHNCQUFZLE9BQWdCO1FBS2xCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFrQ2xDLGdIQUFnSDtRQUVoSDs7V0FFRztRQUNPLGVBQVUsR0FBRztZQUNuQixRQUFRO1lBQ1IsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPO1lBQ1AsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztZQUNQLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87WUFDUCxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixTQUFTO1lBQ1QsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUY7Ozs7Ozs7V0FPRztRQUNJLGtCQUFhLEdBQUcsVUFBVSxNQUF5QixFQUFFLE1BQXlCLEVBQUUsS0FBd0IsRUFBRSxLQUFjO1lBQzNILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNq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QUMsQ0FBQyxDQUFDO1NBQ2hKO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFBQSxDQUFDO0lBaUJOLG1CQUFDO0FBQUQsQ0E5aEJBLEFBOGhCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgeyBtYXRoTWFjcm8gYXMga2lzbWl0IH0gZnJvbSAnLi9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhd25Nb3ZlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmFycml2ZVBvc2l0aW9uID0gY29udGV4dC5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb250ZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBUQUcgcG9zaXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLDovr7nm67moIdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9hcnJpdmVQb3NpdGlvbjogY2MuVmVjMztcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yiw6L6+55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYXJyaXZlUG9zaXRpb24oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fycml2ZVBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLDovr7nm67moIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhcnJpdmVQb3NpdGlvbih2YWx1ZTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IG5ldyBjYy5WZWMzKHZhbHVlLngsIHZhbHVlLnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fYXJyaXZlUG9zaXRpb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5Yiw6L6+55uu5qCH5YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkQXJyaXZlUG9zaXRpb24ob2Zmc2V0OiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChvZmZzZXQgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IHRoaXMuX2Fycml2ZVBvc2l0aW9uLmFkZChuZXcgY2MuVmVjMyhvZmZzZXQueCwgb2Zmc2V0LnksIDApKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycml2ZVBvc2l0aW9uID0gdGhpcy5fYXJyaXZlUG9zaXRpb24uYWRkKG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFRBRyBtb3ZlIHJhbmdlIHNldHRpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi+ueeVjOWumuS5ieWGheWuuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZml4ZWRCb3VuZCA9IHtcclxuICAgICAgICAvLyDovrnnlYzmnInmlYjmgKdcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgLy8g6L6555WM5Y6f54K5XHJcbiAgICAgICAgb3JpZ2luOiBuZXcgY2MuVmVjMygwKSxcclxuICAgICAgICAvLyDovrnnlYzojIPlm7RcclxuICAgICAgICBleHRlbnQ6IG5ldyBjYy5WZWMzKDApLFxyXG4gICAgICAgIC8vIOi+ueeVjOWvuem9kFxyXG4gICAgICAgIGFsaWduOiBuZXcgY2MuVmVjMygwKSxcclxuICAgICAgICAvLyDlnIblv4PovrnnlYzljYrlvoRcclxuICAgICAgICByYWRpdXM6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6L6555WMXHJcbiAgICAgKiBAcGFyYW0geyp9IGV4dGVudCBcclxuICAgICAqIEBwYXJhbSB7Kn0gb3JpZ2luIFxyXG4gICAgICogQHBhcmFtIHsqfSBhbGlnblxyXG4gICAgICogQHBhcmFtIHsqfSB2YWxpZCBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Rml4ZWRCb3VuZCA9IGZ1bmN0aW9uIChleHRlbnQ6IGNjLlZlYzMgfCBjYy5WZWMyLCBvcmlnaW46IGNjLlZlYzMgfCBjYy5WZWMyLCBhbGlnbjogY2MuVmVjMyB8IGNjLlZlYzIsIHZhbGlkOiBCb29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5maXhlZEJvdW5kLmV4dGVudCA9IGV4dGVudCBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhleHRlbnQueCwgZXh0ZW50LnksIDApIDogZXh0ZW50O1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4gPSBvcmlnaW4gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMob3JpZ2luLngsIG9yaWdpbi55LCAwKSA6IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmZpeGVkQm91bmQuYWxpZ24gPSBhbGlnbiBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhhbGlnbi54LCBhbGlnbi55LCAwKSA6IGFsaWduO1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC52YWxpZCA9IHZhbGlkID8gdmFsaWQgOiB0aGlzLmZpeGVkQm91bmQudmFsaWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZmQ5Yi26L6T5YWl55+i6YeP5Zyo5pa55b2i6L6555WM5YaFXHJcbiAgICAgKiBAcGFyYW0geyp9IHZlY3RvciBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5Cb3hCb3VuZCA9IGZ1bmN0aW9uICh2ZWN0b3I6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgb3V0ID0gdmVjdG9yO1xyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkQm91bmQudmFsaWQpIHtcclxuICAgICAgICAgICAgb3V0LnggPSBraXNtaXQuY2xhbXAob3V0LngsIHRoaXMuZml4ZWRCb3VuZC5leHRlbnQueCwgdGhpcy5maXhlZEJvdW5kLmFsaWduLngsIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4ueCk7XHJcbiAgICAgICAgICAgIG91dC55ID0ga2lzbWl0LmNsYW1wKG91dC55LCB0aGlzLmZpeGVkQm91bmQuZXh0ZW50LnksIHRoaXMuZml4ZWRCb3VuZC5hbGlnbi55LCB0aGlzLmZpeGVkQm91bmQub3JpZ2luLnkpO1xyXG4gICAgICAgICAgICBvdXQueiA9IGtpc21pdC5jbGFtcChvdXQueiwgdGhpcy5maXhlZEJvdW5kLmV4dGVudC56LCB0aGlzLmZpeGVkQm91bmQuYWxpZ24ueiwgdGhpcy5maXhlZEJvdW5kLm9yaWdpbi56KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgdmVsb2NpdHkgJiBtb3ZlbWVudCBiYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6YCa55So56e75Yqo5bGe5oCnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgX0xhc3RWZWxvY2l0eSA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgcHVibGljIGdldCBsYXN0VmVsb2NpdHkoKTogY2MuVmVjMyB7IHJldHVybiB0aGlzLl9MYXN0VmVsb2NpdHk7IH07XHJcbiAgICBwdWJsaWMgc2V0IGxhc3RWZWxvY2l0eSh2ZWxvY2l0eTogY2MuVmVjMykgeyB0aGlzLl9MYXN0VmVsb2NpdHkgPSB2ZWxvY2l0eTsgfTtcclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN6YCf5bqmXHJcbiAgICAgKiDkuI3lu7rorq7nm7TmjqXosIPnlKjvvIzogIzmmK/kvb/nlKjlroPnmoTmlrnms5U6XHJcbiAgICAgKiB2ZWxvY2l0eSDnm7TmjqXorr7nva7pgJ/luqZcclxuICAgICAqIGFkZFZlbG9jaXR5IOebtOaOpea3u+WKoOmAn+W6plxyXG4gICAgICog55u05o6l5re75Yqg6YCf5bqm5bm25LiN5Yip5LqO54mp5L2T6L+Q5Yqo5qih5ouf77yM5bqU5b2T5YWI6L+b6KGM5Yqb55qE5re75YqgOlxyXG4gICAgICogaW5wdXQg5re75Yqg56e75Yqo6L6T5YWlXHJcbiAgICAgKiBmb3JjZSDmt7vliqDliptcclxuICAgICAqIOiuoeeul+aXtumcgOimgeazqOaEj++8jOmZpOmdnumcgOimgeWwhuiuoeeul+WAvOS/neWtmOWcqOatpO+8jOWQpuWImeS4jeWPr+S7peS9v+eUqOmTvuW8j+i/kOeul+OAglxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1ZlbG9jaXR5ID0gbmV3IGNjLlZlYzMoMCk7XHJcbiAgICBwdWJsaWMgZ2V0IHZlbG9jaXR5KCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fVmVsb2NpdHk7IH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumAn+W6plxyXG4gICAgICogQHBhcmFtIHt2ZWN9IHZlbG9jaXR5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHZlbG9jaXR5KHZlbG9jaXR5OiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmICh2ZWxvY2l0eSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX1ZlbG9jaXR5ID0gbmV3IGNjLlZlYzModmVsb2NpdHkueCwgdmVsb2NpdHkueSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0ge3ZlY30gdmVsb2NpdHkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkVmVsb2NpdHkodmVsb2NpdHkpIHtcclxuICAgICAgICBpZiAodmVsb2NpdHkgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IHRoaXMuX1ZlbG9jaXR5LmFkZChuZXcgY2MuVmVjMyh2ZWxvY2l0eS54LCB2ZWxvY2l0eS55LCAwKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IHRoaXMuX1ZlbG9jaXR5LmFkZCh2ZWxvY2l0eSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6YCf5bqm6ZmQ5Yi2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQWNjZWxlcmF0aW9uTGltaXQ6IG51bWJlciA9IDk5OTk7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluacgOWkp+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFjY2VsZXJhdGlvbkxpbWl0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9BY2NlbGVyYXRpb25MaW1pdDsgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5pyA5aSn6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0geyp9IHNwZWVkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFjY2VsZXJhdGlvbkxpbWl0KGxpbWl0OiBudW1iZXIpIHsgdGhpcy5fQWNjZWxlcmF0aW9uTGltaXQgPSBsaW1pdCB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN5qih5byP5LiL5pyA5aSn56e75Yqo6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTWF4U3BlZWQ6IG51bWJlciA9IDEwMDA7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluacgOWkp+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG1heFNwZWVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9NYXhTcGVlZDsgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5pyA5aSn6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0geyp9IHNwZWVkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG1heFNwZWVkKHNwZWVkKSB7IHRoaXMuX01heFNwZWVkID0gc3BlZWQgfHwgdGhpcy5fTWF4U3BlZWQ7IH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3niannkIbliptcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9QaHlzaWNmb3JjZSA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bniannkIbliptcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGZvcmNlKCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fUGh5c2ljZm9yY2UgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u54mp55CG5YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZm9yY2UoZm9yY2U6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKGZvcmNlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fUGh5c2ljZm9yY2UgPSBuZXcgY2MuVmVjMyhmb3JjZS54LCBmb3JjZS55LCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1BoeXNpY2ZvcmNlID0gZm9yY2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDniannkIbliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGRmb3JjZShmb3JjZTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAoZm9yY2UgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IHRoaXMuX1BoeXNpY2ZvcmNlLmFkZChuZXcgY2MuVmVjMyhmb3JjZS54LCBmb3JjZS55LCAwKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IHRoaXMuX1BoeXNpY2ZvcmNlLmFkZChmb3JjZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN54mp55CG6Zi75YqbXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfUGh5c2ljRHJhZzogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W54mp55CG6Zi75YqbXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkcmFnKCkgeyByZXR1cm4gTWF0aC5tYXgodGhpcy5fUGh5c2ljRHJhZywgMCkgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u54mp55CG6Zi75YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZHJhZyhkcmFnOiBudW1iZXIpIHsgdGhpcy5fUGh5c2ljRHJhZyA9IE1hdGgubWF4KGRyYWcsIDApOyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyB5LmF5YqbL+mYu+WKm1xyXG4gICAgICog6K+l5bGe5oCn5Lya5Zyo5q+P5qyh5pu05paw5pe26Ieq5Yqo5Yqg5YWl5Yiw54mp55CG5Yqb5LitXHJcbiAgICAgKiDkuI3orrrlvZPliY3mmK/lkKblt7Lnu4/liqDlhaXniannkIbliptcclxuICAgICAqIOi/meWPr+S7peeUqOS6jiDpo47vvIzlvJXlipvnrYnlsZ7mgKdcclxuICAgICAqIFxyXG4gICAgICog5b2T5LiN6ZyA6KaB5oyB5LmF5Yqb5pe26ZyA6KaB6K6+572u5Li6IHVuZGVmaW5lZFxyXG4gICAgICog6L+Z5Y+v5Lul6YCa6L+H5YW26K6+572u5pa55rOV5p2l5a6M5oiQ77yM5LiN6ZyA6KaB5omL5Yqo6LWL5YC8XHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMgeS5heWKm1xyXG4gICAgICog6K+35LiN6KaB55u05o6l6K6+572u5oyB5LmF5Yqb77yM6ICM5piv5L2/55So5a6D55qE5pa55rOV77yaXHJcbiAgICAgKiBzZXRQZXJtRm9yY2UoKSDorr7nva7mjIHkuYXliptcclxuICAgICAqIGdldFBlcm1Gb3JjZSgpIOiOt+WPluaMgeS5heWKm1xyXG4gICAgICogQHBhcmFtIHtWZWMzfSBwZXJtYW5lbnRGb3JjZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1Blcm1hbmVudEZvcmNlOiBjYy5WZWMzIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mjIHkuYXliptcclxuICAgICAqIEBwYXJhbSB7VmVjM30gdmVjIOW9k+S4jemcgOimgeaMgeS5heWKm+aXtuiuvue9ruS4unVuZGVmaW5lZOWPr+S7peebtOaOpeWFs+mXrVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHBlcm1Gb3JjZShmb3JjZTogY2MuVmVjMyB8IGNjLlZlYzIgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICAgICAgaWYgKGZvcmNlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgICAgIHRoaXMuX1Blcm1hbmVudEZvcmNlID0gbmV3IGNjLlZlYzMoZm9yY2UueCwgZm9yY2UueSwgMCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX1Blcm1hbmVudEZvcmNlID0gZm9yY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fUGVybWFuZW50Rm9yY2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIHkuYXlipsgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwZXJtRm9yY2UoKTogY2MuVmVjMyB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLl9QZXJtYW5lbnRGb3JjZSB9O1xyXG4gICAgcHVibGljIGdldCB2YWxpZHBlcm1Gb3JjZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX1Blcm1hbmVudEZvcmNlID8gdHJ1ZSA6IGZhbHNlIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIHkuYXpmLvliptcclxuICAgICAqIOWmguaenOS4jemcgOimgeS9v+eUqOaMgeS5hemYu+WKm++8jOivt+iuvue9ruS4unVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1Blcm1hbmVudERyYWc6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5oyB5LmF6Zi75YqbXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHJhZyDlvZPkuI3pnIDopoHmjIHkuYXpmLvlipvml7borr7nva7kuLp1bmRlZmluZWTlj6/ku6Xnm7TmjqXlhbPpl61cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHBlcm1EcmFnKGRyYWc6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChkcmFnIDw9IDApIHRoaXMuX1Blcm1hbmVudERyYWcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLl9QZXJtYW5lbnREcmFnID0gTWF0aC5tYXgoZHJhZywgMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIHkuYXpmLvliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwZXJtRHJhZygpOiBudW1iZXIgeyByZXR1cm4gTWF0aC5tYXgodGhpcy5fUGVybWFuZW50RHJhZyB8fCAwLCAwKSB9O1xyXG4gICAgcHVibGljIGdldCB2YWxpZFBlcm1EcmFnKCk6IGJvb2xlYW4geyByZXR1cm4gdHlwZW9mIHRoaXMuX1Blcm1hbmVudERyYWcgPT0gJ251bWJlcicgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi0qOmHj1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX01hc3M6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlui0qOmHj1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbWFzcygpIHsgcmV0dXJuIE1hdGgubWF4KHRoaXMuX01hc3MsIC4wMDEpIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rui0qOmHj1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgbWFzcyh2YWx1ZSkgeyB0aGlzLl9NYXNzID0gTWF0aC5tYXgodmFsdWUsIC4wMDEpIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43lipvmlrnlkJFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9HcmF2aXR5OiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMCwgMCwgLTk4MCk7XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumHjeWKm+aWueWQkVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRyYWcg5b2T5LiN6ZyA6KaB5oyB5LmF6Zi75Yqb5pe26K6+572u5Li6dW5kZWZpbmVk5Y+v5Lul55u05o6l5YWz6ZetXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBncmF2aXR5KGdyYXZpdHk6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKGdyYXZpdHkgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9HcmF2aXR5ID0gbmV3IGNjLlZlYzMoZ3Jhdml0eS54LCBncmF2aXR5LnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fR3Jhdml0eSA9IGdyYXZpdHk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bph43lipvmlrnlkJFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmF2aXR5KCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fR3Jhdml0eSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5Yqb5qCH5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfR3Jhdml0eVNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bph43lipvmoIfluqZcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdyYXZpdHlTY2FsZSgpIHsgcmV0dXJuIHRoaXMuX0dyYXZpdHlTY2FsZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ph43lipvmoIfluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBncmF2aXR5U2NhbGUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9HcmF2aXR5U2NhbGUgPSB2YWx1ZSB9O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWItuWKqOaRqeaTpuWKm+WboOWtkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0JyYWtpbmdGcmljdGlvbkZhY3RvcjogbnVtYmVyID0gMjtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yi25Yqo5pGp5pOm5Yqb5Zug5a2QXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBicmFraW5nRnJpY3Rpb25GYWN0b3IoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0JyYWtpbmdGcmljdGlvbkZhY3RvciB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLbliqjmkanmk6blipvlm6DlrZBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBicmFraW5nRnJpY3Rpb25GYWN0b3IodmFsdWU6IG51bWJlcikgeyB0aGlzLl9CcmFraW5nRnJpY3Rpb25GYWN0b3IgPSB2YWx1ZSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi25Yqo5pGp5pOm5YqbXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQnJha2luZ0ZyaWN0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliLbliqjmkanmk6bliptcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJyYWtpbmdGcmljdGlvbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQnJha2luZ0ZyaWN0aW9uIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWItuWKqOaRqeaTpuWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJyYWtpbmdGcmljdGlvbih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX0JyYWtpbmdGcmljdGlvbkZhY3RvciA9IHZhbHVlIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLbliqjpmY3pgJ9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9CcmFraW5nRGVjZWxlcmF0aW9uID0gMjA0ODtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yi25Yqo6ZmN6YCfXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBicmFraW5nRGVjZWxlcmF0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9CcmFraW5nRGVjZWxlcmF0aW9uIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWItuWKqOmZjemAn1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJyYWtpbmdEZWNlbGVyYXRpb24odmFsdWU6IG51bWJlcikgeyB0aGlzLl9CcmFraW5nRGVjZWxlcmF0aW9uID0gdmFsdWUgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnlKjmiLflipvovpPlhaUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnp7vliqjovpPlhaVcclxuICAgICAqIEBwYXJhbSB7VmVjM30gZGlyZWN0aW9uIOaWueWQke+8jOm7mOiupOiupOS4uuaYr+S4uuWNleS9jeWQkemHj++8jFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkSW5wdXQoZGlyZWN0aW9uOiBjYy5WZWMzIHwgY2MuVmVjMiwgc2NhbGU/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmZvcmNlID0gZGlyZWN0aW9uIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSwgMCkgOiBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UubXVsKHRoaXMubWF4U3BlZWQgKiAoc2NhbGUgfHwgMSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmHjeWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZEdyYXZpdHkoc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZS5hZGQodGhpcy5ncmF2aXR5Lm11bCh0aGlzLm1hc3MpKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDpmLvliptcclxuICAgICAqIEBwYXJhbSB7Kn0gZHJhZyBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZERyYWcoZHJhZzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnID0gZHJhZyArIHRoaXMuZHJhZztcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg5pu05paw6I635Y+WICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43lipvliqDpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFjY2VsZXJhdGlvbkR1ZSA9IG5ldyBjYy5WZWMzKDApO1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOWHveaVsOWuj+W6kyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIC8vIFNJR05QT1NUIOino+eul+mYtuautSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/meaYr+S4gOS4quWGhemDqOaWueazlVxyXG4gICAgICog5bCG5oyB5LmF5Yqb5Yqg5YWl5Yiw54mp55CG5Yqb5LitXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhZGRQZXJtYW5lbnRGb3JjZVRvUGh5c2ljKCkge1xyXG4gICAgICAgIC8vIOa3u+WKoOaMgeS5heWKm1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkcGVybUZvcmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2UgPSB0aGlzLmZvcmNlLmFkZCh0aGlzLnBlcm1Gb3JjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOa3u+WKoOaMgeS5hemYu+WKmyBcclxuICAgICAgICB0aGlzLmRyYWcgPSAhdGhpcy52YWxpZFBlcm1EcmFnID8gdGhpcy5kcmFnIDogKHRoaXMucGVybURyYWcgKyB0aGlzLmRyYWcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/meaYr+S4gOS4quWGhemDqOaWueazlVxyXG4gICAgICog5Yik5pat5b2T5YmN56e75Yqo57uE5Lu25piv5ZCm5a6M5YWo6Z2Z5q2iXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjYW5Nb3ZlKCkge1xyXG4gICAgICAgIHJldHVybiAhKGNjLlZlYzMuZXF1YWxzKHRoaXMuZm9yY2UsIGNjLlZlYzMuWkVSTykgJiYgY2MuVmVjMy5lcXVhbHModGhpcy52ZWxvY2l0eSwgY2MuVmVjMy5aRVJPKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOWPjOa1geS8oOWKqOW8j+enu+WKqOi9veWFtyAtIOino+eul+mYtuautSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCf5bqm5ZCR5YmNXHJcbiAgICAgKiDopoHkvb/nlKjmraTmlrnms5Xov5vooYznp7vliqjvvIzpnIDopoHlnKjlhbbku5bku7vmhI/pmLbmrrXlhoXlkJHmraTnp7vliqjnu4Tku7bmt7vliqDliptcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAgKi9cclxuICAgIC8vIHB1YmxpYyB2ZWxvY2l0eUZvcndhcmQoZHQsIHJvdGF0ZVJhdGUpIHtcclxuICAgIC8vICAgICBsZXQgc2xpcCA9IGtpc21pdC52ZWMyRG90KGtpc21pdC5yb3RhdGlvblRvVmVjMih0aGlzLmNvbnRleHQucm90YXRpb24pLCBraXNtaXQubm9ybWFsaXoyKHRoaXMudmVsb2NpdHkpKTtcclxuICAgIC8vICAgICBzbGlwID0gKHNsaXAgLSAxKSAvIDI7IC8vIOmdouWQkeaXtuS4ujDvvIzog4zlkJHml7bkuLotMlxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBUQUcg56e75Yqo5pu05paw5Ye95pWwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g5b6E55u0LeWIsOi+vueCuSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmm7TmlrDliLDorqHnrpfkvY3nva5cclxuICAgICog6L+Z5Liq5pa55rOV5Lya6Ieq6KGM56e75Yqo5YiwIHRoaXMuYXJyaXZlUG9zaXRpb25cclxuICAgICog5L2/55So5q2k5pa55rOV5bCG5peg6KeG6Zi75Yqb5LiO6YeN5Yqb77yM5b6E55u05oyJ54Wn5oyH5a6a6YCf5bqm5bmz56e76L+H5Y67XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0ge051bWJlcn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgKiBAcGFyYW0ge051bWJlcn0gc3BlZWQg5omn6KGM6YCf5bqm77yM57y655yBbWF4U3BlZWRcclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IHRoIOi3neemu+i/h+mbtumYiOWAvO+8jOe8uuecgTFcclxuICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlVG9Qb3NpdGlvbihkdCwgdGgsIHNwZWVkKSB7XHJcbiAgICAgICAgbGV0IGNvblBvcyA9IHRoaXMuY29udGV4dC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBwb3MgPSBjb25Qb3MgaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMoY29uUG9zLngsIGNvblBvcy55LCAwKSA6IGNvblBvc1xyXG4gICAgICAgIGxldCBtb3ZlVmVjdG9yID0gdGhpcy5hcnJpdmVQb3NpdGlvbi5zdWIocG9zKTtcclxuICAgICAgICBsZXQgbW92ZWxlbmd0aCA9IGNjLlZlYzMubGVuKG1vdmVWZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAobW92ZWxlbmd0aCA+ICh0aCB8fCAxKSkge1xyXG4gICAgICAgICAgICBsZXQgdW5pdCA9IG1vdmVWZWN0b3IuZGl2KG1vdmVsZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgbW92ZSA9IHVuaXQubXVsKE1hdGgubWluKChzcGVlZCB8fCB0aGlzLm1heFNwZWVkKSAqIGR0LCBtb3ZlbGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRQb3NpdGlvbih0aGlzLmluQm94Qm91bmQobW92ZS5hZGQocG9zKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g5Y+M5rWB5Lyg5Yqo5byP56e75Yqo6L295YW3LeWIsOi+vueCuSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIGZpeCAgICAgICAgICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICog5bCG5ZCR5YmN6L206Z2i5ZCR5L2N572u56e75YqoXHJcbiAgICAgKiDov5nkuKrmlrnms5XkvJroh6rooYznp7vliqjliLAgdGhpcy5hcnJpdmVQb3NpdGlvblxyXG4gICAgICog5L2/55So5q2k5pa55rOV5bCG5peg6KeG6Zi75Yqb5LiO6YeN5Yqb56e75YqoXHJcbiAgICAgKiDnp7vliqjnmoTlkIzml7bkvJrlsIboh6rouqvop5LluqbmnJ3lkJHnp7vliqjmlrnlkJFcclxuICAgICAqIOWPr+S7pemAmui/h+aMh+WumlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVUb1dhcmRQb3N0aW9uKCkge1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOWfuuacrOmAn+W6pumpseWKqCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sx6YCf5bqm6amx5Yqo5pu05pawXHJcbiAgICAgKiDopoHkvb/nlKjmraTmlrnms5Xov5vooYznp7vliqjvvIzpnIDopoHlnKjlhbbku5bku7vmhI/pmLbmrrXlhoXlkJHmraTnp7vliqjnu4Tku7bmt7vliqDliptcclxuICAgICAqIFxyXG4gICAgICog5Y+v5Lul5ZON5bqU556s5pe25Yqb77yaIGFkZEZvcmNlKCksIGFkZERyYWcoKSwgYWRkSW5wdXQoKVxyXG4gICAgICogXHJcbiAgICAgKiDlj6/ku6Xlk43lupTmjIHkuYXlipvvvJogcGVybWFuZW50Rm9yY2UsIHBlcm1hbmVudERyYWdcclxuICAgICAqIFxyXG4gICAgICog5q+U5aaC5Zyo6buY6K6k5oOF5Ya15LiL77yM5LiN5Lya5a6e546w6Zi75Yqb77yM5L2g55qE56e75Yqo5bCx5YOP5piv5Zyo5peg6YeN5Yqb546v5aKD5LiL5LiA5qC3XHJcbiAgICAgKiDogIzmg7PopoHmqKHku7/otbDot6/miJbmmK/lhbbku5bnp7vliqjmqKHlvI/vvIzpnIDopoHlnKjmraTmm7TmlrDkuovku7bkuYvliY3miJbmmK/kuYvlkI7mt7vliqDkuIDku73lipsv6Zi75YqbXHJcbiAgICAgKiDlnKjpgJrluLjmg4XlhrXkuIvvvIzkvaDkuI3pnIDopoHmi4Xlv4Pmt7vliqAg5YqbL+mYu+WKmyDmiafooYzpobrluo/kvJrpgKDmiJDorqHnrpflpLHor69cclxuICAgICAqIOWboOS4uui/meaYr+eUseWNleS4gOeOr+i3r+aehOaIkOeahOenu+WKqOaooeW8j1xyXG4gICAgICogXHJcbiAgICAgKiDlhbPkuo7mqKHmi5/pmLbmrrXmm7TmlrDvvJpcclxuICAgICAqIOS9oOWPr+S7peWcqOWQjOS4gOW4p+aIluaYr+eUn+WRveWRqOacn+eahOS4jeWQjOmYtuauteWGheWkmuasoei/m+ihjOabtOaWsFxyXG4gICAgICog5L2G5LiA6Iis6YO95piv5Zug5Li66L+t5Luj5pe25a+55pWw5o2u55qE5a6e5pe25oCn6KaB5rGC6L6D6auY77yM6ZyA6KaB5Y+N5aSN6L+b6KGM5pu05paw77yMXHJcbiAgICAgKiDkvYbkvb/nlKjmm7TmlrDlh73mlbDov5vooYzov63ku6PkvJrpgKDmiJDpgJ/luqbmtYHpgJ1cclxuICAgICAqIOaJgOS7peaOqOiNkOiHquihjOWvueiKgueCueWdkOagh+i/m+ihjOi/reS7o++8jOiAjOWQjue7n+S4gOi/m+ihjOmpseWKqOabtOaWsFxyXG4gICAgICogXHJcbiAgICAgKiDlpoLmnpzov63ku6PkvJrpgKDmiJDpgJ/luqbplJnkvY3vvIzlj6/ku6Xojrflj5bph43lipvliqDpgJ/luqbvvIzlsIbpgJ/luqbovazkuLrliqjog71cclxuICAgICAqIOWHj+a3oeWOn+Wni+mAn+W6pu+8jOiAjOWQjuWcqOabtOaWsOWJjeWwhuWKqOiDvei/lOWbnue7meWKm+WNs+WPr1xyXG4gICAgICogXHJcbiAgICAgKiDkvovlpoLpk4Hpk77ku7/nnJ/vvIzlsLHlj6/ku6Xlr7nmr4/oioLpk4Hpk77ov5vooYzkuIDmrKHov5Dliqjmm7TmlrDvvIxcclxuICAgICAqIOiAjOWQjui/m+ihjOWKqOiDvei9rOaNou+8jOWwhuavj+iKgumTgemTvueahOWdkOagh+WQkeWJjeS4gOS4qui/m+ihjOe6puadn+S7v+ecn++8jOavlOWmguW9k+WJjeeahOmAn+W6puiuvuWumuS4i+i/reS7ozMw5qyhXHJcbiAgICAgKiDku7/nnJ/lrozmr5XlkI7ph43mlrDotYvog73vvIzmiJbmmK/lsIbliqjog73orqHnrpfkuLrlhbbku5bnspLlrZDmlYjmnpzjgIJcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVCeVZlbG9jaXR5KGR0OiBudW1iZXIpOiBQYXduTW92ZW1lbnQge1xyXG4gICAgICAgIHRoaXMuYWRkUGVybWFuZW50Rm9yY2VUb1BoeXNpYygpO1xyXG4gICAgICAgIGlmICh0aGlzLmNhbk1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LmNsb25lKCk7XHJcbiAgICAgICAgICAgIC8vIOW6lOeUqOi0qOmHj1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZS5kaXYodGhpcy5tYXNzKTtcclxuICAgICAgICAgICAgLy8g6K6h566X6Zi75YqbXHJcbiAgICAgICAgICAgIGxldCBpbmNvbWluZ0RyYWcgPSB0aGlzLmRyYWcgKiBkdCArIDE7XHJcbiAgICAgICAgICAgIC8vIOmHjeWKm+WKoOmAn+W6plxyXG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbkR1ZSA9IHRoaXMudmVsb2NpdHkuZGl2KGluY29taW5nRHJhZyk7XHJcbiAgICAgICAgICAgIC8vIOW6lOeUqOWKm+WIsOmAn+W6plxyXG4gICAgICAgICAgICBsZXQgb3V0VmVsb2NpdHkgPSB0aGlzLmZvcmNlLm11bChkdCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHkuYWRkKHRoaXMudmVsb2NpdHkpLmRpdihpbmNvbWluZ0RyYWcpO1xyXG4gICAgICAgICAgICAvLyDpmZDliLZcclxuICAgICAgICAgICAgbGV0IG91dFZlbG9jaXR5TGVuZ3RoID0gb3V0VmVsb2NpdHkubGVuKCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHlMZW5ndGggPD0gdGhpcy5tYXhTcGVlZCA/IG91dFZlbG9jaXR5IDogb3V0VmVsb2NpdHkubXVsKHRoaXMubWF4U3BlZWQpLmRpdihvdXRWZWxvY2l0eUxlbmd0aCk7XHJcbiAgICAgICAgICAgIG91dFZlbG9jaXR5ID0gb3V0VmVsb2NpdHkuc3ViKHRoaXMubGFzdFZlbG9jaXR5KVxyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eUxlbmd0aCA9IG91dFZlbG9jaXR5LmxlbigpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5TGVuZ3RoIDw9IHRoaXMuYWNjZWxlcmF0aW9uTGltaXQgPyBvdXRWZWxvY2l0eSA6IG91dFZlbG9jaXR5Lm11bCh0aGlzLmFjY2VsZXJhdGlvbkxpbWl0KS5kaXYob3V0VmVsb2NpdHlMZW5ndGgpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5LmFkZCh0aGlzLmxhc3RWZWxvY2l0eSk7XHJcbiAgICAgICAgICAgIC8vIOaWsOmAn+W6plxyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IGNjLlZlYzMob3V0VmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBsZXQgbmV3UG9zdGlvbiA9IHRoaXMuY29udGV4dC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAvLyDorr7nva7lnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldFBvc2l0aW9uKHRoaXMudmVsb2NpdHkubXVsKGR0KS5hZGQobmV3UG9zdGlvbiBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhuZXdQb3N0aW9uLngsIG5ld1Bvc3Rpb24ueSwgMCkgOiBuZXdQb3N0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZm9yY2Uuc2V0KGNjLlZlYzMuWkVSTyk7XHJcbiAgICAgICAgdGhpcy5kcmFnID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g566A5piT5Yqb6amx5YqoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyBmaXggICAgICAgICAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAqIOeUseWKm+mpseWKqOabtOaWsFxyXG4gICAgICogXHJcbiAgICAgKiDkuIDoiKzmg4XlhrXkuIvlubbkuI3mjqjojZDkvb/nlKjvvIzov5nku4Xku4Xlj6rmmK/kuLrkuobpq5jmlYjnjofogIzkuqfnlJ/nmoRcclxuICAgICAqIOWmguaenOmcgOimgeWunueOsFBCRO+8jOWFiea7keaguOetieWHveaVsO+8jOivt+S9v+eUqHVwZGF0ZUJ5VmVsb2NpdHkoKVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0geyp9IGR0IGRlbHRhdGltZSDkuI7lvZPliY3luKfnjofnu5HlrprvvIzlv4XopoHpobnnm65cclxuICAgICAqL1xyXG4gICAgdXBkYXRlQnlmb3JjZSA9IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIHRoaXMuYWRkUGVybWFuZW50Rm9yY2VUb1BoeXNpYygpO1xyXG4gICAgfTtcclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3364aqqOgFIq4CCAllydcf6', 'DevelopersToolGlobal');
// scripts/base/class/DevelopersToolGlobal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAnimPhySimSpace = exports.EWidgetCoordinateSpace = exports.ESceneCoordinateSpace = exports.panelType = exports.mathMacro = exports.DevelopersToolGlobal = void 0;
// import { DevelopersToolGlobal as ccvv } from './DevelopersToolGlobal';
var DevelopersToolGlobal = /** @class */ (function () {
    function DevelopersToolGlobal() {
    }
    Object.defineProperty(DevelopersToolGlobal, "warehouse", {
        get: function () {
            this._Global_Warehouse = this._Global_Warehouse || {};
            return this._Global_Warehouse;
        },
        set: function (value) {
            this._Global_Warehouse = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "loadResourcescatalog", {
        /**
         * 加载资源目录
         */
        get: function () {
            return {
                // "url": { type: res type, url: "save url" },
                //加载音乐音效资源
                "sounds": { type: cc.AudioClip, url: "sounds" },
                //加载预制件资源
                "prefabs": { type: cc.Prefab, url: "prefabs" },
                //加载图集资源
                // "atlas": { type: cc.SpriteAtlas, url: "atlas" },
                //加载单个精灵资源
                "frames": { type: cc.SpriteFrame, url: "frames" },
                //加载分享图
                "share": { type: cc.SpriteFrame, url: "share" },
            };
        },
        set: function (value) {
            cc.error("不允许修改资源目录");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "tool", {
        get: function () {
            this._Global_Tool = this._Global_Tool || {};
            return this._Global_Tool;
        },
        set: function (value) {
            this._Global_Tool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "other", {
        get: function () {
            this._Global_Other = this._Global_Other || {};
            return this._Global_Other;
        },
        set: function (value) {
            this._Global_Other = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "layers", {
        /**
         * 获取所有层
         */
        get: function () {
            this._Global_GenralLayer = this._Global_GenralLayer || {};
            return this._Global_GenralLayer;
        },
        /**
         * 设置所有层
         */
        set: function (value) {
            this._Global_GenralLayer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "layer", {
        /**
         * 获取底层
         */
        get: function () {
            return this.layers[0];
        },
        /**
         * 添加的新节点
         */
        set: function (value) {
            var key = Object.keys(this._Global_GenralLayer || {}).length;
            this.layers[key.toString()] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "scripts", {
        get: function () {
            this._Global_OpenScript = this._Global_OpenScript || {};
            return this._Global_OpenScript;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "script", {
        set: function (value) {
            if (!value)
                return;
            var key;
            if (typeof value === 'object') {
                key = value.name;
                if (!this._OpenScript_FristName)
                    this._OpenScript_FristName = key;
            }
            else {
                key = (Object.keys(this._Global_OpenScript || {}).length).toString();
            }
            this.scripts[key] = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 清空脚本
     */
    DevelopersToolGlobal.script_Clean = function () {
        this._OpenScript_FristName = null;
        this._Global_OpenScript = {};
    };
    Object.defineProperty(DevelopersToolGlobal, "scriptName", {
        /**
         * 获得所有脚本名称
         */
        get: function () {
            if (!this._Global_OpenScript)
                return null;
            return Object.keys(this._Global_OpenScript);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "fristScript", {
        /**
         * 获取第一个加入的脚本
         */
        get: function () {
            return this._Global_OpenScript[this._OpenScript_FristName];
        },
        enumerable: false,
        configurable: true
    });
    DevelopersToolGlobal.getName = function (inst) {
        return inst.name + inst['_id'].replace(/\./g, "");
    };
    Object.defineProperty(DevelopersToolGlobal, "instances", {
        /**
         * 获取全部实例
         */
        get: function () {
            this._Global_Instance = this._Global_Instance || {};
            return this._Global_Instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "instance", {
        /**
         * 添加实例，用实例的名称与ID作键名
         */
        set: function (value) {
            this.instance[this.getName(value)] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "instance_remove", {
        /**
         * 删除实例
         * 如果未指定有效值则为清除
         */
        set: function (value) {
            if (!value)
                this._Global_Instance = {};
            else
                this.instance[this.getName(value)] = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 根据名称获取实例
     * 如果没有使用自定义名称，则默认用实例ID作为名称，这可能与任何名称常量不符
     */
    DevelopersToolGlobal.getInstanceByName = function (name) {
        return this._Global_Instance[name];
    };
    /**
     * 根据名称设置实例
     */
    DevelopersToolGlobal.setInstanceByName = function (name, inst) {
        this._Global_Instance[name] = inst;
    };
    Object.defineProperty(DevelopersToolGlobal, "tuple", {
        /**
         * 获取元组
         */
        get: function () {
            return this._Global_Tuple;
        },
        /**
         * 元组加入一个项目
         * 如果加入一个无效的值，比如布尔，undefined，unll，将清空这个元组
         * 加入一个空数组或是空对象是有效的，所以会作为元组的一个值加入
         */
        set: function (value) {
            if (!value || typeof value == 'boolean')
                this._Global_Tuple = [];
            this._Global_Tuple.push(value);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 元组加入独有项目
     * 返回这个项目是否存在
     */
    DevelopersToolGlobal.tupleOnly = function (value) {
        if (this._Global_Tuple.indexOf(value))
            return true;
        else
            this.tuple = value;
        return false;
    };
    Object.defineProperty(DevelopersToolGlobal, "tuple_remove", {
        /**
         * 移除元组一个项目
         */
        set: function (value) {
            this._Global_Tuple.filter(function (element, index, array) { element != value; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 仓库全局实例
     * 存放load时载入的数据
     */
    DevelopersToolGlobal._Global_Warehouse = null;
    /**
     * 工具全局实例
     * 可以注入其他工具类
     */
    DevelopersToolGlobal._Global_Tool = null;
    /**
     * 杂项全局实例
     * 可以注入其他项目
     */
    DevelopersToolGlobal._Global_Other = null;
    /**
     * 游戏基本层全局实例
     * 只能注入cc.Node
     */
    DevelopersToolGlobal._Global_GenralLayer = null;
    /**
     * 游戏基本层全局脚本
     * 只能注入cc.component，不过实际上并没有进行限制
     */
    DevelopersToolGlobal._Global_OpenScript = null;
    DevelopersToolGlobal._OpenScript_FristName = null;
    /**
     * 全局实例
     */
    DevelopersToolGlobal._Global_Instance = {};
    /**
     * 全局元组
     */
    DevelopersToolGlobal._Global_Tuple = [];
    return DevelopersToolGlobal;
}());
exports.DevelopersToolGlobal = DevelopersToolGlobal;
// import { mathMacro as mm } from '../base/class/DevelopersToolGlobal';
var mathMacro = /** @class */ (function () {
    function mathMacro() {
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        this.mnum = {};
        this._IsMat = false;
        var isNumber = function (value) { return typeof value === 'number' && !isNaN(value); };
        if (!num[0]) {
            this.mnum['x'] = 0;
            this.mnum['y'] = 0;
            this.mnum['z'] = 0;
            this.mnum['w'] = 0;
        }
        else if (num[0].x) {
            this.mnum['x'] = isNumber(num[0].x) ? num[0].x : 0;
            this.mnum['y'] = isNumber(num[0].y) ? num[0].y : 0;
            this.mnum['z'] = isNumber(num[0].z) ? num[0].z : 0;
            this.mnum['w'] = isNumber(num[0].w) ? num[0].w : 0;
        }
        else if (num[0][0]) {
            this.mnum['x'] = isNumber(num[0][0]) ? num[0][0] : 0;
            this.mnum['y'] = isNumber(num[0][1]) ? num[0][1] : 0;
            this.mnum['z'] = isNumber(num[0][2]) ? num[0][2] : 0;
            this.mnum['w'] = isNumber(num[0][3]) ? num[0][3] : 0;
        }
        else if (num[0] instanceof cc.Size) {
            this.mnum['x'] = isNumber(num[0].width) ? num[0].width : 0;
            this.mnum['y'] = isNumber(num[0].height) ? num[0].height : 0;
        }
        else if (num[0] instanceof cc.Color) {
            this.mnum['x'] = isNumber(num[0].r) ? num[0].r : 0;
            this.mnum['y'] = isNumber(num[0].g) ? num[0].g : 0;
            this.mnum['z'] = isNumber(num[0].b) ? num[0].b : 0;
            this.mnum['w'] = isNumber(num[0].a) ? num[0].a : 0;
        }
        else if (num[0] instanceof cc.Mat3) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
        }
        else if (num[0] instanceof cc.Mat4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
            this.mnum['m09'] = num[0]['m09'];
            this.mnum['m10'] = num[0]['m10'];
            this.mnum['m11'] = num[0]['m11'];
            this.mnum['m12'] = num[0]['m12'];
            this.mnum['m13'] = num[0]['m13'];
            this.mnum['m14'] = num[0]['m14'];
            this.mnum['m15'] = num[0]['m15'];
        }
        else if (num.length <= 4) {
            this.mnum['x'] = num[0];
            this.mnum['y'] = num[1];
            this.mnum['z'] = num[2];
            this.mnum['w'] = num[3];
        }
        else if (num.length >= 4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0];
            this.mnum['m01'] = num[1];
            this.mnum['m02'] = num[2];
            this.mnum['m03'] = num[3];
            this.mnum['m04'] = num[4];
            this.mnum['m05'] = num[5];
            this.mnum['m06'] = num[6];
            this.mnum['m07'] = num[7];
            this.mnum['m08'] = num[8];
            this.mnum['m09'] = num[9];
            this.mnum['m10'] = num[10];
            this.mnum['m11'] = num[11];
            this.mnum['m12'] = num[12];
            this.mnum['m13'] = num[13];
            this.mnum['m14'] = num[14];
            this.mnum['m15'] = num[15];
        }
        // let out = { lrc: '2128cz' };
        // if (num[0] && typeof num[0] === 'object') { out['m00'] = isNumber(num[0].x) ? num[0].x : num[0].x || (isNumber(num[0][0]) ? num[0][0] : num[0].width || num[0].r || (isNumber(num[0]) ? num[0] : 0)); out['m01'] = isNumber(num[0].y) ? num[0].y : num[0].y || (isNumber(num[0][1]) ? num[0][1] : num[0].height || num[0].g || (isNumber(num[0]) ? num[0] : 0)); out['m02'] = isNumber(num[0].z) ? num[0].z : num[0].z || (isNumber(num[0][2]) ? num[0][2] : num[0].b || (isNumber(num[0]) ? num[0] : 0)); out['m03'] = isNumber(num[0].w) ? num[0].w : num[0].w || (isNumber(num[0][3]) ? num[0][3] : num[0].a || (isNumber(num[0]) ? num[0] : 0)); }
        // else { out['m00'] = num[0]; out['m01'] = num[1]; out['m02'] = num[2]; out['m03'] = num[3]; out['m04'] = num[4]; out['m05'] = num[5]; out['m06'] = num[6]; out['m07'] = num[7]; out['m08'] = num[8]; out['m09'] = num[9]; out['m10'] = num[10]; out['m11'] = num[11]; out['m12'] = num[12]; out['m13'] = num[13]; out['m14'] = num[14]; out['m15'] = num[15]; }
        // this.mnum = out;
    }
    Object.defineProperty(mathMacro, "random_uint2", {
        // 返回随机的整数，范围在[0, x)
        get: function () { return Math.floor(Math.random() * 2); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint3", {
        get: function () { return Math.floor(Math.random() * 3); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint4", {
        get: function () { return Math.floor(Math.random() * 4); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint5", {
        get: function () { return Math.floor(Math.random() * 5); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint6", {
        get: function () { return Math.floor(Math.random() * 6); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint7", {
        get: function () { return Math.floor(Math.random() * 7); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint8", {
        get: function () { return Math.floor(Math.random() * 8); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint9", {
        get: function () { return Math.floor(Math.random() * 9); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint1", {
        get: function () { return Math.floor(Math.random() * 10); },
        enumerable: false,
        configurable: true
    });
    /**
     * 一维限制在范围中
     * @param {number} num 输入值
     * @param {number} size 范围
     * @param {number} align 对齐位置，默认0表示在范围的中间，-1表示与左对齐，最小为0，最大为size，1相反
     * @param {number} offset 范围偏移
     * @returns 返回限制后的值
     */
    mathMacro.clamp = function (num, size, align, offset) {
        var sature = ((align || 0) + 1) / 2;
        var min = 0 - (sature * size) + (offset || 0);
        var max = (1 - sature) * size + (offset || 0);
        return Math.max(Math.min(num, max), min);
    };
    Object.defineProperty(mathMacro.prototype, "isVec", {
        get: function () { return !this._IsMat; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "x", {
        get: function () { return this.mnum['x']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "y", {
        get: function () { return this.mnum['y']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "z", {
        get: function () { return this.mnum['z']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "w", {
        get: function () { return this.mnum['w']; },
        enumerable: false,
        configurable: true
    });
    /**
     * 判断是否在盒体范围内
     * @param {*} origin 盒体坐标原点
     * @param {*} extent 盒体范围，这是盒体的各轴半径
     * @return
     */
    mathMacro.prototype.isInBox2 = function (origin, extent) {
        if (this.isVec) {
            var vec = mathMacro.meanwhileAll(function (a) {
                var b = a[0] - a[1];
                return b >= -a[2] && b <= a[2];
            }, this.mnum, origin, extent);
            return vec['x'] && vec['y'];
        }
        return false;
    };
    /**
     * 模取正
     */
    mathMacro.PMod = function (a, b) {
        var c = Math.abs(b);
        return a < 0 ? (1 - Math.abs(a % c) / c) * c % c : a % c;
    };
    /**
     * 快捷定义
     * 但是就不支持逐个定义了
     * @param num
     * @returns
     */
    mathMacro.v = function (num) {
        return new mathMacro(num);
    };
    mathMacro.meanwhileAll = function (func) {
        var obj = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            obj[_i - 1] = arguments[_i];
        }
        var out = {};
        Object.keys(obj[0]).forEach(function (element) {
            var array = [];
            for (var index = 0; index < obj.length; index++) {
                array.push(obj[index][element]);
            }
            ;
            out[element] = func(array, obj.length);
        });
        return out;
    };
    return mathMacro;
}());
exports.mathMacro = mathMacro;
/**
 * 全局枚举
 * 对象可移动性
 */
var panelType;
(function (panelType) {
    panelType[panelType["staitc"] = 0] = "staitc";
    panelType[panelType["stationary"] = 1] = "stationary";
    panelType[panelType["Moveable"] = 2] = "Moveable";
})(panelType = exports.panelType || (exports.panelType = {}));
/**
 * 全局枚举
 * 场景坐标空间枚举
 */
var ESceneCoordinateSpace;
(function (ESceneCoordinateSpace) {
    ESceneCoordinateSpace[ESceneCoordinateSpace["simulation"] = 0] = "simulation";
    ESceneCoordinateSpace[ESceneCoordinateSpace["world"] = 1] = "world";
    ESceneCoordinateSpace[ESceneCoordinateSpace["local"] = 2] = "local";
})(ESceneCoordinateSpace = exports.ESceneCoordinateSpace || (exports.ESceneCoordinateSpace = {}));
/**
 * 全局枚举
 * 控件坐标空间枚举
 */
var EWidgetCoordinateSpace;
(function (EWidgetCoordinateSpace) {
    EWidgetCoordinateSpace[EWidgetCoordinateSpace["screen"] = 0] = "screen";
    EWidgetCoordinateSpace[EWidgetCoordinateSpace["scene"] = 1] = "scene";
})(EWidgetCoordinateSpace = exports.EWidgetCoordinateSpace || (exports.EWidgetCoordinateSpace = {}));
/**
 * 全局枚举
 * 动画物理空间枚举
 */
var EAnimPhySimSpace;
(function (EAnimPhySimSpace) {
    EAnimPhySimSpace[EAnimPhySimSpace["component"] = 0] = "component";
    EAnimPhySimSpace[EAnimPhySimSpace["actor"] = 1] = "actor";
    EAnimPhySimSpace[EAnimPhySimSpace["scene"] = 2] = "scene";
    EAnimPhySimSpace[EAnimPhySimSpace["relativeRoot"] = 3] = "relativeRoot";
    EAnimPhySimSpace[EAnimPhySimSpace["relativeNode"] = 4] = "relativeNode";
})(EAnimPhySimSpace = exports.EAnimPhySimSpace || (exports.EAnimPhySimSpace = {}));
// 测试语句，可以在控制台中能够看到这里
cc["vv"] = cc["vv"] || DevelopersToolGlobal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSx5RUFBeUU7QUFDekU7SUFBQTtJQXNPQSxDQUFDO0lBOU5HLHNCQUFrQixpQ0FBUzthQUEzQjtZQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUE0QixLQUFnQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBUUQsc0JBQWtCLDRDQUFvQjtRQUh0Qzs7V0FFRzthQUNIO1lBQ0ksT0FBTztnQkFDSCw4Q0FBOEM7Z0JBQzlDLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtnQkFDL0MsU0FBUztnQkFDVCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUM5QyxRQUFRO2dCQUNSLG1EQUFtRDtnQkFDbkQsVUFBVTtnQkFDVixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUNqRCxPQUFPO2dCQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7YUFDbEQsQ0FBQTtRQUNMLENBQUM7YUFDRCxVQUF1QyxLQUFLO1lBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BSEE7SUFhRCxzQkFBa0IsNEJBQUk7YUFBdEI7WUFDSSxJ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RyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRTthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7YUFDSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzthQUNJLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0I7YUFDSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lB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T0FBTyxHQUFHLENBQUM7SUFDZixDQUFDLENBQUE7SUFxQ0wsZ0JBQUM7Q0F2UEQsQUF1UEMsSUFBQTtBQXZQWSw4QkFBUztBQXdQdEI7OztHQUdHO0FBQ0gsSUFBWSxTQUVYO0FBRkQsV0FBWSxTQUFTO0lBQ2pCLDZDQUFNLENBQUE7SUFBRSxxREFBVSxDQUFBO0lBQUUsaURBQVEsQ0FBQTtBQUNoQyxDQUFDLEVBRlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFFcEI7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLHFCQUVYO0FBRkQsV0FBWSxxQkFBcUI7SUFDN0IsNkVBQVUsQ0FBQTtJQUFFLG1FQUFLLENBQUE7SUFBRSxtRUFBSyxDQUFBO0FBQzVCLENBQUMsRUFGVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUVoQztBQUNEOzs7R0FHRztBQUNILElBQVksc0JBRVg7QUFGRCxXQUFZLHNCQUFzQjtJQUM5Qix1RUFBTSxDQUFBO0lBQUUscUVBQUssQ0FBQTtBQUNqQixDQUFDLEVBRlcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFFakM7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLGdCQUVYO0FBRkQsV0FBWSxnQkFBZ0I7SUFDeEIsaUVBQVMsQ0FBQTtJQUFFLHlEQUFLLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUsdUVBQVksQ0FBQTtJQUFFLHVFQUFZLENBQUE7QUFDdkQsQ0FBQyxFQUZXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRTNCO0FBSUQscUJBQXFCO0FBQ3JCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQW9CLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogY2MuTm9kZSB8XHJcbiAgICBjYy5UaWxlZE1hcCB8XHJcbiAgICBjYy5QYXJ0aWNsZVN5c3RlbSB8XHJcbiAgICBjYy5WaWRlb1BsYXllciB8XHJcbiAgICBjYy5XZWJWaWV3IHxcclxuICAgIGNjLlNwcml0ZSB8XHJcbiAgICBjYy5SZW5kZXJUZXh0dXJlIHxcclxuICAgIGNjLlRleHR1cmUyRCB8XHJcbiAgICBjYy5QcmVmYWIgfFxyXG4gICAgY2MuQXNzZXRNYW5hZ2VyIHwge307XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJVG9vbEdsb2JhbEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJT3RoZXJHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbi8qKlxyXG4gKiDlsYLpgJrnlKjmoIfor4bmjqXlj6MgXHJcbiAqIGNjLk5vZGVbbnVtYmVyXVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJZ2FuZXJhbExheWVySW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGNjLk5vZGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJb3BlblNjcmlwdEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJaW5zdGFuY2VJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogbnVtYmVyXTogY2MuQ29tcG9uZW50IHwgY2MuTm9kZTtcclxufVxyXG4vLyBpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSAnLi9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmV4cG9ydCBjbGFzcyBEZXZlbG9wZXJzVG9vbEdsb2JhbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku5PlupPlhajlsYDlrp7kvotcclxuICAgICAqIOWtmOaUvmxvYWTml7bovb3lhaXnmoTmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX1dhcmVob3VzZTogSVdhcmVob3VzZUdsb2JhbEludGVyZmFjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgd2FyZWhvdXNlKCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9XYXJlaG91c2UgPSB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHdhcmVob3VzZSh2YWx1ZTogSVdhcmVob3VzZUdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9XYXJlaG91c2UgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296LWE5rqQ55uu5b2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvYWRSZXNvdXJjZXNjYXRhbG9nKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vIFwidXJsXCI6IHsgdHlwZTogcmVzIHR5cGUsIHVybDogXCJzYXZlIHVybFwiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L296Z+z5LmQ6Z+z5pWI6LWE5rqQXHJcbiAgICAgICAgICAgIFwic291bmRzXCI6IHsgdHlwZTogY2MuQXVkaW9DbGlwLCB1cmw6IFwic291bmRzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3pooTliLbku7botYTmupBcclxuICAgICAgICAgICAgXCJwcmVmYWJzXCI6IHsgdHlwZTogY2MuUHJlZmFiLCB1cmw6IFwicHJlZmFic1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L295Zu+6ZuG6LWE5rqQXHJcbiAgICAgICAgICAgIC8vIFwiYXRsYXNcIjogeyB0eXBlOiBjYy5TcHJpdGVBdGxhcywgdXJsOiBcImF0bGFzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3ljZXkuKrnsr7ngbXotYTmupBcclxuICAgICAgICAgICAgXCJmcmFtZXNcIjogeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdXJsOiBcImZyYW1lc1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L295YiG5Lqr5Zu+XHJcbiAgICAgICAgICAgIFwic2hhcmVcIjogeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdXJsOiBcInNoYXJlXCIgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBsb2FkUmVzb3VyY2VzY2F0YWxvZyh2YWx1ZSkge1xyXG4gICAgICAgIGNjLmVycm9yKFwi5LiN5YWB6K645L+u5pS56LWE5rqQ55uu5b2VXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6XlhbflhajlsYDlrp7kvotcclxuICAgICAqIOWPr+S7peazqOWFpeWFtuS7luW3peWFt+exu1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfVG9vbDogSVRvb2xHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHRvb2woKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1Rvb2wgPSB0aGlzLl9HbG9iYWxfVG9vbCB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1Rvb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB0b29sKHZhbHVlOiBJVG9vbEdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9Ub29sID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOadgumhueWFqOWxgOWunuS+i1xyXG4gICAgICog5Y+v5Lul5rOo5YWl5YW25LuW6aG555uuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9PdGhlcjogSU90aGVyR2xvYmFsSW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBvdGhlcigpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfT3RoZXIgPSB0aGlzLl9HbG9iYWxfT3RoZXIgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PdGhlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IG90aGVyKHZhbHVlOiBJT3RoZXJHbG9iYWxJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfT3RoZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5Z+65pys5bGC5YWo5bGA5a6e5L6LXHJcbiAgICAgKiDlj6rog73ms6jlhaVjYy5Ob2RlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9HZW5yYWxMYXllcjogSWdhbmVyYWxMYXllckludGVyZmFjZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOacieWxglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsYXllcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX0dlbnJhbExheWVyID0gdGhpcy5fR2xvYmFsX0dlbnJhbExheWVyIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaJgOacieWxglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBsYXllcnModmFsdWU6IElnYW5lcmFsTGF5ZXJJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5bqV5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyc1swXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg55qE5paw6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxheWVyKHZhbHVlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllciB8fCB7fSkubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2tleS50b1N0cmluZygpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDohJrmnKxcclxuICAgICAqIOWPquiDveazqOWFpWNjLmNvbXBvbmVudO+8jOS4jei/h+WunumZheS4iuW5tuayoeaciei/m+ihjOmZkOWItlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfT3BlblNjcmlwdDogSW9wZW5TY3JpcHRJbnRlcmZhY2UgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfT3BlblNjcmlwdF9GcmlzdE5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JpcHRzKCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NyaXB0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBrZXkgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX09wZW5TY3JpcHRfRnJpc3ROYW1lKSB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGtleSA9IChPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCB8fCB7fSkubGVuZ3RoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcmlwdHNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrohJrmnKxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzY3JpcHRfQ2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+aJgOacieiEmuacrOWQjeensFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JpcHROYW1lKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluesrOS4gOS4quWKoOWFpeeahOiEmuacrFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBmcmlzdFNjcmlwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHRbdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWVdO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX0luc3RhbmNlID0gPElpbnN0YW5jZUludGVyZmFjZT57fTtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgZ2V0TmFtZShpbnN0OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc3QubmFtZSArIGluc3RbJ19pZCddLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWo6YOo5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlcygpOiBJaW5zdGFuY2VJbnRlcmZhY2Uge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9JbnN0YW5jZSA9IHRoaXMuX0dsb2JhbF9JbnN0YW5jZSB8fCA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfSW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWunuS+i++8jOeUqOWunuS+i+eahOWQjeensOS4jklE5L2c6ZSu5ZCNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGluc3RhbmNlKHZhbHVlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZVt0aGlzLmdldE5hbWUodmFsdWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTlrp7kvotcclxuICAgICAqIOWmguaenOacquaMh+WumuacieaViOWAvOWImeS4uua4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBpbnN0YW5jZV9yZW1vdmUodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB0aGlzLl9HbG9iYWxfSW5zdGFuY2UgPSA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZVt0aGlzLmdldE5hbWUodmFsdWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7lkI3np7Dojrflj5blrp7kvosgXHJcbiAgICAgKiDlpoLmnpzmsqHmnInkvb/nlKjoh6rlrprkuYnlkI3np7DvvIzliJnpu5jorqTnlKjlrp7kvotJROS9nOS4uuWQjeensO+8jOi/meWPr+iDveS4juS7u+S9leWQjeensOW4uOmHj+S4jeesplxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlQnlOYW1lKG5hbWU6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfSW5zdGFuY2VbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOagueaNruWQjeensOiuvue9ruWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlQnlOYW1lKG5hbWU6IHN0cmluZyB8IG51bWJlciwgaW5zdDogY2MuQ29tcG9uZW50IHwgY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9JbnN0YW5jZVtuYW1lXSA9IGluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlhYPnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfR2xvYmFsX1R1cGxlID0gW107XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFg+e7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB0dXBsZSgpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9UdXBsZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YWD57uE5Yqg5YWl5LiA5Liq6aG555uuICBcclxuICAgICAqIOWmguaenOWKoOWFpeS4gOS4quaXoOaViOeahOWAvO+8jOavlOWmguW4g+WwlO+8jHVuZGVmaW5lZO+8jHVubGzvvIzlsIbmuIXnqbrov5nkuKrlhYPnu4QgIFxyXG4gICAgICog5Yqg5YWl5LiA5Liq56m65pWw57uE5oiW5piv56m65a+56LGh5piv5pyJ5pWI55qE77yM5omA5Lul5Lya5L2c5Li65YWD57uE55qE5LiA5Liq5YC85Yqg5YWlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHR1cGxlKHZhbHVlOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PSAnYm9vbGVhbicpIHRoaXMuX0dsb2JhbF9UdXBsZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9UdXBsZS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YWD57uE5Yqg5YWl54us5pyJ6aG555uuXHJcbiAgICAgKiDov5Tlm57ov5nkuKrpobnnm67mmK/lkKblrZjlnKhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0dXBsZU9ubHkodmFsdWU6IG9iamVjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9HbG9iYWxfVHVwbGUuaW5kZXhPZih2YWx1ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50dXBsZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5YWD57uE5LiA5Liq6aG555uuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHR1cGxlX3JlbW92ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9UdXBsZS5maWx0ZXIoKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4geyBlbGVtZW50ICE9IHZhbHVlIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIGltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5leHBvcnQgY2xhc3MgbWF0aE1hY3JvIHtcclxuICAgIC8vIOi/lOWbnumaj+acuueahOaVtOaVsO+8jOiMg+WbtOWcqFswLCB4KVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQyKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQzKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ0KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ1KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ2KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ3KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ4KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ5KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQxKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IH1cclxuICAgIC8qKlxyXG4gICAgICog5LiA57u06ZmQ5Yi25Zyo6IyD5Zu05LitXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtIOi+k+WFpeWAvFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUg6IyD5Zu0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYWxpZ24g5a+56b2Q5L2N572u77yM6buY6K6kMOihqOekuuWcqOiMg+WbtOeahOS4remXtO+8jC0x6KGo56S65LiO5bem5a+56b2Q77yM5pyA5bCP5Li6MO+8jOacgOWkp+S4unNpemXvvIwx55u45Y+NXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IOiMg+WbtOWBj+enu1xyXG4gICAgICogQHJldHVybnMg6L+U5Zue6ZmQ5Yi25ZCO55qE5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXAobnVtLCBzaXplLCBhbGlnbiwgb2Zmc2V0KSB7XHJcbiAgICAgICAgbGV0IHNhdHVyZSA9ICgoYWxpZ24gfHwgMCkgKyAxKSAvIDI7XHJcbiAgICAgICAgbGV0IG1pbiA9IDAgLSAoc2F0dXJlICogc2l6ZSkgKyAob2Zmc2V0IHx8IDApO1xyXG4gICAgICAgIGxldCBtYXggPSAoMSAtIHNhdHVyZSkgKiBzaXplICsgKG9mZnNldCB8fCAwKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obnVtLCBtYXgpLCBtaW4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAw55+i6YePXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIFJHQkEgY29sb3JzLjxici8+XHJcbiAgICAgKiBFYWNoIGNvbG9yIGNvbXBvbmVudCBpcyBhbiBpbnRlZ2VyIHZhbHVlIHdpdGggYSByYW5nZSBmcm9tIDAgdG8gMjU1Ljxici8+XHJcbiAgICAgKiBAemgg6YCa6L+HIFJlZOOAgUdyZWVu44CBQmx1ZSDpopzoibLpgJrpgZPooajnpLrpopzoibLvvIzlubbpgJrov4cgQWxwaGEg6YCa6YGT6KGo56S65LiN6YCP5piO5bqm44CCPGJyLz5cclxuICAgICAqIOavj+S4qumAmumBk+mDveS4uuWPluWAvOiMg+WbtCBbMCwgMjU1XSDnmoTmlbTmlbDjgII8YnIvPlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLkNvbG9yKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gTWF0aGVtYXRpY2FsIDN4MyBtYXRyaXguXHJcbiAgICAgKiBAemgg6KGo56S65LiJ57u077yIM3gz77yJ55+p6Zi144CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuTWF0MylcclxuICAgIC8qKlxyXG4gICAgICogQGVuIE1hdGhlbWF0aWNhbCA0eDQgbWF0cml4LlxyXG4gICAgICogQHpoIOihqOekuuWbm+e7tO+8iDR4NO+8ieefqemYteOAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLk1hdDQpXHJcbiAgICAvKipcclxuICAgICAqIEBlblxyXG4gICAgICogQSAyRCByZWN0YW5nbGUgZGVmaW5lZCBieSB4LCB5IHBvc2l0aW9uIGFuZCB3aWR0aCwgaGVpZ2h0LlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDovbTlr7npvZDnn6nlvaLjgIJcclxuICAgICAqIOefqeW9ouWGheeahOaJgOacieeCuemDveWkp+S6juetieS6juefqeW9oueahOacgOWwj+eCuSAoeE1pbiwgeU1pbikg5bm25LiU5bCP5LqO562J5LqO55+p5b2i55qE5pyA5aSn54K5ICh4TWF4LCB5TWF4KeOAglxyXG4gICAgICog55+p5b2i55qE5a695bqm5a6a5LmJ5Li6IHhNYXggLSB4TWlu77yb6auY5bqm5a6a5LmJ5Li6IHlNYXggLSB5TWlu44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuUmVjdClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIHF1YXRlcm5pb25cclxuICAgICAqIEB6aCDlm5vlhYPmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5RdWF0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gVHdvIGRpbWVuc2lvbmFsIHNpemUgdHlwZSByZXByZXNlbnRpbmcgdGhlIHdpZHRoIGFuZCBoZWlnaHQuXHJcbiAgICAgKiBAemgg5LqM57u05bC65a+444CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuU2l6ZSlcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIDJEIHZlY3RvcnMgYW5kIHBvaW50cy5cclxuICAgICAqIEB6aCDkuoznu7TlkJHph4/jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5WZWMyKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgM0QgdmVjdG9ycyBhbmQgcG9pbnRzLlxyXG4gICAgICogQHpoIOS4iee7tOWQkemHj+OAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlZlYzMpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBSZXByZXNlbnRhdGlvbiBvZiBmb3VyLWRpbWVuc2lvbmFsIHZlY3RvcnMuXHJcbiAgICAgKiBAemgg5Zub57u05ZCR6YeP44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuVmVjNClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIG9iamVjdC5cclxuICAgICAqIEB6aCDljIXlkKt4LHkseix3562J5bGe5oCn5ZCN55qE5a+56LGh44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogb2JqZWN0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gYXJyYXkuXHJcbiAgICAgKiBAemgg5pWw57uE44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogbnVtYmVyW10pXHJcbiAgICAvKipcclxuICAgICAqIEBlbiA6KVxyXG4gICAgICogQHpoIOmAkOS4quWumuS5ieWTpu+8jOS6suOAglxyXG4gICAgICovXHJcbiAgICAvLyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyLCB3PzogbnVtYmVyKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gdGhpcyBpcyBnb25uYS4uLiBJcyB0aGlzIHN1cHBvc2VkIHRvLi4uIERlZmluZSBvbmUgYnkgb25lISA/IC4gT2gsIGRvbid0IHdvcnJ5IGFib3V0IG1lLiBJIGNvcGllZCBpdCBmcm9tIGFuIG9mZmljaWFsIGRvY3VtZW50IDtQXHJcbiAgICAgKiBAemgg6YCQ5Liq5a6a5LmJ77yM5Y2D5LiH5LiN6KaB6L+Z5LmI5YGa77yM5L2G5aaC5p6c5L2g5YGa5LqG77yM6YKj5bCx5Lya5Y+R55Sf5b6I5Y+v5oCV55qE5LqL5oOF77yM5q+U5aaC6K+0Li4u5Y+Y5oiQ55+p6Zi1XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG0wMD86IG51bWJlciwgbTAxPzogbnVtYmVyLCBtMDI/OiBudW1iZXIsIG0wMz86IG51bWJlciwgbTEwPzogbnVtYmVyLCBtMTE/OiBudW1iZXIsIG0xMj86IG51bWJlciwgbTEzPzogbnVtYmVyLCBtMjA/OiBudW1iZXIsIG0yMT86IG51bWJlciwgbTIyPzogbnVtYmVyLCBtMjM/OiBudW1iZXIsIG0zMD86IG51bWJlciwgbTMxPzogbnVtYmVyLCBtMzI/OiBudW1iZXIsIG0zMz86IG51bWJlciwpXHJcbiAgICBjb25zdHJ1Y3RvciguLi5udW0pIHtcclxuICAgICAgICBsZXQgaXNOdW1iZXIgPSAodmFsdWUpID0+IHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKTsgfVxyXG4gICAgICAgIGlmICghbnVtWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsndyddID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdLngpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ueCkgPyBudW1bMF0ueCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLnkpID8gbnVtWzBdLnkgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSBpc051bWJlcihudW1bMF0udykgPyBudW1bMF0udyA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXVswXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3knXSA9IGlzTnVtYmVyKG51bVswXVsxXSkgPyBudW1bMF1bMV0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5TaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gaXNOdW1iZXIobnVtWzBdLndpZHRoKSA/IG51bVswXS53aWR0aCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLmhlaWdodCkgPyBudW1bMF0uaGVpZ2h0IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdIGluc3RhbmNlb2YgY2MuQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ucikgPyBudW1bMF0uciA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLmcpID8gbnVtWzBdLmcgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXS5iKSA/IG51bVswXS5iIDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSBpc051bWJlcihudW1bMF0uYSkgPyBudW1bMF0uYSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXSBpbnN0YW5jZW9mIGNjLk1hdDMpIHtcclxuICAgICAgICAgICAgdGhpcy5fSXNNYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMCddID0gbnVtWzBdWydtMDAnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVswXVsnbTAxJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAyJ10gPSBudW1bMF1bJ20wMiddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMyddID0gbnVtWzBdWydtMDMnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVswXVsnbTA0J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA1J10gPSBudW1bMF1bJ20wNSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNiddID0gbnVtWzBdWydtMDYnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVswXVsnbTA3J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA4J10gPSBudW1bMF1bJ20wOCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5NYXQ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0lzTWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDAnXSA9IG51bVswXVsnbTAwJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAxJ10gPSBudW1bMF1bJ20wMSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMiddID0gbnVtWzBdWydtMDInXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDMnXSA9IG51bVswXVsnbTAzJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA0J10gPSBudW1bMF1bJ20wNCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNSddID0gbnVtWzBdWydtMDUnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDYnXSA9IG51bVswXVsnbTA2J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA3J10gPSBudW1bMF1bJ20wNyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOCddID0gbnVtWzBdWydtMDgnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDknXSA9IG51bVswXVsnbTA5J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEwJ10gPSBudW1bMF1bJ20xMCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMSddID0gbnVtWzBdWydtMTEnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTInXSA9IG51bVswXVsnbTEyJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEzJ10gPSBudW1bMF1bJ20xMyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNCddID0gbnVtWzBdWydtMTQnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTUnXSA9IG51bVswXVsnbTE1J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bS5sZW5ndGggPD0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IG51bVswXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBudW1bMV07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gbnVtWzJdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IG51bVszXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtLmxlbmd0aCA+PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0lzTWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDAnXSA9IG51bVswXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVsxXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDInXSA9IG51bVsyXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDMnXSA9IG51bVszXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVs0XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDUnXSA9IG51bVs1XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDYnXSA9IG51bVs2XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVs3XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDgnXSA9IG51bVs4XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDknXSA9IG51bVs5XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTAnXSA9IG51bVsxMF07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTExJ10gPSBudW1bMTFdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMiddID0gbnVtWzEyXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTMnXSA9IG51bVsxM107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTE0J10gPSBudW1bMTRdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNSddID0gbnVtWzE1XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IG91dCA9IHsgbHJjOiAnMjEyOGN6JyB9O1xyXG4gICAgICAgIC8vIGlmIChudW1bMF0gJiYgdHlwZW9mIG51bVswXSA9PT0gJ29iamVjdCcpIHsgb3V0WydtMDAnXSA9IGlzTnVtYmVyKG51bVswXS54KSA/IG51bVswXS54IDogbnVtWzBdLnggfHwgKGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiBudW1bMF0ud2lkdGggfHwgbnVtWzBdLnIgfHwgKGlzTnVtYmVyKG51bVswXSkgPyBudW1bMF0gOiAwKSk7IG91dFsnbTAxJ10gPSBpc051bWJlcihudW1bMF0ueSkgPyBudW1bMF0ueSA6IG51bVswXS55IHx8IChpc051bWJlcihudW1bMF1bMV0pID8gbnVtWzBdWzFdIDogbnVtWzBdLmhlaWdodCB8fCBudW1bMF0uZyB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDInXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogbnVtWzBdLnogfHwgKGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiBudW1bMF0uYiB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDMnXSA9IGlzTnVtYmVyKG51bVswXS53KSA/IG51bVswXS53IDogbnVtWzBdLncgfHwgKGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiBudW1bMF0uYSB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgfVxyXG4gICAgICAgIC8vIGVsc2UgeyBvdXRbJ20wMCddID0gbnVtWzBdOyBvdXRbJ20wMSddID0gbnVtWzFdOyBvdXRbJ20wMiddID0gbnVtWzJdOyBvdXRbJ20wMyddID0gbnVtWzNdOyBvdXRbJ20wNCddID0gbnVtWzRdOyBvdXRbJ20wNSddID0gbnVtWzVdOyBvdXRbJ20wNiddID0gbnVtWzZdOyBvdXRbJ20wNyddID0gbnVtWzddOyBvdXRbJ20wOCddID0gbnVtWzhdOyBvdXRbJ20wOSddID0gbnVtWzldOyBvdXRbJ20xMCddID0gbnVtWzEwXTsgb3V0WydtMTEnXSA9IG51bVsxMV07IG91dFsnbTEyJ10gPSBudW1bMTJdOyBvdXRbJ20xMyddID0gbnVtWzEzXTsgb3V0WydtMTQnXSA9IG51bVsxNF07IG91dFsnbTE1J10gPSBudW1bMTVdOyB9XHJcbiAgICAgICAgLy8gdGhpcy5tbnVtID0gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW51bTogb2JqZWN0ID0ge307XHJcbiAgICBwcml2YXRlIF9Jc01hdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdldCBpc1ZlYygpIHsgcmV0dXJuICF0aGlzLl9Jc01hdDsgfVxyXG4gICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3gnXSB9XHJcbiAgICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubW51bVsneSddIH1cclxuICAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tbnVtWyd6J10gfVxyXG4gICAgcHVibGljIGdldCB3KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3cnXSB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbWVhbndoaWxlQWxsID0gZnVuY3Rpb24gPEZVTkMgZXh0ZW5kcyBGdW5jdGlvbiwgVCBleHRlbmRzIG9iamVjdD4oZnVuYzogRlVOQywgLi4ub2JqOiBUW10pIHtcclxuICAgICAgICBsZXQgb3V0ID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqWzBdKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gob2JqW2luZGV4XVtlbGVtZW50XSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG91dFtlbGVtZW50XSA9IGZ1bmMoYXJyYXksIG9iai5sZW5ndGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mmK/lkKblnKjnm5LkvZPojIPlm7TlhoVcclxuICAgICAqIEBwYXJhbSB7Kn0gb3JpZ2luIOebkuS9k+WdkOagh+WOn+eCuVxyXG4gICAgICogQHBhcmFtIHsqfSBleHRlbnQg55uS5L2T6IyD5Zu077yM6L+Z5piv55uS5L2T55qE5ZCE6L205Y2K5b6EXHJcbiAgICAgKiBAcmV0dXJuIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNJbkJveDI8VCBleHRlbmRzIGNjLlZlYzI+KG9yaWdpbjogVCwgZXh0ZW50OiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWZWMpIHtcclxuICAgICAgICAgICAgbGV0IHZlYyA9IG1hdGhNYWNyby5tZWFud2hpbGVBbGwoKGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBiID0gYVswXSAtIGFbMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYiA+PSAtYVsyXSAmJiBiIDw9IGFbMl07XHJcbiAgICAgICAgICAgIH0sIHRoaXMubW51bSwgb3JpZ2luLCBleHRlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjWyd4J10gJiYgdmVjWyd5J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaooeWPluato1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBNb2QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBjID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgcmV0dXJuIGEgPCAwID8gKDEgLSBNYXRoLmFicyhhICUgYykgLyBjKSAqIGMgJSBjIDogYSAlIGM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlv6vmjbflrprkuYkgXHJcbiAgICAgKiDkvYbmmK/lsLHkuI3mlK/mjIHpgJDkuKrlrprkuYnkuoZcclxuICAgICAqIEBwYXJhbSBudW0gXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB2KG51bTogYW55KTogbWF0aE1hY3JvIHtcclxuICAgICAgICByZXR1cm4gbmV3IG1hdGhNYWNybyhudW0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4vKipcclxuICog5YWo5bGA5p6a5Li+XHJcbiAqIOWvueixoeWPr+enu+WKqOaAp1xyXG4gKi9cclxuZXhwb3J0IGVudW0gcGFuZWxUeXBlIHtcclxuICAgIHN0YWl0Yywgc3RhdGlvbmFyeSwgTW92ZWFibGVcclxufVxyXG4vKipcclxuICog5YWo5bGA5p6a5Li+XHJcbiAqIOWcuuaZr+WdkOagh+epuumXtOaemuS4vlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRVNjZW5lQ29vcmRpbmF0ZVNwYWNlIHtcclxuICAgIHNpbXVsYXRpb24sIHdvcmxkLCBsb2NhbFxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5o6n5Lu25Z2Q5qCH56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFV2lkZ2V0Q29vcmRpbmF0ZVNwYWNlIHtcclxuICAgIHNjcmVlbiwgc2NlbmVcclxufVxyXG4vKipcclxuICog5YWo5bGA5p6a5Li+XHJcbiAqIOWKqOeUu+eJqeeQhuepuumXtOaemuS4vlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRUFuaW1QaHlTaW1TcGFjZSB7XHJcbiAgICBjb21wb25lbnQsIGFjdG9yLCBzY2VuZSwgcmVsYXRpdmVSb290LCByZWxhdGl2ZU5vZGVcclxufVxyXG5cclxuXHJcblxyXG4vLyDmtYvor5Xor63lj6XvvIzlj6/ku6XlnKjmjqfliLblj7DkuK3og73lpJ/nnIvliLDov5nph4xcclxuY2NbXCJ2dlwiXSA9IGNjW1widnZcIl0gfHwgRGV2ZWxvcGVyc1Rvb2xHbG9iYWw7XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/NoRootTree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30349o+26ZAWLFFqHnpTt95', 'NoRootTree');
// scripts/base/tool/NoRootTree.ts

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
var RigorousLibrary_1 = require("../class/RigorousLibrary");
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
/**
 * 无根树
 * @tip 根据当前游戏的定义，入栈为根，出栈为叶
 */
var noRootTree = /** @class */ (function (_super) {
    __extends(noRootTree, _super);
    function noRootTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(noRootTree, "tree", {
        /**
         * 获取树单例
         */
        get: function () {
            this._NoRootTree = this._NoRootTree || new noRootTree(30);
            return this._NoRootTree;
        },
        /**
         * 设置树单例
         */
        set: function (value) {
            this._NoRootTree = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加子项
     * @param object
     * @returns 返回这个子项的索引
     */
    noRootTree.prototype.add = function (object) {
        return this.push(object);
    };
    /**
     * 反向添加子项
     * 警告：这是不符合规则的方法，请确保栈深度允许反推，
     * 或是不再获取栈有效深度，因为这不会进行有效性检查，
     * 会破坏数据连续性
     * @param object
     */
    noRootTree.prototype.addFromFront = function (object) {
        // let point = this.indexAtStack(this.$get - 1);
        this.$get = this.$get - 1;
        this._HashList[this.$get] = object;
        return this.$get;
    };
    Object.defineProperty(noRootTree.prototype, "root", {
        /**
         * 获取根节点
         * @returns
         */
        get: function () {
            return this.getBuffer(this.$put);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "leaf", {
        /**
         * 获取最末子节点
         * @returns
         */
        get: function () {
            return this.getBuffer(this.$get);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 从给定索引处截断，并返回截断部分
     * @param key
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    noRootTree.prototype.cut = function (key) {
        var len = (key % this._StackSize) - this.$get;
        if (this._StackIsFull)
            return this._StackSize - len;
        return this.pull(len < 0 ? this._StackSize + len : len);
    };
    /**
     * 删除指定长度的项目
     * @param length 删除的长度
     */
    noRootTree.prototype.del = function (length) {
        if (!length || length == 0)
            length = 1;
        if (length < 0)
            return this.clean();
        this.$get = length;
    };
    /**
     * 在叶子节点附近给定一个索引，并指定偏移量，转为一个有效的索引
     */
    noRootTree.prototype.getNextIndex = function (index, offset) {
        return DevelopersToolGlobal_1.mathMacro.PMod(index + offset, this._StackSize);
    };
    Object.defineProperty(noRootTree.prototype, "buffer", {
        get: function () {
            return this._HashList;
        },
        enumerable: false,
        configurable: true
    });
    return noRootTree;
}(RigorousLibrary_1.RigorousRingBuffer));
exports.default = noRootTree;
// import NTR from "../base/tool/NoRootTree"; // (〃´-ω･) 诶嘿~

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcTm9Sb290VHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEQ7QUFDOUQsc0VBQWdFO0FBQ2hFOzs7R0FHRztBQUNIO0lBQXdDLDhCQUFrQjtJQUExRDs7SUFtRkEsQ0FBQztJQTNFRyxzQkFBa0Isa0JBQUk7UUFIdEI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBdUIsS0FBaUI7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BTkE7SUFRRDs7OztPQUlHO0lBQ0ksd0JBQUcsR0FBVixVQUFXLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixNQUFXO1FBQzNCLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUtELHNCQUFXLDRCQUFJO1FBSmY7OztXQUdHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFDRDs7Ozs7T0FLRztJQUNJLHdCQUFHLEdBQVYsVUFBNkIsR0FBTztRQUNoQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRDs7O09BR0c7SUFDSSx3QkFBRyxHQUFWLFVBQVcsTUFBZTtRQUN0QixJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxDQUFDO1lBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNEOztPQUVHO0lBQ0ksaUNBQVksR0FBbkIsVUFBb0IsS0FBYSxFQUFFLE1BQWM7UUFDN0MsT0FBTyxnQ0FBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0Qsc0JBQVcsOEJBQU07YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFDTCxpQkFBQztBQUFELENBbkZBLEFBbUZDLENBbkZ1QyxvQ0FBa0IsR0FtRnpEOztBQUVELDREQUE0RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJpZ29yb3VzUmluZ0J1ZmZlciB9IGZyb20gJy4uL2NsYXNzL1JpZ29yb3VzTGlicmFyeSc7XHJcbmltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuLyoqXHJcbiAqIOaXoOagueagkSBcclxuICogQHRpcCDmoLnmja7lvZPliY3muLjmiI/nmoTlrprkuYnvvIzlhaXmoIjkuLrmoLnvvIzlh7rmoIjkuLrlj7ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5vUm9vdFRyZWUgZXh0ZW5kcyBSaWdvcm91c1JpbmdCdWZmZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoJHlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfTm9Sb290VHJlZTogbm9Sb290VHJlZTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qCR5Y2V5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHRyZWUoKSB7XHJcbiAgICAgICAgdGhpcy5fTm9Sb290VHJlZSA9IHRoaXMuX05vUm9vdFRyZWUgfHwgbmV3IG5vUm9vdFRyZWUoMzApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Ob1Jvb3RUcmVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7moJHljZXkvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgdHJlZSh2YWx1ZTogbm9Sb290VHJlZSkge1xyXG4gICAgICAgIHRoaXMuX05vUm9vdFRyZWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWtkOmhuVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBcclxuICAgICAqIEByZXR1cm5zIOi/lOWbnui/meS4quWtkOmhueeahOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkKG9iamVjdDogYW55KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXNoKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWPjeWQkea3u+WKoOWtkOmhuSAgXHJcbiAgICAgKiDorablkYrvvJrov5nmmK/kuI3nrKblkIjop4TliJnnmoTmlrnms5XvvIzor7fnoa7kv53moIjmt7HluqblhYHorrjlj43mjqjvvIxcclxuICAgICAqIOaIluaYr+S4jeWGjeiOt+WPluagiOacieaViOa3seW6pu+8jOWboOS4uui/meS4jeS8mui/m+ihjOacieaViOaAp+ajgOafpe+8jFxyXG4gICAgICog5Lya56C05Z2P5pWw5o2u6L+e57ut5oCnXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkRnJvbUZyb250KG9iamVjdDogYW55KTogbnVtYmVyIHtcclxuICAgICAgICAvLyBsZXQgcG9pbnQgPSB0aGlzLmluZGV4QXRTdGFjayh0aGlzLiRnZXQgLSAxKTtcclxuICAgICAgICB0aGlzLiRnZXQgPSB0aGlzLiRnZXQgLSAxO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W3RoaXMuJGdldF0gPSBvYmplY3Q7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGdldDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qC56IqC54K5XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCByb290KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnVmZmVyKHRoaXMuJHB1dCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluacgOacq+WtkOiKgueCuVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbGVhZigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcih0aGlzLiRnZXQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDku47nu5nlrprntKLlvJXlpITmiKrmlq3vvIzlubbov5Tlm57miKrmlq3pg6jliIZcclxuICAgICAqIEBwYXJhbSBrZXkgXHJcbiAgICAgKiBAcmV0dXJuIG9ialtdOiBvYmozLCBvYmo0Li4uXHJcbiAgICAgKiBAcmV0dXJuIGluZGV4W106IDMsIDQuLi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGN1dDxUIGV4dGVuZHMgbnVtYmVyPihrZXk/OiBUKTogYW55IHtcclxuICAgICAgICBsZXQgbGVuID0gKGtleSAlIHRoaXMuX1N0YWNrU2l6ZSkgLSB0aGlzLiRnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX1N0YWNrSXNGdWxsKSByZXR1cm4gdGhpcy5fU3RhY2tTaXplIC0gbGVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1bGwobGVuIDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSArIGxlbiA6IGxlbik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOaMh+WumumVv+W6pueahOmhueebrlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCDliKDpmaTnmoTplb/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbChsZW5ndGg/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIWxlbmd0aCB8fCBsZW5ndGggPT0gMCkgbGVuZ3RoID0gMTtcclxuICAgICAgICBpZiAobGVuZ3RoIDwgMCkgcmV0dXJuIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICB0aGlzLiRnZXQgPSBsZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWcqOWPtuWtkOiKgueCuemZhOi/kee7meWumuS4gOS4que0ouW8le+8jOW5tuaMh+WumuWBj+enu+mHj++8jOi9rOS4uuS4gOS4quacieaViOeahOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TmV4dEluZGV4KGluZGV4OiBudW1iZXIsIG9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gbW0uUE1vZChpbmRleCArIG9mZnNldCwgdGhpcy5fU3RhY2tTaXplKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgYnVmZmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gaW1wb3J0IE5UUiBmcm9tIFwiLi4vYmFzZS90b29sL05vUm9vdFRyZWVcIjsgLy8gKOOAg8K0Lc+J772lKSDor7blmL9+XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/PanelTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64efe9poixCx6gFMYxQOlei', 'PanelTool');
// scripts/base/class/PanelTool.ts

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
var DevelopersToolGlobal_1 = require("./DevelopersToolGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelTool = /** @class */ (function (_super) {
    __extends(PanelTool, _super);
    function PanelTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._generalLayer = ['BackgroundLayer', 'EternalityUILayer', 'DynamicUILayer'];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    PanelTool.prototype.onLoad = function () {
        var layers = this.node.children;
        /**
         * 可用的剩余层
         */
        var residueLayersName = this._generalLayer;
        for (var layerIndex = 0; layerIndex < layers.length; layerIndex++) {
            var layer = layers[layerIndex];
            if (layer.getComponent(cc.Camera))
                continue;
            for (var nameIndex = 0; nameIndex < residueLayersName.length; nameIndex++) {
                if (layer.name == residueLayersName[nameIndex]) {
                    residueLayersName[nameIndex] = null;
                    DevelopersToolGlobal_1.DevelopersToolGlobal.layer = layers[layerIndex];
                    break;
                }
            }
        }
    };
    __decorate([
        property({
            type: cc.String,
            displayName: '通用层名单',
            tooltip: '层按放置顺序设定优先级，与名称顺序无关',
            visible: true,
        })
    ], PanelTool.prototype, "_generalLayer", void 0);
    PanelTool = __decorate([
        ccclass
    ], PanelTool);
    return PanelTool;
}(cc.Component));
exports.default = PanelTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhbmVsVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBc0U7QUFFaEUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFpQ0M7UUF6QkcsbUJBQWEsR0FBYSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLENBQUM7O0lBeUJ6RixDQUFDO0lBdkJHLHdCQUF3QjtJQUN4QiwwQkFBTSxHQUFOO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEM7O1dBRUc7UUFDSCxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDM0MsS0FBSyxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUU7WUFDL0QsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUFFLFNBQVM7WUFFNUMsS0FBSyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRTtnQkFFdkUsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3BDLDJDQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtpQkFDVDthQUNKO1NBQ0o7SUFFTCxDQUFDO0lBdkJEO1FBTkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1lBQ2YsV0FBVyxFQUFFLE9BQU87WUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixPQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFDO29EQUNtRjtJQVJwRSxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBaUM3QjtJQUFELGdCQUFDO0NBakNELEFBaUNDLENBakNzQyxFQUFFLENBQUMsU0FBUyxHQWlDbEQ7a0JBakNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxUb29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlN0cmluZyxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mAmueUqOWxguWQjeWNlScsXHJcbiAgICAgICAgdG9vbHRpcDogJ+WxguaMieaUvue9rumhuuW6j+iuvuWumuS8mOWFiOe6p++8jOS4juWQjeensOmhuuW6j+aXoOWFsycsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBfZ2VuZXJhbExheWVyOiBzdHJpbmdbXSA9IFsnQmFja2dyb3VuZExheWVyJywgJ0V0ZXJuYWxpdHlVSUxheWVyJywgJ0R5bmFtaWNVSUxheWVyJ107XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGxheWVycyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj6/nlKjnmoTliankvZnlsYJcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgcmVzaWR1ZUxheWVyc05hbWUgPSB0aGlzLl9nZW5lcmFsTGF5ZXI7XHJcbiAgICAgICAgZm9yIChsZXQgbGF5ZXJJbmRleCA9IDA7IGxheWVySW5kZXggPCBsYXllcnMubGVuZ3RoOyBsYXllckluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZUluZGV4ID0gMDsgbmFtZUluZGV4IDwgcmVzaWR1ZUxheWVyc05hbWUubGVuZ3RoOyBuYW1lSW5kZXgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsYXllci5uYW1lID09IHJlc2lkdWVMYXllcnNOYW1lW25hbWVJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNpZHVlTGF5ZXJzTmFtZVtuYW1lSW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjY3Z2LmxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f8abNVa2FPs6rm+Y3nKSh4', 'GameUI');
// scripts/game/GameUI.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // cc.find("Canvas").getComponent("Game").addTimeCount();
    };
    NewClass.prototype.start = function () {
        // ccvv.fristScript
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWFBLENBQUM7SUFYRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLHlEQUF5RDtJQUM3RCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLG1CQUFtQjtJQUN2QixDQUFDO0lBVmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FhNUI7SUFBRCxlQUFDO0NBYkQsQUFhQyxDQWJxQyxFQUFFLENBQUMsU0FBUyxHQWFqRDtrQkFib0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoXCJHYW1lXCIpLmFkZFRpbWVDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGNjdnYuZnJpc3RTY3JpcHRcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/RigorousType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4af9rpBBdE0IaqTfZsbgSG', 'RigorousType');
// scripts/base/class/RigorousType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFJpZ29yb3VzVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmVv+aVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50NjQge1xyXG4gICAgaW50NjQ6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+36ZW/5pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50NjQge1xyXG4gICAgdWludDY0OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOaVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50MzIge1xyXG4gICAgaW50MzI6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+35pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50MzIge1xyXG4gICAgdWludDMyOiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOefreaVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50MTYge1xyXG4gICAgaW50MTY6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+355+t5pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50MTYge1xyXG4gICAgdWludDE2OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOWtl+iKguexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50OCB7XHJcbiAgICBpbnQ4OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOaXoOespuWPt+Wtl+iKguexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdWludDgge1xyXG4gICAgdWludDg6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog6ZW/5rWu54K557G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdDY0IHtcclxuICAgIGZsb2F0NjQ6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5rWu54K557G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdDMyIHtcclxuICAgIGZsb2F0MzI6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5paH5pys57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZXh0IHtcclxuICAgIHRleHQ6IHN0cmluZztcclxufVxyXG4vKipcclxuICog5ZG95ZCN57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEluYW1lZCB7XHJcbiAgICBuYW1lZDogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiDlm5vnu7Tnn6Lph49cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXZlY3RvcjQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgejogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDlm5vnu7TmlbTmlbDnn6Lph49cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWludHZlY3RvcjQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgejogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiByZ2Jh6Imy5b2pXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElyZ2JhIHtcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICAgIGE6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogY215a+iJsuW9qVxyXG4gKiBDeWFuLE1hZ2VudGEsWWVsbG93LEJsYWNrXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEljbXlrIHtcclxuICAgIGM6IG51bWJlcjtcclxuICAgIG06IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGs6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5LiJ57u055+i6YePXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl2ZWN0b3IzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5LiJ57u05pW05pWw55+i6YePXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElpbnR2ZWN0b3IzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogaHNi6Imy5b2pXHJcbiAqIGh1ZXMsc2F0dXJhdGlvbixicmlnaHRuZXNzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEloc2Ige1xyXG4gICAgaDogbnVtYmVyO1xyXG4gICAgczogbnVtYmVyO1xyXG4gICAgYjogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDkuInnu7TlnZDmoIdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXBvc2l0aW9uIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog56yb5Y2h5bCU5peL6L2sXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElyb3RhdGlvbiB7XHJcbiAgICB5YXc6IG51bWJlcjtcclxuICAgIHBpdGNoOiBudW1iZXI7XHJcbiAgICByb2xsOiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOS6jOe7tOefoumHj1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOS6jOe7tOaVtOaVsOefoumHj1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50dmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOW5s+mdouWwuuWvuFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJc2l6ZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOesm+WNoeWwlOWPmOaNolxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdHJhbnNmcm9tIHtcclxuICAgIHBvc2l0aW9uOiBJcG9zaXRpb247XHJcbiAgICByb3RhdGlvbjogSXJvdGF0aW9uO1xyXG4gICAgc2NhbGU6IEl2ZWN0b3IzO1xyXG59XHJcbi8qKlxyXG4gKiDnn6npmLU0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltYXQ0IHtcclxuICAgIG0wMDogbnVtYmVyOyBtMDE6IG51bWJlcjsgbTAyOiBudW1iZXI7IG0wMzogbnVtYmVyO1xyXG4gICAgbTA0OiBudW1iZXI7IG0wNTogbnVtYmVyOyBtMDY6IG51bWJlcjsgbTA3OiBudW1iZXI7XHJcbiAgICBtMDg6IG51bWJlcjsgbTA5OiBudW1iZXI7IG0xMDogbnVtYmVyOyBtMTE6IG51bWJlcjtcclxuICAgIG0xMjogbnVtYmVyOyBtMTM6IG51bWJlcjsgbTE0OiBudW1iZXI7IG0xNTogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDnn6npmLUzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltYXQzIHtcclxuICAgIG0wMDogbnVtYmVyOyBtMDE6IG51bWJlcjsgbTAyOiBudW1iZXI7XHJcbiAgICBtMDM6IG51bWJlcjsgbTA0OiBudW1iZXI7IG0wNTogbnVtYmVyO1xyXG4gICAgbTA2OiBudW1iZXI7IG0wNzogbnVtYmVyOyBtMDg6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5ZOI5biM6KGoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEloYXNoIHtcclxuICAgIGdldDxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPihrZXk6IFQpOiBhbnk7XHJcbiAgICBzZXQ8VCBleHRlbmRzIHN0cmluZyB8IG51bWJlcj4oa2V5OiBULCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIHJlbW92ZTxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPihrZXk6IFQpOiBib29sZWFuO1xyXG4gICAgY2xlYW4oKTogdm9pZDtcclxufVxyXG4vKipcclxuICog5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElhcnJheSB7XHJcbiAgICByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZDtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIHJpbmdidWZmZXJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXJpbmdCdWZmZXIge1xyXG4gICAgcHVzaDxUPihvYmplY3Q6IFQpOiBudW1iZXI7XHJcbiAgICBwdWxsPFQgZXh0ZW5kcyBudW1iZXI+KGxlbmd0aDogbnVtYmVyKTogYW55O1xyXG4gICAgY2xlYW4oKTogdm9pZDtcclxufVxyXG4vKipcclxuICog6ZuGXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElzZXQge1xyXG4gICAgbWFrZTxUIGV4dGVuZHMgSWFycmF5PihhcnJheTogVCk6IElzZXQ7XHJcbiAgICBpbnRlcnNlY3Rpb248VCBleHRlbmRzIElzZXQ+KGFycmF5X2E6IFQsIGFycmF5X2I6IFQpOiBJc2V0O1xyXG4gICAgZGlmZmVyZW5jZTxUIGV4dGVuZHMgSXNldD4oYXJyYXlfYTogVCwgYXJyYXlfYjogVCk6IElzZXQ7XHJcbiAgICB1bmlvbjxUIGV4dGVuZHMgSXNldD4oYXJyYXlfYTogVCwgYXJyYXlfYjogVCk6IElzZXQ7XHJcbiAgICB0b0FycmF5KCk6IElhcnJheTtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIOaYoOWwhFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbWFwIHtcclxuICAgIGdldDxUPihrZXk6IFQpOiBhbnk7XHJcbiAgICBzZXQ8VD4oa2V5OiBULCB2YWx1ZTogVCk6IHZvaWQ7XHJcbiAgICBhZGQ8VD4odmFsdWU6IFQpOiBudW1iZXI7XHJcbiAgICByZW1vdmU8VD4oa2V5OiBUKTogYm9vbGVhbjtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIOWtmOaUvuaVtOaVsO+8jOWPluWAvOWcqMKxMl42M14oMl42MylcclxuICog5beo5aSn57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElpbnRlZ2VySHVnZSB7XHJcbiAgICBpbnRodWdlO1xyXG59XHJcbi8qKlxyXG4gKiDlrZjmlL7mta7ngrnvvIzlj5blgLzlnKjCsTJeNjNeKDJeNjMpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdEh1Z2Uge1xyXG4gICAgaW50aHVnZTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/ActorClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4efcaIvqEFI6b/oSBkLJxTt', 'ActorClass');
// scripts/base/class/ActorClass.ts

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
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ActorClass = /** @class */ (function (_super) {
    __extends(ActorClass, _super);
    function ActorClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ActorClass.prototype.start = function () {
    };
    ActorClass = __decorate([
        ccclass
    ], ActorClass);
    return ActorClass;
}(DevelopersToolClass_1.default));
exports.default = ActorClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXEFjdG9yQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkRBQXdEO0FBRWxELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXdDLDhCQUFtQjtJQUEzRDs7SUFXQSxDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQVJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBVzlCO0lBQUQsaUJBQUM7Q0FYRCxBQVdDLENBWHVDLDZCQUFtQixHQVcxRDtrQkFYb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOiHquWumuS5ieWvueixoeexuyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgRGV2ZWxvcGVyc1Rvb2xDbGFzcyBmcm9tICcuL0RldmVsb3BlcnNUb29sQ2xhc3MnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yQ2xhc3MgZXh0ZW5kcyBEZXZlbG9wZXJzVG9vbENsYXNzIHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DynamicPanelClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f421fvcjy9HCrRL+vgHKjyG', 'DynamicPanelClass');
// scripts/base/class/DynamicPanelClass.ts

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
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DynamicPanelClass = /** @class */ (function (_super) {
    __extends(DynamicPanelClass, _super);
    function DynamicPanelClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DynamicPanelClass.prototype.start = function () {
    };
    DynamicPanelClass = __decorate([
        ccclass
    ], DynamicPanelClass);
    return DynamicPanelClass;
}(DevelopersToolClass_1.default));
exports.default = DynamicPanelClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXER5bmFtaWNQYW5lbENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUErQyxxQ0FBbUI7SUFBbEU7O0lBWUEsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsaUNBQUssR0FBTDtJQUVBLENBQUM7SUFUZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FZckM7SUFBRCx3QkFBQztDQVpELEFBWUMsQ0FaOEMsNkJBQW1CLEdBWWpFO2tCQVpvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqjmgIHnqpflj6PnsbsgXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IERldmVsb3BlcnNUb29sQ2xhc3MgZnJvbSAnLi9EZXZlbG9wZXJzVG9vbENsYXNzJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNQYW5lbENsYXNzIGV4dGVuZHMgRGV2ZWxvcGVyc1Rvb2xDbGFzcyB7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/PawnClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var ActorClass_1 = require("./ActorClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PawnClass = /** @class */ (function (_super) {
    __extends(PawnClass, _super);
    function PawnClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PawnClass.prototype.start = function () {
    };
    PawnClass.prototype.update = function (dt) {
    };
    PawnClass = __decorate([
        ccclass
    ], PawnClass);
    return PawnClass;
}(ActorClass_1.default));
exports.default = PawnClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhd25DbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQVU7SUFBakQ7O0lBYUEsQ0FBQztJQVhHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUFaZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWE3QjtJQUFELGdCQUFDO0NBYkQsQUFhQyxDQWJzQyxvQkFBVSxHQWFoRDtrQkFib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOWPr+aOp+WItuexuyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgQWN0b3JDbGFzcyBmcm9tICcuL0FjdG9yQ2xhc3MnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF3bkNsYXNzIGV4dGVuZHMgQWN0b3JDbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe3d6sWzhhNbrb4V2ujPwDi', 'DevelopersToolClass');
// scripts/base/class/DevelopersToolClass.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolClass = /** @class */ (function (_super) {
    __extends(DevelopersToolClass, _super);
    function DevelopersToolClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DevelopersToolClass = __decorate([
        ccclass
    ], DevelopersToolClass);
    return DevelopersToolClass;
}(cc.Component));
exports.default = DevelopersToolClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBaUQsdUNBQVk7SUFBN0Q7O0lBRUEsQ0FBQztJQUZvQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQUV2QztJQUFELDBCQUFDO0NBRkQsQUFFQyxDQUZnRCxFQUFFLENBQUMsU0FBUyxHQUU1RDtrQkFGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2ZWxvcGVyc1Rvb2xDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/GridAdsorb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d30d0AcIhN+4RMZHACz6v2', 'GridAdsorb');
// scripts/base/class/GridAdsorb.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridAbsorb = /** @class */ (function () {
    /**
     * 网格对齐
     * 创建的同时，如果类单例中不存在实例，则将此实例赋予到类单例中
     */
    function GridAbsorb(axisNum, cellSize) {
        this._CellSize = new cc.Vec3(100);
        this._GridOffset = new cc.Vec3(0);
        this._GridSize = new cc.Vec3(0);
        this._GridAxisCellNum = new cc.Vec3(100);
        // + -
        this._GridEdgeAnchor_X = new cc.Vec2(.5, .5);
        this._GridEdgeAnchor_Y = new cc.Vec2(.5, .5);
        this._GridEdgeAnchor_Z = new cc.Vec2(.5, .5);
        if (axisNum) {
            this.cellNum = axisNum;
            if (cellSize)
                this.cellSize = cellSize;
        }
        if (!GridAbsorb._ExclusiveGrid) {
            GridAbsorb._ExclusiveGrid = this;
        }
    }
    Object.defineProperty(GridAbsorb, "grid", {
        /**
         * 获取静态唯一网格实例
         */
        get: function () {
            this._ExclusiveGrid = this._ExclusiveGrid || new GridAbsorb();
            return this._ExclusiveGrid;
        },
        /**
         * 将实例设置到静态唯一网格实例
         */
        set: function (grid) {
            this._ExclusiveGrid = grid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "cellSize", {
        /**
         * 获取单元格尺寸
         */
        get: function () {
            return this._CellSize;
        },
        /**
         * 设置单元格尺寸
         */
        set: function (size) {
            this._CellSize = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "offset", {
        /**
         * 获取网格偏移量
         */
        get: function () {
            return this._GridOffset;
        },
        /**
         * 设置网格偏移量
         */
        set: function (offset) {
            var newOffset = this._GridOffset.add(offset);
            function vecMod(axis) {
                return newOffset[axis] % this.gridSize[axis];
            }
            this._GridOffset = new cc.Vec3(vecMod('x'), vecMod('y'), vecMod('z'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "gridSize", {
        /**
         * 获取网格偏移量
         */
        get: function () {
            return this._GridOffset;
        },
        /**
         * 设置网格偏移量
         */
        set: function (offset) {
            this._GridOffset = offset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "cellNum", {
        /**
         * 获取网格轴晶格数量
         */
        get: function () {
            return this._GridAxisCellNum;
        },
        /**
         * 设置网格轴晶格数量
         */
        set: function (num) {
            this._GridAxisCellNum = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "anchor", {
        /**
         * 获取网格边缘锚点
         * 取值在[0, 1]
         */
        get: function () {
            function toAlige(vec) {
                return (vec.x - vec.y + 1) / 2;
            }
            return new cc.Vec3(toAlige(this._GridEdgeAnchor_X), toAlige(this._GridEdgeAnchor_Y), toAlige(this._GridEdgeAnchor_Z));
        },
        /**
         * 设置网格边缘锚点
         * 取值在[0, 1]，跟随引擎
         */
        set: function (anchor) {
            function toAnchor(num) {
                if (!num)
                    return new cc.Vec2(.5);
                var axis = Math.max(Math.min(num, 1), 0) - .5;
                return new cc.Vec2(.5 - axis, .5 + axis);
            }
            this._GridEdgeAnchor_X = toAnchor(anchor.x);
            this._GridEdgeAnchor_Y = toAnchor(anchor.y);
            this._GridEdgeAnchor_Z = toAnchor(anchor.z);
        },
        enumerable: false,
        configurable: true
    });
    // SIGNPOST 网格查找                                                                                
    /**
     * 从各轴索引获得网格坐标
     * cocos和unity都是y轴向上，xz为平面
     * 为了适配平面坐标，z为深度轴
     * @param {intVec3} index
     * @return {int}
     */
    GridAbsorb.prototype.getGridPositionByIndex = function (index) {
        function getPos(axis) {
            return (Math.floor(index[axis]) % this.cellNum[axis]) // 唯一不稳定因素
                * this.cellSize[axis] + this.offset[axis];
        }
        var x = getPos('x');
        var y = getPos('y');
        if (index instanceof cc.Vec3) {
            var z = getPos('z');
            return new cc.Vec3(x, y, z);
        }
        return new cc.Vec2(x, y);
    };
    GridAbsorb._ExclusiveGrid = null;
    return GridAbsorb;
}());
exports.default = GridAbsorb;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXEdyaWRBZHNvcmIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQWlCSTs7O09BR0c7SUFDSCxvQkFBWSxPQUFpQixFQUFFLFFBQWtCO1FBV3ZDLGNBQVMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFjdEMsZ0JBQVcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFrQnRDLGNBQVMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFjcEMscUJBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBY3ZELE1BQU07UUFDSSxzQkFBaUIsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELHNCQUFpQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsc0JBQWlCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQXpFdkQsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLFFBQVE7Z0JBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtZQUM1QixVQUFVLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUNwQztJQUNMLENBQUM7SUF4QkQsc0JBQWtCLGtCQUFJO1FBSHRCOztXQUVHO2FBQ0g7WUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxVQUFVLEVBQUUsQ0FB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WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BZEE7SUFnQkQsZ0dBQWdHO0lBRWhHOzs7Ozs7T0FNRztJQUNJLDJDQUFzQixHQUE3QixVQUEyRCxLQUFRO1FBQy9ELFNBQVMsTUFBTSxDQUFDLElBQUk7WUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVU7a0JBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLEtBQUssWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQixPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBTSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBTSxDQUFDO0lBQ2xDLENBQUM7SUFoSmdCLHlCQUFjLEdBQWUsSUFBSSxDQUFDO0lBa0p2RCxpQkFBQztDQXBKRCxBQW9KQyxJQUFBO2tCQXBKb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRBYnNvcmIge1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0V4Y2x1c2l2ZUdyaWQ6IEdyaWRBYnNvcmIgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bpnZnmgIHllK/kuIDnvZHmoLzlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZ3JpZCgpIHtcclxuICAgICAgICB0aGlzLl9FeGNsdXNpdmVHcmlkID0gdGhpcy5fRXhjbHVzaXZlR3JpZCB8fCBuZXcgR3JpZEFic29yYigpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0V4Y2x1c2l2ZUdyaWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWwhuWunuS+i+iuvue9ruWIsOmdmeaAgeWUr+S4gOe9keagvOWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBncmlkKGdyaWQ6IEdyaWRBYnNvcmIpIHtcclxuICAgICAgICB0aGlzLl9FeGNsdXNpdmVHcmlkID0gZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe9keagvOWvuem9kFxyXG4gICAgICog5Yib5bu655qE5ZCM5pe277yM5aaC5p6c57G75Y2V5L6L5Lit5LiN5a2Y5Zyo5a6e5L6L77yM5YiZ5bCG5q2k5a6e5L6L6LWL5LqI5Yiw57G75Y2V5L6L5LitXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGF4aXNOdW0/OiBjYy5WZWMzLCBjZWxsU2l6ZT86IGNjLlZlYzMpIHtcclxuICAgICAgICBpZiAoYXhpc051bSkge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxOdW0gPSBheGlzTnVtO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFNpemUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxTaXplID0gY2VsbFNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghR3JpZEFic29yYi5fRXhjbHVzaXZlR3JpZCkge1xyXG4gICAgICAgICAgICBHcmlkQWJzb3JiLl9FeGNsdXNpdmVHcmlkID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9DZWxsU2l6ZTogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDEwMCk7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWNleWFg+agvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNlbGxTaXplKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DZWxsU2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Y2V5YWD5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2VsbFNpemUoc2l6ZTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0NlbGxTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRPZmZzZXQ6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC85YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb2Zmc2V0KCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nvZHmoLzlgY/np7vph48gIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9mZnNldChvZmZzZXQ6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgbmV3T2Zmc2V0ID0gdGhpcy5fR3JpZE9mZnNldC5hZGQob2Zmc2V0KTtcclxuICAgICAgICBmdW5jdGlvbiB2ZWNNb2QoYXhpczogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld09mZnNldFtheGlzXSAlIHRoaXMuZ3JpZFNpemVbYXhpc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX0dyaWRPZmZzZXQgPSBuZXcgY2MuVmVjMyh2ZWNNb2QoJ3gnKSwgdmVjTW9kKCd5JyksIHZlY01vZCgneicpKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfR3JpZFNpemU6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC85YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ3JpZFNpemUoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWBj+enu+mHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyaWRTaXplKG9mZnNldDogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0dyaWRPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9HcmlkQXhpc0NlbGxOdW06IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygxMDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzovbTmmbbmoLzmlbDph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjZWxsTnVtKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkQXhpc0NlbGxOdW07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOi9tOaZtuagvOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNlbGxOdW0obnVtOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZEF4aXNDZWxsTnVtID0gbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICsgLVxyXG4gICAgcHJvdGVjdGVkIF9HcmlkRWRnZUFuY2hvcl9YOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoLjUsIC41KTtcclxuICAgIHByb3RlY3RlZCBfR3JpZEVkZ2VBbmNob3JfWTogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC41LCAuNSk7XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRFZGdlQW5jaG9yX1o6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMiguNSwgLjUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzovrnnvJjplJrngrkgIFxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYW5jaG9yKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIGZ1bmN0aW9uIHRvQWxpZ2UodmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodmVjLnggLSB2ZWMueSArIDEpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKFxyXG4gICAgICAgICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1gpLFxyXG4gICAgICAgICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1kpLFxyXG4gICAgICAgICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1opXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC86L6557yY6ZSa54K5XHJcbiAgICAgKiDlj5blgLzlnKhbMCwgMV3vvIzot5/pmo/lvJXmk45cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhbmNob3IoYW5jaG9yOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdG9BbmNob3IobnVtOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFudW0pIHJldHVybiBuZXcgY2MuVmVjMiguNSk7XHJcbiAgICAgICAgICAgIGxldCBheGlzID0gTWF0aC5tYXgoTWF0aC5taW4obnVtLCAxKSwgMCkgLSAuNTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKC41IC0gYXhpcywgLjUgKyBheGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fR3JpZEVkZ2VBbmNob3JfWCA9IHRvQW5jaG9yKGFuY2hvci54KTtcclxuICAgICAgICB0aGlzLl9HcmlkRWRnZUFuY2hvcl9ZID0gdG9BbmNob3IoYW5jaG9yLnkpO1xyXG4gICAgICAgIHRoaXMuX0dyaWRFZGdlQW5jaG9yX1ogPSB0b0FuY2hvcihhbmNob3Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg572R5qC85p+l5om+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDku47lkITovbTntKLlvJXojrflvpfnvZHmoLzlnZDmoIdcclxuICAgICAqIGNvY29z5ZKMdW5pdHnpg73mmK956L205ZCR5LiK77yMeHrkuLrlubPpnaJcclxuICAgICAqIOS4uuS6humAgumFjeW5s+mdouWdkOagh++8jHrkuLrmt7HluqbovbRcclxuICAgICAqIEBwYXJhbSB7aW50VmVjM30gaW5kZXhcclxuICAgICAqIEByZXR1cm4ge2ludH1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEdyaWRQb3NpdGlvbkJ5SW5kZXg8VCBleHRlbmRzIGNjLlZlYzMgfCBjYy5WZWMyPihpbmRleDogVCk6IFQge1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFBvcyhheGlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihpbmRleFtheGlzXSkgJSB0aGlzLmNlbGxOdW1bYXhpc10pIC8vIOWUr+S4gOS4jeeos+WumuWboOe0oFxyXG4gICAgICAgICAgICAgICAgKiB0aGlzLmNlbGxTaXplW2F4aXNdICsgdGhpcy5vZmZzZXRbYXhpc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB4ID0gZ2V0UG9zKCd4Jyk7XHJcbiAgICAgICAgbGV0IHkgPSBnZXRQb3MoJ3knKTtcclxuICAgICAgICBpZiAoaW5kZXggaW5zdGFuY2VvZiBjYy5WZWMzKSB7XHJcbiAgICAgICAgICAgIGxldCB6ID0gZ2V0UG9zKCd6Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgY2MuVmVjMyh4LCB5LCB6KSBhcyBUO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIoeCwgeSkgYXMgVDtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

"use strict";
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
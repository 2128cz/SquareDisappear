"use strict";
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
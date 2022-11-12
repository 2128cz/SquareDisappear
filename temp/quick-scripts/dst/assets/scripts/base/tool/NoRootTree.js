
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
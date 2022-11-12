
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
            var put = this.$put - 1;
            put = put < 0 ? this._StackSize - 1 : put;
            return this.getBuffer(put);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "put", {
        get: function () { return this.$put; },
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
    Object.defineProperty(noRootTree.prototype, "get", {
        get: function () { return this.$get; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcTm9Sb290VHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEQ7QUFDOUQsc0VBQWdFO0FBQ2hFOzs7R0FHRztBQUNIO0lBQXdDLDhCQUFrQjtJQUExRDs7SUFzRkEsQ0FBQztJQTlFRyxzQkFBa0Isa0JBQUk7UUFIdEI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBdUIsS0FBaUI7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BTkE7SUFRRDs7OztPQUlHO0lBQ0ksd0JBQUcsR0FBVixVQUFXLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixNQUFXO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBS0Qsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDJCQUFHO2FBQWQsY0FBbUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFLckMsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywyQkFBRzthQUFkLGNBQW1CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3JDOzs7OztPQUtHO0lBQ0ksd0JBQUcsR0FBVixVQUE2QixHQUFPO1FBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLHdCQUFHLEdBQVYsVUFBVyxNQUFlO1FBQ3RCLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxJQUFJLENBQUM7WUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixLQUFhLEVBQUUsTUFBYztRQUM3QyxPQUFPLGdDQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxzQkFBVyw4QkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0F0RkEsQUFzRkMsQ0F0RnVDLG9DQUFrQixHQXNGekQ7O0FBRUQsNERBQTREIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlnb3JvdXNSaW5nQnVmZmVyIH0gZnJvbSAnLi4vY2xhc3MvUmlnb3JvdXNMaWJyYXJ5JztcclxuaW1wb3J0IHsgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG4vKipcclxuICog5peg5qC55qCRIFxyXG4gKiBAdGlwIOagueaNruW9k+WJjea4uOaIj+eahOWumuS5ie+8jOWFpeagiOS4uuague+8jOWHuuagiOS4uuWPtlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgbm9Sb290VHJlZSBleHRlbmRzIFJpZ29yb3VzUmluZ0J1ZmZlciB7XHJcbiAgICAvKipcclxuICAgICAqIOagkeWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9Ob1Jvb3RUcmVlOiBub1Jvb3RUcmVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmoJHljZXkvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdHJlZSgpIHtcclxuICAgICAgICB0aGlzLl9Ob1Jvb3RUcmVlID0gdGhpcy5fTm9Sb290VHJlZSB8fCBuZXcgbm9Sb290VHJlZSgzMCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX05vUm9vdFRyZWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruagkeWNleS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB0cmVlKHZhbHVlOiBub1Jvb3RUcmVlKSB7XHJcbiAgICAgICAgdGhpcy5fTm9Sb290VHJlZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5a2Q6aG5XHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFxyXG4gICAgICogQHJldHVybnMg6L+U5Zue6L+Z5Liq5a2Q6aG555qE57Si5byVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGQob2JqZWN0OiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2gob2JqZWN0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Y+N5ZCR5re75Yqg5a2Q6aG5ICBcclxuICAgICAqIOitpuWRiu+8mui/meaYr+S4jeespuWQiOinhOWImeeahOaWueazle+8jOivt+ehruS/neagiOa3seW6puWFgeiuuOWPjeaOqO+8jFxyXG4gICAgICog5oiW5piv5LiN5YaN6I635Y+W5qCI5pyJ5pWI5rex5bqm77yM5Zug5Li66L+Z5LiN5Lya6L+b6KGM5pyJ5pWI5oCn5qOA5p+l77yMXHJcbiAgICAgKiDkvJrnoLTlnY/mlbDmja7ov57nu63mgKdcclxuICAgICAqIEBwYXJhbSBvYmplY3QgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRGcm9tRnJvbnQob2JqZWN0OiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuJGdldCA9IHRoaXMuJGdldCAtIDE7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3RbdGhpcy4kZ2V0XSA9IG9iamVjdDtcclxuICAgICAgICByZXR1cm4gdGhpcy4kZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmoLnoioLngrlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHJvb3QoKTogYW55IHtcclxuICAgICAgICBsZXQgcHV0ID0gdGhpcy4kcHV0IC0gMTtcclxuICAgICAgICBwdXQgPSBwdXQgPCAwID8gdGhpcy5fU3RhY2tTaXplIC0gMSA6IHB1dDtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIocHV0KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcHV0KCkgeyByZXR1cm4gdGhpcy4kcHV0IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pyA5pyr5a2Q6IqC54K5XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsZWFmKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnVmZmVyKHRoaXMuJGdldCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGdldCgpIHsgcmV0dXJuIHRoaXMuJGdldCB9XHJcbiAgICAvKipcclxuICAgICAqIOS7jue7meWumue0ouW8leWkhOaIquaWre+8jOW5tui/lOWbnuaIquaWremDqOWIhlxyXG4gICAgICogQHBhcmFtIGtleSBcclxuICAgICAqIEByZXR1cm4gb2JqW106IG9iajMsIG9iajQuLi5cclxuICAgICAqIEByZXR1cm4gaW5kZXhbXTogMywgNC4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3V0PFQgZXh0ZW5kcyBudW1iZXI+KGtleT86IFQpOiBhbnkge1xyXG4gICAgICAgIGxldCBsZW4gPSAoa2V5ICUgdGhpcy5fU3RhY2tTaXplKSAtIHRoaXMuJGdldDtcclxuICAgICAgICBpZiAodGhpcy5fU3RhY2tJc0Z1bGwpIHJldHVybiB0aGlzLl9TdGFja1NpemUgLSBsZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVsbChsZW4gPCAwID8gdGhpcy5fU3RhY2tTaXplICsgbGVuIDogbGVuKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5oyH5a6a6ZW/5bqm55qE6aG555uuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIOWIoOmZpOeahOmVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsKGxlbmd0aD86IG51bWJlcikge1xyXG4gICAgICAgIGlmICghbGVuZ3RoIHx8IGxlbmd0aCA9PSAwKSBsZW5ndGggPSAxO1xyXG4gICAgICAgIGlmIChsZW5ndGggPCAwKSByZXR1cm4gdGhpcy5jbGVhbigpO1xyXG4gICAgICAgIHRoaXMuJGdldCA9IGxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Zyo5Y+25a2Q6IqC54K56ZmE6L+R57uZ5a6a5LiA5Liq57Si5byV77yM5bm25oyH5a6a5YGP56e76YeP77yM6L2s5Li65LiA5Liq5pyJ5pWI55qE57Si5byVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROZXh0SW5kZXgoaW5kZXg6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBtbS5QTW9kKGluZGV4ICsgb2Zmc2V0LCB0aGlzLl9TdGFja1NpemUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBidWZmZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0hhc2hMaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBpbXBvcnQgTlRSIGZyb20gXCIuLi9iYXNlL3Rvb2wvTm9Sb290VHJlZVwiOyAvLyAo44CDwrQtz4nvvaUpIOivtuWYv35cclxuIl19
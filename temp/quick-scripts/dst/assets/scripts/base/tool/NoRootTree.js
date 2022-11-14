
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
var RigorousLibrary_1 = require("../core/RigorousLibrary");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcTm9Sb290VHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBNkQ7QUFDN0Qsc0VBQWdFO0FBQ2hFOzs7R0FHRztBQUNIO0lBQXdDLDhCQUFrQjtJQUExRDs7SUFzRkEsQ0FBQztJQTlFRyxzQkFBa0Isa0JBQUk7UUFIdEI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBdUIsS0FBaUI7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BTkE7SUFRRDs7OztPQUlHO0lBQ0ksd0JBQUcsR0FBVixVQUFXLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixNQUFXO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBS0Qsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDJCQUFHO2FBQWQsY0FBbUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFLckMsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywyQkFBRzthQUFkLGNBQW1CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3JDOzs7OztPQUtHO0lBQ0ksd0JBQUcsR0FBVixVQUE2QixHQUFPO1FBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLHdCQUFHLEdBQVYsVUFBVyxNQUFlO1FBQ3RCLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxJQUFJLENBQUM7WUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixLQUFhLEVBQUUsTUFBYztRQUM3QyxPQUFPLGdDQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxzQkFBVyw4QkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0F0RkEsQUFzRkMsQ0F0RnVDLG9DQUFrQixHQXNGekQ7O0FBRUQsNERBQTREIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlnb3JvdXNSaW5nQnVmZmVyIH0gZnJvbSAnLi4vY29yZS9SaWdvcm91c0xpYnJhcnknO1xyXG5pbXBvcnQgeyBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbi8qKlxyXG4gKiDml6DmoLnmoJEgXHJcbiAqIEB0aXAg5qC55o2u5b2T5YmN5ri45oiP55qE5a6a5LmJ77yM5YWl5qCI5Li65qC577yM5Ye65qCI5Li65Y+2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBub1Jvb3RUcmVlIGV4dGVuZHMgUmlnb3JvdXNSaW5nQnVmZmVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5qCR5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX05vUm9vdFRyZWU6IG5vUm9vdFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagkeWNleS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB0cmVlKCkge1xyXG4gICAgICAgIHRoaXMuX05vUm9vdFRyZWUgPSB0aGlzLl9Ob1Jvb3RUcmVlIHx8IG5ldyBub1Jvb3RUcmVlKDMwKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTm9Sb290VHJlZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5qCR5Y2V5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHRyZWUodmFsdWU6IG5vUm9vdFRyZWUpIHtcclxuICAgICAgICB0aGlzLl9Ob1Jvb3RUcmVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlrZDpoblcclxuICAgICAqIEBwYXJhbSBvYmplY3QgXHJcbiAgICAgKiBAcmV0dXJucyDov5Tlm57ov5nkuKrlrZDpobnnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlj43lkJHmt7vliqDlrZDpobkgIFxyXG4gICAgICog6K2m5ZGK77ya6L+Z5piv5LiN56ym5ZCI6KeE5YiZ55qE5pa55rOV77yM6K+356Gu5L+d5qCI5rex5bqm5YWB6K645Y+N5o6o77yMXHJcbiAgICAgKiDmiJbmmK/kuI3lho3ojrflj5bmoIjmnInmlYjmt7HluqbvvIzlm6DkuLrov5nkuI3kvJrov5vooYzmnInmlYjmgKfmo4Dmn6XvvIxcclxuICAgICAqIOS8muegtOWdj+aVsOaNrui/nue7reaAp1xyXG4gICAgICogQHBhcmFtIG9iamVjdCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEZyb21Gcm9udChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy4kZ2V0ID0gdGhpcy4kZ2V0IC0gMTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFt0aGlzLiRnZXRdID0gb2JqZWN0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRnZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagueiKgueCuVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdCgpOiBhbnkge1xyXG4gICAgICAgIGxldCBwdXQgPSB0aGlzLiRwdXQgLSAxO1xyXG4gICAgICAgIHB1dCA9IHB1dCA8IDAgPyB0aGlzLl9TdGFja1NpemUgLSAxIDogcHV0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcihwdXQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBwdXQoKSB7IHJldHVybiB0aGlzLiRwdXQgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDmnKvlrZDoioLngrlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlYWYoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIodGhpcy4kZ2V0KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZ2V0KCkgeyByZXR1cm4gdGhpcy4kZ2V0IH1cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE5oiq5pat77yM5bm26L+U5Zue5oiq5pat6YOo5YiGXHJcbiAgICAgKiBAcGFyYW0ga2V5IFxyXG4gICAgICogQHJldHVybiBvYmpbXTogb2JqMywgb2JqNC4uLlxyXG4gICAgICogQHJldHVybiBpbmRleFtdOiAzLCA0Li4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjdXQ8VCBleHRlbmRzIG51bWJlcj4oa2V5PzogVCk6IGFueSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IChrZXkgJSB0aGlzLl9TdGFja1NpemUpIC0gdGhpcy4kZ2V0O1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgcmV0dXJuIHRoaXMuX1N0YWNrU2l6ZSAtIGxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdWxsKGxlbiA8IDAgPyB0aGlzLl9TdGFja1NpemUgKyBsZW4gOiBsZW4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTmjIflrprplb/luqbnmoTpobnnm65cclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5Yig6Zmk55qE6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWwobGVuZ3RoPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFsZW5ndGggfHwgbGVuZ3RoID09IDApIGxlbmd0aCA9IDE7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA8IDApIHJldHVybiB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgdGhpcy4kZ2V0ID0gbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjlj7blrZDoioLngrnpmYTov5Hnu5nlrprkuIDkuKrntKLlvJXvvIzlubbmjIflrprlgY/np7vph4/vvIzovazkuLrkuIDkuKrmnInmlYjnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE5leHRJbmRleChpbmRleDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG1tLlBNb2QoaW5kZXggKyBvZmZzZXQsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGJ1ZmZlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSGFzaExpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGltcG9ydCBOVFIgZnJvbSBcIi4uL2Jhc2UvdG9vbC9Ob1Jvb3RUcmVlXCI7IC8vICjjgIPCtC3Pie+9pSkg6K+25Zi/flxyXG4iXX0=
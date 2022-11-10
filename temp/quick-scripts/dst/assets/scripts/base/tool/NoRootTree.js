
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
        get: function () {
            this._NoRootTree = this._NoRootTree || new noRootTree(30);
            return this._NoRootTree;
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcTm9Sb290VHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEQ7QUFDOUQ7OztHQUdHO0FBQ0g7SUFBd0MsOEJBQWtCO0lBQTFEOztJQXFEQSxDQUFDO0lBaERHLHNCQUFrQixrQkFBSTthQUF0QjtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQXVCLEtBQWlCO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUhBO0lBS0Q7Ozs7T0FJRztJQUNJLHdCQUFHLEdBQVYsVUFBVyxNQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBS0Qsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyw0QkFBSTtRQUpmOzs7V0FHRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUNEOzs7T0FHRztJQUNJLHdCQUFHLEdBQVYsVUFBNkIsR0FBTztRQUNoQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRDs7O09BR0c7SUFDSSx3QkFBRyxHQUFWLFVBQVcsTUFBZTtRQUN0QixJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxDQUFDO1lBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FyREEsQUFxREMsQ0FyRHVDLG9DQUFrQixHQXFEekQ7O0FBRUQsNERBQTREIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlnb3JvdXNSaW5nQnVmZmVyIH0gZnJvbSAnLi4vY2xhc3MvUmlnb3JvdXNMaWJyYXJ5JztcclxuLyoqXHJcbiAqIOaXoOagueagkSBcclxuICogQHRpcCDmoLnmja7lvZPliY3muLjmiI/nmoTlrprkuYnvvIzlhaXmoIjkuLrmoLnvvIzlh7rmoIjkuLrlj7ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5vUm9vdFRyZWUgZXh0ZW5kcyBSaWdvcm91c1JpbmdCdWZmZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoJHlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfTm9Sb290VHJlZTogbm9Sb290VHJlZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHRyZWUoKSB7XHJcbiAgICAgICAgdGhpcy5fTm9Sb290VHJlZSA9IHRoaXMuX05vUm9vdFRyZWUgfHwgbmV3IG5vUm9vdFRyZWUoMzApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Ob1Jvb3RUcmVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgdHJlZSh2YWx1ZTogbm9Sb290VHJlZSkge1xyXG4gICAgICAgIHRoaXMuX05vUm9vdFRyZWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWtkOmhuVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBcclxuICAgICAqIEByZXR1cm5zIOi/lOWbnui/meS4quWtkOmhueeahOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkKG9iamVjdDogYW55KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXNoKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagueiKgueCuVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcih0aGlzLiRwdXQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDmnKvlrZDoioLngrlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlYWYoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIodGhpcy4kZ2V0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE5oiq5pat77yM5bm26L+U5Zue5oiq5pat6YOo5YiGXHJcbiAgICAgKiBAcGFyYW0ga2V5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3V0PFQgZXh0ZW5kcyBudW1iZXI+KGtleT86IFQpOiBhbnkge1xyXG4gICAgICAgIGxldCBsZW4gPSAoa2V5ICUgdGhpcy5fU3RhY2tTaXplKSAtIHRoaXMuJGdldDtcclxuICAgICAgICBpZiAodGhpcy5fU3RhY2tJc0Z1bGwpIHJldHVybiB0aGlzLl9TdGFja1NpemUgLSBsZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVsbChsZW4gPCAwID8gdGhpcy5fU3RhY2tTaXplICsgbGVuIDogbGVuKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5oyH5a6a6ZW/5bqm55qE6aG555uuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIOWIoOmZpOeahOmVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsKGxlbmd0aD86IG51bWJlcikge1xyXG4gICAgICAgIGlmICghbGVuZ3RoIHx8IGxlbmd0aCA9PSAwKSBsZW5ndGggPSAxO1xyXG4gICAgICAgIGlmIChsZW5ndGggPCAwKSByZXR1cm4gdGhpcy5jbGVhbigpO1xyXG4gICAgICAgIHRoaXMuJGdldCA9IGxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gaW1wb3J0IE5UUiBmcm9tIFwiLi4vYmFzZS90b29sL05vUm9vdFRyZWVcIjsgLy8gKOOAg8K0Lc+J772lKSDor7blmL9+XHJcbiJdfQ==
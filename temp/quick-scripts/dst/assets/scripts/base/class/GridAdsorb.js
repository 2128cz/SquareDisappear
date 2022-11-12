
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
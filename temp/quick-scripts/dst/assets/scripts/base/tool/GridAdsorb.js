
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/GridAdsorb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d30d0AcIhN+4RMZHACz6v2', 'GridAdsorb');
// scripts/base/tool/GridAdsorb.ts

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
        this._GridSize = null;
        this._GridAxisCellNum = new cc.Vec3(100);
        // + -
        this._GridEdgeAnchor_X = new cc.Vec2(.5, .5);
        this._GridEdgeAnchor_Y = new cc.Vec2(.5, .5);
        this._GridEdgeAnchor_Z = new cc.Vec2(.5, .5);
        if (axisNum) {
            this.cellNum = axisNum;
            if (cellSize) {
                this.cellSize = cellSize;
                this.gridSize = new cc.Vec3(axisNum.x * cellSize.x, axisNum.y * cellSize.y, axisNum.z * cellSize.z);
            }
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
            var self = this;
            var newOffset = this._GridOffset.add(offset);
            function vecMod(axis) {
                return newOffset[axis] % self.gridSize[axis];
            }
            this._GridOffset = new cc.Vec3(vecMod('x'), vecMod('y'), vecMod('z'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "gridSize", {
        /**
         * 获取网格尺寸
         */
        get: function () {
            return this._GridSize;
        },
        /**
         * 设置网格尺寸
         */
        set: function (size) {
            this._GridSize = size;
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
        var self = this;
        function getPos(axis) {
            return (Math.floor(index[axis]) % self.cellNum[axis])
                * self.cellSize[axis] + self.offset[axis];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcR3JpZEFkc29yYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBaUJJOzs7T0FHRztJQUNILG9CQUFZLE9BQWlCLEVBQUUsUUFBa0I7UUFpQnZDLGNBQVMsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFjdEMsZ0JBQVcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFtQnRDLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFjMUIscUJBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBY3ZELE1BQU07UUFDSSxzQkFBaUIsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELHNCQUFpQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsc0JBQWlCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQWhGdkQsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ3ZCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQ3pCLENBQUM7YUFDTDtTQUNKO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxj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QztJQXhKZ0IseUJBQWMsR0FBZSxJQUFJLENBQUM7SUEwSnZELGlCQUFDO0NBNUpELEFBNEpDLElBQUE7a0JBNUpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWF0aE1hY3JvIGFzIG1tIH0gZnJvbSAnLi4vY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQWJzb3JiIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9FeGNsdXNpdmVHcmlkOiBHcmlkQWJzb3JiID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6Z2Z5oCB5ZSv5LiA572R5qC85a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdyaWQoKSB7XHJcbiAgICAgICAgdGhpcy5fRXhjbHVzaXZlR3JpZCA9IHRoaXMuX0V4Y2x1c2l2ZUdyaWQgfHwgbmV3IEdyaWRBYnNvcmIoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9FeGNsdXNpdmVHcmlkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblrp7kvovorr7nva7liLDpnZnmgIHllK/kuIDnvZHmoLzlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgZ3JpZChncmlkOiBHcmlkQWJzb3JiKSB7XHJcbiAgICAgICAgdGhpcy5fRXhjbHVzaXZlR3JpZCA9IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnvZHmoLzlr7npvZBcclxuICAgICAqIOWIm+W7uueahOWQjOaXtu+8jOWmguaenOexu+WNleS+i+S4reS4jeWtmOWcqOWunuS+i++8jOWImeWwhuatpOWunuS+i+i1i+S6iOWIsOexu+WNleS+i+S4rVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihheGlzTnVtPzogY2MuVmVjMywgY2VsbFNpemU/OiBjYy5WZWMzKSB7XHJcbiAgICAgICAgaWYgKGF4aXNOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsTnVtID0gYXhpc051bTtcclxuICAgICAgICAgICAgaWYgKGNlbGxTaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxTaXplID0gY2VsbFNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRTaXplID0gbmV3IGNjLlZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpc051bS54ICogY2VsbFNpemUueCxcclxuICAgICAgICAgICAgICAgICAgICBheGlzTnVtLnkgKiBjZWxsU2l6ZS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNOdW0ueiAqIGNlbGxTaXplLnpcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFHcmlkQWJzb3JiLl9FeGNsdXNpdmVHcmlkKSB7XHJcbiAgICAgICAgICAgIEdyaWRBYnNvcmIuX0V4Y2x1c2l2ZUdyaWQgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0NlbGxTaXplOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMTAwKTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Y2V5YWD5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2VsbFNpemUoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NlbGxTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ljZXlhYPmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjZWxsU2l6ZShzaXplOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5fQ2VsbFNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfR3JpZE9mZnNldDogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzlgY/np7vph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvZmZzZXQoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWBj+enu+mHjyAgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb2Zmc2V0KG9mZnNldDogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbmV3T2Zmc2V0ID0gdGhpcy5fR3JpZE9mZnNldC5hZGQob2Zmc2V0KTtcclxuICAgICAgICBmdW5jdGlvbiB2ZWNNb2QoYXhpczogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld09mZnNldFtheGlzXSAlIHNlbGYuZ3JpZFNpemVbYXhpc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX0dyaWRPZmZzZXQgPSBuZXcgY2MuVmVjMyh2ZWNNb2QoJ3gnKSwgdmVjTW9kKCd5JyksIHZlY01vZCgneicpKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfR3JpZFNpemU6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmlkU2l6ZSgpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZFNpemU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyaWRTaXplKHNpemU6IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLl9HcmlkU2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9HcmlkQXhpc0NlbGxOdW06IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygxMDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzovbTmmbbmoLzmlbDph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjZWxsTnVtKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkQXhpc0NlbGxOdW07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOi9tOaZtuagvOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNlbGxOdW0obnVtOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZEF4aXNDZWxsTnVtID0gbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICsgLVxyXG4gICAgcHJvdGVjdGVkIF9HcmlkRWRnZUFuY2hvcl9YOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoLjUsIC41KTtcclxuICAgIHByb3RlY3RlZCBfR3JpZEVkZ2VBbmNob3JfWTogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC41LCAuNSk7XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRFZGdlQW5jaG9yX1o6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMiguNSwgLjUpO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzovrnnvJjplJrngrkgIFxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYW5jaG9yKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIGZ1bmN0aW9uIHRvQWxpZ2UodmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodmVjLnggLSB2ZWMueSArIDEpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKFxyXG4gICAgICAgICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1gpLFxyXG4gICAgICAgICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1kpLFxyXG4gICAgICAgICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1opXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC86L6557yY6ZSa54K5XHJcbiAgICAgKiDlj5blgLzlnKhbMCwgMV3vvIzot5/pmo/lvJXmk45cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhbmNob3IoYW5jaG9yOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdG9BbmNob3IobnVtOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFudW0pIHJldHVybiBuZXcgY2MuVmVjMiguNSk7XHJcbiAgICAgICAgICAgIGxldCBheGlzID0gTWF0aC5tYXgoTWF0aC5taW4obnVtLCAxKSwgMCkgLSAuNTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKC41IC0gYXhpcywgLjUgKyBheGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fR3JpZEVkZ2VBbmNob3JfWCA9IHRvQW5jaG9yKGFuY2hvci54KTtcclxuICAgICAgICB0aGlzLl9HcmlkRWRnZUFuY2hvcl9ZID0gdG9BbmNob3IoYW5jaG9yLnkpO1xyXG4gICAgICAgIHRoaXMuX0dyaWRFZGdlQW5jaG9yX1ogPSB0b0FuY2hvcihhbmNob3Iueik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg572R5qC85p+l5om+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiDku47lkITovbTntKLlvJXojrflvpfnvZHmoLzlnZDmoIcgIFxyXG4gICAgICogY29jb3Plkox1bml0eemDveaYr3novbTlkJHkuIrvvIx4euS4uuW5s+mdoiAgXHJcbiAgICAgKiDkuLrkuobpgILphY3lubPpnaLlnZDmoIfvvIx65Li65rex5bqm6L20XHJcbiAgICAgKiBAcGFyYW0ge2ludFZlYzN9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJuIHtpbnR9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRHcmlkUG9zaXRpb25CeUluZGV4PFQgZXh0ZW5kcyBjYy5WZWMzIHwgY2MuVmVjMj4oaW5kZXg6IFQpOiBUIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UG9zKGF4aXM6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihpbmRleFtheGlzXSkgJSBzZWxmLmNlbGxOdW1bYXhpc10pXHJcbiAgICAgICAgICAgICAgICAqIHNlbGYuY2VsbFNpemVbYXhpc10gKyBzZWxmLm9mZnNldFtheGlzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHggPSBnZXRQb3MoJ3gnKTtcclxuICAgICAgICBsZXQgeSA9IGdldFBvcygneScpO1xyXG4gICAgICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIGNjLlZlYzMpIHtcclxuICAgICAgICAgICAgbGV0IHogPSBnZXRQb3MoJ3onKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKHgsIHksIHopIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih4LCB5KSBhcyBUO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
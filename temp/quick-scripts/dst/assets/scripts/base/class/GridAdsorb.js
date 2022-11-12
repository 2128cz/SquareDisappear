
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXEdyaWRBZHNvcmIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQWlCSTs7O09BR0c7SUFDSCxvQkFBWSxPQUFpQixFQUFFLFFBQWtCO1FBaUJ2QyxjQUFTLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBY3RDLGdCQUFXLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBbUJ0QyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBYzFCLHFCQUFnQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQWN2RCxNQUFNO1FBQ0ksc0JBQWlCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqRCxzQkFBaUIsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELHNCQUFpQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFoRnZELElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUN2QixPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUN6QixDQUFDO2FBQ0w7U0FDSjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO1lBQzVCLFVBQVUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQTlCRCxzQkFBa0Isa0JBQUk7UUFIdEI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLFVBQVUsRUFBRSxDQUFBO1lBQzdELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUF1QixJQUFnQjtZQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDOzs7T0FOQTtJQWlDRCxzQkFBVyxnQ0FBUTtRQUhuQjs7V0FFRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQW9CLElBQWE7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQzs7O09BTkE7SUFZRCxzQkFBVyw4QkFBTTtRQUhqQjs7V0FFRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQWtCLE1BQWU7WUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLFNBQVMsTUFBTSxDQUFDLElBQVk7Z0JBQ3hCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDekUsQ0FBQzs7O09BWEE7SUFpQkQsc0JBQVcsZ0NBQVE7UUFIbkI7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFvQixJQUFhO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7OztPQU5BO0lBWUQsc0JBQVcsK0JBQU87UUFIbEI7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQW1CLEdBQVk7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUNoQyxDQUFDOzs7T0FOQTtJQWdCRCxzQkFBVyw4QkFBTTtRQUpqQjs7O1dBR0c7YUFDSDtZQUNJLFNBQVMsT0FBTyxDQUFDLEdBQVk7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFDRCxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FDZCxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUNsQyxDQUFDO1FBQ04sQ0FBQztRQUNEOzs7V0FHRzthQUNILFVBQWtCLE1BQWU7WUFDN0IsU0FBUyxRQUFRLENBQUMsR0FBVztnQkFDekIsSUFBSSxDQUFDLEdBQUc7b0JBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUM5QyxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BZEE7SUFnQkQsZ0dBQWdHO0lBRWhHOzs7Ozs7T0FNRztJQUNJLDJDQUFzQixHQUE3QixVQUEyRCxLQUFRO1FBQy9ELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixTQUFTLE1BQU0sQ0FBQyxJQUFZO1lBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7a0JBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLEtBQUssWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQixPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBTSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBTSxDQUFDO0lBQ2xDLENBQUM7SUF4SmdCLHlCQUFjLEdBQWUsSUFBSSxDQUFDO0lBMEp2RCxpQkFBQztDQTVKRCxBQTRKQyxJQUFBO2tCQTVKb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZEFic29yYiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfRXhjbHVzaXZlR3JpZDogR3JpZEFic29yYiA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumdmeaAgeWUr+S4gOe9keagvOWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBncmlkKCkge1xyXG4gICAgICAgIHRoaXMuX0V4Y2x1c2l2ZUdyaWQgPSB0aGlzLl9FeGNsdXNpdmVHcmlkIHx8IG5ldyBHcmlkQWJzb3JiKClcclxuICAgICAgICByZXR1cm4gdGhpcy5fRXhjbHVzaXZlR3JpZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bCG5a6e5L6L6K6+572u5Yiw6Z2Z5oCB5ZSv5LiA572R5qC85a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGdyaWQoZ3JpZDogR3JpZEFic29yYikge1xyXG4gICAgICAgIHRoaXMuX0V4Y2x1c2l2ZUdyaWQgPSBncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog572R5qC85a+56b2QXHJcbiAgICAgKiDliJvlu7rnmoTlkIzml7bvvIzlpoLmnpznsbvljZXkvovkuK3kuI3lrZjlnKjlrp7kvovvvIzliJnlsIbmraTlrp7kvovotYvkuojliLDnsbvljZXkvovkuK1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYXhpc051bT86IGNjLlZlYzMsIGNlbGxTaXplPzogY2MuVmVjMykge1xyXG4gICAgICAgIGlmIChheGlzTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbE51bSA9IGF4aXNOdW07XHJcbiAgICAgICAgICAgIGlmIChjZWxsU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsU2l6ZSA9IGNlbGxTaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IG5ldyBjYy5WZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNOdW0ueCAqIGNlbGxTaXplLngsXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpc051bS55ICogY2VsbFNpemUueSxcclxuICAgICAgICAgICAgICAgICAgICBheGlzTnVtLnogKiBjZWxsU2l6ZS56XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghR3JpZEFic29yYi5fRXhjbHVzaXZlR3JpZCkge1xyXG4gICAgICAgICAgICBHcmlkQWJzb3JiLl9FeGNsdXNpdmVHcmlkID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9DZWxsU2l6ZTogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDEwMCk7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWNleWFg+agvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNlbGxTaXplKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DZWxsU2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Y2V5YWD5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2VsbFNpemUoc2l6ZTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0NlbGxTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRPZmZzZXQ6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC85YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb2Zmc2V0KCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nvZHmoLzlgY/np7vph48gIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9mZnNldChvZmZzZXQ6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG5ld09mZnNldCA9IHRoaXMuX0dyaWRPZmZzZXQuYWRkKG9mZnNldCk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVjTW9kKGF4aXM6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdPZmZzZXRbYXhpc10gJSBzZWxmLmdyaWRTaXplW2F4aXNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9HcmlkT2Zmc2V0ID0gbmV3IGNjLlZlYzModmVjTW9kKCd4JyksIHZlY01vZCgneScpLCB2ZWNNb2QoJ3onKSlcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRTaXplOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ3JpZFNpemUoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nvZHmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBncmlkU2l6ZShzaXplOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZFNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfR3JpZEF4aXNDZWxsTnVtOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMTAwKTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC86L205pm25qC85pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2VsbE51bSgpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZEF4aXNDZWxsTnVtO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nvZHmoLzovbTmmbbmoLzmlbDph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjZWxsTnVtKG51bTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0dyaWRBeGlzQ2VsbE51bSA9IG51bTtcclxuICAgIH1cclxuXHJcbiAgICAvLyArIC1cclxuICAgIHByb3RlY3RlZCBfR3JpZEVkZ2VBbmNob3JfWDogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKC41LCAuNSk7XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRFZGdlQW5jaG9yX1k6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMiguNSwgLjUpO1xyXG4gICAgcHJvdGVjdGVkIF9HcmlkRWRnZUFuY2hvcl9aOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoLjUsIC41KTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC86L6557yY6ZSa54K5ICBcclxuICAgICAqIOWPluWAvOWcqFswLCAxXVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFuY2hvcigpOiBjYy5WZWMzIHtcclxuICAgICAgICBmdW5jdGlvbiB0b0FsaWdlKHZlYzogY2MuVmVjMikge1xyXG4gICAgICAgICAgICByZXR1cm4gKHZlYy54IC0gdmVjLnkgKyAxKSAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMyhcclxuICAgICAgICAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9YKSxcclxuICAgICAgICAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9ZKSxcclxuICAgICAgICAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9aKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOi+uee8mOmUmueCuVxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFd77yM6Lef6ZqP5byV5pOOXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYW5jaG9yKGFuY2hvcjogY2MuVmVjMykge1xyXG4gICAgICAgIGZ1bmN0aW9uIHRvQW5jaG9yKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghbnVtKSByZXR1cm4gbmV3IGNjLlZlYzIoLjUpO1xyXG4gICAgICAgICAgICBsZXQgYXhpcyA9IE1hdGgubWF4KE1hdGgubWluKG51bSwgMSksIDApIC0gLjU7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgY2MuVmVjMiguNSAtIGF4aXMsIC41ICsgYXhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX0dyaWRFZGdlQW5jaG9yX1ggPSB0b0FuY2hvcihhbmNob3IueCk7XHJcbiAgICAgICAgdGhpcy5fR3JpZEVkZ2VBbmNob3JfWSA9IHRvQW5jaG9yKGFuY2hvci55KTtcclxuICAgICAgICB0aGlzLl9HcmlkRWRnZUFuY2hvcl9aID0gdG9BbmNob3IoYW5jaG9yLnopO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIOe9keagvOafpeaJviAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5LuO5ZCE6L2057Si5byV6I635b6X572R5qC85Z2Q5qCHICBcclxuICAgICAqIGNvY29z5ZKMdW5pdHnpg73mmK956L205ZCR5LiK77yMeHrkuLrlubPpnaIgIFxyXG4gICAgICog5Li65LqG6YCC6YWN5bmz6Z2i5Z2Q5qCH77yMeuS4uua3seW6pui9tFxyXG4gICAgICogQHBhcmFtIHtpbnRWZWMzfSBpbmRleFxyXG4gICAgICogQHJldHVybiB7aW50fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0R3JpZFBvc2l0aW9uQnlJbmRleDxUIGV4dGVuZHMgY2MuVmVjMyB8IGNjLlZlYzI+KGluZGV4OiBUKTogVCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFBvcyhheGlzOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gKE1hdGguZmxvb3IoaW5kZXhbYXhpc10pICUgc2VsZi5jZWxsTnVtW2F4aXNdKVxyXG4gICAgICAgICAgICAgICAgKiBzZWxmLmNlbGxTaXplW2F4aXNdICsgc2VsZi5vZmZzZXRbYXhpc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB4ID0gZ2V0UG9zKCd4Jyk7XHJcbiAgICAgICAgbGV0IHkgPSBnZXRQb3MoJ3knKTtcclxuICAgICAgICBpZiAoaW5kZXggaW5zdGFuY2VvZiBjYy5WZWMzKSB7XHJcbiAgICAgICAgICAgIGxldCB6ID0gZ2V0UG9zKCd6Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgY2MuVmVjMyh4LCB5LCB6KSBhcyBUO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIoeCwgeSkgYXMgVDtcclxuICAgIH1cclxuXHJcbn0iXX0=

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
var GridAbsorb_Private = /** @class */ (function () {
    /**
     * 网格对齐
     * 创建的同时，如果类单例中不存在实例，则将此实例赋予到类单例中
     */
    function GridAbsorb_Private(axisNum, cellSize) {
        // 晶胞尺寸
        this._CellSize = new cc.Vec3(100);
        // 网格计算原点偏移
        this._GridOffset = new cc.Vec3(0);
        // 网格总尺寸
        this._GridSize = null;
        // 各轴晶胞数量
        this._GridAxisCellNum = new cc.Vec3(100);
        // + -
        this._GridEdgeAnchor = new cc.Vec3(.5);
        if (axisNum) {
            this._GridAxisCellNum = axisNum;
            if (cellSize) {
                this._CellSize = cellSize;
                this._GridSize = new cc.Vec3(axisNum.x * cellSize.x, axisNum.y * cellSize.y, axisNum.z * cellSize.z);
            }
        }
        if (!GridAbsorb._ExclusiveGrid) {
            GridAbsorb._ExclusiveGrid = this;
        }
    }
    // SIGNPOST 网格查找                                                                                
    /**
     * 从各轴索引获得网格坐标
     * cocos和unity都是y轴向上，xz为平面
     * 为了适配平面坐标，z为深度轴
     * @param {intVec3} index
     * @return {int}
     */
    GridAbsorb_Private.prototype.getGridPositionByIndex = function (index) {
        var self = this;
        function getPos(axis) {
            return ((Math.floor(index[axis]) % self._GridAxisCellNum[axis]) *
                self._CellSize[axis] + self._GridOffset[axis]) %
                self._GridSize[axis];
        }
        var x = getPos('x');
        var y = getPos('y');
        if (index instanceof cc.Vec3) {
            var z = getPos('z');
            return new cc.Vec3(x, y, z);
        }
        return new cc.Vec2(x, y);
    };
    GridAbsorb_Private._ExclusiveGrid = null;
    return GridAbsorb_Private;
}());
var GridAbsorb = /** @class */ (function (_super) {
    __extends(GridAbsorb, _super);
    function GridAbsorb() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    Object.defineProperty(GridAbsorb.prototype, "anchor", {
        /**
         * 获取网格边缘锚点
         * 取值在[0, 1]
         */
        get: function () {
            return this._GridEdgeAnchor;
            // function toAlige(vec: cc.Vec2) {
            //     return (vec.x - vec.y + 1) / 2;
            // }
            // return new cc.Vec3(
            //     toAlige(this._GridEdgeAnchor_X),
            //     toAlige(this._GridEdgeAnchor_Y),
            //     toAlige(this._GridEdgeAnchor_Z)
            // );
        },
        /**
         * 设置网格边缘锚点
         * 取值在[0, 1]，跟随引擎
         */
        set: function (anchor) {
            this._GridEdgeAnchor = anchor;
            // function toAnchor(num: number) {
            //     if (!num) return new cc.Vec2(.5);
            //     let axis = Math.max(Math.min(num, 1), 0) - .5;
            //     return new cc.Vec2(.5 - axis, .5 + axis);
            // }
            // this._GridEdgeAnchor_X = toAnchor(anchor.x);
            // this._GridEdgeAnchor_Y = toAnchor(anchor.y);
            // this._GridEdgeAnchor_Z = toAnchor(anchor.z);
        },
        enumerable: false,
        configurable: true
    });
    return GridAbsorb;
}(GridAbsorb_Private));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcR3JpZEFkc29yYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUdJOzs7T0FHRztJQUNILDRCQUFZLE9BQWlCLEVBQUUsUUFBa0I7UUFnQmpELE9BQU87UUFDRyxjQUFTLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELFdBQVc7UUFDRCxnQkFBVyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxRQUFRO1FBQ0UsY0FBUyxHQUFZLElBQUksQ0FBQztRQUNwQyxTQUFTO1FBQ0MscUJBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELE1BQU07UUFDSSxvQkFBZSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQXhCaEQsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1lBQ2hDLElBQUksUUFBUSxFQUFFO2dCQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FDeEIsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FDekIsQ0FBQzthQUNMO1NBQ0o7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtZQUM1QixVQUFVLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUNwQztJQUNMLENBQUM7SUFhRCxnR0FBZ0c7SUFFaEc7Ozs7OztPQU1HO0lBQ0ks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O1FBQzFCLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQW9CLElBQWE7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQzs7O09BTkE7SUFZRCxzQkFBVyw4QkFBTTtRQUpqQjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM1QixtQ0FBbUM7WUFDbkMsc0NBQXNDO1lBQ3RDLElBQUk7WUFDSixzQkFBc0I7WUFDdEIsdUNBQXVDO1lBQ3ZDLHVDQUF1QztZQUN2QyxzQ0FBc0M7WUFDdEMsS0FBSztRQUNULENBQUM7UUFDRDs7O1dBR0c7YUFDSCxVQUFrQixNQUFlO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLG1DQUFtQztZQUNuQyx3Q0FBd0M7WUFDeEMscURBQXFEO1lBQ3JELGdEQUFnRDtZQUNoRCxJQUFJO1lBQ0osK0NBQStDO1lBQy9DLCtDQUErQztZQUMvQywrQ0FBK0M7UUFDbkQsQ0FBQzs7O09BZkE7SUFnQkwsaUJBQUM7QUFBRCxDQXZHQSxBQXVHQyxDQXZHdUMsa0JBQWtCLEdBdUd6RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuY2xhc3MgR3JpZEFic29yYl9Qcml2YXRlIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0V4Y2x1c2l2ZUdyaWQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog572R5qC85a+56b2QXHJcbiAgICAgKiDliJvlu7rnmoTlkIzml7bvvIzlpoLmnpznsbvljZXkvovkuK3kuI3lrZjlnKjlrp7kvovvvIzliJnlsIbmraTlrp7kvovotYvkuojliLDnsbvljZXkvovkuK1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYXhpc051bT86IGNjLlZlYzMsIGNlbGxTaXplPzogY2MuVmVjMykge1xyXG4gICAgICAgIGlmIChheGlzTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0dyaWRBeGlzQ2VsbE51bSA9IGF4aXNOdW07XHJcbiAgICAgICAgICAgIGlmIChjZWxsU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fQ2VsbFNpemUgPSBjZWxsU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX0dyaWRTaXplID0gbmV3IGNjLlZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpc051bS54ICogY2VsbFNpemUueCxcclxuICAgICAgICAgICAgICAgICAgICBheGlzTnVtLnkgKiBjZWxsU2l6ZS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNOdW0ueiAqIGNlbGxTaXplLnpcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFHcmlkQWJzb3JiLl9FeGNsdXNpdmVHcmlkKSB7XHJcbiAgICAgICAgICAgIEdyaWRBYnNvcmIuX0V4Y2x1c2l2ZUdyaWQgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOaZtuiDnuWwuuWvuFxyXG4gICAgcHJvdGVjdGVkIF9DZWxsU2l6ZTogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDEwMCk7XHJcbiAgICAvLyDnvZHmoLzorqHnrpfljp/ngrnlgY/np7tcclxuICAgIHByb3RlY3RlZCBfR3JpZE9mZnNldDogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgLy8g572R5qC85oC75bC65a+4XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRTaXplOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIC8vIOWQhOi9tOaZtuiDnuaVsOmHj1xyXG4gICAgcHJvdGVjdGVkIF9HcmlkQXhpc0NlbGxOdW06IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygxMDApO1xyXG4gICAgLy8gKyAtXHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRFZGdlQW5jaG9yOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoLjUpXHJcblxyXG5cclxuICAgIC8vIFNJR05QT1NUIOe9keagvOafpeaJviAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5LuO5ZCE6L2057Si5byV6I635b6X572R5qC85Z2Q5qCHICBcclxuICAgICAqIGNvY29z5ZKMdW5pdHnpg73mmK956L205ZCR5LiK77yMeHrkuLrlubPpnaIgIFxyXG4gICAgICog5Li65LqG6YCC6YWN5bmz6Z2i5Z2Q5qCH77yMeuS4uua3seW6pui9tFxyXG4gICAgICogQHBhcmFtIHtpbnRWZWMzfSBpbmRleFxyXG4gICAgICogQHJldHVybiB7aW50fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0R3JpZFBvc2l0aW9uQnlJbmRleDxUIGV4dGVuZHMgY2MuVmVjMyB8IGNjLlZlYzI+KGluZGV4OiBUKTogVCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFBvcyhheGlzOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgKE1hdGguZmxvb3IoaW5kZXhbYXhpc10pICUgc2VsZi5fR3JpZEF4aXNDZWxsTnVtW2F4aXNdKSAqXHJcbiAgICAgICAgICAgICAgICBzZWxmLl9DZWxsU2l6ZVtheGlzXSArIHNlbGYuX0dyaWRPZmZzZXRbYXhpc11cclxuICAgICAgICAgICAgKSAlXHJcbiAgICAgICAgICAgICAgICBzZWxmLl9HcmlkU2l6ZVtheGlzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHggPSBnZXRQb3MoJ3gnKTtcclxuICAgICAgICBsZXQgeSA9IGdldFBvcygneScpO1xyXG4gICAgICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIGNjLlZlYzMpIHtcclxuICAgICAgICAgICAgbGV0IHogPSBnZXRQb3MoJ3onKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKHgsIHksIHopIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih4LCB5KSBhcyBUO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQWJzb3JiIGV4dGVuZHMgR3JpZEFic29yYl9Qcml2YXRlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumdmeaAgeWUr+S4gOe9keagvOWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBncmlkKCkge1xyXG4gICAgICAgIHRoaXMuX0V4Y2x1c2l2ZUdyaWQgPSB0aGlzLl9FeGNsdXNpdmVHcmlkIHx8IG5ldyBHcmlkQWJzb3JiKClcclxuICAgICAgICByZXR1cm4gdGhpcy5fRXhjbHVzaXZlR3JpZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bCG5a6e5L6L6K6+572u5Yiw6Z2Z5oCB5ZSv5LiA572R5qC85a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGdyaWQoZ3JpZDogR3JpZEFic29yYikge1xyXG4gICAgICAgIHRoaXMuX0V4Y2x1c2l2ZUdyaWQgPSBncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC85YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb2Zmc2V0KCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nvZHmoLzlgY/np7vph48gIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9mZnNldChvZmZzZXQ6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG5ld09mZnNldCA9IHRoaXMuX0dyaWRPZmZzZXQuYWRkKG9mZnNldCk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVjTW9kKGF4aXM6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdPZmZzZXRbYXhpc10gJSBzZWxmLmdyaWRTaXplW2F4aXNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9HcmlkT2Zmc2V0ID0gbmV3IGNjLlZlYzModmVjTW9kKCd4JyksIHZlY01vZCgneScpLCB2ZWNNb2QoJ3onKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWNleWFg+agvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNlbGxTaXplKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DZWxsU2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Y2V5YWD5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2VsbFNpemUoc2l6ZTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0NlbGxTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlue9keagvOi9tOaZtuagvOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNlbGxOdW0oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRBeGlzQ2VsbE51bTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC86L205pm25qC85pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2VsbE51bShudW06IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLl9HcmlkQXhpc0NlbGxOdW0gPSBudW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmlkU2l6ZSgpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZFNpemU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyaWRTaXplKHNpemU6IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLl9HcmlkU2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzovrnnvJjplJrngrkgIFxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYW5jaG9yKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkRWRnZUFuY2hvcjtcclxuICAgICAgICAvLyBmdW5jdGlvbiB0b0FsaWdlKHZlYzogY2MuVmVjMikge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gKHZlYy54IC0gdmVjLnkgKyAxKSAvIDI7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBuZXcgY2MuVmVjMyhcclxuICAgICAgICAvLyAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9YKSxcclxuICAgICAgICAvLyAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9ZKSxcclxuICAgICAgICAvLyAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9aKVxyXG4gICAgICAgIC8vICk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOi+uee8mOmUmueCuVxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFd77yM6Lef6ZqP5byV5pOOXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYW5jaG9yKGFuY2hvcjogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0dyaWRFZGdlQW5jaG9yID0gYW5jaG9yO1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvQW5jaG9yKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICghbnVtKSByZXR1cm4gbmV3IGNjLlZlYzIoLjUpO1xyXG4gICAgICAgIC8vICAgICBsZXQgYXhpcyA9IE1hdGgubWF4KE1hdGgubWluKG51bSwgMSksIDApIC0gLjU7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBuZXcgY2MuVmVjMiguNSAtIGF4aXMsIC41ICsgYXhpcyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuX0dyaWRFZGdlQW5jaG9yX1ggPSB0b0FuY2hvcihhbmNob3IueCk7XHJcbiAgICAgICAgLy8gdGhpcy5fR3JpZEVkZ2VBbmNob3JfWSA9IHRvQW5jaG9yKGFuY2hvci55KTtcclxuICAgICAgICAvLyB0aGlzLl9HcmlkRWRnZUFuY2hvcl9aID0gdG9BbmNob3IoYW5jaG9yLnopO1xyXG4gICAgfVxyXG59Il19
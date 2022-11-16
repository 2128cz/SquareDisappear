
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
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
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
        // 网格中心锚点
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
     * 通常情况下网格原点为0，而索引0在底部，如果需要0在原点首先需要将偏移量向上移动整个网格尺寸的一半
     * @param {intVec3} index
     * @return {int}
     */
    GridAbsorb_Private.prototype.getGridPositionByIndex = function (index) {
        var self = this;
        function getPos(axis) {
            // 索引限制
            var axisIndex = DevelopersToolGlobal_1.mathMacro.PMod(Math.floor(index[axis]), self._GridAxisCellNum[axis]);
            // 索引坐标
            var axisPos = axisIndex * self._CellSize[axis] + self._GridOffset[axis];
            // 归一化
            var normalPos = DevelopersToolGlobal_1.mathMacro.PMod(axisPos / self._GridSize[axis], 1);
            normalPos - normalPos - Math.floor(normalPos);
            return (normalPos + (self._GridEdgeAnchor[axis] - .5)) * self._GridSize[axis];
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
            var Anchor = anchor.normalize();
            Anchor.x = Math.abs(Anchor.x);
            Anchor.y = Math.abs(Anchor.y);
            Anchor.z = Math.abs(Anchor.z);
            this._GridEdgeAnchor = Anchor;
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
    /**
     * 设置坐标
     * 用于与官方设置方法匹配
     */
    GridAbsorb.prototype.setPosition = function (pos) {
        this._GridOffset = pos;
    };
    /**
     * 获取坐标
     * 用于与官方设置方法匹配
     */
    GridAbsorb.prototype.getPosition = function () {
        return this._GridOffset;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcR3JpZEFkc29yYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBZ0U7QUFDaEU7SUFHSTs7O09BR0c7SUFDSCw0QkFBWSxPQUFpQixFQUFFLFFBQWtCO1FBZ0JqRCxPQUFPO1FBQ0csY0FBUyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxXQUFXO1FBQ0QsZ0JBQVcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsUUFBUTtRQUNFLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDcEMsU0FBUztRQUNDLHFCQUFnQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxTQUFTO1FBQ0Msb0JBQWUsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUF4QmpELElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztZQUNoQyxJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ3hCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQ3pCLENBQUM7YUFDTDtTQUNKO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDNUIsVUFBVSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBWUQsZ0dBQWdHO0lBRWhHOzs7Ozs7O09BT0c7SUFDSSxtREFBc0IsR0FBN0IsVUFBMkQsS0FBUTtRQUMvRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsU0FBUyxNQUFNLENBQUMsSUFBWTtZQUN4QixPQUFPO1lBQ1AsSUFBSSxTQUFTLEdBQUcsZ0NBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5RSxPQUFPO1lBQ1AsSUFBSSxPQUFPLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RSxNQUFNO1lBQ04sSUFBSSxTQUFTLEdBQUcsZ0NBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0QsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLEtBQUssWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQixPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBTSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBTSxDQUFDO0lBQ2xDLENBQUM7SUE5RGdCLGlDQUFjLEdBQUcsSUFBSSxDQUFDO0lBZ0UzQyx5QkFBQztDQWpFRCxBQWlFQyxJQUFBO0FBQ0Q7SUFBd0MsOEJBQWtCO0lBQTFEOztJQTJIQSxDQUFDO0lBdEhHLHNCQUFrQixrQkFBSTtRQUh0Qjs7V0FFRzthQUNIO1lBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksVUFBVSxFQUFFLENBQUE7WUFDN0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQXVCLElBQWdCO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQy9CLENBQUM7OztPQU5BO0lBV0Qsc0JBQVcsOEJBQU07UUFIakI7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFrQixNQUFlO1lBQzdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxTQUFTLE1BQU0sQ0FBQyxJQUFZO2dCQUN4QixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3pFLENBQUM7OztPQVhBO0lBZ0JELHNCQUFXLGdDQUFRO1FBSG5COztXQUVHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBb0IsSUFBYTtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDOzs7T0FOQTtJQVdELHNCQUFXLCtCQUFPO1FBSGxCOztXQUVHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFtQixHQUFZO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDaEMsQ0FBQzs7O09BTkE7SUFXRCxzQkFBVyxnQ0FBUTtRQUhuQjs7V0FFRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFDRDs7V0FFRzthQUNILFVBQW9CLElBQWE7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQzs7O09BTkE7SUFZRCxzQkFBVyw4QkFBTTtRQUpqQjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM1QixtQ0FBbUM7WUFDbkMsc0NBQXNDO1lBQ3RDLElBQUk7WUFDSixzQkFBc0I7WUFDdEIsdUNBQXVDO1lBQ3ZDLHVDQUF1QztZQUN2QyxzQ0FBc0M7WUFDdEMsS0FBSztRQUNULENBQUM7UUFDRDs7O1dBR0c7YUFDSCxVQUFrQixNQUFlO1lBQzdCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixtQ0FBbUM7WUFDbkMsd0NBQXdDO1lBQ3hDLHFEQUFxRDtZQUNyRCxnREFBZ0Q7WUFDaEQsSUFBSTtZQUNKLCtDQUErQztZQUMvQywrQ0FBK0M7WUFDL0MsK0NBQStDO1FBQ25ELENBQUM7OztPQW5CQTtJQXFCRDs7O09BR0c7SUFDSSxnQ0FBVyxHQUFsQixVQUFtQixHQUFZO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQTNIQSxBQTJIQyxDQTNIdUMsa0JBQWtCLEdBMkh6RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuY2xhc3MgR3JpZEFic29yYl9Qcml2YXRlIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0V4Y2x1c2l2ZUdyaWQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog572R5qC85a+56b2QXHJcbiAgICAgKiDliJvlu7rnmoTlkIzml7bvvIzlpoLmnpznsbvljZXkvovkuK3kuI3lrZjlnKjlrp7kvovvvIzliJnlsIbmraTlrp7kvovotYvkuojliLDnsbvljZXkvovkuK1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYXhpc051bT86IGNjLlZlYzMsIGNlbGxTaXplPzogY2MuVmVjMykge1xyXG4gICAgICAgIGlmIChheGlzTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0dyaWRBeGlzQ2VsbE51bSA9IGF4aXNOdW07XHJcbiAgICAgICAgICAgIGlmIChjZWxsU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fQ2VsbFNpemUgPSBjZWxsU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX0dyaWRTaXplID0gbmV3IGNjLlZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpc051bS54ICogY2VsbFNpemUueCxcclxuICAgICAgICAgICAgICAgICAgICBheGlzTnVtLnkgKiBjZWxsU2l6ZS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNOdW0ueiAqIGNlbGxTaXplLnpcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFHcmlkQWJzb3JiLl9FeGNsdXNpdmVHcmlkKSB7XHJcbiAgICAgICAgICAgIEdyaWRBYnNvcmIuX0V4Y2x1c2l2ZUdyaWQgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOaZtuiDnuWwuuWvuFxyXG4gICAgcHJvdGVjdGVkIF9DZWxsU2l6ZTogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDEwMCk7XHJcbiAgICAvLyDnvZHmoLzorqHnrpfljp/ngrnlgY/np7tcclxuICAgIHByb3RlY3RlZCBfR3JpZE9mZnNldDogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgLy8g572R5qC85oC75bC65a+4XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRTaXplOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIC8vIOWQhOi9tOaZtuiDnuaVsOmHj1xyXG4gICAgcHJvdGVjdGVkIF9HcmlkQXhpc0NlbGxOdW06IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygxMDApO1xyXG4gICAgLy8g572R5qC85Lit5b+D6ZSa54K5XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRFZGdlQW5jaG9yOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoLjUpO1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOe9keagvOafpeaJviAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5LuO5ZCE6L2057Si5byV6I635b6X572R5qC85Z2Q5qCHICBcclxuICAgICAqIGNvY29z5ZKMdW5pdHnpg73mmK956L205ZCR5LiK77yMeHrkuLrlubPpnaIgIFxyXG4gICAgICog5Li65LqG6YCC6YWN5bmz6Z2i5Z2Q5qCH77yMeuS4uua3seW6pui9tCAgXHJcbiAgICAgKiDpgJrluLjmg4XlhrXkuIvnvZHmoLzljp/ngrnkuLow77yM6ICM57Si5byVMOWcqOW6lemDqO+8jOWmguaenOmcgOimgTDlnKjljp/ngrnpppblhYjpnIDopoHlsIblgY/np7vph4/lkJHkuIrnp7vliqjmlbTkuKrnvZHmoLzlsLrlr7jnmoTkuIDljYpcclxuICAgICAqIEBwYXJhbSB7aW50VmVjM30gaW5kZXhcclxuICAgICAqIEByZXR1cm4ge2ludH1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEdyaWRQb3NpdGlvbkJ5SW5kZXg8VCBleHRlbmRzIGNjLlZlYzMgfCBjYy5WZWMyPihpbmRleDogVCk6IFQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmdW5jdGlvbiBnZXRQb3MoYXhpczogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgLy8g57Si5byV6ZmQ5Yi2XHJcbiAgICAgICAgICAgIGxldCBheGlzSW5kZXggPSBtbS5QTW9kKE1hdGguZmxvb3IoaW5kZXhbYXhpc10pLCBzZWxmLl9HcmlkQXhpc0NlbGxOdW1bYXhpc10pO1xyXG4gICAgICAgICAgICAvLyDntKLlvJXlnZDmoIdcclxuICAgICAgICAgICAgbGV0IGF4aXNQb3MgPSBheGlzSW5kZXggKiBzZWxmLl9DZWxsU2l6ZVtheGlzXSArIHNlbGYuX0dyaWRPZmZzZXRbYXhpc107XHJcbiAgICAgICAgICAgIC8vIOW9kuS4gOWMllxyXG4gICAgICAgICAgICBsZXQgbm9ybWFsUG9zID0gbW0uUE1vZChheGlzUG9zIC8gc2VsZi5fR3JpZFNpemVbYXhpc10sIDEpO1xyXG4gICAgICAgICAgICBub3JtYWxQb3MgLSBub3JtYWxQb3MgLSBNYXRoLmZsb29yKG5vcm1hbFBvcyk7XHJcbiAgICAgICAgICAgIHJldHVybiAobm9ybWFsUG9zICsgKHNlbGYuX0dyaWRFZGdlQW5jaG9yW2F4aXNdIC0gLjUpKSAqIHNlbGYuX0dyaWRTaXplW2F4aXNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeCA9IGdldFBvcygneCcpO1xyXG4gICAgICAgIGxldCB5ID0gZ2V0UG9zKCd5Jyk7XHJcbiAgICAgICAgaWYgKGluZGV4IGluc3RhbmNlb2YgY2MuVmVjMykge1xyXG4gICAgICAgICAgICBsZXQgeiA9IGdldFBvcygneicpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzMoeCwgeSwgeikgYXMgVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKHgsIHkpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRBYnNvcmIgZXh0ZW5kcyBHcmlkQWJzb3JiX1ByaXZhdGUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6Z2Z5oCB5ZSv5LiA572R5qC85a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdyaWQoKSB7XHJcbiAgICAgICAgdGhpcy5fRXhjbHVzaXZlR3JpZCA9IHRoaXMuX0V4Y2x1c2l2ZUdyaWQgfHwgbmV3IEdyaWRBYnNvcmIoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9FeGNsdXNpdmVHcmlkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblrp7kvovorr7nva7liLDpnZnmgIHllK/kuIDnvZHmoLzlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgZ3JpZChncmlkOiBHcmlkQWJzb3JiKSB7XHJcbiAgICAgICAgdGhpcy5fRXhjbHVzaXZlR3JpZCA9IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzlgY/np7vph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvZmZzZXQoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWBj+enu+mHjyAgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb2Zmc2V0KG9mZnNldDogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbmV3T2Zmc2V0ID0gdGhpcy5fR3JpZE9mZnNldC5hZGQob2Zmc2V0KTtcclxuICAgICAgICBmdW5jdGlvbiB2ZWNNb2QoYXhpczogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld09mZnNldFtheGlzXSAlIHNlbGYuZ3JpZFNpemVbYXhpc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX0dyaWRPZmZzZXQgPSBuZXcgY2MuVmVjMyh2ZWNNb2QoJ3gnKSwgdmVjTW9kKCd5JyksIHZlY01vZCgneicpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Y2V5YWD5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2VsbFNpemUoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NlbGxTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ljZXlhYPmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjZWxsU2l6ZShzaXplOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5fQ2VsbFNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC86L205pm25qC85pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2VsbE51bSgpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZEF4aXNDZWxsTnVtO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nvZHmoLzovbTmmbbmoLzmlbDph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjZWxsTnVtKG51bTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0dyaWRBeGlzQ2VsbE51bSA9IG51bTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlue9keagvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdyaWRTaXplKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkU2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ3JpZFNpemUoc2l6ZTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0dyaWRTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlue9keagvOi+uee8mOmUmueCuSAgXHJcbiAgICAgKiDlj5blgLzlnKhbMCwgMV1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhbmNob3IoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRFZGdlQW5jaG9yO1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvQWxpZ2UodmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAodmVjLnggLSB2ZWMueSArIDEpIC8gMjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBjYy5WZWMzKFxyXG4gICAgICAgIC8vICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1gpLFxyXG4gICAgICAgIC8vICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1kpLFxyXG4gICAgICAgIC8vICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1opXHJcbiAgICAgICAgLy8gKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC86L6557yY6ZSa54K5XHJcbiAgICAgKiDlj5blgLzlnKhbMCwgMV3vvIzot5/pmo/lvJXmk45cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhbmNob3IoYW5jaG9yOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgbGV0IEFuY2hvciA9IGFuY2hvci5ub3JtYWxpemUoKTtcclxuICAgICAgICBBbmNob3IueCA9IE1hdGguYWJzKEFuY2hvci54KTtcclxuICAgICAgICBBbmNob3IueSA9IE1hdGguYWJzKEFuY2hvci55KTtcclxuICAgICAgICBBbmNob3IueiA9IE1hdGguYWJzKEFuY2hvci56KTtcclxuICAgICAgICB0aGlzLl9HcmlkRWRnZUFuY2hvciA9IEFuY2hvcjtcclxuICAgICAgICAvLyBmdW5jdGlvbiB0b0FuY2hvcihudW06IG51bWJlcikge1xyXG4gICAgICAgIC8vICAgICBpZiAoIW51bSkgcmV0dXJuIG5ldyBjYy5WZWMyKC41KTtcclxuICAgICAgICAvLyAgICAgbGV0IGF4aXMgPSBNYXRoLm1heChNYXRoLm1pbihudW0sIDEpLCAwKSAtIC41O1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gbmV3IGNjLlZlYzIoLjUgLSBheGlzLCAuNSArIGF4aXMpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLl9HcmlkRWRnZUFuY2hvcl9YID0gdG9BbmNob3IoYW5jaG9yLngpO1xyXG4gICAgICAgIC8vIHRoaXMuX0dyaWRFZGdlQW5jaG9yX1kgPSB0b0FuY2hvcihhbmNob3IueSk7XHJcbiAgICAgICAgLy8gdGhpcy5fR3JpZEVkZ2VBbmNob3JfWiA9IHRvQW5jaG9yKGFuY2hvci56KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWdkOaghyAgXHJcbiAgICAgKiDnlKjkuo7kuI7lrpjmlrnorr7nva7mlrnms5XljLnphY1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHBvczogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0dyaWRPZmZzZXQgPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blnZDmoIcgIFxyXG4gICAgICog55So5LqO5LiO5a6Y5pa56K6+572u5pa55rOV5Yy56YWNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZE9mZnNldDtcclxuICAgIH1cclxufSJdfQ==
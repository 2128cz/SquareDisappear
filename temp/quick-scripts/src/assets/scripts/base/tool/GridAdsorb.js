"use strict";
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
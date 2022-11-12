"use strict";
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
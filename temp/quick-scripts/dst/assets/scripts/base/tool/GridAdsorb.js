
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
        // 网格计算原点偏移
        // protected _OriginOffset: cc.Vec3 = new cc.Vec3(0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcR3JpZEFkc29yYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBZ0U7QUFDaEU7SUFHSTs7O09BR0c7SUFDSCw0QkFBWSxPQUFpQixFQUFFLFFBQWtCO1FBZ0JqRCxPQUFPO1FBQ0csY0FBUyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxXQUFXO1FBQ0QsZ0JBQVcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsV0FBVztRQUNYLHFEQUFxRDtRQUNyRCxRQUFRO1FBQ0UsY0FBUyxHQUFZLElBQUksQ0FBQztRQUNwQyxTQUFTO1FBQ0MscUJBQWdCLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELFNBQVM7UUFDQyxvQkFBZSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQTFCakQsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1lBQ2hDLElBQUksUUFBUSxFQUFFO2dCQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FDeEIsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FDekIsQ0FBQzthQUNMO1NBQ0o7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtZQUM1QixVQUFVLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUNwQztJQUNMLENB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QUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLG1DQUFtQztZQUNuQyx3Q0FBd0M7WUFDeEMscURBQXFEO1lBQ3JELGdEQUFnRDtZQUNoRCxJQUFJO1lBQ0osK0NBQStDO1lBQy9DLCtDQUErQztZQUMvQywrQ0FBK0M7UUFDbkQsQ0FBQzs7O09BbkJBO0lBb0JMLGlCQUFDO0FBQUQsQ0EzR0EsQUEyR0MsQ0EzR3VDLGtCQUFrQixHQTJHekQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmNsYXNzIEdyaWRBYnNvcmJfUHJpdmF0ZSB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9FeGNsdXNpdmVHcmlkID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe9keagvOWvuem9kFxyXG4gICAgICog5Yib5bu655qE5ZCM5pe277yM5aaC5p6c57G75Y2V5L6L5Lit5LiN5a2Y5Zyo5a6e5L6L77yM5YiZ5bCG5q2k5a6e5L6L6LWL5LqI5Yiw57G75Y2V5L6L5LitXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGF4aXNOdW0/OiBjYy5WZWMzLCBjZWxsU2l6ZT86IGNjLlZlYzMpIHtcclxuICAgICAgICBpZiAoYXhpc051bSkge1xyXG4gICAgICAgICAgICB0aGlzLl9HcmlkQXhpc0NlbGxOdW0gPSBheGlzTnVtO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX0NlbGxTaXplID0gY2VsbFNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9HcmlkU2l6ZSA9IG5ldyBjYy5WZWMzKFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNOdW0ueCAqIGNlbGxTaXplLngsXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpc051bS55ICogY2VsbFNpemUueSxcclxuICAgICAgICAgICAgICAgICAgICBheGlzTnVtLnogKiBjZWxsU2l6ZS56XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghR3JpZEFic29yYi5fRXhjbHVzaXZlR3JpZCkge1xyXG4gICAgICAgICAgICBHcmlkQWJzb3JiLl9FeGNsdXNpdmVHcmlkID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDmmbbog57lsLrlr7hcclxuICAgIHByb3RlY3RlZCBfQ2VsbFNpemU6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygxMDApO1xyXG4gICAgLy8g572R5qC86K6h566X5Y6f54K55YGP56e7XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRPZmZzZXQ6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIC8vIOe9keagvOiuoeeul+WOn+eCueWBj+enu1xyXG4gICAgLy8gcHJvdGVjdGVkIF9PcmlnaW5PZmZzZXQ6IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygwKTtcclxuICAgIC8vIOe9keagvOaAu+WwuuWvuFxyXG4gICAgcHJvdGVjdGVkIF9HcmlkU2l6ZTogY2MuVmVjMyA9IG51bGw7XHJcbiAgICAvLyDlkITovbTmmbbog57mlbDph49cclxuICAgIHByb3RlY3RlZCBfR3JpZEF4aXNDZWxsTnVtOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMTAwKTtcclxuICAgIC8vIOe9keagvOS4reW/g+mUmueCuVxyXG4gICAgcHJvdGVjdGVkIF9HcmlkRWRnZUFuY2hvcjogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKC41KTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnvZHmoLzmn6Xmib4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOS7juWQhOi9tOe0ouW8leiOt+W+l+e9keagvOWdkOaghyAgXHJcbiAgICAgKiBjb2Nvc+WSjHVuaXR56YO95piveei9tOWQkeS4iu+8jHh65Li65bmz6Z2iICBcclxuICAgICAqIOS4uuS6humAgumFjeW5s+mdouWdkOagh++8jHrkuLrmt7HluqbovbQgIFxyXG4gICAgICog6YCa5bi45oOF5Ya15LiL572R5qC85Y6f54K55Li6MO+8jOiAjOe0ouW8lTDlnKjlupXpg6jvvIzlpoLmnpzpnIDopoEw5Zyo5Y6f54K56aaW5YWI6ZyA6KaB5bCG5YGP56e76YeP5ZCR5LiK56e75Yqo5pW05Liq572R5qC85bC65a+455qE5LiA5Y2KXHJcbiAgICAgKiBAcGFyYW0ge2ludFZlYzN9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJuIHtpbnR9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRHcmlkUG9zaXRpb25CeUluZGV4PFQgZXh0ZW5kcyBjYy5WZWMzIHwgY2MuVmVjMj4oaW5kZXg6IFQpOiBUIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UG9zKGF4aXM6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIC8vIOe0ouW8lemZkOWItlxyXG4gICAgICAgICAgICBsZXQgYXhpc0luZGV4ID0gbW0uUE1vZChNYXRoLmZsb29yKGluZGV4W2F4aXNdKSwgc2VsZi5fR3JpZEF4aXNDZWxsTnVtW2F4aXNdKTtcclxuICAgICAgICAgICAgLy8g57Si5byV5Z2Q5qCHXHJcbiAgICAgICAgICAgIGxldCBheGlzUG9zID0gYXhpc0luZGV4ICogc2VsZi5fQ2VsbFNpemVbYXhpc10gKyBzZWxmLl9HcmlkT2Zmc2V0W2F4aXNdO1xyXG4gICAgICAgICAgICAvLyDlvZLkuIDljJZcclxuICAgICAgICAgICAgbGV0IG5vcm1hbFBvcyA9IG1tLlBNb2QoYXhpc1BvcyAvIHNlbGYuX0dyaWRTaXplW2F4aXNdLCAxKTtcclxuICAgICAgICAgICAgbm9ybWFsUG9zIC0gbm9ybWFsUG9zIC0gTWF0aC5mbG9vcihub3JtYWxQb3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gKG5vcm1hbFBvcyArIChzZWxmLl9HcmlkRWRnZUFuY2hvcltheGlzXSAtIC41KSkgKiBzZWxmLl9HcmlkU2l6ZVtheGlzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHggPSBnZXRQb3MoJ3gnKTtcclxuICAgICAgICBsZXQgeSA9IGdldFBvcygneScpO1xyXG4gICAgICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIGNjLlZlYzMpIHtcclxuICAgICAgICAgICAgbGV0IHogPSBnZXRQb3MoJ3onKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKHgsIHksIHopIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih4LCB5KSBhcyBUO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQWJzb3JiIGV4dGVuZHMgR3JpZEFic29yYl9Qcml2YXRlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumdmeaAgeWUr+S4gOe9keagvOWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBncmlkKCkge1xyXG4gICAgICAgIHRoaXMuX0V4Y2x1c2l2ZUdyaWQgPSB0aGlzLl9FeGNsdXNpdmVHcmlkIHx8IG5ldyBHcmlkQWJzb3JiKClcclxuICAgICAgICByZXR1cm4gdGhpcy5fRXhjbHVzaXZlR3JpZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bCG5a6e5L6L6K6+572u5Yiw6Z2Z5oCB5ZSv5LiA572R5qC85a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGdyaWQoZ3JpZDogR3JpZEFic29yYikge1xyXG4gICAgICAgIHRoaXMuX0V4Y2x1c2l2ZUdyaWQgPSBncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC85YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb2Zmc2V0KCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nvZHmoLzlgY/np7vph48gIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9mZnNldChvZmZzZXQ6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG5ld09mZnNldCA9IHRoaXMuX0dyaWRPZmZzZXQuYWRkKG9mZnNldCk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVjTW9kKGF4aXM6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdPZmZzZXRbYXhpc10gJSBzZWxmLmdyaWRTaXplW2F4aXNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9HcmlkT2Zmc2V0ID0gbmV3IGNjLlZlYzModmVjTW9kKCd4JyksIHZlY01vZCgneScpLCB2ZWNNb2QoJ3onKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWNleWFg+agvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNlbGxTaXplKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DZWxsU2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Y2V5YWD5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2VsbFNpemUoc2l6ZTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0NlbGxTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlue9keagvOi9tOaZtuagvOaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNlbGxOdW0oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRBeGlzQ2VsbE51bTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC86L205pm25qC85pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2VsbE51bShudW06IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLl9HcmlkQXhpc0NlbGxOdW0gPSBudW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmlkU2l6ZSgpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZFNpemU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdyaWRTaXplKHNpemU6IGNjLlZlYzMpIHtcclxuICAgICAgICB0aGlzLl9HcmlkU2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzovrnnvJjplJrngrkgIFxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFdXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYW5jaG9yKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkRWRnZUFuY2hvcjtcclxuICAgICAgICAvLyBmdW5jdGlvbiB0b0FsaWdlKHZlYzogY2MuVmVjMikge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gKHZlYy54IC0gdmVjLnkgKyAxKSAvIDI7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBuZXcgY2MuVmVjMyhcclxuICAgICAgICAvLyAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9YKSxcclxuICAgICAgICAvLyAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9ZKSxcclxuICAgICAgICAvLyAgICAgdG9BbGlnZSh0aGlzLl9HcmlkRWRnZUFuY2hvcl9aKVxyXG4gICAgICAgIC8vICk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOi+uee8mOmUmueCuVxyXG4gICAgICog5Y+W5YC85ZyoWzAsIDFd77yM6Lef6ZqP5byV5pOOXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYW5jaG9yKGFuY2hvcjogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBBbmNob3IgPSBhbmNob3Iubm9ybWFsaXplKCk7XHJcbiAgICAgICAgQW5jaG9yLnggPSBNYXRoLmFicyhBbmNob3IueCk7XHJcbiAgICAgICAgQW5jaG9yLnkgPSBNYXRoLmFicyhBbmNob3IueSk7XHJcbiAgICAgICAgQW5jaG9yLnogPSBNYXRoLmFicyhBbmNob3Iueik7XHJcbiAgICAgICAgdGhpcy5fR3JpZEVkZ2VBbmNob3IgPSBBbmNob3I7XHJcbiAgICAgICAgLy8gZnVuY3Rpb24gdG9BbmNob3IobnVtOiBudW1iZXIpIHtcclxuICAgICAgICAvLyAgICAgaWYgKCFudW0pIHJldHVybiBuZXcgY2MuVmVjMiguNSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBheGlzID0gTWF0aC5tYXgoTWF0aC5taW4obnVtLCAxKSwgMCkgLSAuNTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKC41IC0gYXhpcywgLjUgKyBheGlzKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5fR3JpZEVkZ2VBbmNob3JfWCA9IHRvQW5jaG9yKGFuY2hvci54KTtcclxuICAgICAgICAvLyB0aGlzLl9HcmlkRWRnZUFuY2hvcl9ZID0gdG9BbmNob3IoYW5jaG9yLnkpO1xyXG4gICAgICAgIC8vIHRoaXMuX0dyaWRFZGdlQW5jaG9yX1ogPSB0b0FuY2hvcihhbmNob3Iueik7XHJcbiAgICB9XHJcbn0iXX0=
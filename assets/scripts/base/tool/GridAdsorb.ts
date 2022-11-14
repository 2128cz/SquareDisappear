import { mathMacro as mm } from '../class/DevelopersToolGlobal';
class GridAbsorb_Private {
    protected static _ExclusiveGrid = null;

    /**
     * 网格对齐
     * 创建的同时，如果类单例中不存在实例，则将此实例赋予到类单例中
     */
    constructor(axisNum?: cc.Vec3, cellSize?: cc.Vec3) {
        if (axisNum) {
            this._GridAxisCellNum = axisNum;
            if (cellSize) {
                this._CellSize = cellSize;
                this._GridSize = new cc.Vec3(
                    axisNum.x * cellSize.x,
                    axisNum.y * cellSize.y,
                    axisNum.z * cellSize.z
                );
            }
        }
        if (!GridAbsorb._ExclusiveGrid) {
            GridAbsorb._ExclusiveGrid = this;
        }
    }
    // 晶胞尺寸
    protected _CellSize: cc.Vec3 = new cc.Vec3(100);
    // 网格计算原点偏移
    protected _GridOffset: cc.Vec3 = new cc.Vec3(0);
    // 网格总尺寸
    protected _GridSize: cc.Vec3 = null;
    // 各轴晶胞数量
    protected _GridAxisCellNum: cc.Vec3 = new cc.Vec3(100);
    // + -
    protected _GridEdgeAnchor: cc.Vec3 = new cc.Vec3(.5)


    // SIGNPOST 网格查找                                                                                

    /** 
     * 从各轴索引获得网格坐标  
     * cocos和unity都是y轴向上，xz为平面  
     * 为了适配平面坐标，z为深度轴
     * @param {intVec3} index
     * @return {int}
     */
    public getGridPositionByIndex<T extends cc.Vec3 | cc.Vec2>(index: T): T {
        let self = this;
        function getPos(axis: string): number {
            return (
                (Math.floor(index[axis]) % self._GridAxisCellNum[axis]) *
                self._CellSize[axis] + self._GridOffset[axis]
            ) % self._GridSize[axis] +
                self._GridEdgeAnchor[axis] * self._GridSize[axis];
        }
        let x = getPos('x');
        let y = getPos('y');
        if (index instanceof cc.Vec3) {
            let z = getPos('z');
            return new cc.Vec3(x, y, z) as T;
        }
        return new cc.Vec2(x, y) as T;
    }

}
export default class GridAbsorb extends GridAbsorb_Private {

    /**
     * 获取静态唯一网格实例
     */
    public static get grid() {
        this._ExclusiveGrid = this._ExclusiveGrid || new GridAbsorb()
        return this._ExclusiveGrid;
    }
    /**
     * 将实例设置到静态唯一网格实例
     */
    public static set grid(grid: GridAbsorb) {
        this._ExclusiveGrid = grid;
    }

    /**
     * 获取网格偏移量
     */
    public get offset(): cc.Vec3 {
        return this._GridOffset;
    }
    /**
     * 设置网格偏移量  
     */
    public set offset(offset: cc.Vec3) {
        let self = this;
        let newOffset = this._GridOffset.add(offset);
        function vecMod(axis: string): number {
            return newOffset[axis] % self.gridSize[axis];
        }
        this._GridOffset = new cc.Vec3(vecMod('x'), vecMod('y'), vecMod('z'))
    }

    /**
     * 获取单元格尺寸
     */
    public get cellSize(): cc.Vec3 {
        return this._CellSize;
    }
    /**
     * 设置单元格尺寸
     */
    public set cellSize(size: cc.Vec3) {
        this._CellSize = size;
    }

    /**
     * 获取网格轴晶格数量
     */
    public get cellNum(): cc.Vec3 {
        return this._GridAxisCellNum;
    }
    /**
     * 设置网格轴晶格数量
     */
    public set cellNum(num: cc.Vec3) {
        this._GridAxisCellNum = num;
    }

    /**
     * 获取网格尺寸
     */
    public get gridSize(): cc.Vec3 {
        return this._GridSize;
    }
    /**
     * 设置网格尺寸
     */
    public set gridSize(size: cc.Vec3) {
        this._GridSize = size;
    }

    /**
     * 获取网格边缘锚点  
     * 取值在[0, 1]
     */
    public get anchor(): cc.Vec3 {
        return this._GridEdgeAnchor;
        // function toAlige(vec: cc.Vec2) {
        //     return (vec.x - vec.y + 1) / 2;
        // }
        // return new cc.Vec3(
        //     toAlige(this._GridEdgeAnchor_X),
        //     toAlige(this._GridEdgeAnchor_Y),
        //     toAlige(this._GridEdgeAnchor_Z)
        // );
    }
    /**
     * 设置网格边缘锚点
     * 取值在[0, 1]，跟随引擎
     */
    public set anchor(anchor: cc.Vec3) {
        let Anchor = anchor.normalize();
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
    }
}
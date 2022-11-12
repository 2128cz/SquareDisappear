export default class GridAbsorb {

    protected static _ExclusiveGrid: GridAbsorb = null;
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
     * 网格对齐
     * 创建的同时，如果类单例中不存在实例，则将此实例赋予到类单例中
     */
    constructor(axisNum?: cc.Vec3, cellSize?: cc.Vec3) {
        if (axisNum) {
            this.cellNum = axisNum;
            if (cellSize)
                this.cellSize = cellSize;
        }
        if (!GridAbsorb._ExclusiveGrid) {
            GridAbsorb._ExclusiveGrid = this;
        }
    }

    protected _CellSize: cc.Vec3 = new cc.Vec3(100);
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

    protected _GridOffset: cc.Vec3 = new cc.Vec3(0);
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
        let newOffset = this._GridOffset.add(offset);
        function vecMod(axis: string): number {
            return newOffset[axis] % this.gridSize[axis];
        }
        this._GridOffset = new cc.Vec3(vecMod('x'), vecMod('y'), vecMod('z'))
    }

    protected _GridSize: cc.Vec3 = new cc.Vec3(0);
    /**
     * 获取网格偏移量
     */
    public get gridSize(): cc.Vec3 {
        return this._GridOffset;
    }
    /**
     * 设置网格偏移量
     */
    public set gridSize(offset: cc.Vec3) {
        this._GridOffset = offset;
    }

    protected _GridAxisCellNum: cc.Vec3 = new cc.Vec3(100);
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

    // + -
    protected _GridEdgeAnchor_X: cc.Vec2 = new cc.Vec2(.5, .5);
    protected _GridEdgeAnchor_Y: cc.Vec2 = new cc.Vec2(.5, .5);
    protected _GridEdgeAnchor_Z: cc.Vec2 = new cc.Vec2(.5, .5);
    /**
     * 获取网格边缘锚点  
     * 取值在[0, 1]
     */
    public get anchor(): cc.Vec3 {
        function toAlige(vec: cc.Vec2) {
            return (vec.x - vec.y + 1) / 2;
        }
        return new cc.Vec3(
            toAlige(this._GridEdgeAnchor_X),
            toAlige(this._GridEdgeAnchor_Y),
            toAlige(this._GridEdgeAnchor_Z)
        );
    }
    /**
     * 设置网格边缘锚点
     * 取值在[0, 1]，跟随引擎
     */
    public set anchor(anchor: cc.Vec3) {
        function toAnchor(num: number) {
            if (!num) return new cc.Vec2(.5);
            let axis = Math.max(Math.min(num, 1), 0) - .5;
            return new cc.Vec2(.5 - axis, .5 + axis);
        }
        this._GridEdgeAnchor_X = toAnchor(anchor.x);
        this._GridEdgeAnchor_Y = toAnchor(anchor.y);
        this._GridEdgeAnchor_Z = toAnchor(anchor.z);
    }

    // SIGNPOST 网格查找                                                                                

    /** 
     * 从各轴索引获得网格坐标
     * cocos和unity都是y轴向上，xz为平面
     * 为了适配平面坐标，z为深度轴
     * @param {intVec3} index
     * @return {int}
     */
    public getGridPositionByIndex<T extends cc.Vec3 | cc.Vec2>(index: T): T {
        function getPos(axis) {
            return (Math.floor(index[axis]) % this.cellNum[axis]) // 唯一不稳定因素
                * this.cellSize[axis] + this.offset[axis];
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
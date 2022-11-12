export interface IWarehouseGlobalInterface {
    [key: string]: cc.Node |
    cc.TiledMap |
    cc.ParticleSystem |
    cc.VideoPlayer |
    cc.WebView |
    cc.Sprite |
    cc.RenderTexture |
    cc.Texture2D |
    cc.Prefab |
    cc.AssetManager | {};
}
export interface IToolGlobalInterface {
    [key: string]: any;
}
export interface IOtherGlobalInterface {
    [key: string]: any;
}
/**
 * 层通用标识接口 
 * cc.Node[number]
 */
export interface IganeralLayerInterface {
    [key: string]: cc.Node;
}
export interface IopenScriptInterface {
    [key: string]: any;
}
export interface IinstanceInterface {
    [key: number]: cc.Component | cc.Node;
}
// import { DevelopersToolGlobal as ccvv } from './DevelopersToolGlobal';
export class DevelopersToolGlobal {

    /**
     * 仓库全局实例
     * 存放load时载入的数据
     */
    protected static _Global_Warehouse: IWarehouseGlobalInterface = null;

    public static get warehouse() {
        this._Global_Warehouse = this._Global_Warehouse || {};
        return this._Global_Warehouse;
    }

    public static set warehouse(value: IWarehouseGlobalInterface) {
        this._Global_Warehouse = value;
    }
    /**
     * 加载资源目录
     */
    public static get loadResourcescatalog() {
        return {
            // "url": { type: res type, url: "save url" },
            //加载音乐音效资源
            "sounds": { type: cc.AudioClip, url: "sounds" },
            //加载预制件资源
            "prefabs": { type: cc.Prefab, url: "prefabs" },
            //加载图集资源
            // "atlas": { type: cc.SpriteAtlas, url: "atlas" },
            //加载单个精灵资源
            "frames": { type: cc.SpriteFrame, url: "frames" },
            //加载分享图
            "share": { type: cc.SpriteFrame, url: "share" },
        }
    }
    public static set loadResourcescatalog(value) {
        cc.error("不允许修改资源目录");
    }



    /**
     * 工具全局实例
     * 可以注入其他工具类
     */
    protected static _Global_Tool: IToolGlobalInterface = null;

    public static get tool() {
        this._Global_Tool = this._Global_Tool || {};
        return this._Global_Tool;
    }
    public static set tool(value: IToolGlobalInterface) {
        this._Global_Tool = value;
    }



    /**
     * 杂项全局实例
     * 可以注入其他项目
     */
    protected static _Global_Other: IOtherGlobalInterface = null;

    public static get other() {
        this._Global_Other = this._Global_Other || {};
        return this._Global_Other;
    }
    public static set other(value: IOtherGlobalInterface) {
        this._Global_Other = value;
    }



    /**
     * 游戏基本层全局实例
     * 只能注入cc.Node
     */
    protected static _Global_GenralLayer: IganeralLayerInterface = null;
    /**
     * 获取所有层
     */
    public static get layers() {
        this._Global_GenralLayer = this._Global_GenralLayer || {};
        return this._Global_GenralLayer;
    }
    /**
     * 设置所有层
     */
    public static set layers(value: IganeralLayerInterface) {
        this._Global_GenralLayer = value;
    }
    /**
     * 获取底层
     */
    public static get layer() {
        return this.layers[0];
    }
    /**
     * 添加的新节点
     */
    public static set layer(value: cc.Node) {
        let key = Object.keys(this._Global_GenralLayer || {}).length;
        this.layers[key.toString()] = value;
    }



    /**
     * 游戏基本层全局脚本
     * 只能注入cc.component，不过实际上并没有进行限制
     */
    protected static _Global_OpenScript: IopenScriptInterface = null;
    protected static _OpenScript_FristName: string = null;
    public static get scripts() {
        this._Global_OpenScript = this._Global_OpenScript || {};
        return this._Global_OpenScript;
    }
    public static set script(value) {
        if (!value) return;
        let key: string;
        if (typeof value === 'object') {
            key = value.name;
            if (!this._OpenScript_FristName) this._OpenScript_FristName = key;
        }
        else {
            key = (Object.keys(this._Global_OpenScript || {}).length).toString();
        }
        this.scripts[key] = value;
    }
    /**
     * 清空脚本
     */
    public static script_Clean() {
        this._OpenScript_FristName = null;
        this._Global_OpenScript = {};
    }
    /**
     * 获得所有脚本名称
     */
    public static get scriptName() {
        if (!this._Global_OpenScript) return null;
        return Object.keys(this._Global_OpenScript);
    }
    /**
     * 获取第一个加入的脚本
     */
    public static get fristScript() {
        return this._Global_OpenScript[this._OpenScript_FristName];
    }



    /**
     * 全局实例
     */
    protected static _Global_Instance = <IinstanceInterface>{};
    protected static getName(inst: cc.Node) {
        return inst.name + inst['_id'].replace(/\./g, "");
    }
    /**
     * 获取全部实例
     */
    public static get instances(): IinstanceInterface {
        this._Global_Instance = this._Global_Instance || <IinstanceInterface>{};
        return this._Global_Instance;
    }
    /**
     * 添加实例，用实例的名称与ID作键名
     */
    public static set instance(value: cc.Node) {
        this.instance[this.getName(value)] = value;
    }
    /**
     * 删除实例
     * 如果未指定有效值则为清除
     */
    public static set instance_remove(value) {
        if (!value) this._Global_Instance = <IinstanceInterface>{};
        else
            this.instance[this.getName(value)] = value;
    }
    /**
     * 根据名称获取实例 
     * 如果没有使用自定义名称，则默认用实例ID作为名称，这可能与任何名称常量不符
     */
    public static getInstanceByName(name: string | number) {
        return this._Global_Instance[name];
    }
    /**
     * 根据名称设置实例
     */
    public static setInstanceByName(name: string | number, inst: cc.Component | cc.Node) {
        this._Global_Instance[name] = inst;
    }

    /**
     * 全局元组
     */
    public static _Global_Tuple = [];
    /**
     * 获取元组
     */
    public static get tuple(): any[] {
        return this._Global_Tuple;
    }
    /**
     * 元组加入一个项目  
     * 如果加入一个无效的值，比如布尔，undefined，unll，将清空这个元组  
     * 加入一个空数组或是空对象是有效的，所以会作为元组的一个值加入
     */
    public static set tuple(value: object) {
        if (!value || typeof value == 'boolean') this._Global_Tuple = [];
        this._Global_Tuple.push(value);
    }
    /**
     * 元组加入独有项目
     * 返回这个项目是否存在
     */
    public static tupleOnly(value: object) {
        if (this._Global_Tuple.indexOf(value))
            return true;
        else
            this.tuple = value;
        return false;
    }
    /**
     * 移除元组一个项目
     */
    public static set tuple_remove(value) {
        this._Global_Tuple.filter((element, index, array) => { element != value });
    }
}
// import { mathMacro as mm } from '../base/class/DevelopersToolGlobal';
export class mathMacro {
    // 返回随机的整数，范围在[0, x)
    public static get random_uint2(): number { return Math.floor(Math.random() * 2); }
    public static get random_uint3(): number { return Math.floor(Math.random() * 3); }
    public static get random_uint4(): number { return Math.floor(Math.random() * 4); }
    public static get random_uint5(): number { return Math.floor(Math.random() * 5); }
    public static get random_uint6(): number { return Math.floor(Math.random() * 6); }
    public static get random_uint7(): number { return Math.floor(Math.random() * 7); }
    public static get random_uint8(): number { return Math.floor(Math.random() * 8); }
    public static get random_uint9(): number { return Math.floor(Math.random() * 9); }
    public static get random_uint1(): number { return Math.floor(Math.random() * 10); }
    /**
     * 一维限制在范围中
     * @param {number} num 输入值
     * @param {number} size 范围
     * @param {number} align 对齐位置，默认0表示在范围的中间，-1表示与左对齐，最小为0，最大为size，1相反
     * @param {number} offset 范围偏移
     * @returns 返回限制后的值
     */
    public static clamp(num, size, align, offset) {
        let sature = ((align || 0) + 1) / 2;
        let min = 0 - (sature * size) + (offset || 0);
        let max = (1 - sature) * size + (offset || 0);
        return Math.max(Math.min(num, max), min);
    }
    /**
     * 0矢量
     */
    constructor()
    /**
     * @en Representation of RGBA colors.<br/>
     * Each color component is an integer value with a range from 0 to 255.<br/>
     * @zh 通过 Red、Green、Blue 颜色通道表示颜色，并通过 Alpha 通道表示不透明度。<br/>
     * 每个通道都为取值范围 [0, 255] 的整数。<br/>
     */
    constructor(num: cc.Color)
    /**
     * @en Mathematical 3x3 matrix.
     * @zh 表示三维（3x3）矩阵。
     */
    constructor(num: cc.Mat3)
    /**
     * @en Mathematical 4x4 matrix.
     * @zh 表示四维（4x4）矩阵。
     */
    constructor(num: cc.Mat4)
    /**
     * @en
     * A 2D rectangle defined by x, y position and width, height.
     * @zh
     * 轴对齐矩形。
     * 矩形内的所有点都大于等于矩形的最小点 (xMin, yMin) 并且小于等于矩形的最大点 (xMax, yMax)。
     * 矩形的宽度定义为 xMax - xMin；高度定义为 yMax - yMin。
     */
    constructor(num: cc.Rect)
    /**
     * @en quaternion
     * @zh 四元数
     */
    constructor(num: cc.Quat)
    /**
     * @en Two dimensional size type representing the width and height.
     * @zh 二维尺寸。
     */
    constructor(num: cc.Size)
    /**
     * @en Representation of 2D vectors and points.
     * @zh 二维向量。
     */
    constructor(num: cc.Vec2)
    /**
     * @en Representation of 3D vectors and points.
     * @zh 三维向量。
     */
    constructor(num: cc.Vec3)
    /**
     * @en Representation of four-dimensional vectors.
     * @zh 四维向量。
     */
    constructor(num: cc.Vec4)
    /**
     * @en object.
     * @zh 包含x,y,z,w等属性名的对象。
     */
    constructor(num: object)
    /**
     * @en array.
     * @zh 数组。
     */
    constructor(num: number[])
    /**
     * @en :)
     * @zh 逐个定义哦，亲。
     */
    // constructor(x?: number, y?: number, z?: number, w?: number)
    /**
     * @en this is gonna... Is this supposed to... Define one by one! ? . Oh, don't worry about me. I copied it from an official document ;P
     * @zh 逐个定义，千万不要这么做，但如果你做了，那就会发生很可怕的事情，比如说...变成矩阵
     */
    constructor(m00?: number, m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number,)
    constructor(...num) {
        let isNumber = (value) => { return typeof value === 'number' && !isNaN(value); }
        if (!num[0]) {
            this.mnum['x'] = 0;
            this.mnum['y'] = 0;
            this.mnum['z'] = 0;
            this.mnum['w'] = 0;
        }
        else if (num[0].x) {
            this.mnum['x'] = isNumber(num[0].x) ? num[0].x : 0;
            this.mnum['y'] = isNumber(num[0].y) ? num[0].y : 0;
            this.mnum['z'] = isNumber(num[0].z) ? num[0].z : 0;
            this.mnum['w'] = isNumber(num[0].w) ? num[0].w : 0;
        }
        else if (num[0][0]) {
            this.mnum['x'] = isNumber(num[0][0]) ? num[0][0] : 0;
            this.mnum['y'] = isNumber(num[0][1]) ? num[0][1] : 0;
            this.mnum['z'] = isNumber(num[0][2]) ? num[0][2] : 0;
            this.mnum['w'] = isNumber(num[0][3]) ? num[0][3] : 0;
        }
        else if (num[0] instanceof cc.Size) {
            this.mnum['x'] = isNumber(num[0].width) ? num[0].width : 0;
            this.mnum['y'] = isNumber(num[0].height) ? num[0].height : 0;
        }
        else if (num[0] instanceof cc.Color) {
            this.mnum['x'] = isNumber(num[0].r) ? num[0].r : 0;
            this.mnum['y'] = isNumber(num[0].g) ? num[0].g : 0;
            this.mnum['z'] = isNumber(num[0].b) ? num[0].b : 0;
            this.mnum['w'] = isNumber(num[0].a) ? num[0].a : 0;
        }
        else if (num[0] instanceof cc.Mat3) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
        }
        else if (num[0] instanceof cc.Mat4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
            this.mnum['m09'] = num[0]['m09'];
            this.mnum['m10'] = num[0]['m10'];
            this.mnum['m11'] = num[0]['m11'];
            this.mnum['m12'] = num[0]['m12'];
            this.mnum['m13'] = num[0]['m13'];
            this.mnum['m14'] = num[0]['m14'];
            this.mnum['m15'] = num[0]['m15'];
        }
        else if (num.length <= 4) {
            this.mnum['x'] = num[0];
            this.mnum['y'] = num[1];
            this.mnum['z'] = num[2];
            this.mnum['w'] = num[3];
        }
        else if (num.length >= 4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0];
            this.mnum['m01'] = num[1];
            this.mnum['m02'] = num[2];
            this.mnum['m03'] = num[3];
            this.mnum['m04'] = num[4];
            this.mnum['m05'] = num[5];
            this.mnum['m06'] = num[6];
            this.mnum['m07'] = num[7];
            this.mnum['m08'] = num[8];
            this.mnum['m09'] = num[9];
            this.mnum['m10'] = num[10];
            this.mnum['m11'] = num[11];
            this.mnum['m12'] = num[12];
            this.mnum['m13'] = num[13];
            this.mnum['m14'] = num[14];
            this.mnum['m15'] = num[15];
        }
        // let out = { lrc: '2128cz' };
        // if (num[0] && typeof num[0] === 'object') { out['m00'] = isNumber(num[0].x) ? num[0].x : num[0].x || (isNumber(num[0][0]) ? num[0][0] : num[0].width || num[0].r || (isNumber(num[0]) ? num[0] : 0)); out['m01'] = isNumber(num[0].y) ? num[0].y : num[0].y || (isNumber(num[0][1]) ? num[0][1] : num[0].height || num[0].g || (isNumber(num[0]) ? num[0] : 0)); out['m02'] = isNumber(num[0].z) ? num[0].z : num[0].z || (isNumber(num[0][2]) ? num[0][2] : num[0].b || (isNumber(num[0]) ? num[0] : 0)); out['m03'] = isNumber(num[0].w) ? num[0].w : num[0].w || (isNumber(num[0][3]) ? num[0][3] : num[0].a || (isNumber(num[0]) ? num[0] : 0)); }
        // else { out['m00'] = num[0]; out['m01'] = num[1]; out['m02'] = num[2]; out['m03'] = num[3]; out['m04'] = num[4]; out['m05'] = num[5]; out['m06'] = num[6]; out['m07'] = num[7]; out['m08'] = num[8]; out['m09'] = num[9]; out['m10'] = num[10]; out['m11'] = num[11]; out['m12'] = num[12]; out['m13'] = num[13]; out['m14'] = num[14]; out['m15'] = num[15]; }
        // this.mnum = out;
    }

    private mnum: object = {};
    private _IsMat = false;
    public get isVec() { return !this._IsMat; }
    public get x(): number { return this.mnum['x'] }
    public get y(): number { return this.mnum['y'] }
    public get z(): number { return this.mnum['z'] }
    public get w(): number { return this.mnum['w'] }

    private static meanwhileAll = function <FUNC extends Function, T extends object>(func: FUNC, ...obj: T[]) {
        let out = {};
        Object.keys(obj[0]).forEach(element => {
            let array = [];
            for (let index = 0; index < obj.length; index++) {
                array.push(obj[index][element]);
            };
            out[element] = func(array, obj.length);
        });
        return out;
    }

    /**
     * 判断是否在盒体范围内
     * @param {*} origin 盒体坐标原点
     * @param {*} extent 盒体范围，这是盒体的各轴半径
     * @return 
     */
    public isInBox2<T extends cc.Vec2>(origin: T, extent: T): boolean {
        if (this.isVec) {
            let vec = mathMacro.meanwhileAll((a) => {
                let b = a[0] - a[1];
                return b >= -a[2] && b <= a[2];
            }, this.mnum, origin, extent);
            return vec['x'] && vec['y'];
        }
        return false;
    }

    /**
     * 模取正
     */
    public static PMod(a: number, b: number): number {
        let bb = Math.abs(b);
        let aa = a % bb;
        let out = a < 0 ? (1 - Math.abs(aa) / bb) * bb % bb : aa
        return isNaN(out) ? 0 : out;
    }

    /**
     * 快捷定义 
     * 但是就不支持逐个定义了
     * @param num 
     * @returns 
     */
    public static v(num: any): mathMacro {
        return new mathMacro(num);
    }

}
/**
 * 全局枚举
 * 对象可移动性
 */
export enum panelType {
    staitc, stationary, Moveable
}
/**
 * 全局枚举
 * 场景坐标空间枚举
 */
export enum ESceneCoordinateSpace {
    simulation, world, local
}
/**
 * 全局枚举
 * 控件坐标空间枚举
 */
export enum EWidgetCoordinateSpace {
    screen, scene
}
/**
 * 全局枚举
 * 动画物理空间枚举
 */
export enum EAnimPhySimSpace {
    component, actor, scene, relativeRoot, relativeNode
}



// 测试语句，可以在控制台中能够看到这里
cc["vv"] = cc["vv"] || DevelopersToolGlobal;



// SIGNPOST 全局属性ToolGlobal 

// import { DevelopersToolGlobal as ccvv } from './DevelopersToolGlobal';
export interface IWarehouseGlobalInterface {
    [key: string]: any;
}
export interface IToolGlobalInterface {
    [key: string]: any;
}
export interface IOtherGlobalInterface {
    [key: string]: any;
}
export class DevelopersToolGlobal {

    /**
     * 仓库全局实例
     * 存放load时载入的数据
     */
    static _Global_Warehouse: IWarehouseGlobalInterface = null;

    static get warehouse() {
        this._Global_Warehouse = this._Global_Warehouse || {};
        return this._Global_Warehouse;
    }

    static set warehouse(value: IWarehouseGlobalInterface) {
        this._Global_Warehouse = value;
    }

    /**
     * 工具全局实例
     * 可以注入其他工具类
     */
    static _Global_Tool: IToolGlobalInterface = null;

    static get tool() {
        this._Global_Tool = this._Global_Tool || {};
        return this._Global_Tool;
    }
    static set tool(value: IToolGlobalInterface) {
        this._Global_Tool = value;
    }

    /**
     * 杂项全局实例
     * 可以注入其他项目
     */
    static _Global_Other: IOtherGlobalInterface = null;

    static get other() {
        this._Global_Other = this._Global_Other || {};
        return this._Global_Other;
    }
    static set other(value: IOtherGlobalInterface) {
        this._Global_Other = value;
    }



}
/**
 * 全局枚举
 * 对象可移动性
 */
enum panelType {
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

// 测试语句，为了在控制台中能够看到这里
// cc["vv"] = cc["vv"] || DevelopersToolGlobal;



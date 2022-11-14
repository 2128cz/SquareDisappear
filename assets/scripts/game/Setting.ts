import { DevelopersToolGlobal as ccvv } from "../base/class/DevelopersToolGlobal";
import GridAbsorb from '../base/tool/GridAdsorb';
// 游戏固定参数设定
export default class Setting {
    // 基本常量定义
    public static get Game_Column(): number { return 4; }
    public static get Game_Row(): number { return 15; }
    public static get Game_Row2(): number { return 30; }

    public static get Cube_width(): number { return 177; }
    public static get Cube_Height(): number { return 100; }

    // 设定参数定义
    protected static _GameSpeed: number = 300;
    public static get GameSpeed(): number { return this._GameSpeed; }
    public static set GameSpeed(value) { this._GameSpeed = value; }
    public static get GameVector(): cc.Vec3 { return new cc.Vec3(0, -this._GameSpeed, 0); }

    protected static _CubeSpeed: number = 400;
    public static get CubeSpeed(): number { return this._CubeSpeed; }
    public static set CubeSpeed(value) { this._CubeSpeed = value; }
    public static get CubeVector(): cc.Vec3 { return new cc.Vec3(0, this._CubeSpeed, 0); }

    // 网格指针
    protected static _GridCurrentPoint: number = 0;
    public static get GridCurrentPoint(): number { return this._GridCurrentPoint }
    public static set GridCurrentPoint(value) { this._GridCurrentPoint = value }
    public static get GridCurrentPointToVec(): cc.Vec3 { return new cc.Vec3(0, this._GridCurrentPoint, 0) }
    public static get GridPointer(): number { return this._GridCurrentPoint++; }
    public static set GridPointer(value) { this._GridCurrentPoint += value }

    // 资源常量定义
    public static get Square() { return ccvv.warehouse['prefabs']['Square'] }
    public static get SquareGroup() { return ccvv.warehouse['prefabs']['Square Node'] }
}
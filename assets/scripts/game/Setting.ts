import { DevelopersToolGlobal as ccvv } from "../base/class/DevelopersToolGlobal";
import GridAbsorb from '../base/tool/GridAdsorb';
import PawnMovement from "../base/tool/PawnMovement";
import BlockGroup from "./BlockGroup";
import GameLevel from "./GameLevel";
import MenuLevel from "./MenuLevel";
// 游戏固定参数设定
// 用法定位 类似于宏转义
/**
 * 这里定义基本的全局参数
 */
export default class Setting {
    // 基本常量定义
    public static get Game_Column(): number { return 4; }
    public static get Game_Row(): number { return 15; }
    public static get Game_Row2(): number { return 30; }

    public static get Cube_width(): number { return 177; }
    public static get Cube_Height(): number { return 100; }
    public static get Cube_Interaval(): number { return 3; }

    // 方块在预制体中的y坐标
    public static get Cube_Perfab_Y(): number { return 50; }

    // 底部截止线，用于生成方块位置和判断是否结束游戏
    public static get Separator(): number { return cc.winSize.height * (.17 - .5); }

    // 碰撞组
    public static get Group_0(): string { return 'default' }
    public static get Group_1(): string { return 'player' }

    // 技能设定
    protected static _SkillIce_CoolDownTime: number = 15;
    protected static _SkillIce_Duration: number = 8;
    public static get ice_CoolDownTime(): number { return this._SkillIce_CoolDownTime }
    public static set ice_CoolDownTime(value: number) { this._SkillIce_CoolDownTime = value }
    public static get ice_Duration(): number { return this._SkillIce_Duration }

    protected static _SkillHit_CoolDownTime: number = 5;
    protected static _SkillHit_Force: number = 880000; // 单位n/ccmm2 （牛顿/cocos平方单位）
    public static get hit_Force(): number { return this._SkillHit_Force }
    public static get hit_CoolDownTime(): number { return this._SkillHit_CoolDownTime }
    public static set hit_CoolDownTime(value: number) { this._SkillHit_CoolDownTime = value }

    protected static _SkillBoom_CoolDownTime: number = 39;
    public static get boom_CoolDownTime(): number { return this._SkillBoom_CoolDownTime }
    public static set boom_CoolDownTime(value: number) { this._SkillBoom_CoolDownTime = value }

    // 计分器
    protected static _Score: number = 0;
    public static get score(): number { return this._Score }
    public static set score(value: number) { this._Score = value }
    public static set score_add(value: number) { this._Score += value }
    public static set score_sub(value: number) { this._Score -= value }

    // 场景中最后一组方块
    protected static _EndCubeGroup: BlockGroup = null;
    public static get endCubeGroup(): BlockGroup { return this._EndCubeGroup }
    public static set endCubeGroup(value: BlockGroup) { this._EndCubeGroup = value }

    // 设定参数定义 我认为极限速度大概在250左右，再快了就反应不过来了
    protected static _GameSpeed: number = 130;
    public static get GameSpeed(): number { return this._GameSpeed; }
    public static set GameSpeed(value) { this._GameSpeed = value; }
    public static get GameSpeed_MulMax(): number { return 250 - 130; }
    public static get GameAutoSpeed(): cc.Vec3 { return new cc.Vec3(0, -((this.endCubeGroup ? (this.endCubeGroup.node.y + cc.winSize.height / 2) / cc.winSize.height : 1) * this.GameSpeed), 0); }
    public static get GameVector(): cc.Vec3 { return new cc.Vec3(0, -80, 0); }
    public static get GameAutoDrag(): number { return (this.endCubeGroup ? 1 - (this.endCubeGroup.node.y + cc.winSize.height / 2) / cc.winSize.height : 0) }

    protected static _CubeSpeed: number = 950;
    public static get CubeSpeed(): number { return this._CubeSpeed; }
    public static set CubeSpeed(value) { this._CubeSpeed = value; }
    public static get CubeVector(): cc.Vec3 { return new cc.Vec3(0, this._CubeSpeed, 0); }

    // 到关卡的事件转发
    public static set SkillEvent(event: string) { ccvv.fristScript[event](); }

    // 网格指针
    protected static _GridCurrentPoint: number = 0;
    public static get GridCurrentPoint(): number { return this._GridCurrentPoint }
    public static set GridCurrentPoint(value) { this._GridCurrentPoint = value }
    public static get GridCurrentPointToVec(): cc.Vec3 { return new cc.Vec3(0, this._GridCurrentPoint, 0) }
    public static get GridPointer(): number { return this._GridCurrentPoint++; }
    public static set GridPointer(value) { this._GridCurrentPoint += value }

    // 网格参数
    public static get GridOriginOffset(): cc.Vec3 { return new cc.Vec3(0, GridAbsorb.grid.gridSize.y / 2 + cc.winSize.height / 2, 0) }
    // 网格驱动器
    protected static _Movement: PawnMovement = null;
    public static get movement(): PawnMovement { return this._Movement }
    public static set movement(value: PawnMovement) { this._Movement = value }

    // 关卡菜单界面脚本
    protected static _Menu: MenuLevel = null;
    public static get menu(): MenuLevel { return this._Menu }
    public static set menu(value: MenuLevel) { this._Menu = value }

    // 资源常量定义
    public static get Square() { return ccvv.warehouse['prefabs']['Square'] }
    public static get SquareGroup() { return ccvv.warehouse['prefabs']['Square Node'] }
    public static get Effect_SquareBreak() { return ccvv.warehouse['prefabs']['splintering'] }
    public static get Effect_Destory() { return ccvv.warehouse['prefabs']['Destroy Effect Node'] }
    public static get Effect_Boom() { return ccvv.warehouse['prefabs']['Boom Effect Node'] }
    public static get Effect_Hit() { return ccvv.warehouse['prefabs']['Hit Effect Node'] }
    public static get Effect_Ice() { return ccvv.warehouse['prefabs']['Ice Effect Node'] }

    public static get Sound_bgm() { return ccvv.warehouse['sounds']['bgm'] }
    public static get Sound_btnn() { return ccvv.warehouse['sounds']['button'] }
    public static get Sound_btny() { return ccvv.warehouse['sounds']['button_yes'] }
    public static get Sound_lose() { return ccvv.warehouse['sounds']['lose'] }
    public static get Sound_boom() { return ccvv.warehouse['sounds']['prop_bomb'] }
    public static get Sound_hit() { return ccvv.warehouse['sounds']['prop_hit'] }
    public static get Sound_ice() { return ccvv.warehouse['sounds']['prop_ice'] }
    public static get Sound_shot() { return ccvv.warehouse['sounds']['shot'] }
    public static get Sound_des1() { return ccvv.warehouse['sounds']['xiaochu1'] }
    public static get Sound_des2() { return ccvv.warehouse['sounds']['xiaochu2'] }
    public static get Sound_des3() { return ccvv.warehouse['sounds']['xiaochu3'] }

    // 资产常量定义
    public static get blockName() { return 'Block' }
    public static get blockGroupName() { return 'BlockGroup' }


}
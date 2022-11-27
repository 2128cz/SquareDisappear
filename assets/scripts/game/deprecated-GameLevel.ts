
import { DevelopersToolGlobal as ccvv, mathMacro as mm } from '../base/class/DevelopersToolGlobal';
import PawnMovement from '../base/tool/PawnMovement';
import GridAbsorb from '../base/tool/GridAdsorb';
import NTR from "../base/tool/NoRootTree";

/**
 * 无根树 NTR 继承自ringbuffer继承自RigorousArray 
 * 驱动网格 GridAbsorb 用来驱动其他方块的对齐与运动
 * 移动组件 PawnMovement 简单的运动解算器，仅保留了速度解算和抵达解算，没事可以换着玩
 * 数学宏库 mm 效率低，没事别用
 * 全局仓库 ccvv.warehouse 用来保存动态加载内容
 * 全局工具 ccvv.tool 暂无
 * 全局其他 ccvv.other 暂无
 * 全局界面 ccvv.layer 保存当前世界中的所有已定义层
 * 全局脚本 ccvv.script 保存这个关卡脚本
 * 全局实例 ccvv.instance 作为全局冲突池
 */
// (〃´-ω･) 诶嘿~ 

const { ccclass, property } = cc._decorator;
@ccclass
/**
 * 
 * @deprecated 已有更好的方法
 */
export default class Game extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 提升为关卡脚本
        ccvv.script = this;

        // 开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;

        // 创建无根树
        NTR.tree = new NTR(this.treeSize);
        // 创建网格驱动
        this.creatGrid();

        // cc.log(ccvv.fristScript)
        // cc.log(ccvv.warehouse);
        // ccvv.layers[0].addChild(new ccvv.warehouse['frames']['bg'])
    }

    start() {
        this.touchRegister();
        // this.creat_lineCube();

    }

    update(dt) {
        this.gameProcess_SpawnCube();
        // 更新所有方块的位置
        GridAbsorb.grid.offset = new cc.Vec3(0, -dt * this.globalSpeed, 0);
    }

    // TAG USER FUNCTION:                                                                                    

    // SIGNPOST 网格生成                                                                                     

    protected creatGrid() {
        new GridAbsorb(
            new cc.Vec3(this.column, this.treeSize, 0),
            new cc.Vec3(this.cubeWidget, this.cubeHeight, 0)
        );
        GridAbsorb.grid.offset = new cc.Vec3(0, cc.winSize.height / 2 + this.cubeHeight, 0);
    }

    // SIGNPOST 诞生方式                                                                                     

    /**
     * 游戏流程-诞生方块
     */
    protected gameProcess_SpawnCube() {
        if (this.cheackRoot()) {
            this.creat_lineCube();
            // cc.log(NTR.tree.buffer);
        }
    }

    /**
     * 检查目标叶节点是否已为过去式
     */
    protected cheackLose() {
        let leaf = this.curTreeNode('leaf');
        if (!leaf) return false;
        let leafPos = leaf.convertToWorldSpaceAR(cc.Vec2.ZERO);
        let isoutbox = leafPos.y <= (cc.winSize.height * this.separatorPercent);
        return isoutbox;
    }

    /**
     * 检查目标根节点是否已为过去式
     */
    protected cheackRoot() {
        let root = this.curTreeNode();
        if (!root) return true;
        let size = cc.v2(cc.winSize.width, cc.winSize.height);
        let size2 = size.div(2);
        let rootPos = root.convertToWorldSpaceAR(cc.Vec2.ZERO);
        let isinbox = new mm(rootPos).isInBox2(size2, size2.add(cc.v2(0, this.cubeHeight / 2)));
        return isinbox;
    }

    /**
     * 返回任意目标节点
     */
    public curTreeNode(node: string = 'root'): cc.Node {
        if (NTR.tree[node]) {
            let treeIndex = 0;
            for (let index = 0; !NTR.tree[node][index]; treeIndex = ++index);
            return NTR.tree[node][treeIndex];
        }
        else
            return undefined;
    }

    // TAG NATIVE FUNCTION                                                                                   

    // SIGNPOST touchevent                                                                                   

    /**
     * 注册触摸事件
     */
    protected touchRegister() {
        if (!this.readyTouch) {
            this.readyTouch = true;
            ccvv.layers[0].on("touchstart", this.onTouchStart, this);
        }
    }
    /**
     * 注销触摸事件
     */
    protected touchCancel() {
        if (this.readyTouch) {
            this.readyTouch = false;
            ccvv.layers[0].off("touchstart", this.onTouchStart, this);
        }
    }
    /**
     * 已经注册触摸
     */
    protected readyTouch: boolean = false;

    /**
     * 当触摸发生时
     * @param event 
     */
    protected onTouchStart(event) {
        let touchArea = event.getLocation().x / this.cubeWidget;
        let inst = this.creat_PlayerCube();
        let inx = Math.ceil(touchArea) * (this.cubeWidget + this.cubeInteraval) - ((cc.winSize.width + this.cubeWidget) / 2);
        inst.setPosition(inx, cc.winSize.width * this.separatorPercent - cc.winSize.width);
    }

    /**
     * 诞生玩家方块
     * 玩家方块不受全局速度影响，不放在树中
     */
    protected creat_PlayerCube(): cc.Node {
        let inst = this.creatActor(this.cube, ccvv.layers[1]);
        try { inst.getComponent('Block').init(null, true); }
        catch { cc.log("找不到组件: Block"); }
        this.bindMovement_retrograde(inst);
        return inst;
    }
    /**
     * 绑定逆向移动控制组件
     * @param inst 
     */
    protected bindMovement_retrograde(inst): void {
        let movement = new PawnMovement(inst);
        movement.maxSpeed = this.playerSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, 1200);
        movement.velocity = new cc.Vec2(0, this.playerSpeed);
        inst['playerMovement'] = movement;
    }

    // TAG Prefabricated function                                                                            

    // SIGNPOST instantiation and destory Actor                                                              

    /**
     * 创建一行方块
     * 随机方式我想应该大概也许是独立随机事件
     * 每行绝对会留一个空
     * @param chance 生成机会，机会越大越容易成功，但肯定会留给玩家一个空，推荐在 3 ~ 5
     */
    public creat_lineCube(chance = 4) {
        let perch = [];
        let child = {};
        let childIndex = NTR.tree.add(child);
        let loop = chance;
        while (loop--) {
            let curcol = this.randomInColumn;
            if (perch.indexOf(curcol) < 0) {
                perch.push(curcol)
                let inst = this.creat_ProductionCube(childIndex, curcol);
                inst.setPosition(this.spawnOrigin.add(cc.v2(curcol * (this.cubeWidget + this.cubeInteraval), 0)))
                child[curcol] = inst;
            }
            if (perch.length >= (this.column - 1)) break;
        }
    }
    /**
     * 创建一个方块在堆叠层
     * 并完成基本构造行为
     */
    protected creat_ProductionCube(treeIndex: number, columnIndex: number): cc.Node {
        let inst = this.creatActor(this.cube, ccvv.layers[1])
        try { inst.getComponent('Block').init(treeIndex); }
        catch { cc.log("找不到组件: Block"); }
        this.bindMovement_consequent(inst);
        return inst;
    }
    /**
     * creat instantiate
     * @param {cc.Prefab} actor 实例化的目标
     * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
     * @returns 
     */
    protected creatActor(actor: cc.Prefab, parent?: cc.Node): cc.Node {
        let actorInst = cc.instantiate(actor);
        if (parent) { parent.addChild(actorInst); }
        else { this.node.addChild(actorInst); cc.log(actorInst) }
        return actorInst;
    }
    /**
     * 绑定顺向移动控制组件
     * @param inst 
     */
    protected bindMovement_consequent(inst): void {
        let movement = new PawnMovement(inst);
        movement.maxSpeed = this.globalSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, -1200);
        movement.velocity = new cc.Vec2(0, -this.globalSpeed);
        inst['otherMovement'] = movement;
    }
    /**
     * 外部玩家阵营复制绑定控制组件
     * @param node 
     */
    public bindMovement(node): void {
        this.bindMovement_consequent(node);
    }

    // SIGNPOST macro                                                                                        

    /**
     * 获取指定的预制体方块
     */
    public get cube(): cc.Prefab { return ccvv.warehouse['prefabs']['block']; }
    /**
     * 获取当前所有的列数
     */
    public get column(): number { return 4; }
    /**
     * 获取列数内的随机整数
     */
    public get randomInColumn(): number { return Math.floor(Math.random() * this.column); }
    /**
     * 获取方块所占宽度
     */
    public get cubeWidget(): number { return 177; }
    /**
     * 获取方块间隔
     */
    public get cubeInteraval(): number { return 3; }
    /**
     * 获取方块所占高度
     */
    public get cubeHeight(): number { return 100; }
    /**
     * 获取方块诞生原点
     */
    public get spawnOrigin(): cc.Vec2 {
        if (!this._spawnOrigin)
            this._spawnOrigin = cc.v2(
                -(this.column - 1) * (this.cubeWidget + this.cubeInteraval) / 2,
                cc.winSize.height / 2 + this.cubeHeight * 1.4
            )
        return this._spawnOrigin;
    }
    public _spawnOrigin: cc.Vec2 = null;
    /**
     * 获取每行最小可诞生的数量
     */
    public get spawnMinCount(): number { return 2; }
    /**
     * 获取截止线屏幕百分比
     */
    public get separatorPercent(): number { return .290625; }
    /**
     * 获取全局速度
     */
    public get globalSpeed(): number { return 100; }
    /**
     * 获取玩家方块速度
     */
    public get playerSpeed(): number { return 1000; }
    /**
     * 获取树规模
     */
    public get treeSize(): number { return 30; }
}


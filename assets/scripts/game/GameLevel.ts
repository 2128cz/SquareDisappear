import { DevelopersToolGlobal as ccvv, mathMacro as mm } from '../base/class/DevelopersToolGlobal';
import NTR from "../base/tool/NoRootTree";
// (〃´-ω･) 诶嘿~
const { ccclass, property } = cc._decorator;
@ccclass
export default class Game extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        ccvv.script = this;
        // cc.log(ccvv.fristScript)
        // cc.log(ccvv.warehouse);
        // ccvv.layers[0].addChild(new ccvv.warehouse['frames']['bg'])
    }

    start() {
        this.creat_lineCube()
    }

    update(dt) {
        this.gameProcess_SpawnCube();
    }

    // TAG USER FUNCTION:                                                                                    

    /**
     * 游戏流程-诞生方块
     */
    protected gameProcess_SpawnCube() {
        if (this.curRoot) {// && mm.isInBox2(cubePos)
            let cubePos = new mm(this.curRoot.node.getPostion());

            cc.log(cubePos);
        }
        else {
            // this.creat_lineCube();
        }
        // NTR.tree.push();
    }

    /**
     * 返回目标根节点
     */
    protected get curRoot() {
        if (NTR.tree.root)
            return NTR.tree.root[0];
        else
            return undefined;
    }

    protected cheackIs



    // TAG Prefabricated function                                                                            

    // SIGNPOST instantiation and destory Actor                                                              

    /**
     * 创建一行方块
     * 应该是独立随机事件
     */
    public creat_lineCube() {
        let perch = [];
        let loop = 5;
        while (loop--) {
            let curcol = this.randomInColumn;
            if (perch.indexOf(curcol) < 0) {
                perch.push(curcol)
                let inst: cc.Node = this.creat_OneCube;
                inst.setPosition(this.spawnOrigin.add(cc.v2(curcol * (this.cubeWidget + this.cubeInteraval))))
            }
            if (perch.length >= 3) break;
        }
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

    // TAG macro                                                                                             

    /**
     * 获取指定的预制体方块
     */
    protected get cube(): cc.Prefab { return ccvv.warehouse['prefabs']['block']; }
    /**
     * 获取当前所有的列数
     */
    protected get column(): number { return 4; }
    /**
     * 获取列数内的随机整数
     */
    protected get randomInColumn(): number { return Math.floor(Math.random() * this.column); }
    /**
     * 获取方块所占宽度
     */
    protected get cubeWidget(): number { return 177; }
    /**
     * 获取方块间隔
     */
    protected get cubeInteraval(): number { return 3; }
    /**
     * 获取方块所占高度
     */
    protected get cubeHeight(): number { return 100; }
    /**
     * 获取方块诞生原点
     */
    protected get spawnOrigin(): cc.Vec2 {
        if (!this._spawnOrigin)
            this._spawnOrigin = cc.v2(
                -(this.column - 1) * (this.cubeWidget + this.cubeInteraval) / 2,
                cc.winSize.height / 2 //+ this.cubeHeight
            )
        return this._spawnOrigin;
    }
    protected _spawnOrigin: cc.Vec2 = null;
    /**
     * 获取每行最小可诞生的数量
     */
    protected get spawnMinCount(): number { return 2; }
    /**
     * 创建一个方块在指定层
     */
    protected get creat_OneCube(): cc.Node {
        return this.creatActor(this.cube, ccvv.layers[1]);
    }
}


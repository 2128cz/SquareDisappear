const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}

    // TAG USER FUNCTION:                                                                                    

    /**
     * 游戏流程
     */
    protected gameProcess_SpawnLine() {

    }

    // TAG Prefabricated function                                                                            

    // SIGNPOST instantiation and destory Actor                                                              

    /**
     * creat instantiate
     * @param {cc.Prefab} actor 实例化的目标
     * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
     * @returns 
     */
    protected creatActor(actor: cc.Prefab, parent?: cc.Node) {
        let actorInst = cc.instantiate(actor);
        if (parent) { parent.addChild(actorInst); }
        else { this.node.addChild(actorInst); cc.log(actorInst) }
        return actorInst;
    }

}


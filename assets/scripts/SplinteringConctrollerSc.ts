import { Msger } from "./Msger";
import DelayDelSc from "./DelayDelSc";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class SplinteringConctrollerSc extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property(cc.Prefab)
    splintering: cc.Prefab = null;
    onLoad() {
        if (!this.nodeSave) {
            this.nodeSave = [];
        }
        Msger.on(Msger.on_Splintering_del, this.on_Splintering_del, this)
        Msger.on(Msger.on_clean_brick, this.on_clean_brick, this);
    }
    on_Splintering_del(e) {
        this.nodeSave.push(e);
    }
    on_clean_brick(p: cc.Node, pos: cc.Vec2) {
        let node: cc.Node;
        if (this.nodeSave.length > 0) {
            node = this.nodeSave.shift();
        } else {
            node = cc.instantiate(this.splintering);
        }
        node.getComponent(DelayDelSc).delayTime = 0.4;
        node.position = pos;
        p.addChild(node);
        node.getComponentInChildren(dragonBones.ArmatureDisplay).playAnimation("fk-tx-fk", 1);
    }

    async loadPrefabSync(file): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.loader.loadRes(file, cc.Prefab, function (err, content) {
                resolve(content);
            })
        });
    }
    nodeSave: cc.Node[];

    update(t) { }
}

import GameSc from "./GameSc";
import BrickSc from "./BrickSc";
import GameOverSc from "./GameOverSc";
import { Msger } from "./Msger";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CheckOverSc extends cc.Component {


    @property(cc.Node)
    overUI: cc.Node = null;
    @property(cc.Node)
    deadLine: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    private bricksLayer: cc.Node;
    update(dt) {
        if (this.getComponent(GameSc).isPaused) {
            return;
        }
        if (!this.bricksLayer) {
            this.bricksLayer = this.getComponent(GameSc).bricksLayer;
        } else {
            for (let item of this.bricksLayer.children) {
                if (item.getComponent(BrickSc).moveSpeed == 0) {
                    if (item.y - item.height / 2 <= this.deadLine.y) {
                        //
                        this.getComponent(GameSc).isPaused = true;
                        this.cleanBrikes();
                        this.overUI.active = true;
                        this.overUI.getComponent(GameOverSc).cooldown = 10;
                        Msger.emit(Msger.on_play_sound, 3);
                    }
                }
            }
        }
    }
    private cleanBrikes() {
        let bricks = this.getComponent(GameSc).bricksLayer;
        for (let i = bricks.childrenCount - 1; i >= 0; i--) {
            let item = bricks.children[i];
            if (item.y < 1280 / 2) {
                item.removeFromParent(true);
            }
        }
    }
}

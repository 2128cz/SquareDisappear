import { DevelopersToolGlobal as ccvv } from '../base/class/DevelopersToolGlobal';
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // cc.find("Canvas").getComponent("Game").addTimeCount();
    }

    start() {
        ccvv.fristScript
    }

    // update (dt) {}
}

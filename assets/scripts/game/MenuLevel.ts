import { DevelopersToolGlobal as ccvv } from "../base/class/DevelopersToolGlobal";
import ss from "./Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MenuLevel extends cc.Component {

    onLoad() {
        ccvv.layers[0].active = true;
        ccvv.layers[2].active = true;
        ss.menu = this;
    }

    // start () {}
    // update (dt) {}

    // tag 用户逻辑

    /**
     * 游戏开始
     */
    public gameStart() {
        ccvv.layers[1].active = true;
        ccvv.layers[2].active = false;
    }

    /**
     * 游戏结束
     */
    public gameOver() {
        ccvv.layers[1].active = false;
        ccvv.layers[2].active = true;
    }

    // tag 按钮事件 

    public onButtonClick(event, cusData) {
        this[cusData]();
    }

    public onMusic() {

    }

    public onShare() {

    }

    public onStart() {
        this.gameStart();
    }
}

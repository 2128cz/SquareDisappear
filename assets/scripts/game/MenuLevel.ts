import { DevelopersToolGlobal as ccvv } from "../base/class/DevelopersToolGlobal";
import { SoundPlayer } from "../base/tool/SoundPlayer";
import ss from "./Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MenuLevel extends cc.Component {

    onLoad() {
        ccvv.layers[0].active = true;
        ccvv.layers[1].active = false;
        ccvv.layers[2].active = false;
        ccvv.layers[3].active = true;

        ss.menu = this;


    }

    start() {
        // todo 播放音乐
        new SoundPlayer(ss.Sound_bgm, 1, .5);
    }
    // update (dt) {}

    // tag 用户逻辑

    /**
     * 游戏开始
     */
    public gameStart() {
        ccvv.layers[0].active = true;
        ccvv.layers[1].active = true;
        ccvv.layers[2].active = false;
        ccvv.layers[3].active = false;
    }

    /**
     * 游戏结束
     */
    public gameOver() {
        // todo 播放音效
        new SoundPlayer(ss.Sound_lose);

        ccvv.layers[0].active = true;
        ccvv.layers[1].active = true;
        ccvv.layers[2].active = true;
        ccvv.layers[3].active = false;
    }

    /**
    * 打开菜单
    */
    public openMenu() {
        ccvv.layers[0].active = true;
        ccvv.layers[1].active = false;
        ccvv.layers[2].active = false;
        ccvv.layers[3].active = true;
    }

    // tag 按钮事件 

    public onButtonClick(event, cusData) {
        this[cusData]();
    }

    public onMusic() {
        // todo 播放音效
        new SoundPlayer(ss.Sound_btnn);
    }

    public onShare() {
        // todo 播放音效
        new SoundPlayer(ss.Sound_btnn);
    }

    public onStart() {
        // todo 播放音效
        new SoundPlayer(ss.Sound_btny);
        this.gameStart();
    }
}

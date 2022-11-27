import { DevelopersToolGlobal as ccvv } from "../base/class/DevelopersToolGlobal";
import { SoundPlayer } from "../base/tool/SoundPlayer";
import ss from "./Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MenuLevel extends cc.Component {
	onLoad() {
        ss.menu = this;
	}

	start() {
		this.openMenu();
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

        // 复位分数
        ss.score = 0;
        
        if (ss.mute) return;
		// todo 音乐切换
		let newbgm = new SoundPlayer(ss.Sound_bgm, -1, 0.5);
		newbgm.bpm = ss.Sound_bgm_bpm;
		this._bgm1.stop();
		this._bgm1.switch(newbgm).crossfade(3);
		this._bgm1 = newbgm;
	}

	/**
     * 游戏结束
     */
	public gameOver() {
		ccvv.layers[0].active = true;
		ccvv.layers[1].active = true;
		ccvv.layers[2].active = true;
		ccvv.layers[3].active = false;

		// todo 播放音效
		// this._bgm1.setting().crossfade(1);
		new SoundPlayer(ss.Sound_lose);
	}

	/**
    * 打开菜单
    */
	public openMenu() {
		ccvv.layers[0].active = true;
		ccvv.layers[1].active = false;
		ccvv.layers[2].active = false;
		ccvv.layers[3].active = true;


        if (ss.mute) return;
		// todo 播放音乐
        if (!this._bgm1) {
            this._bgm1 = new SoundPlayer(ss.Sound_bgm, -1, 0.5);
            this._bgm1.bpm = ss.Sound_bgm_bpm;
        }
	}

	// tag 按钮事件

	public onButtonClick(event, cusData) {
		this[cusData](event);
	}

	public onMusic(event) {
		// todo 播放音效
		new SoundPlayer(ss.Sound_btnn);

        ss.mute = !ss.mute;
        let spriteComponent:cc.Sprite = event.currentTarget.getComponent(cc.Sprite);
        spriteComponent.spriteFrame = ss.mute ? ccvv.warehouse['frames']['btn soundClose'] : ccvv.warehouse['frames']['btn sound'];

        this._bgm1.mute = ss.mute;
    }

	public onShare(event) {
		// todo 播放音效
		new SoundPlayer(ss.Sound_btnn);

		if (window.wx) {
            let that = this;
            cc.resources.load("share/share1", function (err, data) {
                let options = {
					title: "方块消吧！",
                    imageUrl: data["url"],
                };
                wx.shareAppMessage(options);

                //share为分享的图片名称这是路径（assets/resources/share）
                wx.onShareAppMessage(function (res) {
                    return {
                        title: "来比一比谁的反应更快！", //分享的标题
                        imageUrl: data["url"],
                        success(res) {
                            console.log(res)
                        },
                        fail(res) {
                            console.log(res)
                        }
                    }
                })

            });
        }
	}

	public onStart(event) {
		// todo 播放音效
		new SoundPlayer(ss.Sound_btny);
		this.gameStart();
	}

	// tag 参数

	protected _bgm1: SoundPlayer = null;
}

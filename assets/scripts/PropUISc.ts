import GameSc from "./GameSc";
import BombEffectSc from "./BombEffectSc";
import IceEffectSc from "./IceEffectSc";
import IconCooldownSc from "./IconCooldownSc";
import { Msger } from "./Msger";



const { ccclass, property } = cc._decorator;

@ccclass
export default class PropUISc extends cc.Component {

    @property(cc.Node)
    iceIcon: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {
        this.ice_timer -= dt;
        if (this.ice_timer <= 0) {
            this.getComponent(GameSc).g_movespeed_sc = 1;
        }
    }
    ice_timer = 0;
    onclick_ice() {
        if (this.iceIcon.getComponent(IconCooldownSc).isCD()) {
            return;
        }
        Msger.emit(Msger.on_play_sound, 6);
        //应该播放一个效果
        this.getComponent(GameSc).g_movespeed_sc = 0.5;
        this.ice_timer = 10;
        let sc = this.getComponentInChildren(IceEffectSc)
        if (sc) {
            sc.node.active = true;
            sc.showIecEffect(this.ice_timer);
        }
        this.iceIcon.getComponent(IconCooldownSc).beginCD();
    }
    onclick_bomb() {
        Msger.emit(Msger.on_play_sound, 4);
        //应该播放一个效果
        let bricks = this.getComponent(GameSc).bricksLayer;
        for (let i = bricks.childrenCount - 1; i >= 0; i--) {
            let item = bricks.children[i];
            if (item.y < 1280 / 2) {
                item.removeFromParent(true);
            }
        }
        bricks.removeAllChildren(true);
        let sc = this.getComponentInChildren(BombEffectSc)
        if (sc) {
            sc.node.active = true;
        }
    }
    onclick_hit() {
        Msger.emit(Msger.on_play_sound, 5);
        //应该播放一个效果
        this.getComponent(GameSc).play_hit_effect();
        let gamesc = this.getComponent(GameSc);
        let target = gamesc.g_movespeed_sc;
        gamesc.g_movespeed_sc = -2;
        cc.Tween.stopAllByTarget(gamesc);
        cc.tween(gamesc).to(1, { g_movespeed_sc: target }, null).start();
    }
}

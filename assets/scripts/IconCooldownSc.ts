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
export default class IconCooldownSc extends cc.Component {

    @property(cc.Sprite)
    CDMask: cc.Sprite = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.CDMask.fillRange = 0;
    }

    isCD(): boolean {
        return this.CDMask.fillRange > 0;
    }
    lenTime = 10;
    update(dt) {
        this.CDMask.fillRange -= dt * (1 / this.lenTime);
        if (this.CDMask.fillRange < 0) {
            this.CDMask.fillRange = 0;
        } else {
        }
    }
    beginCD(len = 10) {
        this.lenTime = len;
        this.CDMask.fillRange = 1;
    }
}

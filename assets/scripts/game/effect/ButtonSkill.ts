import { DevelopersToolGlobal as ccvv } from "../../base/class/DevelopersToolGlobal";
import ss from "../Setting";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({ type: cc.Sprite })
    maskList: cc.Sprite[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    onEnable() {
        // 默认CD是满的
        this.iceCD = this.getCDT(this.ice);
        this.hitCD = this.getCDT(this.hit);
        this.boomCD = this.getCDT(this.boom);
    }

    start() {

    }

    update(dt) {
        this.skillNameList.forEach(element => {
            if (this.getCD(element) > 0) {
                this.setCD(element, -dt);
            }
        });
    }

    // tag 用户脚本 


    // tag 按钮事件 

    onButtonClick(event, cusData) {
        // event.target
        this[cusData]();
    }

    onIce(): void {
        this.BottonEvent(this.ice);
    }
    onHit(): void {
        this.BottonEvent(this.hit);
    }
    onBoom(): void {
        this.BottonEvent(this.boom)
    }

    BottonEvent(name: string) {
        if (this.getCD(this[name]) <= 0) {
            this.setCD(this[name], this.getCDT(this[name]));
            ss.SkillEvent = name;
        }
    }


    // tag 宏和参数定义 

    protected get iceMask() { return this.maskList[0] }
    protected get hitMask() { return this.maskList[1] }
    protected get boomMask() { return this.maskList[2] }

    protected iceCD: number = this.getCDT(this.ice);
    protected hitCD: number = this.getCDT(this.hit);
    protected boomCD: number = this.getCDT(this.boom);

    protected getCD(name: string) {
        return this[name + 'CD']
    }
    protected setCD(name: string, offset: number) {
        this[name + 'CD'] += offset;
        this[name + 'CD'] = Math.max(Math.min(this[name + 'CD'], this.getCDT(name)), 0)
        this.getMask(name).fillRange = this[name + 'CD'] / this.getCDT(name);
        return this[name + 'CD']
    }

    protected getCDT(name: string) {
        return ss[name + '_CoolDownTime']
    }

    protected getMask(name: string): cc.Sprite {
        return this[name + 'Mask']
    }

    protected get ice() { return 'ice' }
    protected get hit() { return 'hit' }
    protected get boom() { return 'boom' }

    protected get skillNameList() { return [this.ice, this.hit, this.boom] }

}

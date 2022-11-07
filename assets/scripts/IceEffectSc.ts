
const { ccclass, property } = cc._decorator;

@ccclass
export default class IceEffectSc extends cc.Component {

    @property(cc.Prefab)
    icePrefab: cc.Prefab = null;
    @property(cc.Node)
    ice: cc.Node = null;

    @property([cc.SpriteFrame])
    frames: cc.SpriteFrame[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        for (let i = 0; i < 20; i++) {
            let sprite = cc.instantiate(this.icePrefab);
            let frame = this.frames.shift();
            sprite.getComponent(cc.Sprite).spriteFrame = frame;
            this.frames.push(frame);
            sprite.x = Math.random() * 720 - 360;
            sprite.y = Math.random() * 1280 - 640;
            this.node.addChild(sprite);
            sprite["speed"] = Math.random() * 100 + 50;
        }
        this.node.active = false;
    }
    private overtime = 0;
    showIecEffect(overtime) {
        this.overtime = overtime;
        for (let item of this.node.children) {
            if (item == this.ice) {
                item.scale = 0.01;
                item.opacity = 255;
            } else {
                item.opacity = 0;
                item.runAction(cc.fadeTo(0.3, 200))
            }
        }

        this.ice.runAction(cc.sequence(
            cc.scaleTo(0.2,10, 10),
            cc.fadeTo(0, 0)
        ));

    }

    update(dt) {
        if (!this.node.active) {
            return;
        }
        for (let item of this.node.children) {
            if (item == this.ice) {
                continue;
            }
            item.y -= dt * item["speed"];
            if (item.y <= -1280 / 2) {
                item.y = 1280 / 2;
            }
        }
        this.overtime -= dt;
        if (this.overtime <= 0) {
            this.node.active = false;
        }
    }
}

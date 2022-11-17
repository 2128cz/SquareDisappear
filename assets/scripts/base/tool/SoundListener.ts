
const { ccclass, property, menu, disallowMultiple, help } = cc._decorator;

@ccclass
@menu('Audio/SoundListener')
@help('https://github.com/2128cz/CocosCopilot')
@disallowMultiple
export default class SoundListener extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}

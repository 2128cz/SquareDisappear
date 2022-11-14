import { DevelopersToolGlobal as ccvv } from '../class/DevelopersToolGlobal';

const { ccclass, property } = cc._decorator;
@ccclass
export default class PanelTool extends cc.Component {

    @property({
        type: cc.String,
        displayName: '通用层名单',
        tooltip: '层按放置顺序设定优先级，与名称顺序无关',
        visible: true,
    })
    _generalLayer: string[] = ['BackgroundLayer', 'EternalityUILayer', 'DynamicUILayer'];

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        let layers = this.node.children;
        /**
         * 可用的剩余层
         */
        let residueLayersName = this._generalLayer;
        for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
            let layer = layers[layerIndex];
            if (layer.getComponent(cc.Camera)) continue;

            for (let nameIndex = 0; nameIndex < residueLayersName.length; nameIndex++) {

                if (layer.name == residueLayersName[nameIndex]) {
                    residueLayersName[nameIndex] = null;
                    ccvv.layer = layers[layerIndex];
                    break;
                }
            }
        }

    }

}


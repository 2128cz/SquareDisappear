/**
 * cocos2.4 2d部分只提供了音量的设置，所以这里只实现包络与并发控制的功能
 * 以及在包络的基础上扩展出倾听者功能。
 * 
 * 如何使用：
 * 你可以只导入SoundPlayer这个类，并用new SoundPlayer( $soundClip )的方式来播放一次音频  
 * new的音频不需要保存，等待播放完毕后会自动销毁；  
 * 不过销毁后依然可以继续持有soundpalyer实例，并通过调用play等播放方法重新播放，这是符合用户直觉的。  
 * 如果需要完成多音频并发，可以通过在new音频前 预先指定将要存入的播放序列，
 * 而这可以通过new声音库预设器来完成。
 * 
 * 播放序列过程：
 * 在进行'new SoundPlayer'时，'SoundPlayer'会自动推入到剪辑发射列表，
 * 并等待用户后续的所有操作完成，在随后的生命周期函数中，效果器与播放器都会被一一处理。
 * 
 * 
 * 
 */

import { SoundLibrary, IPreinstallInterface, SoundPlayer, ISoundTrackSequenceInterface, ISceneSoundPlaybackControllerInterface } from "../class/AudioClass";
import SoundListener from "./SoundListener";

const { ccclass, property, executeInEditMode, playOnFocus, requireComponent, menu, executionOrder, disallowMultiple, inspector, help } = cc._decorator;


@ccclass()
@menu('Audio/SoundPlayerManager')
@help('https://github.com/2128cz/CocosCopilot')
@disallowMultiple
// @requireComponent(SoundListener)
// https://docs.cocos.com/creator/manual/zh/editor/extension/inspector.html
@inspector('packages://assets/scripts/base/tool/CompTable.ts')
/**
 * 播放器组件类
 */
class SceneSoundPlaybackController extends cc.Component implements ISceneSoundPlaybackControllerInterface {

    onLoad() { SoundLibrary.soundManager = this; }

    // start() { }

    update(dt) {
        if (SoundLibrary.readyLaunchedList.length > 0) {
            let nowInst: SoundPlayer = null;
            SoundLibrary.readyLaunchedList.forEach((element) => {
                if (element instanceof SoundPlayer) {
                    nowInst = element;
                    nowInst.play();
                }
                else {

                }
            });
            SoundLibrary.readyLaunchedList = []
        }
    }

    // lateUpdate() {}
    // onDestory() {}
    // onEnable() {}
    // onDisable() { console.warn("音乐播放器被隐藏"); }
}
/**
 * 播放器预设器  
 * 是所有声音和效果的基类  
 * 提供了基本的与控制器处理的方式
 * 你可以在一个播放器后跟随多个播放预设，它们会根据当前所处的库预设器来动态调整
 */
class SoundPlayerPreinstall implements IPreinstallInterface {
    /**
     * 
     */
    constructor(contor: boolean) {
        this.ignoreSequence = contor;
    }

    public clong(): IPreinstallInterface {
        return new SoundPlayerPreinstall(this.ignoreSequence);
    }
    public ignoreSequence: boolean = false;
}
/**
 * 声音单例库预设器
 * 提供了规范的库单例控制方式
 */
// class SoundLibraryPreinstall implements IPreinstallInterface {
//     /**
//      *
//      */
//     constructor() {

//     }
//     public clong(): IPreinstallInterface {

//     }
// }
/**
 * 声音衰减器  
 */
class SoundAttenuation extends SoundPlayerPreinstall { }
/**
 * 声音混合器  
 * 混合器内的声音会根据自身所处的维度对混合曲线进行采样，
 * 自动设定自身的参数
 */
class SoundSubmix extends SoundPlayerPreinstall {

}
/**
 * 声音并发器  
 * 并发器可以设定并发数量，并自动设定延时与音量模拟混响  
 * 但并发器并非发射器，不可以推入音乐资产
 */
class SoundConcurrency extends SoundPlayerPreinstall {

    // 并发性
    /**
     * 最大计数
     */
    public MaxCount: number = 8;
    /**
     * 以拥有者为限
     */
    public LimitToOwner: boolean = false;
    /**
     * 解析规则
     */
    public ResolutionRule: number = 0;
    /**
     * 再触发器时间
     */
    public RetriggerTime: number = 0.0001;

    // 体积比例
    /**
     * 体积规模
     */
    public VolumeScale: number = 1;
    /**
     * 音量比例模式
     */
    public VolumeScaleMode: number = 1;
    /**
     * 交错时间
     */
    public DuckTime: number = 0.01;
    /**
     * 可以恢复
     */
    public CanRecover: boolean = true;
    /**
     * 恢复时间
     */
    public RecoverTime: number = 0.01;

    // 抢断播放
    // 抢断后释放时间
    public VoiceStealReleaseTime: number = 0.1;
}

export {
    SceneSoundPlaybackController, // 播放器控制器组件类
    // SoundPlayerPreinstall, // 播放器预设类，此类不参与运算
    SoundPlayer, // 声音播放器实例类，只播放音乐可以就只导入这个
    // 以下为预制器类
    // SoundLibraryPreinstall, // 声音单例库预设器
    SoundAttenuation, // 声音衰减器
    SoundSubmix, // 声音混合器
    SoundConcurrency, // 声音并发器
}
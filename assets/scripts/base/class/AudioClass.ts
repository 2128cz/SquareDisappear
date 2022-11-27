import SoundPlayer from "./SoundPlayerClass";
/**
 * 通用预设器接口
 */
interface IPreinstallInterface {
    /**
     * 在加入序列时被忽略，或在开始作为持久数据存在
     */
    ignoreSequence: boolean,
    /**
     * 克隆此预设器  
     * 将返回新的预设器，并重新执行序列过程
     */
    clong(): IPreinstallInterface,
}
/**
 * 声音轨道序列接口
 */
interface ISoundTrackSequenceInterface {
    [key: string]: SoundPlayer[],
}
/**
 * 场景声音播放控制器接口
 */
interface ISceneSoundPlaybackControllerInterface { }
/**
 * 声音轨道序列枚举  
 * 每个轨道序列中包含多个通道，每个通道都是独立的，可以随意推入并用预设器控制
 */
enum ESoundTrack {
    ambient,
    bypass,
    focus,
    other
}
/**
 * 声轨通道枚举  
 * 通道用来细分轨道序列，每个通道都是独立的，可以随意推入并用预设器控制
 */
enum ESoundChannel {
    _track_0,
    _track_1
}
/**
 * 包络模型
 */
enum EBundleModel {
    /**
     * 关闭
     */
    OFF,
    /**
     * 普通模型  
     * 在未指定S时，退化为AHR（AHDSR）
     */
    ADSR, 
    /**
     * 静默模型  
     * 同样适用DAHDSR
     */
    DADSR,

}
/**
 * 声音播放模式  
 * 用于表示在何种方式下进行播放
 */
enum EAudioPlayMode{
    /**
     * 即刻播放
     */
    now,
    /**
     * 下一个小节处播放
     */
    atNextBeat,
    /**
     * 下一个1/2小节处播放
     */
    atNextBeat2,
    /**
     * 下一个1/4小节处播放
     */
    atNextBeat4,
    /**
     * 下一个1/8小节处播放
     */
    atNextBeat8,
    /**
     * 下一个1/16小节处播放
     */
    atNextBeat16,
    /**
     * 下一个1/32小节处播放
     */
    atNextBeat32,
    /**
     * 在一段时间后播放（大于的部分会换成循环次数）
     */
    delay,
    /**
     * 等待当前播放完毕后播放
     */
    waitCurEnd,
    /**
     * 等待循环完毕后播放
     */
    waitLoopEnd,
}
/**
 * 声音单例库类
 */
class SoundLibrary {
    /**
     * 待发列表
     */
    protected static _SoundList_ReadyLaunched: SoundPlayer[] = [];
    /**
     * 获取待发列表
     */
    public static get readyLaunchedList(): SoundPlayer[] { return this._SoundList_ReadyLaunched }
    /**
     * 设置待发列表
     */
    public static set readyLaunchedList(sl: SoundPlayer[]) { this._SoundList_ReadyLaunched = sl }
    /**
     * 添加待发列表项目
     */
    public static set readyLaunched(sl: SoundPlayer) { if (!this._SoundList_ReadyLaunched) this._SoundList_ReadyLaunched = []; this.readyLaunchedList.push(sl) }

    /**
     * 声音编辑轨道
     */
    protected static _SoundEditingTrack: ISoundTrackSequenceInterface = null;
    /**
     * 获取声音编辑轨道
     */
    public static get soundEditingTrack(): ISoundTrackSequenceInterface {
        this._SoundEditingTrack = this._SoundEditingTrack || (() => {
            let soundEditingTrack = {};
            Object.keys(ESoundTrack).forEach(ST => {
                if (isNaN(parseInt(ST))) {
                    Object.keys(ESoundChannel).forEach(SC => {
                        if (isNaN(parseInt(SC))) {
                            soundEditingTrack[ST + SC] = [];
                        }
                    });
                }
            });
            return soundEditingTrack as ISoundTrackSequenceInterface;
        })()
        return this._SoundEditingTrack
    }
    /**
     * 获取枚举上的声轨
     * @param tarck 
     * @param channel 
     * @returns 
     */
    public static getEditTrack(tarck: ESoundTrack, channel: ESoundChannel): SoundPlayer[] {
        return this.soundEditingTrack[ESoundTrack[tarck] + ESoundChannel[channel]];
    }

    protected static _SoundManager: cc.Component = null;
    /**
     * 获取声音控制管理器
     */
    public static get soundManager(): cc.Component { return this._SoundManager }
    /**
     * 设置声音控制管理器
     */
    public static set soundManager(SPM: cc.Component) { this._SoundManager = SPM }

}

export {
    IPreinstallInterface,
    SoundPlayer,
    ISoundTrackSequenceInterface,
    ISceneSoundPlaybackControllerInterface,
    EBundleModel,   // 包络模型枚举，外部一般情况下不需要引用
    EAudioPlayMode, // 播放模式枚举
    ESoundTrack,    // 声音轨道枚举
    ESoundChannel,  // 声音通道枚举
    SoundLibrary,   // 声音库
}
import SoundListener from "./SoundListener";

const { ccclass, property, executeInEditMode, playOnFocus, requireComponent, menu, executionOrder, disallowMultiple, inspector, help } = cc._decorator;

@ccclass('cc.SoundPlayer')
@menu('Audio/SoundPlayerManager')
@help('https://github.com/2128cz/CocosCopilot')
@disallowMultiple
// @requireComponent(SoundListener)
// https://docs.cocos.com/creator/manual/zh/editor/extension/inspector.html
@inspector('packages://assets/scripts/base/tool/CompTable.ts')
/**
 * 播放器组件类
 */
class SoundPlayercontroller extends cc.Component {

    // TAG LIFE-CYCLE callbacks                                                                              

    onLoad() { SoundLibrary.soundManager = this; }
    // start() { }

    update(dt) {
        SoundLibrary.readyLaunchedList.forEach(element => {

        });
    }

    // lateUpdate() {}
    // onDestory() {}
    // onEnable() {}

    onDisable() { console.warn("音乐播放器被隐藏"); }
}
/**
 * 声音预设器  
 * 是所有声音和效果的基类  
 * 提供了基本的与控制器处理的方式
 */
class SoundPreinstall {
    constructor(contor: boolean) {
        this.isControl = contor;
    }
    public isControl: boolean = false;
}
/**
 * 声音播放器实例类
 */
class SoundPlayer extends SoundPreinstall {
    /**
     * 创建一个音乐播放器实例  
     * 注意，不要在onload阶段进行实例化，会造成引用链断裂
     * @param AudioClip 声音资源
     */
    constructor(AudioClip: cc.AudioClip)
    /**
     * 创建一个音乐播放器实例  
     * 注意，不要在onload阶段进行实例化，会造成引用链断裂
     * @param AudioClip 声音资源
     * @param loop 循环次数，-1为无限循环，0为播放一次，>0为循环指定次数
     */
    constructor(AudioClip: cc.AudioClip, loop: number)
    /**
     * 创建一个音乐播放器实例  
     * 注意，不要在onload阶段进行实例化，会造成引用链断裂
     * @param AudioClip 声音资源
     * @param loop 是否循环
     */
    constructor(AudioClip: cc.AudioClip, loop: boolean)
    /**
     * 创建一个音乐播放器实例  
     * 注意，不要在onload阶段进行实例化，会造成引用链断裂
     * @param AudioClip 声音资源
     * @param loop 循环次数，-1为无限循环，0为播放一次，>0为循环指定次数
     * @param volume 音量0-1
     */
    constructor(AudioClip: cc.AudioClip, loop: number, volume: number)
    /**
     * 创建一个音乐播放器实例  
     * 注意，不要在onload阶段进行实例化，会造成引用链断裂
     * @param AudioClip 声音资源
     * @param loop 是否循环
     * @param volume 音量0-1
     */
    constructor(AudioClip: cc.AudioClip, loop: boolean, volume: number)
    constructor(AudioClip: cc.AudioClip, loop?: number | boolean, volume?: number) {
        super(true);
        cc.log(SoundLibrary.soundManager);
        if (SoundLibrary.soundManager) {
            this._AudioSourceInstantiate = SoundLibrary.soundManager.node.addComponent(cc.AudioSource);
        }
        else {
            super(false);
            cc.audioEngine.playMusic(AudioClip, typeof loop == 'boolean' ? loop : loop < 0)
            cc.warn(`请检查场景中是否存在播放管理器组件，或是存在在onload阶段播放的音频，
            当前播放器已退化为单例，无法并发播放，请悉知，播放资源：${AudioClip}`);
            return;
        }
        this.clip = AudioClip;
        if (typeof loop == 'boolean')
            this.loop = loop;
        else {
            let loopTime = loop ? Math.floor(loop) : 0;
            this.loop = loopTime < 0;
            this._LoopTime = loopTime < 0 ? null : Math.min(loopTime, 1);
        }
        this.volume = volume ? Math.max(Math.min(volume, 1), 0) : 1;
        SoundLibrary.readyLaunched = this;
    }

    // tag 宏                                                                                                

    /**
     * 声音组件实例
     */
    protected _AudioSourceInstantiate: cc.AudioSource = null;
    public get audioSourceInstantiate(): cc.AudioSource { return this._AudioSourceInstantiate }
    public get isPlaying(): boolean { return this._AudioSourceInstantiate.isPlaying }
    // 资源
    public get clip(): cc.AudioClip { return this._AudioSourceInstantiate.clip }
    public set clip(value: cc.AudioClip) { this._AudioSourceInstantiate.clip = value }
    // 循环
    public get loop(): boolean { return this._AudioSourceInstantiate.loop }
    public set loop(value: boolean) { this._AudioSourceInstantiate.loop = value }
    // 音量
    public get volume(): number { return this._AudioSourceInstantiate.volume }
    public set volume(value: number) { this._AudioSourceInstantiate.volume = value }
    // 静音
    public get mute(): boolean { return this._AudioSourceInstantiate.mute }
    public set mute(value: boolean) { this._AudioSourceInstantiate.mute = value }
    /**
     * 播放音频剪辑。
     * @returns 
     */
    public play(): void { return this._AudioSourceInstantiate.play() }
    /**
     * 停止当前音频剪辑。
     * @returns 
     */
    public stop(): void { return this._AudioSourceInstantiate.stop() }
    /**
     * 暂停当前音频剪辑。
     * @returns 
     */
    public pause(): void { return this._AudioSourceInstantiate.pause() }
    /**
     * 恢复播放。
     * @returns 
     */
    public resume(): void { return this._AudioSourceInstantiate.resume() }
    /**
     * 从头开始播放。
     * @returns 
     */
    public rewind(): void { return this._AudioSourceInstantiate.rewind() }
    /**
     * 获取当前的播放时间
     * @returns 
     */
    public getCurrentTime(): number { return this._AudioSourceInstantiate.getCurrentTime() }
    /**
     * 设置当前的播放时间
     * @param time 
     * @returns 
     */
    public setCurrentTime(time: number): number { return this._AudioSourceInstantiate.setCurrentTime(time) }
    /**
     * 获取当前音频的长度
     * @returns 
     */
    public getDuration(): number { return this._AudioSourceInstantiate.getDuration() }
    /**
     * 循环次数
     * 如果为null则为无限循环，但是否为无限循环不该从这里进行判断
     */
    protected _LoopTime: number = null;
}

/**
 * 声音衰减器  
 */
class SoundAttenuation extends SoundPreinstall { }
/**
 * 声音混合器  
 * 混合器内的声音会根据自身所处的维度对混合曲线进行采样，
 * 自动设定自身的参数
 */
class SoundSubmix extends SoundPreinstall { }
/**
 * 声音并发器  
 * 并发器可以设定并发数量，并自动设定延时与音量模拟混响  
 * 但并发器并非发射器，不可以推入音乐资产
 */
class SoundConcurrency extends SoundPreinstall {

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
/**
 * 声音播放器静态类
 * 不应该被导出或是实例化
 */
class SoundLibrary extends SoundPreinstall {

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
    public static set readyLaunched(sl: SoundPlayer) { this.readyLaunchedList.push(sl) }

    /**
     * 背景音乐列表
     */
    protected static _SoundList_AmbientMusic: SoundPlayer[] = null;
    /**
     * 背景音效列表
     */
    protected static _SoundList_AmbientEffect: SoundPlayer[] = null;
    /**
     * 前景音乐列表
     */
    protected static _SoundList_Music: SoundPlayer[] = null;
    /**
     * 前景音效列表
     */
    protected static _SoundList_Effect: SoundPlayer[] = null;

    protected static _SoundManager: SoundPlayercontroller = null;
    /**
     * 获取声音控制管理器
     */
    public static get soundManager(): SoundPlayercontroller { return this._SoundManager }
    /**
     * 设置声音控制管理器
     */
    public static set soundManager(SPM: SoundPlayercontroller) { this._SoundManager = SPM }

}

export {
    SoundPlayercontroller, // 播放器组件类
    SoundPlayer, // 声音播放器实例类，只播放音乐可以就只导入这个
    SoundPreinstall, // 音效预设类
    // 以下为预制特效类
    SoundAttenuation, // 声音衰减器
    SoundSubmix, // 声音混合器
    SoundConcurrency, // 声音并发器
}
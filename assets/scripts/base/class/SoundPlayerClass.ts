import { IPreinstallInterface, SoundLibrary } from "./AudioClass";
/**
 * 声音播放器引擎交互框架
 */
class SoundPlayer_Framework implements IPreinstallInterface {
    /**
     * 框架提供播放器基本互动属性
     * 不参与任何功能性设计
     */
    constructor() { }

    public clong(): IPreinstallInterface {
        return new SoundPlayer(this.clip, this.loop, this.volume);
    }

    public ignoreSequence: boolean = false;

    // tag 宏                                                                                                

    // tag 组件参数方法 

    /**
     * 声音组件实例
     */
    protected _AudioSourceComponent: cc.AudioSource = null;
    public get audioSourceComponent(): cc.AudioSource { return this._AudioSourceComponent }

    public get isPlaying(): boolean { return this._AudioSourceComponent.isPlaying }
    /**
     * 获取音频资产文件
     */
    public get clip(): cc.AudioClip { return this._AudioSourceComponent.clip }
    /**
     * 设置音频资产文件
     */
    public set clip(value: cc.AudioClip) { this._AudioSourceComponent.clip = value }
    /**
     * 获取是否循环
     */
    public get loop(): boolean { return this._AudioSourceComponent.loop }
    /**
     * 设置是否循环
     */
    public set loop(value: boolean) { this._AudioSourceComponent.loop = value }
    /**
     * 获取音量
     */
    public get volume(): number { return this._AudioSourceComponent.volume }
    /**
     * 设置音量
     */
    public set volume(value: number) { this._AudioSourceComponent.volume = value }
    /**
     * 获取是否静音
     */
    public get mute(): boolean { return this._AudioSourceComponent.mute }
    /**
     * 设置是否静音
     */
    public set mute(value: boolean) { this._AudioSourceComponent.mute = value }

    // tag 组件控制方法 

    /**
     * 播放音频剪辑。
     * @returns 
     */
    public play(): void { return this._AudioSourceComponent.play() }
    /**
     * 停止当前音频剪辑。
     * @returns 
     */
    public stop(): void { return this._AudioSourceComponent.stop() }
    /**
     * 暂停当前音频剪辑。
     * @returns 
     */
    public pause(): void { return this._AudioSourceComponent.pause() }
    /**
     * 恢复播放。
     * @returns 
     */
    public resume(): void { return this._AudioSourceComponent.resume() }
    /**
     * 从头开始播放。
     * @returns 
     */
    public rewind(): void { return this._AudioSourceComponent.rewind() }
    /**
     * 获取当前的播放时间
     * @returns 
     */
    public getCurrentTime(): number { return this._AudioSourceComponent.getCurrentTime() }
    /**
     * 设置当前的播放时间
     * @param time 
     * @returns 
     */
    public setCurrentTime(time: number): number { return this._AudioSourceComponent.setCurrentTime(time) }
    /**
     * 获取当前音频的长度
     * @returns 
     */
    public getDuration(): number { return this._AudioSourceComponent.getDuration() }
    /**
     * 播放器循环次数
     */
    protected _LoopTime: number = null;
}

/**
 * 声音播放器类
 * 
 */
export default class SoundPlayer extends SoundPlayer_Framework {

    public static cue(sp: SoundPlayer) {
        return new PlaybackSequencePreinstall(sp);
    }

    /**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * 默认播放一次，音量1
     * @param AudioClip 声音资源，如果不给定资源目标，播放器将退化为设置器
     */
    constructor(AudioClip?: cc.AudioClip)
    /**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * @param AudioClip 声音资源
     * @param loop 循环次数，-1为无限循环，0为播放一次，>0为循环指定次数
     */
    constructor(AudioClip: cc.AudioClip, loop: number)
    /**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * @param AudioClip 声音资源
     * @param loop 是否循环
     */
    constructor(AudioClip: cc.AudioClip, loop: boolean)
    /**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * @param AudioClip 声音资源
     * @param loop 循环次数，-1为无限循环，0为播放一次，>0为循环指定次数
     * @param volume 音量0-1
     */
    constructor(AudioClip: cc.AudioClip, loop: number, volume: number)
    /**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * @param AudioClip 声音资源
     * @param loop 是否循环
     * @param volume 音量0-1
     */
    constructor(AudioClip: cc.AudioClip, loop: boolean, volume: number)
    constructor(AudioClip?: cc.AudioClip, loop?: number | boolean, volume?: number) {
        super();
        if (!AudioClip) return;
        if (SoundLibrary.soundManager) {
            this._AudioSourceComponent = SoundLibrary.soundManager.node.addComponent(cc.AudioSource);
        }
        else {
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

}
/**
 * 播放器序列预设
 */
class PlaybackSequencePreinstall {
    /**
     * 传入一个播放器，并在随后的方法中对其进行一系列的动画序列控制
     */
    constructor(soundPlayer: SoundPlayer) {
        this.soundPlayerTarget = soundPlayer;
    }

    // tag 参数 宏 

    /**
     * 播放器目标
     */
    protected soundPlayerTarget: SoundPlayer = null;
}
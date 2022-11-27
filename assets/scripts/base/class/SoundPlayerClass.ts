import {
	IPreinstallInterface,
	SoundLibrary,
	EBundleModel,
	EAudioPlayMode
} from "./AudioClass";
/**
 * 声音播放器引擎交互框架
 */
class SoundPlayer_Framework implements IPreinstallInterface {
	/**
     * 框架提供播放器基本互动属性
     * 不参与任何功能性设计
     */
	constructor() {}

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
	public get audioSourceComponent(): cc.AudioSource {
		return this._AudioSourceComponent;
	}

	public get isPlaying(): boolean {
		return this._AudioSourceComponent.isPlaying;
	}
	/**
     * 获取音频资产文件
     */
	public get clip(): cc.AudioClip {
		return this._AudioSourceComponent.clip;
	}
	/**
     * 设置音频资产文件
     */
	public set clip(value: cc.AudioClip) {
		this._AudioSourceComponent.clip = value;
	}
	/**
     * 获取是否循环
     */
	public get loop(): boolean {
		return this._AudioSourceComponent.loop;
	}
	/**
     * 设置是否循环
     */
	public set loop(value: boolean) {
		this._AudioSourceComponent.loop = value;
	}
	/**
     * 获取音量
     */
	public get volume(): number {
		return this._AudioSourceComponent.volume;
	}
	/**
     * 设置音量
     */
	public set volume(value: number) {
		this._AudioSourceComponent.volume = value;
	}
	/**
     * 获取是否静音
     */
	public get mute(): boolean {
		return this._AudioSourceComponent.mute;
	}
	/**
     * 设置是否静音
     */
	public set mute(value: boolean) {
		this._AudioSourceComponent.mute = value;
	}

	// tag 组件控制方法

	/**
     * 播放音频剪辑。
     * @returns 
     */
	public play(): void {
		return this._AudioSourceComponent.play();
	}
	/**
     * 停止当前音频剪辑。
     * @returns 
     */
	public stop(): void {
		if (this.isPlaying) return this._AudioSourceComponent.stop();
	}
	/**
     * 暂停当前音频剪辑。
     * @returns 
     */
	public pause(): void {
		return this._AudioSourceComponent.pause();
	}
	/**
     * 恢复播放。
     * @returns 
     */
	public resume(): void {
		return this._AudioSourceComponent.resume();
	}
	/**
     * 从头开始播放。
     * @returns 
     */
	public rewind(): void {
		return this._AudioSourceComponent.rewind();
	}
	/**
     * 获取当前的播放时间
     * @returns 
     */
	public get CurrentTime(): number {
		return this._AudioSourceComponent.getCurrentTime();
	}
	/**
     * 设置当前的播放时间
     * @param time 
     * @returns 
     */
	public set CurrentTime(time: number) {
		this._AudioSourceComponent.setCurrentTime(time);
	}
	/**
     * 获取当前音频的长度
     * @returns 
     */
	public get Duration(): number {
		return this._AudioSourceComponent.getDuration();
	}
	/**
     * 播放器循环次数  
	 * 如果已经定义了无限循环，那么此项将无效
     */
	protected _LoopTime: number = null;
}

/**
 * 声音播放器类
 * 
 */
export default class SoundPlayer extends SoundPlayer_Framework {
	/**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * 默认播放一次，音量1
     * @param AudioClip 声音资源，如果不给定资源目标，播放器将退化为设置器
     */
	constructor(AudioClip?: cc.AudioClip);
	/**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * @param AudioClip 声音资源
     * @param loop 循环次数，-1为无限循环，0为播放一次，>0为循环指定次数
     */
	constructor(AudioClip: cc.AudioClip, loop: number);
	/**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * @param AudioClip 声音资源
     * @param loop 是否循环
     */
	constructor(AudioClip: cc.AudioClip, loop: boolean);
	/**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * @param AudioClip 声音资源
     * @param loop 循环次数，-1为无限循环，0为播放一次，>0为循环指定次数
     * @param volume 音量0-1
     */
	constructor(AudioClip: cc.AudioClip, loop: number, volume: number);
	/**
     * 创建一个音乐播放器实例  
     * 注意，请在onload阶段之后再进行实例化，否则会退化为单例播放  
     * 其他预设器必须在播放器之后进行实例化或复制
     * @param AudioClip 声音资源
     * @param loop 是否循环
     * @param volume 音量0-1
     */
	constructor(AudioClip: cc.AudioClip, loop: boolean, volume: number);
	constructor(
		AudioClip?: cc.AudioClip,
		loop?: number | boolean,
		volume?: number
	) {
		super();
		if (!AudioClip) return;
		if (SoundLibrary.soundManager) {
			this._AudioSourceComponent = SoundLibrary.soundManager.node.addComponent(
				cc.AudioSource
			);
		} else {
			cc.audioEngine.playMusic(
				AudioClip,
				typeof loop == "boolean" ? loop : loop < 0
			);
			cc.warn(`请检查场景中是否存在播放管理器组件，或是存在在onload阶段播放的音频，
        	当前播放器已退化为单例，无法并发播放，请悉知，播放资源：${AudioClip}`);
			return;
		}
		this.clip = AudioClip;
		if (typeof loop == "boolean") this.loop = loop;
		else {
			let loopTime = loop ? Math.floor(loop) : 0;
			this.loop = loopTime < 0;
			this._LoopTime = loopTime < 0 ? null : Math.min(loopTime, 1);
		}
		this.volume = volume ? Math.max(Math.min(volume, 1), 0) : 1;
		SoundLibrary.readyLaunched = this;

		this.updateEnvelope();
	}

	/**
	 * 更新控制
	 */
	private updateEnvelope() {
		let unsignedfunction = "update";
		let changeTarget = () => {
			cc.log("已经切换源");
			if (this._AudioSourceComponent) {
				this._AudioSourceComponent.stop();
				this._AudioSourceComponent.destroy();
			}
			// if (this._PlaybackPreinstall.soundPlayerTarget) {
			// 	this._AudioSourceComponent = this._PlaybackPreinstall.soundPlayerTarget._AudioSourceComponent;
			// }
			this._PlaybackPreinstall = void 0;
			this._AudioSourceComponent[unsignedfunction] = void 0;
		};
		this._AudioSourceComponent[unsignedfunction] = dt => {
			if (
				this._PlaybackPreinstall &&
				this._PlaybackPreinstall != void 0
			) {
				this.volume = this._PlaybackPreinstall.getEnvVol(
					this.CurrentTime
				);
				if (this.volume == 0 && !this.loop) changeTarget();
			}
			if (!this.loop && this.Duration - this.CurrentTime < dt) {
				if (this._LoopTime && --this._LoopTime > 0) this.rewind();
				else changeTarget();
			}
		};
	}

	/**
     * 播放器换源  
     * @param sp 切换目标
     * @returns 
     */
	public switch(sp?: SoundPlayer) {
		this.setting();
		this._PlaybackPreinstall.soundPlayerTarget = sp;
		return this._PlaybackPreinstall;
	}
	/**
	 * 播放器设置  
	 * @returns 
	 */
	public setting() {
		this._PlaybackPreinstall = new PlaybackSequencePreinstall(this);
		return this._PlaybackPreinstall;
	}

	/**
	 * 秒节拍
	 */
	protected _SecondPerBeat: number = null;
	/**
	 * 获取每分钟节拍数
	 */
	public get bpm(): number {
		return 60 / this._SecondPerBeat;
	}
	/**
	 * 获设置每分钟节拍数
	 */
	public set bpm(value: number) {
		this._SecondPerBeat = 60 / value;
	}
	/**
	 * 获取节拍间隔秒
	 */
	public get beatSecond(): number {
		return this._SecondPerBeat;
	}
	/**
	 * 播放器序列预设
	 */
	protected _PlaybackPreinstall: PlaybackSequencePreinstall = null;
}
/**
 * 播放器序列预设
 */
class PlaybackSequencePreinstall {
	/**
     * 传入一个播放器，并在随后的方法中对其进行一系列的动画序列控制
     */
	constructor(soundPlayer: SoundPlayer) {
		this._SoundPlayerSource = soundPlayer;
	}

	/**
     * 安培包络控制器(AMP ENV)  
	 * 在当前播放下立即应用AHR模型并结束  
     * @param release: [0,20]绝对时间秒  
     */
	public fadeOutNow(r: number): PlaybackSequencePreinstall {
		this._SoundPlayerSource.loop = false;
		return this.envelope(
			true,
			0,
			0,
			0,
			this._SoundPlayerSource.CurrentTime,
			this._SoundPlayerSource.volume,
			r
		);
	}

	/**
     * 安培包络控制器(AMP ENV)  
	 * AHR模型
     * @param attack : [0,1]比例  
     * @param hold   : [0,1]比例  
     * @param release: [0,1]比例  
     */
	public envAHR(a: number, h: number, r: number): PlaybackSequencePreinstall {
		return this.envelope(false, 0, a, 0, h, 1, r);
	}

	/**
     * 安培包络控制器(AMP ENV)  
	 * AHR模型，使用时间控制，时间无上限  
     * @param attack : [0,1]比例  
     * @param hold   : [0,1]比例  
     * @param release: [0,1]比例  
     */
	public envAHR_Time(
		a: number,
		h: number,
		r: number
	): PlaybackSequencePreinstall {
		return this.envelope(true, 0, a, 0, h, 1, r);
	}

	/**
     * 安培包络控制器(AMP ENV)  
	 * ADSR模型
     * @param attack : [0,1]比例  
     * @param decay  : [0,1]比例  
     * @param sustain: [0,1]比例  
     * @param release: [0,1]比例  
     */
	public envADSR(
		a: number,
		d: number,
		s: number,
		r: number
	): PlaybackSequencePreinstall {
		return this.envelope(false, 0, a, d, s, this.sustainVolume, r);
	}

	/**
     * 安培包络控制器(AMP ENV)  
	 * ADSR模型，使用时间控制，时间无上限
     * @param attack : [0,20]绝对时间秒   
     * @param decay  : [0,20]绝对时间秒   
     * @param sustain: [0,20]绝对时间秒   
     * @param release: [0,20]绝对时间秒   
     */
	public envADSR_Time(
		a: number,
		d: number,
		s: number,
		r: number
	): PlaybackSequencePreinstall {
		return this.envelope(true, 0, a, d, s, this.sustainVolume, r);
	}

	/**
     * 安培包络控制器(AMP ENV)  
	 * @param absoluteReferenceFrame : 是否为模型绝对参考系
	 * @param delay	 : 先导延时，[0,1]相对时间比例，[0,20]绝对时间秒  
     * @param attack : 上升时间，[0,1]相对时间比例，[0,20]绝对时间秒  
     * @param decay  : 衰减时间，[0,1]相对时间比例，[0,20]绝对时间秒  
     * @param sustain: 保持时间，[0,1]相对时间比例，[0,20]绝对时间秒  
	 * @param volume : 保持音量，[0,1]相对音量，[-oo,0]绝对音量分贝  
     * @param release: 释放时间，[0,1]相对时间比例，[0,20]绝对时间秒  
     */
	public envelope(
		absoluteReferenceFrame: boolean,
		delay: number,
		attack: number,
		decay: number,
		sustain: number,
		volume: number,
		release: number
	): PlaybackSequencePreinstall {
		let tolalTime = attack + decay + sustain + release;
		if (tolalTime <= 0) {
			this.ADSR = EBundleModel.OFF;
			return this;
		}
		let del = delay;
		let A = attack;
		let D = decay;
		let S = sustain;
		let R = release;
		let V = volume;
		if (absoluteReferenceFrame) {
			tolalTime += delay;
			// let sourceTime = this._SoundPlayerSource.Duration;
			del = delay / tolalTime;
			A = attack / tolalTime;
			D = decay / tolalTime;
			S = sustain / tolalTime;
			R = release / tolalTime;
			V = Math.pow(10, volume / 10);
		}
		if (delay > 0) this.ADSR = EBundleModel.DADSR;
		else this.ADSR = EBundleModel.ADSR;
		this._DelayTime = del;
		this._AttackTime = A;
		this._DecayTime = D;
		this._SustainTime = S;
		this._SustainVolume = V;
		this._ReleaseTime = R;
		return this;
	}

	/**
	 * 设置播放模式  
	 */
	public playMode(playmode: EAudioPlayMode) {
		this._PlayMode = playmode;
		return this;
	}

	/**
	 * 交叉渐变  
	 * @param fadeTime 交叉时间s
	 * @param exp 交叉曲线指数
	 */
	public crossfade(fadeTime: number, exp = 1) {
		this._SoundPlayerSource.loop = false;
		this.envelope(
			true,
			0,
			0,
			0,
			this._SoundPlayerSource.CurrentTime,
			this._SoundPlayerSource.volume,
			fadeTime
		);
		if (this._SoundPlayerTarget && this._SoundPlayerTarget != void 0) {
			this._SoundPlayerTarget.volume = 0;
			this.envelope(
				true,
				0,
				fadeTime,
				0,
				this._SoundPlayerTarget.Duration,
				this._SoundPlayerTarget.volume,
				0
			);
		}
		return this;
	}

	/**
	 * 将时间转为包络控制器上的时间
	 * @param time 声音比例时间
	 */
	public getEnvVol(time: number) {
		if (this.ADSR == EBundleModel.OFF) return 1;
		let timeArea = time;
		let subTime = (targetTime): number => {
			timeArea -= targetTime;
			return timeArea;
		};
		if (this.ADSR == EBundleModel.DADSR && subTime(this._DelayTime) < 0) {
			return 0;
		} else if (subTime(this._AttackTime) < 0) {
			return timeArea / this._AttackTime + 1;
		} else if (subTime(this._DecayTime) < 0) {
			let DT = Math.abs(timeArea / this._DecayTime);
			return (1 - DT) * this._SustainVolume + DT;
		} else if (subTime(this._SustainTime) < 0) {
			return this._SustainVolume;
		} else if (subTime(this._ReleaseTime) < 0) {
			return Math.abs(timeArea / this._ReleaseTime) * this._SustainVolume;
		} else {
			// this._SoundPlayerSource.stop();
			return 0;
		}
	}

	// tag 参数 宏

	/**
     * 播放器源
     */
	protected _SoundPlayerSource: SoundPlayer = null;
	/**
     * 播放器目标
     */
	protected _SoundPlayerTarget: SoundPlayer = null;
	/**
     * 是否存在换源目标？
     */
	protected _HasTarget: boolean = false;
	/**
     * 设置播放器目标  
     * 通常只由播放器内发起，不允许存在多个值，所以不支持链式程序
     */
	public set soundPlayerTarget(target: SoundPlayer) {
		if (this._HasTarget)
			cc.warn("A sound presetter cannot have more than one source");
		else {
			this._HasTarget = target ? true : false;
			this._SoundPlayerTarget = target;
		}
	}

	// tag ADSR设置

	/**
	 * 启用ADSR模型类型
	 */
	protected ADSR: EBundleModel = EBundleModel.OFF;
	/**
	 * 获取静默时间
	 */
	protected get delayTime(): number {
		return this._DelayTime;
	}
	protected _DelayTime: number = null;
	/**
	 * 获取上升时间
	 */
	protected get attackTime(): number {
		return this._AttackTime;
	}
	protected _AttackTime: number = null;
	/**
	 * 获取衰减时间
	 */
	protected get decayTime(): number {
		return this._DecayTime;
	}
	protected _DecayTime: number = null;
	/**
	 * 获取保持时间
	 */
	protected get sustainTime(): number {
		return this._SustainTime;
	}
	protected _SustainTime: number = null;
	/**
	 * 获取保持响度比例  
	 * 默认60%
	 */
	protected get sustainVolume(): number {
		return this._SustainVolume;
	}
	protected _SustainVolume: number = null;
	/**
	 * 获取释放时间
	 */
	protected get releaseTime(): number {
		return this._ReleaseTime;
	}
	protected _ReleaseTime: number = null;

	// tag 播放模式

	/**
	 * 播放模式
	 */
	protected _PlayMode: EAudioPlayMode = null;
	public get AudioPlayMode(): EAudioPlayMode {
		return this._PlayMode;
	}
}

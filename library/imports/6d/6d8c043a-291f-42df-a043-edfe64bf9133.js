"use strict";
cc._RF.push(module, '6d8c0Q6KR9C36BD7f5kv5Ez', 'SoundPlayer');
// scripts/base/tool/SoundPlayer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundConcurrency = exports.SoundSubmix = exports.SoundAttenuation = exports.SoundPreinstall = exports.SoundPlayer = exports.SoundPlayercontroller = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, playOnFocus = _a.playOnFocus, requireComponent = _a.requireComponent, menu = _a.menu, executionOrder = _a.executionOrder, disallowMultiple = _a.disallowMultiple, inspector = _a.inspector, help = _a.help;
var SoundPlayercontroller = /** @class */ (function (_super) {
    __extends(SoundPlayercontroller, _super);
    /**
     * 播放器组件类
     */
    function SoundPlayercontroller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // TAG LIFE-CYCLE callbacks                                                                              
    SoundPlayercontroller.prototype.onLoad = function () { SoundLibrary.soundManager = this; };
    // start() { }
    SoundPlayercontroller.prototype.update = function (dt) {
        SoundLibrary.readyLaunchedList.forEach(function (element) {
        });
    };
    // lateUpdate() {}
    // onDestory() {}
    // onEnable() {}
    SoundPlayercontroller.prototype.onDisable = function () { console.warn("音乐播放器被隐藏"); };
    SoundPlayercontroller = __decorate([
        ccclass('cc.SoundPlayer'),
        menu('Audio/SoundPlayerManager'),
        help('https://github.com/2128cz/CocosCopilot'),
        disallowMultiple
        // @requireComponent(SoundListener)
        // https://docs.cocos.com/creator/manual/zh/editor/extension/inspector.html
        ,
        inspector('packages://assets/scripts/base/tool/CompTable.ts')
        /**
         * 播放器组件类
         */
    ], SoundPlayercontroller);
    return SoundPlayercontroller;
}(cc.Component));
exports.SoundPlayercontroller = SoundPlayercontroller;
/**
 * 声音预设器
 * 是所有声音和效果的基类
 * 提供了基本的与控制器处理的方式
 */
var SoundPreinstall = /** @class */ (function () {
    function SoundPreinstall(contor) {
        this.isControl = false;
        this.isControl = contor;
    }
    return SoundPreinstall;
}());
exports.SoundPreinstall = SoundPreinstall;
/**
 * 声音播放器实例类
 */
var SoundPlayer = /** @class */ (function (_super) {
    __extends(SoundPlayer, _super);
    function SoundPlayer(AudioClip, loop, volume) {
        var _this = _super.call(this, true) || this;
        // tag 宏                                                                                                
        /**
         * 声音组件实例
         */
        _this._AudioSourceInstantiate = null;
        /**
         * 循环次数
         * 如果为null则为无限循环，但是否为无限循环不该从这里进行判断
         */
        _this._LoopTime = null;
        cc.log(SoundLibrary.soundManager);
        if (SoundLibrary.soundManager) {
            _this._AudioSourceInstantiate = SoundLibrary.soundManager.node.addComponent(cc.AudioSource);
        }
        else {
            _this = _super.call(this, false) || this;
            cc.audioEngine.playMusic(AudioClip, typeof loop == 'boolean' ? loop : loop < 0);
            cc.warn("\u8BF7\u68C0\u67E5\u573A\u666F\u4E2D\u662F\u5426\u5B58\u5728\u64AD\u653E\u7BA1\u7406\u5668\u7EC4\u4EF6\uFF0C\u6216\u662F\u5B58\u5728\u5728onload\u9636\u6BB5\u64AD\u653E\u7684\u97F3\u9891\uFF0C\n            \u5F53\u524D\u64AD\u653E\u5668\u5DF2\u9000\u5316\u4E3A\u5355\u4F8B\uFF0C\u65E0\u6CD5\u5E76\u53D1\u64AD\u653E\uFF0C\u8BF7\u6089\u77E5\uFF0C\u64AD\u653E\u8D44\u6E90\uFF1A" + AudioClip);
            return _this;
        }
        _this.clip = AudioClip;
        if (typeof loop == 'boolean')
            _this.loop = loop;
        else {
            var loopTime = loop ? Math.floor(loop) : 0;
            _this.loop = loopTime < 0;
            _this._LoopTime = loopTime < 0 ? null : Math.min(loopTime, 1);
        }
        _this.volume = volume ? Math.max(Math.min(volume, 1), 0) : 1;
        SoundLibrary.readyLaunched = _this;
        return _this;
    }
    Object.defineProperty(SoundPlayer.prototype, "audioSourceInstantiate", {
        get: function () { return this._AudioSourceInstantiate; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer.prototype, "isPlaying", {
        get: function () { return this._AudioSourceInstantiate.isPlaying; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer.prototype, "clip", {
        // 资源
        get: function () { return this._AudioSourceInstantiate.clip; },
        set: function (value) { this._AudioSourceInstantiate.clip = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer.prototype, "loop", {
        // 循环
        get: function () { return this._AudioSourceInstantiate.loop; },
        set: function (value) { this._AudioSourceInstantiate.loop = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer.prototype, "volume", {
        // 音量
        get: function () { return this._AudioSourceInstantiate.volume; },
        set: function (value) { this._AudioSourceInstantiate.volume = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer.prototype, "mute", {
        // 静音
        get: function () { return this._AudioSourceInstantiate.mute; },
        set: function (value) { this._AudioSourceInstantiate.mute = value; },
        enumerable: false,
        configurable: true
    });
    /**
     * 播放音频剪辑。
     * @returns
     */
    SoundPlayer.prototype.play = function () { return this._AudioSourceInstantiate.play(); };
    /**
     * 停止当前音频剪辑。
     * @returns
     */
    SoundPlayer.prototype.stop = function () { return this._AudioSourceInstantiate.stop(); };
    /**
     * 暂停当前音频剪辑。
     * @returns
     */
    SoundPlayer.prototype.pause = function () { return this._AudioSourceInstantiate.pause(); };
    /**
     * 恢复播放。
     * @returns
     */
    SoundPlayer.prototype.resume = function () { return this._AudioSourceInstantiate.resume(); };
    /**
     * 从头开始播放。
     * @returns
     */
    SoundPlayer.prototype.rewind = function () { return this._AudioSourceInstantiate.rewind(); };
    /**
     * 获取当前的播放时间
     * @returns
     */
    SoundPlayer.prototype.getCurrentTime = function () { return this._AudioSourceInstantiate.getCurrentTime(); };
    /**
     * 设置当前的播放时间
     * @param time
     * @returns
     */
    SoundPlayer.prototype.setCurrentTime = function (time) { return this._AudioSourceInstantiate.setCurrentTime(time); };
    /**
     * 获取当前音频的长度
     * @returns
     */
    SoundPlayer.prototype.getDuration = function () { return this._AudioSourceInstantiate.getDuration(); };
    return SoundPlayer;
}(SoundPreinstall));
exports.SoundPlayer = SoundPlayer;
/**
 * 声音衰减器
 */
var SoundAttenuation = /** @class */ (function (_super) {
    __extends(SoundAttenuation, _super);
    function SoundAttenuation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SoundAttenuation;
}(SoundPreinstall));
exports.SoundAttenuation = SoundAttenuation;
/**
 * 声音混合器
 * 混合器内的声音会根据自身所处的维度对混合曲线进行采样，
 * 自动设定自身的参数
 */
var SoundSubmix = /** @class */ (function (_super) {
    __extends(SoundSubmix, _super);
    function SoundSubmix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SoundSubmix;
}(SoundPreinstall));
exports.SoundSubmix = SoundSubmix;
/**
 * 声音并发器
 * 并发器可以设定并发数量，并自动设定延时与音量模拟混响
 * 但并发器并非发射器，不可以推入音乐资产
 */
var SoundConcurrency = /** @class */ (function (_super) {
    __extends(SoundConcurrency, _super);
    function SoundConcurrency() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 并发性
        /**
         * 最大计数
         */
        _this.MaxCount = 8;
        /**
         * 以拥有者为限
         */
        _this.LimitToOwner = false;
        /**
         * 解析规则
         */
        _this.ResolutionRule = 0;
        /**
         * 再触发器时间
         */
        _this.RetriggerTime = 0.0001;
        // 体积比例
        /**
         * 体积规模
         */
        _this.VolumeScale = 1;
        /**
         * 音量比例模式
         */
        _this.VolumeScaleMode = 1;
        /**
         * 交错时间
         */
        _this.DuckTime = 0.01;
        /**
         * 可以恢复
         */
        _this.CanRecover = true;
        /**
         * 恢复时间
         */
        _this.RecoverTime = 0.01;
        // 抢断播放
        // 抢断后释放时间
        _this.VoiceStealReleaseTime = 0.1;
        return _this;
    }
    return SoundConcurrency;
}(SoundPreinstall));
exports.SoundConcurrency = SoundConcurrency;
/**
 * 声音播放器静态类
 * 不应该被导出或是实例化
 */
var SoundLibrary = /** @class */ (function (_super) {
    __extends(SoundLibrary, _super);
    function SoundLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SoundLibrary, "readyLaunchedList", {
        /**
         * 获取待发列表
         */
        get: function () { return this._SoundList_ReadyLaunched; },
        /**
         * 设置待发列表
         */
        set: function (sl) { this._SoundList_ReadyLaunched = sl; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundLibrary, "readyLaunched", {
        /**
         * 添加待发列表项目
         */
        set: function (sl) { this.readyLaunchedList.push(sl); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundLibrary, "soundManager", {
        /**
         * 获取声音控制管理器
         */
        get: function () { return this._SoundManager; },
        /**
         * 设置声音控制管理器
         */
        set: function (SPM) { this._SoundManager = SPM; },
        enumerable: false,
        configurable: true
    });
    SoundLibrary._SoundList_ReadyLaunched = [];
    /**
     * 背景音乐列表
     */
    SoundLibrary._SoundList_AmbientMusic = null;
    /**
     * 背景音效列表
     */
    SoundLibrary._SoundList_AmbientEffect = null;
    /**
     * 前景音乐列表
     */
    SoundLibrary._SoundList_Music = null;
    /**
     * 前景音效列表
     */
    SoundLibrary._SoundList_Effect = null;
    SoundLibrary._SoundManager = null;
    return SoundLibrary;
}(SoundPreinstall));

cc._RF.pop();
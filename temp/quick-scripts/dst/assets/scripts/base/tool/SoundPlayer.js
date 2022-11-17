
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/SoundPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcU291bmRQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBbUksRUFBRSxDQUFDLFVBQVUsRUFBOUksT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsV0FBVyxpQkFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGNBQWMsb0JBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFZdko7SUFBb0MseUNBQVk7SUFIaEQ7O09BRUc7SUFDSDs7SUFrQkEsQ0FBQztJQWhCRyx5R0FBeUc7SUFFekcsc0NBQU0sR0FBTixjQUFXLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QyxjQUFjO0lBRWQsc0NBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxZQUFZLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztRQUU5QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUVoQix5Q0FBUyxHQUFULGNBQWMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFqQnZDLHFCQUFxQjtRQVYxQixPQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDekIsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBQ2hDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQztRQUM5QyxnQkFBZ0I7UUFDakIsbUNBQW1DO1FBQ25DLDJFQUEyRTs7UUFDMUUsU0FBUyxDQUFDLGtEQUFrRCxDQUFDO1FBQzlEOztXQUVHO09BQ0cscUJBQXFCLENBa0IxQjtJQUFELDRCQUFDO0NBbEJELEFBa0JDLENBbEJtQyxF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dW5kTGlzdGVuZXIgZnJvbSBcIi4vU291bmRMaXN0ZW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIHBsYXlPbkZvY3VzLCByZXF1aXJlQ29tcG9uZW50LCBtZW51LCBleGVjdXRpb25PcmRlciwgZGlzYWxsb3dNdWx0aXBsZSwgaW5zcGVjdG9yLCBoZWxwIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ2NjLlNvdW5kUGxheWVyJylcclxuQG1lbnUoJ0F1ZGlvL1NvdW5kUGxheWVyTWFuYWdlcicpXHJcbkBoZWxwKCdodHRwczovL2dpdGh1Yi5jb20vMjEyOGN6L0NvY29zQ29waWxvdCcpXHJcbkBkaXNhbGxvd011bHRpcGxlXHJcbi8vIEByZXF1aXJlQ29tcG9uZW50KFNvdW5kTGlzdGVuZXIpXHJcbi8vIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvZWRpdG9yL2V4dGVuc2lvbi9pbnNwZWN0b3IuaHRtbFxyXG5AaW5zcGVjdG9yKCdwYWNrYWdlczovL2Fzc2V0cy9zY3JpcHRzL2Jhc2UvdG9vbC9Db21wVGFibGUudHMnKVxyXG4vKipcclxuICog5pKt5pS+5Zmo57uE5Lu257G7XHJcbiAqL1xyXG5jbGFzcyBTb3VuZFBsYXllcmNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIFRBRyBMSUZFLUNZQ0xFIGNhbGxiYWNrcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIG9uTG9hZCgpIHsgU291bmRMaWJyYXJ5LnNvdW5kTWFuYWdlciA9IHRoaXM7IH1cclxuICAgIC8vIHN0YXJ0KCkgeyB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgU291bmRMaWJyYXJ5LnJlYWR5TGF1bmNoZWRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxhdGVVcGRhdGUoKSB7fVxyXG4gICAgLy8gb25EZXN0b3J5KCkge31cclxuICAgIC8vIG9uRW5hYmxlKCkge31cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7IGNvbnNvbGUud2FybihcIumfs+S5kOaSreaUvuWZqOiiq+makOiXj1wiKTsgfVxyXG59XHJcbi8qKlxyXG4gKiDlo7Dpn7PpooTorr7lmaggIFxyXG4gKiDmmK/miYDmnInlo7Dpn7PlkozmlYjmnpznmoTln7rnsbsgIFxyXG4gKiDmj5Dkvpvkuobln7rmnKznmoTkuI7mjqfliLblmajlpITnkIbnmoTmlrnlvI9cclxuICovXHJcbmNsYXNzIFNvdW5kUHJlaW5zdGFsbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250b3I6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzQ29udHJvbCA9IGNvbnRvcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpc0NvbnRyb2w6IGJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG4vKipcclxuICog5aOw6Z+z5pKt5pS+5Zmo5a6e5L6L57G7XHJcbiAqL1xyXG5jbGFzcyBTb3VuZFBsYXllciBleHRlbmRzIFNvdW5kUHJlaW5zdGFsbCB7XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOS4qumfs+S5kOaSreaUvuWZqOWunuS+iyAgXHJcbiAgICAgKiDms6jmhI/vvIzkuI3opoHlnKhvbmxvYWTpmLbmrrXov5vooYzlrp7kvovljJbvvIzkvJrpgKDmiJDlvJXnlKjpk77mlq3oo4JcclxuICAgICAqIEBwYXJhbSBBdWRpb0NsaXAg5aOw6Z+z6LWE5rqQXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKEF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwKVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuIDkuKrpn7PkuZDmkq3mlL7lmajlrp7kvosgIFxyXG4gICAgICog5rOo5oSP77yM5LiN6KaB5Zyob25sb2Fk6Zi25q616L+b6KGM5a6e5L6L5YyW77yM5Lya6YCg5oiQ5byV55So6ZO+5pat6KOCXHJcbiAgICAgKiBAcGFyYW0gQXVkaW9DbGlwIOWjsOmfs+i1hOa6kFxyXG4gICAgICogQHBhcmFtIGxvb3Ag5b6q546v5qyh5pWw77yMLTHkuLrml6DpmZDlvqrnjq/vvIww5Li65pKt5pS+5LiA5qyh77yMPjDkuLrlvqrnjq/mjIflrprmrKHmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoQXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAsIGxvb3A6IG51bWJlcilcclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA5Liq6Z+z5LmQ5pKt5pS+5Zmo5a6e5L6LICBcclxuICAgICAqIOazqOaEj++8jOS4jeimgeWcqG9ubG9hZOmYtuautei/m+ihjOWunuS+i+WMlu+8jOS8mumAoOaIkOW8leeUqOmTvuaWreijglxyXG4gICAgICogQHBhcmFtIEF1ZGlvQ2xpcCDlo7Dpn7PotYTmupBcclxuICAgICAqIEBwYXJhbSBsb29wIOaYr+WQpuW+queOr1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihBdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCwgbG9vcDogYm9vbGVhbilcclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA5Liq6Z+z5LmQ5pKt5pS+5Zmo5a6e5L6LICBcclxuICAgICAqIOazqOaEj++8jOS4jeimgeWcqG9ubG9hZOmYtuautei/m+ihjOWunuS+i+WMlu+8jOS8mumAoOaIkOW8leeUqOmTvuaWreijglxyXG4gICAgICogQHBhcmFtIEF1ZGlvQ2xpcCDlo7Dpn7PotYTmupBcclxuICAgICAqIEBwYXJhbSBsb29wIOW+queOr+asoeaVsO+8jC0x5Li65peg6ZmQ5b6q546v77yMMOS4uuaSreaUvuS4gOasoe+8jD4w5Li65b6q546v5oyH5a6a5qyh5pWwXHJcbiAgICAgKiBAcGFyYW0gdm9sdW1lIOmfs+mHjzAtMVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihBdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCwgbG9vcDogbnVtYmVyLCB2b2x1bWU6IG51bWJlcilcclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA5Liq6Z+z5LmQ5pKt5pS+5Zmo5a6e5L6LICBcclxuICAgICAqIOazqOaEj++8jOS4jeimgeWcqG9ubG9hZOmYtuautei/m+ihjOWunuS+i+WMlu+8jOS8mumAoOaIkOW8leeUqOmTvuaWreijglxyXG4gICAgICogQHBhcmFtIEF1ZGlvQ2xpcCDlo7Dpn7PotYTmupBcclxuICAgICAqIEBwYXJhbSBsb29wIOaYr+WQpuW+queOr1xyXG4gICAgICogQHBhcmFtIHZvbHVtZSDpn7Pph48wLTFcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoQXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAsIGxvb3A6IGJvb2xlYW4sIHZvbHVtZTogbnVtYmVyKVxyXG4gICAgY29uc3RydWN0b3IoQXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAsIGxvb3A/OiBudW1iZXIgfCBib29sZWFuLCB2b2x1bWU/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih0cnVlKTtcclxuICAgICAgICBjYy5sb2coU291bmRMaWJyYXJ5LnNvdW5kTWFuYWdlcik7XHJcbiAgICAgICAgaWYgKFNvdW5kTGlicmFyeS5zb3VuZE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fQXVkaW9Tb3VyY2VJbnN0YW50aWF0ZSA9IFNvdW5kTGlicmFyeS5zb3VuZE1hbmFnZXIubm9kZS5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3VwZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoQXVkaW9DbGlwLCB0eXBlb2YgbG9vcCA9PSAnYm9vbGVhbicgPyBsb29wIDogbG9vcCA8IDApXHJcbiAgICAgICAgICAgIGNjLndhcm4oYOivt+ajgOafpeWcuuaZr+S4reaYr+WQpuWtmOWcqOaSreaUvueuoeeQhuWZqOe7hOS7tu+8jOaIluaYr+WtmOWcqOWcqG9ubG9hZOmYtuauteaSreaUvueahOmfs+mike+8jFxyXG4gICAgICAgICAgICDlvZPliY3mkq3mlL7lmajlt7LpgIDljJbkuLrljZXkvovvvIzml6Dms5Xlubblj5Hmkq3mlL7vvIzor7fmgonnn6XvvIzmkq3mlL7otYTmupDvvJoke0F1ZGlvQ2xpcH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsaXAgPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsb29wID09ICdib29sZWFuJylcclxuICAgICAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxvb3BUaW1lID0gbG9vcCA/IE1hdGguZmxvb3IobG9vcCkgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLmxvb3AgPSBsb29wVGltZSA8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX0xvb3BUaW1lID0gbG9vcFRpbWUgPCAwID8gbnVsbCA6IE1hdGgubWluKGxvb3BUaW1lLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52b2x1bWUgPSB2b2x1bWUgPyBNYXRoLm1heChNYXRoLm1pbih2b2x1bWUsIDEpLCAwKSA6IDE7XHJcbiAgICAgICAgU291bmRMaWJyYXJ5LnJlYWR5TGF1bmNoZWQgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDlro8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWjsOmfs+e7hOS7tuWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0F1ZGlvU291cmNlSW5zdGFudGlhdGU6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgYXVkaW9Tb3VyY2VJbnN0YW50aWF0ZSgpOiBjYy5BdWRpb1NvdXJjZSB7IHJldHVybiB0aGlzLl9BdWRpb1NvdXJjZUluc3RhbnRpYXRlIH1cclxuICAgIHB1YmxpYyBnZXQgaXNQbGF5aW5nKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VJbnN0YW50aWF0ZS5pc1BsYXlpbmcgfVxyXG4gICAgLy8g6LWE5rqQXHJcbiAgICBwdWJsaWMgZ2V0IGNsaXAoKTogY2MuQXVkaW9DbGlwIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlSW5zdGFudGlhdGUuY2xpcCB9XHJcbiAgICBwdWJsaWMgc2V0IGNsaXAodmFsdWU6IGNjLkF1ZGlvQ2xpcCkgeyB0aGlzLl9BdWRpb1NvdXJjZUluc3RhbnRpYXRlLmNsaXAgPSB2YWx1ZSB9XHJcbiAgICAvLyDlvqrnjq9cclxuICAgIHB1YmxpYyBnZXQgbG9vcCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlSW5zdGFudGlhdGUubG9vcCB9XHJcbiAgICBwdWJsaWMgc2V0IGxvb3AodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fQXVkaW9Tb3VyY2VJbnN0YW50aWF0ZS5sb29wID0gdmFsdWUgfVxyXG4gICAgLy8g6Z+z6YePXHJcbiAgICBwdWJsaWMgZ2V0IHZvbHVtZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VJbnN0YW50aWF0ZS52b2x1bWUgfVxyXG4gICAgcHVibGljIHNldCB2b2x1bWUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9BdWRpb1NvdXJjZUluc3RhbnRpYXRlLnZvbHVtZSA9IHZhbHVlIH1cclxuICAgIC8vIOmdmemfs1xyXG4gICAgcHVibGljIGdldCBtdXRlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VJbnN0YW50aWF0ZS5tdXRlIH1cclxuICAgIHB1YmxpYyBzZXQgbXV0ZSh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9BdWRpb1NvdXJjZUluc3RhbnRpYXRlLm11dGUgPSB2YWx1ZSB9XHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+mikeWJqui+keOAglxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5KCk6IHZvaWQgeyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VJbnN0YW50aWF0ZS5wbGF5KCkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLlvZPliY3pn7PpopHliarovpHjgIJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlSW5zdGFudGlhdGUuc3RvcCgpIH1cclxuICAgIC8qKlxyXG4gICAgICog5pqC5YGc5b2T5YmN6Z+z6aKR5Ymq6L6R44CCXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhdXNlKCk6IHZvaWQgeyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VJbnN0YW50aWF0ZS5wYXVzZSgpIH1cclxuICAgIC8qKlxyXG4gICAgICog5oGi5aSN5pKt5pS+44CCXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlSW5zdGFudGlhdGUucmVzdW1lKCkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDku47lpLTlvIDlp4vmkq3mlL7jgIJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV3aW5kKCk6IHZvaWQgeyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VJbnN0YW50aWF0ZS5yZXdpbmQoKSB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeeahOaSreaUvuaXtumXtFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50VGltZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VJbnN0YW50aWF0ZS5nZXRDdXJyZW50VGltZSgpIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5b2T5YmN55qE5pKt5pS+5pe26Ze0XHJcbiAgICAgKiBAcGFyYW0gdGltZSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudFRpbWUodGltZTogbnVtYmVyKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlSW5zdGFudGlhdGUuc2V0Q3VycmVudFRpbWUodGltZSkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3pn7PpopHnmoTplb/luqZcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RHVyYXRpb24oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlSW5zdGFudGlhdGUuZ2V0RHVyYXRpb24oKSB9XHJcbiAgICAvKipcclxuICAgICAqIOW+queOr+asoeaVsFxyXG4gICAgICog5aaC5p6c5Li6bnVsbOWImeS4uuaXoOmZkOW+queOr++8jOS9huaYr+WQpuS4uuaXoOmZkOW+queOr+S4jeivpeS7jui/memHjOi/m+ihjOWIpOaWrVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0xvb3BUaW1lOiBudW1iZXIgPSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICog5aOw6Z+z6KGw5YeP5ZmoICBcclxuICovXHJcbmNsYXNzIFNvdW5kQXR0ZW51YXRpb24gZXh0ZW5kcyBTb3VuZFByZWluc3RhbGwgeyB9XHJcbi8qKlxyXG4gKiDlo7Dpn7Pmt7flkIjlmaggIFxyXG4gKiDmt7flkIjlmajlhoXnmoTlo7Dpn7PkvJrmoLnmja7oh6rouqvmiYDlpITnmoTnu7Tluqblr7nmt7flkIjmm7Lnur/ov5vooYzph4fmoLfvvIxcclxuICog6Ieq5Yqo6K6+5a6a6Ieq6Lqr55qE5Y+C5pWwXHJcbiAqL1xyXG5jbGFzcyBTb3VuZFN1Ym1peCBleHRlbmRzIFNvdW5kUHJlaW5zdGFsbCB7IH1cclxuLyoqXHJcbiAqIOWjsOmfs+W5tuWPkeWZqCAgXHJcbiAqIOW5tuWPkeWZqOWPr+S7peiuvuWumuW5tuWPkeaVsOmHj++8jOW5tuiHquWKqOiuvuWumuW7tuaXtuS4jumfs+mHj+aooeaLn+a3t+WTjSAgXHJcbiAqIOS9huW5tuWPkeWZqOW5tumdnuWPkeWwhOWZqO+8jOS4jeWPr+S7peaOqOWFpemfs+S5kOi1hOS6p1xyXG4gKi9cclxuY2xhc3MgU291bmRDb25jdXJyZW5jeSBleHRlbmRzIFNvdW5kUHJlaW5zdGFsbCB7XHJcblxyXG4gICAgLy8g5bm25Y+R5oCnXHJcbiAgICAvKipcclxuICAgICAqIOacgOWkp+iuoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgTWF4Q291bnQ6IG51bWJlciA9IDg7XHJcbiAgICAvKipcclxuICAgICAqIOS7peaLpeacieiAheS4uumZkFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgTGltaXRUb093bmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIOino+aekOinhOWImVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUmVzb2x1dGlvblJ1bGU6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOWGjeinpuWPkeWZqOaXtumXtFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUmV0cmlnZ2VyVGltZTogbnVtYmVyID0gMC4wMDAxO1xyXG5cclxuICAgIC8vIOS9k+enr+avlOS+i1xyXG4gICAgLyoqXHJcbiAgICAgKiDkvZPnp6/op4TmqKFcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZvbHVtZVNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDpn7Pph4/mr5TkvovmqKHlvI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIFZvbHVtZVNjYWxlTW9kZTogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog5Lqk6ZSZ5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBEdWNrVGltZTogbnVtYmVyID0gMC4wMTtcclxuICAgIC8qKlxyXG4gICAgICog5Y+v5Lul5oGi5aSNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDYW5SZWNvdmVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICog5oGi5aSN5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSZWNvdmVyVGltZTogbnVtYmVyID0gMC4wMTtcclxuXHJcbiAgICAvLyDmiqLmlq3mkq3mlL5cclxuICAgIC8vIOaKouaWreWQjumHiuaUvuaXtumXtFxyXG4gICAgcHVibGljIFZvaWNlU3RlYWxSZWxlYXNlVGltZTogbnVtYmVyID0gMC4xO1xyXG59XHJcbi8qKlxyXG4gKiDlo7Dpn7Pmkq3mlL7lmajpnZnmgIHnsbtcclxuICog5LiN5bqU6K+l6KKr5a+85Ye65oiW5piv5a6e5L6L5YyWXHJcbiAqL1xyXG5jbGFzcyBTb3VuZExpYnJhcnkgZXh0ZW5kcyBTb3VuZFByZWluc3RhbGwge1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1NvdW5kTGlzdF9SZWFkeUxhdW5jaGVkOiBTb3VuZFBsYXllcltdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW+heWPkeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByZWFkeUxhdW5jaGVkTGlzdCgpOiBTb3VuZFBsYXllcltdIHsgcmV0dXJuIHRoaXMuX1NvdW5kTGlzdF9SZWFkeUxhdW5jaGVkIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5b6F5Y+R5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHJlYWR5TGF1bmNoZWRMaXN0KHNsOiBTb3VuZFBsYXllcltdKSB7IHRoaXMuX1NvdW5kTGlzdF9SZWFkeUxhdW5jaGVkID0gc2wgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlvoXlj5HliJfooajpobnnm65cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgcmVhZHlMYXVuY2hlZChzbDogU291bmRQbGF5ZXIpIHsgdGhpcy5yZWFkeUxhdW5jaGVkTGlzdC5wdXNoKHNsKSB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDog4zmma/pn7PkuZDliJfooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU291bmRMaXN0X0FtYmllbnRNdXNpYzogU291bmRQbGF5ZXJbXSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+mfs+aViOWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Tb3VuZExpc3RfQW1iaWVudEVmZmVjdDogU291bmRQbGF5ZXJbXSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOWJjeaZr+mfs+S5kOWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Tb3VuZExpc3RfTXVzaWM6IFNvdW5kUGxheWVyW10gPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDliY3mma/pn7PmlYjliJfooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU291bmRMaXN0X0VmZmVjdDogU291bmRQbGF5ZXJbXSA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU291bmRNYW5hZ2VyOiBTb3VuZFBsYXllcmNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blo7Dpn7PmjqfliLbnrqHnkIblmahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc291bmRNYW5hZ2VyKCk6IFNvdW5kUGxheWVyY29udHJvbGxlciB7IHJldHVybiB0aGlzLl9Tb3VuZE1hbmFnZXIgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lo7Dpn7PmjqfliLbnrqHnkIblmahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc291bmRNYW5hZ2VyKFNQTTogU291bmRQbGF5ZXJjb250cm9sbGVyKSB7IHRoaXMuX1NvdW5kTWFuYWdlciA9IFNQTSB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgU291bmRQbGF5ZXJjb250cm9sbGVyLCAvLyDmkq3mlL7lmajnu4Tku7bnsbtcclxuICAgIFNvdW5kUGxheWVyLCAvLyDlo7Dpn7Pmkq3mlL7lmajlrp7kvovnsbvvvIzlj6rmkq3mlL7pn7PkuZDlj6/ku6XlsLHlj6rlr7zlhaXov5nkuKpcclxuICAgIFNvdW5kUHJlaW5zdGFsbCwgLy8g6Z+z5pWI6aKE6K6+57G7XHJcbiAgICAvLyDku6XkuIvkuLrpooTliLbnibnmlYjnsbtcclxuICAgIFNvdW5kQXR0ZW51YXRpb24sIC8vIOWjsOmfs+ihsOWHj+WZqFxyXG4gICAgU291bmRTdWJtaXgsIC8vIOWjsOmfs+a3t+WQiOWZqFxyXG4gICAgU291bmRDb25jdXJyZW5jeSwgLy8g5aOw6Z+z5bm25Y+R5ZmoXHJcbn0iXX0=
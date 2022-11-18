"use strict";
cc._RF.push(module, '6d8c0Q6KR9C36BD7f5kv5Ez', 'SoundPlayer');
// scripts/base/tool/SoundPlayer.ts

"use strict";
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
exports.SoundConcurrency = exports.SoundSubmix = exports.SoundAttenuation = exports.SoundPlayer = exports.SceneSoundPlaybackController = void 0;
var AudioClass_1 = require("../class/AudioClass");
Object.defineProperty(exports, "SoundPlayer", { enumerable: true, get: function () { return AudioClass_1.SoundPlayer; } });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, playOnFocus = _a.playOnFocus, requireComponent = _a.requireComponent, menu = _a.menu, executionOrder = _a.executionOrder, disallowMultiple = _a.disallowMultiple, inspector = _a.inspector, help = _a.help;
var SceneSoundPlaybackController = /** @class */ (function (_super) {
    __extends(SceneSoundPlaybackController, _super);
    /**
     * 播放器组件类
     */
    function SceneSoundPlaybackController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SceneSoundPlaybackController.prototype.onLoad = function () { AudioClass_1.SoundLibrary.soundManager = this; };
    // start() { }
    SceneSoundPlaybackController.prototype.update = function (dt) {
        if (AudioClass_1.SoundLibrary.readyLaunchedList.length > 0) {
            var nowInst_1 = null;
            AudioClass_1.SoundLibrary.readyLaunchedList.forEach(function (element) {
                if (element instanceof AudioClass_1.SoundPlayer) {
                    nowInst_1 = element;
                    nowInst_1.play();
                }
                else {
                }
            });
            AudioClass_1.SoundLibrary.readyLaunchedList = [];
        }
    };
    SceneSoundPlaybackController = __decorate([
        ccclass(),
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
    ], SceneSoundPlaybackController);
    return SceneSoundPlaybackController;
}(cc.Component));
exports.SceneSoundPlaybackController = SceneSoundPlaybackController;
/**
 * 播放器预设器
 * 是所有声音和效果的基类
 * 提供了基本的与控制器处理的方式
 * 你可以在一个播放器后跟随多个播放预设，它们会根据当前所处的库预设器来动态调整
 */
var SoundPlayerPreinstall = /** @class */ (function () {
    /**
     *
     */
    function SoundPlayerPreinstall(contor) {
        this.ignoreSequence = false;
        this.ignoreSequence = contor;
    }
    SoundPlayerPreinstall.prototype.clong = function () {
        return new SoundPlayerPreinstall(this.ignoreSequence);
    };
    return SoundPlayerPreinstall;
}());
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
var SoundAttenuation = /** @class */ (function (_super) {
    __extends(SoundAttenuation, _super);
    function SoundAttenuation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SoundAttenuation;
}(SoundPlayerPreinstall));
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
}(SoundPlayerPreinstall));
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
}(SoundPlayerPreinstall));
exports.SoundConcurrency = SoundConcurrency;

cc._RF.pop();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcU291bmRQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILGtEQUE0SjtBQWdKeEosNEZBaEp5Qyx3QkFBVyxPQWdKekM7QUE3SVQsSUFBQSxLQUFtSSxFQUFFLENBQUMsVUFBVSxFQUE5SSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsY0FBYyxvQkFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQWF2SjtJQUEyQyxnREFBWTtJQUh2RDs7T0FFRztJQUNIOztJQTBCQSxDQUFDO0lBeEJHLDZDQUFNLEdBQU4sY0FBVyx5QkFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTlDLGNBQWM7SUFFZCw2Q0FBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUkseUJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLElBQUksU0FBTyxHQUFnQixJQUFJLENBQUM7WUFDaEMseUJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUMzQyxJQUFJLE9BQU8sWUFBWSx3QkFBVyxFQUFFO29CQUNoQyxTQUFPLEdBQUcsT0FBTyxDQUFDO29CQUNsQixTQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2xCO3FCQUNJO2lCQUVKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCx5QkFBWSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQTtTQUN0QztJQUNMLENBQUM7SUFwQkMsNEJBQTRCO1FBVmpDLE9BQU8sRUFBRTtRQUNULElBQUksQ0FBQywwQkFBMEIsQ0FBQztRQUNoQyxJQUFJLENBQUMsd0NBQXdDLENBQUM7UUFDOUMsZ0JBQWdCO1FBQ2pCLG1DQUFtQztRQUNuQywyRUFBMkU7O1FBQzFFLFNBQVMsQ0FBQyxrREFBa0QsQ0FBQztRQUM5RDs7V0FFRztPQUNHLDRCQUE0QixDQTBCakM7SUFBRCxtQ0FBQztDQTFCRCxBQTBCQyxDQTFCMEMsRUFBRSxDQUFDLFNBQVMsR0EwQnREO0FBb0dHLG9FQUE0QjtBQW5HaEM7Ozs7O0dBS0c7QUFDSDtJQUNJOztPQUVHO0lBQ0gsK0JBQVksTUFBZTtRQU9wQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQU5uQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRU0scUNBQUssR0FBWjtRQUNJLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFDRDs7O0dBR0c7QUFDSCxpRUFBaUU7QUFDakUsVUFBVTtBQUNWLFNBQVM7QUFDVCxVQUFVO0FBQ1Ysc0JBQXNCO0FBRXRCLFFBQVE7QUFDUiw2Q0FBNkM7QUFFN0MsUUFBUTtBQUNSLElBQUk7QUFDSjs7R0FFRztBQUNIO0lBQStCLG9DQUFxQjtJQUFwRDs7SUFBdUQsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBdkQsQUFBd0QsQ0FBekIscUJBQXFCLEdBQUk7QUFtRXBELDRDQUFnQjtBQWxFcEI7Ozs7R0FJRztBQUNIO0lBQTBCLCtCQUFxQjtJQUEvQzs7SUFFQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGeUIscUJBQXFCLEdBRTlDO0FBNERHLGtDQUFXO0FBM0RmOzs7O0dBSUc7QUFDSDtJQUErQixvQ0FBcUI7SUFBcEQ7UUFBQSxxRUE2Q0M7UUEzQ0csTUFBTTtRQUNOOztXQUVHO1FBQ0ksY0FBUSxHQUFXLENBQUMsQ0FBQztRQUM1Qjs7V0FFRztRQUNJLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQ3JDOztXQUVHO1FBQ0ksb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDbEM7O1dBRUc7UUFDSSxtQkFBYSxHQUFXLE1BQU0sQ0FBQztRQUV0QyxPQUFPO1FBQ1A7O1dBRUc7UUFDSSxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUMvQjs7V0FFRztRQUNJLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQ25DOztXQUVHO1FBQ0ksY0FBUSxHQUFXLElBQUksQ0FBQztRQUMvQjs7V0FFRztRQUNJLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQ2xDOztXQUVHO1FBQ0ksaUJBQVcsR0FBVyxJQUFJLENBQUM7UUFFbEMsT0FBTztRQUNQLFVBQVU7UUFDSCwyQkFBcUIsR0FBVyxHQUFHLENBQUM7O0lBQy9DLENBQUM7SUFBRCx1QkFBQztBQUFELENBN0NBLEFBNkNDLENBN0M4QixxQkFBcUIsR0E2Q25EO0FBVUcsNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGNvY29zMi40IDJk6YOo5YiG5Y+q5o+Q5L6b5LqG6Z+z6YeP55qE6K6+572u77yM5omA5Lul6L+Z6YeM5Y+q5a6e546w5YyF57uc5LiO5bm25Y+R5o6n5Yi255qE5Yqf6IO9XHJcbiAqIOS7peWPiuWcqOWMhee7nOeahOWfuuehgOS4iuaJqeWxleWHuuWAvuWQrOiAheWKn+iDveOAglxyXG4gKiBcclxuICog5aaC5L2V5L2/55So77yaXHJcbiAqIOS9oOWPr+S7peWPquWvvOWFpVNvdW5kUGxheWVy6L+Z5Liq57G777yM5bm255SobmV3IFNvdW5kUGxheWVyKCAkc291bmRDbGlwICnnmoTmlrnlvI/mnaXmkq3mlL7kuIDmrKHpn7PpopEgIFxyXG4gKiBuZXfnmoTpn7PpopHkuI3pnIDopoHkv53lrZjvvIznrYnlvoXmkq3mlL7lrozmr5XlkI7kvJroh6rliqjplIDmr4HvvJsgIFxyXG4gKiDkuI3ov4fplIDmr4HlkI7kvp3nhLblj6/ku6Xnu6fnu63mjIHmnIlzb3VuZHBhbHllcuWunuS+i++8jOW5tumAmui/h+iwg+eUqHBsYXnnrYnmkq3mlL7mlrnms5Xph43mlrDmkq3mlL7vvIzov5nmmK/nrKblkIjnlKjmiLfnm7Top4nnmoTjgIIgIFxyXG4gKiDlpoLmnpzpnIDopoHlrozmiJDlpJrpn7PpopHlubblj5HvvIzlj6/ku6XpgJrov4flnKhuZXfpn7PpopHliY0g6aKE5YWI5oyH5a6a5bCG6KaB5a2Y5YWl55qE5pKt5pS+5bqP5YiX77yMXHJcbiAqIOiAjOi/meWPr+S7pemAmui/h25ld+WjsOmfs+W6k+mihOiuvuWZqOadpeWujOaIkOOAglxyXG4gKiBcclxuICog5pKt5pS+5bqP5YiX6L+H56iL77yaXHJcbiAqIOWcqOi/m+ihjCduZXcgU291bmRQbGF5ZXIn5pe277yMJ1NvdW5kUGxheWVyJ+S8muiHquWKqOaOqOWFpeWIsOWJqui+keWPkeWwhOWIl+ihqO+8jFxyXG4gKiDlubbnrYnlvoXnlKjmiLflkI7nu63nmoTmiYDmnInmk43kvZzlrozmiJDvvIzlnKjpmo/lkI7nmoTnlJ/lkb3lkajmnJ/lh73mlbDkuK3vvIzmlYjmnpzlmajkuI7mkq3mlL7lmajpg73kvJrooqvkuIDkuIDlpITnkIbjgIJcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICovXHJcblxyXG5pbXBvcnQgeyBTb3VuZExpYnJhcnksIElQcmVpbnN0YWxsSW50ZXJmYWNlLCBTb3VuZFBsYXllciwgSVNvdW5kVHJhY2tTZXF1ZW5jZUludGVyZmFjZSwgSVNjZW5lU291bmRQbGF5YmFja0NvbnRyb2xsZXJJbnRlcmZhY2UgfSBmcm9tIFwiLi4vY2xhc3MvQXVkaW9DbGFzc1wiO1xyXG5pbXBvcnQgU291bmRMaXN0ZW5lciBmcm9tIFwiLi9Tb3VuZExpc3RlbmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSwgcGxheU9uRm9jdXMsIHJlcXVpcmVDb21wb25lbnQsIG1lbnUsIGV4ZWN1dGlvbk9yZGVyLCBkaXNhbGxvd011bHRpcGxlLCBpbnNwZWN0b3IsIGhlbHAgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuQGNjY2xhc3MoKVxyXG5AbWVudSgnQXVkaW8vU291bmRQbGF5ZXJNYW5hZ2VyJylcclxuQGhlbHAoJ2h0dHBzOi8vZ2l0aHViLmNvbS8yMTI4Y3ovQ29jb3NDb3BpbG90JylcclxuQGRpc2FsbG93TXVsdGlwbGVcclxuLy8gQHJlcXVpcmVDb21wb25lbnQoU291bmRMaXN0ZW5lcilcclxuLy8gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9lZGl0b3IvZXh0ZW5zaW9uL2luc3BlY3Rvci5odG1sXHJcbkBpbnNwZWN0b3IoJ3BhY2thZ2VzOi8vYXNzZXRzL3NjcmlwdHMvYmFzZS90b29sL0NvbXBUYWJsZS50cycpXHJcbi8qKlxyXG4gKiDmkq3mlL7lmajnu4Tku7bnsbtcclxuICovXHJcbmNsYXNzIFNjZW5lU291bmRQbGF5YmFja0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQgaW1wbGVtZW50cyBJU2NlbmVTb3VuZFBsYXliYWNrQ29udHJvbGxlckludGVyZmFjZSB7XHJcblxyXG4gICAgb25Mb2FkKCkgeyBTb3VuZExpYnJhcnkuc291bmRNYW5hZ2VyID0gdGhpczsgfVxyXG5cclxuICAgIC8vIHN0YXJ0KCkgeyB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKFNvdW5kTGlicmFyeS5yZWFkeUxhdW5jaGVkTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBub3dJbnN0OiBTb3VuZFBsYXllciA9IG51bGw7XHJcbiAgICAgICAgICAgIFNvdW5kTGlicmFyeS5yZWFkeUxhdW5jaGVkTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNvdW5kUGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93SW5zdCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93SW5zdC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBTb3VuZExpYnJhcnkucmVhZHlMYXVuY2hlZExpc3QgPSBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBsYXRlVXBkYXRlKCkge31cclxuICAgIC8vIG9uRGVzdG9yeSgpIHt9XHJcbiAgICAvLyBvbkVuYWJsZSgpIHt9XHJcbiAgICAvLyBvbkRpc2FibGUoKSB7IGNvbnNvbGUud2FybihcIumfs+S5kOaSreaUvuWZqOiiq+makOiXj1wiKTsgfVxyXG59XHJcbi8qKlxyXG4gKiDmkq3mlL7lmajpooTorr7lmaggIFxyXG4gKiDmmK/miYDmnInlo7Dpn7PlkozmlYjmnpznmoTln7rnsbsgIFxyXG4gKiDmj5Dkvpvkuobln7rmnKznmoTkuI7mjqfliLblmajlpITnkIbnmoTmlrnlvI9cclxuICog5L2g5Y+v5Lul5Zyo5LiA5Liq5pKt5pS+5Zmo5ZCO6Lef6ZqP5aSa5Liq5pKt5pS+6aKE6K6+77yM5a6D5Lus5Lya5qC55o2u5b2T5YmN5omA5aSE55qE5bqT6aKE6K6+5Zmo5p2l5Yqo5oCB6LCD5pW0XHJcbiAqL1xyXG5jbGFzcyBTb3VuZFBsYXllclByZWluc3RhbGwgaW1wbGVtZW50cyBJUHJlaW5zdGFsbEludGVyZmFjZSB7XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250b3I6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlnbm9yZVNlcXVlbmNlID0gY29udG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZygpOiBJUHJlaW5zdGFsbEludGVyZmFjZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTb3VuZFBsYXllclByZWluc3RhbGwodGhpcy5pZ25vcmVTZXF1ZW5jZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaWdub3JlU2VxdWVuY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG4vKipcclxuICog5aOw6Z+z5Y2V5L6L5bqT6aKE6K6+5ZmoXHJcbiAqIOaPkOS+m+S6huinhOiMg+eahOW6k+WNleS+i+aOp+WItuaWueW8j1xyXG4gKi9cclxuLy8gY2xhc3MgU291bmRMaWJyYXJ5UHJlaW5zdGFsbCBpbXBsZW1lbnRzIElQcmVpbnN0YWxsSW50ZXJmYWNlIHtcclxuLy8gICAgIC8qKlxyXG4vLyAgICAgICpcclxuLy8gICAgICAqL1xyXG4vLyAgICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4vLyAgICAgfVxyXG4vLyAgICAgcHVibGljIGNsb25nKCk6IElQcmVpbnN0YWxsSW50ZXJmYWNlIHtcclxuXHJcbi8vICAgICB9XHJcbi8vIH1cclxuLyoqXHJcbiAqIOWjsOmfs+ihsOWHj+WZqCAgXHJcbiAqL1xyXG5jbGFzcyBTb3VuZEF0dGVudWF0aW9uIGV4dGVuZHMgU291bmRQbGF5ZXJQcmVpbnN0YWxsIHsgfVxyXG4vKipcclxuICog5aOw6Z+z5re35ZCI5ZmoICBcclxuICog5re35ZCI5Zmo5YaF55qE5aOw6Z+z5Lya5qC55o2u6Ieq6Lqr5omA5aSE55qE57u05bqm5a+55re35ZCI5puy57q/6L+b6KGM6YeH5qC377yMXHJcbiAqIOiHquWKqOiuvuWumuiHqui6q+eahOWPguaVsFxyXG4gKi9cclxuY2xhc3MgU291bmRTdWJtaXggZXh0ZW5kcyBTb3VuZFBsYXllclByZWluc3RhbGwge1xyXG5cclxufVxyXG4vKipcclxuICog5aOw6Z+z5bm25Y+R5ZmoICBcclxuICog5bm25Y+R5Zmo5Y+v5Lul6K6+5a6a5bm25Y+R5pWw6YeP77yM5bm26Ieq5Yqo6K6+5a6a5bu25pe25LiO6Z+z6YeP5qih5ouf5re35ZONICBcclxuICog5L2G5bm25Y+R5Zmo5bm26Z2e5Y+R5bCE5Zmo77yM5LiN5Y+v5Lul5o6o5YWl6Z+z5LmQ6LWE5LqnXHJcbiAqL1xyXG5jbGFzcyBTb3VuZENvbmN1cnJlbmN5IGV4dGVuZHMgU291bmRQbGF5ZXJQcmVpbnN0YWxsIHtcclxuXHJcbiAgICAvLyDlubblj5HmgKdcclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn6K6h5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBNYXhDb3VudDogbnVtYmVyID0gODtcclxuICAgIC8qKlxyXG4gICAgICog5Lul5oul5pyJ6ICF5Li66ZmQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBMaW1pdFRvT3duZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICog6Kej5p6Q6KeE5YiZXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSZXNvbHV0aW9uUnVsZTogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICog5YaN6Kem5Y+R5Zmo5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSZXRyaWdnZXJUaW1lOiBudW1iZXIgPSAwLjAwMDE7XHJcblxyXG4gICAgLy8g5L2T56ev5q+U5L6LXHJcbiAgICAvKipcclxuICAgICAqIOS9k+enr+inhOaooVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVm9sdW1lU2NhbGU6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIOmfs+mHj+avlOS+i+aooeW8j1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVm9sdW1lU2NhbGVNb2RlOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuqTplJnml7bpl7RcclxuICAgICAqL1xyXG4gICAgcHVibGljIER1Y2tUaW1lOiBudW1iZXIgPSAwLjAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlj6/ku6XmgaLlpI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIENhblJlY292ZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmgaLlpI3ml7bpl7RcclxuICAgICAqL1xyXG4gICAgcHVibGljIFJlY292ZXJUaW1lOiBudW1iZXIgPSAwLjAxO1xyXG5cclxuICAgIC8vIOaKouaWreaSreaUvlxyXG4gICAgLy8g5oqi5pat5ZCO6YeK5pS+5pe26Ze0XHJcbiAgICBwdWJsaWMgVm9pY2VTdGVhbFJlbGVhc2VUaW1lOiBudW1iZXIgPSAwLjE7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBTY2VuZVNvdW5kUGxheWJhY2tDb250cm9sbGVyLCAvLyDmkq3mlL7lmajmjqfliLblmajnu4Tku7bnsbtcclxuICAgIC8vIFNvdW5kUGxheWVyUHJlaW5zdGFsbCwgLy8g5pKt5pS+5Zmo6aKE6K6+57G777yM5q2k57G75LiN5Y+C5LiO6L+Q566XXHJcbiAgICBTb3VuZFBsYXllciwgLy8g5aOw6Z+z5pKt5pS+5Zmo5a6e5L6L57G777yM5Y+q5pKt5pS+6Z+z5LmQ5Y+v5Lul5bCx5Y+q5a+85YWl6L+Z5LiqXHJcbiAgICAvLyDku6XkuIvkuLrpooTliLblmajnsbtcclxuICAgIC8vIFNvdW5kTGlicmFyeVByZWluc3RhbGwsIC8vIOWjsOmfs+WNleS+i+W6k+mihOiuvuWZqFxyXG4gICAgU291bmRBdHRlbnVhdGlvbiwgLy8g5aOw6Z+z6KGw5YeP5ZmoXHJcbiAgICBTb3VuZFN1Ym1peCwgLy8g5aOw6Z+z5re35ZCI5ZmoXHJcbiAgICBTb3VuZENvbmN1cnJlbmN5LCAvLyDlo7Dpn7Plubblj5HlmahcclxufSJdfQ==
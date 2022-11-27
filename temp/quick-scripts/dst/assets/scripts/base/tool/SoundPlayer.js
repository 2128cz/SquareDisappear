
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcU291bmRQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILGtEQUE0SjtBQWdKeEosNEZBaEp5Qyx3QkFBVyxPQWdKekM7QUE3SVQsSUFBQSxLQUFtSSxFQUFFLENBQUMsVUFBVSxFQUE5SSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsY0FBYyxvQkFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQWF2SjtJQUEyQyxnREFBWTtJQUh2RDs7T0FFRztJQUNIOztJQTBCQSxDQUFDO0lBeEJHLDZDQUFNLEdBQU4sY0FBVyx5QkFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTlDLGNBQWM7SUFFZCw2Q0FBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUkseUJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLElBQUksU0FBTyxHQUFnQixJQUFJLENBQUM7WUFDaEMseUJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUMzQyxJQUFJLE9BQU8sWUFBWSx3QkFBVyxFQUFFO29CQUNoQyxTQUFPLEdBQUcsT0FBTyxDQUFDO29CQUNsQixTQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2xCO3FCQUNJO2lCQUVKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCx5QkFBWSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQTtTQUN0QztJQUNMLENBQUM7SUFwQkMsNEJBQTRCO1FBVmpDLE9BQU8sRUFBRTtRQUNULElBQUksQ0FBQywwQkFBMEIsQ0FBQztRQUNoQyxJQUFJLENBQUMsd0NBQXdDLENBQUM7UUFDOUMsZ0JBQWdCO1FBQ2pCLG1DQUFtQztRQUNuQywyRUFBMkU7O1FBQzFFLFNBQVMsQ0FBQyxrREFBa0QsQ0FBQztRQUM5RDs7V0FFRztPQUNHLDRCQUE0QixDQTBCakM7SUFBRCxtQ0FBQztDQTFCRCxBQTBCQyxDQTFCMEMsRUFBRSxDQUFDLFNBQVMsR0EwQnREO0FBb0dHLG9FQUE0QjtBQW5HaEM7Ozs7O0dBS0c7QUFDSDtJQUNJOztPQUVHO0lBQ0gsK0JBQVksTUFBZTtRQU9wQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQU5uQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRU0scUNBQUssR0FBWjtRQUNJLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFDRDs7O0dBR0c7QUFDSCxpRUFBaUU7QUFDakUsVUFBVTtBQUNWLFNBQVM7QUFDVCxVQUFVO0FBQ1Ysc0JBQXNCO0FBRXRCLFFBQVE7QUFDUiw2Q0FBNkM7QUFFN0MsUUFBUTtBQUNSLElBQUk7QUFDSjs7R0FFRztBQUNIO0lBQStCLG9DQUFxQjtJQUFwRDs7SUFBdUQsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBdkQsQUFBd0QsQ0FBekIscUJBQXFCLEdBQUk7QUFtRXBELDRDQUFnQjtBQWxFcEI7Ozs7R0FJRztBQUNIO0lBQTBCLCtCQUFxQjtJQUEvQzs7SUFFQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGeUIscUJBQXFCLEdBRTlDO0FBNERHLGtDQUFXO0FBM0RmOzs7O0dBSUc7QUFDSDtJQUErQixvQ0FBcUI7SUFBcEQ7UUFBQSxxRUE2Q0M7UUEzQ0csTUFBTTtRQUNOOztXQUVHO1FBQ0ksY0FBUSxHQUFXLENBQUMsQ0FBQztRQUM1Qjs7V0FFRztRQUNJLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQ3JDOztXQUVHO1FBQ0ksb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDbEM7O1dBRUc7UUFDSSxtQkFBYSxHQUFXLE1BQU0sQ0FBQztRQUV0QyxPQUFPO1FBQ1A7O1dBRUc7UUFDSSxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUMvQjs7V0FFRztRQUNJLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQ25DOztXQUVHO1FBQ0ksY0FBUSxHQUFXLElBQUksQ0FBQztRQUMvQjs7V0FFRztRQUNJLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQ2xDOztXQUVHO1FBQ0ksaUJBQVcsR0FBVyxJQUFJLENBQUM7UUFFbEMsT0FBTztRQUNQLFVBQVU7UUFDSCwyQkFBcUIsR0FBVyxHQUFHLENBQUM7O0lBQy9DLENBQUM7SUFBRCx1QkFBQztBQUFELENBN0NBLEFBNkNDLENBN0M4QixxQkFBcUIsR0E2Q25EO0FBVUcsNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGNvY29zMi40IDJk6YOo5YiG5Y+q5o+Q5L6b5LqG6Z+z6YeP55qE6K6+572u77yM5omA5Lul6L+Z6YeM5Y+q5a6e546w5YyF57uc5LiO5bm25Y+R5o6n5Yi255qE5Yqf6IO9XHJcbiAqIOS7peWPiuWcqOWMhee7nOeahOWfuuehgOS4iuaJqeWxleWHuuWAvuWQrOiAheWKn+iDveOAglxyXG4gKiBcclxuICog5aaC5L2V5L2/55So77yaXHJcbiAqIOS9oOWPr+S7peWPquWvvOWFpVNvdW5kUGxheWVy6L+Z5Liq57G777yM5bm255SobmV3IFNvdW5kUGxheWVyKCAkc291bmRDbGlwICnnmoTmlrnlvI/mnaXmkq3mlL7kuIDmrKHpn7PpopEgIFxyXG4gKiBuZXfnmoTpn7PpopHkuI3pnIDopoHkv53lrZjvvIznrYnlvoXmkq3mlL7lrozmr5XlkI7kvJroh6rliqjplIDmr4HvvJsgIFxyXG4gKiDkuI3ov4fplIDmr4HlkI7kvp3nhLblj6/ku6Xnu6fnu63mjIHmnIlzb3VuZHBhbHllcuWunuS+i++8jOW5tumAmui/h+iwg+eUqHBsYXnnrYnmkq3mlL7mlrnms5Xph43mlrDmkq3mlL7vvIzov5nmmK/nrKblkIjnlKjmiLfnm7Top4nnmoTjgIIgIFxyXG4gKiDlpoLmnpzpnIDopoHlrozmiJDlpJrpn7PpopHlubblj5HvvIzlj6/ku6XpgJrov4flnKhuZXfpn7PpopHliY0g6aKE5YWI5oyH5a6a5bCG6KaB5a2Y5YWl55qE5pKt5pS+5bqP5YiX77yMXHJcbiAqIOiAjOi/meWPr+S7pemAmui/h25ld+WjsOmfs+W6k+mihOiuvuWZqOadpeWujOaIkOOAglxyXG4gKiBcclxuICog5pKt5pS+5bqP5YiX6L+H56iL77yaXHJcbiAqIOWcqOi/m+ihjCduZXcgU291bmRQbGF5ZXIn5pe277yMJ1NvdW5kUGxheWVyJ+S8muiHquWKqOaOqOWFpeWIsOWJqui+keWPkeWwhOWIl+ihqO+8jFxyXG4gKiDlubbnrYnlvoXnlKjmiLflkI7nu63nmoTmiYDmnInmk43kvZzlrozmiJDvvIzlnKjpmo/lkI7nmoTnlJ/lkb3lkajmnJ/lh73mlbDkuK3vvIzmlYjmnpzlmajkuI7mkq3mlL7lmajpg73kvJrooqvkuIDkuIDlpITnkIbjgIJcclxuICogXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgU291bmRMaWJyYXJ5LCBJUHJlaW5zdGFsbEludGVyZmFjZSwgU291bmRQbGF5ZXIsIElTb3VuZFRyYWNrU2VxdWVuY2VJbnRlcmZhY2UsIElTY2VuZVNvdW5kUGxheWJhY2tDb250cm9sbGVySW50ZXJmYWNlIH0gZnJvbSBcIi4uL2NsYXNzL0F1ZGlvQ2xhc3NcIjtcclxuaW1wb3J0IFNvdW5kTGlzdGVuZXIgZnJvbSBcIi4vU291bmRMaXN0ZW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIHBsYXlPbkZvY3VzLCByZXF1aXJlQ29tcG9uZW50LCBtZW51LCBleGVjdXRpb25PcmRlciwgZGlzYWxsb3dNdWx0aXBsZSwgaW5zcGVjdG9yLCBoZWxwIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbkBjY2NsYXNzKClcclxuQG1lbnUoJ0F1ZGlvL1NvdW5kUGxheWVyTWFuYWdlcicpXHJcbkBoZWxwKCdodHRwczovL2dpdGh1Yi5jb20vMjEyOGN6L0NvY29zQ29waWxvdCcpXHJcbkBkaXNhbGxvd011bHRpcGxlXHJcbi8vIEByZXF1aXJlQ29tcG9uZW50KFNvdW5kTGlzdGVuZXIpXHJcbi8vIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvZWRpdG9yL2V4dGVuc2lvbi9pbnNwZWN0b3IuaHRtbFxyXG5AaW5zcGVjdG9yKCdwYWNrYWdlczovL2Fzc2V0cy9zY3JpcHRzL2Jhc2UvdG9vbC9Db21wVGFibGUudHMnKVxyXG4vKipcclxuICog5pKt5pS+5Zmo57uE5Lu257G7XHJcbiAqL1xyXG5jbGFzcyBTY2VuZVNvdW5kUGxheWJhY2tDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IGltcGxlbWVudHMgSVNjZW5lU291bmRQbGF5YmFja0NvbnRyb2xsZXJJbnRlcmZhY2Uge1xyXG5cclxuICAgIG9uTG9hZCgpIHsgU291bmRMaWJyYXJ5LnNvdW5kTWFuYWdlciA9IHRoaXM7IH1cclxuXHJcbiAgICAvLyBzdGFydCgpIHsgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmIChTb3VuZExpYnJhcnkucmVhZHlMYXVuY2hlZExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbm93SW5zdDogU291bmRQbGF5ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBTb3VuZExpYnJhcnkucmVhZHlMYXVuY2hlZExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTb3VuZFBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vd0luc3QgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vd0luc3QucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgU291bmRMaWJyYXJ5LnJlYWR5TGF1bmNoZWRMaXN0ID0gW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGF0ZVVwZGF0ZSgpIHt9XHJcbiAgICAvLyBvbkRlc3RvcnkoKSB7fVxyXG4gICAgLy8gb25FbmFibGUoKSB7fVxyXG4gICAgLy8gb25EaXNhYmxlKCkgeyBjb25zb2xlLndhcm4oXCLpn7PkuZDmkq3mlL7lmajooqvpmpDol49cIik7IH1cclxufVxyXG4vKipcclxuICog5pKt5pS+5Zmo6aKE6K6+5ZmoICBcclxuICog5piv5omA5pyJ5aOw6Z+z5ZKM5pWI5p6c55qE5Z+657G7ICBcclxuICog5o+Q5L6b5LqG5Z+65pys55qE5LiO5o6n5Yi25Zmo5aSE55CG55qE5pa55byPXHJcbiAqIOS9oOWPr+S7peWcqOS4gOS4quaSreaUvuWZqOWQjui3n+maj+WkmuS4quaSreaUvumihOiuvu+8jOWug+S7rOS8muagueaNruW9k+WJjeaJgOWkhOeahOW6k+mihOiuvuWZqOadpeWKqOaAgeiwg+aVtFxyXG4gKi9cclxuY2xhc3MgU291bmRQbGF5ZXJQcmVpbnN0YWxsIGltcGxlbWVudHMgSVByZWluc3RhbGxJbnRlcmZhY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29udG9yOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pZ25vcmVTZXF1ZW5jZSA9IGNvbnRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmcoKTogSVByZWluc3RhbGxJbnRlcmZhY2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgU291bmRQbGF5ZXJQcmVpbnN0YWxsKHRoaXMuaWdub3JlU2VxdWVuY2UpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlnbm9yZVNlcXVlbmNlOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuLyoqXHJcbiAqIOWjsOmfs+WNleS+i+W6k+mihOiuvuWZqFxyXG4gKiDmj5Dkvpvkuobop4TojIPnmoTlupPljZXkvovmjqfliLbmlrnlvI9cclxuICovXHJcbi8vIGNsYXNzIFNvdW5kTGlicmFyeVByZWluc3RhbGwgaW1wbGVtZW50cyBJUHJlaW5zdGFsbEludGVyZmFjZSB7XHJcbi8vICAgICAvKipcclxuLy8gICAgICAqXHJcbi8vICAgICAgKi9cclxuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuLy8gICAgIH1cclxuLy8gICAgIHB1YmxpYyBjbG9uZygpOiBJUHJlaW5zdGFsbEludGVyZmFjZSB7XHJcblxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8qKlxyXG4gKiDlo7Dpn7PoobDlh4/lmaggIFxyXG4gKi9cclxuY2xhc3MgU291bmRBdHRlbnVhdGlvbiBleHRlbmRzIFNvdW5kUGxheWVyUHJlaW5zdGFsbCB7IH1cclxuLyoqXHJcbiAqIOWjsOmfs+a3t+WQiOWZqCAgXHJcbiAqIOa3t+WQiOWZqOWGheeahOWjsOmfs+S8muagueaNruiHqui6q+aJgOWkhOeahOe7tOW6puWvuea3t+WQiOabsue6v+i/m+ihjOmHh+agt++8jFxyXG4gKiDoh6rliqjorr7lrproh6rouqvnmoTlj4LmlbBcclxuICovXHJcbmNsYXNzIFNvdW5kU3VibWl4IGV4dGVuZHMgU291bmRQbGF5ZXJQcmVpbnN0YWxsIHtcclxuXHJcbn1cclxuLyoqXHJcbiAqIOWjsOmfs+W5tuWPkeWZqCAgXHJcbiAqIOW5tuWPkeWZqOWPr+S7peiuvuWumuW5tuWPkeaVsOmHj++8jOW5tuiHquWKqOiuvuWumuW7tuaXtuS4jumfs+mHj+aooeaLn+a3t+WTjSAgXHJcbiAqIOS9huW5tuWPkeWZqOW5tumdnuWPkeWwhOWZqO+8jOS4jeWPr+S7peaOqOWFpemfs+S5kOi1hOS6p1xyXG4gKi9cclxuY2xhc3MgU291bmRDb25jdXJyZW5jeSBleHRlbmRzIFNvdW5kUGxheWVyUHJlaW5zdGFsbCB7XHJcblxyXG4gICAgLy8g5bm25Y+R5oCnXHJcbiAgICAvKipcclxuICAgICAqIOacgOWkp+iuoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgTWF4Q291bnQ6IG51bWJlciA9IDg7XHJcbiAgICAvKipcclxuICAgICAqIOS7peaLpeacieiAheS4uumZkFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgTGltaXRUb093bmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIOino+aekOinhOWImVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUmVzb2x1dGlvblJ1bGU6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOWGjeinpuWPkeWZqOaXtumXtFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUmV0cmlnZ2VyVGltZTogbnVtYmVyID0gMC4wMDAxO1xyXG5cclxuICAgIC8vIOS9k+enr+avlOS+i1xyXG4gICAgLyoqXHJcbiAgICAgKiDkvZPnp6/op4TmqKFcclxuICAgICAqL1xyXG4gICAgcHVibGljIFZvbHVtZVNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDpn7Pph4/mr5TkvovmqKHlvI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIFZvbHVtZVNjYWxlTW9kZTogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog5Lqk6ZSZ5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBEdWNrVGltZTogbnVtYmVyID0gMC4wMTtcclxuICAgIC8qKlxyXG4gICAgICog5Y+v5Lul5oGi5aSNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDYW5SZWNvdmVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICog5oGi5aSN5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSZWNvdmVyVGltZTogbnVtYmVyID0gMC4wMTtcclxuXHJcbiAgICAvLyDmiqLmlq3mkq3mlL5cclxuICAgIC8vIOaKouaWreWQjumHiuaUvuaXtumXtFxyXG4gICAgcHVibGljIFZvaWNlU3RlYWxSZWxlYXNlVGltZTogbnVtYmVyID0gMC4xO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgU2NlbmVTb3VuZFBsYXliYWNrQ29udHJvbGxlciwgLy8g5pKt5pS+5Zmo5o6n5Yi25Zmo57uE5Lu257G7XHJcbiAgICAvLyBTb3VuZFBsYXllclByZWluc3RhbGwsIC8vIOaSreaUvuWZqOmihOiuvuexu++8jOatpOexu+S4jeWPguS4jui/kOeul1xyXG4gICAgU291bmRQbGF5ZXIsIC8vIOWjsOmfs+aSreaUvuWZqOWunuS+i+exu++8jOWPquaSreaUvumfs+S5kOWPr+S7peWwseWPquWvvOWFpei/meS4qlxyXG4gICAgLy8g5Lul5LiL5Li66aKE5Yi25Zmo57G7XHJcbiAgICAvLyBTb3VuZExpYnJhcnlQcmVpbnN0YWxsLCAvLyDlo7Dpn7PljZXkvovlupPpooTorr7lmahcclxuICAgIFNvdW5kQXR0ZW51YXRpb24sIC8vIOWjsOmfs+ihsOWHj+WZqFxyXG4gICAgU291bmRTdWJtaXgsIC8vIOWjsOmfs+a3t+WQiOWZqFxyXG4gICAgU291bmRDb25jdXJyZW5jeSwgLy8g5aOw6Z+z5bm25Y+R5ZmoXHJcbn0iXX0=
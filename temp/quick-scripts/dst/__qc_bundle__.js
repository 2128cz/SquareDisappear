
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/CompTable');
require('./assets/load/Loading');
require('./assets/scripts/base/class/ActorClass');
require('./assets/scripts/base/class/AudioClass');
require('./assets/scripts/base/class/DevelopersToolClass');
require('./assets/scripts/base/class/DevelopersToolGlobal');
require('./assets/scripts/base/class/DiologClass');
require('./assets/scripts/base/class/DynamicPanelClass');
require('./assets/scripts/base/class/PawnClass');
require('./assets/scripts/base/class/SoundPlayerClass');
require('./assets/scripts/base/core/RigorousLibrary');
require('./assets/scripts/base/core/RigorousType');
require('./assets/scripts/base/core/UObject');
require('./assets/scripts/base/core/UObjectBaseUtility');
require('./assets/scripts/base/tool/EventReflect');
require('./assets/scripts/base/tool/GridAdsorb');
require('./assets/scripts/base/tool/NoRootTree');
require('./assets/scripts/base/tool/PanelTool');
require('./assets/scripts/base/tool/PawnMovement');
require('./assets/scripts/base/tool/SoundListener');
require('./assets/scripts/base/tool/SoundPlayer');
require('./assets/scripts/game/Block');
require('./assets/scripts/game/BlockGroup');
require('./assets/scripts/game/GameLevel');
require('./assets/scripts/game/MenuLevel');
require('./assets/scripts/game/Setting');
require('./assets/scripts/game/deprecated-Block');
require('./assets/scripts/game/deprecated-GameLevel');
require('./assets/scripts/game/effect/ButtonSkill');
require('./assets/scripts/game/effect/GetGameScroe');
require('./assets/scripts/game/effect/IceEffectDextory');
require('./assets/scripts/game/effect/PlayDraAniAndDestory');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CompTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52f3dJ91phJFY2wQEHPFTO0', 'CompTable');
// CompTable.ts

'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.ready = exports.update = exports.template = exports.$ = void 0;
exports.$ = {
    'test': '.test',
};
exports.template = "\n<ui-prop>\n    <ui-label slot=\"label\">Test</ui-label>\n    <ui-checkbox slot=\"content\" class=\"test\"></ui-checkbox>\n</ui-prop>\n";
function update(assetList, metaList) {
    this.assetList = assetList;
    this.metaList = metaList;
    this.$.test.value = metaList[0].userData.test || false;
}
exports.update = update;
;
function ready() {
    var _this = this;
    this.$.test.addEventListener('confirm', function () {
        _this.metaList.forEach(function (meta) {
            // 修改对应的 meta 里的数据
            meta.userData.test = !!_this.$.test.value;
        });
        // 修改后手动发送事件通知，资源面板是修改资源的 meta 文件，不是修改 dump 数据，所以发送的事件和组件属性修改不一样
        _this.dispatch('change');
    });
}
exports.ready = ready;
;
function close(his) {
}
exports.close = close;
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29tcFRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVksQ0FBQzs7O0FBcUNBLFFBQUEsQ0FBQyxHQUFHO0lBQ2IsTUFBTSxFQUFFLE9BQU87Q0FDbEIsQ0FBQztBQUVXLFFBQUEsUUFBUSxHQUFHLDBJQUt2QixDQUFDO0FBSUYsU0FBZ0IsTUFBTSxDQUFrQixTQUFrQixFQUFFLFFBQWdCO0lBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7QUFDM0QsQ0FBQztBQUpELHdCQUlDO0FBQUEsQ0FBQztBQUVGLFNBQWdCLEtBQUs7SUFBckIsaUJBU0M7SUFSRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7UUFDcEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFTO1lBQzVCLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsZ0VBQWdFO1FBQ2hFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVEQsc0JBU0M7QUFBQSxDQUFDO0FBRUYsU0FBZ0IsS0FBSyxDQUFDLEdBQWM7QUFFcEMsQ0FBQztBQUZELHNCQUVDO0FBQUEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmludGVyZmFjZSBBc3NldCB7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgZmlsZTogc3RyaW5nO1xyXG4gICAgaW1wb3J0ZWQ6IGJvb2xlYW47XHJcbiAgICBpbXBvcnRlcjogc3RyaW5nO1xyXG4gICAgaW52YWxpZDogYm9vbGVhbjtcclxuICAgIGlzRGlyZWN0b3J5OiBib29sZWFuO1xyXG4gICAgbGlicmFyeToge1xyXG4gICAgICAgIFtleHRuYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB1dWlkOiBzdHJpbmc7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuO1xyXG4gICAgc3ViQXNzZXRzOiB7XHJcbiAgICAgICAgW2lkOiBzdHJpbmddOiBBc3NldDtcclxuICAgIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBNZXRhIHtcclxuICAgIGZpbGVzOiBzdHJpbmdbXTtcclxuICAgIGltcG9ydGVkOiBib29sZWFuO1xyXG4gICAgaW1wb3J0ZXI6IHN0cmluZztcclxuICAgIHN1Yk1ldGFzOiB7XHJcbiAgICAgICAgW2lkOiBzdHJpbmddOiBNZXRhO1xyXG4gICAgfTtcclxuICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICAgIHV1aWQ6IHN0cmluZztcclxuICAgIHZlcjogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFNlbGVjdG9yPCQ+ID0geyAkOiBSZWNvcmQ8a2V5b2YgJCwgYW55IHwgbnVsbD4gfSAmIHsgZGlzcGF0Y2goc3RyOiBzdHJpbmcpOiB2b2lkLCBhc3NldExpc3Q6IEFzc2V0W10sIG1ldGFMaXN0OiBNZXRhW10gfTtcclxuXHJcbmV4cG9ydCBjb25zdCAkID0ge1xyXG4gICAgJ3Rlc3QnOiAnLnRlc3QnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gYFxyXG48dWktcHJvcD5cclxuICAgIDx1aS1sYWJlbCBzbG90PVwibGFiZWxcIj5UZXN0PC91aS1sYWJlbD5cclxuICAgIDx1aS1jaGVja2JveCBzbG90PVwiY29udGVudFwiIGNsYXNzPVwidGVzdFwiPjwvdWktY2hlY2tib3g+XHJcbjwvdWktcHJvcD5cclxuYDtcclxuXHJcbnR5cGUgUGFuZWxUaGlzID0gU2VsZWN0b3I8dHlwZW9mICQ+O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSh0aGlzOiBQYW5lbFRoaXMsIGFzc2V0TGlzdDogQXNzZXRbXSwgbWV0YUxpc3Q6IE1ldGFbXSkge1xyXG4gICAgdGhpcy5hc3NldExpc3QgPSBhc3NldExpc3Q7XHJcbiAgICB0aGlzLm1ldGFMaXN0ID0gbWV0YUxpc3Q7XHJcbiAgICB0aGlzLiQudGVzdC52YWx1ZSA9IG1ldGFMaXN0WzBdLnVzZXJEYXRhLnRlc3QgfHwgZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZHkodGhpczogUGFuZWxUaGlzKSB7XHJcbiAgICB0aGlzLiQudGVzdC5hZGRFdmVudExpc3RlbmVyKCdjb25maXJtJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWV0YUxpc3QuZm9yRWFjaCgobWV0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOS/ruaUueWvueW6lOeahCBtZXRhIOmHjOeahOaVsOaNrlxyXG4gICAgICAgICAgICBtZXRhLnVzZXJEYXRhLnRlc3QgPSAhIXRoaXMuJC50ZXN0LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOS/ruaUueWQjuaJi+WKqOWPkemAgeS6i+S7tumAmuefpe+8jOi1hOa6kOmdouadv+aYr+S/ruaUuei1hOa6kOeahCBtZXRhIOaWh+S7tu+8jOS4jeaYr+S/ruaUuSBkdW1wIOaVsOaNru+8jOaJgOS7peWPkemAgeeahOS6i+S7tuWSjOe7hOS7tuWxnuaAp+S/ruaUueS4jeS4gOagt1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2goJ2NoYW5nZScpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2UoaGlzOiBQYW5lbFRoaXMsKSB7XHJcblxyXG59OyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/load/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d4fYAyCZEeID+WJLUyKeU', 'Loading');
// load/Loading.ts

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
// SIGNPOST 加载页面，但不属于开发类
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolGlobal_1 = require("../scripts/base/class/DevelopersToolGlobal");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logoNode = null;
        _this.progressBar = null;
        // SIGNPOST 进度条部分
        _this.progressUpdateRate = 1;
        _this.progressRandomChangeTime = .2;
        _this.progressWaitForLoad = .85;
        _this.readyToShow = null;
        // SIGNPOST 目标场景部分
        _this.readyToGoSence = null;
        // TAG 自定义数值                                                                                         
        /**
         * 进度条数值
         * 数值应该在0-100
         */
        _this.ProgressValue = 0;
        /**
         * 加载进度，以资源载入完成+1
         * 当载入计数等于资源数时，完成加载
         */
        _this.loadProgressCount = 0;
        _this.loadPorgressCountMax = Object.keys(DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog).length;
        /**
         * 动画播放完毕标记
         * 数值应该在0-100
         */
        _this.animationOver = false;
        return _this;
    }
    // TAG LIFE-CYCLE callbacks                                                                              
    Loading.prototype.onLoad = function () {
        // 播放动画
        this.playLogoAnimation();
        //检查游戏更新
        this.checkGameNewVersion();
    };
    Loading.prototype.start = function () {
        // 开始加载所有资源
        this.loadAllResources();
    };
    Loading.prototype.update = function (dt) {
        // 等待动画播放完毕
        if (!this.animationOver)
            return;
        // 如果有定义其他组件（比如按钮）来完成场景载入触发时，等待组件响应
        if (this.readyToShow != null)
            return;
        // 否则加载完成后直接进入场景
        if (this.loadProgressCount >= this.loadPorgressCountMax) {
            this.onLoadScene();
        }
    };
    // TAG USER FUNCTION:                                                                                    
    // tag 用户方法 
    /**
     * 播放开始动画
     */
    Loading.prototype.playLogoAnimation = function () {
        var _this = this;
        cc.tween(this.logoNode)
            .delay(0.5)
            .to(1, { opacity: 255 })
            .delay(1)
            .call(function () {
            _this.animationOver = true;
        })
            .start();
    };
    /**
     * 如果此场景内有其他按钮等组件触发时
     * 可以通过这里进行中转
     * 要求格式为 on + todo
     */
    Loading.prototype.onButtonClick = function (event, customDate) {
        if (customDate.indexOf("on") <= 0)
            this[customDate]();
        else
            this.onLoadScene();
    };
    /**
     * 加载场景
     * @param sceneTarget 可选场景目标
     */
    Loading.prototype.onLoadScene = function (sceneTarget) {
        var self = this;
        cc.director.loadScene((function () {
            return sceneTarget ?
                sceneTarget instanceof String ?
                    sceneTarget :
                    sceneTarget.name :
                self.readyToGoSence.name;
        })());
    };
    // tag 客户端方法 
    /**
     * 加载全部资源包
     */
    Loading.prototype.loadAllResources = function () {
        var _this = this;
        var resKeys = Object.keys(DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog);
        resKeys.forEach(function (url) {
            var resLog = DevelopersToolGlobal_1.DevelopersToolGlobal.loadResourcescatalog[url];
            DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[resLog.url] = DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[resLog.url] || {};
            _this.loadResources(url, resLog.type, resLog.url);
        });
    };
    /**
     * 按类加载资源包
     * @param url
     * @param type
     * @param saveUrl
     */
    Loading.prototype.loadResources = function (url, type, saveUrl) {
        var self = this;
        cc.resources.loadDir(url, type, function (completedCount, totalCount, item) {
            // cc.log("正在加载:" + item.url);
            self.ProgressValue = completedCount / totalCount;
            // cc.log(`加载进度: ${self.ProgressValue * 100}%`);
        }, function (err, data) {
            if (err) {
                cc.log("\u52A0\u8F7D" + type + "\u65F6\u53D1\u751F\u9519\u8BEF");
            }
            else {
                for (var i in data) {
                    var name = (data[i] instanceof cc.SpriteAtlas) ? data[i].name.slice(0, -6) : data[i].name;
                    if (data[i] instanceof cc.JsonAsset) {
                        DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[saveUrl][name] = data[i]['json'];
                    }
                    else {
                        DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse[saveUrl][name] = data[i];
                    }
                }
            }
            self.loadProgressCount++;
        });
    };
    // tag 微信平台更新 
    /**
     * 检查游戏新版本
     */
    Loading.prototype.checkGameNewVersion = function () {
        // 仅关注微信平台
        if (!(cc.sys.platform == cc.sys.WECHAT_GAME))
            return false;
        // 尝试获取微信更新管理器
        var updateManager;
        try {
            updateManager = wx.getUpdateManager();
            if (!updateManager)
                return false;
        }
        catch (_a) {
            return false;
        }
        // 获取全局唯一的版本更新管理器，用于管理小程序更新
        updateManager.onCheckForUpdate(function (res) {
            // 监听向微信后台请求检查更新结果事件 
            console.log("是否有新版本：" + res.hasUpdate);
            if (res.hasUpdate) {
                //如果有新版本                
                // 小程序有新版本，会主动触发下载操作        
                updateManager.onUpdateReady(function () {
                    //当新版本下载完成，会进行回调          
                    wx.showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，单击确定重启小程序',
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm) {
                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启小程序               
                                updateManager.applyUpdate();
                            }
                        }
                    });
                });
                // 小程序有新版本，会主动触发下载操作（无需开发者触发）        
                updateManager.onUpdateFailed(function () {
                    //当新版本下载失败，会进行回调          
                    wx.showModal({
                        title: '提示',
                        content: '检查到有新版本，但下载失败，请稍后尝试',
                        showCancel: false,
                    });
                });
            }
        });
        return true;
    };
    //微信分包
    Loading.prototype.wxSubpackage = function () {
        var self = this;
        wx.loadSubpackage({
            name: 'resources',
            success: function (res) {
                // 分包加载成功后通过 success 回调
                self.loadAllResources();
            },
            fail: function (err) {
                // 分包加载失败通过 fail 回调
                console.error("load " + name + " fail", err);
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "logoNode", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "进度条目标(可选)",
            tooltip: "进度条目标设定后可以指定动画",
        })
    ], Loading.prototype, "progressBar", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画速率",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressUpdateRate", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画随机变化间隔",
            tooltip: "进度条动画随机变化间隔",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressRandomChangeTime", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画等待加载完成位置",
            tooltip: "进度条动画等待加载完成位置",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "progressWaitForLoad", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "完成后显示",
            tooltip: "当加载完成时，被启用的节点",
            visible: function () { return this.progressBar != null; },
        })
    ], Loading.prototype, "readyToShow", void 0);
    __decorate([
        property({
            type: cc.SceneAsset,
            displayName: "完成后加载目标",
            tooltip: "当加载完成时，加载的场景，如果有启用节点，则等待节点触发",
        })
    ], Loading.prototype, "readyToGoSence", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsbUZBQTBGO0FBTTFGO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMFFDO1FBdlFHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFPekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQWlCO1FBUWpCLHdCQUFrQixHQUFHLENBQUMsQ0FBQztRQVV2Qiw4QkFBd0IsR0FBRyxFQUFFLENBQUM7UUFVOUIseUJBQW1CLEdBQUcsR0FBRyxDQUFDO1FBUTFCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGtCQUFrQjtRQU1sQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQTJCdEIscUdBQXFHO1FBRXJHOzs7V0FHRztRQUNILG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCOzs7V0FHRztRQUNILHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QiwwQkFBb0IsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLDJDQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFN0U7OztXQUdHO1FBQ0gsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBb0tuQyxDQUFDO0lBaE5HLHlHQUF5RztJQUV6Ryx3QkFBTSxHQUFOO1FBQ0ksT0FBTztRQUNQLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLFFBQVE7UUFDUixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEVBQUU7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QUFJO1lBQ1gsV0FBVyxFQUFFLGVBQWU7WUFDNUIsT0FBTyxFQUFFLGVBQWU7WUFDeEIsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqRCxDQUFDO3dEQUN3QjtJQVExQjtRQU5DLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtZQUNiLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakQsQ0FBQztnREFDaUI7SUFRbkI7UUFMQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVU7WUFDbkIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsT0FBTyxFQUFFLDhCQUE4QjtTQUMxQyxDQUFDO21EQUNvQjtJQXhETCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBMFEzQjtJQUFELGNBQUM7Q0ExUUQsQUEwUUMsQ0ExUW9DLEVBQUUsQ0FBQyxTQUFTLEdBMFFoRDtrQkExUW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqDovb3pobXpnaLvvIzkvYbkuI3lsZ7kuo7lvIDlj5HnsbtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4uL3NjcmlwdHMvYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcblxyXG4vLyDorqnnvJbor5Hlmajlv73nlaXlubPlj7BBUEnmiqXplJlcclxuZGVjbGFyZSB2YXIgd3g6IGFueTtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9nb05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHnm67moIco5Y+v6YCJKVwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi6L+b5bqm5p2h55uu5qCH6K6+5a6a5ZCO5Y+v5Lul5oyH5a6a5Yqo55S7XCIsXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOi/m+W6puadoemDqOWIhlxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDIsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeWKqOeUu+mAn+eOh1wiLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7IH0sXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NVcGRhdGVSYXRlID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMiwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h5Yqo55S76ZqP5py65Y+Y5YyW6Ze06ZqUXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaHliqjnlLvpmo/mnLrlj5jljJbpl7TpmpRcIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzUmFuZG9tQ2hhbmdlVGltZSA9IC4yO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAyLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHliqjnlLvnrYnlvoXliqDovb3lrozmiJDkvY3nva5cIixcclxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoeWKqOeUu+etieW+heWKoOi9veWujOaIkOS9jee9rlwiLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7IH0sXHJcbiAgICB9KVxyXG4gICAgcHJvZ3Jlc3NXYWl0Rm9yTG9hZCA9IC44NTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5a6M5oiQ5ZCO5pi+56S6XCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLlvZPliqDovb3lrozmiJDml7bvvIzooqvlkK/nlKjnmoToioLngrlcIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHJlYWR5VG9TaG93ID0gbnVsbDtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnm67moIflnLrmma/pg6jliIZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuU2NlbmVBc3NldCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLlrozmiJDlkI7liqDovb3nm67moIdcIixcclxuICAgICAgICB0b29sdGlwOiBcIuW9k+WKoOi9veWujOaIkOaXtu+8jOWKoOi9veeahOWcuuaZr++8jOWmguaenOacieWQr+eUqOiKgueCue+8jOWImeetieW+heiKgueCueinpuWPkVwiLFxyXG4gICAgfSlcclxuICAgIHJlYWR5VG9Hb1NlbmNlID0gbnVsbDtcclxuXHJcbiAgICAvLyBUQUcgTElGRS1DWUNMRSBjYWxsYmFja3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5pKt5pS+5Yqo55S7XHJcbiAgICAgICAgdGhpcy5wbGF5TG9nb0FuaW1hdGlvbigpO1xyXG4gICAgICAgIC8v5qOA5p+l5ri45oiP5pu05pawXHJcbiAgICAgICAgdGhpcy5jaGVja0dhbWVOZXdWZXJzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g5byA5aeL5Yqg6L295omA5pyJ6LWE5rqQXHJcbiAgICAgICAgdGhpcy5sb2FkQWxsUmVzb3VyY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g562J5b6F5Yqo55S75pKt5pS+5a6M5q+VXHJcbiAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGlvbk92ZXIpIHJldHVybjtcclxuICAgICAgICAvLyDlpoLmnpzmnInlrprkuYnlhbbku5bnu4Tku7bvvIjmr5TlpoLmjInpkq7vvInmnaXlrozmiJDlnLrmma/ovb3lhaXop6blj5Hml7bvvIznrYnlvoXnu4Tku7blk43lupRcclxuICAgICAgICBpZiAodGhpcy5yZWFkeVRvU2hvdyAhPSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgLy8g5ZCm5YiZ5Yqg6L295a6M5oiQ5ZCO55u05o6l6L+b5YWl5Zy65pmvXHJcbiAgICAgICAgaWYgKHRoaXMubG9hZFByb2dyZXNzQ291bnQgPj0gdGhpcy5sb2FkUG9yZ3Jlc3NDb3VudE1heCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTG9hZFNjZW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyDoh6rlrprkuYnmlbDlgLwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+b5bqm5p2h5pWw5YC8XHJcbiAgICAgKiDmlbDlgLzlupTor6XlnKgwLTEwMFxyXG4gICAgICovXHJcbiAgICBQcm9ncmVzc1ZhbHVlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296L+b5bqm77yM5Lul6LWE5rqQ6L295YWl5a6M5oiQKzFcclxuICAgICAqIOW9k+i9veWFpeiuoeaVsOetieS6jui1hOa6kOaVsOaXtu+8jOWujOaIkOWKoOi9vVxyXG4gICAgICovXHJcbiAgICBsb2FkUHJvZ3Jlc3NDb3VudDogbnVtYmVyID0gMDtcclxuICAgIGxvYWRQb3JncmVzc0NvdW50TWF4OiBudW1iZXIgPSBPYmplY3Qua2V5cyhjY3Z2LmxvYWRSZXNvdXJjZXNjYXRhbG9nKS5sZW5ndGg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjnlLvmkq3mlL7lrozmr5XmoIforrBcclxuICAgICAqIOaVsOWAvOW6lOivpeWcqDAtMTAwXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvbk92ZXI6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBUQUcgVVNFUiBGVU5DVElPTjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyB0YWcg55So5oi35pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5byA5aeL5Yqo55S7XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGxheUxvZ29BbmltYXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sb2dvTm9kZSlcclxuICAgICAgICAgICAgLmRlbGF5KDAuNSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5kZWxheSgxKVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbk92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aaC5p6c5q2k5Zy65pmv5YaF5pyJ5YW25LuW5oyJ6ZKu562J57uE5Lu26Kem5Y+R5pe2XHJcbiAgICAgKiDlj6/ku6XpgJrov4fov5nph4zov5vooYzkuK3ovaxcclxuICAgICAqIOimgeaxguagvOW8j+S4uiBvbiArIHRvZG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQnV0dG9uQ2xpY2soZXZlbnQsIGN1c3RvbURhdGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY3VzdG9tRGF0ZS5pbmRleE9mKFwib25cIikgPD0gMClcclxuICAgICAgICAgICAgdGhpc1tjdXN0b21EYXRlXSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWRTY2VuZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lnLrmma9cclxuICAgICAqIEBwYXJhbSBzY2VuZVRhcmdldCDlj6/pgInlnLrmma/nm67moIdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvbkxvYWRTY2VuZShzY2VuZVRhcmdldD86IHN0cmluZyB8IGNjLlNjZW5lQXNzZXQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY2VuZVRhcmdldCA/XHJcbiAgICAgICAgICAgICAgICBzY2VuZVRhcmdldCBpbnN0YW5jZW9mIFN0cmluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVUYXJnZXQgOlxyXG4gICAgICAgICAgICAgICAgICAgIChzY2VuZVRhcmdldCBhcyBjYy5TY2VuZUFzc2V0KS5uYW1lIDpcclxuICAgICAgICAgICAgICAgIHNlbGYucmVhZHlUb0dvU2VuY2UubmFtZTtcclxuICAgICAgICB9KSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5a6i5oi356uv5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YWo6YOo6LWE5rqQ5YyFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZEFsbFJlc291cmNlcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzS2V5cyA9IE9iamVjdC5rZXlzKGNjdnYubG9hZFJlc291cmNlc2NhdGFsb2cpO1xyXG4gICAgICAgIHJlc0tleXMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzTG9nID0gY2N2di5sb2FkUmVzb3VyY2VzY2F0YWxvZ1t1cmxdO1xyXG4gICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtyZXNMb2cudXJsXSA9IGNjdnYud2FyZWhvdXNlW3Jlc0xvZy51cmxdIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXModXJsLCByZXNMb2cudHlwZSwgcmVzTG9nLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInnsbvliqDovb3otYTmupDljIVcclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSBzYXZlVXJsIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRSZXNvdXJjZXModXJsLCB0eXBlLCBzYXZlVXJsKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKHVybCwgdHlwZSxcclxuXHJcbiAgICAgICAgICAgIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5Zyo5Yqg6L29OlwiICsgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Qcm9ncmVzc1ZhbHVlID0gY29tcGxldGVkQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGDliqDovb3ov5vluqY6ICR7c2VsZi5Qcm9ncmVzc1ZhbHVlICogMTAwfSVgKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYOWKoOi9vSR7dHlwZX3ml7blj5HnlJ/plJnor69gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gKGRhdGFbaV0gaW5zdGFuY2VvZiBjYy5TcHJpdGVBdGxhcykgPyBkYXRhW2ldLm5hbWUuc2xpY2UoMCwgLTYpIDogZGF0YVtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXSBpbnN0YW5jZW9mIGNjLkpzb25Bc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2N2di53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldWydqc29uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtzYXZlVXJsXVtuYW1lXSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRQcm9ncmVzc0NvdW50Kys7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOW+ruS/oeW5s+WPsOabtOaWsCBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpea4uOaIj+aWsOeJiOacrFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrR2FtZU5ld1ZlcnNpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8g5LuF5YWz5rOo5b6u5L+h5bmz5Y+wXHJcbiAgICAgICAgaWYgKCEoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDlsJ3or5Xojrflj5blvq7kv6Hmm7TmlrDnrqHnkIblmahcclxuICAgICAgICBsZXQgdXBkYXRlTWFuYWdlcjogYW55O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIGlmICghdXBkYXRlTWFuYWdlcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICAvLyDojrflj5blhajlsYDllK/kuIDnmoTniYjmnKzmm7TmlrDnrqHnkIblmajvvIznlKjkuo7nrqHnkIblsI/nqIvluo/mm7TmlrBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyDnm5HlkKzlkJHlvq7kv6HlkI7lj7Dor7fmsYLmo4Dmn6Xmm7TmlrDnu5Pmnpzkuovku7YgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5pyJ5paw54mI5pys77yaXCIgKyByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5oYXNVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pyJ5paw54mI5pysICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g5bCP56iL5bqP5pyJ5paw54mI5pys77yM5Lya5Li75Yqo6Kem5Y+R5LiL6L295pON5L2cICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lvZPmlrDniYjmnKzkuIvovb3lrozmiJDvvIzkvJrov5vooYzlm57osIMgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5Y2V5Ye756Gu5a6a6YeN5ZCv5bCP56iL5bqPJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK/lsI/nqIvluo8gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIOWwj+eoi+W6j+acieaWsOeJiOacrO+8jOS8muS4u+WKqOinpuWPkeS4i+i9veaTjeS9nO+8iOaXoOmcgOW8gOWPkeiAheinpuWPke+8iSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+aWsOeJiOacrOS4i+i9veWksei0pe+8jOS8mui/m+ihjOWbnuiwgyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmo4Dmn6XliLDmnInmlrDniYjmnKzvvIzkvYbkuIvovb3lpLHotKXvvIzor7fnqI3lkI7lsJ3or5UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b6u5L+h5YiG5YyFXHJcbiAgICBwcml2YXRlIHd4U3VicGFja2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd3gubG9hZFN1YnBhY2thZ2Uoe1xyXG4gICAgICAgICAgICBuYW1lOiAncmVzb3VyY2VzJywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3miJDlip/lkI7pgJrov4cgc3VjY2VzcyDlm57osINcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZEFsbFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3lpLHotKXpgJrov4cgZmFpbCDlm57osINcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGxvYWQgJHtuYW1lfSBmYWlsYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/RigorousLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '173f5UDvDNOh7BaDUvjJbqV', 'RigorousLibrary');
// scripts/base/core/RigorousLibrary.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RigorousRingBuffer = exports.RigorousArray = exports.RigorousMap = exports.RigorousSet = exports.RigorousHash = exports.RigorousMatrix2 = exports.RigorousMatrix3 = exports.RigorousMatrix4 = exports.RigorousSize = exports.RigorousVector2 = exports.RigorousScale = exports.RigorousRotation = exports.RigorousPostion = exports.RigorousVector3 = exports.RigorousVector4 = exports.RigorousValueType = void 0;
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var SysBaseType;
(function (SysBaseType) {
    SysBaseType[SysBaseType["number"] = 0] = "number";
    SysBaseType[SysBaseType["string"] = 1] = "string";
    SysBaseType[SysBaseType["boolean"] = 2] = "boolean";
    SysBaseType[SysBaseType["object"] = 3] = "object";
    SysBaseType[SysBaseType["undefined"] = 4] = "undefined";
})(SysBaseType || (SysBaseType = {}));
var RigorousValueType = /** @class */ (function () {
    function RigorousValueType() {
    }
    return RigorousValueType;
}());
exports.RigorousValueType = RigorousValueType;
var RigorousVector4 = /** @class */ (function (_super) {
    __extends(RigorousVector4, _super);
    function RigorousVector4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector4;
}(RigorousValueType));
exports.RigorousVector4 = RigorousVector4;
var RigorousVector3 = /** @class */ (function (_super) {
    __extends(RigorousVector3, _super);
    function RigorousVector3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector3;
}(RigorousVector4));
exports.RigorousVector3 = RigorousVector3;
var RigorousPostion = /** @class */ (function (_super) {
    __extends(RigorousPostion, _super);
    function RigorousPostion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousPostion;
}(RigorousVector3));
exports.RigorousPostion = RigorousPostion;
var RigorousRotation = /** @class */ (function (_super) {
    __extends(RigorousRotation, _super);
    function RigorousRotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousRotation;
}(RigorousVector3));
exports.RigorousRotation = RigorousRotation;
var RigorousScale = /** @class */ (function (_super) {
    __extends(RigorousScale, _super);
    function RigorousScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousScale;
}(RigorousVector3));
exports.RigorousScale = RigorousScale;
var RigorousVector2 = /** @class */ (function (_super) {
    __extends(RigorousVector2, _super);
    function RigorousVector2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousVector2;
}(RigorousVector4));
exports.RigorousVector2 = RigorousVector2;
var RigorousSize = /** @class */ (function (_super) {
    __extends(RigorousSize, _super);
    function RigorousSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousSize;
}(RigorousVector2));
exports.RigorousSize = RigorousSize;
var RigorousMatrix4 = /** @class */ (function (_super) {
    __extends(RigorousMatrix4, _super);
    function RigorousMatrix4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix4;
}(RigorousValueType));
exports.RigorousMatrix4 = RigorousMatrix4;
var RigorousMatrix3 = /** @class */ (function (_super) {
    __extends(RigorousMatrix3, _super);
    function RigorousMatrix3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix3;
}(RigorousMatrix4));
exports.RigorousMatrix3 = RigorousMatrix3;
var RigorousMatrix2 = /** @class */ (function (_super) {
    __extends(RigorousMatrix2, _super);
    function RigorousMatrix2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousMatrix2;
}(RigorousMatrix4));
exports.RigorousMatrix2 = RigorousMatrix2;
var RigorousHash = /** @class */ (function (_super) {
    __extends(RigorousHash, _super);
    /**
     * @param length 定义哈希表的使用场景最大长度
     */
    function RigorousHash(length) {
        var _this = _super.call(this) || this;
        _this.HashCodeGate = false;
        _this.HashCodeGate = length ? length > 50 : true;
        _this._HashList = {};
        return _this;
    }
    /**
     * 获取一个字符的哈希值
     * @param code
     */
    RigorousHash.prototype.ToHashCode_ShortWay = function (code) {
        var hash = 0;
        if (typeof (code) == 'number') {
            hash = code;
        }
        else {
            for (var _i = 0, code_1 = code; _i < code_1.length; _i++) {
                var iterator = code_1[_i];
                hash += iterator.charCodeAt(0);
            }
            // HashComplexity
            hash %= 37;
        }
        return hash;
    };
    RigorousHash.prototype.ToHashCode_LongWay = function (code) {
        var hash = 5381;
        if (typeof (code) == 'number') {
            hash = code;
        }
        else {
            for (var _i = 0, code_2 = code; _i < code_2.length; _i++) {
                var iterator = code_2[_i];
                hash *= 33;
                hash += iterator.charCodeAt(0);
            }
            hash %= 1013;
        }
        return hash;
    };
    /**
     * 获取哈希值的选择器
     */
    RigorousHash.prototype.ToHashCode = function (key) {
        if (this.HashCodeGate)
            return this.ToHashCode_ShortWay(key);
        else
            return this.ToHashCode_LongWay(key);
    };
    /**
     * 按键获取元素
     * @param key 键
     */
    RigorousHash.prototype.get = function (key) {
        var hash = this.ToHashCode(key);
        return this._HashList[hash];
    };
    /**
     * 按键设置元素
     * @param key 键
     */
    RigorousHash.prototype.set = function (key, value) {
        var hash = this.ToHashCode(key);
        this._HashList[hash] = value;
    };
    /**
     * 按键删除元素
     * @param key 键
     */
    RigorousHash.prototype.remove = function (key) {
        var hash = this.ToHashCode(key);
        if (this._HashList[hash]) {
            this._HashList[hash].destroy();
            return true;
        }
        return false;
    };
    /**
     * 清除
     */
    RigorousHash.prototype.clean = function () {
        this._HashList = [];
    };
    return RigorousHash;
}(RigorousValueType));
exports.RigorousHash = RigorousHash;
var RigorousSet = /** @class */ (function (_super) {
    __extends(RigorousSet, _super);
    function RigorousSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RigorousSet;
}(RigorousHash));
exports.RigorousSet = RigorousSet;
var RigorousMap = /** @class */ (function (_super) {
    __extends(RigorousMap, _super);
    function RigorousMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RigorousMap.prototype.set = function (key, value) {
        var objectTagName;
        switch (SysBaseType[typeof (value)]) {
            case SysBaseType.object:
                objectTagName = Object.prototype.toString.call(value);
                if (value instanceof cc.Component)
                    objectTagName += value['_id'];
                else {
                    var ObjectKey = Object.keys(value);
                    objectTagName += ObjectKey[114514 % ObjectKey.length];
                    objectTagName += ObjectKey[4399 % ObjectKey.length];
                    objectTagName += ObjectKey[8848 % ObjectKey.length];
                }
                key = objectTagName;
                break;
            case SysBaseType.string:
                key = value;
                break;
            case SysBaseType.number:
                key = value;
                break;
            case SysBaseType.boolean:
                key = value ? 1 : 0;
                break;
            case SysBaseType.undefined:
                key = 0;
                break;
            default:
                key = 0;
                break;
        }
        var hash = this.ToHashCode(key);
        this._HashList[hash] = value;
        return hash;
    };
    return RigorousMap;
}(RigorousHash));
exports.RigorousMap = RigorousMap;
var RigorousArray = /** @class */ (function (_super) {
    __extends(RigorousArray, _super);
    /**
     * 数组类并非用作Array，不要直接使用此类存储参数
     */
    function RigorousArray() {
        var _this = _super.call(this) || this;
        _this._HashList = [];
        return _this;
    }
    /**
     * 按键移除
     */
    RigorousArray.prototype.remove = function (key) {
        this._HashList[key] = null;
    };
    /**
     * 清除
     */
    RigorousArray.prototype.clean = function () {
        this._HashList = [];
    };
    return RigorousArray;
}(RigorousValueType));
exports.RigorousArray = RigorousArray;
var RigorousRingBuffer = /** @class */ (function (_super) {
    __extends(RigorousRingBuffer, _super);
    /**
     * 初始化栈
     * @warn 通用起见没有使用苛刻模式，请不要在任何地方使用非正整数
     */
    function RigorousRingBuffer(size) {
        var _this = _super.call(this) || this;
        _this._StackGetPointer = 0;
        _this._StackPutPointer = 0;
        _this._StackSize = size;
        return _this;
    }
    Object.defineProperty(RigorousRingBuffer.prototype, "_$get", {
        get: function () {
            return this._StackGetPointer;
        },
        set: function (value) {
            this._StackGetPointer += value;
            this._StackGetPointer %= this._StackSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "$get", {
        get: function () {
            return this._StackGetPointer;
        },
        set: function (value) {
            if (value > 0)
                this._StackIsFull = false;
            if (value > this.length)
                this.clean();
            var getPointer = DevelopersToolGlobal_1.mathMacro.PMod(value, this._StackSize);
            this._StackGetPointer = getPointer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "_$put", {
        get: function () {
            return this._StackPutPointer;
        },
        set: function (value) {
            this._StackPutPointer += value;
            this._StackPutPointer %= this._StackSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "$put", {
        /**
         * 获取有效的进栈位
         */
        get: function () {
            // let put = this._StackPutPointer - 1;
            // put = put < 0 ? this._StackSize - 1 : put;
            // return put;
            return this._StackPutPointer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RigorousRingBuffer.prototype, "length", {
        /**
         * 获取栈有效长度
         */
        get: function () {
            var len = this._$put - this._$get;
            if (this._StackIsFull)
                return this._StackSize - len;
            return len < 0 ? this._StackSize + len : len;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 直接获取索引项目
     * 这不会触发栈指针变化
     */
    RigorousRingBuffer.prototype.getBuffer = function (index) {
        return this._HashList[DevelopersToolGlobal_1.mathMacro.PMod(index, this._StackSize)];
    };
    /**
     * 进栈
     * @param object
     */
    RigorousRingBuffer.prototype.push = function (object) {
        this._HashList[this._StackPutPointer] = object;
        var lastPut = this._$put;
        this._$put = 1;
        if (this._StackIsFull)
            this._$get = 1;
        if (this._$put == this._$get)
            this._StackIsFull = true;
        return lastPut;
    };
    /**
     * 出栈
     * @param length
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    RigorousRingBuffer.prototype.pull = function (length) {
        this._StackIsFull = false;
        var out = { obj: [], index: [] };
        for (var index = 0; index < Math.min(length, this.length); index++) {
            var outIndex = (index + this._$get) % this._StackSize;
            out.obj.push(this._HashList[outIndex]);
            out.index.push(outIndex);
            this._HashList[outIndex] = undefined;
        }
        this._$get = length;
        return out;
    };
    /**
     * 清空栈
     */
    RigorousRingBuffer.prototype.clean = function () {
        this._HashList = [];
        this._StackGetPointer = 0;
        this._StackPutPointer = 0;
    };
    /**
     * 给定一个索引，转为一个在栈内的有效的索引
     */
    RigorousRingBuffer.prototype.indexAtStack = function (index) {
        return DevelopersToolGlobal_1.mathMacro.PMod(index, this._StackSize);
    };
    return RigorousRingBuffer;
}(RigorousArray));
exports.RigorousRingBuffer = RigorousRingBuffer;
// 测试
// interface kismitFloat {
//     _num: Number;
// }
// class myfloat implements kismitFloat {
//     constructor(value?: number) {
//         this._num = value || 0;
//     }
//     _num;
//     get num() {
//         return this._num;
//     }
//     set num(value: number) {
//         this._num = value;
//     }
// }
// let a = new myfloat(1);
// cc.log(a.num);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcUmlnb3JvdXNMaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBZ0U7QUFDaEUsSUFBSyxXQUVKO0FBRkQsV0FBSyxXQUFXO0lBQ1osaURBQU0sQ0FBQTtJQUFFLGlEQUFNLENBQUE7SUFBRSxtREFBTyxDQUFBO0lBQUUsaURBQU0sQ0FBQTtJQUFFLHVEQUFTLENBQUE7QUFDOUMsQ0FBQyxFQUZJLFdBQVcsS0FBWCxXQUFXLFFBRWY7QUFDRDtJQUFBO0lBRUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSw4Q0FBaUI7QUFHOUI7SUFBcUMsbUNBQWlCO0lBQXREOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxpQkFBaUIsR0FFckQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQXFDLG1DQUFlO0lBQXBEOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxlQUFlLEdBRW5EO0FBRlksMENBQWU7QUFHNUI7SUFBc0Msb0NBQWU7SUFBckQ7O0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnFDLGVBQWUsR0FFcEQ7QUFGWSw0Q0FBZ0I7QUFHN0I7SUFBbUMsaUNBQWU7SUFBbEQ7O0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLENBRmtDLGVBQWUsR0FFakQ7QUFGWSxzQ0FBYTtBQUcxQjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQWtD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QUVEOztPQUVHO0lBQ0kseUNBQVksR0FBbkIsVUFBb0IsS0FBYTtRQUM3QixPQUFPLGdDQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0F6SEEsQUF5SEMsQ0F6SHVDLGFBQWEsR0F5SHBEO0FBekhZLGdEQUFrQjtBQTRIL0IsS0FBSztBQUNMLDBCQUEwQjtBQUMxQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKLHlDQUF5QztBQUN6QyxvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLFFBQVE7QUFDUixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IsSUFBSTtBQUNKLDBCQUEwQjtBQUMxQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmVudW0gU3lzQmFzZVR5cGUge1xyXG4gICAgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIG9iamVjdCwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yNCBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMyBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1Bvc3Rpb24gZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjMge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNSb3RhdGlvbiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yMyB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NjYWxlIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3IzIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NpemUgZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjIge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXg0IGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXgzIGV4dGVuZHMgUmlnb3JvdXNNYXRyaXg0IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzTWF0cml4MiBleHRlbmRzIFJpZ29yb3VzTWF0cml4NCB7XHJcblxyXG59XHJcbmltcG9ydCB7IEloYXNoIH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNIYXNoIGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUgaW1wbGVtZW50cyBJaGFzaCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5a6a5LmJ5ZOI5biM6KGo55qE5L2/55So5Zy65pmv5pyA5aSn6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aD86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5IYXNoQ29kZUdhdGUgPSBsZW5ndGggPyBsZW5ndGggPiA1MCA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWTiOW4jOihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZGVjbGFyZSBfSGFzaExpc3Q6IGFueVtudW1iZXJdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5a2X56ym55qE5ZOI5biM5YC8XHJcbiAgICAgKiBAcGFyYW0gY29kZSBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfU2hvcnRXYXkoY29kZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaGFzaDogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIChjb2RlKSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBoYXNoID0gY29kZSBhcyBudW1iZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSGFzaENvbXBsZXhpdHlcclxuICAgICAgICAgICAgaGFzaCAlPSAzNztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfTG9uZ1dheShjb2RlOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBoYXNoOiBudW1iZXIgPSA1MzgxO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGNvZGUpID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGhhc2ggPSBjb2RlIGFzIG51bWJlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGhhc2ggKj0gMzM7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFzaCAlPSAxMDEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgSGFzaENvZGVHYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWTiOW4jOWAvOeahOmAieaLqeWZqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgVG9IYXNoQ29kZShrZXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuSGFzaENvZGVHYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX1Nob3J0V2F5KGtleSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX0xvbmdXYXkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiOt+WPluWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldChrZXkpIHtcclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdFtoYXNoXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiuvue9ruWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLlRvSGFzaENvZGUoa2V5KTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFtoYXNoXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu5Yig6Zmk5YWD57SgXHJcbiAgICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5Ub0hhc2hDb2RlKGtleSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX0hhc2hMaXN0W2hhc2hdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NldCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c01hcCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogYW55LCB2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgb2JqZWN0VGFnTmFtZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgICAgIHN3aXRjaCAoU3lzQmFzZVR5cGVbdHlwZW9mICh2YWx1ZSldKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUub2JqZWN0OlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5Db21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSArPSB2YWx1ZVsnX2lkJ107XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgT2JqZWN0S2V5ID0gT2JqZWN0LmtleXModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzExNDUxNCAlIE9iamVjdEtleS5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzQzOTkgJSBPYmplY3RLZXkubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUYWdOYW1lICs9IE9iamVjdEtleVs4ODQ4ICUgT2JqZWN0S2V5Lmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBvYmplY3RUYWdOYW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUuc3RyaW5nOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTeXNCYXNlVHlwZS5udW1iZXI6XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLmJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUudW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcbn1cclxuaW1wb3J0IHsgSWFycmF5IH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNBcnJheSBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIGltcGxlbWVudHMgSWFycmF5IHtcclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE57G75bm26Z2e55So5L2cQXJyYXnvvIzkuI3opoHnm7TmjqXkvb/nlKjmraTnsbvlrZjlgqjlj4LmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX0hhc2hMaXN0OiBhbnlbbnVtYmVyXTtcclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu56e76ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3Rba2V5XSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgIH1cclxufVxyXG5pbXBvcnQgeyBJcmluZ0J1ZmZlciB9IGZyb20gJy4vUmlnb3JvdXNUeXBlJztcclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzUmluZ0J1ZmZlciBleHRlbmRzIFJpZ29yb3VzQXJyYXkgaW1wbGVtZW50cyBJcmluZ0J1ZmZlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluagiCBcclxuICAgICAqIEB3YXJuIOmAmueUqOi1t+ingeayoeacieS9v+eUqOiLm+WIu+aooeW8j++8jOivt+S4jeimgeWcqOS7u+S9leWcsOaWueS9v+eUqOmdnuato+aVtOaVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrR2V0UG9pbnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tQdXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1NpemUgPSBzaXplXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiOaMh+mSiCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWNsYXJlIF9TdGFja0dldFBvaW50ZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ2V0IF8kZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YWNrR2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0IF8kZ2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0dldFBvaW50ZXIgKz0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyICU9IHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgJGdldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGFja0dldFBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0ICRnZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHRoaXMuX1N0YWNrSXNGdWxsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5sZW5ndGgpIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBsZXQgZ2V0UG9pbnRlciA9IG1tLlBNb2QodmFsdWUsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gZ2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+b5qCI5oyH6ZKIIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlY2xhcmUgX1N0YWNrUHV0UG9pbnRlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBnZXQgXyRwdXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgXyRwdXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgJT0gdGhpcy5fU3RhY2tTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnInmlYjnmoTov5vmoIjkvY1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCAkcHV0KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gbGV0IHB1dCA9IHRoaXMuX1N0YWNrUHV0UG9pbnRlciAtIDE7XHJcbiAgICAgICAgLy8gcHV0ID0gcHV0IDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSAtIDEgOiBwdXQ7XHJcbiAgICAgICAgLy8gcmV0dXJuIHB1dDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIjmt7HluqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX1N0YWNrU2l6ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoIjmu6HmoIforrBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX1N0YWNrSXNGdWxsOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qCI5pyJ5pWI6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuXyRwdXQgLSB0aGlzLl8kZ2V0O1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgcmV0dXJuIHRoaXMuX1N0YWNrU2l6ZSAtIGxlbjtcclxuICAgICAgICByZXR1cm4gbGVuIDwgMCA/IHRoaXMuX1N0YWNrU2l6ZSArIGxlbiA6IGxlbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog55u05o6l6I635Y+W57Si5byV6aG555uuIFxyXG4gICAgICog6L+Z5LiN5Lya6Kem5Y+R5qCI5oyH6ZKI5Y+Y5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCdWZmZXIoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0hhc2hMaXN0W21tLlBNb2QoaW5kZXgsIHRoaXMuX1N0YWNrU2l6ZSldO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5vmoIhcclxuICAgICAqIEBwYXJhbSBvYmplY3QgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoPFQ+KG9iamVjdDogVCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3RbdGhpcy5fU3RhY2tQdXRQb2ludGVyXSA9IG9iamVjdDtcclxuICAgICAgICBsZXQgbGFzdFB1dCA9IHRoaXMuXyRwdXQ7XHJcbiAgICAgICAgdGhpcy5fJHB1dCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuX1N0YWNrSXNGdWxsKSB0aGlzLl8kZ2V0ID0gMTtcclxuICAgICAgICBpZiAodGhpcy5fJHB1dCA9PSB0aGlzLl8kZ2V0KSB0aGlzLl9TdGFja0lzRnVsbCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RQdXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiFxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBcclxuICAgICAqIEByZXR1cm4gb2JqW106IG9iajMsIG9iajQuLi5cclxuICAgICAqIEByZXR1cm4gaW5kZXhbXTogMywgNC4uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHVsbDxUIGV4dGVuZHMgbnVtYmVyPihsZW5ndGg6IFQpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0lzRnVsbCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBvdXQgPSB7IG9iajogW10sIGluZGV4OiBbXSB9O1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBNYXRoLm1pbihsZW5ndGgsIHRoaXMubGVuZ3RoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgb3V0SW5kZXggPSAoaW5kZXggKyB0aGlzLl8kZ2V0KSAlIHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgICAgICAgICAgb3V0Lm9iai5wdXNoKHRoaXMuX0hhc2hMaXN0W291dEluZGV4XSk7XHJcbiAgICAgICAgICAgIG91dC5pbmRleC5wdXNoKG91dEluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fSGFzaExpc3Rbb3V0SW5kZXhdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl8kZ2V0ID0gbGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrmoIhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uZ5a6a5LiA5Liq57Si5byV77yM6L2s5Li65LiA5Liq5Zyo5qCI5YaF55qE5pyJ5pWI55qE57Si5byVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbmRleEF0U3RhY2soaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG1tLlBNb2QoaW5kZXgsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyDmtYvor5VcclxuLy8gaW50ZXJmYWNlIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIF9udW06IE51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgbXlmbG9hdCBpbXBsZW1lbnRzIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgdGhpcy5fbnVtID0gdmFsdWUgfHwgMDtcclxuLy8gICAgIH1cclxuLy8gICAgIF9udW07XHJcbi8vICAgICBnZXQgbnVtKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9udW07XHJcbi8vICAgICB9XHJcbi8vICAgICBzZXQgbnVtKHZhbHVlOiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLl9udW0gPSB2YWx1ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsZXQgYSA9IG5ldyBteWZsb2F0KDEpO1xyXG4vLyBjYy5sb2coYS5udW0pOyJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3364aqqOgFIq4CCAllydcf6', 'DevelopersToolGlobal');
// scripts/base/class/DevelopersToolGlobal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAnimPhySimSpace = exports.EWidgetCoordinateSpace = exports.ESceneCoordinateSpace = exports.panelType = exports.mathMacro = exports.DevelopersToolGlobal = void 0;
// import { DevelopersToolGlobal as ccvv } from './DevelopersToolGlobal';
var DevelopersToolGlobal = /** @class */ (function () {
    function DevelopersToolGlobal() {
    }
    Object.defineProperty(DevelopersToolGlobal, "warehouse", {
        get: function () {
            this._Global_Warehouse = this._Global_Warehouse || {};
            return this._Global_Warehouse;
        },
        set: function (value) {
            this._Global_Warehouse = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "loadResourcescatalog", {
        /**
         * 加载资源目录
         */
        get: function () {
            return {
                // "url": { type: res type, url: "save url" },
                //加载音乐音效资源
                "sounds": { type: cc.AudioClip, url: "sounds" },
                //加载预制件资源
                "prefabs": { type: cc.Prefab, url: "prefabs" },
                //加载图集资源
                // "atlas": { type: cc.SpriteAtlas, url: "atlas" },
                //加载单个精灵资源
                "frames": { type: cc.SpriteFrame, url: "frames" },
                //加载分享图
                "share": { type: cc.SpriteFrame, url: "share" },
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "tool", {
        get: function () {
            this._Global_Tool = this._Global_Tool || {};
            return this._Global_Tool;
        },
        set: function (value) {
            this._Global_Tool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "other", {
        get: function () {
            this._Global_Other = this._Global_Other || {};
            return this._Global_Other;
        },
        set: function (value) {
            this._Global_Other = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "layers", {
        /**
         * 获取所有层
         */
        get: function () {
            this._Global_GenralLayer = this._Global_GenralLayer || {};
            return this._Global_GenralLayer;
        },
        /**
         * 设置所有层
         */
        set: function (value) {
            this._Global_GenralLayer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "layer", {
        /**
         * 获取底层
         */
        get: function () {
            return this.layers[0];
        },
        /**
         * 添加的新节点
         */
        set: function (value) {
            var key = Object.keys(this._Global_GenralLayer || {}).length;
            this.layers[key.toString()] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "scripts", {
        get: function () {
            this._Global_OpenScript = this._Global_OpenScript || {};
            return this._Global_OpenScript;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "script", {
        set: function (value) {
            if (!value)
                return;
            var key;
            if (typeof value === 'object') {
                key = value.name;
                if (!this._OpenScript_FristName)
                    this._OpenScript_FristName = key;
            }
            else {
                key = (Object.keys(this._Global_OpenScript || {}).length).toString();
            }
            this.scripts[key] = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 清空脚本
     */
    DevelopersToolGlobal.script_Clean = function () {
        this._OpenScript_FristName = null;
        this._Global_OpenScript = {};
    };
    Object.defineProperty(DevelopersToolGlobal, "scriptName", {
        /**
         * 获得所有脚本名称
         */
        get: function () {
            if (!this._Global_OpenScript)
                return null;
            return Object.keys(this._Global_OpenScript);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "fristScript", {
        /**
         * 获取第一个加入的脚本
         */
        get: function () {
            return this._Global_OpenScript[this._OpenScript_FristName];
        },
        enumerable: false,
        configurable: true
    });
    DevelopersToolGlobal.getName = function (inst) {
        return inst.name + inst['_id'].replace(/\./g, "");
    };
    Object.defineProperty(DevelopersToolGlobal, "instances", {
        /**
         * 获取全部实例
         */
        get: function () {
            this._Global_Instance = this._Global_Instance || {};
            return this._Global_Instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "instance", {
        /**
         * 添加实例，用实例的名称与ID作键名
         */
        set: function (value) {
            this.instance[this.getName(value)] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevelopersToolGlobal, "instance_remove", {
        /**
         * 删除实例
         * 如果未指定有效值则为清除
         */
        set: function (value) {
            if (!value)
                this._Global_Instance = {};
            else
                this.instance[this.getName(value)] = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 根据名称获取实例
     * 如果没有使用自定义名称，则默认用实例ID作为名称，这可能与任何名称常量不符
     */
    DevelopersToolGlobal.getInstanceByName = function (name) {
        return this._Global_Instance[name];
    };
    /**
     * 根据名称设置实例
     */
    DevelopersToolGlobal.setInstanceByName = function (name, inst) {
        this._Global_Instance[name] = inst;
    };
    Object.defineProperty(DevelopersToolGlobal, "tuple", {
        /**
         * 获取元组
         */
        get: function () {
            return this._Global_Tuple;
        },
        /**
         * 元组加入一个项目
         * 如果加入一个无效的值，比如布尔，undefined，unll，将清空这个元组
         * 加入一个空数组或是空对象是有效的，所以会作为元组的一个值加入
         */
        set: function (value) {
            if (!value || typeof value == 'boolean')
                this._Global_Tuple = [];
            this._Global_Tuple.push(value);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 元组加入独有项目
     * 返回这个项目是否存在
     */
    DevelopersToolGlobal.tupleOnly = function (value) {
        if (this._Global_Tuple.indexOf(value))
            return true;
        else
            this.tuple = value;
        return false;
    };
    Object.defineProperty(DevelopersToolGlobal, "tuple_remove", {
        /**
         * 移除元组一个项目
         */
        set: function (value) {
            this._Global_Tuple.filter(function (element, index, array) { element != value; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 仓库全局实例
     * 存放load时载入的数据
     */
    DevelopersToolGlobal._Global_Warehouse = null;
    /**
     * 工具全局实例
     * 可以注入其他工具类
     */
    DevelopersToolGlobal._Global_Tool = null;
    /**
     * 杂项全局实例
     * 可以注入其他项目
     */
    DevelopersToolGlobal._Global_Other = null;
    /**
     * 游戏基本层全局实例
     * 只能注入cc.Node
     */
    DevelopersToolGlobal._Global_GenralLayer = null;
    /**
     * 游戏基本层全局脚本
     * 只能注入cc.component，不过实际上并没有进行限制
     */
    DevelopersToolGlobal._Global_OpenScript = null;
    DevelopersToolGlobal._OpenScript_FristName = null;
    /**
     * 全局实例
     */
    DevelopersToolGlobal._Global_Instance = {};
    /**
     * 全局元组
     */
    DevelopersToolGlobal._Global_Tuple = [];
    return DevelopersToolGlobal;
}());
exports.DevelopersToolGlobal = DevelopersToolGlobal;
// import { mathMacro as mm } from '../base/class/DevelopersToolGlobal';
var mathMacro = /** @class */ (function () {
    function mathMacro() {
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        this.mnum = {};
        this._IsMat = false;
        var isNumber = function (value) { return typeof value === 'number' && !isNaN(value); };
        if (!num[0]) {
            this.mnum['x'] = 0;
            this.mnum['y'] = 0;
            this.mnum['z'] = 0;
            this.mnum['w'] = 0;
        }
        else if (num[0].x) {
            this.mnum['x'] = isNumber(num[0].x) ? num[0].x : 0;
            this.mnum['y'] = isNumber(num[0].y) ? num[0].y : 0;
            this.mnum['z'] = isNumber(num[0].z) ? num[0].z : 0;
            this.mnum['w'] = isNumber(num[0].w) ? num[0].w : 0;
        }
        else if (num[0][0]) {
            this.mnum['x'] = isNumber(num[0][0]) ? num[0][0] : 0;
            this.mnum['y'] = isNumber(num[0][1]) ? num[0][1] : 0;
            this.mnum['z'] = isNumber(num[0][2]) ? num[0][2] : 0;
            this.mnum['w'] = isNumber(num[0][3]) ? num[0][3] : 0;
        }
        else if (num[0] instanceof cc.Size) {
            this.mnum['x'] = isNumber(num[0].width) ? num[0].width : 0;
            this.mnum['y'] = isNumber(num[0].height) ? num[0].height : 0;
        }
        else if (num[0] instanceof cc.Color) {
            this.mnum['x'] = isNumber(num[0].r) ? num[0].r : 0;
            this.mnum['y'] = isNumber(num[0].g) ? num[0].g : 0;
            this.mnum['z'] = isNumber(num[0].b) ? num[0].b : 0;
            this.mnum['w'] = isNumber(num[0].a) ? num[0].a : 0;
        }
        else if (num[0] instanceof cc.Mat3) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
        }
        else if (num[0] instanceof cc.Mat4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0]['m00'];
            this.mnum['m01'] = num[0]['m01'];
            this.mnum['m02'] = num[0]['m02'];
            this.mnum['m03'] = num[0]['m03'];
            this.mnum['m04'] = num[0]['m04'];
            this.mnum['m05'] = num[0]['m05'];
            this.mnum['m06'] = num[0]['m06'];
            this.mnum['m07'] = num[0]['m07'];
            this.mnum['m08'] = num[0]['m08'];
            this.mnum['m09'] = num[0]['m09'];
            this.mnum['m10'] = num[0]['m10'];
            this.mnum['m11'] = num[0]['m11'];
            this.mnum['m12'] = num[0]['m12'];
            this.mnum['m13'] = num[0]['m13'];
            this.mnum['m14'] = num[0]['m14'];
            this.mnum['m15'] = num[0]['m15'];
        }
        else if (num.length <= 4) {
            this.mnum['x'] = num[0];
            this.mnum['y'] = num[1];
            this.mnum['z'] = num[2];
            this.mnum['w'] = num[3];
        }
        else if (num.length >= 4) {
            this._IsMat = true;
            this.mnum['m00'] = num[0];
            this.mnum['m01'] = num[1];
            this.mnum['m02'] = num[2];
            this.mnum['m03'] = num[3];
            this.mnum['m04'] = num[4];
            this.mnum['m05'] = num[5];
            this.mnum['m06'] = num[6];
            this.mnum['m07'] = num[7];
            this.mnum['m08'] = num[8];
            this.mnum['m09'] = num[9];
            this.mnum['m10'] = num[10];
            this.mnum['m11'] = num[11];
            this.mnum['m12'] = num[12];
            this.mnum['m13'] = num[13];
            this.mnum['m14'] = num[14];
            this.mnum['m15'] = num[15];
        }
        // let out = { lrc: '2128cz' };
        // if (num[0] && typeof num[0] === 'object') { out['m00'] = isNumber(num[0].x) ? num[0].x : num[0].x || (isNumber(num[0][0]) ? num[0][0] : num[0].width || num[0].r || (isNumber(num[0]) ? num[0] : 0)); out['m01'] = isNumber(num[0].y) ? num[0].y : num[0].y || (isNumber(num[0][1]) ? num[0][1] : num[0].height || num[0].g || (isNumber(num[0]) ? num[0] : 0)); out['m02'] = isNumber(num[0].z) ? num[0].z : num[0].z || (isNumber(num[0][2]) ? num[0][2] : num[0].b || (isNumber(num[0]) ? num[0] : 0)); out['m03'] = isNumber(num[0].w) ? num[0].w : num[0].w || (isNumber(num[0][3]) ? num[0][3] : num[0].a || (isNumber(num[0]) ? num[0] : 0)); }
        // else { out['m00'] = num[0]; out['m01'] = num[1]; out['m02'] = num[2]; out['m03'] = num[3]; out['m04'] = num[4]; out['m05'] = num[5]; out['m06'] = num[6]; out['m07'] = num[7]; out['m08'] = num[8]; out['m09'] = num[9]; out['m10'] = num[10]; out['m11'] = num[11]; out['m12'] = num[12]; out['m13'] = num[13]; out['m14'] = num[14]; out['m15'] = num[15]; }
        // this.mnum = out;
    }
    Object.defineProperty(mathMacro, "random_uint2", {
        // 返回随机的整数，范围在[0, x)
        get: function () { return Math.floor(Math.random() * 2); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint3", {
        get: function () { return Math.floor(Math.random() * 3); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint4", {
        get: function () { return Math.floor(Math.random() * 4); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint5", {
        get: function () { return Math.floor(Math.random() * 5); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint6", {
        get: function () { return Math.floor(Math.random() * 6); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint7", {
        get: function () { return Math.floor(Math.random() * 7); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint8", {
        get: function () { return Math.floor(Math.random() * 8); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint9", {
        get: function () { return Math.floor(Math.random() * 9); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro, "random_uint1", {
        get: function () { return Math.floor(Math.random() * 10); },
        enumerable: false,
        configurable: true
    });
    /**
     * 一维限制在范围中
     * @param {number} num 输入值
     * @param {number} size 范围
     * @param {number} align 对齐位置，默认0表示在范围的中间，-1表示与左对齐，最小为0，最大为size，1相反
     * @param {number} offset 范围偏移
     * @returns 返回限制后的值
     */
    mathMacro.clamp = function (num, size, align, offset) {
        var sature = ((align || 0) + 1) / 2;
        var min = 0 - (sature * size) + (offset || 0);
        var max = (1 - sature) * size + (offset || 0);
        return Math.max(Math.min(num, max), min);
    };
    Object.defineProperty(mathMacro.prototype, "isVec", {
        get: function () { return !this._IsMat; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "x", {
        get: function () { return this.mnum['x']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "y", {
        get: function () { return this.mnum['y']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "z", {
        get: function () { return this.mnum['z']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mathMacro.prototype, "w", {
        get: function () { return this.mnum['w']; },
        enumerable: false,
        configurable: true
    });
    /**
     * 判断是否在盒体范围内
     * @param {*} origin 盒体坐标原点
     * @param {*} extent 盒体范围，这是盒体的各轴半径
     * @return
     */
    mathMacro.prototype.isInBox2 = function (origin, extent) {
        if (this.isVec) {
            var vec = mathMacro.meanwhileAll(function (a) {
                var b = a[0] - a[1];
                return b >= -a[2] && b <= a[2];
            }, this.mnum, origin, extent);
            return vec['x'] && vec['y'];
        }
        return false;
    };
    /**
     * 模取正
     */
    mathMacro.PMod = function (a, b) {
        var bb = Math.abs(b);
        var aa = a % bb;
        var out = a < 0 ? (1 - Math.abs(aa) / bb) * bb % bb : aa;
        return isNaN(out) ? 0 : out;
    };
    /**
     * 快捷定义
     * 但是就不支持逐个定义了
     * @param num
     * @returns
     */
    mathMacro.v = function (num) {
        return new mathMacro(num);
    };
    mathMacro.meanwhileAll = function (func) {
        var obj = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            obj[_i - 1] = arguments[_i];
        }
        var out = {};
        Object.keys(obj[0]).forEach(function (element) {
            var array = [];
            for (var index = 0; index < obj.length; index++) {
                array.push(obj[index][element]);
            }
            ;
            out[element] = func(array, obj.length);
        });
        return out;
    };
    return mathMacro;
}());
exports.mathMacro = mathMacro;
/**
 * 全局枚举
 * 对象可移动性
 */
var panelType;
(function (panelType) {
    panelType[panelType["staitc"] = 0] = "staitc";
    panelType[panelType["stationary"] = 1] = "stationary";
    panelType[panelType["Moveable"] = 2] = "Moveable";
})(panelType = exports.panelType || (exports.panelType = {}));
/**
 * 全局枚举
 * 场景坐标空间枚举
 */
var ESceneCoordinateSpace;
(function (ESceneCoordinateSpace) {
    ESceneCoordinateSpace[ESceneCoordinateSpace["simulation"] = 0] = "simulation";
    ESceneCoordinateSpace[ESceneCoordinateSpace["world"] = 1] = "world";
    ESceneCoordinateSpace[ESceneCoordinateSpace["local"] = 2] = "local";
})(ESceneCoordinateSpace = exports.ESceneCoordinateSpace || (exports.ESceneCoordinateSpace = {}));
/**
 * 全局枚举
 * 控件坐标空间枚举
 */
var EWidgetCoordinateSpace;
(function (EWidgetCoordinateSpace) {
    EWidgetCoordinateSpace[EWidgetCoordinateSpace["screen"] = 0] = "screen";
    EWidgetCoordinateSpace[EWidgetCoordinateSpace["scene"] = 1] = "scene";
})(EWidgetCoordinateSpace = exports.EWidgetCoordinateSpace || (exports.EWidgetCoordinateSpace = {}));
/**
 * 全局枚举
 * 动画物理空间枚举
 */
var EAnimPhySimSpace;
(function (EAnimPhySimSpace) {
    EAnimPhySimSpace[EAnimPhySimSpace["component"] = 0] = "component";
    EAnimPhySimSpace[EAnimPhySimSpace["actor"] = 1] = "actor";
    EAnimPhySimSpace[EAnimPhySimSpace["scene"] = 2] = "scene";
    EAnimPhySimSpace[EAnimPhySimSpace["relativeRoot"] = 3] = "relativeRoot";
    EAnimPhySimSpace[EAnimPhySimSpace["relativeNode"] = 4] = "relativeNode";
})(EAnimPhySimSpace = exports.EAnimPhySimSpace || (exports.EAnimPhySimSpace = {}));
// 测试语句，可以在控制台中能够看到这里
cc["vv"] = cc["vv"] || DevelopersToolGlobal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSx5RUFBeUU7QUFDekU7SUFBQTtJQW1PQSxDQUFDO0lBM05HLHNCQUFrQixpQ0FBUzthQUEzQjtZQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUE0QixLQUFnQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBUUQsc0JBQWtCLDRDQUFvQjtRQUh0Qzs7V0FFRzthQUNIO1lBQ0ksT0FBTztnQkFDSCw4Q0FBOEM7Z0JBQzlDLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtnQkFDL0MsU0FBUztnQkFDVCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUM5QyxRQUFRO2dCQUNSLG1EQUFtRDtnQkFDbkQsVUFBVTtnQkFDVixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUNqRCxPQUFPO2dCQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7YUFDbEQsQ0FBQTtRQUNMLENBQUM7OztPQUFBO0lBVUQsc0JBQWtCLDRCQUFJO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FB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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RDthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFDSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQ0ksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzthQUNJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7YUFDSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO2FBQ0ksSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMz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QU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDLENBQUE7SUF1Q0wsZ0JBQUM7Q0F6UEQsQUF5UEMsSUFBQTtBQXpQWSw4QkFBUztBQTBQdEI7OztHQUdHO0FBQ0gsSUFBWSxTQUVYO0FBRkQsV0FBWSxTQUFTO0lBQ2pCLDZDQUFNLENBQUE7SUFBRSxxREFBVSxDQUFBO0lBQUUsaURBQVEsQ0FBQTtBQUNoQyxDQUFDLEVBRlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFFcEI7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLHFCQUVYO0FBRkQsV0FBWSxxQkFBcUI7SUFDN0IsNkVBQVUsQ0FBQTtJQUFFLG1FQUFLLENBQUE7SUFBRSxtRUFBSyxDQUFBO0FBQzVCLENBQUMsRUFGVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUVoQztBQUNEOzs7R0FHRztBQUNILElBQVksc0JBRVg7QUFGRCxXQUFZLHNCQUFzQjtJQUM5Qix1RUFBTSxDQUFBO0lBQUUscUVBQUssQ0FBQTtBQUNqQixDQUFDLEVBRlcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFFakM7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLGdCQUVYO0FBRkQsV0FBWSxnQkFBZ0I7SUFDeEIsaUVBQVMsQ0FBQTtJQUFFLHlEQUFLLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUsdUVBQVksQ0FBQTtJQUFFLHVFQUFZLENBQUE7QUFDdkQsQ0FBQyxFQUZXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRTNCO0FBSUQscUJBQXFCO0FBQ3JCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQW9CLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogY2MuTm9kZSB8XHJcbiAgICBjYy5UaWxlZE1hcCB8XHJcbiAgICBjYy5QYXJ0aWNsZVN5c3RlbSB8XHJcbiAgICBjYy5WaWRlb1BsYXllciB8XHJcbiAgICBjYy5XZWJWaWV3IHxcclxuICAgIGNjLlNwcml0ZSB8XHJcbiAgICBjYy5SZW5kZXJUZXh0dXJlIHxcclxuICAgIGNjLlRleHR1cmUyRCB8XHJcbiAgICBjYy5QcmVmYWIgfFxyXG4gICAgY2MuQXNzZXRNYW5hZ2VyIHwge307XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJVG9vbEdsb2JhbEludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJT3RoZXJHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSWdhbmVyYWxMYXllckludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBjYy5Ob2RlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW9wZW5TY3JpcHRJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSWluc3RhbmNlSW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IG51bWJlcl06IGNjLkNvbXBvbmVudCB8IGNjLk5vZGU7XHJcbn1cclxuLy8gaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5leHBvcnQgY2xhc3MgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuT5bqT5YWo5bGA5a6e5L6LXHJcbiAgICAgKiDlrZjmlL5sb2Fk5pe26L295YWl55qE5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9XYXJlaG91c2U6IElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHdhcmVob3VzZSgpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlID0gdGhpcy5fR2xvYmFsX1dhcmVob3VzZSB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1dhcmVob3VzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB3YXJlaG91c2UodmFsdWU6IElXYXJlaG91c2VHbG9iYWxJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfV2FyZWhvdXNlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kOebruW9lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsb2FkUmVzb3VyY2VzY2F0YWxvZygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBcInVybFwiOiB7IHR5cGU6IHJlcyB0eXBlLCB1cmw6IFwic2F2ZSB1cmxcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9vemfs+S5kOmfs+aViOi1hOa6kFxyXG4gICAgICAgICAgICBcInNvdW5kc1wiOiB7IHR5cGU6IGNjLkF1ZGlvQ2xpcCwgdXJsOiBcInNvdW5kc1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L296aKE5Yi25Lu26LWE5rqQXHJcbiAgICAgICAgICAgIFwicHJlZmFic1wiOiB7IHR5cGU6IGNjLlByZWZhYiwgdXJsOiBcInByZWZhYnNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9veWbvumbhui1hOa6kFxyXG4gICAgICAgICAgICAvLyBcImF0bGFzXCI6IHsgdHlwZTogY2MuU3ByaXRlQXRsYXMsIHVybDogXCJhdGxhc1wiIH0sXHJcbiAgICAgICAgICAgIC8v5Yqg6L295Y2V5Liq57K+54G16LWE5rqQXHJcbiAgICAgICAgICAgIFwiZnJhbWVzXCI6IHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHVybDogXCJmcmFtZXNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9veWIhuS6q+WbvlxyXG4gICAgICAgICAgICBcInNoYXJlXCI6IHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHVybDogXCJzaGFyZVwiIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6XlhbflhajlsYDlrp7kvotcclxuICAgICAqIOWPr+S7peazqOWFpeWFtuS7luW3peWFt+exu1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfVG9vbDogSVRvb2xHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHRvb2woKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1Rvb2wgPSB0aGlzLl9HbG9iYWxfVG9vbCB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1Rvb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB0b29sKHZhbHVlOiBJVG9vbEdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9Ub29sID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOadgumhueWFqOWxgOWunuS+i1xyXG4gICAgICog5Y+v5Lul5rOo5YWl5YW25LuW6aG555uuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9PdGhlcjogSU90aGVyR2xvYmFsSW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBvdGhlcigpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfT3RoZXIgPSB0aGlzLl9HbG9iYWxfT3RoZXIgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PdGhlcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IG90aGVyKHZhbHVlOiBJT3RoZXJHbG9iYWxJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfT3RoZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5Z+65pys5bGC5YWo5bGA5a6e5L6LXHJcbiAgICAgKiDlj6rog73ms6jlhaVjYy5Ob2RlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dsb2JhbF9HZW5yYWxMYXllcjogSWdhbmVyYWxMYXllckludGVyZmFjZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJgOacieWxglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBsYXllcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX0dlbnJhbExheWVyID0gdGhpcy5fR2xvYmFsX0dlbnJhbExheWVyIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaJgOacieWxglxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBsYXllcnModmFsdWU6IElnYW5lcmFsTGF5ZXJJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5bqV5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyc1swXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg55qE5paw6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxheWVyKHZhbHVlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllciB8fCB7fSkubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2tleS50b1N0cmluZygpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDohJrmnKxcclxuICAgICAqIOWPquiDveazqOWFpWNjLmNvbXBvbmVudO+8jOS4jei/h+WunumZheS4iuW5tuayoeaciei/m+ihjOmZkOWItlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfT3BlblNjcmlwdDogSW9wZW5TY3JpcHRJbnRlcmZhY2UgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfT3BlblNjcmlwdF9GcmlzdE5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JpcHRzKCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NyaXB0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBrZXkgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX09wZW5TY3JpcHRfRnJpc3ROYW1lKSB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGtleSA9IChPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCB8fCB7fSkubGVuZ3RoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcmlwdHNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrohJrmnKxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzY3JpcHRfQ2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+aJgOacieiEmuacrOWQjeensFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzY3JpcHROYW1lKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluesrOS4gOS4quWKoOWFpeeahOiEmuacrFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBmcmlzdFNjcmlwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHRbdGhpcy5fT3BlblNjcmlwdF9GcmlzdE5hbWVdO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX0luc3RhbmNlID0gPElpbnN0YW5jZUludGVyZmFjZT57fTtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgZ2V0TmFtZShpbnN0OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc3QubmFtZSArIGluc3RbJ19pZCddLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWo6YOo5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlcygpOiBJaW5zdGFuY2VJbnRlcmZhY2Uge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9JbnN0YW5jZSA9IHRoaXMuX0dsb2JhbF9JbnN0YW5jZSB8fCA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfSW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWunuS+i++8jOeUqOWunuS+i+eahOWQjeensOS4jklE5L2c6ZSu5ZCNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGluc3RhbmNlKHZhbHVlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZVt0aGlzLmdldE5hbWUodmFsdWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTlrp7kvotcclxuICAgICAqIOWmguaenOacquaMh+WumuacieaViOWAvOWImeS4uua4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBpbnN0YW5jZV9yZW1vdmUodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB0aGlzLl9HbG9iYWxfSW5zdGFuY2UgPSA8SWluc3RhbmNlSW50ZXJmYWNlPnt9O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZVt0aGlzLmdldE5hbWUodmFsdWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7lkI3np7Dojrflj5blrp7kvosgXHJcbiAgICAgKiDlpoLmnpzmsqHmnInkvb/nlKjoh6rlrprkuYnlkI3np7DvvIzliJnpu5jorqTnlKjlrp7kvotJROS9nOS4uuWQjeensO+8jOi/meWPr+iDveS4juS7u+S9leWQjeensOW4uOmHj+S4jeesplxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlQnlOYW1lKG5hbWU6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfSW5zdGFuY2VbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOagueaNruWQjeensOiuvue9ruWunuS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlQnlOYW1lKG5hbWU6IHN0cmluZyB8IG51bWJlciwgaW5zdDogY2MuQ29tcG9uZW50IHwgY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9JbnN0YW5jZVtuYW1lXSA9IGluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhajlsYDlhYPnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfR2xvYmFsX1R1cGxlID0gW107XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFg+e7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB0dXBsZSgpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9UdXBsZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YWD57uE5Yqg5YWl5LiA5Liq6aG555uuICBcclxuICAgICAqIOWmguaenOWKoOWFpeS4gOS4quaXoOaViOeahOWAvO+8jOavlOWmguW4g+WwlO+8jHVuZGVmaW5lZO+8jHVubGzvvIzlsIbmuIXnqbrov5nkuKrlhYPnu4QgIFxyXG4gICAgICog5Yqg5YWl5LiA5Liq56m65pWw57uE5oiW5piv56m65a+56LGh5piv5pyJ5pWI55qE77yM5omA5Lul5Lya5L2c5Li65YWD57uE55qE5LiA5Liq5YC85Yqg5YWlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHR1cGxlKHZhbHVlOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PSAnYm9vbGVhbicpIHRoaXMuX0dsb2JhbF9UdXBsZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9UdXBsZS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YWD57uE5Yqg5YWl54us5pyJ6aG555uuXHJcbiAgICAgKiDov5Tlm57ov5nkuKrpobnnm67mmK/lkKblrZjlnKhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0dXBsZU9ubHkodmFsdWU6IG9iamVjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9HbG9iYWxfVHVwbGUuaW5kZXhPZih2YWx1ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50dXBsZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5YWD57uE5LiA5Liq6aG555uuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHR1cGxlX3JlbW92ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9UdXBsZS5maWx0ZXIoKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4geyBlbGVtZW50ICE9IHZhbHVlIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIGltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5leHBvcnQgY2xhc3MgbWF0aE1hY3JvIHtcclxuICAgIC8vIOi/lOWbnumaj+acuueahOaVtOaVsO+8jOiMg+WbtOWcqFswLCB4KVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQyKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQzKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ0KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ1KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ2KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ3KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ4KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQ5KCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcmFuZG9tX3VpbnQxKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IH1cclxuICAgIC8qKlxyXG4gICAgICog5LiA57u06ZmQ5Yi25Zyo6IyD5Zu05LitXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtIOi+k+WFpeWAvFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUg6IyD5Zu0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYWxpZ24g5a+56b2Q5L2N572u77yM6buY6K6kMOihqOekuuWcqOiMg+WbtOeahOS4remXtO+8jC0x6KGo56S65LiO5bem5a+56b2Q77yM5pyA5bCP5Li6MO+8jOacgOWkp+S4unNpemXvvIwx55u45Y+NXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IOiMg+WbtOWBj+enu1xyXG4gICAgICogQHJldHVybnMg6L+U5Zue6ZmQ5Yi25ZCO55qE5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXAobnVtLCBzaXplLCBhbGlnbiwgb2Zmc2V0KSB7XHJcbiAgICAgICAgbGV0IHNhdHVyZSA9ICgoYWxpZ24gfHwgMCkgKyAxKSAvIDI7XHJcbiAgICAgICAgbGV0IG1pbiA9IDAgLSAoc2F0dXJlICogc2l6ZSkgKyAob2Zmc2V0IHx8IDApO1xyXG4gICAgICAgIGxldCBtYXggPSAoMSAtIHNhdHVyZSkgKiBzaXplICsgKG9mZnNldCB8fCAwKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obnVtLCBtYXgpLCBtaW4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAw55+i6YePXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIFJHQkEgY29sb3JzLjxici8+XHJcbiAgICAgKiBFYWNoIGNvbG9yIGNvbXBvbmVudCBpcyBhbiBpbnRlZ2VyIHZhbHVlIHdpdGggYSByYW5nZSBmcm9tIDAgdG8gMjU1Ljxici8+XHJcbiAgICAgKiBAemgg6YCa6L+HIFJlZOOAgUdyZWVu44CBQmx1ZSDpopzoibLpgJrpgZPooajnpLrpopzoibLvvIzlubbpgJrov4cgQWxwaGEg6YCa6YGT6KGo56S65LiN6YCP5piO5bqm44CCPGJyLz5cclxuICAgICAqIOavj+S4qumAmumBk+mDveS4uuWPluWAvOiMg+WbtCBbMCwgMjU1XSDnmoTmlbTmlbDjgII8YnIvPlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLkNvbG9yKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gTWF0aGVtYXRpY2FsIDN4MyBtYXRyaXguXHJcbiAgICAgKiBAemgg6KGo56S65LiJ57u077yIM3gz77yJ55+p6Zi144CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuTWF0MylcclxuICAgIC8qKlxyXG4gICAgICogQGVuIE1hdGhlbWF0aWNhbCA0eDQgbWF0cml4LlxyXG4gICAgICogQHpoIOihqOekuuWbm+e7tO+8iDR4NO+8ieefqemYteOAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLk1hdDQpXHJcbiAgICAvKipcclxuICAgICAqIEBlblxyXG4gICAgICogQSAyRCByZWN0YW5nbGUgZGVmaW5lZCBieSB4LCB5IHBvc2l0aW9uIGFuZCB3aWR0aCwgaGVpZ2h0LlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDovbTlr7npvZDnn6nlvaLjgIJcclxuICAgICAqIOefqeW9ouWGheeahOaJgOacieeCuemDveWkp+S6juetieS6juefqeW9oueahOacgOWwj+eCuSAoeE1pbiwgeU1pbikg5bm25LiU5bCP5LqO562J5LqO55+p5b2i55qE5pyA5aSn54K5ICh4TWF4LCB5TWF4KeOAglxyXG4gICAgICog55+p5b2i55qE5a695bqm5a6a5LmJ5Li6IHhNYXggLSB4TWlu77yb6auY5bqm5a6a5LmJ5Li6IHlNYXggLSB5TWlu44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuUmVjdClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIHF1YXRlcm5pb25cclxuICAgICAqIEB6aCDlm5vlhYPmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5RdWF0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gVHdvIGRpbWVuc2lvbmFsIHNpemUgdHlwZSByZXByZXNlbnRpbmcgdGhlIHdpZHRoIGFuZCBoZWlnaHQuXHJcbiAgICAgKiBAemgg5LqM57u05bC65a+444CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuU2l6ZSlcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIDJEIHZlY3RvcnMgYW5kIHBvaW50cy5cclxuICAgICAqIEB6aCDkuoznu7TlkJHph4/jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5WZWMyKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgM0QgdmVjdG9ycyBhbmQgcG9pbnRzLlxyXG4gICAgICogQHpoIOS4iee7tOWQkemHj+OAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlZlYzMpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBSZXByZXNlbnRhdGlvbiBvZiBmb3VyLWRpbWVuc2lvbmFsIHZlY3RvcnMuXHJcbiAgICAgKiBAemgg5Zub57u05ZCR6YeP44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuVmVjNClcclxuICAgIC8qKlxyXG4gICAgICogQGVuIG9iamVjdC5cclxuICAgICAqIEB6aCDljIXlkKt4LHkseix3562J5bGe5oCn5ZCN55qE5a+56LGh44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogb2JqZWN0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gYXJyYXkuXHJcbiAgICAgKiBAemgg5pWw57uE44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogbnVtYmVyW10pXHJcbiAgICAvKipcclxuICAgICAqIEBlbiA6KVxyXG4gICAgICogQHpoIOmAkOS4quWumuS5ieWTpu+8jOS6suOAglxyXG4gICAgICovXHJcbiAgICAvLyBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB6PzogbnVtYmVyLCB3PzogbnVtYmVyKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gdGhpcyBpcyBnb25uYS4uLiBJcyB0aGlzIHN1cHBvc2VkIHRvLi4uIERlZmluZSBvbmUgYnkgb25lISA/IC4gT2gsIGRvbid0IHdvcnJ5IGFib3V0IG1lLiBJIGNvcGllZCBpdCBmcm9tIGFuIG9mZmljaWFsIGRvY3VtZW50IDtQXHJcbiAgICAgKiBAemgg6YCQ5Liq5a6a5LmJ77yM5Y2D5LiH5LiN6KaB6L+Z5LmI5YGa77yM5L2G5aaC5p6c5L2g5YGa5LqG77yM6YKj5bCx5Lya5Y+R55Sf5b6I5Y+v5oCV55qE5LqL5oOF77yM5q+U5aaC6K+0Li4u5Y+Y5oiQ55+p6Zi1XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG0wMD86IG51bWJlciwgbTAxPzogbnVtYmVyLCBtMDI/OiBudW1iZXIsIG0wMz86IG51bWJlciwgbTEwPzogbnVtYmVyLCBtMTE/OiBudW1iZXIsIG0xMj86IG51bWJlciwgbTEzPzogbnVtYmVyLCBtMjA/OiBudW1iZXIsIG0yMT86IG51bWJlciwgbTIyPzogbnVtYmVyLCBtMjM/OiBudW1iZXIsIG0zMD86IG51bWJlciwgbTMxPzogbnVtYmVyLCBtMzI/OiBudW1iZXIsIG0zMz86IG51bWJlciwpXHJcbiAgICBjb25zdHJ1Y3RvciguLi5udW0pIHtcclxuICAgICAgICBsZXQgaXNOdW1iZXIgPSAodmFsdWUpID0+IHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKTsgfVxyXG4gICAgICAgIGlmICghbnVtWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsndyddID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdLngpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ueCkgPyBudW1bMF0ueCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLnkpID8gbnVtWzBdLnkgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSBpc051bWJlcihudW1bMF0udykgPyBudW1bMF0udyA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXVswXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3knXSA9IGlzTnVtYmVyKG51bVswXVsxXSkgPyBudW1bMF1bMV0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5TaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneCddID0gaXNOdW1iZXIobnVtWzBdLndpZHRoKSA/IG51bVswXS53aWR0aCA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLmhlaWdodCkgPyBudW1bMF0uaGVpZ2h0IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtWzBdIGluc3RhbmNlb2YgY2MuQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd4J10gPSBpc051bWJlcihudW1bMF0ucikgPyBudW1bMF0uciA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneSddID0gaXNOdW1iZXIobnVtWzBdLmcpID8gbnVtWzBdLmcgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3onXSA9IGlzTnVtYmVyKG51bVswXS5iKSA/IG51bVswXS5iIDogMDtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd3J10gPSBpc051bWJlcihudW1bMF0uYSkgPyBudW1bMF0uYSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bVswXSBpbnN0YW5jZW9mIGNjLk1hdDMpIHtcclxuICAgICAgICAgICAgdGhpcy5fSXNNYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMCddID0gbnVtWzBdWydtMDAnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVswXVsnbTAxJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAyJ10gPSBudW1bMF1bJ20wMiddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMyddID0gbnVtWzBdWydtMDMnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVswXVsnbTA0J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA1J10gPSBudW1bMF1bJ20wNSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNiddID0gbnVtWzBdWydtMDYnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVswXVsnbTA3J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA4J10gPSBudW1bMF1bJ20wOCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW1bMF0gaW5zdGFuY2VvZiBjYy5NYXQ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0lzTWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDAnXSA9IG51bVswXVsnbTAwJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTAxJ10gPSBudW1bMF1bJ20wMSddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wMiddID0gbnVtWzBdWydtMDInXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDMnXSA9IG51bVswXVsnbTAzJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA0J10gPSBudW1bMF1bJ20wNCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wNSddID0gbnVtWzBdWydtMDUnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDYnXSA9IG51bVswXVsnbTA2J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTA3J10gPSBudW1bMF1bJ20wNyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20wOCddID0gbnVtWzBdWydtMDgnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDknXSA9IG51bVswXVsnbTA5J107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEwJ10gPSBudW1bMF1bJ20xMCddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMSddID0gbnVtWzBdWydtMTEnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTInXSA9IG51bVswXVsnbTEyJ107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTEzJ10gPSBudW1bMF1bJ20xMyddO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNCddID0gbnVtWzBdWydtMTQnXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTUnXSA9IG51bVswXVsnbTE1J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bS5sZW5ndGggPD0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3gnXSA9IG51bVswXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWyd5J10gPSBudW1bMV07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsneiddID0gbnVtWzJdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ3cnXSA9IG51bVszXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtLmxlbmd0aCA+PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0lzTWF0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDAnXSA9IG51bVswXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDEnXSA9IG51bVsxXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDInXSA9IG51bVsyXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDMnXSA9IG51bVszXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDQnXSA9IG51bVs0XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDUnXSA9IG51bVs1XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDYnXSA9IG51bVs2XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDcnXSA9IG51bVs3XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDgnXSA9IG51bVs4XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMDknXSA9IG51bVs5XTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTAnXSA9IG51bVsxMF07XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTExJ10gPSBudW1bMTFdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xMiddID0gbnVtWzEyXTtcclxuICAgICAgICAgICAgdGhpcy5tbnVtWydtMTMnXSA9IG51bVsxM107XHJcbiAgICAgICAgICAgIHRoaXMubW51bVsnbTE0J10gPSBudW1bMTRdO1xyXG4gICAgICAgICAgICB0aGlzLm1udW1bJ20xNSddID0gbnVtWzE1XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IG91dCA9IHsgbHJjOiAnMjEyOGN6JyB9O1xyXG4gICAgICAgIC8vIGlmIChudW1bMF0gJiYgdHlwZW9mIG51bVswXSA9PT0gJ29iamVjdCcpIHsgb3V0WydtMDAnXSA9IGlzTnVtYmVyKG51bVswXS54KSA/IG51bVswXS54IDogbnVtWzBdLnggfHwgKGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiBudW1bMF0ud2lkdGggfHwgbnVtWzBdLnIgfHwgKGlzTnVtYmVyKG51bVswXSkgPyBudW1bMF0gOiAwKSk7IG91dFsnbTAxJ10gPSBpc051bWJlcihudW1bMF0ueSkgPyBudW1bMF0ueSA6IG51bVswXS55IHx8IChpc051bWJlcihudW1bMF1bMV0pID8gbnVtWzBdWzFdIDogbnVtWzBdLmhlaWdodCB8fCBudW1bMF0uZyB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDInXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogbnVtWzBdLnogfHwgKGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiBudW1bMF0uYiB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDMnXSA9IGlzTnVtYmVyKG51bVswXS53KSA/IG51bVswXS53IDogbnVtWzBdLncgfHwgKGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiBudW1bMF0uYSB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgfVxyXG4gICAgICAgIC8vIGVsc2UgeyBvdXRbJ20wMCddID0gbnVtWzBdOyBvdXRbJ20wMSddID0gbnVtWzFdOyBvdXRbJ20wMiddID0gbnVtWzJdOyBvdXRbJ20wMyddID0gbnVtWzNdOyBvdXRbJ20wNCddID0gbnVtWzRdOyBvdXRbJ20wNSddID0gbnVtWzVdOyBvdXRbJ20wNiddID0gbnVtWzZdOyBvdXRbJ20wNyddID0gbnVtWzddOyBvdXRbJ20wOCddID0gbnVtWzhdOyBvdXRbJ20wOSddID0gbnVtWzldOyBvdXRbJ20xMCddID0gbnVtWzEwXTsgb3V0WydtMTEnXSA9IG51bVsxMV07IG91dFsnbTEyJ10gPSBudW1bMTJdOyBvdXRbJ20xMyddID0gbnVtWzEzXTsgb3V0WydtMTQnXSA9IG51bVsxNF07IG91dFsnbTE1J10gPSBudW1bMTVdOyB9XHJcbiAgICAgICAgLy8gdGhpcy5tbnVtID0gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW51bTogb2JqZWN0ID0ge307XHJcbiAgICBwcml2YXRlIF9Jc01hdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdldCBpc1ZlYygpIHsgcmV0dXJuICF0aGlzLl9Jc01hdDsgfVxyXG4gICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3gnXSB9XHJcbiAgICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubW51bVsneSddIH1cclxuICAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tbnVtWyd6J10gfVxyXG4gICAgcHVibGljIGdldCB3KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1udW1bJ3cnXSB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbWVhbndoaWxlQWxsID0gZnVuY3Rpb24gPEZVTkMgZXh0ZW5kcyBGdW5jdGlvbiwgVCBleHRlbmRzIG9iamVjdD4oZnVuYzogRlVOQywgLi4ub2JqOiBUW10pIHtcclxuICAgICAgICBsZXQgb3V0ID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqWzBdKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gob2JqW2luZGV4XVtlbGVtZW50XSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG91dFtlbGVtZW50XSA9IGZ1bmMoYXJyYXksIG9iai5sZW5ndGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3mmK/lkKblnKjnm5LkvZPojIPlm7TlhoVcclxuICAgICAqIEBwYXJhbSB7Kn0gb3JpZ2luIOebkuS9k+WdkOagh+WOn+eCuVxyXG4gICAgICogQHBhcmFtIHsqfSBleHRlbnQg55uS5L2T6IyD5Zu077yM6L+Z5piv55uS5L2T55qE5ZCE6L205Y2K5b6EXHJcbiAgICAgKiBAcmV0dXJuIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNJbkJveDI8VCBleHRlbmRzIGNjLlZlYzI+KG9yaWdpbjogVCwgZXh0ZW50OiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWZWMpIHtcclxuICAgICAgICAgICAgbGV0IHZlYyA9IG1hdGhNYWNyby5tZWFud2hpbGVBbGwoKGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBiID0gYVswXSAtIGFbMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYiA+PSAtYVsyXSAmJiBiIDw9IGFbMl07XHJcbiAgICAgICAgICAgIH0sIHRoaXMubW51bSwgb3JpZ2luLCBleHRlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjWyd4J10gJiYgdmVjWyd5J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaooeWPluato1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBNb2QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBiYiA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgIGxldCBhYSA9IGEgJSBiYjtcclxuICAgICAgICBsZXQgb3V0ID0gYSA8IDAgPyAoMSAtIE1hdGguYWJzKGFhKSAvIGJiKSAqIGJiICUgYmIgOiBhYVxyXG4gICAgICAgIHJldHVybiBpc05hTihvdXQpID8gMCA6IG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW/q+aNt+WumuS5iSBcclxuICAgICAqIOS9huaYr+WwseS4jeaUr+aMgemAkOS4quWumuS5ieS6hlxyXG4gICAgICogQHBhcmFtIG51bSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHYobnVtOiBhbnkpOiBtYXRoTWFjcm8ge1xyXG4gICAgICAgIHJldHVybiBuZXcgbWF0aE1hY3JvKG51bSk7XHJcbiAgICB9XHJcblxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5a+56LGh5Y+v56e75Yqo5oCnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBwYW5lbFR5cGUge1xyXG4gICAgc3RhaXRjLCBzdGF0aW9uYXJ5LCBNb3ZlYWJsZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Zy65pmv5Z2Q5qCH56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFU2NlbmVDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2ltdWxhdGlvbiwgd29ybGQsIGxvY2FsXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDmjqfku7blnZDmoIfnqbrpl7TmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVXaWRnZXRDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2NyZWVuLCBzY2VuZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Yqo55S754mp55CG56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFQW5pbVBoeVNpbVNwYWNlIHtcclxuICAgIGNvbXBvbmVudCwgYWN0b3IsIHNjZW5lLCByZWxhdGl2ZVJvb3QsIHJlbGF0aXZlTm9kZVxyXG59XHJcblxyXG5cclxuXHJcbi8vIOa1i+ivleivreWPpe+8jOWPr+S7peWcqOaOp+WItuWPsOS4reiDveWkn+eci+WIsOi/memHjFxyXG5jY1tcInZ2XCJdID0gY2NbXCJ2dlwiXSB8fCBEZXZlbG9wZXJzVG9vbEdsb2JhbDtcclxuXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/effect/GetGameScroe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b0373v6qpDlLsI3tMgS2qB', 'GetGameScroe');
// scripts/game/effect/GetGameScroe.ts

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
var Setting_1 = require("../Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.animationTime = .6;
        _this.randomPositionRange = 50;
        // tag 用户参数 
        _this.score = Setting_1.default.score;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.node.opacity = 100;
        this.numberLabelUpdate();
    };
    NewClass.prototype.update = function (dt) {
        if (this.score != Setting_1.default.score) {
            this.score = Setting_1.default.score;
            this.numberUpdate();
            this.numberLabelUpdate();
        }
    };
    // tag 用户方法 
    /**
     * 更新一次数值上的动画
     */
    NewClass.prototype.numberUpdate = function () {
        cc.Tween.stopAll();
        cc.tween(this.node)
            .to(.06, { scale: 1.2, x: 0, y: 0, opacity: 255 }, { easing: 'cubicIn' })
            .to(this.animationTime, { scale: 1, x: Math.random() * this.randomPositionRange, y: Math.random() * this.randomPositionRange }, { easing: 'quintOut' })
            .to(1, { opacity: 100 }, { easing: 'quadIn' })
            .start();
    };
    NewClass.prototype.numberLabelUpdate = function () {
        this.scroeLabel.string = String(this.score);
    };
    Object.defineProperty(NewClass.prototype, "scroeLabel", {
        get: function () { return this.label.getComponent(cc.Label); },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.Float)
    ], NewClass.prototype, "animationTime", void 0);
    __decorate([
        property(cc.Float)
    ], NewClass.prototype, "randomPositionRange", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZWZmZWN0XFxHZXRHYW1lU2Nyb2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0RDO1FBakRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0IseUJBQW1CLEdBQVcsRUFBRSxDQUFDO1FBc0NqQyxZQUFZO1FBRUYsV0FBSyxHQUFHLGlCQUFFLENBQUMsS0FBSyxDQUFDOztJQUcvQixDQUFDO0lBeENHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksaUJBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBRSxDQUFDLEtBQUssQ0FBQTtZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsWUFBWTtJQUVaOztPQUVHO0lBQ0gsK0JBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUN4RSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUN0SixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzdDLEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFLRCxzQkFBYyxnQ0FBVTthQUF4QixjQUE2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBL0N2RTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDYztJQVRoQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0Q1QjtJQUFELGVBQUM7Q0FwREQsQUFvREMsQ0FwRHFDLEVBQUUsQ0FBQyxTQUFTLEdBb0RqRDtrQkFwRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3MgZnJvbSBcIi4uL1NldHRpbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBhbmltYXRpb25UaW1lOiBudW1iZXIgPSAuNjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICByYW5kb21Qb3NpdGlvblJhbmdlOiBudW1iZXIgPSA1MDtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5udW1iZXJMYWJlbFVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlICE9IHNzLnNjb3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSBzcy5zY29yZVxyXG4gICAgICAgICAgICB0aGlzLm51bWJlclVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm51bWJlckxhYmVsVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLfmlrnms5UgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDkuIDmrKHmlbDlgLzkuIrnmoTliqjnlLtcclxuICAgICAqL1xyXG4gICAgbnVtYmVyVXBkYXRlKCkge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGwoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byguMDYsIHsgc2NhbGU6IDEuMiwgeDogMCwgeTogMCwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiAnY3ViaWNJbicgfSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuYW5pbWF0aW9uVGltZSwgeyBzY2FsZTogMSwgeDogTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZG9tUG9zaXRpb25SYW5nZSwgeTogTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZG9tUG9zaXRpb25SYW5nZSB9LCB7IGVhc2luZzogJ3F1aW50T3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAxMDAgfSwgeyBlYXNpbmc6ICdxdWFkSW4nIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgbnVtYmVyTGFiZWxVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvZUxhYmVsLnN0cmluZyA9IFN0cmluZyh0aGlzLnNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35Y+C5pWwIFxyXG5cclxuICAgIHByb3RlY3RlZCBzY29yZSA9IHNzLnNjb3JlO1xyXG4gICAgcHJvdGVjdGVkIGdldCBzY3JvZUxhYmVsKCkgeyByZXR1cm4gdGhpcy5sYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/MenuLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1125avi8cJK9IZsYBVHeJiG', 'MenuLevel');
// scripts/game/MenuLevel.ts

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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var SoundPlayer_1 = require("../base/tool/SoundPlayer");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuLevel = /** @class */ (function (_super) {
    __extends(MenuLevel, _super);
    function MenuLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuLevel.prototype.onLoad = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = true;
        Setting_1.default.menu = this;
    };
    MenuLevel.prototype.start = function () {
        // todo 播放音乐
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_bgm, 1, .5);
    };
    // update (dt) {}
    // tag 用户逻辑
    /**
     * 游戏开始
     */
    MenuLevel.prototype.gameStart = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = false;
    };
    /**
     * 游戏结束
     */
    MenuLevel.prototype.gameOver = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_lose);
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = false;
    };
    /**
    * 打开菜单
    */
    MenuLevel.prototype.openMenu = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].active = true;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[2].active = false;
        DevelopersToolGlobal_1.DevelopersToolGlobal.layers[3].active = true;
    };
    // tag 按钮事件 
    MenuLevel.prototype.onButtonClick = function (event, cusData) {
        this[cusData]();
    };
    MenuLevel.prototype.onMusic = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_btnn);
    };
    MenuLevel.prototype.onShare = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_btnn);
    };
    MenuLevel.prototype.onStart = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_btny);
        this.gameStart();
    };
    MenuLevel = __decorate([
        ccclass
    ], MenuLevel);
    return MenuLevel;
}(cc.Component));
exports.default = MenuLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcTWVudUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRix3REFBdUQ7QUFDdkQscUNBQTJCO0FBRXJCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EOztJQTJFQSxDQUFDO0lBekVHLDBCQUFNLEdBQU47UUFDSSwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLGlCQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUduQixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLFlBQVk7UUFDWixJQUFJLHlCQUFXLENBQUMsaUJBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxpQkFBaUI7SUFFakIsV0FBVztJQUVYOztPQUVHO0lBQ0ksNkJBQVMsR0FBaEI7UUFDSSwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNJLDRCQUFRLEdBQWY7UUFDSSxZQUFZO1FBQ1osSUFBSSx5QkFBVyxDQUFDLGlCQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O01BRUU7SUFDSyw0QkFBUSxHQUFmO1FBQ0ksMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QiwyQ0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsMkNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsWUFBWTtJQUVMLGlDQUFhLEdBQXBCLFVBQXFCLEtBQUssRUFBRSxPQUFPO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksWUFBWTtRQUNaLElBQUkseUJBQVcsQ0FBQyxpQkFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksWUFBWTtRQUNaLElBQUkseUJBQVcsQ0FBQyxpQkFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksWUFBWTtRQUNaLElBQUkseUJBQVcsQ0FBQyxpQkFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBMUVnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMkU3QjtJQUFELGdCQUFDO0NBM0VELEFBMkVDLENBM0VzQyxFQUFFLENBQUMsU0FBUyxHQTJFbEQ7a0JBM0VvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gXCIuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsXCI7XHJcbmltcG9ydCB7IFNvdW5kUGxheWVyIH0gZnJvbSBcIi4uL2Jhc2UvdG9vbC9Tb3VuZFBsYXllclwiO1xyXG5pbXBvcnQgc3MgZnJvbSBcIi4vU2V0dGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVMZXZlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2N2di5sYXllcnNbM10uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgc3MubWVudSA9IHRoaXM7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+S5kFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9iZ20sIDEsIC41KTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+mAu+i+kVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnYW1lU3RhcnQoKSB7XHJcbiAgICAgICAgY2N2di5sYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzNdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP57uT5p2fXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnYW1lT3ZlcigpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9sb3NlKTtcclxuXHJcbiAgICAgICAgY2N2di5sYXllcnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjY3Z2LmxheWVyc1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2N2di5sYXllcnNbM10uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOaJk+W8gOiPnOWNlVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBvcGVuTWVudSgpIHtcclxuICAgICAgICBjY3Z2LmxheWVyc1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjdnYubGF5ZXJzWzNdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOaMiemSruS6i+S7tiBcclxuXHJcbiAgICBwdWJsaWMgb25CdXR0b25DbGljayhldmVudCwgY3VzRGF0YSkge1xyXG4gICAgICAgIHRoaXNbY3VzRGF0YV0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25NdXNpYygpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9idG5uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TaGFyZSgpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9idG5uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdGFydCgpIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9idG55KTtcclxuICAgICAgICB0aGlzLmdhbWVTdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DynamicPanelClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f421fvcjy9HCrRL+vgHKjyG', 'DynamicPanelClass');
// scripts/base/class/DynamicPanelClass.ts

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
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DynamicPanelClass = /** @class */ (function (_super) {
    __extends(DynamicPanelClass, _super);
    function DynamicPanelClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DynamicPanelClass.prototype.start = function () {
    };
    DynamicPanelClass = __decorate([
        ccclass
    ], DynamicPanelClass);
    return DynamicPanelClass;
}(DevelopersToolClass_1.default));
exports.default = DynamicPanelClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXER5bmFtaWNQYW5lbENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUErQyxxQ0FBbUI7SUFBbEU7O0lBWUEsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsaUNBQUssR0FBTDtJQUVBLENBQUM7SUFUZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FZckM7SUFBRCx3QkFBQztDQVpELEFBWUMsQ0FaOEMsNkJBQW1CLEdBWWpFO2tCQVpvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqjmgIHnqpflj6PnsbsgXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IERldmVsb3BlcnNUb29sQ2xhc3MgZnJvbSAnLi9EZXZlbG9wZXJzVG9vbENsYXNzJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNQYW5lbENsYXNzIGV4dGVuZHMgRGV2ZWxvcGVyc1Rvb2xDbGFzcyB7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/PawnMovement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32087ASkt9CBbFwJno3IBwU', 'PawnMovement');
// scripts/base/tool/PawnMovement.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var PawnMovement = /** @class */ (function () {
    function PawnMovement(context) {
        this.context = null;
        // TAG move range setting                                                                                       
        /**
         * 边界定义内容
         */
        this.fixedBound = {
            // 边界有效性
            valid: false,
            // 边界原点
            origin: new cc.Vec3(0),
            // 边界范围
            extent: new cc.Vec3(0),
            // 边界对齐
            align: new cc.Vec3(0),
            // 圆心边界半径
            radius: 0,
        };
        /**
         * 设置边界
         * @param {*} extent
         * @param {*} origin
         * @param {*} align
         * @param {*} valid
         * @returns
         */
        this.setFixedBound = function (extent, origin, align, valid) {
            this.fixedBound.extent = extent instanceof cc.Vec2 ? new cc.Vec3(extent.x, extent.y, 0) : extent;
            this.fixedBound.origin = origin instanceof cc.Vec2 ? new cc.Vec3(origin.x, origin.y, 0) : origin;
            this.fixedBound.align = align instanceof cc.Vec2 ? new cc.Vec3(align.x, align.y, 0) : align;
            this.fixedBound.valid = valid ? valid : this.fixedBound.valid;
            return this;
        };
        /**
         * 限制输入矢量在方形边界内
         * @param {*} vector
         * @returns
         */
        this.inBoxBound = function (vector) {
            var out = vector;
            if (this.fixedBound.valid) {
                out.x = DevelopersToolGlobal_1.mathMacro.clamp(out.x, this.fixedBound.extent.x, this.fixedBound.align.x, this.fixedBound.origin.x);
                out.y = DevelopersToolGlobal_1.mathMacro.clamp(out.y, this.fixedBound.extent.y, this.fixedBound.align.y, this.fixedBound.origin.y);
                out.z = DevelopersToolGlobal_1.mathMacro.clamp(out.z, this.fixedBound.extent.z, this.fixedBound.align.z, this.fixedBound.origin.z);
            }
            return out;
        };
        // TAG velocity & movement base                                                                                 
        // SIGNPOST 通用移动属性                                                                                         
        this._LastVelocity = new cc.Vec3(0);
        /**
         * 当前速度
         * 不建议直接调用，而是使用它的方法:
         * velocity 直接设置速度
         * addVelocity 直接添加速度
         * 直接添加速度并不利于物体运动模拟，应当先进行力的添加:
         * input 添加移动输入
         * force 添加力
         * 计算时需要注意，除非需要将计算值保存在此，否则不可以使用链式运算。
         */
        this._Velocity = new cc.Vec3(0);
        /**
         * 加速度限制
         */
        this._AccelerationLimit = 9999;
        /**
         * 当前模式下最大移动速度
         */
        this._MaxSpeed = 1000;
        /**
         * 当前物理力
         */
        this._Physicforce = new cc.Vec3(0);
        /**
         * 当前物理阻力
         */
        this._PhysicDrag = 1;
        /**
         * 持久力/阻力
         * 该属性会在每次更新时自动加入到物理力中
         * 不论当前是否已经加入物理力
         * 这可以用于 风，引力等属性
         *
         * 当不需要持久力时需要设置为 undefined
         * 这可以通过其设置方法来完成，不需要手动赋值
         */
        /**
         * 持久力
         * 请不要直接设置持久力，而是使用它的方法：
         * setPermForce() 设置持久力
         * getPermForce() 获取持久力
         * @param {Vec3} permanentForce
         */
        this._PermanentForce = undefined;
        /**
         * 持久阻力
         * 如果不需要使用持久阻力，请设置为undefined
         */
        this._PermanentDrag = undefined;
        /**
         * 质量
         */
        this._Mass = 1;
        /**
         * 重力方向
         */
        this._Gravity = new cc.Vec3(0, 0, -980);
        /**
         * 重力标度
         */
        this._GravityScale = 1;
        /**
         * 制动摩擦力因子
         */
        this._BrakingFrictionFactor = 2;
        /**
         * 制动摩擦力
         */
        this._BrakingFriction = 0;
        /**
         * 制动降速
         */
        this._BrakingDeceleration = 2048;
        // SIGNPOST 更新获取                                                                                             
        /**
         * 重力加速度
         */
        this.accelerationDue = new cc.Vec3(0);
        // SIGNPOST 移动更新函数 - 简易力驱动                                                                             
        /**
         * 由力驱动更新（冲量更新）
         *
         * 一般情况下并不推荐使用
         * 如果需要实现PBD，光滑核等效果，请使用updateByVelocity()
         *
         * 可以响应瞬时力： addForce(), addInput()
         * 可以响应持久力： permanentForce
         *
         * 如函数名字所示，不会产生速度，只要没有力就会停下
         * 且计算方式稍有不同，仅将力与时间相乘，称为冲量
         *
         * @param {*} dt deltatime 与当前帧率绑定，必要项目
         */
        this.updateByforce = function (dt) {
            this.addPermanentForceToPhysic();
            if (this.canMove) {
                var newPostion = this.context.getPosition();
                var updateForce = this.force.mul(dt);
                this.context.setPosition(newPostion.add(updateForce));
            }
            this.force.set(cc.Vec3.ZERO);
            this.drag = 0;
            return this;
        };
        this.context = context;
        this.arrivePosition = context.getPosition();
    }
    Object.defineProperty(PawnMovement.prototype, "arrivePosition", {
        /**
         * 获取到达目标
         */
        get: function () {
            return this._arrivePosition;
        },
        /**
         * 设置到达目标
         */
        set: function (value) {
            if (value instanceof cc.Vec2)
                this._arrivePosition = new cc.Vec3(value.x, value.y, 0);
            else
                this._arrivePosition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PawnMovement.prototype, "addArrivePosition", {
        /**
         * 添加到达目标偏移量
         */
        set: function (offset) {
            if (offset instanceof cc.Vec2)
                this._arrivePosition = this._arrivePosition.add(new cc.Vec3(offset.x, offset.y, 0));
            else
                this._arrivePosition = this._arrivePosition.add(offset);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PawnMovement.prototype, "lastVelocity", {
        get: function () { return this._LastVelocity; },
        set: function (velocity) { this._LastVelocity = velocity; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "velocity", {
        get: function () { return this._Velocity; },
        /**
         * 设置速度
         * @param {vec} velocity
         */
        set: function (velocity) {
            if (velocity instanceof cc.Vec2)
                this._Velocity = new cc.Vec3(velocity.x, velocity.y, 0);
            else
                this._Velocity = velocity;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "addVelocity", {
        /**
         * 添加速度
         * @param {vec} velocity
         */
        set: function (velocity) {
            if (velocity instanceof cc.Vec2)
                this._Velocity = this._Velocity.add(new cc.Vec3(velocity.x, velocity.y, 0));
            else
                this._Velocity = this._Velocity.add(velocity);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "accelerationLimit", {
        /**
         * 获取最大速度
         */
        get: function () { return this._AccelerationLimit; },
        /**
         * 设置最大速度
         * @param {*} speed
         */
        set: function (limit) { this._AccelerationLimit = limit; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "maxSpeed", {
        /**
         * 获取最大速度
         */
        get: function () { return this._MaxSpeed; },
        /**
         * 设置最大速度
         * @param {*} speed
         */
        set: function (speed) { this._MaxSpeed = speed || this._MaxSpeed; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "force", {
        /**
         * 获取物理力
         * @returns
         */
        get: function () { return this._Physicforce; },
        /**
         * 设置物理力
         */
        set: function (force) {
            if (force instanceof cc.Vec2)
                this._Physicforce = new cc.Vec3(force.x, force.y, 0);
            else
                this._Physicforce = force;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "addforce", {
        /**
         * 添加物理力
         */
        set: function (force) {
            if (force instanceof cc.Vec2)
                this._Physicforce = new cc.Vec3(force.x, force.y, 0).add(this._Physicforce);
            else
                this._Physicforce = force.add(this._Physicforce);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "drag", {
        /**
         * 获取物理阻力
         * @returns
         */
        get: function () { return Math.max(this._PhysicDrag, 0); },
        /**
         * 设置物理阻力
         */
        set: function (drag) { this._PhysicDrag = Math.max(drag, 0); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "permForce", {
        /**
         * 获取持久力
         * @returns
         */
        get: function () { return this._PermanentForce; },
        /**
         * 设置持久力
         * @param {Vec3} vec 当不需要持久力时设置为undefined可以直接关闭
         */
        set: function (force) {
            if (force) {
                if (force instanceof cc.Vec2)
                    this._PermanentForce = new cc.Vec3(force.x, force.y, 0);
                else
                    this._PermanentForce = force;
            }
            else
                this._PermanentForce = undefined;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "validpermForce", {
        get: function () { return this._PermanentForce ? true : false; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "permDrag", {
        /**
         * 获取持久阻力
         */
        get: function () { return Math.max(this._PermanentDrag || 0, 0); },
        /**
         * 设置持久阻力
         * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
         * @returns
         */
        set: function (drag) {
            if (drag <= 0)
                this._PermanentDrag = undefined;
            else
                this._PermanentDrag = Math.max(drag, 0);
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "validPermDrag", {
        get: function () { return typeof this._PermanentDrag == 'number'; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "mass", {
        /**
         * 获取质量
         * @returns
         */
        get: function () { return Math.max(this._Mass, .001); },
        /**
         * 设置质量
         * @returns
         */
        set: function (value) { this._Mass = Math.max(value, .001); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "gravity", {
        /**
         * 获取重力方向
         */
        get: function () { return this._Gravity; },
        /**
         * 设置重力方向
         * @param {Number} drag 当不需要持久阻力时设置为undefined可以直接关闭
         * @returns
         */
        set: function (gravity) {
            if (gravity instanceof cc.Vec2)
                this._Gravity = new cc.Vec3(gravity.x, gravity.y, 0);
            else
                this._Gravity = gravity;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "gravityScale", {
        /**
         * 获取重力标度
         * @returns
         */
        get: function () { return this._GravityScale; },
        /**
         * 设置重力标度
         */
        set: function (value) { this._GravityScale = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingFrictionFactor", {
        /**
         * 获取制动摩擦力因子
         * @returns
         */
        get: function () { return this._BrakingFrictionFactor; },
        /**
         * 设置制动摩擦力因子
         */
        set: function (value) { this._BrakingFrictionFactor = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingFriction", {
        /**
         * 获取制动摩擦力
         * @returns
         */
        get: function () { return this._BrakingFriction; },
        /**
         * 设置制动摩擦力
         */
        set: function (value) { this._BrakingFrictionFactor = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(PawnMovement.prototype, "brakingDeceleration", {
        /**
         * 获取制动降速
         * @returns
         */
        get: function () { return this._BrakingDeceleration; },
        /**
         * 设置制动降速
         */
        set: function (value) { this._BrakingDeceleration = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    // SIGNPOST 用户力输入                                                                                           
    /**
     * 添加移动输入
     * @param {Vec3} direction 方向，默认认为是为单位向量，
     * @param {Number} scale
     */
    PawnMovement.prototype.addInput = function (direction, scale) {
        this.force = direction instanceof cc.Vec2 ? new cc.Vec3(direction.x, direction.y, 0) : direction;
        this.force = this.force.mul(this.maxSpeed * (scale || 1));
        return this;
    };
    ;
    Object.defineProperty(PawnMovement.prototype, "addGravity", {
        /**
         * 添加重力
         */
        set: function (scale) {
            this.force = this.force.add(this.gravity.mul(this.mass));
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PawnMovement.prototype, "addDrag", {
        /**
         * 添加阻力
         * @param {*} drag
         * @returns
         */
        set: function (drag) {
            this.drag = drag + this.drag;
        },
        enumerable: false,
        configurable: true
    });
    ;
    // SIGNPOST 函数宏库                                                                                           
    // SIGNPOST 解算阶段                                                                                           
    /**
     * 这是一个内部方法
     * 将持久力加入到物理力中
     */
    PawnMovement.prototype.addPermanentForceToPhysic = function () {
        // 添加持久力
        if (this.validpermForce) {
            this.force = this.force.add(this.permForce);
        }
        // 添加持久阻力 
        this.drag = !this.validPermDrag ? this.drag : (this.permDrag + this.drag);
    };
    ;
    Object.defineProperty(PawnMovement.prototype, "canMove", {
        /**
         * 这是一个内部方法
         * 判断当前移动组件是否完全静止
         * @returns
         */
        get: function () {
            return !(cc.Vec3.equals(this.force, cc.Vec3.ZERO) && cc.Vec3.equals(this.velocity, cc.Vec3.ZERO));
        },
        enumerable: false,
        configurable: true
    });
    ;
    // SIGNPOST 双流传动式移动载具 - 解算阶段                                                                        
    /**
     * 速度向前
     * 要使用此方法进行移动，需要在其他任意阶段内向此移动组件添加力
     *
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    // public velocityForward(dt, rotateRate) {
    //     let slip = kismit.vec2Dot(kismit.rotationToVec2(this.context.rotation), kismit.normaliz2(this.velocity));
    //     slip = (slip - 1) / 2; // 面向时为0，背向时为-2
    // };
    // TAG 移动更新函数                                                                                             
    // SIGNPOST 移动更新函数 - 径直-到达点                                                                           
    /**
    * 更新到计算位置
    * 这个方法会自行移动到 this.arrivePosition
    * 使用此方法将无视阻力与重力，径直按照指定速度平移过去
    *
    * @param {Number} dt deltatime 与当前帧率绑定，必要项目
    * @param {Number} speed 执行速度，缺省maxSpeed
    * @param {Number} th 距离过零阈值，缺省1
    */
    PawnMovement.prototype.updateToPosition = function (dt, th, speed) {
        var conPos = this.context.getPosition();
        var pos = conPos instanceof cc.Vec2 ? new cc.Vec3(conPos.x, conPos.y, 0) : conPos;
        var moveVector = this.arrivePosition.sub(pos);
        var movelength = cc.Vec3.len(moveVector);
        if (movelength > (th || 1)) {
            var unit = moveVector.div(movelength);
            var move = unit.mul(Math.min((speed || this.maxSpeed) * dt, movelength));
            this.context.setPosition(this.inBoxBound(move.add(pos)));
        }
        return this;
    };
    ;
    // SIGNPOST 移动更新函数 - 双流传动式移动载具-到达点                                                               
    // fix                
    /**
     * 将向前轴面向位置移动
     * 这个方法会自行移动到 this.arrivePosition
     * 使用此方法将无视阻力与重力移动
     * 移动的同时会将自身角度朝向移动方向
     * 可以通过指定
     */
    PawnMovement.prototype.updateToWardPostion = function () {
    };
    ;
    // SIGNPOST 移动更新函数 - 基本速度驱动                                                                           
    /**
     * 由速度驱动更新
     * 要使用此方法进行移动，需要在其他任意阶段内向此移动组件添加力
     *
     * 可以响应瞬时力： addForce(), addDrag(), addInput()
     * 可以响应持久力： permanentForce, permanentDrag
     *
     * 比如在默认情况下，不会实现阻力，你的移动就像是在无重力环境下一样，
     * 而想要模仿走路或是其他移动模式，需要在此更新事件之前或是之后添加一份力/阻力。
     * 在通常情况下，你不需要担心添加 力/阻力 执行顺序会造成计算失误
     * 因为这是由单一环路构成的移动模式
     *
     * 关于模拟阶段更新：
     * 你可以在同一帧或是生命周期的不同阶段内多次进行更新，
     * 但使用更新函数进行迭代会造成速度流逝，
     * 所以建议自行对节点坐标进行迭代，而后统一进行驱动更新
     *
     * 如果迭代会造成速度错位，可以获取重力加速度，将速度转为动能
     * 减淡原始速度，而后在更新前将动能返回给力即可
     *
     * 例如铁链仿真，就可以对每节铁链先进行一次运动更新，
     * 而后进行动能转换，将每节铁链的坐标向前一个进行约束仿真，比如进行迭代仿真30次
     * 仿真完毕后重新赋能，或是将动能计算为其他效果。
     * 其余情况下，计算动能并没有什么用处，你可以将其注释。
     *
     * 当然，最好不要用上述方法进行堆栈模拟；
     * CPU拥有更多复杂的指令代为处理这些方法。
     *
     * 推荐在cocos中将同屏运算数量控制在200以内
     * 这个数值是用c++实现后推算的，c++可以达到2000+
     * （CPU时间变动不超过±0.01ms的情况下，当然跟平台性能也有关系，所以js的实际表现会更差，
     * 还有这里的测试并非只使用这个移动组件，同时每个项目还有一个20个骨骼的1000面网格体在运动）
     * 超过这个数值后会出现一定程度的掉帧
     *
     * @param {*} dt deltatime 与当前帧率绑定，必要项目
     */
    PawnMovement.prototype.updateByVelocity = function (dt) {
        this.addPermanentForceToPhysic();
        if (this.canMove) {
            this.lastVelocity = this.velocity.clone();
            // 应用质量
            this.force = this.force.div(this.mass);
            // 计算阻力
            var incomingDrag = this.drag * dt + 1;
            // 重力加速度
            this.accelerationDue = this.velocity.div(incomingDrag);
            // 应用力到速度
            var outVelocity = this.force.mul(dt);
            outVelocity = outVelocity.add(this.velocity).div(incomingDrag);
            // 限制
            var outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.maxSpeed ? outVelocity : outVelocity.mul(this.maxSpeed).div(outVelocityLength);
            outVelocity = outVelocity.sub(this.lastVelocity);
            outVelocityLength = outVelocity.len();
            outVelocity = outVelocityLength <= this.accelerationLimit ? outVelocity : outVelocity.mul(this.accelerationLimit).div(outVelocityLength);
            outVelocity = outVelocity.add(this.lastVelocity);
            // 新速度
            this.velocity = new cc.Vec3(outVelocity);
            var newPostion = this.context.getPosition();
            // 设置坐标
            this.context.setPosition(this.velocity.mul(dt).add(newPostion instanceof cc.Vec2 ? new cc.Vec3(newPostion.x, newPostion.y, 0) : newPostion));
        }
        this.force.set(cc.Vec3.ZERO);
        this.drag = 0;
        return this;
    };
    ;
    return PawnMovement;
}());
exports.default = PawnMovement;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcUGF3bk1vdmVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQW9FO0FBT3BFO0lBQ0ksc0JBQVksT0FBeUM7UUFLM0MsWUFBTyxHQUFxQyxJQUFJLENBQUM7UUFrQzNELGdIQUFnSDtRQUVoSDs7V0FFRztRQUNPLGVBQVUsR0FBRztZQUNuQixRQUFRO1lBQ1IsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPO1lBQ1AsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTztZQUNQLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87WUFDUCxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixTQUFTO1lBQ1QsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUY7Ozs7Ozs7V0FPRztRQUNJLGtCQUFhLEdBQUcsVUFBVSxNQUF5QixFQUFFLE1BQXlCLEVBQUUsS0FBd0IsRUFBRSxLQUFjO1lBQzNILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNq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TUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUMsT0FBTztZQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUNoSjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQUEsQ0FBQztJQThCTixtQkFBQztBQUFELENBbmpCQSxBQW1qQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGhNYWNybyBhcyBraXNtaXQgfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcblxyXG5pbnRlcmZhY2UgSVBhd25Nb3ZlbWVudEludGVyZmFjZSB7XHJcbiAgICBnZXRQb3NpdGlvbigpOiBjYy5WZWMzO1xyXG4gICAgc2V0UG9zaXRpb24oeDogY2MuVmVjMyB8IGNjLlZlYzIgfCBudW1iZXIsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXduTW92ZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogY2MuTm9kZSB8IElQYXduTW92ZW1lbnRJbnRlcmZhY2UpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuYXJyaXZlUG9zaXRpb24gPSBjb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnRleHQ6IGNjLk5vZGUgfCBJUGF3bk1vdmVtZW50SW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbiAgICAvLyBUQUcgcG9zaXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLDovr7nm67moIdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9hcnJpdmVQb3NpdGlvbjogY2MuVmVjMztcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yiw6L6+55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYXJyaXZlUG9zaXRpb24oKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fycml2ZVBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLDovr7nm67moIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhcnJpdmVQb3NpdGlvbih2YWx1ZTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IG5ldyBjYy5WZWMzKHZhbHVlLngsIHZhbHVlLnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fYXJyaXZlUG9zaXRpb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5Yiw6L6+55uu5qCH5YGP56e76YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkQXJyaXZlUG9zaXRpb24ob2Zmc2V0OiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChvZmZzZXQgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9hcnJpdmVQb3NpdGlvbiA9IHRoaXMuX2Fycml2ZVBvc2l0aW9uLmFkZChuZXcgY2MuVmVjMyhvZmZzZXQueCwgb2Zmc2V0LnksIDApKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycml2ZVBvc2l0aW9uID0gdGhpcy5fYXJyaXZlUG9zaXRpb24uYWRkKG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFRBRyBtb3ZlIHJhbmdlIHNldHRpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi+ueeVjOWumuS5ieWGheWuuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZml4ZWRCb3VuZCA9IHtcclxuICAgICAgICAvLyDovrnnlYzmnInmlYjmgKdcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgLy8g6L6555WM5Y6f54K5XHJcbiAgICAgICAgb3JpZ2luOiBuZXcgY2MuVmVjMygwKSxcclxuICAgICAgICAvLyDovrnnlYzojIPlm7RcclxuICAgICAgICBleHRlbnQ6IG5ldyBjYy5WZWMzKDApLFxyXG4gICAgICAgIC8vIOi+ueeVjOWvuem9kFxyXG4gICAgICAgIGFsaWduOiBuZXcgY2MuVmVjMygwKSxcclxuICAgICAgICAvLyDlnIblv4PovrnnlYzljYrlvoRcclxuICAgICAgICByYWRpdXM6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6L6555WMXHJcbiAgICAgKiBAcGFyYW0geyp9IGV4dGVudCBcclxuICAgICAqIEBwYXJhbSB7Kn0gb3JpZ2luIFxyXG4gICAgICogQHBhcmFtIHsqfSBhbGlnblxyXG4gICAgICogQHBhcmFtIHsqfSB2YWxpZCBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Rml4ZWRCb3VuZCA9IGZ1bmN0aW9uIChleHRlbnQ6IGNjLlZlYzMgfCBjYy5WZWMyLCBvcmlnaW46IGNjLlZlYzMgfCBjYy5WZWMyLCBhbGlnbjogY2MuVmVjMyB8IGNjLlZlYzIsIHZhbGlkOiBCb29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5maXhlZEJvdW5kLmV4dGVudCA9IGV4dGVudCBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhleHRlbnQueCwgZXh0ZW50LnksIDApIDogZXh0ZW50O1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4gPSBvcmlnaW4gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMob3JpZ2luLngsIG9yaWdpbi55LCAwKSA6IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmZpeGVkQm91bmQuYWxpZ24gPSBhbGlnbiBpbnN0YW5jZW9mIGNjLlZlYzIgPyBuZXcgY2MuVmVjMyhhbGlnbi54LCBhbGlnbi55LCAwKSA6IGFsaWduO1xyXG4gICAgICAgIHRoaXMuZml4ZWRCb3VuZC52YWxpZCA9IHZhbGlkID8gdmFsaWQgOiB0aGlzLmZpeGVkQm91bmQudmFsaWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZmQ5Yi26L6T5YWl55+i6YeP5Zyo5pa55b2i6L6555WM5YaFXHJcbiAgICAgKiBAcGFyYW0geyp9IHZlY3RvciBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaW5Cb3hCb3VuZCA9IGZ1bmN0aW9uICh2ZWN0b3I6IGNjLlZlYzMpIHtcclxuICAgICAgICBsZXQgb3V0ID0gdmVjdG9yO1xyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkQm91bmQudmFsaWQpIHtcclxuICAgICAgICAgICAgb3V0LnggPSBraXNtaXQuY2xhbXAob3V0LngsIHRoaXMuZml4ZWRCb3VuZC5leHRlbnQueCwgdGhpcy5maXhlZEJvdW5kLmFsaWduLngsIHRoaXMuZml4ZWRCb3VuZC5vcmlnaW4ueCk7XHJcbiAgICAgICAgICAgIG91dC55ID0ga2lzbWl0LmNsYW1wKG91dC55LCB0aGlzLmZpeGVkQm91bmQuZXh0ZW50LnksIHRoaXMuZml4ZWRCb3VuZC5hbGlnbi55LCB0aGlzLmZpeGVkQm91bmQub3JpZ2luLnkpO1xyXG4gICAgICAgICAgICBvdXQueiA9IGtpc21pdC5jbGFtcChvdXQueiwgdGhpcy5maXhlZEJvdW5kLmV4dGVudC56LCB0aGlzLmZpeGVkQm91bmQuYWxpZ24ueiwgdGhpcy5maXhlZEJvdW5kLm9yaWdpbi56KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgdmVsb2NpdHkgJiBtb3ZlbWVudCBiYXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6YCa55So56e75Yqo5bGe5oCnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgX0xhc3RWZWxvY2l0eSA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgcHVibGljIGdldCBsYXN0VmVsb2NpdHkoKTogY2MuVmVjMyB7IHJldHVybiB0aGlzLl9MYXN0VmVsb2NpdHk7IH07XHJcbiAgICBwdWJsaWMgc2V0IGxhc3RWZWxvY2l0eSh2ZWxvY2l0eTogY2MuVmVjMykgeyB0aGlzLl9MYXN0VmVsb2NpdHkgPSB2ZWxvY2l0eTsgfTtcclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN6YCf5bqmXHJcbiAgICAgKiDkuI3lu7rorq7nm7TmjqXosIPnlKjvvIzogIzmmK/kvb/nlKjlroPnmoTmlrnms5U6XHJcbiAgICAgKiB2ZWxvY2l0eSDnm7TmjqXorr7nva7pgJ/luqZcclxuICAgICAqIGFkZFZlbG9jaXR5IOebtOaOpea3u+WKoOmAn+W6plxyXG4gICAgICog55u05o6l5re75Yqg6YCf5bqm5bm25LiN5Yip5LqO54mp5L2T6L+Q5Yqo5qih5ouf77yM5bqU5b2T5YWI6L+b6KGM5Yqb55qE5re75YqgOlxyXG4gICAgICogaW5wdXQg5re75Yqg56e75Yqo6L6T5YWlXHJcbiAgICAgKiBmb3JjZSDmt7vliqDliptcclxuICAgICAqIOiuoeeul+aXtumcgOimgeazqOaEj++8jOmZpOmdnumcgOimgeWwhuiuoeeul+WAvOS/neWtmOWcqOatpO+8jOWQpuWImeS4jeWPr+S7peS9v+eUqOmTvuW8j+i/kOeul+OAglxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1ZlbG9jaXR5ID0gbmV3IGNjLlZlYzMoMCk7XHJcbiAgICBwdWJsaWMgZ2V0IHZlbG9jaXR5KCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fVmVsb2NpdHk7IH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumAn+W6plxyXG4gICAgICogQHBhcmFtIHt2ZWN9IHZlbG9jaXR5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHZlbG9jaXR5KHZlbG9jaXR5OiBjYy5WZWMzIHwgY2MuVmVjMikge1xyXG4gICAgICAgIGlmICh2ZWxvY2l0eSBpbnN0YW5jZW9mIGNjLlZlYzIpXHJcbiAgICAgICAgICAgIHRoaXMuX1ZlbG9jaXR5ID0gbmV3IGNjLlZlYzModmVsb2NpdHkueCwgdmVsb2NpdHkueSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0ge3ZlY30gdmVsb2NpdHkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWRkVmVsb2NpdHkodmVsb2NpdHkpIHtcclxuICAgICAgICBpZiAodmVsb2NpdHkgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IHRoaXMuX1ZlbG9jaXR5LmFkZChuZXcgY2MuVmVjMyh2ZWxvY2l0eS54LCB2ZWxvY2l0eS55LCAwKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9WZWxvY2l0eSA9IHRoaXMuX1ZlbG9jaXR5LmFkZCh2ZWxvY2l0eSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6YCf5bqm6ZmQ5Yi2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQWNjZWxlcmF0aW9uTGltaXQ6IG51bWJlciA9IDk5OTk7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluacgOWkp+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFjY2VsZXJhdGlvbkxpbWl0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9BY2NlbGVyYXRpb25MaW1pdDsgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5pyA5aSn6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0geyp9IHNwZWVkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFjY2VsZXJhdGlvbkxpbWl0KGxpbWl0OiBudW1iZXIpIHsgdGhpcy5fQWNjZWxlcmF0aW9uTGltaXQgPSBsaW1pdCB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN5qih5byP5LiL5pyA5aSn56e75Yqo6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTWF4U3BlZWQ6IG51bWJlciA9IDEwMDA7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluacgOWkp+mAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG1heFNwZWVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9NYXhTcGVlZDsgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5pyA5aSn6YCf5bqmXHJcbiAgICAgKiBAcGFyYW0geyp9IHNwZWVkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG1heFNwZWVkKHNwZWVkKSB7IHRoaXMuX01heFNwZWVkID0gc3BlZWQgfHwgdGhpcy5fTWF4U3BlZWQ7IH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3niannkIbliptcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9QaHlzaWNmb3JjZSA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bniannkIbliptcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGZvcmNlKCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fUGh5c2ljZm9yY2UgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u54mp55CG5YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZm9yY2UoZm9yY2U6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKGZvcmNlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgdGhpcy5fUGh5c2ljZm9yY2UgPSBuZXcgY2MuVmVjMyhmb3JjZS54LCBmb3JjZS55LCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX1BoeXNpY2ZvcmNlID0gZm9yY2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDniannkIbliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhZGRmb3JjZShmb3JjZTogY2MuVmVjMyB8IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAoZm9yY2UgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IG5ldyBjYy5WZWMzKGZvcmNlLngsIGZvcmNlLnksIDApLmFkZCh0aGlzLl9QaHlzaWNmb3JjZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9QaHlzaWNmb3JjZSA9IGZvcmNlLmFkZCh0aGlzLl9QaHlzaWNmb3JjZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN54mp55CG6Zi75YqbXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfUGh5c2ljRHJhZzogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W54mp55CG6Zi75YqbXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkcmFnKCkgeyByZXR1cm4gTWF0aC5tYXgodGhpcy5fUGh5c2ljRHJhZywgMCkgfTtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u54mp55CG6Zi75YqbXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZHJhZyhkcmFnOiBudW1iZXIpIHsgdGhpcy5fUGh5c2ljRHJhZyA9IE1hdGgubWF4KGRyYWcsIDApOyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyB5LmF5YqbL+mYu+WKm1xyXG4gICAgICog6K+l5bGe5oCn5Lya5Zyo5q+P5qyh5pu05paw5pe26Ieq5Yqo5Yqg5YWl5Yiw54mp55CG5Yqb5LitXHJcbiAgICAgKiDkuI3orrrlvZPliY3mmK/lkKblt7Lnu4/liqDlhaXniannkIbliptcclxuICAgICAqIOi/meWPr+S7peeUqOS6jiDpo47vvIzlvJXlipvnrYnlsZ7mgKdcclxuICAgICAqIFxyXG4gICAgICog5b2T5LiN6ZyA6KaB5oyB5LmF5Yqb5pe26ZyA6KaB6K6+572u5Li6IHVuZGVmaW5lZFxyXG4gICAgICog6L+Z5Y+v5Lul6YCa6L+H5YW26K6+572u5pa55rOV5p2l5a6M5oiQ77yM5LiN6ZyA6KaB5omL5Yqo6LWL5YC8XHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMgeS5heWKm1xyXG4gICAgICog6K+35LiN6KaB55u05o6l6K6+572u5oyB5LmF5Yqb77yM6ICM5piv5L2/55So5a6D55qE5pa55rOV77yaXHJcbiAgICAgKiBzZXRQZXJtRm9yY2UoKSDorr7nva7mjIHkuYXliptcclxuICAgICAqIGdldFBlcm1Gb3JjZSgpIOiOt+WPluaMgeS5heWKm1xyXG4gICAgICogQHBhcmFtIHtWZWMzfSBwZXJtYW5lbnRGb3JjZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1Blcm1hbmVudEZvcmNlOiBjYy5WZWMzIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mjIHkuYXliptcclxuICAgICAqIEBwYXJhbSB7VmVjM30gdmVjIOW9k+S4jemcgOimgeaMgeS5heWKm+aXtuiuvue9ruS4unVuZGVmaW5lZOWPr+S7peebtOaOpeWFs+mXrVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHBlcm1Gb3JjZShmb3JjZTogY2MuVmVjMyB8IGNjLlZlYzIgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICAgICAgaWYgKGZvcmNlIGluc3RhbmNlb2YgY2MuVmVjMilcclxuICAgICAgICAgICAgICAgIHRoaXMuX1Blcm1hbmVudEZvcmNlID0gbmV3IGNjLlZlYzMoZm9yY2UueCwgZm9yY2UueSwgMCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX1Blcm1hbmVudEZvcmNlID0gZm9yY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fUGVybWFuZW50Rm9yY2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIHkuYXlipsgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwZXJtRm9yY2UoKTogY2MuVmVjMyB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLl9QZXJtYW5lbnRGb3JjZSB9O1xyXG4gICAgcHVibGljIGdldCB2YWxpZHBlcm1Gb3JjZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX1Blcm1hbmVudEZvcmNlID8gdHJ1ZSA6IGZhbHNlIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjIHkuYXpmLvliptcclxuICAgICAqIOWmguaenOS4jemcgOimgeS9v+eUqOaMgeS5hemYu+WKm++8jOivt+iuvue9ruS4unVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX1Blcm1hbmVudERyYWc6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5oyB5LmF6Zi75YqbXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHJhZyDlvZPkuI3pnIDopoHmjIHkuYXpmLvlipvml7borr7nva7kuLp1bmRlZmluZWTlj6/ku6Xnm7TmjqXlhbPpl61cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHBlcm1EcmFnKGRyYWc6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChkcmFnIDw9IDApIHRoaXMuX1Blcm1hbmVudERyYWcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLl9QZXJtYW5lbnREcmFnID0gTWF0aC5tYXgoZHJhZywgMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIHkuYXpmLvliptcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwZXJtRHJhZygpOiBudW1iZXIgeyByZXR1cm4gTWF0aC5tYXgodGhpcy5fUGVybWFuZW50RHJhZyB8fCAwLCAwKSB9O1xyXG4gICAgcHVibGljIGdldCB2YWxpZFBlcm1EcmFnKCk6IGJvb2xlYW4geyByZXR1cm4gdHlwZW9mIHRoaXMuX1Blcm1hbmVudERyYWcgPT0gJ251bWJlcicgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi0qOmHj1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX01hc3M6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlui0qOmHj1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbWFzcygpIHsgcmV0dXJuIE1hdGgubWF4KHRoaXMuX01hc3MsIC4wMDEpIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rui0qOmHj1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgbWFzcyh2YWx1ZSkgeyB0aGlzLl9NYXNzID0gTWF0aC5tYXgodmFsdWUsIC4wMDEpIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43lipvmlrnlkJFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9HcmF2aXR5OiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMCwgMCwgLTk4MCk7XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumHjeWKm+aWueWQkVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRyYWcg5b2T5LiN6ZyA6KaB5oyB5LmF6Zi75Yqb5pe26K6+572u5Li6dW5kZWZpbmVk5Y+v5Lul55u05o6l5YWz6ZetXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBncmF2aXR5KGdyYXZpdHk6IGNjLlZlYzMgfCBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKGdyYXZpdHkgaW5zdGFuY2VvZiBjYy5WZWMyKVxyXG4gICAgICAgICAgICB0aGlzLl9HcmF2aXR5ID0gbmV3IGNjLlZlYzMoZ3Jhdml0eS54LCBncmF2aXR5LnksIDApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fR3Jhdml0eSA9IGdyYXZpdHk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bph43lipvmlrnlkJFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBncmF2aXR5KCk6IGNjLlZlYzMgeyByZXR1cm4gdGhpcy5fR3Jhdml0eSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5Yqb5qCH5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfR3Jhdml0eVNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bph43lipvmoIfluqZcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdyYXZpdHlTY2FsZSgpIHsgcmV0dXJuIHRoaXMuX0dyYXZpdHlTY2FsZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ph43lipvmoIfluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBncmF2aXR5U2NhbGUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9HcmF2aXR5U2NhbGUgPSB2YWx1ZSB9O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWItuWKqOaRqeaTpuWKm+WboOWtkFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0JyYWtpbmdGcmljdGlvbkZhY3RvcjogbnVtYmVyID0gMjtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yi25Yqo5pGp5pOm5Yqb5Zug5a2QXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBicmFraW5nRnJpY3Rpb25GYWN0b3IoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0JyYWtpbmdGcmljdGlvbkZhY3RvciB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liLbliqjmkanmk6blipvlm6DlrZBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBicmFraW5nRnJpY3Rpb25GYWN0b3IodmFsdWU6IG51bWJlcikgeyB0aGlzLl9CcmFraW5nRnJpY3Rpb25GYWN0b3IgPSB2YWx1ZSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi25Yqo5pGp5pOm5YqbXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfQnJha2luZ0ZyaWN0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliLbliqjmkanmk6bliptcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJyYWtpbmdGcmljdGlvbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQnJha2luZ0ZyaWN0aW9uIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWItuWKqOaRqeaTpuWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJyYWtpbmdGcmljdGlvbih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX0JyYWtpbmdGcmljdGlvbkZhY3RvciA9IHZhbHVlIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLbliqjpmY3pgJ9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9CcmFraW5nRGVjZWxlcmF0aW9uID0gMjA0ODtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Yi25Yqo6ZmN6YCfXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBicmFraW5nRGVjZWxlcmF0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9CcmFraW5nRGVjZWxlcmF0aW9uIH07XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWItuWKqOmZjemAn1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJyYWtpbmdEZWNlbGVyYXRpb24odmFsdWU6IG51bWJlcikgeyB0aGlzLl9CcmFraW5nRGVjZWxlcmF0aW9uID0gdmFsdWUgfTtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDnlKjmiLflipvovpPlhaUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnp7vliqjovpPlhaVcclxuICAgICAqIEBwYXJhbSB7VmVjM30gZGlyZWN0aW9uIOaWueWQke+8jOm7mOiupOiupOS4uuaYr+S4uuWNleS9jeWQkemHj++8jFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkSW5wdXQoZGlyZWN0aW9uOiBjYy5WZWMzIHwgY2MuVmVjMiwgc2NhbGU/OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmZvcmNlID0gZGlyZWN0aW9uIGluc3RhbmNlb2YgY2MuVmVjMiA/IG5ldyBjYy5WZWMzKGRpcmVjdGlvbi54LCBkaXJlY3Rpb24ueSwgMCkgOiBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UubXVsKHRoaXMubWF4U3BlZWQgKiAoc2NhbGUgfHwgMSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmHjeWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZEdyYXZpdHkoc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZS5hZGQodGhpcy5ncmF2aXR5Lm11bCh0aGlzLm1hc3MpKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDpmLvliptcclxuICAgICAqIEBwYXJhbSB7Kn0gZHJhZyBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFkZERyYWcoZHJhZzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnID0gZHJhZyArIHRoaXMuZHJhZztcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg5pu05paw6I635Y+WICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43lipvliqDpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFjY2VsZXJhdGlvbkR1ZSA9IG5ldyBjYy5WZWMzKDApO1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOWHveaVsOWuj+W6kyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIC8vIFNJR05QT1NUIOino+eul+mYtuautSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/meaYr+S4gOS4quWGhemDqOaWueazlVxyXG4gICAgICog5bCG5oyB5LmF5Yqb5Yqg5YWl5Yiw54mp55CG5Yqb5LitXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhZGRQZXJtYW5lbnRGb3JjZVRvUGh5c2ljKCkge1xyXG4gICAgICAgIC8vIOa3u+WKoOaMgeS5heWKm1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkcGVybUZvcmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2UgPSB0aGlzLmZvcmNlLmFkZCh0aGlzLnBlcm1Gb3JjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOa3u+WKoOaMgeS5hemYu+WKmyBcclxuICAgICAgICB0aGlzLmRyYWcgPSAhdGhpcy52YWxpZFBlcm1EcmFnID8gdGhpcy5kcmFnIDogKHRoaXMucGVybURyYWcgKyB0aGlzLmRyYWcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/meaYr+S4gOS4quWGhemDqOaWueazlVxyXG4gICAgICog5Yik5pat5b2T5YmN56e75Yqo57uE5Lu25piv5ZCm5a6M5YWo6Z2Z5q2iXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjYW5Nb3ZlKCkge1xyXG4gICAgICAgIHJldHVybiAhKGNjLlZlYzMuZXF1YWxzKHRoaXMuZm9yY2UsIGNjLlZlYzMuWkVSTykgJiYgY2MuVmVjMy5lcXVhbHModGhpcy52ZWxvY2l0eSwgY2MuVmVjMy5aRVJPKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOWPjOa1geS8oOWKqOW8j+enu+WKqOi9veWFtyAtIOino+eul+mYtuautSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCf5bqm5ZCR5YmNXHJcbiAgICAgKiDopoHkvb/nlKjmraTmlrnms5Xov5vooYznp7vliqjvvIzpnIDopoHlnKjlhbbku5bku7vmhI/pmLbmrrXlhoXlkJHmraTnp7vliqjnu4Tku7bmt7vliqDliptcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAgKi9cclxuICAgIC8vIHB1YmxpYyB2ZWxvY2l0eUZvcndhcmQoZHQsIHJvdGF0ZVJhdGUpIHtcclxuICAgIC8vICAgICBsZXQgc2xpcCA9IGtpc21pdC52ZWMyRG90KGtpc21pdC5yb3RhdGlvblRvVmVjMih0aGlzLmNvbnRleHQucm90YXRpb24pLCBraXNtaXQubm9ybWFsaXoyKHRoaXMudmVsb2NpdHkpKTtcclxuICAgIC8vICAgICBzbGlwID0gKHNsaXAgLSAxKSAvIDI7IC8vIOmdouWQkeaXtuS4ujDvvIzog4zlkJHml7bkuLotMlxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBUQUcg56e75Yqo5pu05paw5Ye95pWwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g5b6E55u0LeWIsOi+vueCuSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmm7TmlrDliLDorqHnrpfkvY3nva5cclxuICAgICog6L+Z5Liq5pa55rOV5Lya6Ieq6KGM56e75Yqo5YiwIHRoaXMuYXJyaXZlUG9zaXRpb25cclxuICAgICog5L2/55So5q2k5pa55rOV5bCG5peg6KeG6Zi75Yqb5LiO6YeN5Yqb77yM5b6E55u05oyJ54Wn5oyH5a6a6YCf5bqm5bmz56e76L+H5Y67XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0ge051bWJlcn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgKiBAcGFyYW0ge051bWJlcn0gc3BlZWQg5omn6KGM6YCf5bqm77yM57y655yBbWF4U3BlZWRcclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IHRoIOi3neemu+i/h+mbtumYiOWAvO+8jOe8uuecgTFcclxuICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlVG9Qb3NpdGlvbihkdCwgdGgsIHNwZWVkKSB7XHJcbiAgICAgICAgbGV0IGNvblBvcyA9IHRoaXMuY29udGV4dC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBwb3MgPSBjb25Qb3MgaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMoY29uUG9zLngsIGNvblBvcy55LCAwKSA6IGNvblBvc1xyXG4gICAgICAgIGxldCBtb3ZlVmVjdG9yID0gdGhpcy5hcnJpdmVQb3NpdGlvbi5zdWIocG9zKTtcclxuICAgICAgICBsZXQgbW92ZWxlbmd0aCA9IGNjLlZlYzMubGVuKG1vdmVWZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAobW92ZWxlbmd0aCA+ICh0aCB8fCAxKSkge1xyXG4gICAgICAgICAgICBsZXQgdW5pdCA9IG1vdmVWZWN0b3IuZGl2KG1vdmVsZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgbW92ZSA9IHVuaXQubXVsKE1hdGgubWluKChzcGVlZCB8fCB0aGlzLm1heFNwZWVkKSAqIGR0LCBtb3ZlbGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRQb3NpdGlvbih0aGlzLmluQm94Qm91bmQobW92ZS5hZGQocG9zKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg56e75Yqo5pu05paw5Ye95pWwIC0g5Y+M5rWB5Lyg5Yqo5byP56e75Yqo6L295YW3LeWIsOi+vueCuSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIGZpeCAgICAgICAgICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICog5bCG5ZCR5YmN6L206Z2i5ZCR5L2N572u56e75YqoXHJcbiAgICAgKiDov5nkuKrmlrnms5XkvJroh6rooYznp7vliqjliLAgdGhpcy5hcnJpdmVQb3NpdGlvblxyXG4gICAgICog5L2/55So5q2k5pa55rOV5bCG5peg6KeG6Zi75Yqb5LiO6YeN5Yqb56e75YqoXHJcbiAgICAgKiDnp7vliqjnmoTlkIzml7bkvJrlsIboh6rouqvop5LluqbmnJ3lkJHnp7vliqjmlrnlkJFcclxuICAgICAqIOWPr+S7pemAmui/h+aMh+WumlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVUb1dhcmRQb3N0aW9uKCkge1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOWfuuacrOmAn+W6pumpseWKqCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sx6YCf5bqm6amx5Yqo5pu05pawXHJcbiAgICAgKiDopoHkvb/nlKjmraTmlrnms5Xov5vooYznp7vliqjvvIzpnIDopoHlnKjlhbbku5bku7vmhI/pmLbmrrXlhoXlkJHmraTnp7vliqjnu4Tku7bmt7vliqDliptcclxuICAgICAqIFxyXG4gICAgICog5Y+v5Lul5ZON5bqU556s5pe25Yqb77yaIGFkZEZvcmNlKCksIGFkZERyYWcoKSwgYWRkSW5wdXQoKSAgXHJcbiAgICAgKiDlj6/ku6Xlk43lupTmjIHkuYXlipvvvJogcGVybWFuZW50Rm9yY2UsIHBlcm1hbmVudERyYWcgIFxyXG4gICAgICogXHJcbiAgICAgKiDmr5TlpoLlnKjpu5jorqTmg4XlhrXkuIvvvIzkuI3kvJrlrp7njrDpmLvlipvvvIzkvaDnmoTnp7vliqjlsLHlg4/mmK/lnKjml6Dph43lipvnjq/looPkuIvkuIDmoLfvvIxcclxuICAgICAqIOiAjOaDs+imgeaooeS7v+i1sOi3r+aIluaYr+WFtuS7luenu+WKqOaooeW8j++8jOmcgOimgeWcqOatpOabtOaWsOS6i+S7tuS5i+WJjeaIluaYr+S5i+WQjua3u+WKoOS4gOS7veWKmy/pmLvlipvjgIIgIFxyXG4gICAgICog5Zyo6YCa5bi45oOF5Ya15LiL77yM5L2g5LiN6ZyA6KaB5ouF5b+D5re75YqgIOWKmy/pmLvlipsg5omn6KGM6aG65bqP5Lya6YCg5oiQ6K6h566X5aSx6K+vXHJcbiAgICAgKiDlm6DkuLrov5nmmK/nlLHljZXkuIDnjq/ot6/mnoTmiJDnmoTnp7vliqjmqKHlvI9cclxuICAgICAqIFxyXG4gICAgICog5YWz5LqO5qih5ouf6Zi25q615pu05paw77yaICBcclxuICAgICAqIOS9oOWPr+S7peWcqOWQjOS4gOW4p+aIluaYr+eUn+WRveWRqOacn+eahOS4jeWQjOmYtuauteWGheWkmuasoei/m+ihjOabtOaWsO+8jFxyXG4gICAgICog5L2G5L2/55So5pu05paw5Ye95pWw6L+b6KGM6L+t5Luj5Lya6YCg5oiQ6YCf5bqm5rWB6YCd77yMXHJcbiAgICAgKiDmiYDku6Xlu7rorq7oh6rooYzlr7noioLngrnlnZDmoIfov5vooYzov63ku6PvvIzogIzlkI7nu5/kuIDov5vooYzpqbHliqjmm7TmlrAgIFxyXG4gICAgICogXHJcbiAgICAgKiDlpoLmnpzov63ku6PkvJrpgKDmiJDpgJ/luqbplJnkvY3vvIzlj6/ku6Xojrflj5bph43lipvliqDpgJ/luqbvvIzlsIbpgJ/luqbovazkuLrliqjog70gIFxyXG4gICAgICog5YeP5reh5Y6f5aeL6YCf5bqm77yM6ICM5ZCO5Zyo5pu05paw5YmN5bCG5Yqo6IO96L+U5Zue57uZ5Yqb5Y2z5Y+vICBcclxuICAgICAqIFxyXG4gICAgICog5L6L5aaC6ZOB6ZO+5Lu/55yf77yM5bCx5Y+v5Lul5a+55q+P6IqC6ZOB6ZO+5YWI6L+b6KGM5LiA5qyh6L+Q5Yqo5pu05paw77yMXHJcbiAgICAgKiDogIzlkI7ov5vooYzliqjog73ovazmjaLvvIzlsIbmr4/oioLpk4Hpk77nmoTlnZDmoIflkJHliY3kuIDkuKrov5vooYznuqbmnZ/ku7/nnJ/vvIzmr5TlpoLov5vooYzov63ku6Pku7/nnJ8zMOasoSAgXHJcbiAgICAgKiDku7/nnJ/lrozmr5XlkI7ph43mlrDotYvog73vvIzmiJbmmK/lsIbliqjog73orqHnrpfkuLrlhbbku5bmlYjmnpzjgIIgIFxyXG4gICAgICog5YW25L2Z5oOF5Ya15LiL77yM6K6h566X5Yqo6IO95bm25rKh5pyJ5LuA5LmI55So5aSE77yM5L2g5Y+v5Lul5bCG5YW25rOo6YeK44CCXHJcbiAgICAgKiBcclxuICAgICAqIOW9k+eEtu+8jOacgOWlveS4jeimgeeUqOS4iui/sOaWueazlei/m+ihjOWghuagiOaooeaLn++8myAgXHJcbiAgICAgKiBDUFXmi6XmnInmm7TlpJrlpI3mnYLnmoTmjIfku6Tku6PkuLrlpITnkIbov5nkupvmlrnms5XjgIJcclxuICAgICAqIFxyXG4gICAgICog5o6o6I2Q5ZyoY29jb3PkuK3lsIblkIzlsY/ov5DnrpfmlbDph4/mjqfliLblnKgyMDDku6XlhoVcclxuICAgICAqIOi/meS4quaVsOWAvOaYr+eUqGMrK+WunueOsOWQjuaOqOeul+eahO+8jGMrK+WPr+S7pei+vuWIsDIwMDArICBcclxuICAgICAqIO+8iENQVeaXtumXtOWPmOWKqOS4jei2hei/h8KxMC4wMW1z55qE5oOF5Ya15LiL77yM5b2T54S26Lef5bmz5Y+w5oCn6IO95Lmf5pyJ5YWz57O777yM5omA5LulanPnmoTlrp7pmYXooajnjrDkvJrmm7Tlt67vvIxcclxuICAgICAqIOi/mOaciei/memHjOeahOa1i+ivleW5tumdnuWPquS9v+eUqOi/meS4quenu+WKqOe7hOS7tu+8jOWQjOaXtuavj+S4qumhueebrui/mOacieS4gOS4qjIw5Liq6aqo6aq855qEMTAwMOmdoue9keagvOS9k+WcqOi/kOWKqO+8iVxyXG4gICAgICog6LaF6L+H6L+Z5Liq5pWw5YC85ZCO5Lya5Ye6546w5LiA5a6a56iL5bqm55qE5o6J5binXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Kn0gZHQgZGVsdGF0aW1lIOS4juW9k+WJjeW4p+eOh+e7keWumu+8jOW/heimgemhueebrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQnlWZWxvY2l0eShkdDogbnVtYmVyKTogUGF3bk1vdmVtZW50IHtcclxuICAgICAgICB0aGlzLmFkZFBlcm1hbmVudEZvcmNlVG9QaHlzaWMoKTtcclxuICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAvLyDlupTnlKjotKjph49cclxuICAgICAgICAgICAgdGhpcy5mb3JjZSA9IHRoaXMuZm9yY2UuZGl2KHRoaXMubWFzcyk7XHJcbiAgICAgICAgICAgIC8vIOiuoeeul+mYu+WKm1xyXG4gICAgICAgICAgICBsZXQgaW5jb21pbmdEcmFnID0gdGhpcy5kcmFnICogZHQgKyAxO1xyXG4gICAgICAgICAgICAvLyDph43lipvliqDpgJ/luqZcclxuICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb25EdWUgPSB0aGlzLnZlbG9jaXR5LmRpdihpbmNvbWluZ0RyYWcpO1xyXG4gICAgICAgICAgICAvLyDlupTnlKjlipvliLDpgJ/luqZcclxuICAgICAgICAgICAgbGV0IG91dFZlbG9jaXR5ID0gdGhpcy5mb3JjZS5tdWwoZHQpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5LmFkZCh0aGlzLnZlbG9jaXR5KS5kaXYoaW5jb21pbmdEcmFnKTtcclxuICAgICAgICAgICAgLy8g6ZmQ5Yi2XHJcbiAgICAgICAgICAgIGxldCBvdXRWZWxvY2l0eUxlbmd0aCA9IG91dFZlbG9jaXR5LmxlbigpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5TGVuZ3RoIDw9IHRoaXMubWF4U3BlZWQgPyBvdXRWZWxvY2l0eSA6IG91dFZlbG9jaXR5Lm11bCh0aGlzLm1heFNwZWVkKS5kaXYob3V0VmVsb2NpdHlMZW5ndGgpO1xyXG4gICAgICAgICAgICBvdXRWZWxvY2l0eSA9IG91dFZlbG9jaXR5LnN1Yih0aGlzLmxhc3RWZWxvY2l0eSlcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHlMZW5ndGggPSBvdXRWZWxvY2l0eS5sZW4oKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eUxlbmd0aCA8PSB0aGlzLmFjY2VsZXJhdGlvbkxpbWl0ID8gb3V0VmVsb2NpdHkgOiBvdXRWZWxvY2l0eS5tdWwodGhpcy5hY2NlbGVyYXRpb25MaW1pdCkuZGl2KG91dFZlbG9jaXR5TGVuZ3RoKTtcclxuICAgICAgICAgICAgb3V0VmVsb2NpdHkgPSBvdXRWZWxvY2l0eS5hZGQodGhpcy5sYXN0VmVsb2NpdHkpO1xyXG4gICAgICAgICAgICAvLyDmlrDpgJ/luqZcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBjYy5WZWMzKG91dFZlbG9jaXR5KTtcclxuICAgICAgICAgICAgbGV0IG5ld1Bvc3Rpb24gPSB0aGlzLmNvbnRleHQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgLy8g6K6+572u5Z2Q5qCHXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRQb3NpdGlvbih0aGlzLnZlbG9jaXR5Lm11bChkdCkuYWRkKG5ld1Bvc3Rpb24gaW5zdGFuY2VvZiBjYy5WZWMyID8gbmV3IGNjLlZlYzMobmV3UG9zdGlvbi54LCBuZXdQb3N0aW9uLnksIDApIDogbmV3UG9zdGlvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZvcmNlLnNldChjYy5WZWMzLlpFUk8pO1xyXG4gICAgICAgIHRoaXMuZHJhZyA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOenu+WKqOabtOaWsOWHveaVsCAtIOeugOaYk+WKm+mpseWKqCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlLHlipvpqbHliqjmm7TmlrDvvIjlhrLph4/mm7TmlrDvvIlcclxuICAgICAqIFxyXG4gICAgICog5LiA6Iis5oOF5Ya15LiL5bm25LiN5o6o6I2Q5L2/55SoICBcclxuICAgICAqIOWmguaenOmcgOimgeWunueOsFBCRO+8jOWFiea7keaguOetieaViOaenO+8jOivt+S9v+eUqHVwZGF0ZUJ5VmVsb2NpdHkoKSAgXHJcbiAgICAgKiBcclxuICAgICAqIOWPr+S7peWTjeW6lOeerOaXtuWKm++8miBhZGRGb3JjZSgpLCBhZGRJbnB1dCgpICBcclxuICAgICAqIOWPr+S7peWTjeW6lOaMgeS5heWKm++8miBwZXJtYW5lbnRGb3JjZSAgXHJcbiAgICAgKiBcclxuICAgICAqIOWmguWHveaVsOWQjeWtl+aJgOekuu+8jOS4jeS8muS6p+eUn+mAn+W6pu+8jOWPquimgeayoeacieWKm+WwseS8muWBnOS4iyAgXHJcbiAgICAgKiDkuJTorqHnrpfmlrnlvI/nqI3mnInkuI3lkIzvvIzku4XlsIblipvkuI7ml7bpl7Tnm7jkuZjvvIznp7DkuLrlhrLph49cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSBkdCBkZWx0YXRpbWUg5LiO5b2T5YmN5bin546H57uR5a6a77yM5b+F6KaB6aG555uuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUJ5Zm9yY2UgPSBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICB0aGlzLmFkZFBlcm1hbmVudEZvcmNlVG9QaHlzaWMoKTtcclxuICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3N0aW9uID0gdGhpcy5jb250ZXh0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVGb3JjZSA9IHRoaXMuZm9yY2UubXVsKGR0KTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldFBvc2l0aW9uKG5ld1Bvc3Rpb24uYWRkKHVwZGF0ZUZvcmNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZm9yY2Uuc2V0KGNjLlZlYzMuWkVSTyk7XHJcbiAgICAgICAgdGhpcy5kcmFnID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aabffe/a7RIpoDLOCm1Dsaa', 'Block');
// scripts/game/Block.ts

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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnMovement_1 = require("../base/tool/PawnMovement");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tag 用户宏，参数
        /**
         * 自由移动标记
         */
        _this.moveFree = false;
        /**
         * 生命周期
         */
        _this.lifeTime = cc.winSize.height / Setting_1.default.CubeSpeed;
        return _this;
    }
    // onLoad () {}
    Block.prototype.start = function () {
    };
    Block.prototype.update = function (dt) {
        if (this.moveFree) {
            this.node['movement'].updateByforce(dt);
            // this.node['movement'].updateByVelocity(dt); // 也可以用这个方法
        }
    };
    // tag 用户脚本 
    /**
     * 如果进行初始化，说明是玩家控制
     * 否则如果是系统生成不需要初始化
     */
    Block.prototype.init = function () {
        // 设定碰撞组
        this.node.group = Setting_1.default.Group_1;
        // 设定移动
        this.moveFree = true;
        // 赋予移动组件
        var movement = new PawnMovement_1.default(this.node);
        movement.permDrag = 0;
        movement.permForce = Setting_1.default.CubeVector;
        movement.velocity = Setting_1.default.CubeVector;
        this.node['movement'] = movement;
        // 定义一定时间后销毁，但是如果遇到碰撞或是其他情况，就必须取消这个定时器
        this.scheduleOnce(this.commitSuicide, this.lifeTime);
    };
    // 自我销毁
    Block.prototype.commitSuicide = function () { this.node.destroy(); };
    // tag 碰撞事件 
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    Block.prototype.onCollisionEnter = function (other, self) {
        // 清除定时器
        this.unschedule(this.commitSuicide);
        // 设定碰撞组
        this.node.group = Setting_1.default.Group_0;
        // 如果正在自由移动
        if (this.moveFree) {
            // 就禁止自由移动
            this.moveFree = false;
            // 试着加入到其他组
            var otherGroup = other.node.parent.getComponent(Setting_1.default.blockGroupName);
            var selfGroup = otherGroup.lastGroup;
            // 如果不存在这个组，就创建
            if (!selfGroup) {
                var selfGroupInst = DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.SpawnCubeGroup();
                // 重新定义自己的组
                selfGroup = selfGroupInst.getComponent(Setting_1.default.blockGroupName);
                // 初始化自己的组
                var selfGroupIndex = otherGroup.gridIndex - 1;
                selfGroup.init(selfGroupIndex, null, otherGroup);
                // 指定不需要自动初始化
                selfGroup.needStart = false;
                // 手动初始化外围部件
                selfGroup.node.children.forEach(function (element) {
                    element.destroy();
                    element.isValid = false;
                });
            }
            // 加入到组中
            this.node.setPosition(this.node.x, Setting_1.default.Cube_Perfab_Y, 0);
            this.node.removeFromParent();
            selfGroup.node.addChild(this.node);
            // 提醒组检查成员
            selfGroup.needCheckMem = true;
        }
    };
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    // onCollisionStay(other, self) {}
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    // onCollisionExit(other, self) {}
    // tag 销毁动画 
    /**
     * 替换为动画节点后销毁
     */
    Block.prototype.destroyWithAnimation = function () {
        var inst = cc.instantiate(Setting_1.default.Effect_SquareBreak);
        inst.setPosition(this.node.getPosition());
        this.node.parent.addChild(inst);
        this.node.destroy();
    };
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.default = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQWtGO0FBQ2xGLDBEQUFxRDtBQUVyRCxxQ0FBMkI7QUFFckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFFSSx3QkFBd0I7UUFGNUIscUVBdUhDO1FBVEcsYUFBYTtRQUNiOztXQUVHO1FBQ08sY0FBUSxHQUFZLEtBQUssQ0FBQztRQUNwQzs7V0FFRztRQUNPLGNBQVEsR0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxpQkFBRSxDQUFDLFNBQVMsQ0FBQzs7SUFDbEUsQ0FBQztJQW5IRyxlQUFlO0lBRWYscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLDBEQUEwRDtTQUM3RDtJQUNMLENBQUM7SUFFRCxZQUFZO0lBRVo7OztPQUdHO0lBQ0ksb0JBQUksR0FBWDtRQUNJLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBRSxDQUFDLE9BQU8sQ0FBQztRQUM3QixPQUFPO1FBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsU0FBUztRQUNULElBQUksUUFBUSxHQUFpQixJQUFJLHNCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsaUJBQUUsQ0FBQyxVQUFVLENB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QUN4QixDQUFDO0lBNUdnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBdUh6QjtJQUFELFlBQUM7Q0F2SEQsQUF1SEMsQ0F2SGtDLEVBQUUsQ0FBQyxTQUFTLEdBdUg5QztrQkF2SG9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSBcIi4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWxcIjtcclxuaW1wb3J0IFBhd25Nb3ZlbWVudCBmcm9tIFwiLi4vYmFzZS90b29sL1Bhd25Nb3ZlbWVudFwiO1xyXG5pbXBvcnQgQmxvY2tHcm91cCBmcm9tIFwiLi9CbG9ja0dyb3VwXCI7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlRnJlZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVbJ21vdmVtZW50J10udXBkYXRlQnlmb3JjZShkdCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZVsnbW92ZW1lbnQnXS51cGRhdGVCeVZlbG9jaXR5KGR0KTsgLy8g5Lmf5Y+v5Lul55So6L+Z5Liq5pa55rOVXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLfohJrmnKwgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpoLmnpzov5vooYzliJ3lp4vljJbvvIzor7TmmI7mmK/njqnlrrbmjqfliLYgIFxyXG4gICAgICog5ZCm5YiZ5aaC5p6c5piv57O757uf55Sf5oiQ5LiN6ZyA6KaB5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOiuvuWumueisOaSnue7hFxyXG4gICAgICAgIHRoaXMubm9kZS5ncm91cCA9IHNzLkdyb3VwXzE7XHJcbiAgICAgICAgLy8g6K6+5a6a56e75YqoXHJcbiAgICAgICAgdGhpcy5tb3ZlRnJlZSA9IHRydWU7XHJcbiAgICAgICAgLy8g6LWL5LqI56e75Yqo57uE5Lu2XHJcbiAgICAgICAgbGV0IG1vdmVtZW50OiBQYXduTW92ZW1lbnQgPSBuZXcgUGF3bk1vdmVtZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybURyYWcgPSAwO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1Gb3JjZSA9IHNzLkN1YmVWZWN0b3I7XHJcbiAgICAgICAgbW92ZW1lbnQudmVsb2NpdHkgPSBzcy5DdWJlVmVjdG9yO1xyXG4gICAgICAgIHRoaXMubm9kZVsnbW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgICAgIC8vIOWumuS5ieS4gOWumuaXtumXtOWQjumUgOavge+8jOS9huaYr+WmguaenOmBh+WIsOeisOaSnuaIluaYr+WFtuS7luaDheWGte+8jOWwseW/hemhu+WPlua2iOi/meS4quWumuaXtuWZqFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY29tbWl0U3VpY2lkZSwgdGhpcy5saWZlVGltZSk7XHJcbiAgICB9XHJcbiAgICAvLyDoh6rmiJHplIDmr4FcclxuICAgIHB1YmxpYyBjb21taXRTdWljaWRlKCkgeyB0aGlzLm5vZGUuZGVzdHJveSgpOyB9XHJcblxyXG4gICAgLy8gdGFnIOeisOaSnuS6i+S7tiBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgLy8g5riF6Zmk5a6a5pe25ZmoXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY29tbWl0U3VpY2lkZSk7XHJcbiAgICAgICAgLy8g6K6+5a6a56Kw5pKe57uEXHJcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gc3MuR3JvdXBfMDtcclxuICAgICAgICAvLyDlpoLmnpzmraPlnKjoh6rnlLHnp7vliqhcclxuICAgICAgICBpZiAodGhpcy5tb3ZlRnJlZSkge1xyXG4gICAgICAgICAgICAvLyDlsLHnpoHmraLoh6rnlLHnp7vliqhcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyDor5XnnYDliqDlhaXliLDlhbbku5bnu4RcclxuICAgICAgICAgICAgbGV0IG90aGVyR3JvdXA6IEJsb2NrR3JvdXAgPSBvdGhlci5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoc3MuYmxvY2tHcm91cE5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgc2VsZkdyb3VwOiBCbG9ja0dyb3VwID0gb3RoZXJHcm91cC5sYXN0R3JvdXA7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOS4jeWtmOWcqOi/meS4que7hO+8jOWwseWIm+W7ulxyXG4gICAgICAgICAgICBpZiAoIXNlbGZHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGZHcm91cEluc3QgPSBjY3Z2LmZyaXN0U2NyaXB0LlNwYXduQ3ViZUdyb3VwKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDph43mlrDlrprkuYnoh6rlt7HnmoTnu4RcclxuICAgICAgICAgICAgICAgIHNlbGZHcm91cCA9IHNlbGZHcm91cEluc3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrR3JvdXBOYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluiHquW3seeahOe7hFxyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGZHcm91cEluZGV4ID0gb3RoZXJHcm91cC5ncmlkSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgc2VsZkdyb3VwLmluaXQoc2VsZkdyb3VwSW5kZXgsIG51bGwsIG90aGVyR3JvdXApO1xyXG4gICAgICAgICAgICAgICAgLy8g5oyH5a6a5LiN6ZyA6KaB6Ieq5Yqo5Yid5aeL5YyWXHJcbiAgICAgICAgICAgICAgICBzZWxmR3JvdXAubmVlZFN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyDmiYvliqjliJ3lp4vljJblpJblm7Tpg6jku7ZcclxuICAgICAgICAgICAgICAgIHNlbGZHcm91cC5ub2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDliqDlhaXliLDnu4TkuK1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCBzcy5DdWJlX1BlcmZhYl9ZLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgc2VsZkdyb3VwLm5vZGUuYWRkQ2hpbGQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy8g5o+Q6YaS57uE5qOA5p+l5oiQ5ZGYXHJcbiAgICAgICAgICAgIHNlbGZHcm91cC5uZWVkQ2hlY2tNZW0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf5ZCO77yM56Kw5pKe57uT5p2f5YmN55qE5oOF5Ya15LiL77yM5q+P5qyh6K6h566X56Kw5pKe57uT5p6c5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIC8vIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge31cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe57uT5p2f5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIC8vIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge31cclxuXHJcbiAgICAvLyB0YWcg6ZSA5q+B5Yqo55S7IFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu/5o2i5Li65Yqo55S76IqC54K55ZCO6ZSA5q+BICBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlc3Ryb3lXaXRoQW5pbWF0aW9uKCkge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGluc3QgPSBjYy5pbnN0YW50aWF0ZShzcy5FZmZlY3RfU3F1YXJlQnJlYWspO1xyXG4gICAgICAgIGluc3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoaW5zdCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg55So5oi35a6P77yM5Y+C5pWwXHJcbiAgICAvKipcclxuICAgICAqIOiHqueUseenu+WKqOagh+iusFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbW92ZUZyZWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyfXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsaWZlVGltZTogbnVtYmVyID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBzcy5DdWJlU3BlZWQ7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/effect/IceEffectDextory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bb00BRRXZDbIMDeByLnCJj', 'IceEffectDextory');
// scripts/game/effect/IceEffectDextory.ts

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
var Setting_1 = require("../Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lateDestroy = 2;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.children.forEach(function (element) {
            var particle = element.getComponent(cc.ParticleSystem);
            particle.duration = Setting_1.default.ice_Duration;
        });
        this.scheduleOnce(function () { _this.node.destroy(); }, Setting_1.default.ice_Duration + this.lateDestroy);
    };
    __decorate([
        property(cc.Float)
    ], NewClass.prototype, "lateDestroy", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZWZmZWN0XFxJY2VFZmZlY3REZXh0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtCQztRQWZHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztRQWN4QixpQkFBaUI7SUFDckIsQ0FBQztJQWJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUM5QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RCxRQUFRLENBQUMsUUFBUSxHQUFHLGlCQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsaUJBQUUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFaRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNLO0lBSFAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtCNUI7SUFBRCxlQUFDO0NBbEJELEFBa0JDLENBbEJxQyxFQUFFLENBQUMsU0FBUyxHQWtCakQ7a0JBbEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNzIGZyb20gXCIuLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIGxhdGVEZXN0cm95OiBudW1iZXIgPSAyO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFydGljbGUgPSBlbGVtZW50LmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLmR1cmF0aW9uID0gc3MuaWNlX0R1cmF0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5ub2RlLmRlc3Ryb3koKSB9LCBzcy5pY2VfRHVyYXRpb24gKyB0aGlzLmxhdGVEZXN0cm95KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/ActorClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4efcaIvqEFI6b/oSBkLJxTt', 'ActorClass');
// scripts/base/class/ActorClass.ts

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
var DevelopersToolClass_1 = require("./DevelopersToolClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ActorClass = /** @class */ (function (_super) {
    __extends(ActorClass, _super);
    function ActorClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ActorClass.prototype.start = function () {
    };
    ActorClass = __decorate([
        ccclass
    ], ActorClass);
    return ActorClass;
}(DevelopersToolClass_1.default));
exports.default = ActorClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXEFjdG9yQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkRBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXdDLDhCQUFtQjtJQUEzRDs7SUFXQSxDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQVJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBVzlCO0lBQUQsaUJBQUM7Q0FYRCxBQVdDLENBWHVDLDZCQUFtQixHQVcxRDtrQkFYb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2IH0gZnJvbSAnLi9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmltcG9ydCBEZXZlbG9wZXJzVG9vbENsYXNzIGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xDbGFzcyc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvckNsYXNzIGV4dGVuZHMgRGV2ZWxvcGVyc1Rvb2xDbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DiologClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8d9eyP2DZLcKlpaWR1eAzJ', 'DiologClass');
// scripts/base/class/DiologClass.ts

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
var DynamicPanelClass_1 = require("./DynamicPanelClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DiologClass = /** @class */ (function (_super) {
    __extends(DiologClass, _super);
    function DiologClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DiologClass.prototype.start = function () {
    };
    DiologClass = __decorate([
        ccclass
    ], DiologClass);
    return DiologClass;
}(DynamicPanelClass_1.default));
exports.default = DiologClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERpb2xvZ0NsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlEQUFvRDtBQUU5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUF5QywrQkFBaUI7SUFBMUQ7O0lBV0EsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFSZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQVcvQjtJQUFELGtCQUFDO0NBWEQsQUFXQyxDQVh3QywyQkFBaUIsR0FXekQ7a0JBWG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDnibnmjIflr7nor53moYbnsbsgXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IER5bmFtaWNQYW5lbENsYXNzIGZyb20gJy4vRHluYW1pY1BhbmVsQ2xhc3MnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpb2xvZ0NsYXNzIGV4dGVuZHMgRHluYW1pY1BhbmVsQ2xhc3Mge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/effect/ButtonSkill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc3e7wQdTVPLJmU645dVdkB', 'ButtonSkill');
// scripts/game/effect/ButtonSkill.ts

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
var Setting_1 = require("../Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskList = [];
        _this.iceCD = _this.getCDT(_this.ice);
        _this.hitCD = _this.getCDT(_this.hit);
        _this.boomCD = _this.getCDT(_this.boom);
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onEnable = function () {
        // 默认CD是满的
        this.iceCD = this.getCDT(this.ice);
        this.hitCD = this.getCDT(this.hit);
        this.boomCD = this.getCDT(this.boom);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        this.skillNameList.forEach(function (element) {
            if (_this.getCD(element) > 0) {
                _this.setCD(element, -dt);
            }
        });
    };
    // tag 用户脚本 
    // tag 按钮事件 
    NewClass.prototype.onButtonClick = function (event, cusData) {
        // event.target
        this[cusData]();
    };
    NewClass.prototype.onIce = function () {
        this.BottonEvent(this.ice);
    };
    NewClass.prototype.onHit = function () {
        this.BottonEvent(this.hit);
    };
    NewClass.prototype.onBoom = function () {
        this.BottonEvent(this.boom);
    };
    NewClass.prototype.BottonEvent = function (name) {
        if (this.getCD(this[name]) <= 0) {
            this.setCD(this[name], this.getCDT(this[name]));
            Setting_1.default.SkillEvent = name;
        }
    };
    Object.defineProperty(NewClass.prototype, "iceMask", {
        // tag 宏和参数定义 
        get: function () { return this.maskList[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "hitMask", {
        get: function () { return this.maskList[1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "boomMask", {
        get: function () { return this.maskList[2]; },
        enumerable: false,
        configurable: true
    });
    NewClass.prototype.getCD = function (name) {
        return this[name + 'CD'];
    };
    NewClass.prototype.setCD = function (name, offset) {
        this[name + 'CD'] += offset;
        this[name + 'CD'] = Math.max(Math.min(this[name + 'CD'], this.getCDT(name)), 0);
        this.getMask(name).fillRange = this[name + 'CD'] / this.getCDT(name);
        return this[name + 'CD'];
    };
    NewClass.prototype.getCDT = function (name) {
        return Setting_1.default[name + '_CoolDownTime'];
    };
    NewClass.prototype.getMask = function (name) {
        return this[name + 'Mask'];
    };
    Object.defineProperty(NewClass.prototype, "ice", {
        get: function () { return 'ice'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "hit", {
        get: function () { return 'hit'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "boom", {
        get: function () { return 'boom'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewClass.prototype, "skillNameList", {
        get: function () { return [this.ice, this.hit, this.boom]; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property({ type: cc.Sprite })
    ], NewClass.prototype, "maskList", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZWZmZWN0XFxCdXR0b25Ta2lsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBNEI7QUFFdEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwRkM7UUF2RkcsY0FBUSxHQUFnQixFQUFFLENBQUM7UUEyRGpCLFdBQUssR0FBVyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxXQUFLLEdBQVcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsWUFBTSxHQUFXLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQTBCdEQsQ0FBQztJQXJGRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDJCQUFRLEdBQVI7UUFDSSxVQUFVO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFBVCxpQkFNQztRQUxHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUM5QixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcs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LDBCQUFJO2FBQWxCLGNBQXVCLE9BQU8sTUFBTSxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFFdEMsc0JBQWMsbUNBQWE7YUFBM0IsY0FBZ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQXJGeEU7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDOzhDQUNIO0lBSFYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBGNUI7SUFBRCxlQUFDO0NBMUZELEFBMEZDLENBMUZxQyxFQUFFLENBQUMsU0FBUyxHQTBGakQ7a0JBMUZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gXCIuLi8uLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsXCI7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi4vU2V0dGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGUgfSlcclxuICAgIG1hc2tMaXN0OiBjYy5TcHJpdGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIC8vIOm7mOiupENE5piv5ruh55qEXHJcbiAgICAgICAgdGhpcy5pY2VDRCA9IHRoaXMuZ2V0Q0RUKHRoaXMuaWNlKTtcclxuICAgICAgICB0aGlzLmhpdENEID0gdGhpcy5nZXRDRFQodGhpcy5oaXQpO1xyXG4gICAgICAgIHRoaXMuYm9vbUNEID0gdGhpcy5nZXRDRFQodGhpcy5ib29tKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5za2lsbE5hbWVMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENEKGVsZW1lbnQpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDRChlbGVtZW50LCAtZHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+iEmuacrCBcclxuXHJcblxyXG4gICAgLy8gdGFnIOaMiemSruS6i+S7tiBcclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXNEYXRhKSB7XHJcbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0XHJcbiAgICAgICAgdGhpc1tjdXNEYXRhXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSWNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQm90dG9uRXZlbnQodGhpcy5pY2UpO1xyXG4gICAgfVxyXG4gICAgb25IaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Cb3R0b25FdmVudCh0aGlzLmhpdCk7XHJcbiAgICB9XHJcbiAgICBvbkJvb20oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5Cb3R0b25FdmVudCh0aGlzLmJvb20pXHJcbiAgICB9XHJcblxyXG4gICAgQm90dG9uRXZlbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q0QodGhpc1tuYW1lXSkgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENEKHRoaXNbbmFtZV0sIHRoaXMuZ2V0Q0RUKHRoaXNbbmFtZV0pKTtcclxuICAgICAgICAgICAgc3MuU2tpbGxFdmVudCA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB0YWcg5a6P5ZKM5Y+C5pWw5a6a5LmJIFxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgaWNlTWFzaygpIHsgcmV0dXJuIHRoaXMubWFza0xpc3RbMF0gfVxyXG4gICAgcHJvdGVjdGVkIGdldCBoaXRNYXNrKCkgeyByZXR1cm4gdGhpcy5tYXNrTGlzdFsxXSB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGJvb21NYXNrKCkgeyByZXR1cm4gdGhpcy5tYXNrTGlzdFsyXSB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGljZUNEOiBudW1iZXIgPSB0aGlzLmdldENEVCh0aGlzLmljZSk7XHJcbiAgICBwcm90ZWN0ZWQgaGl0Q0Q6IG51bWJlciA9IHRoaXMuZ2V0Q0RUKHRoaXMuaGl0KTtcclxuICAgIHByb3RlY3RlZCBib29tQ0Q6IG51bWJlciA9IHRoaXMuZ2V0Q0RUKHRoaXMuYm9vbSk7XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldENEKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzW25hbWUgKyAnQ0QnXVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHNldENEKG5hbWU6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzW25hbWUgKyAnQ0QnXSArPSBvZmZzZXQ7XHJcbiAgICAgICAgdGhpc1tuYW1lICsgJ0NEJ10gPSBNYXRoLm1heChNYXRoLm1pbih0aGlzW25hbWUgKyAnQ0QnXSwgdGhpcy5nZXRDRFQobmFtZSkpLCAwKVxyXG4gICAgICAgIHRoaXMuZ2V0TWFzayhuYW1lKS5maWxsUmFuZ2UgPSB0aGlzW25hbWUgKyAnQ0QnXSAvIHRoaXMuZ2V0Q0RUKG5hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzW25hbWUgKyAnQ0QnXVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRDRFQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHNzW25hbWUgKyAnX0Nvb2xEb3duVGltZSddXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE1hc2sobmFtZTogc3RyaW5nKTogY2MuU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tuYW1lICsgJ01hc2snXVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgaWNlKCkgeyByZXR1cm4gJ2ljZScgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBoaXQoKSB7IHJldHVybiAnaGl0JyB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGJvb20oKSB7IHJldHVybiAnYm9vbScgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgc2tpbGxOYW1lTGlzdCgpIHsgcmV0dXJuIFt0aGlzLmljZSwgdGhpcy5oaXQsIHRoaXMuYm9vbV0gfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/RigorousType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4af9rpBBdE0IaqTfZsbgSG', 'RigorousType');
// scripts/base/class/RigorousType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFJpZ29yb3VzVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmVv+aVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50NjQge1xyXG4gICAgaW50NjQ6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+36ZW/5pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50NjQge1xyXG4gICAgdWludDY0OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOaVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50MzIge1xyXG4gICAgaW50MzI6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+35pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50MzIge1xyXG4gICAgdWludDMyOiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOefreaVtOWei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50MTYge1xyXG4gICAgaW50MTY6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5peg56ym5Y+355+t5pW05Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl1aW50MTYge1xyXG4gICAgdWludDE2OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOWtl+iKguexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50OCB7XHJcbiAgICBpbnQ4OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOaXoOespuWPt+Wtl+iKguexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdWludDgge1xyXG4gICAgdWludDg6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog6ZW/5rWu54K557G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdDY0IHtcclxuICAgIGZsb2F0NjQ6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5rWu54K557G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdDMyIHtcclxuICAgIGZsb2F0MzI6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5paH5pys57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZXh0IHtcclxuICAgIHRleHQ6IHN0cmluZztcclxufVxyXG4vKipcclxuICog5ZG95ZCN57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEluYW1lZCB7XHJcbiAgICBuYW1lZDogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiDlm5vnu7Tnn6Lph49cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXZlY3RvcjQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgejogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDlm5vnu7TmlbTmlbDnn6Lph49cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWludHZlY3RvcjQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgejogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiByZ2Jh6Imy5b2pXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElyZ2JhIHtcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICAgIGE6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogY215a+iJsuW9qVxyXG4gKiBDeWFuLE1hZ2VudGEsWWVsbG93LEJsYWNrXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEljbXlrIHtcclxuICAgIGM6IG51bWJlcjtcclxuICAgIG06IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGs6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5LiJ57u055+i6YePXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl2ZWN0b3IzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5LiJ57u05pW05pWw55+i6YePXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElpbnR2ZWN0b3IzIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogaHNi6Imy5b2pXHJcbiAqIGh1ZXMsc2F0dXJhdGlvbixicmlnaHRuZXNzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEloc2Ige1xyXG4gICAgaDogbnVtYmVyO1xyXG4gICAgczogbnVtYmVyO1xyXG4gICAgYjogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDkuInnu7TlnZDmoIdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXBvc2l0aW9uIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog56yb5Y2h5bCU5peL6L2sXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElyb3RhdGlvbiB7XHJcbiAgICB5YXc6IG51bWJlcjtcclxuICAgIHBpdGNoOiBudW1iZXI7XHJcbiAgICByb2xsOiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOS6jOe7tOefoumHj1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOS6jOe7tOaVtOaVsOefoumHj1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJaW50dmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOW5s+mdouWwuuWvuFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJc2l6ZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIOesm+WNoeWwlOWPmOaNolxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdHJhbnNmcm9tIHtcclxuICAgIHBvc2l0aW9uOiBJcG9zaXRpb247XHJcbiAgICByb3RhdGlvbjogSXJvdGF0aW9uO1xyXG4gICAgc2NhbGU6IEl2ZWN0b3IzO1xyXG59XHJcbi8qKlxyXG4gKiDnn6npmLU0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltYXQ0IHtcclxuICAgIG0wMDogbnVtYmVyOyBtMDE6IG51bWJlcjsgbTAyOiBudW1iZXI7IG0wMzogbnVtYmVyO1xyXG4gICAgbTA0OiBudW1iZXI7IG0wNTogbnVtYmVyOyBtMDY6IG51bWJlcjsgbTA3OiBudW1iZXI7XHJcbiAgICBtMDg6IG51bWJlcjsgbTA5OiBudW1iZXI7IG0xMDogbnVtYmVyOyBtMTE6IG51bWJlcjtcclxuICAgIG0xMjogbnVtYmVyOyBtMTM6IG51bWJlcjsgbTE0OiBudW1iZXI7IG0xNTogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiDnn6npmLUzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltYXQzIHtcclxuICAgIG0wMDogbnVtYmVyOyBtMDE6IG51bWJlcjsgbTAyOiBudW1iZXI7XHJcbiAgICBtMDM6IG51bWJlcjsgbTA0OiBudW1iZXI7IG0wNTogbnVtYmVyO1xyXG4gICAgbTA2OiBudW1iZXI7IG0wNzogbnVtYmVyOyBtMDg6IG51bWJlcjtcclxufVxyXG4vKipcclxuICog5ZOI5biM6KGoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEloYXNoIHtcclxuICAgIGdldDxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPihrZXk6IFQpOiBhbnk7XHJcbiAgICBzZXQ8VCBleHRlbmRzIHN0cmluZyB8IG51bWJlcj4oa2V5OiBULCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIHJlbW92ZTxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPihrZXk6IFQpOiBib29sZWFuO1xyXG4gICAgY2xlYW4oKTogdm9pZDtcclxufVxyXG4vKipcclxuICog5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElhcnJheSB7XHJcbiAgICByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZDtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIHJpbmdidWZmZXJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXJpbmdCdWZmZXIge1xyXG4gICAgcHVzaDxUPihvYmplY3Q6IFQpOiBudW1iZXI7XHJcbiAgICBwdWxsPFQgZXh0ZW5kcyBudW1iZXI+KGxlbmd0aDogbnVtYmVyKTogYW55O1xyXG4gICAgY2xlYW4oKTogdm9pZDtcclxufVxyXG4vKipcclxuICog6ZuGXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElzZXQge1xyXG4gICAgbWFrZTxUIGV4dGVuZHMgSWFycmF5PihhcnJheTogVCk6IElzZXQ7XHJcbiAgICBpbnRlcnNlY3Rpb248VCBleHRlbmRzIElzZXQ+KGFycmF5X2E6IFQsIGFycmF5X2I6IFQpOiBJc2V0O1xyXG4gICAgZGlmZmVyZW5jZTxUIGV4dGVuZHMgSXNldD4oYXJyYXlfYTogVCwgYXJyYXlfYjogVCk6IElzZXQ7XHJcbiAgICB1bmlvbjxUIGV4dGVuZHMgSXNldD4oYXJyYXlfYTogVCwgYXJyYXlfYjogVCk6IElzZXQ7XHJcbiAgICB0b0FycmF5KCk6IElhcnJheTtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIOaYoOWwhFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbWFwIHtcclxuICAgIGdldDxUPihrZXk6IFQpOiBhbnk7XHJcbiAgICBzZXQ8VD4oa2V5OiBULCB2YWx1ZTogVCk6IHZvaWQ7XHJcbiAgICBhZGQ8VD4odmFsdWU6IFQpOiBudW1iZXI7XHJcbiAgICByZW1vdmU8VD4oa2V5OiBUKTogYm9vbGVhbjtcclxuICAgIGNsZWFuKCk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIOWtmOaUvuaVtOaVsO+8jOWPluWAvOWcqMKxMl42M14oMl42MylcclxuICog5beo5aSn57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElpbnRlZ2VySHVnZSB7XHJcbiAgICBpbnRodWdlO1xyXG59XHJcbi8qKlxyXG4gKiDlrZjmlL7mta7ngrnvvIzlj5blgLzlnKjCsTJeNjNeKDJeNjMpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElmbG9hdEh1Z2Uge1xyXG4gICAgaW50aHVnZTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/UObjectBaseUtility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8112c+X0kdHRb8nGtGqyYoB', 'UObjectBaseUtility');
// scripts/base/core/UObjectBaseUtility.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
// 具有公开的基本类型
var UObjectBaseUtility_Private = /** @class */ (function () {
    function UObjectBaseUtility_Private() {
    }
    return UObjectBaseUtility_Private;
}());
var UObjectBaseUtility = /** @class */ (function (_super) {
    __extends(UObjectBaseUtility, _super);
    function UObjectBaseUtility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObjectBaseUtility;
}(UObjectBaseUtility_Private));
exports.default = UObjectBaseUtility;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcVU9iamVjdEJhc2VVdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVk7QUFDWjtJQUFBO0lBRUEsQ0FBQztJQUFELGlDQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFDRDtJQUFnRCxzQ0FBMEI7SUFBMUU7O0lBRUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRitDLDBCQUEwQixHQUV6RSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWFt+acieWFrOW8gOeahOWfuuacrOexu+Wei1xyXG5jbGFzcyBVT2JqZWN0QmFzZVV0aWxpdHlfUHJpdmF0ZSB7XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVPYmplY3RCYXNlVXRpbGl0eSBleHRlbmRzIFVPYmplY3RCYXNlVXRpbGl0eV9Qcml2YXRlIHtcclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/core/UObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b385uRoMRIUo4cEngshK62', 'UObject');
// scripts/base/core/UObject.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var UObjectBaseUtility_1 = require("./UObjectBaseUtility");
// 所有类型基本，提供了基本的反射
var UObject_Private = /** @class */ (function (_super) {
    __extends(UObject_Private, _super);
    function UObject_Private() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObject_Private;
}(UObjectBaseUtility_1.default));
var UObject = /** @class */ (function (_super) {
    __extends(UObject, _super);
    function UObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UObject;
}(UObject_Private));
exports.default = UObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY29yZVxcVU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsa0JBQWtCO0FBQ2xCO0lBQThCLG1DQUFrQjtJQUFoRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGNkIsNEJBQWtCLEdBRS9DO0FBRUQ7SUFBcUMsMkJBQWU7SUFBcEQ7O0lBR0EsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUhBLEFBR0MsQ0FIb0MsZUFBZSxHQUduRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVT2JqZWN0QmFzZVV0aWxpdHkgZnJvbSBcIi4vVU9iamVjdEJhc2VVdGlsaXR5XCI7XHJcbi8vIOaJgOacieexu+Wei+WfuuacrO+8jOaPkOS+m+S6huWfuuacrOeahOWPjeWwhFxyXG5jbGFzcyBVT2JqZWN0X1ByaXZhdGUgZXh0ZW5kcyBVT2JqZWN0QmFzZVV0aWxpdHkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVU9iamVjdCBleHRlbmRzIFVPYmplY3RfUHJpdmF0ZSB7XHJcblxyXG5cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/PawnClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc67fSOWKpKmZ+mQ1IaB8ME', 'PawnClass');
// scripts/base/class/PawnClass.ts

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
var ActorClass_1 = require("./ActorClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PawnClass = /** @class */ (function (_super) {
    __extends(PawnClass, _super);
    function PawnClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PawnClass.prototype.start = function () {
    };
    PawnClass.prototype.update = function (dt) {
    };
    PawnClass = __decorate([
        ccclass
    ], PawnClass);
    return PawnClass;
}(ActorClass_1.default));
exports.default = PawnClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhd25DbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQVU7SUFBakQ7O0lBYUEsQ0FBQztJQVhHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUFaZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWE3QjtJQUFELGdCQUFDO0NBYkQsQUFhQyxDQWJzQyxvQkFBVSxHQWFoRDtrQkFib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOWPr+aOp+WItuexuyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgQWN0b3JDbGFzcyBmcm9tICcuL0FjdG9yQ2xhc3MnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF3bkNsYXNzIGV4dGVuZHMgQWN0b3JDbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/NoRootTree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30349o+26ZAWLFFqHnpTt95', 'NoRootTree');
// scripts/base/tool/NoRootTree.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var RigorousLibrary_1 = require("../core/RigorousLibrary");
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
/**
 * 无根树
 * @tip 根据当前游戏的定义，入栈为根，出栈为叶
 */
var noRootTree = /** @class */ (function (_super) {
    __extends(noRootTree, _super);
    function noRootTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(noRootTree, "tree", {
        /**
         * 获取树单例
         */
        get: function () {
            this._NoRootTree = this._NoRootTree || new noRootTree(30);
            return this._NoRootTree;
        },
        /**
         * 设置树单例
         */
        set: function (value) {
            this._NoRootTree = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加子项
     * @param object
     * @returns 返回这个子项的索引
     */
    noRootTree.prototype.add = function (object) {
        return this.push(object);
    };
    /**
     * 反向添加子项
     * 警告：这是不符合规则的方法，请确保栈深度允许反推，
     * 或是不再获取栈有效深度，因为这不会进行有效性检查，
     * 会破坏数据连续性
     * @param object
     */
    noRootTree.prototype.addFromFront = function (object) {
        this.$get = this.$get - 1;
        this._HashList[this.$get] = object;
        return this.$get;
    };
    Object.defineProperty(noRootTree.prototype, "root", {
        /**
         * 获取根节点
         * @returns
         */
        get: function () {
            var put = this.$put - 1;
            put = put < 0 ? this._StackSize - 1 : put;
            return this.getBuffer(put);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "put", {
        get: function () { return this.$put; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "leaf", {
        /**
         * 获取最末子节点
         * @returns
         */
        get: function () {
            return this.getBuffer(this.$get);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(noRootTree.prototype, "get", {
        get: function () { return this.$get; },
        enumerable: false,
        configurable: true
    });
    /**
     * 从给定索引处截断，并返回截断部分
     * @param key
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    noRootTree.prototype.cut = function (key) {
        var len = (key % this._StackSize) - this.$get;
        if (this._StackIsFull)
            return this._StackSize - len;
        return this.pull(len < 0 ? this._StackSize + len : len);
    };
    /**
     * 删除指定长度的项目
     * @param length 删除的长度
     */
    noRootTree.prototype.del = function (length) {
        if (!length || length == 0)
            length = 1;
        if (length < 0)
            return this.clean();
        this.$get = length;
    };
    /**
     * 在叶子节点附近给定一个索引，并指定偏移量，转为一个有效的索引
     */
    noRootTree.prototype.getNextIndex = function (index, offset) {
        return DevelopersToolGlobal_1.mathMacro.PMod(index + offset, this._StackSize);
    };
    Object.defineProperty(noRootTree.prototype, "buffer", {
        get: function () {
            return this._HashList;
        },
        enumerable: false,
        configurable: true
    });
    return noRootTree;
}(RigorousLibrary_1.RigorousRingBuffer));
exports.default = noRootTree;
// import NTR from "../base/tool/NoRootTree"; // (〃´-ω･) 诶嘿~

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcTm9Sb290VHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBNkQ7QUFDN0Qsc0VBQWdFO0FBQ2hFOzs7R0FHRztBQUNIO0lBQXdDLDhCQUFrQjtJQUExRDs7SUFzRkEsQ0FBQztJQTlFRyxzQkFBa0Isa0JBQUk7UUFIdEI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBdUIsS0FBaUI7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BTkE7SUFRRDs7OztPQUlHO0lBQ0ksd0JBQUcsR0FBVixVQUFXLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixNQUFXO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBS0Qsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDJCQUFHO2FBQWQsY0FBbUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFLckMsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywyQkFBRzthQUFkLGNBQW1CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ3JDOzs7OztPQUtHO0lBQ0ksd0JBQUcsR0FBVixVQUE2QixHQUFPO1FBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNEOzs7T0FHRztJQUNJLHdCQUFHLEdBQVYsVUFBVyxNQUFlO1FBQ3RCLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxJQUFJLENBQUM7WUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxpQ0FBWSxHQUFuQixVQUFvQixLQUFhLEVBQUUsTUFBYztRQUM3QyxPQUFPLGdDQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxzQkFBVyw4QkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0F0RkEsQUFzRkMsQ0F0RnVDLG9DQUFrQixHQXNGekQ7O0FBRUQsNERBQTREIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlnb3JvdXNSaW5nQnVmZmVyIH0gZnJvbSAnLi4vY29yZS9SaWdvcm91c0xpYnJhcnknO1xyXG5pbXBvcnQgeyBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbi8qKlxyXG4gKiDml6DmoLnmoJEgXHJcbiAqIEB0aXAg5qC55o2u5b2T5YmN5ri45oiP55qE5a6a5LmJ77yM5YWl5qCI5Li65qC577yM5Ye65qCI5Li65Y+2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBub1Jvb3RUcmVlIGV4dGVuZHMgUmlnb3JvdXNSaW5nQnVmZmVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5qCR5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX05vUm9vdFRyZWU6IG5vUm9vdFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagkeWNleS+i1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB0cmVlKCkge1xyXG4gICAgICAgIHRoaXMuX05vUm9vdFRyZWUgPSB0aGlzLl9Ob1Jvb3RUcmVlIHx8IG5ldyBub1Jvb3RUcmVlKDMwKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTm9Sb290VHJlZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5qCR5Y2V5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHRyZWUodmFsdWU6IG5vUm9vdFRyZWUpIHtcclxuICAgICAgICB0aGlzLl9Ob1Jvb3RUcmVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlrZDpoblcclxuICAgICAqIEBwYXJhbSBvYmplY3QgXHJcbiAgICAgKiBAcmV0dXJucyDov5Tlm57ov5nkuKrlrZDpobnnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlj43lkJHmt7vliqDlrZDpobkgIFxyXG4gICAgICog6K2m5ZGK77ya6L+Z5piv5LiN56ym5ZCI6KeE5YiZ55qE5pa55rOV77yM6K+356Gu5L+d5qCI5rex5bqm5YWB6K645Y+N5o6o77yMXHJcbiAgICAgKiDmiJbmmK/kuI3lho3ojrflj5bmoIjmnInmlYjmt7HluqbvvIzlm6DkuLrov5nkuI3kvJrov5vooYzmnInmlYjmgKfmo4Dmn6XvvIxcclxuICAgICAqIOS8muegtOWdj+aVsOaNrui/nue7reaAp1xyXG4gICAgICogQHBhcmFtIG9iamVjdCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEZyb21Gcm9udChvYmplY3Q6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy4kZ2V0ID0gdGhpcy4kZ2V0IC0gMTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFt0aGlzLiRnZXRdID0gb2JqZWN0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRnZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagueiKgueCuVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdCgpOiBhbnkge1xyXG4gICAgICAgIGxldCBwdXQgPSB0aGlzLiRwdXQgLSAxO1xyXG4gICAgICAgIHB1dCA9IHB1dCA8IDAgPyB0aGlzLl9TdGFja1NpemUgLSAxIDogcHV0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcihwdXQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBwdXQoKSB7IHJldHVybiB0aGlzLiRwdXQgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDmnKvlrZDoioLngrlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlYWYoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIodGhpcy4kZ2V0KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZ2V0KCkgeyByZXR1cm4gdGhpcy4kZ2V0IH1cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE5oiq5pat77yM5bm26L+U5Zue5oiq5pat6YOo5YiGXHJcbiAgICAgKiBAcGFyYW0ga2V5IFxyXG4gICAgICogQHJldHVybiBvYmpbXTogb2JqMywgb2JqNC4uLlxyXG4gICAgICogQHJldHVybiBpbmRleFtdOiAzLCA0Li4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjdXQ8VCBleHRlbmRzIG51bWJlcj4oa2V5PzogVCk6IGFueSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IChrZXkgJSB0aGlzLl9TdGFja1NpemUpIC0gdGhpcy4kZ2V0O1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgcmV0dXJuIHRoaXMuX1N0YWNrU2l6ZSAtIGxlbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdWxsKGxlbiA8IDAgPyB0aGlzLl9TdGFja1NpemUgKyBsZW4gOiBsZW4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTmjIflrprplb/luqbnmoTpobnnm65cclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5Yig6Zmk55qE6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWwobGVuZ3RoPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFsZW5ndGggfHwgbGVuZ3RoID09IDApIGxlbmd0aCA9IDE7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA8IDApIHJldHVybiB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgdGhpcy4kZ2V0ID0gbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjlj7blrZDoioLngrnpmYTov5Hnu5nlrprkuIDkuKrntKLlvJXvvIzlubbmjIflrprlgY/np7vph4/vvIzovazkuLrkuIDkuKrmnInmlYjnmoTntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE5leHRJbmRleChpbmRleDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG1tLlBNb2QoaW5kZXggKyBvZmZzZXQsIHRoaXMuX1N0YWNrU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGJ1ZmZlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSGFzaExpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGltcG9ydCBOVFIgZnJvbSBcIi4uL2Jhc2UvdG9vbC9Ob1Jvb3RUcmVlXCI7IC8vICjjgIPCtC3Pie+9pSkg6K+25Zi/flxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/PanelTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64efe9poixCx6gFMYxQOlei', 'PanelTool');
// scripts/base/tool/PanelTool.ts

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
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelTool = /** @class */ (function (_super) {
    __extends(PanelTool, _super);
    function PanelTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._generalLayer = ['BackgroundLayer', 'EternalityUILayer', 'DynamicUILayer'];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    PanelTool.prototype.onLoad = function () {
        var layers = this.node.children;
        /**
         * 可用的剩余层
         */
        var residueLayersName = this._generalLayer;
        for (var layerIndex = 0; layerIndex < layers.length; layerIndex++) {
            var layer = layers[layerIndex];
            if (layer.getComponent(cc.Camera))
                continue;
            for (var nameIndex = 0; nameIndex < residueLayersName.length; nameIndex++) {
                if (layer.name == residueLayersName[nameIndex]) {
                    residueLayersName[nameIndex] = null;
                    var nowlayer = layers[layerIndex];
                    DevelopersToolGlobal_1.DevelopersToolGlobal.layer = nowlayer;
                    this.LayerDefaultSetting(nowlayer);
                    break;
                }
            }
        }
    };
    /**
     * 层初始设定
     * @param node
     */
    PanelTool.prototype.LayerDefaultSetting = function (node) {
        node.active = false;
    };
    __decorate([
        property({
            type: cc.String,
            displayName: '通用层名单',
            tooltip: '层按放置顺序设定优先级，与名称顺序无关，默认关闭所有层级，需要在canvas下的脚本进行打开',
            visible: true,
        })
    ], PanelTool.prototype, "_generalLayer", void 0);
    PanelTool = __decorate([
        ccclass
    ], PanelTool);
    return PanelTool;
}(cc.Component));
exports.default = PanelTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcUGFuZWxUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE2RTtBQUV2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTJDQztRQW5DRyxtQkFBYSxHQUFhLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7SUFtQ3pGLENBQUM7SUFqQ0csd0JBQXdCO0lBQ3hCLDBCQUFNLEdBQU47UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQzs7V0FFRztRQUNILElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxLQUFLLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtZQUMvRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQUUsU0FBUztZQUU1QyxLQUFLLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUV2RSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzVDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDcEMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNsQywyQ0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbkMsTUFBTTtpQkFDVDthQUNKO1NBQ0o7SUFFTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sdUNBQW1CLEdBQTdCLFVBQThCLElBQWE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQWpDRDtRQU5DLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTTtZQUNmLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxnREFBZ0Q7WUFDekQsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQztvREFDbUY7SUFScEUsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTJDN0I7SUFBRCxnQkFBQztDQTNDRCxBQTJDQyxDQTNDc0MsRUFBRSxDQUFDLFNBQVMsR0EyQ2xEO2tCQTNDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuLi9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbFRvb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuU3RyaW5nLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAn6YCa55So5bGC5ZCN5Y2VJyxcclxuICAgICAgICB0b29sdGlwOiAn5bGC5oyJ5pS+572u6aG65bqP6K6+5a6a5LyY5YWI57qn77yM5LiO5ZCN56ew6aG65bqP5peg5YWz77yM6buY6K6k5YWz6Zet5omA5pyJ5bGC57qn77yM6ZyA6KaB5ZyoY2FudmFz5LiL55qE6ISa5pys6L+b6KGM5omT5byAJyxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIF9nZW5lcmFsTGF5ZXI6IHN0cmluZ1tdID0gWydCYWNrZ3JvdW5kTGF5ZXInLCAnRXRlcm5hbGl0eVVJTGF5ZXInLCAnRHluYW1pY1VJTGF5ZXInXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgbGF5ZXJzID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWPr+eUqOeahOWJqeS9meWxglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCByZXNpZHVlTGF5ZXJzTmFtZSA9IHRoaXMuX2dlbmVyYWxMYXllcjtcclxuICAgICAgICBmb3IgKGxldCBsYXllckluZGV4ID0gMDsgbGF5ZXJJbmRleCA8IGxheWVycy5sZW5ndGg7IGxheWVySW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSBsYXllcnNbbGF5ZXJJbmRleF07XHJcbiAgICAgICAgICAgIGlmIChsYXllci5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBuYW1lSW5kZXggPSAwOyBuYW1lSW5kZXggPCByZXNpZHVlTGF5ZXJzTmFtZS5sZW5ndGg7IG5hbWVJbmRleCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLm5hbWUgPT0gcmVzaWR1ZUxheWVyc05hbWVbbmFtZUluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2lkdWVMYXllcnNOYW1lW25hbWVJbmRleF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3dsYXllciA9IGxheWVyc1tsYXllckluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBjY3Z2LmxheWVyID0gbm93bGF5ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5MYXllckRlZmF1bHRTZXR0aW5nKG5vd2xheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsYLliJ3lp4vorr7lrppcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgTGF5ZXJEZWZhdWx0U2V0dGluZyhub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/SoundListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '482e6yALgdGZJm98Ml19+Op', 'SoundListener');
// scripts/base/tool/SoundListener.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, disallowMultiple = _a.disallowMultiple, help = _a.help;
var SoundListener = /** @class */ (function (_super) {
    __extends(SoundListener, _super);
    function SoundListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    SoundListener.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], SoundListener.prototype, "label", void 0);
    __decorate([
        property
    ], SoundListener.prototype, "text", void 0);
    SoundListener = __decorate([
        ccclass,
        menu('Audio/SoundListener'),
        help('https://github.com/2128cz/CocosCopilot'),
        disallowMultiple
    ], SoundListener);
    return SoundListener;
}(cc.Component));
exports.default = SoundListener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcU291bmRMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNELEVBQUUsQ0FBQyxVQUFVLEVBQWpFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQU0xRTtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDZCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDSTtJQUd2QjtRQURDLFFBQVE7K0NBQ2M7SUFOTixhQUFhO1FBSmpDLE9BQU87UUFDUCxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDM0IsSUFBSSxDQUFDLHdDQUF3QyxDQUFDO1FBQzlDLGdCQUFnQjtPQUNJLGFBQWEsQ0FpQmpDO0lBQUQsb0JBQUM7Q0FqQkQsQUFpQkMsQ0FqQjBDLEVBQUUsQ0FBQyxTQUFTLEdBaUJ0RDtrQkFqQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSwgZGlzYWxsb3dNdWx0aXBsZSwgaGVscCB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBtZW51KCdBdWRpby9Tb3VuZExpc3RlbmVyJylcclxuQGhlbHAoJ2h0dHBzOi8vZ2l0aHViLmNvbS8yMTI4Y3ovQ29jb3NDb3BpbG90JylcclxuQGRpc2FsbG93TXVsdGlwbGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRMaXN0ZW5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/GridAdsorb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d30d0AcIhN+4RMZHACz6v2', 'GridAdsorb');
// scripts/base/tool/GridAdsorb.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../class/DevelopersToolGlobal");
var GridAbsorb_Private = /** @class */ (function () {
    /**
     * 网格对齐
     * 创建的同时，如果类单例中不存在实例，则将此实例赋予到类单例中
     */
    function GridAbsorb_Private(axisNum, cellSize) {
        // 晶胞尺寸
        this._CellSize = new cc.Vec3(100);
        // 网格计算原点偏移
        this._GridOffset = new cc.Vec3(0);
        // 网格总尺寸
        this._GridSize = null;
        // 各轴晶胞数量
        this._GridAxisCellNum = new cc.Vec3(100);
        // 网格中心锚点
        this._GridEdgeAnchor = new cc.Vec3(.5);
        if (axisNum) {
            this._GridAxisCellNum = axisNum;
            if (cellSize) {
                this._CellSize = cellSize;
                this._GridSize = new cc.Vec3(axisNum.x * cellSize.x, axisNum.y * cellSize.y, axisNum.z * cellSize.z);
            }
        }
        if (!GridAbsorb._ExclusiveGrid) {
            GridAbsorb._ExclusiveGrid = this;
        }
    }
    // SIGNPOST 网格查找                                                                                
    /**
     * 从各轴索引获得网格坐标
     * cocos和unity都是y轴向上，xz为平面
     * 为了适配平面坐标，z为深度轴
     * 通常情况下网格原点为0，而索引0在底部，如果需要0在原点首先需要将偏移量向上移动整个网格尺寸的一半
     * @param {intVec3} index
     * @return {int}
     */
    GridAbsorb_Private.prototype.getGridPositionByIndex = function (index) {
        var self = this;
        function getPos(axis) {
            // 索引限制
            var axisIndex = DevelopersToolGlobal_1.mathMacro.PMod(Math.floor(index[axis]), self._GridAxisCellNum[axis]);
            // 索引坐标
            var axisPos = axisIndex * self._CellSize[axis] + self._GridOffset[axis];
            // 归一化
            var normalPos = DevelopersToolGlobal_1.mathMacro.PMod(axisPos / self._GridSize[axis], 1);
            normalPos - normalPos - Math.floor(normalPos);
            return (normalPos + (self._GridEdgeAnchor[axis] - .5)) * self._GridSize[axis];
        }
        var x = getPos('x');
        var y = getPos('y');
        if (index instanceof cc.Vec3) {
            var z = getPos('z');
            return new cc.Vec3(x, y, z);
        }
        return new cc.Vec2(x, y);
    };
    GridAbsorb_Private._ExclusiveGrid = null;
    return GridAbsorb_Private;
}());
var GridAbsorb = /** @class */ (function (_super) {
    __extends(GridAbsorb, _super);
    function GridAbsorb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GridAbsorb, "grid", {
        /**
         * 获取静态唯一网格实例
         */
        get: function () {
            this._ExclusiveGrid = this._ExclusiveGrid || new GridAbsorb();
            return this._ExclusiveGrid;
        },
        /**
         * 将实例设置到静态唯一网格实例
         */
        set: function (grid) {
            this._ExclusiveGrid = grid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "offset", {
        /**
         * 获取网格偏移量
         */
        get: function () {
            return this._GridOffset;
        },
        /**
         * 设置网格偏移量
         */
        set: function (offset) {
            var self = this;
            var newOffset = this._GridOffset.add(offset);
            function vecMod(axis) {
                return newOffset[axis] % self.gridSize[axis];
            }
            this._GridOffset = new cc.Vec3(vecMod('x'), vecMod('y'), vecMod('z'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "cellSize", {
        /**
         * 获取单元格尺寸
         */
        get: function () {
            return this._CellSize;
        },
        /**
         * 设置单元格尺寸
         */
        set: function (size) {
            this._CellSize = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "cellNum", {
        /**
         * 获取网格轴晶格数量
         */
        get: function () {
            return this._GridAxisCellNum;
        },
        /**
         * 设置网格轴晶格数量
         */
        set: function (num) {
            this._GridAxisCellNum = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "gridSize", {
        /**
         * 获取网格尺寸
         */
        get: function () {
            return this._GridSize;
        },
        /**
         * 设置网格尺寸
         */
        set: function (size) {
            this._GridSize = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridAbsorb.prototype, "anchor", {
        /**
         * 获取网格边缘锚点
         * 取值在[0, 1]
         */
        get: function () {
            return this._GridEdgeAnchor;
            // function toAlige(vec: cc.Vec2) {
            //     return (vec.x - vec.y + 1) / 2;
            // }
            // return new cc.Vec3(
            //     toAlige(this._GridEdgeAnchor_X),
            //     toAlige(this._GridEdgeAnchor_Y),
            //     toAlige(this._GridEdgeAnchor_Z)
            // );
        },
        /**
         * 设置网格边缘锚点
         * 取值在[0, 1]，跟随引擎
         */
        set: function (anchor) {
            var Anchor = anchor.normalize();
            Anchor.x = Math.abs(Anchor.x);
            Anchor.y = Math.abs(Anchor.y);
            Anchor.z = Math.abs(Anchor.z);
            this._GridEdgeAnchor = Anchor;
            // function toAnchor(num: number) {
            //     if (!num) return new cc.Vec2(.5);
            //     let axis = Math.max(Math.min(num, 1), 0) - .5;
            //     return new cc.Vec2(.5 - axis, .5 + axis);
            // }
            // this._GridEdgeAnchor_X = toAnchor(anchor.x);
            // this._GridEdgeAnchor_Y = toAnchor(anchor.y);
            // this._GridEdgeAnchor_Z = toAnchor(anchor.z);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 设置坐标
     * 用于与官方设置方法匹配
     */
    GridAbsorb.prototype.setPosition = function (pos) {
        this._GridOffset = pos;
    };
    /**
     * 获取坐标
     * 用于与官方设置方法匹配
     */
    GridAbsorb.prototype.getPosition = function () {
        return this._GridOffset;
    };
    return GridAbsorb;
}(GridAbsorb_Private));
exports.default = GridAbsorb;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcR3JpZEFkc29yYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBZ0U7QUFDaEU7SUFHSTs7O09BR0c7SUFDSCw0QkFBWSxPQUFpQixFQUFFLFFBQWtCO1FBZ0JqRCxPQUFPO1FBQ0csY0FBUyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxXQUFXO1FBQ0QsZ0JBQVcsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsUUFBUTtRQUNFLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDcEMsU0FBUztRQUNDLHFCQUFnQixHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxTQUFTO1FBQ0Msb0JBQWUsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUF4QmpELElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztZQUNoQyxJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ3hCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUN0QixPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQ3pCLENBQUM7YUFDTDtTQUNKO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7WUFDNUIsVUFBVSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBWUQsZ0dBQWdHO0lBRWhHOzs7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LENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixtQ0FBbUM7WUFDbkMsd0NBQXdDO1lBQ3hDLHFEQUFxRDtZQUNyRCxnREFBZ0Q7WUFDaEQsSUFBSTtZQUNKLCtDQUErQztZQUMvQywrQ0FBK0M7WUFDL0MsK0NBQStDO1FBQ25ELENBQUM7OztPQW5CQTtJQXFCRDs7O09BR0c7SUFDSSxnQ0FBVyxHQUFsQixVQUFtQixHQUFZO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQTNIQSxBQTJIQyxDQTNIdUMsa0JBQWtCLEdBMkh6RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuY2xhc3MgR3JpZEFic29yYl9Qcml2YXRlIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0V4Y2x1c2l2ZUdyaWQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog572R5qC85a+56b2QXHJcbiAgICAgKiDliJvlu7rnmoTlkIzml7bvvIzlpoLmnpznsbvljZXkvovkuK3kuI3lrZjlnKjlrp7kvovvvIzliJnlsIbmraTlrp7kvovotYvkuojliLDnsbvljZXkvovkuK1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYXhpc051bT86IGNjLlZlYzMsIGNlbGxTaXplPzogY2MuVmVjMykge1xyXG4gICAgICAgIGlmIChheGlzTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0dyaWRBeGlzQ2VsbE51bSA9IGF4aXNOdW07XHJcbiAgICAgICAgICAgIGlmIChjZWxsU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fQ2VsbFNpemUgPSBjZWxsU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX0dyaWRTaXplID0gbmV3IGNjLlZlYzMoXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpc051bS54ICogY2VsbFNpemUueCxcclxuICAgICAgICAgICAgICAgICAgICBheGlzTnVtLnkgKiBjZWxsU2l6ZS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNOdW0ueiAqIGNlbGxTaXplLnpcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFHcmlkQWJzb3JiLl9FeGNsdXNpdmVHcmlkKSB7XHJcbiAgICAgICAgICAgIEdyaWRBYnNvcmIuX0V4Y2x1c2l2ZUdyaWQgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOaZtuiDnuWwuuWvuFxyXG4gICAgcHJvdGVjdGVkIF9DZWxsU2l6ZTogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDEwMCk7XHJcbiAgICAvLyDnvZHmoLzorqHnrpfljp/ngrnlgY/np7tcclxuICAgIHByb3RlY3RlZCBfR3JpZE9mZnNldDogY2MuVmVjMyA9IG5ldyBjYy5WZWMzKDApO1xyXG4gICAgLy8g572R5qC85oC75bC65a+4XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRTaXplOiBjYy5WZWMzID0gbnVsbDtcclxuICAgIC8vIOWQhOi9tOaZtuiDnuaVsOmHj1xyXG4gICAgcHJvdGVjdGVkIF9HcmlkQXhpc0NlbGxOdW06IGNjLlZlYzMgPSBuZXcgY2MuVmVjMygxMDApO1xyXG4gICAgLy8g572R5qC85Lit5b+D6ZSa54K5XHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRFZGdlQW5jaG9yOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoLjUpO1xyXG5cclxuICAgIC8vIFNJR05QT1NUIOe9keagvOafpeaJviAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqIFxyXG4gICAgICog5LuO5ZCE6L2057Si5byV6I635b6X572R5qC85Z2Q5qCHICBcclxuICAgICAqIGNvY29z5ZKMdW5pdHnpg73mmK956L205ZCR5LiK77yMeHrkuLrlubPpnaIgIFxyXG4gICAgICog5Li65LqG6YCC6YWN5bmz6Z2i5Z2Q5qCH77yMeuS4uua3seW6pui9tCAgXHJcbiAgICAgKiDpgJrluLjmg4XlhrXkuIvnvZHmoLzljp/ngrnkuLow77yM6ICM57Si5byVMOWcqOW6lemDqO+8jOWmguaenOmcgOimgTDlnKjljp/ngrnpppblhYjpnIDopoHlsIblgY/np7vph4/lkJHkuIrnp7vliqjmlbTkuKrnvZHmoLzlsLrlr7jnmoTkuIDljYpcclxuICAgICAqIEBwYXJhbSB7aW50VmVjM30gaW5kZXhcclxuICAgICAqIEByZXR1cm4ge2ludH1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEdyaWRQb3NpdGlvbkJ5SW5kZXg8VCBleHRlbmRzIGNjLlZlYzMgfCBjYy5WZWMyPihpbmRleDogVCk6IFQge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmdW5jdGlvbiBnZXRQb3MoYXhpczogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgLy8g57Si5byV6ZmQ5Yi2XHJcbiAgICAgICAgICAgIGxldCBheGlzSW5kZXggPSBtbS5QTW9kKE1hdGguZmxvb3IoaW5kZXhbYXhpc10pLCBzZWxmLl9HcmlkQXhpc0NlbGxOdW1bYXhpc10pO1xyXG4gICAgICAgICAgICAvLyDntKLlvJXlnZDmoIdcclxuICAgICAgICAgICAgbGV0IGF4aXNQb3MgPSBheGlzSW5kZXggKiBzZWxmLl9DZWxsU2l6ZVtheGlzXSArIHNlbGYuX0dyaWRPZmZzZXRbYXhpc107XHJcbiAgICAgICAgICAgIC8vIOW9kuS4gOWMllxyXG4gICAgICAgICAgICBsZXQgbm9ybWFsUG9zID0gbW0uUE1vZChheGlzUG9zIC8gc2VsZi5fR3JpZFNpemVbYXhpc10sIDEpO1xyXG4gICAgICAgICAgICBub3JtYWxQb3MgLSBub3JtYWxQb3MgLSBNYXRoLmZsb29yKG5vcm1hbFBvcyk7XHJcbiAgICAgICAgICAgIHJldHVybiAobm9ybWFsUG9zICsgKHNlbGYuX0dyaWRFZGdlQW5jaG9yW2F4aXNdIC0gLjUpKSAqIHNlbGYuX0dyaWRTaXplW2F4aXNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeCA9IGdldFBvcygneCcpO1xyXG4gICAgICAgIGxldCB5ID0gZ2V0UG9zKCd5Jyk7XHJcbiAgICAgICAgaWYgKGluZGV4IGluc3RhbmNlb2YgY2MuVmVjMykge1xyXG4gICAgICAgICAgICBsZXQgeiA9IGdldFBvcygneicpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzMoeCwgeSwgeikgYXMgVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKHgsIHkpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRBYnNvcmIgZXh0ZW5kcyBHcmlkQWJzb3JiX1ByaXZhdGUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6Z2Z5oCB5ZSv5LiA572R5qC85a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdyaWQoKSB7XHJcbiAgICAgICAgdGhpcy5fRXhjbHVzaXZlR3JpZCA9IHRoaXMuX0V4Y2x1c2l2ZUdyaWQgfHwgbmV3IEdyaWRBYnNvcmIoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9FeGNsdXNpdmVHcmlkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblrp7kvovorr7nva7liLDpnZnmgIHllK/kuIDnvZHmoLzlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgZ3JpZChncmlkOiBHcmlkQWJzb3JiKSB7XHJcbiAgICAgICAgdGhpcy5fRXhjbHVzaXZlR3JpZCA9IGdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnvZHmoLzlgY/np7vph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvZmZzZXQoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rue9keagvOWBj+enu+mHjyAgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb2Zmc2V0KG9mZnNldDogY2MuVmVjMykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbmV3T2Zmc2V0ID0gdGhpcy5fR3JpZE9mZnNldC5hZGQob2Zmc2V0KTtcclxuICAgICAgICBmdW5jdGlvbiB2ZWNNb2QoYXhpczogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld09mZnNldFtheGlzXSAlIHNlbGYuZ3JpZFNpemVbYXhpc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX0dyaWRPZmZzZXQgPSBuZXcgY2MuVmVjMyh2ZWNNb2QoJ3gnKSwgdmVjTW9kKCd5JyksIHZlY01vZCgneicpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Y2V5YWD5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2VsbFNpemUoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NlbGxTaXplO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ljZXlhYPmoLzlsLrlr7hcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjZWxsU2l6ZShzaXplOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgdGhpcy5fQ2VsbFNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W572R5qC86L205pm25qC85pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2VsbE51bSgpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZEF4aXNDZWxsTnVtO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nvZHmoLzovbTmmbbmoLzmlbDph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjZWxsTnVtKG51bTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0dyaWRBeGlzQ2VsbE51bSA9IG51bTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlue9keagvOWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdyaWRTaXplKCk6IGNjLlZlYzMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkU2l6ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC85bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ3JpZFNpemUoc2l6ZTogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0dyaWRTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlue9keagvOi+uee8mOmUmueCuSAgXHJcbiAgICAgKiDlj5blgLzlnKhbMCwgMV1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhbmNob3IoKTogY2MuVmVjMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWRFZGdlQW5jaG9yO1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvQWxpZ2UodmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAodmVjLnggLSB2ZWMueSArIDEpIC8gMjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBjYy5WZWMzKFxyXG4gICAgICAgIC8vICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1gpLFxyXG4gICAgICAgIC8vICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1kpLFxyXG4gICAgICAgIC8vICAgICB0b0FsaWdlKHRoaXMuX0dyaWRFZGdlQW5jaG9yX1opXHJcbiAgICAgICAgLy8gKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u572R5qC86L6557yY6ZSa54K5XHJcbiAgICAgKiDlj5blgLzlnKhbMCwgMV3vvIzot5/pmo/lvJXmk45cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhbmNob3IoYW5jaG9yOiBjYy5WZWMzKSB7XHJcbiAgICAgICAgbGV0IEFuY2hvciA9IGFuY2hvci5ub3JtYWxpemUoKTtcclxuICAgICAgICBBbmNob3IueCA9IE1hdGguYWJzKEFuY2hvci54KTtcclxuICAgICAgICBBbmNob3IueSA9IE1hdGguYWJzKEFuY2hvci55KTtcclxuICAgICAgICBBbmNob3IueiA9IE1hdGguYWJzKEFuY2hvci56KTtcclxuICAgICAgICB0aGlzLl9HcmlkRWRnZUFuY2hvciA9IEFuY2hvcjtcclxuICAgICAgICAvLyBmdW5jdGlvbiB0b0FuY2hvcihudW06IG51bWJlcikge1xyXG4gICAgICAgIC8vICAgICBpZiAoIW51bSkgcmV0dXJuIG5ldyBjYy5WZWMyKC41KTtcclxuICAgICAgICAvLyAgICAgbGV0IGF4aXMgPSBNYXRoLm1heChNYXRoLm1pbihudW0sIDEpLCAwKSAtIC41O1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gbmV3IGNjLlZlYzIoLjUgLSBheGlzLCAuNSArIGF4aXMpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLl9HcmlkRWRnZUFuY2hvcl9YID0gdG9BbmNob3IoYW5jaG9yLngpO1xyXG4gICAgICAgIC8vIHRoaXMuX0dyaWRFZGdlQW5jaG9yX1kgPSB0b0FuY2hvcihhbmNob3IueSk7XHJcbiAgICAgICAgLy8gdGhpcy5fR3JpZEVkZ2VBbmNob3JfWiA9IHRvQW5jaG9yKGFuY2hvci56KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWdkOaghyAgXHJcbiAgICAgKiDnlKjkuo7kuI7lrpjmlrnorr7nva7mlrnms5XljLnphY1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHBvczogY2MuVmVjMykge1xyXG4gICAgICAgIHRoaXMuX0dyaWRPZmZzZXQgPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blnZDmoIcgIFxyXG4gICAgICog55So5LqO5LiO5a6Y5pa56K6+572u5pa55rOV5Yy56YWNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBjYy5WZWMzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZE9mZnNldDtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/BlockGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e2194MCANHsq+QyrRQ9KnJ', 'BlockGroup');
// scripts/game/BlockGroup.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var SoundPlayer_1 = require("../base/tool/SoundPlayer");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BlockGroup = /** @class */ (function (_super) {
    __extends(BlockGroup, _super);
    function BlockGroup() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tag 用户参数，宏
        /**
         * 此组代表的索引
         */
        _this._GridIndex = null;
        /**
         * 处于此组下方的组
         */
        _this._LastGroup = null;
        /**
         * 处于此组上方的组
         */
        _this._NextGroup = null;
        /**
         * 需要自动初始化
         */
        _this._NeedStart = true;
        /**
         * 需要检查成员标记
         */
        _this._NeedCheckMem = false;
        return _this;
    }
    // onLoad () {}
    BlockGroup.prototype.start = function () {
        // 随机地图
        if (this._NeedStart) {
            this.randomizeCubeLine();
        }
    };
    BlockGroup.prototype.update = function (dt) {
        // 检查成员是否满了？
        if (this.needCheckMem) {
            var children = this.node.children.filter(function (value) { return value.isValid; });
            if (children.length >= Setting_1.default.Game_Column) {
                // 满了就销毁，并加分
                Setting_1.default.score_add = this.destroyMembers();
                // 然后将上一个设为最后一组
                Setting_1.default.endCubeGroup = this._NextGroup;
            }
        }
        // 更新自己的坐标
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec3(0, this._GridIndex, 0));
        this.node.setPosition(0, pos.y, 0);
    };
    // tag 用户函数
    /**
     * 任何情况下诞生都应该调用初始化
     * @param index
     * @param lastGroup
     * @param nextGroup
     */
    BlockGroup.prototype.init = function (index, lastGroup, nextGroup) {
        this._GridIndex = index;
        if (lastGroup) {
            lastGroup._NextGroup = this;
            this._LastGroup = lastGroup;
        }
        if (nextGroup) {
            nextGroup._LastGroup = this;
            this._NextGroup = nextGroup;
        }
        // 如果诞生时最后一行方块在我的上面
        if (!Setting_1.default.endCubeGroup || Setting_1.default.endCubeGroup.node.y > this.node.y) {
            // 那我才是最后一个仔
            Setting_1.default.endCubeGroup = this;
        }
    };
    /**
     * 随机化剩余方块
     */
    BlockGroup.prototype.randomizeCubeLine = function () {
        var child = this.node.children;
        var perch = [];
        var loop = 7; // 机会
        while (loop--) {
            var curcol = Math.floor(Math.random() * child.length);
            if (perch.indexOf(curcol) < 0)
                perch.push(curcol);
            if (perch.length >= (child.length - 1))
                break;
        }
        this.node.children.forEach(function (element, index) {
            if (perch.indexOf(index) <= 0)
                element.destroy();
        });
    };
    /**
     * 消除这行及以下的所有成员
     *
     */
    BlockGroup.prototype.destroyMembers = function (palyEffect) {
        if (palyEffect === void 0) { palyEffect = true; }
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_des2);
        var allChildren = this.findAllChildren(this);
        allChildren.forEach(function (element) {
            // 将每个成员都替换为销毁效果节点
            var component = element.getComponent(Setting_1.default.blockName);
            if (component)
                component.destroyWithAnimation();
        });
        // 这行消除效果
        if (palyEffect) {
            var inst = cc.instantiate(Setting_1.default.Effect_Destory);
            this.node.addChild(inst);
        }
        return allChildren.length;
    };
    /**
     * 向下寻找所有成员
     * @param group
     * @returns
     */
    BlockGroup.prototype.findAllChildren = function (group) {
        if (group.node) {
            var groupChildren = group.node.children;
            if (group._LastGroup)
                groupChildren = __spreadArrays(groupChildren, this.findAllChildren(group._LastGroup));
            return groupChildren;
        }
        return [];
    };
    Object.defineProperty(BlockGroup.prototype, "gridIndex", {
        get: function () { return this._GridIndex; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "lastGroup", {
        get: function () { return this._LastGroup; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "nextGroup", {
        get: function () { return this._NextGroup; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockGroup.prototype, "needStart", {
        set: function (value) { this._NeedStart = value; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BlockGroup.prototype, "needCheckMem", {
        get: function () {
            if (this._NeedCheckMem) {
                this._NeedCheckMem = false;
                return true;
            }
            else
                return false;
        },
        set: function (value) { this._NeedCheckMem = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    BlockGroup = __decorate([
        ccclass
    ], BlockGroup);
    return BlockGroup;
}(cc.Component));
exports.default = BlockGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2tHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELHdEQUF1RDtBQUN2RCxxQ0FBMkI7QUFFckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFFSSx3QkFBd0I7UUFGNUIscUVBZ0pDO1FBL0JHLGFBQWE7UUFFYjs7V0FFRztRQUNPLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRXBDOztXQUVHO1FBQ08sZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFeEM7O1dBRUc7UUFDTyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUV4Qzs7V0FFRztRQUNPLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRXJDOztXQUVHO1FBQ08sbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBTTdDLENBQUM7SUE1SUcsZUFBZTtJQUVmLDBCQUFLLEdBQUw7UUFDSSxPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzVCO0lBRUwsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsWUFBWTtRQUNaLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQU0sT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLGlCQUFFLENBQUMsV0FBVyxFQUFFO2dCQUNuQyxZQUFZO2dCQUNaLGlCQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FB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L0QsT0FBTyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUpELFVBQXdCLEtBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUl0RSxDQUFDO0lBL0llLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FnSjlCO0lBQUQsaUJBQUM7Q0FoSkQsQUFnSkMsQ0FoSnVDLEVBQUUsQ0FBQyxTQUFTLEdBZ0puRDtrQkFoSm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYic7XHJcbmltcG9ydCB7IFNvdW5kUGxheWVyIH0gZnJvbSAnLi4vYmFzZS90b29sL1NvdW5kUGxheWVyJztcclxuaW1wb3J0IHNzIGZyb20gXCIuL1NldHRpbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0dyb3VwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyDpmo/mnLrlnLDlm75cclxuICAgICAgICBpZiAodGhpcy5fTmVlZFN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplQ3ViZUxpbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIOajgOafpeaIkOWRmOaYr+WQpua7oeS6hu+8n1xyXG4gICAgICAgIGlmICh0aGlzLm5lZWRDaGVja01lbSkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLm5vZGUuY2hpbGRyZW4uZmlsdGVyKHZhbHVlID0+IHsgcmV0dXJuIHZhbHVlLmlzVmFsaWQgfSk7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPj0gc3MuR2FtZV9Db2x1bW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIOa7oeS6huWwsemUgOavge+8jOW5tuWKoOWIhlxyXG4gICAgICAgICAgICAgICAgc3Muc2NvcmVfYWRkID0gdGhpcy5kZXN0cm95TWVtYmVycygpO1xyXG4gICAgICAgICAgICAgICAgLy8g54S25ZCO5bCG5LiK5LiA5Liq6K6+5Li65pyA5ZCO5LiA57uEXHJcbiAgICAgICAgICAgICAgICBzcy5lbmRDdWJlR3JvdXAgPSB0aGlzLl9OZXh0R3JvdXA7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOabtOaWsOiHquW3seeahOWdkOagh1xyXG4gICAgICAgIGxldCBwb3MgPSBHcmlkQWJzb3JiLmdyaWQuZ2V0R3JpZFBvc2l0aW9uQnlJbmRleChuZXcgY2MuVmVjMygwLCB0aGlzLl9HcmlkSW5kZXgsIDApKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgcG9zLnksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflh73mlbBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7u+S9leaDheWGteS4i+ivnueUn+mDveW6lOivpeiwg+eUqOWIneWni+WMllxyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICogQHBhcmFtIGxhc3RHcm91cCBcclxuICAgICAqIEBwYXJhbSBuZXh0R3JvdXAgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KGluZGV4OiBudW1iZXIsIGxhc3RHcm91cDogQmxvY2tHcm91cCwgbmV4dEdyb3VwPzogQmxvY2tHcm91cCkge1xyXG4gICAgICAgIHRoaXMuX0dyaWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGlmIChsYXN0R3JvdXApIHtcclxuICAgICAgICAgICAgbGFzdEdyb3VwLl9OZXh0R3JvdXAgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9MYXN0R3JvdXAgPSBsYXN0R3JvdXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXh0R3JvdXApIHtcclxuICAgICAgICAgICAgbmV4dEdyb3VwLl9MYXN0R3JvdXAgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9OZXh0R3JvdXAgPSBuZXh0R3JvdXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOivnueUn+aXtuacgOWQjuS4gOihjOaWueWdl+WcqOaIkeeahOS4iumdolxyXG4gICAgICAgIGlmICghc3MuZW5kQ3ViZUdyb3VwIHx8IHNzLmVuZEN1YmVHcm91cC5ub2RlLnkgPiB0aGlzLm5vZGUueSkge1xyXG4gICAgICAgICAgICAvLyDpgqPmiJHmiY3mmK/mnIDlkI7kuIDkuKrku5RcclxuICAgICAgICAgICAgc3MuZW5kQ3ViZUdyb3VwID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrljJbliankvZnmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByYW5kb21pemVDdWJlTGluZSgpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLm5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IHBlcmNoID0gW11cclxuICAgICAgICBsZXQgbG9vcCA9IDc7IC8vIOacuuS8mlxyXG4gICAgICAgIHdoaWxlIChsb29wLS0pIHtcclxuICAgICAgICAgICAgbGV0IGN1cmNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoaWxkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChwZXJjaC5pbmRleE9mKGN1cmNvbCkgPCAwKVxyXG4gICAgICAgICAgICAgICAgcGVyY2gucHVzaChjdXJjb2wpO1xyXG4gICAgICAgICAgICBpZiAocGVyY2gubGVuZ3RoID49IChjaGlsZC5sZW5ndGggLSAxKSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGVyY2guaW5kZXhPZihpbmRleCkgPD0gMClcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5raI6Zmk6L+Z6KGM5Y+K5Lul5LiL55qE5omA5pyJ5oiQ5ZGYXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlc3Ryb3lNZW1iZXJzKHBhbHlFZmZlY3QgPSB0cnVlKTogbnVtYmVyIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9kZXMyKTtcclxuXHJcbiAgICAgICAgbGV0IGFsbENoaWxkcmVuID0gdGhpcy5maW5kQWxsQ2hpbGRyZW4odGhpcyk7XHJcbiAgICAgICAgYWxsQ2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy8g5bCG5q+P5Liq5oiQ5ZGY6YO95pu/5o2i5Li66ZSA5q+B5pWI5p6c6IqC54K5XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50LmdldENvbXBvbmVudChzcy5ibG9ja05hbWUpO1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3lXaXRoQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g6L+Z6KGM5raI6Zmk5pWI5p6cXHJcbiAgICAgICAgaWYgKHBhbHlFZmZlY3QpIHtcclxuICAgICAgICAgICAgbGV0IGluc3QgPSBjYy5pbnN0YW50aWF0ZShzcy5FZmZlY3RfRGVzdG9yeSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpbnN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENoaWxkcmVuLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWQkeS4i+Wvu+aJvuaJgOacieaIkOWRmFxyXG4gICAgICogQHBhcmFtIGdyb3VwIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmaW5kQWxsQ2hpbGRyZW4oZ3JvdXA6IEJsb2NrR3JvdXApOiBjYy5Ob2RlW10ge1xyXG4gICAgICAgIGlmIChncm91cC5ub2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cENoaWxkcmVuOiBjYy5Ob2RlW10gPSBncm91cC5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXAuX0xhc3RHcm91cClcclxuICAgICAgICAgICAgICAgIGdyb3VwQ2hpbGRyZW4gPSBbLi4uZ3JvdXBDaGlsZHJlbiwgLi4udGhpcy5maW5kQWxsQ2hpbGRyZW4oZ3JvdXAuX0xhc3RHcm91cCldO1xyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBDaGlsZHJlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDnlKjmiLflj4LmlbDvvIzlro9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOatpOe7hOS7o+ihqOeahOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0dyaWRJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgZ3JpZEluZGV4KCkgeyByZXR1cm4gdGhpcy5fR3JpZEluZGV4IH1cclxuICAgIC8qKlxyXG4gICAgICog5aSE5LqO5q2k57uE5LiL5pa555qE57uEXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTGFzdEdyb3VwOiBCbG9ja0dyb3VwID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgbGFzdEdyb3VwKCkgeyByZXR1cm4gdGhpcy5fTGFzdEdyb3VwIH1cclxuICAgIC8qKlxyXG4gICAgICog5aSE5LqO5q2k57uE5LiK5pa555qE57uEXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTmV4dEdyb3VwOiBCbG9ja0dyb3VwID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgbmV4dEdyb3VwKCkgeyByZXR1cm4gdGhpcy5fTmV4dEdyb3VwIH1cclxuICAgIC8qKlxyXG4gICAgICog6ZyA6KaB6Ieq5Yqo5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfTmVlZFN0YXJ0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzZXQgbmVlZFN0YXJ0KHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX05lZWRTdGFydCA9IHZhbHVlIH07XHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeajgOafpeaIkOWRmOagh+iusFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX05lZWRDaGVja01lbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNldCBuZWVkQ2hlY2tNZW0odmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fTmVlZENoZWNrTWVtID0gdmFsdWUgfTtcclxuICAgIHB1YmxpYyBnZXQgbmVlZENoZWNrTWVtKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9OZWVkQ2hlY2tNZW0pIHsgdGhpcy5fTmVlZENoZWNrTWVtID0gZmFsc2U7IHJldHVybiB0cnVlOyB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/deprecated-Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12476rd71BFcaFmWMJbv/Hz', 'deprecated-Block');
// scripts/game/deprecated-Block.ts

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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnClass_1 = require("../base/class/PawnClass");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var block = /** @class */ (function (_super) {
    __extends(block, _super);
    /**
     * @deprecated 已有更好的方法
     */
    function block() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // SIGNPOST macro                                                                                        
        /**
         * 所处树节点索引
         * 当处于玩家阵营时，此索引无效
         */
        _this._TreeIndex = null;
        _this._ColNode = null;
        _this._ColComponent = null;
        /**
         * 是否允许处理碰撞，这也代表这是属于玩家阵营的方块
         */
        _this.enabledCollision = false;
        /**
         * 冲突标记
         */
        _this._Conglict = false;
        /**
         * 剩余等待计数
         */
        _this._WaitForConflict = 3;
        return _this;
    }
    // onLoad () {}
    block.prototype.start = function () {
    };
    block.prototype.update = function (dt) {
        if (!this.conflict && this.enabledCollision)
            this.node['playerMovement'].updateByVelocity(dt);
        else {
            var gridPos = GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex));
            this.node.setPosition(this.node.x, gridPos.y);
        }
    };
    // TAG USER FUNCTION:                                                                                    
    /**
     * 初始化事件
     * @param Index
     */
    block.prototype.init = function (Index, playerMode) {
        if (playerMode === void 0) { playerMode = false; }
        if (playerMode) {
            this.node.group = 'player';
            this.enabledCollision = true;
        }
        else {
            this.treeIndex = Index;
        }
    };
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionEnter = function (other, self) {
        var _a;
        if (!this.enabledCollision)
            return;
        cc.log("碰撞开始");
        // 获取碰撞的树节点
        var otherBlock = this.getBlockComponent(other);
        var otherTreeIndex = otherBlock.treeIndex;
        if (typeof otherTreeIndex == 'number') {
            var selfTreeIndex = NoRootTree_1.default.tree.getNextIndex(otherTreeIndex, -1);
            var treeGroup = NoRootTree_1.default.tree.getBuffer(selfTreeIndex);
            // 如果组在树中
            if (treeGroup) {
                // 由于自己的到来而填充了一行
                if (Object.keys(treeGroup).length + 1 >= DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.column) {
                    // 就销毁之后包括自己在内的所有节点
                    this.destroyTreeNodeAfterIndex(selfTreeIndex + 1);
                    return;
                }
                // 而不能填充一行的话
                else {
                    // 临时加入到此组中
                    treeGroup[this['_id']] = this.node;
                }
                this.treeIndex = selfTreeIndex;
            }
            // 如果组不在树中，说明在最外边
            else {
                this.treeIndex = NoRootTree_1.default.tree.addFromFront((_a = {}, _a[this['_id']] = this.node, _a));
            }
        }
        // 如果还未存在冲突
        if (!this.conflict) {
            // 对齐,避免发生重复对齐
            this.AlignPos = otherBlock.AlignPos;
            cc.log(this.treeIndex, NoRootTree_1.default.tree.put, NoRootTree_1.default.tree.get, NoRootTree_1.default.tree.buffer);
        }
        // 标记为冲突
        this.markConflictAndCopyMotion();
    };
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionStay = function (other, self) {
        if (!this.enabledCollision)
            return;
        // if (ccvv.getInstanceByName())
        if (!this.waitForConflict)
            cc.log("碰撞中");
    };
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    block.prototype.onCollisionExit = function (other, self) {
        if (!this.enabledCollision)
            return;
        if (!this.node.isValid)
            return;
        cc.log("碰撞结束");
        if (this.waitForConflict)
            this.conflict = false;
    };
    // SIGNPOST function                                                                                     
    /**
     * 从给定索引处销毁所有节点，包括自身
     * @param index
     */
    block.prototype.destroyTreeNodeAfterIndex = function (index) {
        var treeBehindObject = NoRootTree_1.default.tree.cut(index).obj;
        treeBehindObject.forEach(function (objectElement) {
            Object.keys(objectElement).forEach(function (elementName) {
                objectElement[elementName].destroy();
            });
        });
        this.node.destroy();
    };
    /**
     * 在给定树索引位置上添加自身
     * @param index
     */
    block.prototype.addTreeNodeAtIndex = function (index) {
    };
    /**
     * 标记为冲突并复制运动
     * 标记冲突时意味着运动将朝向新的运动组件
     * @param index
     */
    block.prototype.markConflictAndCopyMotion = function () {
        // 标记冲突并复制运动
        this.conflict = true;
        if (!this.node['otherMovement'])
            DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript.bindMovement(this.node);
        // 对齐到任意节点中
        // let treeIndexObject = NTR.tree.getBuffer(index);
        // if (!treeIndexObject) {
        //     treeIndexObject = NTR.tree.getBuffer(NTR.tree.getNextIndex(index, 1));
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y - ccvv.fristScript.cubeHeight));
        // }
        // else {
        //     let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
        //     this.node.setPosition(new cc.Vec2(this.node.x, AlignTarget.y));
        // }
    };
    Object.defineProperty(block.prototype, "treeIndex", {
        get: function () { return this._TreeIndex; },
        set: function (value) { this._TreeIndex = value; },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取其他方块node上的block组件
     * @param block
     */
    block.prototype.getBlockComponent = function (block) {
        var blockNode = block instanceof cc.Node ? block : block.node;
        if (!this._ColNode || this._ColNode != blockNode)
            this._ColComponent = blockNode.getComponent('Block');
        return this._ColComponent;
    };
    Object.defineProperty(block.prototype, "conflict", {
        get: function () { return this._Conglict; },
        /**
         * 标记或加入到冲突
         */
        set: function (value) {
            // if (typeof value == 'boolean') {
            this._Conglict = value;
            // }
            // else {
            //     this._Conglict = true;
            //     ccvv.setInstanceByName(value, this.node);
            // }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "waitForConflict", {
        /**
         * 是否等待冲突
         */
        get: function () {
            return this._WaitForConflict-- > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "AlignPos", {
        /**
         * 获取对齐坐标
         */
        get: function () {
            // 使用无根树方式获取对齐坐标
            // if (!this.enabledCollision) {
            //     let treeIndexObject = NTR.tree.getBuffer(NTR.tree.getNextIndex(this.treeIndex, -1));
            //     if (treeIndexObject) {
            //         let AlignTarget = treeIndexObject[Object.keys(treeIndexObject)[0]];
            //         return new cc.Vec2(this.node.x, AlignTarget.y)
            //     }
            // }
            // return new cc.Vec2(this.node.x, this.node.y - ccvv.fristScript.cubeHeight)
            // 使用对齐网格获取对齐坐标
            return GridAdsorb_1.default.grid.getGridPositionByIndex(new cc.Vec2(0, this.treeIndex - 1));
        },
        /**
         * 设置对齐坐标
         */
        set: function (value) {
            this.node.setPosition(this.node.x, value.y);
        },
        enumerable: false,
        configurable: true
    });
    block = __decorate([
        ccclass
        /**
         * @deprecated 已有更好的方法
         */
    ], block);
    return block;
}(PawnClass_1.default));
exports.default = block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZGVwcmVjYXRlZC1CbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyRUFBbUc7QUFDbkcscURBQWdEO0FBQ2hELHNEQUFpRDtBQUNqRCxzREFBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFLNUM7SUFBbUMseUJBQVM7SUFINUM7O09BRUc7SUFDSDtRQUVJLHdCQUF3QjtRQUY1QixxRUEyT0M7UUFqRkcseUdBQXlHO1FBRXpHOzs7V0FHRztRQUNPLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBYzFCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLG1CQUFhLEdBQVUsSUFBSSxDQUFDO1FBQ3RDOztXQUVHO1FBQ08sc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBSTVDOztXQUVHO1FBQ08sZUFBUyxHQUFZLEtBQUssQ0FBQztRQWVyQzs7V0FFRztRQUNLLHNCQUFnQixHQUFXLENBQUMsQ0FBQzs7SUErQnpDLENBQUM7SUF2T0csZUFBZTtJQUVmLHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksT0FBTyxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElB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OEVBQThFO1lBQzlFLHlEQUF5RDtZQUN6RCxRQUFRO1lBQ1IsSUFBSTtZQUNKLDZFQUE2RTtZQUU3RSxlQUFlO1lBQ2YsT0FBTyxvQkFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FOQTtJQXBPZ0IsS0FBSztRQUp6QixPQUFPO1FBQ1I7O1dBRUc7T0FDa0IsS0FBSyxDQTJPekI7SUFBRCxZQUFDO0NBM09ELEFBMk9DLENBM09rQyxtQkFBUyxHQTJPM0M7a0JBM09vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYsIG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgUGF3bkNsYXNzIGZyb20gJy4uL2Jhc2UvY2xhc3MvUGF3bkNsYXNzJztcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgTlRSIGZyb20gXCIuLi9iYXNlL3Rvb2wvTm9Sb290VHJlZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIOW3suacieabtOWlveeahOaWueazlVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmxvY2sgZXh0ZW5kcyBQYXduQ2xhc3Mge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29uZmxpY3QgJiYgdGhpcy5lbmFibGVkQ29sbGlzaW9uKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGVbJ3BsYXllck1vdmVtZW50J10udXBkYXRlQnlWZWxvY2l0eShkdCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBncmlkUG9zID0gR3JpZEFic29yYi5ncmlkLmdldEdyaWRQb3NpdGlvbkJ5SW5kZXgobmV3IGNjLlZlYzIoMCwgdGhpcy50cmVlSW5kZXgpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCBncmlkUG9zLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcgVVNFUiBGVU5DVElPTjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluS6i+S7tlxyXG4gICAgICogQHBhcmFtIEluZGV4IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdChJbmRleDogbnVtYmVyLCBwbGF5ZXJNb2RlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAocGxheWVyTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ3JvdXAgPSAncGxheWVyJ1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRDb2xsaXNpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlSW5kZXggPSBJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPnorDmkp7kuqfnlJ/nmoTml7blgJnosIPnlKhcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBvdGhlciDkuqfnlJ/norDmkp7nmoTlj6bkuIDkuKrnorDmkp7nu4Tku7ZcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBzZWxmICDkuqfnlJ/norDmkp7nmoToh6rouqvnmoTnorDmkp7nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIGNjLmxvZyhcIueisOaSnuW8gOWni1wiKTtcclxuXHJcbiAgICAgICAgLy8g6I635Y+W56Kw5pKe55qE5qCR6IqC54K5XHJcbiAgICAgICAgbGV0IG90aGVyQmxvY2sgPSB0aGlzLmdldEJsb2NrQ29tcG9uZW50KG90aGVyKTtcclxuICAgICAgICBsZXQgb3RoZXJUcmVlSW5kZXggPSBvdGhlckJsb2NrLnRyZWVJbmRleDtcclxuICAgICAgICBpZiAodHlwZW9mIG90aGVyVHJlZUluZGV4ID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmVHJlZUluZGV4ID0gTlRSLnRyZWUuZ2V0TmV4dEluZGV4KG90aGVyVHJlZUluZGV4LCAtMSk7XHJcbiAgICAgICAgICAgIGxldCB0cmVlR3JvdXAgPSBOVFIudHJlZS5nZXRCdWZmZXIoc2VsZlRyZWVJbmRleCk7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOe7hOWcqOagkeS4rVxyXG4gICAgICAgICAgICBpZiAodHJlZUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDnlLHkuo7oh6rlt7HnmoTliLDmnaXogIzloavlhYXkuobkuIDooYxcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0cmVlR3JvdXApLmxlbmd0aCArIDEgPj0gY2N2di5mcmlzdFNjcmlwdC5jb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlsLHplIDmr4HkuYvlkI7ljIXmi6zoh6rlt7HlnKjlhoXnmoTmiYDmnInoioLngrlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lUcmVlTm9kZUFmdGVySW5kZXgoc2VsZlRyZWVJbmRleCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOiAjOS4jeiDveWhq+WFheS4gOihjOeahOivnVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Li05pe25Yqg5YWl5Yiw5q2k57uE5LitXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlZUdyb3VwW3RoaXNbJ19pZCddXSA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gc2VsZlRyZWVJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlpoLmnpznu4TkuI3lnKjmoJHkuK3vvIzor7TmmI7lnKjmnIDlpJbovrlcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVJbmRleCA9IE5UUi50cmVlLmFkZEZyb21Gcm9udCh7IFt0aGlzWydfaWQnXV06IHRoaXMubm9kZSB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6L+Y5pyq5a2Y5Zyo5Yay56qBXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZsaWN0KSB7XHJcbiAgICAgICAgICAgIC8vIOWvuem9kCzpgb/lhY3lj5HnlJ/ph43lpI3lr7npvZBcclxuICAgICAgICAgICAgdGhpcy5BbGlnblBvcyA9IG90aGVyQmxvY2suQWxpZ25Qb3M7XHJcbiAgICAgICAgICAgIGNjLmxvZyh0aGlzLnRyZWVJbmRleCwgTlRSLnRyZWUucHV0LCBOVFIudHJlZS5nZXQsIE5UUi50cmVlLmJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmoIforrDkuLrlhrLnqoFcclxuICAgICAgICB0aGlzLm1hcmtDb25mbGljdEFuZENvcHlNb3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+WQju+8jOeisOaSnue7k+adn+WJjeeahOaDheWGteS4i++8jOavj+asoeiuoeeul+eisOaSnue7k+aenOWQjuiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBvbkNvbGxpc2lvblN0YXkob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmIChjY3Z2LmdldEluc3RhbmNlQnlOYW1lKCkpXHJcbiAgICAgICAgaWYgKCF0aGlzLndhaXRGb3JDb25mbGljdClcclxuICAgICAgICAgICAgY2MubG9nKFwi56Kw5pKe5LitXCIpO1xyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe57uT5p2f5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkQ29sbGlzaW9uKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuaXNWYWxpZCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmxvZyhcIueisOaSnue7k+adn1wiKTtcclxuICAgICAgICBpZiAodGhpcy53YWl0Rm9yQ29uZmxpY3QpXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmxpY3QgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1QgZnVuY3Rpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku47nu5nlrprntKLlvJXlpITplIDmr4HmiYDmnInoioLngrnvvIzljIXmi6zoh6rouqtcclxuICAgICAqIEBwYXJhbSBpbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlc3Ryb3lUcmVlTm9kZUFmdGVySW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBsZXQgdHJlZUJlaGluZE9iamVjdCA9IE5UUi50cmVlLmN1dChpbmRleCkub2JqO1xyXG4gICAgICAgIHRyZWVCZWhpbmRPYmplY3QuZm9yRWFjaChvYmplY3RFbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMob2JqZWN0RWxlbWVudCkuZm9yRWFjaChlbGVtZW50TmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RFbGVtZW50W2VsZW1lbnROYW1lXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWcqOe7meWumuagkee0ouW8leS9jee9ruS4iua3u+WKoOiHqui6q1xyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWRkVHJlZU5vZGVBdEluZGV4KGluZGV4KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qCH6K6w5Li65Yay56qB5bm25aSN5Yi26L+Q5YqoICBcclxuICAgICAqIOagh+iusOWGsueqgeaXtuaEj+WRs+edgOi/kOWKqOWwhuacneWQkeaWsOeahOi/kOWKqOe7hOS7tlxyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbWFya0NvbmZsaWN0QW5kQ29weU1vdGlvbigpIHtcclxuICAgICAgICAvLyDmoIforrDlhrLnqoHlubblpI3liLbov5DliqhcclxuICAgICAgICB0aGlzLmNvbmZsaWN0ID0gdHJ1ZTtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZVsnb3RoZXJNb3ZlbWVudCddKVxyXG4gICAgICAgICAgICBjY3Z2LmZyaXN0U2NyaXB0LmJpbmRNb3ZlbWVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIOWvuem9kOWIsOS7u+aEj+iKgueCueS4rVxyXG4gICAgICAgIC8vIGxldCB0cmVlSW5kZXhPYmplY3QgPSBOVFIudHJlZS5nZXRCdWZmZXIoaW5kZXgpO1xyXG4gICAgICAgIC8vIGlmICghdHJlZUluZGV4T2JqZWN0KSB7XHJcbiAgICAgICAgLy8gICAgIHRyZWVJbmRleE9iamVjdCA9IE5UUi50cmVlLmdldEJ1ZmZlcihOVFIudHJlZS5nZXROZXh0SW5kZXgoaW5kZXgsIDEpKTtcclxuICAgICAgICAvLyAgICAgbGV0IEFsaWduVGFyZ2V0ID0gdHJlZUluZGV4T2JqZWN0W09iamVjdC5rZXlzKHRyZWVJbmRleE9iamVjdClbMF1dO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIEFsaWduVGFyZ2V0LnkgLSBjY3Z2LmZyaXN0U2NyaXB0LmN1YmVIZWlnaHQpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBBbGlnblRhcmdldCA9IHRyZWVJbmRleE9iamVjdFtPYmplY3Qua2V5cyh0cmVlSW5kZXhPYmplY3QpWzBdXTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCBBbGlnblRhcmdldC55KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJR05QT1NUIG1hY3JvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omA5aSE5qCR6IqC54K557Si5byVXHJcbiAgICAgKiDlvZPlpITkuo7njqnlrrbpmLXokKXml7bvvIzmraTntKLlvJXml6DmlYhcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9UcmVlSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IHRyZWVJbmRleCgpIHsgcmV0dXJuIHRoaXMuX1RyZWVJbmRleCB9XHJcbiAgICBwdWJsaWMgc2V0IHRyZWVJbmRleCh2YWx1ZSkgeyB0aGlzLl9UcmVlSW5kZXggPSB2YWx1ZTsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YW25LuW5pa55Z2Xbm9kZeS4iueahGJsb2Nr57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gYmxvY2sgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCbG9ja0NvbXBvbmVudChibG9jayk6IGJsb2NrIHtcclxuICAgICAgICBsZXQgYmxvY2tOb2RlID0gYmxvY2sgaW5zdGFuY2VvZiBjYy5Ob2RlID8gYmxvY2sgOiBibG9jay5ub2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5fQ29sTm9kZSB8fCB0aGlzLl9Db2xOb2RlICE9IGJsb2NrTm9kZSlcclxuICAgICAgICAgICAgdGhpcy5fQ29sQ29tcG9uZW50ID0gYmxvY2tOb2RlLmdldENvbXBvbmVudCgnQmxvY2snKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ29sQ29tcG9uZW50O1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIF9Db2xOb2RlOiBjYy5Db21wb25lbnQgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9Db2xDb21wb25lbnQ6IGJsb2NrID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5YWB6K645aSE55CG56Kw5pKe77yM6L+Z5Lmf5Luj6KGo6L+Z5piv5bGe5LqO546p5a626Zi16JCl55qE5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbmFibGVkQ29sbGlzaW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWGsueqgeagh+iusFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0NvbmdsaWN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2V0IGNvbmZsaWN0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fQ29uZ2xpY3Q7IH1cclxuICAgIC8qKlxyXG4gICAgICog5qCH6K6w5oiW5Yqg5YWl5Yiw5Yay56qBXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29uZmxpY3QodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICAvLyBpZiAodHlwZW9mIHZhbHVlID09ICdib29sZWFuJykge1xyXG4gICAgICAgIHRoaXMuX0NvbmdsaWN0ID0gdmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9Db25nbGljdCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGNjdnYuc2V0SW5zdGFuY2VCeU5hbWUodmFsdWUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Ymp5L2Z562J5b6F6K6h5pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1dhaXRGb3JDb25mbGljdDogbnVtYmVyID0gMztcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm562J5b6F5Yay56qBXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgd2FpdEZvckNvbmZsaWN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9XYWl0Rm9yQ29uZmxpY3QtLSA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blr7npvZDlnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBBbGlnblBvcygpIHtcclxuICAgICAgICAvLyDkvb/nlKjml6DmoLnmoJHmlrnlvI/ojrflj5blr7npvZDlnZDmoIdcclxuICAgICAgICAvLyBpZiAoIXRoaXMuZW5hYmxlZENvbGxpc2lvbikge1xyXG4gICAgICAgIC8vICAgICBsZXQgdHJlZUluZGV4T2JqZWN0ID0gTlRSLnRyZWUuZ2V0QnVmZmVyKE5UUi50cmVlLmdldE5leHRJbmRleCh0aGlzLnRyZWVJbmRleCwgLTEpKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRyZWVJbmRleE9iamVjdCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IEFsaWduVGFyZ2V0ID0gdHJlZUluZGV4T2JqZWN0W09iamVjdC5rZXlzKHRyZWVJbmRleE9iamVjdClbMF1dO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCBBbGlnblRhcmdldC55KVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkgLSBjY3Z2LmZyaXN0U2NyaXB0LmN1YmVIZWlnaHQpXHJcblxyXG4gICAgICAgIC8vIOS9v+eUqOWvuem9kOe9keagvOiOt+WPluWvuem9kOWdkOagh1xyXG4gICAgICAgIHJldHVybiBHcmlkQWJzb3JiLmdyaWQuZ2V0R3JpZFBvc2l0aW9uQnlJbmRleChuZXcgY2MuVmVjMigwLCB0aGlzLnRyZWVJbmRleCAtIDEpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5a+56b2Q5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgQWxpZ25Qb3ModmFsdWU6IGNjLlZlYzIpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLngsIHZhbHVlLnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GameLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8feabNR+WNMU7CO+D93SETO', 'GameLevel');
// scripts/game/GameLevel.ts

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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var PawnMovement_1 = require("../base/tool/PawnMovement");
var SoundPlayer_1 = require("../base/tool/SoundPlayer");
var Setting_1 = require("./Setting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
/**
 * 对于关卡蓝图中的参数，都定义在设置中
 * 而其他蓝图中的参数则会放置在其最强关联处，比如自己本身的类内
 * 而部分地方可能会用到全局工具的部分，可以改为以设置类全局的模式，全局工具是旧方法
 * 关于全局工具的用法，可以参考discard-标记的文件，他们是已经确定废弃的用法
 *
 * 游戏的基本运行与玩家交互是在 GameLevel 中完成的
 * 游戏会发射方块组 BlockGroup 而不是方块，由每一行的方块完成初始化，销毁检测
 * 每个方块组内包含四个方块 Block ，它们会在诞生时自动消灭一部分，留空给玩家，当产生销毁时会播放音效，并切换为动画预制体
 * 除此之外，所有公用的参数都在 setting 中，而对于更加更加具有通用性质的 globaltool 只在部分场景使用
 * 你可以忽略base中的大部分文件，它们没什么用。
 */
var GameLevel = /** @class */ (function (_super) {
    __extends(GameLevel, _super);
    // @executeInEditMode
    function GameLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameArea = null;
        _this.effectArea = null;
        /**
         * 游戏结束标记，避免重复调用结束事件
         * 不可以在其他任何地方调用，以免逻辑混乱
         */
        _this._GameOverSign = false;
        _this.readyTouch = false;
        /**
         * 上一组诞生组
         */
        _this.lastGroup = null;
        /**
         * 上叠运行速度
         */
        _this._MultiplyGameSpeed = 0;
        return _this;
    }
    // tag LIFE-CYCLE CALLBACKS:
    GameLevel.prototype.onLoad = function () {
        // 提升脚本，这是为了兼容旧方法，设置中也同提升了
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // 开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    };
    GameLevel.prototype.onEnable = function () {
        // 基本初始化, enable时游戏就已经开始了
        this.init();
    };
    // start() {}
    GameLevel.prototype.update = function (dt) {
        // 如果目标位置小于一定时，创建方块
        var pos = GridAdsorb_1.default.grid.getGridPositionByIndex(Setting_1.default.GridCurrentPointToVec);
        if (pos.y > 0 && pos.y <= cc.winSize.height / 2) {
            this.SpawnCubeGroupAndInit(Setting_1.default.GridPointer);
        }
        // 如果最后一行小于一定时，结束游戏
        if (Setting_1.default.endCubeGroup && Setting_1.default.endCubeGroup.node.y < Setting_1.default.Separator) {
            this.gameOver();
        }
        // 否则继续网格移动，这也会驱动方块移动
        else {
            // 简单的移动方式
            // GridAbsorb.grid.offset = ss.GameVector.mul(dt);
            // 移动组件移动方式
            Setting_1.default.movement.addforce = Setting_1.default.GameAutoSpeed;
            Setting_1.default.movement.addDrag = Setting_1.default.GameAutoDrag;
            Setting_1.default.movement.updateByVelocity(dt);
        }
        this.setGameSpeed(dt * Setting_1.default.score * 3);
        cc.log(this.GameSpeed);
    };
    // tag 用户函数部分 
    /**
     * 游戏重置及初始化
     * 开始时调用一次
     */
    GameLevel.prototype.init = function () {
        // 初始化对齐网格
        GridAdsorb_1.default.grid = new GridAdsorb_1.default(new cc.Vec3(Setting_1.default.Game_Column, Setting_1.default.Game_Row2, 0), new cc.Vec3(Setting_1.default.Cube_width, Setting_1.default.Cube_Height, 0));
        // 赋予移动组件
        Setting_1.default.movement = new PawnMovement_1.default(GridAdsorb_1.default.grid);
        Setting_1.default.movement.maxSpeed = this.GameSpeed;
        // 设置网格边界锚点
        // GridAbsorb.grid.anchor = new cc.Vec3(0, 0, 0);
        // 设置网格起点
        GridAdsorb_1.default.grid.offset = Setting_1.default.GridOriginOffset;
        // 重置网格指针
        Setting_1.default.GridCurrentPoint = 0;
        // 注册触摸
        this.touchRegister();
        // 清理战场
        Setting_1.default.endCubeGroup = null;
        if (this.gameArea.children.length > 0)
            this.gameArea.children.forEach(function (e) { e.destroy(); });
        if (this.effectArea.children.length > 0)
            this.effectArea.children.forEach(function (e) { e.destroy(); });
        // 复位游戏标记
        this.gameOverSign = false;
    };
    /**
     * 创建方块组，并按链初始化
     */
    GameLevel.prototype.SpawnCubeGroupAndInit = function (index) {
        // 初始化,将上一个组传给这组
        var inst = this.SpawnCubeGroup();
        // 提供索引以便吸附到网格上
        var instComponent = inst.getComponent(Setting_1.default.blockGroupName);
        // 初始化,将索引给到这
        instComponent.init(index, this.lastGroup);
        // 现在这组是上组了
        this.lastGroup = instComponent;
        return inst;
    };
    /**
     * 创建方块组
     * @param index
     */
    GameLevel.prototype.SpawnCubeGroup = function () {
        var inst = this.creatActor(Setting_1.default.SquareGroup, this.gameArea);
        return inst;
    };
    /**
     * 创建方块
     */
    GameLevel.prototype.SpawnPlayerCube = function () {
        var inst = this.creatActor(Setting_1.default.Square, this.gameArea);
        // 提供索引以便吸附到网格上
        inst.getComponent('Block').init();
        return inst;
    };
    /**
    * 游戏结束时的动作
    * 游戏结束时调用一次
    */
    GameLevel.prototype.gameOver = function () {
        var _this = this;
        if (!this.gameOverSign) {
            this.gameOverSign = true;
            // 暂停触摸
            // ccvv.layers[0].pauseSystemEvents(true);
            Setting_1.default.menu.gameOver();
            var allChildren_1 = this.lastGroup.findAllChildren(this.lastGroup);
            // 一个一个破掉的效果
            var allChildrenCount_1 = allChildren_1.length;
            cc.log(allChildren_1);
            this.schedule(function () {
                if (allChildrenCount_1--) {
                    var desAct = allChildren_1[allChildrenCount_1];
                    desAct.getComponent(Setting_1.default.blockName).destroyWithAnimation();
                }
                else {
                    _this.unscheduleAllCallbacks();
                    Setting_1.default.menu.openMenu();
                }
            }, .08);
        }
    };
    Object.defineProperty(GameLevel.prototype, "gameOverSign", {
        get: function () { return this._GameOverSign; },
        set: function (value) { this._GameOverSign = value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    // tag 用户触摸事件
    /**
     * 注册触摸事件
     */
    GameLevel.prototype.touchRegister = function () {
        if (!this.readyTouch) {
            this.readyTouch = true;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].on("touchstart", this.onTouchStart, this);
        }
        else {
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].resumeSystemEvents(true);
        }
    };
    GameLevel.prototype.onTouchStart = function (event) {
        var touchArea = event.getLocation().x / Setting_1.default.Cube_width;
        var inst = this.SpawnPlayerCube();
        var inx = Math.ceil(touchArea) * (Setting_1.default.Cube_width + Setting_1.default.Cube_Interaval) - ((cc.winSize.width + Setting_1.default.Cube_width) / 2);
        // let inx = Math.ceil(touchArea) * 177 - ((cc.winSize.width + ss.Cube_width) / 2) - 5
        inst.setPosition(inx, Setting_1.default.Separator);
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_shot);
    };
    // tag 特效方法 
    /**
     * 冰冻特效
     * 赋予两倍阻力
     */
    GameLevel.prototype.ice = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_ice);
        var inst = this.creatActor(Setting_1.default.Effect_Ice, this.effectArea);
        Setting_1.default.movement.permDrag = 2;
        this.scheduleOnce(function () {
            Setting_1.default.movement.permDrag = 0;
        }, Setting_1.default.ice_Duration);
    };
    /**
     * 击退特效
     * 赋予一个反方向的力
     */
    GameLevel.prototype.hit = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_hit);
        this.setGameSpeed(0);
        var inst = this.creatActor(Setting_1.default.Effect_Hit, this.effectArea);
        inst.setPosition(Setting_1.default.endCubeGroup.node.getPosition());
        Setting_1.default.movement.addforce = new cc.Vec2(0, Setting_1.default.hit_Force);
        Setting_1.default.movement.drag = 0;
        Setting_1.default.movement.maxSpeed = this.GameSpeed;
    };
    /**
     * 清屏特效
     * 将屏幕内的所有方块都进行清理，使用的是方块自身的消除方法，所以也会播放销毁特效
     */
    GameLevel.prototype.boom = function () {
        // todo 播放音效
        new SoundPlayer_1.SoundPlayer(Setting_1.default.Sound_boom);
        this.setGameSpeed(0);
        var inst = this.creatActor(Setting_1.default.Effect_Boom, this.effectArea);
        Setting_1.default.endCubeGroup = this.lastGroup.nextGroup;
        this.lastGroup.destroyMembers(false);
    };
    // tag 基本操作函数 
    /**
    * creat instantiate
    * @param {cc.Prefab} actor 实例化的目标
    * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
    * @returns
    */
    GameLevel.prototype.creatActor = function (actor, parent) {
        var actorInst = cc.instantiate(actor);
        if (parent) {
            parent.addChild(actorInst);
        }
        else {
            this.node.addChild(actorInst);
            cc.log(actorInst);
        }
        return actorInst;
    };
    Object.defineProperty(GameLevel.prototype, "GameSpeed", {
        /**
         * 上叠运行速度
         */
        get: function () { return Setting_1.default.GameSpeed + this._MultiplyGameSpeed; },
        /**
         * 添加上叠运行速度
         */
        set: function (value) { this._MultiplyGameSpeed = Math.max(Math.min(this._MultiplyGameSpeed + value, Setting_1.default.GameSpeed_MulMax), 0); },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    /**
     * 直接设置上叠运行速度
     */
    GameLevel.prototype.setGameSpeed = function (value) { this._MultiplyGameSpeed = value; };
    ;
    __decorate([
        property(cc.Node)
    ], GameLevel.prototype, "gameArea", void 0);
    __decorate([
        property(cc.Node)
    ], GameLevel.prototype, "effectArea", void 0);
    GameLevel = __decorate([
        ccclass
        // @executeInEditMode
    ], GameLevel);
    return GameLevel;
}(cc.Component));
exports.default = GameLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRyxzREFBaUQ7QUFDakQsMERBQXFEO0FBQ3JELHdEQUF1RDtBQUV2RCxxQ0FBMkI7QUFDckIsSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFDL0Q7Ozs7Ozs7Ozs7O0dBV0c7QUFHSDtJQUF1Qyw2QkFBWTtJQURuRCxxQkFBcUI7SUFDckI7UUFBQSxxRUF5UUM7UUF0UUcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQThJM0I7OztXQUdHO1FBQ0ssbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFtQjdCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBMEV0Qzs7V0FFRztRQUNPLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFDdkM7O1dBRUc7UUFDTyx3QkFBa0IsR0FBVyxDQUFDLENBQUM7O0lBYTdDLENBQUM7SUFqUUcsNEJBQTRCO0lBRTVCLDBCQUFNLEdBQU47UUFDSSwwQkFBMEI7UUFDMUIsMkNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLE9BQU87UUFDUCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNoQyxPQUFPLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0lBRTFDLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0kseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsYUFB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LEVBQUU7WUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQUU7YUFDdEM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7U0FBRTtRQUN6RCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBWUQsc0JBQWMsZ0NBQVM7UUFIdkI7O1dBRUc7YUFDSCxjQUFvQyxPQUFPLGlCQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQSxDQUFDLENBQUM7UUFDbkY7O1dBRUc7YUFDSCxVQUF3QixLQUFhLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxFQUFFLGlCQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQUo3RDtJQUFBLENBQUM7SUFJNEQsQ0FBQztJQUNqSjs7T0FFRztJQUNPLGdDQUFZLEdBQXRCLFVBQXVCLEtBQWEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQztJQUFBLENBQUM7SUFyUTFFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQU5WLFNBQVM7UUFGN0IsT0FBTztRQUNSLHFCQUFxQjtPQUNBLFNBQVMsQ0F5UTdCO0lBQUQsZ0JBQUM7Q0F6UUQsQUF5UUMsQ0F6UXNDLEVBQUUsQ0FBQyxTQUFTLEdBeVFsRDtrQkF6UW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IEdyaWRBYnNvcmIgZnJvbSAnLi4vYmFzZS90b29sL0dyaWRBZHNvcmInO1xyXG5pbXBvcnQgUGF3bk1vdmVtZW50IGZyb20gJy4uL2Jhc2UvdG9vbC9QYXduTW92ZW1lbnQnO1xyXG5pbXBvcnQgeyBTb3VuZFBsYXllciB9IGZyb20gJy4uL2Jhc2UvdG9vbC9Tb3VuZFBsYXllcic7XHJcbmltcG9ydCBCbG9ja0dyb3VwIGZyb20gJy4vQmxvY2tHcm91cCc7XHJcbmltcG9ydCBzcyBmcm9tIFwiLi9TZXR0aW5nXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vKipcclxuICog5a+55LqO5YWz5Y2h6JOd5Zu+5Lit55qE5Y+C5pWw77yM6YO95a6a5LmJ5Zyo6K6+572u5LitXHJcbiAqIOiAjOWFtuS7luiTneWbvuS4reeahOWPguaVsOWImeS8muaUvue9ruWcqOWFtuacgOW8uuWFs+iBlOWkhO+8jOavlOWmguiHquW3seacrOi6q+eahOexu+WGhVxyXG4gKiDogIzpg6jliIblnLDmlrnlj6/og73kvJrnlKjliLDlhajlsYDlt6XlhbfnmoTpg6jliIbvvIzlj6/ku6XmlLnkuLrku6Xorr7nva7nsbvlhajlsYDnmoTmqKHlvI/vvIzlhajlsYDlt6XlhbfmmK/ml6fmlrnms5VcclxuICog5YWz5LqO5YWo5bGA5bel5YW355qE55So5rOV77yM5Y+v5Lul5Y+C6ICDZGlzY2FyZC3moIforrDnmoTmlofku7bvvIzku5bku6zmmK/lt7Lnu4/noa7lrprlup/lvIPnmoTnlKjms5VcclxuICogXHJcbiAqIOa4uOaIj+eahOWfuuacrOi/kOihjOS4jueOqeWutuS6pOS6kuaYr+WcqCBHYW1lTGV2ZWwg5Lit5a6M5oiQ55qEXHJcbiAqIOa4uOaIj+S8muWPkeWwhOaWueWdl+e7hCBCbG9ja0dyb3VwIOiAjOS4jeaYr+aWueWdl++8jOeUseavj+S4gOihjOeahOaWueWdl+WujOaIkOWIneWni+WMlu+8jOmUgOavgeajgOa1i1xyXG4gKiDmr4/kuKrmlrnlnZfnu4TlhoXljIXlkKvlm5vkuKrmlrnlnZcgQmxvY2sg77yM5a6D5Lus5Lya5Zyo6K+e55Sf5pe26Ieq5Yqo5raI54Gt5LiA6YOo5YiG77yM55WZ56m657uZ546p5a6277yM5b2T5Lqn55Sf6ZSA5q+B5pe25Lya5pKt5pS+6Z+z5pWI77yM5bm25YiH5o2i5Li65Yqo55S76aKE5Yi25L2TXHJcbiAqIOmZpOatpOS5i+Wklu+8jOaJgOacieWFrOeUqOeahOWPguaVsOmDveWcqCBzZXR0aW5nIOS4re+8jOiAjOWvueS6juabtOWKoOabtOWKoOWFt+aciemAmueUqOaAp+i0qOeahCBnbG9iYWx0b29sIOWPquWcqOmDqOWIhuWcuuaZr+S9v+eUqFxyXG4gKiDkvaDlj6/ku6Xlv73nlaViYXNl5Lit55qE5aSn6YOo5YiG5paH5Lu277yM5a6D5Lus5rKh5LuA5LmI55So44CCXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVmZmVjdEFyZWE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHRhZyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5o+Q5Y2H6ISa5pys77yM6L+Z5piv5Li65LqG5YW85a655pen5pa55rOV77yM6K6+572u5Lit5Lmf5ZCM5o+Q5Y2H5LqGXHJcbiAgICAgICAgY2N2di5zY3JpcHQgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgLy8g5Z+65pys5Yid5aeL5YyWLCBlbmFibGXml7bmuLjmiI/lsLHlt7Lnu4/lvIDlp4vkuoZcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCgpIHt9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g5aaC5p6c55uu5qCH5L2N572u5bCP5LqO5LiA5a6a5pe277yM5Yib5bu65pa55Z2XXHJcbiAgICAgICAgbGV0IHBvcyA9IEdyaWRBYnNvcmIuZ3JpZC5nZXRHcmlkUG9zaXRpb25CeUluZGV4KHNzLkdyaWRDdXJyZW50UG9pbnRUb1ZlYyk7XHJcbiAgICAgICAgaWYgKHBvcy55ID4gMCAmJiBwb3MueSA8PSBjYy53aW5TaXplLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5TcGF3bkN1YmVHcm91cEFuZEluaXQoc3MuR3JpZFBvaW50ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzmnIDlkI7kuIDooYzlsI/kuo7kuIDlrprml7bvvIznu5PmnZ/muLjmiI9cclxuICAgICAgICBpZiAoc3MuZW5kQ3ViZUdyb3VwICYmIHNzLmVuZEN1YmVHcm91cC5ub2RlLnkgPCBzcy5TZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlkKbliJnnu6fnu63nvZHmoLznp7vliqjvvIzov5nkuZ/kvJrpqbHliqjmlrnlnZfnp7vliqhcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g566A5Y2V55qE56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgIC8vIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBzcy5HYW1lVmVjdG9yLm11bChkdCk7XHJcblxyXG4gICAgICAgICAgICAvLyDnp7vliqjnu4Tku7bnp7vliqjmlrnlvI9cclxuICAgICAgICAgICAgc3MubW92ZW1lbnQuYWRkZm9yY2UgPSBzcy5HYW1lQXV0b1NwZWVkO1xyXG4gICAgICAgICAgICBzcy5tb3ZlbWVudC5hZGREcmFnID0gc3MuR2FtZUF1dG9EcmFnO1xyXG4gICAgICAgICAgICBzcy5tb3ZlbWVudC51cGRhdGVCeVZlbG9jaXR5KGR0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRHYW1lU3BlZWQoZHQgKiBzcy5zY29yZSAqIDMpO1xyXG4gICAgICAgIGNjLmxvZyh0aGlzLkdhbWVTcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+WHveaVsOmDqOWIhiBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+mHjee9ruWPiuWIneWni+WMliAgXHJcbiAgICAgKiDlvIDlp4vml7bosIPnlKjkuIDmrKFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5a+56b2Q572R5qC8XHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkID0gbmV3IEdyaWRBYnNvcmIoXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHNzLkdhbWVfQ29sdW1uLCBzcy5HYW1lX1JvdzIsIDApLFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyhzcy5DdWJlX3dpZHRoLCBzcy5DdWJlX0hlaWdodCwgMClcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIOi1i+S6iOenu+WKqOe7hOS7tlxyXG4gICAgICAgIHNzLm1vdmVtZW50ID0gbmV3IFBhd25Nb3ZlbWVudChHcmlkQWJzb3JiLmdyaWQpO1xyXG4gICAgICAgIHNzLm1vdmVtZW50Lm1heFNwZWVkID0gdGhpcy5HYW1lU3BlZWQ7XHJcbiAgICAgICAgLy8g6K6+572u572R5qC86L6555WM6ZSa54K5XHJcbiAgICAgICAgLy8gR3JpZEFic29yYi5ncmlkLmFuY2hvciA9IG5ldyBjYy5WZWMzKDAsIDAsIDApO1xyXG4gICAgICAgIC8vIOiuvue9rue9keagvOi1t+eCuVxyXG4gICAgICAgIEdyaWRBYnNvcmIuZ3JpZC5vZmZzZXQgPSBzcy5HcmlkT3JpZ2luT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyDph43nva7nvZHmoLzmjIfpkohcclxuICAgICAgICBzcy5HcmlkQ3VycmVudFBvaW50ID0gMDtcclxuXHJcbiAgICAgICAgLy8g5rOo5YaM6Kem5pG4XHJcbiAgICAgICAgdGhpcy50b3VjaFJlZ2lzdGVyKCk7XHJcblxyXG4gICAgICAgIC8vIOa4heeQhuaImOWculxyXG4gICAgICAgIHNzLmVuZEN1YmVHcm91cCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUFyZWEuY2hpbGRyZW4ubGVuZ3RoID4gMCkgdGhpcy5nYW1lQXJlYS5jaGlsZHJlbi5mb3JFYWNoKGUgPT4geyBlLmRlc3Ryb3koKSB9KTtcclxuICAgICAgICBpZiAodGhpcy5lZmZlY3RBcmVhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHRoaXMuZWZmZWN0QXJlYS5jaGlsZHJlbi5mb3JFYWNoKGUgPT4geyBlLmRlc3Ryb3koKSB9KTtcclxuXHJcbiAgICAgICAgLy8g5aSN5L2N5ri45oiP5qCH6K6wXHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNpZ24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaWueWdl+e7hO+8jOW5tuaMiemTvuWIneWni+WMliAgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBTcGF3bkN1YmVHcm91cEFuZEluaXQoaW5kZXgpOiBjYy5Ob2RlIHtcclxuICAgICAgICAvLyDliJ3lp4vljJYs5bCG5LiK5LiA5Liq57uE5Lyg57uZ6L+Z57uEXHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLlNwYXduQ3ViZUdyb3VwKCk7XHJcbiAgICAgICAgLy8g5o+Q5L6b57Si5byV5Lul5L6/5ZC46ZmE5Yiw572R5qC85LiKXHJcbiAgICAgICAgbGV0IGluc3RDb21wb25lbnQ6IEJsb2NrR3JvdXAgPSBpbnN0LmdldENvbXBvbmVudChzcy5ibG9ja0dyb3VwTmFtZSk7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyWLOWwhue0ouW8lee7meWIsOi/mVxyXG4gICAgICAgIGluc3RDb21wb25lbnQuaW5pdChpbmRleCwgdGhpcy5sYXN0R3JvdXApO1xyXG4gICAgICAgIC8vIOeOsOWcqOi/mee7hOaYr+S4iue7hOS6hlxyXG4gICAgICAgIHRoaXMubGFzdEdyb3VwID0gaW5zdENvbXBvbmVudDtcclxuICAgICAgICByZXR1cm4gaW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65pa55Z2X57uEIFxyXG4gICAgICogQHBhcmFtIGluZGV4IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU3Bhd25DdWJlR3JvdXAoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuU3F1YXJlR3JvdXAsIHRoaXMuZ2FtZUFyZWEpO1xyXG4gICAgICAgIHJldHVybiBpbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFNwYXduUGxheWVyQ3ViZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5TcXVhcmUsIHRoaXMuZ2FtZUFyZWEpO1xyXG4gICAgICAgIC8vIOaPkOS+m+e0ouW8leS7peS+v+WQuOmZhOWIsOe9keagvOS4ilxyXG4gICAgICAgIGluc3QuZ2V0Q29tcG9uZW50KCdCbG9jaycpLmluaXQoKTtcclxuICAgICAgICByZXR1cm4gaW5zdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICog5ri45oiP57uT5p2f5pe255qE5Yqo5L2cICBcclxuICAgICog5ri45oiP57uT5p2f5pe26LCD55So5LiA5qyhXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdhbWVPdmVyKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXJTaWduKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTaWduID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOaaguWBnOinpuaRuFxyXG4gICAgICAgICAgICAvLyBjY3Z2LmxheWVyc1swXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgc3MubWVudS5nYW1lT3ZlcigpXHJcblxyXG4gICAgICAgICAgICBsZXQgYWxsQ2hpbGRyZW4gPSB0aGlzLmxhc3RHcm91cC5maW5kQWxsQ2hpbGRyZW4odGhpcy5sYXN0R3JvdXApO1xyXG4gICAgICAgICAgICAvLyDkuIDkuKrkuIDkuKrnoLTmjonnmoTmlYjmnpxcclxuICAgICAgICAgICAgbGV0IGFsbENoaWxkcmVuQ291bnQgPSBhbGxDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNjLmxvZyhhbGxDaGlsZHJlbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbENoaWxkcmVuQ291bnQtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNBY3QgPSBhbGxDaGlsZHJlblthbGxDaGlsZHJlbkNvdW50XTtcclxuICAgICAgICAgICAgICAgICAgICBkZXNBY3QuZ2V0Q29tcG9uZW50KHNzLmJsb2NrTmFtZSkuZGVzdHJveVdpdGhBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3MubWVudS5vcGVuTWVudSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAuMDgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP57uT5p2f5qCH6K6w77yM6YG/5YWN6YeN5aSN6LCD55So57uT5p2f5LqL5Lu2XHJcbiAgICAgKiDkuI3lj6/ku6XlnKjlhbbku5bku7vkvZXlnLDmlrnosIPnlKjvvIzku6XlhY3pgLvovpHmt7fkubFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfR2FtZU92ZXJTaWduOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgc2V0IGdhbWVPdmVyU2lnbih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9HYW1lT3ZlclNpZ24gPSB2YWx1ZSB9O1xyXG4gICAgcHVibGljIGdldCBnYW1lT3ZlclNpZ24oKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9HYW1lT3ZlclNpZ24gfTtcclxuXHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+inpuaRuOS6i+S7tlxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaFJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjY3Z2LmxheWVyc1swXS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHJlYWR5VG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2hBcmVhID0gZXZlbnQuZ2V0TG9jYXRpb24oKS54IC8gc3MuQ3ViZV93aWR0aDtcclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuU3Bhd25QbGF5ZXJDdWJlKCk7XHJcbiAgICAgICAgbGV0IGlueCA9IE1hdGguY2VpbCh0b3VjaEFyZWEpICogKHNzLkN1YmVfd2lkdGggKyBzcy5DdWJlX0ludGVyYXZhbCkgLSAoKGNjLndpblNpemUud2lkdGggKyBzcy5DdWJlX3dpZHRoKSAvIDIpO1xyXG4gICAgICAgIC8vIGxldCBpbnggPSBNYXRoLmNlaWwodG91Y2hBcmVhKSAqIDE3NyAtICgoY2Mud2luU2l6ZS53aWR0aCArIHNzLkN1YmVfd2lkdGgpIC8gMikgLSA1XHJcbiAgICAgICAgaW5zdC5zZXRQb3NpdGlvbihpbngsIHNzLlNlcGFyYXRvcik7XHJcbiAgICAgICAgLy8gdG9kbyDmkq3mlL7pn7PmlYhcclxuICAgICAgICBuZXcgU291bmRQbGF5ZXIoc3MuU291bmRfc2hvdCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyB0YWcg54m55pWI5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yaw5Ya754m55pWIICBcclxuICAgICAqIOi1i+S6iOS4pOWAjemYu+WKm1xyXG4gICAgICovXHJcbiAgICBpY2UoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdG9kbyDmkq3mlL7pn7PmlYhcclxuICAgICAgICBuZXcgU291bmRQbGF5ZXIoc3MuU291bmRfaWNlKTtcclxuXHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuRWZmZWN0X0ljZSwgdGhpcy5lZmZlY3RBcmVhKTtcclxuICAgICAgICBzcy5tb3ZlbWVudC5wZXJtRHJhZyA9IDI7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBzcy5tb3ZlbWVudC5wZXJtRHJhZyA9IDA7XHJcbiAgICAgICAgfSwgc3MuaWNlX0R1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Ye76YCA54m55pWIICBcclxuICAgICAqIOi1i+S6iOS4gOS4quWPjeaWueWQkeeahOWKmyAgXHJcbiAgICAgKi9cclxuICAgIGhpdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0b2RvIOaSreaUvumfs+aViFxyXG4gICAgICAgIG5ldyBTb3VuZFBsYXllcihzcy5Tb3VuZF9oaXQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEdhbWVTcGVlZCgwKTtcclxuXHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3Ioc3MuRWZmZWN0X0hpdCwgdGhpcy5lZmZlY3RBcmVhKTtcclxuICAgICAgICBpbnN0LnNldFBvc2l0aW9uKHNzLmVuZEN1YmVHcm91cC5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHNzLm1vdmVtZW50LmFkZGZvcmNlID0gbmV3IGNjLlZlYzIoMCwgc3MuaGl0X0ZvcmNlKTtcclxuICAgICAgICBzcy5tb3ZlbWVudC5kcmFnID0gMDtcclxuICAgICAgICBzcy5tb3ZlbWVudC5tYXhTcGVlZCA9IHRoaXMuR2FtZVNwZWVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXlsY/nibnmlYggIFxyXG4gICAgICog5bCG5bGP5bmV5YaF55qE5omA5pyJ5pa55Z2X6YO96L+b6KGM5riF55CG77yM5L2/55So55qE5piv5pa55Z2X6Ieq6Lqr55qE5raI6Zmk5pa55rOV77yM5omA5Lul5Lmf5Lya5pKt5pS+6ZSA5q+B54m55pWIXHJcbiAgICAgKi9cclxuICAgIGJvb20oKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdG9kbyDmkq3mlL7pn7PmlYhcclxuICAgICAgICBuZXcgU291bmRQbGF5ZXIoc3MuU291bmRfYm9vbSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0R2FtZVNwZWVkKDApO1xyXG5cclxuICAgICAgICBsZXQgaW5zdCA9IHRoaXMuY3JlYXRBY3Rvcihzcy5FZmZlY3RfQm9vbSwgdGhpcy5lZmZlY3RBcmVhKTtcclxuICAgICAgICBzcy5lbmRDdWJlR3JvdXAgPSB0aGlzLmxhc3RHcm91cC5uZXh0R3JvdXA7XHJcbiAgICAgICAgdGhpcy5sYXN0R3JvdXAuZGVzdHJveU1lbWJlcnMoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRhZyDln7rmnKzmk43kvZzlh73mlbAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIGNyZWF0IGluc3RhbnRpYXRlXHJcbiAgICAqIEBwYXJhbSB7Y2MuUHJlZmFifSBhY3RvciDlrp7kvovljJbnmoTnm67moIdcclxuICAgICogQHBhcmFtIHtjYy5Ob2RlfSBwYXJlbnQg5a6e5L6L5YyW55qE5a+56LGh5bCG6KaB6ZmE5Yqg55qE55uu5qCH77yM5aaC5p6c55WZ56m65YiZ5Li66Ieq6LqrXHJcbiAgICAqIEByZXR1cm5zIFxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdEFjdG9yKGFjdG9yOiBjYy5QcmVmYWIsIHBhcmVudD86IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0ID0gY2MuaW5zdGFudGlhdGUoYWN0b3IpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHsgcGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5ub2RlLmFkZENoaWxkKGFjdG9ySW5zdCk7IGNjLmxvZyhhY3Rvckluc3QpIH1cclxuICAgICAgICByZXR1cm4gYWN0b3JJbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrkuIDnu4Tor57nlJ/nu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGxhc3RHcm91cDogQmxvY2tHcm91cCA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOS4iuWPoOi/kOihjOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX011bHRpcGx5R2FtZVNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrlj6Dov5DooYzpgJ/luqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBHYW1lU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIHNzLkdhbWVTcGVlZCArIHRoaXMuX011bHRpcGx5R2FtZVNwZWVkIH07XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4iuWPoOi/kOihjOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc2V0IEdhbWVTcGVlZCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX011bHRpcGx5R2FtZVNwZWVkID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy5fTXVsdGlwbHlHYW1lU3BlZWQgKyB2YWx1ZSwgc3MuR2FtZVNwZWVkX011bE1heCksIDApIH07XHJcbiAgICAvKipcclxuICAgICAqIOebtOaOpeiuvue9ruS4iuWPoOi/kOihjOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc2V0R2FtZVNwZWVkKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fTXVsdGlwbHlHYW1lU3BlZWQgPSB2YWx1ZSB9O1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/DevelopersToolClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe3d6sWzhhNbrb4V2ujPwDi', 'DevelopersToolClass');
// scripts/base/class/DevelopersToolClass.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DevelopersToolClass = /** @class */ (function (_super) {
    __extends(DevelopersToolClass, _super);
    function DevelopersToolClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DevelopersToolClass = __decorate([
        ccclass
    ], DevelopersToolClass);
    return DevelopersToolClass;
}(cc.Component));
exports.default = DevelopersToolClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBaUQsdUNBQVk7SUFBN0Q7O0lBRUEsQ0FBQztJQUZvQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQUV2QztJQUFELDBCQUFDO0NBRkQsQUFFQyxDQUZnRCxFQUFFLENBQUMsU0FBUyxHQUU1RDtrQkFGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2ZWxvcGVyc1Rvb2xDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/tool/EventReflect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38e776njEdL3brdTU1NpFG1', 'EventReflect');
// scripts/base/tool/EventReflect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventReflect = void 0;
var UObject_1 = require("../core/UObject");
// 自定义反射
var EventReflect = /** @class */ (function (_super) {
    __extends(EventReflect, _super);
    function EventReflect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventReflect.prototype, "target", {
        get: function () {
            return;
        },
        enumerable: false,
        configurable: true
    });
    return EventReflect;
}(UObject_1.default));
exports.EventReflect = EventReflect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcRXZlbnRSZWZsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsUUFBUTtBQUNSO0lBQWtDLGdDQUFPO0lBQXpDOztJQVVBLENBQUM7SUFIRyxzQkFBVyxnQ0FBTTthQUFqQjtZQUNJLE9BQU07UUFDVixDQUFDOzs7T0FBQTtJQUNMLG1CQUFDO0FBQUQsQ0FWQSxBQVVDLENBVmlDLGlCQUFPLEdBVXhDO0FBVlksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVU9iamVjdCBmcm9tIFwiLi4vY29yZS9VT2JqZWN0XCI7XHJcbi8vIOiHquWumuS5ieWPjeWwhFxyXG5leHBvcnQgY2xhc3MgRXZlbnRSZWZsZWN0IGV4dGVuZHMgVU9iamVjdCB7XHJcbiAgICAvKipcclxuICAgICAqIOWPjeWwhOWunuS+iyAgXHJcbiAgICAgKiDkv53lrZjmiYDmnInlj43lsITlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfUmVmbGVjdEluc3Q7XHJcblxyXG4gICAgcHVibGljIGdldCB0YXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/Setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5b12PfnXFL6rthYkBUEjc3', 'Setting');
// scripts/game/Setting.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
// 游戏固定参数设定
// 用法定位 类似于宏转义
/**
 * 这里定义基本的全局参数
 */
var Setting = /** @class */ (function () {
    function Setting() {
    }
    Object.defineProperty(Setting, "Game_Column", {
        // 基本常量定义
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Game_Row", {
        get: function () { return 15; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Game_Row2", {
        get: function () { return 30; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_width", {
        get: function () { return 177; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Height", {
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Interaval", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Cube_Perfab_Y", {
        // 方块在预制体中的y坐标
        get: function () { return 50; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Separator", {
        // 底部截止线，用于生成方块位置和判断是否结束游戏
        get: function () { return cc.winSize.height * (.17 - .5); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Group_0", {
        // 碰撞组
        get: function () { return 'default'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Group_1", {
        get: function () { return 'player'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "ice_CoolDownTime", {
        get: function () { return this._SkillIce_CoolDownTime; },
        set: function (value) { this._SkillIce_CoolDownTime = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "ice_Duration", {
        get: function () { return this._SkillIce_Duration; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "hit_Force", {
        get: function () { return this._SkillHit_Force; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "hit_CoolDownTime", {
        get: function () { return this._SkillHit_CoolDownTime; },
        set: function (value) { this._SkillHit_CoolDownTime = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "boom_CoolDownTime", {
        get: function () { return this._SkillBoom_CoolDownTime; },
        set: function (value) { this._SkillBoom_CoolDownTime = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "score", {
        get: function () { return this._Score; },
        set: function (value) { this._Score = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "score_add", {
        set: function (value) { this._Score += value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "score_sub", {
        set: function (value) { this._Score -= value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "endCubeGroup", {
        get: function () { return this._EndCubeGroup; },
        set: function (value) { this._EndCubeGroup = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameSpeed", {
        get: function () { return this._GameSpeed; },
        set: function (value) { this._GameSpeed = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameSpeed_MulMax", {
        get: function () { return 250 - 130; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameAutoSpeed", {
        get: function () { return new cc.Vec3(0, -((this.endCubeGroup ? (this.endCubeGroup.node.y + cc.winSize.height / 2) / cc.winSize.height : 1) * this.GameSpeed), 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameVector", {
        get: function () { return new cc.Vec3(0, -80, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GameAutoDrag", {
        get: function () { return (this.endCubeGroup ? 1 - (this.endCubeGroup.node.y + cc.winSize.height / 2) / cc.winSize.height : 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "CubeSpeed", {
        get: function () { return this._CubeSpeed; },
        set: function (value) { this._CubeSpeed = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "CubeVector", {
        get: function () { return new cc.Vec3(0, this._CubeSpeed, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "SkillEvent", {
        // 到关卡的事件转发
        set: function (event) { DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript[event](); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridCurrentPoint", {
        get: function () { return this._GridCurrentPoint; },
        set: function (value) { this._GridCurrentPoint = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridCurrentPointToVec", {
        get: function () { return new cc.Vec3(0, this._GridCurrentPoint, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridPointer", {
        get: function () { return this._GridCurrentPoint++; },
        set: function (value) { this._GridCurrentPoint += value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "GridOriginOffset", {
        // 网格参数
        get: function () { return new cc.Vec3(0, GridAdsorb_1.default.grid.gridSize.y / 2 + cc.winSize.height / 2, 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "movement", {
        get: function () { return this._Movement; },
        set: function (value) { this._Movement = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "menu", {
        get: function () { return this._Menu; },
        set: function (value) { this._Menu = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Square", {
        // 资源常量定义
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Square']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "SquareGroup", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Square Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_SquareBreak", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['splintering']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_Destory", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Destroy Effect Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_Boom", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Boom Effect Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_Hit", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Hit Effect Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Effect_Ice", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['Ice Effect Node']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_bgm", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['bgm']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_btnn", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['button']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_btny", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['button_yes']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_lose", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['lose']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_boom", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['prop_bomb']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_hit", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['prop_hit']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_ice", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['prop_ice']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_shot", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['shot']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_des1", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['xiaochu1']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_des2", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['xiaochu2']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "Sound_des3", {
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['sounds']['xiaochu3']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "blockName", {
        // 资产常量定义
        get: function () { return 'Block'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Setting, "blockGroupName", {
        get: function () { return 'BlockGroup'; },
        enumerable: false,
        configurable: true
    });
    // 技能设定
    Setting._SkillIce_CoolDownTime = 15;
    Setting._SkillIce_Duration = 8;
    Setting._SkillHit_CoolDownTime = 5;
    Setting._SkillHit_Force = 880000; // 单位n/ccmm2 （牛顿/cocos平方单位）
    Setting._SkillBoom_CoolDownTime = 39;
    // 计分器
    Setting._Score = 0;
    // 场景中最后一组方块
    Setting._EndCubeGroup = null;
    // 设定参数定义 我认为极限速度大概在250左右，再快了就反应不过来了
    Setting._GameSpeed = 130;
    Setting._CubeSpeed = 950;
    // 网格指针
    Setting._GridCurrentPoint = 0;
    // 网格驱动器
    Setting._Movement = null;
    // 关卡菜单界面脚本
    Setting._Menu = null;
    return Setting;
}());
exports.default = Setting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRixzREFBaUQ7QUFLakQsV0FBVztBQUNYLGNBQWM7QUFDZDs7R0FFRztBQUNIO0lBQUE7SUFnSEEsQ0FBQztJQTlHRyxzQkFBa0Isc0JBQVc7UUFEN0IsU0FBUzthQUNULGNBQTBDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDckQsc0JBQWtCLG1CQUFRO2FBQTFCLGNBQXVDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQWtCLG9CQUFTO2FBQTNCLGNBQXdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFcEQsc0JBQWtCLHFCQUFVO2FBQTVCLGNBQXlDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdEQsc0JBQWtCLHNCQUFXO2FBQTdCLGNBQTBDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDdkQsc0JBQWtCLHlCQUFjO2FBQWhDLGNBQTZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFHeEQsc0JBQWtCLHdCQUFhO1FBRC9CLGNBQWM7YUFDZCxjQUE0QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFrQixvQkFBUztRQUQzQiwwQkFBMEI7YUFDMUIsY0FBd0MsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBR2hGLHNCQUFrQixrQkFBTztRQUR6QixNQUFNO2FBQ04sY0FBc0MsT0FBTyxTQUFTLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUN4RCxzQkFBa0Isa0JBQU87YUFBekIsY0FBc0MsT0FBTyxRQUFRLENBQUEsQ0FBQyxDQUFDOzs7T0FB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QkFBYSxHQUFlLElBQUksQ0FBQztJQUlsRCxvQ0FBb0M7SUFDbkIsa0JBQVUsR0FBVyxHQUFHLENBQUM7SUFRekIsa0JBQVUsR0FBVyxHQUFHLENBQUM7SUFRMUMsT0FBTztJQUNVLHlCQUFpQixHQUFXLENBQUMsQ0FBQztJQVMvQyxRQUFRO0lBQ1MsaUJBQVMsR0FBaUIsSUFBSSxDQUFDO0lBSWhELFdBQVc7SUFDTSxhQUFLLEdBQWMsSUFBSSxDQUFDO0lBOEI3QyxjQUFDO0NBaEhELEFBZ0hDLElBQUE7a0JBaEhvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gXCIuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsXCI7XHJcbmltcG9ydCBHcmlkQWJzb3JiIGZyb20gJy4uL2Jhc2UvdG9vbC9HcmlkQWRzb3JiJztcclxuaW1wb3J0IFBhd25Nb3ZlbWVudCBmcm9tIFwiLi4vYmFzZS90b29sL1Bhd25Nb3ZlbWVudFwiO1xyXG5pbXBvcnQgQmxvY2tHcm91cCBmcm9tIFwiLi9CbG9ja0dyb3VwXCI7XHJcbmltcG9ydCBHYW1lTGV2ZWwgZnJvbSBcIi4vR2FtZUxldmVsXCI7XHJcbmltcG9ydCBNZW51TGV2ZWwgZnJvbSBcIi4vTWVudUxldmVsXCI7XHJcbi8vIOa4uOaIj+WbuuWumuWPguaVsOiuvuWumlxyXG4vLyDnlKjms5XlrprkvY0g57G75Ly85LqO5a6P6L2s5LmJXHJcbi8qKlxyXG4gKiDov5nph4zlrprkuYnln7rmnKznmoTlhajlsYDlj4LmlbBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcge1xyXG4gICAgLy8g5Z+65pys5bi46YeP5a6a5LmJXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX0NvbHVtbigpOiBudW1iZXIgeyByZXR1cm4gNDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZV9Sb3coKTogbnVtYmVyIHsgcmV0dXJuIDE1OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lX1JvdzIoKTogbnVtYmVyIHsgcmV0dXJuIDMwOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ3ViZV93aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gMTc3OyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX0hlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gMTAwOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDdWJlX0ludGVyYXZhbCgpOiBudW1iZXIgeyByZXR1cm4gMzsgfVxyXG5cclxuICAgIC8vIOaWueWdl+WcqOmihOWItuS9k+S4reeahHnlnZDmoIdcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVfUGVyZmFiX1koKTogbnVtYmVyIHsgcmV0dXJuIDUwOyB9XHJcblxyXG4gICAgLy8g5bqV6YOo5oiq5q2i57q/77yM55So5LqO55Sf5oiQ5pa55Z2X5L2N572u5ZKM5Yik5pat5piv5ZCm57uT5p2f5ri45oiPXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTZXBhcmF0b3IoKTogbnVtYmVyIHsgcmV0dXJuIGNjLndpblNpemUuaGVpZ2h0ICogKC4xNyAtIC41KTsgfVxyXG5cclxuICAgIC8vIOeisOaSnue7hFxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JvdXBfMCgpOiBzdHJpbmcgeyByZXR1cm4gJ2RlZmF1bHQnIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyb3VwXzEoKTogc3RyaW5nIHsgcmV0dXJuICdwbGF5ZXInIH1cclxuXHJcbiAgICAvLyDmioDog73orr7lrppcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1NraWxsSWNlX0Nvb2xEb3duVGltZTogbnVtYmVyID0gMTU7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Ta2lsbEljZV9EdXJhdGlvbjogbnVtYmVyID0gODtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGljZV9Db29sRG93blRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX1NraWxsSWNlX0Nvb2xEb3duVGltZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBpY2VfQ29vbERvd25UaW1lKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2tpbGxJY2VfQ29vbERvd25UaW1lID0gdmFsdWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaWNlX0R1cmF0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9Ta2lsbEljZV9EdXJhdGlvbiB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxIaXRfQ29vbERvd25UaW1lOiBudW1iZXIgPSA1O1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxIaXRfRm9yY2U6IG51bWJlciA9IDg4MDAwMDsgLy8g5Y2V5L2Nbi9jY21tMiDvvIjniZvpob8vY29jb3PlubPmlrnljZXkvY3vvIlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGhpdF9Gb3JjZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2tpbGxIaXRfRm9yY2UgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaGl0X0Nvb2xEb3duVGltZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2tpbGxIaXRfQ29vbERvd25UaW1lIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGhpdF9Db29sRG93blRpbWUodmFsdWU6IG51bWJlcikgeyB0aGlzLl9Ta2lsbEhpdF9Db29sRG93blRpbWUgPSB2YWx1ZSB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU2tpbGxCb29tX0Nvb2xEb3duVGltZTogbnVtYmVyID0gMzk7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBib29tX0Nvb2xEb3duVGltZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fU2tpbGxCb29tX0Nvb2xEb3duVGltZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBib29tX0Nvb2xEb3duVGltZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1NraWxsQm9vbV9Db29sRG93blRpbWUgPSB2YWx1ZSB9XHJcblxyXG4gICAgLy8g6K6h5YiG5ZmoXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9TY29yZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNjb3JlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9TY29yZSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBzY29yZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX1Njb3JlID0gdmFsdWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NvcmVfYWRkKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2NvcmUgKz0gdmFsdWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NvcmVfc3ViKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fU2NvcmUgLT0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOWcuuaZr+S4reacgOWQjuS4gOe7hOaWueWdl1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfRW5kQ3ViZUdyb3VwOiBCbG9ja0dyb3VwID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGVuZEN1YmVHcm91cCgpOiBCbG9ja0dyb3VwIHsgcmV0dXJuIHRoaXMuX0VuZEN1YmVHcm91cCB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBlbmRDdWJlR3JvdXAodmFsdWU6IEJsb2NrR3JvdXApIHsgdGhpcy5fRW5kQ3ViZUdyb3VwID0gdmFsdWUgfVxyXG5cclxuICAgIC8vIOiuvuWumuWPguaVsOWumuS5iSDmiJHorqTkuLrmnoHpmZDpgJ/luqblpKfmpoLlnKgyNTDlt6blj7PvvIzlho3lv6vkuoblsLHlj43lupTkuI3ov4fmnaXkuoZcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0dhbWVTcGVlZDogbnVtYmVyID0gMTMwO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZVNwZWVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9HYW1lU3BlZWQ7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IEdhbWVTcGVlZCh2YWx1ZSkgeyB0aGlzLl9HYW1lU3BlZWQgPSB2YWx1ZTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZVNwZWVkX011bE1heCgpOiBudW1iZXIgeyByZXR1cm4gMjUwIC0gMTMwOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lQXV0b1NwZWVkKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgLSgodGhpcy5lbmRDdWJlR3JvdXAgPyAodGhpcy5lbmRDdWJlR3JvdXAubm9kZS55ICsgY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAvIGNjLndpblNpemUuaGVpZ2h0IDogMSkgKiB0aGlzLkdhbWVTcGVlZCksIDApOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHYW1lVmVjdG9yKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgLTgwLCAwKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR2FtZUF1dG9EcmFnKCk6IG51bWJlciB7IHJldHVybiAodGhpcy5lbmRDdWJlR3JvdXAgPyAxIC0gKHRoaXMuZW5kQ3ViZUdyb3VwLm5vZGUueSArIGNjLndpblNpemUuaGVpZ2h0IC8gMikgLyBjYy53aW5TaXplLmhlaWdodCA6IDApIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9DdWJlU3BlZWQ6IG51bWJlciA9IDk1MDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQ3ViZVNwZWVkOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBDdWJlU3BlZWQodmFsdWUpIHsgdGhpcy5fQ3ViZVNwZWVkID0gdmFsdWU7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEN1YmVWZWN0b3IoKTogY2MuVmVjMyB7IHJldHVybiBuZXcgY2MuVmVjMygwLCB0aGlzLl9DdWJlU3BlZWQsIDApOyB9XHJcblxyXG4gICAgLy8g5Yiw5YWz5Y2h55qE5LqL5Lu26L2s5Y+RXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBTa2lsbEV2ZW50KGV2ZW50OiBzdHJpbmcpIHsgY2N2di5mcmlzdFNjcmlwdFtldmVudF0oKTsgfVxyXG5cclxuICAgIC8vIOe9keagvOaMh+mSiFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR3JpZEN1cnJlbnRQb2ludDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyaWRDdXJyZW50UG9pbnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0dyaWRDdXJyZW50UG9pbnQgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgR3JpZEN1cnJlbnRQb2ludCh2YWx1ZSkgeyB0aGlzLl9HcmlkQ3VycmVudFBvaW50ID0gdmFsdWUgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZEN1cnJlbnRQb2ludFRvVmVjKCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgdGhpcy5fR3JpZEN1cnJlbnRQb2ludCwgMCkgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgR3JpZFBvaW50ZXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0dyaWRDdXJyZW50UG9pbnQrKzsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgR3JpZFBvaW50ZXIodmFsdWUpIHsgdGhpcy5fR3JpZEN1cnJlbnRQb2ludCArPSB2YWx1ZSB9XHJcblxyXG4gICAgLy8g572R5qC85Y+C5pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBHcmlkT3JpZ2luT2Zmc2V0KCk6IGNjLlZlYzMgeyByZXR1cm4gbmV3IGNjLlZlYzMoMCwgR3JpZEFic29yYi5ncmlkLmdyaWRTaXplLnkgLyAyICsgY2Mud2luU2l6ZS5oZWlnaHQgLyAyLCAwKSB9XHJcbiAgICAvLyDnvZHmoLzpqbHliqjlmahcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX01vdmVtZW50OiBQYXduTW92ZW1lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbW92ZW1lbnQoKTogUGF3bk1vdmVtZW50IHsgcmV0dXJuIHRoaXMuX01vdmVtZW50IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IG1vdmVtZW50KHZhbHVlOiBQYXduTW92ZW1lbnQpIHsgdGhpcy5fTW92ZW1lbnQgPSB2YWx1ZSB9XHJcblxyXG4gICAgLy8g5YWz5Y2h6I+c5Y2V55WM6Z2i6ISa5pysXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9NZW51OiBNZW51TGV2ZWwgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbWVudSgpOiBNZW51TGV2ZWwgeyByZXR1cm4gdGhpcy5fTWVudSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBtZW51KHZhbHVlOiBNZW51TGV2ZWwpIHsgdGhpcy5fTWVudSA9IHZhbHVlIH1cclxuXHJcbiAgICAvLyDotYTmupDluLjph4/lrprkuYlcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydwcmVmYWJzJ11bJ1NxdWFyZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNxdWFyZUdyb3VwKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnU3F1YXJlIE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfU3F1YXJlQnJlYWsoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydzcGxpbnRlcmluZyddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9EZXN0b3J5KCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnRGVzdHJveSBFZmZlY3QgTm9kZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9Cb29tKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnQm9vbSBFZmZlY3QgTm9kZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEVmZmVjdF9IaXQoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydIaXQgRWZmZWN0IE5vZGUnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBFZmZlY3RfSWNlKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnSWNlIEVmZmVjdCBOb2RlJ10gfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2JnbSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsnYmdtJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfYnRubigpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsnYnV0dG9uJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfYnRueSgpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsnYnV0dG9uX3llcyddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2xvc2UoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ2xvc2UnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9ib29tKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWydwcm9wX2JvbWInXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9oaXQoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ3Byb3BfaGl0J10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfaWNlKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWydwcm9wX2ljZSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX3Nob3QoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ3Nob3QnXSB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZF9kZXMxKCkgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3NvdW5kcyddWyd4aWFvY2h1MSddIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNvdW5kX2RlczIoKSB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsnc291bmRzJ11bJ3hpYW9jaHUyJ10gfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU291bmRfZGVzMygpIHsgcmV0dXJuIGNjdnYud2FyZWhvdXNlWydzb3VuZHMnXVsneGlhb2NodTMnXSB9XHJcblxyXG4gICAgLy8g6LWE5Lqn5bi46YeP5a6a5LmJXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBibG9ja05hbWUoKSB7IHJldHVybiAnQmxvY2snIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGJsb2NrR3JvdXBOYW1lKCkgeyByZXR1cm4gJ0Jsb2NrR3JvdXAnIH1cclxuXHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/deprecated-GameLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6594bNyJ7dPQYn9sVKcrXGY', 'deprecated-GameLevel');
// scripts/game/deprecated-GameLevel.ts

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
var DevelopersToolGlobal_1 = require("../base/class/DevelopersToolGlobal");
var PawnMovement_1 = require("../base/tool/PawnMovement");
var GridAdsorb_1 = require("../base/tool/GridAdsorb");
var NoRootTree_1 = require("../base/tool/NoRootTree");
/**
 * 牛头人 NTR 继承自ringbuffer继承自RigorousArray
 * 驱动网格 GridAbsorb 用来驱动其他方块的对齐与运动
 * 移动组件 PawnMovement 简单的运动解算器，仅保留了速度解算和抵达解算，没事可以换着玩
 * 数学宏库 mm 效率低，没事别用
 * 全局仓库 ccvv.warehouse 用来保存动态加载内容
 * 全局工具 ccvv.tool 暂无
 * 全局其他 ccvv.other 暂无
 * 全局界面 ccvv.layer 保存当前世界中的所有已定义层
 * 全局脚本 ccvv.script 保存这个关卡脚本
 * 全局实例 ccvv.instance 作为全局冲突池
 */
// (〃´-ω･) 诶嘿~ 
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    /**
     *
     * @deprecated 已有更好的方法
     */
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        /**
         * 已经注册触摸
         */
        _this.readyTouch = false;
        _this._spawnOrigin = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        // 提升为关卡脚本
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // 开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
        // 创建无根树
        NoRootTree_1.default.tree = new NoRootTree_1.default(this.treeSize);
        // 创建网格驱动
        this.creatGrid();
        // cc.log(ccvv.fristScript)
        // cc.log(ccvv.warehouse);
        // ccvv.layers[0].addChild(new ccvv.warehouse['frames']['bg'])
    };
    Game.prototype.start = function () {
        this.touchRegister();
        // this.creat_lineCube();
    };
    Game.prototype.update = function (dt) {
        this.gameProcess_SpawnCube();
        // 更新所有方块的位置
        GridAdsorb_1.default.grid.offset = new cc.Vec3(0, -dt * this.globalSpeed, 0);
    };
    // TAG USER FUNCTION:                                                                                    
    // SIGNPOST 网格生成                                                                                     
    Game.prototype.creatGrid = function () {
        new GridAdsorb_1.default(new cc.Vec3(this.column, this.treeSize, 0), new cc.Vec3(this.cubeWidget, this.cubeHeight, 0));
        GridAdsorb_1.default.grid.offset = new cc.Vec3(0, cc.winSize.height / 2 + this.cubeHeight, 0);
    };
    // SIGNPOST 诞生方式                                                                                     
    /**
     * 游戏流程-诞生方块
     */
    Game.prototype.gameProcess_SpawnCube = function () {
        if (this.cheackRoot()) {
            this.creat_lineCube();
            // cc.log(NTR.tree.buffer);
        }
    };
    /**
     * 检查目标叶节点是否已为过去式
     */
    Game.prototype.cheackLose = function () {
        var leaf = this.curTreeNode('leaf');
        if (!leaf)
            return false;
        var leafPos = leaf.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var isoutbox = leafPos.y <= (cc.winSize.height * this.separatorPercent);
        return isoutbox;
    };
    /**
     * 检查目标根节点是否已为过去式
     */
    Game.prototype.cheackRoot = function () {
        var root = this.curTreeNode();
        if (!root)
            return true;
        var size = cc.v2(cc.winSize.width, cc.winSize.height);
        var size2 = size.div(2);
        var rootPos = root.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var isinbox = new DevelopersToolGlobal_1.mathMacro(rootPos).isInBox2(size2, size2.add(cc.v2(0, this.cubeHeight / 2)));
        return isinbox;
    };
    /**
     * 返回任意目标节点
     */
    Game.prototype.curTreeNode = function (node) {
        if (node === void 0) { node = 'root'; }
        if (NoRootTree_1.default.tree[node]) {
            var treeIndex = 0;
            for (var index = 0; !NoRootTree_1.default.tree[node][index]; treeIndex = ++index)
                ;
            return NoRootTree_1.default.tree[node][treeIndex];
        }
        else
            return undefined;
    };
    // TAG NATIVE FUNCTION                                                                                   
    // SIGNPOST touchevent                                                                                   
    /**
     * 注册触摸事件
     */
    Game.prototype.touchRegister = function () {
        if (!this.readyTouch) {
            this.readyTouch = true;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].on("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 注销触摸事件
     */
    Game.prototype.touchCancel = function () {
        if (this.readyTouch) {
            this.readyTouch = false;
            DevelopersToolGlobal_1.DevelopersToolGlobal.layers[0].off("touchstart", this.onTouchStart, this);
        }
    };
    /**
     * 当触摸发生时
     * @param event
     */
    Game.prototype.onTouchStart = function (event) {
        var touchArea = event.getLocation().x / this.cubeWidget;
        var inst = this.creat_PlayerCube();
        var inx = Math.ceil(touchArea) * (this.cubeWidget + this.cubeInteraval) - ((cc.winSize.width + this.cubeWidget) / 2);
        inst.setPosition(inx, cc.winSize.width * this.separatorPercent - cc.winSize.width);
    };
    /**
     * 诞生玩家方块
     * 玩家方块不受全局速度影响，不放在树中
     */
    Game.prototype.creat_PlayerCube = function () {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(null, true);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_retrograde(inst);
        return inst;
    };
    /**
     * 绑定逆向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_retrograde = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.playerSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, 1200);
        movement.velocity = new cc.Vec2(0, this.playerSpeed);
        inst['playerMovement'] = movement;
    };
    // TAG Prefabricated function                                                                            
    // SIGNPOST instantiation and destory Actor                                                              
    /**
     * 创建一行方块
     * 随机方式我想应该大概也许是独立随机事件
     * 每行绝对会留一个空
     * @param chance 生成机会，机会越大越容易成功，但肯定会留给玩家一个空，推荐在 3 ~ 5
     */
    Game.prototype.creat_lineCube = function (chance) {
        if (chance === void 0) { chance = 4; }
        var perch = [];
        var child = {};
        var childIndex = NoRootTree_1.default.tree.add(child);
        var loop = chance;
        while (loop--) {
            var curcol = this.randomInColumn;
            if (perch.indexOf(curcol) < 0) {
                perch.push(curcol);
                var inst = this.creat_ProductionCube(childIndex, curcol);
                inst.setPosition(this.spawnOrigin.add(cc.v2(curcol * (this.cubeWidget + this.cubeInteraval), 0)));
                child[curcol] = inst;
            }
            if (perch.length >= (this.column - 1))
                break;
        }
    };
    /**
     * 创建一个方块在堆叠层
     * 并完成基本构造行为
     */
    Game.prototype.creat_ProductionCube = function (treeIndex, columnIndex) {
        var inst = this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        try {
            inst.getComponent('Block').init(treeIndex);
        }
        catch (_a) {
            cc.log("找不到组件: Block");
        }
        this.bindMovement_consequent(inst);
        return inst;
    };
    /**
     * creat instantiate
     * @param {cc.Prefab} actor 实例化的目标
     * @param {cc.Node} parent 实例化的对象将要附加的目标，如果留空则为自身
     * @returns
     */
    Game.prototype.creatActor = function (actor, parent) {
        var actorInst = cc.instantiate(actor);
        if (parent) {
            parent.addChild(actorInst);
        }
        else {
            this.node.addChild(actorInst);
            cc.log(actorInst);
        }
        return actorInst;
    };
    /**
     * 绑定顺向移动控制组件
     * @param inst
     */
    Game.prototype.bindMovement_consequent = function (inst) {
        var movement = new PawnMovement_1.default(inst);
        movement.maxSpeed = this.globalSpeed;
        movement.permDrag = 0;
        movement.permForce = new cc.Vec2(0, -1200);
        movement.velocity = new cc.Vec2(0, -this.globalSpeed);
        inst['otherMovement'] = movement;
    };
    /**
     * 外部玩家阵营复制绑定控制组件
     * @param node
     */
    Game.prototype.bindMovement = function (node) {
        this.bindMovement_consequent(node);
    };
    Object.defineProperty(Game.prototype, "cube", {
        // SIGNPOST macro                                                                                        
        /**
         * 获取指定的预制体方块
         */
        get: function () { return DevelopersToolGlobal_1.DevelopersToolGlobal.warehouse['prefabs']['block']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "column", {
        /**
         * 获取当前所有的列数
         */
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "randomInColumn", {
        /**
         * 获取列数内的随机整数
         */
        get: function () { return Math.floor(Math.random() * this.column); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeWidget", {
        /**
         * 获取方块所占宽度
         */
        get: function () { return 177; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeInteraval", {
        /**
         * 获取方块间隔
         */
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "cubeHeight", {
        /**
         * 获取方块所占高度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnOrigin", {
        /**
         * 获取方块诞生原点
         */
        get: function () {
            if (!this._spawnOrigin)
                this._spawnOrigin = cc.v2(-(this.column - 1) * (this.cubeWidget + this.cubeInteraval) / 2, cc.winSize.height / 2 + this.cubeHeight * 1.4);
            return this._spawnOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "spawnMinCount", {
        /**
         * 获取每行最小可诞生的数量
         */
        get: function () { return 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "separatorPercent", {
        /**
         * 获取截止线屏幕百分比
         */
        get: function () { return .290625; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "globalSpeed", {
        /**
         * 获取全局速度
         */
        get: function () { return 100; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "playerSpeed", {
        /**
         * 获取玩家方块速度
         */
        get: function () { return 1000; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "treeSize", {
        /**
         * 获取树规模
         */
        get: function () { return 30; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], Game.prototype, "label", void 0);
    __decorate([
        property
    ], Game.prototype, "text", void 0);
    Game = __decorate([
        ccclass
        /**
         *
         * @deprecated 已有更好的方法
         */
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZGVwcmVjYXRlZC1HYW1lTGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkVBQW1HO0FBQ25HLDBEQUFxRDtBQUNyRCxzREFBaUQ7QUFDakQsc0RBQTBDO0FBRTFDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsZUFBZTtBQUVULElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBTTVDO0lBQWtDLHdCQUFZO0lBSjlDOzs7T0FHRztJQUNIO1FBQUEscUVBb1NDO1FBalNHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQXVIdkI7O1dBRUc7UUFDTyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQStJL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7O0lBcUJ4QyxDQUFDO0lBNVJHLHdCQUF3QjtJQUV4QixxQkFBTSxHQUFOO1FBQ0ksVUFBVTtRQUNWLDJDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPO1FBQ1AsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDaEMsT0FBTyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUV0QyxRQUFRO1FBQ1Isb0JBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxvQkFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsOERBQThEO0lBQ2xFLENBQUM7SUFFRCxvQkFBSyxH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QUFHLEVBQUUsQ0FBQyxFQUFFLENBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUMvRCxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQ2hELENBQUE7WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVywrQkFBYTtRQUh4Qjs7V0FFRzthQUNILGNBQXFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJaEQsc0JBQVcsa0NBQWdCO1FBSDNCOztXQUVHO2FBQ0gsY0FBd0MsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUl6RCxzQkFBVyw2QkFBVztRQUh0Qjs7V0FFRzthQUNILGNBQW1DLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJaEQsc0JBQVcsNkJBQVc7UUFIdEI7O1dBRUc7YUFDSCxjQUFtQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSWpELHNCQUFXLDBCQUFRO1FBSG5COztXQUVHO2FBQ0gsY0FBZ0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQWhTNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1Q0FDSTtJQUd2QjtRQURDLFFBQVE7c0NBQ2M7SUFOTixJQUFJO1FBTHhCLE9BQU87UUFDUjs7O1dBR0c7T0FDa0IsSUFBSSxDQW9TeEI7SUFBRCxXQUFDO0NBcFNELEFBb1NDLENBcFNpQyxFQUFFLENBQUMsU0FBUyxHQW9TN0M7a0JBcFNvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYsIG1hdGhNYWNybyBhcyBtbSB9IGZyb20gJy4uL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgUGF3bk1vdmVtZW50IGZyb20gJy4uL2Jhc2UvdG9vbC9QYXduTW92ZW1lbnQnO1xyXG5pbXBvcnQgR3JpZEFic29yYiBmcm9tICcuLi9iYXNlL3Rvb2wvR3JpZEFkc29yYic7XHJcbmltcG9ydCBOVFIgZnJvbSBcIi4uL2Jhc2UvdG9vbC9Ob1Jvb3RUcmVlXCI7XHJcblxyXG4vKipcclxuICog54mb5aS05Lq6IE5UUiDnu6fmib/oh6pyaW5nYnVmZmVy57un5om/6IeqUmlnb3JvdXNBcnJheVxyXG4gKiDpqbHliqjnvZHmoLwgR3JpZEFic29yYiDnlKjmnaXpqbHliqjlhbbku5bmlrnlnZfnmoTlr7npvZDkuI7ov5DliqhcclxuICog56e75Yqo57uE5Lu2IFBhd25Nb3ZlbWVudCDnroDljZXnmoTov5Dliqjop6PnrpflmajvvIzku4Xkv53nlZnkuobpgJ/luqbop6PnrpflkozmirXovr7op6PnrpfvvIzmsqHkuovlj6/ku6XmjaLnnYDnjqlcclxuICog5pWw5a2m5a6P5bqTIG1tIOaViOeOh+S9ju+8jOayoeS6i+WIq+eUqFxyXG4gKiDlhajlsYDku5PlupMgY2N2di53YXJlaG91c2Ug55So5p2l5L+d5a2Y5Yqo5oCB5Yqg6L295YaF5a65XHJcbiAqIOWFqOWxgOW3peWFtyBjY3Z2LnRvb2wg5pqC5pegXHJcbiAqIOWFqOWxgOWFtuS7liBjY3Z2Lm90aGVyIOaaguaXoFxyXG4gKiDlhajlsYDnlYzpnaIgY2N2di5sYXllciDkv53lrZjlvZPliY3kuJbnlYzkuK3nmoTmiYDmnInlt7LlrprkuYnlsYJcclxuICog5YWo5bGA6ISa5pysIGNjdnYuc2NyaXB0IOS/neWtmOi/meS4quWFs+WNoeiEmuacrFxyXG4gKiDlhajlsYDlrp7kvosgY2N2di5pbnN0YW5jZSDkvZzkuLrlhajlsYDlhrLnqoHmsaBcclxuICovXHJcbi8vICjjgIPCtC3Pie+9pSkg6K+25Zi/fiBcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbi8qKlxyXG4gKiBcclxuICogQGRlcHJlY2F0ZWQg5bey5pyJ5pu05aW955qE5pa55rOVXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5o+Q5Y2H5Li65YWz5Y2h6ISa5pysXHJcbiAgICAgICAgY2N2di5zY3JpcHQgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyDlvIDlkK/norDmkp5cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8g5Yib5bu65peg5qC55qCRXHJcbiAgICAgICAgTlRSLnRyZWUgPSBuZXcgTlRSKHRoaXMudHJlZVNpemUpO1xyXG4gICAgICAgIC8vIOWIm+W7uue9keagvOmpseWKqFxyXG4gICAgICAgIHRoaXMuY3JlYXRHcmlkKCk7XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LmZyaXN0U2NyaXB0KVxyXG4gICAgICAgIC8vIGNjLmxvZyhjY3Z2LndhcmVob3VzZSk7XHJcbiAgICAgICAgLy8gY2N2di5sYXllcnNbMF0uYWRkQ2hpbGQobmV3IGNjdnYud2FyZWhvdXNlWydmcmFtZXMnXVsnYmcnXSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRvdWNoUmVnaXN0ZXIoKTtcclxuICAgICAgICAvLyB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCk7XHJcbiAgICAgICAgLy8g5pu05paw5omA5pyJ5pa55Z2X55qE5L2N572uXHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IG5ldyBjYy5WZWMzKDAsIC1kdCAqIHRoaXMuZ2xvYmFsU3BlZWQsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBVU0VSIEZVTkNUSU9OOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIOe9keagvOeUn+aIkCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRHcmlkKCkge1xyXG4gICAgICAgIG5ldyBHcmlkQWJzb3JiKFxyXG4gICAgICAgICAgICBuZXcgY2MuVmVjMyh0aGlzLmNvbHVtbiwgdGhpcy50cmVlU2l6ZSwgMCksXHJcbiAgICAgICAgICAgIG5ldyBjYy5WZWMzKHRoaXMuY3ViZVdpZGdldCwgdGhpcy5jdWJlSGVpZ2h0LCAwKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgR3JpZEFic29yYi5ncmlkLm9mZnNldCA9IG5ldyBjYy5WZWMzKDAsIGNjLndpblNpemUuaGVpZ2h0IC8gMiArIHRoaXMuY3ViZUhlaWdodCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6K+e55Sf5pa55byPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5rWB56iLLeivnueUn+aWueWdl1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWFja1Jvb3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhOVFIudHJlZS5idWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpeebruagh+WPtuiKgueCueaYr+WQpuW3suS4uui/h+WOu+W8j1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlYWNrTG9zZSgpIHtcclxuICAgICAgICBsZXQgbGVhZiA9IHRoaXMuY3VyVHJlZU5vZGUoJ2xlYWYnKTtcclxuICAgICAgICBpZiAoIWxlYWYpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgbGVhZlBvcyA9IGxlYWYuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgbGV0IGlzb3V0Ym94ID0gbGVhZlBvcy55IDw9IChjYy53aW5TaXplLmhlaWdodCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCk7XHJcbiAgICAgICAgcmV0dXJuIGlzb3V0Ym94O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l55uu5qCH5qC56IqC54K55piv5ZCm5bey5Li66L+H5Y675byPXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjaGVhY2tSb290KCkge1xyXG4gICAgICAgIGxldCByb290ID0gdGhpcy5jdXJUcmVlTm9kZSgpO1xyXG4gICAgICAgIGlmICghcm9vdCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgbGV0IHNpemUgPSBjYy52MihjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IHNpemUyID0gc2l6ZS5kaXYoMik7XHJcbiAgICAgICAgbGV0IHJvb3RQb3MgPSByb290LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgIGxldCBpc2luYm94ID0gbmV3IG1tKHJvb3RQb3MpLmlzSW5Cb3gyKHNpemUyLCBzaXplMi5hZGQoY2MudjIoMCwgdGhpcy5jdWJlSGVpZ2h0IC8gMikpKTtcclxuICAgICAgICByZXR1cm4gaXNpbmJveDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuS7u+aEj+ebruagh+iKgueCuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VyVHJlZU5vZGUobm9kZTogc3RyaW5nID0gJ3Jvb3QnKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKE5UUi50cmVlW25vZGVdKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmVlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7ICFOVFIudHJlZVtub2RlXVtpbmRleF07IHRyZWVJbmRleCA9ICsraW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gTlRSLnRyZWVbbm9kZV1bdHJlZUluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBOQVRJVkUgRlVOQ1RJT04gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIHRvdWNoZXZlbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6Kem5pG45LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3VjaFJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jplIDop6bmkbjkuovku7ZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHRvdWNoQ2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeVRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjdnYubGF5ZXJzWzBdLm9mZihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bey57uP5rOo5YaM6Kem5pG4XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZWFkeVRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPop6bmkbjlj5HnlJ/ml7ZcclxuICAgICAqIEBwYXJhbSBldmVudCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaEFyZWEgPSBldmVudC5nZXRMb2NhdGlvbigpLnggLyB0aGlzLmN1YmVXaWRnZXQ7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1BsYXllckN1YmUoKTtcclxuICAgICAgICBsZXQgaW54ID0gTWF0aC5jZWlsKHRvdWNoQXJlYSkgKiAodGhpcy5jdWJlV2lkZ2V0ICsgdGhpcy5jdWJlSW50ZXJhdmFsKSAtICgoY2Mud2luU2l6ZS53aWR0aCArIHRoaXMuY3ViZVdpZGdldCkgLyAyKTtcclxuICAgICAgICBpbnN0LnNldFBvc2l0aW9uKGlueCwgY2Mud2luU2l6ZS53aWR0aCAqIHRoaXMuc2VwYXJhdG9yUGVyY2VudCAtIGNjLndpblNpemUud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+e55Sf546p5a625pa55Z2XXHJcbiAgICAgKiDnjqnlrrbmlrnlnZfkuI3lj5flhajlsYDpgJ/luqblvbHlk43vvIzkuI3mlL7lnKjmoJHkuK1cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0X1BsYXllckN1YmUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0QWN0b3IodGhpcy5jdWJlLCBjY3Z2LmxheWVyc1sxXSk7XHJcbiAgICAgICAgdHJ5IHsgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdChudWxsLCB0cnVlKTsgfVxyXG4gICAgICAgIGNhdGNoIHsgY2MubG9nKFwi5om+5LiN5Yiw57uE5Lu2OiBCbG9ja1wiKTsgfVxyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X3JldHJvZ3JhZGUoaW5zdCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3Q7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOe7keWumumAhuWQkeenu+WKqOaOp+WItue7hOS7tlxyXG4gICAgICogQHBhcmFtIGluc3QgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBiaW5kTW92ZW1lbnRfcmV0cm9ncmFkZShpbnN0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vdmVtZW50ID0gbmV3IFBhd25Nb3ZlbWVudChpbnN0KTtcclxuICAgICAgICBtb3ZlbWVudC5tYXhTcGVlZCA9IHRoaXMucGxheWVyU3BlZWQ7XHJcbiAgICAgICAgbW92ZW1lbnQucGVybURyYWcgPSAwO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1Gb3JjZSA9IG5ldyBjYy5WZWMyKDAsIDEyMDApO1xyXG4gICAgICAgIG1vdmVtZW50LnZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoMCwgdGhpcy5wbGF5ZXJTcGVlZCk7XHJcbiAgICAgICAgaW5zdFsncGxheWVyTW92ZW1lbnQnXSA9IG1vdmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBQcmVmYWJyaWNhdGVkIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIGluc3RhbnRpYXRpb24gYW5kIGRlc3RvcnkgQWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA6KGM5pa55Z2XXHJcbiAgICAgKiDpmo/mnLrmlrnlvI/miJHmg7PlupTor6XlpKfmpoLkuZ/orrjmmK/ni6znq4vpmo/mnLrkuovku7ZcclxuICAgICAqIOavj+ihjOe7neWvueS8mueVmeS4gOS4quepulxyXG4gICAgICogQHBhcmFtIGNoYW5jZSDnlJ/miJDmnLrkvJrvvIzmnLrkvJrotorlpKfotorlrrnmmJPmiJDlip/vvIzkvYbogq/lrprkvJrnlZnnu5nnjqnlrrbkuIDkuKrnqbrvvIzmjqjojZDlnKggMyB+IDVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0X2xpbmVDdWJlKGNoYW5jZSA9IDQpIHtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXTtcclxuICAgICAgICBsZXQgY2hpbGQgPSB7fTtcclxuICAgICAgICBsZXQgY2hpbGRJbmRleCA9IE5UUi50cmVlLmFkZChjaGlsZCk7XHJcbiAgICAgICAgbGV0IGxvb3AgPSBjaGFuY2U7XHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gdGhpcy5yYW5kb21JbkNvbHVtbjtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHBlcmNoLnB1c2goY3VyY29sKVxyXG4gICAgICAgICAgICAgICAgbGV0IGluc3QgPSB0aGlzLmNyZWF0X1Byb2R1Y3Rpb25DdWJlKGNoaWxkSW5kZXgsIGN1cmNvbCk7XHJcbiAgICAgICAgICAgICAgICBpbnN0LnNldFBvc2l0aW9uKHRoaXMuc3Bhd25PcmlnaW4uYWRkKGNjLnYyKGN1cmNvbCAqICh0aGlzLmN1YmVXaWRnZXQgKyB0aGlzLmN1YmVJbnRlcmF2YWwpLCAwKSkpXHJcbiAgICAgICAgICAgICAgICBjaGlsZFtjdXJjb2xdID0gaW5zdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGVyY2gubGVuZ3RoID49ICh0aGlzLmNvbHVtbiAtIDEpKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOS4quaWueWdl+WcqOWghuWPoOWxglxyXG4gICAgICog5bm25a6M5oiQ5Z+65pys5p6E6YCg6KGM5Li6XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdF9Qcm9kdWN0aW9uQ3ViZSh0cmVlSW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcik6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBpbnN0ID0gdGhpcy5jcmVhdEFjdG9yKHRoaXMuY3ViZSwgY2N2di5sYXllcnNbMV0pXHJcbiAgICAgICAgdHJ5IHsgaW5zdC5nZXRDb21wb25lbnQoJ0Jsb2NrJykuaW5pdCh0cmVlSW5kZXgpOyB9XHJcbiAgICAgICAgY2F0Y2ggeyBjYy5sb2coXCLmib7kuI3liLDnu4Tku7Y6IEJsb2NrXCIpOyB9XHJcbiAgICAgICAgdGhpcy5iaW5kTW92ZW1lbnRfY29uc2VxdWVudChpbnN0KTtcclxuICAgICAgICByZXR1cm4gaW5zdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXQgaW5zdGFudGlhdGVcclxuICAgICAqIEBwYXJhbSB7Y2MuUHJlZmFifSBhY3RvciDlrp7kvovljJbnmoTnm67moIdcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcGFyZW50IOWunuS+i+WMlueahOWvueixoeWwhuimgemZhOWKoOeahOebruagh++8jOWmguaenOeVmeepuuWImeS4uuiHqui6q1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdEFjdG9yKGFjdG9yOiBjYy5QcmVmYWIsIHBhcmVudD86IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0ID0gY2MuaW5zdGFudGlhdGUoYWN0b3IpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHsgcGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5ub2RlLmFkZENoaWxkKGFjdG9ySW5zdCk7IGNjLmxvZyhhY3Rvckluc3QpIH1cclxuICAgICAgICByZXR1cm4gYWN0b3JJbnN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5HlrprpobrlkJHnp7vliqjmjqfliLbnu4Tku7ZcclxuICAgICAqIEBwYXJhbSBpbnN0IFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYmluZE1vdmVtZW50X2NvbnNlcXVlbnQoaW5zdCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb3ZlbWVudCA9IG5ldyBQYXduTW92ZW1lbnQoaW5zdCk7XHJcbiAgICAgICAgbW92ZW1lbnQubWF4U3BlZWQgPSB0aGlzLmdsb2JhbFNwZWVkO1xyXG4gICAgICAgIG1vdmVtZW50LnBlcm1EcmFnID0gMDtcclxuICAgICAgICBtb3ZlbWVudC5wZXJtRm9yY2UgPSBuZXcgY2MuVmVjMigwLCAtMTIwMCk7XHJcbiAgICAgICAgbW92ZW1lbnQudmVsb2NpdHkgPSBuZXcgY2MuVmVjMigwLCAtdGhpcy5nbG9iYWxTcGVlZCk7XHJcbiAgICAgICAgaW5zdFsnb3RoZXJNb3ZlbWVudCddID0gbW92ZW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWklumDqOeOqeWutumYteiQpeWkjeWItue7keWumuaOp+WItue7hOS7tlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBiaW5kTW92ZW1lbnQobm9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmluZE1vdmVtZW50X2NvbnNlcXVlbnQobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0lHTlBPU1QgbWFjcm8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIflrprnmoTpooTliLbkvZPmlrnlnZdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlKCk6IGNjLlByZWZhYiB7IHJldHVybiBjY3Z2LndhcmVob3VzZVsncHJlZmFicyddWydibG9jayddOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeaJgOacieeahOWIl+aVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbHVtbigpOiBudW1iZXIgeyByZXR1cm4gNDsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bliJfmlbDlhoXnmoTpmo/mnLrmlbTmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCByYW5kb21JbkNvbHVtbigpOiBudW1iZXIgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb2x1bW4pOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaWueWdl+aJgOWNoOWuveW6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGN1YmVXaWRnZXQoKTogbnVtYmVyIHsgcmV0dXJuIDE3NzsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfpl7TpmpRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlSW50ZXJhdmFsKCk6IG51bWJlciB7IHJldHVybiAzOyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaWueWdl+aJgOWNoOmrmOW6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGN1YmVIZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfor57nlJ/ljp/ngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGF3bk9yaWdpbigpOiBjYy5WZWMyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3NwYXduT3JpZ2luKVxyXG4gICAgICAgICAgICB0aGlzLl9zcGF3bk9yaWdpbiA9IGNjLnYyKFxyXG4gICAgICAgICAgICAgICAgLSh0aGlzLmNvbHVtbiAtIDEpICogKHRoaXMuY3ViZVdpZGdldCArIHRoaXMuY3ViZUludGVyYXZhbCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgY2Mud2luU2l6ZS5oZWlnaHQgLyAyICsgdGhpcy5jdWJlSGVpZ2h0ICogMS40XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3Bhd25PcmlnaW47XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX3NwYXduT3JpZ2luOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5q+P6KGM5pyA5bCP5Y+v6K+e55Sf55qE5pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3Bhd25NaW5Db3VudCgpOiBudW1iZXIgeyByZXR1cm4gMjsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiKrmraLnur/lsY/luZXnmb7liIbmr5RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzZXBhcmF0b3JQZXJjZW50KCk6IG51bWJlciB7IHJldHVybiAuMjkwNjI1OyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFqOWxgOmAn+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdsb2JhbFNwZWVkKCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W546p5a625pa55Z2X6YCf5bqmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGxheWVyU3BlZWQoKTogbnVtYmVyIHsgcmV0dXJuIDEwMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5qCR6KeE5qihXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdHJlZVNpemUoKTogbnVtYmVyIHsgcmV0dXJuIDMwOyB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/effect/PlayDraAniAndDestory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73332y62LZEeovkfyeA889n', 'PlayDraAniAndDestory');
// scripts/game/effect/PlayDraAniAndDestory.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayAnimationAndDestroy = /** @class */ (function (_super) {
    __extends(PlayAnimationAndDestroy, _super);
    function PlayAnimationAndDestroy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyTime = .3;
        return _this;
    }
    PlayAnimationAndDestroy.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.node.destroy(); }, this.destroyTime);
    };
    __decorate([
        property(cc.Float)
    ], PlayAnimationAndDestroy.prototype, "destroyTime", void 0);
    PlayAnimationAndDestroy = __decorate([
        ccclass
    ], PlayAnimationAndDestroy);
    return PlayAnimationAndDestroy;
}(cc.Component));
exports.default = PlayAnimationAndDestroy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZWZmZWN0XFxQbGF5RHJhQW5pQW5kRGVzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQVFDO1FBTkcsaUJBQVcsR0FBVyxFQUFFLENBQUM7O0lBTTdCLENBQUM7SUFKRyx1Q0FBSyxHQUFMO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0VBQ007SUFGUix1QkFBdUI7UUFEM0MsT0FBTztPQUNhLHVCQUF1QixDQVEzQztJQUFELDhCQUFDO0NBUkQsQUFRQyxDQVJvRCxFQUFFLENBQUMsU0FBUyxHQVFoRTtrQkFSb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNzIGZyb20gXCIuLi9TZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUFuaW1hdGlvbkFuZERlc3Ryb3kgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgZGVzdHJveVRpbWU6IG51bWJlciA9IC4zO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5ub2RlLmRlc3Ryb3koKSB9LCB0aGlzLmRlc3Ryb3lUaW1lKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/AudioClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36c3enm5JFMloZGQzENLEyQ', 'AudioClass');
// scripts/base/class/AudioClass.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundLibrary = exports.ESoundChannel = exports.ESoundTrack = exports.SoundPlayer = void 0;
var SoundPlayerClass_1 = require("./SoundPlayerClass");
exports.SoundPlayer = SoundPlayerClass_1.default;
/**
 * 声音轨道序列枚举
 * 每个轨道序列中包含多个通道，每个通道都是独立的，可以随意推入并用预设器控制
 */
var ESoundTrack;
(function (ESoundTrack) {
    ESoundTrack[ESoundTrack["ambient"] = 0] = "ambient";
    ESoundTrack[ESoundTrack["bypass"] = 1] = "bypass";
    ESoundTrack[ESoundTrack["focus"] = 2] = "focus";
    ESoundTrack[ESoundTrack["other"] = 3] = "other";
})(ESoundTrack || (ESoundTrack = {}));
exports.ESoundTrack = ESoundTrack;
/**
 * 声轨通道枚举
 * 通道用来细分轨道序列，每个通道都是独立的，可以随意推入并用预设器控制
 */
var ESoundChannel;
(function (ESoundChannel) {
    ESoundChannel[ESoundChannel["_track_0"] = 0] = "_track_0";
    ESoundChannel[ESoundChannel["_track_1"] = 1] = "_track_1";
})(ESoundChannel || (ESoundChannel = {}));
exports.ESoundChannel = ESoundChannel;
/**
 * 声音单例库类
 */
var SoundLibrary = /** @class */ (function () {
    function SoundLibrary() {
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
        set: function (sl) { if (!this._SoundList_ReadyLaunched)
            this._SoundList_ReadyLaunched = []; this.readyLaunchedList.push(sl); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundLibrary, "soundEditingTrack", {
        /**
         * 获取声音编辑轨道
         */
        get: function () {
            this._SoundEditingTrack = this._SoundEditingTrack || (function () {
                var soundEditingTrack = {};
                Object.keys(ESoundTrack).forEach(function (ST) {
                    if (isNaN(parseInt(ST))) {
                        Object.keys(ESoundChannel).forEach(function (SC) {
                            if (isNaN(parseInt(SC))) {
                                soundEditingTrack[ST + SC] = [];
                            }
                        });
                    }
                });
                return soundEditingTrack;
            })();
            return this._SoundEditingTrack;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取枚举上的声轨
     * @param tarck
     * @param channel
     * @returns
     */
    SoundLibrary.getEditTrack = function (tarck, channel) {
        return this.soundEditingTrack[ESoundTrack[tarck] + ESoundChannel[channel]];
    };
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
    /**
     * 待发列表
     */
    SoundLibrary._SoundList_ReadyLaunched = [];
    /**
     * 声音编辑轨道
     */
    SoundLibrary._SoundEditingTrack = null;
    SoundLibrary._SoundManager = null;
    return SoundLibrary;
}());
exports.SoundLibrary = SoundLibrary;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXEF1ZGlvQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQTZDO0FBZ0h6QyxzQkFoSEcsMEJBQVcsQ0FnSEg7QUF2RmY7OztHQUdHO0FBQ0gsSUFBSyxXQUtKO0FBTEQsV0FBSyxXQUFXO0lBQ1osbURBQU8sQ0FBQTtJQUNQLGlEQUFNLENBQUE7SUFDTiwrQ0FBSyxDQUFBO0lBQ0wsK0NBQUssQ0FBQTtBQUNULENBQUMsRUFMSSxXQUFXLEtBQVgsV0FBVyxRQUtmO0FBa0ZHLGtDQUFXO0FBakZmOzs7R0FHRztBQUNILElBQUssYUFHSjtBQUhELFdBQUssYUFBYTtJQUNkLHlEQUFRLENBQUE7SUFDUix5REFBUSxDQUFBO0FBQ1osQ0FBQyxFQUhJLGFBQWEsS0FBYixhQUFhLFFBR2pCO0FBMkVHLHNDQUFhO0FBekVqQjs7R0FFRztBQUNIO0lBQUE7SUE2REEsQ0FBQztJQXJERyxzQkFBa0IsaUNBQWlCO1FBSG5DOztXQUVHO2FBQ0gsY0FBdUQsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUEsQ0FBQyxDQUFDO1FBQzdGOztXQUVHO2FBQ0gsVUFBb0MsRUFBaUIsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRSxDQUFBLENBQUMsQ0FBQzs7O09BSkE7SUFRN0Ysc0JBQWtCLDZCQUFhO1FBSC9COztXQUVHO2FBQ0gsVUFBZ0MsRUFBZSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCO1lBQUUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQVM1SixzQkFBa0IsaUNBQWlCO1FBSG5DOztXQUVHO2FBQ0g7WUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUM7Z0JBQ2xELElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7b0JBQy9CLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO3dCQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7NEJBQ2pDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dDQUNyQixpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDOzZCQUNuQzt3QkFDTCxDQUFDLENBQUMsQ0FBQztxQkFDTjtnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLGlCQUFpRCxDQUFDO1lBQzdELENBQUMsQ0FBQyxFQUFFLENBQUE7WUFDSixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQTtRQUNsQyxDQUFDOzs7T0FBQTtJQUNEOzs7OztPQUtHO0lBQ1cseUJBQVksR0FBMUIsVUFBMkIsS0FBa0IsRUFBRSxPQUFzQjtRQUNqRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQU1ELHNCQUFrQiw0QkFBWTtRQUg5Qjs7V0FFRzthQUNILGNBQWlELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQSxDQUFDLENBQUM7UUFDNUU7O1dBRUc7YUFDSCxVQUErQixHQUFpQixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBLENBQUMsQ0FBQzs7O09BSkY7SUF0RDVFOztPQUVHO0lBQ2MscUNBQXdCLEdBQWtCLEVBQUUsQ0FBQztJQWM5RDs7T0FFRztJQUNjLCtCQUFrQixHQUFpQyxJQUFJLENBQUM7SUE4QnhELDBCQUFhLEdBQWlCLElBQUksQ0FBQztJQVV4RCxtQkFBQztDQTdERCxBQTZEQyxJQUFBO0FBVUcsb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU291bmRQbGF5ZXIgZnJvbSBcIi4vU291bmRQbGF5ZXJDbGFzc1wiO1xyXG4vKipcclxuICog6YCa55So6aKE6K6+5Zmo5o6l5Y+jXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVByZWluc3RhbGxJbnRlcmZhY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjliqDlhaXluo/liJfml7booqvlv73nlaXvvIzmiJblnKjlvIDlp4vkvZzkuLrmjIHkuYXmlbDmja7lrZjlnKhcclxuICAgICAqL1xyXG4gICAgaWdub3JlU2VxdWVuY2U6IGJvb2xlYW4sXHJcbiAgICAvKipcclxuICAgICAqIOWFi+mahuatpOmihOiuvuWZqCAgXHJcbiAgICAgKiDlsIbov5Tlm57mlrDnmoTpooTorr7lmajvvIzlubbph43mlrDmiafooYzluo/liJfov4fnqItcclxuICAgICAqL1xyXG4gICAgY2xvbmcoKTogSVByZWluc3RhbGxJbnRlcmZhY2UsXHJcbn1cclxuLyoqXHJcbiAqIOWjsOmfs+i9qOmBk+W6j+WIl+aOpeWPo1xyXG4gKi9cclxuaW50ZXJmYWNlIElTb3VuZFRyYWNrU2VxdWVuY2VJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogU291bmRQbGF5ZXJbXSxcclxufVxyXG4vKipcclxuICog5Zy65pmv5aOw6Z+z5pKt5pS+5o6n5Yi25Zmo5o6l5Y+jXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVNjZW5lU291bmRQbGF5YmFja0NvbnRyb2xsZXJJbnRlcmZhY2UgeyB9XHJcbi8qKlxyXG4gKiDlo7Dpn7PovajpgZPluo/liJfmnprkuL4gIFxyXG4gKiDmr4/kuKrovajpgZPluo/liJfkuK3ljIXlkKvlpJrkuKrpgJrpgZPvvIzmr4/kuKrpgJrpgZPpg73mmK/ni6znq4vnmoTvvIzlj6/ku6Xpmo/mhI/mjqjlhaXlubbnlKjpooTorr7lmajmjqfliLZcclxuICovXHJcbmVudW0gRVNvdW5kVHJhY2sge1xyXG4gICAgYW1iaWVudCxcclxuICAgIGJ5cGFzcyxcclxuICAgIGZvY3VzLFxyXG4gICAgb3RoZXJcclxufVxyXG4vKipcclxuICog5aOw6L2o6YCa6YGT5p6a5Li+ICBcclxuICog6YCa6YGT55So5p2l57uG5YiG6L2o6YGT5bqP5YiX77yM5q+P5Liq6YCa6YGT6YO95piv54us56uL55qE77yM5Y+v5Lul6ZqP5oSP5o6o5YWl5bm255So6aKE6K6+5Zmo5o6n5Yi2XHJcbiAqL1xyXG5lbnVtIEVTb3VuZENoYW5uZWwge1xyXG4gICAgX3RyYWNrXzAsXHJcbiAgICBfdHJhY2tfMVxyXG59XHJcblxyXG4vKipcclxuICog5aOw6Z+z5Y2V5L6L5bqT57G7XHJcbiAqL1xyXG5jbGFzcyBTb3VuZExpYnJhcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvoXlj5HliJfooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU291bmRMaXN0X1JlYWR5TGF1bmNoZWQ6IFNvdW5kUGxheWVyW10gPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b6F5Y+R5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHJlYWR5TGF1bmNoZWRMaXN0KCk6IFNvdW5kUGxheWVyW10geyByZXR1cm4gdGhpcy5fU291bmRMaXN0X1JlYWR5TGF1bmNoZWQgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lvoXlj5HliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgcmVhZHlMYXVuY2hlZExpc3Qoc2w6IFNvdW5kUGxheWVyW10pIHsgdGhpcy5fU291bmRMaXN0X1JlYWR5TGF1bmNoZWQgPSBzbCB9XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOW+heWPkeWIl+ihqOmhueebrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCByZWFkeUxhdW5jaGVkKHNsOiBTb3VuZFBsYXllcikgeyBpZiAoIXRoaXMuX1NvdW5kTGlzdF9SZWFkeUxhdW5jaGVkKSB0aGlzLl9Tb3VuZExpc3RfUmVhZHlMYXVuY2hlZCA9IFtdOyB0aGlzLnJlYWR5TGF1bmNoZWRMaXN0LnB1c2goc2wpIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWjsOmfs+e8lui+kei9qOmBk1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9Tb3VuZEVkaXRpbmdUcmFjazogSVNvdW5kVHJhY2tTZXF1ZW5jZUludGVyZmFjZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWjsOmfs+e8lui+kei9qOmBk1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzb3VuZEVkaXRpbmdUcmFjaygpOiBJU291bmRUcmFja1NlcXVlbmNlSW50ZXJmYWNlIHtcclxuICAgICAgICB0aGlzLl9Tb3VuZEVkaXRpbmdUcmFjayA9IHRoaXMuX1NvdW5kRWRpdGluZ1RyYWNrIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzb3VuZEVkaXRpbmdUcmFjayA9IHt9O1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhFU291bmRUcmFjaykuZm9yRWFjaChTVCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQoU1QpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKEVTb3VuZENoYW5uZWwpLmZvckVhY2goU0MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQoU0MpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291bmRFZGl0aW5nVHJhY2tbU1QgKyBTQ10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdW5kRWRpdGluZ1RyYWNrIGFzIElTb3VuZFRyYWNrU2VxdWVuY2VJbnRlcmZhY2U7XHJcbiAgICAgICAgfSkoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9Tb3VuZEVkaXRpbmdUcmFja1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnprkuL7kuIrnmoTlo7DovahcclxuICAgICAqIEBwYXJhbSB0YXJjayBcclxuICAgICAqIEBwYXJhbSBjaGFubmVsIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RWRpdFRyYWNrKHRhcmNrOiBFU291bmRUcmFjaywgY2hhbm5lbDogRVNvdW5kQ2hhbm5lbCk6IFNvdW5kUGxheWVyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdW5kRWRpdGluZ1RyYWNrW0VTb3VuZFRyYWNrW3RhcmNrXSArIEVTb3VuZENoYW5uZWxbY2hhbm5lbF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX1NvdW5kTWFuYWdlcjogY2MuQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5aOw6Z+z5o6n5Yi2566h55CG5ZmoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNvdW5kTWFuYWdlcigpOiBjYy5Db21wb25lbnQgeyByZXR1cm4gdGhpcy5fU291bmRNYW5hZ2VyIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5aOw6Z+z5o6n5Yi2566h55CG5ZmoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNvdW5kTWFuYWdlcihTUE06IGNjLkNvbXBvbmVudCkgeyB0aGlzLl9Tb3VuZE1hbmFnZXIgPSBTUE0gfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIElQcmVpbnN0YWxsSW50ZXJmYWNlLFxyXG4gICAgU291bmRQbGF5ZXIsXHJcbiAgICBJU291bmRUcmFja1NlcXVlbmNlSW50ZXJmYWNlLFxyXG4gICAgSVNjZW5lU291bmRQbGF5YmFja0NvbnRyb2xsZXJJbnRlcmZhY2UsXHJcblxyXG4gICAgRVNvdW5kVHJhY2ssICAgIC8vIOWjsOmfs+i9qOmBk+aemuS4vlxyXG4gICAgRVNvdW5kQ2hhbm5lbCwgIC8vIOWjsOmfs+mAmumBk+aemuS4vlxyXG4gICAgU291bmRMaWJyYXJ5LCAgIC8vIOWjsOmfs+W6k1xyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/SoundPlayerClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '315147yKa1BU7g215x+QxIf', 'SoundPlayerClass');
// scripts/base/class/SoundPlayerClass.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var AudioClass_1 = require("./AudioClass");
/**
 * 声音播放器框架
 */
var SoundPlayer_Framework = /** @class */ (function () {
    /**
     * 框架提供播放器基本互动属性
     * 不参与任何功能性设计
     */
    function SoundPlayer_Framework() {
        this.ignoreSequence = false;
        // tag 宏                                                                                                
        // tag 组件参数方法 
        /**
         * 声音组件实例
         */
        this._AudioSourceComponent = null;
        /**
         * 播放器循环次数
         */
        this._LoopTime = null;
    }
    SoundPlayer_Framework.prototype.clong = function () {
        return new SoundPlayer(this.clip, this.loop, this.volume);
    };
    Object.defineProperty(SoundPlayer_Framework.prototype, "audioSourceComponent", {
        get: function () { return this._AudioSourceComponent; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer_Framework.prototype, "isPlaying", {
        get: function () { return this._AudioSourceComponent.isPlaying; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer_Framework.prototype, "clip", {
        /**
         * 获取音频资产文件
         */
        get: function () { return this._AudioSourceComponent.clip; },
        /**
         * 设置音频资产文件
         */
        set: function (value) { this._AudioSourceComponent.clip = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer_Framework.prototype, "loop", {
        /**
         * 获取是否循环
         */
        get: function () { return this._AudioSourceComponent.loop; },
        /**
         * 设置是否循环
         */
        set: function (value) { this._AudioSourceComponent.loop = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer_Framework.prototype, "volume", {
        /**
         * 获取音量
         */
        get: function () { return this._AudioSourceComponent.volume; },
        /**
         * 设置音量
         */
        set: function (value) { this._AudioSourceComponent.volume = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlayer_Framework.prototype, "mute", {
        /**
         * 获取是否静音
         */
        get: function () { return this._AudioSourceComponent.mute; },
        /**
         * 设置是否静音
         */
        set: function (value) { this._AudioSourceComponent.mute = value; },
        enumerable: false,
        configurable: true
    });
    // tag 组件控制方法 
    /**
     * 播放音频剪辑。
     * @returns
     */
    SoundPlayer_Framework.prototype.play = function () { return this._AudioSourceComponent.play(); };
    /**
     * 停止当前音频剪辑。
     * @returns
     */
    SoundPlayer_Framework.prototype.stop = function () { return this._AudioSourceComponent.stop(); };
    /**
     * 暂停当前音频剪辑。
     * @returns
     */
    SoundPlayer_Framework.prototype.pause = function () { return this._AudioSourceComponent.pause(); };
    /**
     * 恢复播放。
     * @returns
     */
    SoundPlayer_Framework.prototype.resume = function () { return this._AudioSourceComponent.resume(); };
    /**
     * 从头开始播放。
     * @returns
     */
    SoundPlayer_Framework.prototype.rewind = function () { return this._AudioSourceComponent.rewind(); };
    /**
     * 获取当前的播放时间
     * @returns
     */
    SoundPlayer_Framework.prototype.getCurrentTime = function () { return this._AudioSourceComponent.getCurrentTime(); };
    /**
     * 设置当前的播放时间
     * @param time
     * @returns
     */
    SoundPlayer_Framework.prototype.setCurrentTime = function (time) { return this._AudioSourceComponent.setCurrentTime(time); };
    /**
     * 获取当前音频的长度
     * @returns
     */
    SoundPlayer_Framework.prototype.getDuration = function () { return this._AudioSourceComponent.getDuration(); };
    return SoundPlayer_Framework;
}());
/**
 * 声音播放器类
 *
 */
var SoundPlayer = /** @class */ (function (_super) {
    __extends(SoundPlayer, _super);
    function SoundPlayer(AudioClip, loop, volume) {
        var _this = _super.call(this) || this;
        if (!AudioClip)
            return _this;
        if (AudioClass_1.SoundLibrary.soundManager) {
            _this._AudioSourceComponent = AudioClass_1.SoundLibrary.soundManager.node.addComponent(cc.AudioSource);
        }
        else {
            cc.audioEngine.playMusic(AudioClip, typeof loop == 'boolean' ? loop : loop < 0);
            cc.warn("\u8BF7\u68C0\u67E5\u573A\u666F\u4E2D\u662F\u5426\u5B58\u5728\u64AD\u653E\u7BA1\u7406\u5668\u7EC4\u4EF6\uFF0C\u6216\u662F\u5B58\u5728\u5728onload\u9636\u6BB5\u64AD\u653E\u7684\u97F3\u9891\uFF0C\n              \u5F53\u524D\u64AD\u653E\u5668\u5DF2\u9000\u5316\u4E3A\u5355\u4F8B\uFF0C\u65E0\u6CD5\u5E76\u53D1\u64AD\u653E\uFF0C\u8BF7\u6089\u77E5\uFF0C\u64AD\u653E\u8D44\u6E90\uFF1A" + AudioClip);
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
        AudioClass_1.SoundLibrary.readyLaunched = _this;
        return _this;
    }
    return SoundPlayer;
}(SoundPlayer_Framework));
exports.default = SoundPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFNvdW5kUGxheWVyQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtFO0FBQ2xFOztHQUVHO0FBQ0g7SUFDSTs7O09BR0c7SUFDSDtRQU1PLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRXZDLHdHQUF3RztRQUV4RyxjQUFjO1FBRWQ7O1dBRUc7UUFDTywwQkFBcUIsR0FBbUIsSUFBSSxDQUFDO1FBZ0Z2RDs7V0FFRztRQUNPLGNBQVMsR0FBVyxJQUFJLENBQUM7SUFsR25CLENBQUM7SUFFVixxQ0FBSyxHQUFaO1FBQ0ksT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFZRCxzQkFBVyx1REFBb0I7YUFBL0IsY0FBb0QsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUV2RixzQkFBVyw0Q0FBUzthQUFwQixjQUFrQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUkvRSxzQkFBVyx1Q0FBSTtRQUhmOztXQUVHO2FBQ0gsY0FBa0MsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQztRQUMxRTs7V0FFRzthQUNILFVBQWdCLEtBQW1CLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDOzs7T0FKTjtJQVExRSxzQkFBVyx1Q0FBSTtRQUhmOztXQUVHO2FBQ0gsY0FBNkIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQztRQUNyRTs7V0FFRzthQUNILFVBQWdCLEtBQWMsSUFBSSxJQUFJLENBQUMs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QyxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRTtRQUNELEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQseUJBQVksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDOztJQUN0QyxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQXBFQSxBQW9FQyxDQXBFd0MscUJBQXFCLEdBb0U3RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcmVpbnN0YWxsSW50ZXJmYWNlLCBTb3VuZExpYnJhcnkgfSBmcm9tIFwiLi9BdWRpb0NsYXNzXCI7XHJcbi8qKlxyXG4gKiDlo7Dpn7Pmkq3mlL7lmajmoYbmnrZcclxuICovXHJcbmNsYXNzIFNvdW5kUGxheWVyX0ZyYW1ld29yayBpbXBsZW1lbnRzIElQcmVpbnN0YWxsSW50ZXJmYWNlIHtcclxuICAgIC8qKlxyXG4gICAgICog5qGG5p625o+Q5L6b5pKt5pS+5Zmo5Z+65pys5LqS5Yqo5bGe5oCnXHJcbiAgICAgKiDkuI3lj4LkuI7ku7vkvZXlip/og73mgKforr7orqFcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmcoKTogSVByZWluc3RhbGxJbnRlcmZhY2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgU291bmRQbGF5ZXIodGhpcy5jbGlwLCB0aGlzLmxvb3AsIHRoaXMudm9sdW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaWdub3JlU2VxdWVuY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyB0YWcg5a6PICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gdGFnIOe7hOS7tuWPguaVsOaWueazlSBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWjsOmfs+e7hOS7tuWunuS+i1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX0F1ZGlvU291cmNlQ29tcG9uZW50OiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGF1ZGlvU291cmNlQ29tcG9uZW50KCk6IGNjLkF1ZGlvU291cmNlIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzUGxheWluZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50LmlzUGxheWluZyB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumfs+mikei1hOS6p+aWh+S7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNsaXAoKTogY2MuQXVkaW9DbGlwIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50LmNsaXAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7pn7PpopHotYTkuqfmlofku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjbGlwKHZhbHVlOiBjYy5BdWRpb0NsaXApIHsgdGhpcy5fQXVkaW9Tb3VyY2VDb21wb25lbnQuY2xpcCA9IHZhbHVlIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5piv5ZCm5b6q546vXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbG9vcCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50Lmxvb3AgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7mmK/lkKblvqrnjq9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBsb29wKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50Lmxvb3AgPSB2YWx1ZSB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumfs+mHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHZvbHVtZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VDb21wb25lbnQudm9sdW1lIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6Z+z6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdm9sdW1lKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fQXVkaW9Tb3VyY2VDb21wb25lbnQudm9sdW1lID0gdmFsdWUgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmmK/lkKbpnZnpn7NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBtdXRlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VDb21wb25lbnQubXV0ZSB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaYr+WQpumdmemfs1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG11dGUodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fQXVkaW9Tb3VyY2VDb21wb25lbnQubXV0ZSA9IHZhbHVlIH1cclxuXHJcbiAgICAvLyB0YWcg57uE5Lu25o6n5Yi25pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6Z+z6aKR5Ymq6L6R44CCXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXkoKTogdm9pZCB7IHJldHVybiB0aGlzLl9BdWRpb1NvdXJjZUNvbXBvbmVudC5wbGF5KCkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLlvZPliY3pn7PpopHliarovpHjgIJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50LnN0b3AoKSB9XHJcbiAgICAvKipcclxuICAgICAqIOaaguWBnOW9k+WJjemfs+mikeWJqui+keOAglxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50LnBhdXNlKCkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmgaLlpI3mkq3mlL7jgIJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzdW1lKCk6IHZvaWQgeyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VDb21wb25lbnQucmVzdW1lKCkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDku47lpLTlvIDlp4vmkq3mlL7jgIJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV3aW5kKCk6IHZvaWQgeyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VDb21wb25lbnQucmV3aW5kKCkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3nmoTmkq3mlL7ml7bpl7RcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudFRpbWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50LmdldEN1cnJlbnRUaW1lKCkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lvZPliY3nmoTmkq3mlL7ml7bpl7RcclxuICAgICAqIEBwYXJhbSB0aW1lIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50VGltZSh0aW1lOiBudW1iZXIpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fQXVkaW9Tb3VyY2VDb21wb25lbnQuc2V0Q3VycmVudFRpbWUodGltZSkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3pn7PpopHnmoTplb/luqZcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RHVyYXRpb24oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50LmdldER1cmF0aW9uKCkgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7lmajlvqrnjq/mrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9Mb29wVGltZTogbnVtYmVyID0gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWjsOmfs+aSreaUvuWZqOexu1xyXG4gKiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kUGxheWVyIGV4dGVuZHMgU291bmRQbGF5ZXJfRnJhbWV3b3JrIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOS4qumfs+S5kOaSreaUvuWZqOWunuS+iyAgXHJcbiAgICAgKiDms6jmhI/vvIzor7flnKhvbmxvYWTpmLbmrrXkuYvlkI7lho3ov5vooYzlrp7kvovljJbvvIzlkKbliJnkvJrpgIDljJbkuLrljZXkvovmkq3mlL4gIFxyXG4gICAgICog5YW25LuW6aKE6K6+5Zmo5b+F6aG75Zyo5pKt5pS+5Zmo5LmL5ZCO6L+b6KGM5a6e5L6L5YyW5oiW5aSN5Yi2XHJcbiAgICAgKiDpu5jorqTmkq3mlL7kuIDmrKHvvIzpn7Pph48xXHJcbiAgICAgKiBAcGFyYW0gQXVkaW9DbGlwIOWjsOmfs+i1hOa6kO+8jOWmguaenOS4jee7meWumui1hOa6kOebruagh++8jOaSreaUvuWZqOWwhumAgOWMluS4uuiuvue9ruWZqFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihBdWRpb0NsaXA/OiBjYy5BdWRpb0NsaXApXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOS4qumfs+S5kOaSreaUvuWZqOWunuS+iyAgXHJcbiAgICAgKiDms6jmhI/vvIzor7flnKhvbmxvYWTpmLbmrrXkuYvlkI7lho3ov5vooYzlrp7kvovljJbvvIzlkKbliJnkvJrpgIDljJbkuLrljZXkvovmkq3mlL4gIFxyXG4gICAgICog5YW25LuW6aKE6K6+5Zmo5b+F6aG75Zyo5pKt5pS+5Zmo5LmL5ZCO6L+b6KGM5a6e5L6L5YyW5oiW5aSN5Yi2XHJcbiAgICAgKiBAcGFyYW0gQXVkaW9DbGlwIOWjsOmfs+i1hOa6kFxyXG4gICAgICogQHBhcmFtIGxvb3Ag5b6q546v5qyh5pWw77yMLTHkuLrml6DpmZDlvqrnjq/vvIww5Li65pKt5pS+5LiA5qyh77yMPjDkuLrlvqrnjq/mjIflrprmrKHmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoQXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAsIGxvb3A6IG51bWJlcilcclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA5Liq6Z+z5LmQ5pKt5pS+5Zmo5a6e5L6LICBcclxuICAgICAqIOazqOaEj++8jOivt+WcqG9ubG9hZOmYtuauteS5i+WQjuWGjei/m+ihjOWunuS+i+WMlu+8jOWQpuWImeS8mumAgOWMluS4uuWNleS+i+aSreaUviAgXHJcbiAgICAgKiDlhbbku5bpooTorr7lmajlv4XpobvlnKjmkq3mlL7lmajkuYvlkI7ov5vooYzlrp7kvovljJbmiJblpI3liLZcclxuICAgICAqIEBwYXJhbSBBdWRpb0NsaXAg5aOw6Z+z6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gbG9vcCDmmK/lkKblvqrnjq9cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoQXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAsIGxvb3A6IGJvb2xlYW4pXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOS4qumfs+S5kOaSreaUvuWZqOWunuS+iyAgXHJcbiAgICAgKiDms6jmhI/vvIzor7flnKhvbmxvYWTpmLbmrrXkuYvlkI7lho3ov5vooYzlrp7kvovljJbvvIzlkKbliJnkvJrpgIDljJbkuLrljZXkvovmkq3mlL4gIFxyXG4gICAgICog5YW25LuW6aKE6K6+5Zmo5b+F6aG75Zyo5pKt5pS+5Zmo5LmL5ZCO6L+b6KGM5a6e5L6L5YyW5oiW5aSN5Yi2XHJcbiAgICAgKiBAcGFyYW0gQXVkaW9DbGlwIOWjsOmfs+i1hOa6kFxyXG4gICAgICogQHBhcmFtIGxvb3Ag5b6q546v5qyh5pWw77yMLTHkuLrml6DpmZDlvqrnjq/vvIww5Li65pKt5pS+5LiA5qyh77yMPjDkuLrlvqrnjq/mjIflrprmrKHmlbBcclxuICAgICAqIEBwYXJhbSB2b2x1bWUg6Z+z6YePMC0xXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKEF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwLCBsb29wOiBudW1iZXIsIHZvbHVtZTogbnVtYmVyKVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuIDkuKrpn7PkuZDmkq3mlL7lmajlrp7kvosgIFxyXG4gICAgICog5rOo5oSP77yM6K+35Zyob25sb2Fk6Zi25q615LmL5ZCO5YaN6L+b6KGM5a6e5L6L5YyW77yM5ZCm5YiZ5Lya6YCA5YyW5Li65Y2V5L6L5pKt5pS+ICBcclxuICAgICAqIOWFtuS7lumihOiuvuWZqOW/hemhu+WcqOaSreaUvuWZqOS5i+WQjui/m+ihjOWunuS+i+WMluaIluWkjeWItlxyXG4gICAgICogQHBhcmFtIEF1ZGlvQ2xpcCDlo7Dpn7PotYTmupBcclxuICAgICAqIEBwYXJhbSBsb29wIOaYr+WQpuW+queOr1xyXG4gICAgICogQHBhcmFtIHZvbHVtZSDpn7Pph48wLTFcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoQXVkaW9DbGlwOiBjYy5BdWRpb0NsaXAsIGxvb3A6IGJvb2xlYW4sIHZvbHVtZTogbnVtYmVyKVxyXG4gICAgY29uc3RydWN0b3IoQXVkaW9DbGlwPzogY2MuQXVkaW9DbGlwLCBsb29wPzogbnVtYmVyIHwgYm9vbGVhbiwgdm9sdW1lPzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBpZiAoIUF1ZGlvQ2xpcCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChTb3VuZExpYnJhcnkuc291bmRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0F1ZGlvU291cmNlQ29tcG9uZW50ID0gU291bmRMaWJyYXJ5LnNvdW5kTWFuYWdlci5ub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoQXVkaW9DbGlwLCB0eXBlb2YgbG9vcCA9PSAnYm9vbGVhbicgPyBsb29wIDogbG9vcCA8IDApXHJcbiAgICAgICAgICAgIGNjLndhcm4oYOivt+ajgOafpeWcuuaZr+S4reaYr+WQpuWtmOWcqOaSreaUvueuoeeQhuWZqOe7hOS7tu+8jOaIluaYr+WtmOWcqOWcqG9ubG9hZOmYtuauteaSreaUvueahOmfs+mike+8jFxyXG4gICAgICAgICAgICAgIOW9k+WJjeaSreaUvuWZqOW3sumAgOWMluS4uuWNleS+i++8jOaXoOazleW5tuWPkeaSreaUvu+8jOivt+aCieefpe+8jOaSreaUvui1hOa6kO+8miR7QXVkaW9DbGlwfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xpcCA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICBpZiAodHlwZW9mIGxvb3AgPT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbG9vcFRpbWUgPSBsb29wID8gTWF0aC5mbG9vcihsb29wKSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMubG9vcCA9IGxvb3BUaW1lIDwgMDtcclxuICAgICAgICAgICAgdGhpcy5fTG9vcFRpbWUgPSBsb29wVGltZSA8IDAgPyBudWxsIDogTWF0aC5taW4obG9vcFRpbWUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZSA/IE1hdGgubWF4KE1hdGgubWluKHZvbHVtZSwgMSksIDApIDogMTtcclxuICAgICAgICBTb3VuZExpYnJhcnkucmVhZHlMYXVuY2hlZCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

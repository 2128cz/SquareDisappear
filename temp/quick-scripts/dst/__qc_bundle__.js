
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
require('./assets/load/Loading');
require('./assets/scripts/base/class/ActorClass');
require('./assets/scripts/base/class/DevelopersToolClass');
require('./assets/scripts/base/class/DevelopersToolGlobal');
require('./assets/scripts/base/class/DiologClass');
require('./assets/scripts/base/class/DynamicPanelClass');
require('./assets/scripts/base/class/PanelTool');
require('./assets/scripts/base/class/PawnClass');
require('./assets/scripts/base/class/PawnMovement');
require('./assets/scripts/base/class/RigorousLibrary');
require('./assets/scripts/base/class/RigorousType');
require('./assets/scripts/base/tool/NoRootTree');
require('./assets/scripts/game/Block');
require('./assets/scripts/game/GameLevel');
require('./assets/scripts/game/GameUI');

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
        var _this = this;
        cc.director.loadScene((function () {
            return sceneTarget ?
                sceneTarget instanceof String ?
                    sceneTarget :
                    sceneTarget.name :
                _this.readyToGoSence.name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsbUZBQTBGO0FBTTFGO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBeVFDO1FBdFFHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFPekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQWlCO1FBUWpCLHdCQUFrQixHQUFHLENBQUMsQ0FBQztRQVV2Qiw4QkFBd0IsR0FBRyxFQUFFLENBQUM7UUFVOUIseUJBQW1CLEdBQUcsR0FBRyxDQUFDO1FBUTFCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGtCQUFrQjtRQU1sQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQTJCdEIscUdBQXFHO1FBRXJHOzs7V0FHRztRQUNILG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCOzs7V0FHRztRQUNILHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QiwwQkFBb0IsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLDJDQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFN0U7OztXQUdHO1FBQ0gsbUJBQWEsR0FBWSxLQUFLLENBQUM7O0lBbUtuQyxDQUFDO0lBL01HLHlHQUF5RztJQUV6Ryx3QkFBTSxHQUFOO1FBQ0ksT0FBTztRQUNQLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLFFBQVE7UUFDUixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEVBQUU7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QUFlO1lBQzVCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakQsQ0FBQzt3REFDd0I7SUFRMUI7UUFOQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixXQUFXLEVBQUUsT0FBTztZQUNwQixPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pELENBQUM7Z0RBQ2lCO0lBUW5CO1FBTEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVO1lBQ25CLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLE9BQU8sRUFBRSw4QkFBOEI7U0FDMUMsQ0FBQzttREFDb0I7SUF4REwsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXlRM0I7SUFBRCxjQUFDO0NBelFELEFBeVFDLENBelFvQyxFQUFFLENBQUMsU0FBUyxHQXlRaEQ7a0JBelFvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU0lHTlBPU1Qg5Yqg6L296aG16Z2i77yM5L2G5LiN5bGe5LqO5byA5Y+R57G7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuLi9zY3JpcHRzL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuLy8g6K6p57yW6K+R5Zmo5b+955Wl5bmz5Y+wQVBJ5oql6ZSZXHJcbmRlY2xhcmUgdmFyIHd4OiBhbnk7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ29Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h55uu5qCHKOWPr+mAiSlcIixcclxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoeebruagh+iuvuWumuWQjuWPr+S7peaMh+WumuWKqOeUu1wiLFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDov5vluqbmnaHpg6jliIZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAyLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHliqjnlLvpgJ/njodcIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzVXBkYXRlUmF0ZSA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDIsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeWKqOeUu+maj+acuuWPmOWMlumXtOmalFwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi6L+b5bqm5p2h5Yqo55S76ZqP5py65Y+Y5YyW6Ze06ZqUXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDsgfSxcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc1JhbmRvbUNoYW5nZVRpbWUgPSAuMjtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMiwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h5Yqo55S7562J5b6F5Yqg6L295a6M5oiQ5L2N572uXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaHliqjnlLvnrYnlvoXliqDovb3lrozmiJDkvY3nva5cIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzV2FpdEZvckxvYWQgPSAuODU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWujOaIkOWQjuaYvuekulwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5b2T5Yqg6L295a6M5oiQ5pe277yM6KKr5ZCv55So55qE6IqC54K5XCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDsgfSxcclxuICAgIH0pXHJcbiAgICByZWFkeVRvU2hvdyA9IG51bGw7XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg55uu5qCH5Zy65pmv6YOo5YiGXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlNjZW5lQXNzZXQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5a6M5oiQ5ZCO5Yqg6L2955uu5qCHXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLlvZPliqDovb3lrozmiJDml7bvvIzliqDovb3nmoTlnLrmma/vvIzlpoLmnpzmnInlkK/nlKjoioLngrnvvIzliJnnrYnlvoXoioLngrnop6blj5FcIixcclxuICAgIH0pXHJcbiAgICByZWFkeVRvR29TZW5jZSA9IG51bGw7XHJcblxyXG4gICAgLy8gVEFHIExJRkUtQ1lDTEUgY2FsbGJhY2tzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOaSreaUvuWKqOeUu1xyXG4gICAgICAgIHRoaXMucGxheUxvZ29BbmltYXRpb24oKTtcclxuICAgICAgICAvL+ajgOafpea4uOaIj+abtOaWsFxyXG4gICAgICAgIHRoaXMuY2hlY2tHYW1lTmV3VmVyc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOW8gOWni+WKoOi9veaJgOaciei1hOa6kFxyXG4gICAgICAgIHRoaXMubG9hZEFsbFJlc291cmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIOetieW+heWKqOeUu+aSreaUvuWujOavlVxyXG4gICAgICAgIGlmICghdGhpcy5hbmltYXRpb25PdmVyKSByZXR1cm47XHJcbiAgICAgICAgLy8g5aaC5p6c5pyJ5a6a5LmJ5YW25LuW57uE5Lu277yI5q+U5aaC5oyJ6ZKu77yJ5p2l5a6M5oiQ5Zy65pmv6L295YWl6Kem5Y+R5pe277yM562J5b6F57uE5Lu25ZON5bqUXHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHlUb1Nob3cgIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIOWQpuWImeWKoOi9veWujOaIkOWQjuebtOaOpei/m+WFpeWcuuaZr1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRQcm9ncmVzc0NvdW50ID49IHRoaXMubG9hZFBvcmdyZXNzQ291bnRNYXgpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWRTY2VuZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcg6Ieq5a6a5LmJ5pWw5YC8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/m+W6puadoeaVsOWAvFxyXG4gICAgICog5pWw5YC85bqU6K+l5ZyoMC0xMDBcclxuICAgICAqL1xyXG4gICAgUHJvZ3Jlc3NWYWx1ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6pu+8jOS7pei1hOa6kOi9veWFpeWujOaIkCsxXHJcbiAgICAgKiDlvZPovb3lhaXorqHmlbDnrYnkuo7otYTmupDmlbDml7bvvIzlrozmiJDliqDovb1cclxuICAgICAqL1xyXG4gICAgbG9hZFByb2dyZXNzQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBsb2FkUG9yZ3Jlc3NDb3VudE1heDogbnVtYmVyID0gT2JqZWN0LmtleXMoY2N2di5sb2FkUmVzb3VyY2VzY2F0YWxvZykubGVuZ3RoO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo55S75pKt5pS+5a6M5q+V5qCH6K6wXHJcbiAgICAgKiDmlbDlgLzlupTor6XlnKgwLTEwMFxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25PdmVyOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+aWueazlSBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuW8gOWni+WKqOeUu1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBsYXlMb2dvQW5pbWF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9nb05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuZGVsYXkoMSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25PdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWmguaenOatpOWcuuaZr+WGheacieWFtuS7luaMiemSruetiee7hOS7tuinpuWPkeaXtlxyXG4gICAgICog5Y+v5Lul6YCa6L+H6L+Z6YeM6L+b6KGM5Lit6L2sXHJcbiAgICAgKiDopoHmsYLmoLzlvI/kuLogb24gKyB0b2RvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGN1c3RvbURhdGUuaW5kZXhPZihcIm9uXCIpIDw9IDApXHJcbiAgICAgICAgICAgIHRoaXNbY3VzdG9tRGF0ZV0oKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMub25Mb2FkU2NlbmUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295Zy65pmvXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVUYXJnZXQg5Y+v6YCJ5Zy65pmv55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25Mb2FkU2NlbmUoc2NlbmVUYXJnZXQ/OiBzdHJpbmcgfCBjYy5TY2VuZUFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY2VuZVRhcmdldCA/XHJcbiAgICAgICAgICAgICAgICBzY2VuZVRhcmdldCBpbnN0YW5jZW9mIFN0cmluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVUYXJnZXQgOlxyXG4gICAgICAgICAgICAgICAgICAgIChzY2VuZVRhcmdldCBhcyBjYy5TY2VuZUFzc2V0KS5uYW1lIDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb0dvU2VuY2UubmFtZTtcclxuICAgICAgICB9KSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5a6i5oi356uv5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YWo6YOo6LWE5rqQ5YyFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZEFsbFJlc291cmNlcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzS2V5cyA9IE9iamVjdC5rZXlzKGNjdnYubG9hZFJlc291cmNlc2NhdGFsb2cpO1xyXG4gICAgICAgIHJlc0tleXMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzTG9nID0gY2N2di5sb2FkUmVzb3VyY2VzY2F0YWxvZ1t1cmxdO1xyXG4gICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtyZXNMb2cudXJsXSA9IGNjdnYud2FyZWhvdXNlW3Jlc0xvZy51cmxdIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXModXJsLCByZXNMb2cudHlwZSwgcmVzTG9nLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInnsbvliqDovb3otYTmupDljIVcclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSBzYXZlVXJsIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRSZXNvdXJjZXModXJsLCB0eXBlLCBzYXZlVXJsKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKHVybCwgdHlwZSxcclxuXHJcbiAgICAgICAgICAgIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5Zyo5Yqg6L29OlwiICsgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Qcm9ncmVzc1ZhbHVlID0gY29tcGxldGVkQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGDliqDovb3ov5vluqY6ICR7c2VsZi5Qcm9ncmVzc1ZhbHVlICogMTAwfSVgKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYOWKoOi9vSR7dHlwZX3ml7blj5HnlJ/plJnor69gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gKGRhdGFbaV0gaW5zdGFuY2VvZiBjYy5TcHJpdGVBdGxhcykgPyBkYXRhW2ldLm5hbWUuc2xpY2UoMCwgLTYpIDogZGF0YVtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXSBpbnN0YW5jZW9mIGNjLkpzb25Bc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2N2di53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldWydqc29uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtzYXZlVXJsXVtuYW1lXSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRQcm9ncmVzc0NvdW50Kys7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOW+ruS/oeW5s+WPsOabtOaWsCBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpea4uOaIj+aWsOeJiOacrFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrR2FtZU5ld1ZlcnNpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8g5LuF5YWz5rOo5b6u5L+h5bmz5Y+wXHJcbiAgICAgICAgaWYgKCEoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDlsJ3or5Xojrflj5blvq7kv6Hmm7TmlrDnrqHnkIblmahcclxuICAgICAgICBsZXQgdXBkYXRlTWFuYWdlcjogYW55O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIGlmICghdXBkYXRlTWFuYWdlcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICAvLyDojrflj5blhajlsYDllK/kuIDnmoTniYjmnKzmm7TmlrDnrqHnkIblmajvvIznlKjkuo7nrqHnkIblsI/nqIvluo/mm7TmlrBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyDnm5HlkKzlkJHlvq7kv6HlkI7lj7Dor7fmsYLmo4Dmn6Xmm7TmlrDnu5Pmnpzkuovku7YgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5pyJ5paw54mI5pys77yaXCIgKyByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5oYXNVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pyJ5paw54mI5pysICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g5bCP56iL5bqP5pyJ5paw54mI5pys77yM5Lya5Li75Yqo6Kem5Y+R5LiL6L295pON5L2cICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lvZPmlrDniYjmnKzkuIvovb3lrozmiJDvvIzkvJrov5vooYzlm57osIMgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5Y2V5Ye756Gu5a6a6YeN5ZCv5bCP56iL5bqPJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK/lsI/nqIvluo8gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIOWwj+eoi+W6j+acieaWsOeJiOacrO+8jOS8muS4u+WKqOinpuWPkeS4i+i9veaTjeS9nO+8iOaXoOmcgOW8gOWPkeiAheinpuWPke+8iSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+aWsOeJiOacrOS4i+i9veWksei0pe+8jOS8mui/m+ihjOWbnuiwgyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmo4Dmn6XliLDmnInmlrDniYjmnKzvvIzkvYbkuIvovb3lpLHotKXvvIzor7fnqI3lkI7lsJ3or5UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b6u5L+h5YiG5YyFXHJcbiAgICBwcml2YXRlIHd4U3VicGFja2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd3gubG9hZFN1YnBhY2thZ2Uoe1xyXG4gICAgICAgICAgICBuYW1lOiAncmVzb3VyY2VzJywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3miJDlip/lkI7pgJrov4cgc3VjY2VzcyDlm57osINcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZEFsbFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3lpLHotKXpgJrov4cgZmFpbCDlm57osINcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGxvYWQgJHtuYW1lfSBmYWlsYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/RigorousLibrary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '173f5UDvDNOh7BaDUvjJbqV', 'RigorousLibrary');
// scripts/base/class/RigorousLibrary.ts

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
            var getPointer = (this._StackGetPointer + value) % this._StackSize;
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
        get: function () {
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
        return this._HashList[index];
    };
    /**
     * 进栈
     * @param object
     */
    RigorousRingBuffer.prototype.push = function (object) {
        this._HashList[this._StackPutPointer] = object;
        this._$put = 1;
        if (this._StackIsFull)
            this._$get = 1;
        if (this._$put == this._$get)
            this._StackIsFull = true;
        return this._$put;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFJpZ29yb3VzTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSyxXQUVKO0FBRkQsV0FBSyxXQUFXO0lBQ1osaURBQU0sQ0FBQTtJQUFFLGlEQUFNLENBQUE7SUFBRSxtREFBTyxDQUFBO0lBQUUsaURBQU0sQ0FBQTtJQUFFLHVEQUFTLENBQUE7QUFDOUMsQ0FBQyxFQUZJLFdBQVcsS0FBWCxXQUFXLFFBRWY7QUFDRDtJQUFBO0lBRUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSw4Q0FBaUI7QUFHOUI7SUFBcUMsbUNBQWlCO0lBQXREOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxpQkFBaUIsR0FFckQ7QUFGWSwwQ0FBZTtBQUc1QjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQXFDLG1DQUFlO0lBQXBEOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxlQUFlLEdBRW5EO0FBRlksMENBQWU7QUFHNUI7SUFBc0Msb0NBQWU7SUFBckQ7O0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnFDLGVBQWUsR0FFcEQ7QUFGWSw0Q0FBZ0I7QUFHN0I7SUFBbUMsaUNBQWU7SUFBbEQ7O0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLENBRmtDLGVBQWUsR0FFakQ7QUFGWSxzQ0FBYTtBQUcxQjtJQUFxQyxtQ0FBZTtJQUFwRDs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsZUFBZSxHQUVuRDtBQUZZLDBDQUFlO0FBRzVCO0lBQWtDLGdDQUFlO0lBQWpE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bEIsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUiwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUixJQUFJO0FBQ0osMEJBQTBCO0FBQzFCLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImVudW0gU3lzQmFzZVR5cGUge1xyXG4gICAgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIG9iamVjdCwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yNCBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMyBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1Bvc3Rpb24gZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjMge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNSb3RhdGlvbiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yMyB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NjYWxlIGV4dGVuZHMgUmlnb3JvdXNWZWN0b3IzIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzVmVjdG9yMiBleHRlbmRzIFJpZ29yb3VzVmVjdG9yNCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NpemUgZXh0ZW5kcyBSaWdvcm91c1ZlY3RvcjIge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXg0IGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNNYXRyaXgzIGV4dGVuZHMgUmlnb3JvdXNNYXRyaXg0IHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzTWF0cml4MiBleHRlbmRzIFJpZ29yb3VzTWF0cml4NCB7XHJcblxyXG59XHJcbmltcG9ydCB7IEloYXNoIH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNIYXNoIGV4dGVuZHMgUmlnb3JvdXNWYWx1ZVR5cGUgaW1wbGVtZW50cyBJaGFzaCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBsZW5ndGgg5a6a5LmJ5ZOI5biM6KGo55qE5L2/55So5Zy65pmv5pyA5aSn6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aD86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5IYXNoQ29kZUdhdGUgPSBsZW5ndGggPyBsZW5ndGggPiA1MCA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWTiOW4jOihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZGVjbGFyZSBfSGFzaExpc3Q6IGFueVtudW1iZXJdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5a2X56ym55qE5ZOI5biM5YC8XHJcbiAgICAgKiBAcGFyYW0gY29kZSBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfU2hvcnRXYXkoY29kZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaGFzaDogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIChjb2RlKSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBoYXNoID0gY29kZSBhcyBudW1iZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSGFzaENvbXBsZXhpdHlcclxuICAgICAgICAgICAgaGFzaCAlPSAzNztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFRvSGFzaENvZGVfTG9uZ1dheShjb2RlOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBoYXNoOiBudW1iZXIgPSA1MzgxO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGNvZGUpID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGhhc2ggPSBjb2RlIGFzIG51bWJlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGhhc2ggKj0gMzM7XHJcbiAgICAgICAgICAgICAgICBoYXNoICs9IGl0ZXJhdG9yLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFzaCAlPSAxMDEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgSGFzaENvZGVHYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWTiOW4jOWAvOeahOmAieaLqeWZqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgVG9IYXNoQ29kZShrZXk6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuSGFzaENvZGVHYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX1Nob3J0V2F5KGtleSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub0hhc2hDb2RlX0xvbmdXYXkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiOt+WPluWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldChrZXkpIHtcclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdFtoYXNoXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMiemUruiuvue9ruWFg+e0oFxyXG4gICAgICogQHBhcmFtIGtleSDplK5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLlRvSGFzaENvZGUoa2V5KTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFtoYXNoXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu5Yig6Zmk5YWD57SgXHJcbiAgICAgKiBAcGFyYW0ga2V5IOmUrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5Ub0hhc2hDb2RlKGtleSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX0hhc2hMaXN0W2hhc2hdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF6ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c1NldCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSaWdvcm91c01hcCBleHRlbmRzIFJpZ29yb3VzSGFzaCB7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogYW55LCB2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgb2JqZWN0VGFnTmFtZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgICAgIHN3aXRjaCAoU3lzQmFzZVR5cGVbdHlwZW9mICh2YWx1ZSldKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUub2JqZWN0OlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjYy5Db21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VGFnTmFtZSArPSB2YWx1ZVsnX2lkJ107XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgT2JqZWN0S2V5ID0gT2JqZWN0LmtleXModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzExNDUxNCAlIE9iamVjdEtleS5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRhZ05hbWUgKz0gT2JqZWN0S2V5WzQzOTkgJSBPYmplY3RLZXkubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUYWdOYW1lICs9IE9iamVjdEtleVs4ODQ4ICUgT2JqZWN0S2V5Lmxlbmd0aF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBvYmplY3RUYWdOYW1lO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUuc3RyaW5nOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTeXNCYXNlVHlwZS5udW1iZXI6XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFN5c0Jhc2VUeXBlLmJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB2YWx1ZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3lzQmFzZVR5cGUudW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuVG9IYXNoQ29kZShrZXkpO1xyXG4gICAgICAgIHRoaXMuX0hhc2hMaXN0W2hhc2hdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcbn1cclxuaW1wb3J0IHsgSWFycmF5IH0gZnJvbSAnLi9SaWdvcm91c1R5cGUnO1xyXG5leHBvcnQgY2xhc3MgUmlnb3JvdXNBcnJheSBleHRlbmRzIFJpZ29yb3VzVmFsdWVUeXBlIGltcGxlbWVudHMgSWFycmF5IHtcclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE57G75bm26Z2e55So5L2cQXJyYXnvvIzkuI3opoHnm7TmjqXkvb/nlKjmraTnsbvlrZjlgqjlj4LmlbBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGRlY2xhcmUgX0hhc2hMaXN0OiBhbnlbbnVtYmVyXTtcclxuICAgIC8qKlxyXG4gICAgICog5oyJ6ZSu56e76ZmkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmU8VCBleHRlbmRzIG51bWJlcj4oa2V5OiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3Rba2V5XSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgIH1cclxufVxyXG5pbXBvcnQgeyBJcmluZ0J1ZmZlciB9IGZyb20gJy4vUmlnb3JvdXNUeXBlJztcclxuZXhwb3J0IGNsYXNzIFJpZ29yb3VzUmluZ0J1ZmZlciBleHRlbmRzIFJpZ29yb3VzQXJyYXkgaW1wbGVtZW50cyBJcmluZ0J1ZmZlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluagiCBcclxuICAgICAqIEB3YXJuIOmAmueUqOi1t+ingeayoeacieS9v+eUqOiLm+WIu+aooeW8j++8jOivt+S4jeimgeWcqOS7u+S9leWcsOaWueS9v+eUqOmdnuato+aVtOaVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrR2V0UG9pbnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tQdXRQb2ludGVyID0gMDtcclxuICAgICAgICB0aGlzLl9TdGFja1NpemUgPSBzaXplXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWHuuagiOaMh+mSiCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWNsYXJlIF9TdGFja0dldFBvaW50ZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ2V0IF8kZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YWNrR2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0IF8kZ2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGFja0dldFBvaW50ZXIgKz0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyICU9IHRoaXMuX1N0YWNrU2l6ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgJGdldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGFja0dldFBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0ICRnZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHRoaXMuX1N0YWNrSXNGdWxsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5sZW5ndGgpIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBsZXQgZ2V0UG9pbnRlciA9ICh0aGlzLl9TdGFja0dldFBvaW50ZXIgKyB2YWx1ZSkgJSB0aGlzLl9TdGFja1NpemU7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tHZXRQb2ludGVyID0gZ2V0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+b5qCI5oyH6ZKIIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlY2xhcmUgX1N0YWNrUHV0UG9pbnRlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBnZXQgXyRwdXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhY2tQdXRQb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgXyRwdXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9TdGFja1B1dFBvaW50ZXIgJT0gdGhpcy5fU3RhY2tTaXplO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCAkcHV0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YWNrUHV0UG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qCI5rex5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZWNsYXJlIF9TdGFja1NpemU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5qCI5ruh5qCH6K6wXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBkZWNsYXJlIF9TdGFja0lzRnVsbDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagiOacieaViOmVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLl8kcHV0IC0gdGhpcy5fJGdldDtcclxuICAgICAgICBpZiAodGhpcy5fU3RhY2tJc0Z1bGwpIHJldHVybiB0aGlzLl9TdGFja1NpemUgLSBsZW47XHJcbiAgICAgICAgcmV0dXJuIGxlbiA8IDAgPyB0aGlzLl9TdGFja1NpemUgKyBsZW4gOiBsZW47XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOebtOaOpeiOt+WPlue0ouW8lemhueebriBcclxuICAgICAqIOi/meS4jeS8muinpuWPkeagiOaMh+mSiOWPmOWMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QnVmZmVyKGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IYXNoTGlzdFtpbmRleF07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/m+agiFxyXG4gICAgICogQHBhcmFtIG9iamVjdCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2g8VD4ob2JqZWN0OiBUKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLl9IYXNoTGlzdFt0aGlzLl9TdGFja1B1dFBvaW50ZXJdID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMuXyRwdXQgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLl9TdGFja0lzRnVsbCkgdGhpcy5fJGdldCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuXyRwdXQgPT0gdGhpcy5fJGdldCkgdGhpcy5fU3RhY2tJc0Z1bGwgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl8kcHV0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlh7rmoIhcclxuICAgICAqIEBwYXJhbSBsZW5ndGggXHJcbiAgICAgKiBAcmV0dXJuIG9ialtdOiBvYmozLCBvYmo0Li4uXHJcbiAgICAgKiBAcmV0dXJuIGluZGV4W106IDMsIDQuLi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1bGw8VCBleHRlbmRzIG51bWJlcj4obGVuZ3RoOiBUKSB7XHJcbiAgICAgICAgdGhpcy5fU3RhY2tJc0Z1bGwgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb3V0ID0geyBvYmo6IFtdLCBpbmRleDogW10gfTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgTWF0aC5taW4obGVuZ3RoLCB0aGlzLmxlbmd0aCk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IG91dEluZGV4ID0gKGluZGV4ICsgdGhpcy5fJGdldCkgJSB0aGlzLl9TdGFja1NpemU7XHJcbiAgICAgICAgICAgIG91dC5vYmoucHVzaCh0aGlzLl9IYXNoTGlzdFtvdXRJbmRleF0pO1xyXG4gICAgICAgICAgICBvdXQuaW5kZXgucHVzaChvdXRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuXyRnZXQgPSBsZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuagiFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fSGFzaExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLl9TdGFja0dldFBvaW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX1N0YWNrUHV0UG9pbnRlciA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyDmtYvor5VcclxuLy8gaW50ZXJmYWNlIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIF9udW06IE51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgbXlmbG9hdCBpbXBsZW1lbnRzIGtpc21pdEZsb2F0IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgdGhpcy5fbnVtID0gdmFsdWUgfHwgMDtcclxuLy8gICAgIH1cclxuLy8gICAgIF9udW07XHJcbi8vICAgICBnZXQgbnVtKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9udW07XHJcbi8vICAgICB9XHJcbi8vICAgICBzZXQgbnVtKHZhbHVlOiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLl9udW0gPSB2YWx1ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsZXQgYSA9IG5ldyBteWZsb2F0KDEpO1xyXG4vLyBjYy5sb2coYS5udW0pOyJdfQ==
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
                    var __filename = 'preview-scripts/assets/scripts/game/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6bc6FrRRVPbpB9I2O8jbmT', 'Block');
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
var PawnClass_1 = require("../base/class/PawnClass");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var block = /** @class */ (function (_super) {
    __extends(block, _super);
    function block() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    block.prototype.start = function () {
    };
    block.prototype.update = function (dt) {
    };
    block = __decorate([
        ccclass
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW1DLHlCQUFTO0lBQTVDOztJQWFBLENBQUM7SUFYRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQUU7SUFFVCxDQUFDO0lBWmdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FhekI7SUFBRCxZQUFDO0NBYkQsQUFhQyxDQWJrQyxtQkFBUyxHQWEzQztrQkFib0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IFBhd25DbGFzcyBmcm9tICcuLi9iYXNlL2NsYXNzL1Bhd25DbGFzcyc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBibG9jayBleHRlbmRzIFBhd25DbGFzcyB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
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
var RigorousLibrary_1 = require("../class/RigorousLibrary");
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
        get: function () {
            this._NoRootTree = this._NoRootTree || new noRootTree(30);
            return this._NoRootTree;
        },
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
    Object.defineProperty(noRootTree.prototype, "root", {
        /**
         * 获取根节点
         * @returns
         */
        get: function () {
            return this.getBuffer(this.$put);
        },
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
    /**
     * 从给定索引处截断，并返回截断部分
     * @param key
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcdG9vbFxcTm9Sb290VHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEQ7QUFDOUQ7OztHQUdHO0FBQ0g7SUFBd0MsOEJBQWtCO0lBQTFEOztJQXFEQSxDQUFDO0lBaERHLHNCQUFrQixrQkFBSTthQUF0QjtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQXVCLEtBQWlCO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUhBO0lBS0Q7Ozs7T0FJRztJQUNJLHdCQUFHLEdBQVYsVUFBVyxNQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBS0Qsc0JBQVcsNEJBQUk7UUFKZjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyw0QkFBSTtRQUpmOzs7V0FHRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUNEOzs7T0FHRztJQUNJLHdCQUFHLEdBQVYsVUFBNkIsR0FBTztRQUNoQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRDs7O09BR0c7SUFDSSx3QkFBRyxHQUFWLFVBQVcsTUFBZTtRQUN0QixJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxDQUFDO1lBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FyREEsQUFxREMsQ0FyRHVDLG9DQUFrQixHQXFEekQ7O0FBRUQsNERBQTREIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlnb3JvdXNSaW5nQnVmZmVyIH0gZnJvbSAnLi4vY2xhc3MvUmlnb3JvdXNMaWJyYXJ5JztcclxuLyoqXHJcbiAqIOaXoOagueagkSBcclxuICogQHRpcCDmoLnmja7lvZPliY3muLjmiI/nmoTlrprkuYnvvIzlhaXmoIjkuLrmoLnvvIzlh7rmoIjkuLrlj7ZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5vUm9vdFRyZWUgZXh0ZW5kcyBSaWdvcm91c1JpbmdCdWZmZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoJHlrp7kvotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfTm9Sb290VHJlZTogbm9Sb290VHJlZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHRyZWUoKSB7XHJcbiAgICAgICAgdGhpcy5fTm9Sb290VHJlZSA9IHRoaXMuX05vUm9vdFRyZWUgfHwgbmV3IG5vUm9vdFRyZWUoMzApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Ob1Jvb3RUcmVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgdHJlZSh2YWx1ZTogbm9Sb290VHJlZSkge1xyXG4gICAgICAgIHRoaXMuX05vUm9vdFRyZWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOWtkOmhuVxyXG4gICAgICogQHBhcmFtIG9iamVjdCBcclxuICAgICAqIEByZXR1cm5zIOi/lOWbnui/meS4quWtkOmhueeahOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkKG9iamVjdDogYW55KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXNoKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluagueiKgueCuVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcih0aGlzLiRwdXQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmnIDmnKvlrZDoioLngrlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlYWYoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIodGhpcy4kZ2V0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5LuO57uZ5a6a57Si5byV5aSE5oiq5pat77yM5bm26L+U5Zue5oiq5pat6YOo5YiGXHJcbiAgICAgKiBAcGFyYW0ga2V5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3V0PFQgZXh0ZW5kcyBudW1iZXI+KGtleT86IFQpOiBhbnkge1xyXG4gICAgICAgIGxldCBsZW4gPSAoa2V5ICUgdGhpcy5fU3RhY2tTaXplKSAtIHRoaXMuJGdldDtcclxuICAgICAgICBpZiAodGhpcy5fU3RhY2tJc0Z1bGwpIHJldHVybiB0aGlzLl9TdGFja1NpemUgLSBsZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVsbChsZW4gPCAwID8gdGhpcy5fU3RhY2tTaXplICsgbGVuIDogbGVuKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5oyH5a6a6ZW/5bqm55qE6aG555uuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIOWIoOmZpOeahOmVv+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsKGxlbmd0aD86IG51bWJlcikge1xyXG4gICAgICAgIGlmICghbGVuZ3RoIHx8IGxlbmd0aCA9PSAwKSBsZW5ndGggPSAxO1xyXG4gICAgICAgIGlmIChsZW5ndGggPCAwKSByZXR1cm4gdGhpcy5jbGVhbigpO1xyXG4gICAgICAgIHRoaXMuJGdldCA9IGxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gaW1wb3J0IE5UUiBmcm9tIFwiLi4vYmFzZS90b29sL05vUm9vdFRyZWVcIjsgLy8gKOOAg8K0Lc+J772lKSDor7blmL9+XHJcbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/scripts/base/class/PawnMovement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32087ASkt9CBbFwJno3IBwU', 'PawnMovement');
// scripts/base/class/PawnMovement.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PawnMovement = /** @class */ (function () {
    function PawnMovement() {
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhd25Nb3ZlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQ0k7SUFFQSxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF3bk1vdmVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/class/RigorousType.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXEFjdG9yQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkRBQXdEO0FBRWxELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXdDLDhCQUFtQjtJQUEzRDs7SUFXQSxDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQVJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBVzlCO0lBQUQsaUJBQUM7Q0FYRCxBQVdDLENBWHVDLDZCQUFtQixHQVcxRDtrQkFYb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNJR05QT1NUIOiHquWumuS5ieWvueixoeexuyBcclxuaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5pbXBvcnQgRGV2ZWxvcGVyc1Rvb2xDbGFzcyBmcm9tICcuL0RldmVsb3BlcnNUb29sQ2xhc3MnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yQ2xhc3MgZXh0ZW5kcyBEZXZlbG9wZXJzVG9vbENsYXNzIHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
exports.EAnimPhySimSpace = exports.EWidgetCoordinateSpace = exports.ESceneCoordinateSpace = exports.mathMacro = exports.DevelopersToolGlobal = void 0;
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
        set: function (value) {
            cc.error("不允许修改资源目录");
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
    Object.defineProperty(DevelopersToolGlobal, "script", {
        get: function () {
            this._Global_OpenScript = this._Global_OpenScript || {};
            return this._Global_OpenScript;
        },
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
            this.script[key] = value;
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
     * 游戏基本层全局实例
     * 只能注入cc.Node
     */
    DevelopersToolGlobal._Global_OpenScript = null;
    DevelopersToolGlobal._OpenScript_FristName = null;
    return DevelopersToolGlobal;
}());
exports.DevelopersToolGlobal = DevelopersToolGlobal;
// import { mathMacro as mMath } from '../base/class/DevelopersToolGlobal';
var mathMacro = /** @class */ (function () {
    function mathMacro() {
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        this.liruochenKismit = null;
        var isNumber = function (value) { return typeof value === 'number' && !isNaN(value); };
        var out = { lrc: '2128cz' };
        if (num[0] && typeof num[0] === 'object') {
            out['m00'] = isNumber(num[0].x) ? num[0].x : num[0].x || (isNumber(num[0][0]) ? num[0][0] : num[0].width || num[0].r || (isNumber(num[0]) ? num[0] : 0));
            out['m01'] = isNumber(num[0].y) ? num[0].y : num[0].y || (isNumber(num[0][1]) ? num[0][1] : num[0].height || num[0].g || (isNumber(num[0]) ? num[0] : 0));
            out['m02'] = isNumber(num[0].z) ? num[0].z : num[0].z || (isNumber(num[0][2]) ? num[0][2] : num[0].b || (isNumber(num[0]) ? num[0] : 0));
            out['m03'] = isNumber(num[0].w) ? num[0].w : num[0].w || (isNumber(num[0][3]) ? num[0][3] : num[0].a || (isNumber(num[0]) ? num[0] : 0));
        }
        else {
            out['m00'] = num[0];
            out['m01'] = num[1];
            out['m02'] = num[2];
            out['m03'] = num[3];
            out['m04'] = num[4];
            out['m05'] = num[5];
            out['m06'] = num[6];
            out['m07'] = num[7];
            out['m08'] = num[8];
            out['m09'] = num[9];
            out['m10'] = num[10];
            out['m11'] = num[11];
            out['m12'] = num[12];
            out['m13'] = num[13];
            out['m14'] = num[14];
            out['m15'] = num[15];
        }
        this.liruochenKismit = out;
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
     * 判断是否在盒体范围内
     * @param {*} origin 盒体坐标原点
     * @param {*} extent 盒体范围，这是盒体的各轴半径
     * @return
     */
    mathMacro.isInBox2 = function (origin, extent) { var vec = this.meanwhileAllVectorAtArray(function (a) { var b = a[0] - a[1]; return b >= -a[2] && b <= a[2]; }, this, origin, extent); return vec.x && vec.y; };
    mathMacro.meanwhileAllVectorAtArray = function (func) {
        var object = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            object[_i - 1] = arguments[_i];
        }
        var out = { x: 0, y: 0, z: 0, w: 0 };
        Object.keys(out).forEach(function (element) { var array = []; for (var index = 0; index < object.length; index++) {
            array.push(object[index][element]);
        } ; out[element] = func(array, object.length); });
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
})(panelType || (panelType = {}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXERldmVsb3BlcnNUb29sR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSx5RUFBeUU7QUFDekU7SUFBQTtJQTRJQSxDQUFDO0lBcElHLHNCQUFrQixpQ0FBUzthQUEzQjtZQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUE0QixLQUFnQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBUUQsc0JBQWtCLDRDQUFvQjtRQUh0Qzs7V0FFRzthQUNIO1lBQ0ksT0FBTztnQkFDSCw4Q0FBOEM7Z0JBQzlDLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtnQkFDL0MsU0FBUztnQkFDVCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO2dCQUM5QyxRQUFRO2dCQUNSLG1EQUFtRDtnQkFDbkQsVUFBVTtnQkFDVixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUNqRCxPQUFPO2dCQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7YUFDbEQsQ0FBQTtRQUNMLENBQUM7YUFDRCxVQUF1QyxLQUFLO1lBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BSEE7SUFXRCxzQkFBa0IsNEJBQUk7YUFBdEI7WUFDSSxJ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R0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2puQjtZQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5VixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztJQUMvQixDQUFDO0lBdEZELHNCQUFrQix5QkFBWTtRQUQ5QixvQkFBb0I7YUFDcEIsY0FBMkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xGLHNCQUFrQix5QkFBWTthQUE5QixjQUEyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbEYsc0JBQWtCLHlCQUFZO2FBQTlCLGNBQTJDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNsRixzQkFBa0IseUJBQVk7YUFBOUIsY0FBMkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xGLHNCQUFrQix5QkFBWTthQUE5QixjQUEyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbEYsc0JBQWtCLHlCQUFZO2FBQTlCLGNBQTJDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNsRixzQkFBa0IseUJBQVk7YUFBOUIsY0FBMkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xGLHNCQUFrQix5QkFBWTthQUE5QixjQUEyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbEYsc0JBQWtCLHlCQUFZO2FBQTlCLGNBQTJDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQW9GbkY7Ozs7O09BS0c7SUFDVyxrQkFBUSxHQUF0QixVQUF1QixNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFDLENBQUMsSUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBUm5MLG1DQUF5QixHQUFHLFVBQW1ELElBQVU7UUFBRSxnQkFBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCwrQkFBYzs7UUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFNLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUFFLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBTyxHQUFHLENBQUM7SUFBQyxDQUFDLENBQUE7SUFXclgsZ0JBQUM7Q0F2R0QsQUF1R0MsSUFBQTtBQXZHWSw4QkFBUztBQXdHdEI7OztHQUdHO0FBQ0gsSUFBSyxTQUVKO0FBRkQsV0FBSyxTQUFTO0lBQ1YsNkNBQU0sQ0FBQTtJQUFFLHFEQUFVLENBQUE7SUFBRSxpREFBUSxDQUFBO0FBQ2hDLENBQUMsRUFGSSxTQUFTLEtBQVQsU0FBUyxRQUViO0FBQ0Q7OztHQUdHO0FBQ0gsSUFBWSxxQkFFWDtBQUZELFdBQVkscUJBQXFCO0lBQzdCLDZFQUFVLENBQUE7SUFBRSxtRUFBSyxDQUFBO0lBQUUsbUVBQUssQ0FBQTtBQUM1QixDQUFDLEVBRlcscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFFaEM7QUFDRDs7O0dBR0c7QUFDSCxJQUFZLHNCQUVYO0FBRkQsV0FBWSxzQkFBc0I7SUFDOUIsdUVBQU0sQ0FBQTtJQUFFLHFFQUFLLENBQUE7QUFDakIsQ0FBQyxFQUZXLHNCQUFzQixHQUF0Qiw4QkFBc0IsS0FBdEIsOEJBQXNCLFFBRWpDO0FBQ0Q7OztHQUdHO0FBQ0gsSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLGlFQUFTLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUseURBQUssQ0FBQTtJQUFFLHVFQUFZLENBQUE7SUFBRSx1RUFBWSxDQUFBO0FBQ3ZELENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUUzQjtBQUlELHFCQUFxQjtBQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFvQixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJV2FyZWhvdXNlR2xvYmFsSW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGNjLk5vZGUgfFxyXG4gICAgY2MuVGlsZWRNYXAgfFxyXG4gICAgY2MuUGFydGljbGVTeXN0ZW0gfFxyXG4gICAgY2MuVmlkZW9QbGF5ZXIgfFxyXG4gICAgY2MuV2ViVmlldyB8XHJcbiAgICBjYy5TcHJpdGUgfFxyXG4gICAgY2MuUmVuZGVyVGV4dHVyZSB8XHJcbiAgICBjYy5UZXh0dXJlMkQgfFxyXG4gICAgY2MuUHJlZmFiIHxcclxuICAgIGNjLkFzc2V0TWFuYWdlciB8IHt9O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvb2xHbG9iYWxJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSU90aGVyR2xvYmFsSW50ZXJmYWNlIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4vKipcclxuICog5bGC6YCa55So5qCH6K+G5o6l5Y+jIFxyXG4gKiBjYy5Ob2RlW251bWJlcl1cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWdhbmVyYWxMYXllckludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBjYy5Ob2RlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW9wZW5TY3JpcHRJbnRlcmZhY2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbi8vIGltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuZXhwb3J0IGNsYXNzIERldmVsb3BlcnNUb29sR2xvYmFsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7k+W6k+WFqOWxgOWunuS+i1xyXG4gICAgICog5a2Y5pS+bG9hZOaXtui9veWFpeeahOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfV2FyZWhvdXNlOiBJV2FyZWhvdXNlR2xvYmFsSW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB3YXJlaG91c2UoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1dhcmVob3VzZSA9IHRoaXMuX0dsb2JhbF9XYXJlaG91c2UgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9XYXJlaG91c2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgd2FyZWhvdXNlKHZhbHVlOiBJV2FyZWhvdXNlR2xvYmFsSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1dhcmVob3VzZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupDnm67lvZVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9hZFJlc291cmNlc2NhdGFsb2coKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gXCJ1cmxcIjogeyB0eXBlOiByZXMgdHlwZSwgdXJsOiBcInNhdmUgdXJsXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3pn7PkuZDpn7PmlYjotYTmupBcclxuICAgICAgICAgICAgXCJzb3VuZHNcIjogeyB0eXBlOiBjYy5BdWRpb0NsaXAsIHVybDogXCJzb3VuZHNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9vemihOWItuS7tui1hOa6kFxyXG4gICAgICAgICAgICBcInByZWZhYnNcIjogeyB0eXBlOiBjYy5QcmVmYWIsIHVybDogXCJwcmVmYWJzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3lm77pm4botYTmupBcclxuICAgICAgICAgICAgLy8gXCJhdGxhc1wiOiB7IHR5cGU6IGNjLlNwcml0ZUF0bGFzLCB1cmw6IFwiYXRsYXNcIiB9LFxyXG4gICAgICAgICAgICAvL+WKoOi9veWNleS4queyvueBtei1hOa6kFxyXG4gICAgICAgICAgICBcImZyYW1lc1wiOiB7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB1cmw6IFwiZnJhbWVzXCIgfSxcclxuICAgICAgICAgICAgLy/liqDovb3liIbkuqvlm75cclxuICAgICAgICAgICAgXCJzaGFyZVwiOiB7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB1cmw6IFwic2hhcmVcIiB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxvYWRSZXNvdXJjZXNjYXRhbG9nKHZhbHVlKSB7XHJcbiAgICAgICAgY2MuZXJyb3IoXCLkuI3lhYHorrjkv67mlLnotYTmupDnm67lvZVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6XlhbflhajlsYDlrp7kvotcclxuICAgICAqIOWPr+S7peazqOWFpeWFtuS7luW3peWFt+exu1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfVG9vbDogSVRvb2xHbG9iYWxJbnRlcmZhY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHRvb2woKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX1Rvb2wgPSB0aGlzLl9HbG9iYWxfVG9vbCB8fCB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2xvYmFsX1Rvb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB0b29sKHZhbHVlOiBJVG9vbEdsb2JhbEludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9Ub29sID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnYLpobnlhajlsYDlrp7kvotcclxuICAgICAqIOWPr+S7peazqOWFpeWFtuS7lumhueebrlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9HbG9iYWxfT3RoZXI6IElPdGhlckdsb2JhbEludGVyZmFjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3RoZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX090aGVyID0gdGhpcy5fR2xvYmFsX090aGVyIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfT3RoZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBvdGhlcih2YWx1ZTogSU90aGVyR2xvYmFsSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX090aGVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDlrp7kvotcclxuICAgICAqIOWPquiDveazqOWFpWNjLk5vZGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX0dlbnJhbExheWVyOiBJZ2FuZXJhbExheWVySW50ZXJmYWNlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5omA5pyJ5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxheWVycygpIHtcclxuICAgICAgICB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgPSB0aGlzLl9HbG9iYWxfR2VucmFsTGF5ZXIgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5omA5pyJ5bGCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGxheWVycyh2YWx1ZTogSWdhbmVyYWxMYXllckludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9HZW5yYWxMYXllciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blupXlsYJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzWzBdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDnmoTmlrDoioLngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgbGF5ZXIodmFsdWU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQga2V5ID0gT2JqZWN0LmtleXModGhpcy5fR2xvYmFsX0dlbnJhbExheWVyIHx8IHt9KS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5sYXllcnNba2V5LnRvU3RyaW5nKCldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/ln7rmnKzlsYLlhajlsYDlrp7kvotcclxuICAgICAqIOWPquiDveazqOWFpWNjLk5vZGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfR2xvYmFsX09wZW5TY3JpcHQ6IElvcGVuU2NyaXB0SW50ZXJmYWNlID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX09wZW5TY3JpcHRfRnJpc3ROYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2NyaXB0KCkge1xyXG4gICAgICAgIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0ID0gdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2NyaXB0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBrZXkgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX09wZW5TY3JpcHRfRnJpc3ROYW1lKSB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGtleSA9IChPYmplY3Qua2V5cyh0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCB8fCB7fSkubGVuZ3RoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcmlwdFtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4heepuuiEmuacrFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNjcmlwdF9DbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fR2xvYmFsX09wZW5TY3JpcHQgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5omA5pyJ6ISa5pys5ZCN56ewXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNjcmlwdE5hbWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9HbG9iYWxfT3BlblNjcmlwdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX0dsb2JhbF9PcGVuU2NyaXB0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W56ys5LiA5Liq5Yqg5YWl55qE6ISa5pysXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZyaXN0U2NyaXB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HbG9iYWxfT3BlblNjcmlwdFt0aGlzLl9PcGVuU2NyaXB0X0ZyaXN0TmFtZV07XHJcbiAgICB9XHJcbn1cclxuLy8gaW1wb3J0IHsgbWF0aE1hY3JvIGFzIG1NYXRoIH0gZnJvbSAnLi4vYmFzZS9jbGFzcy9EZXZlbG9wZXJzVG9vbEdsb2JhbCc7XHJcbmV4cG9ydCBjbGFzcyBtYXRoTWFjcm8ge1xyXG4gICAgLy8g6L+U5Zue6ZqP5py655qE5pW05pWw77yM6IyD5Zu05ZyoWzAsIHgpXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDIoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDMoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDQoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDUoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDYoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDcoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDgoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDkoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCByYW5kb21fdWludDEoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgUkdCQSBjb2xvcnMuPGJyLz5cclxuICAgICAqIEVhY2ggY29sb3IgY29tcG9uZW50IGlzIGFuIGludGVnZXIgdmFsdWUgd2l0aCBhIHJhbmdlIGZyb20gMCB0byAyNTUuPGJyLz5cclxuICAgICAqIEB6aCDpgJrov4cgUmVk44CBR3JlZW7jgIFCbHVlIOminOiJsumAmumBk+ihqOekuuminOiJsu+8jOW5tumAmui/hyBBbHBoYSDpgJrpgZPooajnpLrkuI3pgI/mmI7luqbjgII8YnIvPlxyXG4gICAgICog5q+P5Liq6YCa6YGT6YO95Li65Y+W5YC86IyD5Zu0IFswLCAyNTVdIOeahOaVtOaVsOOAgjxici8+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuQ29sb3IpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBNYXRoZW1hdGljYWwgM3gzIG1hdHJpeC5cclxuICAgICAqIEB6aCDooajnpLrkuInnu7TvvIgzeDPvvInnn6npmLXjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5NYXQzKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gTWF0aGVtYXRpY2FsIDR4NCBtYXRyaXguXHJcbiAgICAgKiBAemgg6KGo56S65Zub57u077yINHg077yJ55+p6Zi144CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuTWF0NClcclxuICAgIC8qKlxyXG4gICAgICogQGVuXHJcbiAgICAgKiBBIDJEIHJlY3RhbmdsZSBkZWZpbmVkIGJ5IHgsIHkgcG9zaXRpb24gYW5kIHdpZHRoLCBoZWlnaHQuXHJcbiAgICAgKiBAemhcclxuICAgICAqIOi9tOWvuem9kOefqeW9ouOAglxyXG4gICAgICog55+p5b2i5YaF55qE5omA5pyJ54K56YO95aSn5LqO562J5LqO55+p5b2i55qE5pyA5bCP54K5ICh4TWluLCB5TWluKSDlubbkuJTlsI/kuo7nrYnkuo7nn6nlvaLnmoTmnIDlpKfngrkgKHhNYXgsIHlNYXgp44CCXHJcbiAgICAgKiDnn6nlvaLnmoTlrr3luqblrprkuYnkuLogeE1heCAtIHhNaW7vvJvpq5jluqblrprkuYnkuLogeU1heCAtIHlNaW7jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5SZWN0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gcXVhdGVybmlvblxyXG4gICAgICogQHpoIOWbm+WFg+aVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlF1YXQpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBUd28gZGltZW5zaW9uYWwgc2l6ZSB0eXBlIHJlcHJlc2VudGluZyB0aGUgd2lkdGggYW5kIGhlaWdodC5cclxuICAgICAqIEB6aCDkuoznu7TlsLrlr7jjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5TaXplKVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gUmVwcmVzZW50YXRpb24gb2YgMkQgdmVjdG9ycyBhbmQgcG9pbnRzLlxyXG4gICAgICogQHpoIOS6jOe7tOWQkemHj+OAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW06IGNjLlZlYzIpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBSZXByZXNlbnRhdGlvbiBvZiAzRCB2ZWN0b3JzIGFuZCBwb2ludHMuXHJcbiAgICAgKiBAemgg5LiJ57u05ZCR6YeP44CCXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bTogY2MuVmVjMylcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlcHJlc2VudGF0aW9uIG9mIGZvdXItZGltZW5zaW9uYWwgdmVjdG9ycy5cclxuICAgICAqIEB6aCDlm5vnu7TlkJHph4/jgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBjYy5WZWM0KVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gb2JqZWN0LlxyXG4gICAgICogQHpoIOWMheWQq3gseSx6LHfnrYnlsZ7mgKflkI3nmoTlr7nosaHjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBvYmplY3QpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBhcnJheS5cclxuICAgICAqIEB6aCDmlbDnu4TjgIJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtOiBudW1iZXJbXSlcclxuICAgIC8qKlxyXG4gICAgICogQGVuIDopXHJcbiAgICAgKiBAemgg6YCQ5Liq5a6a5LmJ5ZOm77yM5Lqy44CCXHJcbiAgICAgKi9cclxuICAgIC8vIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIsIHc/OiBudW1iZXIpXHJcbiAgICAvKipcclxuICAgICAqIEBlbiBPaCwgbXkgR29kLCB0aGlzIGlzIGdvbm5hLi4uIElzIHRoaXMgc3VwcG9zZWQgdG8uLi4gRGVmaW5lIG9uZSBieSBvbmUhID8gLiBPaCwgZG9uJ3Qgd29ycnkgYWJvdXQgbWUuIEkgY29waWVkIGl0IGZyb20gYW4gb2ZmaWNpYWwgZG9jdW1lbnQgO1BcclxuICAgICAqIEB6aCDpgJDkuKrlrprkuYkgO1AgXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG0wMDogbnVtYmVyLCBtMDE/OiBudW1iZXIsIG0wMj86IG51bWJlciwgbTAzPzogbnVtYmVyLCBtMTA/OiBudW1iZXIsIG0xMT86IG51bWJlciwgbTEyPzogbnVtYmVyLCBtMTM/OiBudW1iZXIsIG0yMD86IG51bWJlciwgbTIxPzogbnVtYmVyLCBtMjI/OiBudW1iZXIsIG0yMz86IG51bWJlciwgbTMwPzogbnVtYmVyLCBtMzE/OiBudW1iZXIsIG0zMj86IG51bWJlciwgbTMzPzogbnVtYmVyLClcclxuICAgIGNvbnN0cnVjdG9yKC4uLm51bSkge1xyXG4gICAgICAgIGxldCBpc051bWJlciA9ICh2YWx1ZSkgPT4geyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpOyB9XHJcbiAgICAgICAgbGV0IG91dCA9IHsgbHJjOiAnMjEyOGN6JyB9O1xyXG4gICAgICAgIGlmIChudW1bMF0gJiYgdHlwZW9mIG51bVswXSA9PT0gJ29iamVjdCcpIHsgb3V0WydtMDAnXSA9IGlzTnVtYmVyKG51bVswXS54KSA/IG51bVswXS54IDogbnVtWzBdLnggfHwgKGlzTnVtYmVyKG51bVswXVswXSkgPyBudW1bMF1bMF0gOiBudW1bMF0ud2lkdGggfHwgbnVtWzBdLnIgfHwgKGlzTnVtYmVyKG51bVswXSkgPyBudW1bMF0gOiAwKSk7IG91dFsnbTAxJ10gPSBpc051bWJlcihudW1bMF0ueSkgPyBudW1bMF0ueSA6IG51bVswXS55IHx8IChpc051bWJlcihudW1bMF1bMV0pID8gbnVtWzBdWzFdIDogbnVtWzBdLmhlaWdodCB8fCBudW1bMF0uZyB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDInXSA9IGlzTnVtYmVyKG51bVswXS56KSA/IG51bVswXS56IDogbnVtWzBdLnogfHwgKGlzTnVtYmVyKG51bVswXVsyXSkgPyBudW1bMF1bMl0gOiBudW1bMF0uYiB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgb3V0WydtMDMnXSA9IGlzTnVtYmVyKG51bVswXS53KSA/IG51bVswXS53IDogbnVtWzBdLncgfHwgKGlzTnVtYmVyKG51bVswXVszXSkgPyBudW1bMF1bM10gOiBudW1bMF0uYSB8fCAoaXNOdW1iZXIobnVtWzBdKSA/IG51bVswXSA6IDApKTsgfVxyXG4gICAgICAgIGVsc2UgeyBvdXRbJ20wMCddID0gbnVtWzBdOyBvdXRbJ20wMSddID0gbnVtWzFdOyBvdXRbJ20wMiddID0gbnVtWzJdOyBvdXRbJ20wMyddID0gbnVtWzNdOyBvdXRbJ20wNCddID0gbnVtWzRdOyBvdXRbJ20wNSddID0gbnVtWzVdOyBvdXRbJ20wNiddID0gbnVtWzZdOyBvdXRbJ20wNyddID0gbnVtWzddOyBvdXRbJ20wOCddID0gbnVtWzhdOyBvdXRbJ20wOSddID0gbnVtWzldOyBvdXRbJ20xMCddID0gbnVtWzEwXTsgb3V0WydtMTEnXSA9IG51bVsxMV07IG91dFsnbTEyJ10gPSBudW1bMTJdOyBvdXRbJ20xMyddID0gbnVtWzEzXTsgb3V0WydtMTQnXSA9IG51bVsxNF07IG91dFsnbTE1J10gPSBudW1bMTVdOyB9XHJcbiAgICAgICAgdGhpcy5saXJ1b2NoZW5LaXNtaXQgPSBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxpcnVvY2hlbktpc21pdDogb2JqZWN0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtZWFud2hpbGVBbGxWZWN0b3JBdEFycmF5ID0gZnVuY3Rpb24gPEZVTkMgZXh0ZW5kcyBGdW5jdGlvbiwgVCBleHRlbmRzIG9iamVjdD4oZnVuYzogRlVOQywgLi4ub2JqZWN0OiBUW10pIHsgbGV0IG91dCA9IHsgeDogMCwgeTogMCwgejogMCwgdzogMCB9OyBPYmplY3Qua2V5cyhvdXQpLmZvckVhY2goZWxlbWVudCA9PiB7IGxldCBhcnJheSA9IFtdOyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb2JqZWN0Lmxlbmd0aDsgaW5kZXgrKykgeyBhcnJheS5wdXNoKG9iamVjdFtpbmRleF1bZWxlbWVudF0pOyB9OyBvdXRbZWxlbWVudF0gPSBmdW5jKGFycmF5LCBvYmplY3QubGVuZ3RoKTsgfSk7IHJldHVybiBvdXQ7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreaYr+WQpuWcqOebkuS9k+iMg+WbtOWGhVxyXG4gICAgICogQHBhcmFtIHsqfSBvcmlnaW4g55uS5L2T5Z2Q5qCH5Y6f54K5XHJcbiAgICAgKiBAcGFyYW0geyp9IGV4dGVudCDnm5LkvZPojIPlm7TvvIzov5nmmK/nm5LkvZPnmoTlkITovbTljYrlvoRcclxuICAgICAqIEByZXR1cm4gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNJbkJveDIob3JpZ2luLCBleHRlbnQpIHsgbGV0IHZlYyA9IHRoaXMubWVhbndoaWxlQWxsVmVjdG9yQXRBcnJheSgoYSkgPT4geyBsZXQgYiA9IGFbMF0gLSBhWzFdOyByZXR1cm4gYiA+PSAtYVsyXSAmJiBiIDw9IGFbMl07IH0sIHRoaXMsIG9yaWdpbiwgZXh0ZW50KTsgcmV0dXJuIHZlYy54ICYmIHZlYy55OyB9XHJcblxyXG5cclxufVxyXG4vKipcclxuICog5YWo5bGA5p6a5Li+XHJcbiAqIOWvueixoeWPr+enu+WKqOaAp1xyXG4gKi9cclxuZW51bSBwYW5lbFR5cGUge1xyXG4gICAgc3RhaXRjLCBzdGF0aW9uYXJ5LCBNb3ZlYWJsZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Zy65pmv5Z2Q5qCH56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFU2NlbmVDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2ltdWxhdGlvbiwgd29ybGQsIGxvY2FsXHJcbn1cclxuLyoqXHJcbiAqIOWFqOWxgOaemuS4vlxyXG4gKiDmjqfku7blnZDmoIfnqbrpl7TmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIEVXaWRnZXRDb29yZGluYXRlU3BhY2Uge1xyXG4gICAgc2NyZWVuLCBzY2VuZVxyXG59XHJcbi8qKlxyXG4gKiDlhajlsYDmnprkuL5cclxuICog5Yqo55S754mp55CG56m66Ze05p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBFQW5pbVBoeVNpbVNwYWNlIHtcclxuICAgIGNvbXBvbmVudCwgYWN0b3IsIHNjZW5lLCByZWxhdGl2ZVJvb3QsIHJlbGF0aXZlTm9kZVxyXG59XHJcblxyXG5cclxuXHJcbi8vIOa1i+ivleivreWPpe+8jOWPr+S7peWcqOaOp+WItuWPsOS4reiDveWkn+eci+WIsOi/memHjFxyXG5jY1tcInZ2XCJdID0gY2NbXCJ2dlwiXSB8fCBEZXZlbG9wZXJzVG9vbEdsb2JhbDtcclxuXHJcblxyXG4iXX0=
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
                    var __filename = 'preview-scripts/assets/scripts/base/class/PanelTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64efe9poixCx6gFMYxQOlei', 'PanelTool');
// scripts/base/class/PanelTool.ts

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
var DevelopersToolGlobal_1 = require("./DevelopersToolGlobal");
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
                    DevelopersToolGlobal_1.DevelopersToolGlobal.layer = layers[layerIndex];
                    break;
                }
            }
        }
    };
    __decorate([
        property({
            type: cc.String,
            displayName: '通用层名单',
            tooltip: '层按放置顺序设定优先级，与名称顺序无关',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFzZVxcY2xhc3NcXFBhbmVsVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBc0U7QUFFaEUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFpQ0M7UUF6QkcsbUJBQWEsR0FBYSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLENBQUM7O0lBeUJ6RixDQUFDO0lBdkJHLHdCQUF3QjtJQUN4QiwwQkFBTSxHQUFOO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEM7O1dBRUc7UUFDSCxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDM0MsS0FBSyxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUU7WUFDL0QsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUFFLFNBQVM7WUFFNUMsS0FBSyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRTtnQkFFdkUsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUM1QyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3BDLDJDQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtpQkFDVDthQUNKO1NBQ0o7SUFFTCxDQUFDO0lBdkJEO1FBTkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1lBQ2YsV0FBVyxFQUFFLE9BQU87WUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixPQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFDO29EQUNtRjtJQVJwRSxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBaUM3QjtJQUFELGdCQUFDO0NBakNELEFBaUNDLENBakNzQyxFQUFFLENBQUMsU0FBUyxHQWlDbEQ7a0JBakNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2ZWxvcGVyc1Rvb2xHbG9iYWwgYXMgY2N2diB9IGZyb20gJy4vRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxUb29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlN0cmluZyxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mAmueUqOWxguWQjeWNlScsXHJcbiAgICAgICAgdG9vbHRpcDogJ+WxguaMieaUvue9rumhuuW6j+iuvuWumuS8mOWFiOe6p++8jOS4juWQjeensOmhuuW6j+aXoOWFsycsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBfZ2VuZXJhbExheWVyOiBzdHJpbmdbXSA9IFsnQmFja2dyb3VuZExheWVyJywgJ0V0ZXJuYWxpdHlVSUxheWVyJywgJ0R5bmFtaWNVSUxheWVyJ107XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGxheWVycyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj6/nlKjnmoTliankvZnlsYJcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgcmVzaWR1ZUxheWVyc05hbWUgPSB0aGlzLl9nZW5lcmFsTGF5ZXI7XHJcbiAgICAgICAgZm9yIChsZXQgbGF5ZXJJbmRleCA9IDA7IGxheWVySW5kZXggPCBsYXllcnMubGVuZ3RoOyBsYXllckluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZUluZGV4ID0gMDsgbmFtZUluZGV4IDwgcmVzaWR1ZUxheWVyc05hbWUubGVuZ3RoOyBuYW1lSW5kZXgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsYXllci5uYW1lID09IHJlc2lkdWVMYXllcnNOYW1lW25hbWVJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNpZHVlTGF5ZXJzTmFtZVtuYW1lSW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjY3Z2LmxheWVyID0gbGF5ZXJzW2xheWVySW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
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
cc._RF.push(module, '219931QpohMXa9AERY/82Av', 'GameLevel');
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
var NoRootTree_1 = require("../base/tool/NoRootTree");
// (〃´-ω･) 诶嘿~
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this._spawnOrigin = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.script = this;
        // cc.log(ccvv.fristScript)
        // cc.log(ccvv.warehouse);
        // ccvv.layers[0].addChild(new ccvv.warehouse['frames']['bg'])
    };
    Game.prototype.start = function () {
        this.creat_lineCube();
    };
    Game.prototype.update = function (dt) {
        this.gameProcess_SpawnCube();
    };
    // TAG USER FUNCTION:                                                                                    
    /**
     * 游戏流程-诞生方块
     */
    Game.prototype.gameProcess_SpawnCube = function () {
        if (this.curRoot) { // && mm.isInBox2(cubePos)
            var cubePos = new DevelopersToolGlobal_1.mathMacro(this.curRoot.node.getPostion());
            cc.log(cubePos);
        }
        else {
            // this.creat_lineCube();
        }
        // NTR.tree.push();
    };
    Object.defineProperty(Game.prototype, "curRoot", {
        /**
         * 返回目标根节点
         */
        get: function () {
            if (NoRootTree_1.default.tree.root)
                return NoRootTree_1.default.tree.root[0];
            else
                return undefined;
        },
        enumerable: false,
        configurable: true
    });
    // TAG Prefabricated function                                                                            
    // SIGNPOST instantiation and destory Actor                                                              
    /**
     * 创建一行方块
     */
    Game.prototype.creat_lineCube = function () {
        var perch = [];
        var loop = 5;
        while (loop--) {
            var curcol = this.randomInColumn;
            if (perch.indexOf(curcol) < 0) {
                cc.log(curcol);
                perch.push(curcol);
                var inst = this.creat_OneCube;
                inst.setPosition(this.spawnOrigin.add(cc.v2(curcol * (this.cubeWidget + this.cubeInteraval))));
            }
            if (perch.length >= 3)
                break;
        }
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
    Object.defineProperty(Game.prototype, "cube", {
        // TAG macro                                                                                             
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
                this._spawnOrigin = cc.v2(-(this.column - 1) * (this.cubeWidget + this.cubeInteraval) / 2, cc.winSize.height / 2 //+ this.cubeHeight
                );
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
    Object.defineProperty(Game.prototype, "creat_OneCube", {
        /**
         * 创建一个方块在指定层
         */
        get: function () {
            return this.creatActor(this.cube, DevelopersToolGlobal_1.DevelopersToolGlobal.layers[1]);
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZUxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFtRztBQUNuRyxzREFBMEM7QUFDMUMsY0FBYztBQUNSLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBMElDO1FBdklHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQXlIYixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFXM0MsQ0FBQztJQWxJRyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLDJDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLDhEQUE4RDtJQUNsRSxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQseUdBQXlHO0lBRXpHOztPQUVHO0lBQ08sb0NBQXFCLEdBQS9CO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsMEJBQTBCO1lBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksZ0NBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRXJELEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkI7YUFDSTtZQUNELHlCQUF5QjtTQUM1QjtRQUNELG1CQUFtQjtJQUN2QixDQUFDO0lBS0Qsc0JBQWMseUJBQU87UUFIckI7O1dBRUc7YUFDSDtZQUNJLElB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LENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxtQkFBbUI7aUJBQzVDLENBQUE7WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBYywrQkFBYTtRQUgzQjs7V0FFRzthQUNILGNBQXdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFJbkQsc0JBQWMsK0JBQWE7UUFIM0I7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLDJDQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUF0SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1Q0FDSTtJQUd2QjtRQURDLFFBQVE7c0NBQ2M7SUFOTixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMEl4QjtJQUFELFdBQUM7Q0ExSUQsQUEwSUMsQ0ExSWlDLEVBQUUsQ0FBQyxTQUFTLEdBMEk3QztrQkExSW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZlbG9wZXJzVG9vbEdsb2JhbCBhcyBjY3Z2LCBtYXRoTWFjcm8gYXMgbW0gfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuaW1wb3J0IE5UUiBmcm9tIFwiLi4vYmFzZS90b29sL05vUm9vdFRyZWVcIjtcclxuLy8gKOOAg8K0Lc+J772lKSDor7blmL9+XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjY3Z2LnNjcmlwdCA9IHRoaXM7XHJcbiAgICAgICAgLy8gY2MubG9nKGNjdnYuZnJpc3RTY3JpcHQpXHJcbiAgICAgICAgLy8gY2MubG9nKGNjdnYud2FyZWhvdXNlKTtcclxuICAgICAgICAvLyBjY3Z2LmxheWVyc1swXS5hZGRDaGlsZChuZXcgY2N2di53YXJlaG91c2VbJ2ZyYW1lcyddWydiZyddKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRfbGluZUN1YmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVByb2Nlc3NfU3Bhd25DdWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/mtYHnqIst6K+e55Sf5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnYW1lUHJvY2Vzc19TcGF3bkN1YmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyUm9vdCkgey8vICYmIG1tLmlzSW5Cb3gyKGN1YmVQb3MpXHJcbiAgICAgICAgICAgIGxldCBjdWJlUG9zID0gbmV3IG1tKHRoaXMuY3VyUm9vdC5ub2RlLmdldFBvc3Rpb24oKSk7XHJcblxyXG4gICAgICAgICAgICBjYy5sb2coY3ViZVBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNyZWF0X2xpbmVDdWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5UUi50cmVlLnB1c2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuebruagh+agueiKgueCuVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGN1clJvb3QoKSB7XHJcbiAgICAgICAgaWYgKE5UUi50cmVlLnJvb3QpXHJcbiAgICAgICAgICAgIHJldHVybiBOVFIudHJlZS5yb290WzBdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2hlYWNrSXNcclxuXHJcblxyXG5cclxuICAgIC8vIFRBRyBQcmVmYWJyaWNhdGVkIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIFNJR05QT1NUIGluc3RhbnRpYXRpb24gYW5kIGRlc3RvcnkgQWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65LiA6KGM5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdF9saW5lQ3ViZSgpIHtcclxuICAgICAgICBsZXQgcGVyY2ggPSBbXTtcclxuICAgICAgICBsZXQgbG9vcCA9IDU7XHJcbiAgICAgICAgd2hpbGUgKGxvb3AtLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyY29sID0gdGhpcy5yYW5kb21JbkNvbHVtbjtcclxuICAgICAgICAgICAgaWYgKHBlcmNoLmluZGV4T2YoY3VyY29sKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhjdXJjb2wpO1xyXG4gICAgICAgICAgICAgICAgcGVyY2gucHVzaChjdXJjb2wpXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5zdDogY2MuTm9kZSA9IHRoaXMuY3JlYXRfT25lQ3ViZTtcclxuICAgICAgICAgICAgICAgIGluc3Quc2V0UG9zaXRpb24odGhpcy5zcGF3bk9yaWdpbi5hZGQoY2MudjIoY3VyY29sICogKHRoaXMuY3ViZVdpZGdldCArIHRoaXMuY3ViZUludGVyYXZhbCkpKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGVyY2gubGVuZ3RoID49IDMpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXQgaW5zdGFudGlhdGVcclxuICAgICAqIEBwYXJhbSB7Y2MuUHJlZmFifSBhY3RvciDlrp7kvovljJbnmoTnm67moIdcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcGFyZW50IOWunuS+i+WMlueahOWvueixoeWwhuimgemZhOWKoOeahOebruagh++8jOWmguaenOeVmeepuuWImeS4uuiHqui6q1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdEFjdG9yKGFjdG9yOiBjYy5QcmVmYWIsIHBhcmVudD86IGNjLk5vZGUpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0ID0gY2MuaW5zdGFudGlhdGUoYWN0b3IpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHsgcGFyZW50LmFkZENoaWxkKGFjdG9ySW5zdCk7IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5ub2RlLmFkZENoaWxkKGFjdG9ySW5zdCk7IGNjLmxvZyhhY3Rvckluc3QpIH1cclxuICAgICAgICByZXR1cm4gYWN0b3JJbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyBtYWNybyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6a55qE6aKE5Yi25L2T5pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgY3ViZSgpOiBjYy5QcmVmYWIgeyByZXR1cm4gY2N2di53YXJlaG91c2VbJ3ByZWZhYnMnXVsnYmxvY2snXTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3miYDmnInnmoTliJfmlbBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjb2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIDQ7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YiX5pWw5YaF55qE6ZqP5py65pW05pWwXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgcmFuZG9tSW5Db2x1bW4oKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sdW1uKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDlrr3luqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjdWJlV2lkZ2V0KCk6IG51bWJlciB7IHJldHVybiAxNzc7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6Ze06ZqUXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgY3ViZUludGVyYXZhbCgpOiBudW1iZXIgeyByZXR1cm4gMzsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlrnlnZfmiYDljaDpq5jluqZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjdWJlSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiAxMDA7IH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pa55Z2X6K+e55Sf5Y6f54K5XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgc3Bhd25PcmlnaW4oKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zcGF3bk9yaWdpbilcclxuICAgICAgICAgICAgdGhpcy5fc3Bhd25PcmlnaW4gPSBjYy52MihcclxuICAgICAgICAgICAgICAgIC0odGhpcy5jb2x1bW4gLSAxKSAqICh0aGlzLmN1YmVXaWRnZXQgKyB0aGlzLmN1YmVJbnRlcmF2YWwpIC8gMixcclxuICAgICAgICAgICAgICAgIGNjLndpblNpemUuaGVpZ2h0IC8gMiAvLysgdGhpcy5jdWJlSGVpZ2h0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3Bhd25PcmlnaW47XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX3NwYXduT3JpZ2luOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5q+P6KGM5pyA5bCP5Y+v6K+e55Sf55qE5pWw6YePXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgc3Bhd25NaW5Db3VudCgpOiBudW1iZXIgeyByZXR1cm4gMjsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuIDkuKrmlrnlnZflnKjmjIflrprlsYJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldCBjcmVhdF9PbmVDdWJlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0QWN0b3IodGhpcy5jdWJlLCBjY3Z2LmxheWVyc1sxXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f8abNVa2FPs6rm+Y3nKSh4', 'GameUI');
// scripts/game/GameUI.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // cc.find("Canvas").getComponent("Game").addTimeCount();
    };
    NewClass.prototype.start = function () {
        DevelopersToolGlobal_1.DevelopersToolGlobal.fristScript;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUM1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUFhQSxDQUFDO0lBWEcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSx5REFBeUQ7SUFDN0QsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSwyQ0FBSSxDQUFDLFdBQVcsQ0FBQTtJQUNwQixDQUFDO0lBVmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FhNUI7SUFBRCxlQUFDO0NBYkQsQUFhQyxDQWJxQyxFQUFFLENBQUMsU0FBUyxHQWFqRDtrQkFib0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuLi9iYXNlL2NsYXNzL0RldmVsb3BlcnNUb29sR2xvYmFsJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoXCJHYW1lXCIpLmFkZFRpbWVDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjdnYuZnJpc3RTY3JpcHRcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

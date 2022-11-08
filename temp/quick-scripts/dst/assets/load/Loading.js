
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
         * 加载资源目录
         */
        _this.loadResourcescatalog = {
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
        _this.loadPorgressCountMax = Object.keys(_this.loadResourcescatalog).length;
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
        var resKeys = Object.keys(this.loadResourcescatalog);
        resKeys.forEach(function (url) {
            var resLog = _this.loadResourcescatalog[url];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsbUZBQTBGO0FBTTFGO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMFJDO1FBdlJHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFPekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQWlCO1FBUWpCLHdCQUFrQixHQUFHLENBQUMsQ0FBQztRQVV2Qiw4QkFBd0IsR0FBRyxFQUFFLENBQUM7UUFVOUIseUJBQW1CLEdBQUcsR0FBRyxDQUFDO1FBUTFCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGtCQUFrQjtRQU1sQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQTJCdEIscUdBQXFHO1FBRXJHOztXQUVHO1FBQ0gsMEJBQW9CLEdBQUc7WUFDbkIsOENBQThDO1lBQzlDLFVBQVU7WUFDVixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO1lBQy9DLFNBQVM7WUFDVCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO1lBQzlDLFFBQVE7WUFDUixtREFBbUQ7WUFDbkQsVUFBVTtZQUNWLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUU7WUFDakQsT0FBTztZQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7U0FDbEQsQ0FBQTtRQUVEOzs7V0FHRztRQUNILG1CQUFhLEdBQVcs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InNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU0lHTlBPU1Qg5Yqg6L296aG16Z2i77yM5L2G5LiN5bGe5LqO5byA5Y+R57G7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCB7IERldmVsb3BlcnNUb29sR2xvYmFsIGFzIGNjdnYgfSBmcm9tICcuLi9zY3JpcHRzL2Jhc2UvY2xhc3MvRGV2ZWxvcGVyc1Rvb2xHbG9iYWwnO1xyXG5cclxuLy8g6K6p57yW6K+R5Zmo5b+955Wl5bmz5Y+wQVBJ5oql6ZSZXHJcbmRlY2xhcmUgdmFyIHd4OiBhbnk7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ29Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h55uu5qCHKOWPr+mAiSlcIixcclxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoeebruagh+iuvuWumuWQjuWPr+S7peaMh+WumuWKqOeUu1wiLFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBTSUdOUE9TVCDov5vluqbmnaHpg6jliIZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAyLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHliqjnlLvpgJ/njodcIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzVXBkYXRlUmF0ZSA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDIsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeWKqOeUu+maj+acuuWPmOWMlumXtOmalFwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi6L+b5bqm5p2h5Yqo55S76ZqP5py65Y+Y5YyW6Ze06ZqUXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDsgfSxcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc1JhbmRvbUNoYW5nZVRpbWUgPSAuMjtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMiwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h5Yqo55S7562J5b6F5Yqg6L295a6M5oiQ5L2N572uXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaHliqjnlLvnrYnlvoXliqDovb3lrozmiJDkvY3nva5cIixcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5wcm9ncmVzc0JhciAhPSBudWxsOyB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzV2FpdEZvckxvYWQgPSAuODU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWujOaIkOWQjuaYvuekulwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5b2T5Yqg6L295a6M5oiQ5pe277yM6KKr5ZCv55So55qE6IqC54K5XCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDsgfSxcclxuICAgIH0pXHJcbiAgICByZWFkeVRvU2hvdyA9IG51bGw7XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg55uu5qCH5Zy65pmv6YOo5YiGXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlNjZW5lQXNzZXQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5a6M5oiQ5ZCO5Yqg6L2955uu5qCHXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLlvZPliqDovb3lrozmiJDml7bvvIzliqDovb3nmoTlnLrmma/vvIzlpoLmnpzmnInlkK/nlKjoioLngrnvvIzliJnnrYnlvoXoioLngrnop6blj5FcIixcclxuICAgIH0pXHJcbiAgICByZWFkeVRvR29TZW5jZSA9IG51bGw7XHJcblxyXG4gICAgLy8gVEFHIExJRkUtQ1lDTEUgY2FsbGJhY2tzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOaSreaUvuWKqOeUu1xyXG4gICAgICAgIHRoaXMucGxheUxvZ29BbmltYXRpb24oKTtcclxuICAgICAgICAvL+ajgOafpea4uOaIj+abtOaWsFxyXG4gICAgICAgIHRoaXMuY2hlY2tHYW1lTmV3VmVyc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOW8gOWni+WKoOi9veaJgOaciei1hOa6kFxyXG4gICAgICAgIHRoaXMubG9hZEFsbFJlc291cmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIOetieW+heWKqOeUu+aSreaUvuWujOavlVxyXG4gICAgICAgIGlmICghdGhpcy5hbmltYXRpb25PdmVyKSByZXR1cm47XHJcbiAgICAgICAgLy8g5aaC5p6c5pyJ5a6a5LmJ5YW25LuW57uE5Lu277yI5q+U5aaC5oyJ6ZKu77yJ5p2l5a6M5oiQ5Zy65pmv6L295YWl6Kem5Y+R5pe277yM562J5b6F57uE5Lu25ZON5bqUXHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHlUb1Nob3cgIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIOWQpuWImeWKoOi9veWujOaIkOWQjuebtOaOpei/m+WFpeWcuuaZr1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRQcm9ncmVzc0NvdW50ID49IHRoaXMubG9hZFBvcmdyZXNzQ291bnRNYXgpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWRTY2VuZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUcg6Ieq5a6a5LmJ5pWw5YC8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei1hOa6kOebruW9lVxyXG4gICAgICovXHJcbiAgICBsb2FkUmVzb3VyY2VzY2F0YWxvZyA9IHtcclxuICAgICAgICAvLyBcInVybFwiOiB7IHR5cGU6IHJlcyB0eXBlLCB1cmw6IFwic2F2ZSB1cmxcIiB9LFxyXG4gICAgICAgIC8v5Yqg6L296Z+z5LmQ6Z+z5pWI6LWE5rqQXHJcbiAgICAgICAgXCJzb3VuZHNcIjogeyB0eXBlOiBjYy5BdWRpb0NsaXAsIHVybDogXCJzb3VuZHNcIiB9LFxyXG4gICAgICAgIC8v5Yqg6L296aKE5Yi25Lu26LWE5rqQXHJcbiAgICAgICAgXCJwcmVmYWJzXCI6IHsgdHlwZTogY2MuUHJlZmFiLCB1cmw6IFwicHJlZmFic1wiIH0sXHJcbiAgICAgICAgLy/liqDovb3lm77pm4botYTmupBcclxuICAgICAgICAvLyBcImF0bGFzXCI6IHsgdHlwZTogY2MuU3ByaXRlQXRsYXMsIHVybDogXCJhdGxhc1wiIH0sXHJcbiAgICAgICAgLy/liqDovb3ljZXkuKrnsr7ngbXotYTmupBcclxuICAgICAgICBcImZyYW1lc1wiOiB7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB1cmw6IFwiZnJhbWVzXCIgfSxcclxuICAgICAgICAvL+WKoOi9veWIhuS6q+WbvlxyXG4gICAgICAgIFwic2hhcmVcIjogeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdXJsOiBcInNoYXJlXCIgfSxcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/m+W6puadoeaVsOWAvFxyXG4gICAgICog5pWw5YC85bqU6K+l5ZyoMC0xMDBcclxuICAgICAqL1xyXG4gICAgUHJvZ3Jlc3NWYWx1ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vei/m+W6pu+8jOS7pei1hOa6kOi9veWFpeWujOaIkCsxXHJcbiAgICAgKiDlvZPovb3lhaXorqHmlbDnrYnkuo7otYTmupDmlbDml7bvvIzlrozmiJDliqDovb1cclxuICAgICAqL1xyXG4gICAgbG9hZFByb2dyZXNzQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBsb2FkUG9yZ3Jlc3NDb3VudE1heDogbnVtYmVyID0gT2JqZWN0LmtleXModGhpcy5sb2FkUmVzb3VyY2VzY2F0YWxvZykubGVuZ3RoO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo55S75pKt5pS+5a6M5q+V5qCH6K6wXHJcbiAgICAgKiDmlbDlgLzlupTor6XlnKgwLTEwMFxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25PdmVyOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+aWueazlSBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuW8gOWni+WKqOeUu1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBsYXlMb2dvQW5pbWF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9nb05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuZGVsYXkoMSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25PdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWmguaenOatpOWcuuaZr+WGheacieWFtuS7luaMiemSruetiee7hOS7tuinpuWPkeaXtlxyXG4gICAgICog5Y+v5Lul6YCa6L+H6L+Z6YeM6L+b6KGM5Lit6L2sXHJcbiAgICAgKiDopoHmsYLmoLzlvI/kuLogb24gKyB0b2RvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGV2ZW50LCBjdXN0b21EYXRlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGN1c3RvbURhdGUuaW5kZXhPZihcIm9uXCIpIDw9IDApXHJcbiAgICAgICAgICAgIHRoaXNbY3VzdG9tRGF0ZV0oKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMub25Mb2FkU2NlbmUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295Zy65pmvXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVUYXJnZXQg5Y+v6YCJ5Zy65pmv55uu5qCHXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25Mb2FkU2NlbmUoc2NlbmVUYXJnZXQ/OiBzdHJpbmcgfCBjYy5TY2VuZUFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY2VuZVRhcmdldCA/XHJcbiAgICAgICAgICAgICAgICBzY2VuZVRhcmdldCBpbnN0YW5jZW9mIFN0cmluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVUYXJnZXQgOlxyXG4gICAgICAgICAgICAgICAgICAgIChzY2VuZVRhcmdldCBhcyBjYy5TY2VuZUFzc2V0KS5uYW1lIDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb0dvU2VuY2UubmFtZTtcclxuICAgICAgICB9KSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5a6i5oi356uv5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YWo6YOo6LWE5rqQ5YyFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZEFsbFJlc291cmNlcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubG9hZFJlc291cmNlc2NhdGFsb2cpO1xyXG4gICAgICAgIHJlc0tleXMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzTG9nID0gdGhpcy5sb2FkUmVzb3VyY2VzY2F0YWxvZ1t1cmxdO1xyXG4gICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtyZXNMb2cudXJsXSA9IGNjdnYud2FyZWhvdXNlW3Jlc0xvZy51cmxdIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXModXJsLCByZXNMb2cudHlwZSwgcmVzTG9nLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInnsbvliqDovb3otYTmupDljIVcclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSBzYXZlVXJsIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRSZXNvdXJjZXModXJsLCB0eXBlLCBzYXZlVXJsKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKHVybCwgdHlwZSxcclxuXHJcbiAgICAgICAgICAgIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwi5q2j5Zyo5Yqg6L29OlwiICsgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Qcm9ncmVzc1ZhbHVlID0gY29tcGxldGVkQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGDliqDovb3ov5vluqY6ICR7c2VsZi5Qcm9ncmVzc1ZhbHVlICogMTAwfSVgKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYOWKoOi9vSR7dHlwZX3ml7blj5HnlJ/plJnor69gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gKGRhdGFbaV0gaW5zdGFuY2VvZiBjYy5TcHJpdGVBdGxhcykgPyBkYXRhW2ldLm5hbWUuc2xpY2UoMCwgLTYpIDogZGF0YVtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXSBpbnN0YW5jZW9mIGNjLkpzb25Bc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2N2di53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldWydqc29uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY3Z2LndhcmVob3VzZVtzYXZlVXJsXVtuYW1lXSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRQcm9ncmVzc0NvdW50Kys7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFnIOW+ruS/oeW5s+WPsOabtOaWsCBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOajgOafpea4uOaIj+aWsOeJiOacrFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrR2FtZU5ld1ZlcnNpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8g5LuF5YWz5rOo5b6u5L+h5bmz5Y+wXHJcbiAgICAgICAgaWYgKCEoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyDlsJ3or5Xojrflj5blvq7kv6Hmm7TmlrDnrqHnkIblmahcclxuICAgICAgICBsZXQgdXBkYXRlTWFuYWdlcjogYW55O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIGlmICghdXBkYXRlTWFuYWdlcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICAvLyDojrflj5blhajlsYDllK/kuIDnmoTniYjmnKzmm7TmlrDnrqHnkIblmajvvIznlKjkuo7nrqHnkIblsI/nqIvluo/mm7TmlrBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyDnm5HlkKzlkJHlvq7kv6HlkI7lj7Dor7fmsYLmo4Dmn6Xmm7TmlrDnu5Pmnpzkuovku7YgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5pyJ5paw54mI5pys77yaXCIgKyByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5oYXNVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pyJ5paw54mI5pysICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g5bCP56iL5bqP5pyJ5paw54mI5pys77yM5Lya5Li75Yqo6Kem5Y+R5LiL6L295pON5L2cICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lvZPmlrDniYjmnKzkuIvovb3lrozmiJDvvIzkvJrov5vooYzlm57osIMgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5Y2V5Ye756Gu5a6a6YeN5ZCv5bCP56iL5bqPJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK/lsI/nqIvluo8gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIOWwj+eoi+W6j+acieaWsOeJiOacrO+8jOS8muS4u+WKqOinpuWPkeS4i+i9veaTjeS9nO+8iOaXoOmcgOW8gOWPkeiAheinpuWPke+8iSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+aWsOeJiOacrOS4i+i9veWksei0pe+8jOS8mui/m+ihjOWbnuiwgyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmo4Dmn6XliLDmnInmlrDniYjmnKzvvIzkvYbkuIvovb3lpLHotKXvvIzor7fnqI3lkI7lsJ3or5UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b6u5L+h5YiG5YyFXHJcbiAgICBwcml2YXRlIHd4U3VicGFja2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd3gubG9hZFN1YnBhY2thZ2Uoe1xyXG4gICAgICAgICAgICBuYW1lOiAncmVzb3VyY2VzJywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3miJDlip/lkI7pgJrov4cgc3VjY2VzcyDlm57osINcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZEFsbFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3lpLHotKXpgJrov4cgZmFpbCDlm57osINcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGxvYWQgJHtuYW1lfSBmYWlsYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
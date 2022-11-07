
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
        _this.readyToGoSence = null;
        // TAG 自定义数值                                                                                         
        /**
         * 进度条数值
         * 数值应该在0-100
         */
        _this.ProgressValue = 0;
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
            "atlas": { type: cc.SpriteAtlas, url: "atlas" },
            //加载单个精灵资源
            "frames": { type: cc.SpriteFrame, url: "frames" },
        };
        return _this;
    }
    // TAG LIFE-CYCLE callbacks                                                                              
    Loading.prototype.onLoad = function () {
        // 播放动画
        this.playLogoAnimation();
        //检查游戏更新
        this.checkGameNewVersion();
        // 资源加载初始化
        this.ProgressValue = 0;
    };
    Loading.prototype.start = function () {
    };
    Loading.prototype.update = function (dt) {
    };
    // TAG USER FUNCTION:                                                                                    
    // tag 用户方法 
    /**
     * 播放开始动画
     */
    Loading.prototype.playLogoAnimation = function () {
        cc.tween(this.logoNode)
            .delay(0.5)
            .to(1, { opacity: 255 })
            .delay(1)
            .call(function () {
            cc.director.loadScene("Game");
        })
            .start();
    };
    // tag 客户端方法 
    /**
     * 加载全部资源包
     */
    Loading.prototype.loadAllResources = function () {
        var _this = this;
        var resKeys = Object.keys(this.loadResourcescatalog);
        resKeys.forEach(function (url) {
            _this.loadResources(url, _this.loadResourcescatalog['type'], _this.loadResourcescatalog['url']);
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
            cc.log("正在加载:" + item.url);
            self.ProgressValue = completedCount / totalCount;
            cc.log("\u52A0\u8F7D\u8FDB\u5EA6: " + self.ProgressValue * 100 + "%");
        }, function (err, data) {
            if (err) {
                cc.log("\u52A0\u8F7D" + type + "\u65F6\u53D1\u751F\u9519\u8BEF");
            }
            else {
                for (var i in data) {
                    var name = (data[i] instanceof cc.SpriteAtlas) ? data[i].name.slice(0, -6) : data[i].name;
                    if (data[i] instanceof cc.JsonAsset) {
                        cc['vv'].warehouse[saveUrl][name] = data[i]['json'];
                    }
                    else {
                        cc['vv'].warehouse[saveUrl][name] = data[i];
                    }
                }
            }
        });
    };
    /**
     * 检查游戏新版本
     */
    Loading.prototype.checkGameNewVersion = function () {
        // 仅关注微信平台
        if (!(cc.sys.platform == cc.sys.WECHAT_GAME))
            return;
        // 尝试获取微信更新管理器
        var updateManager;
        try {
            updateManager = wx.getUpdateManager();
            if (!updateManager)
                return;
        }
        catch (_a) {
            return;
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
            displayName: "进度条目标",
            tooltip: "进度条目标设定后可以指定动画",
        })
    ], Loading.prototype, "progressBar", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画速率",
            visible: function () {
                return this.progressBar != null;
            },
        })
    ], Loading.prototype, "progressUpdateRate", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画随机变化间隔",
            tooltip: "进度条动画随机变化间隔",
            visible: function () {
                return this.progressBar != null;
            },
        })
    ], Loading.prototype, "progressRandomChangeTime", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 2, 0.01],
            slide: true,
            displayName: "进度条动画等待加载完成位置",
            tooltip: "进度条动画等待加载完成位置",
            visible: function () {
                return this.progressBar != null;
            },
        })
    ], Loading.prototype, "progressWaitForLoad", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: "完成后显示",
            tooltip: "当加载完成时，被启用的节点",
            visible: function () {
                return this.progressBar != null;
            },
        })
    ], Loading.prototype, "readyToShow", void 0);
    __decorate([
        property({
            type: cc.SceneAsset,
            displayName: "完成后加载目标",
            tooltip: "当加载完成时，加载的场景，如果有启用节点，则等待节点触发",
            visible: function () {
                return this.progressBar != null;
            },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZFxcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFDbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFLNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUErT0M7UUE1T0csY0FBUSxHQUFZLElBQUksQ0FBQztRQU96QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBaUI7UUFVakIsd0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBWXZCLDhCQUF3QixHQUFHLEVBQUUsQ0FBQztRQVk5Qix5QkFBbUIsR0FBRyxHQUFHLENBQUM7UUFVMUIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFVbkIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFxQnRCLHFHQUFxRztRQUVyRzs7O1dBR0c7UUFDSCxtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQjs7V0FFRztRQUNILDBCQUFvQixHQUFHO1lBQ25CLDhDQUE4QztZQUM5QyxVQUFVO1lBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtZQUMvQyxTQUFTO1lBQ1QsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUM5QyxRQUFRO1lBQ1IsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUMvQyxVQUFVO1lBQ1YsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtTQUNwRCxDQUFBOztJQW9JTCxDQUFDO0lBM0tHLHlHQUF5RztJQUV6Ryx3QkFBTSxH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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTSUdOUE9TVCDliqDovb3pobXpnaLvvIzkvYbkuI3lsZ7kuo7lvIDlj5HnsbtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8vIOiuqee8luivkeWZqOW/veeVpeW5s+WPsEFQSeaKpemUmVxyXG5kZWNsYXJlIHZhciB3eDogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ29Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h55uu5qCHXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaHnm67moIforr7lrprlkI7lj6/ku6XmjIflrprliqjnlLtcIixcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc0JhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gU0lHTlBPU1Qg6L+b5bqm5p2h6YOo5YiGXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMiwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6L+b5bqm5p2h5Yqo55S76YCf546HXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzVXBkYXRlUmF0ZSA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDIsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui/m+W6puadoeWKqOeUu+maj+acuuWPmOWMlumXtOmalFwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi6L+b5bqm5p2h5Yqo55S76ZqP5py65Y+Y5YyW6Ze06ZqUXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIHByb2dyZXNzUmFuZG9tQ2hhbmdlVGltZSA9IC4yO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAyLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLov5vluqbmnaHliqjnlLvnrYnlvoXliqDovb3lrozmiJDkvY3nva5cIixcclxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoeWKqOeUu+etieW+heWKoOi9veWujOaIkOS9jee9rlwiLFxyXG4gICAgICAgIHZpc2libGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBwcm9ncmVzc1dhaXRGb3JMb2FkID0gLjg1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLlrozmiJDlkI7mmL7npLpcIixcclxuICAgICAgICB0b29sdGlwOiBcIuW9k+WKoOi9veWujOaIkOaXtu+8jOiiq+WQr+eUqOeahOiKgueCuVwiLFxyXG4gICAgICAgIHZpc2libGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzQmFyICE9IG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZWFkeVRvU2hvdyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5TY2VuZUFzc2V0LFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWujOaIkOWQjuWKoOi9veebruagh1wiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5b2T5Yqg6L295a6M5oiQ5pe277yM5Yqg6L2955qE5Zy65pmv77yM5aaC5p6c5pyJ5ZCv55So6IqC54K577yM5YiZ562J5b6F6IqC54K56Kem5Y+RXCIsXHJcbiAgICAgICAgdmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NCYXIgIT0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJlYWR5VG9Hb1NlbmNlID0gbnVsbDtcclxuXHJcbiAgICAvLyBUQUcgTElGRS1DWUNMRSBjYWxsYmFja3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5pKt5pS+5Yqo55S7XHJcbiAgICAgICAgdGhpcy5wbGF5TG9nb0FuaW1hdGlvbigpO1xyXG4gICAgICAgIC8v5qOA5p+l5ri45oiP5pu05pawXHJcbiAgICAgICAgdGhpcy5jaGVja0dhbWVOZXdWZXJzaW9uKCk7XHJcbiAgICAgICAgLy8g6LWE5rqQ5Yqg6L295Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzc1ZhbHVlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBRyDoh6rlrprkuYnmlbDlgLwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+b5bqm5p2h5pWw5YC8XHJcbiAgICAgKiDmlbDlgLzlupTor6XlnKgwLTEwMFxyXG4gICAgICovXHJcbiAgICBQcm9ncmVzc1ZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupDnm67lvZVcclxuICAgICAqL1xyXG4gICAgbG9hZFJlc291cmNlc2NhdGFsb2cgPSB7XHJcbiAgICAgICAgLy8gXCJ1cmxcIjogeyB0eXBlOiByZXMgdHlwZSwgdXJsOiBcInNhdmUgdXJsXCIgfSxcclxuICAgICAgICAvL+WKoOi9vemfs+S5kOmfs+aViOi1hOa6kFxyXG4gICAgICAgIFwic291bmRzXCI6IHsgdHlwZTogY2MuQXVkaW9DbGlwLCB1cmw6IFwic291bmRzXCIgfSxcclxuICAgICAgICAvL+WKoOi9vemihOWItuS7tui1hOa6kFxyXG4gICAgICAgIFwicHJlZmFic1wiOiB7IHR5cGU6IGNjLlByZWZhYiwgdXJsOiBcInByZWZhYnNcIiB9LFxyXG4gICAgICAgIC8v5Yqg6L295Zu+6ZuG6LWE5rqQXHJcbiAgICAgICAgXCJhdGxhc1wiOiB7IHR5cGU6IGNjLlNwcml0ZUF0bGFzLCB1cmw6IFwiYXRsYXNcIiB9LFxyXG4gICAgICAgIC8v5Yqg6L295Y2V5Liq57K+54G16LWE5rqQXHJcbiAgICAgICAgXCJmcmFtZXNcIjogeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdXJsOiBcImZyYW1lc1wiIH0sXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVEFHIFVTRVIgRlVOQ1RJT046ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gdGFnIOeUqOaIt+aWueazlSBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuW8gOWni+WKqOeUu1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBsYXlMb2dvQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubG9nb05vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuZGVsYXkoMSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWcg5a6i5oi356uv5pa55rOVIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295YWo6YOo6LWE5rqQ5YyFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZEFsbFJlc291cmNlcygpIHtcclxuICAgICAgICBsZXQgcmVzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubG9hZFJlc291cmNlc2NhdGFsb2cpO1xyXG4gICAgICAgIHJlc0tleXMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXModXJsLCB0aGlzLmxvYWRSZXNvdXJjZXNjYXRhbG9nWyd0eXBlJ10sIHRoaXMubG9hZFJlc291cmNlc2NhdGFsb2dbJ3VybCddKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMieexu+WKoOi9vei1hOa6kOWMhVxyXG4gICAgICogQHBhcmFtIHVybCBcclxuICAgICAqIEBwYXJhbSB0eXBlIFxyXG4gICAgICogQHBhcmFtIHNhdmVVcmwgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9hZFJlc291cmNlcyh1cmwsIHR5cGUsIHNhdmVVcmwpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIodXJsLCB0eXBlLFxyXG5cclxuICAgICAgICAgICAgKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmraPlnKjliqDovb06XCIgKyBpdGVtLnVybCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlByb2dyZXNzVmFsdWUgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYOWKoOi9vei/m+W6pjogJHtzZWxmLlByb2dyZXNzVmFsdWUgKiAxMDB9JWApO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhg5Yqg6L29JHt0eXBlfeaXtuWPkeeUn+mUmeivr2ApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSAoZGF0YVtpXSBpbnN0YW5jZW9mIGNjLlNwcml0ZUF0bGFzKSA/IGRhdGFbaV0ubmFtZS5zbGljZSgwLCAtNikgOiBkYXRhW2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldIGluc3RhbmNlb2YgY2MuSnNvbkFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY1sndnYnXS53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldWydqc29uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY1sndnYnXS53YXJlaG91c2Vbc2F2ZVVybF1bbmFtZV0gPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l5ri45oiP5paw54mI5pysXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tHYW1lTmV3VmVyc2lvbigpIHtcclxuICAgICAgICAvLyDku4XlhbPms6jlvq7kv6HlubPlj7BcclxuICAgICAgICBpZiAoIShjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSkgcmV0dXJuO1xyXG4gICAgICAgIC8vIOWwneivleiOt+WPluW+ruS/oeabtOaWsOeuoeeQhuWZqFxyXG4gICAgICAgIGxldCB1cGRhdGVNYW5hZ2VyOiBhbnk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXBkYXRlTWFuYWdlciA9IHd4LmdldFVwZGF0ZU1hbmFnZXIoKTtcclxuICAgICAgICAgICAgaWYgKCF1cGRhdGVNYW5hZ2VyKSByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluWFqOWxgOWUr+S4gOeahOeJiOacrOabtOaWsOeuoeeQhuWZqO+8jOeUqOS6jueuoeeQhuWwj+eoi+W6j+abtOaWsFxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIOebkeWQrOWQkeW+ruS/oeWQjuWPsOivt+axguajgOafpeabtOaWsOe7k+aenOS6i+S7tiBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmK/lkKbmnInmlrDniYjmnKzvvJpcIiArIHJlcy5oYXNVcGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmhhc1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmnInmlrDniYjmnKwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDlsI/nqIvluo/mnInmlrDniYjmnKzvvIzkvJrkuLvliqjop6blj5HkuIvovb3mk43kvZwgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+aWsOeJiOacrOS4i+i9veWujOaIkO+8jOS8mui/m+ihjOWbnuiwgyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzljZXlh7vnoa7lrprph43lkK/lsI/nqIvluo8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr+Wwj+eoi+W6jyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8g5bCP56iL5bqP5pyJ5paw54mI5pys77yM5Lya5Li75Yqo6Kem5Y+R5LiL6L295pON5L2c77yI5peg6ZyA5byA5Y+R6ICF6Kem5Y+R77yJICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5b2T5paw54mI5pys5LiL6L295aSx6LSl77yM5Lya6L+b6KGM5Zue6LCDICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ajgOafpeWIsOacieaWsOeJiOacrO+8jOS9huS4i+i9veWksei0pe+8jOivt+eojeWQjuWwneivlScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v5b6u5L+h5YiG5YyFXHJcbiAgICB3eFN1YnBhY2thZ2UoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHd4LmxvYWRTdWJwYWNrYWdlKHtcclxuICAgICAgICAgICAgbmFtZTogJ3Jlc291cmNlcycsIC8vIG5hbWUg5Y+v5Lul5aGrIG5hbWUg5oiW6ICFIHJvb3RcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295oiQ5Yqf5ZCO6YCa6L+HIHN1Y2Nlc3Mg5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRBbGxSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295aSx6LSl6YCa6L+HIGZhaWwg5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBsb2FkICR7bmFtZX0gZmFpbGAsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=
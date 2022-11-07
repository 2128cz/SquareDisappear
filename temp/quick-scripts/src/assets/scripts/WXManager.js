"use strict";
cc._RF.push(module, 'ab307ceicpDKI1PxDSPpSX1', 'WXManager');
// scripts/WXManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WXManager = /** @class */ (function () {
    function WXManager() {
    }
    Object.defineProperty(WXManager, "Instance", {
        get: function () {
            if (!WXManager.instance) {
                WXManager.instance = new WXManager();
            }
            return WXManager.instance;
        },
        enumerable: false,
        configurable: true
    });
    //开通微信右上角的分享
    WXManager.prototype.openShare = function (frameUrl, title) {
        if (window.wx) {
            //显示
            wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
            cc.resources.load(frameUrl, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    //share为分享的图片名称这是路径（assets/resources/share）
                    wx.onShareAppMessage(function (res) {
                        return {
                            title: title,
                            imageUrl: data.url,
                            success: function (res) {
                                console.log(res);
                            },
                            fail: function (res) {
                                console.log(res);
                            }
                        };
                    });
                }
            });
        }
    };
    //玩家主动点击按钮分享
    WXManager.prototype.playerShare = function (frameUrl, title) {
        if (window.wx) {
            cc.resources.load(frameUrl, function (err, data) {
                var options = {
                    title: title,
                    imageUrl: data.url,
                };
                wx.shareAppMessage(options);
                //share为分享的图片名称这是路径（assets/resources/share）
                wx.onShareAppMessage(function (res) {
                    return {
                        title: title,
                        imageUrl: data.url,
                        success: function (res) {
                            console.log(res);
                        },
                        fail: function (res) {
                            console.log(res);
                        }
                    };
                });
            });
        }
    };
    return WXManager;
}());
exports.default = WXManager;

cc._RF.pop();
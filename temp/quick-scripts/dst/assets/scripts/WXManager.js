
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/WXManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV1hNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQWtFQSxDQUFDO0lBL0RHLHNCQUFrQixxQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUNyQixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7YUFDeEM7WUFDRCxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxZQUFZO0lBQ0wsNkJBQVMsR0FBaEIsVUFBaUIsUUFBZ0IsRUFBRSxLQUFhO1FBQzVDLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNYLElBQUk7WUFDSixFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUNiLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7YUFDOUMsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7Z0JBQzNDLElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILDJDQUEyQztvQkFDM0MsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRzt3QkFDOUIsT0FBTzs0QkFDSCxLQUFLLEVBQUUsS0FBSzs0QkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUc7NEJBQ2xCLE9BQU8sWUFBQyxHQUFHO2dDQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ3BCLENBQUM7NEJBQ0QsSUFBSSxZQUFDLEdBQUc7Z0NBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTs0QkFDcEIsQ0FBQzt5QkFDSixDQUFBO29CQUNMLENBQUMsQ0FBQyxDQUFBO2lCQUNMO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFRCxZQUFZO0lBQ0wsK0JBQVcsR0FBbEIsVUFBbUIsUUFBZ0IsRUFBRSxLQUFhO1FBQzlDLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNYLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO2dCQUMzQyxJQUFJLE9BQU8sR0FBRztvQkFDVixLQUFLLEVBQUUsS0FBSztvQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUc7aUJBQ3JCLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFNUIsMkNBQTJDO2dCQUMzQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHO29CQUM5QixPQUFPO3dCQUNILEtBQUssRUFBRSxLQUFLO3dCQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFDbEIsT0FBTyxZQUFDLEdBQUc7NEJBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDcEIsQ0FBQzt3QkFDRCxJQUFJLFlBQUMsR0FBRzs0QkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNwQixDQUFDO3FCQUNKLENBQUE7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FsRUEsQUFrRUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdYTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogV1hNYW5hZ2VyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6IFdYTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCFXWE1hbmFnZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgV1hNYW5hZ2VyLmluc3RhbmNlID0gbmV3IFdYTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gV1hNYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5byA6YCa5b6u5L+h5Y+z5LiK6KeS55qE5YiG5LqrXHJcbiAgICBwdWJsaWMgb3BlblNoYXJlKGZyYW1lVXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAod2luZG93Lnd4KSB7XHJcbiAgICAgICAgICAgIC8v5pi+56S6XHJcbiAgICAgICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVudXM6IFsnc2hhcmVBcHBNZXNzYWdlJywgJ3NoYXJlVGltZWxpbmUnXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChmcmFtZVVybCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2hhcmXkuLrliIbkuqvnmoTlm77niYflkI3np7Dov5nmmK/ot6/lvoTvvIhhc3NldHMvcmVzb3VyY2VzL3NoYXJl77yJXHJcbiAgICAgICAgICAgICAgICAgICAgd3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLCAvL+WIhuS6q+eahOagh+mimFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+eOqeWutuS4u+WKqOeCueWHu+aMiemSruWIhuS6q1xyXG4gICAgcHVibGljIHBsYXllclNoYXJlKGZyYW1lVXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAod2luZG93Lnd4KSB7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGZyYW1lVXJsLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZShvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NoYXJl5Li65YiG5Lqr55qE5Zu+54mH5ZCN56ew6L+Z5piv6Lev5b6E77yIYXNzZXRzL3Jlc291cmNlcy9zaGFyZe+8iVxyXG4gICAgICAgICAgICAgICAgd3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSwgLy/liIbkuqvnmoTmoIfpophcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
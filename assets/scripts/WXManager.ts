export default class WXManager {
    private static instance: WXManager;

    public static get Instance(): WXManager {
        if (!WXManager.instance) {
            WXManager.instance = new WXManager();
        }
        return WXManager.instance;
    }

    //开通微信右上角的分享
    public openShare(frameUrl: string, title: string) {
        if (window.wx) {
            //显示
            wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            })
            cc.resources.load(frameUrl, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    //share为分享的图片名称这是路径（assets/resources/share）
                    wx.onShareAppMessage(function (res) {
                        return {
                            title: title, //分享的标题
                            imageUrl: data.url,
                            success(res) {
                                console.log(res)
                            },
                            fail(res) {
                                console.log(res)
                            }
                        }
                    })
                }
            })
        }
    }

    //玩家主动点击按钮分享
    public playerShare(frameUrl: string, title: string) {
        if (window.wx) {
            cc.resources.load(frameUrl, function (err, data) {
                let options = {
                    title: title,
                    imageUrl: data.url,
                };
                wx.shareAppMessage(options);

                //share为分享的图片名称这是路径（assets/resources/share）
                wx.onShareAppMessage(function (res) {
                    return {
                        title: title, //分享的标题
                        imageUrl: data.url,
                        success(res) {
                            console.log(res)
                        },
                        fail(res) {
                            console.log(res)
                        }
                    }
                })
            });
        }
    }
}
// SIGNPOST 加载页面，但不属于开发类
const { ccclass, property } = cc._decorator;

// 让编译器忽略平台API报错
declare var wx: any;
@ccclass
export default class Loading extends cc.Component {

    @property(cc.Node)
    logoNode: cc.Node = null;

    @property({
        type: cc.Node,
        displayName: "进度条目标",
        tooltip: "进度条目标设定后可以指定动画",
    })
    progressBar: cc.Node = null;

    // SIGNPOST 进度条部分
    @property({
        type: cc.Float,
        range: [0, 2, 0.01],
        slide: true,
        displayName: "进度条动画速率",
        visible() {
            return this.progressBar != null;
        },
    })
    progressUpdateRate = 1;

    @property({
        type: cc.Float,
        range: [0, 2, 0.01],
        slide: true,
        displayName: "进度条动画随机变化间隔",
        tooltip: "进度条动画随机变化间隔",
        visible() {
            return this.progressBar != null;
        },
    })
    progressRandomChangeTime = .2;

    @property({
        type: cc.Float,
        range: [0, 2, 0.01],
        slide: true,
        displayName: "进度条动画等待加载完成位置",
        tooltip: "进度条动画等待加载完成位置",
        visible() {
            return this.progressBar != null;
        },
    })
    progressWaitForLoad = .85;

    @property({
        type: cc.Node,
        displayName: "完成后显示",
        tooltip: "当加载完成时，被启用的节点",
        visible() {
            return this.progressBar != null;
        },
    })
    readyToShow = null;

    @property({
        type: cc.SceneAsset,
        displayName: "完成后加载目标",
        tooltip: "当加载完成时，加载的场景，如果有启用节点，则等待节点触发",
        visible() {
            return this.progressBar != null;
        },
    })
    readyToGoSence = null;

    // TAG LIFE-CYCLE callbacks                                                                              

    onLoad() {
        // 播放动画
        this.playLogoAnimation();
        //检查游戏更新
        this.checkGameNewVersion();
        // 资源加载初始化
        this.ProgressValue = 0;
    }

    start() {

    }

    update(dt) {

    }

    // TAG 自定义数值                                                                                         

    /**
     * 进度条数值
     * 数值应该在0-100
     */
    ProgressValue: number = 0;
    /**
     * 加载资源目录
     */
    loadResourcescatalog = {
        // "url": { type: res type, url: "save url" },
        //加载音乐音效资源
        "sounds": { type: cc.AudioClip, url: "sounds" },
        //加载预制件资源
        "prefabs": { type: cc.Prefab, url: "prefabs" },
        //加载图集资源
        "atlas": { type: cc.SpriteAtlas, url: "atlas" },
        //加载单个精灵资源
        "frames": { type: cc.SpriteFrame, url: "frames" },
    }

    // TAG USER FUNCTION:                                                                                    

    // tag 用户方法 

    /**
     * 播放开始动画
     */
    private playLogoAnimation() {
        cc.tween(this.logoNode)
            .delay(0.5)
            .to(1, { opacity: 255 })
            .delay(1)
            .call(() => {
                cc.director.loadScene("Game");
            })
            .start()
    }

    // tag 客户端方法 

    /**
     * 加载全部资源包
     */
    private loadAllResources() {
        let resKeys = Object.keys(this.loadResourcescatalog);
        resKeys.forEach(url => {
            this.loadResources(url, this.loadResourcescatalog['type'], this.loadResourcescatalog['url']);
        });
    }

    /**
     * 按类加载资源包
     * @param url 
     * @param type 
     * @param saveUrl 
     */
    private loadResources(url, type, saveUrl) {
        let self = this;
        cc.resources.loadDir(url, type,

            (completedCount, totalCount, item) => {
                cc.log("正在加载:" + item.url);
                self.ProgressValue = completedCount / totalCount;
                cc.log(`加载进度: ${self.ProgressValue * 100}%`);
            },

            (err, data) => {
                if (err) {
                    cc.log(`加载${type}时发生错误`);
                } else {
                    for (let i in data) {
                        let name = (data[i] instanceof cc.SpriteAtlas) ? data[i].name.slice(0, -6) : data[i].name;
                        if (data[i] instanceof cc.JsonAsset) {
                            cc['vv'].warehouse[saveUrl][name] = data[i]['json'];
                        } else {
                            cc['vv'].warehouse[saveUrl][name] = data[i];
                        }
                    }
                }
            })
    }

    /**
     * 检查游戏新版本
     */
    private checkGameNewVersion() {
        // 仅关注微信平台
        if (!(cc.sys.platform == cc.sys.WECHAT_GAME)) return;
        // 尝试获取微信更新管理器
        let updateManager: any;
        try {
            updateManager = wx.getUpdateManager();
            if (!updateManager) return;
        }
        catch { return; }

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
                    })
                })
                // 小程序有新版本，会主动触发下载操作（无需开发者触发）        
                updateManager.onUpdateFailed(function () {
                    //当新版本下载失败，会进行回调          
                    wx.showModal({
                        title: '提示',
                        content: '检查到有新版本，但下载失败，请稍后尝试',
                        showCancel: false,
                    })
                })
            }
        });

    }

    //微信分包
    wxSubpackage() {
        let self = this;
        wx.loadSubpackage({
            name: 'resources', // name 可以填 name 或者 root
            success: function (res) {
                // 分包加载成功后通过 success 回调
                self.loadAllResources();
            },
            fail: function (err) {
                // 分包加载失败通过 fail 回调
                console.error(`load ${name} fail`, err);
            }
        })

    }



}

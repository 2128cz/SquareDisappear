/**
 * 微信命名空间开发者工具  
 * 需要啥自己定义  
 * 来自github库: https://github.com/2128cz/CocosCopilot  
 * 官方文档：https://developers.weixin.qq.com/minigame/dev/guide/
 */
declare namespace wx{
    /**
     * 主动拉起转发，进入选择通讯录界面。
     * @param Object 
     * title 	string 	转发标题，不传则默认使用当前小游戏的昵称。  
     * imageUrl 	string 	转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4  
     * query 	string 	查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。  	
     * imageUrlId 	string 	审核通过的图片 ID，详见 使用审核通过的转发图片 	2.4.3  
     * promise 	promise 	如果该参数存在，则其它的参数将会以 resolve 结果为准，如果三秒内不 resolve，分享会使用上面传入的默认参数 	2.12.0  
     * toCurrentGroup 	boolean 	是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入 false 时可转发到其他会话。 	2.12.2  
     * path 	string 	独立分包路径。详见 小游戏独立分包指南 	2.12.2  
     */
    export function shareAppMessage(Object: object);
    /**
     * 监听用户点击右上角菜单的「转发」按钮时触发的事件
     * @Object res {
     * title 	string 	转发标题，不传则默认使用当前小游戏的昵称。  
     * imageUrl 	string 	转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4  
     * query 	string 	查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。  	
     * imageUrlId 	string 	审核通过的图片 ID，详见 使用审核通过的转发图片 	2.4.3  
     * promise 	promise 	如果该参数存在，则其它的参数将会以 resolve 结果为准，如果三秒内不 resolve，分享会使用上面传入的默认参数 	2.12.0  
     * toCurrentGroup 	boolean 	是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入 false 时可转发到其他会话。 	2.12.2  
     * path 	string 	独立分包路径。详见 小游戏独立分包指南 	2.12.2  
     * }
     * @param listener 用户点击右上角菜单的“转发”时触发的事件监听函数
     * @example wx.onShareAppMessage(() => {
     * return {
     *      title: '转发标题',  
     *      imageUrl: '' // 图片 URL  
     *      }  
     * })  
     */
    export function onShareAppMessage(listener: function);
}
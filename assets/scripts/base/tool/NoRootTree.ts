import { RigorousRingBuffer } from '../class/RigorousLibrary';
import { mathMacro as mm } from '../class/DevelopersToolGlobal';
/**
 * 无根树 
 * @tip 根据当前游戏的定义，入栈为根，出栈为叶
 */
export default class noRootTree extends RigorousRingBuffer {
    /**
     * 树实例
     */
    public static _NoRootTree: noRootTree;
    /**
     * 获取树单例
     */
    public static get tree() {
        this._NoRootTree = this._NoRootTree || new noRootTree(30);
        return this._NoRootTree;
    }
    /**
     * 设置树单例
     */
    public static set tree(value: noRootTree) {
        this._NoRootTree = value;
    }

    /**
     * 添加子项
     * @param object 
     * @returns 返回这个子项的索引
     */
    public add(object: any): number {
        return this.push(object);
    }
    /**
     * 反向添加子项  
     * 警告：这是不符合规则的方法，请确保栈深度允许反推，
     * 或是不再获取栈有效深度，因为这不会进行有效性检查，
     * 会破坏数据连续性
     * @param object 
     */
    public addFromFront(object: any): number {
        // let point = this.indexAtStack(this.$get - 1);
        this.$get = this.$get - 1;
        this._HashList[this.$get] = object;
        return this.$get;
    }
    /**
     * 获取根节点
     * @returns 
     */
    public get root(): any {
        return this.getBuffer(this.$put);
    }
    /**
     * 获取最末子节点
     * @returns 
     */
    public get leaf(): any {
        return this.getBuffer(this.$get);
    }
    /**
     * 从给定索引处截断，并返回截断部分
     * @param key 
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    public cut<T extends number>(key?: T): any {
        let len = (key % this._StackSize) - this.$get;
        if (this._StackIsFull) return this._StackSize - len;
        return this.pull(len < 0 ? this._StackSize + len : len);
    }
    /**
     * 删除指定长度的项目
     * @param length 删除的长度
     */
    public del(length?: number) {
        if (!length || length == 0) length = 1;
        if (length < 0) return this.clean();
        this.$get = length;
    }
    /**
     * 在叶子节点附近给定一个索引，并指定偏移量，转为一个有效的索引
     */
    public getNextIndex(index: number, offset: number): number {
        return mm.PMod(index + offset, this._StackSize);
    }
    public get buffer() {
        return this._HashList;
    }
}

// import NTR from "../base/tool/NoRootTree"; // (〃´-ω･) 诶嘿~

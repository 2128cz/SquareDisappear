import { RigorousRingBuffer } from '../class/RigorousLibrary';
export default class noRootTree extends RigorousRingBuffer {
    /**
     * 树实例
     */
    public static _NoRootTree: noRootTree;
    public static get tree() {
        this._NoRootTree = this._NoRootTree || new noRootTree(30);
        return this._NoRootTree;
    }
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
     * 按索引获取项目
     * @param key 
     * @returns 
     */
    public get(key: number): any {

        return
    }
    /**
     * 从给定索引处截断，并返回截断部分
     * @param key 
     */
    public cut<T extends number>(key?: T): any {
        let len = (key % this._StackSize) - this.$get;
        if (this._StackIsFull) return this._StackSize - len;
        return this.pull(len < 0 ? this._StackSize + len : len);
    }
    /**
     * 删除项目
     * @param length 删除的长度
     */
    public del(length?: number) {
        if (!length || length == 0) length = 1;
        if (length < 0) return this.clean();
        this.$get = length;
    }
}
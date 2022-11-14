import { mathMacro as mm } from '../class/DevelopersToolGlobal';
enum SysBaseType {
    number, string, boolean, object, undefined
}
export class RigorousValueType {

}
export class RigorousVector4 extends RigorousValueType {

}
export class RigorousVector3 extends RigorousVector4 {

}
export class RigorousPostion extends RigorousVector3 {

}
export class RigorousRotation extends RigorousVector3 {

}
export class RigorousScale extends RigorousVector3 {

}
export class RigorousVector2 extends RigorousVector4 {

}
export class RigorousSize extends RigorousVector2 {

}
export class RigorousMatrix4 extends RigorousValueType {

}
export class RigorousMatrix3 extends RigorousMatrix4 {

}
export class RigorousMatrix2 extends RigorousMatrix4 {

}
import { Ihash } from './RigorousType';
export class RigorousHash extends RigorousValueType implements Ihash {
    /**
     * @param length 定义哈希表的使用场景最大长度
     */
    constructor(length?: number) {
        super();
        this.HashCodeGate = length ? length > 50 : true;
        this._HashList = {};
    }

    /**
     * 哈希表
     */
    protected declare _HashList: any[number];

    /**
     * 获取一个字符的哈希值
     * @param code 
     */
    protected ToHashCode_ShortWay(code: number | string): number {
        let hash: number = 0;
        if (typeof (code) == 'number') {
            hash = code as number;
        } else {
            for (const iterator of code) {
                hash += iterator.charCodeAt(0);
            }
            // HashComplexity
            hash %= 37;
        }
        return hash;
    }

    protected ToHashCode_LongWay(code: number | string): number {
        let hash: number = 5381;
        if (typeof (code) == 'number') {
            hash = code as number;
        } else {
            for (const iterator of code) {
                hash *= 33;
                hash += iterator.charCodeAt(0);
            }
            hash %= 1013;
        }
        return hash;
    }

    protected HashCodeGate: boolean = false;
    /**
     * 获取哈希值的选择器
     */
    protected ToHashCode(key: number | string): number {
        if (this.HashCodeGate)
            return this.ToHashCode_ShortWay(key);
        else
            return this.ToHashCode_LongWay(key);
    }

    /**
     * 按键获取元素
     * @param key 键
     */
    public get(key) {
        let hash = this.ToHashCode(key);
        return this._HashList[hash];
    }

    /**
     * 按键设置元素
     * @param key 键
     */
    public set(key, value) {
        let hash = this.ToHashCode(key);
        this._HashList[hash] = value;
    }

    /**
     * 按键删除元素
     * @param key 键
     */
    public remove(key) {
        let hash = this.ToHashCode(key);
        if (this._HashList[hash]) {
            this._HashList[hash].destroy();
            return true;
        }
        return false;
    }
    /**
     * 清除
     */
    public clean() {
        this._HashList = [];
    }
}
export class RigorousSet extends RigorousHash {

}
export class RigorousMap extends RigorousHash {
    public set(key: any, value: any): number {
        let objectTagName: string | number;
        switch (SysBaseType[typeof (value)]) {
            case SysBaseType.object:
                objectTagName = Object.prototype.toString.call(value);
                if (value instanceof cc.Component)
                    objectTagName += value['_id'];
                else {
                    let ObjectKey = Object.keys(value);
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
        let hash = this.ToHashCode(key);
        this._HashList[hash] = value;
        return hash;
    }
}
import { Iarray } from './RigorousType';
export class RigorousArray extends RigorousValueType implements Iarray {
    /**
     * 数组类并非用作Array，不要直接使用此类存储参数
     */
    constructor() {
        super();
        this._HashList = [];
    }
    /**
     * 数组
     */
    protected declare _HashList: any[number];
    /**
     * 按键移除
     */
    public remove<T extends number>(key: T): void {
        this._HashList[key] = null;
    }
    /**
     * 清除
     */
    public clean() {
        this._HashList = [];
    }
}
import { IringBuffer } from './RigorousType';
export class RigorousRingBuffer extends RigorousArray implements IringBuffer {
    /**
     * 初始化栈 
     * @warn 通用起见没有使用苛刻模式，请不要在任何地方使用非正整数
     */
    constructor(size: number) {
        super();
        this._StackGetPointer = 0;
        this._StackPutPointer = 0;
        this._StackSize = size
    }
    /**
     * 出栈指针 
     */
    private declare _StackGetPointer: number;
    private get _$get(): number {
        return this._StackGetPointer;
    }
    private set _$get(value: number) {
        this._StackGetPointer += value;
        this._StackGetPointer %= this._StackSize;
    }
    protected get $get(): number {
        return this._StackGetPointer;
    }
    protected set $get(value: number) {
        if (value > 0) this._StackIsFull = false;
        if (value > this.length) this.clean();
        let getPointer = mm.PMod(value, this._StackSize);
        this._StackGetPointer = getPointer;
    }
    /**
     * 进栈指针 
     */
    private declare _StackPutPointer: number;
    private get _$put(): number {
        return this._StackPutPointer;
    }
    private set _$put(value: number) {
        this._StackPutPointer += value;
        this._StackPutPointer %= this._StackSize;
    }
    /**
     * 获取有效的进栈位
     */
    protected get $put(): number {
        // let put = this._StackPutPointer - 1;
        // put = put < 0 ? this._StackSize - 1 : put;
        // return put;
        return this._StackPutPointer;
    }
    /**
     * 栈深度
     */
    protected declare _StackSize: number;
    /**
     * 栈满标记
     */
    protected declare _StackIsFull: boolean;

    /**
     * 获取栈有效长度
     */
    public get length(): number {
        let len = this._$put - this._$get;
        if (this._StackIsFull) return this._StackSize - len;
        return len < 0 ? this._StackSize + len : len;
    }
    /**
     * 直接获取索引项目 
     * 这不会触发栈指针变化
     */
    public getBuffer(index: number): any {
        return this._HashList[mm.PMod(index, this._StackSize)];
    }
    /**
     * 进栈
     * @param object 
     */
    public push<T>(object: T): number {
        this._HashList[this._StackPutPointer] = object;
        let lastPut = this._$put;
        this._$put = 1;
        if (this._StackIsFull) this._$get = 1;
        if (this._$put == this._$get) this._StackIsFull = true;
        return lastPut;
    }
    /**
     * 出栈
     * @param length 
     * @return obj[]: obj3, obj4...
     * @return index[]: 3, 4...
     */
    public pull<T extends number>(length: T) {
        this._StackIsFull = false;
        let out = { obj: [], index: [] };
        for (let index = 0; index < Math.min(length, this.length); index++) {
            let outIndex = (index + this._$get) % this._StackSize;
            out.obj.push(this._HashList[outIndex]);
            out.index.push(outIndex);
            this._HashList[outIndex] = undefined;
        }
        this._$get = length;
        return out;
    }

    /**
     * 清空栈
     */
    public clean(): void {
        this._HashList = [];
        this._StackGetPointer = 0;
        this._StackPutPointer = 0;
    }

    /**
     * 给定一个索引，转为一个在栈内的有效的索引
     */
    public indexAtStack(index: number): number {
        return mm.PMod(index, this._StackSize);
    }
}


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
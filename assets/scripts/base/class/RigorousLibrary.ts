// kismit
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
export class RigorousHash extends RigorousValueType {
    /**
     * @param length 定义哈希表的使用场景最大长度
     */
    constructor(length: number) {
        super();
        this.HashCodeGate = length > 50;
    }

    /**
     * 哈希表
     */
    protected _HashList = {};

    /**
     * 获取一个字符的哈希值
     * @param code 
     */
    protected ToHashCode(code: number | string): number {
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

    protected ToHashCode2(code: number | string): number {
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
    protected ToHashCodeGate(key: number | string): number {
        if (this.HashCodeGate)
            return this.ToHashCode(key);
        else
            return this.ToHashCode2(key);
    }

    // tag 交互层 

    /**
     * 按键获取元素
     * @param key 键
     */
    public get(key: number | string): any {
        let hash = this.ToHashCodeGate(key);
        this._HashList[hash]
    }

    /**
     * 按键设置元素
     * @param key 键
     */
    public set(value: any): number {
        let key: number | string = null;
        switch (SysBaseType[typeof (value)]) {
            case SysBaseType.object:
                let objectTagName = Object.prototype.toString.call(value);
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
        let hash = this.ToHashCodeGate(key);
        this._HashList[hash] = value;
        return hash;
    }

    /**
     * 按键删除元素
     * @param key 键
     */
    public remove(key: number | string): void {
        let hash = this.ToHashCodeGate(key);
    }
}
export class RigorousArray extends RigorousHash {

}
export class RigorousRingBuffer extends RigorousArray {

}
export class RigorousSet extends RigorousHash {

}
export class RigorousMap extends RigorousHash {

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
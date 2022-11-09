/**
 * 长整型
 */
export interface Iint64 {
    int64: number;
}
/**
 * 无符号长整型
 */
export interface Iuint64 {
    uint64: number;
}
/**
 * 整型
 */
export interface Iint32 {
    int32: number;
}
/**
 * 无符号整型
 */
export interface Iuint32 {
    uint32: number;
}
/**
 * 短整型
 */
export interface Iint16 {
    int16: number;
}
/**
 * 无符号短整型
 */
export interface Iuint16 {
    uint16: number;
}
/**
 * 字节类型
 */
export interface Iint8 {
    int8: number;
}
/**
 * 无符号字节类型
 */
export interface Iuint8 {
    uint8: number;
}
/**
 * 长浮点类型
 */
export interface Ifloat64 {
    float64: number;
}
/**
 * 浮点类型
 */
export interface Ifloat32 {
    float32: number;
}
/**
 * 文本类型
 */
export interface Itext {
    text: string;
}
/**
 * 命名类型
 */
export interface Inamed {
    named: string;
}
/**
 * 四维矢量
 */
export interface Ivector4 {
    x: number;
    y: number;
    z: number;
    w: number;
}
/**
 * 四维整数矢量
 */
export interface Iintvector4 {
    x: number;
    y: number;
    z: number;
    w: number;
}
/**
 * rgba色彩
 */
export interface Irgba {
    r: number;
    g: number;
    b: number;
    a: number;
}
/**
 * cmyk色彩
 * Cyan,Magenta,Yellow,Black
 */
export interface Icmyk {
    c: number;
    m: number;
    y: number;
    k: number;
}
/**
 * 三维矢量
 */
export interface Ivector3 {
    x: number;
    y: number;
    z: number;
}
/**
 * 三维整数矢量
 */
export interface Iintvector3 {
    x: number;
    y: number;
    z: number;
}
/**
 * hsb色彩
 * hues,saturation,brightness
 */
export interface Ihsb {
    h: number;
    s: number;
    b: number;
}
/**
 * 三维坐标
 */
export interface Iposition {
    x: number;
    y: number;
    z: number;
}
/**
 * 笛卡尔旋转
 */
export interface Irotation {
    yaw: number;
    pitch: number;
    roll: number;
}
/**
 * 二维矢量
 */
export interface Ivector2 {
    x: number;
    y: number;
}
/**
 * 二维整数矢量
 */
export interface Iintvector2 {
    x: number;
    y: number;
}
/**
 * 平面尺寸
 */
export interface Isize {
    width: number;
    height: number;
}
/**
 * 笛卡尔变换
 */
export interface Itransfrom {
    position: Iposition;
    rotation: Irotation;
    scale: Ivector3;
}
/**
 * 矩阵4
 */
export interface Imat4 {
    m00: number; m01: number; m02: number; m03: number;
    m04: number; m05: number; m06: number; m07: number;
    m08: number; m09: number; m10: number; m11: number;
    m12: number; m13: number; m14: number; m15: number;
}
/**
 * 矩阵3
 */
export interface Imat3 {
    m00: number; m01: number; m02: number;
    m03: number; m04: number; m05: number;
    m06: number; m07: number; m08: number;
}
/**
 * 哈希表
 */
export interface Ihash {
    get<T extends string | number>(key: T): any;
    set<T extends string | number>(key: T, value: any): void;
    remove<T extends string | number>(key: T): boolean;
    clean(): void;
}
/**
 * 数组
 */
export interface Iarray {
    remove<T extends number>(key: T): void;
    clean(): void;
}
/**
 * ringbuffer
 */
export interface IringBuffer {
    push<T>(object: T): number;
    pull<T extends number>(length: number): any;
    clean(): void;
}
/**
 * 集
 */
export interface Iset {
    make<T extends Iarray>(array: T): Iset;
    intersection<T extends Iset>(array_a: T, array_b: T): Iset;
    difference<T extends Iset>(array_a: T, array_b: T): Iset;
    union<T extends Iset>(array_a: T, array_b: T): Iset;
    toArray(): Iarray;
    clean(): void;
}
/**
 * 映射
 */
export interface Imap {
    get<T>(key: T): any;
    set<T>(key: T, value: T): void;
    add<T>(value: T): number;
    remove<T>(key: T): boolean;
    clean(): void;
}
/**
 * 存放整数，取值在±2^63^(2^63)
 * 巨大类型
 */
export interface IintegerHuge {
    inthuge;
}
/**
 * 存放浮点，取值在±2^63^(2^63)
 */
export interface IfloatHuge {
    inthuge;
}
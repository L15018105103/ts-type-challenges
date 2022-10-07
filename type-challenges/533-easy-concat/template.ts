type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

// 家庭作业，取出数组的头尾元素
type MyFirst<T extends unknown[]> = T extends [infer First, ...infer Rest] ? First : never
type MyTail<T extends unknown[]> = T extends [...infer Rest, infer Last] ? Last : never

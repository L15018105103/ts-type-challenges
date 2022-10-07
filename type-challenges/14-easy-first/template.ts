// 解法一：直接判断是不是空数组
// type First<T extends any[]> = T extends [] ? never : T[0]

// 解法二：长度
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

// 解法三：extends union 的时候会遍历一遍，相当于 some
// T[0] => undefined
// T[number] => never
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 解法四：infer 推断
// js:
// const [first, ...rest] = array
// return first || never
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never





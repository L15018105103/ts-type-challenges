type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// 遍历数组的值使用 T[number]
// 遍历数组的索引使用 keyof T



// 遍历的方法
// union: in T
// interface: in keyof T
// array: in T[number]

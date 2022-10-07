type MyExclude<T, U> = T extends U ? never : T

// 当两边的类型都是 union 的时候，extends 作用是
// 依次遍历地进行对比，如果在则是 never，否则把 T 返回
// never 在这里表示空集的意思

// a b c
// ↓
// a
// never

// a b c
//   ↓
// a
// b

// a b c
//     ↓
// a
// c

// 最终 b c
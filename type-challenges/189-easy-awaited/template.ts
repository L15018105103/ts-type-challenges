type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown> ? MyAwaited<U> : U
  : never

// infer 的作用相当于是设置未知数 x
// 1. 只能在条件类型里面使用
// 2. 设置未知数 变量
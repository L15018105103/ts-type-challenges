type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer X) => any ? X : never

// infer 需要和 extends 结合起来使用
// infer 的作用其实就是设置未知数 X

type If<C extends boolean, T, F> = C extends true ? T : F

// 记得需要把严格模式开启起来，否则还是不通过

// https://www.typescriptlang.org/docs/handbook/type-compatibility.html#handbook-content

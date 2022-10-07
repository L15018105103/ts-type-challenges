type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T["length"] ? false : true
  : false






  // 判断泛型里是不是 never 的办法，[T] extends [never]
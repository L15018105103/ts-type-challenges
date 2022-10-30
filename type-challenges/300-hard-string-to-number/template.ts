/**
 * 根据数字下标得到其对应长度的数组
 * @example
 * type Result = NumberMap<'1'> // [1]
 */
type NumberMap = {
  '0': [],
  '1': [1],
  '2': [...NumberMap['1'], 1],
  '3': [...NumberMap['2'], 1],
  '4': [...NumberMap['3'], 1],
  '5': [...NumberMap['4'], 1],
  '6': [...NumberMap['5'], 1],
  '7': [...NumberMap['6'], 1],
  '8': [...NumberMap['7'], 1],
  '9': [...NumberMap['8'], 1]
}

/**
 * 数量乘以10
 * @example
 * type Result = Make10Array<[1]> // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 */
type Make10Array<T extends any[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
]

/**
 * 递归地将字符串数字转成数字
 * @example
 * type Result = ToNumberHelper<'1', []> // 1
 */
type ToNumberHelper<S extends string, L extends any[]> = S extends `${infer F}${infer R}`
  ? ToNumberHelper<R, [...Make10Array<L>, ...[...(F extends keyof NumberMap ? NumberMap[F] : never)]]>
  : L['length']

/**
 * 字符串类型转数字类型
 * @example
 * type Result = ToNumber<"100"> // 100
 */
type ToNumber<S extends string> = ToNumberHelper<S, []>

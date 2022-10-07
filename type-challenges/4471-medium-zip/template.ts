type Zip<T extends unknown[], U extends unknown[]> = T extends [infer TFirst, ...infer TRest]
  ? U extends [infer UFirst, ...infer URest] ? [[TFirst, UFirst], ...Zip<TRest, URest>] : []
  : []
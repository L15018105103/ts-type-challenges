type Join<T extends string[], U extends string | number> = T extends [infer First extends string, ...infer Rest extends string[]]
  ? Rest["length"] extends 0 ? First : `${First}${U}${Join<Rest, U>}`
  : ''







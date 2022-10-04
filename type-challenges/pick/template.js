function myPick(object, keys) {
  const obj = {}
  keys.forEach(key => {
    if (key in object) {
      obj[key] = object[key]
    }
  })
  return obj
}

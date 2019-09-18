function sherlockAndAnagrams(s) {
  const arr = s.split("");
  const keys = {};
  for (let i = 0; i < arr.length; i++) {
    const obj = {};
    for (let j = i; j < arr.length; j++) {
      const char = arr[j];
      if (!obj[char]) {
        obj[char] = 0;
      }
      obj[char]++;
      const str = Object.keys(obj)
        .sort()
        .map(item => `${item}${obj[item]}`)
        .join("");
      if (!keys[str]) {
        keys[str] = 0;
      }
      keys[str]++;
    }
  }
  let res = 0;
  Object.values(keys).forEach(item => (res += (item * (item - 1)) / 2));
  return res;
}

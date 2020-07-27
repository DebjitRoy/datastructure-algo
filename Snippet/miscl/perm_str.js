function permStr(str) {
  const res = [];
  (function recurPerm(str) {
    if (!str.length) return;
    let fchar = str[0];
    str.shift();
    for (let i = 0; i < str.length; i++) {
      const nwstr = [...str];
      nwstr.splice(i, 0, fchar).join("");
      res.push(nwstr);
      return recurPerm(str);
    }
  })(str.split(""));
  return res;
}

console.log(permStr("abc"));

// 'debjit' => 'tijbed'

function stringReverseRecursive(str) {
  if (str.length === 0) return "";
  return (
    str[str.length - 1] + stringReverseRecursive(str.slice(0, str.length - 1))
  );
}

console.log(stringReverseRecursive("hello"));

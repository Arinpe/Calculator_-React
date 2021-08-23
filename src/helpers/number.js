export default num => {
  let res;
  if (num > Number.MAX_SAFE_INTEGER) {
    res = num.toExponential(12).toString();
  } else {
    res = num.toString();
  }
  return res;
};

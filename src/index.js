module.exports = function toReadable(number) {
  const digArr = ['zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'];
  const arr19 = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arr90 = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];
  if (number === 0) return digArr[0];
  const hundredN = 3; const tensN = 2; const digitN = 1;
  let res = '';
  const s = number.toString();
  for (let i = 0, dCount = s.length; dCount > 0; i += 1) {
    const curDigit = Number(s[i]);
    if (dCount === hundredN) res = `${digArr[curDigit]} hundred `;
    if (dCount === tensN) {
      if (curDigit === 1) {
        const lastDigit = Number(s[i + 1]);
        if (lastDigit === 0) res += arr19[0];
        else res += arr19[lastDigit];
        break;
      }
      if (curDigit > 1) res += `${arr90[curDigit]} `;
    }
    if (dCount === digitN && curDigit > 0) res += digArr[curDigit];
    dCount -= 1;
  }
  return res.trim();
};

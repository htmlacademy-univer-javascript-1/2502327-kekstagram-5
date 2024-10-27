function isStringWithinLimit(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  const len = normalizedStr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (normalizedStr[i] !== normalizedStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isStringWithinLimit('проверяемая строка', 20));
console.log(isStringWithinLimit('проверяемая строка', 18));
console.log(isStringWithinLimit('проверяемая строка', 10));
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл'));

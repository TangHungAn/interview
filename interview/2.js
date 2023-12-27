function filterNumbersGreaterThanFive(numbers) {
  // 使用 filter 方法過濾陣列中大於5的數字
  return numbers.filter(function(number) {
    return number > 5;
  });
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]


function formatName(firstName, lastName) {
    // 使用模板字串來組合名字
    return `${firstName || ''} ${lastName || ''}`.trim();
  }
  console.log(formatName("John", "Doe")); // "John Doe"
  console.log(formatName("Alice")); // "Alice"
  console.log(formatName("", "Smith")); // "Smith"
  console.log(formatName()); // ""
  
  //使用模板字串：
//使用模板字串能夠更簡潔地組合字串，而不需要像之前的版本一樣使用 += 來串接。

//使用 || 來處理空值：
//在模板字串中，使用 || 運算子來處理可能為空值的情況。如果 firstName 或 lastName 是空值，則會使用空字串代替。

//使用 trim 方法：
//在某些情況下，如果 firstName 為空而 lastName 不為空，原始的程式碼會在名字前加上一個空格。使用 trim 方法可以去掉字串前後的空格，確保格式正確。
function reverseString(str) {
    // 使用 split 將字串轉換成陣列，reverse 反轉陣列，join 將陣列轉換回字串
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("Hello")); // 預期輸出: "olleH”
  
function isPalindrome(word) {
  // 여기에 코드를 입력해 주세요.
  for(let i=0; i<=word.length-1; i++){
    if (word.slice(i,i+1)==word.slice(word.length-1-i,word.length-i)){
      return true;
    }
    else {
      return false;
    }
  }
}
// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
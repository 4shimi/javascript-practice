// npm init react-app.
//npm run start
//ctrl+c
let i=1;
let a=1;
let b=1;

while(i<=25){
  console.log(a);
  console.log(b);
  a=a+b;
  b=a+b;
  i=i+1;
}

let word='racecar'
  A=word.slice(0,1);
  B=word.slice(word.length-1,word.length);
  console.log(A);
  console.log(B);

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
//for 반복문(for statement)
//코드잇 최고! x10
// for(초기화부분; 조건부분; 추가동작부분) {
//   동작부분
// }
for(let i=1; i<=10; i++) {
  console.log(`${i}코드잇 최고!`);
}


function printTriangle(height) {
	// 여기에 코드를 작성해 주세요.
 let message=''
for (let i=1; i<=height; i++){
 
  message+='*'
  console.log(message);
}
}
// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

for(let i=1; i<=9;i++){
  for(let j=1; j<=9;j++){
 console.log(`${i} * ${j} = ${j*i}`)
  }
}

let result=1;
let n=10;
for(let i=1; i<=n; i++){
  result=result*i;
}
console.log (result);

function factorial(n) {
  let result = 1;
	// 여기에 코드를 작성해 주세요.
if(n=0){
    result=1;
  }
else{
    for(let i=1; i<=n; i++){
     result=result*i;
     }
  }
	
  return result;
}

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));
let courseRanking = [
  ' 정회승 짱짱맨',
  '정회승 개돼지',
  '정회승 뿡뿌이'
];

//indxing(0~)
console.log(courseRanking[0]);

let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

// 여기에 코드를 작성해 주세요.
// let i=0;
//  while (i<6){
//    console.log(dataType[i]);
//    i+=1;
// }
// console.log(dataType.length);
// console.log(dataType[dataType.length-1]);

// dataType[6]='정회승';
// console.log(dataType[6]);
// console.log(dataType);
// delete dataType[2];
// console.log(dataType);


let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성해 주세요.
let i=0;
while (i<=6){
cel=celsiusTemps[i];
fah = ( cel * 9 / 5 ) + 32;
fahrenheitTemps[i]=fah;
i+=1;
}
// fahrenheitTemps 테스트
console.log(fahrenheitTemps);


//배열 method1(splice(n)-n뒤로 다 제거, (n,m)-n부터m개 제거, (n,m,item)-전거에 item추가)
fahrenheitTemps.splice(3,2,'정회승', '정회훈');
console.log(fahrenheitTemps);
//m=0도 가능!->추가만

let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
fruits.splice(1,1,'사과', '청포도');


// fruits 배열의 첫 번째 요소를 삭제해 주세요.
fruits.splice(0,1);


// ages 배열에 마지막 요소를 삭제해 주세요.
ages.splice(ages.length-1);


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
ages.splice(2,2, 26,28);


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
numbers.splice(0,0,1, 2, 3, 5, 8, 9);


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
 for(let i=5; i>=0; i--){
   if(numbers[i]%2 !==0){
     numbers.splice(i,1);
   }
 }

 console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);


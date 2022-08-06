//다차원 배열 (multidimensional array)
let twoDimensional = [[1,2], [3,4]];

console.log(twoDimensional[0][1])


let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성해 주세요.
for (let i=0; i<=4; i++){
teams[0][i] = groups[i][0];
teams[1][i] = groups[i][1];
}
// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);


//easy one
// let groups = [
//   ['영준', '캡틴'], 
//   ['태순', '우재'],
//   ['재훈', '지웅'],
//   ['윤형', '동욱'],
//   ['규식', '소원'],
// ];

// let teams = [
//   [],
//   [],
// ];

// for(let i = 0; i < groups.length; i++) {
//   for(let j = 0; j < groups[i].length; j++) {
//     teams[j][i] = groups[i][j];
//   }
// }

// console.log(teams[0]);
// console.log(teams[1]);

//오브젝트 복사
let numbers1=[1,2,3];
let numbers2= numbers1.slice();
numbers2.push(4);

console.log(numbers1);
console.log(numbers2);


function cloneObject(object) {
   let temp={};
   for (let key in object) {
     temp[key] = object[key];
   }
   return temp;
 };

 let course = {title: '파이썬 프로그래밍 기초', language: 'Python'};

 let course2 = cloneObject(course);
 let course3 = cloneObject(course);
course2.title = '알고리즘'
 console.log(course);
 console.log(course2);



//date
// let myDate = new Date('1997-04-23T12:01:01');
//월은 0부터시작
let myDate = new Date(1997, 3, 23, 12,01,02);
let today = new Date();
console.log(myDate);

let timeDiff = myDate.getTime() - today.getTime();
console.log(timeDiff);
console.log(myDate.getFullYear());
console.log(today.getDay());
//Day는 요일



console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)

let miDate = new Date(1988, 0, 32); // 1988년 1월 32일은 없습니다

// 2월 1일로 자동고침 되는걸 확인할 수 있습니다.
console.log(miDate) // Mon Feb 01 1988 00:00:00

// let myDate1 = new Date(2017, 4, 18);
// let myDate2 = new Date(2017, 4, 19);

// let timeDiff = myDate2 - myDate1;
// console.log(timeDiff); // 86400000 (ms)
// console.log(timeDiff / 1000); // 86400 (sec)
// console.log(timeDiff / 1000 / 60) // 1440 (min)
// console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
// console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)
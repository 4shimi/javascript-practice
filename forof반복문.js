let influencer = ['suwonlog', 'small.tiger', 'minam.ludens', 'cu_convenience24']

for (let i=0; i < influencer.length; i++) {
  console.log(influencer[i]);
}

//for(변수 of 배열) {
  //동작부분;
//  }

for (let element of influencer) {
  console.log(element);
}

for (let index in influencer) {
  console.log(influencer[index]);
}  

// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  // 코드를 작성하세요.
  if (voteCounter[name]===undefined) {
    voteCounter[name]=1;
  }
  else voteCounter[name]+=1;
}

// 후보별 득표수 출력
console.log(voteCounter);
let i=1;
while (i<=10){
  console.log(`${i} 정회승 최고!`);
  if(i===7){
    break;
  }
  i=i+1;
}

for(let i=1; i<=10; i++) {
  if(i%2===0){
    continue; //무시하고 진행
  }
  console.log(`${i} 정회승 최고!`);
}


while (i<=10){
  if(i%2===0){
    i++;
    continue;
  }
  console.log(`${i} 정회승 최고!`);
  i=i+1;
}
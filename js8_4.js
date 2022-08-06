/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum+= salaries[key];
}
alert(sum);
 */

/* function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key]== 'number'){
      obj[key] *= 2;
    };
  };
};
 */


/* let user ={
  name : "John",
  age : 30
};

let clone = Object.assign({},user);
 */

function User(name) {
  if (!new.target) { // new 없이 호출해도
    return new User(name); // new를 붙여줍니다.
  }

  this.name = name;
}

let bora = User("보라"); // 'new User'를 쓴 것처럼 바꿔줍니다.
alert(bora.name); // 보라


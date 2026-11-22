var integer = 10;
var float = 3.14;
var negative = -5;

console.log(integer, float, negative);
console.log(typeof integer, typeof float, typeof negative); // typeof  어떤한 속성인지 알려주는 코드

console.log(10 / 3);    // 3.3333333333....
console.log(10 / 0 );     // Infinity  (무한대)
console.log("abc" * 2);    // NaN
console.log(typeof  NaN);   // number



// 문자열 타입

var single = '작은 따옴표';
var double = "큰 따옴표";
var backtick = `백틱`;

console.log(single, double, backtick);
console.log("줄바꿈을 하고 싶으면\n이렇게 하면 됩니다.");    // \n 줄바꿈
console.log(single.length);   // string의 글자 수 가 출력 띄어쓰기도 한칸으로 계산  length = 길이



// 템플릿 리터럴

var userName = "홍길동";
var age = 20;
var user = {
    id: 40,
    name:"김철수",
    phoneNumber: "010-1234-5678",
};

console.log(`${userName}님의 나이는 ${age}입니다`);
console.log(`${user.name}님의 전화번호는 ${user.phoneNumber}입니다`);
console.log(`${userName}님은 내년에 ${age + 1}살이 됩니다.`);

// 템플릿 리터럴은 "값"을 string 안에 출력해주는 것
// age + 1 이라는 '평가' 된 '값'을 출력하는데 무리가 없음


// 불리언( Boolean)

var isStudent = true;
var hasCar = false;

// 이 회원이 관리자인가요? => isAdmin = true

console.log(10 >5);



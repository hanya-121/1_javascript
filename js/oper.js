// 1) 거듭 제곱 **
let x = 10;
x **= 5;

// 2) 나눈 나머지는 %=
let q = 10;
q %= 5;

document.getElementById("one").innerHTML = 
"1) 거듭 제곱(**)의 값 → " + x + "<br>" +
"2) 나눈 나머지(%)의 값 → " + q + "<br>";


let num1 = 1;
let num2 = "1";
let result = num1 == num2;
let result2 = num1 === num2;
let num3 = 10;
let num4 = 3;
let result3 = num4 > num3

document.getElementById("two").innerHTML = 
"타입을 고려하지 않은 같음의 결과 값은 " + result + "<br>" +
"타입을 고려하지 않은 같음의 결과 값은 " + result2 + "<br>" +
"변수의 수를 비교 할 때 " + result3 + "<br>";

// 3) 논리 연산자
let w = 6;
let e = 3;

document.getElementById("three").innerHTML = 
"1) &&는 and그리고, 2개의 조건이 일치 해야 함 " + "<br>" +
"(w < 10 && e > 1) " + (w < 10 && e > 1) + " 입니다" + "<br>" + 
"(w < 10 && e > 1) " + (w < 10 && e < 1) + " 입니다" + "<br>" +
"(w == 10 && e == 1)" + (w == 10 && e == 1) + " 입니다" + "<br>" +
"(w == 6 && e == 1)" + (w == 6 && e == 1) + " 입니다" + "<br>" +
"!(w === e) 는" + !(w === e) + " 입니다" + "<br>" + // 같지 않기 때문에 true
"!(w > e)는 " + !(w > e) + " 입니다" + "<br>"; 
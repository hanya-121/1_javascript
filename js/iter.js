// 1) 
const name = "ABCDE" // 상수 네임 = 문자열

// 상수를 활용하기 위해서 변수를 만듦
let text = "" // 변수에 비어진 값을 대입
// 정해진 것만큼 반복
for (const x of name){
    text += x + "<br>";    // 변수 개별에 줄바꿈 태그를 더해서, +=비어져있는 상태에 더해줄 때
}

// document.write(text) > 단발성 테스트용으로 작성
document.getElementById("one").innerHTML = text;

// 2) Set : 고유한 값만 출력
const letter = new Set(["a", "a", "b", "c"]);
// let 재선언 재할당 금지, 위에서 text라고 썼기 때문에 txt로 바꾼 것
let txt = "";
for (const q of letter){ // q 역시 동일 (재선언, 재할당 금지)
    txt += q + "<br>";
}
document.getElementById("two").innerHTML = txt;


// 3) 키와 밸류 => map
const fruits = new Map([
    ["apples", 1000], // ["키", 밸류] 사과의 값이 1000
    ["banana", 500],
    ["orange", 200],
]);

let nums = fruits.get("orange");
document.getElementById("three").innerHTML = "지금 창고에는 " + nums + "개의 오렌지가 있당"
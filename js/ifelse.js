const time = new Date().getHours();
// 상수 시간은 = 데이트 객체를 얻고 거기서 시간을 얻어온다는 의미
let greeting; // let은 재선언, 재할당 금지
if (time < 10){
    greeting = "굿모닝"
}else if (time < 20) {
    greeting = "굿이브닝"
}else{
    greeting = "굿밤"
} // 변수명 greeting
document.getElementById("con").innerHTML = greeting;

let text;
if(Math.random() < 0.5){ // random새로고침 할 때마다 바뀜
    text = "0.5보다 작아욧"
}else{
    text = "<a href='https://youtube.com'>유튜브 실행</a>"
}
document.getElementById("txt").innerHTML = text;

let day;
switch(new Date().getDay()){
    case 0:
        day = "일요일"
        break;
    case 1:
        day = "월요일"
        break;
    case 4:
        day = "목요일"
        break;
     case 6:
        day = "토요일"
        break;
    default : 
        day = "오늘은 아마도 목요일?"
}
document.getElementById("day").innerHTML = day;
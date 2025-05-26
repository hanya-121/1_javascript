class Car{ // 주의사항 : 인수는 파라미터항목에 맞는 수로 사용 
    constructor(name, brand, year){
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
    age(x){ // 시간을 불러와야 함
        return x - this.year;
    }
}

const myCar = new Car("자전거", "삼천리", 2000)
const yourCar = new Car("걷자", "내 다리", 2002)

// 현재 시간 구하기
const date = new Date(); // 왜 상수로 했나 > 시간은 참조할 뿐 가공 불가
let year = date.getFullYear(); // 변수 year에 현재 연도를 대입


document.getElementById("in").innerHTML =
"내가 산 차는 " + myCar.age(year) + "가 지났어"

const $ = document.querySelector.bind(document);
// chuyển đổi số la mã thành số nguyên
const roman = $('.solama');
const chuyendoi = $('.chuyendoi');
const songuyen = $('.songuyen');
const romanToInt = function(s) {
    const sym = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    let result = 0;

    for (let i = 0; i < s.length; i++) {
      const cur = sym[s[i]];
      const next = sym[s[i + 1]];
      console.log([s[i]])

      if (cur < next) {
          result += next - cur;
          i++;
      } else {
          result += cur;
      }
    }
    return result;
};
chuyendoi.onclick = () => {
    songuyen.innerHTML = romanToInt(roman.value)
};

// ngày giờ
const toDay = document.getElementById('today');
const todayTime = document.getElementById('todayTime')
const todayD = new Date();
const dayDay = todayD.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
toDay.innerHTML = "Today is : " + daylist[dayDay];
function tinhGio(){
    let todayDay = new Date;
    let hour = todayDay.getHours();
    let minute = todayDay.getMinutes();
    let second = todayDay.getSeconds();
    let prepand = (hour > 12)? " PM ":" AM ";
    hour = (hour > 12)? hour - 12: hour;
    if (hour===12 && prepand=== ' PM ') { 
        if (minute===0 && second===0){ 
            hour=1;
            prepand=' Noon';
        } 
        else{ 
            hour=0;
            prepand=' PM';
        } 
    } 
    if (hour===12 && prepand===' AM ') { 
        if (minute===0 && second===0){ 
            hour=1;
            prepand=' Midnight';
        } 
        else{ 
            hour=12;
            prepand=' AM';
        } 
    } 
    var renderTime = ("Current Time : "+ hour  + " : "  + minute + " : " + second + prepand);
    todayTime.innerText = renderTime;
}
setInterval(
    function(){
        tinhGio();
    },1000
)
const fullYear = document.querySelector('.fullYear')
const today = new Date;
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
if(day < 10){
    day = '0' + day;
}
if(month < 10) month = '0' + month;
fullYear.innerHTML = day + "/" + month + "/" + year;

// dien tich triangle
const canhA = $('.canhA');
const canhB = $('.canhB');
const canhC = $('.canhC');
const tongtamgiac = $('.tongtamgiac');
const triangle = $('.triangle');
tongtamgiac.onclick = () => {
    if(canhA.value > 0 && canhB.value > 0 && canhC.value > 0){
        const chieucao = (canhA.value * canhB.value) / canhC.value;
        const triangleX = 1/2 * (chieucao * canhC.value);
        triangle.innerHTML = triangleX;
    }
    else{
        alert("đùa tao à cạnh nào âm được bay")
    }
};

// tong tich
const o1 = $('#so1');
const o2 = $('#so2');
const multiphy = $('.multiphy');
const divide = $('.divide');
const result = $('.result');
multiphy.onclick = () => {
    result.innerHTML = parseInt(o1.value) + parseInt(o2.value);
};
divide.onclick = () => {
    result.innerText = o1.value * o2.value;
};

// giáng sinh
const giangSinh = $('#giangSinh');
const giangSinhBt = $('.giangSinh');
const doiGS = $('.doiGS');
giangSinhBt.onclick = () => {
    console.log(split(giangSinh.value.slice(' ')))
};

// xoa chuoi
const xoaChuoi = $('#stringDelete');
const vitriXoa = $('#numberDele');
const btnDele = $('.deleteString');
const newString = $('.deleString');

btnDele.onclick = () => {
    let chuoi = xoaChuoi.value.slice(2, 3);
    console.log(chuoi);
};
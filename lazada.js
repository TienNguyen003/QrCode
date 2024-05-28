"use strict";
const itemArr = localStorage.getItem('phoneUser') ? JSON.parse(localStorage.getItem('phoneUser')) : [];
const itemArrs = localStorage.getItem('passRegister') ? JSON.parse(localStorage.getItem('passRegister')) : [];

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;

// Lấy ra slide và button
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

// Khai bào hàm hiển thị slide
function showSlides() {
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    } // ẩn tất cả slide
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    } // ẩn tất cả button
    slides[slideIndex].style.display = "block"; // thêm slide đang click : block 
    dots[slideIndex].className += " active"; // thêm btn click class : active
    //chuyển đến slide tiếp theo
    slideIndex++;
    setTimeout(showSlides, 5000)
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }    
}

//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
for(let i = 0; i < dots.length; i++) {
  dots[i].onclick = () => currentSlide(i);
};

// deal quick time
function tinhGio(){
    let timeHour = $('.timeSell__timeHo');
    let timeMn = $('.timeSell__timeMn');
    let timeSe = $('.timeSell__timeSeco');
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
    (hour < 10) ? hour = '0' + hour: hour;
    (minute < 10) ? minute = '0' + minute: minute;
    (second < 10) ? second = '0' + second: second;
    timeHour.innerHTML = hour;
    timeMn.innerHTML = minute;
    timeSe.innerHTML = second;
}
setInterval(
    function(){
        tinhGio();
    },1000
)

// Sort
const exclusivelys = $$('.exclusively');
const sortBtn = $$('.home-filter__btn');

Array.from(sortBtn).forEach(function(element){
    element.onclick = function(){
        for(let i=0; i < sortBtn.length; i++){
            sortBtn[i].classList.remove('btn-primary');
        };
        this.classList.add('btn-primary');
        let button__name = element.dataset.type;
        Array.from(exclusivelys).map(function(elem){
            if(elem.dataset.status === button__name || button__name === 'latest'){
                elem.classList.remove('activing');
            }
            else{
                elem.classList.add('activing');
            }
        })
    }
})

// see more
const productsArr = localStorage.getItem('productArr') ? JSON.parse(localStorage.getItem('productArr')) : [];
const products = [
    {
        img: 'https://salt.tikicdn.com/ts/tmp/6c/2f/10/b54a223716523bcc2a976b533deb71f3.jpg',
        des: 'Giày Thể Thao Nữ thời trang Viền kim Tuyến siêu đẹp',
        newPrice: ' 179.000',
        oldPrice: ' 250.000',
        location: 'Hà Nội',
    },
    {
        img: 'https://cf.shopee.vn/file/87cfed0ff059138701bc6ddcf3b3d6a3',
        des: 'Giày thể thao mlb dơ hàng đẹp',
        newPrice: ' 900.000',
        oldPrice: ' 999.000',
        location: 'Hồ Chí minh',
    },
    {
        img: 'https://media3.scdn.vn/img4/2020/10_07/dhJDSloTdWjwIVUKt1z6.jpg',
        des: 'GIÀY THỂ THAO NỮ ĐẸP',
        newPrice: '190.000',
        oldPrice: '230.000',
        location: '',
    },
    {
        img: 'https://lzd-img-global.slatic.net/g/p/a7da236fbc9692a41eadae492465debf.jpg_720x720q80.jpg_.webp',
        des: 'Giày thể thao NY đẹp',
        newPrice: '195.000',
        oldPrice: '269.000',
        location: '',
    },
    {
        img: 'https://tronhouse.com/assets/data/editor/source/nen-chup-hinh-san-pham-giay-dep-theo-phuong-phap-nao/chup-quang-cao-san-pham.jpg',
        des: 'Nike AF1',
        newPrice: '325.000',
        oldPrice: '500.000',
        location: 'Hồ Chí minh',
    },
    {
        img: 'https://lzd-img-global.slatic.net/g/p/6ed6d9082eb6fb3c56b8bc81874fa400.jpg',
        des: 'Giày Nike Air Jordan 1 Mid Light Smoke Grey',
        newPrice: '500.000',
        oldPrice: '700.000',
        location: 'Hà Nội',
    },
    {
        img: 'https://cf.shopee.vn/file/49bff6a54e02535b4d994ba074d56bc5',
        des: 'Giày Adidas Prophere Màu Xám Mới 2019',
        newPrice: '309.140',
        oldPrice: '355.140',
        location: '',
    },
    {
        img: 'https://media3.scdn.vn/img3/2018/12_27/K1rrRT.png',
        des: 'Giày Bata Ulzzang Nữ Hàn Quốc',
        newPrice: '279.000',
        oldPrice: '300.000',
        location: '',
    },
    {
        img: 'https://bizweb.dktcdn.net/100/062/136/products/gn381.jpg?v=1655019758990',
        des: 'Giày Boot Nam SUP GN3815',
        newPrice: '500.000',
        oldPrice: '700.000',
        location: '',
    },
    {
        img: 'https://studiovietnam.com/wp-content/uploads/2020/06/chup-anh-quang-cao-san-pham-giay.jpg',
        des: 'Giày Adidas NMD R1 "Bright Blue" AQ1785',
        newPrice: '300.000',
        oldPrice: '900.000',
        location: '',
    },
    {
        img: 'https://cf.shopee.vn/file/94ded784e90bd513ea949c9c1ee14973',
        des: 'Adidas UltraBOOST 19',
        newPrice: '800.000',
        oldPrice: '900.000',
        location: 'Đà Nẵng',
    },
    {
        img: 'https://cf.shopee.vn/file/af942b443160c93f0e95d9c32a027af9',
        des: 'Boot Nữ Cao Gót',
        newPrice: '555.555',
        oldPrice: '666.666',
        location: 'Thanh Hóa',
    },
    {
        img: 'https://vn-test-11.slatic.net/p/6dbd24a3e37626d6e018bff73610c02a.jpg',
        des: 'Giày thể thao nữ air',
        newPrice: '333.333',
        oldPrice: '777.777',
        location: 'Bắc Ninh',
    },
    {
        img: 'https://cdn.elly.vn/uploads/2021/09/13222715/chelsea-boots-7.jpg',
        des: 'Chelsea Boots và quý ông!',
        newPrice: '888.888',
        oldPrice: '999.999',
        location: 'Yên Phong',
    },
]

const excluBtn = $('.exclusively__btn');
const more__product = $('.more__product');

excluBtn.onclick = function(){
    console.clear();
    let arrProduct = [];

    for(let i = 0; i < products.length; i++){
        arrProduct.push((Math.floor(Math.random() * products.length)));
    }

    if(arrProduct.length > 0){
        arrProduct.forEach((item) => {
            console.log(item);
            let img = products[item]['img'];
            let des = products[item]['des'];
            let newPrice = products[item]['newPrice'];
            let oldPrice = products[item]['oldPrice'];
            let location = products[item]['location'];
            let product = new productsNew(img, des, newPrice, oldPrice, location);
            product.moreProduct();
        })                
    }
};

function productsNew(img, des, newPrice, oldPrice, location){
    this.img = img;
    this.des = des;
    this.newPrice = newPrice;
    this.oldPrice = oldPrice;
    this.location = location;
    this.discount = Math.round(100 - (this.newPrice / this.oldPrice) * 100);
};
productsNew.prototype.moreProduct = function(){
    let html = "";
    html = `
        <div class="col pc-2">
            <div class="exclusively">
                <img src="${this.img}" class="exclusively__img">
                <div class="exclusively__product-info">
                    <img src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png" class="product-info__img">
                    <p class="product-info__name-product">
                        ${this.des}.
                    </p>
                    <p class="product-info__price--new">${this.newPrice} ₫</p>
                    <p class="product-info__price--old">
                        <span class="price-old--dell">${this.oldPrice} ₫</span> ${this.discount}%
                    </p>
                    <div class="exclusively__evaluate">
                        <div class="user__evaluate">
                            <i class="fa-sharp fa-solid fa-star evaluate__icon"></i>
                            <i class="fa-sharp fa-solid fa-star evaluate__icon"></i>
                            <i class="fa-sharp fa-solid fa-star evaluate__icon"></i>
                            <i class="fa-sharp fa-solid fa-star evaluate__icon"></i>
                            <i class="fa-sharp fa-solid fa-star evaluate__icon"></i>
                        </div>
                        <div class="user__purchases">(123)</div>
                        <div class="exclusi__location">${this.location}</div>
                    </div>
                </div>
            </div>
        </div>
    `
    productsArr.push(html);
    localStorage.setItem('productArr', JSON.stringify(productsArr));
    
    more__product.innerHTML = productsArr.join(' ');
    localStorage.clear();
};

// click product(before log)
const products__sellAll = $('.products__sellAll');
products__sellAll.onclick = () => {alert("You need to login");showFormLog()};
exclusivelys.forEach(function(product) {
    product.onclick = function() {
        alert("You need to login");
        showFormLog()};
})

// LOGIN
const logins = $('#login');
const registers = $('#register');
const modal = $('.modal');
const login = $('.login');
const register = $('.register');
const modalBody = $('.modal__body');
var btn = $('.closeRes');
var btn2 = $('.btn2');

logins.onclick = () => {showFormLog()};
function showFormLog() {
    modal.style.display= 'flex';
    login.style.display= 'block';
    register.style.display= 'none';
}
registers.onclick = () => {
    modal.style.display= 'flex';
    register.style.display= 'block';
    login.style.display= 'none';
};
modal.onclick = function(){
    modal.style.display= 'none';
};
modalBody.addEventListener('click', function(event){
    event.stopPropagation();
});

// out form
btn.onclick = function(){outFormAcc()};
btn2.onclick = function(){outFormAcc()};
function outFormAcc(){
    modalBody.animate({"scale": .2}, 300);
    setTimeout(() => {
        modal.style.display= 'none';
      }, "250")
}

// check form
const passRegister = $('.pass__register'); // mật khẩu đky
const retypePassRegister = $('.retypePass__register'); // nhập lại đky
const phoneRegister = $('.phone__register'); // sdt dky
const accRegister = $('.acc__register'); // btn dky
const checkbox = $('.checkbox');
accRegister.onclick = () => {
    let passRes = passRegister.value;
    let phoneRes = phoneRegister.value;
    let retypeRes = retypePassRegister.value;
    if(checkbox.checked == true){
        if(phoneRes == '' || (passRes == '' || passRes.length < 6) || (retypeRes == '' || retypeRes != passRes)){
            if(phoneRes == ''){
                showError(phoneRegister, 'Please enter this information field');
                deleteError(phoneRegister);
            }
            if(passRes == '' || passRes.length < 6){
                showError(passRegister, 'Please enter this information field')
                deleteError(passRegister);
            }
            if(retypeRes == '' || retypeRes != passRes){
                showError(retypePassRegister, 'Re-entered password is wrong')
                deleteError(retypePassRegister);
            }
        }
        else{
            let phoneGet = localStorage.getItem('phoneUser')
            if(phoneRes == JSON.parse(phoneGet)){
                showError(phoneRegister, 'Account already exists');
                deleteError(phoneRegister);
                deleteSucces(phoneRegister);
            }
            else if(phoneRes != JSON.parse(phoneGet)){
                alert("Successful account registration");
                deleteSucces(phoneRegister);
                showSuccess(phoneRegister);
                deleteSucces(phoneRegister);
                showSuccess(passRegister);
                deleteSucces(passRegister);
                deleteSucces(retypePassRegister);
                showSuccess(retypePassRegister);

                // them tai khoan
                itemArr.push(phoneRes);
                localStorage.setItem('phoneUser', JSON.stringify(itemArr));
                itemArrs.push(passRes);
                localStorage.setItem('passRegister', JSON.stringify(itemArrs));
            }
        }        
    }
    else{
        alert("Nhấn đồng ý đê");
    }
}
function showError(input, message) {
    const fromControl = input.parentElement;
    const small = fromControl.querySelector('small');
    small.innerHTML = message;
    fromControl.classList.add('error');
}

function showSuccess(input) {
    const fromControl = input.parentElement;
    fromControl.classList.remove('error');
    fromControl.classList.add('success');
}

function deleteError(input) {
    const fromControl = input.parentElement;
    input.oninput = function (){
        fromControl.classList.remove('error');
    }
}

function deleteSucces(input) {
    const fromControl = input.parentElement;
    input.oninput = function (){
        fromControl.classList.remove('success');
    }
}

// login
const number = $('.number');
const pass = $('.pass');
const log__success = $('.log--success');
const login__acc = $('.login__acc');
const register__acc = $('.register__acc');
const info__acc = $('.info__account');

log__success.onclick = function (){
    for(let i = 0; i < itemArr.length; i++) {   
        if(number.value == Number(itemArr[i]) && pass.value == Number(itemArrs[i])){
            info__acc.style.display = 'flex';
            login__acc.style.display = 'none';
            register__acc.style.display = 'none';
            modal.style.display = 'none';

            exclusivelys.forEach(function(product) {
                product.onclick = function(){
                    document.querySelector(".product__details").style.display = 'flex';
                    // document.querySelector("body").innerHTML = html;
                }
            })
        }
    }
}


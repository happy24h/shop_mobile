
var KichThuoc = document.getElementsByClassName('slide')[0].clientWidth;
console.log(KichThuoc); // 1000 (width class slide = 1000px)
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0]
var Img =ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * Img.length; // 1000 * Img.length
Max -= KichThuoc;
var Chuyen = 0;
function Next(){
    if (Chuyen < Max) {
        Chuyen += KichThuoc;
    }
    else {
        Chuyen = 0;
    }
    // Chuyen += KichThuoc; // 0 + 1000
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px'; // - 1000px
}
function Back() {
    if (Chuyen == 0){
        Chuyen = Max;
    }
    else {
        Chuyen -= KichThuoc;
    }
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}

setInterval(function () {
    // công việc cần thực hiện
    Next(); // cứ 3000ms gọi Next 1 lần
},3000)

// setTimeout(function (){
//     Next(); // 3000ms gọi Next 1 lần duy nhất
//
// },3000)
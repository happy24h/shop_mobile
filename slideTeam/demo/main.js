
var KichThuoc = document.querySelectorAll('.slide')[0].clientWidth; // KichThuoc = 1000
var ChuyenSlide = document.querySelectorAll(".chuyen-slide")[0]; // class .chuyen-slide (width: 9999px)
var Img =ChuyenSlide.querySelectorAll("img"); // select all img trong chuyen-slide
var Max = KichThuoc * Img.length; // 1000 * Img.length
Max -= KichThuoc;
var Chuyen = 0;
function Next(){
    if (Chuyen < Max) {
        Chuyen += KichThuoc; // Chuyen = 0 + 1000
    }
    else {
        Chuyen = 0;
    }
    // Chuyen += KichThuoc; // 0 + 1000
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px'; // - 1000px margin-left
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
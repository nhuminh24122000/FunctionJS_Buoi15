// Bài 1: Quản lý tuyển sinh

function tinhDiemThi() {
    var kvA = document.getElementById("khuVucA");
    var kvB = document.getElementById("khuVucB");
    var kvC = document.getElementById("khuVucC");

    var dt1 = document.getElementById("doiTuong1");
    var dt2 = document.getElementById("doiTuong2");
    var dt3 = document.getElementById("doiTuong3");

    var diemCh = document.getElementById("diemChuan").value;
    var diem1 = Number(document.getElementById("diemMon1").value);
    var diem2 = Number(document.getElementById("diemMon2").value);
    var diem3 = Number(document.getElementById("diemMon3").value);

    var diemKhuVuc = 0;

    if (kvA.selected) {
        diemKhuVuc = 2;
    } else if (kvB.selected) {
        diemKhuVuc = 1;
    } else if (kvC.selected) {
        diemKhuVuc = 0.5;
    } else {
        diemKhuVuc = 0;
    }

    var diemDoiTuong = 0;

    if (dt1.selected) {
        diemDoiTuong = 2.5;
    } else if (dt2.selected) {
        diemDoiTuong = 1.5;
    } else if (dt3.selected) {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0;
    }

    var tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    var ketQuaDR = "";

    if (diemCh > 30 || diemCh <= 0 || diem1 < 0 || diem2 < 0 || diem3 < 0 || diem1 > 10 || diem2 > 10 || diem3 > 10) {
        alert("Dữ liệu nhập không hợp lệ!!!")
    } else if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        document.getElementById("txtTinhDiem").innerHTML = "Bạn đã rớt. Do có điểm bằng 0"
    } else {
        if (tongDiem < diemCh) {
            ketQuaDR = "rớt";
        } else {
            ketQuaDR = "đậu";
        }
        document.getElementById("txtTinhDiem").innerHTML = "Bạn đã " + ketQuaDR + ". Tổng điểm: " + tongDiem.toLocaleString();
    }
}
document.getElementById("btnTinhDiem").onclick = tinhDiemThi;


// --------------------------------------------
// Bài tập 2: Tính tiền điện

const soKW_Dau = 500;
const soKW_50_100 = 650;
const soKW_100_200 = 850;
const soKW_200_350 = 1100;
const soKW_Tren_350 = 1300;


function tinhTienDien() {
    var ten = document.getElementById("hoTen").value;
    var soKw = document.getElementById("soKW").value;

    var tienDien = 0;

    if (soKw > 0 && soKw <= 50) {
        tienDien = soKw * soKW_Dau;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = 50 * soKW_Dau + (soKw - 50) * soKW_50_100;
    } else if (soKw > 100 && soKw <= 200) {
        tienDien = 50 * soKW_Dau + 50 * soKW_50_100 + (soKw - 100) * soKW_100_200;
    } else if (soKw > 200 && soKw <= 350) {
        tienDien = 50 * soKW_Dau + 50 * soKW_50_100 + 100 * soKW_100_200 + (soKw - 200) * soKW_200_350;
    } else if (soKw > 350) {
        tienDien = 50 * soKW_Dau + 50 * soKW_50_100 + 100 * soKW_100_200 + 150 * soKW_200_350 + (soKw - 350) * soKW_Tren_350;
    } else {
        alert("Số KW không hợp lệ!!!")
    }

    document.getElementById("txtTienDien").innerHTML = "Họ tên: " + ten + ". Tiền điện: " + tienDien.toLocaleString();

}

document.getElementById("btnTienDien").onclick = tinhTienDien;


// --------------------------------------------
// Bài tập 3: Tính thuế thu thập cá nhân

function tinhTienThue() {
    var ten2 = document.getElementById("hoTen2").value;
    var soThuNhap = Number(document.getElementById("thuNhap").value);
    var soNguoi = Number(document.getElementById("nguoiPhuThuoc").value);

    var sauThue = soThuNhap - 4e+6 - soNguoi * 1.6e+6;
    var tienThue = 0;

    if (sauThue <= 0 || soNguoi < 0 || Number.isInteger(soNguoi) == false) {
        alert("Dữ liệu nhập không hợp lệ!!!")
    } else if (sauThue > 0 && sauThue <= 60e+6) {
        tienThue = sauThue * 0.05;
    } else if (sauThue > 60e+6 && sauThue <= 120e+6) {
        tienThue = sauThue * 0.1;
    } else if (sauThue > 120e+6 && sauThue <= 210e+6) {
        tienThue = sauThue * 0.15;
    } else if (sauThue > 210e+6 && sauThue <= 384e+6) {
        tienThue = sauThue * 0.2;
    } else if (sauThue > 384e+6 && sauThue <= 624e+6) {
        tienThue = sauThue * 0.25;
    } else if (sauThue > 624e+6 && sauThue <= 960e+6) {
        tienThue = sauThue * 0.3;
    } else {
        tienThue = sauThue * 0.35;
    }

    document.getElementById("txtTinhThue").innerHTML = "Họ tên: " + ten2 + ". Tiền thuế thu nhập cá nhân: " + new Intl.NumberFormat('vn-VN').format(tienThue);

}

document.getElementById("btnTinhThue").onclick = tinhTienThue;


// --------------------------------------------
// Bài tập 4: Tính tiền cáp

function toggleInput() {
    var dropdown = document.getElementById("myDropdown");
    var input = document.getElementById("ketNoi");
    if (dropdown.value == "0") {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
}


const hoaDon_nDan = 4.5;
const dichVu_nDan = 20.5;
const kenh_nDan = 7.5;

const hoaDon_dNghiep = 15;
const dichVu_dNghiep_10 = 75;
const dichVu_dNghiep_them = 5;
const kenh_dNghiep = 50;


function tinhTienCap() {
    var nDan = document.getElementById("nhaDan");
    var dNghiep = document.getElementById("doanhNghiep");

    var maKH = document.getElementById("maKhachHang").value;
    var soKenh = Number(document.getElementById("kenh").value);
    var soKetNoi = Number(document.getElementById("ketNoi").value);

    var khachHang = "";
    khachHang = kiemTraKhachHang(nDan, dNghiep);

    var tienCap = 0;

    if (soKenh < 0 || Number.isInteger(soKenh) == false) {
        alert("Số kênh cao cấp không hợp lệ!!!");
    } else {
        switch (khachHang) {
            case "nDan":
                tienCap = hoaDon_nDan + dichVu_nDan + kenh_nDan * soKenh;
                break;

            case "dNghiep":
                tienCap = hoaDon_dNghiep + tinhTienDichVu_dNghiep(soKetNoi) + kenh_dNghiep * soKenh;
                break;

            default:
                break;
        }
    }

    document.getElementById("txtTienCap").innerHTML = "Mã khách hàng: " + maKH + ". Tiền cáp: $" + tienCap.toFixed(2);

}

document.getElementById("btnTienCap").onclick = tinhTienCap;


function kiemTraKhachHang(kh1, kh2) {
    if (kh1.selected) {
        return "nDan";
    } else if (kh2.selected) {
        return "dNghiep";
    } else {
        alert("Chưa chọn loại khách hàng!!!");
        return "";
    }
}

function tinhTienDichVu_dNghiep(soKetNoi) {
    if (soKetNoi < 0 || Number.isInteger(soKetNoi) == false) {
        alert("Số kết nối không hợp lệ!!!")
    } else if (soKetNoi >= 0 && soKetNoi <= 10) {
        return dichVu_dNghiep_10;
    } else {
        return dichVu_dNghiep_10 + (soKetNoi - 10) * dichVu_dNghiep_them;
    }
}





//---------------------------------------------------------------------------------------------Xử lý dữ liệu đầu vào cho trang Contact--------------------------------
//---------------------------------------------------------------------------------Kiểm tra trường Your Name
function ct_checkName() {
    var na = document.getElementById('ct_name').value;
    var s1 = document.getElementById('ct_thongBao1');

    if (na.length > 100) {
        s1.innerHTML = "Your name should not exceed 100 characters.";
        s1.style.display = "inline";
        return false;
    }
    if (na.length < 1) {
        s1.innerHTML = "Please fill out your name.";
        s1.style.display = "inline";
        return false;
    }
    if (na.length >= 1 && na.length <= 100) {
        s1.style.display = "none";
    }
}
//----------------------------------------------------------------------------------------------------Kiểm tra trường Your Email
function ct_checkEmail() {
    var em = document.getElementById('email').value;
    var s2 = document.getElementById('ct_thongBao2');

    if (em.length > 100) {
        s2.innerHTML = "Your email should not exceed 100 characters.";
        s2.style.display = "inline";
        return false;
    }
    if (em.length < 1) {
        s2.innerHTML = "Please fill out your email.";
        s2.style.display = "inline";

        return false;
    }
    if (em.length >= 1 && em.length <= 100) {
        s2.style.display = "none";
    }
}
//------------------------------------------------------------------------------------------------------------Kiểm tra trường Subject
function ct_checkSubject() {
    var sj = document.getElementById('chuDe').value;
    var s3 = document.getElementById('ct_thongBao3');

    if (sj.length < 50) {
        s3.innerHTML = "Subject should not shorter than 50 characters.";
        s3.style.display = "inline";
        return false;
    }
    if (sj.length > 250) {
        s3.innerHTML = "Subject should not exceed 250 characters.";
        s3.style.display = "inline";
        return false;
    }
    if (sj.length >= 50 && sj.length <= 250) {
        s3.style.display = "none";
    }
}

//---------------------------------------------------------------------------------------Kiểm tra trường Message
function ct_checkMessage() {
    var ms = document.getElementById('ct_message').value;
    var s4 = document.getElementById('ct_thongBao4');

    if (ms.length > 500) {
        s4.innerHTML = "Your massage should not exceed 500 characters.";
        s4.style.display = "inline";
        return false;
    }
    if (ms.length < 1) {
        s4.innerHTML = "Please fill out the message.";
        s4.style.display = "inline";
        return false;
    }
    if (ms.length >= 1 && ms.length <= 500) {
        s4.style.display = "none";
    }
}

//--------------------------------------------------------------------------------------hàm kiểm tra tất cả các trường phần Contact
function checkAll_contact() {
    ct_checkName();
    ct_checkEmail();
    ct_checkSubject();
    ct_checkMessage();
    if (ct_checkName() == false || ct_checkEmail() == false || ct_checkMessage() == false || ct_checkSubject() == false) {
        alert("Xem lại các trường nhập");
        return false;
    }

}

//------------------------------------------------------------------------------------Xử lý dữ liệu đầu vào cho trang đặt hàng Order--------------------------------
//---------------------Kiểm tra trường loại sản phẩm
function od_checkCupsize() {
    var cs = document.getElementsByName('cupsize'); //-----------------------------Gán các thành phần Byname = cupsize cho cs (Cs có thẻ coi như 1 mảng array)
    var s5 = document.getElementById('od_thongBao1');


    if (cs[0].checked == false && cs[1].checked == false && cs[2].checked == false && cs[3].checked == false) {
        s5.innerHTML = "Please select our product";
        s5.style.display = "inline";
        return false;
    } else {
        s5.style.display = "none";
    }

}

//-----------------------------------------------------------------------------------------------------------------------------------Kiểm tra trường your name
function od_checkYourName() {
    var yn = document.getElementById('od_name').value;
    var s6 = document.getElementById('od_thongBao2');

    if (yn.length > 100) {
        s6.innerHTML = "Your name should not exceed 100 characters.";
        s6.style.display = "inline";
        return false;
    }
    if (yn.length < 1) {
        s6.innerHTML = "Please fill out your name.";
        s6.style.display = "inline";
        return false;
    }
    if (yn.length >= 1 && yn.length <= 100) {
        s6.style.display = "none";
    }
}

//------------------------------------------------------------------------------------------------------------------------------Kiểm tra trường message
function od_checkMessage() {
    var od_ms = document.getElementById('od_message').value;
    var s7 = document.getElementById('od_thongBao3');

    if (od_ms.length > 30) {
        s7.innerHTML = "Your name should not exceed 30 characters.";
        s7.style.display = "inline";
        return false;
    }
    if (od_ms.length <= 30) {
        s7.style.display = "none";
    }
}
//---------------------------------------------------------------------------------------------------------------------------Kiểm tra trường ngày giao hàng
function od_checkdate() {
    var s8 = document.getElementById('od_thongBao4');
    var deliDate = document.getElementById('deliverDate').value;
    //----------------Lấy và tách thành phần ngày tháng năm từ trường deliverDate

    var str_deli_date, str_deli_month, str_deli_year;
    str_deli_date = deliDate.slice(8, 10);
    str_deli_month = deliDate.slice(5, 7);
    str_deli_year = deliDate.slice(0, 4);

    //----------------Chuyển đổi dữ liệu ngày tháng dạng String sang dạng number
    var deli_date, deli_month, deli_year;
    deli_date = Number(str_deli_date);
    deli_month = Number(str_deli_month);
    deli_year = Number(str_deli_year);

    //----------------Lấy ngày tháng hiện tại.
    var now = new Date();
    var now_date, now_month, now_year;
    now_date = now.getDate();
    now_month = now.getMonth() + 1; //------------ Cộng 1 do kết quả trả về luôn ít hơn 1 ( Tháng giống như 1 mảng bắt đầu từ phần tứ số 0)
    now_year = now.getFullYear();
    //-----------------So sánh ngày tháng 
    if (deli_year != 0 && deli_date != 0 && deli_month != 0) {
        if (deli_year < now_year) {
            s8.innerHTML = "Please select Deliver date from today.";
            s8.style.display = "inline";
            return false;
        }
        if (deli_year == now_year) {
            if (deli_month < now_month) {
                s8.innerHTML = "Please select Deliver date from today.";
                s8.style.display = "inline";
                return false;
            }
            if (deli_month == now_month) {
                if (deli_date <= now_date) {
                    s8.innerHTML = "Please select Deliver date from today.";
                    s8.style.display = "inline";
                    return false;
                } else { s8.style.display = "none"; }
            }
        }
    } else {
        s8.innerHTML = "Please fill out the deliver date.";
        s8.style.display = "inline";
        return false;
    }
}

//--------------------------------------------------------------------------------------------------------------------------Kiểm tra trường địa chỉ giao hàng
function od_checkaddress() {
    var ad = document.getElementById('address').value;
    var s9 = document.getElementById('od_thongBao5');

    if (ad.length > 500) {
        s9.innerHTML = "Address should not exceed 500 characters.";
        s9.style.display = "inline";
        return false;
    }
    if (ad.length < 1) {
        s9.innerHTML = "Please fill out the address.";
        s9.style.display = "inline";
        return false;
    } else s9.style.display = "none";
}
//------------------------------------------hàm kiểm tra tất cả các trường phần Contact
function checkAll_order() {

    od_checkCupsize();
    od_checkYourName();
    od_checkdate();
    od_checkMessage();
    od_checkaddress();
    if (od_checkCupsize() == false || od_checkYourName() == false || od_checkdate() == false || od_checkMessage() == false || od_checkaddress() == false) {
        alert("Xem lại các trường nhập");
        return false;
    }
}

//-----------------------------------------------------------------------------------------------------------------------------Phần thực hành thêm--------------------------------
function submit1() {
    alert("Bạn đã gửi dữ liệu thành công. Xin cảm ơn!");
}


function xuLyThongTin() {
    var te = document.getElementById('noiDung').value; //Lấy giá trị value của ID noiDung gán cho te
    document.getElementById('demo').innerHTML = te; //Gán thành phần bên trong tag có id demo giá trị của biến te
    let font = document.getElementById('fontChu').value; //Lấy giá trị font chữ từ value.
    let x = document.getElementById('demo'); // Gán tag có id demo cho x
    x.style.fontFamily = font; //Sử dụng lệnh thao tác với css chuyển đổi font chữ.
    let color1 = document.getElementById('textColor').value;
    let y = document.getElementById('demo');
    y.style.color = color1;
}


function hidden_menu(){
    var x=document.getElementById('menu_button');
    x.className='false';
}
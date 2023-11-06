document.getElementById("result1").onclick = function () {
  let benchmark = document.getElementById("input1_1").value;
  benchmark = Number(benchmark);
  let area = document.getElementById("select1_1").value;
  area = Number(area);
  let object = document.getElementById("select1_2").value;
  object = Number(object);
  let point1 = document.getElementById("input1_2").value;
  point1 = Number(point1);
  let point2 = document.getElementById("input1_3").value;
  point2 = Number(point2);
  let point3 = document.getElementById("input1_4").value;
  point3 = Number(point3);

  let point = point1 + point2 + point3 + area + object;
  let context1 = "Bạn đã rớt. ";
  let context2 = "Bạn đã đậu. ";
  if (point1 <= 0 || point2 <= 0 || point3 <= 0) {
    document.querySelector(".r1").innerHTML =
      context1 + "Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (point < benchmark) {
    document.querySelector(".r1").innerHTML =
      context1 + "Do không đạt điểm chuẩn. " + "Số điểm của bạn là: " + point;
  } else {
    document.querySelector(".r1").innerHTML =
      context2 + "Số điểm của bạn là: " + point;
  }
};

document.getElementById("result2").onclick = function () {
  let name = document.getElementById("input2_1").value;

  let eNumber = document.getElementById("input2_2").value;
  eNumber = Number(eNumber);
  let check1 = 500;
  let check2 = 650;
  let check3 = 850;
  let check4 = 1100;
  let check5 = 1300;
  var ebill;
  if (eNumber <= 0) {
    alert("Số KW không hợp lệ");
  } else if (eNumber <= 50) {
    ebill = eNumber * check1;
  } else if (eNumber <= 100) {
    ebill = 50 * check1 + (eNumber - 50) * check2;
  } else if (eNumber <= 200) {
    ebill = 50 * check1 + 50 * check2 + (eNumber - 100) * check3;
  } else if (eNumber <= 350) {
    ebill = 50 * check1 + 50 * check2 + 100 * check3 + (eNumber - 200) * check4;
  } else {
    ebill =
      50 * check1 +
      50 * check2 +
      100 * check3 +
      150 * check4 +
      (eNumber - 350) * check5;
  }
  let result = new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  }).format(ebill);
  document.querySelector(".r2").innerHTML =
    "Họ và tên: " + name + ". Tiền điện là: " + result;
};

document.getElementById("result3").onclick = function () {
  let name = document.getElementById("input3_1").value;
  const mil = 1000000;
  let income = document.getElementById("input3_2").value;
  income = Number(income) / mil;
  let person = document.getElementById("input3_3").value;
  person = Number(person);

  var tax = income - 4 - person * 1.6;
  var result;
  if (tax < 0) {
    alert("Thu nhập không cần phải chịu thuế");
  } else {
    if (tax <= 60) {
      result = tax * 0.05;
    } else if (tax <= 120) {
      result = tax * 0.1;
    } else if (tax <= 210) {
      result = tax * 0.15;
    } else if (tax <= 384) {
      result = tax * 0.2;
    } else if (tax <= 624) {
      result = tax * 0.25;
    } else if (tax <= 960) {
      result = tax * 0.3;
    } else {
      result = tax * 0.35;
    }
  }
  result = result * mil;
  result = new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  }).format(result);
  document.querySelector(".r3").innerHTML =
    "Họ và tên: " + name + ". Thuế cần đóng là: " + result;
};

function Visibilyty() {
  var invisible = document.getElementById("hiddenChoice");
  let type = document.getElementById("select5").value;
  type = Number(type);
  if (type == 2) {
    document.getElementById("hiddenChoice").style.display = "block";

    invisible.classList.remove("d-none");
  } else {
    document.getElementById("hiddenChoice").style.display = "none";
  }
}

document.getElementById("result5").onclick = function () {
  let type = document.getElementById("select5").value;
  type = Number(type);
  let code = document.getElementById("input5_1").value;
  let channel = document.getElementById("input5_2").value;
  channel = Number(channel);
  let connect = document.getElementById("input5_3").value;
  connect = Number(connect);
  var fee;
  if (type == 2) {
    if (connect <= 10) {
      fee = 15 + 75 + 50 * channel;
    } else {
      fee = 15 + 75 + (connect - 10) * 5 + 50 * channel;
    }
  } else if (type == 0) {
    alert("Hãy chọn loại khách hàng");
  } else {
    fee = 4.5 + 20.5 + 7.5 * channel;
  }
  fee = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
  }).format(fee);
  document.querySelector(".r4").innerHTML =
    "Mã khác hàng: " + code + ". Phí truyền hình cáp là: " + fee;

  console.log(fee);
};

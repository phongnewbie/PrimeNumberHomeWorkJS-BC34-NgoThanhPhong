function checkingPrimeNumber(n) {
  var checkingPrime = true;

  // Nếu n bé hơn 2 tức là không phải số nguyên tố
  if (n < 2 ) {
    checkingPrime = false;
  } else if (n == 2) {
    checkingPrime = true;
  } else if (n % 2 == 0) {
    checkingPrime = false;
  } else {
    // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        checkingPrime = false;
        break;
      }
    }
  }

  return checkingPrime;
}

// Hàm in ra các số nguyên tố từ 1 tới n
function printPrimeNumber() {
  // Lấy number
  var number = document.getElementById("inputNumber").value;

  // Ép number sang kiểu INT
  number = parseInt(number);

  // Lặp để in kết quả
  var resultNumber = "";
  for (var i = 1; i <= number; i++) {
    // Nếu là số nguyên tố thì in ra
    if (checkingPrimeNumber(i)) {
      resultNumber += i + " <br/>";
    }
    document.getElementById("resultPrimeNumber").innerHTML = resultNumber;
  }
}

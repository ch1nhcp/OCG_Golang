//● Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

const sphereVolume = (r) => {
  console.log((4 / 3) * Math.PI * r ** 3);
};

console.log(sphereVolume(5)); //Test

/*Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7)*/

const getSum = (a, b) => {
  if (a == b) return 0;
  let sum = 0;
  for (i = a < b ? a + 1 : b + 1; i < (a < b ? b : a); i++) sum += i;
  return sum;
};
console.log(getSum(3, 8)); //test

//Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

const sumDivisors = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (!(num % i)) {
      sum += i;
    }
  }
  console.log(sum);
};

console.log(sumDivisors(12)); //test

/*Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả
trả về true hoặc false */

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i++) if (num % i === 0) return false;
  return num > 1;
};

console.log(isPrime(5)); //test

/* Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số
truyền vào */

const sumPrime = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
};

console.log(sumPrime(5)); //test

//=======================================================================
// Xử lý chuỗi
// ● Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ:
// ''HELLO world'' => ''Hello World''.

const upperCaseFirstLetter = (str) => {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

console.log(upperCaseFirstLetter("I'm a dummy cOders!"));

// ● Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.

const spinalCase = (str) => {
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-").toLowerCase();
};

console.log(spinalCase("HELLO world")); // test

// ● Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược
// đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc
// false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
const isPalindrom = (str) => {
  var str = str.replace(/[^a-zA-Z0-9]+/gi, "").toLowerCase();
  return str == str.split("").reverse().join("");
};

console.log("bai3:" + isPalindrom("Race car")); //test

// ● Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu
// cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân
// biệt hoa thường). Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey'' và không chứa ''ww''

const isContainer = (s1, s2) => {
  var s1 = s1.toLowerCase().split("").sort();
  var s2 = s2.toLowerCase().split("").sort();
  console.log(s1, s2);
  let count = 0;
  for (let i = 0; i < s2.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s2[i] == s1[j]) {
        count += 1;
        s1.splice(j, 1);
        break;
      }
    }
  }
  if (count != s2.length) return false;
  return true;
};

console.log("bai 4 " + isContainer("HELLO world", "low")); // test

//=======================================================================

// Xử lý mảng
// ● Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined,
// NaN, 0, ''''.
const cleanArray = (actual) => {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
};

// ● Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].

const filterLongestItem = (arr) => {
  var newArray = new Array();
  let maxLength = Math.max(...arr.map((el) => el.length));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == maxLength) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

const arr = ["123", "12", "55555", "66666", "acc", "12333"]; //test
console.log(filterLongestItem(arr)); //Test

// ● Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1
// mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào
// [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].

const uniqueArr = (arr1, arr2) => {
  let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
  let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);
  return unique1.concat(unique2);
};

//cach 2
const uniqueArray = (arr1, arr2) => {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
};

//test
let arr1 = [1, 2, 3],
  arr2 = [1, 3, 4, 5, 5];
console.log(uniqueArr(arr1, arr2)); //test
console.log(uniqueArray(arr1, arr2)); //test

// ● Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp
// (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau
// [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].

const matrix = (m, n) => {
  // let size = m * n;
  let temp = [];
  let result = [];
  for (let i = 1; i <= m * n; i++) {
    temp.push(i);
  }
  console.log(temp);
  for (let j = 0; j < m * n; j += n) {
    result.push(temp.slice(j, j + n));
  }
  for (let a = 1; a < m; a += 2) {
    result[a].reverse();
    console.log(result[a]);
  }
  console.log(result);
};
matrix(3, 4); //test
//=======================================================================
// Xử lý object
// ● Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm tính ra
// số tuổi trung bình của toàn bộ sinh viên.
const avgAge = (arr) => {
  let sumAge = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAge += arr[i].age;
  }
  return sumAge / arr.length;
};

let arrr = [
  { name: "an", age: 20 },
  { name: "chi", age: 28 },
  { name: "hinh", age: 22 },
];
console.log(avgAge(arrr)); //test

// ● Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp
// xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
const sortAge = (arr) => {
  return arr.sort(function (a, b) {
    return a.age - b.age;
  });
};

console.log(sortAge(arrr)); //test

// ● Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp
// xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).

const sortName = (arr) => {
  return arr.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};
console.log(sortName(arrr)); //test

// ● Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm lọc ra
// những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.

const filterLeter = (arr) => {
  var newArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    let fstr = arr[i].name.charAt(0);
    if (fstr == "H" || fstr == "h") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(filterLeter(arrr)); //test

//=======================================================================
// Tổng hợp
// ● Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số
// thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví
// dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.

const time = (str, x) => {
  let arr = str.split(":");
  let totalSeconds = (arr[0] * 3600 + arr[1] * 60 + arr[2] * 1 + x * 1) * 1;
  hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  minutes = Math.floor(totalSeconds / 60);
  seconds = totalSeconds % 60;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};
console.log(time("09:20:56", 7));

// ● Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại
// bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải
// bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).
const timeCal = (x, y, h) => {
  let days = 0,
    pos = 0;
  while (1) {
    days++;
    pos += x;
    if (pos >= h) break;
    pos -= y;
  }
  return days;
};
console.log(timeCal(3, 2, 10)); //test

//test h = 12m , x = 3m, y = 2m
// ● Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra
// 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.
const sortNumberLetters = (a) => {
  let str = "" + a;
  let arr = str.split("").sort();
  if (arr[0] != "0") {
    return arr.join("");
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > 0) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        return arr.join("");
      }
    }
  }
};

console.log(sortNumberLetters(202416));

function toUpperCaseFirstLetterOfWord(str) {
  const arr = str.split(" ");
  const newArr = arr.map((word) => {
    if (word.length > 0)
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    else return word;
  });

  return newArr.join(" ");
}

function toSpinalCase1(str) {
  return str.toLowerCase().split(" ").join("-");
}

function toSpinalCase2(str) {
  return str.toLowerCase().replaceAll(" ", "-");
}

function toSpinalCase3(str) {
  return str.toLowerCase().replace(/ /g, "-");
}

function isSymmetricalString1(str) {
  str = str.toLowerCase().split(" ").join("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function isSymmetricalString2(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  const reverseStr = str.split("").reverse().join("");

  return str === reverseStr;
}

function isStr1IncludesAllCharactersOfStr2(str1, str2) {
  const arr1 = str1.toLowerCase().split("");
  str2 = str2.toLowerCase();

  for (let char of str2) {
    let index = arr1.indexOf(char);
    if (index !== -1) {
      arr1.splice(index, 1);
    }
  }

  return str1.length - arr1.length === str2.length;
}

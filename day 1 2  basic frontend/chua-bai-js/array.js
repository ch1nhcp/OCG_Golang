function removeFalsyValue(arr) {
  return arr.filter((value) => value);
}

function getElementsNotInTwoArray1(arr1, arr2) {
  let elementsOnlyInArray1 = arr1.filter(
    (element) => arr2.indexOf(element) < 0
  );
  let elementsOnlyInArray2 = arr2.filter(
    (element) => arr1.indexOf(element) < 0
  );

  return elementsOnlyInArray1.concat(elementsOnlyInArray2);
}

function getElementsNotInTwoArray2(arr1, arr2) {
  let arr = arr1.concat(arr2);

  return arr.filter((number) => {
    return !(arr1.includes(number) && arr2.includes(number));
  });
}

function getLongestElementsInArray1(arr) {
  let maxLength = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (maxLength < arr[i].length) {
      maxLength = arr[i].length;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === maxLength) {
      result.push(arr[i]);
    }
  }

  return result;
}

function getLongestElementsInArray2(arr) {
  let maxLength = 0;
  let result = [];

  for (element of arr) {
    if (element.length == maxLength) result.push(element);

    if (element.length > maxLength) {
      result = [element];
      maxLength = element.length;
    }
  }

  return result;
}

function createZigZacArray1(m, n) {
  let result = [];

  for (let i = 1; i <= m; i++) {
    let arr = [];

    for (let j = 1; j <= n; j++) {
      let number = (i - 1) * n + j;

      if (row % 2 == 1) arr.push(number);
      else arr.unshift(number);
    }

    result.push(arr);
  }

  return result;
}

function createZigZacArray2(m, n) {
  let arr = [],
    subArr = [],
    result = [];

  for (let i = 1; i <= m * n; i++) {
    arr.push(i);
  }

  for (let i = 0; i < m; i++) {
    subArr = arr.splice(0, n);

    if (i % 2 == 0) {
      result[i] = subArr;
    } else {
      result[i] = subArr.reverse();
    }
  }

  return result;
}

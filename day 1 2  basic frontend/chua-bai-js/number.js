function calculateSphereVolume(r) {
  return (4 / 3) * Math.PI * Math.pow(r, 3);
}

function sumBetweenTwoInteger1(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let sum = 0;

  for (let i = min + 1; i < max; i++) {
    sum += i;
  }

  return sum;
}

function sumBetweenTwoInteger2(a, b) {
  return ((a + b) / 2) * (Math.abs(a - b) - 1);
}

function isPrimeNumber1(number) {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }

  for (let i = 2; i < number; i ++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

function isPrimeNumber2(number) {
  if (number === 2) return true;

  if (!Number.isInteger(number) || number < 2 || number % 2 === 0) {
    return false;
  }

  const squareRoot = Math.sqrt(number);

  for (let i = 3; i <= squareRoot; i += 2) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

function sumPrimeNumbers(number) {
  let sum = 0;

  for (let i = 2; i <= number; i++) {
    if (isPrimeNumber(i)) {
      sum += i;
    }
  }

  return sum;
}

function sumDivisorOfNumber1(number) {
  let sum = number;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }

  return sum;
}

function sumDivisorOfNumber2(number) {
  let sum = 0;

  for (let i = 1; i <= Math.sqrt(number); i++) {
    let x = number / i;

    if (number % i == 0 && x !== i) {
      sum += i + x;
    }

    if (i === number / i) {
      sum += i;
    }
  }

  return sum;
}

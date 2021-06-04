function calculateTime(timeString, numberSeconds) {
  let time = timeString.split(":");
  let hour = parseInt(time[0]);
  let minute = parseInt(time[1]);
  let second = parseInt(time[2]);

  const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

  if (numberSeconds >= 60) {
    minute += Math.floor(numberSeconds / 60);

    if (minute >= 60) {
      hour++;
      minute = minute % 60;
    }
    numberSeconds = numberSeconds % 60;
  }

  if (numberSeconds > 0) {
    second += numberSeconds;

    if (second >= 60) {
      minute++;

      if (minute >= 60) {
        hour++;
        minute = minute % 60;
      }

      second = second % 60;
    }
  }

  if (hour >= 24) hour = hour - 24;

  return [padToTwo(hour), padToTwo(minute), padToTwo(second)].join(":");
}

function calculateSnailClimb1(height, up, down) {
  if (up <= down) {
    if (up >= height) {
      return 1;
    } else {
      return Infinity;
    }
  }

  let count = 0;
  let climbed = 0;
  let isReached = false;

  while (!isReached) {
    count++;
    climbed += up;

    if (climbed >= height) {
      isReached = true;
      break;
    } else {
      climbed -= down;
    }
  }

  return count;
}

function calculateSnailClimb2(height, up, down) {
  if (up <= down && up >= height) {
    return 1;
  }

  if (up <= down) {
    return Infinity;
  }

  return Math.ceil((height - down) / (up - down));
}

function rearrangeNumber(number) {
  let arr = Array.from(String(number), Number).sort((a, b) => a - b);

  if (arr[0] === 0) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        break;
      }
    }
  }

  return Number(arr.join(""));
}

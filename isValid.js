function isValisPassword(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(" ") !== -1 ||
    password.indexOf("username") !== -1
  ) {
    return false;
  }
  return true;
}

//  Average value in an array of numbers
let arr = [8765, 54, 4334, 8864, 6543333];

function avr(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return console.log(total / arr.length);
}

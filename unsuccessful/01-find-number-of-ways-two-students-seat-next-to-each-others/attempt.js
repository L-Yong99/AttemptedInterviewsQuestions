function ArrayChallenge(arr) {

  // code goes here
  // [6,4]
  // new array of 6
  // [1,2,3,4,5,6]
  // number in initial array is taken
  // seat 3 as example
  // top seat is i - 2
  // bottom seat is i + 2
  //side is i-1/i+1 depending on even or odd num

  const expandedArray = Array.from({length: arr[0]}, (_, i) => i + 1);
  console.log(expandedArray);

  let openSeat = 0

  for (let i = 0; i < expandedArray.length; i++) {

  }
  // incomplete





}

// keep this function call here
console.log(ArrayChallenge(readline()));

// [6,4]
// [12,2,6,7,11]
// s

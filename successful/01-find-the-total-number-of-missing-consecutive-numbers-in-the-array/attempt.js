function ArrayChallenge(arr) {

  // code goes here

  // return min num of integers to complete consecutive missing numbers
  // if first item is smaller than second item, sec - first and minus 2 count
  // add total missing numbers

  // let number of missing consecutive number be acc
  let acc = 0

  //sort in acsending order
  const sortedArr = arr.sort((a, b) => a-b);

  for (let i = 0; i < sortedArr.length; i++) {

    if (sortedArr[i] < sortedArr[i+1]) {
      acc += sortedArr[i+1] - sortedArr[i] - 1;
    }

  }

  return acc;


};

// keep this function call here
console.log(ArrayChallenge(readline()));

// [5, 10, 15]
// [-2, 10, 4]

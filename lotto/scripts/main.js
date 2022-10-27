function getRandom() {
  return Math.ceil(Math.random() * 49);
}

function buildRandomNumbers(size) {
  console.log(size);
  const numbers = [];

  let i = 0;
  while (i < size) {
    numbers.push(getRandom());
    ++i;
  }

  return numbers.sort(function (a, b) {
    //       console.log('a', a, 'b', b);

    return a - b;
    //        if (a<b) {
    //            return -1;
    //        } else if (a>b) {
    //            return 1;
    //        } else{
    //        return 0;
    //    }
  });
  //   console.log('numbers', numbers)

  //    return [
  //      getRandom(),
  //      getRandom(),
  //      getRandom(),
  //      getRandom(),
  //      getRandom(),
  //      getRandom(),
  //  ];
}
function main() {
  console.log("main");
  const randomNumbers = buildRandomNumbers(6);
  console.log("random", randomNumbers);
  
  const $circles = document.querySelectorAll(".circle");
  //console.log('$circles', $circles)
  $circles.forEach(function ($circle, index) {
 //   console.log({$circle, index })
 $circle.textContent = randomNumbers[index]
  })
}

window.addEventListener("load", main);

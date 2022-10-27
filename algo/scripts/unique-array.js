const array = [
  1,
  2,
  2,
  3,
  4,
  4,
  4,
  5,
  6,
  7,
  7,
  7,
  8,
  8,
  8,
  9,
  "a",
  "a",
  "b",
  "o",
  "o",
  "p",
  "p",
];

function printUniqueList(list) {
    const array2 = [];
array.forEach((element) => {
 if (!array2.includes(element)) {
    array2.push(element);
  }
  
});
console.log(array2);
}

//wyświetl unikalne literki w słowie Anna, duże albo małe

printUniqueList(array);

const second = ["A", "n", "n", "a"];




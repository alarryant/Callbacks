function findWaldo(arr, found) {
  arr.forEach(function () {
    if (item === "Waldo") {
      return found(item, i, arr);
    }
  });
}
// callback function:
function actionWhenFound(a, i, array) {
  console.log("Found " + array[i]  + " at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// need to refactor using forEach
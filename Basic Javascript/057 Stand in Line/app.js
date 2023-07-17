// 1. use push() method of an array
// 2. use shift() to remove first element
// 3. The function nextInLine uses arr and item.


function nextInLine(arr, item) {
    // Only change code below this line
      arr.push(item);
      const removed = arr.shift();
      return removed;
    return item;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
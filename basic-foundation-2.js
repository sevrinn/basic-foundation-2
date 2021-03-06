/**
 * This is my BASIC FOUNDATION II assignment for the JavaScript section of the Web Fundamentals module of Coding Dojo's Accelerated Flex Bootcamp.
 * It's another 14 Basic Algorithms written from scratch. I've commented them to hell to demonstrate my understanding of what each one does. Def a fun challenge!
 */

/**
 * 1. Biggie Size
 * ----------------
 * Given an array, write a function that changes all positive numbers in the array to the string "big". Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].  
 */
function biggieSize(arr) {
  for(var i = 0; i < arr.length;i++) {  //iterates through length of array
    if (arr[i] > 0) {                     //if current array index is less than zero  
      arr[i] = "big";                       //current array index is set to "big";
    }
  }
  return arr;   //after it iterates through array, return updated array.
}
var testArray = [-1,3,5,-5];
biggieSize();
/**
 * 2. Print Low, Return High CANNOT GET TO PRINT low ????
 * ----------------
 * Create a function that takes in an array of numbers. The function should PRINT the lowest value in the array, and RETURN the highest value in the array. 
 */
function printLowReturnHigh(arr) {
  let low = 0
  let high = 0
  for(let i = 0; i < arr.length; i++) {
    if( arr[i] < low) {
      low = arr[i]
    }
    if (arr[i]>high) {
      high = arr[i]
    }
    
  }
  console.log(low)
  return high
}
let testArray = [-1,3,5,-5]
console.log(printLowReturnHigh(testArray));
/**
 * 3. Print One, Return Another 
 * ----------------
 * Build a function that takes in an array of numbers. The function should PRINT the second-to-last value in the array, and RETURN the first odd value in teh array. 
 */
function printOneReturnAnother(arr){
  console.log(arr[arr.length - 2]);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      return arr[i];
    }
    
  }
}
let testArray2 = [4,-6,2,7,8,9];
console.log(printOneReturnAnother(testArray2))
/**
 * 4. Double Vision
 * ----------------
 * Given an array, create a function that returns a new array where each value in the original array has been doubled. Example: Calling double([1,2,3]) should return [2,4,6] without changing the original array. 
 */
function doubleVision(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]*2);
  }
  return newArr;
}

let testArray2 = [4,-6,2,7,8,9];
console.log(doubleVision(testArray2));

/**
 * 5. Count Positives
 * ----------------
 * Given an array of numbers, create a function to replace the last value with the number of positive values found in the array. Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it. 
 */
function countPositives(arr) {
  let pos = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      pos++;
    }
  }
  arr[arr.length-1] = pos;
  return arr;
}

let testArray2 = [4,-6,2,7,8,9,45,-6, 2,-9];
console.log(countPositives(testArray2));
/**
 * 6. Evens and Odds
 * ----------------
 * Create a function that accepts an array. Every time that array has three odd values in a row, print "That's odd!", Every time the array has three evens in a row print "Even more so!". 
 */
function evensAndOdds(arr) {
  //loop thru array
    //if value if current index is odd (modulus 2 === 0) {

    } 
    //if the current index is greater than 0 AND the value of the current index is equal to the value of of the last index
      //if the value of the current index is greater than the value of the next index
          //console.log("That's odd!");
      //
    else
}
/**
 * 7. Increment the Seconds
 * ----------------
 * Given an array of numbers 'arr', add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc). Afterward, console.log each array value and return arr. 
 */

/**
 * 8. Previous Lengths
 * --------------------
 * You are passed an array containing strings. Working within that same array, replace each string with a number, the length of the string at the previous array index - an return the array.   
 */

/**
 * 9. Add Seven
 * --------------------
 * Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array. Example, adddSeven([1,2,3]) should return [8,9,10] in a new array   
 */

/**
 * 10. Reverse Array
 * --------------------
 * Given an array, write a function that reverses that reverses its values, in-place. Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so ...[2,4,6,1,3]. Do this WITHOUT creating an empty temporary array. (Hint: You'll need to swap values).  
 */

/**
 * 11. Outlook: Negative
 * --------------------
 * Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].  
 */

/**
 * 12. Always Hungry
 * --------------------
 * Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array values are "food", then print "I'm hungry" once. 
 */

/**
 * 13. Swap Toward the Center
 * --------------------
 * Given an array, swap the first and last values, third and third-to-last, etc. Example swapTowardCenter([true,42,"Ada",2,"pizza"]) turns tha array inot ["pizza", 42, "Ada",2,true]. swapToCenter([1,2,3,4,5,6]) turns array into [6,2,4,3,5,1]. No need to return the array this time. 
 */

/**
 * 14. Scale the Array
 * --------------------
 * Given an array 'arr' and a number 'num', multiply all values in the array 'arr' byt the number 'num', and return the changed array 'arr'. For example, scaleArray([1,2,3], 3) should return [3,6,9]. 
 */


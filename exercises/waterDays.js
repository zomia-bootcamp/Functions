/*
STEP 1
Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:

- Create a variable named plantNeedsWater using the const variable keyword.
- Assign an anonymous function that takes in a parameter of day to plantNeedsWater.
- In the function body add an if conditional that checks day === 'Wednesday'.
- If the conditional is truthy, inside the if code block, use the return keyword to return true.
- Add a condition so that on days that aren’t 'Wednesday', plantNeedsWater() should return false.
- Call the plantNeedsWater() and pass in 'Tuesday' as an argument.
- Test your code: Log plantNeedsWater('Tuesday') to the console. If it worked correctly, you should see false logged to the console.
*/

//your code goes here

// let plantNeedsWater = function (day) {
//   if (day === "Wednesday") {
//     return true;
//   } else {
//     return false;
//   }
// }


/* 
STEP 2
Change plantNeedsWater() to use arrow function syntax.*/

//your code goes here
// const plantNeedsWater = (day) => {
//   if (day === "Wednesday") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(plantNeedsWater('Wednesday'));




/* 
STEP 3
Refactor plantNeedsWater() to be a concise body. 
Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.
*/


const oddOrEven = (num) => {
  return num % 2 === 0 ? 'even' : 'odd';
}

const oddOrEven2 = num => num % 2 === 0 ? 'even' : 'odd';

console.log(oddOrEven2(16));
// commit

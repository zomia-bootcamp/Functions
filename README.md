# JavaScript Functions

## Objectives

- Create and invoke functions.
- Create and invoke functions with parameters.
- Create and invoke functions that return values.
- Define functions using the `function expression` syntax.
- Define functions using arrow function notation.
- Create and invoke concise functions.

## Preparation

1. Fork and clone this repository.
2. Create a new branch called `training` for your work.
3. Install the necessary dependencies using `npm install`.

## Introduction

JavaScript functions are blocks of code that perform specific tasks. They are like mini-programs within a larger program. Functions take inputs (called parameters or arguments), perform some operations on those inputs, and then return a result.

Functions are helpful because they promote code reusability. Instead of writing the same code multiple times, you can define a function once and then reuse it whenever needed. This saves time and effort.

A function is similar to a toaster in a few ways.


![toaster function](https://scausey.github.io/assets/images/toasterFunctionDiagram.jpg)


 First, just as a toaster has a specific purpose of toasting bread, a function serves a specific purpose in a program by performing a particular task or operation.

Moreover, a toaster can be used repeatedly to toast different slices of bread, and similarly, a function can be reused multiple times to perform the same task on different inputs. This reusability saves time and effort, as you don't have to write the same code from scratch each time you need that functionality.

Furthermore, like a toaster takes slices of bread as input and produces toasted bread as output, a function takes inputs (arguments or parameters) and produces outputs (return values) based on its internal logic. This input-output behavior allows functions to process data and produce desired results, making them versatile and adaptable components within a program.

Let's consider a scenario where we want to count the items in an array:

```javascript
// Without using a function
const items1 = ["Apple", "Banana", "Orange"];
const count1 = items1.length;
console.log(count1); 

// Repeating the logic without a function
const items2 = ["Grapes", "Watermelon", "Pineapple"];
const count2 = items2.length;
console.log(count2); 

// Using a function to avoid repetition
function countItems(arr) {
  return arr.length;
}

const items1 = ["Apple", "Banana", "Orange"];
const count1 = countItems(items1);
console.log(count1);

const items2 = ["Grapes", "Watermelon", "Pineapple"];
const count2 = countItems(items2);
console.log(count2); 
```

In this example, we utilize the `array.length` property to count the items in an array.

Without using a function, we directly access the `length` property of each array to get the count of items. 

To showcase the benefits of using a function, we define the `countItems` function that takes an array as a parameter and simply returns the `length` property of the array. By calling this function with different arrays, we can reuse the code and count the items without duplicating the counting logic.

Using the function `countItems` simplifies the code, promotes code reusability, and provides a consistent way to count the items in different arrays.


## Function Declarations
### Self Study

To learn more about function declarations, you can explore the CodeCademy class on [functions](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/intro-to-functions). Go through pages 1-3 to deepen your understanding.

## Parameters and Arguments
Until now, the functions we've created perform tasks without taking any inputs. However, there are cases where functions need to accept inputs and use them to accomplish a task. When defining a function, we can specify its parameters. Parameters act as placeholders for the inputs that will be provided to the function when it is called.

Let's take a look at how we can declare parameters in a function:

![JavaScript syntax for declaring a function with parameters](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/declaration.svg)

In the above diagram, `calculateArea()` is a function that calculates the area of a rectangle based on two inputs: `width` and `height`. The parameters `width` and `height` are specified between the parentheses, and within the function body, they function just like regular variables. They act as placeholders for the values that will be multiplied together.

When calling a function with parameters, we provide the values in the parentheses following the function name. These values are called arguments. Arguments can be passed as either values or variables.

![JavaScript syntax for invoking a function with arguments as values](https://static-assets.codecademy.com/Courses/Learn-JavaScript/by_value.svg)

In the function call above, the number 10 is passed as the `width` and 6 is passed as the `height`. It's important to note that the order of the arguments corresponds to the order in which the parameters are declared.

![JavaScript syntax for invoking a function with arguments as variables](https://static-assets.codecademy.com/Courses/Learn-JavaScript/by_variable.svg)

In the function call above, the variables `rectWidth` and `rectHeight` are assigned with the values representing the width and height of a rectangle before being used as arguments.

By utilizing parameters, `calculateArea()` becomes a reusable function that can compute the area of any rectangle! Functions are a powerful tool in programming, so let's practice creating and calling functions with parameters.

### Exercises

Follow the instructions given in  [`./exercises/parameters.js`](./exercises/parameters.js).

## Default Parameters
One of the new features introduced in ES6 is the ability to use default parameters. Default parameters allow us to assign a predetermined value to a parameter in case no argument is passed to the function or if the argument is undefined.

Take a look at the code snippet below that demonstrates the use of default parameters:

```js
function greeting(name = 'stranger') {
  console.log(`Hello, ${name}!`);
}

greeting('Nick'); 
greeting(); 
```
 
- In the example above, we used the = operator to assign a default value of 'stranger' to the name parameter. This default value is used when no argument is provided or if the argument is undefined. It allows us to have a generic greeting when a personalized name is not given.

- When we call greeting('Nick'), the argument 'Nick' is passed, overriding the default parameter 'stranger', and the output is 'Hello, Nick!'.

- When we call greeting() without any argument, the default value 'stranger' is used, and the output is 'Hello, stranger!'.

By using default parameters, we handle situations where an argument is missing when a function expects one.

Let's practice creating functions that use default parameters.

## Exercises
Please follow the instructions provided in [./exercises/defaultParameters.js](./exercises/defaultParameters.js).

## Return
When we call a function, the computer executes its code and calculates a result. By default, this result is undefined.

```js
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7))
```
In the code example, we defined a function called `calculateRectangleArea` to find the area of a rectangle based on its width and height. We invoked the function `calculateRectangleArea()` with arguments 5 and 7. However, when we tried to print the result, we got undefined. Did we make a mistake in our function? No! In fact, the function worked correctly, and the computer did calculate the area as 35, but we didn't capture it. So, how can we do that? By using the keyword `return`!

![Using return keyword in a function](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/function%20return.svg)

To pass back information from a function call, we use a return statement. It consists of the keyword `return` followed by the value we want to return. If we omit the value, undefined is returned.

When a return statement is used inside a function, the execution of the function stops, and the subsequent code is not executed. Consider the following example:

```js
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
```
If the width or height argument is less than 0, the function `calculateRectangleArea()` will return 'You need positive integers to calculate the area!'. The second return statement `width * height` will not be executed.

The return keyword is powerful because it allows functions to produce an output. We can store this output in a variable for later use.

### Exercises

Follow the instructions provided in [`./exercises/monitorCount.js`](./exercises/monitorCount.js), step 1 only.

## Helper Functions
We can also use the return value of one function inside another function. These functions called within another function are commonly known as helper functions. By breaking down tasks into smaller functions, our code becomes easier to read and debug if needed.

Suppose we want to convert the temperature from Celsius to Fahrenheit. We can define two functions as follows:

```js
function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); 
```
In the example above:

- We call the function `getFahrenheit()` with an argument of 15.
- Inside `getFahrenheit()`, we call the function `multiplyByNineFifths()` with 15 as the argument.
- `multiplyByNineFifths()` takes the `number` parameter with a value of 15.
- Inside `multiplyByNineFifths()`, we multiply 15 by (9/5), resulting in 27.
- The value 27 is returned to the `getFahrenheit()` function call.
- `getFahrenheit()` continues executing by adding 32 to 27, resulting in 59.
- Finally, the value 59 is returned to the `getFahrenheit(15)` function call.

Using functions helps us break down complex tasks into manageable parts. These helper functions make our code more organized and easier to understand and troubleshoot.

### Exercises

Follow the instructions provided in [`./exercises/monitorCount.js`](./exercises/monitorCount.js), step 2 only.


Another way to define a function is by using a function expression. In a function expression, the function name is usually not specified, making it an anonymous function. Function expressions are often stored in variables for easy reference.

To define a function expression:
1. Declare a variable, typically using `const`.
2. Assign an anonymous function to the variable using the `function` keyword followed by parentheses for parameters and curly braces for the function body.

To invoke a function expression, use the variable name followed by parentheses and any necessary arguments.

```js
variableName(argument1, argument2)
```
Unlike function declarations, function expressions cannot be called before they are defined.

Let's define a new function using a function expression.

### Exercises

Follow the instructions in [`./exercises/waterDays.js`](./exercises/waterDays.js), step 1 only.

## Arrow Functions
### Group Activity

ES6 introduced arrow function syntax as a shorter way to write functions. Arrow functions use the `() =>` notation and eliminate the need for the `function` keyword.

To create an arrow function:
1. Place the parameters inside parentheses.
2. Use the `=>` arrow to indicate the function body enclosed in curly braces.

Here's an example:

```js
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```
It's important to be familiar with different ways of writing functions as you'll encounter them when reading JavaScript code.

### Exercises

Follow the instructions in [`./exercises/waterDays.js`](./exercises/waterDays.js), step 2 only.

## Concise Body Arrow Functions
### Group Activity

JavaScript provides ways to refactor [arrow function](https://www.codecademy.com/resources/docs/javascript/arrow-functions?page_ref=catalog) syntax, and one of the most condensed forms is called concise body. Here are a few techniques:

1. Functions with a single parameter don't need parentheses around the parameter.

![showcasing how arrow functions parameters differ for different amounts of parameters](https://content.codecademy.com/courses/learn-javascript-2. 2.  functions/Diagram/parameters.svg)

2. A single-line function body doesn't require curly braces. The result of that line is automatically returned. This is known as implicit return.

![comparing single line and multiline arrow functions](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/return.svg)
So if we have a function:

```js
const squareNum = (num) => {
  return num * num;
};
```
We can refactor the function to:

```js
const squareNum = num => num * num;
```
Notice the following changes:

- The parentheses around num have been removed, since it has a single parameter.
- The curly braces { } have been removed since the function consists of a single-line block.
- The return keyword has been removed since the function consists of a single-line block.

### Exercises

Follow the instructions given in  [`./exercises/waterDays.js`](./exercises/waterDays.js), step 3 only.

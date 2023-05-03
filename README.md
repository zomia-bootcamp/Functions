# JavaScript Functions - 'Ins & Outs'

## Prerequisites

- [JavaScript Reference Types](https://git.generalassemb.ly/ga-wdi-boston/js-reference-types)
- [JavaScript Functions Study](https://git.generalassemb.ly/ga-wdi-boston/js-functions-study)

## Objectives

By the end of this talk, developers should be able to:

- Create and invoke functions that take reference types as arguments.
- Create and invoke functions that return reference types.
- Create and invoke functions that take functions as arguments.
- Create and invoke functions that return functions.

## Preparation

1. Fork and clone this repository.
1. Create a new branch, `training`, for your work.
1. Install dependencies with `npm install`.

# Functions
## What are Functions?
When first learning how to calculate the area of a rectangle, there’s a sequence of steps to calculate the correct answer:

1. Measure the width of the rectangle.
2. Measure the height of the rectangle.
3. Multiply the width and height of the rectangle.
With practice, you can calculate the area of the rectangle without being instructed with these three steps every time.

We can calculate the area of one rectangle with the following code:

```js
const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60
```
Imagine being asked to calculate the area of three different rectangles:

```js
// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;
 
// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;
 
// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;
```
In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

In this lesson, you will learn how to create and use functions, and how they can be used to create clearer and more concise code.

## Function Declarations
### Self Study

Open the CodeCademy class on [functions](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/intro-to-functions) and go through pages 1-3

## Parameters and Arguments
So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

Let’s observe how to specify parameters in our function declaration:

![JavaScript syntax for declaring a function with parameters](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/declaration.svg)

In the diagram above, calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.
![JavaScript syntax for invoking a function with arguments as values](https://static-assets.codecademy.com/Courses/Learn-JavaScript/by_value.svg)

In the function call above, the number 10 is passed as the width and 6 is passed as height. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.
![JavaScript syntax for invoking a function with arguments as variables](https://static-assets.codecademy.com/Courses/Learn-JavaScript/by_variable.svg)

The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call.

By using parameters, calculateArea() can be reused to compute the area of any rectangle! Functions are a powerful tool in computer programming so let’s practice creating and calling functions with parameters.

### Exercises

Follow the instructions given in  [`./exercizes/parameters.js`](./exercizes/parameters.js).

## Default Parameters
One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

Take a look at the code snippet below that uses a default parameter:

```js
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```
 
- In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!

- When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

- When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.

By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.

Let’s practice creating functions that use default parameters.

### Exercises

Follow the instructions geven in [`./exercizes/defaultParameters.js`](./exercizes/defaultParameters.js).

## Return
When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.

```js
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined
```
In the code example, we defined our function to calculate the area of a width and height parameter. Then rectangleArea() is invoked with the arguments 5 and 7. But when we went to print the results we got undefined. Did we write our function wrong? No! In fact, the function worked fine, and the computer did calculate the area as 35, but we didn’t capture it. So how can we do that? With the keyword return!

![using return keyword in a function](https://content.codecademy.com/courses/learn-javascript-functions/Diagram/function%20return.svg)
To pass back information from the function call, we use a [return statement](https://www.codecademy.com/resources/docs/javascript/functions?page_ref=catalog). To create a return statement, we use the return keyword followed by the value that we wish to return. Like we saw above, if the value is omitted, undefined is returned instead.

When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. Look at the example below:

```js
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
```
If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement width * height will not run.

The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

### Exercises

Follow the instructions given in  [`./exercizes/returns.js`](./exercizes/returns.js).




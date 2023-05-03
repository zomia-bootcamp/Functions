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




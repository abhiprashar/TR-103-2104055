# Web Development Training - Day 1

## Topics Covered

### 1. Introduction to JavaScript
JavaScript is a versatile, high-level programming language that is widely used for both client-side and server-side web development. It allows developers to create dynamic and interactive web pages. In this training, we explored the role of JavaScript in modern web development, particularly in the context of the MERN stack (MongoDB, Express, React, Node.js).

- **Key Features**: 
  - Dynamically typed
  - First-class functions
  - Event-driven, functional, and imperative programming styles

### 2. Variables in JavaScript
Variables are fundamental to any programming language, serving as containers for storing data values. In JavaScript, variables can be declared using `var`, `let`, or `const`. Each has specific use cases depending on scope and the need for immutability.

- **var**: Global or function-scoped, can be redeclared.
- **let**: Block-scoped, cannot be redeclared in the same scope.
- **const**: Block-scoped and immutable (the variable’s value cannot be reassigned).

- **Example**:
  ```javascript
  var name = "Abhinav";
  let age = 22;
  const city = "Ludhiana";

### 3. Data Types in JavaScript
JavaScript is a loosely typed language, meaning variables are not bound to a specific data type. The type of a variable can change dynamically during runtime.

#### Primitive Data Types:
- **String**: Represents text (`"Hello"`)
- **Number**: Represents both integers and floating-point numbers (`42`, `3.14`)
- **Boolean**: Represents true/false values (`true`, `false`)
- **Undefined**: A variable that has been declared but not assigned a value
- **Null**: Represents the intentional absence of any object value
- **Symbol**: A unique and immutable data type, mainly used as object property keys

#### Non-Primitive Data Types:
- **Object**: A collection of key-value pairs (`{ name: "Abhinav", age: 22 }`)
- **Array**: A list-like object used to store multiple values (`[1, 2, 3]`)

### 4. Operators in JavaScript
Operators are used to perform operations on variables and values. We explored various categories of operators, including arithmetic, comparison, logical, and assignment operators.

#### Arithmetic Operators: Perform basic mathematical operations.
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)

#### Assignment Operators: Assign values to variables.
- `=` (Assignment)
- `+=` (Addition assignment)
- `-=` (Subtraction assignment)

#### Comparison Operators: Compare two values and return a Boolean result.
- `==` (Equal to)
- `===` (Strictly equal to)
- `!=` (Not equal to)
- `<` (Less than)
- `>` (Greater than)

#### Logical Operators: Combine multiple conditions.
- `&&` (AND)
- `||` (OR)
- `!` (NOT)

#### Example:
```javascript
let a = 10;
let b = 20;

// Arithmetic operation
let sum = a + b; // 30

// Comparison
let isEqual = (a === b); // false

// Logical
let result = (a > 5 && b < 30); // true
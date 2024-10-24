# Web Development Training - Day 2

**Topics Covered**

1. **Loops in JavaScript**
   Loops are used to execute a block of code repeatedly for a specified number of iterations.

   **Types of Loops:**
   - **For Loop:**
     ```javascript
     for (let i = 0; i < 5; i++) {
       console.log(i);
     }
     ```
   - **While Loop:**
     ```javascript
     let i = 0;
     while (i < 5) {
       console.log(i);
       i++;
     }
     ```
   - **Do-While Loop:**
     ```javascript
     let i = 0;
     do {
       console.log(i);
       i++;
     } while (i < 5);
     ```

2. **Arrays in JavaScript**
   Arrays are used to store multiple values in a single variable.

   **Creating Arrays:**
   - **Literal Syntax:**
     ```javascript
     let arr = [1, 2, 3];
     ```
   - **Constructor Syntax:**
     ```javascript
     let arr = new Array(1, 2, 3);
     ```

   **Array Methods:**
   - `push()`: Adds elements to the end of the array.
     ```javascript
     arr.push(4, 5);
     ```
   - `pop()`: Removes the last element from the array.
     ```javascript
     arr.pop();
     ```
   - `shift()`: Removes the first element from the array.
     ```javascript
     arr.shift();
     ```
   - `unshift()`: Adds elements to the beginning of the array.
     ```javascript
     arr.unshift(0);
     ```
   - `indexOf()`: Returns the index of the specified element.
     ```javascript
     arr.indexOf(2);
     ```
   - `includes()`: Returns a boolean indicating whether the array includes the specified element.
     ```javascript
     arr.includes(2);
     ```

   **Array Iteration:**
   - **For Loop:**
     ```javascript
     for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]);
     }
     ```
   - **For-Of Loop:**
     ```javascript
     for (let element of arr) {
       console.log(element);
     }
     ```
   - **forEach() Method:**
     ```javascript
     arr.forEach((element) => console.log(element));
     ```

   **Multi-Dimensional Arrays:**
   - **Creating:**
     ```javascript
     let matrix = [[1, 2], [3, 4]];
     ```
   - **Accessing:**
     ```javascript
     matrix[0][1]; // 2
     ```

**Example Use Cases:**
- **Filtering:**
  ```javascript
  let filteredArr = arr.filter((element) => element > 2);
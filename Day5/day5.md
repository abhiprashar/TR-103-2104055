# Web Development Training - Day 5

**Functions** are reusable blocks of code that perform specific tasks. They help in organizing code, making it modular, and promoting code reusability.

**Declaring Functions:**

1. **Function Declaration:**
   ```javascript
   function greet(name) {
       console.log("Hello, " + name + "!");
   }

   1.  **Function Expression:**

    JavaScript

    ```
    const greet = function(name) {
        console.log("Hello, " + name + "!");
    };

    ```

    Use code [with caution.](/faq#coding)

2.  **Arrow Function:**

    JavaScript

    ```
    const greet = (name) => {
        console.log("Hello, " + name + "!");
    };

    ```

    Use code [with caution.](/faq#coding)

**Function Parameters and Arguments:**

-   **Parameters:** Variables defined within the function's parentheses to receive values.
-   **Arguments:** Values passed to the function when it's called.

**Returning Values:**

JavaScript

```
function add(a, b) {
  return a + b;
}

let result = add(5, 3); // result will be 8

```

Use code [with caution.](/faq#coding)

**Function Scope:**

-   Variables declared within a function are local to that function.
-   Variables declared outside a function are global.

**Example Use Cases:**

1.  **Creating Reusable Code Blocks:**

    JavaScript

    ```
    function calculateArea(length, width) {
        return length * width;
    }

    ```

    Use code [with caution.](/faq#coding)

2.  **Organizing Code:**

    JavaScript

    ```
    function displayGreeting() {
        greet("User");
        console.log("Welcome to the application!");
    }

    ```

    Use code [with caution.](/faq#coding)

3.  **Handling Events:**

    JavaScript

    ```
    document.getElementById("button").addEventListener("click", () => {
        alert("Button clicked!");
    });

    ```

    Use code [with caution.](/faq#coding)

4.  **Recursion:**

    JavaScript

    ```
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    ```
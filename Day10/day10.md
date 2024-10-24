# Web Development Training - Day 10

### Callbacks

A callback function is a function passed as an argument to another function. It's invoked after the outer function has completed its task or a specific event has occurred.

**Example:**

JavaScript

```
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");  
}

greet("Alice", sayGoodbye);
```
### Fetch API

The Fetch API provides a modern way to fetch resources from a server. It's a more powerful and flexible alternative to the older XMLHttpRequest.

**Basic Usage:**

JavaScript

```
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:',    error);
  });
```
**Breakdown:**

1.  **Fetch:** Sends an HTTP request to the specified URL.
2.  **.then(response => response.json())**: Parses the response as JSON.
3.  **.then(data => ...)**: Handles the parsed JSON data.
4.  **.catch(error => ...)**: Handles potential errors.

**More Complex Usage:**

JavaScript

```
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Alice',
    age: 30
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});
```

**Key Points:**

-   **Asynchronous Nature:** Both callbacks and Fetch API are asynchronous, meaning they don't block the execution of other code.
-   **Promise-Based:** Fetch API is built on promises, allowing for cleaner and more readable asynchronous code.
-   **Error Handling:** The `.catch()` block is used to handle potential errors during the fetch process.
-   **Flexibility:** Fetch API offers a wide range of options for customizing requests, including headers, body, and method.

By mastering callbacks and the Fetch API, you can build robust and efficient web applications that interact with servers and retrieve data.
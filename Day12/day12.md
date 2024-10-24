# Web Development Training - Day 12

**Event Handling in React**

Event handling in React allows you to respond to user interactions with your components. Here's a basic example:



```
import React, { useState } from 'react';

function ButtonClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return    (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>  
  );
}
```
**How it works:**

1.  **Event Handler Function:** We define a function `handleClick` that increments the `count` state.
2.  **Event Listener:** The `onClick` attribute on the button is attached to the `handleClick` function.
3.  **Event Trigger:** When the button is clicked, the `handleClick` function is called, updating the state and re-rendering the component.

**Key Points:**

-   **Synthetic Events:** React uses synthetic events, which are cross-browser abstractions of native browser events.
-   **Event Object:** The event handler function receives an event object as an argument, containing information about the event, such as the target element and the event type.
-   **Event Propagation:** Events bubble up from child elements to parent elements. You can prevent default behavior or stop event propagation using `preventDefault()` and `stopPropagation()`.

**More Complex Event Handling:**

-   **Form Handling:**

    

    ```
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
    };

    return (
      <form onSubmit={handleSubmit}>
        {/* Form elements */}
        <button type="submit">Submit</button>
      </form>
    );
    ```
    *Custom Events*: You can create custom events and dispatch them using the dispatchEvent method.
Event Listeners: For more advanced scenarios, you can use addEventListener to attach event listeners directly to DOM elements.
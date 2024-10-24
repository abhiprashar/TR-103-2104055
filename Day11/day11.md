# Web Development Training - Day 11

### Components and Props

**Components** are the building blocks of React applications. They encapsulate UI elements and their behavior.

**Props** are used to pass data from parent components to child components. They are read-only in child components.

JavaScript

```
// Parent Component
function ParentComponent() {
  const name = 'Alice';
  return (
    <ChildComponent name={name} />
  );
}

// Child Component
function ChildComponent({ name }) {
  return (
    <div>Hello, {name}!</div>
  );
}
```
### Hooks

**Hooks** are functions that let you use state and other React features without writing class components.

**useState Hook**

-   Manages state within functional components.
-   Returns an array with the current state value and a function to update it.


```
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>  
    </div>  
  );
}
```
**useEffect Hook**

-   Performs side effects in functional components.
-   Can be used to fetch data, set up subscriptions, or trigger actions based on state changes.



```
import { useState, useEffect } from 'react';

function DataFetchingExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <p>{data.message}</p>  
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```



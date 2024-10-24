# Web Development Training - Day 23

# useCallback Hook

The `useCallback` hook is a built-in React hook that returns a memoized version of a callback function. It is used to optimize performance by preventing unnecessary re-creations of functions on each render, especially in scenarios where passing functions as props can cause child components to re-render.

## Table of Contents

- [Introduction](#introduction)
- [When to Use useCallback](#when-to-use-usecallback)
- [Using the useCallback Hook](#using-the-usecallback-hook)
- [Example](#example)
- [Conclusion](#conclusion)

## Introduction

In React, functions defined inside a component are recreated on every render. This can lead to performance issues, especially when these functions are passed down to child components. The `useCallback` hook allows you to memoize functions, ensuring they are only recreated when their dependencies change.

## When to Use useCallback

- When passing a function to a child component that relies on reference equality to prevent re-renders.
- When defining event handlers that depend on props or state.
- When optimizing performance in large applications with complex rendering logic.

## Using the useCallback Hook

The `useCallback` hook takes two arguments: a function and an array of dependencies. It returns the memoized function.

### Syntax

```javascript
const memoizedCallback = useCallback(() => {
  // function logic
}, [dependencies]);

### 1\. Basic Example
import React, { useState, useCallback } from 'react';

const Counter = ({ increment }) => {

  console.log('Counter rendered');

  return (

    <div>

      <button onClick={increment}>Increment</button>

    </div>

  );

};

const App = () => {

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {

    setCount((prevCount) => prevCount + 1);

  }, []); // Dependencies: none, so it won't change on re-renders

  return (

    <div>

      <h1>Count: {count}</h1>

      <Counter increment={increment} />

    </div>

  );

};

export default App;

### 2\. Explanation

In the above example:

-   The `increment` function is defined using `useCallback`, which means it will be memoized and not recreated on every render of the `App` component.
-   The `Counter` component receives the `increment` function as a prop. Since the function reference does not change, the `Counter` component will not re-render unnecessarily.
-   If the `increment` function had not been memoized, clicking the button would cause the `Counter` component to re-render each time the `App` component re-renders.
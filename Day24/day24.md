# Web Development Training - Day 24

# Form Handling in React

Form handling in React is a common task that involves managing user input, validation, and submission of form data. React's component-based architecture provides a structured way to handle forms, ensuring that data flows in a predictable manner.

## Table of Contents

- [Introduction](#introduction)
- [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components)
- [Handling Form Input](#handling-form-input)
- [Form Submission](#form-submission)
- [Form Validation](#form-validation)
- [Example](#example)
- [Conclusion](#conclusion)

## Introduction

Forms are essential in web applications for capturing user data. In React, you can manage forms using two primary methods: controlled components and uncontrolled components.

## Controlled vs Uncontrolled Components

### Controlled Components

Controlled components are those where React manages the form data. The input value is set by the component's state, and any changes to the input are handled through state updates.

### Uncontrolled Components

Uncontrolled components store form data in the DOM. You can access the value using a ref but do not control the state from React. This approach is less common in React applications.

## Handling Form Input

To handle form input in a controlled component, you typically use the `useState` hook to manage the input values.

### Example of Controlled Input

```javascript
import React, { useState } from 'react';

const ControlledForm = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
    </form>
  );
};

export default ControlledForm;

Form Validation
---------------

Form validation can be handled in several ways, such as:

-   Client-side validation before submission.
-   Displaying error messages based on input values.
-   Using libraries like Formik or Yup for complex validations.

Example of Basic Validation
const [error, setError] = useState('');

const handleSubmit = (event) => {

  event.preventDefault();

  if (!name) {

    setError('Name is required!');

  } else {

    setError('');

    console.log('Submitted Name:', name);

  }

};

return (

  <form onSubmit={handleSubmit}>

    <label>

      Name:

      <input type="text" value={name} onChange={handleChange} />

    </label>

    {error && <span style={{ color: 'red' }}>{error}</span>}

    <button type="submit">Submit</button>

  </form>

);
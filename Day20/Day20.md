# Web Development Training - Day 20

# useContext Hook

The `useContext` hook is a built-in React hook that allows you to access context values in functional components. It simplifies the way components share data without the need for prop drilling, making your code cleaner and more manageable.

## Table of Contents

- [Introduction](#introduction)
- [Creating Context](#creating-context)
- [Using the useContext Hook](#using-the-usecontext-hook)
- [Example](#example)
- [Conclusion](#conclusion)

## Introduction

React's Context API provides a way to share values between components without having to pass props down manually through every level of the component tree. The `useContext` hook allows you to consume context values directly in functional components.

## Creating Context

To use the `useContext` hook, you first need to create a context using the `createContext` function.

```javascript
import React, { createContext } from 'react';

const MyContext = createContext();

Conclusion
The `useContext` hook is a powerful tool for managing shared state in React applications. It allows for cleaner and more efficient data management by reducing the need for prop drilling.
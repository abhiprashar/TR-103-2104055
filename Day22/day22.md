# Web Development Training - Day 22

### Conditional Rendering

**Conditional rendering** allows you to render different UI elements based on specific conditions.

**Using `if` statements:**

JavaScript

```
function ConditionalGreeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}
```
**Using the ternary operator:**

JavaScript

```
function ConditionalGreeting({ isLoggedIn }) {
  return (
    <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>
  );
}
```

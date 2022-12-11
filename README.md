# Introduction to React states and hooks

[Slides](https://docs.google.com/presentation/d/1-qi_PGlNdoUKZYAc1VtOXzJiKrU4AF7lf46AFc4nbEo/edit?usp=sharing)

## Part 2.
- How to fetch data from backend?
- Fetch is asynchronous
- useEffect and component lifecycle
- useEffect as synchronization
- Loading animation
- Pagination


### Syntax of useEffect

```javascript
useEffect(() => {
  // side-effect
  // ...

  return function cleanup() {
    // side-effect cleanup
    // ...

  };
}, [dependencies])

```





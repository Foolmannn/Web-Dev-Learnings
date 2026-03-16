You have to use an api and display the data in the form of a card under a container. All the data points reurned bu the API should be converted to a card 

Use this API : https://jsonplaceholder.typicode.com/

Hint:  

Errors Solutions:
It looks like you're running into a classic React "gotcha." Directly pushing data into a variable like `let users = []` inside a component won't work because React **re-renders** the entire function whenever state changes, wiping out your local variables.

To fix this, you need to store that API data in **State** and fetch it inside a **`useEffect`** hook to prevent the API call from running in an infinite loop.

---



### Why your original code wasn't working:

* **The Infinite Loop:** In your snippet, the `fetch` is sitting in the main body of the function. Every time the component renders, it fetches. If you were to update state inside that fetch, it would trigger a re-render, which would trigger another fetch... and so on.
* **State vs. Variables:** In React, standard variables (like `let users = []`) are "forgotten" every time the component updates. `useState` is the only way to make data "stick" between renders.
* **Asynchronous Timing:** When you `console.log(users)` right after a fetch call, it will often show as empty because the code doesn't wait for the API to finish before moving to the next line. Using State handles this timing for you.

### Key Tips for the Future:

1. **Always use `useEffect**` for side effects like API calls.
2. **Always use `.map()**` to display arrays in your JSX.
3. **Always include a `key**` (like `user.id`) when rendering lists so React can stay organized.

**Would you like me to show you how to add a "Search" filter to this user list now that the data is in state?**

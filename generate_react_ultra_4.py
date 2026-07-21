import os

artifact_path = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66\react_masterclass_notes_detailed.md"

batch_4 = """
---

## 🌟 Module 13: Advanced Features

### 1. Custom Hooks
If you find yourself writing the exact same `useState` and `useEffect` logic in 5 different components (like a timer, fetching window dimensions, or handling form inputs), you can extract that logic into your own custom, reusable Hook! 
Custom hooks MUST start with the word `use`.

```jsx
// 1. Building our own custom hook to track the window size!
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener!
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width; // We simply return the piece of state!
}

// 2. Using the custom hook in ANY component instantly:
const App = () => {
  const width = useWindowWidth();
  return <h1>The window is exactly {width}px wide right now!</h1>;
};
```

### 2. Higher Order Components (HOC)
An advanced, older pattern where a function takes a Component as an argument, and returns a brand new, "upgraded" Component with extra props injected into it. While mostly replaced by Custom Hooks today, it is still heavily asked in senior interviews and used in some third-party libraries.

### 3. Environment Variables (.env)
**CRITICAL SECURITY RULE:** Never hardcode API Keys, database passwords, or secret tokens directly into your React code! React compiles your code into plain JavaScript that anyone can read by simply pressing F12 and opening the network tab.
In Vite, you create a hidden `.env` file at the root of your project:
```env
# Only variables prefixed with VITE_ are exposed to your React code
VITE_STRIPE_PUBLIC_KEY=pk_test_12345
```
You securely access it anywhere in your React code using: `import.meta.env.VITE_STRIPE_PUBLIC_KEY`.

---

## 🚀 Module 14: React with TypeScript

JavaScript is "Loosely Typed", meaning a variable can be a String one second, and an Array the next. This causes thousands of runtime crashes when a component expects a string but accidentally receives an object.
**TypeScript** acts as an impenetrable armor for React, forcing you to define exactly what your props and state look like *before* the code is even allowed to compile.

### 1. Typing Props, State, and Events
```tsx
import React, { useState } from 'react';

// 1. Define exactly what the Props must look like using an Interface!
interface ButtonProps {
    text: string;
    isActive: boolean;
    // A function that takes no arguments and returns nothing
    onClick: () => void; 
}

// 2. Attach the Interface to the Component. 
// If another developer forgets to pass 'isActive', their code will NOT compile!
const StrictButton: React.FC<ButtonProps> = ({ text, isActive, onClick }) => {
    return (
        <button onClick={onClick} className={isActive ? 'btn-active' : 'btn-idle'}>
            {text}
        </button>
    );
};

// 3. Typing State
const Counter = () => {
    // Force the state to be either a number OR null. Nothing else is allowed!
    const [count, setCount] = useState<number | null>(0);
    return <div>{count}</div>;
};

// 4. Typing Events
const Form = () => {
    // Specifically type the event as a Form Submission Event
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return <form onSubmit={handleSubmit}></form>;
};
```

---

## 📝 Module 15: Practice & Mastery

To truly master React, you cannot just read notes. You must build components from scratch until the hooks become pure muscle memory.

### 1. Practice Exercises
1.  **Props Practice:** Build a reusable `ProfileCard` component that accepts `title`, `description`, and `imageUrl` props. Render 3 different cards in your App.
2.  **State Practice:** Build a Toggle switch that changes the background color of the entire screen from Light Mode to Dark Mode, and changes the button text from "Dark" to "Light".
3.  **API Practice:** Use `useEffect`, `useState`, and Axios to fetch 10 random user profiles from `https://randomuser.me/api/?results=10` and display them in a grid. Make sure to implement a Loading spinner while waiting for the data!
4.  **Routing Practice:** Build a NavBar with 3 links (Home, About, Contact). Setup React Router to navigate between them without reloading the page. Ensure the active link turns blue.

### 2. Common React Interview Questions
*   *What is the Virtual DOM and how does the reconciliation algorithm work?*
*   *What is the fundamental difference between Prop Drilling and the Context API?*
*   *Why can't you update State directly (e.g., `count = 2`)? What happens under the hood when you call `setCount()`?*
*   *What is the purpose of the Dependency Array in useEffect? What happens if you forget it?*
*   *What is the strict difference between useMemo and useCallback?*
*   *How do you handle memory leaks in React when a component unmounts?*

---

## 💻 Module 16: Projects

Building real-world projects is the only way to bridge the gap between "knowing syntax" and "being a professional developer". Start small, and work your way up to enterprise architecture.

### Beginner Projects (Focus on Core Hooks)
*   **Counter App:** Master `useState` and simple event handlers.
*   **To-Do App:** Master Arrays in State, the `.map()` function, filtering arrays, and generating unique keys.
*   **Weather App:** Master API Fetching using Axios, handling Promises, and `useEffect`.

### Intermediate Projects (Focus on Architecture)
*   **Movie Search App:** Master Search input filtering, debouncing inputs to prevent API spam, and handling empty states (404 Not Found).
*   **Expense Tracker:** Master complex state management, passing callbacks up to parents, and complex mathematical aggregations using `.reduce()`.
*   **Quiz App:** Master multi-step conditional state rendering, scoring logic, and component unmounting.

### Advanced Projects (Portfolio Ready)
*   **E-commerce Website:** Master Redux Toolkit, React Router, global Cart State management, integrating a payment gateway (Stripe), and JWT Authentication.
*   **Social Media UI:** Master complex Context API structures, deeply nested routing, infinite scrolling pagination, and optimistic UI updates.
*   **Admin Dashboard:** Master Chart.js integration, complex Data Tables with sorting and pagination, and highly Protected Routes that kick out unauthenticated users.

***End of the Ultimate React Masterclass***
"""

with open(artifact_path, "a", encoding="utf-8") as f:
    f.write(batch_4)

print("Batch 4 (Modules 13-16) written. Full ultra-detailed artifact generated!")

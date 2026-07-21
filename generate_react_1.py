import os

artifact_path = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66\react_masterclass_notes_detailed.md"

batch_1 = """# ⚛️ React Masterclass (Ultimate Detailed Edition)

## Module 1: Introduction to React

### 1. Introduction to React & History
React was created by Jordan Walke, a software engineer at Facebook, in 2011. Facebook was struggling with maintaining their massive, complex UI (like the Facebook Newsfeed), where changing a small piece of data required reloading or manually updating massive chunks of the DOM. React was officially open-sourced in 2013 and fundamentally changed how the world builds web applications.

### 2. Features of React & Why React?
*   **Declarative UI:** You simply describe *what* you want the UI to look like based on the current data (State), and React handles the messy DOM manipulation to make it happen. 
*   **Component-Based Architecture:** Imagine building a massive spaceship out of Legos. Each Lego piece is a 'Component'. You build a button once, and you can reuse it across 100 different pages.
*   **Unidirectional Data Flow:** Data always flows down from Parent to Child. This makes debugging incredibly easy because you always know exactly where data is coming from.

### 3. React vs JavaScript & Angular vs Vue
*   **Vanilla JavaScript:** You have to manually grab elements (`document.getElementById`), manually attach listeners, and manually update the text. It's like building a car by hand.
*   **React:** A Library. It gives you the engine and wheels, but you can build the car however you want.
*   **Angular:** A complete Framework by Google. It gives you the entire factory. It's rigid, heavy, but highly structured for enterprise.
*   **Vue:** A progressive framework that takes the best parts of Angular (templates) and React (components) and combines them into an easy-to-learn package.

### 4. The Virtual DOM (The Secret to Speed)
The real browser DOM is extremely heavy. If you have a list of 10,000 items and you change the text of one item, vanilla JS might repaint the entire list.
React creates a **Virtual DOM**—a lightweight, invisible clone of the real DOM in memory. 
When data changes, React:
1. Updates the Virtual DOM instantly.
2. Compares the new Virtual DOM to a snapshot of the old Virtual DOM (This is called **"Diffing"**).
3. Finds the *exact* element that changed.
4. Updates ONLY that specific element on the real browser screen (This is called **"Reconciliation"**).

### 5. Installing React & Vite Setup
Create React App (CRA) is obsolete. The modern standard is **Vite**, an ultra-fast build tool that starts your server in milliseconds.
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### 6. JSX, Fragments & Comments
**JSX (JavaScript XML)** allows you to write HTML directly inside JavaScript functions.
```jsx
function App() {
  // Comments in JSX look like this!
  {/* This is a JSX Comment */}
  
  // A Fragment <>...</> is used because a component can only return ONE parent element!
  return (
    <>
      <h1>Welcome to React</h1>
      <p>This is JSX!</p>
    </>
  );
}
```

---

## 📘 Module 2: React Fundamentals

### 1. Components (Functional vs Class)
In the old days, we used massive, clunky Class Components. Today, 99% of modern React uses **Functional Components**.
A Functional Component is simply a JavaScript function that returns JSX.
```jsx
// Modern Functional Component
const Greeting = () => {
  return <h1>Hello, Developer!</h1>;
};
```

### 2. Props & Props Destructuring
**Props** (short for Properties) are how you pass data from a Parent Component to a Child Component. Think of them as custom HTML attributes.
Props are strictly **Read-Only**. A child cannot modify its own props.

```jsx
// Destructuring props directly in the function parameters!
const UserProfile = ({ name, age, role }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

// Parent Component
const App = () => {
  return <UserProfile name="Sarah" age={28} role="Senior Engineer" />;
};
```

### 3. Children Props
If you want to pass entire blocks of HTML or other components *inside* another component, you use `children`.
```jsx
// The Wrapper Component
const LayoutCard = ({ children }) => {
  return <div className="fancy-border-shadow">{children}</div>;
};

// Usage
const App = () => {
  return (
    <LayoutCard>
      <h1>This text is passed as a child!</h1>
      <button>Click Me</button>
    </LayoutCard>
  );
};
```

### 4. Conditional Rendering & Lists with Keys
You can use standard JavaScript logic (`if/else`, ternary operators, and `.map()`) directly inside JSX.
When mapping over arrays to create lists, you **MUST** provide a unique `key` prop so the Virtual DOM can track which specific items are added, changed, or removed.

```jsx
const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        // The unique 'key' is mandatory!
        <li key={task.id}>
          {task.title} - {task.isCompleted ? "✅ Done" : "⏳ Pending"}
        </li>
      ))}
    </ul>
  );
};
```

---

## ⚡ Module 3: State Management

### 1. What is State?
If Props are a component's "DNA" passed down by its parents, **State** is the component's personal "Memory".
When a component's State changes, React automatically re-runs the function and updates the UI.

### 2. useState() & Updating State
The `useState` hook returns an array with two items: the current state value, and the function to update it.
```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      {/* Never modify state directly (count = count + 1). ALWAYS use setCount! */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

### 3. Object & Array State
When updating an object or array in State, you must **NEVER mutate the original**. You must create a brand new copy using the Spread Operator (`...`), modify the copy, and pass the copy to the setter function.
```jsx
const ProfileEditor = () => {
  const [user, setUser] = useState({ name: "Alex", age: 25 });

  const updateAge = () => {
    // WRONG: user.age = 26; setUser(user);
    
    // CORRECT: Spread the old user object, and overwrite the age property!
    setUser({ ...user, age: 26 });
  };

  return <button onClick={updateAge}>Happy Birthday!</button>;
};
```

### 4. Lifting State Up
If two sibling components need to share the same data, you cannot pass data sideways. You must move the state UP to their closest common parent component, and pass the state down as Props.

---

## 🔄 Module 4: Events & Forms

### 1. Event Handling & The Event Object
React events are extremely similar to standard HTML events, but they are camelCased (`onClick`, `onChange`, `onSubmit`). React passes a Synthetic Event object to the handler.
```jsx
const ButtonLogger = () => {
  const handleClick = (e) => {
    console.log("Button coordinates:", e.clientX, e.clientY);
  };
  return <button onClick={handleClick}>Log Coordinates</button>;
};
```

### 2. Controlled vs Uncontrolled Components
*   **Uncontrolled Component:** A standard HTML input where the browser DOM manages the text.
*   **Controlled Component:** An input where React State completely controls the value. This is the absolute standard for React forms.

```jsx
const ControlledForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from refreshing!
    alert(`Submitting: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* The input's value is locked to React State. It can ONLY change if the State changes! */}
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Send</button>
    </form>
  );
};
```

---

## 🎯 Module 5: Hooks

### 1. Rules of Hooks
1.  **Only call Hooks at the top level.** Never call them inside loops, conditions, or nested functions. React relies on the exact order in which hooks are called.
2.  **Only call Hooks from React Functions.** (Functional Components or Custom Hooks).

### 2. useEffect()
`useEffect` lets you perform "Side Effects" in your component. This means anything that reaches outside the component, such as fetching data from an API, setting up a WebSocket, or interacting with the `window` object.

It takes two arguments: A function, and a Dependency Array.
```jsx
import { useEffect, useState } from 'react';

const DataFetcher = ({ userId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code runs whenever the component mounts, OR when 'userId' changes.
    fetch(`https://api.example.com/users/${userId}`)
      .then(res => res.json())
      .then(json => setData(json));
      
    // Cleanup function (Runs when component unmounts, or before running the effect again)
    return () => {
      console.log("Cleanup: Canceling previous network requests...");
    };
  }, [userId]); // The Dependency Array!

  return <div>{data ? data.name : "Loading..."}</div>;
};
```

### 3. useRef()
`useRef` is a "safe box" that holds a mutable value. Unlike State, changing a Ref **does not trigger a re-render**. 
It is primarily used to store direct references to HTML DOM elements.
```jsx
import { useRef } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  const focusMe = () => {
    // Directly manipulating the DOM element without triggering a React render cycle!
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  };

  return (
    <>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={focusMe}>Focus Input</button>
    </>
  );
};
```
"""

with open(artifact_path, "w", encoding="utf-8") as f:
    f.write(batch_1)

print("Batch 1 (Modules 1-5) written.")

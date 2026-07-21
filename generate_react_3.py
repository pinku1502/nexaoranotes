import os

artifact_path = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66\react_masterclass_notes_detailed.md"

batch_3 = """
## 📦 Module 11: State Management Libraries

When building a massive Enterprise app (like Netflix or Facebook), Context API becomes too slow and messy. You need dedicated tools to manage your global State.

### 1. Redux & Redux Toolkit (RTK)
Redux is the industry-standard heavyweight champion of state management.
It works on a strict 3-part architecture:
1.  **The Store:** The giant, central vault that holds all the app's state.
2.  **The Action:** A formal request ticket you submit when you want to change data.
3.  **The Reducer:** The strict security guard that takes your Action ticket, opens the vault, and safely updates the State.
**Redux Toolkit (RTK)** is the modern way to write Redux, cutting out 80% of the old boilerplate code.

### 2. Zustand
Zustand is the modern, ultra-lightweight alternative to Redux. It provides the exact same global state power, but requires zero boilerplate and is incredibly simple to set up.

---

## 🧪 Module 12: Testing

### 1. React Testing Library & Jest
You must write automated code to test your code. 
**Jest** runs the tests. **React Testing Library** renders your components in an invisible browser and lets your test interact with them (clicking buttons, reading text) exactly like a real user would.

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter when button is clicked', () => {
    // 1. Render the component
    render(<Counter />);
    
    // 2. Find the button and the text
    const button = screen.getByText('Increment');
    const text = screen.getByText('Current Count: 0');
    
    // 3. Simulate a user clicking the button
    fireEvent.click(button);
    
    // 4. Assert that the text successfully changed!
    expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
});
```

---

## 🌟 Module 13: Advanced Features

### 1. Custom Hooks
If you find yourself writing the exact same `useState` and `useEffect` logic in 5 different components, you can extract that logic into your own Custom Hook! Custom hooks MUST start with the word `use`.

```jsx
// Building our own custom hook to track the window size!
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width; // We return the piece of state!
}

// Using the custom hook in any component:
const App = () => {
  const width = useWindowWidth();
  return <h1>The window is {width}px wide!</h1>;
};
```

### 2. Higher Order Components (HOC)
An advanced pattern where a function takes a Component as an argument, and returns a new, "upgraded" Component. (Mostly replaced by Custom Hooks today, but still asked in interviews).

### 3. Environment Variables
Never hardcode API Keys into your React code! Anyone can inspect the network tab and steal them.
In Vite, you create a `.env` file at the root of your project:
```env
VITE_API_KEY=super_secret_12345
```
You access it in your React code using: `import.meta.env.VITE_API_KEY`.

---

## 🚀 Module 14: React with TypeScript

JavaScript is loosely typed, meaning a variable can be a String one second, and an Array the next. This causes thousands of runtime crashes. **TypeScript** acts as an impenetrable armor for React, forcing you to define exactly what your props and state look like *before* compiling.

### 1. Typing Props & State
```tsx
import React, { useState } from 'react';

// Define exactly what the Props must look like using an Interface!
interface ButtonProps {
    text: string;
    isActive: boolean;
    onClick: () => void; // A function that returns nothing
}

// If a developer forgets to pass 'isActive', TypeScript throws a massive error!
const StrictButton: React.FC<ButtonProps> = ({ text, isActive, onClick }) => {
    return (
        <button onClick={onClick} style={{ background: isActive ? 'green' : 'gray' }}>
            {text}
        </button>
    );
};
```

---

## 📝 Module 15: Practice & Mastery

To truly master React, you must build components from scratch until the hooks become muscle memory.

### 1. Practice Exercises
1.  **Props Practice:** Build a `Card` component that accepts `title`, `description`, and `imageUrl` props. Render 3 different cards.
2.  **State Practice:** Build a Toggle switch that changes the background of the screen from Light Mode to Dark Mode.
3.  **API Practice:** Use `useEffect` and `fetch` to grab random user data from `https://randomuser.me/api/` and display their profile picture and name.
4.  **Routing Practice:** Build a NavBar with 3 links (Home, About, Contact). Setup React Router to navigate between them without reloading the page.

### 2. Common Interview Questions
*   *What is the Virtual DOM and how does it work?*
*   *What is the difference between Prop Drilling and the Context API?*
*   *Why can't you update State directly (e.g., `count = 2`)?*
*   *What is the purpose of the Dependency Array in useEffect?*
*   *What is the difference between useMemo and useCallback?*

---

## 💻 Module 16: Projects

Building real-world projects is the only way to bridge the gap between "knowing syntax" and "being a developer". 

### Beginner Projects
*   **Counter App:** Master `useState`.
*   **To-Do App:** Master Arrays in State, `.map()`, and filtering.
*   **Weather App:** Master API Fetching and `useEffect`.

### Intermediate Projects
*   **Movie Search App:** Master Search filtering, debouncing, and API integration.
*   **Expense Tracker:** Master complex state management and mathematical aggregations.
*   **Quiz App:** Master multi-step state and component unmounting.

### Advanced Projects
*   **E-commerce Website:** Master Redux Toolkit, React Router, Cart State, and Stripe Integration.
*   **Social Media UI:** Master complex Context API, nested routing, and infinite scrolling.
*   **Admin Dashboard:** Master Chart.js integration, Data Tables, and Authentication/Protected Routes.

***End of React Masterclass***
"""

with open(artifact_path, "a", encoding="utf-8") as f:
    f.write(batch_3)

print("Batch 3 (Modules 11-16) written. Full artifact generated!")

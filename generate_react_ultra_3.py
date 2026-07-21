import os

artifact_path = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66\react_masterclass_notes_detailed.md"

batch_3 = """
---

## 🏛️ Module 9: Advanced React

### 1. Prop Drilling vs Context API (The Teleporter)
**Prop Drilling** is the nightmare scenario where you have data (like the logged-in User's ID) sitting at the very top of your app (in `App.jsx`), and a tiny `Avatar` component needs that ID 15 layers down. Passing that data manually as a Prop through 14 intermediate components that absolutely don't care about the User ID makes your code incredibly brittle and hard to read.
The **Context API** solves this by creating a global "Teleporter".

```jsx
import { createContext, useContext, useState } from 'react';

// 1. Create the Context (The Blueprint for the Teleporter Machine)
const AuthContext = createContext();

const App = () => {
  const [currentUser, setCurrentUser] = useState("Pinku");

  return (
    // 2. Wrap your application in the Provider, and load the data into the 'value' payload!
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <DashboardLayout />
    </AuthContext.Provider>
  );
};

// ... Imagine 10 layers of components between App and UserAvatar ...

const UserAvatar = () => {
  // 3. Receive the data instantly anywhere in the app, skipping all middle-men!
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  
  return (
    <div className="avatar-widget">
      <img src={`/avatars/${currentUser}.png`} alt="Avatar" />
      <button onClick={() => setCurrentUser("Guest")}>Log Out</button>
    </div>
  );
};
```

### 2. Error Boundaries
If a JavaScript runtime error occurs inside a child React component (e.g., trying to read a property of `undefined`), the entire React tree will unmount, causing a "White Screen of Death" for the user. 
Error Boundaries are specialized wrapper components that catch the crash, prevent it from bringing down the entire app, and display a fallback UI (like an "Oops, something broke!" message) while keeping the rest of the application fully functional.

### 3. Portals
Sometimes you need a component to visually break out of its parent container and render at the very top of the physical HTML DOM tree (attached directly to the `<body>` tag), while still acting like a React child behind the scenes. This is absolutely critical for Modals, Tooltips, and Dropdowns to prevent CSS `overflow: hidden` properties on parent containers from chopping off your popup menus!
You use `ReactDOM.createPortal(child, container)` to achieve this.

---

## ⚙️ Module 10: Performance Optimization

### 1. React.memo() (Component Caching)
When a Parent Component re-renders, React automatically forces **ALL** of its nested Child Components to re-render, even if the Child's specific props didn't change! If a child component is a massive, complex data table, this re-render will freeze the browser.
Wrapping a component in `React.memo` caches the component. It tells React: "Do NOT re-render this Child unless one of its incoming Props actually changes."

### 2. useMemo() & useCallback()
*   `useMemo`: Caches the *result* of a slow, heavy mathematical function (like sorting 10,000 arrays) so it doesn't have to waste CPU power recalculating on every single keystroke.
*   `useCallback`: Caches a *function definition* so it doesn't get destroyed and recreated from scratch on every render. This is crucial when passing functions down as Props to a component that is wrapped in `React.memo`.

### 3. Lazy Loading & Code Splitting (Suspense)
If your React app has 50 massive pages, a user visiting the homepage is forced to download all 50 pages of JavaScript before the site loads. This makes the initial load time extremely slow.
`React.lazy()` allows you to "Code Split". It tells Webpack to chop your app into smaller chunks, and only download the code for the Dashboard page when the user actually clicks the Dashboard link!
While the browser spends a few milliseconds downloading that new chunk, you wrap the route in a `<Suspense fallback={<Spinner />}>` boundary to show a loading animation.

---

## 📦 Module 11: State Management Libraries

When building a massive Enterprise application (like Netflix, Airbnb, or Facebook), the Context API becomes too slow and messy for global state because whenever Context changes, every component subscribed to it re-renders. You need specialized, dedicated tools.

### 1. Redux & Redux Toolkit (RTK)
Redux is the industry-standard heavyweight champion of global state management.
It works on a strict, predictable 3-part architecture:
1.  **The Store:** The giant, central vault that holds all the app's state. You cannot change this directly.
2.  **The Action:** A formal, written request ticket you submit (Dispatch) when you want to change data (e.g., `{ type: 'cart/addItem', payload: 'Apple' }`).
3.  **The Reducer:** The strict security guard function that takes your Action ticket, opens the vault, updates the State safely using a copy, and closes the vault.

**Redux Toolkit (RTK)** is the modern standard way to write Redux. It cuts out 80% of the agonizing boilerplate code required by older versions of Redux, wrapping everything in easy `createSlice()` functions.

### 2. Zustand
Zustand (German for "State") is the modern, ultra-lightweight alternative to Redux. It provides the exact same global state power and predictability, but requires zero boilerplate, no wrappers, and is incredibly simple to set up in just 3 lines of code.

---

## 🧪 Module 12: Testing

### 1. React Testing Library & Jest
You must write automated code to test your React code. If you add a new feature, you need to know immediately if it broke an older feature.
**Jest** is the test runner that actually executes the tests. **React Testing Library (RTL)** renders your components in an invisible browser memory environment and lets your test script interact with them (clicking buttons, reading text) exactly like a real human user would.

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

// A descriptive test block
test('increments item count when Add button is clicked', () => {
    // 1. Render the component in the invisible DOM
    render(<ShoppingCart />);
    
    // 2. Find the exact button and text elements on the screen
    const button = screen.getByRole('button', { name: /Add Apple/i });
    const textElement = screen.getByText(/Items in Cart: 0/i);
    
    // 3. Ensure it starts at 0
    expect(textElement).toBeInTheDocument();
    
    // 4. Simulate a real human clicking the button!
    fireEvent.click(button);
    
    // 5. Assert that the text successfully changed to 1!
    expect(screen.getByText(/Items in Cart: 1/i)).toBeInTheDocument();
});
```
"""

with open(artifact_path, "a", encoding="utf-8") as f:
    f.write(batch_3)

print("Batch 3 (Modules 9-12) written.")

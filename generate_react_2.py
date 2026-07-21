import os

artifact_path = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66\react_masterclass_notes_detailed.md"

batch_2 = """
## 🌍 Module 6: Routing (React Router)

### 1. SPA & React Router Setup
Traditional websites request a new HTML page from the server every time you click a link. React is a Single Page Application (SPA). You download the HTML page ONCE, and React fakes the navigation by instantly swapping out components.
To make the URL change in the browser bar, we use **React Router**.
```bash
npm install react-router-dom
```

### 2. Routes, Route, and Link
*   **BrowserRouter:** Wraps the entire app to enable routing.
*   **Routes:** Acts like a giant `switch` statement.
*   **Route:** Defines a single path and which component to render.
*   **Link:** Replaces the HTML `<a>` tag. (An `<a>` tag causes a page reload, which breaks the SPA! Always use `<Link>`).

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<PageNotFound />} /> {/* Catch-all 404 Route */}
      </Routes>
    </BrowserRouter>
  );
};
```

### 3. useParams & useNavigate
*   `useParams`: Used to grab dynamic variables out of the URL (like `/users/123`).
*   `useNavigate`: Used to force the user to a new page via code (like after a successful login).

```jsx
import { useParams, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams(); // Grabs '123' from the URL
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic...
    navigate('/login'); // Redirect to login page instantly!
  };

  return <h1>Viewing Profile for User {id}</h1>;
};
```

---

## 🌐 Module 7: API Integration

### 1. Fetch API & Axios
In React, you fetch data exactly like you do in vanilla JavaScript, but you typically wrap the fetch call inside a `useEffect` hook so it runs when the component mounts.
**Axios** is a popular library that makes fetching easier by automatically converting data to JSON and handling errors better than the native Fetch API.

```bash
npm install axios
```

### 2. Fetching Data with Loading & Error States
A robust API call in React requires managing 3 separate pieces of State: The Data, The Loading Status, and The Error Status.

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const PostViewer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Whether success or failure, we are no longer loading!
      }
    };
    
    fetchPosts();
  }, []);

  if (loading) return <h2>Spinning Wheel Loader...</h2>;
  if (error) return <h2 style={{color: 'red'}}>Error: {error}</h2>;

  return (
    <div>
      {posts.map(post => <h3 key={post.id}>{post.title}</h3>)}
    </div>
  );
};
```

---

## 🎨 Module 8: Styling in React

### 1. Inline CSS & Standard CSS
Inline CSS in React uses a JavaScript object instead of a string, and properties are camelCased.
```jsx
// Inline Styling
const Box = () => {
  return <div style={{ backgroundColor: 'red', fontSize: '20px' }}>Hello</div>;
};
```

### 2. CSS Modules
Standard CSS is global. If you create `.btn { color: blue; }` in one file, it affects EVERY button in your entire app!
**CSS Modules** solve this by locally scoping the CSS to the component.
1. Create `Button.module.css`.
2. Import it: `import styles from './Button.module.css';`.
3. Use it: `<button className={styles.btn}>`.

### 3. Tailwind CSS
Tailwind is the modern industry standard for React styling. It uses atomic utility classes so you never have to write a custom CSS file again.
```jsx
const TailwindCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <h1 className="text-xl font-bold text-slate-800">Beautiful Card</h1>
    </div>
  );
};
```

---

## 🏛️ Module 9: Advanced React

### 1. Context API (The Teleporter)
If you have data (like the logged-in User's name) in the `App` component, and a `SidebarMenu` component needs it, you might have to pass that Prop through 5 intermediate components that don't care about it. This is called **Prop Drilling**.
The **Context API** solves this by creating a global "Teleporter".

```jsx
import { createContext, useContext, useState } from 'react';

// 1. Create the Context (The Teleporter Machine)
const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("Pinku");

  return (
    // 2. Wrap your app and provide the data
    <UserContext.Provider value={user}>
      <DeeplyNestedComponent />
    </UserContext.Provider>
  );
};

// ...5 layers deep...
const DeeplyNestedComponent = () => {
  // 3. Receive the data instantly!
  const username = useContext(UserContext);
  return <h1>Welcome, {username}!</h1>;
};
```

### 2. Error Boundaries
If a JavaScript error occurs inside a React component, the entire screen will go completely blank (the "White Screen of Death"). Error Boundaries act like a safety net that catches the crash and displays a fallback UI (like "Oops, something went wrong!") instead of crashing the whole app.

### 3. Portals
Sometimes you need a component (like a Modal or Tooltip) to visually break out of its parent container and render at the very top of the DOM hierarchy (attached directly to `<body>`), while still acting like a React child. `ReactDOM.createPortal` handles this.

---

## ⚙️ Module 10: Performance Optimization

### 1. React.memo()
When a Parent Component re-renders, React automatically forces ALL of its Child Components to re-render, even if the Child's props didn't change! This is a massive waste of processing power.
Wrapping a component in `React.memo` caches the component. It tells React: "Only re-render this Child if its specific Props change."

### 2. useMemo() & useCallback()
*   `useMemo`: Caches the *result* of a slow, heavy mathematical function so it doesn't have to recalculate on every render.
*   `useCallback`: Caches a *function definition* so it doesn't get recreated from scratch on every render.

### 3. Lazy Loading & Code Splitting
If your React app has 50 pages, the user downloads all 50 pages the moment they visit the homepage. This makes the initial load extremely slow.
`React.lazy()` allows you to "Code Split". It tells React to only download the code for the Dashboard page when the user actually clicks the Dashboard link!
"""

with open(artifact_path, "a", encoding="utf-8") as f:
    f.write(batch_2)

print("Batch 2 (Modules 6-10) written.")

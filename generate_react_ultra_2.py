import os

artifact_path = r"C:\Users\Lenovo\.gemini\antigravity\brain\74e8ccc9-bda8-41c5-8084-fb7c0983ae66\react_masterclass_notes_detailed.md"

batch_2 = """
---

## 🎯 Module 5: Hooks

Hooks were introduced in React 16.8 (2019) and completely revolutionized the library. They allow Functional Components to "hook into" React's internal lifecycle methods and state, completely rendering Class components obsolete.

### 1. The Strict Rules of Hooks
Because Hooks rely on the exact order they are called to maintain state correctly across re-renders, React enforces two absolute rules:
1.  **Only call Hooks at the very top level.** Never call them inside loops, `if` conditions, or nested functions. If a hook is skipped during a re-render, React loses its internal tracking array and the app crashes.
2.  **Only call Hooks from inside React Functions.** You can only call them inside a Functional Component or inside another Custom Hook. You cannot call them from regular vanilla JavaScript functions.

### 2. useEffect()
`useEffect` is arguably the most complex and important hook. It lets you perform "Side Effects" in your component. A Side Effect is any operation that reaches *outside* the boundaries of the component, such as:
*   Fetching data from an external API server.
*   Directly manipulating the browser DOM.
*   Setting up WebSockets, Timers (`setInterval`), or Event Listeners.

`useEffect` takes two arguments: A callback function containing the logic, and a **Dependency Array**.

```jsx
import { useEffect, useState } from 'react';

const LiveCryptoTicker = ({ coinId }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    // 1. The Effect Code: This runs whenever the component mounts, OR when 'coinId' changes.
    console.log(`Setting up WebSocket connection for ${coinId}...`);
    const socket = new WebSocket(`wss://crypto-api.example.com/${coinId}`);
    
    socket.onmessage = (event) => {
      setPrice(event.data);
    };
      
    // 2. The Cleanup Function!
    // This runs automatically right before the component unmounts (is destroyed),
    // OR right before the effect runs again because the coinId changed.
    return () => {
      console.log(`Closing WebSocket for ${coinId} to prevent memory leaks!`);
      socket.close();
    };
    
  // 3. The Dependency Array
  // If we leave this array empty [], the effect runs ONLY ONCE when the component first appears.
  // By putting [coinId] here, we tell React: "Re-run this effect if the user changes the coin."
  }, [coinId]); 

  return <div>{coinId} Price: {price ? `$${price}` : "Loading ticker..."}</div>;
};
```

### 3. useContext()
Instead of passing props down manually at every single level (Prop Drilling), `useContext` allows you to subscribe to a global Context directly, instantly teleporting the data to the exact component that needs it. (More on this in Module 9).

### 4. useRef()
`useRef` provides a "safe box" that holds a mutable value. 
Unlike State, changing a Ref **does not trigger a re-render**. 
It is primarily used for two things:
1. Storing mutable data that you want to persist across renders without causing the screen to flash (like a timer ID).
2. Storing direct references to real HTML DOM elements.

```jsx
import { useRef } from 'react';

const AutoFocusInput = () => {
  // Create an empty reference box
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    // We access the actual DOM node via the .current property.
    // We are directly manipulating the DOM element without triggering a React render cycle!
    inputRef.current.focus();
    inputRef.current.style.border = "3px solid blue";
  };

  return (
    <div className="focus-container">
      {/* Attach the ref box to the physical input element! */}
      <input ref={inputRef} placeholder="I am blurry..." />
      <button onClick={handleFocusClick}>Force Focus on Input</button>
    </div>
  );
};
```

### 5. useReducer()
`useReducer` is the advanced big-brother to `useState`. It is used when you have complex state logic that involves multiple sub-values, or when the next state depends heavily on the previous state. It works exactly like Redux, but scoped to a single component.

---

## 🌍 Module 6: Routing (React Router)

### 1. SPA Architecture & React Router Setup
Traditional websites request a brand new HTML page from the server every time you click a hyperlink. This requires a full page reload, causing a blank white screen flash. 
React is a Single Page Application (SPA). You download the HTML page ONCE. To fake the navigation and change the URL in the browser bar without actually reloading the page, we use the industry-standard library: **React Router**.
```bash
npm install react-router-dom
```

### 2. Routes, Route, and Link
*   **BrowserRouter:** A wrapper component that watches the browser's URL bar and keeps the UI in sync with the URL.
*   **Routes:** Acts like a giant `switch` statement, looking at the URL and deciding which Route to render.
*   **Route:** Defines a single path string and dictates which component to render if the URL matches.
*   **Link:** Entirely replaces the standard HTML `<a>` tag. (An `<a>` tag triggers a hard server request, which breaks the SPA! Always use `<Link>` to navigate internally).

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      {/* The Global Navigation Bar remains on screen at all times! */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      {/* Only the content inside Routes changes based on the URL! */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          
          {/* Catch-all Route for 404 Error handling */}
          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      </main>
    </BrowserRouter>
  );
};
```

### 3. useParams & useNavigate
*   `useParams`: Used to extract dynamic variables (parameters) directly out of the URL (like extracting the ID `123` from `/users/123`).
*   `useNavigate`: A hook that returns a function. It allows you to forcefully redirect the user to a new page via code (for example, immediately after a successful API login).

```jsx
import { useParams, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  // If the Route was defined as path="/users/:id"
  // And the URL is currently /users/888
  // useParams() will return an object { id: "888" }
  const { id } = useParams(); 
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    // Await API call to delete account...
    alert("Account Deleted!");
    
    // Instantly redirect the user back to the homepage!
    navigate('/'); 
  };

  return (
    <div>
      <h1>Viewing Profile Details for User #{id}</h1>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};
```

### 4. Nested Routes & Protected Routes
React Router allows you to nest routes inside other routes (e.g., rendering a `/dashboard/analytics` view inside the Dashboard layout component using the `<Outlet />` component). 
You can also create "Protected Routes" by creating a wrapper component that checks if the user is authenticated; if they are not, it uses `<Navigate to="/login" />` to kick them out.

---

## 🌐 Module 7: API Integration

### 1. Fetch API vs Axios
In React, you fetch data from backend servers (like Node.js, Python, or external APIs) exactly like you do in vanilla JavaScript. However, you must carefully wrap the fetch call inside a `useEffect` hook, otherwise, your component will enter an infinite loop of fetching and re-rendering!
While the native `fetch()` works, **Axios** is a popular third-party library that makes fetching easier by automatically converting the response data to JSON, and throwing real errors if the HTTP status code is 400 or 500 (unlike `fetch`, which ignores 404 errors).

```bash
npm install axios
```

### 2. Fetching Data with Loading & Error States
A professional, production-grade API call in React requires managing 3 distinct pieces of State simultaneously: 
1. The Data itself.
2. A Boolean indicating if the data is currently Loading.
3. An Error string in case the network fails.

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // We define the async function inside the effect
    const fetchPosts = async () => {
      try {
        // Start the loading spinner
        setIsLoading(true);
        
        // Await the network response
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        // Axios automatically parses the JSON into response.data!
        setPosts(response.data);
      } catch (err) {
        // If the server crashes or the URL is wrong, catch the error
        setError(err.message);
      } finally {
        // Whether it was a success or a massive failure, the loading attempt is over!
        setIsLoading(false); 
      }
    };
    
    // Execute the function immediately
    fetchPosts();
  }, []); // Empty array ensures we only fetch ONCE when the component loads on screen

  // Handle the Loading State UI
  if (isLoading) return <div className="spinner">Fetching latest posts...</div>;
  
  // Handle the Error State UI
  if (error) return <div className="error-banner">Critical Error: {error}</div>;

  // Render the Actual Data UI
  return (
    <div className="feed-container">
      {posts.map(post => (
        <article key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
};
```

---

## 🎨 Module 8: Styling in React

### 1. Inline CSS & Standard CSS
Inline CSS in React is fundamentally different than HTML. Instead of passing a string (`style="color: red;"`), you must pass a JavaScript object, and all properties must be camelCased instead of hyphenated.
```jsx
// Inline Styling requires double curly braces! 
// The outer brace enters JS mode, the inner brace creates the object.
const AlertBox = () => {
  return (
    <div style={{ backgroundColor: 'darkred', color: 'white', padding: '20px', borderRadius: '5px' }}>
      Warning: System Overload!
    </div>
  );
};
```

### 2. CSS Modules
Standard CSS is global. If you create a `.button { color: blue; }` class in `Home.css`, it will accidentally affect every single button on the `Dashboard` page too! This is a nightmare for large apps.
**CSS Modules** solve this by locally scoping the CSS to the specific component.
1. Create a file named `Button.module.css`.
2. Import it: `import styles from './Button.module.css';`.
3. Use it: `<button className={styles.button}>`.
Under the hood, React renames the class to something random like `Button_button__xyz123`, ensuring it can never conflict with other files.

### 3. Styled Components
A popular library that allows you to write actual CSS directly inside your Javascript files using tagged template literals, creating completely encapsulated components.

### 4. Tailwind CSS (The Modern Standard)
Tailwind CSS has largely won the styling war in the React ecosystem. It allows you to style elements directly using atomic utility classes, meaning you never have to leave your JSX file or write a custom CSS class again.
```jsx
const TailwindCard = () => {
  return (
    // Beautiful, responsive, hover-enabled styling using only utility classes!
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden p-6 border border-gray-200">
      <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Modern Card</h1>
      <p className="mt-2 text-slate-500">Tailwind makes responsive design incredibly fast.</p>
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
        Read More
      </button>
    </div>
  );
};
```
"""

with open(artifact_path, "a", encoding="utf-8") as f:
    f.write(batch_2)

print("Batch 2 (Modules 5-8) written.")

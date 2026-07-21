document.addEventListener('DOMContentLoaded', () => {
    const courseData = [
        {
            id: 'ch1',
            title: 'Module 1: Introduction to React',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch2',
            title: '1. Introduction to React & History',
            content: `\n<p>React was created by <strong>Jordan Walke</strong>, a software engineer at Facebook, in 2011. Before React, Facebook's codebase was becoming impossible to maintain. They had massive "spaghetti code" where changing a small piece of data (like a user's notification count) required complex, bug-prone manual DOM manipulation. React was officially open-sourced to the world at JSConf US in May 2013, fundamentally changing how the software industry builds web applications. Today, it powers companies like Netflix, Airbnb, and Instagram.</p>

<p>#</p>\n`
        },
        {
            id: 'ch3',
            title: '2. Features of React & Why React?',
            content: `\n<ul>
<li><strong>Declarative UI:</strong> In traditional programming, you write step-by-step instructions ("Find the button, change its color, update text"). In React, you simply declare: "If the button's state is True, it is red." React figures out how to magically update the DOM for you, making code much easier to read and debug.</li>
<li><strong>Component-Based Architecture:</strong> Imagine building a massive spaceship out of Legos. Each Lego piece is a 'Component'. You build a <code><Navbar /></code> or <code><SubmitButton /></code> component once, and you can reuse it across 100 different pages. This keeps your codebase DRY (Don't Repeat Yourself).</li>
<li><strong>Unidirectional Data Flow:</strong> Data always flows downwards from Parent to Child. A child cannot magically send data sideways to a sibling. This strict predictability makes debugging incredibly easy because you always know exactly where data originated.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch4',
            title: '3. React vs JavaScript & Angular vs Vue',
            content: `\n<ul>
<li><strong>Vanilla JavaScript:</strong> Highly manual. You must use <code>document.getElementById</code> to interact with elements. It is fast for small websites but becomes an unmaintainable nightmare for large applications with complex states.</li>
<li><strong>React:</strong> A <strong>Library</strong>, not a framework. It focuses exclusively on the "View" layer (the UI). It gives you the freedom to choose your own routing or HTTP fetching tools.</li>
<li><strong>Angular:</strong> A complete <strong>Framework</strong> by Google. It dictates exactly how you must handle HTTP requests, routing, and state. It has a steep learning curve and uses TypeScript by default, making it great for huge enterprise teams but slow to learn.</li>
<li><strong>Vue:</strong> A progressive framework that takes the best parts of Angular (easy templates) and React (component-based speed) and combines them into an approachable, lightweight package.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch5',
            title: '4. The Virtual DOM & SPA Architecture',
            content: `\n<p>The real browser Document Object Model (DOM) is an extremely heavy, slow tree structure. React bypasses this using a <strong>Virtual DOM</strong>—a lightweight, invisible Javascript object clone of the real DOM kept in memory. <br>When data changes, React:<br><li>Creates a brand new Virtual DOM instantly.</li><br><li>Compares the new Virtual DOM to the previous Virtual DOM snapshot (This incredibly fast comparison algorithm is called <strong>"Diffing"</strong>).</li><br><li>Updates ONLY that specific tiny element on the real browser screen (<strong>"Reconciliation"</strong>).</li></p>

<p><strong>SPA (Single Page Application):</strong> React apps are SPAs. The user downloads a single <code>index.html</code> file ONCE. As they click around, the page never actually refreshes; React instantly swaps components in and out, creating a native, app-like experience.</p>

<p>#</p>\n`
        },
        {
            id: 'ch6',
            title: '5. Installing React, Vite Setup & Project Structure',
            content: `\n<p>Create React App (CRA) is deprecated. The modern, industry-standard build tool is <strong>Vite</strong>. It leverages native ES modules to start your local dev server in milliseconds.</p>

<pre><code>npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
</code></pre>

<p><strong>Core Project Structure:</strong><br><li><code>package.json</code>: Your project's manifest file containing dependencies.</li><br><li><code>index.html</code>: The single HTML file that hosts your entire app (<code><div id="root"></div></code>).</li><br><li><code>src/main.jsx</code>: The entry point where React attaches itself.</li><br><li><code>src/App.jsx</code>: Your primary, top-level parent component.</li></p>

<p>#</p>\n`
        },
        {
            id: 'ch7',
            title: '6. JSX, Fragments & Comments',
            content: `\n<p><strong>JSX (JavaScript XML)</strong> allows you to write HTML structures directly inside JavaScript files. Babel transpiles JSX into <code>React.createElement()</code> functions under the hood.</p>

<pre><code>function App() {
  {/* This is a multi-line JSX Comment used inside the return block */}
  
  // A Fragment <>...</> is mandatory if returning multiple sibling elements!
  // React components can ONLY return ONE single parent element.
  return (
    <>
      <div className="header">
        <h1>Welcome to React Mastery</h1>
      </div>
      <p>This paragraph is a sibling to the div, so we wrapped them in a Fragment.</p>
    </>
  );
}
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch8',
            title: '📘 Module 2: React Fundamentals',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch9',
            title: '1. Components (Functional vs Class)',
            content: `\n<p>React is built entirely around Components. <br><li><strong>Class Components:</strong> The old way of writing React (pre-2019). They required massive boilerplate code, the <code>this</code> keyword, and complex lifecycle methods. You should recognize them, but never write new ones.</li><br><li><strong>Functional Components:</strong> The modern standard. A Functional Component is simply a JavaScript function that accepts data and returns JSX. They are cleaner, easier to test, and use Hooks.</li></p>

<pre><code>// A Modern Functional Component using Arrow Function syntax
const WelcomeBanner = () => {
  return <div className="banner">Hello, Modern Developer! Let's build!</div>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch10',
            title: '2. Props & Props Destructuring',
            content: `\n<p><strong>Props</strong> (Properties) are arguments passed into React components. They allow you to pass dynamic data from a Parent Component down to a Child Component.<br><strong>CRITICAL RULE:</strong> Props are strictly <strong>Read-Only</strong> (Immutable). A child component can NEVER modify the props it receives.</p>

<pre><code>// Destructuring props directly in the parameters for cleaner code!
const UserProfile = ({ name, age, role }) => {
  return (
    <div className="profile-card shadow-lg">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

// Parent Component passing the data down
const App = () => {
  return <UserProfile name="Sarah Jenkins" age={28} role="Senior React Engineer" />;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch11',
            title: '3. Children Props',
            content: `\n<p>Sometimes you want to pass entire blocks of HTML or components <em>inside</em> another component. You achieve this using the special <code>children</code> prop. This is highly useful for Layout wrappers, Modals, and custom Cards.</p>

<pre><code>// The Wrapper Component (Acts like a specialized container)
const ModalWrapper = ({ children, title }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h3>{title}</h3>
        <hr />
        {/* The 'children' will be injected right here! */}
        {children} 
      </div>
    </div>
  );
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch12',
            title: '4. Conditional Rendering & Lists with Keys',
            content: `\n<p>You can use standard JavaScript logic directly inside JSX by wrapping it in curly braces <code>{}</code>.<br>When rendering lists via <code>.map()</code>, you <strong>MUST</strong> provide a unique <code>key</code> prop to the highest element in the loop so the Virtual DOM can efficiently track changes.</p>

<pre><code>const Dashboard = ({ userRole, tasks }) => {
  return (
    <div className="dashboard">
      {/* Conditional Rendering using Ternary Operator */}
      {userRole === 'admin' ? <h1>Admin Panel</h1> : <h1>User Dashboard</h1>}

      {/* Rendering Lists using .map() */}
      <ul>
        {tasks.map((task) => (
          // The unique 'key' is absolutely mandatory! Use a database ID.
          <li key={task.id} className="task-item">
            <strong>{task.title}</strong> - Status: {task.isCompleted ? "✅ Done" : "⏳ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch13',
            title: '⚡ Module 3: State Management',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch14',
            title: '1. What is State?',
            content: `\n<p>If Props are a component's "DNA" passed down by its parents, <strong>State</strong> is the component's personal "Memory". Props cannot change, but State <em>can</em> change. <br>When a component's State is updated, React detects the change and automatically re-renders the UI to reflect the new data.</p>

<p>#</p>\n`
        },
        {
            id: 'ch15',
            title: '2. useState() & Updating State',
            content: `\n<p>The <code>useState</code> hook returns an array with exactly two items: the current state variable, and a "setter" function used to update it.</p>

<pre><code>import { useState } from 'react';

const ShoppingCart = () => {
  const [itemsInCart, setItemsInCart] = useState(0);

  const handleAddToCart = () => {
    // CRITICAL: Never modify state directly (e.g., itemsInCart = 5). 
    // ALWAYS use the setter function! This triggers the re-render.
    setItemsInCart(itemsInCart + 1);
  };

  return (
    <div className="cart-widget">
      <h2>Items in Cart: {itemsInCart}</h2>
      <button onClick={handleAddToCart}>Add Apple to Cart</button>
    </div>
  );
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch16',
            title: '3. Object & Array State',
            content: `\n<p>When your state contains an Object or an Array, you must <strong>NEVER mutate the original object in memory</strong>. You must create a brand new copy of the object using the Spread Operator (<code>...</code>), modify the copy, and pass the copy to the setter function.</p>

<pre><code>const EmployeeEditor = () => {
  const [employee, setEmployee] = useState({ name: "Alex", role: "Junior Dev" });

  const promoteEmployee = () => {
    // Spread the old object to copy it, then overwrite specific properties!
    setEmployee({ ...employee, role: "Senior Dev" });
  };

  return <button onClick={promoteEmployee}>Grant Promotion!</button>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch17',
            title: '4. Lifting State Up',
            content: `\n<p>If two sibling components (<code><Sidebar /></code> and <code><MainContent /></code>) need to share the same State (like a Dark Mode toggle), you cannot pass data sideways. You must <strong>"Lift State Up"</strong> into their shared Parent component (<code><App /></code>), and then pass the state down to both siblings as Props.</p>

<p>---</p>\n`
        },
        {
            id: 'ch18',
            title: '🔄 Module 4: Events & Forms',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch19',
            title: '1. Event Handling & The Event Object',
            content: `\n<p>React event handlers are camelCased (<code>onClick</code>, <code>onChange</code>). React automatically passes a "Synthetic Event" object to your handler, ensuring your events work perfectly across all browsers (Chrome, Safari, Firefox).</p>

<pre><code>const ButtonLogger = () => {
  const handleRightClick = (e) => {
    e.preventDefault(); // Stop the browser's default right-click menu!
    console.log("Mouse X:", e.clientX, "Mouse Y:", e.clientY);
  };
  return <button onContextMenu={handleRightClick}>Right Click Me Only!</button>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch20',
            title: '2. Controlled Components & Form Handling',
            content: `\n<p>In React, the absolute standard is to use <strong>Controlled Components</strong>. We hijack the input box and force its value to be dictated entirely by a React State variable. Every keystroke updates the state, and the state updates the input box. This gives you ultimate power to validate input in real-time.</p>

<pre><code>const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });

  // A single, dynamic handler that updates state for ANY input field!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload!
    if (formData.username.length < 3) return alert("Username too short!");
    console.log("Submitting:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch21',
            title: '🎯 Module 5: Hooks',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch22',
            title: '1. The Strict Rules of Hooks',
            content: `\n<ul>
<li><strong>Only call Hooks at the very top level.</strong> Never call them inside loops, <code>if</code> conditions, or nested functions. React relies on the call order to track state.</li>
<li><strong>Only call Hooks from inside React Functions.</strong> (Functional Components or Custom Hooks).</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch23',
            title: '2. useEffect()',
            content: `\n<p><code>useEffect</code> lets you perform "Side Effects" (fetching APIs, WebSockets, Timers). It takes a callback function and a <strong>Dependency Array</strong>. The dependency array controls exactly <em>when</em> the effect is allowed to run.</p>

<pre><code>import { useEffect, useState } from 'react';

const LiveTicker = ({ coinId }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(\`wss://api.example.com/\${coinId}\`);
    socket.onmessage = (event) => setPrice(event.data);
      
    // The Cleanup Function! Runs right before the component unmounts.
    // Crucial for preventing memory leaks!
    return () => socket.close();
    
  // The Dependency Array: Re-run this effect ONLY if 'coinId' changes.
  }, [coinId]); 

  return <div>{coinId} Price: \${price}</div>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch24',
            title: '3. useContext(), useRef() & useReducer()',
            content: `\n<ul>
<li><code>useContext</code>: Teleports data globally without Prop Drilling.</li>
<em>   <code>useRef</code>: A "safe box" for mutable data that does </em>not* trigger re-renders. Used to grab real DOM elements (<code>inputRef.current.focus()</code>).
<li><code>useReducer</code>: The advanced version of <code>useState</code> for complex state logic, working similar to Redux using actions and a reducer function.</li>
</ul>

<p>---</p>\n`
        },
        {
            id: 'ch25',
            title: '🌍 Module 6: Routing (React Router)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch26',
            title: '1. SPA Architecture & Setup',
            content: `\n<p>To fake navigation and change the URL in the browser without reloading the page, we use <strong>React Router</strong>.</p>

<pre><code>npm install react-router-dom
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch27',
            title: '2. Routes, Route, and Link',
            content: `\n<ul>
<li><strong>BrowserRouter:</strong> Watches the browser's URL bar.</li>
<li><strong>Routes:</strong> Acts like a <code>switch</code> statement for URLs.</li>
<li><strong>Route:</strong> Defines a single path and which component to show.</li>
<li><strong>Link:</strong> Replaces the HTML <code><a></code> tag to prevent page reloads.</li>
</ul>

<pre><code>import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <nav><Link to="/">Home</Link> <Link to="/dashboard">Dashboard</Link></nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<PageNotFound />} /> {/* 404 Route */}
      </Routes>
    </BrowserRouter>
  );
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch28',
            title: '3. useParams & useNavigate',
            content: `\n<ul>
<li><code>useParams</code>: Extracts dynamic variables from the URL (like <code>/users/123</code>).</li>
<li><code>useNavigate</code>: A hook used to forcefully redirect the user via code (e.g., after login).</li>
</ul>

<p>---</p>\n`
        },
        {
            id: 'ch29',
            title: '🌐 Module 7: API Integration',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch30',
            title: '1. Fetch API vs Axios',
            content: `\n<p><strong>Axios</strong> is a popular library that makes fetching easier by automatically converting responses to JSON and properly throwing errors for 400/500 status codes.</p>

<p>#</p>\n`
        },
        {
            id: 'ch31',
            title: '2. Fetching Data with Loading & Error States',
            content: `\n<p>A professional API call requires managing 3 pieces of State: The Data, The Loading Boolean, and The Error String.</p>

<pre><code>import { useState, useEffect } from 'react';
import axios from 'axios';

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchPosts();
  }, []); // Empty array = run once on mount

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{posts.map(post => <h3 key={post.id}>{post.title}</h3>)}</div>;
};
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch32',
            title: '🎨 Module 8: Styling in React',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch33',
            title: '1. Inline CSS & CSS Modules',
            content: `\n<p>Inline CSS requires a JavaScript object with camelCased properties (<code>{ backgroundColor: 'red' }</code>).<br><strong>CSS Modules</strong> (<code>Button.module.css</code>) locally scope the CSS to the component so classes never conflict globally.</p>

<p>#</p>\n`
        },
        {
            id: 'ch34',
            title: '2. Tailwind CSS (The Modern Standard)',
            content: `\n<p>Tailwind CSS uses atomic utility classes, meaning you never have to write a custom CSS file again. It allows for rapid, responsive UI design directly in JSX.</p>

<pre><code>const TailwindCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
      <h1 className="text-2xl font-bold text-slate-800">Modern Card</h1>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Read More
      </button>
    </div>
  );
};
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch35',
            title: '🏛️ Module 9: Advanced React',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch36',
            title: '1. Prop Drilling vs Context API (The Teleporter)',
            content: `\n<p><strong>Prop Drilling</strong> is passing data down through many layers of components that don't need it, just to reach a child that does. <br>The <strong>Context API</strong> solves this by creating a global "Teleporter" so data can be accessed instantly from anywhere.</p>

<pre><code>import { createContext, useContext, useState } from 'react';

// 1. Create the Context Blueprint
const AuthContext = createContext();

const App = () => {
  const [currentUser, setCurrentUser] = useState("Pinku");
  return (
    // 2. Provide the data to the entire app
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <DashboardLayout />
    </AuthContext.Provider>
  );
};

// ... Deeply nested component ...
const UserAvatar = () => {
  // 3. Receive the data instantly!
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  return <button onClick={() => setCurrentUser("Guest")}>Log Out {currentUser}</button>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch37',
            title: '2. Error Boundaries & Portals',
            content: `\n<ul>
<li><strong>Error Boundaries:</strong> Wrapper components that catch JavaScript crashes in their children and display a fallback UI instead of crashing the whole app.</li>
<li><strong>Portals:</strong> Renders a component directly into the <code><body></code> tag to avoid CSS <code>overflow: hidden</code> issues (crucial for Modals).</li>
</ul>

<p>---</p>\n`
        },
        {
            id: 'ch38',
            title: '⚙️ Module 10: Performance Optimization',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch39',
            title: '1. React.memo(), useMemo() & useCallback()',
            content: `\n<ul>
<li><code>React.memo</code>: Caches a component so it only re-renders if its Props actually change.</li>
<em>   <code>useMemo</code>: Caches the </em>result* of a slow mathematical function.
<em>   <code>useCallback</code>: Caches a </em>function definition* so it isn't recreated on every render.
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch40',
            title: '2. Lazy Loading (Code Splitting)',
            content: `\n<p><code>React.lazy()</code> allows you to split your app into chunks, only downloading the code for a specific page when the user actually navigates to it, wrapped in a <code><Suspense fallback={<Spinner />}></code> boundary.</p>

<p>---</p>\n`
        },
        {
            id: 'ch41',
            title: '📦 Module 11: State Management Libraries',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch42',
            title: '1. Redux & Redux Toolkit (RTK)',
            content: `\n<p>Redux is the heavyweight champion of global state management. It uses a strict 3-part architecture:<br><li><strong>Store:</strong> The central data vault.</li><br><li><strong>Action:</strong> A request ticket to change data (<code>{ type: 'cart/addItem' }</code>).</li><br><li><strong>Reducer:</strong> The function that safely updates the State.</li><br><strong>RTK</strong> is the modern standard that cuts out 80% of Redux boilerplate code.</p>

<p>#</p>\n`
        },
        {
            id: 'ch43',
            title: '2. Zustand',
            content: `\n<p>Zustand is the modern, ultra-lightweight alternative to Redux. It provides global state power with zero boilerplate.</p>

<p>---</p>\n`
        },
        {
            id: 'ch44',
            title: '🧪 Module 12: Testing',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch45',
            title: '1. React Testing Library & Jest',
            content: `\n<p><strong>Jest</strong> runs the tests. <strong>React Testing Library (RTL)</strong> renders your components in an invisible browser and lets your test interact with them (clicking buttons, reading text) exactly like a real user.</p>

<pre><code>import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

test('increments item count', () => {
    render(<ShoppingCart />);
    const button = screen.getByRole('button', { name: /Add Apple/i });
    fireEvent.click(button);
    expect(screen.getByText(/Items in Cart: 1/i)).toBeInTheDocument();
});
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch46',
            title: '🌟 Module 13: Advanced Features',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch47',
            title: '1. Custom Hooks',
            content: `\n<p>Extract reusable logic into your own custom hook! Must start with <code>use</code>.</p>

<pre><code>import { useState, useEffect } from 'react';

// Custom Hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width; 
}
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch48',
            title: '2. Environment Variables (.env)',
            content: `\n<p>Never hardcode API Keys! In Vite, create a <code>.env</code> file with <code>VITE_API_KEY=12345</code>. Access it securely using <code>import.meta.env.VITE_API_KEY</code>.</p>

<p>---</p>\n`
        },
        {
            id: 'ch49',
            title: '🚀 Module 14: React with TypeScript',
            content: `\n<p>TypeScript acts as armor, preventing runtime crashes by strictly typing your components.</p>

<p>#</p>\n`
        },
        {
            id: 'ch50',
            title: '1. Typing Props & State',
            content: `\n<pre><code>import React, { useState } from 'react';

// Define exactly what the Props must look like!
interface ButtonProps {
    text: string;
    isActive: boolean;
    onClick: () => void; 
}

const StrictButton: React.FC<ButtonProps> = ({ text, isActive, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch51',
            title: '📝 Module 15: Practice & Mastery',
            content: `\n<p>To truly master React, build components from scratch.<br><li><strong>State Practice:</strong> Build a Light/Dark mode toggle switch.</li><br><li><strong>API Practice:</strong> Fetch 10 random users from <code>randomuser.me/api</code> and display them in a grid with a loading spinner.</li><br><li><strong>Routing Practice:</strong> Build a NavBar with 3 links (Home, About, Contact).</li></p>

<p>---</p>\n`
        },
        {
            id: 'ch52',
            title: '💻 Module 16: Projects',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch53',
            title: 'Beginner Projects',
            content: `\n<ul>
<li><strong>Counter App:</strong> Master <code>useState</code>.</li>
<li><strong>To-Do App:</strong> Master Arrays, <code>.map()</code>, and unique keys.</li>
<li><strong>Weather App:</strong> Master API Fetching and <code>useEffect</code>.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch54',
            title: 'Intermediate Projects',
            content: `\n<ul>
<li><strong>Movie Search App:</strong> Master Search filtering and Debouncing.</li>
<li><strong>Expense Tracker:</strong> Master complex state math.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch55',
            title: 'Advanced Projects',
            content: `\n<ul>
<li><strong>E-commerce Website:</strong> Master Redux Toolkit, Cart State, and Stripe.</li>
<li><strong>Social Media UI:</strong> Master Context API, nested routing, and infinite scroll.</li>
</ul>

<p><strong><em>End of Expanded React Masterclass</strong></em></p>\n`
        }
    ];






    // Build UI
    const navLinksList = document.getElementById('table-of-contents');
    const notesContainer = document.getElementById('notes-container');

    let navHtml = '';
    let contentHtml = '';

    courseData.forEach((ch, index) => {
        navHtml += `<li><a href="#${ch.id}" class="${index === 0 ? 'active' : ''}">${ch.title}</a></li>`;
        
        contentHtml += `
            <section class="course-section" id="${ch.id}">
                <h2>${ch.title}</h2>
                ${ch.content}
            </section>
        `;
    });

    navLinksList.innerHTML = navHtml;
    notesContainer.innerHTML = contentHtml;

    // Scroll Spy & Active Nav
    const sections = document.querySelectorAll('.course-section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // Mobile Sidebar Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const sidebar = document.getElementById('sidebar');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (mobileClose) {
        mobileClose.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
    
    // Close sidebar when clicking a link on mobile
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Download PDF (Print)
    const downloadBtn = document.getElementById('download-pdf-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            window.print();
        });
    }
});

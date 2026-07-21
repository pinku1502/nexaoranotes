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
            content: `\n<p>React was created by Jordan Walke, a software engineer at Facebook, in 2011. Facebook was struggling with maintaining their massive, complex UI (like the Facebook Newsfeed), where changing a small piece of data required reloading or manually updating massive chunks of the DOM. React was officially open-sourced in 2013 and fundamentally changed how the world builds web applications.</p>

<p>#</p>\n`
        },
        {
            id: 'ch3',
            title: '2. Features of React & Why React?',
            content: `\n<p><em>   <strong>Declarative UI:</strong> You simply describe </em>what* you want the UI to look like based on the current data (State), and React handles the messy DOM manipulation to make it happen. <br><li><strong>Component-Based Architecture:</strong> Imagine building a massive spaceship out of Legos. Each Lego piece is a 'Component'. You build a button once, and you can reuse it across 100 different pages.</li><br><li><strong>Unidirectional Data Flow:</strong> Data always flows down from Parent to Child. This makes debugging incredibly easy because you always know exactly where data is coming from.</li></p>

<p>#</p>\n`
        },
        {
            id: 'ch4',
            title: '3. React vs JavaScript & Angular vs Vue',
            content: `\n<ul>
<li><strong>Vanilla JavaScript:</strong> You have to manually grab elements (<code>document.getElementById</code>), manually attach listeners, and manually update the text. It's like building a car by hand.</li>
<li><strong>React:</strong> A Library. It gives you the engine and wheels, but you can build the car however you want.</li>
<li><strong>Angular:</strong> A complete Framework by Google. It gives you the entire factory. It's rigid, heavy, but highly structured for enterprise.</li>
<li><strong>Vue:</strong> A progressive framework that takes the best parts of Angular (templates) and React (components) and combines them into an easy-to-learn package.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch5',
            title: '4. The Virtual DOM (The Secret to Speed)',
            content: `\n<p>The real browser DOM is extremely heavy. If you have a list of 10,000 items and you change the text of one item, vanilla JS might repaint the entire list.<br>React creates a <strong>Virtual DOM</strong>—a lightweight, invisible clone of the real DOM in memory. <br>When data changes, React:<br><li>Updates the Virtual DOM instantly.</li><br><li>Compares the new Virtual DOM to a snapshot of the old Virtual DOM (This is called <strong>"Diffing"</strong>).</li><br><li>Finds the <em>exact</em> element that changed.</li><br><li>Updates ONLY that specific element on the real browser screen (This is called <strong>"Reconciliation"</strong>).</li></p>

<p>#</p>\n`
        },
        {
            id: 'ch6',
            title: '5. Installing React & Vite Setup',
            content: `\n<p>Create React App (CRA) is obsolete. The modern standard is <strong>Vite</strong>, an ultra-fast build tool that starts your server in milliseconds.</p>

<pre><code>npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch7',
            title: '6. JSX, Fragments & Comments',
            content: `\n<p><strong>JSX (JavaScript XML)</strong> allows you to write HTML directly inside JavaScript functions.</p>

<pre><code>function App() {
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
            content: `\n<p>In the old days, we used massive, clunky Class Components. Today, 99% of modern React uses <strong>Functional Components</strong>.<br>A Functional Component is simply a JavaScript function that returns JSX.</p>

<pre><code>// Modern Functional Component
const Greeting = () => {
  return <h1>Hello, Developer!</h1>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch10',
            title: '2. Props & Props Destructuring',
            content: `\n<p><strong>Props</strong> (short for Properties) are how you pass data from a Parent Component to a Child Component. Think of them as custom HTML attributes.<br>Props are strictly <strong>Read-Only</strong>. A child cannot modify its own props.</p>

<pre><code>// Destructuring props directly in the function parameters!
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
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch11',
            title: '3. Children Props',
            content: `\n<p>If you want to pass entire blocks of HTML or other components <em>inside</em> another component, you use <code>children</code>.</p>

<pre><code>// The Wrapper Component
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
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch12',
            title: '4. Conditional Rendering & Lists with Keys',
            content: `\n<p>You can use standard JavaScript logic (<code>if/else</code>, ternary operators, and <code>.map()</code>) directly inside JSX.<br>When mapping over arrays to create lists, you <strong>MUST</strong> provide a unique <code>key</code> prop so the Virtual DOM can track which specific items are added, changed, or removed.</p>

<pre><code>const TaskList = ({ tasks }) => {
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
            content: `\n<p>If Props are a component's "DNA" passed down by its parents, <strong>State</strong> is the component's personal "Memory".<br>When a component's State changes, React automatically re-runs the function and updates the UI.</p>

<p>#</p>\n`
        },
        {
            id: 'ch15',
            title: '2. useState() & Updating State',
            content: `\n<p>The <code>useState</code> hook returns an array with two items: the current state value, and the function to update it.</p>

<pre><code>import { useState } from 'react';

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
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch16',
            title: '3. Object & Array State',
            content: `\n<p>When updating an object or array in State, you must <strong>NEVER mutate the original</strong>. You must create a brand new copy using the Spread Operator (<code>...</code>), modify the copy, and pass the copy to the setter function.</p>

<pre><code>const ProfileEditor = () => {
  const [user, setUser] = useState({ name: "Alex", age: 25 });

  const updateAge = () => {
    // WRONG: user.age = 26; setUser(user);
    
    // CORRECT: Spread the old user object, and overwrite the age property!
    setUser({ ...user, age: 26 });
  };

  return <button onClick={updateAge}>Happy Birthday!</button>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch17',
            title: '4. Lifting State Up',
            content: `\n<p>If two sibling components need to share the same data, you cannot pass data sideways. You must move the state UP to their closest common parent component, and pass the state down as Props.</p>

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
            content: `\n<p>React events are extremely similar to standard HTML events, but they are camelCased (<code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>). React passes a Synthetic Event object to the handler.</p>

<pre><code>const ButtonLogger = () => {
  const handleClick = (e) => {
    console.log("Button coordinates:", e.clientX, e.clientY);
  };
  return <button onClick={handleClick}>Log Coordinates</button>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch20',
            title: '2. Controlled vs Uncontrolled Components',
            content: `\n<ul>
<li><strong>Uncontrolled Component:</strong> A standard HTML input where the browser DOM manages the text.</li>
<li><strong>Controlled Component:</strong> An input where React State completely controls the value. This is the absolute standard for React forms.</li>
</ul>

<pre><code>const ControlledForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from refreshing!
    alert(\`Submitting: \${email}\`);
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
            title: '1. Rules of Hooks',
            content: `\n<ul>
<li><strong>Only call Hooks at the top level.</strong> Never call them inside loops, conditions, or nested functions. React relies on the exact order in which hooks are called.</li>
<li><strong>Only call Hooks from React Functions.</strong> (Functional Components or Custom Hooks).</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch23',
            title: '2. useEffect()',
            content: `\n<p><code>useEffect</code> lets you perform "Side Effects" in your component. This means anything that reaches outside the component, such as fetching data from an API, setting up a WebSocket, or interacting with the <code>window</code> object.</p>

<p>It takes two arguments: A function, and a Dependency Array.</p>

<pre><code>import { useEffect, useState } from 'react';

const DataFetcher = ({ userId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code runs whenever the component mounts, OR when 'userId' changes.
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(res => res.json())
      .then(json => setData(json));
      
    // Cleanup function (Runs when component unmounts, or before running the effect again)
    return () => {
      console.log("Cleanup: Canceling previous network requests...");
    };
  }, [userId]); // The Dependency Array!

  return <div>{data ? data.name : "Loading..."}</div>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch24',
            title: '3. useRef()',
            content: `\n<p><code>useRef</code> is a "safe box" that holds a mutable value. Unlike State, changing a Ref <strong>does not trigger a re-render</strong>. <br>It is primarily used to store direct references to HTML DOM elements.</p>

<pre><code>import { useRef } from 'react';

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
</code></pre>\n`
        },
        {
            id: 'ch25',
            title: '🌍 Module 6: Routing (React Router)',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch26',
            title: '1. SPA & React Router Setup',
            content: `\n<p>Traditional websites request a new HTML page from the server every time you click a link. React is a Single Page Application (SPA). You download the HTML page ONCE, and React fakes the navigation by instantly swapping out components.<br>To make the URL change in the browser bar, we use <strong>React Router</strong>.</p>

<pre><code>npm install react-router-dom
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch27',
            title: '2. Routes, Route, and Link',
            content: `\n<ul>
<li><strong>BrowserRouter:</strong> Wraps the entire app to enable routing.</li>
<li><strong>Routes:</strong> Acts like a giant <code>switch</code> statement.</li>
<li><strong>Route:</strong> Defines a single path and which component to render.</li>
<li><strong>Link:</strong> Replaces the HTML <code><a></code> tag. (An <code><a></code> tag causes a page reload, which breaks the SPA! Always use <code><Link></code>).</li>
</ul>

<pre><code>import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch28',
            title: '3. useParams & useNavigate',
            content: `\n<ul>
<li><code>useParams</code>: Used to grab dynamic variables out of the URL (like <code>/users/123</code>).</li>
<li><code>useNavigate</code>: Used to force the user to a new page via code (like after a successful login).</li>
</ul>

<pre><code>import { useParams, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams(); // Grabs '123' from the URL
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic...
    navigate('/login'); // Redirect to login page instantly!
  };

  return <h1>Viewing Profile for User {id}</h1>;
};
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch29',
            title: '🌐 Module 7: API Integration',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch30',
            title: '1. Fetch API & Axios',
            content: `\n<p>In React, you fetch data exactly like you do in vanilla JavaScript, but you typically wrap the fetch call inside a <code>useEffect</code> hook so it runs when the component mounts.<br><strong>Axios</strong> is a popular library that makes fetching easier by automatically converting data to JSON and handling errors better than the native Fetch API.</p>

<pre><code>npm install axios
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch31',
            title: '2. Fetching Data with Loading & Error States',
            content: `\n<p>A robust API call in React requires managing 3 separate pieces of State: The Data, The Loading Status, and The Error Status.</p>

<pre><code>import { useState, useEffect } from 'react';
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
            title: '1. Inline CSS & Standard CSS',
            content: `\n<p>Inline CSS in React uses a JavaScript object instead of a string, and properties are camelCased.</p>

<pre><code>// Inline Styling
const Box = () => {
  return <div style={{ backgroundColor: 'red', fontSize: '20px' }}>Hello</div>;
};
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch34',
            title: '2. CSS Modules',
            content: `\n<p>Standard CSS is global. If you create <code>.btn { color: blue; }</code> in one file, it affects EVERY button in your entire app!<br><strong>CSS Modules</strong> solve this by locally scoping the CSS to the component.<br><li>Create <code>Button.module.css</code>.</li><br><li>Import it: <code>import styles from './Button.module.css';</code>.</li><br><li>Use it: <code><button className={styles.btn}></code>.</li></p>

<p>#</p>\n`
        },
        {
            id: 'ch35',
            title: '3. Tailwind CSS',
            content: `\n<p>Tailwind is the modern industry standard for React styling. It uses atomic utility classes so you never have to write a custom CSS file again.</p>

<pre><code>const TailwindCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <h1 className="text-xl font-bold text-slate-800">Beautiful Card</h1>
    </div>
  );
};
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch36',
            title: '🏛️ Module 9: Advanced React',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch37',
            title: '1. Context API (The Teleporter)',
            content: `\n<p>If you have data (like the logged-in User's name) in the <code>App</code> component, and a <code>SidebarMenu</code> component needs it, you might have to pass that Prop through 5 intermediate components that don't care about it. This is called <strong>Prop Drilling</strong>.<br>The <strong>Context API</strong> solves this by creating a global "Teleporter".</p>

<pre><code>import { createContext, useContext, useState } from 'react';

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
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch38',
            title: '2. Error Boundaries',
            content: `\n<p>If a JavaScript error occurs inside a React component, the entire screen will go completely blank (the "White Screen of Death"). Error Boundaries act like a safety net that catches the crash and displays a fallback UI (like "Oops, something went wrong!") instead of crashing the whole app.</p>

<p>#</p>\n`
        },
        {
            id: 'ch39',
            title: '3. Portals',
            content: `\n<p>Sometimes you need a component (like a Modal or Tooltip) to visually break out of its parent container and render at the very top of the DOM hierarchy (attached directly to <code><body></code>), while still acting like a React child. <code>ReactDOM.createPortal</code> handles this.</p>

<p>---</p>\n`
        },
        {
            id: 'ch40',
            title: '⚙️ Module 10: Performance Optimization',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch41',
            title: '1. React.memo()',
            content: `\n<p>When a Parent Component re-renders, React automatically forces ALL of its Child Components to re-render, even if the Child's props didn't change! This is a massive waste of processing power.<br>Wrapping a component in <code>React.memo</code> caches the component. It tells React: "Only re-render this Child if its specific Props change."</p>

<p>#</p>\n`
        },
        {
            id: 'ch42',
            title: '2. useMemo() & useCallback()',
            content: `\n<p><em>   <code>useMemo</code>: Caches the </em>result* of a slow, heavy mathematical function so it doesn't have to recalculate on every render.<br><em>   <code>useCallback</code>: Caches a </em>function definition* so it doesn't get recreated from scratch on every render.</p>

<p>#</p>\n`
        },
        {
            id: 'ch43',
            title: '3. Lazy Loading & Code Splitting',
            content: `\n<p>If your React app has 50 pages, the user downloads all 50 pages the moment they visit the homepage. This makes the initial load extremely slow.<br><code>React.lazy()</code> allows you to "Code Split". It tells React to only download the code for the Dashboard page when the user actually clicks the Dashboard link!</p>\n`
        },
        {
            id: 'ch44',
            title: '📦 Module 11: State Management Libraries',
            content: `\n<p>When building a massive Enterprise app (like Netflix or Facebook), Context API becomes too slow and messy. You need dedicated tools to manage your global State.</p>

<p>#</p>\n`
        },
        {
            id: 'ch45',
            title: '1. Redux & Redux Toolkit (RTK)',
            content: `\n<p>Redux is the industry-standard heavyweight champion of state management.<br>It works on a strict 3-part architecture:<br><li><strong>The Store:</strong> The giant, central vault that holds all the app's state.</li><br><li><strong>The Action:</strong> A formal request ticket you submit when you want to change data.</li><br><li><strong>The Reducer:</strong> The strict security guard that takes your Action ticket, opens the vault, and safely updates the State.</li><br><strong>Redux Toolkit (RTK)</strong> is the modern way to write Redux, cutting out 80% of the old boilerplate code.</p>

<p>#</p>\n`
        },
        {
            id: 'ch46',
            title: '2. Zustand',
            content: `\n<p>Zustand is the modern, ultra-lightweight alternative to Redux. It provides the exact same global state power, but requires zero boilerplate and is incredibly simple to set up.</p>

<p>---</p>\n`
        },
        {
            id: 'ch47',
            title: '🧪 Module 12: Testing',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch48',
            title: '1. React Testing Library & Jest',
            content: `\n<p>You must write automated code to test your code. <br><strong>Jest</strong> runs the tests. <strong>React Testing Library</strong> renders your components in an invisible browser and lets your test interact with them (clicking buttons, reading text) exactly like a real user would.</p>

<pre><code>import { render, screen, fireEvent } from '@testing-library/react';
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
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch49',
            title: '🌟 Module 13: Advanced Features',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch50',
            title: '1. Custom Hooks',
            content: `\n<p>If you find yourself writing the exact same <code>useState</code> and <code>useEffect</code> logic in 5 different components, you can extract that logic into your own Custom Hook! Custom hooks MUST start with the word <code>use</code>.</p>

<pre><code>// Building our own custom hook to track the window size!
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
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch51',
            title: '2. Higher Order Components (HOC)',
            content: `\n<p>An advanced pattern where a function takes a Component as an argument, and returns a new, "upgraded" Component. (Mostly replaced by Custom Hooks today, but still asked in interviews).</p>

<p>#</p>\n`
        },
        {
            id: 'ch52',
            title: '3. Environment Variables',
            content: `\n<p>Never hardcode API Keys into your React code! Anyone can inspect the network tab and steal them.<br>In Vite, you create a <code>.env</code> file at the root of your project:</p>

<pre><code>VITE_API_KEY=super_secret_12345
</code></pre>

<p>You access it in your React code using: <code>import.meta.env.VITE_API_KEY</code>.</p>

<p>---</p>\n`
        },
        {
            id: 'ch53',
            title: '🚀 Module 14: React with TypeScript',
            content: `\n<p>JavaScript is loosely typed, meaning a variable can be a String one second, and an Array the next. This causes thousands of runtime crashes. <strong>TypeScript</strong> acts as an impenetrable armor for React, forcing you to define exactly what your props and state look like <em>before</em> compiling.</p>

<p>#</p>\n`
        },
        {
            id: 'ch54',
            title: '1. Typing Props & State',
            content: `\n<pre><code>import React, { useState } from 'react';

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
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch55',
            title: '📝 Module 15: Practice & Mastery',
            content: `\n<p>To truly master React, you must build components from scratch until the hooks become muscle memory.</p>

<p>#</p>\n`
        },
        {
            id: 'ch56',
            title: '1. Practice Exercises',
            content: `\n<ul>
<li><strong>Props Practice:</strong> Build a <code>Card</code> component that accepts <code>title</code>, <code>description</code>, and <code>imageUrl</code> props. Render 3 different cards.</li>
<li><strong>State Practice:</strong> Build a Toggle switch that changes the background of the screen from Light Mode to Dark Mode.</li>
<li><strong>API Practice:</strong> Use <code>useEffect</code> and <code>fetch</code> to grab random user data from <code>https://randomuser.me/api/</code> and display their profile picture and name.</li>
<li><strong>Routing Practice:</strong> Build a NavBar with 3 links (Home, About, Contact). Setup React Router to navigate between them without reloading the page.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch57',
            title: '2. Common Interview Questions',
            content: `\n<p><em>   </em>What is the Virtual DOM and how does it work?*<br><em>   </em>What is the difference between Prop Drilling and the Context API?*<br><em>   </em>Why can't you update State directly (e.g., <code>count = 2</code>)?*<br><em>   </em>What is the purpose of the Dependency Array in useEffect?*<br><em>   </em>What is the difference between useMemo and useCallback?*</p>

<p>---</p>\n`
        },
        {
            id: 'ch58',
            title: '💻 Module 16: Projects',
            content: `\n<p>Building real-world projects is the only way to bridge the gap between "knowing syntax" and "being a developer".</p>

<p>#</p>\n`
        },
        {
            id: 'ch59',
            title: 'Beginner Projects',
            content: `\n<ul>
<li><strong>Counter App:</strong> Master <code>useState</code>.</li>
<li><strong>To-Do App:</strong> Master Arrays in State, <code>.map()</code>, and filtering.</li>
<li><strong>Weather App:</strong> Master API Fetching and <code>useEffect</code>.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch60',
            title: 'Intermediate Projects',
            content: `\n<ul>
<li><strong>Movie Search App:</strong> Master Search filtering, debouncing, and API integration.</li>
<li><strong>Expense Tracker:</strong> Master complex state management and mathematical aggregations.</li>
<li><strong>Quiz App:</strong> Master multi-step state and component unmounting.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch61',
            title: 'Advanced Projects',
            content: `\n<ul>
<li><strong>E-commerce Website:</strong> Master Redux Toolkit, React Router, Cart State, and Stripe Integration.</li>
<li><strong>Social Media UI:</strong> Master complex Context API, nested routing, and infinite scrolling.</li>
<li><strong>Admin Dashboard:</strong> Master Chart.js integration, Data Tables, and Authentication/Protected Routes.</li>
</ul>

<p><strong><em>End of React Masterclass</strong></em></p>

<p>---</p>\n`
        },
        {
            id: 'ch62',
            title: '🌟 Module 13: Advanced Features',
            content: `\n<p>#</p>\n`
        },
        {
            id: 'ch63',
            title: '1. Custom Hooks',
            content: `\n<p>If you find yourself writing the exact same <code>useState</code> and <code>useEffect</code> logic in 5 different components (like a timer, fetching window dimensions, or handling form inputs), you can extract that logic into your own custom, reusable Hook! <br>Custom hooks MUST start with the word <code>use</code>.</p>

<pre><code>// 1. Building our own custom hook to track the window size!
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
</code></pre>

<p>#</p>\n`
        },
        {
            id: 'ch64',
            title: '2. Higher Order Components (HOC)',
            content: `\n<p>An advanced, older pattern where a function takes a Component as an argument, and returns a brand new, "upgraded" Component with extra props injected into it. While mostly replaced by Custom Hooks today, it is still heavily asked in senior interviews and used in some third-party libraries.</p>

<p>#</p>\n`
        },
        {
            id: 'ch65',
            title: '3. Environment Variables (.env)',
            content: `\n<p><strong>CRITICAL SECURITY RULE:</strong> Never hardcode API Keys, database passwords, or secret tokens directly into your React code! React compiles your code into plain JavaScript that anyone can read by simply pressing F12 and opening the network tab.<br>In Vite, you create a hidden <code>.env</code> file at the root of your project:</p>

<pre><code># Only variables prefixed with VITE_ are exposed to your React code
VITE_STRIPE_PUBLIC_KEY=pk_test_12345
</code></pre>

<p>You securely access it anywhere in your React code using: <code>import.meta.env.VITE_STRIPE_PUBLIC_KEY</code>.</p>

<p>---</p>\n`
        },
        {
            id: 'ch66',
            title: '🚀 Module 14: React with TypeScript',
            content: `\n<p>JavaScript is "Loosely Typed", meaning a variable can be a String one second, and an Array the next. This causes thousands of runtime crashes when a component expects a string but accidentally receives an object.<br><strong>TypeScript</strong> acts as an impenetrable armor for React, forcing you to define exactly what your props and state look like <em>before</em> the code is even allowed to compile.</p>

<p>#</p>\n`
        },
        {
            id: 'ch67',
            title: '1. Typing Props, State, and Events',
            content: `\n<pre><code>import React, { useState } from 'react';

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
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch68',
            title: '📝 Module 15: Practice & Mastery',
            content: `\n<p>To truly master React, you cannot just read notes. You must build components from scratch until the hooks become pure muscle memory.</p>

<p>#</p>\n`
        },
        {
            id: 'ch69',
            title: '1. Practice Exercises',
            content: `\n<ul>
<li><strong>Props Practice:</strong> Build a reusable <code>ProfileCard</code> component that accepts <code>title</code>, <code>description</code>, and <code>imageUrl</code> props. Render 3 different cards in your App.</li>
<li><strong>State Practice:</strong> Build a Toggle switch that changes the background color of the entire screen from Light Mode to Dark Mode, and changes the button text from "Dark" to "Light".</li>
<li><strong>API Practice:</strong> Use <code>useEffect</code>, <code>useState</code>, and Axios to fetch 10 random user profiles from <code>https://randomuser.me/api/?results=10</code> and display them in a grid. Make sure to implement a Loading spinner while waiting for the data!</li>
<li><strong>Routing Practice:</strong> Build a NavBar with 3 links (Home, About, Contact). Setup React Router to navigate between them without reloading the page. Ensure the active link turns blue.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch70',
            title: '2. Common React Interview Questions',
            content: `\n<p><em>   </em>What is the Virtual DOM and how does the reconciliation algorithm work?*<br><em>   </em>What is the fundamental difference between Prop Drilling and the Context API?*<br><em>   </em>Why can't you update State directly (e.g., <code>count = 2</code>)? What happens under the hood when you call <code>setCount()</code>?*<br><em>   </em>What is the purpose of the Dependency Array in useEffect? What happens if you forget it?*<br><em>   </em>What is the strict difference between useMemo and useCallback?*<br><em>   </em>How do you handle memory leaks in React when a component unmounts?*</p>

<p>---</p>\n`
        },
        {
            id: 'ch71',
            title: '💻 Module 16: Projects',
            content: `\n<p>Building real-world projects is the only way to bridge the gap between "knowing syntax" and "being a professional developer". Start small, and work your way up to enterprise architecture.</p>

<p>#</p>\n`
        },
        {
            id: 'ch72',
            title: 'Beginner Projects (Focus on Core Hooks)',
            content: `\n<ul>
<li><strong>Counter App:</strong> Master <code>useState</code> and simple event handlers.</li>
<li><strong>To-Do App:</strong> Master Arrays in State, the <code>.map()</code> function, filtering arrays, and generating unique keys.</li>
<li><strong>Weather App:</strong> Master API Fetching using Axios, handling Promises, and <code>useEffect</code>.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch73',
            title: 'Intermediate Projects (Focus on Architecture)',
            content: `\n<ul>
<li><strong>Movie Search App:</strong> Master Search input filtering, debouncing inputs to prevent API spam, and handling empty states (404 Not Found).</li>
<li><strong>Expense Tracker:</strong> Master complex state management, passing callbacks up to parents, and complex mathematical aggregations using <code>.reduce()</code>.</li>
<li><strong>Quiz App:</strong> Master multi-step conditional state rendering, scoring logic, and component unmounting.</li>
</ul>

<p>#</p>\n`
        },
        {
            id: 'ch74',
            title: 'Advanced Projects (Portfolio Ready)',
            content: `\n<ul>
<li><strong>E-commerce Website:</strong> Master Redux Toolkit, React Router, global Cart State management, integrating a payment gateway (Stripe), and JWT Authentication.</li>
<li><strong>Social Media UI:</strong> Master complex Context API structures, deeply nested routing, infinite scrolling pagination, and optimistic UI updates.</li>
<li><strong>Admin Dashboard:</strong> Master Chart.js integration, complex Data Tables with sorting and pagination, and highly Protected Routes that kick out unauthenticated users.</li>
</ul>

<p><strong><em>End of the Ultimate React Masterclass</strong></em></p>\n`
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

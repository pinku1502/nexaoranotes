import os
import re

workspace = r"E:\Projects\nexaoranotes"

notes = """# ⚛️ React Masterclass (Ultimate Detail Edition)

## Module 1: Introduction to React (The UI Engine)

### 1. What is React?
Imagine building a car from scratch every time you need to drive. That's traditional HTML/JS. React is like buying a box of pre-built Legos. You build a "Wheel" component once, and you can reuse it 4 times on the car.
**React** is a declarative JavaScript library for building highly interactive User Interfaces (UI) using reusable components.

### 2. React vs Angular vs Vue
*   **React:** A *Library* (like a toolbox). You choose exactly which tools to bring. Highly flexible.
*   **Angular:** A *Framework* (like a fully furnished kitchen). It forces you to cook its way.
*   **Vue:** A middle ground. Easier to learn than Angular, more structured than React.

### 3. The Virtual DOM (Why React is so fast!)
Normally, if you change a tiny piece of text on a web page, the browser repaints the ENTIRE page (The Real DOM). This is incredibly slow.
React uses a **Virtual DOM** (a lightweight copy of the real page). When a change happens, React compares the Virtual DOM to the Real DOM, calculates the exact mathematical difference, and ONLY updates that one tiny piece of text.

### 4. Creating a React Project (Vite)
Create React App (CRA) is dead. Vite is the modern, hyper-fast way to build React apps.
```bash
# Open your terminal and run:
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

---

## 📘 Module 2: React Fundamentals (The Building Blocks)

### 1. Components
A component is just a regular JavaScript function that returns HTML (specifically, JSX).
```jsx
// This is a Functional Component
function WelcomeButton() {
    return <button>Click Me!</button>;
}

// Now you can reuse it anywhere like an HTML tag!
function App() {
    return (
        <div>
            <WelcomeButton />
            <WelcomeButton />
        </div>
    );
}
```

### 2. JSX (JavaScript XML)
JSX allows you to write HTML directly inside JavaScript. Under the hood, React converts it into complex `document.createElement()` logic so you don't have to!
*Rule:* JSX must always return **ONE single parent element**. If you have two adjacent `<div>`s, wrap them in a Fragment `<> ... </>`.

### 3. Props (Passing Data)
Props are how components talk to each other. They act like function arguments.
```jsx
function UserCard(props) {
    return <h1>Hello, {props.name}! You are {props.age} years old.</h1>;
}

function App() {
    return <UserCard name="Alex" age={25} />;
}
```

### 4. Conditional Rendering & Lists
You can use standard JavaScript `.map()` to loop through data and render UI elements dynamically.
```jsx
function ShoppingList() {
    const items = ['Apples', 'Bananas', 'Milk'];
    
    // The 'key' is crucial! It helps the Virtual DOM track which specific item changed.
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
```

---

## ⚡ Module 3: State Management (The Memory)

### 1. What is State?
Props are "Read-Only" data passed down from a parent. **State** is a component's personal, internal memory. When State changes, React automatically re-renders the component to show the new data.

### 2. useState Hook
The `useState` hook gives you a variable to store the data, and a function to update it.
```jsx
import { useState } from 'react';

function Counter() {
    // count is the variable (starts at 0)
    // setCount is the ONLY function allowed to change the count!
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>You clicked {count} times</h2>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}
```

---

## 🔄 Module 4: Events & Forms

### 1. Event Handling
React events are written in camelCase (`onClick` instead of `onclick`).
```jsx
function SubmitButton() {
    const handleClick = (event) => {
        event.preventDefault(); // Stops the page from refreshing!
        alert("Button was clicked!");
    };

    return <button onClick={handleClick}>Submit Data</button>;
}
```

### 2. Controlled Components (Forms)
In traditional HTML, input fields manage their own state. In React, we force the input field to rely entirely on React State.
```jsx
function LoginForm() {
    const [email, setEmail] = useState("");

    return (
        <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter Email"
        />
    );
}
```

---

## 🎯 Module 5: Hooks (The Magic Wands)

Hooks allow functional components to "hook into" React features like lifecycle methods and state.

### 1. Rules of Hooks
1. NEVER call hooks inside loops, conditions, or nested functions.
2. ALWAYS call hooks at the very top level of your component.

### 2. useEffect (Side Effects)
Used to run code AFTER the component renders (like fetching data from a server, or setting up a timer).
```jsx
import { useEffect, useState } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // This runs once when the component first appears!
        const interval = setInterval(() => setSeconds(s => s + 1), 1000);
        
        // This 'cleanup' function runs when the component is destroyed
        return () => clearInterval(interval);
    }, []); // The empty array [] means "Only run this once on mount"
}
```

### 3. useRef (Direct DOM Access)
Used to grab a direct reference to an HTML element, bypassing the Virtual DOM. (Great for focusing input fields).
```jsx
function FocusInput() {
    const inputRef = useRef(null);

    const forceFocus = () => {
        inputRef.current.focus(); // Boom! Input is focused.
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={forceFocus}>Focus the Box</button>
        </>
    );
}
```

---

## 🌍 Module 6: Routing (React Router)

React is a Single Page Application (SPA). The page never actually refreshes; React just swaps out the components instantly to fake the feeling of navigation.

### 1. Basic Setup
```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} /> {/* 404 Page */}
            </Routes>
        </BrowserRouter>
    );
}
```

---

## 🌐 Module 7: API Integration (Fetching Data)

### 1. Using Fetch API with useEffect
```jsx
function UserDirectory() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <h1>Loading data...</h1>;

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}
```

---

## 🎨 Module 8: Styling

### 1. Tailwind CSS (The Modern Standard)
Tailwind allows you to style elements directly using utility classes.
```jsx
function StylishButton() {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tailwind Button
        </button>
    );
}
```

---

## 🏛️ Module 9: Advanced React

### 1. Prop Drilling vs Context API
**Prop Drilling** is the nightmare scenario where you have to pass a `user` prop down through 10 layers of child components just to reach the one component that actually needs it.
**Context API** fixes this by creating a global "teleporter". You drop the data into the teleporter at the top level, and any component can instantly access it.

```jsx
import { createContext, useContext } from 'react';

// 1. Create the Teleporter
const ThemeContext = createContext();

function App() {
    return (
        // 2. Put data inside it
        <ThemeContext.Provider value="dark">
            <Dashboard />
        </ThemeContext.Provider>
    );
}

function Dashboard() {
    // 3. Receive the data instantly anywhere!
    const theme = useContext(ThemeContext);
    return <h1>The theme is {theme}</h1>;
}
```

---

## ⚙️ Module 10: Performance Optimization

### 1. Memoization (React.memo)
If a parent component re-renders, ALL of its children automatically re-render too, even if their props didn't change! `React.memo` stops this by caching the child component.
```jsx
const ExpensiveGraph = React.memo(function ExpensiveGraph({ data }) {
    // This will ONLY re-render if the 'data' prop actually changes!
    return <GraphUI data={data} />;
});
```

---

## 📦 Module 11: State Management Libraries

When Context API becomes too messy for massive enterprise apps, you use Redux or Zustand.

### 1. Redux Toolkit (RTK)
The industry standard for managing global state. It uses a strict architecture of "Actions" and "Reducers" to ensure state changes are predictable and traceable.
### 2. Zustand
The modern, lightweight alternative to Redux. It requires 90% less boilerplate code and is incredibly fast.

---

## 🧪 Module 12: Testing (React Testing Library)

You must write automated code to test your code.
```jsx
import { render, screen } from '@testing-library/react';
import WelcomeButton from './WelcomeButton';

test('renders the click me button', () => {
    render(<WelcomeButton />);
    const buttonElement = screen.getByText(/Click Me!/i);
    expect(buttonElement).toBeInTheDocument(); // If true, the test passes!
});
```

---

## 🚀 Module 14: React with TypeScript

TypeScript acts as an impenetrable armor for React, forcing you to define exactly what your props and state look like before compiling.

```tsx
// Define exactly what the Props must look like!
interface ButtonProps {
    text: string;
    isActive: boolean;
    onClick: () => void;
}

// If you forget to pass 'isActive', TypeScript will throw a massive error!
const StrictButton: React.FC<ButtonProps> = ({ text, isActive, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
}
```

***End of React Masterclass***
"""

# 1. Create react-course.html
with open(os.path.join(workspace, 'mysql-course.html'), 'r', encoding='utf-8') as f:
    html_content = f.read()

html_content = html_content.replace('MySQL Masterclass', 'React Masterclass')
html_content = html_content.replace('mysql-course.css', 'react-course.css')
html_content = html_content.replace('mysql-course.js', 'react-course.js')
html_content = html_content.replace('Courses > MySQL', 'Courses > React')
# The icon is fa-react for React, not fa-cubes (MySQL)
html_content = html_content.replace('fa-cubes', 'fa-react')

with open(os.path.join(workspace, 'react-course.html'), 'w', encoding='utf-8') as f:
    f.write(html_content)

# 2. Create react-course.css
with open(os.path.join(workspace, 'mysql-course.css'), 'r', encoding='utf-8') as f:
    css_content = f.read()

with open(os.path.join(workspace, 'react-course.css'), 'w', encoding='utf-8') as f:
    f.write(css_content)

# 3. Create react-course.js
with open(os.path.join(workspace, 'mysql-course.js'), 'r', encoding='utf-8') as f:
    js_content = f.read()

dom_logic_match = re.search(r'\];\s*// Build UI.*', js_content, re.DOTALL)
dom_logic = dom_logic_match.group(0).replace('];', '')

modules_raw = notes.split('## ')
modules_raw = modules_raw[1:]

course_data_str = "document.addEventListener('DOMContentLoaded', () => {\n    const courseData = [\n"

for i, mod_raw in enumerate(modules_raw):
    parts = mod_raw.split('\\n', 1)
    if len(parts) < 2:
        parts = mod_raw.split('\n', 1)
    title = parts[0].strip()
    title = title.replace("'", "\\'").replace('"', '\\"')
    
    content = parts[1].strip()
    
    # Extract code blocks
    code_blocks = []
    def code_replacer(match):
        code_blocks.append(match.group(1))
        return f"\\n\\nCODE_BLOCK_{len(code_blocks)-1}\\n\\n"
    
    content = re.sub(r'```(?:sql|bash|javascript|jsx|tsx)\n(.*?)```', code_replacer, content, flags=re.DOTALL)
    
    # Escape Template Literal characters
    content = content.replace('\\', '\\\\')
    content = content.replace('`', '\\`')
    content = content.replace('$', '\\$')
    
    # Inline formatting
    content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
    content = re.sub(r'\*(.*?)\*', r'<em>\1</em>', content)
    content = re.sub(r'\\`(.*?)\\`', r'<code>\1</code>', content) 
    
    # Headers
    content = re.sub(r'### (.*?)\n', r'<h3>\1</h3>\n', content)
    
    # Lists
    content = re.sub(r'^(\*|\d+\.)\s+(.*?)$', r'<li>\2</li>', content, flags=re.MULTILINE)
    
    blocks = content.split('\n\n')
    formatted_blocks = []
    
    for block in blocks:
        block = block.strip()
        if not block:
            continue
            
        if block.startswith('CODE_BLOCK_'):
            idx = int(block.replace('CODE_BLOCK_', ''))
            code = code_blocks[idx]
            code = code.replace('\\', '\\\\')
            code = code.replace('`', '\\`')
            code = code.replace('$', '\\$')
            formatted_blocks.append(f'<pre><code>{code}</code></pre>')
        elif block.startswith('<li>'):
            formatted_blocks.append(f'<ul>\n{block}\n</ul>')
        elif block.startswith('<h3>'):
            formatted_blocks.append(block)
        else:
            block = block.replace('\n', '<br>')
            formatted_blocks.append(f'<p>{block}</p>')
            
    content = '\n\n'.join(formatted_blocks)
    
    course_data_str += f"""        {{
            id: 'ch{i+1}',
            title: '{title}',
            content: `\\n{content}\\n`
        }},
"""

course_data_str = course_data_str.rstrip(',\n') + "\n    ];\n"
course_data_str += dom_logic

with open(os.path.join(workspace, 'react-course.js'), 'w', encoding='utf-8') as f:
    f.write(course_data_str)


# 4. Update index.html
with open(os.path.join(workspace, 'index.html'), 'r', encoding='utf-8') as f:
    index_content = f.read()

index_content = re.sub(
    r'<button[^>]*>Learn\s*React</button>',
    r'<button class="btn btn-secondary" onclick="window.location.href=\'react-course.html\'">Learn React</button>',
    index_content,
    flags=re.IGNORECASE | re.MULTILINE | re.DOTALL
)

with open(os.path.join(workspace, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_content)


# 5. Clean up dashboard.js
dash_path = os.path.join(workspace, 'dashboard.js')
with open(dash_path, 'r', encoding='utf-8') as f:
    dash_content = f.read()

# Remove old react block
dash_content = re.sub(r'\s*react:\s*\{.*?code:\s*`.*?`\s*\},', '', dash_content, flags=re.DOTALL)

# Inject routing
dash_route = """
      if (langKey === 'react') {
        window.location.href = 'react-course.html';
        return;
      }
"""
dash_content = dash_content.replace("if (langKey === 'sql') {", dash_route.lstrip() + "      if (langKey === 'sql') {")

dash_url_route = "    else if (urlLang === 'react') window.location.href = 'react-course.html';\n"
dash_content = dash_content.replace("else if (urlLang === 'sql')", dash_url_route + "    else if (urlLang === 'sql')")

with open(dash_path, 'w', encoding='utf-8') as f:
    f.write(dash_content)


print("Full React Integration Complete!")

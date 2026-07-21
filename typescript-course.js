document.addEventListener('DOMContentLoaded', () => {
    const courseData = [
        {
            id: 'ch1',
            title: 'Module1: Introduction to TypeScript (The Armor for JavaScript)',
            content: `\n<h3>1. What is TypeScript and Why Does it Exist?</h3>
JavaScript is incredibly flexible, but that flexibility is a curse in massive enterprise applications. Because JS is "Dynamically Typed", you can create a variable meant to hold a user's Age (a Number), and completely by accident, later assign an Array of Strings to it. JavaScript will not warn you. It will just crash in the user's browser, costing companies millions.

<p><strong>TypeScript (TS)</strong>, created by Microsoft, solves this. It is a "Strict Superset" of JavaScript. It takes the exact same JavaScript you already know, but wraps it in titanium armor. It forces you to declare EXACTLY what type of data is allowed in every variable, function, and object.</p>

<h3>2. TypeScript vs JavaScript (Compile-Time vs Run-Time)</h3>
<em>   <strong>JavaScript:</strong> Finds errors at </em>Run-Time*. The developer writes the code, assumes it works, uploads it, and the error only happens when a real user clicks a button and triggers the bad code.
<em>   <strong>TypeScript:</strong> Finds errors at </em>Compile-Time*. As you are typing the code in VS Code, TypeScript is scanning it. If you try to pass a String into a Math function, TS instantly throws a massive red underline and REFUSES to let you run the code.

<h3>3. Applications (Where is TypeScript Used?)</h3>
<li><strong>Massive Codebases:</strong> Any application over 10,000 lines of code (like Facebook, Netflix, or Spotify) uses TypeScript. Without it, tracking data types across thousands of files is impossible for the human brain.</li>
<li><strong>React & Angular:</strong> Modern frontend frameworks default to TypeScript to ensure UI components receive the exact correct data.</li>

<h3>4. The Compilation Process (tsc)</h3>
Here is the catch: <strong>Browsers cannot read TypeScript.</strong> They only speak HTML, CSS, and plain JavaScript. 
Therefore, you must <em>Compile</em> (translate) your <code>.ts</code> files into <code>.js</code> files.

<pre><code># This command invokes the TypeScript Compiler.
# It reads 'app.ts', checks it for errors, strips away the armor, 
# and spits out a perfectly safe 'app.js' file that the browser can run!
tsc app.ts 
</code></pre>

<h3>5. Configuration (tsconfig.json)</h3>
This file is the "Brain" of your compiler. It defines exactly how strict the rules are.
<li><code>"strict": true</code> - Turns on every single strict rule. It forces you to type everything and prevents variables from secretly being <code>null</code>.</li>
<li><code>"target": "ES2022"</code> - Tells the compiler: "Translate my TypeScript into modern 2022 JavaScript, not ancient 2009 JavaScript."</li>

<p>---</p>\n`
        },
        {
            id: 'ch2',
            title: 'Module2: TypeScript Fundamentals (The Strict Bouncer)',
            content: `\n<h3>1. Type Annotations (The ID Check)</h3>
In TS, you act like a strict bouncer at a club. You explicitly declare exactly what type of data is allowed inside a variable using a colon <code>:</code>. Once declared, the type is locked forever.

<pre><code>let age: number = 25;
let username: string = "Alice";
let isOnline: boolean = true;

// ERROR: Type 'string' is not assignable to type 'number'.
// age = "Twenty Five"; 
</code></pre>

<h3>2. Type Inference (The Smart Detective)</h3>
Programmers are lazy. You don't actually have to type <code>: string</code> every time. If you assign a value immediately, TypeScript's inference engine acts like a detective and automatically locks the type for you.

<pre><code>let score = 100; // TS instantly infers this is a Number.
// score = "A+"; // ERROR! TS remembers it was supposed to be a Number!
</code></pre>

<h3>3. The Dangerous 'any' Type (Turning off the Bouncer)</h3>
Using <code>any</code> completely disables TypeScript's safety checks for that specific variable. It reverts the variable back to chaotic JavaScript rules.

<pre><code>let chaoticVariable: any = "Hello";
chaoticVariable = 500; // No error.
chaoticVariable = [1, 2, 3]; // No error.
</code></pre>

<p><em>Rule of Thumb:</em> <strong>NEVER use 'any'.</strong> If you use 'any', you are defeating the entire purpose of installing TypeScript in the first place.</p>

<h3>4. unknown, never, and void (Advanced Fundamentals)</h3>
<li><strong><code>void</code>:</strong> The return type for a function that does absolutely nothing except execute code (e.g., a function that just <code>console.log()</code>s a message and doesn't return data).</li>
<li><strong><code>unknown</code>:</strong> Similar to <code>any</code>, but extremely safe. You can assign anything to it, but TS will REFUSE to let you use it until you use an <code>if</code> statement to prove what type it is.</li>
<li><strong><code>never</code>:</strong> Used for functions that are mathematically impossible to finish (like a function containing an infinite <code>while(true)</code> loop, or a function that exists solely to crash the app by throwing an Error).</li>

<h3>5. Type Aliases (Creating Custom Labels)</h3>
Why use the basic built-in types when you can invent your own?

<pre><code>// We invented a new Type named 'ID'
type ID = string | number;

let studentId: ID = "A123"; // Valid
let teacherId: ID = 99;     // Valid
// let adminId: ID = true;  // ERROR! Boolean is not allowed!
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch3',
            title: 'Module3: Control Flow (The Intelligent Crossroads)',
            content: `\n<p>TypeScript uses the exact same <code>if/else</code>, <code>switch</code>, and loops as JavaScript, but the compiler performs "Control Flow Analysis" to make your code safer.</p>

<h3>1. The Ternary Operator (The One-Line IF)</h3>
Instead of writing 5 lines for an if/else, do it in one single, clean line.

<pre><code>let age: number = 20;
// Condition ? What happens if True : What happens if False
let status: string = age >= 18 ? "Adult" : "Minor";
</code></pre>

<h3>2. Loops (for...of vs for...in)</h3>
<em>   <strong><code>for...of</code>:</strong> Used for looping through the actual </em>values* inside an Array.
<em>   <strong><code>for...in</code>:</strong> Used for looping through the </em>Keys* (property names) of an Object.

<pre><code>let colors: string[] = ["Red", "Green", "Blue"];

for (let color of colors) {
    // Because 'colors' is a string[], TS knows 'color' is a string!
    // So if you typed color.toFixed(), TS would error because you can't do math on text!
    console.log(color.toUpperCase()); 
}
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch4',
            title: 'Module4: Functions (Strict Code Factories)',
            content: `\n<h3>1. Typing Parameters and Returns</h3>
A function is a factory. In TS, you must explicitly declare exactly what materials the factory accepts (Parameters), and exactly what product the factory will output (Return Type).

<pre><code>// Accepts two numbers. Promises to return a number.
function calculateTax(price: number, taxRate: number): number {
    return price + (price * taxRate);
}
</code></pre>

<h3>2. Optional & Default Parameters</h3>
<li><strong>Optional (<code>?</code>):</strong> Tells TS "This argument is not required. It might be undefined."</li>
<li><strong>Default (<code>=</code>):</strong> Gives a fallback value if the user forgets to provide one.</li>

<pre><code>// 'title' is optional. If left blank, TS won't complain.
function greet(name: string, title?: string) {
    if (title) {
        console.log(\`Hello, \${title} \${name}\`);
    } else {
        console.log(\`Hello, \${name}\`);
    }
}
</code></pre>

<h3>3. Rest Parameters (The Infinite Argument Trap)</h3>
How do you accept 5, 10, or 1,000 numbers into a function without writing 1,000 parameters? You use the <code>...</code> operator to pack them into a strictly typed Array!

<pre><code>function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((total, current) => total + current, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5)); // Returns 15
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch5',
            title: 'Module5: Arrays & Tuples (Strict Collections)',
            content: `\n<h3>1. Arrays (The Locked Backpacks)</h3>
In plain JS, an array can hold <code>[1, "Apple", true, {}]</code>. This is chaos.
In TS, you must declare exactly what type of items are allowed inside the array.

<pre><code>let scores: number[] = [90, 85, 100];
// scores.push("A"); -> ERROR! TS physically blocks you from putting text in a number array!
</code></pre>

<h3>2. Tuples (The Fixed Array)</h3>
A Tuple is an incredibly strict array where you know EXACTLY how many items are in it, and EXACTLY what type each slot must be.
<em>Analogy:</em> A GPS Coordinate is always exactly 2 numbers (Latitude, Longitude). It can never be 3 numbers. It can never be text.

<pre><code>// Slot 0 MUST be a string. Slot 1 MUST be a number. There cannot be a Slot 2.
let employeeRecord: [string, number] = ["Alice", 50000];
</code></pre>

<h3>3. Readonly Arrays (The Glass Display Case)</h3>
If you are passing an array into a dangerous function and you want to mathematically guarantee that the function won't accidentally delete or modify your data, lock it in a glass case!

<pre><code>let constants: ReadonlyArray<number> = [3.14, 9.81];
// constants.push(5); -> TS Error! The array is sealed forever.
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch6',
            title: 'Module6: Objects & Interfaces (The VIP Blueprints)',
            content: `\n<h3>1. Object Types vs Interfaces</h3>
In TypeScript, you can define the "shape" of an object using either a <code>type</code> or an <code>interface</code>. 
<li><strong><code>type</code>:</strong> Great for combining things (Unions, Intersections).</li>
<li><strong><code>interface</code>:</strong> The industry standard for defining the exact structure of a JSON object. Interfaces are better because they can be "extended" (inherited).</li>

<h3>2. The Strict Contract (Interfaces)</h3>
When you create an interface, you create a strict contract. If an object claims to follow that contract, it MUST possess every single property listed, with the exact correct data type. If it is missing a property, or has an extra property, TS throws an error.

<pre><code>interface UserProfile {
    username: string;
    email: string;
    age: number;
}

// ERROR: TS will crash because 'age' is missing from this object!
let myProfile: UserProfile = {
    username: "Alex",
    email: "alex@test.com"
};
</code></pre>

<h3>3. Optional Properties (?) & Readonly</h3>
<li><strong><code>?</code> (Optional):</strong> Tells TS "This property is allowed to be missing."</li>
<li><strong><code>readonly</code>:</strong> Tells TS "This property can be set ONCE when the object is created, but it can never be changed again." Perfect for database IDs!</li>

<pre><code>interface SecureUser {
    readonly id: number; // Locked forever!
    username: string;
    bio?: string; // Optional! We don't care if it's missing.
}
</code></pre>

<h3>4. Interface Extension (Inheritance)</h3>
You don't want to copy-paste the exact same properties for an <code>Admin</code> interface if an Admin is just a <code>User</code> with extra powers. You use <code>extends</code>.

<pre><code>interface AdminProfile extends SecureUser {
    adminLevel: number;
    canBanUsers: boolean;
}
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch7',
            title: 'Module7: Classes & OOP (The Master Blueprint)',
            content: `\n<h3>1. Access Modifiers (Military Grade Security)</h3>
JavaScript classes are completely exposed. Anyone can change any variable from the outside. TypeScript adds true Object-Oriented privacy.
<li><strong><code>public</code>:</strong> (Default) Anyone can see and change this variable from anywhere in the codebase.</li>
<li><strong><code>private</code>:</strong> ONLY the class itself can see this variable. (If you try to access <code>myBank.vaultCode</code> from the main file, TS physically blocks you).</li>
<li><strong><code>protected</code>:</strong> Only the class itself AND its "children" (classes that inherit from it) can see this.</li>

<pre><code>class BankAccount {
    public owner: string;
    private balance: number; // SECURED. Hackers cannot access this from the outside.

    constructor(owner: string, initialDeposit: number) {
        this.owner = owner;
        this.balance = initialDeposit;
    }

    // A secure 'Getter' function to let people view the balance safely
    public viewBalance() {
        return this.balance;
    }
}
</code></pre>

<h3>2. Abstract Classes (The Ghost Blueprints)</h3>
An <code>abstract</code> class is a blueprint that is so generic, you are NOT ALLOWED to build an object out of it. It exists purely so other classes can inherit its rules.
<em>Analogy:</em> You can't just build an "Animal". You have to build a "Dog" or a "Cat" that <em>inherits</em> from Animal.

<pre><code>abstract class Animal {
    abstract makeSound(): void; // Forces all children to invent their own sound!
    walk() { console.log("Walking..."); }
}

class Dog extends Animal {
    makeSound() { console.log("Woof!"); } // Must exist, or TS crashes!
}
// let myAnimal = new Animal(); -> ERROR! Cannot build a ghost!
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch8',
            title: 'Module8: Advanced Types (Type Gymnastics)',
            content: `\n<h3>1. Union Types (|)</h3>
Allows a variable to be one of multiple types. (Like an "OR" statement).

<pre><code>let networkStatus: "loading" | "success" | "error";
networkStatus = "success"; // Valid
// networkStatus = "offline"; // ERROR! Not one of the 3 allowed strings!
</code></pre>

<h3>2. Type Guards (The Detective Check)</h3>
If a variable is a Union (<code>string | number</code>), TS won't let you do Math on it because it <em>might</em> be a string. You must use <code>typeof</code> to prove to TS what it is!

<pre><code>function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // TS now knows it is 100% a string here!
    } else {
        console.log(id * 10); // TS now knows it is 100% a number here!
    }
}
</code></pre>

<h3>3. Utility Types (Built-in Magic)</h3>
TypeScript has built-in functions that manipulate your massive interfaces instantly!
<li><code>Partial<User></code>: Magically makes every single property in the User interface Optional. (Great for "Update Profile" forms where you only update 1 field).</li>
<li><code>Required<User></code>: Makes every property Mandatory.</li>
<li><code>Pick<User, "email" | "username"></code>: Extracts ONLY the email and username properties into a new mini-interface.</li>
<li><code>Omit<User, "password"></code>: Takes the whole User interface but physically deletes the password property so it doesn't accidentally get sent to the frontend.</li>

<p>---</p>\n`
        },
        {
            id: 'ch9',
            title: 'Module9: Modules (Organizing the Empire)',
            content: `\n<p>In massive enterprise projects, you cannot put 100,000 lines of code in <code>app.ts</code>. You split them into separate files.</p>

<h3>1. Named Exports vs Default Exports</h3>
<li><strong>Named Export:</strong> You export specific tools from a file. You must import them using their exact name inside <code>{}</code> brackets.</li>
<li><strong>Default Export:</strong> You export the "Main" thing from a file. You can import it and name it whatever you want.</li>

<pre><code>// --- file: mathUtils.ts ---
export function add(a: number, b: number) { return a + b; } // Named
export default class Calculator {} // Default

// --- file: main.ts ---
import MyCustomCalcName, { add } from './mathUtils';
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch10',
            title: 'Module10: Asynchronous TypeScript (Time Travel & APIs)',
            content: `\n<p>When fetching data from a database or an API across the internet, the data takes time to arrive.</p>

<h3>1. Promises & Async/Await with Types</h3>
When you use <code>fetch()</code>, TypeScript has NO IDEA what the JSON data looks like. It assumes it is <code>any</code>. You must manually create an Interface and attach it to the Promise so TS can protect you!

<pre><code>interface Post {
    id: number;
    title: string;
    body: string;
}

// Notice the Return Type: It is a Promise that promises to eventually deliver an Array of Posts!
async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();
    return data;
}
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch11',
            title: 'Module11: Generics (The Ultimate Reusability Trick)',
            content: `\n<p>Generics <code><T></code> act like variables, but for <em>Types</em> instead of values.<br><em>Analogy:</em> A Generic function is a completely blank Tupperware container. It doesn't care if you put chicken or pasta inside. It just promises the compiler that whatever type of food goes in, will be the exact same type of food that comes out.</p>

<h3>1. Generic Functions</h3>
If we didn't use Generics, we would have to write 50 different functions to handle 50 different data types.

<pre><code>// 'T' stands for "Type". We don't know what it is yet!
function getFirstItem<T>(array: T[]): T {
    return array[0];
}

// Now we tell TS that T is a String!
let firstString = getFirstItem<string>(["Apple", "Banana"]); 

// Now we reuse the EXACT same function, but tell TS that T is a Number!
let firstNumber = getFirstItem<number>([100, 200, 300]); 
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch12',
            title: 'Module12: Advanced Features (The Modern Toolkit)',
            content: `\n<h3>1. Optional Chaining (?.)</h3>
When dealing with massive JSON objects from a database, some properties might be missing. If you try to read <code>user.profile.address.street</code>, but the user hasn't filled out their profile yet, the entire application crashes with the infamous <code>TypeError: Cannot read properties of undefined</code>.
Optional chaining stops the crash instantly.

<pre><code>// If profile or address is missing, TS stops looking and safely returns 'undefined'
let street = user?.profile?.address?.street;
</code></pre>

<h3>2. Nullish Coalescing (??)</h3>
The old JS way of providing a fallback value was <code>||</code> (OR). But <code>||</code> is dangerous because it treats <code>0</code> and <code>""</code> (empty string) as falsy.
<code>??</code> provides a default value ONLY if the variable is strictly <code>null</code> or <code>undefined</code>.

<pre><code>let userScore = 0;
// If we used || here, fallback would be 100 because 0 is falsy!
// Using ?? safely recognizes that 0 is a valid score!
let finalScore = userScore ?? 100; // finalScore remains 0
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch13',
            title: 'Module13: TypeScript with Frameworks (The Real World)',
            content: `\n<p>TypeScript is rarely used to write vanilla terminal scripts. It is the backbone of massive frontend frameworks.</p>

<h3>1. TypeScript with React (.tsx)</h3>
When using React, your files end in <code>.tsx</code>. You must create Interfaces to strictly type the Props that flow into your Components. This guarantees that your teammates cannot use your Button component without passing a required <code>title</code>!

<pre><code>interface ButtonProps {
    title: string;
    onClick: () => void; // A function that returns nothing
    isDisabled?: boolean; // Optional boolean
}

// React Component with Strict Props
const CustomButton = ({ title, onClick, isDisabled }: ButtonProps) => {
    return <button onClick={onClick} disabled={isDisabled}>{title}</button>;
};
</code></pre>

<h3>2. TypeScript with Node & Express</h3>
When building a REST API Backend, you must strictly type the Requests flowing in from hackers, and the Responses flowing out to your users.

<pre><code>import express, { Request, Response } from 'express';
const app = express();

app.get('/api/user', (req: Request, res: Response) => {
    res.json({ id: 1, name: "Admin" });
});
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch14',
            title: 'Module14: Testing & Debugging (Bulletproofing the Armor)',
            content: `\n<h3>1. The Illusion of Safety</h3>
TypeScript ONLY protects you before you hit the "Run" button.
If you fetch data from an external API, and the API sends you a String instead of a Number, your TypeScript code will blindly accept it and crash at runtime in the browser. 
To fix this, enterprise apps use libraries like <strong>Zod</strong> or <strong>Yup</strong> to physically validate the data at runtime, acting as a second layer of armor.

<h3>2. ESLint & Prettier</h3>
<li><strong>ESLint:</strong> A strict robotic code reviewer. It scans your code and yells at you (with yellow squiggly lines) if you write inefficient code, like declaring a variable you never use.</li>
<li><strong>Prettier:</strong> A robotic formatter. Every time you press <code>Ctrl+S</code> (Save), Prettier instantly reformats your code, fixing all spacing, tabs, and semicolons to match industry standards.</li>

<p>---</p>\n`
        },
        {
            id: 'ch15',
            title: 'Module15: Practice (The 10,000 Hour Rule)',
            content: `\n<p>You cannot learn TypeScript by just reading. You MUST type.</p>

<ul>
<li><strong>Challenge 1 (Generics):</strong> Write a generic function <code>reverseArray<T></code> that takes an array of ANY type, and returns it reversed, maintaining perfect type safety.</li>
<li><strong>Challenge 2 (Interfaces):</strong> Create an <code>Employee</code> interface and a <code>Manager</code> interface that extends it. Write a function that only accepts a <code>Manager</code>. If you pass a regular <code>Employee</code>, TS should throw an error.</li>
<li><strong>Challenge 3 (Type Guards):</strong> Write a function that accepts a parameter <code>input: string | number | boolean</code>. Use <code>typeof</code> to do something different for each specific type.</li>
</ul>

<p>---</p>\n`
        },
        {
            id: 'ch16',
            title: 'Module16: Projects (Building the Real World)',
            content: `\n<p>Do not get stuck in "Tutorial Hell". Build these to prove you know TypeScript to employers:</p>

<ul>
<li><strong>Level 1 (Beginner):</strong> A Command-Line To-Do App. Create a <code>Task</code> interface (id, title, isCompleted). Build a class that manages an array of these Tasks with strictly typed methods to add, delete, and complete them.</li>
<li><strong>Level 2 (Intermediate):</strong> A Weather App fetching real data from a REST API. You MUST use tools like quicktype.io to automatically generate massive, perfect TypeScript interfaces that match the API's JSON response!</li>
<li><strong>Level 3 (Advanced):</strong> A full-stack E-commerce Dashboard. Use React (<code>.tsx</code>) for the frontend, Node.js and Express for the backend, and strict Database typings. </li>
</ul>

<p><strong><em>End of TypeScript Masterclass</strong></em></p>\n`
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

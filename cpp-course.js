document.addEventListener('DOMContentLoaded', () => {
    
    const courseData = [
        {
            id: 'ch1',
            title: 'Module 1: Introduction',
            content: `
                <h3>What is C++?</h3>
                <p>Think of C++ as a supercharged version of the C programming language. It is incredibly fast and gives you direct control over your computer's hardware, but it also adds <strong>Object-Oriented Programming (OOP)</strong>. This means you can organize your code into "Objects" (like building blocks), making it much easier to build massive applications like video games or operating systems!</p>
                
                <h3>Structure of a C++ Program</h3>
                <p>Every C++ program has a basic "skeleton" or boilerplate that you must write before doing anything else.</p>
                <pre><code>#include &lt;iostream&gt;
using namespace std; // This saves us from typing "std::" over and over!

int main() {
    // Execution always starts inside the main() function!
    cout &lt;&lt; "Hello, C++ World!"; 
    return 0; // Tells the computer everything went okay.
}</code></pre>

                <h3>Key Concepts to Remember</h3>
                <ul>
                    <li><strong>Namespaces (<code>using namespace std;</code>):</strong> Imagine a school with two students named "John". To avoid confusion, you use their last names. Namespaces do the same thing for code—they group things together to avoid naming conflicts!</li>
                    <li><strong>Comments:</strong> Use <code>//</code> to write notes to yourself that the computer will ignore. It's crucial for explaining <em>why</em> you wrote a piece of code.</li>
                </ul>
            `
        },
        {
            id: 'ch2',
            title: 'Module 2: Basics',
            content: `
                <h3>Variables (Storing Data)</h3>
                <p>Think of a variable as a labeled box where you can store information. Before you create the box, you must tell the computer <em>what kind of thing</em> will go inside it using a <strong>Data Type</strong>.</p>
                <ul>
                    <li><code>int</code>: Use for whole numbers (e.g., 25)</li>
                    <li><code>double</code>: Use for decimals (e.g., 3.14)</li>
                    <li><code>char</code>: Use for a single letter in single quotes (e.g., 'A')</li>
                    <li><code>bool</code>: Use for true or false values</li>
                </ul>

                <h3>Taking Input and Giving Output</h3>
                <p>In C++, <code>cout</code> (Character Output) is used to print to the screen, and <code>cin</code> (Character Input) is used to ask the user for data.</p>
                <pre><code>int yourAge;
cout &lt;&lt; "Please enter your age: "; // Asking a question
cin &gt;&gt; yourAge;                    // Waiting for the user to type a number
cout &lt;&lt; "Wow, you are " &lt;&lt; yourAge &lt;&lt; " years old!\\n";</code></pre>
            `
        },
        {
            id: 'ch3',
            title: 'Module 3: Control Statements',
            content: `
                <h3>Making Decisions (If / Else)</h3>
                <p>Control statements allow your code to make choices based on different conditions, just like in real life!</p>
                <pre><code>int score = 85;

if (score >= 90) {
    cout &lt;&lt; "You got an A! Amazing!";
} else if (score >= 80) {
    cout &lt;&lt; "You got a B! Great job!";
} else {
    cout &lt;&lt; "Keep practicing, you'll get it!";
}</code></pre>

                <h3>Repeating Things (Loops)</h3>
                <p>Loops are used when you want to repeat the same block of code multiple times without typing it out over and over.</p>
                <ul>
                    <li><strong>for loop:</strong> Best when you know <em>exactly</em> how many times to repeat something (e.g., "Count to 10").</li>
                    <li><strong>while loop:</strong> Best when you want to repeat something <em>until</em> a specific condition changes (e.g., "Keep playing music while the battery is alive").</li>
                </ul>
                <pre><code>// A simple for loop that counts from 1 to 5
for (int i = 1; i <= 5; i++) {
    cout &lt;&lt; i &lt;&lt; " "; // Output: 1 2 3 4 5
}</code></pre>
            `
        },
        {
            id: 'ch4',
            title: 'Module 4: Functions',
            content: `
                <h3>What is a Function?</h3>
                <p>A function is a reusable block of code that performs a specific job. Imagine a coffee machine: you give it water and beans (the <strong>inputs</strong>), and it gives you coffee (the <strong>output</strong>). Functions work exactly the same way!</p>

                <pre><code>// This is a function that adds two numbers together
int addNumbers(int a, int b) {
    return a + b; // The output
}

int main() {
    int total = addNumbers(10, 5); // We "call" the function here
    cout &lt;&lt; "The total is: " &lt;&lt; total;
    return 0;
}</code></pre>

                <h3>Pass by Value vs. Pass by Reference</h3>
                <p>This is a super important concept in C++!</p>
                <ul>
                    <li><strong>Pass by Value:</strong> When you send a variable to a function, C++ makes a <em>photocopy</em> of it. If the function changes it, the original remains perfectly safe.</li>
                    <li><strong>Pass by Reference (<code>&amp;</code>):</strong> If you use an ampersand, you send the <em>actual</em> variable. If the function changes it, the original variable changes too!</li>
                </ul>
            `
        },
        {
            id: 'ch5',
            title: 'Module 5: Arrays & Strings',
            content: `
                <h3>Arrays (Lists of Data)</h3>
                <p>If you need to store 50 student grades, making 50 different variables would be a nightmare! An array lets you store all 50 grades in a single list.</p>
                <pre><code>// An array storing 3 integers
int grades[3] = {85, 90, 95};
cout &lt;&lt; "First grade: " &lt;&lt; grades[0]; // Remember, computers start counting at 0!</code></pre>

                <h3>Strings (Text)</h3>
                <p>In the old days of C, text was handled using messy character arrays. C++ introduced the <code>std::string</code> class, which makes working with text a breeze!</p>
                <pre><code>#include &lt;string&gt;

string firstName = "Harry";
string lastName = "Potter";
string fullName = firstName + " " + lastName; // You can just add strings together!

cout &lt;&lt; "Welcome, " &lt;&lt; fullName &lt;&lt; "!";</code></pre>
            `
        },
        {
            id: 'ch6',
            title: 'Module 6: Pointers & Memory',
            content: `
                <h3>What are Pointers?</h3>
                <p>Think of your computer's RAM (memory) as a giant neighborhood with millions of houses, and every house has a unique <strong>address</strong>. A <strong>Pointer</strong> is simply a variable that stores the street address of another variable.</p>
                
                <pre><code>int age = 25;
int* addressOfAge = &amp;age; // The & symbol gets the address!

// This prints the actual value (25) using the pointer!
cout &lt;&lt; "Value: " &lt;&lt; *addressOfAge; </code></pre>

                <h3>Dynamic Memory (new and delete)</h3>
                <p>Sometimes you don't know how much memory you need until the program is running. You can ask the computer for memory on the fly using the <code>new</code> keyword.</p>
                <p><strong>CRITICAL RULE:</strong> If you borrow memory using <code>new</code>, you MUST give it back using <code>delete</code>, or your program will suffer from a "memory leak" and eventually crash!</p>
            `
        },
        {
            id: 'ch7',
            title: 'Module 7: Object-Oriented Programming (OOP)',
            content: `
                <h3>Classes and Objects</h3>
                <p>This is the heart of C++! A <strong>Class</strong> is a blueprint, and an <strong>Object</strong> is the actual thing you build from that blueprint.</p>
                <p>For example, "Car" is a Class (the concept), but a "Red Toyota Camry" is the Object (the actual thing).</p>
                
                <pre><code>class Dog {
public: // Anyone can access this!
    string name;
    
    void bark() {
        cout &lt;&lt; name &lt;&lt; " says Woof!";
    }
};

int main() {
    Dog myDog; // Creating an object
    myDog.name = "Buddy";
    myDog.bark(); // Output: Buddy says Woof!
    return 0;
}</code></pre>

                <h3>The 4 Pillars of OOP (Simplified)</h3>
                <ol>
                    <li><strong>Encapsulation:</strong> Putting data in a protective bubble (using <code>private</code>) so outside code can't accidentally break it.</li>
                    <li><strong>Abstraction:</strong> Hiding the complex inner workings (like a car engine) and only showing the simple controls (like the steering wheel).</li>
                    <li><strong>Inheritance:</strong> A child class inheriting features from a parent class (e.g., A "Dog" class inheriting from an "Animal" class).</li>
                    <li><strong>Polymorphism:</strong> The ability for different objects to share the same action name, but behave differently (e.g., A Dog "speaks" by barking, a Cat "speaks" by meowing).</li>
                </ol>
            `
        },
        {
            id: 'ch8',
            title: 'Module 8: Advanced OOP',
            content: `
                <h3>Constructors and Destructors</h3>
                <p>A <strong>Constructor</strong> is a special function that runs <em>automatically</em> the exact moment an object is created. It's used to set everything up.</p>
                <p>A <strong>Destructor</strong> runs <em>automatically</em> right before an object is destroyed. It's used to clean up messes (like closing files or deleting memory).</p>

                <h3>Virtual Functions</h3>
                <p>When you have a Parent class and a Child class, you might want the Child class to completely rewrite a function it inherited from the Parent. You do this by marking the Parent's function as <code>virtual</code>. This tells the compiler: "Hey, check if the child has a newer version of this before running it!"</p>
            `
        },
        {
            id: 'ch9',
            title: 'Module 9: Exception Handling',
            content: `
                <h3>Catching Errors Gracefully</h3>
                <p>Normally, if a critical error happens in your code (like dividing by zero), the entire program instantly crashes. Exception handling allows you to catch the error and handle it safely without crashing.</p>

                <p>It uses three keywords: <code>try</code> (try running this risky code), <code>throw</code> (throw an error if something goes wrong), and <code>catch</code> (catch the error and fix it).</p>

                <pre><code>try {
    int age = 15;
    if (age &lt; 18) {
        throw "You are too young!"; // We throw an error message
    }
} catch (const char* errorMsg) {
    // The program doesn't crash! It jumps here instead.
    cout &lt;&lt; "Access denied: " &lt;&lt; errorMsg;
}</code></pre>
            `
        },
        {
            id: 'ch10',
            title: 'Module 10: File Handling',
            content: `
                <h3>Saving Data Permanently</h3>
                <p>Normally, when a C++ program closes, all variables and data are instantly deleted from RAM. To save data permanently, you must write it to a file on your hard drive!</p>
                
                <p>C++ uses <code>ofstream</code> (Output File Stream) to write to files, and <code>ifstream</code> (Input File Stream) to read from them.</p>

                <pre><code>#include &lt;fstream&gt; // Required for files!
using namespace std;

int main() {
    // Create and open a text file
    ofstream myFile("secret_notes.txt");
    
    // Write text to the file exactly like we use cout!
    myFile &lt;&lt; "This is my secret message.";
    
    // Always close the file when you are done!
    myFile.close(); 
    return 0;
}</code></pre>
            `
        },
        {
            id: 'ch11',
            title: 'Module 11: Templates',
            content: `
                <h3>The Power of Templates</h3>
                <p>Imagine you write a function to add two integers. Then you realize you also need to add two decimals (doubles). Do you rewrite the entire function? No! You use a Template.</p>
                <p>A Template allows you to write a function <em>once</em>, and C++ will automatically adapt it to work with <em>any</em> data type!</p>

                <pre><code>// "T" stands for Type. It will become whatever data type we need!
template &lt;typename T&gt;
T add(T a, T b) {
    return a + b;
}

int main() {
    cout &lt;&lt; add(5, 10);      // The compiler makes T an int automatically
    cout &lt;&lt; add(3.5, 2.1);   // The compiler makes T a double automatically
    return 0;
}</code></pre>
            `
        },
        {
            id: 'ch12',
            title: 'Module 12: STL (Standard Template Library)',
            content: `
                <h3>What is the STL?</h3>
                <p>The STL is like a magical toolbox that comes pre-installed with C++. Instead of spending hours writing your own complex lists or sorting algorithms from scratch, the brilliant creators of C++ already built them for you!</p>

                <h3>The Most Important Tool: Vectors</h3>
                <p>A <code>vector</code> is essentially an Array on steroids. A normal array is a fixed size (e.g., it can only hold 5 items). A vector can grow or shrink automatically as you add or remove items!</p>

                <pre><code>#include &lt;vector&gt;

int main() {
    vector&lt;int&gt; scores; // We created an empty list!
    
    scores.push_back(100); // The list is now size 1
    scores.push_back(95);  // The list is now size 2
    
    cout &lt;&lt; "First score: " &lt;&lt; scores[0]; 
    return 0;
}</code></pre>
            `
        },
        {
            id: 'ch13',
            title: 'Module 13: Modern C++',
            content: `
                <h3>C++ is Evolving!</h3>
                <p>C++ is constantly getting newer, easier features (like C++11, C++17, and C++20). Here are some modern tools you should start using:</p>
                
                <ul>
                    <li><code>auto</code>: Are you tired of typing out long data types? If you use <code>auto</code>, C++ will guess the data type for you automatically based on the value! (e.g., <code>auto myName = "John";</code>)</li>
                    <li><code>nullptr</code>: In the old days, developers used <code>NULL</code> for empty pointers. Modern C++ uses <code>nullptr</code>, which is much safer and prevents bugs.</li>
                    <li><strong>Range-Based For Loop:</strong> The absolute easiest way to loop through an array or vector without worrying about index numbers!</li>
                </ul>

                <pre><code>int luckyNumbers[] = {7, 13, 21};

// "For every number inside luckyNumbers..."
for (auto num : luckyNumbers) {
    cout &lt;&lt; num &lt;&lt; " "; 
}</code></pre>
            `
        },
        {
            id: 'ch14',
            title: 'Module 14: Practice',
            content: `
                <h3>How to Master C++</h3>
                <p>Reading notes is great, but <strong>you can only learn programming by typing code!</strong> Try building these starter programs:</p>
                
                <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-top: 15px;">
                    <ul style="margin: 0; padding-left: 20px;">
                        <li style="margin-bottom: 8px;"><strong>Basic:</strong> Build a program that asks for a number, and prints if it is Even or Odd using an if-statement.</li>
                        <li style="margin-bottom: 8px;"><strong>Loops:</strong> Write a <code>for</code> loop that prints out the multiplication table of 5 (5x1=5, 5x2=10...).</li>
                        <li style="margin-bottom: 8px;"><strong>OOP:</strong> Create a <code>BankAccount</code> class. Give it a private <code>balance</code> variable, and public <code>deposit()</code> and <code>withdraw()</code> functions!</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'ch15',
            title: 'Module 15: Projects',
            content: `
                <h3>Final Projects to Build</h3>
                <p>Once you are comfortable with the basics, challenge yourself by building a full console application! Here are the best projects for beginners:</p>
                
                <ol>
                    <li><strong>Simple Calculator:</strong> Use a <code>switch</code> statement to let the user choose to add, subtract, multiply, or divide two numbers.</li>
                    <li><strong>Tic-Tac-Toe Game:</strong> Use a 2D Array (a grid) to represent the board, and use loops to alternate turns between Player X and Player O.</li>
                    <li><strong>Student Management System:</strong> Use Classes to represent a Student. Ask the user for student names and grades, and use File Handling (<code>ofstream</code>) to save the data permanently to a <code>.txt</code> file on your computer!</li>
                </ol>

                <p style="margin-top: 20px; font-weight: bold; color: var(--primary-color);">Keep coding, keep building, and welcome to the world of C++!</p>
            `
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

        // Scroll Spy & Active Nav with Auto-Scroll Sidebar
    const sections = document.querySelectorAll('.course-section');
    const navItems = document.querySelectorAll('.nav-links a');
    let lastActive = '';

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        if (current !== lastActive) {
            lastActive = current;
            navItems.forEach(a => {
                a.classList.remove('active');
                if (current && a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                    // Automatically scroll the sidebar so the active item is always visible
                    a.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
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

document.addEventListener('DOMContentLoaded', () => {
    
    const courseData = [
    {
        id: 'ch1',
        title: 'Module 1: Introduction to Java (The Universal Engine)',
        content: `
            <p>Welcome to Java! Think of Java like an electric vehicle engine. It is powerful, strictly built, and highly regulated for safety.</p>
            <h3>WORA (Write Once, Run Anywhere)</h3>
            <p>Before Java, if you wrote a program for Windows, it wouldn't work on Mac. Java fixed this using the <strong>JVM (Java Virtual Machine)</strong>.</p>
            <ul>
                <li><em>Analogy</em>: Imagine writing a speech in English (Java Code). You give it to a Translator (JVM), and the Translator speaks it perfectly to French, Spanish, or German audiences (Windows, Mac, Linux).</li>
                <li>Because of this, Java powers everything from Android phones to massive banking systems and even NASA rovers!</li>
            </ul>
        `
    },
    {
        id: 'ch2',
        title: 'Module 2: Variables & Strongly Typed Data',
        content: `
            <p>Unlike JavaScript, Java is <strong>Strongly Typed</strong>. This means when you create a box (variable), you MUST label exactly what kind of item goes inside it. You cannot put a text string into a number box.</p>
            <pre><code>// Correct
int age = 25;
String name = "John";

// Error! Java will crash if you do this!
int score = "High"; // Cannot put String in an int box!</code></pre>
            <ul>
                <li><strong>Primitives:</strong> <code>int</code> (whole numbers), <code>double</code> (decimals), <code>boolean</code> (true/false), <code>char</code> (single letter).</li>
                <li><strong>Reference Types:</strong> <code>String</code>, Arrays, and Objects.</li>
            </ul>
        `
    },
    {
        id: 'ch3',
        title: 'Module 3: Object-Oriented Programming (The 4 Pillars)',
        content: `
            <p>Java is obsessed with Objects. Everything you build is based on <strong>Classes</strong> (Blueprints) and <strong>Objects</strong> (The physical things built from the blueprints).</p>
            <h3>The 4 Pillars of OOP (Interview Favorite!)</h3>
            <ol>
                <li><strong>Encapsulation:</strong> Hiding internal data. <em>Analogy:</em> You know how to use a steering wheel, but the complex engine wiring is hidden inside the car. (We use <code>private</code> variables for this).</li>
                <li><strong>Inheritance:</strong> Sharing traits. <em>Analogy:</em> A <code>Dog</code> class inherits breathing and eating from an <code>Animal</code> class.</li>
                <li><strong>Polymorphism:</strong> Many forms. <em>Analogy:</em> You tell a Dog to "speak" (it barks). You tell a Cat to "speak" (it meows). Same command, different behavior.</li>
                <li><strong>Abstraction:</strong> Hiding implementation details. <em>Analogy:</em> The TV remote has a power button. You don't need to know the circuit logic to use it.</li>
            </ol>
        `
    },
    {
        id: 'ch4',
        title: 'Module 4: Memory Management & Garbage Collection',
        content: `
            <p>In languages like C++, you have to manually delete data when you're done using it. If you forget, your computer runs out of memory and crashes. Java does this automatically!</p>
            <ul>
                <li><strong>Stack Memory:</strong> Used for quick, temporary variables (like <code>int age = 25</code>).</li>
                <li><strong>Heap Memory:</strong> Used for massive Objects and Arrays.</li>
                <li><strong>The Garbage Collector (GC):</strong> <em>Analogy:</em> A robotic janitor that constantly scans the Heap Memory. If it sees an Object that you are no longer using in your code, it automatically sweeps it into the trash to free up space!</li>
            </ul>
        `
    },
    {
        id: 'ch5',
        title: 'Module 5: Interfaces & Abstract Classes',
        content: `
            <p>What if you want to force other programmers to follow a specific rule when building classes? You use an Interface!</p>
            <ul>
                <li><strong>Interface:</strong> <em>Analogy:</em> A strict legal contract. If a class "signs" (implements) the contract, it MUST write code for all the methods listed in the contract.</li>
            </ul>
            <pre><code>interface Drivable {
    void startEngine(); // Rule: You MUST have a startEngine method!
}

class Car implements Drivable {
    public void startEngine() {
        System.out.println("Vroom!");
    }
}</code></pre>
        `
    },
    {
        id: 'ch6',
        title: 'Module 6: Exception Handling (try-catch-finally)',
        content: `
            <p>Programs crash. Files go missing, internet connections drop. If a crash happens, Java will completely shut down... unless you catch the exception!</p>
            <ul>
                <li><strong>try:</strong> "Try to read this file."</li>
                <li><strong>catch:</strong> "If it fails, do this INSTEAD of crashing." (<em>Analogy:</em> The airbag deploying during a crash).</li>
                <li><strong>finally:</strong> "Run this code no matter what, even if it crashed or succeeded."</li>
            </ul>
        `
    }    ,
    {
        id: 'ch7',
        title: 'Module 7: Access Modifiers & Packages',
        content: `
            <p>Access modifiers act like security guards for your classes and variables.</p>
            <ul>
                <li><strong>public:</strong> The VIP pass. Anyone, anywhere can access it.</li>
                <li><strong>private:</strong> Top secret! Only the code inside this exact class can see it. (Used for Encapsulation).</li>
                <li><strong>protected:</strong> Family only. Accessible within the same package, or by subclasses (child classes).</li>
                <li><strong>default:</strong> Neighbors only. Accessible only within the same package.</li>
            </ul>
        `
    },
    {
        id: 'ch8',
        title: 'Module 8: The Java Collections Framework',
        content: `
            <p>Standard Arrays in Java are terrible because their size is locked forever. Collections fix this!</p>
            <ul>
                <li><strong>ArrayList:</strong> A dynamic array. <em>Analogy:</em> A stretchy rubber band. It automatically grows as you add items. <code>list.add("Apple");</code></li>
                <li><strong>HashMap:</strong> Key-Value pairs. <em>Analogy:</em> A dictionary. You look up a word (Key) to find the definition (Value). Lightning fast lookups! <code>map.put("Alice", 95);</code></li>
                <li><strong>HashSet:</strong> A list with NO DUPLICATES. If you try to add "Apple" twice, it silently ignores the second one.</li>
            </ul>
        `
    },
    {
        id: 'ch9',
        title: 'Module 9: Generics (The Diamond Operator &lt;T&gt;)',
        content: `
            <p>Before Generics, you could put a <code>String</code>, an <code>Integer</code>, and a <code>Dog</code> all into the exact same ArrayList. This caused massive crashes when trying to read the data.</p>
            <p>Generics <code>&lt;T&gt;</code> force type-safety!</p>
            <pre><code>// The Diamond tells Java: THIS LIST ONLY ACCEPTS STRINGS!
ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;();
names.add("John");
names.add(5); // ERROR! The compiler stops you from making this mistake!</code></pre>
        `
    },
    {
        id: 'ch10',
        title: 'Module 10: Multithreading & Concurrency',
        content: `
            <p>Most programs do one thing at a time. Multithreading allows Java to do multiple things at the exact same time (like downloading a file while playing music).</p>
            <ul>
                <li><strong>Thread:</strong> A mini-program running inside your main program.</li>
                <li>You create a thread by extending the <code>Thread</code> class or implementing the <code>Runnable</code> interface.</li>
                <li><strong>Warning:</strong> Multithreading can cause "Race Conditions" if two threads try to edit the same variable at the same time. You must use the <code>synchronized</code> keyword to lock the variable!</li>
            </ul>
        `
    },
    {
        id: 'ch11',
        title: 'Module 11: File Handling (I/O)',
        content: `
            <p>Java can read and write files on your hard drive.</p>
            <ul>
                <li><strong>FileReader & BufferedReader:</strong> Used for reading text from a file quickly.</li>
                <li><strong>FileWriter & BufferedWriter:</strong> Used for writing text to a file.</li>
            </ul>
            <p><em>Note:</em> Always wrap file operations in a <code>try-catch</code> block, because the file might not exist (FileNotFoundException)!</p>
        `
    },
    {
        id: 'ch12',
        title: 'Module 12: Modern Java (Lambdas & Streams API)',
        content: `
            <p>Introduced in Java 8, this completely changed how Java is written. It makes Java look sleek and modern like JavaScript or Python.</p>
            <h3>Lambdas (->)</h3>
            <p>A shorter way to write small functions. Instead of writing 5 lines of code, you write one: <code>(x, y) -> x + y</code></p>
            <h3>Streams API</h3>
            <p>A conveyor belt for your data. You can filter, sort, and map data incredibly fast without writing ugly <code>for</code> loops!</p>
            <pre><code>// Find all names starting with 'A' and print them
names.stream()
     .filter(name -> name.startsWith("A"))
     .forEach(System.out::println);</code></pre>
        `
    },
    {
        id: 'ch13',
        title: 'Module 13: JDBC (Database Connection)',
        content: `
            <p>Java Database Connectivity (JDBC) is the bridge between your Java code and an SQL Database (like MySQL or PostgreSQL).</p>
            <ol>
                <li>Load the database driver.</li>
                <li>Establish the <code>Connection</code>.</li>
                <li>Create a <code>Statement</code> (your SQL query).</li>
                <li>Execute the query and get a <code>ResultSet</code>.</li>
                <li>Close the connection!</li>
            </ol>
        `
    },
    {
        id: 'ch14',
        title: 'Module 14: Intro to Spring Boot',
        content: `
            <p>Writing pure Java for backend web servers is exhausting. <strong>Spring Boot</strong> is the ultimate Java framework. It does 90% of the boring configuration work for you.</p>
            <p>With just a few <code>@Annotations</code>, you can spin up a fully functioning REST API in 5 minutes. It is the industry standard for Enterprise Java development!</p>
        `
    },
    {
        id: 'ch15',
        title: 'Module 15: Java Interview Cheat Sheet',
        content: `
            <h3>Top 3 Interview Questions</h3>
            <ul>
                <li><strong>Difference between == and .equals()?</strong> <code>==</code> checks if they are the exact same object in memory. <code>.equals()</code> checks if the text inside them is the same. Always use <code>.equals()</code> for Strings!</li>
                <li><strong>Abstract Class vs Interface?</strong> A class can implement MULTIPLE interfaces, but can only extend ONE abstract class. Interfaces are contracts (only method names), Abstract classes can have actual code inside them.</li>
                <li><strong>What is a NullPointerException?</strong> The most famous error in Java. It happens when you try to use an object, but the object is empty (null).</li>
            </ul>
        `
    }
];

    const sidebar = document.getElementById('sidebar');
    const tableOfContents = document.getElementById('table-of-contents');
    const contentArea = document.getElementById('notes-container');
    const mobileClose = document.getElementById('mobile-close');
    const mobileToggle = document.getElementById('mobile-toggle');

    // Populate Sidebar and render all content at once
    if (tableOfContents && contentArea) {
        let allContentHtml = '';

        courseData.forEach((ch, index) => {
            // Create Sidebar Link
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + ch.id;
            a.textContent = ch.title;
            if (index === 0) a.classList.add('active'); // highlight first item initially
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Scroll to section
                const targetSection = document.getElementById(ch.id);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }

                // Update active class
                document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
                a.classList.add('active');

                // Close mobile sidebar if open
                if (window.innerWidth <= 768 && sidebar) {
                    sidebar.classList.remove('active');
                }
            });

            li.appendChild(a);
            tableOfContents.appendChild(li);

            // Append content to the giant string
            allContentHtml += `
                <div id="${ch.id}" class="course-section">
                    <h2>${ch.title}</h2>
                    ${ch.content}
                </div>
            `;
        });

        // Set all content inside the container
        contentArea.innerHTML = allContentHtml;

        // Implement simple scroll-spy (optional but good for long pages)
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('.course-section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                }
            });
        });
    }

    // Mobile Sidebar Toggles
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    if (mobileClose && sidebar) {
        mobileClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }
});

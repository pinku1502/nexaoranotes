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
        title: 'Module 7: Access Modifiers (The Security Guards)',
        content: `
            <p>Access modifiers are like the security clearance levels in a top-secret government facility. They control exactly who is allowed to see or modify your variables and methods.</p>
            <h3>The 4 Levels of Security:</h3>
            <ul>
                <li><strong>public:</strong> <em>Analogy:</em> A public park. Anyone, from anywhere in the entire program, can access this.</li>
                <li><strong>private:</strong> <em>Analogy:</em> Your personal diary. ONLY the exact class it was created in can read or change it. This is the foundation of <strong>Encapsulation</strong>!</li>
                <li><strong>protected:</strong> <em>Analogy:</em> A family heirloom. It can be accessed by anything in the same package (neighborhood) OR by any child classes (subclasses) even if they live far away.</li>
                <li><strong>default (no keyword):</strong> <em>Analogy:</em> Neighborhood watch. Only classes living in the exact same package can see it.</li>
            </ul>
            <pre><code>public class BankAccount {
    // Top secret! No one can hack this balance directly.
    private double balance; 

    // Public park! Anyone can deposit money.
    public void deposit(double amount) {
        this.balance += amount;
    }
}</code></pre>
        `
    },
    {
        id: 'ch8',
        title: 'Module 8: The Java Collections Framework (Super Arrays)',
        content: `
            <p>Standard Arrays (like <code>int[] nums = new int[5];</code>) are terrible because their size is locked forever. If you try to add a 6th item, the program crashes! The <strong>Collections Framework</strong> fixes this completely.</p>
            <h3>1. ArrayList (The Dynamic Array)</h3>
            <p><em>Analogy:</em> A stretchy rubber band. It automatically grows as you add items, and shrinks as you remove them.</p>
            <pre><code>ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add("Apple"); // Size is 1
list.add("Banana"); // Size magically grows to 2!</code></pre>

            <h3>2. HashMap (The Dictionary)</h3>
            <p><em>Analogy:</em> A real-life dictionary. You don't read a dictionary page by page to find a word. You jump straight to the word (the <strong>Key</strong>) to get the definition (the <strong>Value</strong>). It provides lightning-fast lookups!</p>
            <pre><code>HashMap&lt;String, Integer&gt; scores = new HashMap&lt;&gt;();
scores.put("Alice", 95);
System.out.println(scores.get("Alice")); // Instantly prints 95</code></pre>

            <h3>3. HashSet (The VIP Bouncer)</h3>
            <p><em>Analogy:</em> A strict club bouncer. A HashSet is a list that absolutely <strong>FORBIDS DUPLICATES</strong>. If you try to add "Apple" twice, the bouncer silently rejects the second one.</p>
        `
    },
    {
        id: 'ch9',
        title: 'Module 9: Generics (The Diamond Operator &lt;T&gt;)',
        content: `
            <p>Before Generics were invented, you could put a <code>String</code>, an <code>Integer</code>, and a <code>Dog</code> all into the exact same ArrayList. This caused massive crashes when programmers tried to pull the data back out.</p>
            <p><strong>Generics <code>&lt;T&gt;</code> force type-safety!</strong> They tell the compiler exactly what is allowed inside the collection.</p>
            <pre><code>// The Diamond &lt;String&gt; tells Java: THIS LIST ONLY ACCEPTS STRINGS!
ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;();

names.add("John"); // Success!
names.add(5); // FATAL COMPILE ERROR! Java protects you from crashing!</code></pre>
            <p>Generics make your code 100x safer and completely eliminate the dreaded <code>ClassCastException</code>.</p>
        `
    },
    {
        id: 'ch10',
        title: 'Module 10: Multithreading (Multiple Brains)',
        content: `
            <p>Most programs are single-threaded (they do one thing at a time). <strong>Multithreading</strong> allows Java to do multiple things at the exact same time! (e.g., A video game rendering graphics while simultaneously playing background music).</p>
            
            <h3>How to create a Thread:</h3>
            <p>You can either <code>extend Thread</code> or <code>implement Runnable</code>.</p>
            <pre><code>class MusicTask implements Runnable {
    public void run() {
        System.out.println("Playing music in the background...");
    }
}

// In your main method:
Thread t1 = new Thread(new MusicTask());
t1.start(); // Boom! A second brain wakes up and runs parallel to your main code!</code></pre>

            <h3>The Danger: Race Conditions</h3>
            <p>If two threads try to edit the exact same bank account balance at the exact same millisecond, the math gets corrupted! You MUST use the <code>synchronized</code> keyword to lock the method, forcing threads to stand in line and take turns.</p>
        `
    },
    {
        id: 'ch11',
        title: 'Module 11: File Handling (I/O)',
        content: `
            <p>When your program closes, all variables in RAM are destroyed. To save data permanently, you must write it to the hard drive!</p>
            <h3>Reading a File (Quickly)</h3>
            <p>We use <code>BufferedReader</code> because it reads giant chunks of text at once, rather than reading letter-by-letter (which is incredibly slow).</p>
            <pre><code>try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line); // Prints the file line by line
    }
} catch (IOException e) {
    System.out.println("File not found!");
}</code></pre>
            <p><em>Pro Tip:</em> The <code>try-with-resources</code> block (the parentheses after the word 'try') automatically closes the file for you when it finishes, so you don't leak memory!</p>
        `
    },
    {
        id: 'ch12',
        title: 'Module 12: Modern Java (Lambdas & Streams API)',
        content: `
            <p>Introduced in Java 8, this completely revolutionized how Java is written. It makes Java look sleek, functional, and modern (just like JavaScript or Python).</p>
            
            <h3>Lambdas (->)</h3>
            <p>A much shorter way to write small, one-off functions. Instead of writing 5 lines of clunky code, you write one elegant line: <code>(x, y) -> x + y</code></p>
            
            <h3>Streams API (The Data Conveyor Belt)</h3>
            <p>Imagine a factory conveyor belt. You put a massive list of data on the belt, and as it passes through the factory, it gets filtered, sorted, and packaged automatically without you writing a single ugly <code>for</code> loop!</p>
            <pre><code>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Amanda", "Charlie");

// Find all names starting with 'A', convert to UPPERCASE, and print them
names.stream()
     .filter(name -> name.startsWith("A"))
     .map(String::toUpperCase)
     .forEach(System.out::println); 
// Output: ALICE, AMANDA</code></pre>
        `
    },
    {
        id: 'ch13',
        title: 'Module 13: JDBC (Connecting to SQL Databases)',
        content: `
            <p>Java Database Connectivity (JDBC) is the official bridge between your Java code and an SQL Database (like MySQL or PostgreSQL).</p>
            <h3>The 5 Steps of JDBC:</h3>
            <ol>
                <li><strong>Load Driver:</strong> Tell Java which database you are talking to.</li>
                <li><strong>Connection:</strong> Dial the phone number to the database.</li>
                <li><strong>Statement:</strong> Write your SQL query (e.g., <code>SELECT * FROM users</code>).</li>
                <li><strong>ResultSet:</strong> Execute the query and read the data that comes back.</li>
                <li><strong>Close:</strong> Hang up the phone! (If you don't, the database crashes from too many open connections).</li>
            </ol>
            <p><em>Security Warning:</em> Always use <code>PreparedStatement</code> instead of standard Statement to protect your database from SQL Injection hackers!</p>
        `
    },
    {
        id: 'ch14',
        title: 'Module 14: Intro to Spring Boot (The Industry Standard)',
        content: `
            <p>Writing pure Java for backend web servers is exhausting. You have to write thousands of lines of configuration code before you even start building your app. <strong>Spring Boot</strong> fixes this.</p>
            <p>Spring Boot is the ultimate, magical Java framework. It does 90% of the boring configuration work for you behind the scenes.</p>
            <ul>
                <li><strong>@RestController:</strong> Just tag a class with this annotation, and boom! It becomes a live API endpoint accessible via the internet.</li>
                <li><strong>Dependency Injection:</strong> Spring automatically creates objects and hands them to you when you need them. You rarely have to type <code>new Object()</code> ever again!</li>
            </ul>
            <p>If you want a job as a Java Backend Developer, <strong>you must master Spring Boot.</strong></p>
        `
    },
    {
        id: 'ch15',
        title: 'Module 15: Java Interview Cheat Sheet',
        content: `
            <h3>Top 3 Junior Interview Questions</h3>
            <ul>
                <li><strong>1. What is the difference between == and .equals()?</strong> 
                <br><code>==</code> checks if two things are the <em>exact same physical object</em> in memory. <code>.equals()</code> checks if the <em>text inside them</em> is the same. <strong>ALWAYS use .equals() for Strings!</strong></li>
                
                <li><strong>2. Abstract Class vs Interface?</strong> 
                <br>A class can implement MULTIPLE interfaces, but can only extend ONE abstract class. Interfaces are just strict contracts (only method names, no bodies). Abstract classes can have actual, running code inside them.</li>
                
                <li><strong>3. What is a NullPointerException?</strong> 
                <br>The most famous, terrifying error in Java history. It happens when you try to use a variable, but the variable is empty (pointing to <code>null</code>). It's like trying to drive a car that doesn't exist.</li>
            </ul>
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

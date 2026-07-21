import re

java_addition = """    ,
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
];"""

with open('java-course.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace the closing bracket of courseData
pattern = r'    \}\s*\];'
match = re.search(pattern, js)

if match:
    new_js = js[:match.start()] + '    }' + java_addition + js[match.end():]
    with open('java-course.js', 'w', encoding='utf-8') as f:
        f.write(new_js)
    print('Added Modules 7-15 to Java')
else:
    print('Failed to match end of courseData array')

import re

new_java_data = """const courseData = [
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
    }
];"""

with open('java-course.js', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'const courseData = \[.*?\];'
match = re.search(pattern, content, re.DOTALL)

if match:
    new_content = content[:match.start()] + new_java_data + content[match.end():]
    with open('java-course.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Updated java-course.js')
else:
    print('Failed to find courseData in java-course.js')

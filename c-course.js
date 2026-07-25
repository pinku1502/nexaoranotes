document.addEventListener('DOMContentLoaded', () => {
    // Render profile header if logged in
    const userLoggedIn = localStorage.getItem('auraUserLoggedIn') === 'true';
    const profileSection = document.getElementById('user-profile-section');
    if (userLoggedIn && profileSection) {
        const currentUserStr = localStorage.getItem('auraCurrentUser');
        let displayName = 'Developer';
        if (currentUserStr) {
            try {
                const currentUser = JSON.parse(currentUserStr);
                if (currentUser && currentUser.name) {
                    displayName = currentUser.name;
                }
            } catch (e) {
                console.error(e);
            }
        }
        profileSection.innerHTML = `
            <span class="user-welcome" style="margin-right: 12px; font-size: 13.5px; font-weight: 500; color: #64748b;">
                Welcome, <span style="font-weight: 600; color: #3b82f6;">${displayName}</span>!
            </span>
            <button class="btn btn-secondary" id="logout-btn" style="padding: 6px 12px; font-size: 12px; background: transparent; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; color: #334155; font-family: inherit;">Log Out</button>
        `;
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to log out of your session?')) {
                    localStorage.removeItem('auraUserLoggedIn');
                    localStorage.removeItem('auraCurrentUser');
                    window.location.reload();
                }
            });
        }
    }

    
    const courseData = [
        {
            id: 'ch1',
            title: 'Module 1 – Introduction to C',
            content: `
                <h3>What is C?</h3>
                <p>C is a powerful, general-purpose programming language. It is incredibly fast, efficient, and is widely used for system programming, developing operating systems (like Linux and Windows), and creating embedded systems.</p>

                <h3>Why Learn C?</h3>
                <ul>
                    <li>It forms the foundation of many modern languages like C++, Java, and Python.</li>
                    <li>It gives you deep insights into how computer memory works.</li>
                    <li>It is extremely fast and has very little performance overhead.</li>
                </ul>
            `
        },
        {
            id: 'ch2',
            title: 'Module 2 – History of C',
            content: `
                <h3>The Origins</h3>
                <p>C was originally developed by <strong>Dennis Ritchie</strong> between 1969 and 1973 at Bell Labs. It was primarily designed to be used in developing the UNIX operating system.</p>

                <h3>Evolution</h3>
                <p>C evolved from an earlier language called "B", which itself came from BCPL. Because of its massive success, it was later standardized by ANSI (American National Standards Institute) in 1989, often referred to as ANSI C or C89.</p>
            `
        },
        {
            id: 'ch3',
            title: 'Module 3 – Features of C',
            content: `
                <h3>Key Features</h3>
                <ul>
                    <li><strong>Simple and Efficient:</strong> C uses a small set of keywords and a clean style.</li>
                    <li><strong>Fast Speed:</strong> Being a compiled language, C programs execute incredibly fast compared to interpreted languages.</li>
                    <li><strong>Portability:</strong> A C program written on one machine can be compiled and run on another machine with little to no changes.</li>
                    <li><strong>Extensibility:</strong> You can easily adopt new features by adding custom functions to the C standard library.</li>
                    <li><strong>Direct Memory Management:</strong> C provides tools (like pointers) to interact directly with hardware memory.</li>
                </ul>
            `
        },
        {
            id: 'ch4',
            title: 'Module 4 – Structure of a C Program',
            content: `
                <h3>The Boilerplate</h3>
                <p>Every C program consists of a few essential parts: preprocessor directives, the main function, and the code body.</p>

                <pre><code>#include &lt;stdio.h&gt; // 1. Preprocessor Directive

int main() { // 2. Main Function
    // 3. Code Body
    printf("Hello, World!\\n");
    return 0; // 4. Return Statement
}</code></pre>

                <h3>Explanation</h3>
                <ul>
                    <li><code>#include &lt;stdio.h&gt;</code> tells the compiler to include the Standard Input/Output library before compiling.</li>
                    <li><code>int main()</code> is the starting point of the program. Execution always begins here.</li>
                    <li><code>printf()</code> is a built-in function used to print output to the screen.</li>
                    <li><code>return 0;</code> indicates that the program finished successfully.</li>
                </ul>
            `
        },
        {
            id: 'ch5',
            title: 'Module 5 – Variables',
            content: `
                <h3>What is a Variable?</h3>
                <p>A variable is simply a named storage location in the computer's memory where you can store data.</p>

                <h3>Declaring and Initializing</h3>
                <pre><code>int age; // Declaration
age = 25; // Initialization

int score = 100; // Both in one line</code></pre>

                <h3>Rules for Naming Variables</h3>
                <ul>
                    <li>Must begin with a letter or an underscore (_).</li>
                    <li>Cannot contain spaces or special characters (except underscore).</li>
                    <li>Cannot be a C keyword (like <code>int</code>, <code>return</code>, <code>if</code>).</li>
                    <li>C is case-sensitive, so <code>age</code> and <code>Age</code> are different variables.</li>
                </ul>
            `
        },
        {
            id: 'ch6',
            title: 'Module 6 – Data Types',
            content: `
                <h3>What are Data Types?</h3>
                <p>Data types specify the type of data a variable can hold and how much memory space it requires.</p>

                <h3>Primary Data Types</h3>
                <ul>
                    <li><code>int</code>: Used for integers (whole numbers). e.g., <code>int age = 20;</code> (Typically 4 bytes)</li>
                    <li><code>float</code>: Used for floating-point numbers (decimals). e.g., <code>float pi = 3.14;</code> (4 bytes)</li>
                    <li><code>double</code>: Used for double-precision decimals. e.g., <code>double bigPi = 3.14159265;</code> (8 bytes)</li>
                    <li><code>char</code>: Used for single characters. e.g., <code>char grade = 'A';</code> (1 byte)</li>
                    <li><code>void</code>: Represents the absence of a type (often used for functions that return nothing).</li>
                </ul>
            `
        },
        {
            id: 'ch7',
            title: 'Module 7 – Constants',
            content: `
                <h3>What is a Constant?</h3>
                <p>A constant is a value that cannot be altered by the program during normal execution. Once defined, it remains fixed.</p>

                <h3>Using the <code>const</code> Keyword</h3>
                <pre><code>const float PI = 3.14159;</code></pre>

                <h3>Using <code>#define</code></h3>
                <p>You can also define constants globally using preprocessor directives.</p>
                <pre><code>#define PI 3.14159
#define MAX_USERS 100</code></pre>
            `
        },
        {
            id: 'ch8',
            title: 'Module 8 – Operators',
            content: `
                <h3>Types of Operators</h3>
                <p>Operators are symbols that perform operations on variables and values.</p>

                <ul>
                    <li><strong>Arithmetic:</strong> <code>+</code> (Add), <code>-</code> (Subtract), <code>*</code> (Multiply), <code>/</code> (Divide), <code>%</code> (Modulus/Remainder)</li>
                    <li><strong>Relational:</strong> <code>==</code> (Equal to), <code>!=</code> (Not equal), <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></li>
                    <li><strong>Logical:</strong> <code>&&</code> (Logical AND), <code>||</code> (Logical OR), <code>!</code> (Logical NOT)</li>
                    <li><strong>Assignment:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code></li>
                    <li><strong>Increment/Decrement:</strong> <code>++</code> (Increase by 1), <code>--</code> (Decrease by 1)</li>
                </ul>

                <h3>Example</h3>
                <pre><code>int a = 10;
int b = 3;
int remainder = a % b; // remainder will be 1</code></pre>
            `
        },
        {
            id: 'ch9',
            title: 'Module 9 – Input & Output (printf, scanf)',
            content: `
                <h3>Output with <code>printf()</code></h3>
                <p><code>printf</code> sends formatted output to the screen. Format specifiers tell it what kind of data to expect.</p>
                <ul>
                    <li><code>%d</code> - integer</li>
                    <li><code>%f</code> - float</li>
                    <li><code>%c</code> - character</li>
                    <li><code>%s</code> - string</li>
                </ul>
                <pre><code>int age = 20;
printf("I am %d years old.", age);</code></pre>

                <h3>Input with <code>scanf()</code></h3>
                <p><code>scanf</code> reads formatted input from the user. You must use the <code>&</code> (address-of) operator to store the value in memory.</p>
                <pre><code>int inputAge;
printf("Enter your age: ");
scanf("%d", &inputAge);</code></pre>
            `
        },
        {
            id: 'ch10',
            title: 'Module 10 – Conditional Statements',
            content: `
                <h3>if-else Statement</h3>
                <p>Executes a block of code if a condition is true, and another block if it is false.</p>
                <pre><code>int score = 85;
if (score >= 90) {
    printf("Grade: A");
} else if (score >= 80) {
    printf("Grade: B");
} else {
    printf("Grade: C");
}</code></pre>

                <h3>switch Statement</h3>
                <p>Used to select one of many code blocks to be executed based on a variable's exact value.</p>
                <pre><code>int day = 3;
switch(day) {
    case 1: printf("Monday"); break;
    case 2: printf("Tuesday"); break;
    case 3: printf("Wednesday"); break;
    default: printf("Invalid Day");
}</code></pre>
            `
        },
        {
            id: 'ch11',
            title: 'Module 11 – Loops',
            content: `
                <h3>Why use Loops?</h3>
                <p>Loops run a block of code repeatedly until a specific condition is met.</p>

                <h3>1. for Loop</h3>
                <p>Best when you know exactly how many times the loop should run.</p>
                <pre><code>for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
} // Outputs: 1 2 3 4 5</code></pre>

                <h3>2. while Loop</h3>
                <p>Best when the number of iterations is unknown and depends on a condition.</p>
                <pre><code>int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;
}</code></pre>

                <h3>3. do-while Loop</h3>
                <p>The code block runs <strong>at least once</strong>, even if the condition is false, because the condition is checked at the end.</p>
                <pre><code>int i = 1;
do {
    printf("%d ", i);
    i++;
} while (i <= 5);</code></pre>
            `
        },
        {
            id: 'ch12',
            title: 'Module 12 – Functions',
            content: `
                <h3>What is a Function?</h3>
                <p>A function is a reusable block of code that performs a specific task. Functions make code modular, readable, and easier to debug.</p>

                <h3>Declaring and Calling a Function</h3>
                <pre><code>// Function Declaration
int add(int a, int b) {
    return a + b;
}

int main() {
    // Function Call
    int sum = add(5, 10); 
    printf("Sum is %d", sum);
    return 0;
}</code></pre>

                <h3>Types of Functions</h3>
                <ul>
                    <li><strong>Built-in Functions:</strong> Already provided by C (e.g., <code>printf()</code>, <code>scanf()</code>).</li>
                    <li><strong>User-defined Functions:</strong> Created by the programmer (e.g., <code>add()</code>).</li>
                </ul>
            `
        },
        {
            id: 'ch13',
            title: 'Module 13 – Arrays',
            content: `
                <h3>What is an Array?</h3>
                <p>An array is a collection of variables of the <strong>same data type</strong> stored in contiguous memory locations.</p>

                <h3>Declaring and Initializing</h3>
                <pre><code>int numbers[5] = {10, 20, 30, 40, 50};</code></pre>
                
                <h3>Accessing Elements</h3>
                <p>Array indices start at <code>0</code>.</p>
                <pre><code>printf("%d", numbers[0]); // Prints 10
numbers[2] = 99; // Changes 30 to 99</code></pre>

                <h3>Iterating through an Array</h3>
                <pre><code>for(int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}</code></pre>
            `
        },
        {
            id: 'ch14',
            title: 'Module 14 – Strings',
            content: `
                <h3>What is a String in C?</h3>
                <p>C does not have a built-in "string" data type. Instead, a string is simply a 1D array of characters terminated by a null character (<code>\\0</code>).</p>

                <h3>Declaring a String</h3>
                <pre><code>char greeting[] = "Hello";
// In memory: ['H', 'e', 'l', 'l', 'o', '\\0']</code></pre>

                <h3>String Functions (string.h)</h3>
                <p>Include <code>&lt;string.h&gt;</code> to use these built-in functions.</p>
                <ul>
                    <li><code>strlen()</code>: Gets the length of a string.</li>
                    <li><code>strcpy()</code>: Copies one string to another.</li>
                    <li><code>strcat()</code>: Concatenates (joins) two strings.</li>
                    <li><code>strcmp()</code>: Compares two strings.</li>
                </ul>
            `
        },
        {
            id: 'ch15',
            title: 'Module 15 – Pointers',
            content: `
                <h3>What is a Pointer?</h3>
                <p>A pointer is a variable that stores the <strong>memory address</strong> of another variable. They are powerful tools for memory management.</p>

                <h3>Basic Pointer Syntax</h3>
                <p>Think of a pointer as a street address. It tells you <em>where</em> the data lives, rather than <em>what</em> the data is.</p>
                <ul>
                    <li><code>&</code> (Address-of operator): Finds the "street address" of a variable.</li>
                    <li><code>*</code> (Dereference operator): Goes to that address and gets the actual value.</li>
                </ul>

                <pre><code>int myAge = 25;
int *addressOfMyAge = &myAge; // addressOfMyAge stores the location of myAge

printf("The value is: %d\\n", *addressOfMyAge); // Prints 25</code></pre>
            `
        },
        {
            id: 'ch16',
            title: 'Module 16 – Structures',
            content: `
                <h3>What is a Structure (struct)?</h3>
                <p>Unlike arrays which hold items of the same type, a structure groups variables of <strong>different data types</strong> under a single name.</p>

                <h3>Declaring and Using a Struct</h3>
                <p>Imagine you want to store information about a Car. You need a string for the brand, an int for the year, and a float for the price. A struct groups them all together!</p>
                
                <pre><code>struct Car {
    char brand[50];
    int year;
    float price;
};

int main() {
    // Create a new Car variable named myCar
    struct Car myCar; 
    
    // Assign values using a dot (.)
    strcpy(myCar.brand, "Toyota");
    myCar.year = 2022;
    myCar.price = 25000.50;

    printf("Car: %s, Year: %d, Price: $%.2f", myCar.brand, myCar.year, myCar.price);
    return 0;
}</code></pre>
            `
        },
        {
            id: 'ch17',
            title: 'Module 17 – Unions',
            content: `
                <h3>What is a Union?</h3>
                <p>A union is similar to a struct, but with a massive difference: <strong>all members share the exact same memory location</strong>. You can only store a value in one member at a time. The size of the union is equal to the size of its largest member.</p>

                <h3>Syntax</h3>
                <pre><code>union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data d1;
    d1.i = 10;
    // If we now do d1.f = 2.5, d1.i will be overwritten and corrupted!
    return 0;
}</code></pre>
            `
        },
        {
            id: 'ch18',
            title: 'Module 18 – File Handling',
            content: `
                <h3>Working with Files</h3>
                <p>C allows you to read from and write to text and binary files saved on your hard drive.</p>

                <h3>Common Modes</h3>
                <ul>
                    <li><code>"r"</code> - Read (file must exist)</li>
                    <li><code>"w"</code> - Write (creates a new file or overwrites an existing one)</li>
                    <li><code>"a"</code> - Append (adds to the end of the file)</li>
                </ul>

                <h3>Example: Writing to a file</h3>
                <pre><code>FILE *file = fopen("data.txt", "w");
if (file != NULL) {
    fprintf(file, "Hello File!\\n");
    fclose(file); // Always close files when done!
}</code></pre>
            `
        },
        {
            id: 'ch19',
            title: 'Module 19 – Dynamic Memory Allocation',
            content: `
                <h3>What is DMA?</h3>
                <p>Dynamic Memory Allocation allows you to allocate or free memory at runtime (during program execution) using the heap, rather than deciding the size at compile time.</p>

                <h3>Functions (requires stdlib.h)</h3>
                <ul>
                    <li><code>malloc()</code>: Allocates a block of uninitialized memory.</li>
                    <li><code>calloc()</code>: Allocates memory and initializes bytes to 0.</li>
                    <li><code>realloc()</code>: Resizes previously allocated memory.</li>
                    <li><code>free()</code>: Deallocates memory to prevent memory leaks.</li>
                </ul>

                <h3>Example</h3>
                <pre><code>int *ptr;
// Allocate memory for 5 integers
ptr = (int *) malloc(5 * sizeof(int)); 

if (ptr == NULL) {
    printf("Memory not allocated.");
} else {
    ptr[0] = 10;
    free(ptr); // Clean up!
}</code></pre>
            `
        },
        {
            id: 'ch20',
            title: 'Module 20 – Preprocessor Directives',
            content: `
                <h3>What are Preprocessor Directives?</h3>
                <p>Commands that begin with a hash (<code>#</code>) are executed by the C preprocessor <em>before</em> the compiler translates the code.</p>

                <h3>Common Directives</h3>
                <ul>
                    <li><code>#include</code>: Inserts the contents of a header file.</li>
                    <li><code>#define</code>: Creates a macro (a simple text replacement).</li>
                    <li><code>#ifdef</code> / <code>#ifndef</code>: Conditional compilation (includes/excludes code based on conditions).</li>
                </ul>

                <pre><code>#define PI 3.14159
#define SQUARE(x) (x * x)

int main() {
    int area = SQUARE(5); // Becomes (5 * 5)
    return 0;
}</code></pre>
            `
        },
        {
            id: 'ch21',
            title: 'Module 21 – Final Project: Simple Calculator',
            content: `
                <h3>Putting It All Together</h3>
                <p>Let's use what we've learned (Variables, Input/Output, Conditional Statements, and Functions) to build a simple calculator.</p>

                <h3>The Code</h3>
                <pre><code>#include &lt;stdio.h&gt;

int main() {
    char operator;
    double num1, num2, result;

    printf("Enter an operator (+, -, *, /): ");
    scanf("%c", &operator);

    printf("Enter two numbers: ");
    scanf("%lf %lf", &num1, &num2);

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default: printf("Error! Invalid operator."); return 1;
    }

    printf("Result: %.2lf %c %.2lf = %.2lf\\n", num1, operator, num2, result);
    return 0;
}</code></pre>
                
                <h3>How It Works</h3>
                <ul>
                    <li><strong>char operator:</strong> Stores the math symbol (+, -, *, /).</li>
                    <li><strong>scanf:</strong> Takes the symbol and numbers from the user.</li>
                    <li><strong>switch statement:</strong> Decides which math operation to run based on the symbol entered.</li>
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

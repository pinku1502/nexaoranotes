document.addEventListener('DOMContentLoaded', () => {
    const courseData = [
        {
            id: 'ch1',
            title: 'Module1: Introduction to Python (The Universal Tool)',
            content: `\n<h3>1. What is Python and Why Does it Exist?</h3>
Python was created in 1991 by Guido van Rossum. Before Python, programmers had to write code in languages like C or C++, which required managing memory manually, dealing with complex syntax, and writing 50 lines of code just to print a simple message. 
Guido's goal was simple: <strong>Make programming read like plain English.</strong>

<h3>2. Core Features of Python</h3>
<li><strong>Interpreted, Not Compiled:</strong> Unlike Java, which must be converted entirely into bytecode before running, Python is interpreted. A program called the "Interpreter" reads your code line-by-line, translating it on the fly. This makes testing and debugging incredibly fast.</li>
<li><strong>Dynamically Typed:</strong> In Java, you must declare <code>int x = 5;</code>. In Python, you just say <code>x = 5</code>. Python is smart enough to figure out that 5 is an integer on its own.</li>
<li><strong>Batteries Included:</strong> Python comes pre-packaged with massive libraries. You can build a web server, read a CSV file, and download a webpage without installing any third-party tools.</li>

<h3>3. Applications (Where is Python Used?)</h3>
<li><strong>Artificial Intelligence & Machine Learning:</strong> OpenAI (ChatGPT), Tesla Autopilot, and Netflix recommendation algorithms run heavily on Python (using libraries like TensorFlow and PyTorch).</li>
<li><strong>Web Development:</strong> Instagram and Pinterest were built using Python's Django framework.</li>
<li><strong>Automation:</strong> Python is the king of writing short scripts that automate boring office tasks (like renaming 1,000 Excel files in 2 seconds).</li>

<h3>4. Python Syntax: The Power of Indentation</h3>
Python forces you to write beautiful code. Instead of using curly brackets <code>{}</code> to group code blocks, Python uses physical empty space (indentation, usually 4 spaces or 1 Tab).

<pre><code># Bad, imaginary syntax (like C++)
if (weather == "rain") {
    bring_umbrella();
}

# Python Syntax (Clean, readable, mandatory indentation)
if weather == "rain":
    bring_umbrella()
    print("Stay dry!")
# Notice how the lack of indentation here means we are OUTSIDE the if-statement.
print("This prints no matter the weather.")
</code></pre>

<h3>5. Comments & Keywords</h3>
<li><strong>Comments:</strong> Use the <code>#</code> symbol. Python completely ignores anything after the <code>#</code>. Use it to explain your code to other humans!</li>
<li><strong>Keywords:</strong> Reserved words that have special meaning (e.g., <code>if</code>, <code>True</code>, <code>False</code>, <code>class</code>, <code>def</code>). You CANNOT name a variable <code>class</code>.</li>

<p>---</p>\n`
        },
        {
            id: 'ch2',
            title: 'Module2: Variables & Data Types (The Memory Warehouse)',
            content: `\n<h3>1. Variables (The Storage Boxes)</h3>
Imagine your computer's RAM (Memory) is a giant warehouse. When you create a variable, you are taking an empty cardboard box, putting some data inside it, and writing a label on the box with a black marker so you can find it later.

<pre><code>player_score = 1500  # Box labeled 'player_score' holding the number 1500
player_name = "Alex" # Box labeled 'player_name' holding text
is_game_over = False # Box labeled 'is_game_over' holding a boolean state
</code></pre>

<h3>2. Naming Rules (The Strict Warehouse Manager)</h3>
You can't just label boxes however you want. Python has rules:
<li>Must start with a letter or an underscore <code>_</code>. (e.g., <code>_score</code>, <code>score1</code>)</li>
<li>Cannot start with a number. (e.g., <code>1score</code> will crash the program).</li>
<li>Case Sensitive! <code>Score</code> and <code>score</code> are two completely different boxes!</li>
<li><strong>Best Practice:</strong> Use <code>snake_case</code> (words separated by underscores) for variable names.</li>

<h3>3. Built-in Data Types (What goes in the box?)</h3>
<li><strong>Integers (<code>int</code>):</strong> Whole numbers. <code>speed = 120</code></li>
<li><strong>Floating Point (<code>float</code>):</strong> Decimal numbers. <code>gravity = 9.81</code></li>
<li><strong>Strings (<code>str</code>):</strong> Text surrounded by quotes. <code>greeting = 'Hello'</code></li>
<li><strong>Booleans (<code>bool</code>):</strong> True or False. (MUST be capitalized). <code>is_online = True</code></li>

<h3>4. Type Casting (Forcing the Shape)</h3>
Sometimes a user types "50" on their keyboard, but the computer reads it as text (String), not a math number. You must cast it!

<pre><code>age_text = "25"
# You cannot do math on text: age_text + 5 would crash!

# We cast it to an integer (int)
age_number = int(age_text) 
print(age_number + 5) # Now it works! Output: 30
</code></pre>

<h3>5. type() and id()</h3>
<li><code>type(variable)</code>: Asks Python, "What kind of data is in this box?"</li>
<li><code>id(variable)</code>: Asks Python, "What is the exact physical memory address (barcode) of this box in the RAM?"</li>

<pre><code>x = 10
print(type(x)) # <class 'int'>
print(id(x))   # 140728109312384 (Unique barcode)
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch3',
            title: 'Module3: Operators (The Mathematical Engine)',
            content: `\n<h3>1. Arithmetic Operators</h3>
<em>   <code>+</code> Addition, <code>-</code> Subtraction, <code></em></code> Multiplication, <code>/</code> Division (always results in a float decimal).
<li><strong><code>//</code> Floor Division:</strong> Divides and chops off the decimal completely. <code>10 // 3 = 3</code></li>
<li><strong><code>%</code> Modulo (The Remainder):</strong> Divides and gives you the remainder. This is the ultimate tool for finding Even/Odd numbers! <code>10 % 3 = 1</code> (because 3 goes into 10 three times, with 1 left over).</li>
<li><strong><code></strong></code> Exponent:<strong> <code>2 </strong> 3 = 8</code> (2 to the power of 3).</li>

<h3>2. Assignment Operators (Shortcuts)</h3>
Programmers are lazy. Instead of writing <code>score = score + 10</code>, we use shortcuts.

<pre><code>score = 0
score += 10 # Adds 10 to the current score
score *= 2  # Multiplies the current score by 2
</code></pre>

<h3>3. Comparison Operators (The Interrogator)</h3>
These always return a Boolean (<code>True</code> or <code>False</code>).
<li><code>==</code> (Is exactly equal to?) <strong>Don't confuse this with <code>=</code> which assigns a value!</strong></li>
<li><code>!=</code> (Is NOT equal to?)</li>
<li><code>></code>, <code><</code>, <code>>=</code>, <code><=</code></li>

<h3>4. Logical Operators (and, or, not)</h3>
<li><strong><code>and</code></strong>: BOTH conditions must be True. (I need my ID <code>and</code> my Ticket to enter).</li>
<li><strong><code>or</code></strong>: ONLY ONE condition needs to be True. (I can pay with Cash <code>or</code> Card).</li>
<li><strong><code>not</code></strong>: Reverses the truth! <code>not True</code> becomes <code>False</code>.</li>

<h3>5. Membership & Identity Operators</h3>
<li><strong><code>in</code></strong>: Checks if an item is inside a collection (like searching a bag).</li>
<li><strong><code>is</code></strong>: Checks if two variables point to the EXACT SAME physical box in memory. (Compares <code>id()</code>).</li>

<pre><code>inventory = ["sword", "shield", "potion"]
print("potion" in inventory) # True!

a = [1, 2, 3]
b = [1, 2, 3]
print(a == b) # True (They have the same contents)
print(a is b) # False! (They are two completely separate boxes in memory)
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch4',
            title: 'Module4: Input & Output (Conversing with Humans)',
            content: `\n<h3>1. The print() Function</h3>
The easiest way to talk to the screen.

<pre><code>print("Hello World")
# You can print multiple things separated by commas
print("The score is:", 100) 
</code></pre>

<h3>2. Escape Sequences (Breaking the Rules)</h3>
How do you print a quotation mark if quotation marks are used to define the string itself? You use a backslash <code>\\</code> to "escape" the rule.
<li>\`</li>
\`: Creates a new line (Enter key).
<li><code>	</code>: Creates a tab space.</li>
<li><code>"</code>: Prints an actual quotation mark.</li>

<pre><code>print("He said, "Python is awesome!"
And I agreed.")
</code></pre>

<h3>3. f-Strings (The Ultimate Templating Tool)</h3>
Formatting strings manually with <code>+</code> is ugly and causes crashes if you try to add a String to an Integer.
<strong>f-Strings</strong> (added in Python 3.6) revolutionized text. You put an <code>f</code> before the quotes, and wrap variables in <code>{}</code>. Python automatically converts them and injects them.

<pre><code>hero_name = "Arthur"
health = 85
gold = 1500

# Look how beautiful and readable this is!
print(f"[{hero_name}] HP: {health}/100 | Wallet: \${gold}")
</code></pre>

<h3>4. The input() Function</h3>
How you pause the program and wait for the user to type something on their keyboard.
<strong>CRITICAL RULE:</strong> <code>input()</code> ALWAYS returns a String. Even if the user types <code>99</code>, Python sees it as the text <code>"99"</code>.

<pre><code># Bad code (Will crash if you try to do math!)
# age = input("How old are you? ")

# Good code (Immediately cast the string into an integer!)
age = int(input("How old are you? "))
years_to_retire = 65 - age
print(f"You have {years_to_retire} years left until retirement!")
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch5',
            title: 'Module5: Control Flow (The Decision Maker)',
            content: `\n<h3>1. if, elif, else (The Crossroads)</h3>
Without control flow, code just runs straight down like a waterfall. <code>if</code> statements allow the code to branch based on decisions.
<em>Analogy:</em> Driving a car. If the light is green, go. Else if the light is yellow, slow down. Else, stop.

<pre><code>temperature = 85

if temperature > 90:
    print("It's boiling! Turn on AC.")
elif temperature > 70:
    print("It's a beautiful day.")
elif temperature > 50:
    print("Getting chilly, grab a jacket.")
else:
    print("It's freezing! Stay inside.")
</code></pre>

<p><em>Note:</em> The program checks from top to bottom. The VERY FIRST condition that is True will execute, and the rest are entirely skipped!</p>

<h3>2. Match-Case (The Switch Statement)</h3>
Introduced in Python 3.10, <code>match-case</code> is a cleaner way to write massive <code>if-elif</code> chains when you are checking the exact value of a single variable.

<pre><code>status_code = 404

match status_code:
    case 200:
        print("Success!")
    case 404:
        print("Not Found!")
    case 500:
        print("Server Error!")
    case _: # The underscore is the default "catch-all" (like 'else')
        print("Unknown error.")
</code></pre>

<h3>3. The 'while' Loop (The Treadmill)</h3>
A <code>while</code> loop runs FOREVER until its condition becomes False. 
<em>Danger:</em> If you forget to update the condition inside the loop, you create an <strong>Infinite Loop</strong> and your computer freezes!

<pre><code>battery = 100
while battery > 0:
    print(f"Using phone... Battery at {battery}%")
    battery -= 20 # If we don't subtract here, the loop runs forever!
print("Phone died!")
</code></pre>

<h3>4. The 'for' Loop (The Assembly Line)</h3>
A <code>for</code> loop is used to iterate over a sequence (like a list, a string, or a range of numbers). You know exactly how many times it will run.

<pre><code># Using range(start, stop). Note: It stops ONE BEFORE the stop number!
for i in range(1, 6):
    print(f"Counting: {i}") # Prints 1, 2, 3, 4, 5

# Looping through a string (letter by letter)
for letter in "PYTHON":
    print(letter)
</code></pre>

<h3>5. Break, Continue, and Pass</h3>
<li><strong><code>break</code>:</strong> The Emergency Stop Button. It instantly shatters the loop and exits it entirely, regardless of the condition.</li>
<li><strong><code>continue</code>:</strong> The Skip Button. It stops the current iteration and instantly jumps back to the top of the loop for the next round.</li>
<li><strong><code>pass</code>:</strong> A placeholder. If you write an <code>if</code> statement but haven't figured out the code yet, you type <code>pass</code> so Python doesn't crash with an indentation error.</li>

<pre><code>for num in range(1, 10):
    if num == 3:
        continue # Skips printing 3!
    if num == 7:
        break # Shatters the loop! 8 and 9 will never print!
    print(num)
# Output: 1, 2, 4, 5, 6
</code></pre>\n`
        },
        {
            id: 'ch6',
            title: 'Module6: Strings (Mastering Text Data)',
            content: `\n<h3>1. Creating and Indexing Strings</h3>
A string in Python is not just text; it is an ordered sequence of characters. Every single letter has an address (index), starting at 0.

<pre><code>word = "PYTHON"
# Addresses:  0   1   2   3   4   5
# Characters: P   Y   T   H   O   N
print(word[0]) # Prints 'P'
print(word[-1]) # Prints 'N' (Negative numbers start from the end!)
</code></pre>

<h3>2. Slicing Strings (The Bread Knife)</h3>
You can slice chunks out of a string using <code>[start:stop:step]</code>. Note that the <code>stop</code> index is NOT included in the slice!

<pre><code>text = "HelloWorld"
print(text[0:5])   # "Hello" (Gets index 0, 1, 2, 3, 4)
print(text[5:])    # "World" (Starts at 5, goes to the very end)
print(text[::-1])  # "dlroWolleH" (Reverses the entire string magically!)
</code></pre>

<h3>3. Essential String Methods</h3>
Strings have built-in superpowers (methods) to manipulate text instantly.
<li><code>.upper()</code> & <code>.lower()</code>: Changes casing.</li>
<li><code>.strip()</code>: Instantly destroys any accidental spaces a user typed at the beginning or end of a string.</li>
<li><code>.replace(old, new)</code>: Finds a word and replaces it.</li>
<li><code>.split(separator)</code>: Chops a single string into a List of strings!</li>

<pre><code>csv_data = "apple,banana,orange"
fruits_list = csv_data.split(",") # Automatically converts into ["apple", "banana", "orange"]
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch7',
            title: 'Module7: Collections (The Data Structures)',
            content: `\n<h3>1. Lists (The Dynamic Backpack)</h3>
Lists <code>[]</code> are ordered and mutable (changeable). They are the most common collection.

<pre><code>inventory = ["sword", "shield"]
inventory.append("potion") # Adds to the end
inventory.insert(0, "map") # Forces "map" into the first slot (index 0)
inventory.pop() # Removes and returns the last item
</code></pre>

<h3>2. Tuples (The Locked Safe)</h3>
Tuples <code>()</code> are identical to Lists, except they are <strong>Immutable</strong>. You can NEVER add, remove, or change items once a Tuple is created. Why use them? Because they use less memory and are faster than Lists for data that shouldn't change (like GPS coordinates or days of the week).

<h3>3. Sets (The Bouncer)</h3>
Sets <code>{}</code> are unordered. You cannot ask for <code>myset[0]</code> because Sets don't have addresses. The superpower of a Set is that it <strong>destroys duplicates instantly</strong>.

<pre><code>unique_numbers = {1, 1, 1, 2, 2, 3}
print(unique_numbers) # Output: {1, 2, 3}
</code></pre>

<h3>4. Dictionaries (The Key-Value Phonebook)</h3>
Dictionaries <code>{key: value}</code> are unordered, but incredibly fast. You don't search a dictionary by index number; you search it by its "Key" (the label).

<pre><code>student = {
    "name": "Alex",
    "age": 22,
    "grades": ["A", "B", "A"]
}
print(student["name"]) # Immediately grabs "Alex"
student["age"] = 23 # You can update values instantly!
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch8',
            title: 'Module8: Functions (The Code Factories)',
            content: `\n<h3>1. Defining and Calling Functions</h3>
If you copy-paste the same code 3 times, you are doing it wrong. Wrap it in a Function using <code>def</code>.

<pre><code># The Factory Blueprint
def greet_user(name):
    print(f"Hello, {name}! Welcome to the system.")

# Using the Factory
greet_user("Sarah") 
greet_user("John")
</code></pre>

<h3>2. Parameters vs Arguments</h3>
<li><strong>Parameters:</strong> The empty variables inside the <code>def</code> parenthesis. (They are waiting for data).</li>
<li><strong>Arguments:</strong> The actual real data you pass into the function when you call it.</li>

<h3>3. The 'return' Statement</h3>
Printing is just showing data to the screen. <code>return</code> actually hands the processed data BACK to the main program so you can use it in math or logic!

<pre><code>def calculate_tax(price):
    tax = price * 0.10
    return price + tax # Hands the final number back!

final_total = calculate_tax(100) # final_total becomes 110.0
</code></pre>

<h3>4. <em>args and </em>*kwargs (Infinite Arguments)</h3>
<em>   <code></em>args</code>: Allows a function to accept any number of regular arguments, packing them into a Tuple.
<em>   <code></em>*kwargs</code>: Allows a function to accept any number of keyword arguments (like <code>name="Alice"</code>), packing them into a Dictionary.

<p>---</p>\n`
        },
        {
            id: 'ch9',
            title: 'Module9: Modules & Packages (Expanding Your Arsenal)',
            content: `\n<h3>1. The Import Statement</h3>
Python has thousands of built-in scripts (Modules) written by core developers. You just have to <code>import</code> them to borrow their tools!

<pre><code>import math
print(math.pi) # 3.141592653589793

import random
winner = random.choice(["Alice", "Bob", "Charlie"])
</code></pre>

<h3>2. Built-in vs Custom Modules</h3>
You can import your own files! If you write massive code in <code>database.py</code>, you can <code>import database</code> in your <code>main.py</code> file to keep things clean.

<h3>3. pip and Virtual Environments</h3>
<li><strong>pip:</strong> The Python Installer Program. You open your terminal and type <code>pip install requests</code> to download incredible tools written by other developers around the world.</li>
<li><strong>venv:</strong> A Virtual Environment. It creates an isolated bubble for your project, so installing a library for Project A doesn't accidentally break Project B!</li>

<p>---</p>\n`
        },
        {
            id: 'ch10',
            title: 'Module10: File Handling (Permanent Memory)',
            content: `\n<h3>1. File Modes</h3>
<li><code>r</code>: Read (default). Crashes if file doesn't exist.</li>
<li><code>w</code>: Write. OVERWRITES the entire file. Creates file if it doesn't exist.</li>
<li><code>a</code>: Append. Adds to the very bottom of the file without deleting the old stuff.</li>

<h3>2. The 'with' Statement</h3>
If you open a file and your program crashes before you type <code>file.close()</code>, the file gets locked and corrupted! The <code>with</code> block fixes this by guaranteeing the file closes safely, no matter what happens.

<pre><code>with open("data.txt", "w") as file:
    file.write("Saving this permanently to the hard drive!")
# The file is instantly and safely closed here.
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch11',
            title: 'Module11: Exception Handling (The Crash Net)',
            content: `\n<h3>1. The Problem with Errors</h3>
If Python hits an error (like trying to divide by zero, or trying to open a file that doesn't exist), the entire program halts immediately.

<h3>2. try, except, finally</h3>
You wrap "dangerous" code in a <code>try</code> block. If it explodes, the <code>except</code> block catches the explosion and lets the program continue running normally.

<pre><code>try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ZeroDivisionError:
    print("Error: You cannot divide by zero!")
except ValueError:
    print("Error: That wasn't a valid number!")
finally:
    print("This block runs EVERY SINGLE TIME, crash or no crash.")
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch12',
            title: 'Module12: Object-Oriented Programming (The Master Blueprint)',
            content: `\n<h3>1. Classes and Objects</h3>
OOP allows you to create your own custom Data Types.
<li><strong>Class:</strong> The blueprint. (e.g., A blueprint for a Car).</li>
<li><strong>Object (Instance):</strong> The physical thing built from the blueprint. (e.g., A red Toyota, a blue Ford).</li>

<h3>2. The Constructor (__init__)</h3>
The magic function that runs automatically the exact millisecond an Object is created. It sets up the default variables.

<pre><code>class Robot:
    def __init__(self, name, battery):
        self.name = name # 'self' means THIS specific robot
        self.battery = battery

    def status(self):
        print(f"I am {self.name}. Battery: {self.battery}%")

r1 = Robot("R2D2", 100) # The __init__ runs instantly!
r1.status()
</code></pre>

<h3>3. The 4 Pillars of OOP</h3>
<li><strong>Encapsulation:</strong> Hiding variables so other programmers can't accidentally break them.</li>
<li><strong>Inheritance:</strong> Creating a <code>SmartRobot</code> class that automatically inherits all the code from the <code>Robot</code> class, saving you from re-typing it!</li>
<li><strong>Polymorphism:</strong> A <code>Dog</code> and <code>Cat</code> class both have a <code>.speak()</code> method, but one prints "Woof" and the other prints "Meow".</li>
<li><strong>Abstraction:</strong> Hiding complex math inside a simple <code>.drive()</code> method so the user doesn't have to understand how the engine works to use it.</li>

<p>---</p>\n`
        },
        {
            id: 'ch13',
            title: 'Module13: Advanced Python (The Pro Tier)',
            content: `\n<h3>1. List Comprehensions (The Elegant Loop)</h3>
Instead of writing a 4-line <code>for</code> loop to build a list, you can do it in 1 elegant line.

<pre><code># Old, clunky way
evens = []
for x in range(10):
    if x % 2 == 0:
        evens.append(x)

# The Pythonic Way (List Comprehension)
evens = [x for x in range(10) if x % 2 == 0] 
</code></pre>

<h3>2. Iterators & Generators (<code>yield</code>)</h3>
If you try to load a list of 1 Billion numbers into RAM, your computer will crash.
A <strong>Generator</strong> uses the <code>yield</code> keyword instead of <code>return</code>. It doesn't generate the whole list at once; it generates one number, hands it to you, pauses, and waits for you to ask for the next one. It takes almost ZERO memory!

<h3>3. Decorators (@)</h3>
A decorator is a function that wraps <em>around</em> another function to give it extra powers, without permanently modifying the original function's code!
<em>Analogy:</em> You have a basic coffee. You pass it through a <code>@whipped_cream</code> decorator. It's still coffee, but now it has new features!

<p>---</p>\n`
        },
        {
            id: 'ch14',
            title: 'Module14: Functional Programming (The Assembly Line)',
            content: `\n<p>Python can be written in a "Functional" style, where you treat data like a factory conveyor belt, passing it through functions.</p>

<h3>1. map()</h3>
Applies a specific function to EVERY single item in a list simultaneously.

<pre><code>prices = [10, 20, 30]
# Applies a 10% tax to every price instantly
taxed_prices = list(map(lambda x: x * 1.10, prices)) 
</code></pre>

<h3>2. filter()</h3>
Destroys any items in a list that fail a True/False test.

<pre><code>scores = [45, 90, 30, 85]
# Only keeps the scores that are >= 50
passing = list(filter(lambda x: x >= 50, scores)) 
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch15',
            title: 'Module15: Database Programming (SQL Connections)',
            content: `\n<p>You don't want to save complex user data in a <code>.txt</code> file. You need a real database. Python uses the built-in <code>sqlite3</code> module to talk to local databases.</p>

<h3>CRUD Operations</h3>
The 4 pillars of database management:
<li><strong>C</strong>reate (INSERT INTO)</li>
<li><strong>R</strong>ead (SELECT)</li>
<li><strong>U</strong>pdate (UPDATE)</li>
<li><strong>D</strong>elete (DELETE)</li>

<pre><code>import sqlite3
conn = sqlite3.connect('users.db')
cursor = conn.cursor()

# Parameterized Query (CRITICAL FOR SECURITY against Hackers!)
# Never use f-strings here! Always use the '?' placeholder!
cursor.execute("SELECT * FROM users WHERE age > ?", (18,)) 
print(cursor.fetchall())
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch16',
            title: 'Module16: Multithreading & Multiprocessing (Parallel Brains)',
            content: `\n<p>Python normally executes one single line at a time. This is slow if you need to download 100 images.</p>

<h3>1. Multithreading (I/O Bound)</h3>
Great for tasks where Python is just "waiting" (like waiting for a website to load). You can spin up 100 threads, and they will all wait for 100 different websites at the exact same time!

<h3>2. Multiprocessing (CPU Bound)</h3>
If you are doing heavy Math (like calculating Pi to a million digits), threads won't help due to Python's GIL lock. You must use the <code>multiprocessing</code> module to actually wake up the 2nd, 3rd, and 4th physical cores of your CPU to do the math simultaneously!

<p>---</p>\n`
        },
        {
            id: 'ch17',
            title: 'Module17: Web & APIs (Talking to the Internet)',
            content: `\n<p>An API is a waiter. You are the customer (Client). The Database is the Kitchen (Server).<br>You use the <code>requests</code> library to hand the waiter your order.</p>

<pre><code>import requests

# We ask a public API for data
response = requests.get('https://pokeapi.co/api/v2/pokemon/pikachu')

# If the waiter says 200 (Success!), we eat the JSON food!
if response.status_code == 200:
    data = response.json()
    print("Pokemon Name:", data['name'])
</code></pre>

<p>---</p>\n`
        },
        {
            id: 'ch18',
            title: 'Module18: Testing & Debugging (Bulletproofing)',
            content: `\n<p>You cannot trust your own code. You must write code that tests your code automatically.<br>The industry standard is <strong>pytest</strong>.</p>

<pre><code># In a file called test_math.py
def add(a, b):
    return a + b

# The test function
def test_add():
    assert add(2, 2) == 4 # If this ever equals 5, the test fails instantly!
    assert add(-1, 1) == 0
</code></pre>

<p>When you run <code>pytest</code> in the terminal, it scans your entire project, runs thousands of these little tests in 1 second, and ensures you didn't break anything.</p>

<p>---</p>\n`
        },
        {
            id: 'ch19',
            title: 'Module19: Popular Libraries (The Python Superpowers)',
            content: `\n<p>Why is Python the most popular language on earth? Because of these libraries you can install via <code>pip</code>:<br><li><strong>Data Science:</strong> <code>pandas</code> (Excel on steroids) and <code>numpy</code> (Insanely fast math).</li><br><li><strong>Web Scraping:</strong> <code>BeautifulSoup</code> (Extracts text from HTML) and <code>Selenium</code> (A bot that physically opens a Chrome window and clicks buttons for you).</li><br><li><strong>Web Development:</strong> <code>Django</code> (The massive framework that powers Instagram) and <code>FastAPI</code> (The incredibly fast, modern way to build APIs).</li></p>

<p>---</p>\n`
        },
        {
            id: 'ch20',
            title: 'Module20: Practice (The 10,000 Hour Rule)',
            content: `\n<p>You cannot learn Python by just reading. You MUST type.<br><li><strong>Challenge 1:</strong> Write a program that reverses a string WITHOUT using the <code>[::-1]</code> trick.</li><br><li><strong>Challenge 2:</strong> Write a program that opens a <code>.txt</code> file, counts how many times the word "the" appears, and prints the result.</li></p>

<p>---</p>\n`
        },
        {
            id: 'ch21',
            title: 'Module21: Projects (Building the Real World)',
            content: `\n<p>Do not get stuck in "Tutorial Hell". Build these to prove you know Python:<br><li><strong>Beginner:</strong> A random Password Generator (uses <code>random</code> and <code>string</code> modules).</li><br><li><strong>Intermediate:</strong> An Automated Web Scraper (uses <code>requests</code> and <code>BeautifulSoup</code> to check the price of a product on Amazon every 24 hours and email you if it drops).</li><br><li><strong>Advanced:</strong> A fully functional REST API using <code>FastAPI</code> and <code>SQLite</code> to manage a Library of books, complete with user authentication.</li></p>

<p><strong><em>End of Python Masterclass</strong></em></p>\n`
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

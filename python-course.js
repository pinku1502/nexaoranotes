document.addEventListener('DOMContentLoaded', () => {
    const courseData = [
        {
            id: 'ch1',
            title: 'Module1: Introduction to Python (The Universal Tool)',
            content: `\n<h3>1. What is Python and Why Does it Exist?</h3>
Python was created in 1991 by Guido van Rossum. Before Python, programmers had to write code in languages like C or C++, which required managing memory manually, dealing with complex syntax, and writing 50 lines of code just to print a simple message. 
Guido's goal was simple: <strong>Make programming read like plain English.</strong>

<h3>2. Core Features of Python</h3>
*   <strong>Interpreted, Not Compiled:</strong> Unlike Java, which must be converted entirely into bytecode before running, Python is interpreted. A program called the "Interpreter" reads your code line-by-line, translating it on the fly. This makes testing and debugging incredibly fast.
*   <strong>Dynamically Typed:</strong> In Java, you must declare \`int x = 5;\`. In Python, you just say \`x = 5\`. Python is smart enough to figure out that 5 is an integer on its own.
*   <strong>Batteries Included:</strong> Python comes pre-packaged with massive libraries. You can build a web server, read a CSV file, and download a webpage without installing any third-party tools.

<h3>3. Applications (Where is Python Used?)</h3>
*   <strong>Artificial Intelligence & Machine Learning:</strong> OpenAI (ChatGPT), Tesla Autopilot, and Netflix recommendation algorithms run heavily on Python (using libraries like TensorFlow and PyTorch).
*   <strong>Web Development:</strong> Instagram and Pinterest were built using Python's Django framework.
*   <strong>Automation:</strong> Python is the king of writing short scripts that automate boring office tasks (like renaming 1,000 Excel files in 2 seconds).

<h3>4. Python Syntax: The Power of Indentation</h3>
Python forces you to write beautiful code. Instead of using curly brackets \`{}\` to group code blocks, Python uses physical empty space (indentation, usually 4 spaces or 1 Tab).

<pre><code># Bad, imaginary syntax (like C++)
if (weather == "rain") {
<li>   bring_umbrella();</li>
}

# Python Syntax (Clean, readable, mandatory indentation)
if weather == "rain":
<li>   bring_umbrella()</li>
    print("Stay dry!")
# Notice how the lack of indentation here means we are OUTSIDE the if-statement.
print("This prints no matter the weather.")
</code></pre>

<h3>5. Comments & Keywords</h3>
*   <strong>Comments:</strong> Use the \`#\` symbol. Python completely ignores anything after the \`#\`. Use it to explain your code to other humans!
*   <strong>Keywords:</strong> Reserved words that have special meaning (e.g., \`if\`, \`True\`, \`False\`, \`class\`, \`def\`). You CANNOT name a variable \`class\`.

---\n`
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
1.  Must start with a letter or an underscore \`_\`. (e.g., \`_score\`, \`score1\`)
2.  Cannot start with a number. (e.g., \`1score\` will crash the program).
3.  Case Sensitive! \`Score\` and \`score\` are two completely different boxes!
4.  <strong>Best Practice:</strong> Use \`snake_case\` (words separated by underscores) for variable names.

<h3>3. Built-in Data Types (What goes in the box?)</h3>
*   <strong>Integers (\`int\`):</strong> Whole numbers. \`speed = 120\`
*   <strong>Floating Point (\`float\`):</strong> Decimal numbers. \`gravity = 9.81\`
*   <strong>Strings (\`str\`):</strong> Text surrounded by quotes. \`greeting = 'Hello'\`
*   <strong>Booleans (\`bool\`):</strong> True or False. (MUST be capitalized). \`is_online = True\`

<h3>4. Type Casting (Forcing the Shape)</h3>
Sometimes a user types "50" on their keyboard, but the computer reads it as text (String), not a math number. You must cast it!
<pre><code>age_text = "25"
# You cannot do math on text: age_text + 5 would crash!

# We cast it to an integer (int)
age_number = int(age_text) 
print(age_number + 5) # Now it works! Output: 30
</code></pre>

<h3>5. type() and id()</h3>
*   \`type(variable)\`: Asks Python, "What kind of data is in this box?"
*   \`id(variable)\`: Asks Python, "What is the exact physical memory address (barcode) of this box in the RAM?"

<pre><code>x = 10
print(type(x)) # <class 'int'>
print(id(x))   # 140728109312384 (Unique barcode)
</code></pre>

---\n`
        },
        {
            id: 'ch3',
            title: 'Module3: Operators (The Mathematical Engine)',
            content: `\n<h3>1. Arithmetic Operators</h3>
<em>   \`+\` Addition, \`-\` Subtraction, \`</em>\` Multiplication, \`/\` Division (always results in a float decimal).
*   <strong>\`//\` Floor Division:</strong> Divides and chops off the decimal completely. \`10 // 3 = 3\`
*   <strong>\`%\` Modulo (The Remainder):</strong> Divides and gives you the remainder. This is the ultimate tool for finding Even/Odd numbers! \`10 % 3 = 1\` (because 3 goes into 10 three times, with 1 left over).
*   <strong>\`</strong>\` Exponent:<strong> \`2 </strong> 3 = 8\` (2 to the power of 3).

<h3>2. Assignment Operators (Shortcuts)</h3>
Programmers are lazy. Instead of writing \`score = score + 10\`, we use shortcuts.
<pre><code>score = 0
score += 10 # Adds 10 to the current score
score *= 2  # Multiplies the current score by 2
</code></pre>

<h3>3. Comparison Operators (The Interrogator)</h3>
These always return a Boolean (\`True\` or \`False\`).
*   \`==\` (Is exactly equal to?) <strong>Don't confuse this with \`=\` which assigns a value!</strong>
*   \`!=\` (Is NOT equal to?)
*   \`>\`, \`<\`, \`>=\`, \`<=\`

<h3>4. Logical Operators (and, or, not)</h3>
*   <strong>\`and\`</strong>: BOTH conditions must be True. (I need my ID \`and\` my Ticket to enter).
*   <strong>\`or\`</strong>: ONLY ONE condition needs to be True. (I can pay with Cash \`or\` Card).
*   <strong>\`not\`</strong>: Reverses the truth! \`not True\` becomes \`False\`.

<h3>5. Membership & Identity Operators</h3>
*   <strong>\`in\`</strong>: Checks if an item is inside a collection (like searching a bag).
*   <strong>\`is\`</strong>: Checks if two variables point to the EXACT SAME physical box in memory. (Compares \`id()\`).

<pre><code>inventory = ["sword", "shield", "potion"]
print("potion" in inventory) # True!

a = [1, 2, 3]
b = [1, 2, 3]
print(a == b) # True (They have the same contents)
print(a is b) # False! (They are two completely separate boxes in memory)
</code></pre>

---\n`
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
How do you print a quotation mark if quotation marks are used to define the string itself? You use a backslash \`\\\` to "escape" the rule.
*   \`
\`: Creates a new line (Enter key).
*   \`	\`: Creates a tab space.
*   \`"\`: Prints an actual quotation mark.

<pre><code>print("He said, "Python is awesome!"
And I agreed.")
</code></pre>

<h3>3. f-Strings (The Ultimate Templating Tool)</h3>
Formatting strings manually with \`+\` is ugly and causes crashes if you try to add a String to an Integer.
<strong>f-Strings</strong> (added in Python 3.6) revolutionized text. You put an \`f\` before the quotes, and wrap variables in \`{}\`. Python automatically converts them and injects them.

<pre><code>hero_name = "Arthur"
health = 85
gold = 1500

# Look how beautiful and readable this is!
print(f"[{hero_name}] HP: {health}/100 | Wallet: \${gold}")
</code></pre>

<h3>4. The input() Function</h3>
How you pause the program and wait for the user to type something on their keyboard.
<strong>CRITICAL RULE:</strong> \`input()\` ALWAYS returns a String. Even if the user types \`99\`, Python sees it as the text \`"99"\`.

<pre><code># Bad code (Will crash if you try to do math!)
# age = input("How old are you? ")

# Good code (Immediately cast the string into an integer!)
age = int(input("How old are you? "))
years_to_retire = 65 - age
print(f"You have {years_to_retire} years left until retirement!")
</code></pre>

---\n`
        },
        {
            id: 'ch5',
            title: 'Module5: Control Flow (The Decision Maker)',
            content: `\n<h3>1. if, elif, else (The Crossroads)</h3>
Without control flow, code just runs straight down like a waterfall. \`if\` statements allow the code to branch based on decisions.
<em>Analogy:</em> Driving a car. If the light is green, go. Else if the light is yellow, slow down. Else, stop.

<pre><code>temperature = 85

if temperature > 90:
<li>   print("It's boiling! Turn on AC.")</li>
elif temperature > 70:
<li>   print("It's a beautiful day.")</li>
elif temperature > 50:
<li>   print("Getting chilly, grab a jacket.")</li>
else:
<li>   print("It's freezing! Stay inside.")</li>
</code></pre>
<em>Note:</em> The program checks from top to bottom. The VERY FIRST condition that is True will execute, and the rest are entirely skipped!

<h3>2. Match-Case (The Switch Statement)</h3>
Introduced in Python 3.10, \`match-case\` is a cleaner way to write massive \`if-elif\` chains when you are checking the exact value of a single variable.

<pre><code>status_code = 404

match status_code:
<li>   case 200:</li>
        print("Success!")
<li>   case 404:</li>
        print("Not Found!")
<li>   case 500:</li>
        print("Server Error!")
<li>   case _: # The underscore is the default "catch-all" (like 'else')</li>
        print("Unknown error.")
</code></pre>

<h3>3. The 'while' Loop (The Treadmill)</h3>
A \`while\` loop runs FOREVER until its condition becomes False. 
<em>Danger:</em> If you forget to update the condition inside the loop, you create an <strong>Infinite Loop</strong> and your computer freezes!

<pre><code>battery = 100
while battery > 0:
<li>   print(f"Using phone... Battery at {battery}%")</li>
    battery -= 20 # If we don't subtract here, the loop runs forever!
print("Phone died!")
</code></pre>

<h3>4. The 'for' Loop (The Assembly Line)</h3>
A \`for\` loop is used to iterate over a sequence (like a list, a string, or a range of numbers). You know exactly how many times it will run.

<pre><code># Using range(start, stop). Note: It stops ONE BEFORE the stop number!
for i in range(1, 6):
<li>   print(f"Counting: {i}") # Prints 1, 2, 3, 4, 5</li>

# Looping through a string (letter by letter)
for letter in "PYTHON":
<li>   print(letter)</li>
</code></pre>

<h3>5. Break, Continue, and Pass</h3>
*   <strong>\`break\`:</strong> The Emergency Stop Button. It instantly shatters the loop and exits it entirely, regardless of the condition.
*   <strong>\`continue\`:</strong> The Skip Button. It stops the current iteration and instantly jumps back to the top of the loop for the next round.
*   <strong>\`pass\`:</strong> A placeholder. If you write an \`if\` statement but haven't figured out the code yet, you type \`pass\` so Python doesn't crash with an indentation error.

<pre><code>for num in range(1, 10):
<li>   if num == 3:</li>
        continue # Skips printing 3!
<li>   if num == 7:</li>
        break # Shatters the loop! 8 and 9 will never print!
<li>   print(num)</li>
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
You can slice chunks out of a string using \`[start:stop:step]\`. Note that the \`stop\` index is NOT included in the slice!
<pre><code>text = "HelloWorld"
print(text[0:5])   # "Hello" (Gets index 0, 1, 2, 3, 4)
print(text[5:])    # "World" (Starts at 5, goes to the very end)
print(text[::-1])  # "dlroWolleH" (Reverses the entire string magically!)
</code></pre>

<h3>3. Essential String Methods</h3>
Strings have built-in superpowers (methods) to manipulate text instantly.
*   \`.upper()\` & \`.lower()\`: Changes casing.
*   \`.strip()\`: Instantly destroys any accidental spaces a user typed at the beginning or end of a string.
*   \`.replace(old, new)\`: Finds a word and replaces it.
*   \`.split(separator)\`: Chops a single string into a List of strings!

<pre><code>csv_data = "apple,banana,orange"
fruits_list = csv_data.split(",") # Automatically converts into ["apple", "banana", "orange"]
</code></pre>

---\n`
        },
        {
            id: 'ch7',
            title: 'Module7: Collections (The Data Structures)',
            content: `\n<h3>1. Lists (The Dynamic Backpack)</h3>
Lists \`[]\` are ordered and mutable (changeable). They are the most common collection.
<pre><code>inventory = ["sword", "shield"]
inventory.append("potion") # Adds to the end
inventory.insert(0, "map") # Forces "map" into the first slot (index 0)
inventory.pop() # Removes and returns the last item
</code></pre>

<h3>2. Tuples (The Locked Safe)</h3>
Tuples \`()\` are identical to Lists, except they are <strong>Immutable</strong>. You can NEVER add, remove, or change items once a Tuple is created. Why use them? Because they use less memory and are faster than Lists for data that shouldn't change (like GPS coordinates or days of the week).

<h3>3. Sets (The Bouncer)</h3>
Sets \`{}\` are unordered. You cannot ask for \`myset[0]\` because Sets don't have addresses. The superpower of a Set is that it <strong>destroys duplicates instantly</strong>.
<pre><code>unique_numbers = {1, 1, 1, 2, 2, 3}
print(unique_numbers) # Output: {1, 2, 3}
</code></pre>

<h3>4. Dictionaries (The Key-Value Phonebook)</h3>
Dictionaries \`{key: value}\` are unordered, but incredibly fast. You don't search a dictionary by index number; you search it by its "Key" (the label).
<pre><code>student = {
<li>   "name": "Alex",</li>
    "age": 22,
<li>   "grades": ["A", "B", "A"]</li>
}
print(student["name"]) # Immediately grabs "Alex"
student["age"] = 23 # You can update values instantly!
</code></pre>

---\n`
        },
        {
            id: 'ch8',
            title: 'Module8: Functions (The Code Factories)',
            content: `\n<h3>1. Defining and Calling Functions</h3>
If you copy-paste the same code 3 times, you are doing it wrong. Wrap it in a Function using \`def\`.
<pre><code># The Factory Blueprint
def greet_user(name):
<li>   print(f"Hello, {name}! Welcome to the system.")</li>

# Using the Factory
greet_user("Sarah") 
greet_user("John")
</code></pre>

<h3>2. Parameters vs Arguments</h3>
*   <strong>Parameters:</strong> The empty variables inside the \`def\` parenthesis. (They are waiting for data).
*   <strong>Arguments:</strong> The actual real data you pass into the function when you call it.

<h3>3. The 'return' Statement</h3>
Printing is just showing data to the screen. \`return\` actually hands the processed data BACK to the main program so you can use it in math or logic!
<pre><code>def calculate_tax(price):
<li>   tax = price * 0.10</li>
    return price + tax # Hands the final number back!

final_total = calculate_tax(100) # final_total becomes 110.0
</code></pre>

<h3>4. <em>args and </em>*kwargs (Infinite Arguments)</h3>
<em>   \`</em>args\`: Allows a function to accept any number of regular arguments, packing them into a Tuple.
<em>   \`</em>*kwargs\`: Allows a function to accept any number of keyword arguments (like \`name="Alice"\`), packing them into a Dictionary.

---\n`
        },
        {
            id: 'ch9',
            title: 'Module9: Modules & Packages (Expanding Your Arsenal)',
            content: `\n<h3>1. The Import Statement</h3>
Python has thousands of built-in scripts (Modules) written by core developers. You just have to \`import\` them to borrow their tools!
<pre><code>import math
print(math.pi) # 3.141592653589793

import random
winner = random.choice(["Alice", "Bob", "Charlie"])
</code></pre>

<h3>2. Built-in vs Custom Modules</h3>
You can import your own files! If you write massive code in \`database.py\`, you can \`import database\` in your \`main.py\` file to keep things clean.

<h3>3. pip and Virtual Environments</h3>
*   <strong>pip:</strong> The Python Installer Program. You open your terminal and type \`pip install requests\` to download incredible tools written by other developers around the world.
*   <strong>venv:</strong> A Virtual Environment. It creates an isolated bubble for your project, so installing a library for Project A doesn't accidentally break Project B!

---\n`
        },
        {
            id: 'ch10',
            title: 'Module10: File Handling (Permanent Memory)',
            content: `\n<h3>1. File Modes</h3>
*   \`r\`: Read (default). Crashes if file doesn't exist.
*   \`w\`: Write. OVERWRITES the entire file. Creates file if it doesn't exist.
*   \`a\`: Append. Adds to the very bottom of the file without deleting the old stuff.

<h3>2. The 'with' Statement</h3>
If you open a file and your program crashes before you type \`file.close()\`, the file gets locked and corrupted! The \`with\` block fixes this by guaranteeing the file closes safely, no matter what happens.

<pre><code>with open("data.txt", "w") as file:
<li>   file.write("Saving this permanently to the hard drive!")</li>
# The file is instantly and safely closed here.
</code></pre>

---\n`
        },
        {
            id: 'ch11',
            title: 'Module11: Exception Handling (The Crash Net)',
            content: `\n<h3>1. The Problem with Errors</h3>
If Python hits an error (like trying to divide by zero, or trying to open a file that doesn't exist), the entire program halts immediately.

<h3>2. try, except, finally</h3>
You wrap "dangerous" code in a \`try\` block. If it explodes, the \`except\` block catches the explosion and lets the program continue running normally.
<pre><code>try:
<li>   number = int(input("Enter a number: "))</li>
    result = 10 / number
except ZeroDivisionError:
<li>   print("Error: You cannot divide by zero!")</li>
except ValueError:
<li>   print("Error: That wasn't a valid number!")</li>
finally:
<li>   print("This block runs EVERY SINGLE TIME, crash or no crash.")</li>
</code></pre>

---\n`
        },
        {
            id: 'ch12',
            title: 'Module12: Object-Oriented Programming (The Master Blueprint)',
            content: `\n<h3>1. Classes and Objects</h3>
OOP allows you to create your own custom Data Types.
*   <strong>Class:</strong> The blueprint. (e.g., A blueprint for a Car).
*   <strong>Object (Instance):</strong> The physical thing built from the blueprint. (e.g., A red Toyota, a blue Ford).

<h3>2. The Constructor (__init__)</h3>
The magic function that runs automatically the exact millisecond an Object is created. It sets up the default variables.
<pre><code>class Robot:
<li>   def __init__(self, name, battery):</li>
        self.name = name # 'self' means THIS specific robot
<li>       self.battery = battery</li>

<li>   def status(self):</li>
        print(f"I am {self.name}. Battery: {self.battery}%")

r1 = Robot("R2D2", 100) # The __init__ runs instantly!
r1.status()
</code></pre>

<h3>3. The 4 Pillars of OOP</h3>
1.  <strong>Encapsulation:</strong> Hiding variables so other programmers can't accidentally break them.
2.  <strong>Inheritance:</strong> Creating a \`SmartRobot\` class that automatically inherits all the code from the \`Robot\` class, saving you from re-typing it!
3.  <strong>Polymorphism:</strong> A \`Dog\` and \`Cat\` class both have a \`.speak()\` method, but one prints "Woof" and the other prints "Meow".
4.  <strong>Abstraction:</strong> Hiding complex math inside a simple \`.drive()\` method so the user doesn't have to understand how the engine works to use it.

---\n`
        },
        {
            id: 'ch13',
            title: 'Module13: Advanced Python (The Pro Tier)',
            content: `\n<h3>1. List Comprehensions (The Elegant Loop)</h3>
Instead of writing a 4-line \`for\` loop to build a list, you can do it in 1 elegant line.
<pre><code># Old, clunky way
evens = []
for x in range(10):
<li>   if x % 2 == 0:</li>
        evens.append(x)

# The Pythonic Way (List Comprehension)
evens = [x for x in range(10) if x % 2 == 0] 
</code></pre>

<h3>2. Iterators & Generators (\`yield\`)</h3>
If you try to load a list of 1 Billion numbers into RAM, your computer will crash.
A <strong>Generator</strong> uses the \`yield\` keyword instead of \`return\`. It doesn't generate the whole list at once; it generates one number, hands it to you, pauses, and waits for you to ask for the next one. It takes almost ZERO memory!

<h3>3. Decorators (@)</h3>
A decorator is a function that wraps <em>around</em> another function to give it extra powers, without permanently modifying the original function's code!
<em>Analogy:</em> You have a basic coffee. You pass it through a \`@whipped_cream\` decorator. It's still coffee, but now it has new features!

---\n`
        },
        {
            id: 'ch14',
            title: 'Module14: Functional Programming (The Assembly Line)',
            content: `\nPython can be written in a "Functional" style, where you treat data like a factory conveyor belt, passing it through functions.

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

---\n`
        },
        {
            id: 'ch15',
            title: 'Module15: Database Programming (SQL Connections)',
            content: `\nYou don't want to save complex user data in a \`.txt\` file. You need a real database. Python uses the built-in \`sqlite3\` module to talk to local databases.

<h3>CRUD Operations</h3>
The 4 pillars of database management:
1.  <strong>C</strong>reate (INSERT INTO)
2.  <strong>R</strong>ead (SELECT)
3.  <strong>U</strong>pdate (UPDATE)
4.  <strong>D</strong>elete (DELETE)

<pre><code>import sqlite3
conn = sqlite3.connect('users.db')
cursor = conn.cursor()

# Parameterized Query (CRITICAL FOR SECURITY against Hackers!)
# Never use f-strings here! Always use the '?' placeholder!
cursor.execute("SELECT * FROM users WHERE age > ?", (18,)) 
print(cursor.fetchall())
</code></pre>

---\n`
        },
        {
            id: 'ch16',
            title: 'Module16: Multithreading & Multiprocessing (Parallel Brains)',
            content: `\nPython normally executes one single line at a time. This is slow if you need to download 100 images.

<h3>1. Multithreading (I/O Bound)</h3>
Great for tasks where Python is just "waiting" (like waiting for a website to load). You can spin up 100 threads, and they will all wait for 100 different websites at the exact same time!

<h3>2. Multiprocessing (CPU Bound)</h3>
If you are doing heavy Math (like calculating Pi to a million digits), threads won't help due to Python's GIL lock. You must use the \`multiprocessing\` module to actually wake up the 2nd, 3rd, and 4th physical cores of your CPU to do the math simultaneously!

---\n`
        },
        {
            id: 'ch17',
            title: 'Module17: Web & APIs (Talking to the Internet)',
            content: `\nAn API is a waiter. You are the customer (Client). The Database is the Kitchen (Server).
You use the \`requests\` library to hand the waiter your order.

<pre><code>import requests

# We ask a public API for data
response = requests.get('https://pokeapi.co/api/v2/pokemon/pikachu')

# If the waiter says 200 (Success!), we eat the JSON food!
if response.status_code == 200:
<li>   data = response.json()</li>
    print("Pokemon Name:", data['name'])
</code></pre>

---\n`
        },
        {
            id: 'ch18',
            title: 'Module18: Testing & Debugging (Bulletproofing)',
            content: `\nYou cannot trust your own code. You must write code that tests your code automatically.
The industry standard is <strong>pytest</strong>.

<pre><code># In a file called test_math.py
def add(a, b):
<li>   return a + b</li>

# The test function
def test_add():
<li>   assert add(2, 2) == 4 # If this ever equals 5, the test fails instantly!</li>
    assert add(-1, 1) == 0
</code></pre>
When you run \`pytest\` in the terminal, it scans your entire project, runs thousands of these little tests in 1 second, and ensures you didn't break anything.

---\n`
        },
        {
            id: 'ch19',
            title: 'Module19: Popular Libraries (The Python Superpowers)',
            content: `\nWhy is Python the most popular language on earth? Because of these libraries you can install via \`pip\`:
*   <strong>Data Science:</strong> \`pandas\` (Excel on steroids) and \`numpy\` (Insanely fast math).
*   <strong>Web Scraping:</strong> \`BeautifulSoup\` (Extracts text from HTML) and \`Selenium\` (A bot that physically opens a Chrome window and clicks buttons for you).
*   <strong>Web Development:</strong> \`Django\` (The massive framework that powers Instagram) and \`FastAPI\` (The incredibly fast, modern way to build APIs).

---\n`
        },
        {
            id: 'ch20',
            title: 'Module20: Practice (The 10,000 Hour Rule)',
            content: `\nYou cannot learn Python by just reading. You MUST type.
*   <strong>Challenge 1:</strong> Write a program that reverses a string WITHOUT using the \`[::-1]\` trick.
*   <strong>Challenge 2:</strong> Write a program that opens a \`.txt\` file, counts how many times the word "the" appears, and prints the result.

---\n`
        },
        {
            id: 'ch21',
            title: 'Module21: Projects (Building the Real World)',
            content: `\nDo not get stuck in "Tutorial Hell". Build these to prove you know Python:
1.  <strong>Beginner:</strong> A random Password Generator (uses \`random\` and \`string\` modules).
2.  <strong>Intermediate:</strong> An Automated Web Scraper (uses \`requests\` and \`BeautifulSoup\` to check the price of a product on Amazon every 24 hours and email you if it drops).
3.  <strong>Advanced:</strong> A fully functional REST API using \`FastAPI\` and \`SQLite\` to manage a Library of books, complete with user authentication.

<strong><em>End of Python Masterclass</strong></em>\n`
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

import re

def generate_cards():
    categories = {
        'javascript': {
            'name': 'JavaScript',
            'questions': [
                ("What is prototypal inheritance in JavaScript?", "JavaScript uses prototypes instead of classical class definitions. Objects inherit methods directly from their parent prototypes via the proto link chains."),
                ("Explain the Event Loop and asynchronous tasks.", "The event loop monitors call stacks and callbacks. Moves callback events from message task queues to call stacks whenever execution threads become empty."),
                ("What are closures and why are they used?", "Closures are functions that remember the environment in which they were created, even after the outer function has finished executing. They are used for data privacy and currying."),
                ("Explain the difference between '==' and '==='.", "'==' checks for value equality with type coercion, whereas '===' checks for both value and type equality without coercion."),
                ("What is Hoisting in JavaScript?", "Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope before code execution."),
                ("Explain the 'this' keyword.", "'this' refers to the object that is executing the current function. Its value is determined by how a function is called, not where it was defined."),
                ("What are Promises?", "Promises represent the eventual completion or failure of an asynchronous operation, providing a cleaner alternative to nested callbacks."),
                ("What is event delegation?", "Event delegation is a pattern where a single event listener is attached to a parent element to handle events for all of its current and future child elements."),
                ("Explain map(), filter(), and reduce().", "Array methods used for transformation: map() creates a new array by applying a function, filter() extracts matching elements, and reduce() accumulates values into a single result."),
                ("What is the DOM?", "The Document Object Model is an API that represents the HTML structure as a tree of objects, allowing JavaScript to dynamically manipulate the page content and structure.")
            ]
        },
        'python': {
            'name': 'Python',
            'questions': [
                ("What are Python decorators and how do they work?", "Decorators modify the behavior of a function or class. They take another function as an argument, extend its behavior without editing it directly, and return it."),
                ("Explain the differences between lists and tuples.", "Lists are mutable collections defined with brackets [], allowing elements to be modified. Tuples are immutable collections defined with parentheses (), offering faster execution and hash keys safety."),
                ("What is PEP 8?", "PEP 8 is the official style guide for Python code, providing conventions and best practices for writing clean, readable, and maintainable code."),
                ("Explain Python's GIL (Global Interpreter Lock).", "The GIL is a mutex in CPython that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once, which limits true multithreading."),
                ("What are lambda functions?", "Lambda functions are small, anonymous functions defined using the 'lambda' keyword. They can take any number of arguments but can only have a single expression."),
                ("How is memory managed in Python?", "Memory is managed automatically via a private heap space. Python uses reference counting and a garbage collector to recycle unused memory."),
                ("What is a dictionary comprehension?", "A concise syntax for creating dictionaries from iterables, similar to list comprehensions but producing key-value pairs (e.g., {k: v for k, v in iterable})."),
                ("Explain '*args' and '**kwargs'.", "'*args' allows passing a variable number of positional arguments, while '**kwargs' allows passing a variable number of keyword arguments to a function."),
                ("What is the difference between deepcopy and shallow copy?", "A shallow copy creates a new object but inserts references to the original child objects. A deep copy creates a new object and recursively copies all child objects too."),
                ("What are generators?", "Generators are functions that return an iterator object. Instead of returning all values at once using 'return', they yield values one at a time using 'yield'.")
            ]
        },
        'java': {
            'name': 'Java',
            'questions': [
                ("How does Garbage Collection manage memory in Java?", "Garbage Collection runs on the JVM. It identifies unreferenced objects in the heap space and deletes them automatically to reclaim system memory blocks."),
                ("Overloading vs Overriding in Java.", "Method overloading occurs within the same class with identical names but different argument parameters. Method overriding occurs in subclasses overriding inheritance signatures."),
                ("What is the difference between an Interface and an Abstract Class?", "Interfaces only contain abstract methods (before Java 8) and support multiple inheritance. Abstract classes can have state and concrete methods but don't support multiple inheritance."),
                ("Explain the concept of OOPs.", "Object-Oriented Programming relies on four main pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction to organize software design around data/objects."),
                ("What is the final keyword?", "'final' can be applied to variables (cannot be changed), methods (cannot be overridden), and classes (cannot be subclassed)."),
                ("Explain the difference between String, StringBuilder, and StringBuffer.", "String is immutable. StringBuilder is mutable but not thread-safe (faster). StringBuffer is mutable and synchronized (thread-safe but slower)."),
                ("What are checked and unchecked exceptions?", "Checked exceptions are checked at compile-time (e.g., IOException). Unchecked exceptions occur at runtime (e.g., NullPointerException) and do not force a try-catch block."),
                ("What is a Singleton class?", "A class that can have only one object (instance of the class) at a time. Achieved by making the constructor private and providing a static method to get the instance."),
                ("How do HashMaps work internally?", "HashMaps store key-value pairs using a hash table. They use the hashCode() of the key to determine the bucket location and handle collisions using linked lists or trees."),
                ("What is multithreading in Java?", "Multithreading allows concurrent execution of two or more parts of a program to maximize CPU utilization, implemented by extending Thread or implementing Runnable.")
            ]
        },
        'cpp': {
            'name': 'C++',
            'questions': [
                ("Pointers vs References in C++.", "Pointers store the memory address of a variable, can be re-assigned, and can hold null values. References act as an alias to an existing object, cannot be null, and cannot be re-assigned once initialized."),
                ("What are virtual functions and vtables in C++?", "Virtual functions allow dynamic binding. The compiler creates a virtual table (vtable) for classes containing virtual functions, routing calls to the appropriate subclass method at runtime."),
                ("Explain RAII in C++.", "Resource Acquisition Is Initialization (RAII) ties resource lifecycle to object lifetime. Resources are acquired in the constructor and automatically released in the destructor."),
                ("What is the difference between malloc() and new?", "'new' is a C++ operator that allocates memory and calls the constructor. 'malloc()' is a C function that only allocates uninitialized raw memory blocks."),
                ("What are templates?", "Templates are the foundation of generic programming in C++, allowing functions and classes to operate with generic types without rewriting code for each type."),
                ("Explain smart pointers.", "Smart pointers (std::unique_ptr, std::shared_ptr, std::weak_ptr) are wrappers around raw pointers that automatically manage memory deallocation to prevent memory leaks."),
                ("What is the Rule of Three / Five?", "If a class defines a destructor, copy constructor, or copy assignment operator, it likely needs all three (Rule of 3). C++11 added move constructor and move assignment (Rule of 5)."),
                ("Explain standard template library (STL).", "STL provides a collection of generic algorithms, containers (vector, list, map), and iterators that provide robust and efficient data structures."),
                ("What is a friend function?", "A function that is granted access to the private and protected members of a class, even though it is not a member of that class itself."),
                ("How does exception handling work?", "C++ uses try, catch, and throw keywords. When an error occurs, an exception is thrown, the call stack unwinds until a matching catch block handles the error.")
            ]
        },
        'system-design': {
            'name': 'System Design',
            'questions': [
                ("Explain REST API convention & HTTP methods.", "REST models resource representations. GET reads, POST creates, PUT/PATCH updates, and DELETE deletes resources. Employs JSON responses and status codes."),
                ("What is load balancing and traffic routing?", "Load balancers sit between clients and server clusters, routing traffic algorithms (like Round Robin or Least Connections) to prevent server bottlenecks."),
                ("SQL vs NoSQL Databases.", "SQL databases are relational and structured with rigid schemas (ACID). NoSQL databases are non-relational, flexible, and scale horizontally (BASE/Eventual Consistency)."),
                ("What is caching and how does it improve performance?", "Caching stores frequently accessed data in fast memory (like Redis/Memcached) to reduce database load and serve requests instantly."),
                ("Explain Microservices Architecture.", "An approach where an application is composed of small, independent services communicating over APIs, allowing independent scaling, deployment, and tech stacks."),
                ("What is horizontal vs vertical scaling?", "Vertical scaling (scaling up) adds more power (CPU/RAM) to an existing machine. Horizontal scaling (scaling out) adds more machines to the resource pool."),
                ("How does a CDN (Content Delivery Network) work?", "CDNs cache static assets (images, CSS, JS) on globally distributed edge servers, serving content to users from the server geographically closest to them to reduce latency."),
                ("Explain database sharding.", "Sharding splits a large database table across multiple separate database servers based on a shard key, improving read/write throughput and storage limits."),
                ("What is message queuing (e.g., Kafka, RabbitMQ)?", "Message queues decouple system components by storing messages asynchronously. They absorb traffic spikes and allow background workers to process tasks at their own pace."),
                ("Explain CAP Theorem.", "States that a distributed system can only provide two of three guarantees simultaneously: Consistency, Availability, and Partition tolerance.")
            ]
        }
    }
    
    html = '<div class="interviews-grid" id="interviews-grid">\n'
    for key, data in categories.items():
        lang = key
        name = data['name']
        for i, (q, a) in enumerate(data['questions']):
            html += f'''      <!-- {name} {i+1} -->
      <div class="interview-card glass-card" data-lang="{lang}">
        <span class="interview-category">{name}</span>
        <h3>{q}</h3>
        <p>{a}</p>
      </div>\n'''
    html += '    </div>'
    return html

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the existing grid
new_grid = generate_cards()
content = re.sub(r'<div class="interviews-grid" id="interviews-grid">.*?</div>\s*</section>', new_grid + '\n  </section>', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected 10 questions per category!")

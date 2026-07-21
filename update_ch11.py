import re

new_ch11 = """      {
        id: 'ch11',
        title: 'Module 11: Asynchronous JavaScript (Promises & Async/Await)',
        content: `
            <h3>1. The Core Concept: Synchronous vs Asynchronous</h3>
            <p><strong>Synchronous (Blocking)</strong>: Everything happens one step at a time. If Step 2 takes 10 seconds to finish, Step 3 MUST wait 10 seconds. The entire website freezes.</p>
            <p><strong>Asynchronous (Non-Blocking)</strong>: <em>Analogy:</em> You are at a restaurant. You order food. You don't freeze in place and stare at the kitchen door until the food arrives! You sit down, talk to your friends, and drink water. When the food is ready, the waiter brings it to you.</p>
            <p>Fetching data from a database takes time. Async JS allows your website to keep running and stay interactive while it waits for the data to arrive in the background.</p>

            <h3>2. The Dark Ages: Callback Hell 😱</h3>
            <p>In the old days, to do things in the background, we passed "Callback Functions" inside other functions. When doing multiple things in a row, this created a terrifying "Pyramid of Doom" that was impossible to read.</p>
            <pre><code>// Do not write code like this anymore!
setTimeout(() => {
    console.log("1. Got User");
    setTimeout(() => {
        console.log("2. Got Profile");
        setTimeout(() => {
            console.log("3. Got Friends");
            // Welcome to Callback Hell!
        }, 1000);
    }, 1000);
}, 1000);</code></pre>

            <h3>3. The Renaissance: Promises (.then / .catch)</h3>
            <p>To fix Callback Hell, JavaScript invented <strong>Promises</strong>. A Promise is exactly what it sounds like: <em>"I don't have the data right now, but I PROMISE I will let you know when I do."</em></p>
            <ul>
                <li><strong>Pending:</strong> Waiting for the data.</li>
                <li><strong>Fulfilled:</strong> We got the data! (Triggers <code>.then()</code>)</li>
                <li><strong>Rejected:</strong> Something went wrong (e.g. no wifi). (Triggers <code>.catch()</code>)</li>
            </ul>
            <pre><code>fetch('https://api.example.com/user')
    .then(response => response.json()) // If successful, do this!
    .then(data => console.log(data))
    .catch(error => console.log("Failed!", error)); // If failed, catch the error!</code></pre>

            <h3>4. The Modern Era: Async / Await 🚀</h3>
            <p>Promises were great, but `.then()` chains could still get messy. <strong>Async/Await</strong> is the modern way. It lets us write Asynchronous code that *looks* exactly like easy-to-read Synchronous code!</p>
            <ul>
                <li><code>async</code>: Put this in front of a function to tell JS it will run in the background.</li>
                <li><code>await</code>: Put this in front of a Promise. It tells JS: <em>"Pause this specific function right here until the data arrives. But let the rest of the website keep working!"</em></li>
            </ul>
            <pre><code>async function getUser() {
    try {
        // Wait for the data to arrive, but don't freeze the website!
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        console.log("Here is the user:", data);
    } catch (error) {
        console.log("Something broke!", error);
    }
}
getUser();</code></pre>
        `
    },"""

with open('javascript-masterclass.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Module 11
ch11_pattern = re.compile(r'\{\s*id:\s*\'ch11\',.*?\}\,', re.DOTALL)
content = ch11_pattern.sub(new_ch11, content, count=1)

with open('javascript-masterclass.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Module 11 updated successfully.")

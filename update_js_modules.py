import re

new_ch12 = """      {
        id: 'ch12',
        title: 'Module 12: The Event Loop & Call Stack (Under the Hood)',
        content: `
            <p>JavaScript is <strong>Single-Threaded</strong>. This means it can literally only do <strong>one single thing at a time</strong>. It has only one brain. So how can a website fetch data, play a video, and listen for your clicks all at the same time without freezing?</p>
            
            <h3>The Restaurant Analogy 🍽️</h3>
            <p>Imagine a very busy restaurant with a very specific setup:</p>
            <ul>
                <li><strong>The Call Stack (The Chef):</strong> There is only ONE Chef. He can only chop one onion at a time. If you tell him to wait 5 seconds, he will stand there doing nothing, and the whole kitchen freezes.</li>
                <li><strong>Web APIs (The Ovens):</strong> These are outside the kitchen. The browser provides them. They can bake pizzas (timers, fetching data) in the background while the Chef chops onions.</li>
                <li><strong>The Callback Queue (The Waiting Area):</strong> When the Ovens finish baking, the pizzas are placed here.</li>
                <li><strong>The Event Loop (The Waiter):</strong> The Waiter stands between the Waiting Area and the Chef. He constantly looks at the Chef and asks: <em>"Is the Chef doing anything right now?"</em> If the Chef is free, the Waiter grabs the next pizza from the Waiting Area and gives it to the Chef to serve.</li>
            </ul>

            <h3>Let's trace some code!</h3>
            <pre><code>console.log('Start');

setTimeout(() => {
    console.log('Timer finished!');
}, 5000);

console.log('End');</code></pre>
            
            <ol>
                <li><code>console.log('Start')</code> goes to the Chef. He instantly prints <strong>Start</strong>.</li>
                <li><code>setTimeout</code> goes to the Chef. He sees it's a timer. He throws it into the Oven (Web API) for 5 seconds and moves on.</li>
                <li><code>console.log('End')</code> goes to the Chef. He instantly prints <strong>End</strong>.</li>
                <li><em>(5 seconds later)</em> The Oven dings! It pushes <code>console.log('Timer finished!')</code> into the Waiting Area (Queue).</li>
                <li>The Waiter (Event Loop) sees the Chef is free, and gives it to him. The Chef prints <strong>Timer finished!</strong></li>
            </ol>
            <p><strong>Output:</strong> Start ➔ End ➔ Timer finished!</p>
        `
    },"""

new_ch13 = """      {
        id: 'ch13',
        title: 'Module 13: Error Handling (try...catch...finally)',
        content: `
            <p>In the real world, code crashes. Servers go offline, users type letters into phone number boxes, and files go missing. If your JavaScript crashes, the entire webpage freezes and becomes a blank white screen. <strong>We must catch the explosion before it kills our app!</strong></p>

            <h3>The Bomb Squad Analogy 💣</h3>
            <ul>
                <li><code>try {}</code> - <strong>The Bomb Defusal:</strong> You put your dangerous, risky code here (like asking the internet for data). You are <em>trying</em> to defuse the bomb.</li>
                <li><code>catch (error) {}</code> - <strong>The Bomb Suit:</strong> If the code in the <code>try</code> block explodes (crashes), the <code>catch</code> block absorbs the explosion! The app DOES NOT die. Instead, you can show a friendly message like <em>"Please check your wifi!"</em></li>
                <li><code>finally {}</code> - <strong>The Cleanup:</strong> This code runs NO MATTER WHAT. Whether the bomb was defused safely, or it exploded, the bomb squad must pack up their tools and go home. (Used for hiding loading spinners).</li>
                <li><code>throw</code> - <strong>The Manual Alarm:</strong> Sometimes the code doesn't crash, but you <em>want</em> it to fail. (e.g. "If age is less than 18, <code>throw</code> an error!").</li>
            </ul>

            <h3>Real World Example:</h3>
            <pre><code>function loginUser(username) {
    try {
        console.log("1. Trying to log in...");
        
        // Manual Error!
        if (username === "") {
            throw new Error("Username cannot be completely empty!"); 
        }

        console.log("2. Login successful!");

    } catch (error) {
        // We caught the explosion! The app survives.
        console.log("ERROR CAUGHT: " + error.message);
        
    } finally {
        // This runs 100% of the time
        console.log("3. Hiding the loading spinner...");
    }
}

loginUser(""); // Passing an empty string to trigger the bomb!</code></pre>
            
            <p><strong>Output:</strong></p>
            <ol>
                <li>1. Trying to log in...</li>
                <li>ERROR CAUGHT: Username cannot be completely empty!</li>
                <li>3. Hiding the loading spinner...</li>
            </ol>
        `
    },"""

with open('javascript-masterclass.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Module 12
ch12_pattern = re.compile(r'\{\s*id:\s*\'ch12\',.*?\}\,', re.DOTALL)
content = ch12_pattern.sub(new_ch12, content, count=1)

# Replace Module 13
ch13_pattern = re.compile(r'\{\s*id:\s*\'ch13\',.*?\}\,', re.DOTALL)
content = ch13_pattern.sub(new_ch13, content, count=1)

with open('javascript-masterclass.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Modules 12 and 13 updated successfully.")

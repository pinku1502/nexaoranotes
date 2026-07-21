document.addEventListener('DOMContentLoaded', () => {
    
    const courseData = [
        {
            id: 'ch1',
            title: 'Module 1 – Introduction to HTML',
            content: `
                <h3>1.1 What is HTML?</h3>
                <h4>Definition</h4>
                <p>HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. It tells the browser how different elements such as headings, paragraphs, images, links, tables, and forms should be displayed.</p>
                <p>HTML is not a programming language because it cannot perform calculations, make decisions, or create logic. Instead, it is a markup language that organizes and structures content.</p>
                
                <h4>Why Do We Use HTML?</h4>
                <p>HTML is used to:</p>
                <ul>
                    <li>Create web pages</li>
                    <li>Organize webpage content</li>
                    <li>Add text, images, videos, and links</li>
                    <li>Build forms for user input</li>
                    <li>Connect CSS and JavaScript</li>
                    <li>Improve SEO using semantic elements</li>
                </ul>

                <h4>Real-Life Example</h4>
                <p>Think of building a house.</p>
                <ul>
                    <li><strong>HTML</strong> = Structure of the house</li>
                    <li><strong>CSS</strong> = Paint and decoration</li>
                    <li><strong>JavaScript</strong> = Electricity and smart features</li>
                </ul>
                <p>Without HTML, a website has no structure.</p>

                <h4>Syntax</h4>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

                <h4>Explanation</h4>
                <ul>
                    <li><code>&lt;!DOCTYPE html&gt;</code> tells the browser to use HTML5.</li>
                    <li><code>&lt;html&gt;</code> is the root element.</li>
                    <li><code>&lt;head&gt;</code> contains information about the webpage.</li>
                    <li><code>&lt;body&gt;</code> contains visible content.</li>
                </ul>

                <h4>Advantages</h4>
                <ul>
                    <li>Easy to learn</li>
                    <li>Free to use</li>
                    <li>Supported by every browser</li>
                    <li>SEO friendly</li>
                    <li>Works with CSS and JavaScript</li>
                </ul>

                <h4>Disadvantages</h4>
                <ul>
                    <li>Cannot create logic</li>
                    <li>Cannot connect databases</li>
                    <li>Cannot create dynamic websites alone</li>
                </ul>

                <h4>Common Mistakes</h4>
                <p>❌ Thinking HTML is a programming language.</p>
                <p>❌ Using HTML for styling instead of CSS.</p>

                <h4>Interview Questions</h4>
                <p><strong>Is HTML a programming language?</strong><br>No. It is a markup language.</p>
                <p><strong>What does HTML stand for?</strong><br>HyperText Markup Language.</p>

                <h4>Practice</h4>
                <p>Create a webpage with one heading and one paragraph.</p>

                <h4>Summary</h4>
                <ul>
                    <li>HTML creates webpage structure.</li>
                    <li>HTML is a markup language.</li>
                    <li>HTML works with CSS and JavaScript.</li>
                    <li>Every website uses HTML.</li>
                </ul>

                <hr>

                <h3>1.2 History of HTML</h3>
                <h4>Definition</h4>
                <p>HTML was created by Tim Berners-Lee in 1991 to share scientific documents on the World Wide Web. It has evolved through multiple versions and HTML5 is the current standard.</p>
                
                <h4>Timeline</h4>
                <table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
                    <tr><th style="padding: 8px;">Year</th><th style="padding: 8px;">Version</th></tr>
                    <tr><td style="padding: 8px;">1991</td><td style="padding: 8px;">HTML</td></tr>
                    <tr><td style="padding: 8px;">1995</td><td style="padding: 8px;">HTML 2.0</td></tr>
                    <tr><td style="padding: 8px;">1997</td><td style="padding: 8px;">HTML 3.2</td></tr>
                    <tr><td style="padding: 8px;">1999</td><td style="padding: 8px;">HTML 4.01</td></tr>
                    <tr><td style="padding: 8px;">2014</td><td style="padding: 8px;">HTML5</td></tr>
                </table>

                <h4>Why HTML5?</h4>
                <p>HTML5 introduced: Video support, Audio support, Semantic elements, Canvas, Better forms.</p>

                <h4>Interview Question</h4>
                <p><strong>Who invented HTML?</strong><br>Tim Berners-Lee</p>

                <hr>

                <h3>1.3 HTML Versions</h3>
                <table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
                    <tr><th style="padding: 8px;">Version</th><th style="padding: 8px;">Features</th></tr>
                    <tr><td style="padding: 8px;">HTML</td><td style="padding: 8px;">Basic tags</td></tr>
                    <tr><td style="padding: 8px;">HTML2</td><td style="padding: 8px;">Forms</td></tr>
                    <tr><td style="padding: 8px;">HTML3</td><td style="padding: 8px;">Tables</td></tr>
                    <tr><td style="padding: 8px;">HTML4</td><td style="padding: 8px;">CSS support</td></tr>
                    <tr><td style="padding: 8px;">HTML5</td><td style="padding: 8px;">Multimedia, Semantic HTML</td></tr>
                </table>
                <p><strong>Which version should we use?</strong> Always use HTML5.</p>

                <hr>

                <h3>1.4 Features of HTML5</h3>
                <p>HTML5 provides: Semantic elements, Video support, Audio support, Canvas, SVG, Better forms, Local storage support, Mobile-friendly features.</p>
                <h4>Example</h4>
                <p>Instead of <code>&lt;div id="header"&gt;</code>, Use <code>&lt;header&gt;</code>. This makes code easier to understand.</p>

                <hr>

                <h3>1.5 How HTML Works</h3>
                <p><strong>Step 1:</strong> Developer writes HTML. &rarr; <strong>Step 2:</strong> Browser reads HTML. &rarr; <strong>Step 3:</strong> Browser converts HTML into a webpage.</p>
                <h4>Example</h4>
                <p>Code: <code>&lt;h1&gt;Hello&lt;/h1&gt;</code> <br>Browser shows: <strong>Hello</strong></p>

                <hr>

                <h3>1.6 Client vs Server</h3>
                <table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
                    <tr><th style="padding: 8px;">Client</th><th style="padding: 8px;">Server</th></tr>
                    <tr><td style="padding: 8px;">Browser</td><td style="padding: 8px;">Computer storing website</td></tr>
                    <tr><td style="padding: 8px;">Requests webpage</td><td style="padding: 8px;">Sends webpage</td></tr>
                    <tr><td style="padding: 8px;">Chrome</td><td style="padding: 8px;">Apache</td></tr>
                </table>
                <p><strong>Flow:</strong> Browser &rarr; Request &rarr; Server &rarr; Response &rarr; Browser Displays Website</p>

                <hr>

                <h3>1.7 How Browsers Render HTML</h3>
                <p><strong>Steps:</strong> Read HTML &rarr; Create DOM Tree &rarr; Read CSS &rarr; Apply CSS &rarr; Execute JavaScript &rarr; Display webpage</p>

                <hr>

                <h3>1.8 First HTML Program</h3>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My First Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome&lt;/h1&gt;
&lt;p&gt;This is my first webpage.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                <h4>Output</h4>
                <p><strong>Welcome</strong><br>This is my first webpage.</p>

                <h4>Module Summary</h4>
                <p>You learned: ✔ HTML ✔ History ✔ Versions ✔ HTML5 ✔ Browser Working ✔ Client Server ✔ First Program</p>
            `
        },
        {
            id: 'ch2',
            title: 'Module 2 – Development Environment',
            content: `
                <h3>2.1 Installing VS Code</h3>
                <p>VS Code is the most popular code editor for web development. Download from the official Visual Studio Code website and install it for your operating system.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>Fast</li>
                    <li>Free</li>
                    <li>Extensions</li>
                    <li>Git Support</li>
                    <li>Live Preview</li>
                </ul>

                <hr>

                <h3>2.2 Recommended Extensions</h3>
                <p>Install these extensions:</p>
                <ul>
                    <li>Live Server</li>
                    <li>Prettier</li>
                    <li>HTML CSS Support</li>
                    <li>Auto Rename Tag</li>
                    <li>Auto Close Tag</li>
                    <li>Path Intellisense</li>
                    <li>Error Lens</li>
                </ul>

                <hr>

                <h3>2.3 Live Server</h3>
                <p>Live Server automatically refreshes the webpage whenever you save your HTML file.</p>
                <h4>Steps</h4>
                <ol>
                    <li>Install the extension.</li>
                    <li>Right-click your HTML file.</li>
                    <li>Select Open with Live Server.</li>
                </ol>

                <hr>

                <h3>2.4 Project Folder Structure</h3>
                <p>A clean project structure keeps your files organized.</p>
                <pre><code>Project/
│
├── index.html
├── about.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
├── icons/
└── assets/</code></pre>

                <hr>

                <h3>2.5 Creating Your First HTML File</h3>
                <p>Create a file named: <code>index.html</code></p>
                <p>The browser automatically loads <code>index.html</code> as the default page in many web servers.</p>

                <hr>

                <h3>2.6 Writing the First HTML Page</h3>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;NexoraCode&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello Developers&lt;/h1&gt;
&lt;p&gt;Welcome to NexoraCode.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

                <h4>Best Practices</h4>
                <ul>
                    <li>Always use HTML5.</li>
                    <li>Use lowercase tag names.</li>
                    <li>Properly indent your code.</li>
                    <li>Add <code>lang="en"</code> to the <code>&lt;html&gt;</code> tag.</li>
                    <li>Save files with the <code>.html</code> extension.</li>
                    <li>Keep your project organized into folders.</li>
                    <li>Use meaningful file names.</li>
                </ul>

                <h4>Common Mistakes</h4>
                <ul>
                    <li>Forgetting <code>&lt;!DOCTYPE html&gt;</code>.</li>
                    <li>Saving files as <code>.txt</code> instead of <code>.html</code>.</li>
                    <li>Not closing tags.</li>
                    <li>Writing everything in one line.</li>
                    <li>Using random file names.</li>
                </ul>

                <h4>Interview Questions</h4>
                <p><strong>Q1. What is HTML?</strong><br>A markup language used to create webpage structure.</p>
                <p><strong>Q2. Who invented HTML?</strong><br>Tim Berners-Lee.</p>
                <p><strong>Q3. Which HTML version is used today?</strong><br>HTML5.</p>
                <p><strong>Q4. Which software is commonly used to write HTML?</strong><br>Visual Studio Code.</p>
                <p><strong>Q5. What is the default homepage filename?</strong><br>index.html</p>
            `
        },
        {
            id: 'ch3',
            title: 'Module 3 – HTML Document Structure',
            content: `
                <h3>What is HTML Document Structure?</h3>
                <p>Every HTML page follows a standard structure. This structure helps the browser understand how to read and display the webpage correctly.</p>
                
                <h4>3.1 HTML Boilerplate</h4>
                <p>An HTML Boilerplate is the basic template of every HTML document. It contains the essential tags required to create a valid webpage.</p>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

                <h4>3.2 &lt;!DOCTYPE html&gt;</h4>
                <p>The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser that the document uses HTML5. It is not an HTML tag. Always place it on the first line.</p>

                <h4>3.3 &lt;html&gt; Tag</h4>
                <p>The root element of every HTML document. The <code>lang</code> attribute specifies the language (e.g. <code>lang="en"</code>).</p>

                <h4>3.4 &lt;head&gt; Tag</h4>
                <p>Stores metadata, title, and links to CSS/JS. Users cannot see anything inside the head directly.</p>

                <h4>3.5 &lt;body&gt; Tag</h4>
                <p>Contains everything that is visible on the webpage (Headings, Paragraphs, Images, etc.).</p>

                <h4>3.6 HTML Comments</h4>
                <p>Comments are ignored by the browser. They help developers explain code.</p>
                <pre><code>&lt;!-- This is a comment --&gt;</code></pre>
            `
        },
        {
            id: 'ch4',
            title: 'Module 4 – Meta Tags & Favicon',
            content: `
                <h3>4.1 What are Meta Tags?</h3>
                <p>Meta tags are HTML elements that provide metadata about a webpage. They help browsers and search engines understand the page.</p>

                <h4>4.2 Charset & Viewport</h4>
                <pre><code>&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
                <p><strong>UTF-8</strong> supports almost all characters including emojis 😊. <strong>Viewport</strong> makes the page responsive on mobile.</p>

                <h4>4.3 Description & Author</h4>
                <pre><code>&lt;meta name="description" content="Learn HTML with easy notes."&gt;
&lt;meta name="author" content="NexoraCode"&gt;</code></pre>

                <h4>4.4 What is a Favicon?</h4>
                <p>A favicon is the small icon displayed in the browser tab beside the page title.</p>
                <pre><code>&lt;link rel="icon" type="image/png" href="favicon.png"&gt;</code></pre>
            `
        },
        {
            id: 'ch5',
            title: 'Module 5 – Text & Formatting',
            content: `
                <h3>5.1 Heading Tags (h1 to h6)</h3>
                <p>Heading tags are used to define titles and subtitles. <code>&lt;h1&gt;</code> is the largest, <code>&lt;h6&gt;</code> is the smallest.</p>
                <p>SEO Tip: Use only one <code>&lt;h1&gt;</code> on a page.</p>

                <h3>5.2 Paragraph Tag (&lt;p&gt;)</h3>
                <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>

                <h3>5.3 Formatting Tags</h3>
                <ul>
                    <li><code>&lt;b&gt;</code> & <code>&lt;strong&gt;</code> - Bold / Important text</li>
                    <li><code>&lt;i&gt;</code> & <code>&lt;em&gt;</code> - Italic / Emphasized text</li>
                    <li><code>&lt;u&gt;</code> - Underline</li>
                    <li><code>&lt;mark&gt;</code> - Highlighted text</li>
                    <li><code>&lt;del&gt;</code> & <code>&lt;ins&gt;</code> - Deleted & Inserted text (e.g. <del>₹999</del> <ins>₹499</ins>)</li>
                    <li><code>&lt;sub&gt;</code> & <code>&lt;sup&gt;</code> - Subscript (H<sub>2</sub>O) & Superscript (x<sup>2</sup>)</li>
                </ul>

                <h3>5.4 Line Break & Horizontal Rule</h3>
                <p><code>&lt;br&gt;</code> adds a line break. <code>&lt;hr&gt;</code> adds a horizontal line separator.</p>
            `
        },
        {
            id: 'ch6',
            title: 'Module 6 – Links (Anchor Tag)',
            content: `
                <h3>6.1 Anchor Tag (&lt;a&gt;)</h3>
                <p>The Anchor tag creates hyperlinks to navigate between pages.</p>
                <pre><code>&lt;a href="https://google.com" target="_blank"&gt;Visit Google&lt;/a&gt;</code></pre>

                <h4>Attributes</h4>
                <ul>
                    <li><code>href</code> - The destination URL.</li>
                    <li><code>target="_blank"</code> - Opens the link in a new tab.</li>
                </ul>

                <h3>6.2 Types of Links</h3>
                <ul>
                    <li><strong>Absolute URL:</strong> Full web address (e.g. <code>https://example.com</code>)</li>
                    <li><strong>Relative URL:</strong> Path to a local file (e.g. <code>about.html</code>)</li>
                </ul>

                <h3>6.3 Email & Phone Links</h3>
                <pre><code>&lt;a href="mailto:abc@gmail.com"&gt;Email Us&lt;/a&gt;
&lt;a href="tel:+919876543210"&gt;Call Us&lt;/a&gt;</code></pre>
            `
        },
        {
            id: 'ch7',
            title: 'Module 7 – Images',
            content: `
                <h3>7.1 The &lt;img&gt; Tag</h3>
                <p>Displays an image on a webpage. It is a void element (no closing tag).</p>
                <pre><code>&lt;img src="logo.png" alt="Company Logo" width="300"&gt;</code></pre>

                <h4>Attributes</h4>
                <ul>
                    <li><code>src</code> - Path to the image (Required)</li>
                    <li><code>alt</code> - Alternative text for screen readers and broken links (Highly Recommended)</li>
                    <li><code>loading="lazy"</code> - Delays loading until the image is on screen (Performance boost)</li>
                </ul>

                <h3>7.2 Figure & Figcaption</h3>
                <pre><code>&lt;figure&gt;
    &lt;img src="flower.jpg" alt="Flower"&gt;
    &lt;figcaption&gt;Beautiful Red Flower&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
            `
        },
        {
            id: 'ch8',
            title: 'Module 8 – Lists',
            content: `
                <h3>8.1 Unordered List (&lt;ul&gt;)</h3>
                <p>Displays items using bullets.</p>
                <pre><code>&lt;ul&gt;
    &lt;li&gt;HTML&lt;/li&gt;
    &lt;li&gt;CSS&lt;/li&gt;
&lt;/ul&gt;</code></pre>

                <h3>8.2 Ordered List (&lt;ol&gt;)</h3>
                <p>Displays items using numbers or letters. Use the <code>type</code> attribute (1, A, a, I, i).</p>
                <pre><code>&lt;ol type="A"&gt;
    &lt;li&gt;First Item&lt;/li&gt;
    &lt;li&gt;Second Item&lt;/li&gt;
&lt;/ol&gt;</code></pre>

                <h3>8.3 Description List (&lt;dl&gt;)</h3>
                <p>Used for dictionary-like definitions.</p>
                <pre><code>&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
            `
        },
        {
            id: 'ch9',
            title: 'Module 9 – Tables',
            content: `
                <h3>9.1 Table Structure</h3>
                <p>Tables display data in rows and columns.</p>
                <pre><code>&lt;table border="1"&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Name&lt;/th&gt;
            &lt;th&gt;Age&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Rahul&lt;/td&gt;
            &lt;td&gt;25&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

                <h4>Explanation</h4>
                <ul>
                    <li><code>&lt;table&gt;</code> - The container</li>
                    <li><code>&lt;tr&gt;</code> - Table Row</li>
                    <li><code>&lt;th&gt;</code> - Table Header (Bold & Centered)</li>
                    <li><code>&lt;td&gt;</code> - Table Data (Cell)</li>
                </ul>
                
                <h4>Rowspan & Colspan</h4>
                <p><code>colspan="2"</code> merges two columns. <code>rowspan="2"</code> merges two rows.</p>
            `
        },
        {
            id: 'ch10',
            title: 'Module 10 – Forms & Inputs',
            content: `
                <h3>10.1 The &lt;form&gt; Element</h3>
                <p>Used to collect user input. The <code>action</code> attribute defines where data is sent.</p>

                <h3>10.2 Input Types</h3>
                <pre><code>&lt;label for="uname"&gt;Username:&lt;/label&gt;
&lt;input type="text" id="uname" name="uname" placeholder="Enter Name" required&gt;</code></pre>
                
                <h4>Common Types</h4>
                <ul>
                    <li><code>text</code> - Normal text</li>
                    <li><code>password</code> - Hidden characters</li>
                    <li><code>email</code> - Validates email format</li>
                    <li><code>radio</code> - Select only one option</li>
                    <li><code>checkbox</code> - Select multiple options</li>
                    <li><code>submit</code> - Submit button</li>
                </ul>

                <h3>10.3 Select & Textarea</h3>
                <p><code>&lt;select&gt;</code> creates a dropdown menu. <code>&lt;textarea&gt;</code> creates a multi-line text box.</p>
            `
        },
        {
            id: 'ch11',
            title: 'Module 11 – Multimedia (Audio/Video)',
            content: `
                <h3>11.1 Audio Tag</h3>
                <p>Embeds sound files. The <code>controls</code> attribute adds play/pause buttons.</p>
                <pre><code>&lt;audio controls&gt;
    &lt;source src="song.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;</code></pre>

                <h3>11.2 Video Tag</h3>
                <p>Embeds video files. Use <code>autoplay muted loop</code> for background videos.</p>
                <pre><code>&lt;video width="400" controls poster="thumbnail.jpg"&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;</code></pre>
            `
        },
        {
            id: 'ch12',
            title: 'Module 12 – Semantic HTML',
            content: `
                <h3>12.1 What is Semantic HTML?</h3>
                <p>Semantic tags clearly describe their meaning to both the browser and the developer. They improve SEO and accessibility.</p>
                
                <h4>Common Semantic Tags</h4>
                <ul>
                    <li><code>&lt;header&gt;</code> - Top section (logo, nav)</li>
                    <li><code>&lt;nav&gt;</code> - Navigation links</li>
                    <li><code>&lt;main&gt;</code> - Primary content area</li>
                    <li><code>&lt;section&gt;</code> - Group of related content</li>
                    <li><code>&lt;article&gt;</code> - Independent, self-contained content (Blog post)</li>
                    <li><code>&lt;aside&gt;</code> - Sidebar content</li>
                    <li><code>&lt;footer&gt;</code> - Bottom section (copyright)</li>
                </ul>
                <p>❌ Bad: <code>&lt;div id="header"&gt;</code> <br>✅ Good: <code>&lt;header&gt;</code></p>
            `
        },
        {
            id: 'ch13',
            title: 'Module 13 – Iframes',
            content: `
                <h3>13.1 What is an Iframe?</h3>
                <p>An iframe (Inline Frame) embeds another document or webpage inside the current HTML document.</p>
                <pre><code>&lt;iframe src="https://example.com" width="600" height="400"&gt;&lt;/iframe&gt;</code></pre>

                <h3>13.2 Real-Life Use Cases</h3>
                <ul>
                    <li>Embedding YouTube videos</li>
                    <li>Embedding Google Maps</li>
                </ul>
                <p>Always use the <code>title</code> attribute for accessibility!</p>
            `
        },
        {
            id: 'ch14',
            title: 'Module 14 – HTML Entities & Symbols',
            content: `
                <h3>14.1 HTML Entities</h3>
                <p>Reserved characters in HTML (like <code>&lt;</code> or <code>&gt;</code>) must be replaced with character entities.</p>
                <table border="1" style="width:100%; border-collapse:collapse; text-align:left;">
                    <tr><th>Result</th><th>Description</th><th>Entity Name</th></tr>
                    <tr><td>&lt;</td><td>Less than</td><td>&amp;lt;</td></tr>
                    <tr><td>&gt;</td><td>Greater than</td><td>&amp;gt;</td></tr>
                    <tr><td>&amp;</td><td>Ampersand</td><td>&amp;amp;</td></tr>
                    <tr><td>&copy;</td><td>Copyright</td><td>&amp;copy;</td></tr>
                    <tr><td>&nbsp;</td><td>Non-breaking space</td><td>&amp;nbsp;</td></tr>
                </table>
            `
        },
        {
            id: 'ch15',
            title: 'Module 15 – Interactive Elements',
            content: `
                <h3>15.1 Details & Summary</h3>
                <p>Creates a native accordion/dropdown widget.</p>
                <pre><code>&lt;details&gt;
    &lt;summary&gt;Click to View More&lt;/summary&gt;
    &lt;p&gt;Here is the hidden content!&lt;/p&gt;
&lt;/details&gt;</code></pre>

                <h3>15.2 Dialog</h3>
                <p>Creates a native popup modal.</p>
                <pre><code>&lt;dialog open&gt;
    &lt;p&gt;This is a popup window.&lt;/p&gt;
&lt;/dialog&gt;</code></pre>
            `
        },
        {
            id: 'ch16',
            title: 'Module 16 – Web Storage & APIs',
            content: `
                <h3>16.1 Data Attributes (data-*)</h3>
                <p>Used to store custom data privately on an HTML element.</p>
                <pre><code>&lt;div data-user-id="12345" data-role="admin"&gt;User Info&lt;/div&gt;</code></pre>
                
                <h3>16.2 Local Storage</h3>
                <p>HTML5 allows storing data in the browser (using JS) that doesn't expire.</p>
            `
        },
        {
            id: 'ch17',
            title: 'Module 17 – SEO Basics in HTML',
            content: `
                <h3>17.1 How to Improve SEO?</h3>
                <ul>
                    <li>Use a descriptive <code>&lt;title&gt;</code></li>
                    <li>Write a good meta description</li>
                    <li>Use <strong>Semantic HTML</strong></li>
                    <li>Always add <code>alt</code> text to images</li>
                    <li>Use <code>&lt;h1&gt;</code> only once per page</li>
                </ul>
            `
        },
        {
            id: 'ch18',
            title: 'Module 18 – Accessibility (A11y)',
            content: `
                <h3>18.1 Writing Accessible HTML</h3>
                <ul>
                    <li><strong>Labels:</strong> Always use <code>&lt;label for="id"&gt;</code> for inputs.</li>
                    <li><strong>Alt Text:</strong> Always describe images for screen readers.</li>
                    <li><strong>Tab Index:</strong> Ensure all interactive elements can be reached using the <code>Tab</code> key.</li>
                    <li><strong>ARIA:</strong> Use <code>aria-hidden="true"</code> for decorative icons.</li>
                </ul>
            `
        },
        {
            id: 'ch19',
            title: 'Module 19 – Final Projects',
            content: `
                <h3>19.1 Practice Makes Perfect</h3>
                <p>Now that you know HTML, build these projects:</p>
                <ol>
                    <li><strong>Resume / CV Page:</strong> Practice headings, lists, and tables.</li>
                    <li><strong>Registration Form:</strong> Practice inputs, validation, and labels.</li>
                    <li><strong>Portfolio Structure:</strong> Practice semantic tags (header, nav, section, footer).</li>
                    <li><strong>Restaurant Menu:</strong> Embed Google Maps and use tables.</li>
                </ol>
                <p>Congratulations on completing the HTML Masterclass! 🎉</p>
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

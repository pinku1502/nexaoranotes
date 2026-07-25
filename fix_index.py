import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()

        # Add aria labels
        content = content.replace('<button class="carousel-btn prev-btn" id="faq-prev">', '<button class="carousel-btn prev-btn" id="faq-prev" aria-label="Previous FAQ">')
        content = content.replace('<button class="carousel-btn next-btn" id="faq-next">', '<button class="carousel-btn next-btn" id="faq-next" aria-label="Next FAQ">')
        
        # Add roadmap labels just in case
        content = content.replace('<button class="carousel-btn prev-btn" id="roadmap-prev">', '<button class="carousel-btn prev-btn" id="roadmap-prev" aria-label="Previous Step">')
        content = content.replace('<button class="carousel-btn next-btn" id="roadmap-next">', '<button class="carousel-btn next-btn" id="roadmap-next" aria-label="Next Step">')

        # Add data-targets to lang cards
        mapping = {
            'C': 'c-course.html',
            'C++': 'cpp-course.html',
            'Java': 'java-course.html',
            'Python': 'python-course.html?v=2',
            'JavaScript': 'javascript-course.html?v=2',
            'TypeScript': 'typescript-course.html',
            'HTML': 'html-course.html',
            'CSS': 'css-course.html',
            'SQL': 'sql-course.html?v=2',
            'React': 'react-course.html?v=2',
            'Node.js': 'nodejs-course.html',
            'Express.js': 'express-course.html',
            'MySQL': 'mysql-course.html'
        }

        # Simple manual replace for each lang card h3
        for name, url in mapping.items():
            # The h3 looks like: <h3 class="lang-name">C</h3>
            # Preceded by <div class="lang-card glass-card">
            
            # Find the index of the h3
            h3_str = f'<h3 class="lang-name">{name}</h3>'
            idx = content.find(h3_str)
            if idx != -1:
                # Find the nearest '<div class="lang-card glass-card">' before this h3
                div_str = '<div class="lang-card glass-card">'
                div_idx = content.rfind(div_str, 0, idx)
                if div_idx != -1:
                    new_div = f'<div class="lang-card glass-card" data-target="{url}">'
                    content = content[:div_idx] + new_div + content[div_idx + len(div_str):]
                    print(f"Added data-target to {name}")

        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()


  // ==========================================================================
  // 10. GLOBAL SEARCH FUNCTIONALITY
  // ==========================================================================
  const searchInput = document.getElementById('global-search');
  const searchResults = document.getElementById('search-results');
  
  if (searchInput && searchResults) {
    const courseIndex = [
      { title: 'HTML Basics', desc: 'Learn structural markup and semantics.', url: 'html-course.html' },
      { title: 'CSS Flexbox & Grid', desc: 'Master modern layouts and responsive design.', url: 'css-course.html' },
      { title: 'JavaScript Logic', desc: 'Variables, loops, arrays, and async JS.', url: 'javascript-course.html' },
      { title: 'Python for Data', desc: 'Automation, APIs, and data science basics.', url: 'python-course.html?v=2' },
      { title: 'React Components', desc: 'Virtual DOM, hooks, and state management.', url: 'react-course.html?v=2' },
      { title: 'Node.js Backend', desc: 'File systems, servers, and asynchronous I/O.', url: 'nodejs-course.html' },
      { title: 'SQL Queries', desc: 'Relational databases, joins, and schemas.', url: 'sql-course.html?v=2' }
    ];

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
      }

      const results = courseIndex.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query)
      );

      if (results.length > 0) {
        searchResults.innerHTML = results.map(item => `
          <div class="search-result-item" onclick="window.location.href='${item.url}'">
            <div class="search-result-title">${item.title}</div>
            <div class="search-result-desc">${item.desc}</div>
          </div>
        `).join('');
        searchResults.classList.add('active');
      } else {
        searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-title">No results found</div></div>';
        searchResults.classList.add('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
      }
    });
  }

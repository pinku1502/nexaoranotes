with open('dashboard.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Fix 1: loadLanguageContent block
search1 = """      if (langKey === 'html') {"""
replace1 = """      if (langKey === 'java') {
        window.location.href = 'java-course.html';
        return;
      }
      if (langKey === 'html') {"""
js = js.replace(search1, replace1, 1)

# Fix 2: sidebar click listener block
search2 = """        if (langKey === 'html') {"""
replace2 = """        if (langKey === 'java') {
          window.location.href = 'java-course.html';
          return;
        }
        if (langKey === 'html') {"""
# Note: we use the second occurrence (or just replace all occurrences of this string, it's safe)
js = js.replace(search2, replace2)

# Fix 3: urlLang block
search3 = """  if (urlLang === 'html') window.location.href = 'html-course.html';"""
replace3 = """  if (urlLang === 'java') window.location.href = 'java-course.html';
  else if (urlLang === 'html') window.location.href = 'html-course.html';"""
js = js.replace(search3, replace3)

with open('dashboard.js', 'w', encoding='utf-8') as f:
    f.write(js)
print('Fixed Java routing')

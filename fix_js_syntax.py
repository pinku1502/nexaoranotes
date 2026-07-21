with open('javascript-masterclass.js', 'r', encoding='utf-8') as f:
    js = f.read()

# I wrote: Promises were great, but `.then()` chains could still get messy.
# It should be: Promises were great, but <code>.then()</code> chains could still get messy.
js = js.replace('Promises were great, but `.then()` chains', 'Promises were great, but <code>.then()</code> chains')

with open('javascript-masterclass.js', 'w', encoding='utf-8') as f:
    f.write(js)
print('Fixed backticks')

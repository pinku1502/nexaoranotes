import os
import re

workspace = r"E:\Projects\nexaoranotes"
dash_path = os.path.join(workspace, 'dashboard.js')

with open(dash_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove 'sql' from the routing conditions
content = content.replace("if (langKey === 'sql' || langKey === 'mysql') {", "if (langKey === 'mysql') {")
content = content.replace("else if (urlLang === 'sql' || urlLang === 'mysql')", "else if (urlLang === 'mysql')")

# 2. Re-inject the original sql block into langData
sql_block = """
      },
      sql: {
        title: "SQL Notes",
        badge: "Easy",
        file: "query.sql",
        note: `-- SQL Query & Relational Database Notes
- Relational joins retrieve links: INNER JOIN overlaps records, LEFT JOIN retains all left records, and RIGHT JOIN retains right records.
- Primary keys uniquely identify records; Foreign keys establish relationships between tables.
- Use aggregate functions (COUNT, SUM, AVG) alongside GROUP BY to generate analytical summaries.
- Add indexes to frequently queried columns to significantly boost SELECT query performance.`
"""

# Let's find exactly where to inject it. Probably right before `    };` which closes langData.
# We'll just replace `    };` with `sql_block + "\n    };"`
content = content.replace("    };\n\n    const editorArea", sql_block + "\n    };\n\n    const editorArea")

with open(dash_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("dashboard.js updated successfully.")

import re


def get_cheatsheet_prompt(content:str):
    """
    Generates a detailed prompt for an AI agent to create a beginner-friendly, colorful PDF cheat Sheet
    for the specified python library or topic.

    Parameters:
       Content (str): The name of the Python library or topic(e.g.,'Pandas','Numpy',etc.)
    Returns:
        str: A formatted prompt string for generating the  cheat sheet.   

    """

    prompt = f"""
You are an expert python educator and technical writer. Your task is to create a colortful, beginner-friendly PDF cheat sheet for the Python library '{content}'.

The Cheat sheet must be easy to understand for beginners , structured clearly, and visually engaging.

📘 Title: {content} Cheat Sheet (Beginner Friendly)

Include the following sections:

1. 📌 Introduction
   - What is {content}?
   - What does it do, explained in simple words?

2. 🎯 Why and When to Use
   - Real-life use cases and practical examples.
   - Common domains and problems it solves.

3. 🧠 Core Concepts & Key Components
   - Important modules, data structures, or concepts with short, essay-style explanations.

4. 🛠️ Important Functions and Methods (Grouped by Category)
   - Example categories: File Handling, Data Processing, Visualization.
   - For each function:
     - `function_name(args)` — One-line explanation.
     - ➤ Example: `example_code_here`

5. ✅ Pros and ❌ Cons
   - List 3–5 for each.

6. ⚠️ Common Mistakes to Avoid
   - Beginner pitfalls, wrong assumptions, common errors.

7. 💡 Tips for Learning and Using Effectively
   - Practice ideas, best documentation/tutorials, debugging tips.

8. 📚 Glossary
   - Define tricky terms in beginner-friendly language.

📄 Output Format:
- Structure the content with section headers, subheaders, and spacing.
- Use monospaced font for code.
- Make the layout colorful and ready for conversion to PDF.

Only generate content. Do not include anything unrelated to the cheat sheet.
"""
    return prompt.strip()

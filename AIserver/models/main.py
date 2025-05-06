import re
import json
import openai
from config import config
from utils.prompt import get_cheatsheet_prompt

DEFAULT_GPT_MODEL = "gpt-4o"
client=openai.OpenAI(api_key=config.OPENAI_API_KEY )


def genarete_cheatsheet_Content(content:str):
    """Extracts questions and answers from content using GPT-4o."""
    print("Started extracting questions and anwers...")

    prompt = get_cheatsheet_prompt(content)

    try:
        response = client.chat.completions.create(
            model = DEFAULT_GPT_MODEL,
            messages=[
                {"role":"system","content":"You are a helpful assistant that extracts structered data fro m text."},
                {"role":"user","content":prompt}
            ],
            temperature=1.0
        )
        print("Received response  from gpt-4o model.")

        output = response.choices[0].message.content.strip()

        return output
    
    except Exception as e :
        print(f"Error during the request:{e}")
        return{"error":f"Error processing the request:{str(e)}"}
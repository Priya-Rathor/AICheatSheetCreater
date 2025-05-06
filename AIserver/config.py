import os 
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Centralized configuration setting for LLM API keys and settings."""

    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

    HOST ="127.0.0.1"
    PORT = 8100

    

config = Config()
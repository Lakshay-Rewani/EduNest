import os
import subprocess
import sys
import requests

def check_dependencies():
    """Check if all required dependencies are installed"""
    try:
        import speech_recognition as sr
        import pyaudio
        return True
    except ImportError as e:
        print(f"Error: Missing required dependency - {str(e)}")
        print("Please install the missing package using:")
        print("pip install pyaudio speech_recognition")
        return False

def setup_and_run():
    """Set up environment and run voice browser control"""
    if not check_dependencies():
        return

    os.environ["GROQ_API_KEY"] = "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"
    
    try:
        print("Testing Groq API connection...")
        response = call_groq_api("Hello")
        print("API connection successful!")
    except Exception as e:
        print(f"Error testing API connection: {e}")
        print("Falling back to basic intent recognition.")
    
    print("\nStarting Voice Browser Control...")
    subprocess.call([sys.executable, "voice_browser_control.py"])

if __name__ == "__main__":
    setup_and_run()
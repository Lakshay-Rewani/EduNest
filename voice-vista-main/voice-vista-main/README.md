# Voice Vista

A sophisticated voice-controlled browser assistant that enables hands-free web browsing with advanced page analysis capabilities.

## 🌟 Features

- **Voice Control**: Navigate the web using natural voice commands
- **Advanced Page Analysis**: LLM-powered content analysis for detailed page descriptions
- **Favorites Management**: Save and access favorite websites by category
- **Read Aloud**: Have web content read to you with text-to-speech
- **Content Extraction**: Automatically identifies products, videos, articles, and more
- **Accessibility**: Makes web browsing more accessible for users with disabilities

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Groq API key (for advanced LLM features)
- Internet connection

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Devansh-Dave7/voice-vista.git
   cd voice-vista
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up your Groq API key:
   ```bash
   # On Windows
   set GROQ_API_KEY=your_api_key
   
   # On macOS/Linux
   export GROQ_API_KEY=your_api_key
   ```

### Usage

Start the voice-controlled browser:
```bash
python start_voice_control.py
```

Or use the Tkinter GUI version:
```bash
python tkinter_browser_assistant.py
```

## 🗣️ Voice Commands

Voice Vista responds to natural language commands such as:

- "Open Google"
- "Search for weather forecast"
- "Scroll down/up"
- "Click on sign in"
- "Go back/forward"
- "Read page aloud"
- "Stop reading"
- "Set favorite videos to YouTube"
- "Open category music"
- "Show favorites"
- "Describe page"

## 🧠 Advanced Page Analysis

Voice Vista uses LLM technology to provide detailed descriptions of web content:

- Identifies products with pricing and details
- Recognizes videos and their themes
- Extracts article content and summaries
- Describes images based on alt text
- Identifies interactive elements

## 📁 Project Structure

- `voice_browser_control.py`: Core voice control functionality
- `advanced_page_analyzer.py`: LLM-based page content analysis
- `favorites_manager.py`: Manages category-based favorites
- `browser_panel.py`: UI panel for the browser assistant
- `tkinter_browser_assistant.py`: Tkinter-based GUI application

## 🧪 Testing

Run the test suite:
```bash
python test_favorites.py
```

## 🔧 Configuration

Default favorites are stored in `browser_favorites.json` and can be customized through voice commands or by editing the file directly.

## 🤝 Contributing

Contributions to Voice Vista are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Groq](https://groq.com/) for LLM API services
- [Selenium](https://www.selenium.dev/) for browser automation
- [SpeechRecognition](https://pypi.org/project/SpeechRecognition/) for voice input processing
- All contributors who have helped shape Voice Vista:
  1. Devansh Dave
  2. Rohit Kumar Rai
  3. Abhay Soni
  4. Prince Kumar Prajapati

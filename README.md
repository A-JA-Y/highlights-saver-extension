# Highlights Saver Extension

A simple yet powerful Chrome extension that allows users to save and manage text highlights from any webpage. Built with vanilla JavaScript and Chrome Extension Manifest V3.

## 🌟 Features

- **Universal Text Selection**: Highlight and save text from any website
- **One-Click Save**: Instantly save selected text with a convenient popup button
- **Local Storage**: All highlights are stored locally on your device for privacy
- **Easy Management**: View, organize, and delete saved highlights through a clean popup interface
- **Cross-Site Compatibility**: Works seamlessly across all websites
- **Lightweight**: Minimal resource usage with fast performance

## 🚀 Installation

### From Chrome Web Store (Recommended)
*Note: This extension is not yet published on the Chrome Web Store*

### Manual Installation (Developer Mode)

1. **Download the Extension**
   - Clone this repository or download as ZIP
   ```bash
   git clone https://github.com/A-JA-Y/highlights-saver-extension.git
   ```

2. **Enable Developer Mode**
   - Open Chrome and navigate to `chrome://extensions/`
   - Toggle "Developer mode" in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Select the extension directory
   - The extension should now appear in your Chrome toolbar

## 📖 Usage

### Saving Highlights

1. **Select Text**: On any webpage, highlight the text you want to save
2. **Click Save**: A "Save Highlight?" button will appear near your selection
3. **Confirm**: Click the button to save the highlight to local storage

### Managing Highlights

1. **Open Popup**: Click the extension icon in your Chrome toolbar
2. **View Highlights**: See all your saved highlights in the popup window
3. **Delete Highlights**: Click the "Delete" button next to any highlight to remove it

## 🏗️ Technical Architecture

This Chrome extension is built using:

- **Manifest Version**: 3 (Latest Chrome Extension standard)
- **Architecture**: Service Worker + Content Scripts + Popup
- **Storage**: Chrome's Local Storage API
- **Languages**: Vanilla JavaScript, HTML, CSS

### File Structure

```
highlights-saver-extension/
│
├── manifest.json      # Extension configuration and metadata
├── background.js      # Service worker for handling messages and storage
├── content.js         # Content script injected into web pages
├── popup.html         # Popup interface HTML structure
├── popup.js           # Popup functionality and highlight management
└── README.md          # Project documentation
```

### Component Overview

#### `manifest.json`
Defines extension metadata, permissions, and file relationships using Manifest V3 specifications.

#### `background.js`
- Service worker that handles message passing between content script and popup
- Manages highlight storage operations (save/delete)
- Runs in the background to maintain extension state

#### `content.js`
- Injected into all web pages
- Listens for text selection events
- Creates and manages the "Save Highlight?" button
- Communicates with background script to save highlights

#### `popup.html` & `popup.js`
- Provides user interface for viewing saved highlights
- Handles highlight deletion functionality
- Displays highlights in an organized, scrollable list

## 🔒 Permissions

This extension requires the following permissions:

- **`storage`**: To save and retrieve highlights locally on your device
- **`activeTab`**: To interact with the currently active tab for text selection
- **`host_permissions: ["<all_urls>"]`**: To work on all websites

### Privacy Note
All data is stored locally on your device. No information is transmitted to external servers or third parties.

## 🛠️ Development

### Prerequisites
- Chrome browser
- Basic knowledge of JavaScript, HTML, and CSS
- Understanding of Chrome Extension APIs

### Setup for Development
1. Clone the repository
2. Make your changes to the source files
3. Load the extension in Chrome's developer mode
4. Test changes by refreshing the extension

### Key APIs Used
- **Chrome Storage API**: For persisting highlights
- **Chrome Runtime API**: For message passing between scripts
- **Chrome Action API**: For managing extension popup
- **DOM Selection API**: For handling text selection

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and structure
- Test your changes thoroughly
- Update documentation as needed
- Ensure compatibility with Manifest V3

## 📝 License

This project is open source. Please check the repository for license details.

## 🐛 Known Issues

- Saved highlights are local to each Chrome profile
- Extension button may occasionally overlap with page content
- No sync functionality across devices

## 🔮 Future Enhancements

- [ ] Cloud sync across devices
- [ ] Export highlights to various formats (PDF, TXT, CSV)
- [ ] Categorization and tagging system
- [ ] Search functionality within saved highlights
- [ ] Highlight annotation and notes
- [ ] Import/export functionality

## 📞 Support

For support, questions, or feedback, please:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation above

---

**Made with ❤️ for better web reading experience**
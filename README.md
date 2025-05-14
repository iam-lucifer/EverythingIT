# Developer Toolkit

Welcome to the Developer Toolkit project! This repository contains a collection of modern, user-friendly tools designed to assist developers in various tasks, from data conversion to code analysis. Below is an overview of the project's structure, features, and usage guidelines.

## Project Structure

```
dev-toolkit
├── index.html          # Main entry point of the website
├── css
│   ├── main.css       # Main styles for the website
│   ├── themes.css     # Theme styles for switching between designs
│   └── tools.css      # Styles specific to the tools
├── js
│   ├── main.js        # Main JavaScript file for initialization
│   ├── utils.js       # Utility functions for common tasks
│   └── tools
│       ├── converters
│       │   ├── json-formatter.js  # Tool for formatting JSON data
│       │   ├── yaml-converter.js   # Tool for converting YAML to JSON and vice versa
│       │   ├── base64-converter.js  # Tool for Base64 encoding and decoding
│       │   └── other-converters.js  # Additional conversion tools
│       ├── generators
│       │   ├── qr-generator.js      # QR code generator tool
│       │   ├── uuid-generator.js     # UUID generator tool
│       │   └── password-generator.js  # Advanced password generator with modern UI
│       ├── encoders
│       │   ├── hash-tools.js         # Hashing functions for various algorithms
│       │   └── encrypt-tools.js      # Encryption and decryption functions
│       └── analyzers
│           ├── regex-tester.js       # Tool for testing regular expressions
│           └── text-stats.js         # Tool for analyzing text statistics
├── assets
│   ├── icons        # Directory for icon images
│   └── examples     # Directory for example files or data
├── pages
│   ├── about.html   # Information about the website
│   └── docs.html    # Documentation for using the tools
└── README.md        # Project documentation
```

## Features

### Data Conversion
- Tools for converting between JSON, YAML, Base64, and more
- Clean, modern interface for easy data manipulation
- Real-time validation and formatting


### Generators
- **Enhanced Password Generator**:
  - Modern card-based UI with intuitive controls
  - Quick length presets (8, 12, 16, 24, 32 characters)
  - Visual strength meter
  - Grid-based character set options with icons
  - Advanced options for customization
  - Secure password history with show/hide functionality
  - Copy to clipboard with visual feedback
  - Password refresh animation
- QR Code Generator with customizable settings
- UUID Generator with multiple format options

### Encoders
- Hash text using various algorithms
- Secure encryption/decryption tools
- Visual feedback for all operations

### Analyzers
- Interactive regular expression tester
- Comprehensive text statistics analyzer

## Key Features

- **Modern UI/UX**: Clean, responsive design with intuitive controls
- **Accessibility**: Enhanced keyboard navigation and screen reader support
- **Security**: Client-side operations with no data transmission
- **Performance**: Optimized code for quick tool response
- **Cross-browser**: Compatible with modern web browsers
- **Mobile-friendly**: Responsive design for all screen sizes

## Usage

1. Clone the repository to your local machine
2. Open `index.html` in your web browser to access the toolkit
3. Navigate through the intuitive interface to use various tools
4. Each tool includes built-in help and examples

## Recent Updates

- Completely redesigned Password Generator with modern UI/UX
- Enhanced security features across all tools
- Improved accessibility and keyboard navigation
- Added visual feedback and animations
- Implemented dark/light theme support

## Current Tools
- **Converters**:
  - JSON Formatter
  - YAML Converter
  - Base64 converter
  - XML/JSON converter

- **Generators**:
  - QR Code Generator
  - UUID Generator
  - Password Generator
  - lorem ipsum generator

- **Encoders & Crypto**:
    - hash tools (MD5, SHA-1, SHA-256)
    - text encryption/decryption
    - jwt parser

- **Analyzers**:
    - Regex Tester
    - Text Statistics Analyzer
    - Color Converter (Hex to RGB, RGB to Hex)

- **Network Tools**:
    - IP Tools
    - user agent parser
    - URL parser



## Additional Tools to Consider

- Markdown to PDF converter
- CSV to JSON converter
- Text to speech converter
- Image to Base64 converter
- URL shortener
- Code snippet manager
- API testing tool
- File format converter (e.g., DOCX to PDF)
- Regular expression builder
- JSON schema validator

## Contributing

We welcome contributions! Whether you want to add new tools, improve existing ones, or enhance the UI/UX, feel free to submit a pull request. Please ensure your code follows our style guidelines and includes appropriate documentation.

## Security

All operations are performed client-side to ensure data privacy. No sensitive information is transmitted or stored externally.
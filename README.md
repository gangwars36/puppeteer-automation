# Puppeteer Automation for Scheduled Button Click

## Overview

This project demonstrates how to automate the process of clicking a button on a web page at a scheduled time using Puppeteer and NestJS. The script is designed to work with existing browser sessions and can be configured to run at a specific time using cron jobs.

## Features

- **Automated Button Click:** The script automatically navigates to a specified page and clicks a button based on its XPath.
- **Scheduled Execution:** Using the `@nestjs/schedule` package, the button click is scheduled to occur at a specified time.
- **Full-Screen Mode:** The browser can be launched in full-screen mode for better visibility.
- **Error Handling:** Comprehensive error handling is implemented to ensure robustness.

## Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/puppeteer-automation.git
   cd puppeteer-automation
2. **Install Dependencies:**
npm install @nestjs/common @nestjs/schedule puppeteer

3. **Run Chrome with Remote Debugging Enabled:**
-Open Chrome with remote debugging enabled to obtain the WebSocket endpoint:
chrome.exe --remote-debugging-port=9222
-Alternatively, on macOS or Linux:
google-chrome --remote-debugging-port=9222


**License**
This project is licensed under the MIT License. See the LICENSE file for details.

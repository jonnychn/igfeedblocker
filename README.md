# Instagram Feed Blocker

A simple Chrome extension that fully blacks out your Instagram feed (including stories and posts) until you solve a quick, four‑integer math challenge. Each time you visit or reload Instagram, a rotating motivational quote will appear above the challenge to help you stay disciplined and focused.

---

## Features

- **Full blackout**: Covers the entire viewport with a solid black overlay to remove all distractions.
- **Math challenge**: Generates a random equation of four 2‑ or 3‑digit integers with plus/minus operators. You must enter the correct answer to restore access.
- **Scroll lock**: Disables scrolling on the page until you pass the challenge.
- **Rotating quotes**: Displays one of several focus/discipline quotes each load to remind you why you’re staying on task.

## Installation

1. **Download or clone this repository** to a folder on your computer.
2. Ensure the folder contains the following files:
   - `manifest.json`
   - `content.js`
   - `icon48.png` (48×48px)
   - `icon128.png` (128×128px)
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable **Developer mode** (toggle in the top right).
5. Click **Load unpacked** and select the folder containing this extension.
6. The extension should appear in your list. Make sure it’s enabled.

## Usage

- Navigate to `https://www.instagram.com/` (or refresh the tab).
- A black overlay with a motivational quote and math problem will appear.
- Enter the correct answer and click **Submit**.
- If correct, the overlay will disappear and scrolling will be restored.
- If incorrect, you can try again until you solve it.

## Customization

- **Quotes**: Edit the `quotes` array in `content.js` to add/remove or replace motivational messages.
- **Equation parameters**: In `generateEquation()`, you can adjust the number ranges or change operators (e.g., add `*`/`/` carefully).
- **Styling**: Modify the CSS properties in `content.js` to tweak colors, fonts, sizes, or layout.

## Troubleshooting

- If the blackout doesn’t appear:
  - Confirm you loaded the correct folder in Chrome’s extensions page.
  - Check that `manifest.json` has the `content_scripts` entry targeting `https://www.instagram.com/*`.
  - Reload the extension and refresh the Instagram tab.
- If you see a CSP or syntax error:
  - Ensure you’re using the latest `content.js` without any `eval()` calls.
  - Replace your `content.js` with the version provided here.

## License

This project is provided as-is under the [MIT License](LICENSE). Feel free to modify and adapt it for personal use.

---

*Stay focused, stay disciplined.*


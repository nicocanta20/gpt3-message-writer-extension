# GPT-3 Message Writer

Chrome extension that writes emails for you. Select a short description of the
message you want to send, right-click → **Generate Message**, and GPT-3 writes it
straight into your Gmail draft.

Built in December 2022.

## How it works
- A background service worker adds the right-click menu item and calls the
  OpenAI Completions API with the selected text.
- A content script inserts the result into the Gmail compose box, paragraph by
  paragraph.
- The popup lets you save your own OpenAI API key, kept in `chrome.storage`.

## Stack
Chrome Extension (Manifest V3) · JavaScript · OpenAI Completions API · `text-davinci-003`

## Status
No longer runs: OpenAI retired `text-davinci-003` on January 4, 2024.

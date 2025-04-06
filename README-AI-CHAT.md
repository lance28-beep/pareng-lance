# AI Chat Feature for DesignedByDan Clone

This document provides instructions on how to set up and use the AI chat feature integrated into the website.

## Overview

The AI chat feature provides a fixed chat widget at the bottom right of the website that allows visitors to interact with an AI assistant. The chat widget is designed to match the website's aesthetic with a dark theme and green accent colors.

## Features

- Fixed position at the bottom right of the screen
- Minimizable and closeable interface
- Real-time chat with AI responses
- Animated transitions and loading indicators
- Mobile-responsive design

## Setup Instructions

### 1. Get a Hugging Face API Key

The chat feature uses the Hugging Face Inference API, which requires an API key:

1. Go to [Hugging Face](https://huggingface.co/) and create an account
2. Navigate to your profile settings
3. Go to "Access Tokens" and create a new token
4. Copy the token

### 2. Configure Environment Variables

1. Open the `.env.local` file in the root directory
2. Replace the placeholder value with your actual Hugging Face API key:

```
NEXT_PUBLIC_HUGGINGFACE_API_KEY=your_api_key_here
```

### 3. Customize the AI Model (Optional)

By default, the chat uses the `facebook/blenderbot-400M-distill` model. You can change this to any other text generation model from Hugging Face by modifying the API endpoint in the `ai-chat.tsx` file:

```typescript
const response = await fetch(
  "https://api-inference.huggingface.co/models/YOUR_PREFERRED_MODEL",
  // ...
)
```

## Usage

The chat widget is automatically included in the main page of the website. Users can:

1. Click the chat icon in the bottom right corner to open the chat interface
2. Type a message and press Enter or click the send button
3. Minimize the chat by clicking the minimize button
4. Close the chat by clicking the X button

## Customization

You can customize the appearance and behavior of the chat widget by modifying the `ai-chat.tsx` component:

- Change colors by updating the CSS classes
- Adjust the size by modifying the width and height values
- Change the initial greeting message
- Add additional features like file uploads or voice input

## Troubleshooting

If the chat is not working:

1. Check that your API key is correctly set in the `.env.local` file
2. Verify that the Hugging Face API is accessible from your server
3. Check the browser console for any error messages

## Limitations

- The free tier of the Hugging Face API has rate limits
- The default model may not be suitable for all use cases
- The chat history is not persisted between sessions

## Future Improvements

Potential enhancements for the chat feature:

- Add persistent chat history using local storage
- Implement more advanced AI models
- Add typing indicators and read receipts
- Support for rich media content
- Integration with a backend for more complex interactions 
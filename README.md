# Tarotluyo

Basically a tarot card reading web app. It uses OpenAI's GPT-3.5 model to generate tarot card readings based on user input. The app is built using HTML, CSS (with Tailwind), and JavaScript for the frontend, and Cloudflare Workers for the backend.

## Features
- Tarot card reading using OpenAI's GPT-3.5 model
- User-friendly interface with Tailwind CSS
- Responsive design for mobile and desktop
- Easy to deploy on Cloudflare Workers
- Simple and clean code structure
- No external dependencies (except for OpenAI API)
- No database required (all data is stored in memory)
- No authentication required (anyone can use it)
- No server-side rendering (all rendering is done on the client side)
- No build tools required (just HTML, CSS, and JavaScript)


## How to Use
1. Clone the repository or download the ZIP file.
2. Open the `index.html` file in your web browser.
3. Enter your name and select the tarot card spread you want to use.
4. Click the "Get Reading" button to generate your tarot card reading.
5. The reading will be displayed on the screen.

## How to Deploy on Cloudflare Workers
1. Create a Cloudflare account and set up a new Workers project.
2. Copy the contents of the `index.html` file into the `index.js` file in your Workers project.
3. Replace the `YOUR_OPENAI_API_KEY` placeholder with your actual OpenRouter API key.
4. Deploy the Workers project.
5. Open the URL of your deployed Workers project in your web browser.

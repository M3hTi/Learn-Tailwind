
# Setting up Tailwind CSS on Windows

This guide will walk you through the process of setting up Tailwind CSS on a Windows system, starting from installing Node.js to creating your first Tailwind CSS project.

## 1. Install Node.js

Node.js is a prerequisite for using Tailwind CSS. Here's how to install it:

1. Visit the official Node.js website: https://nodejs.org/
2. Download the LTS (Long Term Support) version for Windows.
3. Run the downloaded installer.
4. Follow the installation wizard:
   - Accept the license agreement
   - Choose the installation location (default is fine)
   - Select the components to install (default selection is usually sufficient)
   - Click "Install"
5. After installation, open Command Prompt and verify the installation by typing:
   ```
   node --version
   npm --version
   ```
   Both commands should return version numbers if the installation was successful.

## 2. Create a New Project Directory

1. Open Command Prompt
2. Navigate to where you want to create your project:
   ```
   cd C:\path\to\your\projects\folder
   ```
3. Create a new directory for your project:
   ```
   mkdir my-tailwind-project
   cd my-tailwind-project
   ```

## 3. Initialize a New Node.js Project

1. In your project directory, run:
   ```
   npm init -y
   ```
   This creates a `package.json` file with default settings.

## 4. Install Tailwind CSS and its Dependencies

1. Install Tailwind CSS, PostCSS, and Autoprefixer:
   ```
   npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
   ```

## 5. Generate Tailwind Configuration Files

1. Create Tailwind CSS and PostCSS configuration files:
   ```
   npx tailwindcss init -p
   ```
   This creates `tailwind.config.js` and `postcss.config.js` in your project directory.

## 6. Configure Tailwind

1. Open `tailwind.config.js` in a text editor.
2. Replace its contents with:
   ```javascript
   module.exports = {
     content: ["./**/*.{html,js}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

## 7. Create CSS File

1. Create a new file named `input.css` in your project directory.
2. Add the following Tailwind directives to `input.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## 8. Create HTML File

1. Create an `index.html` file in your project directory.
2. Add basic HTML structure and link to the CSS file you'll generate:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href="./dist/output.css" rel="stylesheet">
     <title>Tailwind CSS Demo</title>
   </head>
   <body>
     <h1 class="text-3xl font-bold underline">
       Hello world!
     </h1>
   </body>
   </html>
   ```

## 9. Set Up Build Process

1. Open `package.json` in a text editor.
2. Add a script to build your CSS. In the "scripts" section, add:
   ```json
   "scripts": {
     "build": "tailwindcss -i ./input.css -o ./dist/output.css --watch"
   }
   ```

## 10. Run the Build Process

1. In Command Prompt, run:
   ```
   npm run build
   ```
   This starts the Tailwind CLI build process, which will watch your files and rebuild when changes are detected.

## 11. View Your Project

1. Install the "Live Server" extension in Visual Studio Code.
2. Right-click on `index.html` and select "Open with Live Server".

You now have a working Tailwind CSS setup! You can start adding Tailwind classes to your HTML and see the changes reflected in real-time.

Remember to keep the Command Prompt window running `npm run build` open while working on your project to ensure your CSS is continuously updated.
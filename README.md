# speech-to-text-converter

![speech to text](https://github.com/Cosaslearning/speech-to-text-converter/assets/100014446/4400d7d5-992e-436b-acf6-4ebc9e50e8f8)

This project is a web-based Speech To Text converter. Users can speak into their device's microphone, and the spoken words are transcribed into text. The interface includes language selection, a conversion button, a text area to display the result, and buttons to copy, download, and clear the text. The code is implemented using HTML, CSS, and JavaScript, and it provides a user-friendly interface for Speech To Text converter. Below, we will explain the code structure and functionality.

**HTML File (`index.html`):**

     - The HTML file sets up the structure of the web page for a Speech To Text converter.
     - Header with a logo and the main heading.
     - Speech To Text converter section with language selection, conversion button, result textarea, and action buttons.
     - External script references for language options (`languages-option.js`) and functionality (`script.js`).

**CSS File (`style.css`):** 

     - Provides styles for the entire web page, optimizing for the project's design.
     - Uses the Poppins font from Google Fonts.
     - Defines color variables, background, and box shadow.
     - Styles for the main container, header, heading, and the Speech To Text section.

**JavaScript File (`script.js`):**  

     - Implements the functionality of the Speech To Text converter using the Web Speech API.
     - `languagesOption()`: Populates the language selection dropdown.
     - `speechToText()`: Initiates speech recognition and converts speech to text.
     - `stopRecording()`: Stops speech recognition.
     - `hideBtns()`: Hides result-related buttons.
     - `download()`: Downloads the text result.
     - Event listeners for buttons to start/stop conversion, clear text, copy text, and download text.

**JavaScript File (`languages-option.js`):**

     - Contains an array of language options with codes, names, and native names.
     - `languages`: An array of objects representing different languages.

The web page uses HTML for structure, CSS for styling, and JavaScript for functionality. It incorporates the Web Speech API to convert spoken language to text. Users can choose a language, start/stop speech recognition, and perform actions like copying, downloading, and clearing the resulting text. The language options are stored in a separate JavaScript file for modularity.

In summary, the code integrates web technologies to create a user-friendly Speech To Text converter with a clean and visually appealing interface.

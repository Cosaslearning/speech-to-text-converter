// Speech To Text Variables
const recordBtn = document.querySelector("#convert_speech"),
  result = document.querySelector("textarea"),
  downloadBtn = document.querySelector("#downloadBtn"),
  copyBtn = document.querySelector("#copyBtn"),
  inputLanguage = document.querySelector("#language"),
  clearBtn = document.querySelector("#clearBtn");

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition,
    recognition,
    recording = false;

// Getting Languages Option Function   
function languagesOption() {
  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.innerHTML = lang.name;
    inputLanguage.appendChild(option);
  });
}

languagesOption();

// Speech To Text Function
function speechToText() {
  try {
    recognition = new SpeechRecognition();
    recognition.lang = inputLanguage.value;
    recognition.interimResults = true;
    recordBtn.innerHTML = "Listening Your Speech...";
    recognition.start();
    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      if (event.results[0].isFinal) {
        result.innerHTML += speechResult + " " ;
      } 
     clearBtn.classList.add("show");
     clearBtn.classList.remove("hide");
     downloadBtn.classList.add("show");
     downloadBtn.classList.remove("hide");
     copyBtn.classList.add("show");
     copyBtn.classList.remove("hide");
    };
    recognition.onspeechend = () => {
      speechToText();
    };
    recognition.onerror = (event) => {
      stopRecording();
      if (event.error === "no-speech") {
        alert("No speech was detected. Stopping...");
      } else if (event.error === "audio-capture") {
        alert(
          "No microphone was found. Ensure that a microphone is installed."
        );
      } else if (event.error === "not-allowed") {
        alert("Permission to use microphone is blocked.");
      } else if (event.error === "aborted") {
        alert("Listening Stopped.");
      } else {
        alert("Error occurred in recognition: " + event.error);
      }
    };
  } catch (error) {
    recording = false;

    console.log(error);
  }
}

// Converting Button Function
recordBtn.addEventListener("click", () => {
  if (!recording) {
    speechToText();
    recording = true;
  } else {
    stopRecording();
  }
});

// Stop Converting Button Function
function stopRecording() {
  recognition.stop();
  recordBtn.innerHTML = "Start Converting";
  recording = false;
}

// Hiding Buttons Function
function hideBtns() {
    result.innerHTML = "";
    clearBtn.classList.add("hide");
    clearBtn.classList.remove("show");
    downloadBtn.classList.add("hide");
    downloadBtn.classList.remove("show");
    copyBtn.classList.add("hide");
    copyBtn.classList.remove("show");
}

// Download Button Function
function download() {
  const text = result.innerHTML;
  const filename = "speech-cosas-learning.txt";

  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  hideBtns();
}

downloadBtn.addEventListener("click", download);

// Clear Button Function
clearBtn.addEventListener("click", () => {
    hideBtns();
});

// Copy Button Function 
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(result.innerHTML);
    copyBtn.innerHTML = "Copied!";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1000);
});

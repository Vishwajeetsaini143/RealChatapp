import React, { useState, useEffect } from "react";
import "../components/components.css"
import { BsMicFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-IN";

const Voicetext = () => {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);

  console.log("note", note);
  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {};
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <>
     
      
        <div>
          <button onClick={() => setIsListening((prevState) => !prevState)}>
            {isListening ? (
              <span>
                <BsMicFill />
              </span>
            ) : (
              <span>
                <BsFillMicMuteFill />
              </span>
            )}
          </button>
          <p>{note}</p>
        </div>
      
    </>
  );
};

export default Voicetext;

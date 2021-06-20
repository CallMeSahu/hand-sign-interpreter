import "./styles.css";
import React from "react";

const handSignDictionary = {
  "👌": "Ok Hand, represents 'I am okay!'.",
  "👋": "Waving Hand, represents 'Goodbye'.",
  "👐": "Open Hands, represents 'Openess'.",
  "👏": "Clapping Hands, represents 'Appreciation'.",
  "🤘": "Sign of Horn, represents 'Rockon'.",
  "👊": "Oncoming Fist, represents 'Fist-Bump'.",
  "✌️": "Victory Hand, represents 'Victory or Peace'.",
  "🤟": "Love You Gesture, represents 'I love you'.",
  "🤙": "Call Me Hand, represents 'Phone call me'.",
  "👍": "Thumbs Up Gesture, represents 'Approval'.",
  "👎": "Thumbs Down Gesture, represents 'Disapproval'."
};

const handSignArray = Object.keys(handSignDictionary);

export default function App() {
  const [meaning, setMeaning] = React.useState("");

  function userInputHandler(event) {
    var userInput = event.target.value;
    var meaning = handSignDictionary[userInput];
    if (meaning === undefined) {
      meaning = "not found!";
    }
    setMeaning(meaning);
  }

  function signClickHandler(sign) {
    var meaning = handSignDictionary[sign];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hand-Sign Interpreter</h1>
      Enter a hand-sign (or) choose one from below ⬇️
      <div>
        <input onChange={userInputHandler}></input>
      </div>
      <div className="meaning-label">
        <span style={{ fontWeight: "bold" }}>Meaning:</span> {meaning}
      </div>
      {handSignArray.map((sign) => {
        return (
          <span
            key={sign}
            onClick={() => signClickHandler(sign)}
            className="sign-display"
          >
            {sign}
          </span>
        );
      })}
    </div>
  );
}

import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const inputEl: any = useRef([]);
  let paragraph =
    "The concept of a class with definition and instantiation is similar to a React component, which also has only one component definition, but can have multiple component instances".split(
      ""
    );

  const onKeyPressed = (s: string) => {
    const userText = s.split("");
    // console.log(userText);
    // console.log(inputEl.current[0].innerText);

    for (let i = 0; i < inputEl.current.length; i++) {
      if (userText[i] == inputEl.current[i].innerText) {
        inputEl.current[i].style.color = "#2ee61d";
      } else if (userText.length <= i) {
        inputEl.current[i].style.color = "rgb(92, 78, 78)";
      } else {
        inputEl.current[i].style.color = "red";
      }
    }
  };

  return (
    <div className="App">
      <textarea
        className="textField"
        rows={10}
        cols={100}
        onChange={(e: any) => {
          onKeyPressed(e.target.value);
        }}
        autoFocus={true}
      ></textarea>
      <div className="text">
        <p>
          {paragraph.map((item: any, index: any) => {
            return (
              <span
                ref={(element: any) => {
                  inputEl.current[index] = element;
                }}
                className="letter"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default App;

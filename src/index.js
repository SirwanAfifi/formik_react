import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import MyForm from "./MyForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>
          <h1>Sample Form with Formik</h1>
        </p>
        <MyForm />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

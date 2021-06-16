import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
 <header className="App-header">
      Look up a new word 👀
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="text-center"><a href="https://github.com/mkczarwhite/dictionary-app" target="_blank" rel="noreferrer">Code available on Github</a> by Michelle White</footer>
      </div>
   
    </div>
  );
}



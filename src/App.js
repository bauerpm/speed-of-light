import React from 'react'
import { faMeteor, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { Animation } from './components/animation.component'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>How Slow is the The Speed of Light?</p>
      </div>
      <Animation icon={faStarOfLife} className="Animation-icon" />
      <Animation icon={faMeteor} className="Animation-icon-earth" />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App

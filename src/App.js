import React from 'react'
import {
  faGlobeAfrica,
  faMeteor,
  faStarOfLife,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { faGalacticRepublic } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { Animation } from './components/animation.component'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>How Fast is the The Speed of Light?</p>
      </div>
      <div className="rowContainer">
        <div>
          <div className="container">
            <div className="textcontainer">
              <p className="label">Light</p>
              <p className="label">299,792,558 m/s</p>
            </div>
            <Animation icon={faStarOfLife} className="Animation-icon" />
          </div>
          <div className="container">
            <div className="textcontainer">
              <p className="label">The Milky Way</p>
              <p className="label">581,152 m/s</p>
            </div>
            <Animation
              icon={faGalacticRepublic}
              className="Animation-icon-milkyway"
            />
          </div>
          <div className="container">
            <div className="textcontainer">
              <p className="label">The Solar System</p>
              <p className="label">200,000 m/s</p>
            </div>
            <Animation icon={faSun} className="Animation-icon-solarsystem" />
          </div>
          <div className="container">
            <div className="textcontainer">
              <p className="label">Comet 2I/Borisov</p>
              <p className="label">48,611 m/s</p>
            </div>
            <Animation icon={faMeteor} className="Animation-icon-comet" />
          </div>
          <div className="container">
            <div className="textcontainer">
              <p className="label">The Earth</p>
              <p className="label">30,000 m/s</p>
            </div>
            <Animation icon={faGlobeAfrica} className="Animation-icon-earth" />
          </div>
        </div>
        <div className="paragraph">
          <p className="label">The Speed of Light</p>
          <p className="key">
            These animations represent the relative comparison between the speed
            of light and the velocities of various celestial bodies. The icon
            representing light moves across the screen in 0.5s. The other
            objects are scaled to the correct ratio in relation to it. Light is
            approximately 516 times faster than the Milky Way, 1498 times faster
            than the Solar System, 6,166 times faster than the fastest known
            comet, 2I/Borisov, and 10,000 times faster than the Earths orbit
            around the sun.
          </p>
        </div>
      </div>
      <p className="copyright">&copy; 2020 Tommy Bauer</p>
    </div>
  )
}

export default App

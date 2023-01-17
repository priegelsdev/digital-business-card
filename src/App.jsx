import React from 'react'
import profilePic from './assets/Rectangle 90.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default function App() {
  return (
    <div className="business-card">
      <img src={profilePic} />
      <div className="card-details">
        <div className="card-title">
          <h2>Laura Smith</h2>
          <h5>Frontend Developer</h5>
          <a className="website" href="laurasmith.website">laurasmith.website</a>
        </div>
        <div className="card-contact">
          <button className="mail-btn"><FontAwesomeIcon icon={faEnvelope} />Email</button>
          <button className="linkedin-btn"><img src="./src/assets/linkedin.png" />LinkedIn</button>
        </div>
      </div>
    </div>
  )
}
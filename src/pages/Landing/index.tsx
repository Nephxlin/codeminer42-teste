import React from 'react'
import { Link } from 'react-router-dom'

import search from '../../assets/icons/search.svg'
import addUser from '../../assets/icons/add-user.svg'
import zombie from '../../assets/images/zumbi.svg'
import logoimg from '../../assets/images/logo.svg'

import './styles.css'

function Landing(){

  return (
    <div id="page-landing">
    <div id="page-landing-content" className="containter">
      <div className="logo-container">
        <img src={logoimg} alt="The Resident Zombie"/>
        <h2>Plataform for surivors of Influenzer T-Virus</h2>
        </div>

        <img src={zombie}
        alt="Zombie" 
        className="Zombie"/>

        <div className="buttons-container">
          <Link to="/new-survior" className="join">
            <img src={addUser} alt="Join survivor"/>
            Join Survivor
          </Link>

          <Link to="/find-survior" className="give-classes">
            <img src={search} alt="Find surviver"/>
            Find a surviver
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Landing

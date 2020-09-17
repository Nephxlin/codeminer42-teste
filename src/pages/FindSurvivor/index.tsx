import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import PageHeader from '../../components/PageHeader'

import api from '../../services/api'

import './styles.css'


function FindSurvivor() {
  //List All Survivors
  const [survivors, setSurvivors] = useState([])

  async function listAllsurvivors() {
    const response = await api.get('/people')
    return setSurvivors(response.data)
  }

  listAllsurvivors()

  //Survivor Ids
  const ids = [] = survivors.map((id: any) => {
    function stringIds(id: any) {
      return id.slice(53)
    }
    id = id.location
    return stringIds(id)
  })


  return (
    <div id="page-survivor-card" className='container'>
      <PageHeader title="Find a Survivor" />

      <div className="content">
        {survivors.map((survivor: any, index: number) => (
          <div key={survivor.updated_at} className="survivor-card">
            <strong>{survivor.name}</strong>
            <p>Id: <span>{ids[index]}</span></p>
            <p>Age: <span>{survivor.age}</span></p>
            <p>Gender: <span>{survivor.gender}</span></p>
            <p>Location: <span>{survivor.lonlat}</span></p>
            <p>Created at: <span>{survivor.created_at}</span></p>
            <p>Updated AT: <span>{survivor.updated_at}</span></p>
            <p>Infected: <span>{`${survivor.infected}`}</span></p>
            <div className="button-report"><Link to="/reports">Report user</Link></div>
          </div>
        ))}

      </div>
    </div>
  )
}



export default FindSurvivor
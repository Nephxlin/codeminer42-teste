import React, { useState, FormEvent } from 'react'


import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import './styles.css'
import api from '../../services/api';


function Reports() {
  //Survivors Property
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [lonlat, setLonlat] = useState('')

  async function listAllsurvivors(e: FormEvent) {
    e.preventDefault()
    const response = await api.get(`people/${id}.json`,)

    setName(response.data.name)
    setAge(response.data.age)
    setGender(response.data.gender)
    setLonlat(response.data.lonlat)
  }

  //map

  return (

    <div id='page-reports-card'>
      <PageHeader
        title="General Reports"
        description="Data center"
      />
      <div className="list-reports">
        <div className="options-grid">
          <div className="update">
            <h2>Update Localization</h2>
            <Input
              name="Id"
              label="User Id"
              value={id}
              onChange={(e) => { setId(e.target.value) }}
            />
            <button onClick={(e) => { listAllsurvivors(e) }}> click</button>
            {/* Hidden User Inputs In UPDATE LOCALIZATION ! ! !*/}
            <form>
              <Input
                type='hidden'
                name="name"
                label=""
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
              <Input
                type='hidden'
                name="age"
                label=""
                value={age}
                onChange={(e) => { setAge(e.target.value) }}
              />
              <Input
                type='hidden'
                name="gender"
                label=""
                value={gender}
                onChange={(e) => { setGender(e.target.value) }}
              />
              <Input
                name="lonlat"
                label="Localization"
                value={lonlat}
                onChange={(e) => { setLonlat(e.target.value) }}
              />

              <button type="submit"> Submit</button>
            </form>
          </div>

          <div className="report-infected">
            <h2>Report User</h2>
            <Input
              name="Id"
              label="Infected Id"

            />
            <Input
              name="Id"
              label="Your ID"
              value={id}
              onChange={(e) => { setId(e.target.value) }}
            />
            <button onClick={(e) => { listAllsurvivors(e) }}> click</button>

          </div>

        </div>
      </div>


    </div>
  )
}

export default Reports
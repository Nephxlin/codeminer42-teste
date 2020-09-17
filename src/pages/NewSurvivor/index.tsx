import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'

import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

import api from '../../services/api';


function NewSurvivor(){
  const history = useHistory()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [lonlat, setLonlat] = useState('')

  const [items, setItems] = useState('')

  //Post Survivor
  function createNewSurvivor(e: FormEvent){
    e.preventDefault()
    
    api.post('/people', {
      name,
      age,
      gender,
      lonlat,
      items,

    }).then(() => {
      alert('Register Ok!')

      history.push('/')
    }).catch(() => {
      alert('Something wrong there!')
    })
    
  }
  
  //Geo-Position

  return (

    

    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Create a Survivor"
      description="Tell about you"
      />

      <main>
        <form onSubmit={createNewSurvivor}>

        <Input 
          name="name"
          label="Fullname"
          value={name} 
          onChange={(e) => {setName(e.target.value) }} 
        />

        <Input 
          name="age"
          label="Age"
          value={age} 
          onChange={(e) => {setAge(e.target.value) }} 
        />

        <Select 
            name="gender" 
            label="Gender"
            value = {gender}
            onChange={e => setGender(e.target.value)}
            options={[
              { value: 'M', label: 'Male'},
              { value: 'F', label: 'Female'},
              ]}
          />

        <Input 
          name="lonlat"
          label="Localization"
          value={lonlat}
          onChange={(e) => {setLonlat(e.target.value) }} 
        />

        <Input 
          name="items"
          label="items"
          value={items} 
          onChange={(e) => {setItems(e.target.value) }} 
        />

        <button type="submit"> Submit</button>

        </form>
      </main>
    </div>
  )
}

export default NewSurvivor
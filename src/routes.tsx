import React from 'react'
import {BrowserRouter , Route} from 'react-router-dom'

import Landing from './pages/Landing'
import NewSurvivor from './pages/NewSurvivor'
import FindSurvivor from './pages/FindSurvivor'
import Reports from './pages/Reports'

function Routes(){
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing}/>
      <Route path='/new-survivor' exact component={NewSurvivor}/>
      <Route path='/find-survivor'component={FindSurvivor}/>
      <Route path='/reports'component={Reports}/>
    </BrowserRouter>
  )
}

export default Routes
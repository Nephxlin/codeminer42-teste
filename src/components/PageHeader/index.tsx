import React from 'react'
import { Link } from 'react-router-dom'


import logoimg from '../../assets/images/logo.svg'
import back from '../../assets/icons/back.svg'
import search from '../../assets/icons/search.svg'


import './styles.css'

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps>= (props)=>{
  return (
    <header className="page-header">
      
      <div className="top-bar-container">
        <Link to='/'>
          <img id="backarrow" src={back} alt="back"/>
        </Link>
        
        <img src={logoimg} alt="The Resident Zombie"/>
      </div>

      <div className="header-content">
      <img id="searchIcon" src={search} alt="search"/>
        <strong>{props.title}</strong>
        { props.description && <p>{props.description}</p>}
        { props.children }
      </div>

    </header>
  )
}

export default PageHeader
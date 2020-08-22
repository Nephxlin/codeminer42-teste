import React from 'react'
import { Link } from 'react-router-dom'

import logoimg from '../../assets/images/landing.png'

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
          <img src="" alt=""/>
        </Link>
        <img src="{logoimg}" alt="The Resident Zombie"/>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        { props.description && <p>{props.description}</p>}

        { props.children }
      </div>

    </header>
  )
}

export default PageHeader
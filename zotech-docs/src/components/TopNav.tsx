import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBox } from './SearchBox'

export const TopNav: React.FC = () => {
  return (
    <header className="topnav">
      <div className="topnav-inner">
        <Link to="/" className="topnav-brand">
          <div className="topnav-brand-mark">Z</div>
          <span>
            <span className="topnav-brand-name">Zotech</span>
            <span className="topnav-brand-sub">docs</span>
          </span>
        </Link>
        <SearchBox variant="topnav" />
        <div className="topnav-actions">
          <a className="btn btn-primary" href="#">Mở hệ thống</a>
        </div>
      </div>
    </header>
  )
}

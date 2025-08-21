import React from 'react'

export default function Navbar() {
  return (
    <nav className="navigasi clearfix">
      {/* plain text, bukan link */}
      <div className="logo">Portfolio</div>  

      <div className="menu">
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#projects">Projects & Skill</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

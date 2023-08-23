import React from "react"
import "./styles.css"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="../../../public/images/LogoT.png" width="150" alt="Logo" />
        <span>ByTupak</span>
      </div>

      <nav>
        <a href="/">Inicio</a>
        <a href="#">Login</a>
      </nav>
    </div>
  )
}

export default Header

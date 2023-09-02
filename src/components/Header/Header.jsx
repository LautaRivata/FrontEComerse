import React from "react"
import { Link } from "react-router-dom"
import { Button } from "antd"
import "./styles.css"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/LogoT.png" width="150" alt="Logo" />
        <span>ByTupak</span>
      </div>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/register">
          <span>Register</span>
        </Link>
      </nav>
    </div>
  )
}

export default Header

import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import { useUserStore } from "../../stores"

const Header = () => {
  const userlog = useUserStore(state => state.userlog)
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src="/images/LogoT.png" width="150" alt="Logo" />
          <span>ByTupak</span>
        </div>
      </Link>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/EditPage">
          <span>Edtiar</span>
        </Link>
        {userlog ? (
          <Link to="/logout">
            <span>Log Out</span>
          </Link>
        ) : (
          <div>
            <Link to="/login">
              <span>Log In</span>
            </Link>
            <Link to="/register">
              <span>Register</span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Header

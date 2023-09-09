import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import { useUserStore } from "../../stores"

const Header = () => {
  const { userlog, username, usergerarquia } = useUserStore(
    state => state.userSecion
  )

  let autorizado
  if (usergerarquia > 90) {
    autorizado = true
  } else {
    autorizado = false
  }

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
        {autorizado ? (
          <Link to="/EditPage">
            <span>Agregar Producto</span>
          </Link>
        ) : (
          <></>
        )}

        {userlog ? (
          <div>
            <Link to="/logout">
              <span>Log Out</span>
            </Link>
            <span>@{username}</span>
          </div>
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

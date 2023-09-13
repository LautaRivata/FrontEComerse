import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { useUserStore } from "../../stores"
import "./styles.css"

import "./styles.css"

const Footer = () => {
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
    <div className="footer">
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        {autorizado ? (
          <div>
            <Link to="/EditPage">
              <span>Agregar Producto</span>
            </Link>
            <Link to="/OrdersPage">
              <span>Ordenes</span>
            </Link>
          </div>
        ) : (
          <div></div>
        )}

        {userlog ? (
          <div>
            <Link to="/logout">
              <span>Log Out</span>
            </Link>
            <Link to="/ConfirmPage">
              <span>Carrito</span>
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

      <div className="social">
        <a href="#">
          <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faSquareXTwitter} size="xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faSquareInstagram} size="xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faSquareGithub} size="xl" />
        </a>
      </div>
    </div>
  )
}
export default Footer

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons"

import "./styles.css"

const Footer = () => {
  return (
    <div className="footer">
      <section className="links">
        <a href="#">Inicio</a>
        <a href="#">Blog</a>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>
      </section>

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

import React from "react"
import { Header, Footer } from "../../components"
import { Button } from "antd"
import { useUserStore } from "../../stores"
import { useNavigate } from "react-router-dom"
import { notification } from "antd"
import { CheckOutlined } from "@ant-design/icons"
import { sleep } from "../../utils"
import "./styles.css"

const openLogCorrectNotification = title =>
  notification.open({
    message: `¡Logout efectuado Correctamente!`,
    description: title,
    placement: "topLeft",
    icon: <CheckOutlined style={{ color: "green" }} />,
  })

const LogoutPage = () => {
  const logoutUser = useUserStore(state => state.logOutUser)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await fetch("http://localhost:8080/api/users/logout").then(
      console.log("secion Cerrada")
    )
    logoutUser
    openLogCorrectNotification("Adios")
    await sleep(2000)
    navigate(`/`)
  }

  return (
    <div className="contenedor">
      <Header />
      <section className="main">
        <br />
        <h3>Gracias por Compar en Mi pagina, Espero volver a Verte Pronto</h3>
        <br />
        <Button type="primary" htmlType="submit" onClick={() => handleLogout()}>
          Cerrar Secion
        </Button>
      </section>
      <Footer />
    </div>
  )
}

export default LogoutPage

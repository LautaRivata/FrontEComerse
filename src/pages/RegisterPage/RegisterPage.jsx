import React from "react"
import { Header, Footer } from "../../components"
import { Button, Input, notification } from "antd"
import { useNavigate } from "react-router-dom"
import { CheckOutlined, ExclamationOutlined } from "@ant-design/icons"
import { useState } from "react"
import "./styles.css"
import bcrypt from "bcryptjs"

const openCorrectNotification = title =>
  notification.open({
    message: `¡Usuario Creado Correctamente!`,
    description: title,
    placement: "topLeft",
    icon: <CheckOutlined style={{ color: "green" }} />,
  })

const openFailNotification = title =>
  notification.open({
    message: `Hubo un error en el Formulario, Reintentar`,
    description: title,
    placement: "topLeft",
    icon: <ExclamationOutlined style={{ color: "#108ee9" }} />,
  })

const RegisterPage = () => {
  const [username, setUsername] = useState("") // Estado donde guardaremos el nombre.
  const [userpass, setUserpass] = useState("")
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [telephone, setTelephone] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const isEnabled = true
    const gerarquia = 5

    const passHash = await bcrypt.hash(userpass, 10)

    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        userpass: passHash,
        name: nombre,
        email,
        telephone,
        address,
        isEnabled,
        gerarquia,
      }),
    }).then(response => response.json())

    console.log(response)
    if (response.success == true) {
      openCorrectNotification("Bienvenido")
      navigate("/")
    } else {
      openFailNotification("Error")
    }
  }

  return (
    <div className="register">
      <Header />
      <br />
      <h3>Formulario de Registro:</h3>
      <hr />
      <br />
      <section className="registerMain">
        <label htmlFor="username">Nombre:</label>
        <Input
          type="text"
          name="username"
          id="username"
          defaultValue={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="userpass">Password:</label>
        <Input
          onChange={e => setUserpass(e.target.value)}
          type="password"
          name="userpass"
          id="userpass"
          defaultValue={userpass}
        />
        <label htmlFor="nombre">Nombre de Usuario:</label>
        <Input
          onChange={e => setNombre(e.target.value)}
          type="text"
          name="nombre"
          id="nombre"
          defaultValue={nombre}
        />
        <label htmlFor="email">Email:</label>
        <Input
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          defaultValue={email}
        />
        <label htmlFor="telephone">Telefono:</label>
        <Input
          onChange={e => setTelephone(e.target.value)}
          type="text"
          name="telephone"
          id="telephone"
          defaultValue={telephone}
        />
        <label htmlFor="address">Direccion:</label>
        <Input
          onChange={e => setAddress(e.target.value)}
          type="text"
          name="address"
          id="address"
          defaultValue={address}
        />
        <Button type="primary" onClick={handleSubmit}>
          Enviar
        </Button>
      </section>
      <Footer />
    </div>
  )
}

export default RegisterPage

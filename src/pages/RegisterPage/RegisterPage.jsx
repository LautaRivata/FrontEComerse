import React from "react"
import { Header, Footer } from "../../components"
import { Button, Input } from "antd"
import { useState } from "react"
import "./styles.css"
import bcrypt from "bcryptjs"

const RegisterPage = () => {
  const [username, setUsername] = useState("") // Estado donde guardaremos el nombre.
  const [userpass, setUserpass] = useState("")
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [telephone, setTelephone] = useState("")

  const handleSubmit = async () => {
    const isEnabled = true
    const gerarquia = 5

    const passHash = await bcrypt.hash(userpass, 10)

    await fetch("http://localhost:8080/api/users", {
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
    })
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

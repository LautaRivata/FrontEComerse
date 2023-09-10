import React from "react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useGetFetch } from "../../hooks"
import { Input, Button, notification } from "antd"
import { useCartStore, useUserStore } from "../../stores"
import { Cart, Header, Footer } from "../../components"
import { calcTotalPrice, enviarOrden, sleep } from "../../utils"
import { CheckOutlined } from "@ant-design/icons"

const openNotification = (titulo, mensageBack) =>
  notification.open({
    message: `${mensageBack}`,
    description: titulo,
    placement: "topLeft",
    icon: <CheckOutlined style={{ color: "green" }} />,
  })

const ConfirmPage = () => {
  const orderProducts = useCartStore(state => state.products)
  const { userID, usergerarquia } = useUserStore(state => state.userSecion)
  const { data, isLoading, isError } = useGetFetch(`/api/users/${userID}`)
  const [editName, setEditName] = useState("")
  const [editAddress, setEditAddress] = useState("")
  const [editEmail, setEditEmail] = useState("")
  const [editTelephone, setEditTelephone] = useState("")
  const { totalPrice, totalItems } = calcTotalPrice(orderProducts)
  const navigate = useNavigate()
  let autorizado
  if (usergerarquia > 90) {
    autorizado = true
  } else {
    autorizado = false
  }

  useEffect(() => {
    if (isLoading == false) {
      setEditName(data.name)
      setEditAddress(data.address)
      setEditEmail(data.email)
      setEditTelephone(data.telephone)
    }
  }, [isLoading])

  const onFinish = async () => {
    const orderDetails = {
      totItems: totalItems,
      totPrice: totalPrice,
      userid: userID,
      datosEnvio: editAddress,
      datosContacto: editEmail,
    }
    const response = await enviarOrden(orderDetails, orderProducts)
    openNotification(editName, response.message)
    sleep(2000)
    navigate(`/`)
  }

  return (
    <div className="contenedor">
      <Header />
      <br />
      <section className="main">
        <h1>Confirm Page</h1>
        {isLoading ? (
          <div>
            <span>Cargando Datos de Usuario</span>
          </div>
        ) : (
          <div>
            <label htmlFor="name">Usuario:</label>
            <Input type="text" id="name" value={data.name} />
            <label htmlFor="address">Direccion:</label>
            <Input
              type="text"
              id="address"
              defaultValue={data.address}
              placeholder={data.address}
              onChange={e => setEditAddress(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <Input
              type="text"
              id="email"
              defaultValue={data.email}
              placeholder={data.email}
              onChange={e => setEditEmail(e.target.value)}
            />
            <label htmlFor="telephone">Telefono:</label>
            <Input
              type="text"
              id="telephone"
              defaultValue={data.telephone}
              placeholder={data.telephone}
              onChange={e => setEditTelephone(e.target.value)}
            />
          </div>
        )}

        <h2>Listado de Productos</h2>
        <Cart />
        {autorizado ? (
          <h3>Sos Admin No podes Comparar con este Usuario</h3>
        ) : (
          <Button type="primary" onClick={() => onFinish()}>
            Confirmar
          </Button>
        )}
      </section>
      <Footer />
    </div>
  )
}

export default ConfirmPage

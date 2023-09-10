import React from "react"
import { useState } from "react"
import { Header, Footer } from "../../components"
import { Table, Button, List } from "antd"
import { useUserStore } from "../../stores"
import { useGetFetch } from "../../hooks"
import { pedirListaOrden, peek } from "../../utils"

const OrdersPage = () => {
  const { usergerarquia } = useUserStore(state => state.userSecion)
  const { data, isLoading, isError } = useGetFetch(`/api/orders`)
  const [isdetalle, setIsdetalle] = useState(false)
  const [hola, setHola] = useState([
    {
      id: 0,
      cantidad: 0,
      itemPrice: 0,
      orderid: 0,
      prodid: 0,
    },
  ])
  let listaOrden = [
    {
      id: 0,
      cantidad: 0,
      itemPrice: 0,
      orderid: 0,
      prodid: 0,
    },
  ]

  const handleClik = async text => {
    const response = await pedirListaOrden(text)
    listaOrden = response.ordersList
    setIsdetalle(true)
    setHola(listaOrden)
  }

  const colDetails = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: text => <Button onClick={() => handleClik(text)}>{text}</Button>,
    },
    {
      title: "Total Items",
      dataIndex: "totItems",
      key: "totItems",
    },
    {
      title: "Total Precio",
      dataIndex: "totPrice",
      key: "totPrice",
    },
    {
      title: "User ID",
      dataIndex: "userid",
      key: "userid",
    },
    {
      title: "Envio",
      dataIndex: "datosEnvio",
      key: "datosEnvio",
    },
    {
      title: "Contacto",
      dataIndex: "datosContacto",
      key: "datosContacto",
    },
  ]
  const colLista = [
    {
      title: "ID Producto",
      dataIndex: "prodid",
      key: "prodid",
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "cantidad",
    },
    {
      title: "Precio Individual",
      dataIndex: "itemPrice",
      key: "itemPrice",
    },
  ]

  let autorizado
  if (usergerarquia > 90) {
    autorizado = true
  } else {
    autorizado = false
  }

  return (
    <div className="contenedor">
      <Header />
      <br />
      <section className="main">
        <h1>Resumen Ordenes de Compra</h1>
        {autorizado ? (
          <div>
            {isLoading ? (
              <div>
                <h3>Cargando Datos, Por Favor Espere un Momento</h3>
              </div>
            ) : (
              <div>
                <Table
                  key="TablaOrdenes"
                  columns={colDetails}
                  dataSource={data.ordersDetails}
                />

                {isdetalle ? (
                  <div>
                    <Table
                      key="TablaOrdenes"
                      columns={colLista}
                      dataSource={hola}
                    />
                  </div>
                ) : (
                  <div>
                    <h3>
                      Seleccione un Orden para ver Los Productos Asociados
                    </h3>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2> 401 UnAuthorized </h2>
          </div>
        )}
      </section>
      <Footer />
    </div>
  )
}

export default OrdersPage

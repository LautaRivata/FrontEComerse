import React, { useState } from "react"
import { Button, Card, Image } from "antd"
import { useCartStore, useUserStore } from "../../stores"
import { useNavigate } from "react-router-dom"
import "./styles.css"

const Product = productProps => {
  const { title, text, imageLink, price, primarikey, category } = productProps
  const actions = useCartStore(state => state.actions)
  const navigate = useNavigate()
  const { usergerarquia, userID } = useUserStore(state => state.userSecion)
  const handelEdit = pk => {
    navigate(`/Editpage/${pk}`)
  }
  let autorizado
  if (usergerarquia > 90) {
    autorizado = true
  } else {
    autorizado = false
  }

  return (
    <div>
      <Card
        title={title}
        hoverable
        style={{ width: "15rem" }}
        cover={<Image src={imageLink} style={{ maxHeight: "15rem" }} />}
        extra={
          <Button onClick={() => actions.addProduct(productProps)}>
            Agregar
          </Button>
        }
      >
        <Card.Meta title={price && <p>${price}</p>} description={text} />
        {autorizado ? (
          <Button type="primary" onClick={() => handelEdit(primarikey)}>
            Editar Producto
          </Button>
        ) : (
          <></>
        )}
      </Card>
    </div>
  )
}

export default Product

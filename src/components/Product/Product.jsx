import React from "react"
import { Button, Card, Image } from "antd"
import { useCartStore } from "../../stores"
import "./styles.css"

const Product = productProps => {
  const { title, text, imageLink, price } = productProps
  const actions = useCartStore(state => state.actions)

  return (
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
    </Card>
  )
}

export default Product

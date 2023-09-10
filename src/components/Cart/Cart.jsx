import { Avatar, List, Button } from "antd"
import {
  CloseOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons"
import { useCartStore } from "../../stores"
import { calcTotalPrice, peek } from "../../utils"

const Cart = () => {
  const products = useCartStore(state => state.products)
  const actions = useCartStore(state => state.actions)
  const { totalPrice } = calcTotalPrice(products)

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={products}
        renderItem={({ product, cantidad }, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={product.imageLink} />}
              title={product.title}
              description={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    type="ghost"
                    size="small"
                    onClick={() => actions.increaseProduct(index)}
                  >
                    <PlusCircleOutlined style={{ color: "green" }} />
                  </Button>
                  <p>{cantidad}</p>
                  <Button
                    type="ghost"
                    size="small"
                    onClick={() => actions.decreaseProduct(index)}
                  >
                    <MinusCircleOutlined style={{ color: "green" }} />
                  </Button>
                  <Button
                    type="ghost"
                    size="small"
                    onClick={() => actions.removeProduct(index)}
                  >
                    <CloseOutlined style={{ color: "red" }} />
                  </Button>
                  <p>Item Price: {product.price * cantidad}</p>
                </div>
              }
            />
          </List.Item>
        )}
      />
      <h3>Total: ${totalPrice} </h3>
    </>
  )
}

export default Cart

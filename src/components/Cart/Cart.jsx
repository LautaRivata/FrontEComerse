import { Avatar, List, Button } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import { useCartStore } from "../../stores"
import { calcTotalPrice } from "../../hackaton-utilities"

const Cart = () => {
  const products = useCartStore(state => state.products)
  const actions = useCartStore(state => state.actions)
  const totalPrice = calcTotalPrice(products)

  return (
    <>
      <h3>Total: ${totalPrice} </h3>

      <List
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(product, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={product.imageLink} />}
              title={product.title}
              description={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>{product.price}</p>

                  <Button
                    type="ghost"
                    size="small"
                    onClick={() => actions.removeProduct(index)}
                  >
                    <CloseOutlined style={{ color: "red" }} />
                  </Button>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default Cart

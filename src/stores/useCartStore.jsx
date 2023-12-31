import { create } from "zustand"
import { notification } from "antd"
import { CheckOutlined, ExclamationOutlined } from "@ant-design/icons"
import { peek } from "../utils"

const openAddNotification = title =>
  notification.open({
    message: `¡Elemento fue agregado con éxito!`,
    description: title,
    placement: "topLeft",
    icon: <CheckOutlined style={{ color: "green" }} />,
  })

const openDeleteNotification = title =>
  notification.open({
    message: `Elemento eliminado correctamente`,
    description: title,
    placement: "topLeft",
    icon: <ExclamationOutlined style={{ color: "#108ee9" }} />,
  })

const useCartStore = create(set => ({
  products: [],
  actions: {
    addProduct: product =>
      set(state => {
        openAddNotification(product.title)
        return { products: [...state.products, { product, cantidad: 1 }] }
      }),
    removeProduct: index =>
      set(state => ({
        products: state.products.filter(({ title }, currentIndex) => {
          if (currentIndex === index) {
            openDeleteNotification(title)
            return false
          }
          return true
        }),
      })),
    increaseProduct: index => {
      set(state => {
        state.products[index].cantidad++
        return { products: [...state.products] }
      })
    },
    decreaseProduct: index => {
      set(state => {
        if (state.products[index].cantidad > 1) {
          state.products[index].cantidad--
        }
        return { products: [...state.products] }
      })
    },
  },
}))

export default useCartStore

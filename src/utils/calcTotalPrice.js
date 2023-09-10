"use strict"

import { peek } from "."

const calcTotalPrice = products => {
  let totalPrice = 0
  let totalItems = 0

  for (let i = 0; i < products.length; i++) {
    totalPrice = totalPrice + products[0].product.price * products[0].cantidad
    totalItems++
  }

  return { totalPrice, totalItems }
}

export default calcTotalPrice

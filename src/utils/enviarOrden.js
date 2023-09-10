"use strict"

const enviarOrden = async function (orderDetails, orderProducts) {
  const response = await fetch("http://localhost:8080/api/orders", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderDetails,
      orderProducts,
    }),
  })
  return response.json()
}

export default enviarOrden

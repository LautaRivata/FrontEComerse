"use strict"

const actualizarCarrito = async function (userID, productID, metodo, cantidad) {
  const response = await fetch("http://localhost:8080/api/carritos", {
    method: metodo,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userID, productID, cantidad }),
  })
  return response.json()
}

export default actualizarCarrito

"use strict"

const editProduct = async (bodyEviar, metodo) => {
  const response = await fetch("http://localhost:8080/api/products", {
    method: metodo,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyEviar),
  })
  return response.json()
}

export default editProduct

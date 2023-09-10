const pedirListaOrden = async function (id) {
  const response = await fetch(`http://localhost:8080/api/orders/${id}`, {
    method: "GET",
  })
  return response.json()
}

export default pedirListaOrden

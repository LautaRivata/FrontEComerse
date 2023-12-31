"use strict"

const addFilters = (products, filters) => {
  let filtrado = products
  if (filters.title !== "") {
    filtrado = filtrado.filter(product =>
      product.title.toLowerCase().includes(filters.title.toLowerCase())
    )
  }
  if (filters.price !== 0) {
    filtrado = filtrado.filter(product => product.price > filters.price)
  }
  if (filters.priceMax !== 0) {
    filtrado = filtrado.filter(product => product.price < filters.priceMax)
  }
  if (filters.category !== "") {
    filtrado = filtrado.filter(product =>
      filters.category === "-" ? true : product.category === filters.category
    )
  }
  filtrado = filtrado
    .slice()
    .sort((a, b) => (filters.isSort ? a.price - b.price : 0))
  return filtrado
}

export default addFilters

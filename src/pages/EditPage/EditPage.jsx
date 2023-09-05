import React from "react"
import { useParams } from "react-router-dom"
import { Header, Footer } from "../../components"
import { useProductosQuery } from "../../hooks"
import { Button, Input, Select } from "antd"
import { useState } from "react"
import { useCategoriesStore } from "../../stores"
import { peek } from "../../utils"
import "./styles.css"

const EditPage = (productProps = {}) => {
  const categories = useCategoriesStore(state => state.categories)
  const { products } = useProductosQuery()
  const idProduct = useParams().id
  const foundProduct = products.find(product => product.id == idProduct) || {}

  const [title, setTitle] = useState(peek(foundProduct.title || ""))
  const [description, setDescription] = useState(foundProduct.description || "")
  const [price, setPrice] = useState(foundProduct.price || "")
  const [category, setCategory] = useState(foundProduct.category || "")
  const [imageLink, setImageLink] = useState(foundProduct.image || "")

  console.log(idProduct)
  console.log(products)
  console.log(products.find(product => product.id == idProduct))
  const handleCancel = () => {
    console.log("Boton: Cancel")
  }

  const handleAplicar = () => {
    console.log("Boton: Aplicar")
  }
  const handleBorrar = () => {
    console.log("Boton: Borrar")
  }
  return (
    <div className="register">
      <Header />
      <br />
      <h3>Formulario de Registro:</h3>
      <hr />
      <br />
      <section className="registerMain">
        <label htmlFor="title">Titulo:</label>
        <Input
          type="text"
          name="title"
          id="title"
          value={peek(title)}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="price">Precio:</label>
        <Input
          onChange={e => setPrice(e.target.value)}
          type="text"
          name="price"
          id="price"
          defaultValue={price}
        />
        <label htmlFor="imageLink">Link de Imagen:</label>
        <Input
          onChange={e => setImageLink(e.target.value)}
          type="text"
          name="imageLink"
          id="imageLink"
          value={imageLink}
        />
        <label htmlFor="category">Categoria:</label>
        <Select
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map((uniqueCategory, i) => (
            <Select.option
              value={uniqueCategory}
              key={`${i}-${uniqueCategory}`}
            >
              {uniqueCategory}
            </Select.option>
          ))}
        </Select>
        <label htmlFor="description">Descripcion:</label>
        <Input
          onChange={e => setDescription(e.target.value)}
          type="text"
          name="description"
          id="description"
          defaultValue={description}
        />
        <div>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button type="primary" onClick={handleAplicar}>
            Aplicar
          </Button>
          <Button danger onClick={handleBorrar}>
            Borrar
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default EditPage

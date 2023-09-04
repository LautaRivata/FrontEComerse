import React from "react"
import { Header, Footer } from "../../components"
import { Button, Input, Select } from "antd"
import { useState } from "react"
import { useCategoriesStore } from "../../stores"
import "./styles.css"

const EditPage = (productProps = {}) => {
  const { title, text, imageLink, price, primarikey, category } = productProps
  const categories = useCategoriesStore(state => state.categories)
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [newCategoy, setNewCategory] = useState("")
  const [newImageLink, setNewImageLink] = useState("")

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
          defaultValue={title}
          onChange={e => setNewTitle(e.target.value)}
        />
        <label htmlFor="price">Precio:</label>
        <Input
          onChange={e => setNewPrice(e.target.value)}
          type="text"
          name="price"
          id="price"
          defaultValue={price}
        />
        <label htmlFor="imageLink">Link de Imagen:</label>
        <Input
          onChange={e => setNewImageLink(e.target.value)}
          type="text"
          name="imageLink"
          id="imageLink"
          defaultValue={imageLink}
        />
        <label htmlFor="category">Categoria:</label>
        <Select
          id="category"
          value={category}
          onChange={e => setNewCategory(e.target.value)}
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
          onChange={e => setNewDescription(e.target.value)}
          type="text"
          name="description"
          id="description"
          defaultValue={text}
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

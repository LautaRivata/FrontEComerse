import React from "react"
import { Button, Input, Select } from "antd"
import { notification } from "antd"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { CheckOutlined } from "@ant-design/icons"
import { editProduct, sleep } from "../../utils"
import "./styles.css"

const openNotification = (titulo, mensageBack) =>
  notification.open({
    message: `${mensageBack}`,
    description: titulo,
    placement: "topLeft",
    icon: <CheckOutlined style={{ color: "green" }} />,
  })

const EditProduct = prop => {
  const [pk, setPk] = useState(prop.pk)
  const [title, setTitle] = useState(prop.title)
  const [description, setDescription] = useState(prop.description)
  const [price, setPrice] = useState(prop.price)
  const [category, setCategory] = useState(prop.category)
  const [imageLink, setImageLink] = useState(prop.image)
  const idProduct = useParams().id
  const categories = prop.categories
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(`/`)
  }

  const handleAplicar = async () => {
    const body = {
      id: pk,
      title,
      price,
      description,
      image: imageLink,
      category,
    }
    const response = await editProduct(body, "PUT")
    openNotification("Aplicar", response.message)
  }

  const handleBorrar = async () => {
    const body = {
      id: pk,
    }
    const response = await editProduct(body, "DELETE")
    openNotification("Borrar", response.message)
    sleep(1000)
    navigate(`/`)
  }

  const handleAgregar = async () => {
    const body = {
      title,
      price,
      description,
      image: imageLink,
      category,
    }
    const response = await editProduct(body, "POST")
    openNotification("Agregar", response.message)
  }

  return (
    <div>
      <br />
      <h3>Formulario de Registro:</h3>
      <hr />
      <br />
      <section className="registerMain">
        <label htmlFor="title">Titulo:</label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="price">Precio:</label>
        <Input
          onChange={e => setPrice(e.target.value)}
          type="text"
          id="price"
          defaultValue={price}
        />
        <label htmlFor="imageLink">Link de Imagen:</label>
        <Input
          onChange={e => setImageLink(e.target.value)}
          type="text"
          id="imageLink"
          value={imageLink}
        />
        <label htmlFor="category">Categoria:</label>

        <Select
          id="category"
          defaultValue={category}
          onChange={e => setCategory(e)}
          options={categories.map(item => ({
            value: item,
            label: item,
          }))}
        />

        <label htmlFor="description">Descripcion:</label>
        <Input
          onChange={e => setDescription(e.target.value)}
          type="text"
          id="description"
          defaultValue={description}
        />
        <div className="botonera">
          <Button onClick={handleCancel}>Cancelar</Button>
          &nbsp;
          {idProduct ? (
            <div>
              <Button type="primary" onClick={handleAplicar}>
                Aplicar
              </Button>
              &nbsp;
              <Button danger onClick={handleBorrar}>
                Borrar
              </Button>
            </div>
          ) : (
            <Button type="primary" onClick={handleAgregar}>
              Agregar Producto
            </Button>
          )}
        </div>
      </section>
    </div>
  )
}

export default EditProduct

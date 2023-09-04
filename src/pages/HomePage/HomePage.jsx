import { useState, useEffect } from "react"
import { Cart, Products, Header, Footer } from "../../components"
import { useOrderMutation, useProductosQuery } from "../../hooks"
import { useCartStore, useCategoriesStore } from "../../stores"
import { Button, Drawer } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { addFilters } from "../../utils"
import "./styles.css"

function HomePage() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [isSort, setIsSort] = useState(false)
  const [category, setCategory] = useState("")
  const { categories, products, isLoading } = useProductosQuery()
  const [isShow, setIsShow] = useState(false)
  const { createOrder } = useOrderMutation()
  const orderProducts = useCartStore(state => state.products)
  const accionsCategory = useCategoriesStore(state => state.addCategories)

  useEffect(() => {
    accionsCategory(categories)
  }, [categories])

  return (
    <div className="contenedor">
      <Header></Header>
      <br />
      <section className="main">
        <Drawer
          title={
            <div className="div-comprar">
              <Button onClick={() => createOrder({ order: orderProducts })}>
                Comprar
              </Button>
              <p>Tus Productos</p>
            </div>
          }
          onClose={() => setIsShow(false)}
          open={isShow}
        >
          <Cart />
        </Drawer>

        <nav className="search-bar-grid">
          <h3>Buscar por:</h3>

          <div className="search-input">
            <label htmlFor="nombre">Nombre:</label>
            <input
              id="nombre"
              type="text"
              onChange={e => setTitle(e.target.value.toLowerCase())}
            />
          </div>

          <div className="search-input">
            <label htmlFor="precio">Precio mínimo:</label>
            <input
              id="precio"
              type="number"
              onChange={e => setPrice(e.target.valueAsNumber || 0)}
            />
          </div>

          <div className="search-input">
            <label htmlFor="categoria">Categoría:</label>
            <select
              id="categoria"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">-</option>

              {categories.map((uniqueCategory, i) => (
                <option value={uniqueCategory} key={`${i}-${uniqueCategory}`}>
                  {uniqueCategory}
                </option>
              ))}
            </select>
          </div>

          <div className="search-input">
            <label htmlFor="ordenar">
              Ordenar:
              <input
                id="ordenar"
                type="checkbox"
                defaultChecked={false}
                onClick={e => setIsSort(e.currentTarget.checked)}
              />
            </label>
          </div>

          <div>
            <Button type="primary" size="large" onClick={() => setIsShow(true)}>
              <ShoppingCartOutlined />
            </Button>
          </div>
        </nav>

        {isLoading ? (
          <span>cargando...</span>
        ) : (
          <Products
            products={addFilters(products, { price, category, title, isSort })}
          />
        )}
      </section>
      <Footer />
    </div>
  )
}

export default HomePage

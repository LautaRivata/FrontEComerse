import React from "react"
import { Header, Footer, EditProduct } from "../../components"
import { useParams } from "react-router-dom"
import { useProductosQuery } from "../../hooks"
import { useUserStore } from "../../stores"
import "./styles.css"

const EditPage = () => {
  const { usergerarquia } = useUserStore(state => state.userSecion)
  const { products, categories } = useProductosQuery()
  const idProduct = useParams().id
  const foundProduct = products.find(product => product.id == idProduct) || {}
  let autorizado
  if (usergerarquia > 90) {
    autorizado = true
  } else {
    autorizado = false
  }

  return (
    <div className="register">
      <Header />
      {autorizado ? (
        <EditProduct
          pk={foundProduct.id}
          title={foundProduct.title}
          price={foundProduct.price}
          description={foundProduct.description}
          category={foundProduct.category}
          image={foundProduct.image}
          categories={categories}
        />
      ) : (
        <h3>UnAuthorized</h3>
      )}
      <Footer />
    </div>
  )
}

export default EditPage

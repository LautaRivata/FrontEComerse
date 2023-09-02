import { useQuery } from "@tanstack/react-query"
import axios from "axios"
/*aca es donde tengo que mandar el axios a https://fakestoreapi.com/products si quisiera hacerlo directo*/
const getProducts = () => axios.get("/api/products").then(({ data }) => data)

const useProductosQuery = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })

  const categories = [...new Set(products.map(product => product.category))]
  const maxPrice = Math.max(...products.map(product => product.price))
  const minPrice = Math.min(...products.map(product => product.price))

  return { categories, isLoading, products, maxPrice, minPrice }
}
export default useProductosQuery

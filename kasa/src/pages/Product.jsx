import { useParams } from 'react-router-dom'
import products from '../dataContext/data.json'

export function Product() {
  console.log(products)

  const { productId } = useParams()

  const product = products.find((product) => product.id === productId)
  const { title, location, rating, host, equipments, description, pictures } =
    product
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

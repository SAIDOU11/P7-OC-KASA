import { useParams } from 'react-router-dom'
import products from '../dataContext/data.json'

export function Product() {
  const { productId } = useParams()

  const product = products.find((product) => product.id === productId)
  const { description, location } = product

  return (
    <div>
      <h1>{description}</h1>

      <p>{location}</p>
    </div>
  )
}

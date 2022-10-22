import { useParams } from 'react-router-dom'
import products from '../dataContext/data.json'
import { ImageSlider } from '../components/ImageSlider'

export function Product() {
  const { productId } = useParams()

  const product = products.find((product) => product.id === productId)
  const { title, location, rating, host, equipments, description, pictures } =
    product
  return (
    <div>
      <ImageSlider slides={pictures} />
      <h1>Page Product</h1>
    </div>
  )
}

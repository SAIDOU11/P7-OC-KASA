import { useParams } from 'react-router-dom'
import products from '../dataContext/data.json'
import { ImageSlider } from '../components/ImageSlider'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import Host from '../components/Host'

export function Product() {
  const { productId } = useParams()

  const product = products.find((product) => product.id === productId)
  const { title, location, rating, host, equipments, description, pictures } =
    product
  return (
    <div>
      <ImageSlider slides={pictures} />
      <div className="product">
        <div className="info">
          <h1>{title}</h1>
          <p>{location}</p>
          <div className="tags">
            {product.tags.map((tag, index) => (
              <Tag key={index} useTag={tag} />
            ))}
          </div>
        </div>

        <div className="Right">
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  )
}

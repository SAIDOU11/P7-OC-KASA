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
    <div className="product">
      <ImageSlider slides={pictures} />
      <div className="product__container">
        <div className="product__info">
          <h1 className="product__title">{title}</h1>
          <p className="product__paragraph">{location}</p>
          <div className="product__tags">
            {product.tags.map((tag, index) => (
              <Tag key={index} useTag={tag} />
            ))}
          </div>
        </div>

        <div className="product__hostRating">
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  )
}

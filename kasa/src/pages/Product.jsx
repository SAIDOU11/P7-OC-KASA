import { useParams } from 'react-router-dom'
import products from '../dataContext/data.json'
import { ImageSlider } from '../components/ImageSlider'

export function Product() {
  const { productId } = useParams()

  const product = products.find((product) => product.id === productId)
  const {
    title,
    location,
    rating,
    host,
    tags,
    equipments,
    description,
    pictures,
  } = product
  return (
    <div>
      <ImageSlider slides={pictures} />
      <div className="product">
        <div className="info">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <div className="host">
          <p className="host__name">{host.name}</p>
          <img src={host.picture} alt="profile" className="host__profile"></img>
        </div>
      </div>
    </div>
  )
}

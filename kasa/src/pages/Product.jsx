import { useParams } from 'react'
import products from '../context/data'

export function Product() {
  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)
  console.log(product)
  // const { title, location, rating, host, equipments, description, pictures } =
  //   product
  // return (
  //   <div>
  //     <img src={pictures} alt={title} />

  //     <h2>{title}</h2>
  //     <p>{location}</p>

  //     <p>{rating}</p>
  //     <p>{host}</p>

  //     <p>{description}</p>
  //     <p>{equipments}</p>
  //   </div>
  // )
}

import { useParams } from 'react-router-dom'
import products from '../dataContext/data.json'

export function Product() {
  console.log(products)

  const { productId } = useParams()

  const product = products.find((product) => product.id === productId)

  return (
    <div>
      <h1>Page Produit unique 1️⃣</h1>

      <p>Produit</p>
    </div>
  )
}

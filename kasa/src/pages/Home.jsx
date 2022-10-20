import { Link } from 'react-router-dom'
import products from '../dataContext/data.json'

import Thumb from '../components/Thumb'

export function Home() {
  return (
    <div className="home-page">
      <div className="banner-image">
        <div className="banner-image__container ">
          <h1 className="banner-image__text">Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <div>
        <section className="bcgGray home-page__grid">
          {products.map((product) => {
            return (
              <article key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <Thumb cover={product.cover} title={product.title} />
                </Link>
              </article>
            )
          })}
        </section>
      </div>
    </div>
  )
}
//  {products[0].title}

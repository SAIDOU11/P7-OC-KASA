import RedStar from '../images/RedStar.png'
import GreyStar from '../images/GreyStar.png'

export default function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__star"
            src={RedStar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__star"
            src={GreyStar}
            alt=""
          />
        )
      )}
    </div>
  )
}

import { useState } from 'react'

export function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="ImageSlider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={index === currentIndex ? 'StyleSlide ' : ' StyleSlide'}
          >
            {index === currentIndex && (
              <img src={picture} alt="" className="picture" />
            )}
          </div>
        )
      })}
    </div>
  )
}

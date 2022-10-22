import { useState } from 'react'
import LeftArrow from '../images/LeftArrow.png'
import RightArrow from '../images/RightArrow.png'

export function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = slides.length

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="ImageSlider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === currentIndex
                ? 'ImageSlider__Active '
                : ' ImageSlider__Inactive'
            }
          >
            {index === currentIndex && (
              <img src={picture} alt="" className="ImageSlider__picture" />
            )}
          </div>
        )
      })}
      {length > 1 ? (
        <>
          <div className="previousStyle" onClick={goToPrevious}>
            <img src={LeftArrow} alt="" className="previousStyle__previous" />
          </div>
          <div className="nextStyle" onClick={goToNext}>
            <img src={RightArrow} alt="" className="nextStyle__next" />
          </div>
        </>
      ) : null}
    </div>
  )
}

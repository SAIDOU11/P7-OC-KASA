import { useState } from 'react'

export default function ServiceCollaps() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="collapsible ">
      <button
        type="button"
        className="collapsible__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Service
        <p className={isOpen ? 'collapsible__arrow' : 'collapsible__rotate'}>
          &lt;
        </p>
      </button>
      {isOpen && (
        <div className="collapsible__container-about">
          <p className="collapsible__text">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>
      )}
    </div>
  )
}

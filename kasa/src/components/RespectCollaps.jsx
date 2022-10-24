import { useState } from 'react'

export default function RespectCollaps() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="collapsible ">
      <button
        type="button"
        className="collapsible__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Respect
        <p className={isOpen ? 'collapsible__arrow' : 'collapsible__rotate'}>
          &lt;
        </p>
      </button>
      {isOpen && (
        <div className="collapsible__container-about">
          <p className="collapsible__text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      )}
    </div>
  )
}

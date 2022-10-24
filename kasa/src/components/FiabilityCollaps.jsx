import { useState } from 'react'

export default function FiabilityCollaps() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="collapsible ">
      <button
        type="button"
        className="collapsible__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Fiabilité
        <p className={isOpen ? 'collapsible__arrow' : 'collapsible__rotate'}>
          &lt;
        </p>
      </button>
      {isOpen && (
        <div className="collapsible__container-about">
          <p className="collapsible__text">???</p>
        </div>
      )}
    </div>
  )
}

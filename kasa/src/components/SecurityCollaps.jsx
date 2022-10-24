import { useState } from 'react'

export default function SecurityCollaps() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="collapsible ">
      <button
        type="button"
        className="collapsible__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sécurité
        <p className={isOpen ? 'collapsible__arrow' : 'collapsible__rotate'}>
          &lt;
        </p>
      </button>
      {isOpen && (
        <div className="collapsible__container-about">
          <p className="collapsible__text">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      )}
    </div>
  )
}

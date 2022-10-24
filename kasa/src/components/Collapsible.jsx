import { useState } from 'react'

export default function Collapsible({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="collapsible ">
      <button
        type="button"
        className="collapsible__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <p className={isOpen ? 'collapsible__arrow' : 'collapsible__rotate'}>
          &lt;
        </p>
      </button>
      {isOpen && (
        <div className="collapsible__container">
          {Array.isArray(content) ? (
            <ul className="collapsible__list">
              {content.map((equipment, index) => (
                <li key={index} className="collapsible__list-element">
                  {equipment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="collapsible__text">{content}</p>
          )}
        </div>
      )}
    </div>
  )
}

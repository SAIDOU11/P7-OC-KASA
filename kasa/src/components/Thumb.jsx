export default function Thumb({ cover, title }) {
  return (
    <div className="thumb">
      <img src={cover} alt="cover product" className="thumb__image" />
      <div className="thumb__covert"></div>
      <h2 className="thumb__title">{title}</h2>
    </div>
  )
}

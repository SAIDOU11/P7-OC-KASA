export default function Thumb({ cover, title }) {
  return (
    <div className="thumb">
      {/* <img src={cover} alt="cover product" className="image" /> */}
      <div className="covert"></div>
      <h2 className="title">{title}</h2>
    </div>
  )
}
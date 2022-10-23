export default function Host({ host }) {
  const isHostSplited = host.name.split(' ')
  const [name, lastname] = isHostSplited

  return (
    <div className="host">
      <div className="fullName">
        <p className="firstName">{name.trim()}</p>
        <p className="lastName">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="picture" />
    </div>
  )
}

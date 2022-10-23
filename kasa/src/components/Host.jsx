export default function Host({ host }) {
  const isHostSplited = host.name.split(' ')
  const [name, lastname] = isHostSplited

  return (
    <div className="host">
      <div className="host__fullName">
        <p className="host__firstName">{name.trim()}</p>
        <p className="host__lastName">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="host__picture" />
    </div>
  )
}

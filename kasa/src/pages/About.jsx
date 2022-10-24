import FiabilityCollaps from '../components/FiabilityCollaps'
import RespectCollaps from '../components/RespectCollaps'
import ServiceCollaps from '../components/ServiceCollaps'
import SecurityCollaps from '../components/SecurityCollaps'

export function About() {
  return (
    <div className="about-page">
      <div className="container-about">
        <div className="container-about__image "></div>
      </div>
      <div className="collaps-items">
        <FiabilityCollaps />
        <RespectCollaps />
        <ServiceCollaps />
        <SecurityCollaps />
      </div>
    </div>
  )
}

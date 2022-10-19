import FOOTERLOGO from '../images/LOGO-FOOTER.png'

export default function Footer() {
  const momentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <img src={FOOTERLOGO} alt="Footer logo" className="footer__logo"></img>
      <p className="footer__paragraph">
        © {momentYear} Kasa. All rights reserved
      </p>
    </footer>
  )
}

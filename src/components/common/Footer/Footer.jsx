import './Footer.css'

function Footer() {
  return (
    <footer className="kns-footer">
      <p>
        © {new Date().getFullYear()} KNS Infra. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <small>© {year} Eslam. All rights reserved.</small>
      </div>
    </footer>
  )
}

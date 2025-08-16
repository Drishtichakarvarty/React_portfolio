export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Drishti Creative CV. All rights reserved.</p>
        <a href="#hero" className="back-to-top">↑ Back to Top</a>
      </div>
    </footer>
  );
}

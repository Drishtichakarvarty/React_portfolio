export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img
          src="/profile.jpeg"   // place your image in public/profile.jpg
          alt="Drishti"
          className="profile-pic"
        />
        <h2>Drishti</h2>
        <p className="role">Web Designer</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Hire Me</a>
          <a href="/resume.jpeg" className="btn outline" download>
            Download CV
          </a>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  );
}

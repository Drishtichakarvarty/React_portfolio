export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2>Contact Me</h2>
      
      <div className="contact-content">
        {/* Left side: info */}
        <div className="contact-info">
          <p><strong>Email:</strong> dchakarvarty70@gmail.com</p>
          <p><strong>Phone:</strong> +91-9354574304</p>
          <p><strong>Location:</strong> Noida, India</p>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Right side: form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

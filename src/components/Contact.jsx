// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p><strong>Email:</strong> drishti@gmail.com</p>
          <p><strong>Phone:</strong> +91-1234567895</p>
          <p><strong>Location:</strong> Delhi, India</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/*  Form with backend connection */}
        <form
          className="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = {
              name: e.target[0].value,
              email: e.target[1].value,
              message: e.target[2].value,
            };

            await fetch("http://localhost:5000/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });

            alert("Message sent!");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

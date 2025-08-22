export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio container">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/project-1.jpg" alt="Project 1" />
          <h3>Personal Portfolio</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
        <div className="portfolio-item">
          <img src="/project-2.jpg" alt="Project 2" />
          <h3>Blog Website</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className="portfolio-item">
          <img src="/project-3.jpg" alt="Project 3" />
          <h3>E-Commerce Site</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}

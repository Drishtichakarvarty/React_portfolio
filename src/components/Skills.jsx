export default function Skills() {
  return (
    <section id="skills" className="skills container">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <h3>HTML</h3>
          <div className="bar">
            <div className="progress html"></div>
          </div>
        </div>
        <div className="skill">
          <h3>CSS</h3>
          <div className="bar">
            <div className="progress css"></div>
          </div>
        </div>
        
        <div className="skill">
          <h3>JavaScript</h3>
          <div className="bar">
            <div className="progress js"></div>
          </div>
        </div>

        <div className="skill">
          <h3>React</h3>
          <div className="bar">
            <div className="progress react"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

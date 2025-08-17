export default function About() {
  return (
    <section className="grid" style={{ gap: 24 }}>
      <div className="card">
        <h2 style={{ marginBottom: 8 }}>About Me</h2>
        <p className="about-description">
    Frontend Developer passionate about C++, Bootstrap, Tailwind, React, Next.js, and more. I focus on mobile-first design, attention to detail, and creating great user experiences. Graduated from Faculty of Arts, Turkish Language Department, Cairo University, 2021.
  </p>
  <div className="skills-list">
    <h2 style={{ marginTop: 8 }}>Skills:</h2>
    <ul>
      <li>Presentation skills and communication skills</li>
      <li>Decision maker and creative thinking</li>
      <li>Business ethics and personal skills</li>
      <li>Ambitious and very interested in my career</li>
      <li>Quick learning ability</li>
      <li>Active listening, display quick wit and maintain objectivity</li>
      <li>The ability to quickly persuade</li>
      <li>Commitment to teamwork</li>
      <li>Problem-solving and decision-making skills</li>
    </ul>
  </div>
      </div>
      <div className="card">
        <h3 style={{ marginBottom: 8 }}>Technical Skills</h3>
        <ul style={{ lineHeight: 1.9 }}>
          <li>React, Next.js, React Router</li>
          <li>CSS, Tailwind / Bootstrap</li>
          <li>Prisma, PostgreSQL</li>
        </ul>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="grid" style={{ gap: 24 }}>
      <div className="card">
        <h2 style={{ marginBottom: 8 }}>About Me</h2>
        <p style={{ color: "var(--muted)" }}>
          Frontend Developer passionate about React, Next.js, and
          . I focus on mobile-first design, attention to detail, and
          creating great user experiences.
        </p>
      </div>
      <div className="card">
        <h3 style={{ marginBottom: 8 }}>Skills</h3>
        <ul style={{ lineHeight: 1.9 }}>
          <li>React, Next.js, React Router</li>
          <li>CSS, Tailwind / Bootstrap</li>
          <li>Prisma, PostgreSQL</li>
        </ul>
      </div>
    </section>
  );
}

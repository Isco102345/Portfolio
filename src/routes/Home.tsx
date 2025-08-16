import { Link } from "react-router-dom";
import profilePic from "../assets/Eslam.jpeg";

export default function Home() {
  return (
    <section className="hero">

      <div className="hero-left">
        <div className="hero-text">
          <h1>Hi, I’m Eslam — Frontend Developer</h1>
          <p>
            I have built projects using React, Next.js, Prisma, and Postgres. I’m
            passionate about clean UI and mobile-first design.
          </p>
        </div>

        <div className="hero-cta">
          <Link to="/projects" className="btn accent">
            View Projects
          </Link>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
          <a
            href="/Eslam Ashraf Shafiek CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn cv"
          >
            Download CV
          </a>
        </div>

        <div className="card">
          <h3 className="latest-news-title">Latest News</h3>
          <ul className="latest-news-list">
            <li>Currently working on an Admin Dashboard for a Media Center.</li>
            <li>Migrated a CRUD project to Next.js API Routes.</li>
          </ul>
        </div>
      </div>

      <div className="hero-right">
        <img src={profilePic} alt="Eslam" />
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import profilePic from "../assets/WhatsApp Image 2025-08-17 at 12.32.01 PM.jpeg";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-text">
          <h1>Hi, I’m Eslam — Frontend Developer</h1>
          <p>
            I have built projects using React, Next.js, Prisma, and Postgres.
            I’m passionate about clean UI and mobile-first design.
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
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn cv"
          >
            Download CV
          </a>
        </div>

        <div className="card">
          <h3 className="latest-news-title">Current Projects</h3>
          <ul className="latest-news-list">
            <li>
              Developed a full-stack E-commerce website using Laravel 12 and
              MySQL.
            </li>
            <li>Built an Admin Dashboard for product and order management.</li>
            <li>
              Implemented user authentication, shopping cart, and wishlist
              functionality.
            </li>
            <li>Developed CRUD operations for managing products and orders.</li>
          </ul>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-container">
          <img src={profilePic} alt="Eslam" className="profile-img" />
        </div>
      </div>
    </section>
  );
}

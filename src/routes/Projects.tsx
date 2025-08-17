import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects, TAGS } from "../data/projects";
import cls from "classnames";
import "../App.css";

export default function Projects() {
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Quick filter by technology:</p>
      <div className="filters">
        <button
          className={cls("btn", { accent: active === "All" })}
          onClick={() => setActive("All")}
        >
          All
        </button>
        {TAGS.map((tag) => (
          <button
            key={tag}
            className={cls("btn", { accent: active === tag })}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

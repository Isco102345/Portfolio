import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <h3 style={{marginBottom:6}}>{project.title}</h3>
      <p style={{color:'var(--muted)', marginBottom:10}}>{project.description}</p>
      <div style={{marginBottom:12}}>
        {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <div style={{display:'flex', gap:8}}>
        {project.url && <a className="btn accent" href={project.url} target="_blank" rel="noreferrer">Live</a>}
        {project.github && <a className="btn" href={project.github} target="_blank" rel="noreferrer">Code</a>}
      </div>
    </article>
  )
}

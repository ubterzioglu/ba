import type { Project } from '../types/content';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.name} görseli`}
          loading="lazy"
          className="mb-4 aspect-video w-full rounded-lg object-cover"
        />
      )}
      <h3 className="text-lg font-bold text-primary">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm text-dark/70">{project.summary}</p>

      {project.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-light px-3 py-1 text-xs font-medium text-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:underline"
        >
          Daha fazla →
        </a>
      )}
    </article>
  );
}

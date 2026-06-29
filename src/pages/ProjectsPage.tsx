import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projeler"
        description="Burak Akçakanat'ın projeleri ve girişimleri — CorteQS dahil."
        path="/projects"
      />
      <PageHeader
        title="Projeler"
        subtitle="Üzerinde çalıştığım girişimler ve dijital ekosistemler."
      />

      <div className="mx-auto max-w-6xl px-4 py-16">
        {projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-dark/60">Yakında projeler eklenecek.</p>
        )}
      </div>
    </>
  );
}

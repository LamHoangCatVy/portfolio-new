// src/pages/Projects.jsx
import Layout from "../layout/Layout";
import portfolio from "../data/portfolio.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="text-gray-400">What I’ve been building recently</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.projects?.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Layout>
  );
}

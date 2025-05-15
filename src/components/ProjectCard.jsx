export default function ProjectCard({ title, description, stack, img, link }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition text-left flex flex-col">
      {/* Image */}
      <img src={img} alt={title} className="h-40 w-full object-cover" />

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 text-xs font-medium text-blue-700 mb-4">
          {stack?.map((tech) => (
            <span key={tech} className="bg-blue-100 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Visit link */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition mt-auto"
          >
            Visit Project →
          </a>
        ) : (
          <div className="text-xs text-gray-400 italic mt-auto">No link available</div>
        )}
      </div>
    </div>
  );
}

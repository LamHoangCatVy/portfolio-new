import Layout from "../layout/Layout";
import portfolio from "../data/portfolio.json";

export default function About() {
  const { about } = portfolio;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-2">About Me</h1>

        <p className="text-gray-300 text-lg">{about.bio}</p>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">✨ Core Values</h2>
          <ul className="list-disc pl-5 text-gray-400 space-y-1">
            {about.values.map((val) => (
              <li key={val}>{val}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">🎓 Education</h2>
          <ul className="text-gray-400 space-y-1">
            {about.education.map((edu) => (
              <li key={edu.degree}>
                <strong>{edu.degree}</strong> – {edu.school} ({edu.year})
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">🧩 Interests</h2>
          <div className="flex flex-wrap gap-2">
            {about.interests.map((item) => (
              <span key={item} className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-200">
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

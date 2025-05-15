import Layout from "../layout/Layout";
import portfolio from "../data/portfolio.json";

export default function Contact() {
  const { contact } = portfolio;

  return (
    <Layout>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Contact Me</h1>

        <p className="text-gray-300">{contact.note}</p>

        <div className="text-gray-400 space-y-1">
          <p>📬 Email: <a href={`mailto:${contact.email}`} className="text-blue-400 hover:underline">{contact.email}</a></p>
          <p>📍 Location: {contact.location}</p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <a href={contact.links.github} target="_blank" rel="noreferrer" className="text-sm text-blue-500 hover:underline">
            GitHub
          </a>
          <a href={contact.links.linkedin} target="_blank" rel="noreferrer" className="text-sm text-blue-500 hover:underline">
            LinkedIn
          </a>
        </div>

        {/* Optional form */}
        <form className="mt-6 text-left space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-800 text-white" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-2 rounded bg-gray-800 text-white" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
}

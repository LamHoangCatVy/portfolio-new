export default function Hero({ data }) {
    if (!data) return null;
  
    return (
      <section className="text-center flex flex-col items-center gap-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-28 h-28 rounded-full border-4 border-blue-600 shadow"
        />
        <h1 className="text-4xl font-bold">{`Hi, I'm ${data.name} 👋`}</h1>
        <p className="text-gray-300 text-lg max-w-2xl">{data.subtitle}</p>
  
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {data.tags?.map((tag) => (
            <span key={tag} className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
  
        <a
          href={data.cta.link}
          className="mt-5 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {data.cta.label}
        </a>
      </section>
    );
  }
  
import Layout from "../layout/Layout";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Clock from "../components/Clock";
import portfolio from "../data/portfolio.json";

export default function Home() {
  const { hero, highlights, clock } = portfolio;

  return (
    <Layout>
      <div className="flex flex-col items-center gap-10">
        <Hero data={hero} />
        <Highlights items={highlights} />
        {clock?.show && <Clock timezone={clock.timezone} />}
      </div>
    </Layout>
  );
}

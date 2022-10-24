import Head from "next/head";
import Hero from "../components/home/Hero";
import Choose from "../components/home/Choose";
import Offer from "../components/home/Offer";
import VisaService from "../components/home/VisaService";
import Counter from "../components/home/Counter";
import Review from "../components/home/Review";
import Team from "../components/home/Team";

const Home = () => {
  return (
    <div className="landing_page">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="International visa and job portal." />
      </Head>
      <Hero />
      <Offer />
      <Choose />
      <VisaService />
      <Counter />
      <Review />

      <Team />
    </div>
  );
};

export default Home;

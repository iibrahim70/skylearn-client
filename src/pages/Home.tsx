import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import HistoryOfSchool from "@/components/HistoryOfSchool";

const Home = () => {
  return (
    <main className="py-20 space-y-20">
      <Hero />
      <AboutUs />
      <HistoryOfSchool />
    </main>
  );
};

export default Home;

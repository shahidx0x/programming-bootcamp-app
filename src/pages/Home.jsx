import { EventsCard } from "@/components/EventsCard";
import { Hero } from "@/components/Hero";
import { config } from "@/utils/config";

const Home = () => {
  console.log(config.server_path);
  return (
    <div>
      <Hero />
      <EventsCard />
    </div>
  );
};

export default Home;

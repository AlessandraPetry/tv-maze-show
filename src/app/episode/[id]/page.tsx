import { CardInfos } from "@/components/CardInfos";
import GoBackButton from "@/components/GoBackButton";

const EpisodeDetailsPage = () => {
  const episodeInfos = {
    id: 657308,
    name: "Escape from Monster Island",
    season: 1,
    number: 1,
    image:
      "https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg",
    description:
      "The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"",
  };
  return (
    <div className="min-h-screen p-5 sm:p-10 lg:p-20">
      <main className="flex flex-col row-start-2 items-start">
        <div className="my-8 md:mb-8">
          <GoBackButton withText />
        </div>
        <CardInfos
          description={episodeInfos.description}
          imageSrc={episodeInfos.image}
          title={episodeInfos.name}
        />
      </main>
    </div>
  );
};

export default EpisodeDetailsPage;

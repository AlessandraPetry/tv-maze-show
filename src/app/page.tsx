"use client";

import { CardInfos } from "@/components/CardInfos";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedSeason, setSelectedSeason] = useState(1);

  const show = {
    name: "The Powerpuff Girls",
    description:
      "The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"",
    image:
      "https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg",
  };

  const episodeList = [
    {
      id: 657308,
      name: "Escape from Monster Island",
      season: 1,
      number: 1,
    },
    {
      id: 657309,
      name: "Crash Course",
      season: 1,
      number: 2,
    },
    {
      id: 657310,
      name: "New Beginning",
      season: 2,
      number: 1,
    },
  ];

  const separatedEpisodes = episodeList.reduce((acc, episode) => {
    const { season } = episode;
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(episode);
    return acc;
  }, {} as Record<number, typeof episodeList>);

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeason(Number(event.target.value));
  };

  return (
    <div className="min-h-screen p-5 sm:p-10 lg:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CardInfos
          description={show.description}
          imageSrc={show.image}
          title={show.name}
        />

        <div className="flex flex-col bg-white border-l border-t border-[#efefef] rounded-3xl shadow-[2px_2px_40px_#dadada] p-16 w-full">
          <div className="flex flex-col justify-between content-center lg:flex-row">
            <h2 className="text-2xl font-extrabold">Episodes:</h2>

            <select
              id="season-select"
              value={selectedSeason}
              onChange={handleSeasonChange}
              className="mt-6 p-3 border border-gray-400 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 md:w-2/4 lg:w-3/12 lg:mt-0"
            >
              {Object.keys(separatedEpisodes).map((season) => (
                <option key={season} value={season}>
                  Season {season}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <ul className="list-disc pl-5 mt-4 space-y-2 ">
              {separatedEpisodes[selectedSeason]?.map((episode) => (
                <li
                  key={episode.id}
                  className="hover:underline leading-6 visited:text-purple-500"
                >
                  <Link href={`/episode/${episode.id}`} passHref>
                    <b>Episode {episode.number}:</b> {episode.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

import { useStoreProvider } from "@/app/providers/store-provider";

const EpidodesList = () => {
  const [selectedSeason, setSelectedSeason] = useState(1);

  const { getSeasonEpisodes } = useStoreProvider((state) => state);

  const seasonEpisodes = getSeasonEpisodes();

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeason(Number(event.target.value));
  };

  return (
    <div className="flex flex-col bg-white border-l border-t border-[#efefef] rounded-3xl shadow-[2px_2px_40px_#dadada] p-16 w-full">
      <div className="flex flex-col justify-between content-center lg:flex-row">
        <h2 className="text-2xl font-extrabold">Episodes:</h2>

        <select
          id="season-select"
          value={selectedSeason}
          onChange={handleSeasonChange}
          className="mt-6 p-3 border border-gray-400 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 md:w-2/4 lg:w-3/12 lg:mt-0"
        >
          {Object.keys(seasonEpisodes).map((season) => (
            <option key={season} value={season}>
              Season {season}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <ul className="list-disc pl-5 mt-4 space-y-2 ">
          {seasonEpisodes[selectedSeason]?.map((episode, index) => (
            <li
              key={episode.id}
              className="hover:underline leading-6 visited:text-purple-500"
            >
              <Link href={`/episode/${episode.id}`} passHref>
                <b>Episode {index + 1}:</b> {episode.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EpidodesList;

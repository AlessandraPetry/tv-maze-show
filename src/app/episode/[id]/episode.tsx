"use client";

import { useStoreProvider } from "@/app/providers/store-provider";
import { CardInfos } from "@/components/CardInfos";
import GoBackButton from "@/components/GoBackButton";
import { useFetchShow } from "@/hooks/useFetchShow";
import { useEffect } from "react";

const Episode = ({ episodeId }: { episodeId: number }) => {
  const { getEpisode, setEpisodes } = useStoreProvider((state) => state);
  const episodeInfos = getEpisode(episodeId);
  const { data } = useFetchShow(episodeInfos === undefined);

  useEffect(() => {
    if (data) {
      setEpisodes(data._embedded.episodes);
    }
  }, [data, setEpisodes]);

  if (episodeInfos === undefined) return null;

  return (
    <div className="min-h-screen p-5 sm:p-10 lg:p-20">
      <main className="flex flex-col row-start-2 items-start">
        <div className="my-8 md:mb-8">
          <GoBackButton withText />
        </div>
        <CardInfos
          description={episodeInfos.summary}
          imageSrc={episodeInfos.image.original}
          title={episodeInfos.name}
        />
      </main>
    </div>
  );
};

export default Episode;

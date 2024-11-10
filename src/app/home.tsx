"use client";

import { useEffect } from "react";

import { useStoreProvider } from "@/app/providers/store-provider";
import { CardInfos } from "@/components/CardInfos";
import { useFetchShow } from "@/hooks/useFetchShow";
import EpidodesList from "@/components/EpisodesList";

const Home = () => {
  const { data, error } = useFetchShow();

  const { setEpisodes, show, setShow } = useStoreProvider((state) => state);

  useEffect(() => {
    if (data) {
      setEpisodes(data._embedded.episodes);
      setShow(data);
    }
  }, [data, setEpisodes, setShow]);

  if (error instanceof Error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="min-h-screen p-5 sm:p-10 lg:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CardInfos
          description={show?.summary}
          imageSrc={show?.image.original}
          title={show?.name}
        />

        <EpidodesList />
      </main>
    </div>
  );
};

export default Home;

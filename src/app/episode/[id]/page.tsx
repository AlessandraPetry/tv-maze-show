import Episode from "./episode";

const EpisodeDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const episodeId = (await params).id;

  return <Episode episodeId={parseInt(episodeId)} />;
};

export default EpisodeDetailsPage;

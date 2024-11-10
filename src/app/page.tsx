import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { fetchShow } from "@/hooks/useFetchShow";
import Home from "./home";

export default async function HomePage() {
  // Prefetch with React Query on server side. React Query will cache the data
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["show"],
    queryFn: fetchShow,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}

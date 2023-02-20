import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { QueryClient, useQuery, dehydrate } from "react-query";

import { Slugs } from "../mappers";
import type * as Types from "../types";

const fetchSlugs = async (id: string) => {
  const data = await axios
    .get(
      `https://comfi-blog-70fa24.ingress-daribow.ewp.live/wp-json/wp/v2/posts/?slug=${id}`
    )
    .then((res) => res.data);

  const slug = Slugs(data);

  return slug[0];
};

const useSlugs = ({ slug }: { slug: string }) => {
  return useQuery<Types.SlugData.Slug, any, Types.SlugData.Slug>(
    ["slug", slug],
    // @ts-ignore
    () => fetchSlugs(slug),
    {}
  );
};

export default useSlugs;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<Types.SlugData.Slug>(
    ["slug", slug],
    () => fetchSlugs(slug)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

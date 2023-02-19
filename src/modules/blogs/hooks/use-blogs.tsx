import axios from "axios";
import { dehydrate, QueryClient, useQuery } from "react-query";

import { Blogs } from "../mappers";
import type * as Types from "../types";

const fetchBlogs = async () => {
  const data = await axios
    .get(
      `https://comfi-blog-70fa24.ingress-daribow.ewp.live/wp-json/wp/v2/posts?orderby=date&status=publish&per_page=100`
    )
    .then((res) => res.data);

  const blogs = Blogs(data);

  return blogs;
};

const useBlogs = (per_page: number) => {
  return useQuery<Types.BlogsData.Blogs[], any, Types.BlogsData.Blogs[]>(
    ["blogs", "list"],
    fetchBlogs,
    {}
  );
};

export default useBlogs;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<Types.BlogsData.Blogs[]>(
    ["blogs", "list"],
    fetchBlogs
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

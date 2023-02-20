import axios from "axios";
import { QueryClient, useQuery, dehydrate } from "react-query";

import { Filters } from "../mappers";
import type * as Types from "../types";

const fetchBlogs = async () => {
  const data = await axios
    .get(
      `https://comfi-blog-70fa24.ingress-daribow.ewp.live/wp-json/wp/v2/categories?per_page=100&hide_empty=true&exclude=100`
    )
    .then((res) => res.data);
  const filters = Filters(data);

  return filters;
};
const useFilters = () => {
  return useQuery<Types.FilterData.Filters[], any, Types.FilterData.Filters[]>(
    ["filters", "list"],
    fetchBlogs,
    {}
  );
};

export default useFilters;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<Types.FilterData.Filters[]>(
    ["filters", "list"],
    fetchBlogs
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

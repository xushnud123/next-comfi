import axios from "axios";
import { useQuery } from "react-query";

import { Slugs } from "../mappers";
import type * as Types from "../types";

const useSlugs = ({ slug }: { slug: string }) => {
  const fetchSlugs = async ({ queryKey }: { queryKey: string[] }) => {
    const id = queryKey[1];
    const data = await axios
      .get(
        `https://comfi-blog-70fa24.ingress-daribow.ewp.live
/wp-json/wp/v2/posts/?slug=${id}`
      )
      .then((res) => res.data);

    const slug = Slugs(data);

    return slug[0];
  };

  return useQuery<any, any, Types.SlugData.Slug>(
    ["slug", slug],
    // @ts-ignore
    fetchSlugs,
    {}
  );
};

export default useSlugs;

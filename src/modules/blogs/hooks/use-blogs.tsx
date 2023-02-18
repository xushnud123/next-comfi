import axios from 'axios';
import { useQuery } from 'react-query';

import { Blogs } from '../mappers';
import type * as Types from '../types';

const useBlogs = (per_page: number) => {
  const fetchBlogs = async () => {
    const data = await axios
      .get(
        `https://comfi-blog-70fa24.ingress-daribow.ewp.live/wp-json/wp/v2/posts?orderby=date&status=publish&per_page=${per_page}`
      )
      .then(res => res.data);

    const blogs = Blogs(data);

    return blogs;
  };

  return useQuery<Types.BlogsData.Blogs[], any, Types.BlogsData.Blogs[]>(['blogs', 'list'], fetchBlogs, {});
};

export default useBlogs;

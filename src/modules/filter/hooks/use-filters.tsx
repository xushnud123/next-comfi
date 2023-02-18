import axios from 'axios';
import { useQuery } from 'react-query';

import { Filters } from '../mappers';
import type * as Types from '../types';

const useFilters = () => {
  const fetchBlogs = async () => {
    const data = await axios
      .get(`${process.env.REACT_APP_WP_BASE_URL}/wp-json/wp/v2/categories?per_page=100&hide_empty=true&exclude=1`)
      .then(res => res.data);
    const filters = Filters(data);

    return filters;
  };

  return useQuery<Types.FilterData.Filters[], any, Types.FilterData.Filters[]>(['Filters', 'list'], fetchBlogs, {});
};

export default useFilters;

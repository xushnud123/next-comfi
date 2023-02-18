import get from 'lodash/get';

import type * as Types from './types';

export const Filters = (data: any[]): Types.FilterData.Filters[] => {
  const filters = data.map(item => ({
    schema: get(item, 'yoast_head_json.schema', ''),
    name: get(item, 'name')
  }));

  return filters;
};

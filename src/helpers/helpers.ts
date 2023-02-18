import { AllMonth } from './constants';

export function SortDate(params: number) {
  return AllMonth[Number(params) - 1];
}

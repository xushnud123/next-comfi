import currency from 'currency.js';

export const format = (value: number) => currency(value, { precision: 0 }).format();

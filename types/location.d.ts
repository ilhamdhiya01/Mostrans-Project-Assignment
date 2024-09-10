type Info = {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
};

type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
};

type DataLocationRes = {
  info: Info;
  results: Array<Location>;
};

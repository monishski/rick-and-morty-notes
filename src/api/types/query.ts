export type Pagination<T> = {
  info: { count: number; pages: number; next: string; prev: string };
  results: T[];
};

export type PaginationQuery = { page: number };

export interface UseFetchingDatasUrl {
  url: string;
}

export interface UseFetchingDatasResult {
  loading: boolean;
  error: string;
  data: any[];
}

export interface UseFetchingItemResult {
  loading: boolean;
  error: string;
  data: any;
}

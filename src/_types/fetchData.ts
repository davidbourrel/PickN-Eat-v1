export interface FUseFetchingDataArgs {
  url: string;
}

export interface FUseFetchingDatasResult {
  loading: boolean;
  error: string;
  data: any[];
}

export interface FUseFetchingItemResult {
  loading: boolean;
  error: string;
  data: any;
}

export type HttpDefaultHeaders = 'JSON' | 'DATA' | 'TEXT_PLAIN';

export type HttpTypeRequest = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type HttpHeaders = {
  [x: string]: string | number | boolean;
};

export type Pagination = {
  limit: number;
  totalPages: number;
  totalItems: number;
  currentPage: number;
};

export type HttpResponse<T = unknown | unknown[]> = {
  data: T;
  code?: number;
  error: boolean;
  msgError?: string;
  pagination?: Pagination;
};

export type HttpParamsRequest<T = unknown, S = unknown> = {
  data?: T;
  config?: S;
  host: string;
  path: string;
  headers?: HttpHeaders;
  defaultHeader?: HttpDefaultHeaders;
  validations?: {
    msgError?: string;
    codeSuccess?: number;
    paramMsgError?: string;
    others?: (status: number, data: unknown) => void;
  };
};

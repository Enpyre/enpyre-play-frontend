import { AxiosRequestHeaders } from 'axios';

import { HttpDefaultHeaders } from '../http/types';

export const CUSTOM_HEADERS: {
  [Properties in HttpDefaultHeaders]: AxiosRequestHeaders;
} = {
  JSON: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  DATA: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
  TEXT_PLAIN: {
    Accept: '*/*',
    'Content-Type': 'text/plain',
  },
};

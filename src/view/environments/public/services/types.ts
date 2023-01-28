import { HttpResponse } from '@/infra/http/types';

export type ResponseGitHubLogin = {
  token: string;
  refresh: string;
};
export interface IPublicService {
  signInOnGitHub: ({
    code,
  }: {
    code: string;
  }) => Promise<HttpResponse<ResponseGitHubLogin>>;
}

import { ToFuncRequest } from '@/hooks/to-request';
import { ResponseSignIn } from '@/view/environments/public/services/auth/types';
import { Dispatch, ReactNode, SetStateAction } from 'react';

import { HttpResponse } from '../../infra/http';

export type Props = {
  children: ReactNode;
};

export type TokenAndRefresh = {
  token: string;
  refresh: string;
};

export type RefreshTokenResponse = {
  access: string;
  refresh: string;
};

export type ContextUser = {
  id?: string;
  code?: string;
  provider?: string;
  token?: TokenAndRefresh['token'];
  refresh?: TokenAndRefresh['refresh'];
};

export type UserResponse = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  picture: string;
};

export type AuthContextData = {
  logged: boolean;
  signOut: () => void;
  user: UserResponse | null;
  setUser: Dispatch<SetStateAction<UserResponse | null>>;
  signIn: (user: ContextUser) => Promise<
    | HttpResponse<ResponseSignIn>
    | {
        data: null;
        error: boolean;
        msgError: string;
      }
  >;
};

export interface IAuthServices {
  getDataProfile: ({
    signOut,
  }: ToFuncRequest) => Promise<HttpResponse<UserResponse>>;

  getRefreshToken: (
    refreshToken: string,
  ) => Promise<HttpResponse<RefreshTokenResponse>>;
}

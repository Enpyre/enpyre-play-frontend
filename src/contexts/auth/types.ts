import { ResponseSignIn } from '@/view/environments/public/services/auth/types';
import { Dispatch, ReactNode, SetStateAction } from 'react';

import { HttpResponse } from '../../infra/http';

export type Props = {
  children: ReactNode;
};

export type ContextUser = {
  id?: string;
  code?: string;
  provider?: string;
  token?: string;
  refresh?: string;
};

export type AuthContextData = {
  logged: boolean;
  signOut: () => void;
  user: ContextUser | null;
  setUser: Dispatch<SetStateAction<ContextUser | null>>;
  signIn: (user: ContextUser) => Promise<
    | HttpResponse<ResponseSignIn>
    | {
        data: null;
        error: boolean;
        msgError: string;
      }
  >;
};

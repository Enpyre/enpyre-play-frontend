export type SignInParams = {
  code?: string;
  provider?: string;
};

export type ResponseSignIn = {
  token: string;
  refresh: string;
};

export type SignInResult = {
  username: string;
};

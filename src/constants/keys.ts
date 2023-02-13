export const KEYS = {
  STORAGE: {
    THEME: '@ENPYRE-THEME',
    USER: '@ENPYRE-USER',
    USER_TOKEN: 'ENPYRE-USER-TOKEN',
  },
  HOST: {
    API_URL: (process.env.NEXT_PUBLIC_API_URL || '') as string,
    CLIENT_ID_GITHUB: (process.env.NEXT_CLIENT_ID_GITHUB || '') as string,
  },
};

export const KEYS = {
  STORAGE: {
    THEME: '@ENPYRE-THEME',
    USER: '@ENPYRE-USER',
    USER_ACCESS_TOKEN: 'ENPYRE-USER-ACCESS-TOKEN',
    USER_REFRESH_TOKEN: 'ENPYRE-USER-REFRESH-TOKEN',
  },
  HOST: {
    API_URL: (process.env.NEXT_PUBLIC_API_URL || '') as string,
    CLIENT_ID_GITHUB: (process.env.NEXT_CLIENT_ID_GITHUB || '') as string,
  },
};

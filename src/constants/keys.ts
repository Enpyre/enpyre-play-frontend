export const KEYS = {
  STORAGE: {
    THEME: '@ENPYRE-THEME',
    USER: '@ENPYRE-USER',
  },
  HOST: {
    API_URL: (process.env.NEXT_PUBLIC_API_URL || '') as string,
    CLIENT_ID_GITHUB: (process.env.NEXT_CLIENT_ID_GITHUB || '') as string,
  },
};

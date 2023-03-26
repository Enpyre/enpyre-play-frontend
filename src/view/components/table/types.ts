export type Props = {
  isLoading: boolean;
  thead: string[];
  tbody: React.ReactNode;
  controllers: {
    limit?: number;
    totalItems?: number;
    callbackHandlePage?: (page: number) => void;
  };
};

export type HandleTable = {
  init: (limit?: number | 'init') => void;
};

import styled from 'styled-components';

import { convertFont } from '@/utils';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Content = styled.div`
  width: min(100%, 1440px);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;

  padding: 20px 24px;

  & > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 18px;

    & > a {
      min-width: 200px;
      background: ${({ theme }) => theme.colors.dracula};
      color: ${({ theme }) => theme.colors.neutral.n800};

      border-radius: 6px;
      padding: 14px 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      & > span {
        font-size: ${convertFont.toRem(14)};
      }

      &:hover {
        opacity: 0.8;
      }
    }

    .question {
      width: 100%;
      background: ${({ theme }) => theme.colors.dracula};
      padding: 12px 16px;
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 14px;

      .answer {
        margin-left: 14px;
        margin-bottom: 18px;
      }
      .user-answer {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

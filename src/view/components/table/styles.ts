import styled, { css } from 'styled-components';

import { convertFont } from '@/utils';

import { skeleton } from '../styles/constants';

export const Wrapper = styled.table<{ isLoading?: boolean }>`
  width: 100%;
  max-width: 1440px;
  background: ${({ theme }) => theme.colors.primary.p800};
  padding: 10px 10px 20px;
  margin-top: 10px;
  border-spacing: 0;

  thead {
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.colors.primary.p800};
    z-index: 1;

    tr {
      th {
        color: ${({ theme }) => theme.colors.neutral.n50};
        text-transform: uppercase;
        font-size: ${convertFont.toRem(14)};
        font-weight: bold;
        padding: 10px 0 20px 0;
        width: auto;
      }
    }
  }
  tbody {
    margin-top: 10px;

    tr {
      border-radius: 10px;

      ${({ isLoading }) =>
        isLoading &&
        css`
          background: #424d53;
          background: linear-gradient(
            110deg,
            #30393f 8%,
            #424d53 18%,
            #30393f 33%
          );
          width: 100%;
          border-radius: 2px;
          background-size: 200% 100%;
          animation: 1.5s ${skeleton()} linear infinite;
          color: transparent;
          td {
            opacity: 0;
          }
        `}
      td {
        color: ${({ theme }) => theme.colors.neutral.n50};
        padding-top: 7px;
        padding-bottom: 7px;

        &:nth-child(1) {
          padding: 0 5px;
          border-radius: 10px 0 0 10px;
        }
        &:last-child {
          border-radius: 0 10px 10px 0;
        }
      }
      &:nth-child(even) {
        background: ${({ theme }) => theme.colors.primary.p900};
        td {
          border-color: transparent;
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.primary.p800};
`;

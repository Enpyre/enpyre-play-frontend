import styled, { css } from 'styled-components';

import { backgroundShine } from '../styles/constants';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const Paginator = styled.div<{ isLoading?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transition: opacity 0.3s;

  ${({ isLoading }) =>
    isLoading &&
    css`
      width: 650px;
      border-radius: 50px;

      background: #ffffff;
      background: linear-gradient(110deg, #bababa 8%, #ffffff 18%, #bababa 33%);
      background-size: 200% 100%;
      animation: 1.5s ${backgroundShine} linear infinite;
      color: transparent;
      button,
      ul {
        opacity: 0;
      }
    `}

  & > button {
    width: 45px;
    height: 45px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.colors.shades.white};
    color: ${({ theme }) => theme.colors.primary.p900};

    border-radius: 50%;
    border: 0;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);

    cursor: pointer;

    svg {
      font-size: 1.25rem;
      font-weight: bold;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary.p900};
      color: ${({ theme }) => theme.colors.shades.white};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  ul {
    height: 45px;

    background: ${({ theme }) => theme.colors.shades.white};

    padding: 5px;
    gap: 10px;

    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 65px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    li {
      width: 35px;
      height: 35px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 50%;

      & > button {
        width: 100%;
        height: 100%;

        border: 0;

        cursor: pointer;

        background: transparent;
        color: ${({ theme }) => theme.colors.neutral.n800};
        font-weight: bold;
      }

      &:hover,
      &.on {
        background: ${({ theme }) => theme.colors.primary.p900};
        button {
          color: ${({ theme }) => theme.colors.shades.white};
        }
      }
    }
  }
`;

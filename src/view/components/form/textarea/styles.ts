import styled, { css } from 'styled-components';

import { convertFont } from '@/utils';

import { backgroundShine } from '../../styles/constants';

export const Wrapper = styled.div<{ isLoading: boolean }>`
  width: 100%;
  min-height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;

  padding: 14px 0;

  position: relative;
  ${({ isLoading }) =>
    isLoading &&
    css`
      &,
      label {
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
        animation: 1.5s ${backgroundShine} linear infinite;
        color: transparent !important;
      }
    `}
`;

export const InputGroup = styled.div<{ color?: string }>`
  width: 100%;
  display: grid;
  grid-template-columns: calc(100% - 47px) 47px;
  flex-direction: row;
  position: relative;
  textarea {
    border: 1px solid
      ${({ theme, color }) =>
        color ? theme.colors.orange.o800 : theme.colors.primary.p900};
    border-radius: 10px 0px 0px 10px;
    background: transparent;
    color: ${({ theme }) => theme.colors.shades.black};
    font-size: ${convertFont.toRem(14)};
    height: 90px;
    padding: 10px 17px;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral.n400};
    }
    &:focus-visible {
      outline: none;
    }
  }

  & i {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 47px;
    height: 90px;
    background: ${({ theme, color }) =>
      color ? theme.colors.orange.o800 : theme.colors.primary.p900};
    border-radius: 0px 8px 8px 0px;
    svg {
      color: ${({ theme }) => theme.colors.shades.white};
      font-size: 1.625rem;
    }
  }
`;

import styled, { css } from 'styled-components';

import { Props } from '.';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 124px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0;

  & > div {
    margin-left: 16px;
  }
`;

export const Controller = styled.div<{ variant?: Props['variant'] }>`
  position: relative;
  width: 23px;
  min-width: 23px;
  max-width: 23px;
  height: 50px;
  min-height: 50px;
  max-height: 50px;

  border-radius: 20px;
  overflow: hidden;
  padding: 1px;

  ${({ variant }) =>
    css`
      ${variant === 'normal' &&
      css`
        transform: rotate(-90deg);
      `}
      ${!variant &&
      css`
        transform: rotate(-90deg);
      `}
    `}

  .option,
  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .background {
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.neutral.n400};
    background: ${({ theme }) => theme.colors.neutral.n400};
    z-index: 1;
  }

  .option {
    &:before {
      content: '';
      position: absolute;
      width: 18.5px;
      height: 18.5px;
      background: ${({ theme }) => theme.colors.primary.p900};
      border: 1px solid transparent;
      border-radius: 50%;
      z-index: 2;
      left: 2px;
      top: 2.5px;
      transition: 0.3s cubic-bezier(0, 0.65, 0.36, 1.17) all;
    }
  }

  input[type='checkbox'] {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 3;

    &:checked + .option:before {
      top: 28.5px;
      background: ${({ theme }) => theme.colors.shades.white};
      border: 1px solid ${({ theme }) => theme.colors.shades.white};
    }
    &:checked ~ .background {
      background: ${({ theme }) => theme.colors.primary.p900};
      border: 1px solid ${({ theme }) => theme.colors.primary.p800};
    }
  }
`;

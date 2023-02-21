import styled, { css } from 'styled-components';

import { DropdownProps } from '.';

export const Wrapper = styled.li<{
  isSelected: boolean;
  variant: DropdownProps['variant'];
}>`
  position: relative;
  min-width: 59px;
  height: 32px;

  border-radius: 8px;

  ${({ variant }) =>
    variant &&
    variant === 'solid' &&
    css`
      background: ${({ theme }) => theme.colors.blue.b900};
    `}

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;

    padding: 0px 12px;

    border: none;
    background: transparent;
    width: 100%;
    height: 100%;

    font-weight: 400;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.neutral.n50};
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -26px;
        left: 0;
        background: ${({ theme }) => theme.colors.primary.p800};
      }
    `}
`;

export const Menu = styled.ul<{
  position?: DropdownProps['position'];
  noUppercase?: boolean;
}>`
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  background: ${({ theme }) => theme.colors.primary.p900};

  position: absolute;
  top: 50px;
  z-index: 2;

  min-width: 180px;
  min-height: 0;
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 50%);

  transition: 0.3s linear;
  animation: opacity 0.3s linear;

  ${({ position }) =>
    position === 'left'
      ? css`
          left: 0;
        `
      : position === 'right'
      ? css`
          right: 0;
        `
      : position === 'center'
      ? css`
          margin: 0 auto;
          left: 0;
          right: 0;
        `
      : css`
          left: 0;
        `}

  &::before {
    content: '';
    border: 10px solid ${({ theme }) => theme.colors.primary.p900};
    border-top: 5px solid transparent;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    position: absolute;
    top: -15px;
    width: 14px;
    ${({ position }) =>
      position === 'left'
        ? css`
            left: 13px;
          `
        : position === 'right'
        ? css`
            right: 13px;
          `
        : position === 'center'
        ? css`
            margin: 0 auto;
            left: 0;
            right: 0;
          `
        : css`
            left: 13px;
          `}
  }

  & > li {
    padding: 15px;
    border-left: 2px solid transparent;
    transition: 0.3s;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.p800};
    position: relative;

    &:hover {
      border-left: 2px solid ${({ theme }) => theme.colors.primary};
    }
    &:first-child {
      border-radius: 5px 0 0;
    }

    &:last-child {
      border-bottom: none;
      border-radius: 0 0 5px 5px;
    }

    & > a {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 6px;

      cursor: pointer;
      text-align: left;
      border: 0;
      background: transparent;

      white-space: nowrap;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.shades.white};

      & > svg {
        font-size: 18px;
      }
    }

    &.normal {
      cursor: default;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        border-left: 2px solid transparent;
      }
      & > button {
        width: auto;
        padding: 8px 26px;

        background: ${({ theme }) => theme.colors.primary.p700};
        border-radius: 24px;
        border: 0;

        text-align: center;
        color: ${({ theme }) => theme.colors.shades.white};
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`;

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { scrollbar } from '../../styles/constants';
import { Props, TypeModal } from './types';

export const Background = styled.div`
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  transition: 0.3s linear;
  backdrop-filter: blur(2px);
  animation: opacity 0.3s linear;
  background-color: rgba(45, 51, 56, 0.5);
`;

const sizes = (size: string) => {
  const sizes: {
    [key: string]: FlattenSimpleInterpolation;
  } = {
    xs: css`
      width: 512px;
    `,
    md: css`
      width: 648px;
    `,
    lg: css`
      width: 708px;
    `,
    hg: css`
      width: 828px;
    `,
    xhg: css`
      width: 1024px;
    `,
  };

  return sizes[size];
};

export type WrapperProps = Pick<Props, 'size' | 'type'>;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  max-height: calc(100% - 32px);
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.neutral.n900};
  box-shadow: 0 0 85px rgb(0 0 0 / 20%);
  min-height: 306px;

  ${({ type }) =>
    css`
      ${type === 'error' &&
      css`
        background: linear-gradient(
          139.84deg,
          #b21b21 -211.52%,
          #20272a 59.58%
        );
      `};
      ${type === 'delete' &&
      css`
        background: linear-gradient(
          139.84deg,
          #b21b21 -211.52%,
          #20272a 59.58%
        );
      `};
      ${type === 'warning' &&
      css`
        background: linear-gradient(
          139.84deg,
          #aa930c -211.52%,
          #20272a 59.58%
        );
      `};
      ${type === 'success' &&
      css`
        background: linear-gradient(
          139.84deg,
          #046104 -211.52%,
          #20272a 59.58%
        );
      `};
      ${type === 'loading' &&
      css`
        justify-content: center;
        background: linear-gradient(
          139.84deg,
          #e62d72 -211.52%,
          #20272a 59.58%
        );
      `};
    `}

  ${({ size }) => !!size && sizes(size)}
`;

export const Header = styled.div<WrapperProps>`
  min-height: 52px;
  position: relative;
  padding: 32px 16px 8px 16px;

  &.clean {
    padding: 16px;
    min-height: initial;
  }

  & > h1 {
    font-size: 1.125rem;
    font-weight: bold;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.shades.white};
  }

  & > button {
    top: 16px;
    right: 16px;
    width: 38px;
    height: 38px;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    position: absolute;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme.colors.neutral.n400};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Body = styled.div<WrapperProps>`
  flex: 1;
  display: flex;
  overflow-y: auto;
  padding: 0px 16px;

  ${scrollbar(false)}
`;

export const BarIcon = styled.div<{ type?: TypeModal }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  margin-bottom: 26px;

  width: 85px;
  height: 85px;

  ${({ type }) =>
    css`
      ${type === 'error' &&
      css`
        border: 2px solid ${({ theme }) => theme.colors.red.r900};
      `};
      ${type === 'delete' &&
      css`
        border: 2px solid ${({ theme }) => theme.colors.red.r900};
      `};
      ${type === 'warning' &&
      css`
        border: 2px solid ${({ theme }) => theme.colors.warning.w400};
      `};
      ${type === 'success' &&
      css`
        border: 2px solid ${({ theme }) => theme.colors.green.g900};
      `};
      ${type === 'loading' &&
      css`
        animation: spin 1s ease-in-out infinite;
      `};
    `}

  border-radius: 100px;
`;

export const Icon = styled.div<{ type?: TypeModal }>`
  color: ${({ theme }) => theme.colors.shades.white};

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  & > svg {
    width: 55px;
    height: 55px;

    ${({ type }) =>
      css`
        ${type === 'error' &&
        css`
          color: ${({ theme }) => theme.colors.red.r900};
        `};
        ${type === 'delete' &&
        css`
          color: ${({ theme }) => theme.colors.red.r900};
        `};
        ${type === 'warning' &&
        css`
          color: ${({ theme }) => theme.colors.warning.w400};
        `};
        ${type === 'success' &&
        css`
          color: ${({ theme }) => theme.colors.green.g900};
        `};
        ${type === 'loading' &&
        css`
          color: ${({ theme }) => theme.colors.primary};
          animation: spin 1s ease-in-out infinite;
        `};
      `}
  }
`;

export const Footer = styled.div<WrapperProps>`
  gap: 16px;
  padding: 16px;
  display: flex;
  justify-content: center;

  & > button {
    max-width: 128px;
  }
`;

export const WrapperAlert = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > h3,
  & > p,
  & > i {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.shades.white};
  }

  & > h3 {
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  & > p {
    margin-bottom: 16px;

    &.rem-margin {
      margin-bottom: 0px;
    }
  }

  & > i {
    font-size: 0.75rem;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.neutral.n800};
  }
  &.loading {
    & > p {
    }
  }
`;

export const ButtonClose = styled.button`
  font-size: 2.125rem;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  background: transparent;
  padding: 0;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 25px;
  border: 0;
  transition: 0.2s;
  box-sizing: border-box;
  &::after {
    content: '\\00D7';
    display: block;
    color: #a8a8b3;
  }
  &:hover {
    filter: brightness(0.7);
  }
`;

export const WrapperError = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;

  & > span {
    margin-bottom: 18px;
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.shades.white};
  }

  & > button {
    color: ${({ theme }) => theme.colors.red.r900};
    font-size: 1rem;
    background: transparent;

    border: 1px solid ${({ theme }) => theme.colors.red.r900};
    border-radius: 20px;
    cursor: pointer;
    height: 36px;
    padding: 0 15px;
  }
`;

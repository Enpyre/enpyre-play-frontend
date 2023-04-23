import styled, { css, keyframes } from 'styled-components';

import { convertFont } from '@/utils';

export const LabelField = styled.label`
  font-size: ${convertFont.toRem(14)};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary.p200};
  padding-left: 8px;
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
`;

export const ErrorField = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.red.r900};

  position: absolute;
  bottom: -27px;
  left: 6px;
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.red.r700};
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: bold;
  box-shadow: 3px 3px 6px rgb(0 0 0 / 20%);
  color: #fff;

  &:before {
    content: '';
    position: absolute;
    border: 10px solid ${({ theme }) => theme.colors.red.r700};
    top: -9px;
    left: 10px;
    border-top: 2px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`;
/**
 * @param pl -> Padding-left
 * @param pr -> Padding-right
 * @param isLoading -> boolean
 */
export const ContainerForm = styled.div<{
  pl?: number;
  pr?: number;
  gap?: number;
  isLoading?: boolean;
}>`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
  ${({ isLoading }) =>
    isLoading
      ? css`
          justify-content: center;
          align-items: center;
          svg {
            font-size: 62px;
            color: ${({ theme }) => theme.colors.primary.p200};
            animation: ${rotate} 1.5s infinite ease;
          }
        `
      : css`
          justify-content: flex-start;
          align-items: flex-start;
        `}

  ${({ pl, pr }) =>
    css`
      ${pl !== undefined &&
      css`
        padding-left: ${pl}px;
      `};
      ${pr !== undefined &&
      css`
        padding-right: ${pr}px;
      `};
    `};

  h1 {
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.shades.white};
    margin-bottom: 16px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > h1 {
      width: 100%;
      text-align: center;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.shades.white};
      margin-bottom: 16px;
    }
  }
`;
export const GroupForm = styled.div<{
  columns?: number;
  gridColumns?: string;
  paddingLR?: number;
  minHeight?: number;
  align?: 'top' | 'center' | 'bottom';
}>`
  width: 100%;
  min-height: ${({ minHeight }) => minHeight ?? 85}px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${({ align }) =>
    align &&
    css`
      ${{
        top: css`
          align-items: flex-start;
        `,
        center: css`
          align-items: center;
        `,
        bottom: css`
          align-items: flex-end;
        `,
      }[align]}
    `};

  ${({ columns }) =>
    columns &&
    css`
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      gap: 15px;
    `}
  ${({ gridColumns }) =>
    gridColumns &&
    css`
      display: grid;
      grid-template-columns: ${gridColumns};
      grid-gap: 15px;
    `}
  ${({ paddingLR }) =>
    paddingLR &&
    css`
      padding: 0 ${paddingLR}px;
    `}
`;

export const GroupFormWithTitle = styled.div`
  width: 100%;
  min-height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0;
  padding: 15px 15px 5px;
  border: 1px dashed ${({ theme }) => theme.colors.neutral.n400};
  border-radius: 10px;
  & > h2 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.shades.white};
    text-transform: uppercase;
  }
  & > div {
    width: 100%;
    min-height: 85px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 30px;
    & > div {
      min-width: 100%;
    }
  }
`;

export const Button = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;

  width: 200px;
  height: 40px;

  border-radius: 30px;
  transition: 0.1s;

  font-size: ${convertFont.toRem(14)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary.p200};
  border: 1px solid ${({ theme }) => theme.colors.primary.p200};
  background: transparent;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.p200};
    color: ${({ theme }) => theme.colors.shades.white};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.neutral.n100};
    border-color: ${({ theme }) => theme.colors.neutral.n100};
    cursor: not-allowed;

    &:hover {
      color: ${({ theme }) => theme.colors.neutral.n100};
      border-color: ${({ theme }) => theme.colors.neutral.n100};

      background: transparent;
    }
  }
`;
export const GroupButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0 10px;
`;

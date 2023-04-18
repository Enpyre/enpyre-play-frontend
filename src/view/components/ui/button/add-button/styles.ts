import styled, { css } from 'styled-components';

import { convertFont } from '@/utils';

import { Props } from '.';

export const Wrapper = styled.button<{
  color: Props['color'];
  isDisabled?: boolean;
}>`
  min-width: 135px;
  min-height: 42px;
  height: 42px;
  padding: 0 16px 0 24px;

  background: ${({ theme }) => theme.colors.primary.p800};

  border-radius: 12px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-size: ${convertFont.toRem(14)};
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.shades.white};
  font-weight: bold;

  margin-top: 26px;

  position: relative;
  cursor: pointer;

  transition: all 0.8s cubic-bezier(0.09, 0.79, 0.61, 1) 0s;

  & > div {
    position: absolute;
    left: -26px;

    width: 40px;
    height: 40px;

    background: ${({ theme }) => theme.colors.shades.white};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.8s cubic-bezier(0.09, 0.79, 0.61, 1) 0s;

    & > svg {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.primary.p900};
    }

    & > i {
      position: absolute;

      border: 2px solid ${({ theme }) => theme.colors.primary.p900};
      border-radius: 50%;
      transition: all 0.8s cubic-bezier(0.09, 0.79, 0.61, 1) 0s;

      &.circle-first {
        border-left-color: ${({ theme }) => theme.colors.shades.white};
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        transform: rotate(-10deg);
      }
      &.circle-second {
        border-right-color: ${({ theme }) => theme.colors.shades.white};
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        transform: rotate(30deg);
      }
    }
  }
  &:hover {
    scale: 1.04;

    & > div {
      scale: 1.15;
      & > i {
        &.circle-first {
          transform: rotate(5deg);
        }
        &.circle-second {
          transform: rotate(-5deg);
        }
      }
    }
  }

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      opacity: 0.8;
      background: ${theme.colors.primary.p400};

      color: ${theme.colors.primary.p300};

      cursor: not-allowed;

      transition: 0;

      & > div {
        position: absolute;
        left: -26px;

        width: 40px;
        height: 40px;

        & > svg {
          color: ${theme.colors.primary.p300};
        }

        & > i {
          border: 2px solid ${theme.colors.primary.p400};
        }
      }

      &:hover {
        scale: 1;
        & > div {
          scale: 1;
          & > i {
            &.circle-first {
              transform: rotate(-10deg);
            }
            &.circle-second {
              transform: rotate(30deg);
            }
          }
        }
      }
    `}
`;

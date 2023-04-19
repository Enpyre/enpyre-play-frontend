import { transparentize } from 'polished';
import styled from 'styled-components';

import { convertFont } from '@/utils';

export const Wrapper = styled.div<{ vibrate: boolean; pulse: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin: 12px 0;

  position: relative;
  z-index: 0;

  & > div {
    display: flex;
    position: relative;
    border-radius: 50px;
    align-items: center;
    justify-content: center;

    & > fieldset {
      width: 100%;
      height: 100%;

      background: ${({ theme }) => theme.colors.primary.p800};

      position: relative;
      z-index: 2;

      overflow: hidden;
      border: 0;
      padding: 4px 0;

      label {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        padding: 8px 16px;
        background: ${({ theme }) => theme.colors.primary.p900};
        color: ${({ theme }) => theme.colors.shades.white};
        font-size: ${convertFont.toRem(14)};
        white-space: nowrap;
      }
      input {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        opacity: 0;
        top: 0;
        left: 0;
        cursor: pointer;

        &:checked ~ label {
          background: ${({ theme }) =>
            transparentize(0.4, theme.colors.primary.p300)};
        }
      }

      &:hover {
        label {
          background: ${({ theme }) =>
            transparentize(0.2, theme.colors.primary.p300)};
        }
      }

      &:first-child {
        border-radius: 24px 0 0 24px;
        label {
          padding-left: 24px;
        }
      }
      &:last-child {
        border-radius: 0 24px 24px 0;
        label {
          padding-right: 24px;
        }
      }
      &:only-child {
        border-radius: 24px;
      }
    }
  }
`;

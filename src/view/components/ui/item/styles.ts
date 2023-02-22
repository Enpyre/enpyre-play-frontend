import { convertFont } from '@/utils';
import styled, { css } from 'styled-components';

export const Wrapper = styled.li<{ isSelected?: boolean }>`
  color: ${({ theme }) => theme.colors.shades.white};
  text-transform: uppercase;
  position: relative;
  font-size: ${convertFont.toRem(14)};
  padding: 0 15px;
  font-weight: normal;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  a {
    color: ${({ theme }) => theme.colors.shades.white};
    text-transform: uppercase;
    font-size: ${convertFont.toRem(14)};
    font-weight: normal;
  }
  svg {
    width: 12px;
    font-weight: bold;
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
        background: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

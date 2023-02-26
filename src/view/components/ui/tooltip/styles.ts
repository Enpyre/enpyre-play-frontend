import styled, { css } from 'styled-components';

import { animation } from '../../styles/constants';
import { Props } from './types';

type WrapperProps = {
  sizeWidth: number;
  sizeHeight: number;
} & Required<
  Omit<
    Props,
    | 'className'
    | 'children'
    | 'trigger'
    | 'as'
    | 'defaultView'
    | 'notDefaultContent'
    | 'updateTrigger'
    | 'disabled'
  >
>;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  position: relative;

  & > div.too__content {
    z-index: 200;
    display: flex;
    position: absolute;

    ${animation('viewOpacity', 0.3)}

    &.hide {
      ${animation('hideOpacity', 0.3)}
    }

    ${({ side, sizeHeight, sideOffset }) => {
      return {
        bottom: css`
          top: calc(100% + ${sideOffset + 12}px);
        `,
        top: css`
          top: calc(-${sizeHeight}px - ${sideOffset + 12}px);
        `,
      }[side];
    }}

    ${({ align, sizeWidth, alignOffset }) => {
      return {
        center: css`
          left: calc(50% - ${sizeWidth / 2 + alignOffset}px);
        `,
        left: css`
          left: ${alignOffset - 4}px;
        `,
        right: css`
          right: ${alignOffset - 4}px;
        `,
      }[align];
    }}

    ${({ notArrow, side, align, offsetArrow }) =>
      !notArrow &&
      css`
        &:before {
          width: 10px;
          content: '';
          height: 10px;
          position: absolute;
          background-color: transparent;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 10px solid ${({ theme }) => theme.colors.shades.black};

          ${{
            bottom: css`
              top: -10px;
            `,
            top: css`
              top: 100%;
              transform: rotate(180deg);
            `,
          }[side]}

          ${{
            center: css`
              left: calc(50% - ${offsetArrow + 7}px);
            `,
            left: css`
              left: ${offsetArrow + 8}px;
            `,
            right: css`
              right: ${offsetArrow + 8}px;
            `,
          }[align]}
        }
      `}
  }
`;

export const Content = styled.div`
  display: flex;

  padding: 8px 16px;
  border-radius: 5px;
  text-align: center;
  font-size: 0.875rem;
  font-weight: normal;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.shades.white};
  background: ${({ theme }) => theme.colors.shades.black};
`;

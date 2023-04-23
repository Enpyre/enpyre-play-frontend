import styled, { css } from 'styled-components';

export const Wrapper = styled.a<{
  height: number;
  outline?: boolean;
  circle?: boolean;
  color: string;
  disabled: boolean;
}>`
  height: ${({ height }) => height}px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  gap: 6px;

  & > i {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 24px;
    }
  }
  ${({ theme, outline, color }) =>
    outline
      ? css`
          background: transparent;
          color: ${theme.colors.blue.b900};
          border: 1px solid ${theme.colors.blue.b900};
          svg {
            color: ${theme.colors.blue.b900};
            font-size: 0.875rem;
          }
          &:hover {
            background: ${theme.colors.blue.b900};
            &,
            svg {
              color: ${theme.colors.shades.white};
            }
          }

          ${color === 'parimary' &&
          css`
            color: ${theme.colors.blue.b900};
            border: 1px solid ${theme.colors.blue.b900};
            &:hover {
              background: ${theme.colors.blue.b900};
            }
            svg {
              color: ${theme.colors.blue.b900};
              font-size: 0.875rem;
            }
          `};
          ${color === 'error' &&
          css`
            color: ${theme.colors.red.r900};
            border: 1px solid ${theme.colors.red.r900};
            &:hover {
              background: ${theme.colors.red.r900};
            }
            svg {
              color: ${theme.colors.red.r900};
              font-size: 0.875rem;
            }
          `};
          ${color === 'delete' &&
          css`
            color: ${theme.colors.red.r900};
            border: 1px solid ${theme.colors.red.r900};
            &:hover {
              background: ${theme.colors.red.r900};
            }
            svg {
              color: ${theme.colors.red.r900};
              font-size: 0.875rem;
            }
          `};
          ${color === 'warning' &&
          css`
            color: ${theme.colors.warning.w400};
            border: 1px solid ${theme.colors.warning.w400};
            &:hover {
              background: ${theme.colors.warning.w400};
            }
            svg {
              color: ${theme.colors.warning.w400};
              font-size: 0.875rem;
            }
          `};
          ${color === 'success' &&
          css`
            color: ${theme.colors.green.g900};
            border: 1px solid ${theme.colors.green.g900};
            &:hover {
              background: ${theme.colors.green.g900};
            }
            svg {
              color: ${theme.colors.green.g900};
              font-size: 0.875rem;
            }
          `};
          ${color === 'loading' &&
          css`
            color: ${theme.colors.blue.b900};
            border: 1px solid ${theme.colors.blue.b900};
            &:hover {
              background: ${theme.colors.blue.b900};
            }
            svg {
              color: ${theme.colors.blue.b900};
              font-size: 0.875rem;
            }
          `};
        `
      : css`
          color: ${theme.colors.shades.white};
          &:hover {
            box-shadow: 0 0 20px rgb(0 0 0 / 30%);
          }
          svg {
            color: ${theme.colors.shades.white};
            font-size: 0.875rem;
          }
          ${color === 'primary' &&
          css`
            background: ${theme.colors.blue.b900};
            border: 1px solid ${theme.colors.blue.b900};
          `};
          ${color === 'error' &&
          css`
            background: ${theme.colors.red.r900};
            border: 1px solid ${theme.colors.red.r900};
          `};
          ${color === 'delete' &&
          css`
            background: ${theme.colors.red.r900};
            border: 1px solid ${theme.colors.red.r900};
          `};
          ${color === 'warning' &&
          css`
            background: ${theme.colors.warning.w400};
            border: 1px solid ${theme.colors.warning.w400};
          `};
          ${color === 'success' &&
          css`
            background: ${theme.colors.green.g900};
            border: 1px solid ${theme.colors.green.g900};
          `};
          ${color === 'loading' &&
          css`
            background: ${theme.colors.blue.b900};
            border: 1px solid ${theme.colors.blue.b900};
          `};
        `}
  ${({ disabled }) =>
    disabled &&
    css`
      &,
      &:hover {
        background: ${({ theme }) => theme.colors.neutral.n300};
        border-color: ${({ theme }) => theme.colors.neutral.n300};
        color: ${({ theme }) => theme.colors.neutral.n200};
        cursor: not-allowed;
      }
    `}

    ${({ circle, height }) =>
    circle &&
    css`
      width: 35px;
      height: 35px;
      border-radius: 50%;
      ${height &&
      css`
        width: ${height}px;
        height: ${height}px;
      `}
    `}
`;

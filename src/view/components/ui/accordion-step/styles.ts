import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.neutral.n600};
  background: transparent;
  border-radius: 8px;

  position: relative;
  padding: 4px;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    h2 {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.neutral.n800};
      text-transform: uppercase;
    }

    & > div {
      display: flex;
      gap: 16px;
      button {
        background: transparent;
        border: none;
        border-radius: 50%;

        width: 26px;
        height: 26px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        svg {
          font-size: 1.375rem;
          color: ${({ theme }) => theme.colors.primary.p900};
          transition: 0.3s;
        }

        &:last-child {
          background: ${({ theme }) => theme.colors.neutral.n100};

          svg {
            font-size: 1.125rem;
            color: ${({ theme }) => theme.colors.neutral.n500};
          }
        }
      }
    }
  }

  & > div:not(:first-child) {
    width: 100%;
    visibility: hidden;
    display: none;
    height: 0;
    transition: height 0.3s;
    padding: 0 10px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      & > div {
        & > div {
          button:last-child svg {
            transform: rotate(-180deg);
          }
          padding-bottom: 16px;
        }
        &:not(:first-child) {
          border-top: 2px dashed ${({ theme }) => theme.colors.neutral.n400};
          padding: 10px;
          border-radius: 0 0 8px 8px;
          visibility: visible;
          display: block;
          height: auto;
        }
      }
    `}
`;

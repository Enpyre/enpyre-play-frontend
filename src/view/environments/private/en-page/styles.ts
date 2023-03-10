import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background: ${({ theme }) => theme.colors.gradient.primary};

  & > .layout-grid {
    width: 100vw;
    height: 100vh;

    & > div {
      border: 1px solid ${({ theme }) => theme.colors.primary.p500};
      background: ${({ theme }) => theme.colors.primary.p700};

      & > span {
        &::after {
          border-color: ${({ theme }) => theme.colors.primary.p500};
          width: 8px;
          height: 8px;
        }
      }
    }
  }
`;

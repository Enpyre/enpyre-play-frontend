import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 79px;
  padding: 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

export const Logo = styled.i`
  width: 140px;
  height: 47px;
  background-size: cover;
  background-image: url('/logo.png');

  display: block;
`;

export const Actions = styled.nav`
  ol {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;

    li {
      min-width: 59px;
      height: 32px;

      border-radius: 8px;

      &.primary {
        background: ${({ theme }) => theme.colors.blue.b900};
      }

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
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
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const Hero = styled.section`
  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.colors.gradient.primary};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 76px;
  gap: 46px;

  & > div {
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    h2 {
      width: 100%;
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 33px;
      color: ${({ theme }) => theme.colors.neutral.n50};
      text-align: center;
    }
    h3 {
      width: 100%;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 29px;

      text-align: center;
      color: ${({ theme }) => theme.colors.neutral.n50};
    }
  }
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;

    background: ${({ theme }) => theme.colors.blue.b900};
    box-shadow: 0px 0px 42px rgba(0, 83, 166, 0.9);
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.neutral.n50};
  }
`;

export const Right = styled.div`
  position: relative;
  height: 100vh;
  svg {
    right: 0;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  width: 100vw;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  background: rgba(27, 35, 52, 0.1);
  backdrop-filter: blur(3px);

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 12%;

  transition: 0.3s linear;
  animation: opacity 0.3s linear;
`;

export const Container = styled.div`
  width: 540px;
  height: 435px;

  background: ${({ theme }) => theme.colors.dark.d975};
  box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.15);
  border-radius: 15px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 122px 62px 0;
  text-align: center;

  color: ${({ theme }) => theme.colors.neutral.n50};

  h1 {
    font-weight: 600;
    font-size: 1.75rem;
  }

  span {
    margin-top: 6px;
    font-weight: 400;
    font-size: 1.125rem;
  }

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 16px 28px;
    margin-top: 50px;

    border-radius: 8px;
    background: #100f0d;
    border: 0;

    color: ${({ theme }) => theme.colors.shades.white};
    font-size: 1.25rem;

    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    & > svg {
      font-size: 1.5rem;
    }
  }
`;

export const Header = styled.div`
  position: absolute;
  top: -115px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  color: ${({ theme }) => theme.colors.neutral.n50};

  font-size: 20px;

  top: 16px;
  right: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background: transparent;
  border: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const NewToGitHub = styled.p`
  margin-top: 30px;
  font-size: 1rem;
  color: #405269;

  & > a {
    color: #526d8f;

    &:hover {
      text-decoration: underline;
    }
  }
`;

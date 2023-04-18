import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 60px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 20px 24px;
`;

export const Container = styled.div<{ isLoading?: boolean }>`
  width: min(100%, 1400px);

  padding: 40px 28px;

  background: ${({ theme }) => theme.colors.shades.white};

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > form {
    width: 100%;
    max-width: 700px;
  }

  ${({ isLoading }) =>
    isLoading
      ? css`
          justify-content: center;
          align-items: center;
          svg {
            font-size: 62px;
            color: ${({ theme }) => theme.colors.primary.p800};
            animation: ${rotate} 1.5s infinite ease;
          }
        `
      : css`
          justify-content: flex-start;
          align-items: flex-start;
        `}
`;

export const ContainerAccordion = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 18px;

  padding: 28px 0 0;
`;

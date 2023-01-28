import styled, { keyframes } from 'styled-components';

export const Content = styled.div<{ isBackground: boolean }>`
  width: 100%;
  height: 100vh;
  background: ${({ theme, isBackground }) =>
    isBackground ? theme.colors.primary.p900 : 'transparent'};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const isRotating = keyframes`
to{
      transform: rotate(1turn);
    }
`;

export const Load = styled.i`
  width: 100px;
  height: 100px;
  border: 5px solid ${({ theme }) => theme.colors.dark.d700};
  border-bottom-color: ${({ theme }) => theme.colors.blue.b700};
  display: block;
  border-radius: 50%;
  animation: ${isRotating} 1s infinite;
`;

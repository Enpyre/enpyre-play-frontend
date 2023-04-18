import styled, { css } from 'styled-components';

import { Wrapper } from '../../styles';

export const WrapperBlur = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20px;
`;
export const ContainerBlur = styled(Wrapper)<{ isBlur: boolean }>`
  ${({ isBlur }) =>
    isBlur &&
    css`
      filter: blur(7px);
      pointer-events: none;
    `}
  margin-top: 0;
  padding-top: 0;
`;

export const FloatActionButton = styled.button<{ isActive: boolean }>`
  height: 40px;
  color: ${({ theme }) => theme.colors.neutrals.white};
  border: 1px solid ${({ theme }) => theme.colors.third};
  background: ${({ theme }) => theme.colors.third};
  padding: 0 15px;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  gap: 5px;
  cursor: pointer;

  position: absolute;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  top: 115px;
  font-size: 1rem;
  font-weight: bold;
`;

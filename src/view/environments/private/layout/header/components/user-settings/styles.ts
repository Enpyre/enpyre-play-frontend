import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 200px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  & > button {
    font-weight: 700;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.shades.white};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 0;
    background: transparent;
    cursor: pointer;
    svg {
      width: 12px;
    }
  }
`;

export const CircleInitials = styled.i`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 1px 0px 0px;
  gap: 10px;

  width: 40px;
  height: 40px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.primary.p800};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.shades.white};
  font-style: normal;
`;

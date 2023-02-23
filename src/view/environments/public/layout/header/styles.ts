import styled from 'styled-components';

export const Wrapper = styled.header`
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

export const Actions = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  & > li {
    position: relative;
    min-width: 59px;
    height: 32px;

    border-radius: 8px;

    &.primary {
      background: ${({ theme }) => theme.colors.blue.b900};
    }

    button,
    a {
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
`;

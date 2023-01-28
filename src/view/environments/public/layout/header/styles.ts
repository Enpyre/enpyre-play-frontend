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

export const Actions = styled.nav`
  ol {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;
  }
`;

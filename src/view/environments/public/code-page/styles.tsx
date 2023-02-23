import styled, { css } from 'styled-components';

interface CardProps {
  gridRow?: string;
  gridColumn?: string;
}

export const Body = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 800px 1fr;
  grid-template-rows: 500px 1fr;
  gap: 1rem;
`;

export const Card = styled.div<CardProps>`
  background: white;
  padding: 1rem;
  overflow: hidden;

  ${({ gridRow }) =>
    gridRow
      ? css`
          grid-row: ${gridRow};
        `
      : null}

  ${({ gridColumn }) =>
    gridColumn
      ? css`
          grid-column: ${gridColumn};
        `
      : null}
`;

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 1.5rem;
  }
`;

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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

export const Card = styled.div<CardProps>`
  background: white;
  padding: 1rem;

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

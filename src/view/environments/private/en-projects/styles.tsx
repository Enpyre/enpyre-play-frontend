import styled, { css } from 'styled-components';

import { theme } from '@/helpers/theme';

interface CardProps {
  gridRowStart?: number;
  gridRowEnd?: number;
  gridColumnStart?: number;
  gridColumnEnd?: number;
  dark?: boolean;
  scroll?: boolean;
}

export const Body = styled.div`
  width: 100%;
  padding: 1rem;
  padding-top: 70px;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(400px, 1fr) 400px 800px 400px;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 800px minmax(800px, 1fr);
    grid-template-rows: 400px 250px 300px;
  }
`;

export const Card = styled.div<CardProps>`
  background: white;
  padding: 1rem;
  overflow: hidden;

  ${({ scroll }) => {
    return scroll
      ? css`
          overflow: scroll;
        `
      : null;
  }}

  ${({ dark }) =>
    dark &&
    css`
      background: ${theme.colors.dracula};
      color: white;
    `};

  @media (min-width: 768px) {
    ${({ gridRowStart, gridRowEnd, gridColumnStart, gridColumnEnd }) =>
      css`
        ${gridRowStart && `grid-row-start: ${gridRowStart};`}
        ${gridRowEnd && `grid-row-end: ${gridRowEnd};`}
        ${gridColumnStart && `grid-column-start: ${gridColumnStart};`}
        ${gridColumnEnd && `grid-column-end: ${gridColumnEnd};`}
      `}
  }
`;

export const Space = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 1.5rem;
  }
`;

export const Button = styled.button`
  background: #464d56;
  color: ${theme.colors.action};
  height: 3rem;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const CardTitle = styled.h2`
  color: ${theme.colors.dim};
`;

export const Scrollable = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
`;

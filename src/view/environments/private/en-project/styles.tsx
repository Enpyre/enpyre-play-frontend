import styled, { css } from 'styled-components';
import tw from 'tailwind-styled-components';

import { theme } from '@/helpers/theme';

interface CardProps {
  gridRowStart?: number;
  gridRowEnd?: number;
  gridColumnStart?: number;
  gridColumnEnd?: number;
  dark?: boolean;
  scroll?: boolean;
}

// export const Body = styled.div`
//   height: 100vh;
//   width: 100vw;
//   max-width: 100vw;
//   padding: 1rem;
//   padding-top: 70px;
// `;

export const Body = tw.div`
  h-screen
  w-screen
  max-w-screen
  p-1
  pt-20
`;

// export const GridLayout = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: minmax(400px, 1fr) 400px 800px 400px;
//   gap: 1rem;

//   @media (min-width: 768px) {
//     grid-template-columns: 800px minmax(800px, 1fr);
//     grid-template-rows: 400px 250px 300px;
//   }
// `;

export const GridLayout = tw.div`
  h-full
  grid
  grid-cols-1
  grid-rows-4
  gap-1
  md:grid-cols-2
  md:grid-rows-3
  md:gap-1
`;

const _Card = styled.div<CardProps>`
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

export const Card = tw(_Card)`
  bg-white
  p-1
  overflow-hidden
  md:overflow-scroll
`;

export const Space = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 1.5rem;
  }
`;

export const HorizontalSpace = styled.div`
  display: flex;
  flex-direction: row;
  & > *:not(:first-child) {
    margin-left: 1.5rem;
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
  font-size: 26px;
  color: #fff;
  font-family: monospace;
`;

export const Scrollable = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
`;

export const EditorWrapper = styled.div`
  & * {
    font-family: unset;
  }
  width: 100%;
  height: 100%;
`;

export const PreWrapper = styled.pre`
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
`;

export const StyledTextArea = styled.textarea`
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
`;

export const StyledPre = styled.pre`
  width: 100%;
  height: 80%;
`;

export const StyledInput = styled.input`
  background: transparent;
  width: 100%;
  font-size: inherit;
  border: none;
  margin-bottom: 1.5rem;
`;

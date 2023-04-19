import styled, { css } from 'styled-components';

import { convertFont } from '@/utils';

import { backgroundShine } from '../../styles/constants';

export const Wrapper = styled.div<{ isNone?: boolean; isLoading: boolean }>`
  width: 100%;
  min-width: 100%;
  height: 70px;
  display: ${({ isNone }) => (isNone ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;

  position: relative;

  ${({ isLoading }) =>
    isLoading &&
    css`
      &,
      label {
        background: #424d53;
        background: linear-gradient(
          110deg,
          #30393f 8%,
          #424d53 18%,
          #30393f 33%
        );
        width: 100%;
        border-radius: 2px;
        background-size: 200% 100%;
        animation: 1.5s ${backgroundShine} linear infinite;
        color: transparent !important;
      }
    `}
`;

export const InputGroup = styled.div<{ color?: string }>`
  width: 100%;
  display: grid;
  grid-template-columns: calc(100% - 47px) 47px;
  flex-direction: row;
  position: relative;
  input {
    border: 1px solid
      ${({ theme, color }) =>
        color ? theme.colors.orange.o800 : theme.colors.primary.p900};
    border-radius: 12px 0px 0px 12px;
    background: transparent;
    color: ${({ theme }) => theme.colors.shades.black};
    font-size: ${convertFont.toRem(14)};
    height: 46px;
    padding: 0px 17px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral.n400};
    }
    &:focus-visible {
      outline: none;
    }

    &[type='datetime-local']::-webkit-calendar-picker-indicator,
    &[type='time']::-webkit-calendar-picker-indicator,
    &[type='date']::-webkit-calendar-picker-indicator {
      background: transparent;
      bottom: 0;
      color: transparent;
      cursor: pointer;
      height: auto;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
    }
  }

  & i {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 47px;
    height: 46px;
    background: ${({ theme, color }) =>
      color ? theme.colors.orange.o800 : theme.colors.primary.p900};
    border-radius: 0px 8px 8px 0px;
    svg {
      color: ${({ theme }) => theme.colors.shades.white};
      font-size: 1.625rem;
    }
  }
`;

export const CheckboxGroup = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;

  background: ${({ theme }) => theme.colors.shades.white};

  border: 1px solid #38424a;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  label {
    color: ${({ theme }) => theme.colors.neutral.n500};
    font-size: ${convertFont.toRem(14)};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;

    & > input[type='checkbox'] {
      width: 16px;
      height: 16px;
      color: dodgerblue;
      vertical-align: middle;
      -webkit-appearance: none;
      background: none;
      border: 0;
      outline: 0;
      flex-grow: 0;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.shades.white};
      transition: background 0.2s;
      cursor: pointer;
      &::before {
        content: '';
        color: transparent;
        display: block;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        border: 0;
        background-color: transparent;
        background-size: contain;
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.neutral.n400};
      }
      &:checked {
        background-color: ${({ theme }) => theme.colors.primary.p900};
      }
      &:checked::before {
        box-shadow: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
      }
    }
  }
`;

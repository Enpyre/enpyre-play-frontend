import styled from 'styled-components';

import { convertFont } from '@/utils';

export const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 24px;
  & > h1 {
    font-size: ${convertFont.toRem(24)};
    color: ${({ theme }) => theme.colors.shades.white};
    padding-left: 12px;
    border-left: 2px solid ${({ theme }) => theme.colors.shades.white};
  }
`;

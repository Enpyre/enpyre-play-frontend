import Link from 'next/link';
import styled from 'styled-components';

import { theme } from '@/helpers/theme';

export const ItemCard = styled(Link)`
  background: ${theme.colors.dracula};
  padding: 20px;
  border-radius: 15px;
  width: 425px;
  height: 180px;
  cursor: pointer;
  flex-shrink: 0;

  margin-right: 1rem;
  margin-top: 1rem;

  &:hover {
    background: #626674;
  }
`;

export const ItemCardLegacy = styled.a`
  background: ${theme.colors.dracula};
  padding: 20px;
  border-radius: 15px;
  width: 425px;
  height: 180px;
  cursor: pointer;
  flex-shrink: 0;

  margin-right: 1rem;
  margin-top: 1rem;

  &:hover {
    background: #626674;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const ItemTitle = styled.h2`
  font-size: 24px;
  color: #fff;
  margin-bottom: 1rem;
`;

export const ItemDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

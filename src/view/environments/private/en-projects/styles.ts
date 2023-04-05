import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import { theme } from '@/helpers/theme';

export const Container = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
  p-4
  pt-14
`;

export const ContainerHeader = tw.div`
  flex
  items-center
  justify-between
  w-full
  h-16
  px-4
`;

export const Title = tw.h1`
  text-lg
  font-semibold
`;

export const Content = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-y-auto
`;

export const ButtonWrapper = tw.div`
  flex
  items-center
  justify-between
  w-full
  h-16
  px-4
`;

export const ItemButton = tw.button`
  flex
  items-center
  justify-center
  w-10
  h-10
  rounded
  focus:outline-none
`;

export const ItemIcon = tw.i`
`;

const StyledButton = styled(Link)`
  border: none;
  background: transparent;

  font-weight: 400;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.neutral.n50};
  white-space: nowrap;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.blue.b900};

  &:hover {
    opacity: 0.7;
  }
`;

export const Button = tw(StyledButton)`
  flex
  items-center
  justify-center
  w-24
  h-10
  rounded
  focus:outline-none
`;

export const ItemCard = styled.a`
  background: ${theme.colors.dracula};
  padding: 20px;
  border-radius: 15px;
  width: 425px;
  height: 180px;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  &:hover {
    background: #626674;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
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

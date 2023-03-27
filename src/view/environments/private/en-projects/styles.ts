import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

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

export const ContainerFooter = tw.div`
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

export const Icon = tw.i`
`;

export const List = tw.ul`
  flex
  flex-col
  w-full
  h-full
  overflow-y-auto
`;

const ItemColor = styled(Link)`
  background: ${(props) => props.theme.colors.dracula};
`;

export const Item = tw(ItemColor)`
  flex
  items-center
  justify-between
  w-full
  h-16
  px-4
  border-b
  border-gray-400
  cursor-pointer
`;

export const ItemTitle = tw.h2`
  text-sm
  font-semibold
`;

export const ItemDescription = tw.p`
  text-xs
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

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

export const ButtonWrapper = tw.div`
  flex
  items-center
  justify-between
  w-full
  h-16
  px-4
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

import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const TabHeaderContainer = tw.div`
  mb-4 border-b border-gray-200 dark:border-gray-700
`;

export const TabHeaderContent = tw.ul`
  flex flex-wrap -mb-px text-sm font-medium text-center
`;

type TabHeaderItemProps = {
  last?: boolean;
};

export const TabHeaderItem = tw.li<TabHeaderItemProps>`
  ${(props) => !props.last && 'mr-2'}
`;

type TabHeaderButtonProps = {
  active?: boolean;
};

export const TabHeaderButton = tw.button<TabHeaderButtonProps>`
  inline-block
  p-4
  border-b-2
  rounded-t-lg
  ${(props) =>
    !props.active &&
    'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}
`;

export const TabContent = styled.div``;

type TabContentItemProps = {
  active?: boolean;
};

export const TabContentItem = tw.div<TabContentItemProps>`
  ${(props) => !props.active && 'hidden'}
  p-4
  rounded-lg
`;

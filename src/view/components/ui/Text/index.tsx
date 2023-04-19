import styled from 'styled-components';

type Props = {
  children: any;
};

const StyledText = styled.div`
  font-family: 'Open Sans', sans-serif;
`;

export const Text = ({ children }: Props) => (
  <StyledText>{children}</StyledText>
);

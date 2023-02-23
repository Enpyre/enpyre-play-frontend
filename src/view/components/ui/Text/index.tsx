import styled from 'styled-components';

type Props = {
  children: any;
};

const StyledText = styled.div`
  font-family: 'Open Sans', sans-serif;
`;

const Text = ({ children }: Props) => <StyledText>{children}</StyledText>;

export default Text;

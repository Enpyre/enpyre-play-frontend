import * as S from './styles';
export type Props = {
  title: string;
};
export const PageIdentification = ({ title }: Props) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  );
};

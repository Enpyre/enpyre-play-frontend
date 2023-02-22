import * as S from './styles';

type Props = {
  isBackground?: boolean;
};
const Loading = ({ isBackground }: Props) => {
  return (
    <S.Content isBackground={isBackground ?? false}>
      <S.Load />
    </S.Content>
  );
};

export default Loading;

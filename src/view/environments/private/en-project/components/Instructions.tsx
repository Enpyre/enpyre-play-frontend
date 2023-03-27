import Text from '@/view/components/ui/Text';
import * as S from '@/view/environments/private/en-project/styles';

type InstructionsProps = {
  title: string | undefined;
  content: string | undefined;
};

const Instructions = ({ title, content }: InstructionsProps) => (
  <S.Card dark gridRowStart={2} gridRowEnd={4}>
    <S.Space>
      <S.CardTitle>{title}</S.CardTitle>
      <Text>
        <S.PreWrapper>{content}</S.PreWrapper>
      </Text>
    </S.Space>
  </S.Card>
);

export default Instructions;

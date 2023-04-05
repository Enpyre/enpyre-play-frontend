import { ChangeEvent, useContext } from 'react';

import { ProjectContext } from '@/contexts/projects';
import Text from '@/view/components/ui/Text';
import * as S from '@/view/environments/private/en-project/styles';

const Instructions = () => {
  const { project, setProject } = useContext(ProjectContext);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setProject((project) => ({ ...project, title: e.target.value }));
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setProject((project) => ({ ...project, description: e.target.value }));
  };

  if (!project || !project.id) {
    return (
      <S.Card dark gridRowStart={2} gridRowEnd={4}>
        <S.CardTitle>
          <S.StyledInput
            type="text"
            placeholder="Digite o nome do projeto"
            onChange={onChangeTitle}
            value={project?.title || ''}
          />
        </S.CardTitle>
        <S.StyledPre>
          <S.StyledTextArea
            placeholder="Digite a descrição do projeto"
            onChange={onChangeDescription}
            value={project?.description || ''}
          />
        </S.StyledPre>
      </S.Card>
    );
  }

  return (
    <S.Card dark gridRowStart={2} gridRowEnd={4}>
      <S.Space>
        <S.CardTitle>{project.title}</S.CardTitle>
        <Text>
          <S.PreWrapper>{project.description}</S.PreWrapper>
        </Text>
      </S.Space>
    </S.Card>
  );
};

export default Instructions;

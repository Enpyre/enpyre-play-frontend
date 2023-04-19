import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

import { PageIdentification } from '@/view/components/page-identification';

// import { useEffect } from 'react';
// import { useProjects } from '@/hooks/projects';
import { Header } from '../../layout/header';
import * as S from './styles';

export const ProjectsPage = () => {
  // const { listProjects, stateProjects } = useProjects();

  // useEffect(() => {
  //   listProjects();
  // }, [listProjects]);
  return (
    <S.Wrapper>
      <Header />
      <PageIdentification title="Projetos" />
    </S.Wrapper>
  );
};

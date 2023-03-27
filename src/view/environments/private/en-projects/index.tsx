import { EnpyreProvider } from 'enpyre';
import { useContext, useEffect } from 'react';

import { ProjectContext } from '@/contexts/projects';

import { Header } from '../layout/header';
import CodeEditor from './components/CodeEditor';
import Display from './components/Display';
import Instructions from './components/Instructions';
import Output from './components/Output';
import * as S from './styles';

type ProjectProps = {
  projectId?: number;
};

export function EnProjects({ projectId }: ProjectProps) {
  const { project, fetchProject } = useContext(ProjectContext);

  useEffect(() => {
    if (!projectId) return;

    fetchProject(projectId);
  }, [fetchProject, projectId]);

  return (
    <>
      <Header />
      <S.Body>
        <EnpyreProvider>
          <S.GridLayout>
            <Instructions
              title={project?.title}
              content={project?.description}
            />
            <Display />
            <CodeEditor project={project} />
            <Output />
          </S.GridLayout>
        </EnpyreProvider>
      </S.Body>
    </>
  );
}

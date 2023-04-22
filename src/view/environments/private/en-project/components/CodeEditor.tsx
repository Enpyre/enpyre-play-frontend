import 'react-toastify/dist/ReactToastify.css';

import { EnpyreEditor, useCode, usePyodide } from 'enpyre';
import Router from 'next/router';
import { useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { AuthContext } from '@/contexts/auth';
import { ProjectContext } from '@/contexts/projects';
import { ProjectSolution } from '@/contexts/projects/types';
import * as S from '@/view/environments/private/en-project/styles';

const CodeEditor = () => {
  const { runCode, pyodideLoaded } = usePyodide();
  const { code, setCode } = useCode();
  const {
    project,
    projectSolution,
    partialUpdateProjectSolution,
    createProjectSolution,
    createProject,
  } = useContext(ProjectContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setCode(projectSolution ? projectSolution.code : project?.code);
  }, [setCode, projectSolution, project]);

  const notify = () => toast.success('Project updated successfully');

  const onSaveProject = async () => {
    if (!project || !project.id) return;

    if (projectSolution) {
      projectSolution.code = code;
      await partialUpdateProjectSolution(projectSolution, project.id);
    } else {
      const projectSolution: ProjectSolution = { code, project: project.id };
      await createProjectSolution(projectSolution, project.id);
    }
    notify();
  };

  const onCreateProject = async () => {
    if (!user) return;

    if (!project?.title) {
      toast.error('Título do projeto é obrigatório.');
      return;
    }

    const result = await createProject(project, user);
    if (result?.id) {
      await Router.push(`/en/projects/${result.id}`);
    }
  };

  const handleSave = async () => {
    if (!project || !project.id) {
      return onCreateProject();
    }

    return onSaveProject();
  };

  const editorProps = {
    width: '100%',
    fontSize: 20,
    height: '100%',
    setOptions: {
      fontFamily: 'monospace',
    },
  };

  return (
    <S.Card dark gridColumnStart={2} gridRowStart={1} gridRowEnd={3}>
      <S.Space>
        <S.EditorWrapper>
          <EnpyreEditor editorProps={editorProps} />
        </S.EditorWrapper>
        <S.HorizontalSpace>
          <S.Button onClick={runCode} disabled={!pyodideLoaded}>
            Run
          </S.Button>
          <S.Button onClick={handleSave} disabled={!pyodideLoaded}>
            Save
          </S.Button>
        </S.HorizontalSpace>
      </S.Space>
      <ToastContainer hideProgressBar theme="colored" />
    </S.Card>
  );
};

export default CodeEditor;

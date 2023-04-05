import 'react-toastify/dist/ReactToastify.css';

import { EnpyreEditor, useCode, usePyodide } from 'enpyre';
import { useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { ProjectContext } from '@/contexts/projects';
import { Project, ProjectSolution } from '@/contexts/projects/types';
import * as S from '@/view/environments/private/en-project/styles';

type CodeEditorProps = {
  project: Project | null;
  projectSolution: ProjectSolution | null;
};

const CodeEditor = ({ project, projectSolution }: CodeEditorProps) => {
  const { runCode, pyodideLoaded } = usePyodide();
  const { code, setCode } = useCode();
  const { partialUpdateProjectSolution, createProjectSolution } =
    useContext(ProjectContext);

  useEffect(() => {
    setCode(projectSolution ? projectSolution.code : project?.code);
  }, [setCode, projectSolution, project]);

  const notify = () => toast.success('Project updated successfully');

  const onSaveProject = async () => {
    if (!project) return;

    if (projectSolution) {
      projectSolution.code = code;
      await partialUpdateProjectSolution(projectSolution, project.id);
    } else {
      const projectSolution: ProjectSolution = { code, project: project.id };
      await createProjectSolution(projectSolution, project.id);
    }
    notify();
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
    <S.Card dark gridRowStart={1} gridRowEnd={3}>
      <S.Space>
        <S.EditorWrapper>
          <EnpyreEditor editorProps={editorProps} />
        </S.EditorWrapper>
        <S.HorizontalSpace>
          <S.Button onClick={runCode} disabled={!pyodideLoaded}>
            Run
          </S.Button>
          <S.Button onClick={onSaveProject} disabled={!pyodideLoaded}>
            Save
          </S.Button>
        </S.HorizontalSpace>
      </S.Space>
      <ToastContainer hideProgressBar theme="colored" />
    </S.Card>
  );
};

export default CodeEditor;

import { EnpyreEditor, useCode, usePyodide } from 'enpyre';
import { useContext, useEffect } from 'react';

import { ProjectContext } from '@/contexts/projects';
import { Project } from '@/contexts/projects/types';
import * as S from '@/view/environments/private/en-projects/styles';

type CodeEditorProps = {
  project: Project | null;
};

const CodeEditor = ({ project }: CodeEditorProps) => {
  const { runCode, pyodideLoaded } = usePyodide();
  const { code, setCode } = useCode();
  const { updateProject } = useContext(ProjectContext);

  useEffect(() => {
    setCode(project?.code);
  }, [setCode, project]);

  const onSaveProject = () => {
    if (!project) return;

    project.code = code;
    updateProject(project);
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
    </S.Card>
  );
};

export default CodeEditor;

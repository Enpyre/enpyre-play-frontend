import {
  EnpyreDisplay,
  EnpyreEditor,
  EnpyreProvider,
  useCode,
  useOutput,
  usePyodide,
} from 'enpyre';
import { useContext, useEffect } from 'react';

import { ProjectContext } from '@/contexts/projects';
import Text from '@/view/components/ui/Text';

import { Header } from '../layout/header';
import * as S from './styles';

type ProjectProps = {
  projectId: number;
};

type InstructionsProps = {
  title: string | undefined;
  content: string | undefined;
};

type CodeEditorProps = {
  code: string | undefined;
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

const CodeEditor = ({ code }: CodeEditorProps) => {
  const { runCode, pyodideLoaded } = usePyodide();
  const { setCode } = useCode();

  useEffect(() => {
    setCode(code);
  }, [setCode, code]);

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
        <S.Button onClick={runCode} disabled={!pyodideLoaded}>
          Executar
        </S.Button>
      </S.Space>
    </S.Card>
  );
};

const Display = () => {
  return (
    <S.Card gridColumnStart={1} gridRowStart={1}>
      <EnpyreDisplay />
    </S.Card>
  );
};

const Output = () => {
  const { output } = useOutput();

  return (
    <S.Card dark gridRowStart={3} gridColumnStart={2}>
      <S.CardTitle>Output</S.CardTitle>
      <S.Scrollable>
        {output.map((msg, index) => (
          <pre key={index}>{msg}</pre>
        ))}
      </S.Scrollable>
    </S.Card>
  );
};

export function EnProjects({ projectId }: ProjectProps) {
  const { project, fetchProject } = useContext(ProjectContext);

  useEffect(() => {
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
            <CodeEditor code={project?.code} />
            <Output />
          </S.GridLayout>
        </EnpyreProvider>
      </S.Body>
    </>
  );
}

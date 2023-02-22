import Editor, { Monaco } from '@monaco-editor/react';
import Script from 'next/script';
import { useRef } from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
  gridRow?: string;
  gridColumn?: string;
}

const Body = styled.div`
  width: 100%;
  padding: 1rem;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

const Card = styled.div<CardProps>`
  background: white;
  padding: 1rem;

  ${({ gridRow }) =>
    gridRow
      ? css`
          grid-row: ${gridRow};
        `
      : null}

  ${({ gridColumn }) =>
    gridColumn
      ? css`
          grid-column: ${gridColumn};
        `
      : null}
`;

const Instructions = () => (
  <Card gridRow="span 2">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac metus
      neque. Proin finibus tristique luctus. Vivamus malesuada congue lacinia.
      Quisque nisl mauris, faucibus et tortor id, facilisis tempus lectus. Donec
      nec nibh nec metus gravida vulputate. Morbi ultrices ligula lectus, a
      accumsan neque placerat et. In placerat mi varius arcu ornare tincidunt.
      Ut sed erat ligula. Maecenas tempus elementum turpis non tristique. Donec
      sodales orci et orci vestibulum, a volutpat dolor rutrum. Cras nec congue
      purus. Pellentesque non condimentum risus. Aliquam erat volutpat.
      Pellentesque commodo sem sit amet venenatis ultricies.
    </p>
  </Card>
);

const CodeEditor = () => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    console.log('hhh', editor, monaco);
    editorRef.current = editor;
  }

  return (
    <Card gridRow="span 2">
      <Editor
        defaultLanguage="python"
        defaultValue="# some comment"
        onMount={handleEditorDidMount}
        theme="vs-dark"
        height="45vh"
      />
    </Card>
  );
};

const Display = () => {
  return <Card />;
};

const Output = () => {
  return <Card gridColumn="2" />;
};

export default function Code() {
  return (
    <Body>
      <GridLayout>
        <Display />
        <CodeEditor />
        <Instructions />
        <Output />
      </GridLayout>
    </Body>
  );
}

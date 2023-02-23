import {
  EnpyreDisplay,
  EnpyreEditor,
  EnpyreProvider,
  useCode,
  usePyodide,
} from 'enpyre';
import { useEffect } from 'react';

import { code } from '@/view/components/ui/code/code';
import Text from '@/view/components/ui/Text';

import * as S from './styles';

const Instructions = () => (
  <S.Card gridRow="span 2">
    <S.Space>
      <Text>Lorem ipsum dolor sit amet</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <Text>Nullam ac metus neque</Text>
      <Text>
        Proin finibus tristique luctus. Vivamus malesuada congue lacinia.
        Quisque nisl mauris, faucibus et tortor id, facilisis tempus lectus.
      </Text>

      <ul>
        <li>
          <Text>Donec nec nibh nec metus gravida vulputate.</Text>
        </li>
        <li>
          <Text>Morbi ultrices ligula lectus.</Text>
        </li>
        <li>
          <Text>A accumsan neque placerat et.</Text>
        </li>
        <li>
          <Text>In placerat mi varius arcu ornare tincidunt.</Text>
        </li>
      </ul>
      <Text>
        Ut sed erat ligula. Maecenas tempus elementum turpis non tristique.
        Donec sodales orci et orci vestibulum, a volutpat dolor rutrum.
      </Text>
    </S.Space>
  </S.Card>
);

const CodeEditor = () => {
  const { runCode, pyodideLoaded } = usePyodide();
  const { setCode } = useCode();

  useEffect(() => {
    setCode(code);
  }, [setCode]);

  return (
    <S.Card gridRow="span 2">
      <EnpyreEditor />
      <button onClick={runCode} disabled={!pyodideLoaded}>
        Executar
      </button>
    </S.Card>
  );
};

const Display = () => {
  return (
    <S.Card>
      <EnpyreDisplay />
    </S.Card>
  );
};

const Output = () => {
  return <S.Card />;
};

export function CodePage() {
  return (
    <S.Body>
      <EnpyreProvider>
        <S.GridLayout>
          <Display />
          <CodeEditor />
          <Instructions />
          <Output />
        </S.GridLayout>
      </EnpyreProvider>
    </S.Body>
  );
}

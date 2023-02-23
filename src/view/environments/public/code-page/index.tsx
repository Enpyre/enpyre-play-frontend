import { EnpyreDisplay, EnpyreEditor, EnpyreProvider } from 'enpyre';

import * as S from './styles';

const Instructions = () => (
  <S.Card gridRow="span 2">
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
  </S.Card>
);

const CodeEditor = () => {
  return (
    <S.Card gridRow="span 2">
      <EnpyreEditor />
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

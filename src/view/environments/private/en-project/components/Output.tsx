import { useOutput } from 'enpyre';
import { useEffect, useRef } from 'react';

import * as S from '@/view/environments/private/en-project/styles';

const Output = () => {
  const { output } = useOutput();
  const scrollableRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!scrollableRef || !scrollableRef.current) return;

    const scrollableElement = scrollableRef.current;
    scrollableElement.scrollTop = scrollableElement.scrollHeight;
  }, [output]);

  return (
    <S.Card dark gridRowStart={3} gridColumnStart={2}>
      <S.CardTitle>Output</S.CardTitle>
      <S.Scrollable ref={scrollableRef}>
        {output.map((msg, index) => (
          <pre key={index}>{msg}</pre>
        ))}
      </S.Scrollable>
    </S.Card>
  );
};

export default Output;

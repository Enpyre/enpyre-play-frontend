import { EnpyreDisplay } from 'enpyre';

import * as S from '@/view/environments/private/en-projects/styles';

const Display = () => {
  return (
    <S.Card gridColumnStart={1} gridRowStart={1}>
      <EnpyreDisplay />
    </S.Card>
  );
};

export default Display;

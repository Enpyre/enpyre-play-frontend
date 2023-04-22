import { EnpyreDisplay } from 'enpyre';

import * as S from '@/view/environments/private/en-project/styles';

const Display = () => {
  return (
    <S.Card gridColumnStart={1} gridRowStart={1} gridRowEnd={3}>
      <EnpyreDisplay />
    </S.Card>
  );
};

export default Display;

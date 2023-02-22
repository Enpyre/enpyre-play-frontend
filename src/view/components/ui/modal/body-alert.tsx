import React from 'react';

import { WrapperAlert } from './styles';
import { BodyProps } from './types';

export const BodyAlert: React.FC<BodyProps> = ({
  text,
  description,
  msgDefaultError = false,
}) => {
  return (
    <WrapperAlert>
      <h3 className={!description && !msgDefaultError ? 'rem-margin' : ''}>
        {text}
      </h3>
      {!!description && description}
      {!!msgDefaultError && <p>Tente novamente em alguns minutos.</p>}
    </WrapperAlert>
  );
};

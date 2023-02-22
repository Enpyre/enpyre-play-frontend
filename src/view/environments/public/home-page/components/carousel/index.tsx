import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import * as S from './styles';

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <S.Wrapper ref={emblaRef}>
      <S.Container>
        <S.Slide>Slide 1</S.Slide>
        <S.Slide>Slide 2</S.Slide>
        <S.Slide>Slide 3</S.Slide>
        <S.Slide>Slide 4</S.Slide>
      </S.Container>
    </S.Wrapper>
  );
};

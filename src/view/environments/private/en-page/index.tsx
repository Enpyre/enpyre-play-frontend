import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

import { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';

import { Header } from '../layout/header';
import * as S from './styles';

export const EnPage = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 300,
    fullWidth: 768,
    height: 300,
  });
  const getHeight =
    typeof window !== 'undefined' ? (window.innerHeight - 130) / 200 : 1;
  const getWidth =
    typeof window !== 'undefined' ? window.innerWidth / 200 - 0.4 : 1;
  const getFullWidth = typeof window !== 'undefined' ? window.innerWidth : 1;

  useEffect(() => {
    getHeight !== null
      ? setWindowDimensions((old) => {
          return { ...old, height: getHeight };
        })
      : null;
    getWidth !== null
      ? setWindowDimensions((old) => {
          return { ...old, width: getWidth };
        })
      : null;
    getFullWidth !== null
      ? setWindowDimensions((old) => {
          return { ...old, fullWidth: getFullWidth };
        })
      : null;
  }, []);
  const layout = [
    { i: 'game', x: 0, y: 0, w: 1, h: windowDimensions.height },
    { i: 'help', x: 0, y: 1, w: 1, h: windowDimensions.height },
    { i: 'code', x: 1, y: 0, w: 1, h: windowDimensions.height },
    { i: 'errors', x: 1, y: 1, w: 1, h: windowDimensions.height },
  ];
  return (
    <>
      <Header />
      <S.Wrapper>
        <GridLayout
          className="layout-grid"
          layout={layout}
          cols={2}
          rowHeight={100}
          autoSize
          width={windowDimensions.fullWidth}>
          <div key="game">game</div>
          <div key="help">help</div>
          <div key="code">code</div>
          <div key="errors">errors</div>
        </GridLayout>
      </S.Wrapper>
    </>
  );
};

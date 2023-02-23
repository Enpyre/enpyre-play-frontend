import { EnpyreDisplay, EnpyreEditor, useCode, usePyodide } from 'enpyre';
import React, { useEffect } from 'react';

import { code } from './code';

const Code = () => {
  const { runCode, pyodideLoaded } = usePyodide();
  const { setCode } = useCode();

  useEffect(() => {
    setCode(code);
  }, []);

  return (
    <>
      <EnpyreDisplay />
      <EnpyreEditor />
      <button onClick={runCode} disabled={!pyodideLoaded}>
        Run Code
      </button>
    </>
  );
};

export default Code;

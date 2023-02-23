import React, { useEffect } from 'react';
import { EnpyreDisplay, EnpyreEditor, usePyodide, useCode } from 'enpyre';
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
        <button onClick={runCode} disabled={!pyodideLoaded}>Run Code</button>
      </>
  );
}

export default Code;

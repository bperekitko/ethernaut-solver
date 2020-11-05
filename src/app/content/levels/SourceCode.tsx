import { FunctionComponent } from 'react';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SourceCode: FunctionComponent<{ code: string }> = ({ code }) => {
  const customStyles = {
    backgroundColor: '#0e0d14',
    border: '1px solid #262439',
    margin: '50px',
    borderRadius: '5px',
  };
  return (
    <SyntaxHighlighter language='javascript' style={monokaiSublime} customStyle={customStyles} wrapLongLines={true}>
      {code}
    </SyntaxHighlighter>
  );
};

export default SourceCode;

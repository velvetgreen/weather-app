import React from 'react';

const tokenize = (formula: string) => formula
  .split(/(\d*_?\d+)/)
  .map((token, idx) => (idx % 2
    ? <sub key={idx}>{token.replace('_', '.')}</sub>
    : token));

export default tokenize;

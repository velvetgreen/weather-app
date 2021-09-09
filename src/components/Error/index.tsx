import React from 'react';
import s from './index.module.css';

export const Error: React.FC = () => {
  const errorMsg = "Oops! There's no such city!";
  return (
    <div className={s.error}>{errorMsg}</div>
  );
};

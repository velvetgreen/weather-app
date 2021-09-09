import React, { useState, useMemo } from 'react';
import getSeason from 'utils/getSeason';
import { Loader } from 'components/Loader';
import s from './index.module.css';

export const Background: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>('');

  const month = new Date().getMonth().toString();

  const currentSeason = useMemo(() => getSeason(month), [month]);

  const img = new Image();

  img.onload = (): void => {
    setImageSrc(`https://source.unsplash.com/1920x1080/?${currentSeason},forest`);
    setIsLoading(false);
  };
  img.src = `https://source.unsplash.com/1920x1080/?${currentSeason},forest`;

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={s.background}
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      />
    </>
  );
};

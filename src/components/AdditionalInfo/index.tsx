import React, { useContext } from 'react';
import Context from 'context';
import s from './index.module.css';

export const AdditionalInfo: React.FC = () => {
  const { weatherData } = useContext(Context);
  return (
    <div className={s.root}>
      <div className={s.block}>
        {' '}
        <span className={s.bold}>Humidity</span>
        {' '}
        {weatherData?.current?.humidity}
        %
      </div>
      <div className={s.block}>
        <span className={s.bold}>UVI</span>
        {' '}
        {weatherData?.current?.uvi}
      </div>
      <div className={s.block}>
        <span className={s.bold}>Pressure</span>
        {' '}
        {weatherData?.current?.pressure}
        mb
      </div>
      <div className={s.block}>
        <span className={s.bold}>Wind</span>

        {' '}
        {weatherData?.current?.wind_speed}
        m/s
      </div>
    </div>
  );
};

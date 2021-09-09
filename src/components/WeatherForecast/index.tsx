import React, { useContext, useMemo } from 'react';
import Context from 'context';
import { WeatherDataDailyType } from 'types';
import s from './index.module.css';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const renderWeekDay = (day: WeatherDataDailyType) => {
  const date = new Date(day.dt * 1000);
  return days[date.getDay()];
};
export const WeatherForecast: React.FC = () => {
  const { weatherData } = useContext(Context);
  const closestDays = useMemo(() => weatherData?.daily.slice(0, 3), [weatherData]);
  if (!weatherData?.daily) {
    return (
      <div>404. Something went wrong!</div>
    );
  }
  return (
    <div className={s.root}>
      {closestDays?.map((day) => (
        <div key={day.dt} className={s.block}>
          <span className={s.span}>{renderWeekDay(day).substr(0, 3)}</span>
          <div className={s.description}>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="icon" />
          </div>
          <div className={s.temp}>{Math.round(day.temp.day)}</div>
        </div>
      ))}

    </div>
  );
};

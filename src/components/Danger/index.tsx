import React, { useContext, useState, useEffect } from 'react';
import Context from 'context';
import s from './index.module.css';

export const Danger: React.FC = () => {
  const { weatherData } = useContext(Context);
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const currentAlerts: string[] = [];
    if (typeof weatherData?.alerts !== 'undefined') {
      weatherData.alerts.forEach((alert) => {
        currentAlerts.push(alert.event);
      });
      const uniq = currentAlerts.filter((item, pos) => currentAlerts.indexOf(item) === pos);
      setAlerts(uniq);
    }
  }, [weatherData]);

  const handleClick = (clickedAlert: string): void => {
    setAlerts(alerts.filter((item) => item !== clickedAlert));
  };

  if (!weatherData?.alerts) return null;

  return (
    <>

      <div className={s.root}>
        {alerts.map((alert, index) => (
          alert && (
            <div key={index} className={s.block}>
              <p>
                {alert}
                . Be careful!
              </p>
              <button className={s.button} onClick={() => handleClick(alert)} type="button">x</button>
            </div>
          )

        ))}
      </div>

    </>
  );
};

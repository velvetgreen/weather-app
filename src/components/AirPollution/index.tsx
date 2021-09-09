import React, { useState, useEffect, useContext } from 'react';
import Context from 'context';
import getPollutionLevel from 'utils/getPollutionLevel';
import tokenize from 'utils/tokenize';
import cn from 'classnames';
import s from './index.module.css';

type AirPollutionPropsType = {
  isVisible: boolean
}
type PollutionDataType = {
  [x: string]: number
}
export const AirPollution: React.FC<AirPollutionPropsType> = ({ isVisible }) => {
  const [pollutionData, setPollutionData] = useState<PollutionDataType>({});
  const { currentPlace } = useContext(Context);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${currentPlace?.lat}&lon=${currentPlace?.lon}&appid=c33f7e6f45a0a786c34f2e1d3407f292&&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setPollutionData(data.list[0].components);
      });
  }, [currentPlace]);

  return (
    <div className={s.root}>
      <div className={cn([s.wrapper], { [s.visible]: isVisible })}>
        {Object.entries(pollutionData).map(([key, value]) => (
          <div
            className={
              cn([s.block], { [s.safe]: getPollutionLevel(key, value) === 'safe' })
            }
            data-element={key}
            key={key}
          >
            <span className={s.bold}>
              {tokenize(key)}
            </span>
            :
            {' '}
            {Math.round(value)}
          </div>
        ))}
      </div>
    </div>

  );
};

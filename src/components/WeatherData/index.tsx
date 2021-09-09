import { useContext, useState } from 'react';
import Context from 'context';
import Classnames from 'classnames';
import getDate from 'utils/getDate';
import { WeatherForecast } from 'components/WeatherForecast';
import { AdditionalInfo } from 'components/AdditionalInfo';
import { AirPollution } from 'components/AirPollution';
import s from './index.module.css';

export const WeatherData: React.FC = () => {
  const { weatherData, currentPlace } = useContext(Context);
  const [isPollutionBlockVisible, setIsPollutionBlockVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Learn more about pollution');

  if (!weatherData?.current) return null;
  const iconId = weatherData.current.weather[0].icon;
  const togglePollutionBlockVisibility = () => {
    setIsPollutionBlockVisible(!isPollutionBlockVisible);

    if (isPollutionBlockVisible) {
      setButtonText('Hide pollution data');
    } else {
      setButtonText('Show pollution data');
    }
  };
  return (
    <>
      <div className={Classnames([s.root], { [s.grow]: isPollutionBlockVisible })}>
        <div className={s.container}>
          <div>
            Россия,
            {' '}
            {currentPlace?.name}
          </div>
          <div>{getDate()}</div>
          <div className={s.tempBlock}>
            <div>
              <div className={s.temp}>
                Now:
                {' '}
                {Math.round(weatherData.current.temp)}
              </div>
              <div className={s.feelsLike}>
                <span className={s.bold}>Feels like: </span>
                {Math.round(weatherData.current.feels_like)}
              </div>
            </div>
            <div className={s.description}>
              <img src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} alt="icon" />
            </div>
          </div>
          <AdditionalInfo />
          <WeatherForecast />
          <button
            className={s.button}
            type="button"
            onClick={togglePollutionBlockVisibility}
          >
            {buttonText}
            &nbsp;
            <i className="bi bi-arrow-right" />
          </button>
        </div>
        <AirPollution isVisible={isPollutionBlockVisible} />

      </div>

    </>
  );
};

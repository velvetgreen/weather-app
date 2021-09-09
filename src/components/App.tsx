import React, { useState, useEffect } from 'react';
import { ContextType } from 'types';
import { Background } from 'components/Background';
import { WeatherData } from 'components/WeatherData';
import { Error } from 'components/Error';
import { Danger } from 'components/Danger';
import { Search } from 'components/Search';
import Context from 'context';

import '../index.css';

function App() {
  const [coordinatesData, setCoordinatesData] = useState<ContextType['coordinatesData']>([]);
  const [currentPlace, setCurrentPlace] = useState<ContextType['currentPlace']>(
    { lat: '55.75583', lon: '37.61778', name: 'Москва' },
  );
  const [weatherData, setWeatherData] = useState<ContextType['weatherData']>();
  const [error, setError] = useState<boolean>(false);
  const [isShown, setIsShown] = useState<boolean>(true);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/pensnarik/russian-cities/master/russian-cities.json')
      .then((response) => response.json())
      .then((data) => {
        setCoordinatesData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentPlace?.lat}&lon=${currentPlace?.lon}&appid=c33f7e6f45a0a786c34f2e1d3407f292&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, [currentPlace]);

  const handleSearch: ContextType['handleSearch'] = (params: string) => {
    const current = coordinatesData?.find((place) => place.name === params);
    if (current) {
      setCurrentPlace({ ...current.coords, name: current.name });

      setError(false);
    } else {
      setError(true);
    }
  };
  const toggleAlert: ContextType['toggleAlert'] = () => {
    setIsShown(!isShown);
  };
  return (
    <div className="App">
      <Context.Provider value={{
        weatherData,
        handleSearch,
        toggleAlert,
        currentPlace,
        coordinatesData,
      }}
      >
        <div className="container">
          <header>
            <Search />
          </header>
          {isShown && <Danger />}
          <Background />
          {error ? <Error /> : <WeatherData />}
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;

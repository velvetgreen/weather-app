type WeatherDataType = {
  id: number
  main: string
  description: string
  icon: string
}
export type WeatherDataDailyType = {
    dt: number
    temp: {
      day: number
    }
    weather: WeatherDataType[]
}

export type CoordinateType = {
  coords: {
    lat: string
    lon: string
  }
  name: string
  population: number
}

export type ContextType = {
  weatherData?: {
    current?: {
      /** Влажность, проценты */
      humidity: number
      /** УФ излучение, баллы */
      uvi: number
      /** Скорость ветра, м/с */
      wind_speed: number
      /** Давление, ммртс */
      pressure: number
      /** Температура по ощущениям, °С */
      feels_like: number
      /** Температура, °С */
      temp: number
      /** Текущая погода(ясно, облачно и т.п.) */
      weather: WeatherDataType[]
    }
    /** Прогноз погоды на неделю */
    daily: WeatherDataDailyType[]
    /** Предупреждения об опасности */
    alerts: {
      event: string
    }[]

  }
  handleSearch(params: string): void
  toggleAlert(): void
  currentPlace: {
    lat: string
    lon: string
    name: string
  }
  coordinatesData: CoordinateType[]
}

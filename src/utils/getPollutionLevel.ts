const getPollutionLevel = (key: string, value: number): string => {
  if ((key === 'co' || key === 'no2') && value <= 100) {
    return 'safe';
  } if ((key === 'o3' || key === 'so2') && value <= 200) {
    return 'safe';
  } if ((key === 'pm2_5' || key === 'no' || key === 'nh3') && value <= 20) {
    return 'safe';
  } if (key === 'pm10' && value <= 40) {
    return 'safe';
  }
  return '';
};

export default getPollutionLevel;

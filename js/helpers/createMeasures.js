export const createMeasures = (data, callback) => {
  return [
    { title: 'Wind', measure: data.wind.speed + ' m/s, ' + callback(data.wind.deg) },
    { title: 'Pressure', measure: data.main.pressure + ' mmHg' },
    { title: 'Humidity', measure: data.main.humidity + ' %' },
    { title: 'Clouds', measure: data.clouds.all + ' %' },
  ];
};

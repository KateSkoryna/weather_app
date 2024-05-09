export const convertTemperature = (dergees, measure) => {
  if (measure === 'C') {
    return (dergees * 9) / 5 + 32;
  }
  return ((dergees - 32) * 5) / 9;
};

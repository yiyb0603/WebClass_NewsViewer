import timeCounting from 'time-counting';

export const calculateTime = (time) => {
  return timeCounting(new Date(time), { lang: 'ko' })
}
export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const seconds = time % 60;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `00:${displayMinutes}:${displaySeconds}`;
};

export const countGenerator = () => {
  return Math.floor(Math.random() * 150) + 30;
};

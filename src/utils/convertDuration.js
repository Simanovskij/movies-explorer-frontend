export default function convertDuration(mins) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  if (hours < 1) {
    return `${minutes} минут`;
  } if (minutes == 0) {
    return `${hours}ч.`;
  }
  return `${hours}ч. ${minutes}мин`;
}

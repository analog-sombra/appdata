const formatDateTime = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const meridiem = date.getHours() < 12 ? "AM" : "PM";

  const formattedTime =
    (hours % 12 || 12) +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    " " +
    meridiem;

  //  if month and day is less than 10, add 0 before month
  if (month < 10 && day < 10) {
    return `0${day}-0${month}-${year} ${formattedTime}`;
  } else if (month < 10) {
    return `${day}-0${month}-${year} ${formattedTime}`;
  } else if (day < 10) {
    return `0${day}-${month}-${year} ${formattedTime}`;
  } else {
    return `${day}-${month}-${year} ${formattedTime}`;
  }
};

export { formatDateTime };

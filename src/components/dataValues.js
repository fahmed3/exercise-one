export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function processDate(dateValue) {
  const date = new Date(dateValue);
  const dayOfWeek = date.getDay(); //gives number
  const calendarDate = date.getDate();
  const month = date.getMonth(); //also gives number
  const year = date.getFullYear();
  return `${days[dayOfWeek]}, ${months[month]} ${calendarDate}, ${year}`;
}

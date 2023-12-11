export const getShortenDateString = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const d: Date = new Date(date);
  return d.toLocaleString("en-US", options);
};

const formatYearstamp = (timestamp) => {
  if (!timestamp) return "";
  const date = new Date(timestamp);

  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

export const formatTimestamp = (timestamp) => {
  if (!timestamp) return "";
  const date = new Date(timestamp);

  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");

  const formattedDate = `${hours}:${minutes}:${seconds}`;

  return formattedDate;
};
export default formatYearstamp;

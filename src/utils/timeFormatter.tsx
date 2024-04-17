export const timeFormatter = (value: string) => {
  var time = new Date(value);

  // Extract hours and minutes from the original date
  var hours = time.getHours();
  var minutes = time.getMinutes();

  if (hours === 0) {
    hours = 12;
  }

  // Format the time into "HH:MM" format
  var formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

  return formattedTime;
};

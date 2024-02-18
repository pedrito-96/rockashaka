export function transformDatetime(datetimeStr: string): string {
  // Parse the input datetime string
  const dt = new Date(datetimeStr);

  // Extract date components
  const year = dt.getUTCFullYear();
  const month = (dt.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = dt.getUTCDate().toString().padStart(2, "0");
  const hours = dt.getUTCHours().toString().padStart(2, "0");
  const minutes = dt.getUTCMinutes().toString().padStart(2, "0");

  // Format the datetime as per your desired output format
  const formattedDatetime = `${month}-${day}-${year}, ${hours}:${minutes}`;

  return formattedDatetime;
}

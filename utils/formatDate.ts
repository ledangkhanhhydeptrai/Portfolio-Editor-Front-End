export const formatDate = (
  date: string | null
) => {
  if (!date) {
    return "";
  }

  const [year, month, day] =
    date.split("-");

  if (!year || !month || !day) {
    return date;
  }

  return `${day}/${month}/${year}`;
};
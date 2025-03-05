export const day = (dateString) => {
  const date = new Date(dateString);
  return String(new Date(date).getDate()).padStart(2, "0");
};

export const month = (dateString) => {
  const date = new Date(dateString);
  return String(new Date(date).getMonth() + 1).padStart(2, "0");
};

export const shortDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("uk-UA", { weekday: "short" }).format(
    new Date(date)
  );
};

export const fullDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

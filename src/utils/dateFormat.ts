export const formatDate = (date: any) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateDay = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${year}/${month >= 10 ? month : "0" + month}/${
    dateDay >= 10 ? dateDay : "0" + dateDay
  }, ${hour >= 10 ? hour : "0" + hour}:${minute >= 10 ? minute : "0" + minute}`;
};

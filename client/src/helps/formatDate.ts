export const formatDate = (date: any) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let dayofweek = date.getDay();
  const dayname = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  return dayname[dayofweek] + " ngày " + day + "/" + month + "/" + year;
};

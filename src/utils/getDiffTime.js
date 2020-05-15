export const getDiffTime = (date1) => {
  date1 = new Date(date1);
  const date2 = new Date();

  const diffMilliSeconds = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffMilliSeconds / (1000 * 60 * 60 * 24));

  return {
    diffMilliSeconds,
    diffDays,
  };
};

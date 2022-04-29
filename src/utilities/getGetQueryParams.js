export const getQueryParams = (name) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get(name);
};

export default getQueryParams;

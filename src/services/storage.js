const ROOT = process.env.REACT_APP_NAME || '@REACT_APP/';

export const save = (name, payload = {}) => {
  const key = `${ROOT}${name}`;

  localStorage.setItem(key, JSON.stringify({ payload }));

  return payload;
};

export const load = (name) => {
  try {
    const key = `${ROOT}${name}`;

    const { payload } = JSON.parse(localStorage.getItem(key));

    return payload;
  } catch (err) {
    return null;
  }
};

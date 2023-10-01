import { del, get, post } from "../utils/request";

export const getLockBoxes = () => {
  const route = "/lockbox/";
  return get(route);
};

export const getLockBox = websiteUrl => {
  const route = `/get/${websiteUrl}`;
  return get(route);
};

export const addLockBox = data => {
  const route = "/lockbox/";
  return post(route, data);
};

export const deleteLockBox = websiteUrl => {
  const route = `/get/${websiteUrl}`;
  return del(route);
};

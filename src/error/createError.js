import { ERROR_PREFIX } from "./message";

export const createError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}\n`);
};

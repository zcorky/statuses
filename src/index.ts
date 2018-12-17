/*
 * Author: zero (uniquecolesmith@gmail.com)
 * Created At: 2018-12-17 15:25:50
 * Last Modified: 2018-12-17 16:32:22
 * Copyright 2018 - Zero
 * MIT Licensed
 */

import { codes } from './utils/codes';

// meaningful
const STATUS = {
  STATUS_CODES: codes,
  STATUS_DESCRIPTIONS: populateStatusesMap(codes),

  // status codes for redirects
  redirect: {
    300: true,
    301: true,
    302: true,
    303: true,
    304: true,
    305: true,
    307: true,
    308: true,
  },

  // status codes for empty bodies
  empty: {
    204: true,
    205: true,
    304: true,
  },

  // status codes for when you should retry the request
  retry: {
    502: true,
    503: true,
    504: true,
  },
};

/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param code string | number
 */
export const status = (code: string | number) => {
  if (typeof code === 'number') {
    if (!STATUS.STATUS_CODES[`${code}`]) {
      throw new Error(`invalid status code: ${code}`);
    }
    return code;
  }

  const num = parseInt(code);
  if (!isNaN(num)) {
    if (!STATUS.STATUS_CODES[code]) {
      throw new Error(`invalid status code: ${code}`);
    }
    return num;
  }

  const codeStr = STATUS.STATUS_DESCRIPTIONS[code];
  if (!codeStr) {
    throw new Error(`invalid status message: ${code}`);
  }
  return parseInt(codeStr);
};

export default status;

export const isRedirect = (code: number) => {
  return !!STATUS.redirect[code];
};

export const isEmpty = (code: number) => {
  return !!STATUS.empty[code];
};

export const isRetry = (code: number) => {
  return !!STATUS.retry[code];
};

function populateStatusesMap(maps: { [key: string]: string }) {
  return Object.keys(maps).reduce((last, key) => (last[maps[key]] = key, last), {});
};

import { Axios } from 'axios';

export function apiHandler(requestArgs) {
  return new Promise((resolve, reject) => {
    Axios(requestArgs)
    .then((res) => {
      resolve(res);
    })
    .catch((err) => reject(err))
  });
}
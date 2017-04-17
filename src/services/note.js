import request from '../utils/request';

export async function query(a) {
  return request('http://localhost:8080/api/notes', a);
}

import { HTTP } from '../../libs/http';
import { API_URL } from './constants';

export async function getByName(search: string) {
  const data = await HTTP.get(API_URL + search);
  return data.filter((country: any) => country.name.toUpperCase().includes(search.toUpperCase()));
}

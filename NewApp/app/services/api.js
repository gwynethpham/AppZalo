import axios from 'axios';
import {apiLocal} from '../lib/config';

export const loginRequest = async(param) => {
    const login =  await axios.post(`${apiLocal}/users/authenticate`, {data :param});
    return login.data;
}
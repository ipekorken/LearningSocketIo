import {apiUrl} from './src/apis/apiUrl';
import io from 'socket.io-client';

export const socket = io(`${apiUrl}:3000`);

import LogtoClient from '@logto/browser';

import { endpoint, clientId } from './consts.js';
import Callback from './pages/Callback.js';
import Home from './pages/Home.js';

import './index.scss';

const logtoClient = new LogtoClient({ endpoint, clientId });

const app = document.querySelector('#app');

// Could replace this with a formal router solution
const isCallback = window.location.pathname.startsWith('/callback');
const render = isCallback ? Callback : Home;

render(app, logtoClient);
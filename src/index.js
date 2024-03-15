import router from './routes';
import  initialServer  from './Server';

const startServer = initialServer(router);
export default startServer;

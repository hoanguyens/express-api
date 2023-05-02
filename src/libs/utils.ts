
const dev = process.env.NODE_ENV !== 'production';

//Get port from environment
const port = normalizePort(process.env.PORT || '8000');

// 
const MONGO_URL = dev ? process.env.MONGO_URL_TEST : process.env.MONGO_URL;

/**
 * Normalize a port into a number, string, or false
 * @param val 
 * @returns 
 */
function normalizePort(val: any){
    const port = parseInt(val, 10);

    //Name pipe
    if(isNaN(port)) return val;
    // port number
    if(port >= 0) return val;

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  
export {
    dev,
    port,
    normalizePort,
    onError,
    MONGO_URL
}
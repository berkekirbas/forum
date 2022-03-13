function normalizePort(port) {
  let value = parseInt(port, 10);

  if (isNaN(port)) {
    // named pipe
    return port;
  }

  if (value >= 0) {
    // port number
    return value;
  }

  return false;
}

export default normalizePort;

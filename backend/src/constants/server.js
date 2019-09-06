import path from 'path';

const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || 8888,
  ROOT: path.resolve(__dirname, '..'),
};

export default SERVER_CONFIGS;

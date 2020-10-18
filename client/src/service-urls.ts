export enum SERVICE_ENDPOINT {
  TEST = '/helloWorld',
  EPUB = '/ePubGen'
}
//
// TODO convert to env variables
const DEV_PORT = '5001';
const APP_ID = 'readdit-d42fb';
const REGION = 'us-central1';
//
const DEV_URL = `http://localhost:${DEV_PORT}/${APP_ID}/${REGION}`;
const PROD_URL = `https://${REGION}-${APP_ID}.cloudfunctions.net`;
//
export default (endpoint: SERVICE_ENDPOINT) : string => {
  return process.env.NODE_ENV === 'production' ? PROD_URL.concat(endpoint) : DEV_URL.concat(endpoint);
}






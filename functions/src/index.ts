import * as functions from 'firebase-functions';
import * as cors from 'cors';
import * as Epub from 'epub-gen';
import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';
const corsHandler = cors({ origin: true });
const { logger } = functions;

console.log = logger.log;
console.error = logger.error;
console.warn = logger.warn;
console.info = logger.info;

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  corsHandler(request, response, () => {
    response.send("Hello from Readdit!");
  });
});

export const ePubGen = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {


    const options = {
      ...req.body,
      verbose: true,
      tempDir: ''
    };

    const workingDir = path.join(os.tmpdir(), uuid.v4());
    fs.mkdirSync(workingDir);
    const tmpFilePath = path.join(workingDir, 'test.epub');

    options.tempDir = workingDir;

    logger.debug('Creating new Epub and writing to: ', tmpFilePath);

    try {
      //
      await generateEpub(options, tmpFilePath);
      await downloadFile(res, tmpFilePath, options.title);
      await removeTempFile(tmpFilePath);
      await removeTempDir(workingDir);
      //
    } catch (err) {
      //
      logger.error(err);
      //
    }

  });
  
});
//
const generateEpub = (options, pathName) => new Promise((resolve, reject) => new Epub(options, pathName).promise.then(resolve).catch(reject));
//
const downloadFile = (res, pathName, name) => new Promise((resolve, reject) => res.download(pathName, name, err => {
  if (err) {
    reject(`Error downloading file ${pathName}: ${err}`);
  } else {
    resolve();
  }
}));
//
const removeTempFile = (pathName) => new Promise((resolve, reject) => {
  fs.unlink(pathName, err => {
    if (err) {
      reject(`Error removing temp epub ${pathName}: ${err}`);
    } else {
      resolve();
    }
  })
});
//
const removeTempDir= (pathName) => new Promise((resolve, reject) => {
  fs.rmdir(pathName, err => {
    if (err) {
      reject(`Error removing temp working dir ${pathName}: ${err}`);
    } else {
      resolve();
    }
  })
});

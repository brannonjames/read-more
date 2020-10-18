import * as functions from 'firebase-functions';
import * as cors from 'cors';
const corsHandler = cors({ origin: true });
import * as Epub from 'epub-gen';
import * as os from 'os';
import * as fs from 'fs';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  corsHandler(request, response, () => {
    response.send("Hello from Readdit!");
  });
});

const book = {
  title: 'Test Book',
  author: 'Jimmy',
  content: [{ title: 'Chapter 1', data: '<h1>Hello World</h1>' }]
}

export const ePubGen = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    const tmpDir = os.tmpdir();
    const output = tmpDir + '/test.epub';

    new Epub(book, output).promise.then(() => {
      res.download(output, () => {
        fs.unlinkSync(output);
      })
    });
  });
  
});

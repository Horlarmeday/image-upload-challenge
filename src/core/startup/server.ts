import '../config/env';
import * as express from 'express';
import * as path from 'path';
import * as fileUpload from 'express-fileupload';
import { db } from '../database/database.provider';
import { handleError } from '../../common/responses/error-response';
import routes from '../../modules/images/images.routes'

export async function expressApp() {
  const app = express();
  await db.useFactory();
  app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles : true,
    tempFileDir : '/tmp/'
  }));
  app.use(express.json({ limit: '5mb' }));
  app.use(express.static('download'));
  app.use(express.static(path.join(__dirname, '../../public')));
  app.use('/api', routes);
  app.use(handleError);
  return app
}
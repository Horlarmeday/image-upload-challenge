import '../config/env';
import './logger'
import * as express from 'express';
import * as path from 'path';
import * as fileUpload from 'express-fileupload';
import sequelize from '../database/database.provider';
import error from '../middleware/error';
import routes from './routes';

const app = express();
sequelize.sync().then(r => r);

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(express.json({ limit: '5mb' }));
app.use(express.static('download'));
app.use(express.static(path.join(__dirname, '../../public')));

routes(app);

app.use(error);

export default app
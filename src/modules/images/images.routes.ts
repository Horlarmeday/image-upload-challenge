import { Router } from 'express';
import { ImagesController } from './images.controller';

export default (app: Router): void => {
  const router = Router();

  app.use('/images', router);

  router.post('/', ImagesController.uploadImage);
  router.get('/', ImagesController.findAll);
  router.get('/:id', ImagesController.findOne);
}


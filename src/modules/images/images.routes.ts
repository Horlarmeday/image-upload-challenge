import { Router } from 'express';
import { ImagesController } from './images.controller';
import { imageChecks } from './validation/image-middleware';

const router = Router();

router.post('/', imageChecks, ImagesController.uploadImage);
router.get('/', ImagesController.findAll);
router.get('/:id', ImagesController.findOne);

export default router;



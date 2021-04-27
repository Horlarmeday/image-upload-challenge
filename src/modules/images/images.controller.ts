import {Request, Response, NextFunction} from 'express'
import { ImagesService } from './images.service';
import { Image } from './entities/image.entity';
import { successResponse } from '../../common/responses/success-response';
import { SuccessResponse } from '../../common/types/types';

export class ImagesController {
  static imagesService = ImagesService;

  static async uploadImage(req: Request, res: Response, next: NextFunction):Promise<SuccessResponse<Image>> {
    const { file } = req.files;

    const image = await ImagesController.imagesService.upload(file);
    return successResponse(res, 201, image)
  }

  static async findAll(req: Request, res: Response, next: NextFunction): Promise<SuccessResponse<Image[]>> {
    const images = await ImagesController.imagesService.getAll();

    return successResponse(res, 200, images)
  }

  static async findOne(req: Request, res: Response, next: NextFunction): Promise<SuccessResponse<Image>> {
    const { id } = req.params;
    const image = await ImagesController.imagesService.findOne(id);

    return successResponse(res, 200, image)
  }
}
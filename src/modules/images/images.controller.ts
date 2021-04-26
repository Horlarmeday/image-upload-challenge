import {Request, Response, NextFunction} from 'express'
import { ImagesService } from './images.service';
import { Image } from './entities/image.entity';
import { successResponse } from '../../common/responses/success-response';
import { SuccessResponse } from '../../common/types/types';
import { ErrorResponse } from '../../common/responses/error-response';

export class ImagesController {
  static imagesService = ImagesService;

  static async uploadImage(req: Request, res: Response, next: NextFunction):Promise<SuccessResponse<Image>> {
    if (!req.files || Object.keys(req.files).length === 0) {
      throw new ErrorResponse(400, 'No files were uploaded.')
    }
    const { file } = req.files;

    const image = await this.imagesService.upload(file);
    return successResponse(res, 200, image)
  }

  static async findAll(req: Request, res: Response, next: NextFunction): Promise<SuccessResponse<Image[]>> {
    const images = await this.imagesService.getAll();

    return successResponse(res, 200, images)
  }

  static async findOne(req: Request, res: Response, next: NextFunction): Promise<SuccessResponse<Image>> {
    const { id } = req.params;
    const image = await this.imagesService.findOne(id);

    return successResponse(res, 200, image)
  }
}
import * as sharp from "sharp";
import { resizeImageInterface } from "../../modules/images/interfaces/image-resize-interface";
import { ImagesService } from "../../modules/images/images.service";
import { Thumbnail } from "../../modules/images/entities/thumbnail.entity";
import { ErrorResponse } from "../responses/error-response";

export const resizeImage = async (imageParams: resizeImageInterface): Promise<Thumbnail> => {
  try {
    const name = imageParams.imageName.split('.');
    const fileName = name[0];
    const extension = name[1];
    const image = `${fileName}_${imageParams.size}.${extension}`;

    await sharp(imageParams.inputPath)
      .resize(imageParams.size, imageParams.size)
      .toFile(`src/public/thumbnails/'${image}`);

    return await ImagesService.saveThumbnail(image, imageParams.baseImageId)
  } catch (e) {
    throw new ErrorResponse(500, e.message)
  }
};

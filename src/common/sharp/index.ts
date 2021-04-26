import * as sharp from 'sharp'
import { resizeImageInterface } from '../../modules/images/interfaces/image-resize-interface';
import { ImagesService } from "../../modules/images/images.service";
import { Thumbnail } from "../../modules/images/entities/thumbnail.entity";

export const resizeImage = async (imageParams: resizeImageInterface): Promise<Thumbnail> => {
  const image = `${imageParams.imageName}_${imageParams.size}`;

  await sharp(imageParams.inputPath)
    .resize(imageParams.size, imageParams.size)
    .toFile(`${__dirname} '../../thumbnails/'${image}`);

  return await ImagesService.saveThumbnail(image, imageParams.baseImageId);
};

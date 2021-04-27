import { Image } from './entities/image.entity';
import { Thumbnail } from './entities/thumbnail.entity';
import { ErrorResponse } from '../../common/responses/error-response';
import { ImageProperties } from './interfaces/image-properties';
import { resizeImage } from '../../common/sharp';
import * as Promisify from 'bluebird'

export class ImagesService {
  private static imageRepository = Image;
  private static thumbnailRepository = Thumbnail;

  static async upload(file): Promise<Image> {
    try {
      const path = 'src/public/images/' + file.name;
      const imageName = file.name;
      const sizes = [300, 200];

      await this.saveImageToDisk(file, path);

      const savedImage = await ImagesService.saveImage(file);

      await Promisify.map(sizes, size => {
        resizeImage({
          size,
          inputPath: path,
          imageName,
          baseImageId: savedImage.id
        })
      });
      return savedImage;
    } catch (e) {
      throw new ErrorResponse(500, e.message)
    }
  }

  static async getAll(): Promise<Image[]> {
    return await this.imageRepository.findAll<Image>();
  }

  static async findOne(id: string): Promise<Image> {
    const image = await this.imageRepository.findOne<Image>({
      where: { id }, include: [{ model: Thumbnail }]
    });

    if (!image) {
      throw new ErrorResponse(404, 'image not found')
    }

    return image;
  }

  static async saveImage(file: ImageProperties): Promise<Image> {
    try {
      return await this.imageRepository.create({
        image_url: file.name
      })
    } catch (e) {
      throw new ErrorResponse(500, e.message)
    }
  }

  static async saveThumbnail(image: string, id: string): Promise<Thumbnail> {
    try {
      return await this.thumbnailRepository.create({
        image_url: image,
        image_id: id
      })
    } catch (e) {
      throw new ErrorResponse(500, e.message)
    }
  }

  static async saveImageToDisk(image: ImageProperties, path: string): Promise<void> {
    try {
      await image.mv(path);
    } catch (e) {
      throw new ErrorResponse(500, e.message)
    }
  }
}
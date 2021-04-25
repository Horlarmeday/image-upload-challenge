import { Table, Column, Model, PrimaryKey, DataType, Default, HasMany } from "sequelize-typescript";
import { ThumbnailEntity } from "./thumbnail.entity";

@Table
export class Image extends Model {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  image_url: string;

  @HasMany(()=> ThumbnailEntity)
  thumbnails: ThumbnailEntity
}
import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Image } from "./image.entity";

@Table
export class Thumbnail extends Model{
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  image_url: string;

  @ForeignKey(() => Image)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  image_id: string;

  @BelongsTo(() => Image)
  image: Image;
}
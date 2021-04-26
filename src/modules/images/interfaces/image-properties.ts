export interface ImageProperties {
  name: string,
  mv: (path) => {},
  mimetype: any,
  data: any,
  tempFilePath: any,
  truncated: boolean,
  size: string,
  md5: any
}
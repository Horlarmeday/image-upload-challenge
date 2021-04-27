import * as request from 'supertest';
import { Image } from '../src/modules/images/entities/image.entity';
import server from '../src/core/startup/server';
import { Thumbnail } from '../src/modules/images/entities/thumbnail.entity';


describe('Images endpoints /images', () => {
  const filePath = `src/public/testFile/test.jpg`;
  let image_id;

  afterAll(async () => {
    await Image.destroy({ truncate: true, cascade: false });
    await Thumbnail.destroy({ truncate: true, cascade: false });
  });

  it('should upload an image', async () => {
    const res = await request(server)
      .post('/api/images')
      .attach('file', filePath);
    image_id = res.body.data.id;
    expect(res.status).toBe(201);
  }, 10000);

  it('should not allow upload an image', async () => {
    const res = await request(server)
      .post('/api/images')
      .attach('', '');''
    expect(res.status).toBe(400);
  }, 10000);

  it('should get all images', async () => {
    const res = await request(server)
      .get('/api/images');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0)
  }, 10000);


  it('should get one image', async () => {
    const res = await request(server)
      .get(`/api/images/${image_id}`);
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('image_url');
    expect(res.body.data).toHaveProperty('thumbnails');
    expect(res.body.data.thumbnails.length).toBeGreaterThan(0);
  }, 10000)
});
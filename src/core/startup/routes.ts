import imageRoutes from '../../modules/images/images.routes'
import { NextFunction, Response, Request } from "express";

export default app => {
  app.use('/api/images', imageRoutes);
  app.use((req: Request, res: Response, next: NextFunction) => {
    const err = res.status(404).json({ status: 'error', message: 'Resource does not exist' });
    next(err);
  });
}
import { Request, Response, NextFunction } from 'express';
import logger from '../util/logger';

const NAMESPACE = 'Sample Controller';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logger.info(NAMESPACE, `Sample health check route called.`);

    return res.status(200).json({
        message: 'pong'
    });
};

export default { sampleHealthCheck };

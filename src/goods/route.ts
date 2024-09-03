import express, { Request, Response } from 'express';
import { param } from 'express-validator';

/** router for goods */
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send('Hello World');
});

router.get('/:id', param('id').toInt(), (req: Request, res: Response) => {
    res.send('Hello World');
});

export default router;
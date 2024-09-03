import express, { Request, Response } from 'express';
import UserRepository from './repository';
import { matchedData, param, validationResult } from 'express-validator'

/** router for user */
const router = express.Router();

/**
 * @route GET /api/v1/user
 */
router.get('/', (req: Request, res: Response) => {
    res.send('Hello User');
});


/**
 * @route GET /api/v1/user/:id
 */
router.get('/:id', param('id').toInt(), async (req: Request, res: Response) => {
    const valid = validationResult(req);
    if (!valid.isEmpty()) {
        res.status(400).send('Invalid ID');
        return;
    }

    const data = matchedData(req);
    const result = await new UserRepository().getObject(data.id);
    if (result) {
        res.send(result);
    } else {
        res.status(500).send();
    }
});


/**
 * @route POST /api/v1/user
 */
router.post('/', async (req: Request, res: Response) => {
    const result = await new UserRepository().CreateObject(req.body);
    if (result) {
        res.send(result);
    } else {
        res.status(500).send();
    }
});

export default router;
import express, { Request, Response } from 'express';
import passport from 'passport';

/** router for user */
const router = express.Router();

/**
 * @route POST /api/v1/auth/jwt
 */
router.post('/jwt', (req: Request, res: Response) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).send
        }
        if (!user) {
            return res.status(401).send('Unauthorized');
        }
        return res.send(user);
    })(req, res);
    res.send('Hello User');
});


/**
 * @route POST /api/v1/auth/jwt/refresh
 */
router.post('/jwt/refresh', (req: Request, res: Response) => {

    res.send('Hello User');
});


export default router;
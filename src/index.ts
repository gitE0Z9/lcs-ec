import express from 'express';
import swaggerUi from 'swagger-ui-express';
import authRouter from './auth/route';
import goodsRouter from './goods/route';
import { connect } from './repository/mongo';
import swaggerDocument from './swagger.json';
import userRouter from './user/route';

/** v1 router */
const v1Router = express.Router();
v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/goods', goodsRouter);

/** main app */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connect();
});
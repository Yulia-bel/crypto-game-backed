import express from 'express';
import config from './config/app-config.js';
import authRouter from './routers/auth.js';
import mainRouter from './routers/main.js';
import adminRouter from './routers/admin.js';
import coinTicker from './database/cointicker.js';

const app = express();

app.use(express.json());

app.use('/', authRouter);
app.use('/api', mainRouter);
app.use('/admin', adminRouter);

app.listen(config.app.port);

coinTicker.watch();

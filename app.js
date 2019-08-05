'use strict';
import express from 'express';
import envs from './config';

const app = express();
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(envs.PORT, () => console.log(`Example app listening on port ${envs.PORT}!`))
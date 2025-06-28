import express, { Request, Response } from 'express';
require('dotenv').config();
export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Well come to E-Commerce');
});

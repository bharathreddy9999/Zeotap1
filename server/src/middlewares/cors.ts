import { Request, Response, NextFunction } from 'express';

const cors = (req: Request, res: Response, next: NextFunction) => {
  // Allow all origins in development
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Or specify allowed origins:
  // const allowedOrigins = ['https://your-client-app.vercel.app', 'http://localhost:5173'];
  // const origin = req.headers.origin;
  // if (origin && allowedOrigins.includes(origin)) {
  //   res.setHeader('Access-Control-Allow-Origin', origin);
  // }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
};

export default cors;

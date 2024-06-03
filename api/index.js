import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
import authrouter from './routes/authRoute.js';


dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());    // for taking data from user/form

app.listen(3000, (req, res) => {
  console.log('server is running on port 3000 ');
});

app.use('/api/user', userRouter);
app.use('/api/auth',authrouter)

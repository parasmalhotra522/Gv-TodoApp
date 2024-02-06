import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ToDoRouter from './src/routes/Note.routes.js';
import cors from 'cors';
import TasksRouter from './src/routes/Tasks.routes.js';

// if we want to configure the application to only accept the connection request from certain end point
// const corsOptions = {
//   origin: 'http://localhost:3000',  // replace with your frontend's URL
//   optionsSuccessStatus: 200,  // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(corsOptions));
const app = express();
const port = 8081;
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect('mongodb://localhost:27017/GrandValleyInstitute', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected successfully!!');
  })
  .catch((err) => {
    console.log('Error connecting with database' + err);
    console.error(err);
    process.exit(1);
  });

  app.use("/api/v1/to-do", ToDoRouter);
  app.use("/api/v1/to-do/lists", TasksRouter);

  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });

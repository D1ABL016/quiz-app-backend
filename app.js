const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.js');


dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', authRouter);

app.listen(process.env.PORT, () => {    
  console.log(`Server is running on port ${process.env.PORT}`);
});
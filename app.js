const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.js');
const connectDB = require('./config/connectDB.js');

connectDB();

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/api/auth', authRouter);

app.get('/',(req,res)=>{
  return res.status(201).send("welcome tester")
})

app.listen(process.env.PORT, () => {    
  console.log(`Server is running on port ${process.env.PORT}`);
});
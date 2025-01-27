const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const db = await mongoose.connect(
            `${process.env.MONGO_URI}/${process.env.DB_NAME}`
          );
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('MongoDB connection failed',error);
        process.exit(1);
    }
    }

    module.exports = connectDB;
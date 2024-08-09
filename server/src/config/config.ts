// src/config/config.ts
import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 6969,
    mongoURI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/kicks-db',
};

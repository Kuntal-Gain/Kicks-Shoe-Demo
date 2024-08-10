// src/config/config.ts
import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 6969,
    mongoURI: process.env.MONGO_URI || 'mongodb+srv://kuntalgain17:iTY1oqXWwrebWsni@cluster0.jv4xw.mongodb.net',
};

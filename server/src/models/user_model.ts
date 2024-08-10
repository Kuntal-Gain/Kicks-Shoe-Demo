// src/models/user_model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    fname: string;
    lname: string;
    gender: string;
    email: string;
    password: string;
    isOnline: boolean;
}

const UserSchema: Schema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isOnline: { type: Boolean, default: false },
});

export default mongoose.model<IUser>('User', UserSchema);

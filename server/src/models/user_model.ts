// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    fname: string;
    lname: string;
    gender: string;
    email: string;
    password: string;
    isOnline: Boolean;
}

const UserSchema: Schema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isOnline: { type: Boolean, required: true }
});

export default mongoose.model<IUser>('users', UserSchema);

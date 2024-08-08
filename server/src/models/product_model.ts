import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
    productId: string;
    productName: string;
    price: number;
    colorOptions: string[];
    sizes: number[];
    description: string;
    previews: string[];
}

const ProductSchema: Schema = new Schema({
    productId: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    colorOptions: { type: [String], required: true },
    sizes: { type: [Number], required: true },
    description: { type: String, required: true },
    productPreview: { type: [String], required: true }
});

export default mongoose.model<IProduct>('Products', ProductSchema);
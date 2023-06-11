import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

export const db = {
    Product: productModel()
};

function productModel() {
    const schema = new Schema({
        name: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String},
        imageURL: {type: String}
    });

    return mongoose.models.Product || mongoose.model('Product', schema);
}
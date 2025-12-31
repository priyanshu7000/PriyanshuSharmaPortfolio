import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    timeStamp: { type: String, required: true }
});

contactSchema.plugin(uniqueValidator);
export default contactSchema;
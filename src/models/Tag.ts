import { Schema, model } from 'mongoose';

const TagSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Tag = model('Tag', TagSchema);

export default Tag;
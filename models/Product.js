import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: Number,
    rank: {
        type: Number,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },

});

export default mongoose.model('Product', ProductSchema);
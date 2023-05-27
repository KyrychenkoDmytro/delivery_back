import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },

    products: [{
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        },
        discount: Number,
    }],

    totalCost: {
        type: Number,
        required: true,
    },
    totalDiscount: {
        type: Number,
        required: true,
    },

});

export default mongoose.model('Order', OrderSchema);
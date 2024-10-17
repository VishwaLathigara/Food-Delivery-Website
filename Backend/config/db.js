import mongoose from 'mongoose';

export const connectDB =async() => {
    await mongoose.connect('mongodb+srv://blueemoon100:bluemoon@cluster0.xqhftd8.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}
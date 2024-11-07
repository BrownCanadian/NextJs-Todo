import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');
}

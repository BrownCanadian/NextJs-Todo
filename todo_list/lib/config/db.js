import mongoose from 'mongoose';
export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://rushaanchawla:a0i2Z2pWTPCvwGAn@cluster0.moxle.mongodb.net/todo-app')
    console.log('Connected to DB');
}
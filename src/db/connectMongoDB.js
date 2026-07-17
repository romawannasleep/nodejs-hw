import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    const dbName = process.env.MONGO_DB_NAME ?? 'notes';

    if (!mongoUrl) {
      throw new Error('MONGO_URL is not defined');
    }

    await mongoose.connect(mongoUrl, { dbName });
    console.log(
      `✅ MongoDB connection established successfully to database "${dbName}"`,
    );
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

import mongoose from 'mongoose';
import cache from 'memory-cache';

const cacheKey = 'mongoDBConnection';
const cacheDuration = 60000; // cache for 1 minute

const connectToDatabase = async () => {
    // Check if the connection is cached
    const cachedConnection = cache.get(cacheKey);
    if (cachedConnection) {
        return cachedConnection;
    }

    // If not cached, create a new connection
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        // Cache the connection
        cache.put(cacheKey, connection, cacheDuration);
        console.log('MongoDB connected');
        return connection;
    } catch (error) {
        console.error('Connection error', error);
        throw error;
    }
};

export default connectToDatabase;

import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dbConn = async (): Promise<any|string> => {
    const MongoServer = await MongoMemoryServer.create();
    const MONGOIO_URI = MongoServer.getUri();
    await mongoose.disconnect();
    await mongoose.connect(MONGOIO_URI, {
        dbName: "Weather"
    });
};

export default dbConn;
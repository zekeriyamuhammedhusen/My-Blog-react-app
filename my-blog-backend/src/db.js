import { MongoClient } from "mongodb";

let db;

async function ConnectToDb(cb) {
  const Client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ag2nidp.mongodb.net/`,
  );

  await Client.connect();

  db = Client.db("react-blog-db");
  cb();
}

export { db, ConnectToDb };

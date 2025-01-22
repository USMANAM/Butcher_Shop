import mongoose from "mongoose";

const connectDb = (url) => {
  mongoose
    .connect(url, { dbName: "butcher_shop" })
    .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};

export { connectDb };

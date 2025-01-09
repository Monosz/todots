import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

if (!MONGODB_URL) {
  console.error("Missing `MONGODB_URL` environment variable.");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("MongoDB error: ", e);
    process.exit(1);
  });

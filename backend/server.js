// general imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// database config
import { APIgetRandom } from "./routes/getIdea.js";
import { APIpostNew } from "./routes/postIdea.js";

// app settings
const PORT = process.env.PORT || 5000;

// app usage
export const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});

APIgetRandom(app);
APIpostNew(app);
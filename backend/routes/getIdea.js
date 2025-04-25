import { getRandomIdea } from "../database_config.js";

export const APIgetRandom = (app) => {
    app.get("/idea/randomize", (req, res) => {
        try {
            const data = getRandomIdea();

            if (!data) {
                return res.status(500).json({ errror: "No hay ideas en la base de datos." });
            };

            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ message: "Mi pana, esto no furula", error: err.message })
        };
    });
};
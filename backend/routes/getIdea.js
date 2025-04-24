import { getRandomIdea } from "../database_config";

export const APIgetRandom = app.get("/idea/randomize", (req, res) => {
    try {
        const data = getRandomIdea();

        if (!data) {
            return res.status(500).json({ errror: "No hay ideas en la base de datos." });
        };

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message })
    };
});
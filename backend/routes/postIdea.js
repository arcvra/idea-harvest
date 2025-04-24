import { postNewIdea } from "../database_config"

export const APIpostNew = (app) => {
    app.post("/idea/new", (req, res) => {
        const { title, description, category } = req.body;

        if (!title || !category) {
            return res.status(400).json({ error: "Faltan datos en el cuerpo de la petición." })
        }

        postNewIdea(title, description, category);
        res.status(201).json({ message: "Datos añadidos correctamente." })
    });
};
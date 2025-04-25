export default async function handler(req, res) {
    if (req.method === "POST") {
        const { idea } = req.body;

        try {
            const response = await fetch(`${process.env.SERVER_METHOD}://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/idea/new`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    newIdea: idea
                })
            });

            if (!response.ok) {
                throw new Error(`Error al enviar la idea: ${response.statusText}`);
            }

            const data = (await response).json();

            res.status(200).json(data);

        } catch (err) {
            console.error("Error al enviar datos al servidor:", err);
            res.status(500).json({ error: "Hubo un problema al enviar la idea" });
        }
    } else {
        res.status(405).json({ error: "Método no permitido" });
    }
}
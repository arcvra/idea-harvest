export async function postIdea(idea) {
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

        const data = await response.json();

        return data;

    } catch (err) {
        console.error("Error al enviar datos al servidor:", err);
        return { error: "Hubo un problema al enviar la idea" };
    }
}

export async function postIdea(title, description, category) {
    try {
        // const response = await fetch(`${process.env.SERVER_METHOD}://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/idea/new`, {
        const response = await fetch(`http://localhost:5000/idea/new`, { //TODO: change to actual env data
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                category: category
            })
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Error al enviar la idea: ${response.statusText}. Detalles: ${errorDetails}`);
        }

        const data = await response.json();

        return data;

    } catch (err) {
        console.error("Error al enviar datos al servidor:", err);
        return { error: "Hubo un problema al enviar la idea" };
    }
}

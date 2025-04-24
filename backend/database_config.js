import Database from "better-sqlite3"
export const db = new Database("ideas_database.db", { verbose: console.log("Base de datos creada.") });

db.prepare(`
	CREATE TABLE IF NOT EXISTS ideas (
		id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
		title TEXT NOT NULL,
		description TEXT,
		category TEXT NOT NULL
	);
`).run();

const getRandomIdea = () => {

    const rowCount = db.prepare(`SELECT COUNT (*) AS count FROM ideas`).get().count;

    if (rowCount === 0) return null;

    const randomId = Math.floor(Math.random() * rowCount) + 1;

    const randomRow = db.prepare(`
		SELECT * FROM ideas
		WHERE id = ?
	`).get(randomId);

    return randomRow;
};

const postNewIdea = (param_title, param_description, param_category) => {
    db.prepare(`INSERT INTO ideas (title, description, category) VALUES (?, ?, ?)`).run(param_title, param_description, param_category);
};

export { getRandomIdea, postNewIdea }
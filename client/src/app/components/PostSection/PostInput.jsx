import styles from "@/styles/postSection.module.css";

export default function PostInput({ value, data }) {

    return (
        <label
            htmlFor="newIdea"
            aria-label="Post a new idea"
            className={styles.label}
        >
            <input
                id="newIdea"
                onChange={data}
                value={value}
                placeholder="Feeling inspired?"
                className={styles.input_fetch}
            />
        </label>
    )
}
import styles from "@/styles/postSection.module.css";

export default function PostDescription({ value, data }) {
    return (
        <label
            htmlFor="description"
            aria-label="Add a description to your title"
            className={styles.label}
        >
            <textarea
                id="description"
                onChange={data}
                value={value}
                placeholder="Explain yourself freely"
                className={styles.input_fetch}
            />
        </label>
    )
}
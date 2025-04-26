import PostInput from "@/components/PostSection/PostInput";
import { postIdea } from "@/lib/newIdea";
import { useState } from "react";
import PostButton from "./PostButton";
import PostDescription from "./PostDescription";

import styles from "@/styles/postSection.module.css";
export default function PostSection() {

    const [value, setValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        if (!value) {
            console.log("No hay valor definido. ")
        } else {
            let title = value;
            let description;
            if (descriptionValue === "") {
                description = null
            } else {
                description = descriptionValue
            };
            let category = "testing";
            postIdea(title, description, category);
            console.log(`Idea enviada: ${value}, ${descriptionValue}, ${category}`);

            setValue("");
            setDescriptionValue("");
        }
    }

    const handleDescriptionInput = (e) => {
        setDescriptionValue(e.target.value);
    }

    return (
        <section className={styles.section}>
            <PostInput value={value} data={handleInput} />
            <PostDescription value={descriptionValue} data={handleDescriptionInput} />
            <PostButton post={handleClick} />
        </section>
    )
}
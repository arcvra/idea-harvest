"use client";
import styles from "@/styles/buttons.module.css";
import { useState } from "react";

export default function FetchButton({ getIdea }) {
    const [state, setState] = useState("");

    const handleClick = () => {
        e.target;
    }

    return (
        <button onClick={handleClick} className={styles.fetchButton}> Get an idea </button>
    )
}
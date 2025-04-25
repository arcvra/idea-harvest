"use client"
import { useState } from "react";
import styles from "@/styles/buttons.module.css";

export default function PostInput({ data }) {

    return (
        <label
            htmlFor="newIdea"
            aria-label="Post a new idea"
            className={styles.label}
        >
            <input
                id="newIdea"
                onChange={data}
                placeholder="Feeling inspired?"
                className={styles.input_fetch}
            />
        </label>
    )
}
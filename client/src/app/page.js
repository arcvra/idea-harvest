"use client"

import styles from "@/styles/page.module.css";
import FetchButton from "./components/fetchButton";
import PostInput from "./components/postInput";
import { useState } from "react";
import { postIdea } from "@/lib/newIdea";

export default function Home() {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    postIdea(inputValue);
  };

  return (
    <div className={styles.container}>
      <FetchButton />
      <p>{value} </p>
      <PostInput data={handleInput} />
    </div>
  )
}
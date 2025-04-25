"use client"
import styles from "@/styles/page.module.css";
import FetchButton from "./components/fetchButton";
import PostSection from "./components/PostSection";

export default function Home() {


  return (
    <div className={styles.container}>
      <FetchButton />
      <PostSection />
    </div>
  )
}
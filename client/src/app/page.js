"use client"
import styles from "@/styles/page.module.css";
import PostSection from "./components/PostSection";

export default function Home() {


  return (
    <div className={styles.container}>
      <PostSection />
    </div>
  )
}
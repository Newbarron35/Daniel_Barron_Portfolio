import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";

export default function Projectpage() {
  return (
    <div className={styles.page}>
      <Header color="blue" title="What you getting at with the book, scripts, spit that shit out, man!" />
   </div>
  );
}

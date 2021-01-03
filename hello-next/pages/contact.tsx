import Head from "next/head";
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contacts title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className={styles.heading}>This is contacts page</h2>
    </div>
  );
}

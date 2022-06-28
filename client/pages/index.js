import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [url, setUrl] = useState(null);

  const remoteUpload = () => {
    event.preventDefault();
    fetch("http://192.168.1.71:5000/api/download", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url }),
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={remoteUpload}>
        <input type='url' required onChange={(e) => setUrl(e.target.value)} />
        <button type='submit'>Pobierz</button>
      </form>
    </div>
  );
}

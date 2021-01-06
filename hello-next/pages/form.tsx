import { useState } from "react";
import jwt from 'jsonwebtoken';
import styles from "../styles/form.module.scss";

export default function Form() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [message, setMessage] = useState<string>("You are not logged in");

  async function submitForm() {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token);
      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? "an admin" : "Not an admin"}
        `
      );
    } else {
      setMessage('Something went Wrong')
    }
  }
  return (
    <div className={styles.container}>
      <h1>{message}</h1>
      <form method="POST" action="/api/login">
        <input
          type="text"
          name="username"
          id="user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="button" value="Login" onClick={submitForm} />
      </form>
    </div>
  );
}

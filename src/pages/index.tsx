import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("username", username);
    // Здесь можно добавить логику для сохранения имени в глобальном состоянии
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Head>
          <title>Главная страница</title>
        </Head>

        <div className="content">
          <h2>Начать</h2>
          <h3>Ваше имя</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Как вас зовут?"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </form>
          <div className="separator" />
          <div className="buttons">
            <Link href="/calculator" passHref>
              <button>Открыть калькулятор</button>
            </Link>
            <Link href="/password-generator" passHref>
              <button>Открыть генератор</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

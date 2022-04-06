import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styles from "../styles/Home.module.css";
import { activateLasers } from "./api/hello";

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={"text-3xl"}>
          ログイン
        </h1>

<form className="px-6 mt-4 mb-4 w-full,text-align">
  <input className = "border-2 border-black"></input>
</form>
<form className="px-6 mt-4 mb-4 w-full,text-align">
<input className = "border-2 border-black"></input>
</form>
        <h1 className={"text-3xl"}>
        <button onClick={() =>activateLasers()}>
         ログイン
        </button></h1>
        
      </main>
    </div>
  );
};

export default Home;
